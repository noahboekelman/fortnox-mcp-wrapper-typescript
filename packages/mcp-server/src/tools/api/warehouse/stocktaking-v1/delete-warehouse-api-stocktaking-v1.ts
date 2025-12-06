// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.stocktaking_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/warehouse/stocktaking-v1/{id}',
  operationId: 'deleteStockTaking',
};

export const tool: Tool = {
  name: 'delete_warehouse_api_stocktaking_v1',
  description:
    '<p>\n Permanently deletes a Stock Taking document and its rows.\n <p>\n Only for documents in state <code>planning</code> and <code>started</code>.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
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
  const response = await client.api.warehouse.stocktakingV1.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
