// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.labels',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/labels',
  operationId: 'create_25',
};

export const tool: Tool = {
  name: 'create_number_3_labels',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe created label will be returned if everything succeeded, if there was any problems an error will be returned.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/label_wrap',\n  $defs: {\n    label_wrap: {\n      type: 'object',\n      properties: {\n        Label: {\n          $ref: '#/$defs/label'\n        }\n      },\n      required: [        'Label'\n      ]\n    },\n    label: {\n      type: 'object',\n      properties: {\n        Description: {\n          type: 'string'\n        },\n        Id: {\n          type: 'integer'\n        }\n      },\n      required: [        'Description'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Label: {
        $ref: '#/$defs/label',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['Label'],
    $defs: {
      label: {
        type: 'object',
        properties: {
          Description: {
            type: 'string',
          },
          Id: {
            type: 'integer',
          },
        },
        required: ['Description'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.labels.create(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
