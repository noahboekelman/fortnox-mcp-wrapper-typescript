// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/sie/{Type}',
  operationId: 'get_43',
};

export const tool: Tool = {
  name: 'retrieve_sie_file_number_3',
  description: 'Retrieves a SIE file as streamed content',
  inputSchema: {
    type: 'object',
    properties: {
      Type: {
        type: 'string',
      },
      financialYear: {
        type: 'integer',
        description: 'financialYear',
      },
    },
    required: ['Type'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Type, ...body } = args as any;
  const response = await client.number3.retrieveSieFile(Type, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
