// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.pricelists',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/pricelists',
  operationId: 'create_31',
};

export const tool: Tool = {
  name: 'create_number_3_pricelists',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a price list\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/price_list_wrap',\n  $defs: {\n    price_list_wrap: {\n      type: 'object',\n      properties: {\n        PriceList: {\n          $ref: '#/$defs/price_list'\n        }\n      },\n      required: [        'PriceList'\n      ]\n    },\n    price_list: {\n      type: 'object',\n      properties: {\n        Code: {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Comments: {\n          type: 'string'\n        },\n        PreSelected: {\n          type: 'boolean'\n        }\n      },\n      required: [        'Code',\n        'Description'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      PriceList: {
        $ref: '#/$defs/price_list',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['PriceList'],
    $defs: {
      price_list: {
        type: 'object',
        properties: {
          Code: {
            type: 'string',
          },
          Description: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          Comments: {
            type: 'string',
          },
          PreSelected: {
            type: 'boolean',
          },
        },
        required: ['Code', 'Description'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.pricelists.create(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
