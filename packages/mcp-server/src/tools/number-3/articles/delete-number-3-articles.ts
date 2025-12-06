// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.articles',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/articles/{ArticleNumber}',
  operationId: 'remove_2',
};

export const tool: Tool = {
  name: 'delete_number_3_articles',
  description:
    '<p>Deletes the article permanently.</p>\n <p>You need to supply the unique article number that was returned when the article was created or retrieved from the list of articles.</p>',
  inputSchema: {
    type: 'object',
    properties: {
      ArticleNumber: {
        type: 'integer',
      },
    },
    required: ['ArticleNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { ArticleNumber, ...body } = args as any;
  const response = await client.number3.articles.delete(ArticleNumber).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
