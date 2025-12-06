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
  resource: 'number_3.assets.types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/assets/types',
  operationId: '1_getAll_1',
};

export const tool: Tool = {
  name: 'list_assets_number_3_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of asset types\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/type_list_response',\n  $defs: {\n    type_list_response: {\n      type: 'object',\n      properties: {\n        MetaInformation: {\n          $ref: '#/$defs/fortnox_meta_information'\n        },\n        Types: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_asset_type'\n          }\n        }\n      }\n    },\n    fortnox_meta_information: {\n      type: 'object',\n      properties: {\n        '@CurrentPage': {\n          type: 'integer'\n        },\n        '@TotalPages': {\n          type: 'integer'\n        },\n        '@TotalResources': {\n          type: 'integer'\n        }\n      }\n    },\n    fortnox_asset_type: {\n      type: 'object',\n      properties: {\n        '@url': {\n          type: 'string'\n        },\n        AccountAsset: {\n          type: 'integer'\n        },\n        AccountAssetId: {\n          type: 'integer'\n        },\n        AccountDepreciation: {\n          type: 'integer'\n        },\n        AccountDepreciationId: {\n          type: 'integer'\n        },\n        AccountRevaluation: {\n          type: 'integer'\n        },\n        AccountRevaluationId: {\n          type: 'integer'\n        },\n        AccountSaleLoss: {\n          type: 'integer'\n        },\n        AccountSaleLossId: {\n          type: 'integer'\n        },\n        AccountSaleWin: {\n          type: 'integer'\n        },\n        AccountSaleWinId: {\n          type: 'integer'\n        },\n        AccountValueLoss: {\n          type: 'integer'\n        },\n        AccountValueLossId: {\n          type: 'integer'\n        },\n        AccountWriteDown: {\n          type: 'integer'\n        },\n        AccountWriteDownAck: {\n          type: 'integer'\n        },\n        AccountWriteDownAckId: {\n          type: 'integer'\n        },\n        AccountWriteDownId: {\n          type: 'integer'\n        },\n        Description: {\n          type: 'string'\n        },\n        Id: {\n          type: 'integer'\n        },\n        InUse: {\n          type: 'boolean'\n        },\n        Notes: {\n          type: 'string'\n        },\n        Number: {\n          type: 'string'\n        },\n        Type: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.assets.types.list()));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
