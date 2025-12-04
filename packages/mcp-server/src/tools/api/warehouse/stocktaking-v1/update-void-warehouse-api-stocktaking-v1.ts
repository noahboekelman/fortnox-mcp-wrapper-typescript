// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.stocktaking_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/stocktaking-v1/{id}/void',
  operationId: 'voidStockTaking',
};

export const tool: Tool = {
  name: 'update_void_warehouse_api_stocktaking_v1',
  description:
    '<p>\n Sets the Stock Taking document state to <code>voided</code>.\n <p>\n Only documents in state <code>planning</code> and <code>started</code>\n can be voided. A <code>completed</code> document may not be voided.',
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
  const response = await client.api.warehouse.stocktakingV1.updateVoid(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
