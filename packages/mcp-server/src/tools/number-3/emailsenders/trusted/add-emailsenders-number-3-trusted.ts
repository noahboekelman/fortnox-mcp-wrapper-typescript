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
  resource: 'number_3.emailsenders.trusted',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/emailsenders/trusted',
  operationId: 'create_44',
};

export const tool: Tool = {
  name: 'add_emailsenders_number_3_trusted',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAdd a new email address as trusted\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_trusted_email_sender_trusted_sender_wrap',\n  $defs: {\n    fortnox_trusted_email_sender_trusted_sender_wrap: {\n      type: 'object',\n      properties: {\n        TrustedSender: {\n          $ref: '#/$defs/fortnox_trusted_email_sender_trusted_sender'\n        }\n      }\n    },\n    fortnox_trusted_email_sender_trusted_sender: {\n      type: 'object',\n      properties: {\n        Email: {\n          type: 'string'\n        },\n        Id: {\n          type: 'integer'\n        }\n      },\n      required: [        'Email'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      TrustedSender: {
        $ref: '#/$defs/fortnox_trusted_email_sender_trusted_sender',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      fortnox_trusted_email_sender_trusted_sender: {
        type: 'object',
        properties: {
          Email: {
            type: 'string',
          },
          Id: {
            type: 'integer',
          },
        },
        required: ['Email'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.emailsenders.trusted.add(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
