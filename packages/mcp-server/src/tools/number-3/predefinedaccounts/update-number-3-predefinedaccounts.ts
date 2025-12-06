// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox_mcp_wrapper/fortnox-mcp-api/filtering';
import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.predefinedaccounts',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/predefinedaccounts/{name}',
  operationId: 'update_26',
};

export const tool: Tool = {
  name: 'update_number_3_predefinedaccounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAn endpoint for updating a Predefined Account. Predefined Accounts are identified by their <em>name</em>-field, and as such must be unique.\n Some Predefined Accounts distinguish between Goods and Services.\n In this case, the former retains the original name whereas the latter ends with a 2. Such as <em>SALES</em> and <em>SALES2</em>.\n Accounts are chosen from the Account Registry, and if you have EasyVat enabled then the new EasyVat Predefined Accounts (<em>SALES_25_SE</em>, etc.) have certain restrictions on the accounts that can be selected.\n Refer to the table below.\n\n <table>\n     <caption>Account restrictions when EasyVat has been enabled.</caption>\n     <tr>\n         <th>Name</th>\n         <th>VAT Code</th>\n         <th>Restrictions</th>\n     </tr>\n     <tr>\n         <td>SALES_25_SE</td>\n         <td>MP1</td>\n         <td>Must have a compatible VAT Code.</td>\n     </tr>\n     <tr>\n         <td>SALES_12_SE</td>\n         <td>MP2</td>\n         <td>Must have a compatible VAT Code.</td>\n     </tr>\n     <tr>\n         <td>SALES_6_SE</td>\n         <td>MP3</td>\n         <td>Must have a compatible VAT Code.</td>\n     </tr>\n     <tr>\n         <td>SALES_0_SE</td>\n         <td>MF</td>\n         <td>Must have a compatible VAT Code.</td>\n     </tr>\n </table>\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n     <caption>Errors that can be raised by this endpoint.</caption>\n     <tr>\n         <th>Error Code</th>\n         <th>HTTP Code</th>\n         <th>Description</th>\n         <th>Solution</th>\n     </tr>\n     <tr>\n         <td>2001265</td>\n         <td>400</td>\n         <td>The provided account is invalid. It either has not been provided, does not exist, or is inactive.</td>\n         <td>Verify that an account has been provided and that it exists and is active.</td>\n     </tr>\n     <tr>\n         <td>2002462</td>\n         <td>400</td>\n         <td>The account is not in a valid format.</td>\n         <td>Verify that the format of the account is correct. It has to consist of 4 digits.</td>\n     </tr>\n     <tr>\n         <td>2000729</td>\n         <td>400</td>\n         <td>A Predefined Account has not been provided.</td>\n         <td>Verify that a valid Predefined Account has been provided as a PATH-parameter.</td>\n     </tr>\n     <tr>\n         <td>2004052</td>\n         <td>400</td>\n         <td>The provided account has an incompatible VAT Code. Only applies if EasyVat has been enabled.</td>\n         <td>Verify that the provided account has a VAT Code that is compatible with the selected Predefined Account. Refer to the table above for more information about compatibility.</td>\n     </tr>\n </table>\n\n If you have activated EasyVat, you can read more about how to use the new Predefined Accounts with your documents in their respective api documentation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/predefined_account_wrap',\n  $defs: {\n    predefined_account_wrap: {\n      type: 'object',\n      properties: {\n        PreDefinedAccount: {\n          $ref: '#/$defs/predefined_account'\n        }\n      },\n      required: [        'PreDefinedAccount'\n      ]\n    },\n    predefined_account: {\n      type: 'object',\n      properties: {\n        Account: {\n          type: 'integer'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Name: {\n          type: 'string'\n        }\n      },\n      required: [        'Account'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      PreDefinedAccount: {
        $ref: '#/$defs/predefined_account',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name', 'PreDefinedAccount'],
    $defs: {
      predefined_account: {
        type: 'object',
        properties: {
          Account: {
            type: 'integer',
          },
          '@url': {
            type: 'string',
          },
          Name: {
            type: 'string',
          },
        },
        required: ['Account'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { name, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.predefinedaccounts.update(name, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
