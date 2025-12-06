// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.archive',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/archive',
  operationId: 'removeByPath',
};

export const tool: Tool = {
  name: 'remove_files_number_3_archive',
  description:
    'Please note that removing a folder will also resulting in removal of all the contents within!',
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'identifies file/folder to remove',
      },
    },
    required: [],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.number3.archive.removeFiles(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
