// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.fileattachments.attachments_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/fileattachments/attachments-v1/{attachmentId}',
  operationId: 'detach',
};

export const tool: Tool = {
  name: 'delete_fileattachments_api_attachments_v1',
  description: 'Detach file',
  inputSchema: {
    type: 'object',
    properties: {
      attachmentId: {
        type: 'string',
      },
    },
    required: ['attachmentId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { attachmentId, ...body } = args as any;
  const response = await client.api.fileattachments.attachmentsV1.delete(attachmentId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
