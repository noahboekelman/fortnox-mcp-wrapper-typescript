// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.archive',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/archive/{id}',
  operationId: 'removeById_1',
};

export const tool: Tool = {
  name: 'delete_file_number_3_archive',
  description: 'Delete a single file',
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
  const response = await client.number3.archive.deleteFile(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
