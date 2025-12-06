// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.assetfileconnections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/assetfileconnections/{fileId}',
  operationId: '1_delete',
};

export const tool: Tool = {
  name: 'delete_number_3_assetfileconnections',
  description: 'Remove an asset file connection',
  inputSchema: {
    type: 'object',
    properties: {
      fileId: {
        type: 'string',
      },
    },
    required: ['fileId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { fileId, ...body } = args as any;
  const response = await client.number3.assetfileconnections.delete(fileId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
