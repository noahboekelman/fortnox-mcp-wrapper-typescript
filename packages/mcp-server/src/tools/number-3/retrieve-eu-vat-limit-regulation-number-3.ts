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
  httpPath: '/3/euvatlimitregulation',
  operationId: 'get_21',
};

export const tool: Tool = {
  name: 'retrieve_eu_vat_limit_regulation_number_3',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve details about eu vat limit\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/number_3_retrieve_eu_vat_limit_regulation_response',\n  $defs: {\n    number_3_retrieve_eu_vat_limit_regulation_response: {\n      type: 'object',\n      properties: {\n        EUVatLimitRegulation: {\n          type: 'object',\n          properties: {\n            IsOverLimit: {\n              type: 'boolean'\n            },\n            Limit: {\n              type: 'integer'\n            },\n            TotalExclVat: {\n              type: 'number'\n            },\n            Year: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      year: {
        type: 'integer',
        description:
          'eu vat limit regulation for year, if not provided than this will be set to current year',
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
      await maybeFilter(jq_filter, await client.number3.retrieveEuVatLimitRegulation(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
