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
  resource: 'api.warehouse.documentdeliveries.custom.documenttypes_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/warehouse/documentdeliveries/custom/documenttypes-v1',
  operationId: 'create_8',
};

export const tool: Tool = {
  name: 'documenttypes_v1_custom_documentdeliveries_warehouse_api_documenttypes_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate type, if it doesn't already exists. Note that new custom document types are\n created automatically when you create custom documents, so normally\n you do not need to call this method.\n\n Throws HTTP 400 <code>referenceTypeNotAllowed</code> if the name of the type is not allowed.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/documenttypes_v1_documenttypes_v1_response',\n  $defs: {\n    documenttypes_v1_documenttypes_v1_response: {\n      type: 'integer'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      category: {
        type: 'string',
        enum: ['INBOUND', 'OUTBOUND'],
      },
      referenceType: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['category', 'referenceType'],
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(
        jq_filter,
        await client.api.warehouse.documentdeliveries.custom.documenttypesV1.documenttypesV1(body),
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
