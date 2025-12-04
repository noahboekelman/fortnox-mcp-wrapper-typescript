// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.inbox',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/inbox/{Id}',
  operationId: 'remove_11',
};

export const tool: Tool = {
  name: 'remove_number_3_inbox',
  description: 'Remove a file or folder',
  inputSchema: {
    type: 'object',
    properties: {
      Id: {
        type: 'string',
      },
    },
    required: ['Id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Id, ...body } = args as any;
  const response = await client.number3.inbox.remove(Id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
