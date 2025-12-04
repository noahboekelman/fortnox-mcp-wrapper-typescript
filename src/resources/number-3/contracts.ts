// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Contracts extends APIResource {
  /**
   * Create a contract
   */
  create(
    body: ContractCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxContractWrap> {
    return this._client.post('/3/contracts', {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single contract
   */
  retrieve(documentNumber: string, options?: RequestOptions): APIPromise<FortnoxContractWrap> {
    return this._client.get(path`/3/contracts/${documentNumber}`, options);
  }

  /**
   * Note that there are two approaches for updating the rows on a contract.
   *
   * If RowId is not specified on any row, the rows will be mapped and updated in the
   * order in which they are set in the array. All rows that should remain on the
   * contract needs to be provided.
   *
   * If RowId is specified on one or more rows the following goes: Corresponding row
   * with that id will be updated. The rows without RowId will be interpreted as new
   * rows. If a row should not be updated but remain on the contract then specify
   * only RowId like { "RowId": 123 }, otherwise it will be removed. Note that new
   * RowIds are generated for all rows every time a contract is updated.
   *
   * When the InvoiceDiscount value is set on the rows and the Contract, the value
   * set on the Contract takes precedence over the row-level InvoiceDiscount.
   */
  update(
    documentNumber: string,
    body: ContractUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<FortnoxContractWrap> {
    return this._client.put(path`/3/contracts/${documentNumber}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a list of contracts
   */
  list(
    query: ContractListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContractListResponse> {
    return this._client.get('/3/contracts', { query, ...options });
  }

  /**
   * Create invoice from contract
   */
  createInvoice(documentNumber: string, options?: RequestOptions): APIPromise<FortnoxInvoiceWrap> {
    return this._client.put(path`/3/contracts/${documentNumber}/createinvoice`, options);
  }

  /**
   * Set a contract as finished
   */
  finish(documentNumber: string, options?: RequestOptions): APIPromise<FortnoxContractWrap> {
    return this._client.put(path`/3/contracts/${documentNumber}/finish`, options);
  }

  /**
   * Increases the invoice count without creating an invoice
   */
  increaseInvoiceCount(documentNumber: string, options?: RequestOptions): APIPromise<FortnoxContractWrap> {
    return this._client.put(path`/3/contracts/${documentNumber}/increaseinvoicecount`, options);
  }
}

export interface FortnoxContract {
  CustomerNumber: string;

  InvoiceRows: Array<FortnoxContractInvoiceRow>;

  PeriodEnd: string;

  '@url'?: string;

  '@urlTaxReductionList'?: string;

  Active?: boolean;

  AdministrationFee?: number;

  BasisTaxReduction?: number;

  Comments?: string;

  Continuous?: boolean;

  ContractDate?: string;

  ContractLength?: number;

  ContributionPercent?: number;

  ContributionValue?: number;

  CostCenter?: string;

  Currency?: string;

  CustomerName?: string;

  DocumentNumber?: string;

  EmailInformation?: FortnoxContractEmailInformation;

  ExternalInvoiceReference1?: string;

  ExternalInvoiceReference2?: string;

  Freight?: number;

  Gross?: number;

  HouseWork?: boolean;

  InvoiceDiscount?: number;

  InvoiceInterval?: number;

  InvoicesRemaining?: string;

  Language?: 'SV' | 'EN';

  LastInvoiceDate?: string;

  Net?: number;

  OurReference?: string;

  PeriodStart?: string;

  PriceList?: string;

  PrintTemplate?: string;

  Project?: string;

  Remarks?: string;

  RoundOff?: number;

  TaxReduction?: number;

  TaxReductionType?: 'none' | 'rot' | 'rut' | 'green';

  TemplateName?: string;

  TemplateNumber?: number;

  TermsOfDelivery?: string;

  TermsOfPayment?: string;

  Total?: number;

  TotalToPay?: number;

  TotalVAT?: number;

  VatIncluded?: boolean;

  WayOfDelivery?: string;

  YourOrderNumber?: string;

  YourReference?: string;
}

export interface FortnoxContractEmailInformation {
  EmailAddressBCC?: string;

  EmailAddressCC?: string;

  EmailAddressFrom?: string;

  EmailAddressTo?: string;

  EmailBody?: string;

  EmailSubject?: string;
}

export interface FortnoxContractInvoiceRow {
  ArticleNumber: string;

  DeliveredQuantity: string;

  AccountNumber?: number;

  ContributionPercent?: string;

  ContributionValue?: string;

  CostCenter?: string;

  Description?: string;

  Discount?: number;

  DiscountType?: 'AMOUNT' | 'PERCENT';

  HouseWork?: boolean;

  HouseWorkHoursToReport?: number;

  HouseWorkType?: string;

  Price?: number;

  PriceExcludingVAT?: number;

  Project?: string;

  RowId?: number;

  Total?: number;

  TotalExcludingVAT?: number;

  Unit?: string;

  VAT?: number;
}

export interface FortnoxContractWrap {
  Contract?: FortnoxContract;
}

export interface FortnoxInvoiceWrap {
  Invoice?: FortnoxInvoiceWrap.Invoice;
}

export namespace FortnoxInvoiceWrap {
  export interface Invoice {
    CustomerNumber: string;

    '@url'?: string;

    '@urlTaxReductionList'?: string;

    AccountingMethod?: 'ACCRUAL' | 'CASH';

    Address1?: string;

    Address2?: string;

    AdministrationFee?: number;

    AdministrationFeeVAT?: number;

    Balance?: number;

    BasisTaxReduction?: number;

    Booked?: boolean;

    Cancelled?: boolean;

    City?: string;

    Comments?: string;

    ContractReference?: number;

    ContributionPercent?: number;

    ContributionValue?: number;

    CostCenter?: string;

    Country?: string;

    Credit?: string;

    CreditInvoiceReference?: string;

    Currency?: string;

    CurrencyRate?: number;

    CurrencyUnit?: number;

    CustomerName?: string;

    DeliveryAddress1?: string;

    DeliveryAddress2?: string;

    DeliveryCity?: string;

    DeliveryCountry?: string;

    DeliveryDate?: string;

    DeliveryName?: string;

    DeliveryZipCode?: string;

    DocumentNumber?: string;

    DueDate?: string;

    EDIInformation?: Invoice.EdiInformation;

    EmailInformation?: Invoice.EmailInformation;

    EUQuarterlyReport?: boolean;

    ExternalInvoiceReference1?: string;

    ExternalInvoiceReference2?: string;

    FinalPayDate?: string;

    Freight?: number;

    FreightVAT?: number;

    Gross?: number;

    HouseWork?: boolean;

    InvoiceDate?: string;

    InvoicePeriodEnd?: string;

    InvoicePeriodReference?: string;

    InvoicePeriodStart?: string;

    InvoiceRows?: Array<Invoice.InvoiceRow>;

    InvoiceType?: 'INVOICE' | 'AGREEMENTINVOICE' | 'INTRESTINVOICE' | 'SUMMARYINVOICE' | 'CASHINVOICE';

    Labels?: Array<Invoice.Label>;

    Language?: 'SV' | 'EN';

    LastRemindDate?: string;

    Net?: number;

    NotCompleted?: boolean;

    NoxFinans?: boolean;

    OCR?: string;

    OfferReference?: string;

    OrderReference?: string;

    OrganisationNumber?: string;

    OurReference?: string;

    OutboundDate?: string;

    PaymentWay?: 'CASH' | 'CARD' | 'AG';

    Phone1?: string;

    Phone2?: string;

    PriceList?: string;

    PrintTemplate?: string;

    Project?: string;

    Remarks?: string;

    Reminders?: number;

    RoundOff?: number;

    Sent?: boolean;

    TaxReduction?: number;

    TaxReductionType?: 'none' | 'rot' | 'rut' | 'green';

    TermsOfDelivery?: string;

    TermsOfPayment?: string;

    TimeBasisReference?: number;

    Total?: number;

    TotalToPay?: number;

    TotalVAT?: number;

    VATIncluded?: boolean;

    VoucherNumber?: number;

    VoucherSeries?: string;

    VoucherYear?: number;

    WarehouseReady?: boolean;

    WayOfDelivery?: string;

    YourOrderNumber?: string;

    YourReference?: string;

    ZipCode?: string;
  }

  export namespace Invoice {
    export interface EdiInformation {
      EDIGlobalLocationNumber?: string;

      EDIGlobalLocationNumberDelivery?: string;

      EDIInvoiceExtra1?: string;

      EDIInvoiceExtra2?: string;

      EDIOurElectronicReference?: string;

      EDIStatus?: string;

      EDIYourElectronicReference?: string;
    }

    export interface EmailInformation {
      EmailAddressBCC?: string;

      EmailAddressCC?: string;

      EmailAddressFrom?: string;

      EmailAddressTo?: string;

      EmailBody?: string;

      EmailSubject?: string;
    }

    export interface InvoiceRow {
      AccountNumber?: number;

      ArticleNumber?: string;

      ContributionPercent?: string;

      ContributionValue?: string;

      CostCenter?: string;

      DeliveredQuantity?: string;

      Description?: string;

      Discount?: number;

      DiscountType?: 'AMOUNT' | 'PERCENT';

      HouseWork?: boolean;

      HouseWorkHoursToReport?: number;

      HouseWorkType?:
        | 'CONSTRUCTION'
        | 'ELECTRICITY'
        | 'GLASSMETALWORK'
        | 'GROUNDDRAINAGEWORK'
        | 'MASONRY'
        | 'PAINTINGWALLPAPERING'
        | 'HVAC'
        | 'MAJORAPPLIANCEREPAIR'
        | 'MOVINGSERVICES'
        | 'ITSERVICES'
        | 'CLEANING'
        | 'TEXTILECLOTHING'
        | 'SNOWPLOWING'
        | 'GARDENING'
        | 'BABYSITTING'
        | 'OTHERCARE'
        | 'OTHERCOSTS'
        | 'SOLARCELLS'
        | 'STORAGESELFPRODUCEDELECTRICITY'
        | 'CHARGINGSTATIONELECTRICVEHICLE'
        | 'HOMEMAINTENANCE'
        | 'FURNISHING'
        | 'TRANSPORTATIONSERVICES'
        | 'WASHINGANDCAREOFCLOTHING';

      Price?: number;

      PriceExcludingVAT?: number;

      Project?: string;

      RowId?: number;

      StockPointCode?: string;

      Total?: number;

      TotalExcludingVAT?: number;

      Unit?: string;

      VAT?: number;

      VATCode?: string;
    }

    export interface Label {
      Id?: number;
    }
  }
}

export interface ContractListResponse {
  Contracts?: Array<ContractListResponse.Contract>;
}

export namespace ContractListResponse {
  export interface Contract {
    CustomerNumber: string;

    PeriodEnd: string;

    '@url'?: string;

    Continuous?: boolean;

    ContractLength?: number;

    Currency?: string;

    CustomerName?: string;

    DocumentNumber?: string;

    Invoiceinterval?: number;

    InvoicesRemaining?: number;

    LastInvoiceDate?: string;

    PeriodStart?: string;

    Status?: string;

    TemplateNumber?: number;

    Total?: number;
  }
}

export interface ContractCreateParams {
  Contract?: FortnoxContract;
}

export interface ContractUpdateParams {
  Contract?: FortnoxContract;
}

export interface ContractListParams {
  /**
   * possibility to filter contracts
   */
  filter?: 'active' | 'inactive' | 'finished';
}

export declare namespace Contracts {
  export {
    type FortnoxContract as FortnoxContract,
    type FortnoxContractEmailInformation as FortnoxContractEmailInformation,
    type FortnoxContractInvoiceRow as FortnoxContractInvoiceRow,
    type FortnoxContractWrap as FortnoxContractWrap,
    type FortnoxInvoiceWrap as FortnoxInvoiceWrap,
    type ContractListResponse as ContractListResponse,
    type ContractCreateParams as ContractCreateParams,
    type ContractUpdateParams as ContractUpdateParams,
    type ContractListParams as ContractListParams,
  };
}
