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
  resource: 'number_3.supplierinvoiceaccruals',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/supplierinvoiceaccruals',
  operationId: 'list_36',
};

export const tool: Tool = {
  name: 'list_number_3_supplierinvoiceaccruals',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThe supplier invoice accruals register can return a list of records or a single record. By specifying a SupplierInvoiceNumber in the URL, a single record will be returned. Not specifying a SupplierInvoiceNumber will return a list of records.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/supplierinvoiceaccrual_list_response',\n  $defs: {\n    supplierinvoiceaccrual_list_response: {\n      type: 'object',\n      properties: {\n        SupplierInvoiceAccruals: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              Period: {\n                type: 'string',\n                enum: [                  'MONTHLY',\n                  'BIMONTHLY',\n                  'QUARTERLY',\n                  'SEMIANNUALLY',\n                  'ANNUALLY',\n                  '1_MONTHS',\n                  '2_MONTHS',\n                  '3_MONTHS',\n                  '6_MONTHS',\n                  '12_MONTHS'\n                ]\n              },\n              '@url': {\n                type: 'string'\n              },\n              Description: {\n                type: 'string'\n              },\n              SupplierInvoiceNumber: {\n                type: 'integer'\n              }\n            },\n            required: [              'Period'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.supplierinvoiceaccruals.list()),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
