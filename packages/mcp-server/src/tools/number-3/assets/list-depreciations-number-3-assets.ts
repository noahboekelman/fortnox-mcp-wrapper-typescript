// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.assets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/assets/depreciations/{ToDate}',
  operationId: 'getDeprecationList',
};

export const tool: Tool = {
  name: 'list_depreciations_number_3_assets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of assets to depreciate.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_list_asset_wrap',\n  $defs: {\n    fortnox_list_asset_wrap: {\n      type: 'object',\n      properties: {\n        Assets: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              '@url': {\n                type: 'string'\n              },\n              AcquisitionDate: {\n                type: 'string'\n              },\n              AcquisitionValue: {\n                type: 'integer'\n              },\n              DepreciatedTo: {\n                type: 'string'\n              },\n              DepreciationFinal: {\n                type: 'string'\n              },\n              Description: {\n                type: 'string'\n              },\n              Id: {\n                type: 'integer'\n              },\n              Number: {\n                type: 'string'\n              },\n              Status: {\n                type: 'string'\n              },\n              StatusId: {\n                type: 'string'\n              },\n              Type: {\n                type: 'string'\n              },\n              TypeId: {\n                type: 'integer'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ToDate: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ToDate'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { ToDate, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.assets.listDepreciations(ToDate)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
