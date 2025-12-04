// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.assets.types',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/assets/types/{id}',
  operationId: 'delete_2',
};

export const tool: Tool = {
  name: 'delete_assets_number_3_types',
  description: 'Delete an asset type',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
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
  const response = await client.number3.assets.types.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
