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
  resource: 'api.integration_developer',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/integration-developer/sales-v1/{integrationId}',
  operationId: 'getSalesForSingleIntegration',
};

export const tool: Tool = {
  name: 'get_sales_info_api_integration_developer',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Prerequisites\n The partner has an active developer account and a published integration that is purchased through Fortnox.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/integration_developer_get_sales_info_response',\n  $defs: {\n    integration_developer_get_sales_info_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          amount: {\n            type: 'integer'\n          },\n          date: {\n            type: 'string',\n            format: 'date-time'\n          },\n          orderId: {\n            type: 'string'\n          },\n          tenantId: {\n            type: 'string'\n          },\n          type: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      integrationId: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['integrationId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { integrationId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.integrationDeveloper.getSalesInfo(integrationId)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
