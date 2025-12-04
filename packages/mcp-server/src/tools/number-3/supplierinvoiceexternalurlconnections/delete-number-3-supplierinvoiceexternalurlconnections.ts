// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.supplierinvoiceexternalurlconnections',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/supplierinvoiceexternalurlconnections/{Id}',
  operationId: 'delete_4',
};

export const tool: Tool = {
  name: 'delete_number_3_supplierinvoiceexternalurlconnections',
  description: 'Remove a supplier invoice external URL connection',
  inputSchema: {
    type: 'object',
    properties: {
      Id: {
        type: 'integer',
      },
    },
    required: ['Id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Id, ...body } = args as any;
  const response = await client.number3.supplierinvoiceexternalurlconnections.delete(Id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
