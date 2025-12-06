# Fortnox Mcp Wrapper TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:noahboekelman/fortnox-mcp-wrapper-typescript.git
cd fortnox-mcp-wrapper-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export FORTNOX_MCP_WRAPPER_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y fortnox_mcp_wrapper/fortnox-mcp-api`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "fortnox_mcp_wrapper_api": {
      "command": "node",
      "args": [
        "/path/to/local/fortnox-mcp-wrapper-typescript/packages/mcp-server",
        "--client=claude",
        "--tools=dynamic"
      ],
      "env": {
        "FORTNOX_MCP_WRAPPER_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ------------------------------- | ------------------------ | --------------- |
| `x-fortnox-mcp-wrapper-api-key` | `apiKey` | bearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "fortnox_mcp_wrapper_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "fortnox_mcp_wrapper/fortnox-mcp-api/server";

// import a specific tool
import listAccountChartsNumber3 from "fortnox_mcp_wrapper/fortnox-mcp-api/tools/number-3/list-account-charts-number-3";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [listAccountChartsNumber3, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `number_3`:

- `list_account_charts_number_3` (`read`): Retrieves a list of all the available account charts.
- `list_print_templates_number_3` (`read`): Retrieve a list of print templates
- `retrieve_company_information_number_3` (`read`): Retrieve the Company Information
- `retrieve_eu_vat_limit_regulation_number_3` (`read`): Retrieve details about eu vat limit
- `retrieve_sie_file_number_3` (`read`): Retrieves a SIE file as streamed content
- `retrieve_user_information_number_3` (`read`): Retrieve user information
  Use this endpoint to retrieve user information related to the used access token
- `retrieve_vacation_debt_basis_number_3` (`read`): Retrieve a specific vacation debt basis for a posted voucher

### Resource `number_3.absencetransactions`:

- `create_number_3_absencetransactions` (`write`): Create a new absence transaction
- `retrieve_number_3_absencetransactions` (`read`): Retrieves a specific transaction
- `update_number_3_absencetransactions` (`write`): Update a single absence transaction
- `list_number_3_absencetransactions` (`read`): Supports query-string parameters <strong>employeeid</strong> and <strong>date</strong> for filtering the result.
- `delete_number_3_absencetransactions` (`write`): Delete an absence transaction
- `retrieve_by_date_and_code_number_3_absencetransactions` (`read`): Retrieves a list of absence transactions for an employee on a specific date and cause code.

### Resource `number_3.accounts`:

- `create_number_3_accounts` (`write`): The created account will be returned if everything succeeded, if there was any problems an error will be returned.
- `retrieve_number_3_accounts` (`read`): Retrieves the details of an account. You need to supply the unique account number that was returned when the account was created or retrieved from the list of accounts.
- `update_number_3_accounts` (`write`): Updates the specified account with the values provided in the properties. Any property not provided will be left unchanged.
  Note that even though the account number is writeable you can&acute;t change the number of an existing account.
- `list_number_3_accounts` (`read`): The accounts are returned sorted by account number with the lowest number appearing first.
- `delete_number_3_accounts` (`write`): Deletes the specified account in the users current year

### Resource `number_3.archive`:

- `retrieve_number_3_archive` (`read`): If no path is provided the root will be returned.
  Providing fileId will return given file from fileattachments.
- `delete_file_number_3_archive` (`write`): Delete a single file
- `remove_files_number_3_archive` (`write`): Please note that removing a folder will also resulting in removal of all the contents within!
- `retrieve_file_number_3_archive` (`read`): Providing fileId will return given file from fileattachments.
- `upload_file_number_3_archive` (`write`): If not path or folderId is provided, the file will be uploaded to the root directory.

### Resource `number_3.articlefileconnections`:

- `create_number_3_articlefileconnections` (`write`): Create an article file connection
- `retrieve_number_3_articlefileconnections` (`read`): Retrieve a single article file connection
- `list_number_3_articlefileconnections` (`read`): The article file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
- `remove_number_3_articlefileconnections` (`write`): Remove an article file connection

### Resource `number_3.articles`:

- `create_number_3_articles` (`write`): The created article will be returned if everything succeeded, if there was any problems an error will be returned.
- `retrieve_number_3_articles` (`read`): Retrieves the details of an article. You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.
- `update_number_3_articles` (`write`): Updates the specified article with the values provided in the properties. Any property not provided will be left unchanged.
  You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.
  Note that even though the article number is writeable you can not change the number of an existing article.
- `list_number_3_articles` (`read`): Retrieves a list of articles. The articles are returned sorted by article number with the lowest number appearing first.
- `delete_number_3_articles` (`write`): <p>Deletes the article permanently.</p>
   <p>You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.</p>

### Resource `number_3.articleurlconnections`:

- `create_number_3_articleurlconnections` (`write`): Create an article url connection
- `retrieve_number_3_articleurlconnections` (`read`): Retrieve a single article url connection
- `update_number_3_articleurlconnections` (`write`): Update an article url connection
- `list_number_3_articleurlconnections` (`read`): The article url connections register can return a list of records or a single record. By specifying an id in the URL, a single record will be returned. Not specifying an id will return a list of records.
- `remove_number_3_articleurlconnections` (`write`): Remove an article url connection

### Resource `number_3.assetfileconnections`:

- `create_number_3_assetfileconnections` (`write`): Create an asset file connection
- `list_number_3_assetfileconnections` (`read`): The asset register can return a list of assets or a single asset. By specifying a FileId in the URL, a single asset will be returned. Not specifying a FileId will return a list of records.
- `delete_number_3_assetfileconnections` (`write`): Remove an asset file connection

### Resource `number_3.assets`:

- `create_number_3_assets` (`write`): The created asset will be returned if everything succeeded, if there was any problems an error will be returned.
- `retrieve_number_3_assets` (`read`): Retrieve a single asset
- `update_number_3_assets` (`write`): The updated asset will be returned if everything succeeded, if there were any problems an error will be returned.
- `list_number_3_assets` (`read`): Retrieve a list of assets
- `delete_number_3_assets` (`write`): By specifying a {GivenNumber} in the URL a single &quot;Not active&quot; asset or asset with a type &quot;Not depreciable&quot; can be deleted. By specifying a {GivenNumber} in the URL a single &quot;Active&quot; or &quot;Fully depreciated&quot; assets can be voided and in this case in request body voiddate should be provided, otherwise it will use todays date.
- `change_ob_number_3_assets` (`write`): The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
- `depreciate_number_3_assets` (`write`): The created vouchers list will be returned if everything succeeded, if there was any problems an error will be returned.
- `list_depreciations_number_3_assets` (`read`): Retrieves a list of assets to depreciate.
- `scrap_number_3_assets` (`write`): The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
- `sell_number_3_assets` (`write`): Partial sell or full sell of an asset.
- `write_down_number_3_assets` (`write`): The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.
- `write_up_number_3_assets` (`write`): The updated asset will be returned if everything succeeded, if there was any problems an error will be returned.

### Resource `number_3.assets.types`:

- `create_assets_number_3_types` (`write`): Create an asset type
- `retrieve_assets_number_3_types` (`read`): Retrieve an asset type
- `update_assets_number_3_types` (`write`): Update an asset type
- `list_assets_number_3_types` (`read`): Retrieve a list of asset types
- `delete_assets_number_3_types` (`write`): Delete an asset type

### Resource `number_3.attendancetransactions`:

- `create_number_3_attendancetransactions` (`write`): Create a new attendance transaction
- `retrieve_number_3_attendancetransactions` (`read`): Retrieves a specific transaction
- `update_number_3_attendancetransactions` (`write`): Update a single attendance transaction
- `list_number_3_attendancetransactions` (`read`): Supports query-string parameters <strong>employeeid</strong> and <strong>date</strong> for filtering the result.
- `delete_number_3_attendancetransactions` (`write`): Delete an attendance transaction
- `retrieve_by_date_and_code_number_3_attendancetransactions` (`read`): Retrieves a list of attendance transaction for an employee on a specific date and cause code.

### Resource `number_3.contractaccruals`:

- `create_number_3_contractaccruals` (`write`): Create a contract accrual
- `retrieve_number_3_contractaccruals` (`read`): Retrieve a single contract accrual
- `update_number_3_contractaccruals` (`write`): Update a contract accrual
- `list_number_3_contractaccruals` (`read`): The contract accruals register can return a list of records or a single record. By specifying a DocumentNumber in the URL, a single record will be returned. Not specifying a DocumentNumber will return a list of records.
- `delete_number_3_contractaccruals` (`write`): Remove a contract accrual

### Resource `number_3.contracts`:

- `create_number_3_contracts` (`write`): Create a contract
- `retrieve_number_3_contracts` (`read`): Retrieve a single contract
- `update_number_3_contracts` (`write`): Note that there are two approaches for updating the rows on a contract.

  If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the contract needs to be provided.

  If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the contract then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time a contract is updated.

  When the InvoiceDiscount value is set on the rows and the Contract, the value set on the Contract takes precedence over the row-level InvoiceDiscount.

- `list_number_3_contracts` (`read`): Retrieve a list of contracts
- `create_invoice_number_3_contracts` (`write`): Create invoice from contract
- `finish_number_3_contracts` (`write`): Set a contract as finished
- `increase_invoice_count_number_3_contracts` (`write`): Increases the invoice count without creating an invoice

### Resource `number_3.contracttemplates`:

- `create_number_3_contracttemplates` (`write`): Create a contract template
- `retrieve_number_3_contracttemplates` (`read`): Retrieve a single contract template
- `update_number_3_contracttemplates` (`write`): Update a contract template
- `list_number_3_contracttemplates` (`read`): The contract template resource can return a list of records or a single record. By specifying a TemplateNumber in the URL, a single record will be returned. Not specifying a TemplateNumber will return a list of records.

### Resource `number_3.costcenters`:

- `create_number_3_costcenters` (`write`): Create a cost center
- `retrieve_number_3_costcenters` (`read`): Retrieve a single cost center
- `update_number_3_costcenters` (`write`): Update a cost center
- `list_number_3_costcenters` (`read`): The cost centers register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
- `delete_number_3_costcenters` (`write`): Remove a cost center

### Resource `number_3.currencies`:

- `create_number_3_currencies` (`write`): Create a currency
- `retrieve_number_3_currencies` (`read`): Retrieve a single currency
- `update_number_3_currencies` (`write`): Update a currency
- `list_number_3_currencies` (`read`): The currency register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
- `delete_number_3_currencies` (`write`): Remove a currency

### Resource `number_3.customerreferences`:

- `create_number_3_customerreferences` (`write`): </p>
   <p>The created customer reference row will be returned if everything succeeded, if there was any problems an error will be returned.</p>
- `retrieve_number_3_customerreferences` (`read`): </p>
   <p>You need to supply the unique customer reference row id that was returned when the customer reference row was created or retrieved from the list of customer reference rows.</p>
- `update_number_3_customerreferences` (`write`): </p>
   <p>The updated customer reference row will be returned if everything succeeded, if there was any problems an error will be returned.</p>
   <p>You need to supply the unique customer reference row id of the customer reference row that you want to update.</p>
   <p>Only the properties provided in the request body will be updated, properties not provided will be left unchanged.</p>
   <p>CustomerNumber cannot be changed by this request.</p>
- `list_number_3_customerreferences` (`read`): </p>
- `delete_number_3_customerreferences` (`write`): </p>
   <p>Deletes the customer reference row permanently. If everything succeeded the response will be of the type 204, No content and the response body will be empty.</p>
   <p>If there was any problems an error will be returned.</p>
   <p>You need to supply the unique customer reference row id of the customer reference row that you want to delete.</p>

### Resource `number_3.customers`:

- `create_number_3_customers` (`write`): The created customer will be returned if everything succeeded, if there was any problems an error will be returned.
- `retrieve_number_3_customers` (`read`): You need to supply the unique customer number that was returned when the customer was created or retrieved from the list of customers.
- `update_number_3_customers` (`write`): <p>The updated customer will be returned if everything succeeded, if there was any problems an error will be returned.</p>
   <p>You need to supply the unique customer number of the customer that you want to update.</p>
   <p>Only the properties provided in the request body will be updated, properties not provided will left unchanged.</p>
- `list_number_3_customers` (`read`): The customers are returned sorted by customer number with the lowest number appearing first.
- `delete_number_3_customers` (`write`): Deletes the customer permanently. If everything succeeded the response will be of the type 204 \u2013 No content and the response body will be empty. If there was any problems an error will be returned.
  You need to supply the unique customer number of the customer that you want to delete.

### Resource `number_3.emailsenders`:

- `list_number_3_emailsenders` (`read`): Retrieve a list of all trusted and rejected senders

### Resource `number_3.emailsenders.trusted`:

- `delete_emailsenders_number_3_trusted` (`write`): Provide an id matching an email to delete.
- `add_emailsenders_number_3_trusted` (`write`): Add a new email address as trusted

### Resource `number_3.employees`:

- `create_number_3_employees` (`write`): EmployeeId is optional. If not supplied the program will generate a unique id.

  VacationDaysSaved and all registered and pending vacationdays are read only.

  Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied
  it must have one and only one record where FirstDay = '1970-01-01'.
  All FirstDay values must greater or equal to '1970-01-01' and unique.

  If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If
  MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied.
  If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'.
  All FirstDay values must greater or equal to '1970-01-01' and unique.

- `retrieve_number_3_employees` (`read`): ScheduleId, MonthlySalary and HourlyPay reflect current values, all
  ScheduleIds are returned in DatedSchedules and all MonthlySalary and
  HourlyPay pairs are returned in DatedWages.
- `update_number_3_employees` (`write`): Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied
  it must have one and only one record where FirstDay = '1970-01-01'.
  All FirstDay values must greater or equal to '1970-01-01' and unique.

  VacationDaysSaved and all registered and pending vacationdays are read only.

  If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If
  MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied.
  If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'.
  All FirstDay values must greater or equal to '1970-01-01' and unique.

- `list_number_3_employees` (`read`): ScheduleId, MonthlySalary and HourlyPay reflect current values, all
  ScheduleIds are returned in DatedSchedules and all MonthlySalary and
  HourlyPay pairs are returned in DatedWages.

### Resource `number_3.expenses`:

- `create_number_3_expenses` (`write`): Create an expense
- `retrieve_number_3_expenses` (`read`): Retrieves expense information for specified expense.
- `list_number_3_expenses` (`read`): Retrieve expense codes.

### Resource `number_3.financialyears`:

- `create_number_3_financialyears` (`write`): Create a financial year
- `retrieve_number_3_financialyears` (`read`): Retrieve financial year by id
- `list_number_3_financialyears` (`read`): Add the query param to filter on specific date.

### Resource `number_3.inbox`:

- `retrieve_number_3_inbox` (`read`): Retrieve the root folder containing files and folders
- `remove_number_3_inbox` (`write`): Remove a file or folder
- `retrieve_file_number_3_inbox` (`read`): Retrieve a single file
- `upload_number_3_inbox` (`write`): Upload a file to a specific subdirectory.

### Resource `number_3.invoiceaccruals`:

- `create_number_3_invoiceaccruals` (`write`): Create an invoice accrual
- `retrieve_number_3_invoiceaccruals` (`read`): Retrieve a single invoice accrual
- `update_number_3_invoiceaccruals` (`write`): Update an invoice accrual
- `list_number_3_invoiceaccruals` (`read`): The invoice accruals register can return a list of records or a single record. By specifying a InvoiceNumber in the URL, a single record will be returned. Not specifying a InvoiceNumber will return a list of records.
- `remove_number_3_invoiceaccruals` (`write`): Remove an invoice accrual

### Resource `number_3.invoicepayments`:

- `create_number_3_invoicepayments` (`write`): Create an invoice payment
- `retrieve_number_3_invoicepayments` (`read`): Retrieve a single invoice payment
- `update_number_3_invoicepayments` (`write`): Update an invoice payment
- `list_number_3_invoicepayments` (`read`): Retrieve a list of invoice payments
- `bookkeep_number_3_invoicepayments` (`write`): Bookkeep an invoice payment
- `remove_number_3_invoicepayments` (`write`): Remove an invoice payment

### Resource `number_3.invoices`:

- `create_number_3_invoices` (`write`): An endpoint for creating an invoice. While it is possible to create an invoice without rows, we encourage you to add them if you can.
  Omitted values in the payload will be supplied by Predefined values which can be edited in the Fortnox account settings.
  Note that Predefined values will always be overwritten by values provided through the API.

  Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.

  This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.
   <table>
   <caption>Errors that can be raised by this endpoint.</caption>
   		<tr>
   			<th>Error Code</th>
   			<th>HTTP Code</th>
   			<th>Description</th>
   			<th>Solution</th>
   		</tr>
   		<tr>
   			<td>2004167</td>
   			<td>400</td>
   			<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>
   			<td>Supply each row which has a custom VAT rate with an account.</td>
   		</tr>
   </table>

  Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.
  This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice
  should be included in the report or not.
  A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be
  used when determining if an invoice should be included in the report or not, with one exception: if the invoice
  is created before 2021-12-01, and this property is false, the invoice will be excluded from the report.
  For invoices created 2021-12-01 and later, this property will have no effect.

- `retrieve_number_3_invoices` (`read`): Retrieve a single invoice
- `update_number_3_invoices` (`write`): Note that there are two approaches for updating the rows on an invoice.

  If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the invoice needs to be provided.

  If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the invoice then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an invoice is updated.

  Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.
  This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice
  should be included in the report or not.
  A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be
  used when determining if an invoice should be included in the report or not, with one exception: if the invoice
  is created before 2021-12-01, and this property is false, the invoice will be excluded from the report.
  For invoices created 2021-12-01 and later, this property will have no effect.

- `list_number_3_invoices` (`read`): Retrieve a list of invoices
- `bookkeep_number_3_invoices` (`write`): Bookkeep an invoice
- `cancel_number_3_invoices` (`write`): Cancel an invoice
- `credit_number_3_invoices` (`write`): The created credit invoice will be referenced in the property CreditInvoiceReference.
- `preview_number_3_invoices` (`read`): The difference between this and the print-endpoint is that property Sent is not set to TRUE.
- `print_number_3_invoices` (`read`): Print an invoice
- `print_reminder_number_3_invoices` (`read`): Print an invoice as reminder
- `send_einvoice_number_3_invoices` (`read`): Send an invoice as e-invoice
- `send_email_number_3_invoices` (`read`): You can use the properties in the EmailInformation to customize the e-mail message on each invoice.
- `send_eprint_number_3_invoices` (`read`): Send an invoice as e-print
- `set_done_number_3_invoices` (`write`): Used for marking a document as ready in the warehouse module. DeliveryState needs to be set to &quot;delivery&quot;.
- `set_sent_number_3_invoices` (`write`): Use this endpoint to set invoice as sent, without generating an invoice.

### Resource `number_3.labels`:

- `create_number_3_labels` (`write`): The created label will be returned if everything succeeded, if there was any problems an error will be returned.
- `update_number_3_labels` (`write`): Updates the specified label with the values provided in the properties. Any property not provided will be left unchanged.
- `list_number_3_labels` (`read`): Retrieve a list of labels
- `delete_number_3_labels` (`write`): Deletes the label and its connection to documents permanently.
  You need to supply the unique label id that was returned when the label was created or retrieved from the list of labels.

### Resource `number_3.modesofpayments`:

- `create_number_3_modesofpayments` (`write`): Create a mode of payment
- `retrieve_number_3_modesofpayments` (`read`): Retrieve a single mode of payment
- `update_number_3_modesofpayments` (`write`): Update a mode of payment
- `list_number_3_modesofpayments` (`read`): The modes of payments register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
- `delete_number_3_modesofpayments` (`write`): Remove a mode of payment

### Resource `number_3.noxfinansinvoices`:

- `retrieve_number_3_noxfinansinvoices` (`read`): <p>
  Retrieves the status and balance of an invoice sent to Fortnox Finans.
  You need to supply the invoice number in Fortox to retrieve the invoice.
   <p>
   <b>Note that</b> invoices sent with the old &quot;Noxbox&quot; platform will not have the &quot;ServiceName&quot;
   property in the response. This new property is added to the response if the invoice is
   sent with the new finance service.
   <p>
   Response explanation for <b>Service</b> and <b>ServiceName</b>
   <p>
   <b>Service:</b>
   <ul>
       <li><b>LEDGERBASE</b>: if the invoice is sent by using the old &quot;Noxbox&quot; platform, or the new finance service with the subtypes &quot;Service Full&quot; or &quot;Service Light&quot;. These services are explained above in the &quot;Fortnox Finans services&quot; section</li>
       <li><b>REMINDER</b>: If the invoice is sent by the new finance service, with the service Reminder Service</li>
   </ul>
   <p>
   <b>ServiceName</b> (only provided for <u>new finance service</u> invoices):
   <ul>
       <li><b>SERVICE_FULL</b>: Ledgerbase service <u>with</u> automatic reminders is used</li>
       <li><b>SERVICE_LIGHT</b>: Ledgerbase service <u>without</u> automatic reminders is used.</li>
       <li><b>REMINDER_SERVICE</b>: Reminder service is used</li>
   </ul>
- `pause_number_3_noxfinansinvoices` (`write`): <p>
  Pauses an invoice for up to 60 days. Pause means that Fortnox Finans reminder process will stop for the invoice. All invoices which have the status OPEN can be paused.
   <p>
   <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
   <p>
   <i>Parameters in the body:</i>
   <ul>
       <li><b>PausedUntilDate</b>: the invoice will be paused to and including this date.</li>
   </ul>
   <p>
- `report_payment_number_3_noxfinansinvoices` (`write`): <p>
  If a customer has paid some or all of the capital on an invoice directly to the client, this can be reported
  for bookkeeping purposes and reported to Fortnox Finans to actually deduct the paid amount from the invoice.
   <p>
   <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
   <p>
   <i>Parameters in the body:</i>
   <ul>
       <li><b>PaymentAmount</b>: a decimal field with the amount to report.</li>
       <li><b>PaymentMethodCode</b>: a string with the method code (e.g. BG, PG or other). Could be omitted if BookkeepPaymentInFortnox is false.</li>
       <li><b>PaymentMethodAccount</b>: an integer with the account number to bookkeep the payment on (e.g. 1920 or other). Could be omitted if BookkeepPaymentInFortnox is false.</li>
       <li><b>ClientTakesFees</b>: a boolean indicating if the client should take the customer fees or not.</li>
       <li><b>BookkeepPaymentInFortnox</b>: a boolean indicating if the payment should be bookkept in Fortnox or not. Usually the payment should be bookkept.</li>
       <li><b>ReportToFinance</b>: a boolean indicating if the payment should be reported to Fortnox Finans or not. Usually the payment should be reported.</li>
   </ul>
   <p>
- `send_number_3_noxfinansinvoices` (`write`): <p>
  When sending an invoice with Fortnox Finans you will get the invoice status returned if everything succeeded,
  if there were any problems, an error will be returned.
   <p>
   Please note that it can take 1 min to several hours before you will get back status, OCR number and link to
   PDF document, meanwhile the invoice will have status UNKNOWN or NOT_AUTHORIZED.
   <p>
   Fortnox Finans is currently only accepting invoices in SEK
   <p>
   <i>Parameters in the body:</i>
   <ul>
       <li><b>InvoiceNumber</b>: the invoice number for the invoice which should be sent with Fortnox Finans</li>
       <li><b>SendMethod</b>: how to send the invoice; EMAIL, LETTER, EINVOICE or NONE</li>
       <li><b>Service</b>: which service to use; LEDGERBASE or REMINDER</li>
   </ul>
   <p>
- `stop_number_3_noxfinansinvoices` (`write`): <p>
  Removes the invoice from Fortnox Finans process. The invoice can still be handled manually, but no further automatic process will be applied
   <p>
   <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
- `take_fees_number_3_noxfinansinvoices` (`write`): <p>
  If fees have been added to an invoice, e.g. reminder fees, the client can choose to pay those fees instead of letting the customer pay.
   <p>
   <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform
- `unpause_number_3_noxfinansinvoices` (`write`): <p>
  Unpauses a paused invoice. If the invoice is manually paused, then this action will remove the pause status immediately. Invoices which are paused by the system cannot be unpaused.
   <p>
   <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform

### Resource `number_3.offers`:

- `create_number_3_offers` (`write`): An endpoint for creating an offer.

  Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.

  This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.
   <table>
   <caption>Errors that can be raised by this endpoint.</caption>
   		<tr>
   			<th>Error Code</th>
   			<th>HTTP Code</th>
   			<th>Description</th>
   			<th>Solution</th>
   		</tr>
   		<tr>
   			<td>2004167</td>
   			<td>400</td>
   			<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>
   			<td>Supply each row which has a custom VAT rate with an account.</td>
   		</tr>
   </table>

- `retrieve_number_3_offers` (`read`): Retrieve a single offer
- `update_number_3_offers` (`write`): Note that there are two approaches for updating the rows on an offer.

  If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the offer needs to be provided.

  If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the offer then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an offer is updated.

- `list_number_3_offers` (`read`): Retrieve a list of offers
- `cancel_number_3_offers` (`write`): Cancels given offer
- `create_invoice_number_3_offers` (`write`): Create invoice out of given offer
- `create_order_number_3_offers` (`write`): Create order out of given offer
- `preview_number_3_offers` (`read`): The difference between this and the print-endpoint is that property Sent is not set to TRUE.
- `print_number_3_offers` (`read`): Print given offer
- `send_email_number_3_offers` (`read`): You can use the properties in the EmailInformation to customize the e-mail message on each offer.
- `set_sent_number_3_offers` (`write`): Use this endpoint to set offer as sent, without generating an offer.

### Resource `number_3.orders`:

- `create_number_3_orders` (`write`): An endpoint for creating an order.

  Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.

  This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.
   <table>
   <caption>Errors that can be raised by this endpoint.</caption>
   		<tr>
   			<th>Error Code</th>
   			<th>HTTP Code</th>
   			<th>Description</th>
   			<th>Solution</th>
   		</tr>
   		<tr>
   			<td>2004167</td>
   			<td>400</td>
   			<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>
   			<td>Supply each row which has a custom VAT rate with an account.</td>
   		</tr>
   </table>

- `retrieve_number_3_orders` (`read`): Retrieve a single order
- `update_number_3_orders` (`write`): Note that there are two approaches for updating the rows on an order.

  If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the order needs to be provided.

  If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the order then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an order is updated.

- `list_number_3_orders` (`read`): Retrieve a list of orders
- `cancel_number_3_orders` (`write`): Cancels given order
- `create_invoice_number_3_orders` (`write`): Create invoice out of given order
- `preview_number_3_orders` (`read`): The difference between this and the print-endpoint is that property Sent is not set to TRUE.
- `print_number_3_orders` (`read`): Print given order
- `send_email_number_3_orders` (`read`): You can use the properties in the EmailInformation to customize the e-mail message on each order.
- `set_sent_number_3_orders` (`write`): Use this endpoint to set order as sent, without generating an order.

### Resource `number_3.predefinedaccounts`:

- `retrieve_number_3_predefinedaccounts` (`read`): Retrieve information for a specific account type
- `update_number_3_predefinedaccounts` (`write`): An endpoint for updating a Predefined Account. Predefined Accounts are identified by their <em>name</em>-field, and as such must be unique.
  Some Predefined Accounts distinguish between Goods and Services.
  In this case, the former retains the original name whereas the latter ends with a 2. Such as <em>SALES</em> and <em>SALES2</em>.
  Accounts are chosen from the Account Registry, and if you have EasyVat enabled then the new EasyVat Predefined Accounts (<em>SALES_25_SE</em>, etc.) have certain restrictions on the accounts that can be selected.
  Refer to the table below.

   <table>
       <caption>Account restrictions when EasyVat has been enabled.</caption>
       <tr>
           <th>Name</th>
           <th>VAT Code</th>
           <th>Restrictions</th>
       </tr>
       <tr>
           <td>SALES_25_SE</td>
           <td>MP1</td>
           <td>Must have a compatible VAT Code.</td>
       </tr>
       <tr>
           <td>SALES_12_SE</td>
           <td>MP2</td>
           <td>Must have a compatible VAT Code.</td>
       </tr>
       <tr>
           <td>SALES_6_SE</td>
           <td>MP3</td>
           <td>Must have a compatible VAT Code.</td>
       </tr>
       <tr>
           <td>SALES_0_SE</td>
           <td>MF</td>
           <td>Must have a compatible VAT Code.</td>
       </tr>
   </table>

  This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.
   <table>
       <caption>Errors that can be raised by this endpoint.</caption>
       <tr>
           <th>Error Code</th>
           <th>HTTP Code</th>
           <th>Description</th>
           <th>Solution</th>
       </tr>
       <tr>
           <td>2001265</td>
           <td>400</td>
           <td>The provided account is invalid. It either has not been provided, does not exist, or is inactive.</td>
           <td>Verify that an account has been provided and that it exists and is active.</td>
       </tr>
       <tr>
           <td>2002462</td>
           <td>400</td>
           <td>The account is not in a valid format.</td>
           <td>Verify that the format of the account is correct. It has to consist of 4 digits.</td>
       </tr>
       <tr>
           <td>2000729</td>
           <td>400</td>
           <td>A Predefined Account has not been provided.</td>
           <td>Verify that a valid Predefined Account has been provided as a PATH-parameter.</td>
       </tr>
       <tr>
           <td>2004052</td>
           <td>400</td>
           <td>The provided account has an incompatible VAT Code. Only applies if EasyVat has been enabled.</td>
           <td>Verify that the provided account has a VAT Code that is compatible with the selected Predefined Account. Refer to the table above for more information about compatibility.</td>
       </tr>
   </table>

  If you have activated EasyVat, you can read more about how to use the new Predefined Accounts with your documents in their respective api documentation.

- `list_number_3_predefinedaccounts` (`read`): Retrieve a list of all predefined accounts

### Resource `number_3.predefinedvoucherseries`:

- `retrieve_number_3_predefinedvoucherseries` (`read`): Retrieve a specific predefined voucher series
- `update_number_3_predefinedvoucherseries` (`write`): Update a predefined voucher series
- `list_number_3_predefinedvoucherseries` (`read`): Retrieve a list of predefined voucher series

### Resource `number_3.pricelists`:

- `create_number_3_pricelists` (`write`): Create a price list
- `retrieve_number_3_pricelists` (`read`): Retrieve a single price list
- `update_number_3_pricelists` (`write`): Update a price list
- `list_number_3_pricelists` (`read`): The price lists register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.

### Resource `number_3.prices`:

- `create_number_3_prices` (`write`): Create a price
- `retrieve_number_3_prices` (`read`): Retrieve a price for a specified article
- `update_number_3_prices` (`write`): Update a price
- `list_number_3_prices` (`read`): Retrieve a list of prices
- `delete_number_3_prices` (`write`): Delete a single price
- `retrieve_first_number_3_prices` (`read`): Retrieve the first price for the specified article
- `retrieve_sublist_number_3_prices` (`read`): The list contains a slimmer version of the prices. To get a full entity, use the GET with a price list, article number and from quantity.
- `update_first_number_3_prices` (`write`): Update the first price in the specified article

### Resource `number_3.projects`:

- `create_number_3_projects` (`write`): Create a project
- `retrieve_number_3_projects` (`read`): Retrieve a single project
- `update_number_3_projects` (`write`): Update a project
- `list_number_3_projects` (`read`): The project register can return a list of records or a single record. By specifying a ProjectNumber in the URL, a single record will be returned. If no ProjectNumber is provided, a list of records will be returned.
- `delete_number_3_projects` (`write`): Remove a project

### Resource `number_3.salarytransactions`:

- `create_number_3_salarytransactions` (`write`): Create a new salary transaction for an employee
- `retrieve_number_3_salarytransactions` (`read`): Retrieve a single salary transaction
- `update_number_3_salarytransactions` (`write`): Update a salary transaction
- `list_number_3_salarytransactions` (`read`): Supports query-string parameters <b>employeeid</b> and <b>date</b> for filtering the result.
- `delete_number_3_salarytransactions` (`write`): Delete a single salary transaction

### Resource `number_3.scheduletimes`:

- `retrieve_number_3_scheduletimes` (`read`): Retrieve a specific schedule time
- `update_number_3_scheduletimes` (`write`): Update a schedule time
- `reset_day_number_3_scheduletimes` (`write`): Reset schedule time

### Resource `number_3.settings`:

- `retrieve_company_number_3_settings` (`read`): Retrieve the company settings
- `retrieve_locked_period_number_3_settings` (`read`): If no date is returned, no period is locked.

### Resource `number_3.supplierinvoiceaccruals`:

- `create_number_3_supplierinvoiceaccruals` (`write`): Create a supplier invoice accrual
- `retrieve_number_3_supplierinvoiceaccruals` (`read`): Retrieve a single supplier invoice accrual
- `update_number_3_supplierinvoiceaccruals` (`write`): Update a supplier invoice accrual
- `list_number_3_supplierinvoiceaccruals` (`read`): The supplier invoice accruals register can return a list of records or a single record. By specifying a SupplierInvoiceNumber in the URL, a single record will be returned. Not specifying a SupplierInvoiceNumber will return a list of records.
- `delete_number_3_supplierinvoiceaccruals` (`write`): Remove a supplier invoice accrual

### Resource `number_3.supplierinvoiceexternalurlconnections`:

- `create_number_3_supplierinvoiceexternalurlconnections` (`write`): The connection will initially be inactive. It will show up once a file has been connected to the supplier invoice via POST /3/supplierinvoicefileconnections
- `retrieve_number_3_supplierinvoiceexternalurlconnections` (`read`): Retrieve a single supplier invoice external URL connection
- `update_number_3_supplierinvoiceexternalurlconnections` (`write`): Update a supplier invoice external URL connection
- `delete_number_3_supplierinvoiceexternalurlconnections` (`write`): Remove a supplier invoice external URL connection

### Resource `number_3.supplierinvoicefileconnections`:

- `create_number_3_supplierinvoicefileconnections` (`write`): Create an supplier invoice file connection
- `retrieve_number_3_supplierinvoicefileconnections` (`read`): Retrieve a single supplier invoice file connection
- `list_number_3_supplierinvoicefileconnections` (`read`): The supplier invoice file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
- `delete_number_3_supplierinvoicefileconnections` (`write`): Remove an supplier invoice file connection

### Resource `number_3.supplierinvoicepayments`:

- `create_number_3_supplierinvoicepayments` (`write`): Create a supplier invoice payment
- `retrieve_number_3_supplierinvoicepayments` (`read`): Retrieve a single supplier invoice payment
- `update_number_3_supplierinvoicepayments` (`write`): Update a supplier invoice payment
- `list_number_3_supplierinvoicepayments` (`read`): Retrieve a list of supplier invoice payments
- `delete_number_3_supplierinvoicepayments` (`write`): Remove a supplier invoice payment
- `bookkeep_number_3_supplierinvoicepayments` (`write`): Bookkeep a supplier invoice payment

### Resource `number_3.supplierinvoices`:

- `create_number_3_supplierinvoices` (`write`): Create a supplier invoice
- `retrieve_number_3_supplierinvoices` (`read`): Retrieve a single supplier invoice
- `update_number_3_supplierinvoices` (`write`): Update a supplier invoice
- `list_number_3_supplierinvoices` (`read`): Retrieve a list of supplier invoices
- `update_approvalbookkeep_number_3_supplierinvoices` (`write`): Approval of bookkeep of given supplier invoice
- `update_approvalpayment_number_3_supplierinvoices` (`write`): Approval of payment of given supplier invoice
- `update_bookkeep_number_3_supplierinvoices` (`write`): Bookkeep given supplier invoice
- `update_cancel_number_3_supplierinvoices` (`write`): Cancels given supplier invoice
- `update_credit_number_3_supplierinvoices` (`write`): The created credit invoice will be referenced in the property CreditReference.

### Resource `number_3.suppliers`:

- `create_number_3_suppliers` (`write`): Create a supplier
- `retrieve_number_3_suppliers` (`read`): Retrieve a single supplier
- `update_number_3_suppliers` (`write`): Update a supplier
- `list_number_3_suppliers` (`read`): The supplier register can return a list of records or a single record. By specifying a SupplierNumber in the URL, a single record will be returned. Not specifying a SupplierNumber will return a list of records.

### Resource `number_3.taxreductions`:

- `create_number_3_taxreductions` (`write`): Note that different types of tax reduction, i.e. ROT, RUT, or Green Technology, applications work differently.
  When creating an application for Green Technology, the field <em>TaxReductionAmounts</em> becomes mandatory as
  it is used to determine how much of the asked amount is intended for which type of work. Similarly, the <em>AskedAmount</em>
  field of the <em>TaxReduction</em> becomes optional, as it will always be considered to be equal to the sum of the <em>TaxReductionAmounts</em>.

  For the other types, ROT and RUT, this field is not required and should be omitted.

  Unlike earlier iterations of this endpoint, specifying the type of reduction for the provided <em>TaxReduction</em> (e.g. ROT, RUT, or Green)
  is not necessary as this value will always be equal to the type set on the provided document instead.

  This endpoint can raise a variety of validation errors, some of which are only relevant for Green Technology applications.
  Those errors will always return an HTTP Code of 400 and include, but are not limited to, those shown below:

   <table>
       <caption>Errors that can be raised by this endpoint.</caption>
       <tr>
           <th>Error Code</th>
           <th>Types</th>
           <th>Description</th>
           <th>Solution</th>
       </tr>
       <tr>
           <td>2000600</td>
           <td>ROT, RUT, GREEN</td>
           <td>The provided Social Security Number is already in use for this document.</td>
           <td>Verify that the Social Security Number is different from any other applicants already added.</td>
       </tr>
       <tr>
           <td>2004217, 2004218</td>
           <td>ROT, RUT, GREEN</td>
           <td>The total asked amount of the application is either in an invalid format or is negative.</td>
           <td>Verify that the <em>AskedAmount</em>-field is a positive number (0 is valid for Green Technology) and that it is an integer.</td>
       </tr>
       <tr>
           <td>2004209</td>
           <td>GREEN</td>
           <td>The <em>WorkType</em>-field contains a work type that is not valid for the given type of reduction.</td>
           <td>Ensure that the <em>WorkType</em> contains a valid type of work for Green Technology.</td>
       </tr>
       <tr>
           <td>2004263</td>
           <td>GREEN</td>
           <td>The <em>TaxReductionAmounts</em>-field is missing for a Green Technology application.</td>
           <td>Ensure that the field is included, that it is an array, and that each contained object denotes a specific type's asked amount.</td>
       </tr>
       <tr>
           <td>2004262</td>
           <td>GREEN</td>
           <td>There are more than one object denoting the asked amount for the same type in the <em>TaxReductionAmounts</em>-field.</td>
           <td>Ensure that there is only one object denoting the asked amount per type contained in the array.</td>
       </tr>
   </table>

- `retrieve_number_3_taxreductions` (`read`): Retrieve a single tax reduction
- `update_number_3_taxreductions` (`write`): Update a tax reduction
- `list_number_3_taxreductions` (`read`): Retrieve a list of tax reductions
- `delete_number_3_taxreductions` (`write`): Remove a tax reduction

### Resource `number_3.termsofdeliveries`:

- `create_number_3_termsofdeliveries` (`write`): Create a terms of delivery
- `retrieve_number_3_termsofdeliveries` (`read`): Retrieve a single terms of delivery
- `update_number_3_termsofdeliveries` (`write`): Update a terms of delivery
- `list_number_3_termsofdeliveries` (`read`): The terms of deliveries register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.

### Resource `number_3.termsofpayments`:

- `create_number_3_termsofpayments` (`write`): Create a term of payment
- `retrieve_number_3_termsofpayments` (`read`): Retrieve a single terms of payment
- `update_number_3_termsofpayments` (`write`): Update a term of payment
- `list_number_3_termsofpayments` (`read`): Retrieve a list of all terms of payments
- `delete_number_3_termsofpayments` (`write`): Remove a term of payment

### Resource `number_3.units`:

- `create_number_3_units` (`write`): Create a unit
- `retrieve_number_3_units` (`read`): Retrieve a single unit
- `update_number_3_units` (`write`): Update a unit
- `list_number_3_units` (`read`): The units register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
- `delete_number_3_units` (`write`): Remove a unit

### Resource `number_3.voucherfileconnections`:

- `create_number_3_voucherfileconnections` (`write`): Create a voucher file connection
- `retrieve_number_3_voucherfileconnections` (`read`): Retrieve a single voucher file connection
- `list_number_3_voucherfileconnections` (`read`): The voucher file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.
- `delete_number_3_voucherfileconnections` (`write`): Remove a voucher file connection

### Resource `number_3.vouchers`:

- `create_number_3_vouchers` (`write`): The created voucher will be returned if everything succeeded, if there was any problems an error will be returned.
  If no query param is used the voucher will be created in the preselected financial year. Go to the financialyears endpoint to read on how to retreive the Financial year id.
- `retrieve_number_3_vouchers` (`read`): Retrieve a specific voucher
- `list_number_3_vouchers` (`read`): Note that vouchers have two keys, one for voucher series and one for voucher number. The financial year is also specified for each voucher, this is due to the same voucher series and number is used each year.
  To get a unique voucher you need the voucher series, the voucher number and the financial year. These properties will always be returned where ever vouchers is used.

### Resource `number_3.vouchers.sublist`:

- `retrieve_vouchers_number_3_sublist` (`read`): Retrieve a list of vouchers for a specific series
- `list_vouchers_number_3_sublist` (`read`): Retrieve all vouchers for the current financial year

### Resource `number_3.voucherseries`:

- `create_number_3_voucherseries` (`write`): Create a voucher series
- `retrieve_number_3_voucherseries` (`read`): Retrieve a single voucher series
- `update_number_3_voucherseries` (`write`): Update a voucher series
- `list_number_3_voucherseries` (`read`): The voucher series register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.

### Resource `number_3.wayofdeliveries`:

- `create_number_3_wayofdeliveries` (`write`): Create a way of delivery
- `retrieve_number_3_wayofdeliveries` (`read`): Retrieve a single way of delivery
- `update_number_3_wayofdeliveries` (`write`): Update a way of delivery
- `list_number_3_wayofdeliveries` (`read`): The way of delivery register can return a list of records or a single record. By specifying a Code in the URL, a single record will be returned. Not specifying a Code will return a list of records.
- `delete_number_3_wayofdeliveries` (`write`): Remove a way of delivery

### Resource `api.fileattachments.attachments_v1`:

- `create_fileattachments_api_attachments_v1` (`write`): Attach files to one or more entities
- `update_fileattachments_api_attachments_v1` (`write`): Update attachment
- `list_fileattachments_api_attachments_v1` (`read`): Get attached files on an entity
- `delete_fileattachments_api_attachments_v1` (`write`): Detach file
- `count_fileattachments_api_attachments_v1` (`read`): List number of attachments
- `validate_fileattachments_api_attachments_v1` (`write`): Validates a list of attachments that will be included on send

### Resource `api.integration_developer`:

- `get_sales_info_api_integration_developer` (`read`): <p>
  Prerequisites
  The partner has an active developer account and a published integration that is purchased through Fortnox.
- `list_ratings_api_integration_developer` (`read`): List rating and reviews for integrations that you own

### Resource `api.integration_developer.users`:

- `get_user_info_integration_developer_api_users` (`read`): Fetch user information for a single published integration and tenant

### Resource `api.integration_partner.apps.sales_v1`:

- `get_sales_info_apps_integration_partner_api_sales_v1` (`read`): <h3>Prerequisites</h3>
  The partner has an active developer account and a published integration that is purchased through Fortnox.
- `get_sales_info_for_tenant_apps_integration_partner_api_sales_v1` (`read`): <h3>Prerequisites</h3>
  The partner has an active developer account and a published integration that is purchased through Fortnox.

### Resource `api.time`:

- `get_articles_api_time` (`read`): <p>
  <b>Response property descriptions:</b><br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>id</i></b> - The unique id of a basic common combination of article registrations. (The basic common combination means "user/purchase date/customer/project/cost center", which leads to a dialog with several article registrations.)<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>purchaseDate</i></b> - The date on which the article is purchased or registered for charging.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>ownerId</i></b> - The user ID who creates the basic common combination.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>version</i></b> - The version of the basic common combination (article dialog) being updated, which is used for handling the concurrency issue.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>registrationType</i></b> - It is always "ARTICLE" for article list endpoint.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b>Sub-Class - ArticleRegistration:</b><br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>id</i></b> - The unique id of an article registration.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>registrationId</i></b> - The id of the basic common combination.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>orderIndex</i></b> - the order index for the article registration in regard of the common combination.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>ownerId</i></b> - The user ID who owns the article registration.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>totalQuantity</i></b> - The quantity of the article.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>unitPrice</i></b> - The unit price connected to the article registration, which might be locked on an invoice/order basis or for non-invoiceable.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>unitCost</i></b> - The unit cost connected to the article registration, which might be locked on an invoice/order basis.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>nonInvoiceable</i></b> - If the article registration would be ignored for charging or not.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>note</i></b> - The note on the article registration.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>documentId</i></b> - The document ID which includes the article registration and is created in Invoicing application.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b><i>documentType</i></b> - The document type which could be "invoice" or "order".
   </p>
- `get_registrations_api_time` (`read`): <p>
  <b>Response property descriptions:</b><br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>id</i></b> - The unique id of the registration.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>userId</i></b> - The user ID who owns the registration.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>workedDate</i></b> - The date for which the registration is created.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>workedHours</i></b> - The time spent, or the time of absence.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>startTime</i></b> - The start of clock time.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>stopTime</i></b> - The end of clock time.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>invoiceText</i></b> - The text to be included in the invoice/order basis which would be used to create an invoice/order.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>note</i></b> - The note on the registration.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>chargeHours</i></b> - The time to be invoiced, or 0 for the absence, or locked for non-invoiceable.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>childId</i></b> - The child ID related to the absence registration of parental leave (FPE), which comes from Payroll application.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>nonInvoiceable</i></b> - If the registration would be ignored for charging or not.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>invoiceBasisId</i></b> - The ID of invoice/order basis which is used for creating an invoice/order.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>documentId</i></b> - The document ID which includes the registration and is created in Invoicing application.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>documentType</i></b> - The document type which could be "invoice" or "order".<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>unitCost</i></b> - The unit cost from the registration owner who takes the work.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <b><i>unitPrice</i></b> - The unit price for the service on the registration, which comes in priority from "invoice/order basis", "price group" or "service".
   <p>

### Resource `api.warehouse`:

- `retrieve_tenants_v4_api_warehouse` (`read`): <p>
  Check if current tenant has activated Fortnox Warehouse.

### Resource `api.warehouse.deliveries_v1`:

- `retrieve_deliveries_v1_warehouse_api_deliveries_v1` (`read`): List manual documents

### Resource `api.warehouse.deliveries_v1.inbounddeliveries`:

- `create_deliveries_v1_warehouse_api_inbounddeliveries` (`write`): <p>
  The <code>id</code> is set automatically.
- `retrieve_deliveries_v1_warehouse_api_inbounddeliveries` (`read`): Get manual inbound document
- `update_deliveries_v1_warehouse_api_inbounddeliveries` (`write`): Update manual inbound document
- `update_release_deliveries_v1_warehouse_api_inbounddeliveries` (`write`): <p>
  The document will be locked and bookkept.
   <p>
   The following error codes might be thrown:
    <dl>
    <dt>cannot_release_later_than_current_date</dt>
      <dd>Document date cannot be in the future.</dd>
    <dt>document_is_voided</dt>
      <dd>Document is voided.</dd>
    <dt>period_locked</dt>
      <dd>Document date is within a locked bookkeeping period.</dd>
    </dl>
- `update_void_deliveries_v1_warehouse_api_inbounddeliveries` (`write`): <p>
  A released manual inbound document might have connected outbounds, and can only be force voided.
  Note that a force void operation might cause a negative stock.
   <p>
   The following error codes might be thrown:
    <dl>
    <dt>void_linked_outbound</dt>
      <dd>If this document has any outbounds transactions connected to it.</dd>
    </dl>

### Resource `api.warehouse.deliveries_v1.outbounddeliveries`:

- `create_deliveries_v1_warehouse_api_outbounddeliveries` (`write`): <p>
  The <code>id</code> is set automatically.
- `retrieve_deliveries_v1_warehouse_api_outbounddeliveries` (`read`): Get manual outbound document
- `update_deliveries_v1_warehouse_api_outbounddeliveries` (`write`): <p>
  HTTP code 400 cannot_modify_released_document
  HTTP code 400 document_is_voided Document is voided.
  HTTP code 404 not found
- `update_release_deliveries_v1_warehouse_api_outbounddeliveries` (`write`): <p>
  The document will be locked and bookkept.
   <p>
   The following error codes might be thrown:
    <dl>
    <dt>cannot_release_later_than_current_date</dt>
      <dd>Document date cannot be in the future.</dd>
    <dt>document_is_voided</dt>
      <dd>Document is voided.</dd>
    <dt>period_locked</dt>
      <dd>Document date is within a locked bookkeeping period.</dd>
    </dl>
- `update_void_deliveries_v1_warehouse_api_outbounddeliveries` (`write`): Void manual outbound document

### Resource `api.warehouse.documentdeliveries.custom.documenttypes_v1`:

- `retrieve_custom_documentdeliveries_warehouse_api_documenttypes_v1` (`read`): Get custom document type
- `documenttypes_v1_custom_documentdeliveries_warehouse_api_documenttypes_v1` (`write`): Create type, if it doesn't already exists. Note that new custom document types are
  created automatically when you create custom documents, so normally
  you do not need to call this method.

  Throws HTTP 400 <code>referenceTypeNotAllowed</code> if the name of the type is not allowed.

- `retrieve_documenttypes_v1_custom_documentdeliveries_warehouse_api_documenttypes_v1` (`read`): List custom document types

### Resource `api.warehouse.documentdeliveries.custom.inbound_v1`:

- `retrieve_custom_documentdeliveries_warehouse_api_inbound_v1` (`read`): Get custom inbound document
- `update_custom_documentdeliveries_warehouse_api_inbound_v1` (`write`): Save custom inbound document
- `update_release_custom_documentdeliveries_warehouse_api_inbound_v1` (`write`): The document will be locked and bookkept.
  The inbound deliveries will affect available stock.
- `update_void_custom_documentdeliveries_warehouse_api_inbound_v1` (`write`): Voiding a document will undo the possible stock changes that the document had made,
  note that the document and the transactions created are not deleted. Some limitations apply, see below.

### Resource `api.warehouse.documentdeliveries.custom.outbound_v1`:

- `retrieve_custom_documentdeliveries_warehouse_api_outbound_v1` (`read`): Get custom outbound document
- `update_custom_documentdeliveries_warehouse_api_outbound_v1` (`write`): <br>
  If type is not known, it will be registered as belonging to the OUTBOUND category.<br>
  If type is an existing custom document type of category INBOUND an error is thrown.<br>
  If type is invalid an error is thrown.<br>
- `update_release_custom_documentdeliveries_warehouse_api_outbound_v1` (`write`): Release custom outbound document
- `update_void_custom_documentdeliveries_warehouse_api_outbound_v1` (`write`): Void custom outbound document

### Resource `api.warehouse.incominggoods_v1`:

- `retrieve_warehouse_api_incominggoods_v1` (`read`): Get Incoming Goods document
- `update_warehouse_api_incominggoods_v1` (`write`): Update Incoming Goods document
- `incominggoods_v1_warehouse_api_incominggoods_v1` (`write`): Create Incoming Goods document
- `retrieve_incominggoods_v1_warehouse_api_incominggoods_v1` (`read`): <p>
  List incoming goods documents matching the given parameters.
   </p>
   <p>
       Sortable fields:
       <code>id</code>,
       <code>has_delivery_note</code>,
       <code>delivery_note_id</code>,
       <code>supplier_number</code>,
       <code>date</code>
   </p>
- `update_completed_warehouse_api_incominggoods_v1` (`write`): Mark a released Incoming Goods document as Completed.
  Bookkeeping will be finalized.
  A Completed Incoming Goods document cannot be matched against
  any more Supplier Invoices.
- `update_release_warehouse_api_incominggoods_v1` (`write`): The document will be locked and bookkept.
  The inbound deliveries will affect available stock.
- `update_void_warehouse_api_incominggoods_v1` (`write`): Void a document.
  If an Incoming Goods document has been Completed, or matched against
  Supplier Invoice, it cannot be voided.

### Resource `api.warehouse.productionorders_v1`:

- `retrieve_warehouse_api_productionorders_v1` (`read`): Get Production Order document
- `update_warehouse_api_productionorders_v1` (`write`): <p>
  Note that you must submit the full Production Order document
  when updating.
- `productionorders_v1_warehouse_api_productionorders_v1` (`write`): <p>
  Set <code>itemId</code> to the item to be produced.
   <p>
   Set <code>quantity</code> to number of units to produce.
   <p>
   Set <code>startDate</code> to production start state.
   <p>
   ProductionState is set to <code>reserved</code> by default.
   It can also be <code>registered</code>. Then no reservations
   will be made (no quantities will be assigned to the <code>packageItems</code> yet).
   <p>
   Setting <code>outboundStockPointId</code> (where the <code>packageItems</code>
   will be taken from), and <code>inboundStockPointId</code> (where the
   produced item will be put) is mandatory multiple stockpoints has been activated
   in the warehouse settings.
   <p>
   Before the document is released, the <code>productionDate</code> must be set.
   <p>
   The <code>packageItems</code> to include is easiest to get by calling
   the method <code>getRequiredProductionParts</code>.
- `retrieve_productionorders_v1_warehouse_api_productionorders_v1` (`read`): List production orders

### Resource `api.warehouse.purchaseorders_v1`:

- `retrieve_warehouse_api_purchaseorders_v1` (`read`): Get Purchase Order
- `update_warehouse_api_purchaseorders_v1` (`write`): Update Purchase Order
- `purchaseorders_v1_warehouse_api_purchaseorders_v1` (`write`): Create Purchase Order
- `retrieve_csv_warehouse_api_purchaseorders_v1` (`read`): Get CSV list of Purchase Orders
- `retrieve_matches_warehouse_api_purchaseorders_v1` (`read`): <p>
  Get a list of <code>DocumentReference</code> of linked/connected purchase orders to incoming goods and/or invoice document.
- `retrieve_notes_warehouse_api_purchaseorders_v1` (`read`): <p>
  Get notes for a purchase order.
- `retrieve_purchaseorders_v1_warehouse_api_purchaseorders_v1` (`read`): <p>
  List purchase orders matching the given parameters.
   </p>
   <p>
   Sortable fields:
   <code>id</code>,
   <code>supplier_number</code>,
   <code>order_date</code>,
   <code>internal_reference</code>,
   <code>response_state</code>,
   <code>delivery_date</code>
   </p>
- `send_warehouse_api_purchaseorders_v1` (`write`): <p>
  Sends the purchase order with the specified <code>id</code> to the recipient and sets the purchase order state to SENT
- `sendpurchaseorders_warehouse_api_purchaseorders_v1` (`write`): Sends multiple purchase orders via email
- `update_complete_warehouse_api_purchaseorders_v1` (`write`): <p>
  The purchase order will be treated as fully received.
  Any remaining quantity will be ignored.
- `update_dropshipcomplete_warehouse_api_purchaseorders_v1` (`write`): <p>
  The dropship order will be treated as fully received.
  Any remaining quantity will be ignored.
- `update_partial_warehouse_api_purchaseorders_v1` (`write`): <p>
  Perform a partial update of a purchase order, see <code>PartialPurchaseOrder</code> for possible
  fields that are updateable.
- `update_void_warehouse_api_purchaseorders_v1` (`write`): Void Purchase Order

### Resource `api.warehouse.purchaseorders_v1.response`:

- `create_purchaseorders_v1_warehouse_api_response` (`write`): Update response state

### Resource `api.warehouse.status_v1`:

- `retrieve_stockbalance_warehouse_api_status_v1` (`read`): <p>
  Get stock balance for each stockpoint.
   <p>
   Returns a list of <code>itemId</code>, <code>stockPointCode</code>,
   <code>availableStock</code>, <code>inStock</code>.
   <p>
   (The difference between <code>availableStock</code> and <code>inStock</code>
   is the reserved amount.)

### Resource `api.warehouse.stockpoints_v1`:

- `retrieve_warehouse_api_stockpoints_v1` (`read`): <p>
  Get stock point by id or code.
- `update_warehouse_api_stockpoints_v1` (`write`): <p>
  Remember to supply the complete representation of stock point including stock locations.
- `delete_warehouse_api_stockpoints_v1` (`write`): <p>
  Note that it is not allowed to delete a stock point that is in use.
- `retrieve_multi_warehouse_api_stockpoints_v1` (`read`): <p>
  Get stock points by IDs.
   <p>
   Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include ALL stock points).
   <p>
   Stock locations are NOT included in the response.
- `retrieve_stocklocations_warehouse_api_stockpoints_v1` (`read`): <p>
  List stock locations for a specific stock point.
   <p>
   Optionally include a query parameter `q` to filter on stock location code or name.
- `retrieve_stockpoints_v1_warehouse_api_stockpoints_v1` (`read`): <p>
  List stock points, optionally include a query parameter `q` to filter on stock point code or name.
   <p>
   Use query param `state` to filter on ACTIVE, INACTIVE or ALL (default is to include only ACTIVE stock points).
   <p>
   Stock locations are NOT included in the response.
- `stockpoints_v1_warehouse_api_stockpoints_v1` (`write`): <p>
  Both <code>code</code> and <code>name</code> are mandatory.
   <p>
   If you want to set a custom delivery address for this stock point,
   you must remember to set <code>usingCompanyAddress</code> to <code>false</code>.
   <p>
   Returns 400 <code>alreadyexists</code> if a stock point with same code already exists.
   <p>
   Returns 400 <code>duplicatestocklocations</code> if two or more stock locations have the same code.

### Resource `api.warehouse.stocktaking_v1`:

- `retrieve_warehouse_api_stocktaking_v1` (`read`): Get Stock Taking document
- `update_warehouse_api_stocktaking_v1` (`write`): <p>
  Updates can only be done when state is <code>planning</code> or <code>started</code>.
   <p>
   All updatable fields (<code>date</code>, <code>name</code>, <code>responsible</code>,
   <code>state</code>, <code>sortingId</code>, <code>costCenterCode</code>, <code>projectId</code>)
   in the document head are set to supplied values.
   <p>
   You cannot set <code>state</code> to <code>completed</code> or <code>voided</code>. Use endpoints
   release or void for this.
   <p>
   The <code>date</code>-field is mandatory for documents in state <code>started</code>.
   <p>
   When state is <code>started</code> you use this endpoint for setting the stock taken quantity.
   Only existing rows can be updated - no new rows will be created (use the addRows endpoint for this).
   Only the supplied rows will be updated. I.e. you don't have to send in <strong>all</strong>
   document rows - just supply the rows you want to set stockTakenQuantity for. Just make sure
   to always include all the fields from the document head as mentioned above.
   <p>
   The mandatory fields on the (optionally supplied) rows are: <code>itemId</code>,
   <code>stockPointId</code>, <code>stockLocationId</code>.
   Fields <code>countedBy</code> and <code>stockTakenQuantity</code> are technically
   not mandatory, but will be set to null if you don't supply them.
- `delete_warehouse_api_stocktaking_v1` (`write`): <p>
  Permanently deletes a Stock Taking document and its rows.
   <p>
   Only for documents in state <code>planning</code> and <code>started</code>.
- `addrows_warehouse_api_stocktaking_v1` (`write`): <p>
  Add all matching candidate rows to a stock taking, as specified by filters.
- `retrieve_candidates_warehouse_api_stocktaking_v1` (`read`): <p>
  A candidate row is a combination of itemId, stockPointId and stockLocationId
  that can be added to the Stock Taking document.
   <p>
   Rows already added to the Stock Taking are excluded from this list.
- `retrieve_stocktaking_v1_warehouse_api_stocktaking_v1` (`read`): <p>
  Sortable fields:
  <code>id</code>,
  <code>name</code>,
  <code>date</code>,
  <code>responsible</code>,
  <code>state</code>
   </p>
- `stocktaking_v1_warehouse_api_stocktaking_v1` (`write`): <p>
  Create a new Stock Taking document.
  The only mandatory fields are <code>name</code> and <code>responsible</code>.
  <code>state</code> will be set to <code>planning</code> for a newly created document.
   <p>
   The <code>date</code>-field is not mandatory for documents in state <code>planning</code>.
   However, when you update the state to <code>started</code> you have to provide a date.

  <code>name</code> is a descriptive name of the stock taking.

  <code>responsible</code> is the name of the responsible for the stock taking.

  <code>rows</code> are added after creation by using the addRows-method.

  <code>projectId</code> and <code>costCenterCode</code> are used for book-keeping, when the
  Stock Taking document is released.
   <p>
   The field <code>usingStockPoints</code> is set from Warehouse system settings upon creation.
   If multiple stockpoints is used, then the rows will be per item-stockPoint-stockLocation.
   If multiple stockpoints is NOT used, then the rows will be per item-stockLocation.

- `update_release_warehouse_api_stocktaking_v1` (`write`): <p>
  The document will be locked and bookkept.
  The Stock Taking document state will be set to <code>completed</code>.
  The stock amount will be adjusted according to the stock taken quantity.
- `update_void_warehouse_api_stocktaking_v1` (`write`): <p>
  Sets the Stock Taking document state to <code>voided</code>.
   <p>
   Only documents in state <code>planning</code> and <code>started</code>
   can be voided. A <code>completed</code> document may not be voided.

### Resource `api.warehouse.stocktaking_v1.rows`:

- `create_stocktaking_v1_warehouse_api_rows` (`write`): <p>
  Add rows to a stock taking.
  If you add an already existing row noting happens.
- `list_stocktaking_v1_warehouse_api_rows` (`read`): Get Stock Taking Rows
- `delete_stocktaking_v1_warehouse_api_rows` (`write`): <p>
  Remove single row by id from the Stock Taking document.
- `delete_all_stocktaking_v1_warehouse_api_rows` (`write`): <p>
  Remove all rows matching the filter parameters from the Stock Taking document.

### Resource `api.warehouse.stocktransfer_v1`:

- `retrieve_warehouse_api_stocktransfer_v1` (`read`): Get stock transfer document
- `update_warehouse_api_stocktransfer_v1` (`write`): Update a stock transfer document
- `stocktransfer_v1_warehouse_api_stocktransfer_v1` (`write`): <p>
  Outbounds will be reserved in the from-place.
  Inbounds are created upon release of the stock transfer document.
- `update_release_warehouse_api_stocktransfer_v1` (`write`): <p>
  This will deliver all outbounds which are reserved in from-place, and
  create inbounds in the to-place.
  Nothing happens if you releasr an already released stock transfer document.
   <p>
   Returns <code>document_is_voided</code> if document is voided.
- `update_void_warehouse_api_stocktransfer_v1` (`write`): <p>
  Voiding a released stock transfer document is not allowed, and
  will return <code>cannot_modify_released_document</code>
