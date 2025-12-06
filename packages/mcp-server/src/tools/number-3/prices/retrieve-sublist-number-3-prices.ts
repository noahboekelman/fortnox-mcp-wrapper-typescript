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
  resource: 'number_3.prices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/prices/sublist/{PriceList}/{ArticleNumber}',
  operationId: 'list_32',
};

export const tool: Tool = {
  name: 'retrieve_sublist_number_3_prices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe list contains a slimmer version of the prices. To get a full entity, use the GET with a price list, article number and from quantity.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/price_retrieve_sublist_response',\n  $defs: {\n    price_retrieve_sublist_response: {\n      type: 'object',\n      properties: {\n        Prices: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              ArticleNumber: {\n                type: 'string'\n              },\n              PriceList: {\n                type: 'string'\n              },\n              '@url': {\n                type: 'string'\n              },\n              FromQuantity: {\n                type: 'number'\n              },\n              Price: {\n                type: 'number'\n              }\n            },\n            required: [              'ArticleNumber',\n              'PriceList'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      PriceList: {
        type: 'string',
      },
      ArticleNumber: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['PriceList', 'ArticleNumber'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { ArticleNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.prices.retrieveSublist(ArticleNumber, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
