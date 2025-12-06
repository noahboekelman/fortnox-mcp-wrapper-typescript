// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.projects',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/projects/{ProjectNumber}',
  operationId: 'remove_17',
};

export const tool: Tool = {
  name: 'delete_number_3_projects',
  description: 'Remove a project',
  inputSchema: {
    type: 'object',
    properties: {
      ProjectNumber: {
        type: 'integer',
      },
    },
    required: ['ProjectNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { ProjectNumber, ...body } = args as any;
  const response = await client.number3.projects.delete(ProjectNumber).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
