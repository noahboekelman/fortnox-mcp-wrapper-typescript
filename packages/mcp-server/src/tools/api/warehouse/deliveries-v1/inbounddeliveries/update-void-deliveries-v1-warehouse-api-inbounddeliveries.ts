// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.deliveries_v1.inbounddeliveries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/deliveries-v1/inbounddeliveries/{id}/void',
  operationId: 'voidDocument',
};

export const tool: Tool = {
  name: 'update_void_deliveries_v1_warehouse_api_inbounddeliveries',
  description:
    '<p>\n A released manual inbound document might have connected outbounds, and can only be force voided.\n Note that a force void operation might cause a negative stock.\n <p>\n The following error codes might be thrown:\n  <dl>\n  <dt>void_linked_outbound</dt>\n    <dd>If this document has any outbounds transactions connected to it.</dd>\n  </dl>',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      customVoidDate: {
        type: 'string',
        description: 'date the void operation should be bookkeept on',
        format: 'date',
      },
      force: {
        type: 'boolean',
        description: 'true if we should force void, defaults to false',
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
  const response = await client.api.warehouse.deliveriesV1.inbounddeliveries
    .updateVoid(id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
