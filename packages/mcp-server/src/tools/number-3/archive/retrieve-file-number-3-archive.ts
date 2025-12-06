// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.archive',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/archive/{id}',
  operationId: 'getFileById',
};

export const tool: Tool = {
  name: 'retrieve_file_number_3_archive',
  description: 'Providing fileId will return given file from fileattachments.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      fileid: {
        type: 'string',
        description: 'fileId from fileattachments',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.number3.archive.retrieveFile(id, body).asResponse());
};

export default { metadata, tool, handler };
