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
  httpPath: '/api/warehouse/stocktaking-v1/{id}',
  operationId: '1_get_2',
};

export const tool: Tool = {
  name: 'retrieve_warehouse_api_stocktaking_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Stock Taking document\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_stock_taking',\n  $defs: {\n    warehouse_stock_taking: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        responsible: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        id: {\n          type: 'integer'\n        },\n        costCenterCode: {\n          type: 'string'\n        },\n        date: {\n          type: 'string',\n          format: 'date'\n        },\n        projectId: {\n          type: 'string'\n        },\n        rows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/warehouse_stock_taking_row'\n          }\n        },\n        sortingId: {\n          type: 'integer'\n        },\n        sortParams: {\n          $ref: '#/$defs/warehouse_stock_taking_sort_params'\n        },\n        usingStockPoints: {\n          type: 'boolean'\n        }\n      },\n      required: [        'name',\n        'responsible',\n        'state'\n      ]\n    },\n    warehouse_stock_taking_row: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        countedBy: {\n          type: 'string'\n        },\n        currentRowNo: {\n          type: 'integer'\n        },\n        hasPostReleaseStockChanges: {\n          type: 'boolean'\n        },\n        itemId: {\n          type: 'string'\n        },\n        stockLocationId: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        },\n        stockTakenQuantity: {\n          type: 'number'\n        },\n        stockTakingId: {\n          type: 'integer'\n        },\n        stockTakingRowId: {\n          type: 'string'\n        },\n        totalQuantityInStock: {\n          type: 'number'\n        }\n      }\n    },\n    warehouse_stock_taking_sort_params: {\n      type: 'object',\n      properties: {\n        primarySort: {\n          type: 'string'\n        },\n        primarySortOrder: {\n          type: 'string'\n        },\n        secondarySort: {\n          type: 'string'\n        },\n        secondarySortOrder: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
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
      await maybeFilter(jq_filter, await client.api.warehouse.stocktakingV1.retrieve(id)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
