// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.expenses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/expenses/{ExpenseCode}',
  operationId: 'get_22',
};

export const tool: Tool = {
  name: 'retrieve_number_3_expenses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves expense information for specified expense.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/expense_wrap',\n  $defs: {\n    expense_wrap: {\n      type: 'object',\n      properties: {\n        Expense: {\n          type: 'object',\n          properties: {\n            Account: {\n              type: 'integer'\n            },\n            Code: {\n              type: 'string'\n            },\n            Text: {\n              type: 'string'\n            }\n          },\n          required: [            'Account',\n            'Code',\n            'Text'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ExpenseCode: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ExpenseCode'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { ExpenseCode, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.expenses.retrieve(ExpenseCode)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
