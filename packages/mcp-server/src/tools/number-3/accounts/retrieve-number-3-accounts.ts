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
  httpPath: '/3/accounts/{Number}',
  operationId: 'get_2',
};

export const tool: Tool = {
  name: 'retrieve_number_3_accounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves the details of an account. You need to supply the unique account number that was returned when the account was created or retrieved from the list of accounts.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_account_single_item_wrap',\n  $defs: {\n    fortnox_account_single_item_wrap: {\n      type: 'object',\n      properties: {\n        Account: {\n          type: 'object',\n          properties: {\n            Description: {\n              type: 'string'\n            },\n            Number: {\n              type: 'integer'\n            },\n            '@url': {\n              type: 'string'\n            },\n            Active: {\n              type: 'boolean'\n            },\n            BalanceBroughtForward: {\n              type: 'number'\n            },\n            BalanceCarriedForward: {\n              type: 'number'\n            },\n            CostCenter: {\n              type: 'string'\n            },\n            CostCenterSettings: {\n              type: 'string',\n              enum: [                'ALLOWED',\n                'MANDATORY',\n                'NOTALLOWED'\n              ]\n            },\n            OpeningQuantities: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  Balance: {\n                    type: 'integer'\n                  },\n                  Project: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            Project: {\n              type: 'string'\n            },\n            ProjectSettings: {\n              type: 'string',\n              enum: [                'ALLOWED',\n                'MANDATORY',\n                'NOTALLOWED'\n              ]\n            },\n            QuantitySettings: {\n              type: 'string',\n              enum: [                'ALLOWED',\n                'MANDATORY',\n                'NOTALLOWED'\n              ]\n            },\n            QuantityUnit: {\n              type: 'string'\n            },\n            SRU: {\n              type: 'integer'\n            },\n            TransactionInformation: {\n              type: 'string'\n            },\n            TransactionInformationSettings: {\n              type: 'string',\n              enum: [                'ALLOWED',\n                'MANDATORY',\n                'NOTALLOWED'\n              ]\n            },\n            VATCode: {\n              type: 'string'\n            },\n            Year: {\n              type: 'integer'\n            }\n          },\n          required: [            'Description',\n            'Number'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Number: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['Number'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Number, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.accounts.retrieve(Number)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
