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
  resource: 'number_3.offers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/offers/{DocumentNumber}',
  operationId: 'get_32',
};

export const tool: Tool = {
  name: 'retrieve_number_3_offers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a single offer\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/offer_wrap',\n  $defs: {\n    offer_wrap: {\n      type: 'object',\n      properties: {\n        Offer: {\n          $ref: '#/$defs/fortnox_offer'\n        }\n      }\n    },\n    fortnox_offer: {\n      type: 'object',\n      properties: {\n        CustomerNumber: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        '@urlTaxReductionList': {\n          type: 'string'\n        },\n        Address1: {\n          type: 'string'\n        },\n        Address2: {\n          type: 'string'\n        },\n        AdministrationFee: {\n          type: 'number'\n        },\n        AdministrationFeeVAT: {\n          type: 'number'\n        },\n        BasisTaxReduction: {\n          type: 'number'\n        },\n        Cancelled: {\n          type: 'boolean'\n        },\n        City: {\n          type: 'string'\n        },\n        Comments: {\n          type: 'string'\n        },\n        ContributionPercent: {\n          type: 'number'\n        },\n        ContributionValue: {\n          type: 'number'\n        },\n        CopyRemarks: {\n          type: 'boolean'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Country: {\n          type: 'string'\n        },\n        Currency: {\n          type: 'string'\n        },\n        CurrencyRate: {\n          type: 'number'\n        },\n        CurrencyUnit: {\n          type: 'integer'\n        },\n        CustomerName: {\n          type: 'string'\n        },\n        DeliveryAddress1: {\n          type: 'string'\n        },\n        DeliveryAddress2: {\n          type: 'string'\n        },\n        DeliveryCity: {\n          type: 'string'\n        },\n        DeliveryCountry: {\n          type: 'string'\n        },\n        DeliveryDate: {\n          type: 'string',\n          format: 'date'\n        },\n        DeliveryName: {\n          type: 'string'\n        },\n        DeliveryZipCode: {\n          type: 'string'\n        },\n        DocumentNumber: {\n          type: 'string'\n        },\n        EmailInformation: {\n          $ref: '#/$defs/fortnox_offer_email_information'\n        },\n        ExpireDate: {\n          type: 'string',\n          format: 'date'\n        },\n        Freight: {\n          type: 'number'\n        },\n        FreightVAT: {\n          type: 'number'\n        },\n        Gross: {\n          type: 'number'\n        },\n        HouseWork: {\n          type: 'boolean'\n        },\n        InvoiceReference: {\n          type: 'string'\n        },\n        Labels: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_offer_label'\n          }\n        },\n        Language: {\n          type: 'string'\n        },\n        Net: {\n          type: 'number'\n        },\n        NotCompleted: {\n          type: 'boolean'\n        },\n        OfferDate: {\n          type: 'string',\n          format: 'date'\n        },\n        OfferRows: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/fortnox_offer_offer_row'\n          }\n        },\n        OrderReference: {\n          type: 'string'\n        },\n        OrganisationNumber: {\n          type: 'string'\n        },\n        OurReference: {\n          type: 'string'\n        },\n        Phone1: {\n          type: 'string'\n        },\n        Phone2: {\n          type: 'string'\n        },\n        PriceList: {\n          type: 'string'\n        },\n        PrintTemplate: {\n          type: 'string'\n        },\n        Project: {\n          type: 'string'\n        },\n        Remarks: {\n          type: 'string'\n        },\n        RoundOff: {\n          type: 'number'\n        },\n        Sent: {\n          type: 'boolean'\n        },\n        TaxReduction: {\n          type: 'integer'\n        },\n        TaxReductionType: {\n          type: 'string',\n          enum: [            'none',\n            'rot',\n            'rut',\n            'green'\n          ]\n        },\n        TermsOfDelivery: {\n          type: 'string'\n        },\n        TermsOfPayment: {\n          type: 'string'\n        },\n        Total: {\n          type: 'number'\n        },\n        TotalToPay: {\n          type: 'number'\n        },\n        TotalVAT: {\n          type: 'number'\n        },\n        VATIncluded: {\n          type: 'boolean'\n        },\n        WayOfDelivery: {\n          type: 'string'\n        },\n        YourReference: {\n          type: 'string'\n        },\n        YourReferenceNumber: {\n          type: 'string'\n        },\n        ZipCode: {\n          type: 'string'\n        }\n      },\n      required: [        'CustomerNumber'\n      ]\n    },\n    fortnox_offer_email_information: {\n      type: 'object',\n      properties: {\n        EmailAddressBCC: {\n          type: 'string'\n        },\n        EmailAddressCC: {\n          type: 'string'\n        },\n        EmailAddressFrom: {\n          type: 'string'\n        },\n        EmailAddressTo: {\n          type: 'string'\n        },\n        EmailBody: {\n          type: 'string'\n        },\n        EmailSubject: {\n          type: 'string'\n        }\n      }\n    },\n    fortnox_offer_label: {\n      type: 'object',\n      properties: {\n        Id: {\n          type: 'integer'\n        }\n      }\n    },\n    fortnox_offer_offer_row: {\n      type: 'object',\n      properties: {\n        AccountNumber: {\n          type: 'integer'\n        },\n        ArticleNumber: {\n          type: 'string'\n        },\n        ContributionPercent: {\n          type: 'string'\n        },\n        ContributionValue: {\n          type: 'string'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Description: {\n          type: 'string'\n        },\n        Discount: {\n          type: 'number'\n        },\n        DiscountType: {\n          type: 'string',\n          enum: [            'AMOUNT',\n            'PERCENT'\n          ]\n        },\n        HouseWork: {\n          type: 'boolean'\n        },\n        HouseWorkHoursToReport: {\n          type: 'number'\n        },\n        HouseWorkType: {\n          type: 'string',\n          enum: [            'CONSTRUCTION',\n            'ELECTRICITY',\n            'GLASSMETALWORK',\n            'GROUNDDRAINAGEWORK',\n            'MASONRY',\n            'PAINTINGWALLPAPERING',\n            'HVAC',\n            'CLEANING',\n            'TEXTILECLOTHING',\n            'COOKING',\n            'SNOWPLOWING',\n            'GARDENING',\n            'BABYSITTING',\n            'OTHERCARE',\n            'TUTORING',\n            'OTHERCOSTS'\n          ]\n        },\n        Price: {\n          type: 'number'\n        },\n        Project: {\n          type: 'string'\n        },\n        Quantity: {\n          type: 'string'\n        },\n        RowId: {\n          type: 'integer'\n        },\n        Total: {\n          type: 'number'\n        },\n        Unit: {\n          type: 'string'\n        },\n        VAT: {\n          type: 'integer'\n        },\n        VATCode: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      DocumentNumber: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['DocumentNumber'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { DocumentNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.offers.retrieve(DocumentNumber)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
