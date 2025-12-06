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
  resource: 'api.warehouse.deliveries_v1',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/warehouse/deliveries-v1',
  operationId: 'getAll',
};

export const tool: Tool = {
  name: 'retrieve_deliveries_v1_warehouse_api_deliveries_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList manual documents\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/deliveries_v1_retrieve_deliveries_v1_response',\n  $defs: {\n    deliveries_v1_retrieve_deliveries_v1_response: {\n      type: 'object',\n      properties: {\n        date: {\n          type: 'string',\n          format: 'date'\n        },\n        deliveryId: {\n          type: 'integer'\n        },\n        entityId: {\n          type: 'string'\n        },\n        note: {\n          type: 'string'\n        },\n        released: {\n          type: 'boolean'\n        },\n        type: {\n          type: 'string',\n          enum: [            'Inbound',\n            'Outbound',\n            'StockTransfer'\n          ]\n        },\n        voided: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      itemId: {
        type: 'string',
        description: 'Include only documents containing the given item.',
      },
      state: {
        type: 'string',
        description: 'Include only documents with given state.',
        enum: ['all', 'unreleased', 'released', 'voided'],
      },
      type: {
        type: 'string',
        description: 'Include only documents with given type.',
        enum: ['all', 'inbound', 'outbound', 'stocktransfer'],
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
      await maybeFilter(jq_filter, await client.api.warehouse.deliveriesV1.retrieveDeliveriesV1(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
