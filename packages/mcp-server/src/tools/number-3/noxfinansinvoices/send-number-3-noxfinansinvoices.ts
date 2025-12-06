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
  httpMethod: 'post',
  httpPath: '/3/noxfinansinvoices',
  operationId: 'create_19',
};

export const tool: Tool = {
  name: 'send_number_3_noxfinansinvoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n<p>\n When sending an invoice with Fortnox Finans you will get the invoice status returned if everything succeeded,\n if there were any problems, an error will be returned.\n <p>\n Please note that it can take 1 min to several hours before you will get back status, OCR number and link to\n PDF document, meanwhile the invoice will have status UNKNOWN or NOT_AUTHORIZED.\n <p>\n Fortnox Finans is currently only accepting invoices in SEK\n <p>\n <i>Parameters in the body:</i>\n <ul>\n     <li><b>InvoiceNumber</b>: the invoice number for the invoice which should be sent with Fortnox Finans</li>\n     <li><b>SendMethod</b>: how to send the invoice; EMAIL, LETTER, EINVOICE or NONE</li>\n     <li><b>Service</b>: which service to use; LEDGERBASE or REMINDER</li>\n </ul>\n <p>\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_response_wrap',\n  $defs: {\n    invoice_response_wrap: {\n      type: 'object',\n      properties: {\n        NoxFinansInvoice: {\n          type: 'object',\n          properties: {\n            '@url': {\n              type: 'string'\n            },\n            BalanceIncludeFees: {\n              type: 'number'\n            },\n            BalanceIncludeFeesCurrency: {\n              type: 'number'\n            },\n            CurrentCapitalBalance: {\n              type: 'number'\n            },\n            CurrentCapitalBalanceCurrency: {\n              type: 'number'\n            },\n            InvoiceNumber: {\n              type: 'integer'\n            },\n            NextEvent: {\n              type: 'string'\n            },\n            NextEventDate: {\n              type: 'string',\n              format: 'date'\n            },\n            OCRNumber: {\n              type: 'string'\n            },\n            Service: {\n              type: 'string'\n            },\n            ServiceName: {\n              type: 'string'\n            },\n            Status: {\n              type: 'string'\n            },\n            InvoiceDocumentURL: {\n              type: 'string'\n            }\n          },\n          required: [            '@url',\n            'BalanceIncludeFees',\n            'BalanceIncludeFeesCurrency',\n            'CurrentCapitalBalance',\n            'CurrentCapitalBalanceCurrency',\n            'InvoiceNumber',\n            'NextEvent',\n            'NextEventDate',\n            'OCRNumber',\n            'Service',\n            'ServiceName',\n            'Status'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      NoxFinansInvoice: {
        type: 'object',
        properties: {
          InvoiceNumber: {
            type: 'string',
          },
          SendMethod: {
            type: 'string',
          },
          Service: {
            type: 'string',
          },
        },
        required: ['InvoiceNumber', 'SendMethod', 'Service'],
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.noxfinansinvoices.send(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
