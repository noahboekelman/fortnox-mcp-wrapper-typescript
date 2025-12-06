// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/offers/{DocumentNumber}/print',
  operationId: 'print_2',
};

export const tool: Tool = {
  name: 'print_number_3_offers',
  description: 'Print given offer',
  inputSchema: {
    type: 'object',
    properties: {
      DocumentNumber: {
        type: 'string',
      },
    },
    required: ['DocumentNumber'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { DocumentNumber, ...body } = args as any;
  return asBinaryContentResult(await client.number3.offers.print(DocumentNumber).asResponse());
};

export default { metadata, tool, handler };
