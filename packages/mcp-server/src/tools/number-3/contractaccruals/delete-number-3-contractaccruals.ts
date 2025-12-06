// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.contractaccruals',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/contractaccruals/{DocumentNumber}',
  operationId: 'remove_6',
};

export const tool: Tool = {
  name: 'delete_number_3_contractaccruals',
  description: 'Remove a contract accrual',
  inputSchema: {
    type: 'object',
    properties: {
      DocumentNumber: {
        type: 'integer',
      },
    },
    required: ['DocumentNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { DocumentNumber, ...body } = args as any;
  const response = await client.number3.contractaccruals.delete(DocumentNumber).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
