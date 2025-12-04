// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.articleurlconnections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/articleurlconnections/{id}',
  operationId: 'remove_4',
};

export const tool: Tool = {
  name: 'remove_number_3_articleurlconnections',
  description: 'Remove an article url connection',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.number3.articleurlconnections.remove(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
