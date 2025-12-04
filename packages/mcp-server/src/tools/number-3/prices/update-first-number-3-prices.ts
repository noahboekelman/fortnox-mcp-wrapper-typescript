// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.prices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/prices/{PriceList}/{ArticleNumber}',
  operationId: 'update_30',
};

export const tool: Tool = {
  name: 'update_first_number_3_prices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate the first price in the specified article\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/price_wrap',\n  $defs: {\n    price_wrap: {\n      type: 'object',\n      properties: {\n        Price: {\n          $ref: '#/$defs/fortnox_price'\n        }\n      }\n    },\n    fortnox_price: {\n      type: 'object',\n      properties: {\n        ArticleNumber: {\n          type: 'string'\n        },\n        PriceList: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        FromQuantity: {\n          type: 'number'\n        },\n        Percent: {\n          type: 'number'\n        },\n        Price: {\n          type: 'number'\n        }\n      },\n      required: [        'ArticleNumber',\n        'PriceList'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      PriceList: {
        type: 'string',
      },
      ArticleNumber: {
        type: 'string',
      },
      Price: {
        $ref: '#/$defs/fortnox_price',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['PriceList', 'ArticleNumber'],
    $defs: {
      fortnox_price: {
        type: 'object',
        properties: {
          ArticleNumber: {
            type: 'string',
          },
          PriceList: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          Date: {
            type: 'string',
            format: 'date-time',
          },
          FromQuantity: {
            type: 'number',
          },
          Percent: {
            type: 'number',
          },
          Price: {
            type: 'number',
          },
        },
        required: ['ArticleNumber', 'PriceList'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { ArticleNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.prices.updateFirst(ArticleNumber, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
