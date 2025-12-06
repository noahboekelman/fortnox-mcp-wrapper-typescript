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
  resource: 'api.fileattachments.attachments_v1',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/fileattachments/attachments-v1',
  operationId: 'attach',
};

export const tool: Tool = {
  name: 'create_fileattachments_api_attachments_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAttach files to one or more entities\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fileattachments_attachment',\n  $defs: {\n    fileattachments_attachment: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        entityId: {\n          type: 'integer'\n        },\n        entityType: {\n          type: 'string',\n          enum: [            'OF',\n            'O',\n            'F',\n            'C',\n            'LGR_IO',\n            'LGR_IG'\n          ]\n        },\n        fileId: {\n          type: 'string'\n        },\n        includeOnSend: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        items: {
          $ref: '#/$defs/fileattachments_attachment',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      fileattachments_attachment: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          entityId: {
            type: 'integer',
          },
          entityType: {
            type: 'string',
            enum: ['OF', 'O', 'F', 'C', 'LGR_IO', 'LGR_IG'],
          },
          fileId: {
            type: 'string',
          },
          includeOnSend: {
            type: 'boolean',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.fileattachments.attachmentsV1.create(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
