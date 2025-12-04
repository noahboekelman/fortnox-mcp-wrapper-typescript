// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'fortnox-mcp-wrapper-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'fortnox-mcp-wrapper-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.customers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/3/customers/{CustomerNumber}',
  operationId: 'get_19',
};

export const tool: Tool = {
  name: 'retrieve_number_3_customers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nYou need to supply the unique customer number that was returned when the customer was created or retrieved from the list of customers.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/customer_wrap',\n  $defs: {\n    customer_wrap: {\n      type: 'object',\n      properties: {\n        Customer: {\n          $ref: '#/$defs/fortnox_customer'\n        }\n      }\n    },\n    fortnox_customer: {\n      type: 'object',\n      properties: {\n        Name: {\n          type: 'string'\n        },\n        '@url': {\n          type: 'string'\n        },\n        Active: {\n          type: 'boolean'\n        },\n        Address1: {\n          type: 'string'\n        },\n        Address2: {\n          type: 'string'\n        },\n        City: {\n          type: 'string'\n        },\n        Comments: {\n          type: 'string'\n        },\n        CostCenter: {\n          type: 'string'\n        },\n        Country: {\n          type: 'string'\n        },\n        CountryCode: {\n          type: 'string'\n        },\n        Currency: {\n          type: 'string'\n        },\n        CustomerNumber: {\n          type: 'string'\n        },\n        DefaultDeliveryTypes: {\n          $ref: '#/$defs/fortnox_customer_default_delivery_types'\n        },\n        DefaultTemplates: {\n          $ref: '#/$defs/fortnox_customer_default_templates'\n        },\n        DeliveryAddress1: {\n          type: 'string'\n        },\n        DeliveryAddress2: {\n          type: 'string'\n        },\n        DeliveryCity: {\n          type: 'string'\n        },\n        DeliveryCountry: {\n          type: 'string'\n        },\n        DeliveryCountryCode: {\n          type: 'string'\n        },\n        DeliveryFax: {\n          type: 'string'\n        },\n        DeliveryName: {\n          type: 'string'\n        },\n        DeliveryPhone1: {\n          type: 'string'\n        },\n        DeliveryPhone2: {\n          type: 'string'\n        },\n        DeliveryZipCode: {\n          type: 'string'\n        },\n        Email: {\n          type: 'string'\n        },\n        EmailInvoice: {\n          type: 'string'\n        },\n        EmailInvoiceBCC: {\n          type: 'string'\n        },\n        EmailInvoiceCC: {\n          type: 'string'\n        },\n        EmailOffer: {\n          type: 'string'\n        },\n        EmailOfferBCC: {\n          type: 'string'\n        },\n        EmailOfferCC: {\n          type: 'string'\n        },\n        EmailOrder: {\n          type: 'string'\n        },\n        EmailOrderBCC: {\n          type: 'string'\n        },\n        EmailOrderCC: {\n          type: 'string'\n        },\n        ExternalReference: {\n          type: 'string'\n        },\n        Fax: {\n          type: 'string'\n        },\n        GLN: {\n          type: 'string'\n        },\n        GLNDelivery: {\n          type: 'string'\n        },\n        InvoiceAdministrationFee: {\n          type: 'string'\n        },\n        InvoiceDiscount: {\n          type: 'number'\n        },\n        InvoiceFreight: {\n          type: 'string'\n        },\n        InvoiceRemark: {\n          type: 'string'\n        },\n        OrganisationNumber: {\n          type: 'string'\n        },\n        OurReference: {\n          type: 'string'\n        },\n        Phone1: {\n          type: 'string'\n        },\n        Phone2: {\n          type: 'string'\n        },\n        PriceList: {\n          type: 'string'\n        },\n        Project: {\n          type: 'string'\n        },\n        SalesAccount: {\n          type: 'string'\n        },\n        ShowPriceVATIncluded: {\n          type: 'boolean'\n        },\n        TermsOfDelivery: {\n          type: 'string'\n        },\n        TermsOfPayment: {\n          type: 'string'\n        },\n        Type: {\n          type: 'string',\n          enum: [            'PRIVATE',\n            'COMPANY'\n          ]\n        },\n        VATNumber: {\n          type: 'string'\n        },\n        VATType: {\n          type: 'string',\n          enum: [            'SEVAT',\n            'SEREVERSEDVAT',\n            'EUREVERSEDVAT',\n            'EUVAT',\n            'EXPORT'\n          ]\n        },\n        VisitingAddress: {\n          type: 'string'\n        },\n        VisitingCity: {\n          type: 'string'\n        },\n        VisitingCountry: {\n          type: 'string'\n        },\n        VisitingCountryCode: {\n          type: 'string'\n        },\n        VisitingZipCode: {\n          type: 'string'\n        },\n        WayOfDelivery: {\n          type: 'string'\n        },\n        WWW: {\n          type: 'string'\n        },\n        YourReference: {\n          type: 'string'\n        },\n        ZipCode: {\n          type: 'string'\n        }\n      },\n      required: [        'Name'\n      ]\n    },\n    fortnox_customer_default_delivery_types: {\n      type: 'object',\n      properties: {\n        Invoice: {\n          type: 'string',\n          enum: [            'PRINT',\n            'EMAIL',\n            'PRINTSERVICE'\n          ]\n        },\n        Offer: {\n          type: 'string',\n          enum: [            'PRINT',\n            'EMAIL',\n            'PRINTSERVICE'\n          ]\n        },\n        Order: {\n          type: 'string',\n          enum: [            'PRINT',\n            'EMAIL',\n            'PRINTSERVICE'\n          ]\n        }\n      }\n    },\n    fortnox_customer_default_templates: {\n      type: 'object',\n      properties: {\n        CashInvoice: {\n          type: 'string'\n        },\n        Invoice: {\n          type: 'string'\n        },\n        Offer: {\n          type: 'string'\n        },\n        Order: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      CustomerNumber: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['CustomerNumber'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const { CustomerNumber, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.number3.customers.retrieve(CustomerNumber)),
    );
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
