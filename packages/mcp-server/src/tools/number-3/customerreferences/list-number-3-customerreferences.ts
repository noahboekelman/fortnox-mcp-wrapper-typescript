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
  resource: 'number_3.customerreferences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/customerreferences',
  operationId: 'list_14',
};

export const tool: Tool = {
  name: 'list_number_3_customerreferences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n</p>\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_reference_wrap',\n  $defs: {\n    customer_reference_wrap: {\n      type: 'object',\n      properties: {\n        CustomerReference: {\n          type: 'object',\n          properties: {\n            CustomerReferenceRows: {\n              type: 'array',\n              items: {\n                $ref: '#/$defs/customer_reference_row'\n              }\n            }\n          }\n        }\n      }\n    },\n    customer_reference_row: {\n      type: 'object',\n      properties: {\n        CustomerNumber: {\n          type: 'string'\n        },\n        Id: {\n          type: 'integer'\n        },\n        Reference: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      customer: {
        type: 'string',
        description: 'possibility to filter by customer number',
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.customerreferences.list(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
