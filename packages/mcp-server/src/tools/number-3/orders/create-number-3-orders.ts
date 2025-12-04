// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.orders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/orders',
  operationId: 'create_29',
};

export const tool: Tool = {
  name: 'create_number_3_orders',
  description:
    'An endpoint for creating an order.\n\n Should you have EasyVat enabled, it is mandatory to provide an account in the request should you use a custom VAT rate.\n\n This endpoint can produce errors, some of which may only be relevant for EasyVat. Refer to the table below.\n <table>\n <caption>Errors that can be raised by this endpoint.</caption>\n \t\t<tr>\n \t\t\t<th>Error Code</th>\n \t\t\t<th>HTTP Code</th>\n \t\t\t<th>Description</th>\n \t\t\t<th>Solution</th>\n \t\t</tr>\n \t\t<tr>\n \t\t\t<td>2004167</td>\n \t\t\t<td>400</td>\n \t\t\t<td>An account must be provided when using a custom VAT rate and EasyVat has been enabled.</td>\n \t\t\t<td>Supply each row which has a custom VAT rate with an account.</td>\n \t\t</tr>\n </table>',
  inputSchema: {
    type: 'object',
    properties: {
      Order: {
        $ref: '#/$defs/fortnox_order',
      },
    },
    required: [],
    $defs: {
      fortnox_order: {
        type: 'object',
        properties: {
          CustomerNumber: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          '@urlTaxReductionList': {
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
          AdministrationFeeVAT: {
            type: 'number',
          },
          BasisTaxReduction: {
            type: 'number',
          },
          Cancelled: {
            type: 'boolean',
          },
          City: {
            type: 'string',
          },
          Comments: {
            type: 'string',
          },
          ContributionPercent: {
            type: 'number',
          },
          ContributionValue: {
            type: 'number',
          },
          CopyRemarks: {
            type: 'boolean',
          },
          CostCenter: {
            type: 'string',
          },
          Country: {
            type: 'string',
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
          DeliveryState: {
            type: 'string',
            enum: ['registration', 'reservation', 'delivery'],
          },
          DeliveryZipCode: {
            type: 'string',
          },
          DocumentNumber: {
            type: 'string',
          },
          EmailInformation: {
            $ref: '#/$defs/fortnox_order_email_information',
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
          FreightVAT: {
            type: 'number',
          },
          Gross: {
            type: 'number',
          },
          HouseWork: {
            type: 'boolean',
          },
          InvoiceReference: {
            type: 'string',
          },
          Labels: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_order_label',
            },
          },
          Language: {
            type: 'string',
          },
          Net: {
            type: 'number',
          },
          NotCompleted: {
            type: 'boolean',
          },
          OfferReference: {
            type: 'string',
          },
          OrderDate: {
            type: 'string',
            format: 'date',
          },
          OrderRows: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_order_order_row',
            },
          },
          OrderType: {
            type: 'string',
          },
          OrganisationNumber: {
            type: 'string',
          },
          OurReference: {
            type: 'string',
          },
          OutboundDate: {
            type: 'string',
            format: 'date',
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
          RoundOff: {
            type: 'number',
          },
          Sent: {
            type: 'boolean',
          },
          StockPointCode: {
            type: 'string',
          },
          StockPointId: {
            type: 'string',
          },
          TaxReduction: {
            type: 'number',
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
          TimeBasisReference: {
            type: 'integer',
          },
          Total: {
            type: 'number',
          },
          TotalToPay: {
            type: 'number',
          },
          TotalVAT: {
            type: 'number',
          },
          VATIncluded: {
            type: 'boolean',
          },
          WarehouseReady: {
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
      fortnox_order_email_information: {
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
      fortnox_order_label: {
        type: 'object',
        properties: {
          Id: {
            type: 'integer',
          },
        },
      },
      fortnox_order_order_row: {
        type: 'object',
        properties: {
          AccountNumber: {
            type: 'integer',
          },
          ArticleNumber: {
            type: 'string',
          },
          ContributionPercent: {
            type: 'string',
          },
          ContributionValue: {
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
              'MOVINGSERVICES',
              'ITSERVICES',
              'CLEANING',
              'TEXTILECLOTHING',
              'SNOWPLOWING',
              'GARDENING',
              'BABYSITTING',
              'OTHERCARE',
              'OTHERCOSTS',
            ],
          },
          OrderedQuantity: {
            type: 'string',
          },
          Price: {
            type: 'number',
          },
          Project: {
            type: 'string',
          },
          ReservedQuantity: {
            type: 'string',
          },
          RowId: {
            type: 'integer',
          },
          StockPointCode: {
            type: 'string',
          },
          StockPointId: {
            type: 'string',
          },
          Total: {
            type: 'number',
          },
          Unit: {
            type: 'string',
          },
          VAT: {
            type: 'number',
          },
          VATCode: {
            type: 'string',
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
    return asTextContentResult(await client.number3.orders.create(body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
