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
  resource: 'api.warehouse.stocktaking_v1.rows',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/warehouse/stocktaking-v1/{id}/rows',
  operationId: 'deleteStockTakingRowByFilter',
};

export const tool: Tool = {
  name: 'delete_all_stocktaking_v1_warehouse_api_rows',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Remove all rows matching the filter parameters from the Stock Taking document.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/row_delete_all_response',\n  $defs: {\n    row_delete_all_response: {\n      type: 'integer'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      excludeZeroBalanceItems: {
        type: 'boolean',
      },
      itemDescriptionSearch: {
        type: 'string',
      },
      itemIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      itemIdSearch: {
        type: 'string',
      },
      stockLocationIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      stockPointIds: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      supplierNumbers: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      transactionDate: {
        type: 'string',
        format: 'date',
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.warehouse.stocktakingV1.rows.deleteAll(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
