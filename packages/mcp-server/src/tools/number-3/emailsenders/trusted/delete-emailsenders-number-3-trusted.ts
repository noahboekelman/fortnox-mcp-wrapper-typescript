// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.emailsenders.trusted',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/emailsenders/trusted/{Id}',
  operationId: 'remove_23',
};

export const tool: Tool = {
  name: 'delete_emailsenders_number_3_trusted',
  description: 'Provide an id matching an email to delete.',
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
  const response = await client.number3.emailsenders.trusted.delete(Id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
