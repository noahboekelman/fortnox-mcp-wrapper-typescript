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
  resource: 'number_3.predefinedvoucherseries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/predefinedvoucherseries',
  operationId: 'list_29',
};

export const tool: Tool = {
  name: 'list_number_3_predefinedvoucherseries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of predefined voucher series\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/predefinedvouchersery_list_response',\n  $defs: {\n    predefinedvouchersery_list_response: {\n      type: 'object',\n      properties: {\n        PreDefinedVoucherSeriesCollection: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/predefined_voucher_series'\n          }\n        }\n      }\n    },\n    predefined_voucher_series: {\n      type: 'object',\n      properties: {\n        VoucherSeries: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Name: {\n          type: 'string'\n        }\n      },\n      required: [        'VoucherSeries'\n      ]\n    }\n  }\n}\n```",
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
      await maybeFilter(jq_filter, await client.number3.predefinedvoucherseries.list()),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
