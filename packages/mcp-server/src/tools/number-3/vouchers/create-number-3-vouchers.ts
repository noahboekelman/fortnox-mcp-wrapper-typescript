// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.vouchers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/vouchers',
  operationId: 'create_47',
};

export const tool: Tool = {
  name: 'create_number_3_vouchers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe created voucher will be returned if everything succeeded, if there was any problems an error will be returned.\n If no query param is used the voucher will be created in the preselected financial year. Go to the financialyears endpoint to read on how to retreive the Financial year id.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_voucher_wrap',\n  $defs: {\n    fortnox_voucher_wrap: {\n      type: 'object',\n      properties: {\n        Voucher: {\n          type: 'object',\n          properties: {\n            Description: {\n              type: 'string'\n            },\n            TransactionDate: {\n              type: 'string',\n              format: 'date'\n            },\n            VoucherSeries: {\n              type: 'string'\n            },\n            Year: {\n              type: 'integer'\n            },\n            '@url': {\n              type: 'string'\n            },\n            ApprovalState: {\n              type: 'integer'\n            },\n            Comments: {\n              type: 'string'\n            },\n            CostCenter: {\n              type: 'string'\n            },\n            Project: {\n              type: 'string'\n            },\n            ReferenceNumber: {\n              type: 'string'\n            },\n            ReferenceType: {\n              type: 'string',\n              enum: [                'INVOICE',\n                'SUPPLIERINVOICE',\n                'INVOICEPAYMENT',\n                'SUPPLIERPAYMENT',\n                'MANUAL',\n                'CASHINVOICE',\n                'ACCRUAL'\n              ]\n            },\n            VoucherNumber: {\n              type: 'integer'\n            },\n            VoucherRows: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  Account: {\n                    type: 'integer'\n                  },\n                  CostCenter: {\n                    type: 'string'\n                  },\n                  Credit: {\n                    type: 'number'\n                  },\n                  Debit: {\n                    type: 'number'\n                  },\n                  Description: {\n                    type: 'string'\n                  },\n                  Project: {\n                    type: 'string'\n                  },\n                  Quantity: {\n                    type: 'number'\n                  },\n                  Removed: {\n                    type: 'boolean'\n                  },\n                  TransactionInformation: {\n                    type: 'string'\n                  }\n                },\n                required: [                  'Account'\n                ]\n              }\n            }\n          },\n          required: [            'Description',\n            'TransactionDate',\n            'VoucherSeries',\n            'Year'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      financialyear: {
        type: 'integer',
        description: 'Financial year id, used to determine which financial year the voucher is created in',
      },
      Voucher: {
        type: 'object',
        properties: {
          Description: {
            type: 'string',
          },
          TransactionDate: {
            type: 'string',
            format: 'date',
          },
          VoucherSeries: {
            type: 'string',
          },
          Year: {
            type: 'integer',
          },
          '@url': {
            type: 'string',
          },
          ApprovalState: {
            type: 'integer',
          },
          Comments: {
            type: 'string',
          },
          CostCenter: {
            type: 'string',
          },
          Project: {
            type: 'string',
          },
          ReferenceNumber: {
            type: 'string',
          },
          ReferenceType: {
            type: 'string',
            enum: [
              'INVOICE',
              'SUPPLIERINVOICE',
              'INVOICEPAYMENT',
              'SUPPLIERPAYMENT',
              'MANUAL',
              'CASHINVOICE',
              'ACCRUAL',
            ],
          },
          VoucherNumber: {
            type: 'integer',
          },
          VoucherRows: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                Account: {
                  type: 'integer',
                },
                CostCenter: {
                  type: 'string',
                },
                Credit: {
                  type: 'number',
                },
                Debit: {
                  type: 'number',
                },
                Description: {
                  type: 'string',
                },
                Project: {
                  type: 'string',
                },
                Quantity: {
                  type: 'number',
                },
                Removed: {
                  type: 'boolean',
                },
                TransactionInformation: {
                  type: 'string',
                },
              },
              required: ['Account'],
            },
          },
        },
        required: ['Description', 'TransactionDate', 'VoucherSeries', 'Year'],
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
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.vouchers.create(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
