// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.invoiceaccruals',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/invoiceaccruals/{InvoiceNumber}',
  operationId: 'remove_12',
};

export const tool: Tool = {
  name: 'remove_number_3_invoiceaccruals',
  description: 'Remove an invoice accrual',
  inputSchema: {
    type: 'object',
    properties: {
      InvoiceNumber: {
        type: 'integer',
      },
    },
    required: ['InvoiceNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { InvoiceNumber, ...body } = args as any;
  const response = await client.number3.invoiceaccruals.remove(InvoiceNumber).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
