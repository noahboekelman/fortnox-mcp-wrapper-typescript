// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.deliveries_v1.outbounddeliveries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/deliveries-v1/outbounddeliveries/{id}/void',
  operationId: 'voidDocument_1',
};

export const tool: Tool = {
  name: 'update_void_deliveries_v1_warehouse_api_outbounddeliveries',
  description: 'Void manual outbound document',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      customVoidDate: {
        type: 'string',
        description: 'if provided this date will be used as the voided date instead of the document date',
        format: 'date',
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
  const response = await client.api.warehouse.deliveriesV1.outbounddeliveries
    .updateVoid(id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
