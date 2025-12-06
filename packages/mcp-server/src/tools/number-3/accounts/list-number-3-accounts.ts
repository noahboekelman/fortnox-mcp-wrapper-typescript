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
  resource: 'number_3.accounts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/accounts',
  operationId: 'list_2',
};

export const tool: Tool = {
  name: 'list_number_3_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe accounts are returned sorted by account number with the lowest number appearing first.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/account_list_response',\n  $defs: {\n    account_list_response: {\n      type: 'object',\n      properties: {\n        Accounts: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              Description: {\n                type: 'string'\n              },\n              Number: {\n                type: 'integer'\n              },\n              '@url': {\n                type: 'string'\n              },\n              Active: {\n                type: 'boolean'\n              },\n              BalanceBroughtForward: {\n                type: 'number'\n              },\n              CostCenter: {\n                type: 'string'\n              },\n              CostCenterSettings: {\n                type: 'string',\n                enum: [                  'ALLOWED',\n                  'MANDATORY',\n                  'NOTALLOWED'\n                ]\n              },\n              Project: {\n                type: 'string'\n              },\n              ProjectSettings: {\n                type: 'string',\n                enum: [                  'ALLOWED',\n                  'MANDATORY',\n                  'NOTALLOWED'\n                ]\n              },\n              SRU: {\n                type: 'integer'\n              },\n              VATCode: {\n                type: 'string'\n              },\n              Year: {\n                type: 'integer'\n              }\n            },\n            required: [              'Description',\n              'Number'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      lastmodified: {
        type: 'string',
      },
      sortby: {
        type: 'string',
        description: 'field to sort returned list on',
        enum: ['number'],
      },
      sru: {
        type: 'integer',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.accounts.list(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
