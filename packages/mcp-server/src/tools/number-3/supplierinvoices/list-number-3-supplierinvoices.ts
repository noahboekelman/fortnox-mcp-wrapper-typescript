// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/supplierinvoices',
  operationId: 'list_39',
};

export const tool: Tool = {
  name: 'list_number_3_supplierinvoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of supplier invoices\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/supplierinvoice_list_response',\n  $defs: {\n    supplierinvoice_list_response: {\n      type: 'object',\n      properties: {\n        SupplierInvoices: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              SupplierNumber: {\n                type: 'string'\n              },\n              '@url': {\n                type: 'string'\n              },\n              AuthorizerName: {\n                type: 'string'\n              },\n              Balance: {\n                type: 'string'\n              },\n              Booked: {\n                type: 'boolean'\n              },\n              Cancel: {\n                type: 'boolean'\n              },\n              CostCenter: {\n                type: 'string'\n              },\n              Credit: {\n                type: 'boolean'\n              },\n              Currency: {\n                type: 'string'\n              },\n              CurrencyRate: {\n                type: 'string'\n              },\n              CurrencyUnit: {\n                type: 'number'\n              },\n              DueDate: {\n                type: 'string',\n                format: 'date'\n              },\n              ExternalInvoiceNumber: {\n                type: 'string'\n              },\n              ExternalInvoiceSeries: {\n                type: 'string'\n              },\n              FinalPayDate: {\n                type: 'string',\n                format: 'date'\n              },\n              GivenNumber: {\n                type: 'string'\n              },\n              InvoiceDate: {\n                type: 'string',\n                format: 'date'\n              },\n              InvoiceNumber: {\n                type: 'string'\n              },\n              Project: {\n                type: 'string'\n              },\n              SupplierName: {\n                type: 'string'\n              },\n              Total: {\n                type: 'string'\n              },\n              Vouchers: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    Number: {\n                      type: 'integer'\n                    },\n                    ReferenceType: {\n                      type: 'string'\n                    },\n                    Series: {\n                      type: 'string'\n                    },\n                    Year: {\n                      type: 'integer'\n                    }\n                  }\n                }\n              }\n            },\n            required: [              'SupplierNumber'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'string',
        description: 'possibility to filter supplier invoices',
        enum: [
          'cancelled',
          'fullypaid',
          'unpaid',
          'unpaidoverdue',
          'unbooked',
          'pendingpayment',
          'authorizepending',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.supplierinvoices.list(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
