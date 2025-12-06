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
  resource: 'api.warehouse.stocktransfer_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/warehouse/stocktransfer-v1',
  operationId: 'create_5',
};

export const tool: Tool = {
  name: 'stocktransfer_v1_warehouse_api_stocktransfer_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Outbounds will be reserved in the from-place.\n Inbounds are created upon release of the stock transfer document.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_stock_transfer_document',\n  $defs: {\n    warehouse_stock_transfer_document: {\n      type: 'object',\n      properties: {\n        rows: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              fromStockPointId: {\n                type: 'string'\n              },\n              itemId: {\n                type: 'string'\n              },\n              requestedQuantity: {\n                type: 'number'\n              },\n              toStockPointId: {\n                type: 'string'\n              },\n              fromStockLocationCode: {\n                type: 'string'\n              },\n              fromStockLocationId: {\n                type: 'string'\n              },\n              fromStockLocationName: {\n                type: 'string'\n              },\n              fromStockPointCode: {\n                type: 'string'\n              },\n              fromStockPointName: {\n                type: 'string'\n              },\n              itemDescription: {\n                type: 'string'\n              },\n              itemUnit: {\n                type: 'string'\n              },\n              quantity: {\n                type: 'number'\n              },\n              rowNum: {\n                type: 'integer'\n              },\n              toStockLocationCode: {\n                type: 'string'\n              },\n              toStockLocationId: {\n                type: 'string'\n              },\n              toStockLocationName: {\n                type: 'string'\n              },\n              toStockPointCode: {\n                type: 'string'\n              },\n              toStockPointName: {\n                type: 'string'\n              }\n            },\n            required: [              'fromStockPointId',\n              'itemId',\n              'requestedQuantity',\n              'toStockPointId'\n            ]\n          }\n        },\n        id: {\n          type: 'integer'\n        },\n        note: {\n          type: 'string'\n        },\n        released: {\n          type: 'boolean'\n        },\n        transferDate: {\n          type: 'string',\n          format: 'date'\n        },\n        version: {\n          type: 'integer'\n        },\n        voided: {\n          type: 'boolean'\n        }\n      },\n      required: [        'rows'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      rows: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            fromStockPointId: {
              type: 'string',
            },
            itemId: {
              type: 'string',
            },
            requestedQuantity: {
              type: 'number',
            },
            toStockPointId: {
              type: 'string',
            },
            fromStockLocationCode: {
              type: 'string',
            },
            fromStockLocationId: {
              type: 'string',
            },
            fromStockLocationName: {
              type: 'string',
            },
            fromStockPointCode: {
              type: 'string',
            },
            fromStockPointName: {
              type: 'string',
            },
            itemDescription: {
              type: 'string',
            },
            itemUnit: {
              type: 'string',
            },
            quantity: {
              type: 'number',
            },
            rowNum: {
              type: 'integer',
            },
            toStockLocationCode: {
              type: 'string',
            },
            toStockLocationId: {
              type: 'string',
            },
            toStockLocationName: {
              type: 'string',
            },
            toStockPointCode: {
              type: 'string',
            },
            toStockPointName: {
              type: 'string',
            },
          },
          required: ['fromStockPointId', 'itemId', 'requestedQuantity', 'toStockPointId'],
        },
      },
      id: {
        type: 'integer',
      },
      note: {
        type: 'string',
      },
      released: {
        type: 'boolean',
      },
      transferDate: {
        type: 'string',
        format: 'date',
      },
      version: {
        type: 'integer',
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
    required: ['rows'],
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.stocktransferV1.stocktransferV1(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
