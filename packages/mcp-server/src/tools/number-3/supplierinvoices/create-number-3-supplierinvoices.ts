// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  httpMethod: 'post',
  httpPath: '/3/supplierinvoices',
  operationId: 'create_39',
};

export const tool: Tool = {
  name: 'create_number_3_supplierinvoices',
  description: 'Create a supplier invoice',
  inputSchema: {
    type: 'object',
    properties: {
      SupplierInvoice: {
        $ref: '#/$defs/fortnox_supplier_invoice',
      },
    },
    required: [],
    $defs: {
      fortnox_supplier_invoice: {
        type: 'object',
        properties: {
          SupplierNumber: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          AccountingMethod: {
            type: 'string',
            enum: ['ACCRUAL', 'CASH'],
          },
          AdministrationFee: {
            type: 'string',
          },
          Balance: {
            type: 'string',
          },
          Booked: {
            type: 'boolean',
          },
          Cancelled: {
            type: 'boolean',
          },
          Comments: {
            type: 'string',
          },
          CostCenter: {
            type: 'string',
          },
          Credit: {
            type: 'boolean',
          },
          CreditReference: {
            type: 'integer',
          },
          Currency: {
            type: 'string',
          },
          CurrencyRate: {
            type: 'string',
          },
          CurrencyUnit: {
            type: 'number',
          },
          DisablePaymentFile: {
            type: 'boolean',
          },
          DueDate: {
            type: 'string',
            format: 'date',
          },
          ExternalInvoiceNumber: {
            type: 'string',
          },
          ExternalInvoiceSeries: {
            type: 'string',
          },
          FinalPayDate: {
            type: 'string',
            format: 'date',
          },
          Freight: {
            type: 'string',
          },
          GivenNumber: {
            type: 'string',
          },
          InvoiceDate: {
            type: 'string',
            format: 'date',
          },
          InvoiceNumber: {
            type: 'string',
          },
          OCR: {
            type: 'string',
          },
          OurReference: {
            type: 'string',
          },
          PaymentPending: {
            type: 'boolean',
          },
          Project: {
            type: 'string',
          },
          RoundOffValue: {
            type: 'string',
          },
          SalesType: {
            type: 'string',
            enum: ['STOCK', 'SERVICE'],
          },
          SupplierInvoiceRows: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_supplier_invoice_supplier_invoice_row',
            },
          },
          SupplierName: {
            type: 'string',
          },
          Total: {
            type: 'string',
          },
          VAT: {
            type: 'string',
          },
          VATType: {
            type: 'string',
            enum: ['NORMAL', 'EUINTERNAL', 'REVERSE'],
          },
          VoucherNumber: {
            type: 'integer',
          },
          Vouchers: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_supplier_invoice_voucher',
            },
          },
          VoucherSeries: {
            type: 'string',
          },
          VoucherYear: {
            type: 'integer',
          },
          YourReference: {
            type: 'string',
          },
        },
        required: ['SupplierNumber'],
      },
      fortnox_supplier_invoice_supplier_invoice_row: {
        type: 'object',
        properties: {
          Account: {
            type: 'integer',
          },
          AccountDescription: {
            type: 'string',
          },
          ArticleNumber: {
            type: 'string',
          },
          Code: {
            type: 'string',
            enum: [
              'TOT',
              'VAT',
              'FRT',
              'AFE',
              'ROV',
              'CND',
              'CNC',
              'PRD',
              'PRC',
              'SRD',
              'SRC',
              'PRE',
              'GWB',
              'ACC',
            ],
          },
          CostCenter: {
            type: 'string',
          },
          Credit: {
            type: 'number',
          },
          CreditCurrency: {
            type: 'number',
          },
          Debit: {
            type: 'number',
          },
          DebitCurrency: {
            type: 'number',
          },
          ItemDescription: {
            type: 'string',
          },
          Price: {
            type: 'number',
          },
          Project: {
            type: 'string',
          },
          Quantity: {
            type: 'integer',
          },
          StockLocationCode: {
            type: 'string',
          },
          StockPointCode: {
            type: 'string',
          },
          Total: {
            type: 'number',
          },
          TransactionInformation: {
            type: 'string',
          },
          Unit: {
            type: 'string',
          },
        },
      },
      fortnox_supplier_invoice_voucher: {
        type: 'object',
        properties: {
          Number: {
            type: 'integer',
          },
          ReferenceType: {
            type: 'string',
          },
          Series: {
            type: 'string',
          },
          Year: {
            type: 'integer',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.number3.supplierinvoices.create(body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
