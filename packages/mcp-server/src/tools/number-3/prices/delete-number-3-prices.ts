// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.prices',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}',
  operationId: 'remove_16',
};

export const tool: Tool = {
  name: 'delete_number_3_prices',
  description: 'Delete a single price',
  inputSchema: {
    type: 'object',
    properties: {
      PriceList: {
        type: 'string',
      },
      ArticleNumber: {
        type: 'string',
      },
      FromQuantity: {
        type: 'number',
      },
    },
    required: ['PriceList', 'ArticleNumber', 'FromQuantity'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { FromQuantity, ...body } = args as any;
  const response = await client.number3.prices.delete(FromQuantity, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
