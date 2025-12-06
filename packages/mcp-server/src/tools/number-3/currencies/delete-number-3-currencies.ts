// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.currencies',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/currencies/{Code}',
  operationId: 'remove_8',
};

export const tool: Tool = {
  name: 'delete_number_3_currencies',
  description: 'Remove a currency',
  inputSchema: {
    type: 'object',
    properties: {
      Code: {
        type: 'string',
      },
    },
    required: ['Code'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Code, ...body } = args as any;
  const response = await client.number3.currencies.delete(Code).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
