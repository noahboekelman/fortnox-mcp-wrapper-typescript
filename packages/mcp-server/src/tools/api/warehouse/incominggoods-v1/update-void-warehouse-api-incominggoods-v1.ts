// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.incominggoods_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/incominggoods-v1/{id}/void',
  operationId: 'voidDocument_4',
};

export const tool: Tool = {
  name: 'update_void_warehouse_api_incominggoods_v1',
  description:
    'Void a document.\n If an Incoming Goods document has been Completed, or matched against\n Supplier Invoice, it cannot be voided.',
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
  const response = await client.api.warehouse.incominggoodsV1.updateVoid(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
