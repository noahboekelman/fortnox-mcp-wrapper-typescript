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
  resource: 'number_3.termsofpayments',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/termsofpayments/{Code}',
  operationId: 'get_52',
};

export const tool: Tool = {
  name: 'retrieve_number_3_termsofpayments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single terms of payment\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_terms_of_payment_wrap',\n  $defs: {\n    fortnox_terms_of_payment_wrap: {\n      type: 'object',\n      properties: {\n        TermsOfPayment: {\n          $ref: '#/$defs/fortnox_terms_of_payment'\n        }\n      },\n      required: [        'TermsOfPayment'\n      ]\n    },\n    fortnox_terms_of_payment: {\n      type: 'object',\n      properties: {\n        Code: {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        }\n      },\n      required: [        'Code',\n        'Description'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Code: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['Code'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Code, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.termsofpayments.retrieve(Code)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
