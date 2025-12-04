// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.assets.types',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/assets/types/{id}',
  operationId: '1_update_6',
};

export const tool: Tool = {
  name: 'update_assets_number_3_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate an asset type\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_asset_type_wrap_single',\n  $defs: {\n    fortnox_asset_type_wrap_single: {\n      type: 'object',\n      properties: {\n        Type: {\n          $ref: '#/$defs/fortnox_asset_type'\n        }\n      }\n    },\n    fortnox_asset_type: {\n      type: 'object',\n      properties: {\n        '@url': {\n          type: 'string'\n        },\n        AccountAsset: {\n          type: 'integer'\n        },\n        AccountAssetId: {\n          type: 'integer'\n        },\n        AccountDepreciation: {\n          type: 'integer'\n        },\n        AccountDepreciationId: {\n          type: 'integer'\n        },\n        AccountRevaluation: {\n          type: 'integer'\n        },\n        AccountRevaluationId: {\n          type: 'integer'\n        },\n        AccountSaleLoss: {\n          type: 'integer'\n        },\n        AccountSaleLossId: {\n          type: 'integer'\n        },\n        AccountSaleWin: {\n          type: 'integer'\n        },\n        AccountSaleWinId: {\n          type: 'integer'\n        },\n        AccountValueLoss: {\n          type: 'integer'\n        },\n        AccountValueLossId: {\n          type: 'integer'\n        },\n        AccountWriteDown: {\n          type: 'integer'\n        },\n        AccountWriteDownAck: {\n          type: 'integer'\n        },\n        AccountWriteDownAckId: {\n          type: 'integer'\n        },\n        AccountWriteDownId: {\n          type: 'integer'\n        },\n        Description: {\n          type: 'string'\n        },\n        Id: {\n          type: 'integer'\n        },\n        InUse: {\n          type: 'boolean'\n        },\n        Notes: {\n          type: 'string'\n        },\n        Number: {\n          type: 'string'\n        },\n        Type: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      AssetType: {
        $ref: '#/$defs/fortnox_update_asset',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
    $defs: {
      fortnox_update_asset: {
        type: 'object',
        properties: {
          Description: {
            type: 'string',
          },
          Notes: {
            type: 'string',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.assets.types.update(id, body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
