// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.invoicepayments',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/invoicepayments/{Number}',
  operationId: 'remove_13',
};

export const tool: Tool = {
  name: 'remove_number_3_invoicepayments',
  description: 'Remove an invoice payment',
  inputSchema: {
    type: 'object',
    properties: {
      Number: {
        type: 'string',
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
  const response = await client.number3.invoicepayments.remove(Number).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
