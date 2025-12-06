// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.documentdeliveries.custom.inbound_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void',
  operationId: 'voidDocument_2',
};

export const tool: Tool = {
  name: 'update_void_custom_documentdeliveries_warehouse_api_inbound_v1',
  description:
    'Voiding a document will undo the possible stock changes that the document had made,\n note that the document and the transactions created are not deleted. Some limitations apply, see below.',
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
  const response = await client.api.warehouse.documentdeliveries.custom.inboundV1
    .updateVoid(id, body)
    .asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
