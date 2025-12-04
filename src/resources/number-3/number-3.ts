// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AbsencetransactionsAPI from './absencetransactions';
import {
  AbsencetransactionCreateParams,
  AbsencetransactionListParams,
  AbsencetransactionRetrieveByDateAndCodeParams,
  AbsencetransactionUpdateParams,
  Absencetransactions,
  FortnoxAbsenceTransactionListItemWrap,
  FortnoxAbsenceTransactionPayload,
  FortnoxAbsenceTransactionPayloadWrap,
  FortnoxAbsenceTransactionSingleItemWrap,
} from './absencetransactions';
import * as AccountsAPI from './accounts';
import {
  AccountCreateParams,
  AccountListParams,
  AccountListResponse,
  AccountUpdateParams,
  Accounts,
  FortnoxAccountPayload,
  FortnoxAccountPayloadOpeningQuantities,
  FortnoxAccountPayloadWrap,
  FortnoxAccountSingleItemWrap,
} from './accounts';
import * as ArchiveAPI from './archive';
import {
  Archive,
  ArchiveRemoveFilesParams,
  ArchiveRetrieveFileParams,
  ArchiveRetrieveParams,
  ArchiveUploadFileParams,
  FileRow,
  FileRowWrap,
  FolderWrap,
} from './archive';
import * as ArticlefileconnectionsAPI from './articlefileconnections';
import {
  ArticlefileconnectionCreateParams,
  ArticlefileconnectionListResponse,
  Articlefileconnections,
  FortnoxArticleFileConnectionWrap,
} from './articlefileconnections';
import * as ArticlesAPI from './articles';
import {
  ArticleCreateParams,
  ArticleListParams,
  ArticleListResponse,
  ArticleUpdateParams,
  Articles,
  FortnoxArticle,
  FortnoxArticleWrap,
} from './articles';
import * as ArticleurlconnectionsAPI from './articleurlconnections';
import {
  ArticleurlconnectionCreateParams,
  ArticleurlconnectionListResponse,
  ArticleurlconnectionUpdateParams,
  Articleurlconnections,
  FortnoxArticleURLConnection,
  FortnoxArticleURLConnectionWrap,
} from './articleurlconnections';
import * as AssetfileconnectionsAPI from './assetfileconnections';
import {
  AssetfileconnectionCreateParams,
  AssetfileconnectionListResponse,
  Assetfileconnections,
  FortnoxAssetFileConnection,
  FortnoxMetaInformation,
} from './assetfileconnections';
import * as AttendancetransactionsAPI from './attendancetransactions';
import {
  AttendancetransactionCreateParams,
  AttendancetransactionListParams,
  AttendancetransactionRetrieveByDateAndCodeParams,
  AttendancetransactionUpdateParams,
  Attendancetransactions,
  FortnoxAttendanceTransaction,
  FortnoxAttendanceTransactionListItemList,
  FortnoxAttendanceTransactionWrap,
} from './attendancetransactions';
import * as ContractaccrualsAPI from './contractaccruals';
import {
  ContractaccrualCreateParams,
  ContractaccrualListResponse,
  ContractaccrualUpdateParams,
  Contractaccruals,
  FortnoxContractAccrual,
  FortnoxContractAccrualAccrualRow,
  FortnoxContractAccrualWrap,
} from './contractaccruals';
import * as ContractsAPI from './contracts';
import {
  ContractCreateParams,
  ContractListParams,
  ContractListResponse,
  ContractUpdateParams,
  Contracts,
  FortnoxContract,
  FortnoxContractEmailInformation,
  FortnoxContractInvoiceRow,
  FortnoxContractWrap,
  FortnoxInvoiceWrap,
} from './contracts';
import * as ContracttemplatesAPI from './contracttemplates';
import {
  ContracttemplateCreateParams,
  ContracttemplateListResponse,
  ContracttemplateUpdateParams,
  Contracttemplates,
  FortnoxContractTemplate,
  FortnoxContractTemplateInvoiceRow,
  FortnoxContractTemplateWrap,
} from './contracttemplates';
import * as CostcentersAPI from './costcenters';
import {
  CostCenter,
  CostCenterWrap,
  CostcenterCreateParams,
  CostcenterListResponse,
  CostcenterUpdateParams,
  Costcenters,
} from './costcenters';
import * as CurrenciesAPI from './currencies';
import {
  Currencies,
  Currency,
  CurrencyCreateParams,
  CurrencyListResponse,
  CurrencyUpdateParams,
  CurrencyWrap,
} from './currencies';
import * as CustomerreferencesAPI from './customerreferences';
import {
  CustomerReferenceRow,
  CustomerReferenceRowWrap,
  CustomerReferenceWrap,
  CustomerWrap,
  CustomerreferenceCreateParams,
  CustomerreferenceListParams,
  CustomerreferenceUpdateParams,
  Customerreferences,
} from './customerreferences';
import * as CustomersAPI from './customers';
import {
  CustomerCreateParams,
  CustomerListParams,
  CustomerListResponse,
  CustomerUpdateParams,
  Customers,
} from './customers';
import * as EmployeesAPI from './employees';
import {
  DatedSchedule,
  DatedWage,
  EmployeeCategory,
  EmployeeChild,
  EmployeeCreateParams,
  EmployeeListResponse,
  EmployeeUpdateParams,
  EmployeeWrap,
  Employees,
  FortnoxEmployee,
  OpeningSalary,
} from './employees';
import * as ExpensesAPI from './expenses';
import { ExpenseCreateParams, ExpenseListResponse, ExpenseWrap, Expenses } from './expenses';
import * as FinancialyearsAPI from './financialyears';
import {
  FinancialYear,
  FinancialYearWrap,
  FinancialyearCreateParams,
  FinancialyearListParams,
  FinancialyearListResponse,
  Financialyears,
} from './financialyears';
import * as InboxAPI from './inbox';
import { Inbox, InboxUploadParams } from './inbox';
import * as InvoiceaccrualsAPI from './invoiceaccruals';
import {
  FortnoxInvoiceAccrual,
  FortnoxInvoiceAccrualInvoiceAccrualRow,
  InvoiceAccrualWrap,
  InvoiceaccrualCreateParams,
  InvoiceaccrualListResponse,
  InvoiceaccrualUpdateParams,
  Invoiceaccruals,
} from './invoiceaccruals';
import * as InvoicepaymentsAPI from './invoicepayments';
import {
  FortnoxInvoicePayment,
  FortnoxInvoicePaymentWriteOff,
  InvoicePaymentWrap,
  InvoicepaymentBookkeepParams,
  InvoicepaymentCreateParams,
  InvoicepaymentListParams,
  InvoicepaymentListResponse,
  InvoicepaymentUpdateParams,
  Invoicepayments,
} from './invoicepayments';
import * as InvoicesAPI from './invoices';
import {
  FortnoxInvoicePayload,
  FortnoxInvoicePayloadEdiInformation,
  FortnoxInvoicePayloadEmailInformation,
  FortnoxInvoicePayloadInvoiceRow,
  FortnoxInvoicePayloadLabel,
  InvoiceCreateParams,
  InvoiceListParams,
  InvoiceListResponse,
  InvoicePayloadWrap,
  InvoiceUpdateParams,
  Invoices,
} from './invoices';
import * as LabelsAPI from './labels';
import { Label, LabelCreateParams, LabelListResponse, LabelUpdateParams, LabelWrap, Labels } from './labels';
import * as ModesofpaymentsAPI from './modesofpayments';
import {
  ModeOfPayment,
  ModeOfPaymentWrap,
  ModesofpaymentCreateParams,
  ModesofpaymentListResponse,
  ModesofpaymentUpdateParams,
  Modesofpayments,
} from './modesofpayments';
import * as NoxfinansinvoicesAPI from './noxfinansinvoices';
import {
  InvoiceResponseWrap,
  NoxfinansinvoicePauseParams,
  NoxfinansinvoiceReportPaymentParams,
  NoxfinansinvoiceSendParams,
  Noxfinansinvoices,
} from './noxfinansinvoices';
import * as OffersAPI from './offers';
import {
  FortnoxOffer,
  FortnoxOfferEmailInformation,
  FortnoxOfferLabel,
  FortnoxOfferOfferRow,
  OfferCreateParams,
  OfferListParams,
  OfferListResponse,
  OfferUpdateParams,
  OfferWrap,
  Offers,
  OrderWrap,
} from './offers';
import * as OrdersAPI from './orders';
import { OrderCreateParams, OrderListParams, OrderListResponse, OrderUpdateParams, Orders } from './orders';
import * as PredefinedaccountsAPI from './predefinedaccounts';
import {
  PredefinedAccount,
  PredefinedAccountWrap,
  PredefinedaccountListResponse,
  PredefinedaccountUpdateParams,
  Predefinedaccounts,
} from './predefinedaccounts';
import * as PredefinedvoucherseriesAPI from './predefinedvoucherseries';
import {
  PredefinedVoucherSeries,
  PredefinedVoucherSeriesWrap,
  Predefinedvoucherseries,
  PredefinedvoucherseryListResponse,
  PredefinedvoucherseryUpdateParams,
} from './predefinedvoucherseries';
import * as PricelistsAPI from './pricelists';
import {
  PriceList,
  PriceListWrap,
  PricelistCreateParams,
  PricelistListResponse,
  PricelistUpdateParams,
  Pricelists,
} from './pricelists';
import * as PricesAPI from './prices';
import {
  FortnoxPrice,
  PriceCreateParams,
  PriceDeleteParams,
  PriceRetrieveFirstParams,
  PriceRetrieveParams,
  PriceRetrieveSublistParams,
  PriceRetrieveSublistResponse,
  PriceUpdateFirstParams,
  PriceUpdateParams,
  PriceWrap,
  Prices,
} from './prices';
import * as ProjectsAPI from './projects';
import {
  FortnoxProject,
  ProjectCreateParams,
  ProjectListResponse,
  ProjectUpdateParams,
  ProjectWrap,
  Projects,
} from './projects';
import * as SalarytransactionsAPI from './salarytransactions';
import {
  FortnoxSalaryTransaction,
  SalaryTransactionWrap,
  SalarytransactionCreateParams,
  SalarytransactionListParams,
  SalarytransactionListResponse,
  SalarytransactionUpdateParams,
  Salarytransactions,
} from './salarytransactions';
import * as ScheduletimesAPI from './scheduletimes';
import {
  ScheduleTimeWrap,
  ScheduletimeResetDayParams,
  ScheduletimeRetrieveParams,
  ScheduletimeUpdateParams,
  Scheduletimes,
} from './scheduletimes';
import * as SettingsAPI from './settings';
import { SettingRetrieveCompanyResponse, SettingRetrieveLockedPeriodResponse, Settings } from './settings';
import * as SupplierinvoiceaccrualsAPI from './supplierinvoiceaccruals';
import {
  FortnoxSupplierInvoiceAccrual,
  FortnoxSupplierInvoiceAccrualSupplierInvoiceAccrualRows,
  SupplierInvoiceAccrualWrap,
  SupplierinvoiceaccrualCreateParams,
  SupplierinvoiceaccrualListResponse,
  SupplierinvoiceaccrualUpdateParams,
  Supplierinvoiceaccruals,
} from './supplierinvoiceaccruals';
import * as SupplierinvoiceexternalurlconnectionsAPI from './supplierinvoiceexternalurlconnections';
import {
  SupplierInvoiceExternalURLConnectionSingle,
  SupplierInvoiceExternalURLConnectionUpdate,
  SupplierinvoiceexternalurlconnectionCreateParams,
  SupplierinvoiceexternalurlconnectionUpdateParams,
  Supplierinvoiceexternalurlconnections,
} from './supplierinvoiceexternalurlconnections';
import * as SupplierinvoicefileconnectionsAPI from './supplierinvoicefileconnections';
import {
  FortnoxSupplierInvoiceFileConnection,
  FortnoxSupplierInvoiceFileConnectionWrap,
  SupplierinvoicefileconnectionCreateParams,
  SupplierinvoicefileconnectionListResponse,
  Supplierinvoicefileconnections,
} from './supplierinvoicefileconnections';
import * as SupplierinvoicepaymentsAPI from './supplierinvoicepayments';
import {
  FortnoxSupplierInvoicePayment,
  FortnoxSupplierInvoicePaymentWrap,
  FortnoxSupplierInvoicePaymentWriteOff,
  SupplierinvoicepaymentCreateParams,
  SupplierinvoicepaymentListResponse,
  SupplierinvoicepaymentUpdateParams,
  Supplierinvoicepayments,
} from './supplierinvoicepayments';
import * as SupplierinvoicesAPI from './supplierinvoices';
import {
  FortnoxSupplierInvoice,
  FortnoxSupplierInvoiceSupplierInvoiceRow,
  FortnoxSupplierInvoiceVoucher,
  FortnoxSupplierInvoiceWrap,
  SupplierinvoiceCreateParams,
  SupplierinvoiceListParams,
  SupplierinvoiceListResponse,
  SupplierinvoiceUpdateParams,
  Supplierinvoices,
} from './supplierinvoices';
import * as SuppliersAPI from './suppliers';
import {
  FortnoxSupplier,
  FortnoxSupplierWrap,
  SupplierCreateParams,
  SupplierListResponse,
  SupplierUpdateParams,
  Suppliers,
} from './suppliers';
import * as TaxreductionsAPI from './taxreductions';
import {
  FortnoxTaxReduction,
  FortnoxTaxReductionTaxReductionAmount,
  FortnoxTaxReductionWrap,
  TaxreductionCreateParams,
  TaxreductionListParams,
  TaxreductionListResponse,
  TaxreductionUpdateParams,
  Taxreductions,
} from './taxreductions';
import * as TermsofdeliveriesAPI from './termsofdeliveries';
import {
  FortnoxTermsOfDelivery,
  FortnoxTermsOfDeliveryWrap,
  Termsofdeliveries,
  TermsofdeliveryCreateParams,
  TermsofdeliveryListResponse,
  TermsofdeliveryUpdateParams,
} from './termsofdeliveries';
import * as TermsofpaymentsAPI from './termsofpayments';
import {
  FortnoxTermsOfPayment,
  FortnoxTermsOfPaymentWrap,
  TermsofpaymentCreateParams,
  TermsofpaymentListResponse,
  TermsofpaymentUpdateParams,
  Termsofpayments,
} from './termsofpayments';
import * as UnitsAPI from './units';
import {
  FortnoxUnit,
  FortnoxUnitWrap,
  UnitCreateParams,
  UnitListResponse,
  UnitUpdateParams,
  Units,
} from './units';
import * as VoucherfileconnectionsAPI from './voucherfileconnections';
import {
  FortnoxVoucherFileConnection,
  FortnoxVoucherFileConnectionWrap,
  VoucherfileconnectionCreateParams,
  VoucherfileconnectionListResponse,
  Voucherfileconnections,
} from './voucherfileconnections';
import * as VoucherseriesAPI from './voucherseries';
import {
  FortnoxVoucherSeries,
  FortnoxVoucherSeriesApprover,
  FortnoxVoucherSeriesWrap,
  Voucherseries,
  VoucherseryCreateParams,
  VoucherseryListResponse,
  VoucherseryUpdateParams,
} from './voucherseries';
import * as WayofdeliveriesAPI from './wayofdeliveries';
import {
  FortnoxWayOfDelivery,
  FortnoxWayOfDeliveryWrap,
  Wayofdeliveries,
  WayofdeliveryCreateParams,
  WayofdeliveryListResponse,
  WayofdeliveryUpdateParams,
} from './wayofdeliveries';
import * as AssetsAPI from './assets/assets';
import {
  AssetChangeObParams,
  AssetCreateParams,
  AssetDeleteParams,
  AssetDepreciateParams,
  AssetDepreciateResponse,
  AssetScrapParams,
  AssetSellParams,
  AssetUpdateParams,
  AssetWriteDownParams,
  AssetWriteUpParams,
  Assets,
  FortnoxAssetSingle,
  FortnoxCreateAsset,
  FortnoxCreateAssetWrap,
  FortnoxListAssetWrap,
} from './assets/assets';
import * as EmailsendersAPI from './emailsenders/emailsenders';
import { EmailsenderListResponse, Emailsenders } from './emailsenders/emailsenders';
import * as VouchersAPI from './vouchers/vouchers';
import {
  FortnoxVoucherListItemList,
  FortnoxVoucherWrap,
  VoucherCreateParams,
  VoucherListParams,
  VoucherRetrieveParams,
  Vouchers,
} from './vouchers/vouchers';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Number3 extends APIResource {
  absencetransactions: AbsencetransactionsAPI.Absencetransactions =
    new AbsencetransactionsAPI.Absencetransactions(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  archive: ArchiveAPI.Archive = new ArchiveAPI.Archive(this._client);
  articlefileconnections: ArticlefileconnectionsAPI.Articlefileconnections =
    new ArticlefileconnectionsAPI.Articlefileconnections(this._client);
  articles: ArticlesAPI.Articles = new ArticlesAPI.Articles(this._client);
  articleurlconnections: ArticleurlconnectionsAPI.Articleurlconnections =
    new ArticleurlconnectionsAPI.Articleurlconnections(this._client);
  assetfileconnections: AssetfileconnectionsAPI.Assetfileconnections =
    new AssetfileconnectionsAPI.Assetfileconnections(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  attendancetransactions: AttendancetransactionsAPI.Attendancetransactions =
    new AttendancetransactionsAPI.Attendancetransactions(this._client);
  contractaccruals: ContractaccrualsAPI.Contractaccruals = new ContractaccrualsAPI.Contractaccruals(
    this._client,
  );
  contracts: ContractsAPI.Contracts = new ContractsAPI.Contracts(this._client);
  contracttemplates: ContracttemplatesAPI.Contracttemplates = new ContracttemplatesAPI.Contracttemplates(
    this._client,
  );
  costcenters: CostcentersAPI.Costcenters = new CostcentersAPI.Costcenters(this._client);
  currencies: CurrenciesAPI.Currencies = new CurrenciesAPI.Currencies(this._client);
  customerreferences: CustomerreferencesAPI.Customerreferences = new CustomerreferencesAPI.Customerreferences(
    this._client,
  );
  customers: CustomersAPI.Customers = new CustomersAPI.Customers(this._client);
  emailsenders: EmailsendersAPI.Emailsenders = new EmailsendersAPI.Emailsenders(this._client);
  employees: EmployeesAPI.Employees = new EmployeesAPI.Employees(this._client);
  expenses: ExpensesAPI.Expenses = new ExpensesAPI.Expenses(this._client);
  financialyears: FinancialyearsAPI.Financialyears = new FinancialyearsAPI.Financialyears(this._client);
  inbox: InboxAPI.Inbox = new InboxAPI.Inbox(this._client);
  invoiceaccruals: InvoiceaccrualsAPI.Invoiceaccruals = new InvoiceaccrualsAPI.Invoiceaccruals(this._client);
  invoicepayments: InvoicepaymentsAPI.Invoicepayments = new InvoicepaymentsAPI.Invoicepayments(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  labels: LabelsAPI.Labels = new LabelsAPI.Labels(this._client);
  modesofpayments: ModesofpaymentsAPI.Modesofpayments = new ModesofpaymentsAPI.Modesofpayments(this._client);
  noxfinansinvoices: NoxfinansinvoicesAPI.Noxfinansinvoices = new NoxfinansinvoicesAPI.Noxfinansinvoices(
    this._client,
  );
  offers: OffersAPI.Offers = new OffersAPI.Offers(this._client);
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  predefinedaccounts: PredefinedaccountsAPI.Predefinedaccounts = new PredefinedaccountsAPI.Predefinedaccounts(
    this._client,
  );
  predefinedvoucherseries: PredefinedvoucherseriesAPI.Predefinedvoucherseries =
    new PredefinedvoucherseriesAPI.Predefinedvoucherseries(this._client);
  pricelists: PricelistsAPI.Pricelists = new PricelistsAPI.Pricelists(this._client);
  prices: PricesAPI.Prices = new PricesAPI.Prices(this._client);
  projects: ProjectsAPI.Projects = new ProjectsAPI.Projects(this._client);
  salarytransactions: SalarytransactionsAPI.Salarytransactions = new SalarytransactionsAPI.Salarytransactions(
    this._client,
  );
  scheduletimes: ScheduletimesAPI.Scheduletimes = new ScheduletimesAPI.Scheduletimes(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  supplierinvoiceaccruals: SupplierinvoiceaccrualsAPI.Supplierinvoiceaccruals =
    new SupplierinvoiceaccrualsAPI.Supplierinvoiceaccruals(this._client);
  supplierinvoiceexternalurlconnections: SupplierinvoiceexternalurlconnectionsAPI.Supplierinvoiceexternalurlconnections =
    new SupplierinvoiceexternalurlconnectionsAPI.Supplierinvoiceexternalurlconnections(this._client);
  supplierinvoicefileconnections: SupplierinvoicefileconnectionsAPI.Supplierinvoicefileconnections =
    new SupplierinvoicefileconnectionsAPI.Supplierinvoicefileconnections(this._client);
  supplierinvoicepayments: SupplierinvoicepaymentsAPI.Supplierinvoicepayments =
    new SupplierinvoicepaymentsAPI.Supplierinvoicepayments(this._client);
  supplierinvoices: SupplierinvoicesAPI.Supplierinvoices = new SupplierinvoicesAPI.Supplierinvoices(
    this._client,
  );
  suppliers: SuppliersAPI.Suppliers = new SuppliersAPI.Suppliers(this._client);
  taxreductions: TaxreductionsAPI.Taxreductions = new TaxreductionsAPI.Taxreductions(this._client);
  termsofdeliveries: TermsofdeliveriesAPI.Termsofdeliveries = new TermsofdeliveriesAPI.Termsofdeliveries(
    this._client,
  );
  termsofpayments: TermsofpaymentsAPI.Termsofpayments = new TermsofpaymentsAPI.Termsofpayments(this._client);
  units: UnitsAPI.Units = new UnitsAPI.Units(this._client);
  voucherfileconnections: VoucherfileconnectionsAPI.Voucherfileconnections =
    new VoucherfileconnectionsAPI.Voucherfileconnections(this._client);
  vouchers: VouchersAPI.Vouchers = new VouchersAPI.Vouchers(this._client);
  voucherseries: VoucherseriesAPI.Voucherseries = new VoucherseriesAPI.Voucherseries(this._client);
  wayofdeliveries: WayofdeliveriesAPI.Wayofdeliveries = new WayofdeliveriesAPI.Wayofdeliveries(this._client);

  /**
   * Retrieves a list of all the available account charts.
   */
  listAccountCharts(options?: RequestOptions): APIPromise<Number3ListAccountChartsResponse> {
    return this._client.get('/3/accountcharts', options);
  }

  /**
   * Retrieve a list of print templates
   */
  listPrintTemplates(options?: RequestOptions): APIPromise<Number3ListPrintTemplatesResponse> {
    return this._client.get('/3/printtemplates', options);
  }

  /**
   * Retrieve the Company Information
   */
  retrieveCompanyInformation(
    options?: RequestOptions,
  ): APIPromise<Number3RetrieveCompanyInformationResponse> {
    return this._client.get('/3/companyinformation', options);
  }

  /**
   * Retrieve details about eu vat limit
   */
  retrieveEuVatLimitRegulation(
    query: Number3RetrieveEuVatLimitRegulationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Number3RetrieveEuVatLimitRegulationResponse> {
    return this._client.get('/3/euvatlimitregulation', { query, ...options });
  }

  /**
   * Retrieves a SIE file as streamed content
   */
  retrieveSieFile(
    type: string,
    query: Number3RetrieveSieFileParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(path`/3/sie/${type}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve user information Use this endpoint to retrieve user information related
   * to the used access token
   */
  retrieveUserInformation(options?: RequestOptions): APIPromise<Number3RetrieveUserInformationResponse> {
    return this._client.get('/3/me', options);
  }

  /**
   * Retrieve a specific vacation debt basis for a posted voucher
   */
  retrieveVacationDebtBasis(
    month: number,
    params: Number3RetrieveVacationDebtBasisParams,
    options?: RequestOptions,
  ): APIPromise<Number3RetrieveVacationDebtBasisResponse> {
    const { Year } = params;
    return this._client.get(path`/3/vacationdebtbasis/${Year}/${month}`, options);
  }
}

export interface FortnoxCustomer {
  Name: string;

  '@url'?: string;

  Active?: boolean;

  Address1?: string;

  Address2?: string;

  City?: string;

  Comments?: string;

  CostCenter?: string;

  Country?: string;

  CountryCode?: string;

  Currency?: string;

  CustomerNumber?: string;

  DefaultDeliveryTypes?: FortnoxCustomerDefaultDeliveryTypes;

  DefaultTemplates?: FortnoxCustomerDefaultTemplates;

  DeliveryAddress1?: string;

  DeliveryAddress2?: string;

  DeliveryCity?: string;

  DeliveryCountry?: string;

  DeliveryCountryCode?: string;

  DeliveryFax?: string;

  DeliveryName?: string;

  DeliveryPhone1?: string;

  DeliveryPhone2?: string;

  DeliveryZipCode?: string;

  Email?: string;

  EmailInvoice?: string;

  EmailInvoiceBCC?: string;

  EmailInvoiceCC?: string;

  EmailOffer?: string;

  EmailOfferBCC?: string;

  EmailOfferCC?: string;

  EmailOrder?: string;

  EmailOrderBCC?: string;

  EmailOrderCC?: string;

  ExternalReference?: string;

  Fax?: string;

  GLN?: string;

  GLNDelivery?: string;

  InvoiceAdministrationFee?: string;

  InvoiceDiscount?: number;

  InvoiceFreight?: string;

  InvoiceRemark?: string;

  OrganisationNumber?: string;

  OurReference?: string;

  Phone1?: string;

  Phone2?: string;

  PriceList?: string;

  Project?: string;

  SalesAccount?: string;

  ShowPriceVATIncluded?: boolean;

  TermsOfDelivery?: string;

  TermsOfPayment?: string;

  Type?: 'PRIVATE' | 'COMPANY';

  VATNumber?: string;

  VATType?: 'SEVAT' | 'SEREVERSEDVAT' | 'EUREVERSEDVAT' | 'EUVAT' | 'EXPORT';

  VisitingAddress?: string;

  VisitingCity?: string;

  VisitingCountry?: string;

  VisitingCountryCode?: string;

  VisitingZipCode?: string;

  WayOfDelivery?: string;

  WWW?: string;

  YourReference?: string;

  ZipCode?: string;
}

export interface FortnoxCustomerDefaultDeliveryTypes {
  Invoice?: 'PRINT' | 'EMAIL' | 'PRINTSERVICE';

  Offer?: 'PRINT' | 'EMAIL' | 'PRINTSERVICE';

  Order?: 'PRINT' | 'EMAIL' | 'PRINTSERVICE';
}

export interface FortnoxCustomerDefaultTemplates {
  CashInvoice?: string;

  Invoice?: string;

  Offer?: string;

  Order?: string;
}

export interface FortnoxOrder {
  CustomerNumber: string;

  '@url'?: string;

  '@urlTaxReductionList'?: string;

  Address1?: string;

  Address2?: string;

  AdministrationFee?: number;

  AdministrationFeeVAT?: number;

  BasisTaxReduction?: number;

  Cancelled?: boolean;

  City?: string;

  Comments?: string;

  ContributionPercent?: number;

  ContributionValue?: number;

  CopyRemarks?: boolean;

  CostCenter?: string;

  Country?: string;

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

  DeliveryState?: 'registration' | 'reservation' | 'delivery';

  DeliveryZipCode?: string;

  DocumentNumber?: string;

  EmailInformation?: FortnoxOrderEmailInformation;

  ExternalInvoiceReference1?: string;

  ExternalInvoiceReference2?: string;

  Freight?: number;

  FreightVAT?: number;

  Gross?: number;

  HouseWork?: boolean;

  InvoiceReference?: string;

  Labels?: Array<FortnoxOrderLabel>;

  Language?: string;

  Net?: number;

  NotCompleted?: boolean;

  OfferReference?: string;

  OrderDate?: string;

  OrderRows?: Array<FortnoxOrderOrderRow>;

  OrderType?: string;

  OrganisationNumber?: string;

  OurReference?: string;

  OutboundDate?: string;

  Phone1?: string;

  Phone2?: string;

  PriceList?: string;

  PrintTemplate?: string;

  Project?: string;

  Remarks?: string;

  RoundOff?: number;

  Sent?: boolean;

  StockPointCode?: string;

  StockPointId?: string;

  TaxReduction?: number;

  TaxReductionType?: 'none' | 'rot' | 'rut' | 'green';

  TermsOfDelivery?: string;

  TermsOfPayment?: string;

  TimeBasisReference?: number;

  Total?: number;

  TotalToPay?: number;

  TotalVAT?: number;

  VATIncluded?: boolean;

  WarehouseReady?: boolean;

  WayOfDelivery?: string;

  YourOrderNumber?: string;

  YourReference?: string;

  ZipCode?: string;
}

export interface FortnoxOrderEmailInformation {
  EmailAddressBCC?: string;

  EmailAddressCC?: string;

  EmailAddressFrom?: string;

  EmailAddressTo?: string;

  EmailBody?: string;

  EmailSubject?: string;
}

export interface FortnoxOrderLabel {
  Id?: number;
}

export interface FortnoxOrderOrderRow {
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
    | 'MOVINGSERVICES'
    | 'ITSERVICES'
    | 'CLEANING'
    | 'TEXTILECLOTHING'
    | 'SNOWPLOWING'
    | 'GARDENING'
    | 'BABYSITTING'
    | 'OTHERCARE'
    | 'OTHERCOSTS';

  OrderedQuantity?: string;

  Price?: number;

  Project?: string;

  ReservedQuantity?: string;

  RowId?: number;

  StockPointCode?: string;

  StockPointId?: string;

  Total?: number;

  Unit?: string;

  VAT?: number;

  VATCode?: string;
}

export interface Number3ListAccountChartsResponse {
  AccountCharts?: Array<Number3ListAccountChartsResponse.AccountChart>;
}

export namespace Number3ListAccountChartsResponse {
  export interface AccountChart {
    Name?: string;
  }
}

export interface Number3ListPrintTemplatesResponse {
  PrintTemplates?: Array<Number3ListPrintTemplatesResponse.PrintTemplate>;
}

export namespace Number3ListPrintTemplatesResponse {
  export interface PrintTemplate {
    Template: string;

    Name?: string;
  }
}

export interface Number3RetrieveCompanyInformationResponse {
  CompanyInformation?: Number3RetrieveCompanyInformationResponse.CompanyInformation;
}

export namespace Number3RetrieveCompanyInformationResponse {
  export interface CompanyInformation {
    Address?: string;

    City?: string;

    CompanyName?: string;

    CountryCode?: string;

    DatabaseNumber?: number;

    OrganizationNumber?: string;

    VisitAddress?: string;

    VisitCity?: string;

    VisitCountryCode?: string;

    VisitZipCode?: string;

    ZipCode?: string;
  }
}

export interface Number3RetrieveEuVatLimitRegulationResponse {
  EUVatLimitRegulation?: Number3RetrieveEuVatLimitRegulationResponse.EuVatLimitRegulation;
}

export namespace Number3RetrieveEuVatLimitRegulationResponse {
  export interface EuVatLimitRegulation {
    IsOverLimit?: boolean;

    Limit?: number;

    TotalExclVat?: number;

    Year?: string;
  }
}

export interface Number3RetrieveUserInformationResponse {
  MeInformation?: Number3RetrieveUserInformationResponse.MeInformation;
}

export namespace Number3RetrieveUserInformationResponse {
  export interface MeInformation {
    Email?: string;

    Id?: string;

    Locale?: string;

    Name?: string;

    SysAdmin?: boolean;
  }
}

export interface Number3RetrieveVacationDebtBasisResponse {
  VacationDebtBasis?: Number3RetrieveVacationDebtBasisResponse.VacationDebtBasis;
}

export namespace Number3RetrieveVacationDebtBasisResponse {
  export interface VacationDebtBasis {
    Month: number;

    Year: number;

    Employees?: Array<VacationDebtBasis.Employee>;

    LastDay?: string;

    VoucherNumber?: number;

    VoucherSeries?: string;

    VoucherYear?: number;
  }

  export namespace VacationDebtBasis {
    export interface Employee {
      EmployeeId: string;

      DaysEarned?: number;

      DaysSaved?: number;

      DaysUnused?: number;

      DebtAdvance?: number;

      DebtEarned?: number;

      DebtSaved?: number;

      DebtUnused?: number;

      EmployeeName?: string;

      TotalDebtEmployee?: number;

      TotalDebtEmployerContribution?: number;

      VariableEarned?: number;

      VariableUnused?: number;

      WageEarned?: number;

      WageSaved?: number;

      WageUnused?: number;
    }
  }
}

export interface Number3RetrieveEuVatLimitRegulationParams {
  /**
   * eu vat limit regulation for year, if not provided than this will be set to
   * current year
   */
  year?: number;
}

export interface Number3RetrieveSieFileParams {
  /**
   * financialYear
   */
  financialYear?: number;
}

export interface Number3RetrieveVacationDebtBasisParams {
  Year: number;
}

Number3.Absencetransactions = Absencetransactions;
Number3.Accounts = Accounts;
Number3.Archive = Archive;
Number3.Articlefileconnections = Articlefileconnections;
Number3.Articles = Articles;
Number3.Articleurlconnections = Articleurlconnections;
Number3.Assetfileconnections = Assetfileconnections;
Number3.Assets = Assets;
Number3.Attendancetransactions = Attendancetransactions;
Number3.Contractaccruals = Contractaccruals;
Number3.Contracts = Contracts;
Number3.Contracttemplates = Contracttemplates;
Number3.Costcenters = Costcenters;
Number3.Currencies = Currencies;
Number3.Customerreferences = Customerreferences;
Number3.Customers = Customers;
Number3.Emailsenders = Emailsenders;
Number3.Employees = Employees;
Number3.Expenses = Expenses;
Number3.Financialyears = Financialyears;
Number3.Inbox = Inbox;
Number3.Invoiceaccruals = Invoiceaccruals;
Number3.Invoicepayments = Invoicepayments;
Number3.Invoices = Invoices;
Number3.Labels = Labels;
Number3.Modesofpayments = Modesofpayments;
Number3.Noxfinansinvoices = Noxfinansinvoices;
Number3.Offers = Offers;
Number3.Orders = Orders;
Number3.Predefinedaccounts = Predefinedaccounts;
Number3.Predefinedvoucherseries = Predefinedvoucherseries;
Number3.Pricelists = Pricelists;
Number3.Prices = Prices;
Number3.Projects = Projects;
Number3.Salarytransactions = Salarytransactions;
Number3.Scheduletimes = Scheduletimes;
Number3.Settings = Settings;
Number3.Supplierinvoiceaccruals = Supplierinvoiceaccruals;
Number3.Supplierinvoiceexternalurlconnections = Supplierinvoiceexternalurlconnections;
Number3.Supplierinvoicefileconnections = Supplierinvoicefileconnections;
Number3.Supplierinvoicepayments = Supplierinvoicepayments;
Number3.Supplierinvoices = Supplierinvoices;
Number3.Suppliers = Suppliers;
Number3.Taxreductions = Taxreductions;
Number3.Termsofdeliveries = Termsofdeliveries;
Number3.Termsofpayments = Termsofpayments;
Number3.Units = Units;
Number3.Voucherfileconnections = Voucherfileconnections;
Number3.Vouchers = Vouchers;
Number3.Voucherseries = Voucherseries;
Number3.Wayofdeliveries = Wayofdeliveries;

export declare namespace Number3 {
  export {
    type FortnoxCustomer as FortnoxCustomer,
    type FortnoxCustomerDefaultDeliveryTypes as FortnoxCustomerDefaultDeliveryTypes,
    type FortnoxCustomerDefaultTemplates as FortnoxCustomerDefaultTemplates,
    type FortnoxOrder as FortnoxOrder,
    type FortnoxOrderEmailInformation as FortnoxOrderEmailInformation,
    type FortnoxOrderLabel as FortnoxOrderLabel,
    type FortnoxOrderOrderRow as FortnoxOrderOrderRow,
    type Number3ListAccountChartsResponse as Number3ListAccountChartsResponse,
    type Number3ListPrintTemplatesResponse as Number3ListPrintTemplatesResponse,
    type Number3RetrieveCompanyInformationResponse as Number3RetrieveCompanyInformationResponse,
    type Number3RetrieveEuVatLimitRegulationResponse as Number3RetrieveEuVatLimitRegulationResponse,
    type Number3RetrieveUserInformationResponse as Number3RetrieveUserInformationResponse,
    type Number3RetrieveVacationDebtBasisResponse as Number3RetrieveVacationDebtBasisResponse,
    type Number3RetrieveEuVatLimitRegulationParams as Number3RetrieveEuVatLimitRegulationParams,
    type Number3RetrieveSieFileParams as Number3RetrieveSieFileParams,
    type Number3RetrieveVacationDebtBasisParams as Number3RetrieveVacationDebtBasisParams,
  };

  export {
    Absencetransactions as Absencetransactions,
    type FortnoxAbsenceTransactionListItemWrap as FortnoxAbsenceTransactionListItemWrap,
    type FortnoxAbsenceTransactionPayload as FortnoxAbsenceTransactionPayload,
    type FortnoxAbsenceTransactionPayloadWrap as FortnoxAbsenceTransactionPayloadWrap,
    type FortnoxAbsenceTransactionSingleItemWrap as FortnoxAbsenceTransactionSingleItemWrap,
    type AbsencetransactionCreateParams as AbsencetransactionCreateParams,
    type AbsencetransactionUpdateParams as AbsencetransactionUpdateParams,
    type AbsencetransactionListParams as AbsencetransactionListParams,
    type AbsencetransactionRetrieveByDateAndCodeParams as AbsencetransactionRetrieveByDateAndCodeParams,
  };

  export {
    Accounts as Accounts,
    type FortnoxAccountPayload as FortnoxAccountPayload,
    type FortnoxAccountPayloadOpeningQuantities as FortnoxAccountPayloadOpeningQuantities,
    type FortnoxAccountPayloadWrap as FortnoxAccountPayloadWrap,
    type FortnoxAccountSingleItemWrap as FortnoxAccountSingleItemWrap,
    type AccountListResponse as AccountListResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
  };

  export {
    Archive as Archive,
    type FileRow as FileRow,
    type FileRowWrap as FileRowWrap,
    type FolderWrap as FolderWrap,
    type ArchiveRetrieveParams as ArchiveRetrieveParams,
    type ArchiveRemoveFilesParams as ArchiveRemoveFilesParams,
    type ArchiveRetrieveFileParams as ArchiveRetrieveFileParams,
    type ArchiveUploadFileParams as ArchiveUploadFileParams,
  };

  export {
    Articlefileconnections as Articlefileconnections,
    type FortnoxArticleFileConnectionWrap as FortnoxArticleFileConnectionWrap,
    type ArticlefileconnectionListResponse as ArticlefileconnectionListResponse,
    type ArticlefileconnectionCreateParams as ArticlefileconnectionCreateParams,
  };

  export {
    Articles as Articles,
    type FortnoxArticle as FortnoxArticle,
    type FortnoxArticleWrap as FortnoxArticleWrap,
    type ArticleListResponse as ArticleListResponse,
    type ArticleCreateParams as ArticleCreateParams,
    type ArticleUpdateParams as ArticleUpdateParams,
    type ArticleListParams as ArticleListParams,
  };

  export {
    Articleurlconnections as Articleurlconnections,
    type FortnoxArticleURLConnection as FortnoxArticleURLConnection,
    type FortnoxArticleURLConnectionWrap as FortnoxArticleURLConnectionWrap,
    type ArticleurlconnectionListResponse as ArticleurlconnectionListResponse,
    type ArticleurlconnectionCreateParams as ArticleurlconnectionCreateParams,
    type ArticleurlconnectionUpdateParams as ArticleurlconnectionUpdateParams,
  };

  export {
    Assetfileconnections as Assetfileconnections,
    type FortnoxAssetFileConnection as FortnoxAssetFileConnection,
    type FortnoxMetaInformation as FortnoxMetaInformation,
    type AssetfileconnectionListResponse as AssetfileconnectionListResponse,
    type AssetfileconnectionCreateParams as AssetfileconnectionCreateParams,
  };

  export {
    Assets as Assets,
    type FortnoxAssetSingle as FortnoxAssetSingle,
    type FortnoxCreateAsset as FortnoxCreateAsset,
    type FortnoxCreateAssetWrap as FortnoxCreateAssetWrap,
    type FortnoxListAssetWrap as FortnoxListAssetWrap,
    type AssetDepreciateResponse as AssetDepreciateResponse,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetDeleteParams as AssetDeleteParams,
    type AssetChangeObParams as AssetChangeObParams,
    type AssetDepreciateParams as AssetDepreciateParams,
    type AssetScrapParams as AssetScrapParams,
    type AssetSellParams as AssetSellParams,
    type AssetWriteDownParams as AssetWriteDownParams,
    type AssetWriteUpParams as AssetWriteUpParams,
  };

  export {
    Attendancetransactions as Attendancetransactions,
    type FortnoxAttendanceTransaction as FortnoxAttendanceTransaction,
    type FortnoxAttendanceTransactionListItemList as FortnoxAttendanceTransactionListItemList,
    type FortnoxAttendanceTransactionWrap as FortnoxAttendanceTransactionWrap,
    type AttendancetransactionCreateParams as AttendancetransactionCreateParams,
    type AttendancetransactionUpdateParams as AttendancetransactionUpdateParams,
    type AttendancetransactionListParams as AttendancetransactionListParams,
    type AttendancetransactionRetrieveByDateAndCodeParams as AttendancetransactionRetrieveByDateAndCodeParams,
  };

  export {
    Contractaccruals as Contractaccruals,
    type FortnoxContractAccrual as FortnoxContractAccrual,
    type FortnoxContractAccrualAccrualRow as FortnoxContractAccrualAccrualRow,
    type FortnoxContractAccrualWrap as FortnoxContractAccrualWrap,
    type ContractaccrualListResponse as ContractaccrualListResponse,
    type ContractaccrualCreateParams as ContractaccrualCreateParams,
    type ContractaccrualUpdateParams as ContractaccrualUpdateParams,
  };

  export {
    Contracts as Contracts,
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

  export {
    Contracttemplates as Contracttemplates,
    type FortnoxContractTemplate as FortnoxContractTemplate,
    type FortnoxContractTemplateInvoiceRow as FortnoxContractTemplateInvoiceRow,
    type FortnoxContractTemplateWrap as FortnoxContractTemplateWrap,
    type ContracttemplateListResponse as ContracttemplateListResponse,
    type ContracttemplateCreateParams as ContracttemplateCreateParams,
    type ContracttemplateUpdateParams as ContracttemplateUpdateParams,
  };

  export {
    Costcenters as Costcenters,
    type CostCenter as CostCenter,
    type CostCenterWrap as CostCenterWrap,
    type CostcenterListResponse as CostcenterListResponse,
    type CostcenterCreateParams as CostcenterCreateParams,
    type CostcenterUpdateParams as CostcenterUpdateParams,
  };

  export {
    Currencies as Currencies,
    type Currency as Currency,
    type CurrencyWrap as CurrencyWrap,
    type CurrencyListResponse as CurrencyListResponse,
    type CurrencyCreateParams as CurrencyCreateParams,
    type CurrencyUpdateParams as CurrencyUpdateParams,
  };

  export {
    Customerreferences as Customerreferences,
    type CustomerReferenceRow as CustomerReferenceRow,
    type CustomerReferenceRowWrap as CustomerReferenceRowWrap,
    type CustomerReferenceWrap as CustomerReferenceWrap,
    type CustomerWrap as CustomerWrap,
    type CustomerreferenceCreateParams as CustomerreferenceCreateParams,
    type CustomerreferenceUpdateParams as CustomerreferenceUpdateParams,
    type CustomerreferenceListParams as CustomerreferenceListParams,
  };

  export {
    Customers as Customers,
    type CustomerListResponse as CustomerListResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerListParams as CustomerListParams,
  };

  export { Emailsenders as Emailsenders, type EmailsenderListResponse as EmailsenderListResponse };

  export {
    Employees as Employees,
    type DatedSchedule as DatedSchedule,
    type DatedWage as DatedWage,
    type EmployeeCategory as EmployeeCategory,
    type EmployeeChild as EmployeeChild,
    type EmployeeWrap as EmployeeWrap,
    type FortnoxEmployee as FortnoxEmployee,
    type OpeningSalary as OpeningSalary,
    type EmployeeListResponse as EmployeeListResponse,
    type EmployeeCreateParams as EmployeeCreateParams,
    type EmployeeUpdateParams as EmployeeUpdateParams,
  };

  export {
    Expenses as Expenses,
    type ExpenseWrap as ExpenseWrap,
    type ExpenseListResponse as ExpenseListResponse,
    type ExpenseCreateParams as ExpenseCreateParams,
  };

  export {
    Financialyears as Financialyears,
    type FinancialYear as FinancialYear,
    type FinancialYearWrap as FinancialYearWrap,
    type FinancialyearListResponse as FinancialyearListResponse,
    type FinancialyearCreateParams as FinancialyearCreateParams,
    type FinancialyearListParams as FinancialyearListParams,
  };

  export { Inbox as Inbox, type InboxUploadParams as InboxUploadParams };

  export {
    Invoiceaccruals as Invoiceaccruals,
    type FortnoxInvoiceAccrual as FortnoxInvoiceAccrual,
    type FortnoxInvoiceAccrualInvoiceAccrualRow as FortnoxInvoiceAccrualInvoiceAccrualRow,
    type InvoiceAccrualWrap as InvoiceAccrualWrap,
    type InvoiceaccrualListResponse as InvoiceaccrualListResponse,
    type InvoiceaccrualCreateParams as InvoiceaccrualCreateParams,
    type InvoiceaccrualUpdateParams as InvoiceaccrualUpdateParams,
  };

  export {
    Invoicepayments as Invoicepayments,
    type FortnoxInvoicePayment as FortnoxInvoicePayment,
    type FortnoxInvoicePaymentWriteOff as FortnoxInvoicePaymentWriteOff,
    type InvoicePaymentWrap as InvoicePaymentWrap,
    type InvoicepaymentListResponse as InvoicepaymentListResponse,
    type InvoicepaymentCreateParams as InvoicepaymentCreateParams,
    type InvoicepaymentUpdateParams as InvoicepaymentUpdateParams,
    type InvoicepaymentListParams as InvoicepaymentListParams,
    type InvoicepaymentBookkeepParams as InvoicepaymentBookkeepParams,
  };

  export {
    Invoices as Invoices,
    type FortnoxInvoicePayload as FortnoxInvoicePayload,
    type FortnoxInvoicePayloadEdiInformation as FortnoxInvoicePayloadEdiInformation,
    type FortnoxInvoicePayloadEmailInformation as FortnoxInvoicePayloadEmailInformation,
    type FortnoxInvoicePayloadInvoiceRow as FortnoxInvoicePayloadInvoiceRow,
    type FortnoxInvoicePayloadLabel as FortnoxInvoicePayloadLabel,
    type InvoicePayloadWrap as InvoicePayloadWrap,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
  };

  export {
    Labels as Labels,
    type Label as Label,
    type LabelWrap as LabelWrap,
    type LabelListResponse as LabelListResponse,
    type LabelCreateParams as LabelCreateParams,
    type LabelUpdateParams as LabelUpdateParams,
  };

  export {
    Modesofpayments as Modesofpayments,
    type ModeOfPayment as ModeOfPayment,
    type ModeOfPaymentWrap as ModeOfPaymentWrap,
    type ModesofpaymentListResponse as ModesofpaymentListResponse,
    type ModesofpaymentCreateParams as ModesofpaymentCreateParams,
    type ModesofpaymentUpdateParams as ModesofpaymentUpdateParams,
  };

  export {
    Noxfinansinvoices as Noxfinansinvoices,
    type InvoiceResponseWrap as InvoiceResponseWrap,
    type NoxfinansinvoicePauseParams as NoxfinansinvoicePauseParams,
    type NoxfinansinvoiceReportPaymentParams as NoxfinansinvoiceReportPaymentParams,
    type NoxfinansinvoiceSendParams as NoxfinansinvoiceSendParams,
  };

  export {
    Offers as Offers,
    type FortnoxOffer as FortnoxOffer,
    type FortnoxOfferEmailInformation as FortnoxOfferEmailInformation,
    type FortnoxOfferLabel as FortnoxOfferLabel,
    type FortnoxOfferOfferRow as FortnoxOfferOfferRow,
    type OfferWrap as OfferWrap,
    type OrderWrap as OrderWrap,
    type OfferListResponse as OfferListResponse,
    type OfferCreateParams as OfferCreateParams,
    type OfferUpdateParams as OfferUpdateParams,
    type OfferListParams as OfferListParams,
  };

  export {
    Orders as Orders,
    type OrderListResponse as OrderListResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderUpdateParams as OrderUpdateParams,
    type OrderListParams as OrderListParams,
  };

  export {
    Predefinedaccounts as Predefinedaccounts,
    type PredefinedAccount as PredefinedAccount,
    type PredefinedAccountWrap as PredefinedAccountWrap,
    type PredefinedaccountListResponse as PredefinedaccountListResponse,
    type PredefinedaccountUpdateParams as PredefinedaccountUpdateParams,
  };

  export {
    Predefinedvoucherseries as Predefinedvoucherseries,
    type PredefinedVoucherSeries as PredefinedVoucherSeries,
    type PredefinedVoucherSeriesWrap as PredefinedVoucherSeriesWrap,
    type PredefinedvoucherseryListResponse as PredefinedvoucherseryListResponse,
    type PredefinedvoucherseryUpdateParams as PredefinedvoucherseryUpdateParams,
  };

  export {
    Pricelists as Pricelists,
    type PriceList as PriceList,
    type PriceListWrap as PriceListWrap,
    type PricelistListResponse as PricelistListResponse,
    type PricelistCreateParams as PricelistCreateParams,
    type PricelistUpdateParams as PricelistUpdateParams,
  };

  export {
    Prices as Prices,
    type FortnoxPrice as FortnoxPrice,
    type PriceWrap as PriceWrap,
    type PriceRetrieveSublistResponse as PriceRetrieveSublistResponse,
    type PriceCreateParams as PriceCreateParams,
    type PriceRetrieveParams as PriceRetrieveParams,
    type PriceUpdateParams as PriceUpdateParams,
    type PriceDeleteParams as PriceDeleteParams,
    type PriceRetrieveFirstParams as PriceRetrieveFirstParams,
    type PriceRetrieveSublistParams as PriceRetrieveSublistParams,
    type PriceUpdateFirstParams as PriceUpdateFirstParams,
  };

  export {
    Projects as Projects,
    type FortnoxProject as FortnoxProject,
    type ProjectWrap as ProjectWrap,
    type ProjectListResponse as ProjectListResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectUpdateParams as ProjectUpdateParams,
  };

  export {
    Salarytransactions as Salarytransactions,
    type FortnoxSalaryTransaction as FortnoxSalaryTransaction,
    type SalaryTransactionWrap as SalaryTransactionWrap,
    type SalarytransactionListResponse as SalarytransactionListResponse,
    type SalarytransactionCreateParams as SalarytransactionCreateParams,
    type SalarytransactionUpdateParams as SalarytransactionUpdateParams,
    type SalarytransactionListParams as SalarytransactionListParams,
  };

  export {
    Scheduletimes as Scheduletimes,
    type ScheduleTimeWrap as ScheduleTimeWrap,
    type ScheduletimeRetrieveParams as ScheduletimeRetrieveParams,
    type ScheduletimeUpdateParams as ScheduletimeUpdateParams,
    type ScheduletimeResetDayParams as ScheduletimeResetDayParams,
  };

  export {
    Settings as Settings,
    type SettingRetrieveCompanyResponse as SettingRetrieveCompanyResponse,
    type SettingRetrieveLockedPeriodResponse as SettingRetrieveLockedPeriodResponse,
  };

  export {
    Supplierinvoiceaccruals as Supplierinvoiceaccruals,
    type FortnoxSupplierInvoiceAccrual as FortnoxSupplierInvoiceAccrual,
    type FortnoxSupplierInvoiceAccrualSupplierInvoiceAccrualRows as FortnoxSupplierInvoiceAccrualSupplierInvoiceAccrualRows,
    type SupplierInvoiceAccrualWrap as SupplierInvoiceAccrualWrap,
    type SupplierinvoiceaccrualListResponse as SupplierinvoiceaccrualListResponse,
    type SupplierinvoiceaccrualCreateParams as SupplierinvoiceaccrualCreateParams,
    type SupplierinvoiceaccrualUpdateParams as SupplierinvoiceaccrualUpdateParams,
  };

  export {
    Supplierinvoiceexternalurlconnections as Supplierinvoiceexternalurlconnections,
    type SupplierInvoiceExternalURLConnectionSingle as SupplierInvoiceExternalURLConnectionSingle,
    type SupplierInvoiceExternalURLConnectionUpdate as SupplierInvoiceExternalURLConnectionUpdate,
    type SupplierinvoiceexternalurlconnectionCreateParams as SupplierinvoiceexternalurlconnectionCreateParams,
    type SupplierinvoiceexternalurlconnectionUpdateParams as SupplierinvoiceexternalurlconnectionUpdateParams,
  };

  export {
    Supplierinvoicefileconnections as Supplierinvoicefileconnections,
    type FortnoxSupplierInvoiceFileConnection as FortnoxSupplierInvoiceFileConnection,
    type FortnoxSupplierInvoiceFileConnectionWrap as FortnoxSupplierInvoiceFileConnectionWrap,
    type SupplierinvoicefileconnectionListResponse as SupplierinvoicefileconnectionListResponse,
    type SupplierinvoicefileconnectionCreateParams as SupplierinvoicefileconnectionCreateParams,
  };

  export {
    Supplierinvoicepayments as Supplierinvoicepayments,
    type FortnoxSupplierInvoicePayment as FortnoxSupplierInvoicePayment,
    type FortnoxSupplierInvoicePaymentWrap as FortnoxSupplierInvoicePaymentWrap,
    type FortnoxSupplierInvoicePaymentWriteOff as FortnoxSupplierInvoicePaymentWriteOff,
    type SupplierinvoicepaymentListResponse as SupplierinvoicepaymentListResponse,
    type SupplierinvoicepaymentCreateParams as SupplierinvoicepaymentCreateParams,
    type SupplierinvoicepaymentUpdateParams as SupplierinvoicepaymentUpdateParams,
  };

  export {
    Supplierinvoices as Supplierinvoices,
    type FortnoxSupplierInvoice as FortnoxSupplierInvoice,
    type FortnoxSupplierInvoiceSupplierInvoiceRow as FortnoxSupplierInvoiceSupplierInvoiceRow,
    type FortnoxSupplierInvoiceVoucher as FortnoxSupplierInvoiceVoucher,
    type FortnoxSupplierInvoiceWrap as FortnoxSupplierInvoiceWrap,
    type SupplierinvoiceListResponse as SupplierinvoiceListResponse,
    type SupplierinvoiceCreateParams as SupplierinvoiceCreateParams,
    type SupplierinvoiceUpdateParams as SupplierinvoiceUpdateParams,
    type SupplierinvoiceListParams as SupplierinvoiceListParams,
  };

  export {
    Suppliers as Suppliers,
    type FortnoxSupplier as FortnoxSupplier,
    type FortnoxSupplierWrap as FortnoxSupplierWrap,
    type SupplierListResponse as SupplierListResponse,
    type SupplierCreateParams as SupplierCreateParams,
    type SupplierUpdateParams as SupplierUpdateParams,
  };

  export {
    Taxreductions as Taxreductions,
    type FortnoxTaxReduction as FortnoxTaxReduction,
    type FortnoxTaxReductionTaxReductionAmount as FortnoxTaxReductionTaxReductionAmount,
    type FortnoxTaxReductionWrap as FortnoxTaxReductionWrap,
    type TaxreductionListResponse as TaxreductionListResponse,
    type TaxreductionCreateParams as TaxreductionCreateParams,
    type TaxreductionUpdateParams as TaxreductionUpdateParams,
    type TaxreductionListParams as TaxreductionListParams,
  };

  export {
    Termsofdeliveries as Termsofdeliveries,
    type FortnoxTermsOfDelivery as FortnoxTermsOfDelivery,
    type FortnoxTermsOfDeliveryWrap as FortnoxTermsOfDeliveryWrap,
    type TermsofdeliveryListResponse as TermsofdeliveryListResponse,
    type TermsofdeliveryCreateParams as TermsofdeliveryCreateParams,
    type TermsofdeliveryUpdateParams as TermsofdeliveryUpdateParams,
  };

  export {
    Termsofpayments as Termsofpayments,
    type FortnoxTermsOfPayment as FortnoxTermsOfPayment,
    type FortnoxTermsOfPaymentWrap as FortnoxTermsOfPaymentWrap,
    type TermsofpaymentListResponse as TermsofpaymentListResponse,
    type TermsofpaymentCreateParams as TermsofpaymentCreateParams,
    type TermsofpaymentUpdateParams as TermsofpaymentUpdateParams,
  };

  export {
    Units as Units,
    type FortnoxUnit as FortnoxUnit,
    type FortnoxUnitWrap as FortnoxUnitWrap,
    type UnitListResponse as UnitListResponse,
    type UnitCreateParams as UnitCreateParams,
    type UnitUpdateParams as UnitUpdateParams,
  };

  export {
    Voucherfileconnections as Voucherfileconnections,
    type FortnoxVoucherFileConnection as FortnoxVoucherFileConnection,
    type FortnoxVoucherFileConnectionWrap as FortnoxVoucherFileConnectionWrap,
    type VoucherfileconnectionListResponse as VoucherfileconnectionListResponse,
    type VoucherfileconnectionCreateParams as VoucherfileconnectionCreateParams,
  };

  export {
    Vouchers as Vouchers,
    type FortnoxVoucherListItemList as FortnoxVoucherListItemList,
    type FortnoxVoucherWrap as FortnoxVoucherWrap,
    type VoucherCreateParams as VoucherCreateParams,
    type VoucherRetrieveParams as VoucherRetrieveParams,
    type VoucherListParams as VoucherListParams,
  };

  export {
    Voucherseries as Voucherseries,
    type FortnoxVoucherSeries as FortnoxVoucherSeries,
    type FortnoxVoucherSeriesApprover as FortnoxVoucherSeriesApprover,
    type FortnoxVoucherSeriesWrap as FortnoxVoucherSeriesWrap,
    type VoucherseryListResponse as VoucherseryListResponse,
    type VoucherseryCreateParams as VoucherseryCreateParams,
    type VoucherseryUpdateParams as VoucherseryUpdateParams,
  };

  export {
    Wayofdeliveries as Wayofdeliveries,
    type FortnoxWayOfDelivery as FortnoxWayOfDelivery,
    type FortnoxWayOfDeliveryWrap as FortnoxWayOfDeliveryWrap,
    type WayofdeliveryListResponse as WayofdeliveryListResponse,
    type WayofdeliveryCreateParams as WayofdeliveryCreateParams,
    type WayofdeliveryUpdateParams as WayofdeliveryUpdateParams,
  };
}
