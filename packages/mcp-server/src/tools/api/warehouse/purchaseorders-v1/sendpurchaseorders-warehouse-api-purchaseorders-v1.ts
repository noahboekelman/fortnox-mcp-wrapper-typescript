// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.purchaseorders_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/warehouse/purchaseorders-v1/sendpurchaseorders',
  operationId: 'sendPurchaseOrders',
};

export const tool: Tool = {
  name: 'sendpurchaseorders_warehouse_api_purchaseorders_v1',
  description: 'Sends multiple purchase orders via email',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        items: {
          type: 'integer',
        },
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.api.warehouse.purchaseordersV1.sendpurchaseorders(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
