// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.voucherfileconnections',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/voucherfileconnections',
  operationId: 'list_45',
};

export const tool: Tool = {
  name: 'list_number_3_voucherfileconnections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe voucher file connections register can return a list of records or a single record. By specifying a FileId in the URL, a single record will be returned. Not specifying a FileId will return a list of records.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/voucherfileconnection_list_response',\n  $defs: {\n    voucherfileconnection_list_response: {\n      type: 'object',\n      properties: {\n        VoucherFileConnections: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_voucher_file_connection'\n          }\n        }\n      }\n    },\n    fortnox_voucher_file_connection: {\n      type: 'object',\n      properties: {\n        FileId: {\n          type: 'string'\n        },\n        VoucherNumber: {\n          type: 'string'\n        },\n        VoucherSeries: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        VoucherDescription: {\n          type: 'string'\n        },\n        VoucherYear: {\n          type: 'integer'\n        }\n      },\n      required: [        'FileId',\n        'VoucherNumber',\n        'VoucherSeries'\n      ]\n    }\n  }\n}\n```",
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
      await maybeFilter(jq_filter, await client.number3.voucherfileconnections.list()),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
