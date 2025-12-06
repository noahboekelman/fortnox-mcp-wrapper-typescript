// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/invoices/{DocumentNumber}',
  operationId: 'get_27',
};

export const tool: Tool = {
  name: 'retrieve_number_3_invoices',
  description: 'Retrieve a single invoice',
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
  try {
    return asTextContentResult(await client.number3.invoices.retrieve(DocumentNumber));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
