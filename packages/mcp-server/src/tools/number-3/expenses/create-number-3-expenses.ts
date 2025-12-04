// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.expenses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/expenses',
  operationId: 'create_18',
};

export const tool: Tool = {
  name: 'create_number_3_expenses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an expense\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/expense_wrap',\n  $defs: {\n    expense_wrap: {\n      type: 'object',\n      properties: {\n        Expense: {\n          type: 'object',\n          properties: {\n            Account: {\n              type: 'integer'\n            },\n            Code: {\n              type: 'string'\n            },\n            Text: {\n              type: 'string'\n            }\n          },\n          required: [            'Account',\n            'Code',\n            'Text'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Expense: {
        type: 'object',
        properties: {
          Account: {
            type: 'integer',
          },
          Code: {
            type: 'string',
          },
          Text: {
            type: 'string',
          },
        },
        required: ['Account', 'Code', 'Text'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.expenses.create(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
