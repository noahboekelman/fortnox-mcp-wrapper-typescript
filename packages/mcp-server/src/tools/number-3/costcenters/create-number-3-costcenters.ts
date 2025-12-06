// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox_mcp_wrapper/fortnox-mcp-api/filtering';
import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.costcenters',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/costcenters',
  operationId: 'create_13',
};

export const tool: Tool = {
  name: 'create_number_3_costcenters',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a cost center\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/cost_center_wrap',\n  $defs: {\n    cost_center_wrap: {\n      type: 'object',\n      properties: {\n        CostCenter: {\n          $ref: '#/$defs/cost_center'\n        }\n      }\n    },\n    cost_center: {\n      type: 'object',\n      properties: {\n        Code: {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Active: {\n          type: 'boolean'\n        },\n        Note: {\n          type: 'string'\n        }\n      },\n      required: [        'Code',\n        'Description'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      CostCenter: {
        $ref: '#/$defs/cost_center',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      cost_center: {
        type: 'object',
        properties: {
          Code: {
            type: 'string',
          },
          Description: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          Active: {
            type: 'boolean',
          },
          Note: {
            type: 'string',
          },
        },
        required: ['Code', 'Description'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.costcenters.create(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
