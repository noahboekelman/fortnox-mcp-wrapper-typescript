// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.deliveries_v1.inbounddeliveries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/warehouse/deliveries-v1/inbounddeliveries/{id}/release',
  operationId: 'release',
};

export const tool: Tool = {
  name: 'update_release_deliveries_v1_warehouse_api_inbounddeliveries',
  description:
    '<p>\n The document will be locked and bookkept.\n <p>\n The following error codes might be thrown:\n  <dl>\n  <dt>cannot_release_later_than_current_date</dt>\n    <dd>Document date cannot be in the future.</dd>\n  <dt>document_is_voided</dt>\n    <dd>Document is voided.</dd>\n  <dt>period_locked</dt>\n    <dd>Document date is within a locked bookkeeping period.</dd>\n  </dl>',
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
  const response = await client.api.warehouse.deliveriesV1.inbounddeliveries.updateRelease(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
