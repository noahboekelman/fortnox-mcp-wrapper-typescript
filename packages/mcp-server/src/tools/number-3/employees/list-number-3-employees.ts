// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.employees',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/employees',
  operationId: 'list_16',
};

export const tool: Tool = {
  name: 'list_number_3_employees',
  description:
    'ScheduleId, MonthlySalary and HourlyPay reflect current values, all\n ScheduleIds are returned in DatedSchedules and all MonthlySalary and\n HourlyPay pairs are returned in DatedWages.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  try {
    return asTextContentResult(await client.number3.employees.list());
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
