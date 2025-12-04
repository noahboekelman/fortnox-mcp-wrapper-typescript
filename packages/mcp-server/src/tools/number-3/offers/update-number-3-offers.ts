// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.offers',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/3/offers/{DocumentNumber}',
  operationId: 'update_22',
};

export const tool: Tool = {
  name: 'update_number_3_offers',
  description:
    'Note that there are two approaches for updating the rows on an offer.\n\n If RowId is not specified on any row, the rows will be mapped and updated in the order in which they are set in the array. All rows that should remain on the offer needs to be provided.\n\n If RowId is specified on one or more rows the following goes: Corresponding row with that id will be updated. The rows without RowId will be interpreted as new rows. If a row should not be updated but remain on the offer then specify only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new RowIds are generated for all rows every time an offer is updated.',
  inputSchema: {
    type: 'object',
    properties: {
      DocumentNumber: {
        type: 'string',
      },
      Offer: {
        $ref: '#/$defs/fortnox_offer',
      },
    },
    required: ['DocumentNumber'],
    $defs: {
      fortnox_offer: {
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
          EmailInformation: {
            $ref: '#/$defs/fortnox_offer_email_information',
          },
          ExpireDate: {
            type: 'string',
            format: 'date',
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
              $ref: '#/$defs/fortnox_offer_label',
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
          OfferDate: {
            type: 'string',
            format: 'date',
          },
          OfferRows: {
            type: 'array',
            items: {
              $ref: '#/$defs/fortnox_offer_offer_row',
            },
          },
          OrderReference: {
            type: 'string',
          },
          OrganisationNumber: {
            type: 'string',
          },
          OurReference: {
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
          RoundOff: {
            type: 'number',
          },
          Sent: {
            type: 'boolean',
          },
          TaxReduction: {
            type: 'integer',
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
          WayOfDelivery: {
            type: 'string',
          },
          YourReference: {
            type: 'string',
          },
          YourReferenceNumber: {
            type: 'string',
          },
          ZipCode: {
            type: 'string',
          },
        },
        required: ['CustomerNumber'],
      },
      fortnox_offer_email_information: {
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
      fortnox_offer_label: {
        type: 'object',
        properties: {
          Id: {
            type: 'integer',
          },
        },
      },
      fortnox_offer_offer_row: {
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
            type: 'number',
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
              'CLEANING',
              'TEXTILECLOTHING',
              'COOKING',
              'SNOWPLOWING',
              'GARDENING',
              'BABYSITTING',
              'OTHERCARE',
              'TUTORING',
              'OTHERCOSTS',
            ],
          },
          Price: {
            type: 'number',
          },
          Project: {
            type: 'string',
          },
          Quantity: {
            type: 'string',
          },
          RowId: {
            type: 'integer',
          },
          Total: {
            type: 'number',
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
    },
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { DocumentNumber, ...body } = args as any;
  try {
    return asTextContentResult(await client.number3.offers.update(DocumentNumber, body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
