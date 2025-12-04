// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/invoices',
  operationId: 'list_20',
};

export const tool: Tool = {
  name: 'list_number_3_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a list of invoices\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_list_response',\n  $defs: {\n    invoice_list_response: {\n      type: 'object',\n      properties: {\n        Invoices: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              '@url': {\n                type: 'string'\n              },\n              Balance: {\n                type: 'number'\n              },\n              Booked: {\n                type: 'boolean'\n              },\n              Cancelled: {\n                type: 'boolean'\n              },\n              CostCenter: {\n                type: 'string'\n              },\n              Currency: {\n                type: 'string'\n              },\n              CurrencyRate: {\n                type: 'number'\n              },\n              CurrencyUnit: {\n                type: 'number'\n              },\n              CustomerName: {\n                type: 'string'\n              },\n              CustomerNumber: {\n                type: 'string'\n              },\n              DocumentNumber: {\n                type: 'string'\n              },\n              DueDate: {\n                type: 'string',\n                format: 'date'\n              },\n              ExternalInvoiceReference1: {\n                type: 'string'\n              },\n              ExternalInvoiceReference2: {\n                type: 'string'\n              },\n              FinalPayDate: {\n                type: 'string',\n                format: 'date'\n              },\n              InvoiceDate: {\n                type: 'string',\n                format: 'date'\n              },\n              InvoiceType: {\n                type: 'string',\n                enum: [                  'INVOICE',\n                  'AGREEMENTINVOICE',\n                  'INTRESTINVOICE',\n                  'SUMMARYINVOICE',\n                  'CASHINVOICE'\n                ]\n              },\n              NoxFinans: {\n                type: 'boolean'\n              },\n              OCR: {\n                type: 'string'\n              },\n              Project: {\n                type: 'string'\n              },\n              Sent: {\n                type: 'boolean'\n              },\n              TermsOfPayment: {\n                type: 'string'\n              },\n              Total: {\n                type: 'number'\n              },\n              VoucherNumber: {\n                type: 'integer'\n              },\n              VoucherSeries: {\n                type: 'string'\n              },\n              VoucherYear: {\n                type: 'integer'\n              },\n              WayOfDelivery: {\n                type: 'string'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      accountnumberfrom: {
        type: 'string',
      },
      accountnumberto: {
        type: 'string',
      },
      articledescription: {
        type: 'string',
      },
      articlenumber: {
        type: 'string',
      },
      costcenter: {
        type: 'string',
      },
      credit: {
        type: 'string',
      },
      currency: {
        type: 'string',
      },
      customername: {
        type: 'string',
      },
      customernumber: {
        type: 'string',
      },
      documentnumber: {
        type: 'string',
      },
      externalinvoicereference1: {
        type: 'string',
      },
      externalinvoicereference2: {
        type: 'string',
      },
      filter: {
        type: 'string',
        description: 'possibility to filter invoices',
        enum: ['cancelled', 'fullypaid', 'unpaid', 'unpaidoverdue', 'unbooked'],
      },
      fromdate: {
        type: 'string',
      },
      fromfinalpaydate: {
        type: 'string',
      },
      invoicetype: {
        type: 'string',
      },
      label: {
        type: 'string',
      },
      lastmodified: {
        type: 'string',
      },
      notcompleted: {
        type: 'string',
      },
      ocr: {
        type: 'string',
      },
      ourreference: {
        type: 'string',
      },
      project: {
        type: 'string',
      },
      sent: {
        type: 'string',
      },
      sortby: {
        type: 'string',
        description: 'field to sort returned list on',
        enum: ['customername', 'customernumber', 'documentnumber', 'invoicedate', 'ocr', 'total'],
      },
      todate: {
        type: 'string',
      },
      tofinalpaydate: {
        type: 'string',
      },
      yourordernumber: {
        type: 'string',
      },
      yourreference: {
        type: 'string',
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.number3.invoices.list(body)));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
