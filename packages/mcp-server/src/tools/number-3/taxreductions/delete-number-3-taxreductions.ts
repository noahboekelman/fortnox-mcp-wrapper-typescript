// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.taxreductions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/taxreductions/{Id}',
  operationId: 'remove_21',
};

export const tool: Tool = {
  name: 'delete_number_3_taxreductions',
  description: 'Remove a tax reduction',
  inputSchema: {
    type: 'object',
    properties: {
      Id: {
        type: 'integer',
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
  const response = await client.number3.taxreductions.delete(Id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
