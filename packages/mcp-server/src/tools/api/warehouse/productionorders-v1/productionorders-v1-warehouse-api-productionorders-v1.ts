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
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/warehouse/productionorders-v1',
  operationId: 'create_10',
};

export const tool: Tool = {
  name: 'productionorders_v1_warehouse_api_productionorders_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Set <code>itemId</code> to the item to be produced.\n <p>\n Set <code>quantity</code> to number of units to produce.\n <p>\n Set <code>startDate</code> to production start state.\n <p>\n ProductionState is set to <code>reserved</code> by default.\n It can also be <code>registered</code>. Then no reservations\n will be made (no quantities will be assigned to the <code>packageItems</code> yet).\n <p>\n Setting <code>outboundStockPointId</code> (where the <code>packageItems</code>\n will be taken from), and <code>inboundStockPointId</code> (where the\n produced item will be put) is mandatory multiple stockpoints has been activated\n in the warehouse settings.\n <p>\n Before the document is released, the <code>productionDate</code> must be set.\n <p>\n The <code>packageItems</code> to include is easiest to get by calling\n the method <code>getRequiredProductionParts</code>.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_production_order',\n  $defs: {\n    warehouse_production_order: {\n      type: 'object',\n      properties: {\n        productionState: {\n          type: 'string',\n          enum: [            'registered',\n            'reserved',\n            'ongoing'\n          ]\n        },\n        quantity: {\n          type: 'number'\n        },\n        startDate: {\n          type: 'string',\n          format: 'date'\n        },\n        id: {\n          type: 'integer'\n        },\n        batch: {\n          type: 'string'\n        },\n        costCenterCode: {\n          type: 'string'\n        },\n        documentState: {\n          type: 'string',\n          enum: [            'completed',\n            'voided'\n          ]\n        },\n        inboundStockLocationId: {\n          type: 'string'\n        },\n        inboundStockPointId: {\n          type: 'string'\n        },\n        itemDescription: {\n          type: 'string'\n        },\n        itemId: {\n          type: 'string'\n        },\n        itemUnit: {\n          type: 'string'\n        },\n        note: {\n          type: 'string'\n        },\n        outboundStockPointId: {\n          type: 'string'\n        },\n        packageItems: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/warehouse_package_item'\n          }\n        },\n        productionDate: {\n          type: 'string',\n          format: 'date'\n        },\n        projectId: {\n          type: 'string'\n        }\n      },\n      required: [        'productionState',\n        'quantity',\n        'startDate'\n      ]\n    },\n    warehouse_package_item: {\n      type: 'object',\n      properties: {\n        itemId: {\n          type: 'string'\n        },\n        quantityRequired: {\n          type: 'number'\n        },\n        itemDescription: {\n          type: 'string'\n        },\n        itemUnit: {\n          type: 'string'\n        },\n        quantityReserved: {\n          type: 'number'\n        },\n        totalQuantityRequired: {\n          type: 'number'\n        }\n      },\n      required: [        'itemId',\n        'quantityRequired'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      productionState: {
        type: 'string',
        enum: ['registered', 'reserved', 'ongoing'],
      },
      quantity: {
        type: 'number',
      },
      startDate: {
        type: 'string',
        format: 'date',
      },
      id: {
        type: 'integer',
      },
      batch: {
        type: 'string',
      },
      costCenterCode: {
        type: 'string',
      },
      documentState: {
        type: 'string',
        enum: ['completed', 'voided'],
      },
      inboundStockLocationId: {
        type: 'string',
      },
      inboundStockPointId: {
        type: 'string',
      },
      itemDescription: {
        type: 'string',
      },
      itemId: {
        type: 'string',
      },
      itemUnit: {
        type: 'string',
      },
      note: {
        type: 'string',
      },
      outboundStockPointId: {
        type: 'string',
      },
      packageItems: {
        type: 'array',
        items: {
          $ref: '#/$defs/warehouse_package_item',
        },
      },
      productionDate: {
        type: 'string',
        format: 'date',
      },
      projectId: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['productionState', 'quantity', 'startDate'],
    $defs: {
      warehouse_package_item: {
        type: 'object',
        properties: {
          itemId: {
            type: 'string',
          },
          quantityRequired: {
            type: 'number',
          },
          itemDescription: {
            type: 'string',
          },
          itemUnit: {
            type: 'string',
          },
          quantityReserved: {
            type: 'number',
          },
          totalQuantityRequired: {
            type: 'number',
          },
        },
        required: ['itemId', 'quantityRequired'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.productionordersV1.productionordersV1(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
