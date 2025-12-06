// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.stocktransfer_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/stocktransfer-v1/{id}/release',
  operationId: 'release_3',
};

export const tool: Tool = {
  name: 'update_release_warehouse_api_stocktransfer_v1',
  description:
    '<p>\n This will deliver all outbounds which are reserved in from-place, and\n create inbounds in the to-place.\n Nothing happens if you releasr an already released stock transfer document.\n <p>\n Returns <code>document_is_voided</code> if document is voided.',
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
  const response = await client.api.warehouse.stocktransferV1.updateRelease(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
