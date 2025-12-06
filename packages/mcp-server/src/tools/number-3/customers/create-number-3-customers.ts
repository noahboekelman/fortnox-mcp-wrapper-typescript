// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.customers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/customers',
  operationId: 'create_16',
};

export const tool: Tool = {
  name: 'create_number_3_customers',
  description:
    'The created customer will be returned if everything succeeded, if there was any problems an error will be returned.',
  inputSchema: {
    type: 'object',
    properties: {
      Customer: {
        $ref: '#/$defs/fortnox_customer',
      },
    },
    required: [],
    $defs: {
      fortnox_customer: {
        type: 'object',
        properties: {
          Name: {
            type: 'string',
          },
          '@url': {
            type: 'string',
          },
          Active: {
            type: 'boolean',
          },
          Address1: {
            type: 'string',
          },
          Address2: {
            type: 'string',
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
          CountryCode: {
            type: 'string',
          },
          Currency: {
            type: 'string',
          },
          CustomerNumber: {
            type: 'string',
          },
          DefaultDeliveryTypes: {
            $ref: '#/$defs/fortnox_customer_default_delivery_types',
          },
          DefaultTemplates: {
            $ref: '#/$defs/fortnox_customer_default_templates',
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
          DeliveryCountryCode: {
            type: 'string',
          },
          DeliveryFax: {
            type: 'string',
          },
          DeliveryName: {
            type: 'string',
          },
          DeliveryPhone1: {
            type: 'string',
          },
          DeliveryPhone2: {
            type: 'string',
          },
          DeliveryZipCode: {
            type: 'string',
          },
          Email: {
            type: 'string',
          },
          EmailInvoice: {
            type: 'string',
          },
          EmailInvoiceBCC: {
            type: 'string',
          },
          EmailInvoiceCC: {
            type: 'string',
          },
          EmailOffer: {
            type: 'string',
          },
          EmailOfferBCC: {
            type: 'string',
          },
          EmailOfferCC: {
            type: 'string',
          },
          EmailOrder: {
            type: 'string',
          },
          EmailOrderBCC: {
            type: 'string',
          },
          EmailOrderCC: {
            type: 'string',
          },
          ExternalReference: {
            type: 'string',
          },
          Fax: {
            type: 'string',
          },
          GLN: {
            type: 'string',
          },
          GLNDelivery: {
            type: 'string',
          },
          InvoiceAdministrationFee: {
            type: 'string',
          },
          InvoiceDiscount: {
            type: 'number',
          },
          InvoiceFreight: {
            type: 'string',
          },
          InvoiceRemark: {
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
          Project: {
            type: 'string',
          },
          SalesAccount: {
            type: 'string',
          },
          ShowPriceVATIncluded: {
            type: 'boolean',
          },
          TermsOfDelivery: {
            type: 'string',
          },
          TermsOfPayment: {
            type: 'string',
          },
          Type: {
            type: 'string',
            enum: ['PRIVATE', 'COMPANY'],
          },
          VATNumber: {
            type: 'string',
          },
          VATType: {
            type: 'string',
            enum: ['SEVAT', 'SEREVERSEDVAT', 'EUREVERSEDVAT', 'EUVAT', 'EXPORT'],
          },
          VisitingAddress: {
            type: 'string',
          },
          VisitingCity: {
            type: 'string',
          },
          VisitingCountry: {
            type: 'string',
          },
          VisitingCountryCode: {
            type: 'string',
          },
          VisitingZipCode: {
            type: 'string',
          },
          WayOfDelivery: {
            type: 'string',
          },
          WWW: {
            type: 'string',
          },
          YourReference: {
            type: 'string',
          },
          ZipCode: {
            type: 'string',
          },
        },
        required: ['Name'],
      },
      fortnox_customer_default_delivery_types: {
        type: 'object',
        properties: {
          Invoice: {
            type: 'string',
            enum: ['PRINT', 'EMAIL', 'PRINTSERVICE'],
          },
          Offer: {
            type: 'string',
            enum: ['PRINT', 'EMAIL', 'PRINTSERVICE'],
          },
          Order: {
            type: 'string',
            enum: ['PRINT', 'EMAIL', 'PRINTSERVICE'],
          },
        },
      },
      fortnox_customer_default_templates: {
        type: 'object',
        properties: {
          CashInvoice: {
            type: 'string',
          },
          Invoice: {
            type: 'string',
          },
          Offer: {
            type: 'string',
          },
          Order: {
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
    return asTextContentResult(await client.number3.customers.create(body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
