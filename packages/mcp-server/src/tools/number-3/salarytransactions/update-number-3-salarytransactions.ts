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
  resource: 'number_3.salarytransactions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/salarytransactions/{SalaryRow}',
  operationId: 'update_32',
};

export const tool: Tool = {
  name: 'update_number_3_salarytransactions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a salary transaction\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/salary_transaction_wrap',\n  $defs: {\n    salary_transaction_wrap: {\n      type: 'object',\n      properties: {\n        SalaryTransaction: {\n          $ref: '#/$defs/fortnox_salary_transaction'\n        }\n      },\n      required: [        'SalaryTransaction'\n      ]\n    },\n    fortnox_salary_transaction: {\n      type: 'object',\n      properties: {\n        Date: {\n          type: 'string',\n          format: 'date'\n        },\n        EmployeeId: {\n          type: 'string'\n        },\n        SalaryCode: {\n          type: 'string'\n        },\n        Amount: {\n          type: 'string'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Expense: {\n          type: 'string'\n        },\n        Number: {\n          type: 'string'\n        },\n        Project: {\n          type: 'string'\n        },\n        SalaryRow: {\n          type: 'integer'\n        },\n        TextRow: {\n          type: 'string'\n        },\n        Total: {\n          type: 'string'\n        },\n        VAT: {\n          type: 'string'\n        }\n      },\n      required: [        'Date',\n        'EmployeeId',\n        'SalaryCode'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      SalaryRow: {
        type: 'integer',
      },
      SalaryTransaction: {
        $ref: '#/$defs/fortnox_salary_transaction',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['SalaryRow', 'SalaryTransaction'],
    $defs: {
      fortnox_salary_transaction: {
        type: 'object',
        properties: {
          Date: {
            type: 'string',
            format: 'date',
          },
          EmployeeId: {
            type: 'string',
          },
          SalaryCode: {
            type: 'string',
          },
          Amount: {
            type: 'string',
          },
          CostCenter: {
            type: 'string',
          },
          Expense: {
            type: 'string',
          },
          Number: {
            type: 'string',
          },
          Project: {
            type: 'string',
          },
          SalaryRow: {
            type: 'integer',
          },
          TextRow: {
            type: 'string',
          },
          Total: {
            type: 'string',
          },
          VAT: {
            type: 'string',
          },
        },
        required: ['Date', 'EmployeeId', 'SalaryCode'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { SalaryRow, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.salarytransactions.update(SalaryRow, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
