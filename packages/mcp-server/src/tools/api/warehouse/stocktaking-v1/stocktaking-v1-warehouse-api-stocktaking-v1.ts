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
  httpMethod: 'post',
  httpPath: '/api/warehouse/stocktaking-v1',
  operationId: 'create_2',
};

export const tool: Tool = {
  name: 'stocktaking_v1_warehouse_api_stocktaking_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Create a new Stock Taking document.\n The only mandatory fields are <code>name</code> and <code>responsible</code>.\n <code>state</code> will be set to <code>planning</code> for a newly created document.\n <p>\n The <code>date</code>-field is not mandatory for documents in state <code>planning</code>.\n However, when you update the state to <code>started</code> you have to provide a date.\n\n <code>name</code> is a descriptive name of the stock taking.\n\n <code>responsible</code> is the name of the responsible for the stock taking.\n\n <code>rows</code> are added after creation by using the addRows-method.\n\n <code>projectId</code> and <code>costCenterCode</code> are used for book-keeping, when the\n Stock Taking document is released.\n <p>\n The field <code>usingStockPoints</code> is set from Warehouse system settings upon creation.\n If multiple stockpoints is used, then the rows will be per item-stockPoint-stockLocation.\n If multiple stockpoints is NOT used, then the rows will be per item-stockLocation.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_stock_taking',\n  $defs: {\n    warehouse_stock_taking: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string'\n        },\n        responsible: {\n          type: 'string'\n        },\n        state: {\n          type: 'string'\n        },\n        id: {\n          type: 'integer'\n        },\n        costCenterCode: {\n          type: 'string'\n        },\n        date: {\n          type: 'string',\n          format: 'date'\n        },\n        projectId: {\n          type: 'string'\n        },\n        rows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/warehouse_stock_taking_row'\n          }\n        },\n        sortingId: {\n          type: 'integer'\n        },\n        sortParams: {\n          $ref: '#/$defs/warehouse_stock_taking_sort_params'\n        },\n        usingStockPoints: {\n          type: 'boolean'\n        }\n      },\n      required: [        'name',\n        'responsible',\n        'state'\n      ]\n    },\n    warehouse_stock_taking_row: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        countedBy: {\n          type: 'string'\n        },\n        currentRowNo: {\n          type: 'integer'\n        },\n        hasPostReleaseStockChanges: {\n          type: 'boolean'\n        },\n        itemId: {\n          type: 'string'\n        },\n        stockLocationId: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        },\n        stockTakenQuantity: {\n          type: 'number'\n        },\n        stockTakingId: {\n          type: 'integer'\n        },\n        stockTakingRowId: {\n          type: 'string'\n        },\n        totalQuantityInStock: {\n          type: 'number'\n        }\n      }\n    },\n    warehouse_stock_taking_sort_params: {\n      type: 'object',\n      properties: {\n        primarySort: {\n          type: 'string'\n        },\n        primarySortOrder: {\n          type: 'string'\n        },\n        secondarySort: {\n          type: 'string'\n        },\n        secondarySortOrder: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      responsible: {
        type: 'string',
      },
      state: {
        type: 'string',
      },
      id: {
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
    required: ['name', 'responsible', 'state'],
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
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.stocktakingV1.stocktakingV1(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
