// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.taxreductions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/taxreductions',
  operationId: 'list_41',
};

export const tool: Tool = {
  name: 'list_number_3_taxreductions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of tax reductions\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/taxreduction_list_response',\n  $defs: {\n    taxreduction_list_response: {\n      type: 'object',\n      properties: {\n        TaxReductions: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              CustomerName: {\n                type: 'string'\n              },\n              ReferenceDocumentType: {\n                type: 'string',\n                enum: [                  'OFFER',\n                  'ORDER',\n                  'INVOICE'\n                ]\n              },\n              ReferenceNumber: {\n                type: 'integer'\n              },\n              SocialSecurityNumber: {\n                type: 'string'\n              },\n              '@url': {\n                type: 'string'\n              },\n              ApprovedAmount: {\n                type: 'number'\n              },\n              Id: {\n                type: 'integer'\n              }\n            },\n            required: [              'CustomerName',\n              'ReferenceDocumentType',\n              'ReferenceNumber',\n              'SocialSecurityNumber'\n            ]\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'string',
        description: 'possibility to filter tax reductions',
        enum: ['invoices', 'orders', 'offers'],
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.taxreductions.list(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
