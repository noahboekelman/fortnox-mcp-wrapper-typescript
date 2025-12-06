// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.assets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/3/assets/{GivenNumber}',
  operationId: 'delete_1',
};

export const tool: Tool = {
  name: 'delete_number_3_assets',
  description:
    'By specifying a {GivenNumber} in the URL a single &quot;Not active&quot; asset or asset with a type &quot;Not depreciable&quot; can be deleted. By specifying a {GivenNumber} in the URL a single &quot;Active&quot; or &quot;Fully depreciated&quot; assets can be voided and in this case in request body voiddate should be provided, otherwise it will use todays date.',
  inputSchema: {
    type: 'object',
    properties: {
      GivenNumber: {
        type: 'string',
      },
      Asset: {
        type: 'object',
        properties: {
          Date: {
            type: 'string',
          },
        },
      },
    },
    required: ['GivenNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { GivenNumber, ...body } = args as any;
  const response = await client.number3.assets.delete(GivenNumber, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
