// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoicepayments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/supplierinvoicepayments',
  operationId: 'list_38',
};

export const tool: Tool = {
  name: 'list_number_3_supplierinvoicepayments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of supplier invoice payments\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/supplierinvoicepayment_list_response',\n  $defs: {\n    supplierinvoicepayment_list_response: {\n      type: 'object',\n      properties: {\n        SupplierInvoicePayments: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              InvoiceNumber: {\n                type: 'string'\n              },\n              '@url': {\n                type: 'string'\n              },\n              Amount: {\n                type: 'number'\n              },\n              Booked: {\n                type: 'boolean'\n              },\n              Currency: {\n                type: 'string'\n              },\n              CurrencyRate: {\n                type: 'number'\n              },\n              CurrencyUnit: {\n                type: 'number'\n              },\n              Number: {\n                type: 'integer'\n              },\n              PaymentDate: {\n                type: 'string',\n                format: 'date'\n              },\n              Source: {\n                type: 'string',\n                enum: [                  'manual',\n                  'direct'\n                ]\n              },\n              WriteOffExist: {\n                type: 'boolean'\n              }\n            },\n            required: [              'InvoiceNumber'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.supplierinvoicepayments.list()),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
