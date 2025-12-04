// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.attendancetransactions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/attendancetransactions/{id}',
  operationId: 'get_9',
};

export const tool: Tool = {
  name: 'retrieve_number_3_attendancetransactions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves a specific transaction\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_attendance_transaction_wrap',\n  $defs: {\n    fortnox_attendance_transaction_wrap: {\n      type: 'object',\n      properties: {\n        AttendanceTransaction: {\n          $ref: '#/$defs/fortnox_attendance_transaction'\n        }\n      }\n    },\n    fortnox_attendance_transaction: {\n      type: 'object',\n      properties: {\n        CauseCode: {\n          type: 'string',\n          enum: [            'ARB',\n            'BE2',\n            'BER',\n            'FLX',\n            'HLG',\n            'JO2',\n            'JOR',\n            'MER',\n            'OB1',\n            'OB2',\n            'OB3',\n            'OB4',\n            'OB5',\n            'OK0',\n            'OK1',\n            'OK2',\n            'OK3',\n            'OK4',\n            'OK5',\n            'OT1',\n            'OT2',\n            'OT3',\n            'OT4',\n            'OT5',\n            'RES',\n            'TID'\n          ]\n        },\n        Date: {\n          type: 'string',\n          format: 'date'\n        },\n        EmployeeId: {\n          type: 'string'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Hours: {\n          type: 'string'\n        },\n        Project: {\n          type: 'string'\n        }\n      },\n      required: [        'CauseCode',\n        'Date',\n        'EmployeeId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.attendancetransactions.retrieve(id)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
