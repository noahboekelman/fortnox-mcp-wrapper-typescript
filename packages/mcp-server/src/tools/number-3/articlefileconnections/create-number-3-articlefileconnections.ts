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
  resource: 'number_3.articlefileconnections',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/articlefileconnections',
  operationId: '1_create_2',
};

export const tool: Tool = {
  name: 'create_number_3_articlefileconnections',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an article file connection\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_article_file_connection_wrap',\n  $defs: {\n    fortnox_article_file_connection_wrap: {\n      type: 'object',\n      properties: {\n        ArticleFileConnection: {\n          type: 'object',\n          properties: {\n            ArticleNumber: {\n              type: 'string'\n            },\n            FileId: {\n              type: 'string'\n            },\n            '@url': {\n              type: 'string'\n            }\n          },\n          required: [            'ArticleNumber',\n            'FileId'\n          ]\n        }\n      },\n      required: [        'ArticleFileConnection'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ArticleFileConnection: {
        type: 'object',
        properties: {
          ArticleNumber: {
            type: 'string',
          },
          FileId: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
        },
        required: ['ArticleNumber', 'FileId'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ArticleFileConnection'],
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.articlefileconnections.create(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
