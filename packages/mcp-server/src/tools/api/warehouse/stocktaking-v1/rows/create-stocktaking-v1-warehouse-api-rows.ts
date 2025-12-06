// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'api.warehouse.stocktaking_v1.rows',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/warehouse/stocktaking-v1/{id}/rows',
  operationId: 'addStockTakingRows',
};

export const tool: Tool = {
  name: 'create_stocktaking_v1_warehouse_api_rows',
  description: '<p>\n Add rows to a stock taking.\n If you add an already existing row noting happens.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/warehouse_stock_taking_row',
        },
      },
    },
    required: ['id'],
    $defs: {
      warehouse_stock_taking_row: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          countedBy: {
            type: 'string',
          },
          currentRowNo: {
            type: 'integer',
          },
          hasPostReleaseStockChanges: {
            type: 'boolean',
          },
          itemId: {
            type: 'string',
          },
          stockLocationId: {
            type: 'string',
          },
          stockPointId: {
            type: 'string',
          },
          stockTakenQuantity: {
            type: 'number',
          },
          stockTakingId: {
            type: 'integer',
          },
          stockTakingRowId: {
            type: 'string',
          },
          totalQuantityInStock: {
            type: 'number',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.api.warehouse.stocktakingV1.rows.create(id, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
