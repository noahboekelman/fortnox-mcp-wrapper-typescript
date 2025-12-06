// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.labels',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/labels/{Id}',
  operationId: 'remove_14',
};

export const tool: Tool = {
  name: 'delete_number_3_labels',
  description:
    'Deletes the label and its connection to documents permanently.\n You need to supply the unique label id that was returned when the label was created or retrieved from the list of labels.',
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
  const response = await client.number3.labels.delete(Id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
