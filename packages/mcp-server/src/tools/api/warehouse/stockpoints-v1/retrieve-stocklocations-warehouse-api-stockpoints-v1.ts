// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.stockpoints_v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/warehouse/stockpoints-v1/{id}/stocklocations',
  operationId: 'getStockLocationsByAmbiguousId',
};

export const tool: Tool = {
  name: 'retrieve_stocklocations_warehouse_api_stockpoints_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n List stock locations for a specific stock point.\n <p>\n Optionally include a query parameter `q` to filter on stock location code or name.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_stock_location',\n  $defs: {\n    warehouse_stock_location: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'string'\n        },\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        }\n      },\n      required: [        'code'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      q: {
        type: 'string',
        description: 'filters on stock location code or name.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.stockpointsV1.retrieveStocklocations(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
