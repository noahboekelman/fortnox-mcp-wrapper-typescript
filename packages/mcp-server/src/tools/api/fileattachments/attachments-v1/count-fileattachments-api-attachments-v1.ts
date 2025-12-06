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
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/fileattachments/attachments-v1/numberofattachments',
  operationId: 'getNumberOfAttachmentsForEntity',
};

export const tool: Tool = {
  name: 'count_fileattachments_api_attachments_v1',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList number of attachments\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/attachments_v1_count_response',\n  $defs: {\n    attachments_v1_count_response: {\n      type: 'object',\n      properties: {\n        entityId: {\n          type: 'integer'\n        },\n        numberOfAttachments: {\n          type: 'integer'\n        }\n      },\n      required: [        'entityId'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entityids: {
        type: 'array',
        description: 'ids of the entities to look for number of attachments on',
        items: {
          type: 'integer',
        },
      },
      entitytype: {
        type: 'string',
        description: 'type of the entities  to look for number of attachments on',
        enum: ['OF', 'O', 'F', 'C', 'LGR_IO', 'LGR_IG'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['entityids', 'entitytype'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.api.fileattachments.attachmentsV1.count(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
