// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/invoices/{DocumentNumber}',
  operationId: 'update_18',
};

export const tool: Tool = {
  name: 'update_number_3_invoices',
  description:
    'Note that there are two approaches for updating the rows on an invoice.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the invoice needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the invoice then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an invoice is updated.\n\n Note: The <b>EuQuarterlyReport</b> property will become obsolete at 2021-12-01.\n This property is currently used by the <b>Quarterly</b> report as one of the conditions that determine if an invoice\n should be included in the report or not.\n A new version of the <b>Quarterly</b> report is released at 2021-12-01. In the new report, this property will not be\n used when determining if an invoice should be included in the report or not, with one exception: if the invoice\n is created before 2021-12-01, and this property is false, the invoice will be excluded from the report.\n For invoices created 2021-12-01 and later, this property will have no effect.',
  inputSchema: {
    type: 'object',
    properties: {
      DocumentNumber: {
        type: 'string',
      },
      Invoice: {
        $ref: '#/$defs/fortnox_invoice_payload',
      },
    },
    required: ['DocumentNumber'],
    $defs: {
      fortnox_invoice_payload: {
        type: 'object',
        properties: {
          CustomerNumber: {
            type: 'string',
          },
          Address1: {
            type: 'string',
          },
          Address2: {
            type: 'string',
          },
          AdministrationFee: {
            type: 'number',
          },
          City: {
            type: 'string',
          },
          Comments: {
            type: 'string',
          },
          CostCenter: {
            type: 'string',
          },
          Country: {
            type: 'string',
          },
          CreditInvoiceReference: {
            type: 'string',
          },
          Currency: {
            type: 'string',
          },
          CurrencyRate: {
            type: 'number',
          },
          CurrencyUnit: {
            type: 'integer',
          },
          CustomerName: {
            type: 'string',
          },
          DeliveryAddress1: {
            type: 'string',
          },
          DeliveryAddress2: {
            type: 'string',
          },
          DeliveryCity: {
            type: 'string',
          },
          DeliveryCountry: {
            type: 'string',
          },
          DeliveryDate: {
            type: 'string',
            format: 'date',
          },
          DeliveryName: {
            type: 'string',
          },
          DeliveryZipCode: {
            type: 'string',
          },
          DocumentNumber: {
            type: 'string',
          },
          DueDate: {
            type: 'string',
            format: 'date',
          },
          EDIInformation: {
            $ref: '#/$defs/fortnox_invoice_payload_edi_information',
          },
          EmailInformation: {
            $ref: '#/$defs/fortnox_invoice_payload_email_information',
          },
          EUQuarterlyReport: {
            type: 'boolean',
          },
          ExternalInvoiceReference1: {
            type: 'string',
          },
          ExternalInvoiceReference2: {
            type: 'string',
          },
          Freight: {
            type: 'number',
          },
          InvoiceDate: {
            type: 'string',
            format: 'date',
          },
          InvoiceRows: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_invoice_payload_invoice_row',
            },
          },
          InvoiceType: {
            type: 'string',
            enum: ['INVOICE', 'AGREEMENTINVOICE', 'INTRESTINVOICE', 'SUMMARYINVOICE', 'CASHINVOICE'],
          },
          Labels: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_invoice_payload_label',
            },
          },
          Language: {
            type: 'string',
            enum: ['SV', 'EN'],
          },
          NotCompleted: {
            type: 'boolean',
          },
          OCR: {
            type: 'string',
          },
          OurReference: {
            type: 'string',
          },
          OutboundDate: {
            type: 'string',
            format: 'date',
          },
          PaymentWay: {
            type: 'string',
          },
          Phone1: {
            type: 'string',
          },
          Phone2: {
            type: 'string',
          },
          PriceList: {
            type: 'string',
          },
          PrintTemplate: {
            type: 'string',
          },
          Project: {
            type: 'string',
          },
          Remarks: {
            type: 'string',
          },
          TaxReductionType: {
            type: 'string',
            enum: ['none', 'rot', 'rut', 'green'],
          },
          TermsOfDelivery: {
            type: 'string',
          },
          TermsOfPayment: {
            type: 'string',
          },
          VATIncluded: {
            type: 'boolean',
          },
          WayOfDelivery: {
            type: 'string',
          },
          YourOrderNumber: {
            type: 'string',
          },
          YourReference: {
            type: 'string',
          },
          ZipCode: {
            type: 'string',
          },
        },
        required: ['CustomerNumber'],
      },
      fortnox_invoice_payload_edi_information: {
        type: 'object',
        properties: {
          EDIGlobalLocationNumber: {
            type: 'string',
          },
          EDIGlobalLocationNumberDelivery: {
            type: 'string',
          },
          EDIInvoiceExtra1: {
            type: 'string',
          },
          EDIInvoiceExtra2: {
            type: 'string',
          },
          EDIOurElectronicReference: {
            type: 'string',
          },
          EDIYourElectronicReference: {
            type: 'string',
          },
        },
      },
      fortnox_invoice_payload_email_information: {
        type: 'object',
        properties: {
          EmailAddressBCC: {
            type: 'string',
          },
          EmailAddressCC: {
            type: 'string',
          },
          EmailAddressFrom: {
            type: 'string',
          },
          EmailAddressTo: {
            type: 'string',
          },
          EmailBody: {
            type: 'string',
          },
          EmailSubject: {
            type: 'string',
          },
        },
      },
      fortnox_invoice_payload_invoice_row: {
        type: 'object',
        properties: {
          AccountNumber: {
            type: 'integer',
          },
          ArticleNumber: {
            type: 'string',
          },
          CostCenter: {
            type: 'string',
          },
          DeliveredQuantity: {
            type: 'string',
          },
          Description: {
            type: 'string',
          },
          Discount: {
            type: 'number',
          },
          DiscountType: {
            type: 'string',
            enum: ['AMOUNT', 'PERCENT'],
          },
          HouseWork: {
            type: 'boolean',
          },
          HouseWorkHoursToReport: {
            type: 'integer',
          },
          HouseWorkType: {
            type: 'string',
            enum: [
              'CONSTRUCTION',
              'ELECTRICITY',
              'GLASSMETALWORK',
              'GROUNDDRAINAGEWORK',
              'MASONRY',
              'PAINTINGWALLPAPERING',
              'HVAC',
              'MAJORAPPLIANCEREPAIR',
              'MOVINGSERVICES',
              'ITSERVICES',
              'CLEANING',
              'TEXTILECLOTHING',
              'SNOWPLOWING',
              'GARDENING',
              'BABYSITTING',
              'OTHERCARE',
              'OTHERCOSTS',
              'SOLARCELLS',
              'STORAGESELFPRODUCEDELECTRICITY',
              'CHARGINGSTATIONELECTRICVEHICLE',
              'HOMEMAINTENANCE',
              'FURNISHING',
              'TRANSPORTATIONSERVICES',
              'WASHINGANDCAREOFCLOTHING',
            ],
          },
          Price: {
            type: 'number',
          },
          Project: {
            type: 'string',
          },
          RowId: {
            type: 'integer',
          },
          StockPointCode: {
            type: 'string',
          },
          Unit: {
            type: 'string',
          },
          VAT: {
            type: 'integer',
          },
          VATCode: {
            type: 'string',
          },
        },
      },
      fortnox_invoice_payload_label: {
        type: 'object',
        properties: {
          Id: {
            type: 'integer',
          },
        },
      },
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { DocumentNumber, ...body } = args as any;
  try {
    return asTextContentResult(await client.number3.invoices.update(DocumentNumber, body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
