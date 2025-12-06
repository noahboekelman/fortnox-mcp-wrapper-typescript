// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.purchaseorders_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/warehouse/purchaseorders-v1/{id}/send',
  operationId: 'sendPurchaseOrder',
};

export const tool: Tool = {
  name: 'send_warehouse_api_purchaseorders_v1',
  description:
    '<p>\n Sends the purchase order with the specified <code>id</code> to the recipient and sets the purchase order state to SENT',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      body: {
        type: 'string',
      },
      receiver: {
        type: 'string',
      },
      replyTo: {
        type: 'string',
      },
      subject: {
        type: 'string',
      },
      bodyAsHtml: {
        type: 'string',
      },
      receiverCopy: {
        type: 'string',
      },
      receiverSecretCopy: {
        type: 'string',
      },
      senderName: {
        type: 'string',
      },
    },
    required: ['id', 'body', 'receiver', 'replyTo', 'subject'],
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.warehouse.purchaseordersV1.send(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
