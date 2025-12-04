// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.fileattachments.attachments_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/fileattachments/attachments-v1/validateincludedonsend',
  operationId: 'validateIncludedOnSend',
};

export const tool: Tool = {
  name: 'validate_fileattachments_api_attachments_v1',
  description: 'Validates a list of attachments that will be included on send',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/fileattachments_attachment',
        },
      },
    },
    required: [],
    $defs: {
      fileattachments_attachment: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          entityId: {
            type: 'integer',
          },
          entityType: {
            type: 'string',
            enum: ['OF', 'O', 'F', 'C', 'LGR_IO', 'LGR_IG'],
          },
          fileId: {
            type: 'string',
          },
          includeOnSend: {
            type: 'boolean',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.fileattachments.attachmentsV1.validate(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
