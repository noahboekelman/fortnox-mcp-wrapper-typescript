// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.incominggoods_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/incominggoods-v1/{id}/completed',
  operationId: 'completed',
};

export const tool: Tool = {
  name: 'update_completed_warehouse_api_incominggoods_v1',
  description:
    'Mark a released Incoming Goods document as Completed.\n Bookkeeping will be finalized.\n A Completed Incoming Goods document cannot be matched against\n any more Supplier Invoices.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      body: {
        type: 'string',
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
  const response = await client.api.warehouse.incominggoodsV1.updateCompleted(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
