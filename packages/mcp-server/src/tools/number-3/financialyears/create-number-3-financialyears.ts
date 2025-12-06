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
  resource: 'number_3.financialyears',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/financialyears',
  operationId: 'create_20',
};

export const tool: Tool = {
  name: 'create_number_3_financialyears',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a financial year\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/financial_year_wrap',\n  $defs: {\n    financial_year_wrap: {\n      type: 'object',\n      properties: {\n        FinancialYear: {\n          $ref: '#/$defs/financial_year'\n        }\n      },\n      required: [        'FinancialYear'\n      ]\n    },\n    financial_year: {\n      type: 'object',\n      properties: {\n        FromDate: {\n          type: 'string',\n          format: 'date'\n        },\n        ToDate: {\n          type: 'string',\n          format: 'date'\n        },\n        '@url': {\n          type: 'string'\n        },\n        AccountChartType: {\n          type: 'string'\n        },\n        AccountingMethod: {\n          type: 'string',\n          enum: [            'ACCRUAL',\n            'CASH'\n          ]\n        },\n        Id: {\n          type: 'integer'\n        }\n      },\n      required: [        'FromDate',\n        'ToDate'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      FinancialYear: {
        $ref: '#/$defs/financial_year',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['FinancialYear'],
    $defs: {
      financial_year: {
        type: 'object',
        properties: {
          FromDate: {
            type: 'string',
            format: 'date',
          },
          ToDate: {
            type: 'string',
            format: 'date',
          },
          '@url': {
            type: 'string',
          },
          AccountChartType: {
            type: 'string',
          },
          AccountingMethod: {
            type: 'string',
            enum: ['ACCRUAL', 'CASH'],
          },
          Id: {
            type: 'integer',
          },
        },
        required: ['FromDate', 'ToDate'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.financialyears.create(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
