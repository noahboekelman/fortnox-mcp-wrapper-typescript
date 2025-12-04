// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.integration_partner.apps.sales_v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/integration-partner/apps/sales-v1/{appId}/{tenantId}',
  operationId: 'getAppSalesForSingleAppAndTenant',
};

export const tool: Tool = {
  name: 'get_sales_info_for_tenant_apps_integration_partner_api_sales_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<h3>Prerequisites</h3>\n The partner has an active developer account and a published integration that is purchased through Fortnox.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/integration_partner_app_sales_response',\n  $defs: {\n    integration_partner_app_sales_response: {\n      type: 'object',\n      properties: {\n        appId: {\n          type: 'string'\n        },\n        tenants: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              purchases: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    amount: {\n                      type: 'integer'\n                    },\n                    identifier: {\n                      type: 'string'\n                    },\n                    purchaseTime: {\n                      type: 'object',\n                      additionalProperties: true\n                    }\n                  }\n                }\n              },\n              tenantId: {\n                type: 'string'\n              },\n              terminations: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    amount: {\n                      type: 'integer'\n                    },\n                    identifier: {\n                      type: 'string'\n                    },\n                    onCancellationTime: {\n                      type: 'object',\n                      additionalProperties: true\n                    }\n                  }\n                }\n              },\n              users: {\n                type: 'array',\n                items: {\n                  type: 'object',\n                  properties: {\n                    activationTime: {\n                      type: 'object',\n                      additionalProperties: true\n                    },\n                    email: {\n                      type: 'string'\n                    },\n                    externalSourceId: {\n                      type: 'string'\n                    },\n                    name: {\n                      type: 'string'\n                    },\n                    userType: {\n                      type: 'string'\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      appId: {
        type: 'string',
      },
      tenantId: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['appId', 'tenantId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { tenantId, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.api.integrationPartner.apps.salesV1.getSalesInfoForTenant(tenantId, body),
      ),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
