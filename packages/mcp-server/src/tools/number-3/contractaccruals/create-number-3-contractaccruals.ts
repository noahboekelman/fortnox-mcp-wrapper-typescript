// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.contractaccruals',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/contractaccruals',
  operationId: '1_create_10',
};

export const tool: Tool = {
  name: 'create_number_3_contractaccruals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a contract accrual\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_contract_accrual_wrap',\n  $defs: {\n    fortnox_contract_accrual_wrap: {\n      type: 'object',\n      properties: {\n        ContractAccrual: {\n          $ref: '#/$defs/fortnox_contract_accrual'\n        }\n      }\n    },\n    fortnox_contract_accrual: {\n      type: 'object',\n      properties: {\n        AccrualAccount: {\n          type: 'integer'\n        },\n        AccrualRows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_contract_accrual_accrual_row'\n          }\n        },\n        CostAccount: {\n          type: 'integer'\n        },\n        Description: {\n          type: 'string'\n        },\n        DocumentNumber: {\n          type: 'integer'\n        },\n        Total: {\n          type: 'number'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Period: {\n          type: 'string',\n          enum: [            'MONTHLY',\n            'BIMONTHLY',\n            'QUARTERLY',\n            'SEMIANNUALLY',\n            'ANNUALLY'\n          ]\n        },\n        Times: {\n          type: 'integer'\n        },\n        VATIncluded: {\n          type: 'boolean'\n        }\n      },\n      required: [        'AccrualAccount',\n        'AccrualRows',\n        'CostAccount',\n        'Description',\n        'DocumentNumber',\n        'Total'\n      ]\n    },\n    fortnox_contract_accrual_accrual_row: {\n      type: 'object',\n      properties: {\n        Account: {\n          type: 'integer'\n        },\n        Credit: {\n          type: 'number'\n        },\n        Debit: {\n          type: 'number'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Project: {\n          type: 'string'\n        },\n        TransactionInformation: {\n          type: 'string'\n        }\n      },\n      required: [        'Account',\n        'Credit',\n        'Debit'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ContractAccrual: {
        $ref: '#/$defs/fortnox_contract_accrual',
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
      fortnox_contract_accrual: {
        type: 'object',
        properties: {
          AccrualAccount: {
            type: 'integer',
          },
          AccrualRows: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_contract_accrual_accrual_row',
            },
          },
          CostAccount: {
            type: 'integer',
          },
          Description: {
            type: 'string',
          },
          DocumentNumber: {
            type: 'integer',
          },
          Total: {
            type: 'number',
          },
          '@url': {
            type: 'string',
          },
          Period: {
            type: 'string',
            enum: ['MONTHLY', 'BIMONTHLY', 'QUARTERLY', 'SEMIANNUALLY', 'ANNUALLY'],
          },
          Times: {
            type: 'integer',
          },
          VATIncluded: {
            type: 'boolean',
          },
        },
        required: ['AccrualAccount', 'AccrualRows', 'CostAccount', 'Description', 'DocumentNumber', 'Total'],
      },
      fortnox_contract_accrual_accrual_row: {
        type: 'object',
        properties: {
          Account: {
            type: 'integer',
          },
          Credit: {
            type: 'number',
          },
          Debit: {
            type: 'number',
          },
          CostCenter: {
            type: 'string',
          },
          Project: {
            type: 'string',
          },
          TransactionInformation: {
            type: 'string',
          },
        },
        required: ['Account', 'Credit', 'Debit'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.contractaccruals.create(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
