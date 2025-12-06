// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.modesofpayments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/modesofpayments/{Code}',
  operationId: 'remove_15',
};

export const tool: Tool = {
  name: 'delete_number_3_modesofpayments',
  description: 'Remove a mode of payment',
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
  const response = await client.number3.modesofpayments.delete(Code).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
