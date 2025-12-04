// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.purchaseorders_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/purchaseorders-v1/{id}/complete',
  operationId: 'setManuallyCompleted',
};

export const tool: Tool = {
  name: 'update_complete_warehouse_api_purchaseorders_v1',
  description:
    '<p>\n The purchase order will be treated as fully received.\n Any remaining quantity will be ignored.',
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
  const response = await client.api.warehouse.purchaseordersV1.updateComplete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
