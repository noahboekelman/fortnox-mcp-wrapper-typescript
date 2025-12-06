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
  resource: 'api.warehouse.productionorders_v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/warehouse/productionorders-v1',
  operationId: 'getAll_8',
};

export const tool: Tool = {
  name: 'retrieve_productionorders_v1_warehouse_api_productionorders_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList production orders\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_production_order',\n  $defs: {\n    warehouse_production_order: {\n      type: 'object',\n      properties: {\n        productionState: {\n          type: 'string',\n          enum: [            'registered',\n            'reserved',\n            'ongoing'\n          ]\n        },\n        quantity: {\n          type: 'number'\n        },\n        startDate: {\n          type: 'string',\n          format: 'date'\n        },\n        id: {\n          type: 'integer'\n        },\n        batch: {\n          type: 'string'\n        },\n        costCenterCode: {\n          type: 'string'\n        },\n        documentState: {\n          type: 'string',\n          enum: [            'completed',\n            'voided'\n          ]\n        },\n        inboundStockLocationId: {\n          type: 'string'\n        },\n        inboundStockPointId: {\n          type: 'string'\n        },\n        itemDescription: {\n          type: 'string'\n        },\n        itemId: {\n          type: 'string'\n        },\n        itemUnit: {\n          type: 'string'\n        },\n        note: {\n          type: 'string'\n        },\n        outboundStockPointId: {\n          type: 'string'\n        },\n        packageItems: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/warehouse_package_item'\n          }\n        },\n        productionDate: {\n          type: 'string',\n          format: 'date'\n        },\n        projectId: {\n          type: 'string'\n        }\n      },\n      required: [        'productionState',\n        'quantity',\n        'startDate'\n      ]\n    },\n    warehouse_package_item: {\n      type: 'object',\n      properties: {\n        itemId: {\n          type: 'string'\n        },\n        quantityRequired: {\n          type: 'number'\n        },\n        itemDescription: {\n          type: 'string'\n        },\n        itemUnit: {\n          type: 'string'\n        },\n        quantityReserved: {\n          type: 'number'\n        },\n        totalQuantityRequired: {\n          type: 'number'\n        }\n      },\n      required: [        'itemId',\n        'quantityRequired'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      itemId: {
        type: 'string',
        description: 'Include only production orders with the given production item.',
      },
      state: {
        type: 'string',
        description:
          'Include only production orders with the given state.\n              Allowed states: all, incomplete, delayed, completed, voided.\n              (Default is incomplete)',
        enum: ['all', 'incomplete', 'delayed', 'completed', 'voided'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.api.warehouse.productionordersV1.retrieveProductionordersV1(body),
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
