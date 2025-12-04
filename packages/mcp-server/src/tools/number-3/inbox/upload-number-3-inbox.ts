// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.inbox',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/inbox',
  operationId: 'upload',
};

export const tool: Tool = {
  name: 'upload_number_3_inbox',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload a file to a specific subdirectory.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/file_row_wrap',\n  $defs: {\n    file_row_wrap: {\n      type: 'object',\n      properties: {\n        File: {\n          $ref: '#/$defs/file_row'\n        }\n      }\n    },\n    file_row: {\n      type: 'object',\n      properties: {\n        '@url': {\n          type: 'string'\n        },\n        ArchiveFileId: {\n          type: 'string'\n        },\n        Comments: {\n          type: 'string'\n        },\n        Id: {\n          type: 'string'\n        },\n        Name: {\n          type: 'string'\n        },\n        Path: {\n          type: 'string'\n        },\n        Size: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      folderId: {
        type: 'string',
        description: 'folder id',
      },
      path: {
        type: 'string',
        description: 'path',
      },
      file: {
        type: 'object',
        description: 'file',
        additionalProperties: true,
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
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.inbox.upload(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
