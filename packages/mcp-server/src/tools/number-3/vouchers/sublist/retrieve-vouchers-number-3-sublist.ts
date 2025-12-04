// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.vouchers.sublist',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/vouchers/sublist/{VoucherSeries}',
  operationId: 'listSeries',
};

export const tool: Tool = {
  name: 'retrieve_vouchers_number_3_sublist',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of vouchers for a specific series\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_voucher_list_item_list',\n  $defs: {\n    fortnox_voucher_list_item_list: {\n      type: 'object',\n      properties: {\n        Vouchers: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              '@url': {\n                type: 'string'\n              },\n              ApprovalState: {\n                type: 'integer'\n              },\n              Comments: {\n                type: 'string'\n              },\n              Description: {\n                type: 'string'\n              },\n              ReferenceNumber: {\n                type: 'string'\n              },\n              ReferenceType: {\n                type: 'string',\n                enum: [                  'INVOICE',\n                  'SUPPLIERINVOICE',\n                  'INVOICEPAYMENT',\n                  'SUPPLIERPAYMENT',\n                  'MANUAL',\n                  'CASHINVOICE',\n                  'ACCRUAL'\n                ]\n              },\n              TransactionDate: {\n                type: 'string',\n                format: 'date'\n              },\n              VoucherNumber: {\n                type: 'integer'\n              },\n              VoucherSeries: {\n                type: 'string'\n              },\n              Year: {\n                type: 'integer'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      VoucherSeries: {
        type: 'string',
      },
      financialyear: {
        type: 'integer',
        description: 'filter on financial year',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['VoucherSeries'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { VoucherSeries, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.vouchers.sublist.retrieve(VoucherSeries, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
