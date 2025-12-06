// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.stocktransfer_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/stocktransfer-v1/{id}/void',
  operationId: 'voidStockTransfer',
};

export const tool: Tool = {
  name: 'update_void_warehouse_api_stocktransfer_v1',
  description:
    '<p>\n Voiding a released stock transfer document is not allowed, and\n will return <code>cannot_modify_released_document</code>',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      force: {
        type: 'boolean',
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
  const response = await client.api.warehouse.stocktransferV1.updateVoid(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
