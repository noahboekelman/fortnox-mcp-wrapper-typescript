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
  resource: 'number_3',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/me',
  operationId: 'get_30',
};

export const tool: Tool = {
  name: 'retrieve_user_information_number_3',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve user information\n Use this endpoint to retrieve user information related to the used access token\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_3_retrieve_user_information_response',\n  $defs: {\n    number_3_retrieve_user_information_response: {\n      type: 'object',\n      properties: {\n        MeInformation: {\n          type: 'object',\n          properties: {\n            Email: {\n              type: 'string'\n            },\n            Id: {\n              type: 'string'\n            },\n            Locale: {\n              type: 'string'\n            },\n            Name: {\n              type: 'string'\n            },\n            SysAdmin: {\n              type: 'boolean'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.retrieveUserInformation()));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
