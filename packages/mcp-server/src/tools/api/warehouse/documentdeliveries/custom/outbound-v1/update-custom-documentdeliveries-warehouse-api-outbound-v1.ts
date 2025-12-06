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
  resource: 'api.warehouse.documentdeliveries.custom.outbound_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}',
  operationId: 'save_1',
};

export const tool: Tool = {
  name: 'update_custom_documentdeliveries_warehouse_api_outbound_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<br>\n If type is not known, it will be registered as belonging to the OUTBOUND category.<br>\n If type is an existing custom document type of category INBOUND an error is thrown.<br>\n If type is invalid an error is thrown.<br>\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_custom_outbound_document',\n  $defs: {\n    warehouse_custom_outbound_document: {\n      type: 'object',\n      properties: {\n        date: {\n          type: 'string',\n          format: 'date'\n        },\n        deliveryState: {\n          type: 'string',\n          enum: [            'registration',\n            'reservation',\n            'delivery'\n          ]\n        },\n        rows: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              itemId: {\n                type: 'string'\n              },\n              quantity: {\n                type: 'number'\n              },\n              costCenterCode: {\n                type: 'string'\n              },\n              deliveredQuantity: {\n                type: 'number'\n              },\n              forcedQuantity: {\n                type: 'number'\n              },\n              itemDescription: {\n                type: 'string'\n              },\n              itemUnit: {\n                type: 'string'\n              },\n              projectId: {\n                type: 'string'\n              },\n              reservedQuantity: {\n                type: 'number'\n              },\n              rowId: {\n                type: 'integer'\n              },\n              stockLocationId: {\n                type: 'string'\n              },\n              stockPointId: {\n                type: 'string'\n              }\n            },\n            required: [              'itemId',\n              'quantity'\n            ]\n          }\n        },\n        id: {\n          type: 'string'\n        },\n        averageCosts: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              averageCostInSEK: {\n                type: 'number'\n              },\n              itemId: {\n                type: 'string'\n              },\n              stockPointId: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        forcedDelivery: {\n          type: 'boolean'\n        },\n        note: {\n          type: 'string'\n        },\n        referenceType: {\n          type: 'string'\n        },\n        voided: {\n          type: 'boolean'\n        },\n        warehouseReady: {\n          type: 'boolean'\n        }\n      },\n      required: [        'date',\n        'deliveryState',\n        'rows'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
      },
      path_id: {
        type: 'string',
      },
      date: {
        type: 'string',
        format: 'date',
      },
      deliveryState: {
        type: 'string',
        enum: ['registration', 'reservation', 'delivery'],
      },
      rows: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            itemId: {
              type: 'string',
            },
            quantity: {
              type: 'number',
            },
            costCenterCode: {
              type: 'string',
            },
            deliveredQuantity: {
              type: 'number',
            },
            forcedQuantity: {
              type: 'number',
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
            reservedQuantity: {
              type: 'number',
            },
            rowId: {
              type: 'integer',
            },
            stockLocationId: {
              type: 'string',
            },
            stockPointId: {
              type: 'string',
            },
          },
          required: ['itemId', 'quantity'],
        },
      },
      body_id: {
        type: 'string',
      },
      averageCosts: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            averageCostInSEK: {
              type: 'number',
            },
            itemId: {
              type: 'string',
            },
            stockPointId: {
              type: 'string',
            },
          },
        },
      },
      forcedDelivery: {
        type: 'boolean',
      },
      note: {
        type: 'string',
      },
      referenceType: {
        type: 'string',
      },
      voided: {
        type: 'boolean',
      },
      warehouseReady: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['type', 'path_id', 'date', 'deliveryState', 'rows'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.api.warehouse.documentdeliveries.custom.outboundV1.update(id, body),
      ),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
