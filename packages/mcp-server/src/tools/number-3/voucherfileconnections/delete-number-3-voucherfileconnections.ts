// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.voucherfileconnections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/voucherfileconnections/{FileId}',
  operationId: 'remove_25',
};

export const tool: Tool = {
  name: 'delete_number_3_voucherfileconnections',
  description: 'Remove a voucher file connection',
  inputSchema: {
    type: 'object',
    properties: {
      FileId: {
        type: 'string',
      },
    },
    required: ['FileId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { FileId, ...body } = args as any;
  const response = await client.number3.voucherfileconnections.delete(FileId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
