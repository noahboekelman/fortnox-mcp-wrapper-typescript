// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.employees',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/employees/{EmployeeId}',
  operationId: 'get_20',
};

export const tool: Tool = {
  name: 'retrieve_number_3_employees',
  description:
    'ScheduleId, MonthlySalary and HourlyPay reflect current values, all\n ScheduleIds are returned in DatedSchedules and all MonthlySalary and\n HourlyPay pairs are returned in DatedWages.',
  inputSchema: {
    type: 'object',
    properties: {
      EmployeeId: {
        type: 'string',
      },
    },
    required: ['EmployeeId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { EmployeeId, ...body } = args as any;
  try {
    return asTextContentResult(await client.number3.employees.retrieve(EmployeeId));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
