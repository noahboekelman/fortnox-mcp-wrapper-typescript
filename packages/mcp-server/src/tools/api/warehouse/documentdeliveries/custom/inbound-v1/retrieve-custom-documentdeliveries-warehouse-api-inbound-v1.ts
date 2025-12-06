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
  resource: 'api.warehouse.documentdeliveries.custom.inbound_v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}',
  operationId: 'get_12',
};

export const tool: Tool = {
  name: 'retrieve_custom_documentdeliveries_warehouse_api_inbound_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet custom inbound document\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_custom_inbound_document',\n  $defs: {\n    warehouse_custom_inbound_document: {\n      type: 'object',\n      properties: {\n        date: {\n          type: 'string',\n          format: 'date'\n        },\n        rows: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              itemId: {\n                type: 'string'\n              },\n              quantity: {\n                type: 'number'\n              },\n              batch: {\n                type: 'string'\n              },\n              costCenterCode: {\n                type: 'string'\n              },\n              directCost: {\n                type: 'number'\n              },\n              freightCost: {\n                type: 'number'\n              },\n              itemDescription: {\n                type: 'string'\n              },\n              itemUnit: {\n                type: 'string'\n              },\n              otherCost: {\n                type: 'number'\n              },\n              projectId: {\n                type: 'string'\n              },\n              rowId: {\n                type: 'integer'\n              },\n              stockLocationCode: {\n                type: 'string'\n              },\n              stockLocationId: {\n                type: 'string'\n              },\n              stockPointCode: {\n                type: 'string'\n              },\n              stockPointId: {\n                type: 'string'\n              }\n            },\n            required: [              'itemId',\n              'quantity'\n            ]\n          }\n        },\n        id: {\n          type: 'string'\n        },\n        currency: {\n          type: 'object',\n          properties: {\n            currency: {\n              type: 'string'\n            },\n            rate: {\n              type: 'number'\n            },\n            unit: {\n              type: 'integer'\n            }\n          },\n          required: [            'currency',\n            'rate'\n          ]\n        },\n        note: {\n          type: 'string'\n        },\n        type: {\n          type: 'string'\n        },\n        voided: {\n          type: 'boolean'\n        },\n        warehouseReady: {\n          type: 'boolean'\n        }\n      },\n      required: [        'date',\n        'rows'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['type', 'id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.api.warehouse.documentdeliveries.custom.inboundV1.retrieve(id, body),
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
