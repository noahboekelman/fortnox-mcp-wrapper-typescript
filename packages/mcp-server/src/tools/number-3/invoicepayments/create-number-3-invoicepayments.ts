// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.invoicepayments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/invoicepayments',
  operationId: 'create_22',
};

export const tool: Tool = {
  name: 'create_number_3_invoicepayments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate an invoice payment\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_payment_wrap',\n  $defs: {\n    invoice_payment_wrap: {\n      type: 'object',\n      properties: {\n        InvoicePayment: {\n          $ref: '#/$defs/fortnox_invoice_payment'\n        }\n      }\n    },\n    fortnox_invoice_payment: {\n      type: 'object',\n      properties: {\n        InvoiceNumber: {\n          type: 'integer'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Amount: {\n          type: 'number'\n        },\n        AmountCurrency: {\n          type: 'number'\n        },\n        Booked: {\n          type: 'boolean'\n        },\n        Currency: {\n          type: 'string'\n        },\n        CurrencyRate: {\n          type: 'number'\n        },\n        CurrencyUnit: {\n          type: 'number'\n        },\n        ExternalInvoiceReference1: {\n          type: 'string'\n        },\n        ExternalInvoiceReference2: {\n          type: 'string'\n        },\n        InvoiceCustomerName: {\n          type: 'string'\n        },\n        InvoiceCustomerNumber: {\n          type: 'string'\n        },\n        InvoiceDueDate: {\n          type: 'string',\n          format: 'date'\n        },\n        InvoiceOCR: {\n          type: 'string'\n        },\n        InvoiceTotal: {\n          type: 'string'\n        },\n        ModeOfPayment: {\n          type: 'string'\n        },\n        ModeOfPaymentAccount: {\n          type: 'integer'\n        },\n        Number: {\n          type: 'string'\n        },\n        PaymentDate: {\n          type: 'string',\n          format: 'date'\n        },\n        Source: {\n          type: 'string'\n        },\n        VoucherNumber: {\n          type: 'integer'\n        },\n        VoucherSeries: {\n          type: 'string'\n        },\n        VoucherYear: {\n          type: 'integer'\n        },\n        WriteOffs: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_invoice_payment_write_off'\n          }\n        }\n      },\n      required: [        'InvoiceNumber'\n      ]\n    },\n    fortnox_invoice_payment_write_off: {\n      type: 'object',\n      properties: {\n        AccountNumber: {\n          type: 'integer'\n        },\n        Amount: {\n          type: 'number'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Currency: {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        Project: {\n          type: 'string'\n        },\n        TransactionInformation: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      InvoicePayment: {
        $ref: '#/$defs/fortnox_invoice_payment',
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
      fortnox_invoice_payment: {
        type: 'object',
        properties: {
          InvoiceNumber: {
            type: 'integer',
          },
          '@url': {
            type: 'string',
          },
          Amount: {
            type: 'number',
          },
          AmountCurrency: {
            type: 'number',
          },
          Booked: {
            type: 'boolean',
          },
          Currency: {
            type: 'string',
          },
          CurrencyRate: {
            type: 'number',
          },
          CurrencyUnit: {
            type: 'number',
          },
          ExternalInvoiceReference1: {
            type: 'string',
          },
          ExternalInvoiceReference2: {
            type: 'string',
          },
          InvoiceCustomerName: {
            type: 'string',
          },
          InvoiceCustomerNumber: {
            type: 'string',
          },
          InvoiceDueDate: {
            type: 'string',
            format: 'date',
          },
          InvoiceOCR: {
            type: 'string',
          },
          InvoiceTotal: {
            type: 'string',
          },
          ModeOfPayment: {
            type: 'string',
          },
          ModeOfPaymentAccount: {
            type: 'integer',
          },
          Number: {
            type: 'string',
          },
          PaymentDate: {
            type: 'string',
            format: 'date',
          },
          Source: {
            type: 'string',
          },
          VoucherNumber: {
            type: 'integer',
          },
          VoucherSeries: {
            type: 'string',
          },
          VoucherYear: {
            type: 'integer',
          },
          WriteOffs: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_invoice_payment_write_off',
            },
          },
        },
        required: ['InvoiceNumber'],
      },
      fortnox_invoice_payment_write_off: {
        type: 'object',
        properties: {
          AccountNumber: {
            type: 'integer',
          },
          Amount: {
            type: 'number',
          },
          CostCenter: {
            type: 'string',
          },
          Currency: {
            type: 'string',
          },
          Description: {
            type: 'string',
          },
          Project: {
            type: 'string',
          },
          TransactionInformation: {
            type: 'string',
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
      await maybeFilter(jq_filter, await client.number3.invoicepayments.create(body)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
