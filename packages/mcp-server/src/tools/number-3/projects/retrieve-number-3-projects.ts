// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.projects',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/projects/{ProjectNumber}',
  operationId: 'get_40',
};

export const tool: Tool = {
  name: 'retrieve_number_3_projects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single project\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/project_wrap',\n  $defs: {\n    project_wrap: {\n      type: 'object',\n      properties: {\n        Project: {\n          $ref: '#/$defs/fortnox_project'\n        }\n      }\n    },\n    fortnox_project: {\n      type: 'object',\n      properties: {\n        Description: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Comments: {\n          type: 'string'\n        },\n        ContactPerson: {\n          type: 'string'\n        },\n        EndDate: {\n          type: 'string',\n          format: 'date'\n        },\n        ProjectLeader: {\n          type: 'string'\n        },\n        ProjectNumber: {\n          type: 'string'\n        },\n        StartDate: {\n          type: 'string',\n          format: 'date'\n        },\n        Status: {\n          type: 'string',\n          enum: [            'NOTSTARTED',\n            'ONGOING',\n            'COMPLETED'\n          ]\n        }\n      },\n      required: [        'Description'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ProjectNumber: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ProjectNumber'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { ProjectNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.projects.retrieve(ProjectNumber)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
