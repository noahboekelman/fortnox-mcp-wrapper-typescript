// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/vacationdebtbasis/{Year}/{Month}',
  operationId: 'get_55',
};

export const tool: Tool = {
  name: 'retrieve_vacation_debt_basis_number_3',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a specific vacation debt basis for a posted voucher\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_3_retrieve_vacation_debt_basis_response',\n  $defs: {\n    number_3_retrieve_vacation_debt_basis_response: {\n      type: 'object',\n      properties: {\n        VacationDebtBasis: {\n          type: 'object',\n          properties: {\n            Month: {\n              type: 'integer'\n            },\n            Year: {\n              type: 'integer'\n            },\n            Employees: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  EmployeeId: {\n                    type: 'string'\n                  },\n                  DaysEarned: {\n                    type: 'number'\n                  },\n                  DaysSaved: {\n                    type: 'number'\n                  },\n                  DaysUnused: {\n                    type: 'number'\n                  },\n                  DebtAdvance: {\n                    type: 'number'\n                  },\n                  DebtEarned: {\n                    type: 'number'\n                  },\n                  DebtSaved: {\n                    type: 'number'\n                  },\n                  DebtUnused: {\n                    type: 'number'\n                  },\n                  EmployeeName: {\n                    type: 'string'\n                  },\n                  TotalDebtEmployee: {\n                    type: 'number'\n                  },\n                  TotalDebtEmployerContribution: {\n                    type: 'number'\n                  },\n                  VariableEarned: {\n                    type: 'number'\n                  },\n                  VariableUnused: {\n                    type: 'number'\n                  },\n                  WageEarned: {\n                    type: 'number'\n                  },\n                  WageSaved: {\n                    type: 'number'\n                  },\n                  WageUnused: {\n                    type: 'number'\n                  }\n                },\n                required: [                  'EmployeeId'\n                ]\n              }\n            },\n            LastDay: {\n              type: 'string',\n              format: 'date'\n            },\n            VoucherNumber: {\n              type: 'integer'\n            },\n            VoucherSeries: {\n              type: 'string'\n            },\n            VoucherYear: {\n              type: 'integer'\n            }\n          },\n          required: [            'Month',\n            'Year'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Year: {
        type: 'integer',
      },
      Month: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['Year', 'Month'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Month, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.retrieveVacationDebtBasis(Month, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
