// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/invoices/{DocumentNumber}/preview',
  operationId: 'preview',
};

export const tool: Tool = {
  name: 'preview_number_3_invoices',
  description: 'The difference between this and the print-endpoint is that property Sent is not set to TRUE.',
  inputSchema: {
    type: 'object',
    properties: {
      DocumentNumber: {
        type: 'string',
      },
    },
    required: ['DocumentNumber'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { DocumentNumber, ...body } = args as any;
  return asBinaryContentResult(await client.number3.invoices.preview(DocumentNumber).asResponse());
};

export default { metadata, tool, handler };
