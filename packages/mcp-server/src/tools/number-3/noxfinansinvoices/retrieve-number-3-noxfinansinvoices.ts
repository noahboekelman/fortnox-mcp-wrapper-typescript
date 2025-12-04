// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.noxfinansinvoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/noxfinansinvoices/{Number}',
  operationId: 'get_23',
};

export const tool: Tool = {
  name: 'retrieve_number_3_noxfinansinvoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n Retrieves the status and balance of an invoice sent to Fortnox Finans.\n You need to supply the invoice number in Fortox to retrieve the invoice.\n <p>\n <b>Note that</b> invoices sent with the old &quot;Noxbox&quot; platform will not have the &quot;ServiceName&quot;\n property in the response. This new property is added to the response if the invoice is\n sent with the new finance service.\n <p>\n Response explanation for <b>Service</b> and <b>ServiceName</b>\n <p>\n <b>Service:</b>\n <ul>\n     <li><b>LEDGERBASE</b>: if the invoice is sent by using the old &quot;Noxbox&quot; platform, or the new finance service with the subtypes &quot;Service Full&quot; or &quot;Service Light&quot;. These services are explained above in the &quot;Fortnox Finans services&quot; section</li>\n     <li><b>REMINDER</b>: If the invoice is sent by the new finance service, with the service Reminder Service</li>\n </ul>\n <p>\n <b>ServiceName</b> (only provided for <u>new finance service</u> invoices):\n <ul>\n     <li><b>SERVICE_FULL</b>: Ledgerbase service <u>with</u> automatic reminders is used</li>\n     <li><b>SERVICE_LIGHT</b>: Ledgerbase service <u>without</u> automatic reminders is used.</li>\n     <li><b>REMINDER_SERVICE</b>: Reminder service is used</li>\n </ul>\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_response_wrap',\n  $defs: {\n    invoice_response_wrap: {\n      type: 'object',\n      properties: {\n        NoxFinansInvoice: {\n          type: 'object',\n          properties: {\n            '@url': {\n              type: 'string'\n            },\n            BalanceIncludeFees: {\n              type: 'number'\n            },\n            BalanceIncludeFeesCurrency: {\n              type: 'number'\n            },\n            CurrentCapitalBalance: {\n              type: 'number'\n            },\n            CurrentCapitalBalanceCurrency: {\n              type: 'number'\n            },\n            InvoiceNumber: {\n              type: 'integer'\n            },\n            NextEvent: {\n              type: 'string'\n            },\n            NextEventDate: {\n              type: 'string',\n              format: 'date'\n            },\n            OCRNumber: {\n              type: 'string'\n            },\n            Service: {\n              type: 'string'\n            },\n            ServiceName: {\n              type: 'string'\n            },\n            Status: {\n              type: 'string'\n            },\n            InvoiceDocumentURL: {\n              type: 'string'\n            }\n          },\n          required: [            '@url',\n            'BalanceIncludeFees',\n            'BalanceIncludeFeesCurrency',\n            'CurrentCapitalBalance',\n            'CurrentCapitalBalanceCurrency',\n            'InvoiceNumber',\n            'NextEvent',\n            'NextEventDate',\n            'OCRNumber',\n            'Service',\n            'ServiceName',\n            'Status'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { Number, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.noxfinansinvoices.retrieve(Number)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
