// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.stocktaking_v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/warehouse/stocktaking-v1/{id}/candidates',
  operationId: 'getCandidateRows',
};

export const tool: Tool = {
  name: 'retrieve_candidates_warehouse_api_stocktaking_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n A candidate row is a combination of itemId, stockPointId and stockLocationId\n that can be added to the Stock Taking document.\n <p>\n Rows already added to the Stock Taking are excluded from this list.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_stock_taking_row',\n  $defs: {\n    warehouse_stock_taking_row: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        countedBy: {\n          type: 'string'\n        },\n        currentRowNo: {\n          type: 'integer'\n        },\n        hasPostReleaseStockChanges: {\n          type: 'boolean'\n        },\n        itemId: {\n          type: 'string'\n        },\n        stockLocationId: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        },\n        stockTakenQuantity: {\n          type: 'number'\n        },\n        stockTakingId: {\n          type: 'integer'\n        },\n        stockTakingRowId: {\n          type: 'string'\n        },\n        totalQuantityInStock: {\n          type: 'number'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      excludeZeroBalanceItems: {
        type: 'boolean',
      },
      includeNonInboundItems: {
        type: 'boolean',
        description: 'Include items that do not exist on inbound deliveries.',
      },
      itemDescriptionSearch: {
        type: 'string',
      },
      itemIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      itemIdSearch: {
        type: 'string',
      },
      stockLocationIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      stockPointIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      supplierNumbers: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      transactionDate: {
        type: 'string',
        format: 'date',
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
      await maybeFilter(jq_filter, await client.api.warehouse.stocktakingV1.retrieveCandidates(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
