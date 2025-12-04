// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.deliveries_v1.outbounddeliveries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/deliveries-v1/outbounddeliveries/{id}',
  operationId: '1_update_1',
};

export const tool: Tool = {
  name: 'update_deliveries_v1_warehouse_api_outbounddeliveries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n HTTP code 400 cannot_modify_released_document\n HTTP code 400 document_is_voided Document is voided.\n HTTP code 404 not found\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_manual_outbound_document',\n  $defs: {\n    warehouse_manual_outbound_document: {\n      type: 'object',\n      properties: {\n        date: {\n          type: 'string',\n          format: 'date'\n        },\n        rows: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              itemId: {\n                type: 'string'\n              },\n              quantity: {\n                type: 'number'\n              },\n              costCenterCode: {\n                type: 'string'\n              },\n              deliveredQuantity: {\n                type: 'number'\n              },\n              forcedQuantity: {\n                type: 'number'\n              },\n              itemDescription: {\n                type: 'string'\n              },\n              itemUnit: {\n                type: 'string'\n              },\n              projectId: {\n                type: 'string'\n              },\n              stockLocationCode: {\n                type: 'string'\n              },\n              stockLocationId: {\n                type: 'string'\n              },\n              stockLocationName: {\n                type: 'string'\n              },\n              stockPointCode: {\n                type: 'string'\n              },\n              stockPointId: {\n                type: 'string'\n              },\n              stockPointName: {\n                type: 'string'\n              }\n            },\n            required: [              'itemId',\n              'quantity'\n            ]\n          }\n        },\n        id: {\n          type: 'integer'\n        },\n        note: {\n          type: 'string'\n        },\n        released: {\n          type: 'boolean'\n        },\n        stockPointCode: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        },\n        stockPointName: {\n          type: 'string'\n        },\n        voided: {\n          type: 'boolean'\n        }\n      },\n      required: [        'date',\n        'rows'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path_id: {
        type: 'integer',
      },
      date: {
        type: 'string',
        format: 'date',
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
          required: ['itemId', 'quantity'],
        },
      },
      body_id: {
        type: 'integer',
      },
      note: {
        type: 'string',
      },
      released: {
        type: 'boolean',
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
    required: ['path_id', 'date', 'rows'],
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
        await client.api.warehouse.deliveriesV1.outbounddeliveries.update(id, body),
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
