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
  resource: 'number_3.voucherseries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/voucherseries/{Code}',
  operationId: 'update_43',
};

export const tool: Tool = {
  name: 'update_number_3_voucherseries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a voucher series\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_voucher_series_wrap',\n  $defs: {\n    fortnox_voucher_series_wrap: {\n      type: 'object',\n      properties: {\n        VoucherSeries: {\n          $ref: '#/$defs/fortnox_voucher_series'\n        }\n      },\n      required: [        'VoucherSeries'\n      ]\n    },\n    fortnox_voucher_series: {\n      type: 'object',\n      properties: {\n        Code: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Approver: {\n          $ref: '#/$defs/fortnox_voucher_series_approver'\n        },\n        Description: {\n          type: 'string'\n        },\n        Manual: {\n          type: 'boolean'\n        },\n        NextVoucherNumber: {\n          type: 'integer'\n        },\n        Year: {\n          type: 'integer'\n        }\n      },\n      required: [        'Code'\n      ]\n    },\n    fortnox_voucher_series_approver: {\n      type: 'object',\n      properties: {\n        Id: {\n          type: 'integer'\n        },\n        Name: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Code: {
        type: 'string',
      },
      VoucherSeries: {
        $ref: '#/$defs/fortnox_voucher_series',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['Code', 'VoucherSeries'],
    $defs: {
      fortnox_voucher_series: {
        type: 'object',
        properties: {
          Code: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          Approver: {
            $ref: '#/$defs/fortnox_voucher_series_approver',
          },
          Description: {
            type: 'string',
          },
          Manual: {
            type: 'boolean',
          },
          NextVoucherNumber: {
            type: 'integer',
          },
          Year: {
            type: 'integer',
          },
        },
        required: ['Code'],
      },
      fortnox_voucher_series_approver: {
        type: 'object',
        properties: {
          Id: {
            type: 'integer',
          },
          Name: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Code, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.voucherseries.update(Code, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
