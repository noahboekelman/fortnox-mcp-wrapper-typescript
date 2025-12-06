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
  resource: 'number_3.absencetransactions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/absencetransactions/{id}',
  operationId: '1_update',
};

export const tool: Tool = {
  name: 'update_number_3_absencetransactions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a single absence transaction\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_absence_transaction_single_item_wrap',\n  $defs: {\n    fortnox_absence_transaction_single_item_wrap: {\n      type: 'object',\n      properties: {\n        AbsenceTransaction: {\n          type: 'object',\n          properties: {\n            CauseCode: {\n              type: 'string',\n              enum: [                'ASK',\n                'FPE',\n                'FRA',\n                'HAV',\n                'KOM',\n                'MIL',\n                'NAR',\n                'OS1',\n                'OS2',\n                'OS3',\n                'OS4',\n                'OS5',\n                'PAP',\n                'PEM',\n                'PER',\n                'SEM',\n                'SJK',\n                'SMB',\n                'SVE',\n                'TJL',\n                'UTB',\n                'VAB'\n              ]\n            },\n            Date: {\n              type: 'string',\n              format: 'date'\n            },\n            EmployeeId: {\n              type: 'string'\n            },\n            id: {\n              type: 'string'\n            },\n            '@url': {\n              type: 'string'\n            },\n            CostCenter: {\n              type: 'string'\n            },\n            Extent: {\n              type: 'number'\n            },\n            HolidayEntitling: {\n              type: 'boolean'\n            },\n            Hours: {\n              type: 'number'\n            },\n            Project: {\n              type: 'string'\n            }\n          },\n          required: [            'CauseCode',\n            'Date',\n            'EmployeeId'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      AbsenceTransaction: {
        $ref: '#/$defs/fortnox_absence_transaction_payload',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
    $defs: {
      fortnox_absence_transaction_payload: {
        type: 'object',
        properties: {
          CauseCode: {
            type: 'string',
            enum: [
              'ASK',
              'FPE',
              'FRA',
              'HAV',
              'KOM',
              'MIL',
              'NAR',
              'OS1',
              'OS2',
              'OS3',
              'OS4',
              'OS5',
              'PAP',
              'PEM',
              'PER',
              'SEM',
              'SJK',
              'SMB',
              'SVE',
              'TJL',
              'UTB',
              'VAB',
            ],
          },
          Date: {
            type: 'string',
            format: 'date',
          },
          EmployeeId: {
            type: 'string',
          },
          CostCenter: {
            type: 'string',
          },
          Extent: {
            type: 'number',
          },
          HolidayEntitling: {
            type: 'boolean',
          },
          Hours: {
            type: 'number',
          },
          Project: {
            type: 'string',
          },
        },
        required: ['CauseCode', 'Date', 'EmployeeId'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.absencetransactions.update(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
