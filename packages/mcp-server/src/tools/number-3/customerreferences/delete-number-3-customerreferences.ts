// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.customerreferences',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/customerreferences/{CustomerReferenceRowId}',
  operationId: 'remove_9',
};

export const tool: Tool = {
  name: 'delete_number_3_customerreferences',
  description:
    '</p>\n <p>Deletes the customer reference row permanently. If everything succeeded the response will be of the type 204, No content and the response body will be empty.</p>\n <p>If there was any problems an error will be returned.</p>\n <p>You need to supply the unique customer reference row id of the customer reference row that you want to delete.</p>',
  inputSchema: {
    type: 'object',
    properties: {
      CustomerReferenceRowId: {
        type: 'string',
      },
    },
    required: ['CustomerReferenceRowId'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { CustomerReferenceRowId, ...body } = args as any;
  const response = await client.number3.customerreferences.delete(CustomerReferenceRowId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
