// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.articles',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/articles',
  operationId: '1_create_3',
};

export const tool: Tool = {
  name: 'create_number_3_articles',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe created article will be returned if everything succeeded, if there was any problems an error will be returned.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_article_wrap',\n  $defs: {\n    fortnox_article_wrap: {\n      type: 'object',\n      properties: {\n        Article: {\n          $ref: '#/$defs/fortnox_article'\n        }\n      }\n    },\n    fortnox_article: {\n      type: 'object',\n      properties: {\n        Description: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Active: {\n          type: 'boolean'\n        },\n        ArticleNumber: {\n          type: 'string'\n        },\n        Bulky: {\n          type: 'boolean'\n        },\n        ConstructionAccount: {\n          type: 'integer'\n        },\n        CostCalculationMethod: {\n          type: 'string'\n        },\n        DefaultStockLocation: {\n          type: 'string'\n        },\n        DefaultStockPoint: {\n          type: 'string'\n        },\n        Depth: {\n          type: 'integer'\n        },\n        DirectCost: {\n          type: 'number'\n        },\n        DisposableQuantity: {\n          type: 'number'\n        },\n        EAN: {\n          type: 'string'\n        },\n        EUAccount: {\n          type: 'integer'\n        },\n        EUVATAccount: {\n          type: 'integer'\n        },\n        Expired: {\n          type: 'boolean'\n        },\n        ExportAccount: {\n          type: 'integer'\n        },\n        FreightCost: {\n          type: 'number'\n        },\n        Height: {\n          type: 'integer'\n        },\n        Housework: {\n          type: 'boolean'\n        },\n        HouseworkType: {\n          type: 'string',\n          enum: [            'CONSTRUCTION',\n            'ELECTRICITY',\n            'GLASSMETALWORK',\n            'GROUNDDRAINAGEWORK',\n            'MASONRY',\n            'PAINTINGWALLPAPERING',\n            'HVAC',\n            'CLEANING',\n            'TEXTILECLOTHING',\n            'COOKING',\n            'SNOWPLOWING',\n            'GARDENING',\n            'BABYSITTING',\n            'OTHERCARE',\n            'TUTORING',\n            'FURNISHING',\n            'HOMEMAINTENANCE',\n            'TRANSPORTATIONSERVICES',\n            'WASHINGANDCAREOFCLOTHING',\n            'SOLARCELLS',\n            'STORAGESELFPRODUCEDELECTRICITY',\n            'CHARGINGSTATIONELECTRICVEHICLE',\n            'EMPTYHOUSEWORK',\n            'OTHERCOSTS'\n          ]\n        },\n        Manufacturer: {\n          type: 'string'\n        },\n        ManufacturerArticleNumber: {\n          type: 'string'\n        },\n        Note: {\n          type: 'string'\n        },\n        OtherCost: {\n          type: 'number'\n        },\n        PurchaseAccount: {\n          type: 'integer'\n        },\n        PurchasePrice: {\n          type: 'number'\n        },\n        QuantityInStock: {\n          type: 'number'\n        },\n        ReservedQuantity: {\n          type: 'number'\n        },\n        SalesAccount: {\n          type: 'integer'\n        },\n        SalesPrice: {\n          type: 'number'\n        },\n        StockAccount: {\n          type: 'integer'\n        },\n        StockChangeAccount: {\n          type: 'integer'\n        },\n        StockGoods: {\n          type: 'boolean'\n        },\n        StockPlace: {\n          type: 'string'\n        },\n        StockValue: {\n          type: 'number'\n        },\n        StockWarning: {\n          type: 'number'\n        },\n        SupplierName: {\n          type: 'string'\n        },\n        SupplierNumber: {\n          type: 'string'\n        },\n        Type: {\n          type: 'string',\n          enum: [            'STOCK',\n            'SERVICE'\n          ]\n        },\n        Unit: {\n          type: 'string'\n        },\n        VAT: {\n          type: 'number'\n        },\n        WebshopArticle: {\n          type: 'boolean'\n        },\n        Weight: {\n          type: 'integer'\n        },\n        Width: {\n          type: 'integer'\n        }\n      },\n      required: [        'Description'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Article: {
        $ref: '#/$defs/fortnox_article',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      fortnox_article: {
        type: 'object',
        properties: {
          Description: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          Active: {
            type: 'boolean',
          },
          ArticleNumber: {
            type: 'string',
          },
          Bulky: {
            type: 'boolean',
          },
          ConstructionAccount: {
            type: 'integer',
          },
          CostCalculationMethod: {
            type: 'string',
          },
          DefaultStockLocation: {
            type: 'string',
          },
          DefaultStockPoint: {
            type: 'string',
          },
          Depth: {
            type: 'integer',
          },
          DirectCost: {
            type: 'number',
          },
          DisposableQuantity: {
            type: 'number',
          },
          EAN: {
            type: 'string',
          },
          EUAccount: {
            type: 'integer',
          },
          EUVATAccount: {
            type: 'integer',
          },
          Expired: {
            type: 'boolean',
          },
          ExportAccount: {
            type: 'integer',
          },
          FreightCost: {
            type: 'number',
          },
          Height: {
            type: 'integer',
          },
          Housework: {
            type: 'boolean',
          },
          HouseworkType: {
            type: 'string',
            enum: [
              'CONSTRUCTION',
              'ELECTRICITY',
              'GLASSMETALWORK',
              'GROUNDDRAINAGEWORK',
              'MASONRY',
              'PAINTINGWALLPAPERING',
              'HVAC',
              'CLEANING',
              'TEXTILECLOTHING',
              'COOKING',
              'SNOWPLOWING',
              'GARDENING',
              'BABYSITTING',
              'OTHERCARE',
              'TUTORING',
              'FURNISHING',
              'HOMEMAINTENANCE',
              'TRANSPORTATIONSERVICES',
              'WASHINGANDCAREOFCLOTHING',
              'SOLARCELLS',
              'STORAGESELFPRODUCEDELECTRICITY',
              'CHARGINGSTATIONELECTRICVEHICLE',
              'EMPTYHOUSEWORK',
              'OTHERCOSTS',
            ],
          },
          Manufacturer: {
            type: 'string',
          },
          ManufacturerArticleNumber: {
            type: 'string',
          },
          Note: {
            type: 'string',
          },
          OtherCost: {
            type: 'number',
          },
          PurchaseAccount: {
            type: 'integer',
          },
          PurchasePrice: {
            type: 'number',
          },
          QuantityInStock: {
            type: 'number',
          },
          ReservedQuantity: {
            type: 'number',
          },
          SalesAccount: {
            type: 'integer',
          },
          SalesPrice: {
            type: 'number',
          },
          StockAccount: {
            type: 'integer',
          },
          StockChangeAccount: {
            type: 'integer',
          },
          StockGoods: {
            type: 'boolean',
          },
          StockPlace: {
            type: 'string',
          },
          StockValue: {
            type: 'number',
          },
          StockWarning: {
            type: 'number',
          },
          SupplierName: {
            type: 'string',
          },
          SupplierNumber: {
            type: 'string',
          },
          Type: {
            type: 'string',
            enum: ['STOCK', 'SERVICE'],
          },
          Unit: {
            type: 'string',
          },
          VAT: {
            type: 'number',
          },
          WebshopArticle: {
            type: 'boolean',
          },
          Weight: {
            type: 'integer',
          },
          Width: {
            type: 'integer',
          },
        },
        required: ['Description'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.articles.create(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
