// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.inbox',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/inbox/{Id}',
  operationId: 'getFileById_1',
};

export const tool: Tool = {
  name: 'retrieve_file_number_3_inbox',
  description: 'Retrieve a single file',
  inputSchema: {
    type: 'object',
    properties: {
      Id: {
        type: 'string',
      },
    },
    required: ['Id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Id, ...body } = args as any;
  return asBinaryContentResult(await client.number3.inbox.retrieveFile(Id).asResponse());
};

export default { metadata, tool, handler };
