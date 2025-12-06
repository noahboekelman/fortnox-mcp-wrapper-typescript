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
  resource: 'number_3.noxfinansinvoices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/noxfinansinvoices/{Number}/stop',
  operationId: 'stop',
};

export const tool: Tool = {
  name: 'stop_number_3_noxfinansinvoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Removes the invoice from Fortnox Finans process. The invoice can still be handled manually, but no further automatic process will be applied\n <p>\n <b>Note:</b> this action is <b>not</b> available for invoices sent by the old Noxbox platform\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_response_wrap',\n  $defs: {\n    invoice_response_wrap: {\n      type: 'object',\n      properties: {\n        NoxFinansInvoice: {\n          type: 'object',\n          properties: {\n            '@url': {\n              type: 'string'\n            },\n            BalanceIncludeFees: {\n              type: 'number'\n            },\n            BalanceIncludeFeesCurrency: {\n              type: 'number'\n            },\n            CurrentCapitalBalance: {\n              type: 'number'\n            },\n            CurrentCapitalBalanceCurrency: {\n              type: 'number'\n            },\n            InvoiceNumber: {\n              type: 'integer'\n            },\n            NextEvent: {\n              type: 'string'\n            },\n            NextEventDate: {\n              type: 'string',\n              format: 'date'\n            },\n            OCRNumber: {\n              type: 'string'\n            },\n            Service: {\n              type: 'string'\n            },\n            ServiceName: {\n              type: 'string'\n            },\n            Status: {\n              type: 'string'\n            },\n            InvoiceDocumentURL: {\n              type: 'string'\n            }\n          },\n          required: [            '@url',\n            'BalanceIncludeFees',\n            'BalanceIncludeFeesCurrency',\n            'CurrentCapitalBalance',\n            'CurrentCapitalBalanceCurrency',\n            'InvoiceNumber',\n            'NextEvent',\n            'NextEventDate',\n            'OCRNumber',\n            'Service',\n            'ServiceName',\n            'Status'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      Number: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['Number'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Number, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.noxfinansinvoices.stop(Number)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
