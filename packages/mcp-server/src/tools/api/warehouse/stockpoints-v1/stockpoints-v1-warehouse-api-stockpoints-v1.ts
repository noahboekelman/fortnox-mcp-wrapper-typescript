// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.stockpoints_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/warehouse/stockpoints-v1',
  operationId: 'create_3',
};

export const tool: Tool = {
  name: 'stockpoints_v1_warehouse_api_stockpoints_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Both <code>code</code> and <code>name</code> are mandatory.\n <p>\n If you want to set a custom delivery address for this stock point,\n you must remember to set <code>usingCompanyAddress</code> to <code>false</code>.\n <p>\n Returns 400 <code>alreadyexists</code> if a stock point with same code already exists.\n <p>\n Returns 400 <code>duplicatestocklocations</code> if two or more stock locations have the same code.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_stock_point',\n  $defs: {\n    warehouse_stock_point: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        id: {\n          type: 'string'\n        },\n        active: {\n          type: 'boolean'\n        },\n        deliveryAddress: {\n          type: 'string'\n        },\n        deliveryAddress2: {\n          type: 'string'\n        },\n        deliveryCity: {\n          type: 'string'\n        },\n        deliveryCountryCode: {\n          type: 'string'\n        },\n        deliveryName: {\n          type: 'string'\n        },\n        deliveryPhone: {\n          type: 'string'\n        },\n        deliveryZipCode: {\n          type: 'string'\n        },\n        stockLocations: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/warehouse_stock_location'\n          }\n        },\n        usingCompanyAddress: {\n          type: 'boolean'\n        }\n      },\n      required: [        'code',\n        'name'\n      ]\n    },\n    warehouse_stock_location: {\n      type: 'object',\n      properties: {\n        code: {\n          type: 'string'\n        },\n        id: {\n          type: 'string'\n        },\n        name: {\n          type: 'string'\n        },\n        stockPointId: {\n          type: 'string'\n        }\n      },\n      required: [        'code'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      active: {
        type: 'boolean',
      },
      deliveryAddress: {
        type: 'string',
      },
      deliveryAddress2: {
        type: 'string',
      },
      deliveryCity: {
        type: 'string',
      },
      deliveryCountryCode: {
        type: 'string',
      },
      deliveryName: {
        type: 'string',
      },
      deliveryPhone: {
        type: 'string',
      },
      deliveryZipCode: {
        type: 'string',
      },
      stockLocations: {
        type: 'array',
        items: {
          $ref: '#/$defs/warehouse_stock_location',
        },
      },
      usingCompanyAddress: {
        type: 'boolean',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['code', 'name'],
    $defs: {
      warehouse_stock_location: {
        type: 'object',
        properties: {
          code: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          stockPointId: {
            type: 'string',
          },
        },
        required: ['code'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.stockpointsV1.stockpointsV1(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
