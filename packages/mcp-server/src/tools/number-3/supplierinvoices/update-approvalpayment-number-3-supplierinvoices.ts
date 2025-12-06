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
  resource: 'number_3.supplierinvoices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/supplierinvoices/{GivenNumber}/approvalpayment',
  operationId: 'approvalpayment',
};

export const tool: Tool = {
  name: 'update_approvalpayment_number_3_supplierinvoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nApproval of payment of given supplier invoice\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/fortnox_supplier_invoice_wrap',\n  $defs: {\n    fortnox_supplier_invoice_wrap: {\n      type: 'object',\n      properties: {\n        SupplierInvoice: {\n          $ref: '#/$defs/fortnox_supplier_invoice'\n        }\n      }\n    },\n    fortnox_supplier_invoice: {\n      type: 'object',\n      properties: {\n        SupplierNumber: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        AccountingMethod: {\n          type: 'string',\n          enum: [            'ACCRUAL',\n            'CASH'\n          ]\n        },\n        AdministrationFee: {\n          type: 'string'\n        },\n        Balance: {\n          type: 'string'\n        },\n        Booked: {\n          type: 'boolean'\n        },\n        Cancelled: {\n          type: 'boolean'\n        },\n        Comments: {\n          type: 'string'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Credit: {\n          type: 'boolean'\n        },\n        CreditReference: {\n          type: 'integer'\n        },\n        Currency: {\n          type: 'string'\n        },\n        CurrencyRate: {\n          type: 'string'\n        },\n        CurrencyUnit: {\n          type: 'number'\n        },\n        DisablePaymentFile: {\n          type: 'boolean'\n        },\n        DueDate: {\n          type: 'string',\n          format: 'date'\n        },\n        ExternalInvoiceNumber: {\n          type: 'string'\n        },\n        ExternalInvoiceSeries: {\n          type: 'string'\n        },\n        FinalPayDate: {\n          type: 'string',\n          format: 'date'\n        },\n        Freight: {\n          type: 'string'\n        },\n        GivenNumber: {\n          type: 'string'\n        },\n        InvoiceDate: {\n          type: 'string',\n          format: 'date'\n        },\n        InvoiceNumber: {\n          type: 'string'\n        },\n        OCR: {\n          type: 'string'\n        },\n        OurReference: {\n          type: 'string'\n        },\n        PaymentPending: {\n          type: 'boolean'\n        },\n        Project: {\n          type: 'string'\n        },\n        RoundOffValue: {\n          type: 'string'\n        },\n        SalesType: {\n          type: 'string',\n          enum: [            'STOCK',\n            'SERVICE'\n          ]\n        },\n        SupplierInvoiceRows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_supplier_invoice_supplier_invoice_row'\n          }\n        },\n        SupplierName: {\n          type: 'string'\n        },\n        Total: {\n          type: 'string'\n        },\n        VAT: {\n          type: 'string'\n        },\n        VATType: {\n          type: 'string',\n          enum: [            'NORMAL',\n            'EUINTERNAL',\n            'REVERSE'\n          ]\n        },\n        VoucherNumber: {\n          type: 'integer'\n        },\n        Vouchers: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_supplier_invoice_voucher'\n          }\n        },\n        VoucherSeries: {\n          type: 'string'\n        },\n        VoucherYear: {\n          type: 'integer'\n        },\n        YourReference: {\n          type: 'string'\n        }\n      },\n      required: [        'SupplierNumber'\n      ]\n    },\n    fortnox_supplier_invoice_supplier_invoice_row: {\n      type: 'object',\n      properties: {\n        Account: {\n          type: 'integer'\n        },\n        AccountDescription: {\n          type: 'string'\n        },\n        ArticleNumber: {\n          type: 'string'\n        },\n        Code: {\n          type: 'string',\n          enum: [            'TOT',\n            'VAT',\n            'FRT',\n            'AFE',\n            'ROV',\n            'CND',\n            'CNC',\n            'PRD',\n            'PRC',\n            'SRD',\n            'SRC',\n            'PRE',\n            'GWB',\n            'ACC'\n          ]\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Credit: {\n          type: 'number'\n        },\n        CreditCurrency: {\n          type: 'number'\n        },\n        Debit: {\n          type: 'number'\n        },\n        DebitCurrency: {\n          type: 'number'\n        },\n        ItemDescription: {\n          type: 'string'\n        },\n        Price: {\n          type: 'number'\n        },\n        Project: {\n          type: 'string'\n        },\n        Quantity: {\n          type: 'integer'\n        },\n        StockLocationCode: {\n          type: 'string'\n        },\n        StockPointCode: {\n          type: 'string'\n        },\n        Total: {\n          type: 'number'\n        },\n        TransactionInformation: {\n          type: 'string'\n        },\n        Unit: {\n          type: 'string'\n        }\n      }\n    },\n    fortnox_supplier_invoice_voucher: {\n      type: 'object',\n      properties: {\n        Number: {\n          type: 'integer'\n        },\n        ReferenceType: {\n          type: 'string'\n        },\n        Series: {\n          type: 'string'\n        },\n        Year: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      GivenNumber: {
        type: 'integer',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['GivenNumber'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { GivenNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.supplierinvoices.updateApprovalpayment(GivenNumber)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
