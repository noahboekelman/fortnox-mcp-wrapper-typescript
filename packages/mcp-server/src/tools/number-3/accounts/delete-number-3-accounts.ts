// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.accounts',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/accounts/{Number}',
  operationId: 'removeById',
};

export const tool: Tool = {
  name: 'delete_number_3_accounts',
  description: 'Deletes the specified account in the users current year',
  inputSchema: {
    type: 'object',
    properties: {
      Number: {
        type: 'integer',
      },
    },
    required: ['Number'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Number, ...body } = args as any;
  const response = await client.number3.accounts.delete(Number).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
