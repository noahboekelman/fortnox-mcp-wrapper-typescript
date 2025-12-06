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
  resource: 'api.warehouse.stocktaking_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/stocktaking-v1/{id}',
  operationId: 'update_2',
};

export const tool: Tool = {
  name: 'update_warehouse_api_stocktaking_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Updates can only be done when state is <code>planning</code> or <code>started</code>.\n <p>\n All updatable fields (<code>date</code>, <code>name</code>, <code>responsible</code>,\n <code>state</code>, <code>sortingId</code>, <code>costCenterCode</code>, <code>projectId</code>)\n in the document head are set to supplied values.\n <p>\n You cannot set <code>state</code> to <code>completed</code> or <code>voided</code>. Use endpoints\n release or void for this.\n <p>\n The <code>date</code>-field is mandatory for documents in state <code>started</code>.\n <p>\n When state is <code>started</code> you use this endpoint for setting the stock taken quantity.\n Only existing rows can be updated - no new rows will be created (use the addRows endpoint for this).\n Only the supplied rows will be updated. I.e. you don't have to send in <strong>all</strong>\n document rows - just supply the rows you want to set stockTakenQuantity for. Just make sure\n to always include all the fields from the document head as mentioned above.\n <p>\n The mandatory fields on the (optionally supplied) rows are: <code>itemId</code>,\n <code>stockPointId</code>, <code>stockLocationId</code>.\n Fields <code>countedBy</code> and <code>stockTakenQuantity</code> are technically\n not mandatory, but will be set to null if you don't supply them.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_stock_taking',\n  $defs: {\n    warehouse_stock_taking: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        responsible: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        id: {\n          type: 'integer'\n        },\n        costCenterCode: {\n          type: 'string'\n        },\n        date: {\n          type: 'string',\n          format: 'date'\n        },\n        projectId: {\n          type: 'string'\n        },\n        rows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/warehouse_stock_taking_row'\n          }\n        },\n        sortingId: {\n          type: 'integer'\n        },\n        sortParams: {\n          $ref: '#/$defs/warehouse_stock_taking_sort_params'\n        },\n        usingStockPoints: {\n          type: 'boolean'\n        }\n      },\n      required: [        'name',\n        'responsible',\n        'state'\n      ]\n    },\n    warehouse_stock_taking_row: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        countedBy: {\n          type: 'string'\n        },\n        currentRowNo: {\n          type: 'integer'\n        },\n        hasPostReleaseStockChanges: {\n          type: 'boolean'\n        },\n        itemId: {\n          type: 'string'\n        },\n        stockLocationId: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        },\n        stockTakenQuantity: {\n          type: 'number'\n        },\n        stockTakingId: {\n          type: 'integer'\n        },\n        stockTakingRowId: {\n          type: 'string'\n        },\n        totalQuantityInStock: {\n          type: 'number'\n        }\n      }\n    },\n    warehouse_stock_taking_sort_params: {\n      type: 'object',\n      properties: {\n        primarySort: {\n          type: 'string'\n        },\n        primarySortOrder: {\n          type: 'string'\n        },\n        secondarySort: {\n          type: 'string'\n        },\n        secondarySortOrder: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_id: {
        type: 'integer',
      },
      name: {
        type: 'string',
      },
      responsible: {
        type: 'string',
      },
      state: {
        type: 'string',
      },
      body_id: {
        type: 'integer',
      },
      costCenterCode: {
        type: 'string',
      },
      date: {
        type: 'string',
        format: 'date',
      },
      projectId: {
        type: 'string',
      },
      rows: {
        type: 'array',
        items: {
          $ref: '#/$defs/warehouse_stock_taking_row',
        },
      },
      sortingId: {
        type: 'integer',
      },
      sortParams: {
        $ref: '#/$defs/warehouse_stock_taking_sort_params',
      },
      usingStockPoints: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_id', 'name', 'responsible', 'state'],
    $defs: {
      warehouse_stock_taking_row: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          countedBy: {
            type: 'string',
          },
          currentRowNo: {
            type: 'integer',
          },
          hasPostReleaseStockChanges: {
            type: 'boolean',
          },
          itemId: {
            type: 'string',
          },
          stockLocationId: {
            type: 'string',
          },
          stockPointId: {
            type: 'string',
          },
          stockTakenQuantity: {
            type: 'number',
          },
          stockTakingId: {
            type: 'integer',
          },
          stockTakingRowId: {
            type: 'string',
          },
          totalQuantityInStock: {
            type: 'number',
          },
        },
      },
      warehouse_stock_taking_sort_params: {
        type: 'object',
        properties: {
          primarySort: {
            type: 'string',
          },
          primarySortOrder: {
            type: 'string',
          },
          secondarySort: {
            type: 'string',
          },
          secondarySortOrder: {
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
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.stocktakingV1.update(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
