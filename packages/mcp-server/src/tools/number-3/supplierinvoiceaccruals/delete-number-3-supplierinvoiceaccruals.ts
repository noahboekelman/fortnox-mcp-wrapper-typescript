// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoiceaccruals',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/supplierinvoiceaccruals/{SupplierInvoiceNumber}',
  operationId: 'remove_18',
};

export const tool: Tool = {
  name: 'delete_number_3_supplierinvoiceaccruals',
  description: 'Remove a supplier invoice accrual',
  inputSchema: {
    type: 'object',
    properties: {
      SupplierInvoiceNumber: {
        type: 'integer',
      },
    },
    required: ['SupplierInvoiceNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { SupplierInvoiceNumber, ...body } = args as any;
  const response = await client.number3.supplierinvoiceaccruals.delete(SupplierInvoiceNumber).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
