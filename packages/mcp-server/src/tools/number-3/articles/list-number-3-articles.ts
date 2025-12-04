// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.articles',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/articles',
  operationId: 'list_4',
};

export const tool: Tool = {
  name: 'list_number_3_articles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a list of articles. The articles are returned sorted by article number with the lowest number appearing first.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/article_list_response',\n  $defs: {\n    article_list_response: {\n      type: 'object',\n      properties: {\n        Articles: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              Description: {\n                type: 'string'\n              },\n              '@url': {\n                type: 'string'\n              },\n              ArticleNumber: {\n                type: 'string'\n              },\n              DisposableQuantity: {\n                type: 'string'\n              },\n              EAN: {\n                type: 'string'\n              },\n              Housework: {\n                type: 'boolean'\n              },\n              PurchasePrice: {\n                type: 'string'\n              },\n              QuantityInStock: {\n                type: 'number'\n              },\n              ReservedQuantity: {\n                type: 'string'\n              },\n              SalesPrice: {\n                type: 'string'\n              },\n              StockPlace: {\n                type: 'string'\n              },\n              StockValue: {\n                type: 'string'\n              },\n              Unit: {\n                type: 'string'\n              },\n              VAT: {\n                type: 'string'\n              },\n              WebshopArticle: {\n                type: 'boolean'\n              }\n            },\n            required: [              'Description'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      articlenumber: {
        type: 'string',
        description: 'filter by article number',
      },
      description: {
        type: 'string',
        description: 'filter by description',
      },
      ean: {
        type: 'string',
        description: 'filter by ean',
      },
      filter: {
        type: 'string',
        description: 'possibility to filter supplier invoices',
        enum: ['active', 'inactive'],
      },
      lastmodified: {
        type: 'string',
        description: 'filter by lastmodified',
      },
      manufacturer: {
        type: 'string',
        description: 'filter by manufacturer',
      },
      manufacturerarticlenumber: {
        type: 'string',
        description: 'filter by manufacturerarticlenumber',
      },
      sortby: {
        type: 'string',
        description: 'field to sort returned list',
        enum: ['articlenumber', 'quantityinstock', 'reservedquantity', 'stockvalue'],
      },
      suppliernumber: {
        type: 'string',
        description: 'filter by supplier number',
      },
      webshop: {
        type: 'string',
        description: 'filter by web shop',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.articles.list(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
