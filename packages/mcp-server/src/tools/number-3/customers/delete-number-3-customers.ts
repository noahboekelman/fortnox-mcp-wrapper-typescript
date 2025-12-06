// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/customers/{CustomerNumber}',
  operationId: 'remove_10',
};

export const tool: Tool = {
  name: 'delete_number_3_customers',
  description:
    'Deletes the customer permanently. If everything succeeded the response will be of the type 204 \\u2013 No content and the response body will be empty. If there was any problems an error will be returned.\n You need to supply the unique customer number of the customer that you want to delete.',
  inputSchema: {
    type: 'object',
    properties: {
      CustomerNumber: {
        type: 'string',
      },
    },
    required: ['CustomerNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { CustomerNumber, ...body } = args as any;
  const response = await client.number3.customers.delete(CustomerNumber).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
