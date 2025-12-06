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
  resource: 'api.warehouse.incominggoods_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/incominggoods-v1/{id}',
  operationId: 'save_2',
};

export const tool: Tool = {
  name: 'update_warehouse_api_incominggoods_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Incoming Goods document\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_incoming_goods',\n  $defs: {\n    warehouse_incoming_goods: {\n      type: 'object',\n      properties: {\n        deliveryNoteId: {\n          type: 'string'\n        },\n        id: {\n          type: 'integer'\n        },\n        completed: {\n          type: 'boolean'\n        },\n        costCenterCode: {\n          type: 'string'\n        },\n        date: {\n          type: 'string',\n          format: 'date'\n        },\n        hasDeliveryNote: {\n          type: 'boolean'\n        },\n        note: {\n          type: 'string'\n        },\n        projectId: {\n          type: 'string'\n        },\n        released: {\n          type: 'boolean'\n        },\n        rows: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              backOrderQuantity: {\n                type: 'number'\n              },\n              invoicedQuantity: {\n                type: 'number'\n              },\n              itemId: {\n                type: 'string'\n              },\n              orderedQuantity: {\n                type: 'number'\n              },\n              receivedQuantity: {\n                type: 'number'\n              },\n              takenQuantity: {\n                type: 'number'\n              },\n              id: {\n                type: 'string'\n              },\n              batch: {\n                type: 'string'\n              },\n              costCenterCode: {\n                type: 'string'\n              },\n              directCost: {\n                type: 'number'\n              },\n              isStockItem: {\n                type: 'boolean'\n              },\n              itemDescription: {\n                type: 'string'\n              },\n              itemUnit: {\n                type: 'string'\n              },\n              projectId: {\n                type: 'string'\n              },\n              purchaseOrderId: {\n                type: 'integer'\n              },\n              purchaseOrderRowId: {\n                type: 'string'\n              },\n              remainingOrderedQuantity: {\n                type: 'number'\n              },\n              rowOrder: {\n                type: 'integer'\n              },\n              stockLocationCode: {\n                type: 'string'\n              },\n              stockLocationId: {\n                type: 'string'\n              },\n              stockLocationName: {\n                type: 'string'\n              },\n              stockPointCode: {\n                type: 'string'\n              },\n              stockPointId: {\n                type: 'string'\n              },\n              stockPointName: {\n                type: 'string'\n              }\n            },\n            required: [              'backOrderQuantity',\n              'invoicedQuantity',\n              'itemId',\n              'orderedQuantity',\n              'receivedQuantity',\n              'takenQuantity'\n            ]\n          }\n        },\n        stockPointCode: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        },\n        stockPointName: {\n          type: 'string'\n        },\n        supplierName: {\n          type: 'string'\n        },\n        supplierNumber: {\n          type: 'string'\n        },\n        voided: {\n          type: 'boolean'\n        }\n      },\n      required: [        'deliveryNoteId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_id: {
        type: 'integer',
      },
      deliveryNoteId: {
        type: 'string',
      },
      body_id: {
        type: 'integer',
      },
      completed: {
        type: 'boolean',
      },
      costCenterCode: {
        type: 'string',
      },
      date: {
        type: 'string',
        format: 'date',
      },
      hasDeliveryNote: {
        type: 'boolean',
      },
      note: {
        type: 'string',
      },
      projectId: {
        type: 'string',
      },
      released: {
        type: 'boolean',
      },
      rows: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            backOrderQuantity: {
              type: 'number',
            },
            invoicedQuantity: {
              type: 'number',
            },
            itemId: {
              type: 'string',
            },
            orderedQuantity: {
              type: 'number',
            },
            receivedQuantity: {
              type: 'number',
            },
            takenQuantity: {
              type: 'number',
            },
            id: {
              type: 'string',
            },
            batch: {
              type: 'string',
            },
            costCenterCode: {
              type: 'string',
            },
            directCost: {
              type: 'number',
            },
            isStockItem: {
              type: 'boolean',
            },
            itemDescription: {
              type: 'string',
            },
            itemUnit: {
              type: 'string',
            },
            projectId: {
              type: 'string',
            },
            purchaseOrderId: {
              type: 'integer',
            },
            purchaseOrderRowId: {
              type: 'string',
            },
            remainingOrderedQuantity: {
              type: 'number',
            },
            rowOrder: {
              type: 'integer',
            },
            stockLocationCode: {
              type: 'string',
            },
            stockLocationId: {
              type: 'string',
            },
            stockLocationName: {
              type: 'string',
            },
            stockPointCode: {
              type: 'string',
            },
            stockPointId: {
              type: 'string',
            },
            stockPointName: {
              type: 'string',
            },
          },
          required: [
            'backOrderQuantity',
            'invoicedQuantity',
            'itemId',
            'orderedQuantity',
            'receivedQuantity',
            'takenQuantity',
          ],
        },
      },
      stockPointCode: {
        type: 'string',
      },
      stockPointId: {
        type: 'string',
      },
      stockPointName: {
        type: 'string',
      },
      supplierName: {
        type: 'string',
      },
      supplierNumber: {
        type: 'string',
      },
      voided: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['path_id', 'deliveryNoteId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.incominggoodsV1.update(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
