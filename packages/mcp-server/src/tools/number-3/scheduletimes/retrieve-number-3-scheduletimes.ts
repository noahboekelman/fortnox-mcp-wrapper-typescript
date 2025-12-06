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
  resource: 'number_3.scheduletimes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/scheduletimes/{EmployeeId}/{Date}',
  operationId: 'get_42',
};

export const tool: Tool = {
  name: 'retrieve_number_3_scheduletimes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a specific schedule time\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/schedule_time_wrap',\n  $defs: {\n    schedule_time_wrap: {\n      type: 'object',\n      properties: {\n        ScheduleTime: {\n          type: 'object',\n          properties: {\n            Date: {\n              type: 'string',\n              format: 'date'\n            },\n            EmployeeId: {\n              type: 'string'\n            },\n            Hours: {\n              type: 'string'\n            },\n            IWH1: {\n              type: 'string'\n            },\n            IWH2: {\n              type: 'string'\n            },\n            IWH3: {\n              type: 'string'\n            },\n            IWH4: {\n              type: 'string'\n            },\n            IWH5: {\n              type: 'string'\n            },\n            ScheduleId: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      EmployeeId: {
        type: 'string',
      },
      Date: {
        type: 'string',
        format: 'date',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['EmployeeId', 'Date'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Date, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.scheduletimes.retrieve(Date, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
