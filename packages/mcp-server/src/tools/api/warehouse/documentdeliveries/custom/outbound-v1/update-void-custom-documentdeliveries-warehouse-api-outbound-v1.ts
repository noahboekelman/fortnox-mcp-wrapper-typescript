// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.documentdeliveries.custom.outbound_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void',
  operationId: 'voidDocument_3',
};

export const tool: Tool = {
  name: 'update_void_custom_documentdeliveries_warehouse_api_outbound_v1',
  description: 'Void custom outbound document',
  inputSchema: {
    type: 'object',
    properties: {
      type: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      force: {
        type: 'boolean',
        description:
          'true if the document should be voided even if the document has connected outbounds, defaults to false.',
      },
    },
    required: ['type', 'id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.warehouse.documentdeliveries.custom.outboundV1
    .updateVoid(id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
