// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoicepayments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/supplierinvoicepayments/{Number}',
  operationId: 'remove_20',
};

export const tool: Tool = {
  name: 'delete_number_3_supplierinvoicepayments',
  description: 'Remove a supplier invoice payment',
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
  const response = await client.number3.supplierinvoicepayments.delete(Number).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
