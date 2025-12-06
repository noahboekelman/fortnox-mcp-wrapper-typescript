// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.incominggoods_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/incominggoods-v1/{id}/release',
  operationId: 'release_6',
};

export const tool: Tool = {
  name: 'update_release_warehouse_api_incominggoods_v1',
  description:
    'The document will be locked and bookkept.\n The inbound deliveries will affect available stock.',
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
  const response = await client.api.warehouse.incominggoodsV1.updateRelease(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
