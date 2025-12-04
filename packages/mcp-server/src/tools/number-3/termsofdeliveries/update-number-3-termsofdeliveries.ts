// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.termsofdeliveries',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/termsofdeliveries/{Code}',
  operationId: 'update_40',
};

export const tool: Tool = {
  name: 'update_number_3_termsofdeliveries',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a terms of delivery\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_terms_of_delivery_wrap',\n  $defs: {\n    fortnox_terms_of_delivery_wrap: {\n      type: 'object',\n      properties: {\n        TermsOfDelivery: {\n          $ref: '#/$defs/fortnox_terms_of_delivery'\n        }\n      },\n      required: [        'TermsOfDelivery'\n      ]\n    },\n    fortnox_terms_of_delivery: {\n      type: 'object',\n      properties: {\n        Code: {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        DescriptionEnglish: {\n          type: 'string'\n        }\n      },\n      required: [        'Code',\n        'Description'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Code: {
        type: 'string',
      },
      TermsOfDelivery: {
        $ref: '#/$defs/fortnox_terms_of_delivery',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['Code', 'TermsOfDelivery'],
    $defs: {
      fortnox_terms_of_delivery: {
        type: 'object',
        properties: {
          Code: {
            type: 'string',
          },
          Description: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          DescriptionEnglish: {
            type: 'string',
          },
        },
        required: ['Code', 'Description'],
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Code, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.termsofdeliveries.update(Code, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
