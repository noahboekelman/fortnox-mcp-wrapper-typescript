// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.contracts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/contracts',
  operationId: 'list_10',
};

export const tool: Tool = {
  name: 'list_number_3_contracts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of contracts\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/contract_list_response',\n  $defs: {\n    contract_list_response: {\n      type: 'object',\n      properties: {\n        Contracts: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              CustomerNumber: {\n                type: 'string'\n              },\n              PeriodEnd: {\n                type: 'string',\n                format: 'date'\n              },\n              '@url': {\n                type: 'string'\n              },\n              Continuous: {\n                type: 'boolean'\n              },\n              ContractLength: {\n                type: 'integer'\n              },\n              Currency: {\n                type: 'string'\n              },\n              CustomerName: {\n                type: 'string'\n              },\n              DocumentNumber: {\n                type: 'string'\n              },\n              Invoiceinterval: {\n                type: 'integer'\n              },\n              InvoicesRemaining: {\n                type: 'integer'\n              },\n              LastInvoiceDate: {\n                type: 'string'\n              },\n              PeriodStart: {\n                type: 'string',\n                format: 'date'\n              },\n              Status: {\n                type: 'string'\n              },\n              TemplateNumber: {\n                type: 'integer'\n              },\n              Total: {\n                type: 'number'\n              }\n            },\n            required: [              'CustomerNumber',\n              'PeriodEnd'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'string',
        description: 'possibility to filter contracts',
        enum: ['active', 'inactive', 'finished'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.contracts.list(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
