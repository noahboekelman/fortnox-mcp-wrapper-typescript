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
  resource: 'api.warehouse.purchaseorders_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/api/warehouse/purchaseorders-v1/{id}/partial',
  operationId: 'updatePartial',
};

export const tool: Tool = {
  name: 'update_partial_warehouse_api_purchaseorders_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Perform a partial update of a purchase order, see <code>PartialPurchaseOrder</code> for possible\n fields that are updateable.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/warehouse_partial_purchase_order',\n  $defs: {\n    warehouse_partial_purchase_order: {\n      type: 'object',\n      properties: {\n        deliveryDate: {\n          type: 'string',\n          format: 'date'\n        },\n        internalReference: {\n          type: 'string'\n        },\n        messageToSupplier: {\n          type: 'string'\n        },\n        note: {\n          type: 'string'\n        },\n        supplierName: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      deliveryDate: {
        type: 'string',
        format: 'date',
      },
      internalReference: {
        type: 'string',
      },
      messageToSupplier: {
        type: 'string',
      },
      note: {
        type: 'string',
      },
      supplierName: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.purchaseordersV1.updatePartial(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
