# Number3

Types:

- <code><a href="./src/resources/number-3/number-3.ts">FortnoxCustomer</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">FortnoxCustomerDefaultDeliveryTypes</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">FortnoxCustomerDefaultTemplates</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">FortnoxOrder</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">FortnoxOrderEmailInformation</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">FortnoxOrderLabel</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">FortnoxOrderOrderRow</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">Number3ListAccountChartsResponse</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">Number3ListPrintTemplatesResponse</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">Number3RetrieveCompanyInformationResponse</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">Number3RetrieveEuVatLimitRegulationResponse</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">Number3RetrieveUserInformationResponse</a></code>
- <code><a href="./src/resources/number-3/number-3.ts">Number3RetrieveVacationDebtBasisResponse</a></code>

Methods:

- <code title="get /3/accountcharts">client.number3.<a href="./src/resources/number-3/number-3.ts">listAccountCharts</a>() -> Number3ListAccountChartsResponse</code>
- <code title="get /3/printtemplates">client.number3.<a href="./src/resources/number-3/number-3.ts">listPrintTemplates</a>() -> Number3ListPrintTemplatesResponse</code>
- <code title="get /3/companyinformation">client.number3.<a href="./src/resources/number-3/number-3.ts">retrieveCompanyInformation</a>() -> Number3RetrieveCompanyInformationResponse</code>
- <code title="get /3/euvatlimitregulation">client.number3.<a href="./src/resources/number-3/number-3.ts">retrieveEuVatLimitRegulation</a>({ ...params }) -> Number3RetrieveEuVatLimitRegulationResponse</code>
- <code title="get /3/sie/{Type}">client.number3.<a href="./src/resources/number-3/number-3.ts">retrieveSieFile</a>(type, { ...params }) -> void</code>
- <code title="get /3/me">client.number3.<a href="./src/resources/number-3/number-3.ts">retrieveUserInformation</a>() -> Number3RetrieveUserInformationResponse</code>
- <code title="get /3/vacationdebtbasis/{Year}/{Month}">client.number3.<a href="./src/resources/number-3/number-3.ts">retrieveVacationDebtBasis</a>(month, { ...params }) -> Number3RetrieveVacationDebtBasisResponse</code>

## Absencetransactions

Types:

- <code><a href="./src/resources/number-3/absencetransactions.ts">FortnoxAbsenceTransactionListItemWrap</a></code>
- <code><a href="./src/resources/number-3/absencetransactions.ts">FortnoxAbsenceTransactionPayload</a></code>
- <code><a href="./src/resources/number-3/absencetransactions.ts">FortnoxAbsenceTransactionPayloadWrap</a></code>
- <code><a href="./src/resources/number-3/absencetransactions.ts">FortnoxAbsenceTransactionSingleItemWrap</a></code>

Methods:

- <code title="post /3/absencetransactions">client.number3.absencetransactions.<a href="./src/resources/number-3/absencetransactions.ts">create</a>({ ...params }) -> FortnoxAbsenceTransactionSingleItemWrap</code>
- <code title="get /3/absencetransactions/{id}">client.number3.absencetransactions.<a href="./src/resources/number-3/absencetransactions.ts">retrieve</a>(id) -> FortnoxAbsenceTransactionSingleItemWrap</code>
- <code title="put /3/absencetransactions/{id}">client.number3.absencetransactions.<a href="./src/resources/number-3/absencetransactions.ts">update</a>(id, { ...params }) -> FortnoxAbsenceTransactionSingleItemWrap</code>
- <code title="get /3/absencetransactions">client.number3.absencetransactions.<a href="./src/resources/number-3/absencetransactions.ts">list</a>({ ...params }) -> FortnoxAbsenceTransactionListItemWrap</code>
- <code title="delete /3/absencetransactions/{id}">client.number3.absencetransactions.<a href="./src/resources/number-3/absencetransactions.ts">delete</a>(id) -> FortnoxAbsenceTransactionSingleItemWrap</code>
- <code title="get /3/absencetransactions/{id}/{Date}/{Code}">client.number3.absencetransactions.<a href="./src/resources/number-3/absencetransactions.ts">retrieveByDateAndCode</a>(code, { ...params }) -> FortnoxAbsenceTransactionListItemWrap</code>

## Accounts

Types:

- <code><a href="./src/resources/number-3/accounts.ts">FortnoxAccountPayload</a></code>
- <code><a href="./src/resources/number-3/accounts.ts">FortnoxAccountPayloadOpeningQuantities</a></code>
- <code><a href="./src/resources/number-3/accounts.ts">FortnoxAccountPayloadWrap</a></code>
- <code><a href="./src/resources/number-3/accounts.ts">FortnoxAccountSingleItemWrap</a></code>
- <code><a href="./src/resources/number-3/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="post /3/accounts">client.number3.accounts.<a href="./src/resources/number-3/accounts.ts">create</a>({ ...params }) -> FortnoxAccountSingleItemWrap</code>
- <code title="get /3/accounts/{Number}">client.number3.accounts.<a href="./src/resources/number-3/accounts.ts">retrieve</a>(number) -> FortnoxAccountSingleItemWrap</code>
- <code title="put /3/accounts/{Number}">client.number3.accounts.<a href="./src/resources/number-3/accounts.ts">update</a>(number, { ...params }) -> FortnoxAccountSingleItemWrap</code>
- <code title="get /3/accounts">client.number3.accounts.<a href="./src/resources/number-3/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="delete /3/accounts/{Number}">client.number3.accounts.<a href="./src/resources/number-3/accounts.ts">delete</a>(number) -> void</code>

## Archive

Types:

- <code><a href="./src/resources/number-3/archive.ts">FileRow</a></code>
- <code><a href="./src/resources/number-3/archive.ts">FileRowWrap</a></code>
- <code><a href="./src/resources/number-3/archive.ts">FolderWrap</a></code>

Methods:

- <code title="get /3/archive">client.number3.archive.<a href="./src/resources/number-3/archive.ts">retrieve</a>({ ...params }) -> FolderWrap</code>
- <code title="delete /3/archive/{id}">client.number3.archive.<a href="./src/resources/number-3/archive.ts">deleteFile</a>(id) -> void</code>
- <code title="delete /3/archive">client.number3.archive.<a href="./src/resources/number-3/archive.ts">removeFiles</a>({ ...params }) -> void</code>
- <code title="get /3/archive/{id}">client.number3.archive.<a href="./src/resources/number-3/archive.ts">retrieveFile</a>(id, { ...params }) -> Response</code>
- <code title="post /3/archive">client.number3.archive.<a href="./src/resources/number-3/archive.ts">uploadFile</a>({ ...params }) -> FileRowWrap</code>

## Articlefileconnections

Types:

- <code><a href="./src/resources/number-3/articlefileconnections.ts">FortnoxArticleFileConnectionWrap</a></code>
- <code><a href="./src/resources/number-3/articlefileconnections.ts">ArticlefileconnectionListResponse</a></code>

Methods:

- <code title="post /3/articlefileconnections">client.number3.articlefileconnections.<a href="./src/resources/number-3/articlefileconnections.ts">create</a>({ ...params }) -> FortnoxArticleFileConnectionWrap</code>
- <code title="get /3/articlefileconnections/{FileId}">client.number3.articlefileconnections.<a href="./src/resources/number-3/articlefileconnections.ts">retrieve</a>(fileID) -> FortnoxArticleFileConnectionWrap</code>
- <code title="get /3/articlefileconnections">client.number3.articlefileconnections.<a href="./src/resources/number-3/articlefileconnections.ts">list</a>() -> ArticlefileconnectionListResponse</code>
- <code title="delete /3/articlefileconnections/{FileId}">client.number3.articlefileconnections.<a href="./src/resources/number-3/articlefileconnections.ts">remove</a>(fileID) -> void</code>

## Articles

Types:

- <code><a href="./src/resources/number-3/articles.ts">FortnoxArticle</a></code>
- <code><a href="./src/resources/number-3/articles.ts">FortnoxArticleWrap</a></code>
- <code><a href="./src/resources/number-3/articles.ts">ArticleListResponse</a></code>

Methods:

- <code title="post /3/articles">client.number3.articles.<a href="./src/resources/number-3/articles.ts">create</a>({ ...params }) -> FortnoxArticleWrap</code>
- <code title="get /3/articles/{ArticleNumber}">client.number3.articles.<a href="./src/resources/number-3/articles.ts">retrieve</a>(articleNumber) -> FortnoxArticleWrap</code>
- <code title="put /3/articles/{ArticleNumber}">client.number3.articles.<a href="./src/resources/number-3/articles.ts">update</a>(articleNumber, { ...params }) -> FortnoxArticleWrap</code>
- <code title="get /3/articles">client.number3.articles.<a href="./src/resources/number-3/articles.ts">list</a>({ ...params }) -> ArticleListResponse</code>
- <code title="delete /3/articles/{ArticleNumber}">client.number3.articles.<a href="./src/resources/number-3/articles.ts">delete</a>(articleNumber) -> void</code>

## Articleurlconnections

Types:

- <code><a href="./src/resources/number-3/articleurlconnections.ts">FortnoxArticleURLConnection</a></code>
- <code><a href="./src/resources/number-3/articleurlconnections.ts">FortnoxArticleURLConnectionWrap</a></code>
- <code><a href="./src/resources/number-3/articleurlconnections.ts">ArticleurlconnectionListResponse</a></code>

Methods:

- <code title="post /3/articleurlconnections">client.number3.articleurlconnections.<a href="./src/resources/number-3/articleurlconnections.ts">create</a>({ ...params }) -> FortnoxArticleURLConnectionWrap</code>
- <code title="get /3/articleurlconnections/{id}">client.number3.articleurlconnections.<a href="./src/resources/number-3/articleurlconnections.ts">retrieve</a>(id) -> FortnoxArticleURLConnectionWrap</code>
- <code title="put /3/articleurlconnections/{id}">client.number3.articleurlconnections.<a href="./src/resources/number-3/articleurlconnections.ts">update</a>(id, { ...params }) -> FortnoxArticleURLConnectionWrap</code>
- <code title="get /3/articleurlconnections">client.number3.articleurlconnections.<a href="./src/resources/number-3/articleurlconnections.ts">list</a>() -> ArticleurlconnectionListResponse</code>
- <code title="delete /3/articleurlconnections/{id}">client.number3.articleurlconnections.<a href="./src/resources/number-3/articleurlconnections.ts">remove</a>(id) -> void</code>

## Assetfileconnections

Types:

- <code><a href="./src/resources/number-3/assetfileconnections.ts">FortnoxAssetFileConnection</a></code>
- <code><a href="./src/resources/number-3/assetfileconnections.ts">FortnoxMetaInformation</a></code>
- <code><a href="./src/resources/number-3/assetfileconnections.ts">AssetfileconnectionListResponse</a></code>

Methods:

- <code title="post /3/assetfileconnections">client.number3.assetfileconnections.<a href="./src/resources/number-3/assetfileconnections.ts">create</a>({ ...params }) -> FortnoxAssetFileConnection</code>
- <code title="get /3/assetfileconnections">client.number3.assetfileconnections.<a href="./src/resources/number-3/assetfileconnections.ts">list</a>() -> AssetfileconnectionListResponse</code>
- <code title="delete /3/assetfileconnections/{fileId}">client.number3.assetfileconnections.<a href="./src/resources/number-3/assetfileconnections.ts">delete</a>(fileID) -> void</code>

## Assets

Types:

- <code><a href="./src/resources/number-3/assets/assets.ts">FortnoxAssetSingle</a></code>
- <code><a href="./src/resources/number-3/assets/assets.ts">FortnoxCreateAsset</a></code>
- <code><a href="./src/resources/number-3/assets/assets.ts">FortnoxCreateAssetWrap</a></code>
- <code><a href="./src/resources/number-3/assets/assets.ts">FortnoxListAssetWrap</a></code>
- <code><a href="./src/resources/number-3/assets/assets.ts">AssetDepreciateResponse</a></code>

Methods:

- <code title="post /3/assets">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">create</a>({ ...params }) -> FortnoxAssetSingle</code>
- <code title="get /3/assets/{GivenNumber}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">retrieve</a>(givenNumber) -> FortnoxAssetSingle</code>
- <code title="put /3/assets/{GivenNumber}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">update</a>(givenNumber, { ...params }) -> FortnoxAssetSingle</code>
- <code title="get /3/assets">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">list</a>() -> FortnoxListAssetWrap</code>
- <code title="delete /3/assets/{GivenNumber}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">delete</a>(givenNumber, { ...params }) -> void</code>
- <code title="put /3/assets/changeob/{GivenNumber}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">changeOb</a>(givenNumber, { ...params }) -> FortnoxAssetSingle</code>
- <code title="post /3/assets/depreciate">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">depreciate</a>({ ...params }) -> AssetDepreciateResponse</code>
- <code title="get /3/assets/depreciations/{ToDate}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">listDepreciations</a>(toDate) -> FortnoxListAssetWrap</code>
- <code title="put /3/assets/scrap/{GivenNumber}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">scrap</a>(givenNumber, { ...params }) -> FortnoxAssetSingle</code>
- <code title="put /3/assets/sell/{GivenNumber}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">sell</a>(givenNumber, { ...params }) -> FortnoxAssetSingle</code>
- <code title="put /3/assets/writedown/{GivenNumber}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">writeDown</a>(givenNumber, { ...params }) -> FortnoxAssetSingle</code>
- <code title="put /3/assets/writeup/{GivenNumber}">client.number3.assets.<a href="./src/resources/number-3/assets/assets.ts">writeUp</a>(givenNumber, { ...params }) -> FortnoxAssetSingle</code>

### Types

Types:

- <code><a href="./src/resources/number-3/assets/types.ts">FortnoxAssetType</a></code>
- <code><a href="./src/resources/number-3/assets/types.ts">FortnoxAssetTypeWrapSingle</a></code>
- <code><a href="./src/resources/number-3/assets/types.ts">FortnoxUpdateAsset</a></code>
- <code><a href="./src/resources/number-3/assets/types.ts">TypeListResponse</a></code>

Methods:

- <code title="post /3/assets/types/{id}">client.number3.assets.types.<a href="./src/resources/number-3/assets/types.ts">create</a>(id, { ...params }) -> FortnoxAssetTypeWrapSingle</code>
- <code title="get /3/assets/types/{id}">client.number3.assets.types.<a href="./src/resources/number-3/assets/types.ts">retrieve</a>(id) -> FortnoxAssetTypeWrapSingle</code>
- <code title="put /3/assets/types/{id}">client.number3.assets.types.<a href="./src/resources/number-3/assets/types.ts">update</a>(id, { ...params }) -> FortnoxAssetTypeWrapSingle</code>
- <code title="get /3/assets/types">client.number3.assets.types.<a href="./src/resources/number-3/assets/types.ts">list</a>() -> TypeListResponse</code>
- <code title="delete /3/assets/types/{id}">client.number3.assets.types.<a href="./src/resources/number-3/assets/types.ts">delete</a>(id) -> void</code>

## Attendancetransactions

Types:

- <code><a href="./src/resources/number-3/attendancetransactions.ts">FortnoxAttendanceTransaction</a></code>
- <code><a href="./src/resources/number-3/attendancetransactions.ts">FortnoxAttendanceTransactionListItemList</a></code>
- <code><a href="./src/resources/number-3/attendancetransactions.ts">FortnoxAttendanceTransactionWrap</a></code>

Methods:

- <code title="post /3/attendancetransactions">client.number3.attendancetransactions.<a href="./src/resources/number-3/attendancetransactions.ts">create</a>({ ...params }) -> FortnoxAttendanceTransactionWrap</code>
- <code title="get /3/attendancetransactions/{id}">client.number3.attendancetransactions.<a href="./src/resources/number-3/attendancetransactions.ts">retrieve</a>(id) -> FortnoxAttendanceTransactionWrap</code>
- <code title="put /3/attendancetransactions/{id}">client.number3.attendancetransactions.<a href="./src/resources/number-3/attendancetransactions.ts">update</a>(id, { ...params }) -> FortnoxAttendanceTransactionWrap</code>
- <code title="get /3/attendancetransactions">client.number3.attendancetransactions.<a href="./src/resources/number-3/attendancetransactions.ts">list</a>({ ...params }) -> FortnoxAttendanceTransactionListItemList</code>
- <code title="delete /3/attendancetransactions/{id}">client.number3.attendancetransactions.<a href="./src/resources/number-3/attendancetransactions.ts">delete</a>(id) -> FortnoxAttendanceTransactionWrap</code>
- <code title="get /3/attendancetransactions/{id}/{Date}/{Code}">client.number3.attendancetransactions.<a href="./src/resources/number-3/attendancetransactions.ts">retrieveByDateAndCode</a>(code, { ...params }) -> FortnoxAttendanceTransactionListItemList</code>

## Contractaccruals

Types:

- <code><a href="./src/resources/number-3/contractaccruals.ts">FortnoxContractAccrual</a></code>
- <code><a href="./src/resources/number-3/contractaccruals.ts">FortnoxContractAccrualAccrualRow</a></code>
- <code><a href="./src/resources/number-3/contractaccruals.ts">FortnoxContractAccrualWrap</a></code>
- <code><a href="./src/resources/number-3/contractaccruals.ts">ContractaccrualListResponse</a></code>

Methods:

- <code title="post /3/contractaccruals">client.number3.contractaccruals.<a href="./src/resources/number-3/contractaccruals.ts">create</a>({ ...params }) -> FortnoxContractAccrualWrap</code>
- <code title="get /3/contractaccruals/{DocumentNumber}">client.number3.contractaccruals.<a href="./src/resources/number-3/contractaccruals.ts">retrieve</a>(documentNumber) -> FortnoxContractAccrualWrap</code>
- <code title="put /3/contractaccruals/{DocumentNumber}">client.number3.contractaccruals.<a href="./src/resources/number-3/contractaccruals.ts">update</a>(documentNumber, { ...params }) -> FortnoxContractAccrualWrap</code>
- <code title="get /3/contractaccruals">client.number3.contractaccruals.<a href="./src/resources/number-3/contractaccruals.ts">list</a>() -> ContractaccrualListResponse</code>
- <code title="delete /3/contractaccruals/{DocumentNumber}">client.number3.contractaccruals.<a href="./src/resources/number-3/contractaccruals.ts">delete</a>(documentNumber) -> void</code>

## Contracts

Types:

- <code><a href="./src/resources/number-3/contracts.ts">FortnoxContract</a></code>
- <code><a href="./src/resources/number-3/contracts.ts">FortnoxContractEmailInformation</a></code>
- <code><a href="./src/resources/number-3/contracts.ts">FortnoxContractInvoiceRow</a></code>
- <code><a href="./src/resources/number-3/contracts.ts">FortnoxContractWrap</a></code>
- <code><a href="./src/resources/number-3/contracts.ts">FortnoxInvoiceWrap</a></code>
- <code><a href="./src/resources/number-3/contracts.ts">ContractListResponse</a></code>

Methods:

- <code title="post /3/contracts">client.number3.contracts.<a href="./src/resources/number-3/contracts.ts">create</a>({ ...params }) -> FortnoxContractWrap</code>
- <code title="get /3/contracts/{DocumentNumber}">client.number3.contracts.<a href="./src/resources/number-3/contracts.ts">retrieve</a>(documentNumber) -> FortnoxContractWrap</code>
- <code title="put /3/contracts/{DocumentNumber}">client.number3.contracts.<a href="./src/resources/number-3/contracts.ts">update</a>(documentNumber, { ...params }) -> FortnoxContractWrap</code>
- <code title="get /3/contracts">client.number3.contracts.<a href="./src/resources/number-3/contracts.ts">list</a>({ ...params }) -> ContractListResponse</code>
- <code title="put /3/contracts/{DocumentNumber}/createinvoice">client.number3.contracts.<a href="./src/resources/number-3/contracts.ts">createInvoice</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="put /3/contracts/{DocumentNumber}/finish">client.number3.contracts.<a href="./src/resources/number-3/contracts.ts">finish</a>(documentNumber) -> FortnoxContractWrap</code>
- <code title="put /3/contracts/{DocumentNumber}/increaseinvoicecount">client.number3.contracts.<a href="./src/resources/number-3/contracts.ts">increaseInvoiceCount</a>(documentNumber) -> FortnoxContractWrap</code>

## Contracttemplates

Types:

- <code><a href="./src/resources/number-3/contracttemplates.ts">FortnoxContractTemplate</a></code>
- <code><a href="./src/resources/number-3/contracttemplates.ts">FortnoxContractTemplateInvoiceRow</a></code>
- <code><a href="./src/resources/number-3/contracttemplates.ts">FortnoxContractTemplateWrap</a></code>
- <code><a href="./src/resources/number-3/contracttemplates.ts">ContracttemplateListResponse</a></code>

Methods:

- <code title="post /3/contracttemplates">client.number3.contracttemplates.<a href="./src/resources/number-3/contracttemplates.ts">create</a>({ ...params }) -> FortnoxContractTemplateWrap</code>
- <code title="get /3/contracttemplates/{TemplateNumber}">client.number3.contracttemplates.<a href="./src/resources/number-3/contracttemplates.ts">retrieve</a>(templateNumber) -> FortnoxContractTemplateWrap</code>
- <code title="put /3/contracttemplates/{TemplateNumber}">client.number3.contracttemplates.<a href="./src/resources/number-3/contracttemplates.ts">update</a>(templateNumber, { ...params }) -> FortnoxContractTemplateWrap</code>
- <code title="get /3/contracttemplates">client.number3.contracttemplates.<a href="./src/resources/number-3/contracttemplates.ts">list</a>() -> ContracttemplateListResponse</code>

## Costcenters

Types:

- <code><a href="./src/resources/number-3/costcenters.ts">CostCenter</a></code>
- <code><a href="./src/resources/number-3/costcenters.ts">CostCenterWrap</a></code>
- <code><a href="./src/resources/number-3/costcenters.ts">CostcenterListResponse</a></code>

Methods:

- <code title="post /3/costcenters">client.number3.costcenters.<a href="./src/resources/number-3/costcenters.ts">create</a>({ ...params }) -> CostCenterWrap</code>
- <code title="get /3/costcenters/{Code}">client.number3.costcenters.<a href="./src/resources/number-3/costcenters.ts">retrieve</a>(code) -> CostCenterWrap</code>
- <code title="put /3/costcenters/{Code}">client.number3.costcenters.<a href="./src/resources/number-3/costcenters.ts">update</a>(code, { ...params }) -> CostCenterWrap</code>
- <code title="get /3/costcenters">client.number3.costcenters.<a href="./src/resources/number-3/costcenters.ts">list</a>() -> CostcenterListResponse</code>
- <code title="delete /3/costcenters/{Code}">client.number3.costcenters.<a href="./src/resources/number-3/costcenters.ts">delete</a>(code) -> void</code>

## Currencies

Types:

- <code><a href="./src/resources/number-3/currencies.ts">Currency</a></code>
- <code><a href="./src/resources/number-3/currencies.ts">CurrencyWrap</a></code>
- <code><a href="./src/resources/number-3/currencies.ts">CurrencyListResponse</a></code>

Methods:

- <code title="post /3/currencies">client.number3.currencies.<a href="./src/resources/number-3/currencies.ts">create</a>({ ...params }) -> CurrencyWrap</code>
- <code title="get /3/currencies/{Code}">client.number3.currencies.<a href="./src/resources/number-3/currencies.ts">retrieve</a>(code) -> CurrencyWrap</code>
- <code title="put /3/currencies/{Code}">client.number3.currencies.<a href="./src/resources/number-3/currencies.ts">update</a>(code, { ...params }) -> CurrencyWrap</code>
- <code title="get /3/currencies">client.number3.currencies.<a href="./src/resources/number-3/currencies.ts">list</a>() -> CurrencyListResponse</code>
- <code title="delete /3/currencies/{Code}">client.number3.currencies.<a href="./src/resources/number-3/currencies.ts">delete</a>(code) -> void</code>

## Customerreferences

Types:

- <code><a href="./src/resources/number-3/customerreferences.ts">CustomerReferenceRow</a></code>
- <code><a href="./src/resources/number-3/customerreferences.ts">CustomerReferenceRowWrap</a></code>
- <code><a href="./src/resources/number-3/customerreferences.ts">CustomerReferenceWrap</a></code>
- <code><a href="./src/resources/number-3/customerreferences.ts">CustomerWrap</a></code>

Methods:

- <code title="post /3/customerreferences">client.number3.customerreferences.<a href="./src/resources/number-3/customerreferences.ts">create</a>({ ...params }) -> CustomerReferenceWrap</code>
- <code title="get /3/customerreferences/{CustomerReferenceRowId}">client.number3.customerreferences.<a href="./src/resources/number-3/customerreferences.ts">retrieve</a>(customerReferenceRowID) -> CustomerReferenceWrap</code>
- <code title="put /3/customerreferences/{CustomerReferenceRowId}">client.number3.customerreferences.<a href="./src/resources/number-3/customerreferences.ts">update</a>(customerReferenceRowID, { ...params }) -> CustomerWrap</code>
- <code title="get /3/customerreferences">client.number3.customerreferences.<a href="./src/resources/number-3/customerreferences.ts">list</a>({ ...params }) -> CustomerReferenceWrap</code>
- <code title="delete /3/customerreferences/{CustomerReferenceRowId}">client.number3.customerreferences.<a href="./src/resources/number-3/customerreferences.ts">delete</a>(customerReferenceRowID) -> void</code>

## Customers

Types:

- <code><a href="./src/resources/number-3/customers.ts">CustomerListResponse</a></code>

Methods:

- <code title="post /3/customers">client.number3.customers.<a href="./src/resources/number-3/customers.ts">create</a>({ ...params }) -> CustomerWrap</code>
- <code title="get /3/customers/{CustomerNumber}">client.number3.customers.<a href="./src/resources/number-3/customers.ts">retrieve</a>(customerNumber) -> CustomerWrap</code>
- <code title="put /3/customers/{CustomerNumber}">client.number3.customers.<a href="./src/resources/number-3/customers.ts">update</a>(customerNumber, { ...params }) -> CustomerWrap</code>
- <code title="get /3/customers">client.number3.customers.<a href="./src/resources/number-3/customers.ts">list</a>({ ...params }) -> CustomerListResponse</code>
- <code title="delete /3/customers/{CustomerNumber}">client.number3.customers.<a href="./src/resources/number-3/customers.ts">delete</a>(customerNumber) -> void</code>

## Emailsenders

Types:

- <code><a href="./src/resources/number-3/emailsenders/emailsenders.ts">EmailsenderListResponse</a></code>

Methods:

- <code title="get /3/emailsenders">client.number3.emailsenders.<a href="./src/resources/number-3/emailsenders/emailsenders.ts">list</a>() -> EmailsenderListResponse</code>

### Trusted

Types:

- <code><a href="./src/resources/number-3/emailsenders/trusted.ts">FortnoxTrustedEmailSenderTrustedSender</a></code>
- <code><a href="./src/resources/number-3/emailsenders/trusted.ts">FortnoxTrustedEmailSenderTrustedSenderWrap</a></code>

Methods:

- <code title="delete /3/emailsenders/trusted/{Id}">client.number3.emailsenders.trusted.<a href="./src/resources/number-3/emailsenders/trusted.ts">delete</a>(id) -> void</code>
- <code title="post /3/emailsenders/trusted">client.number3.emailsenders.trusted.<a href="./src/resources/number-3/emailsenders/trusted.ts">add</a>({ ...params }) -> FortnoxTrustedEmailSenderTrustedSenderWrap</code>

## Employees

Types:

- <code><a href="./src/resources/number-3/employees.ts">DatedSchedule</a></code>
- <code><a href="./src/resources/number-3/employees.ts">DatedWage</a></code>
- <code><a href="./src/resources/number-3/employees.ts">EmployeeCategory</a></code>
- <code><a href="./src/resources/number-3/employees.ts">EmployeeChild</a></code>
- <code><a href="./src/resources/number-3/employees.ts">EmployeeWrap</a></code>
- <code><a href="./src/resources/number-3/employees.ts">FortnoxEmployee</a></code>
- <code><a href="./src/resources/number-3/employees.ts">OpeningSalary</a></code>
- <code><a href="./src/resources/number-3/employees.ts">EmployeeListResponse</a></code>

Methods:

- <code title="post /3/employees">client.number3.employees.<a href="./src/resources/number-3/employees.ts">create</a>({ ...params }) -> EmployeeWrap</code>
- <code title="get /3/employees/{EmployeeId}">client.number3.employees.<a href="./src/resources/number-3/employees.ts">retrieve</a>(employeeID) -> EmployeeWrap</code>
- <code title="put /3/employees/{EmployeeId}">client.number3.employees.<a href="./src/resources/number-3/employees.ts">update</a>(employeeID, { ...params }) -> EmployeeWrap</code>
- <code title="get /3/employees">client.number3.employees.<a href="./src/resources/number-3/employees.ts">list</a>() -> EmployeeListResponse</code>

## Expenses

Types:

- <code><a href="./src/resources/number-3/expenses.ts">ExpenseWrap</a></code>
- <code><a href="./src/resources/number-3/expenses.ts">ExpenseListResponse</a></code>

Methods:

- <code title="post /3/expenses">client.number3.expenses.<a href="./src/resources/number-3/expenses.ts">create</a>({ ...params }) -> ExpenseWrap</code>
- <code title="get /3/expenses/{ExpenseCode}">client.number3.expenses.<a href="./src/resources/number-3/expenses.ts">retrieve</a>(expenseCode) -> ExpenseWrap</code>
- <code title="get /3/expenses">client.number3.expenses.<a href="./src/resources/number-3/expenses.ts">list</a>() -> ExpenseListResponse</code>

## Financialyears

Types:

- <code><a href="./src/resources/number-3/financialyears.ts">FinancialYear</a></code>
- <code><a href="./src/resources/number-3/financialyears.ts">FinancialYearWrap</a></code>
- <code><a href="./src/resources/number-3/financialyears.ts">FinancialyearListResponse</a></code>

Methods:

- <code title="post /3/financialyears">client.number3.financialyears.<a href="./src/resources/number-3/financialyears.ts">create</a>({ ...params }) -> FinancialYearWrap</code>
- <code title="get /3/financialyears/{Id}">client.number3.financialyears.<a href="./src/resources/number-3/financialyears.ts">retrieve</a>(id) -> FinancialYearWrap</code>
- <code title="get /3/financialyears">client.number3.financialyears.<a href="./src/resources/number-3/financialyears.ts">list</a>({ ...params }) -> FinancialyearListResponse</code>

## Inbox

Methods:

- <code title="get /3/inbox">client.number3.inbox.<a href="./src/resources/number-3/inbox.ts">retrieve</a>() -> FolderWrap</code>
- <code title="delete /3/inbox/{Id}">client.number3.inbox.<a href="./src/resources/number-3/inbox.ts">remove</a>(id) -> void</code>
- <code title="get /3/inbox/{Id}">client.number3.inbox.<a href="./src/resources/number-3/inbox.ts">retrieveFile</a>(id) -> Response</code>
- <code title="post /3/inbox">client.number3.inbox.<a href="./src/resources/number-3/inbox.ts">upload</a>({ ...params }) -> FileRowWrap</code>

## Invoiceaccruals

Types:

- <code><a href="./src/resources/number-3/invoiceaccruals.ts">FortnoxInvoiceAccrual</a></code>
- <code><a href="./src/resources/number-3/invoiceaccruals.ts">FortnoxInvoiceAccrualInvoiceAccrualRow</a></code>
- <code><a href="./src/resources/number-3/invoiceaccruals.ts">InvoiceAccrualWrap</a></code>
- <code><a href="./src/resources/number-3/invoiceaccruals.ts">InvoiceaccrualListResponse</a></code>

Methods:

- <code title="post /3/invoiceaccruals">client.number3.invoiceaccruals.<a href="./src/resources/number-3/invoiceaccruals.ts">create</a>({ ...params }) -> InvoiceAccrualWrap</code>
- <code title="get /3/invoiceaccruals/{InvoiceNumber}">client.number3.invoiceaccruals.<a href="./src/resources/number-3/invoiceaccruals.ts">retrieve</a>(invoiceNumber) -> InvoiceAccrualWrap</code>
- <code title="put /3/invoiceaccruals/{InvoiceNumber}">client.number3.invoiceaccruals.<a href="./src/resources/number-3/invoiceaccruals.ts">update</a>(invoiceNumber, { ...params }) -> InvoiceAccrualWrap</code>
- <code title="get /3/invoiceaccruals">client.number3.invoiceaccruals.<a href="./src/resources/number-3/invoiceaccruals.ts">list</a>() -> InvoiceaccrualListResponse</code>
- <code title="delete /3/invoiceaccruals/{InvoiceNumber}">client.number3.invoiceaccruals.<a href="./src/resources/number-3/invoiceaccruals.ts">remove</a>(invoiceNumber) -> void</code>

## Invoicepayments

Types:

- <code><a href="./src/resources/number-3/invoicepayments.ts">FortnoxInvoicePayment</a></code>
- <code><a href="./src/resources/number-3/invoicepayments.ts">FortnoxInvoicePaymentWriteOff</a></code>
- <code><a href="./src/resources/number-3/invoicepayments.ts">InvoicePaymentWrap</a></code>
- <code><a href="./src/resources/number-3/invoicepayments.ts">InvoicepaymentListResponse</a></code>

Methods:

- <code title="post /3/invoicepayments">client.number3.invoicepayments.<a href="./src/resources/number-3/invoicepayments.ts">create</a>({ ...params }) -> InvoicePaymentWrap</code>
- <code title="get /3/invoicepayments/{Number}">client.number3.invoicepayments.<a href="./src/resources/number-3/invoicepayments.ts">retrieve</a>(number) -> InvoicePaymentWrap</code>
- <code title="put /3/invoicepayments/{Number}">client.number3.invoicepayments.<a href="./src/resources/number-3/invoicepayments.ts">update</a>(number, { ...params }) -> InvoicePaymentWrap</code>
- <code title="get /3/invoicepayments">client.number3.invoicepayments.<a href="./src/resources/number-3/invoicepayments.ts">list</a>({ ...params }) -> InvoicepaymentListResponse</code>
- <code title="put /3/invoicepayments/{Number}/bookkeep">client.number3.invoicepayments.<a href="./src/resources/number-3/invoicepayments.ts">bookkeep</a>(number, { ...params }) -> InvoicePaymentWrap</code>
- <code title="delete /3/invoicepayments/{Number}">client.number3.invoicepayments.<a href="./src/resources/number-3/invoicepayments.ts">remove</a>(number) -> void</code>

## Invoices

Types:

- <code><a href="./src/resources/number-3/invoices.ts">FortnoxInvoicePayload</a></code>
- <code><a href="./src/resources/number-3/invoices.ts">FortnoxInvoicePayloadEdiInformation</a></code>
- <code><a href="./src/resources/number-3/invoices.ts">FortnoxInvoicePayloadEmailInformation</a></code>
- <code><a href="./src/resources/number-3/invoices.ts">FortnoxInvoicePayloadInvoiceRow</a></code>
- <code><a href="./src/resources/number-3/invoices.ts">FortnoxInvoicePayloadLabel</a></code>
- <code><a href="./src/resources/number-3/invoices.ts">InvoicePayloadWrap</a></code>
- <code><a href="./src/resources/number-3/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="post /3/invoices">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">create</a>({ ...params }) -> FortnoxInvoiceWrap</code>
- <code title="get /3/invoices/{DocumentNumber}">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">retrieve</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="put /3/invoices/{DocumentNumber}">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">update</a>(documentNumber, { ...params }) -> FortnoxInvoiceWrap</code>
- <code title="get /3/invoices">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>
- <code title="put /3/invoices/{DocumentNumber}/bookkeep">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">bookkeep</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="put /3/invoices/{DocumentNumber}/cancel">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">cancel</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="put /3/invoices/{DocumentNumber}/credit">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">credit</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="get /3/invoices/{DocumentNumber}/preview">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">preview</a>(documentNumber) -> Response</code>
- <code title="get /3/invoices/{DocumentNumber}/print">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">print</a>(documentNumber) -> Response</code>
- <code title="get /3/invoices/{DocumentNumber}/printreminder">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">printReminder</a>(documentNumber) -> Response</code>
- <code title="get /3/invoices/{DocumentNumber}/einvoice">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">sendEinvoice</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="get /3/invoices/{DocumentNumber}/email">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">sendEmail</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="get /3/invoices/{DocumentNumber}/eprint">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">sendEprint</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="put /3/invoices/{DocumentNumber}/warehouseready">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">setDone</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="put /3/invoices/{DocumentNumber}/externalprint">client.number3.invoices.<a href="./src/resources/number-3/invoices.ts">setSent</a>(documentNumber) -> FortnoxInvoiceWrap</code>

## Labels

Types:

- <code><a href="./src/resources/number-3/labels.ts">Label</a></code>
- <code><a href="./src/resources/number-3/labels.ts">LabelWrap</a></code>
- <code><a href="./src/resources/number-3/labels.ts">LabelListResponse</a></code>

Methods:

- <code title="post /3/labels">client.number3.labels.<a href="./src/resources/number-3/labels.ts">create</a>({ ...params }) -> LabelWrap</code>
- <code title="put /3/labels/{Id}">client.number3.labels.<a href="./src/resources/number-3/labels.ts">update</a>(id, { ...params }) -> LabelWrap</code>
- <code title="get /3/labels">client.number3.labels.<a href="./src/resources/number-3/labels.ts">list</a>() -> LabelListResponse</code>
- <code title="delete /3/labels/{Id}">client.number3.labels.<a href="./src/resources/number-3/labels.ts">delete</a>(id) -> void</code>

## Modesofpayments

Types:

- <code><a href="./src/resources/number-3/modesofpayments.ts">ModeOfPayment</a></code>
- <code><a href="./src/resources/number-3/modesofpayments.ts">ModeOfPaymentWrap</a></code>
- <code><a href="./src/resources/number-3/modesofpayments.ts">ModesofpaymentListResponse</a></code>

Methods:

- <code title="post /3/modesofpayments">client.number3.modesofpayments.<a href="./src/resources/number-3/modesofpayments.ts">create</a>({ ...params }) -> ModeOfPaymentWrap</code>
- <code title="get /3/modesofpayments/{Code}">client.number3.modesofpayments.<a href="./src/resources/number-3/modesofpayments.ts">retrieve</a>(code) -> ModeOfPaymentWrap</code>
- <code title="put /3/modesofpayments/{Code}">client.number3.modesofpayments.<a href="./src/resources/number-3/modesofpayments.ts">update</a>(code, { ...params }) -> ModeOfPaymentWrap</code>
- <code title="get /3/modesofpayments">client.number3.modesofpayments.<a href="./src/resources/number-3/modesofpayments.ts">list</a>() -> ModesofpaymentListResponse</code>
- <code title="delete /3/modesofpayments/{Code}">client.number3.modesofpayments.<a href="./src/resources/number-3/modesofpayments.ts">delete</a>(code) -> void</code>

## Noxfinansinvoices

Types:

- <code><a href="./src/resources/number-3/noxfinansinvoices.ts">InvoiceResponseWrap</a></code>

Methods:

- <code title="get /3/noxfinansinvoices/{Number}">client.number3.noxfinansinvoices.<a href="./src/resources/number-3/noxfinansinvoices.ts">retrieve</a>(number) -> InvoiceResponseWrap</code>
- <code title="put /3/noxfinansinvoices/{Number}/pause">client.number3.noxfinansinvoices.<a href="./src/resources/number-3/noxfinansinvoices.ts">pause</a>(number, { ...params }) -> InvoiceResponseWrap</code>
- <code title="put /3/noxfinansinvoices/{Number}/report-payment">client.number3.noxfinansinvoices.<a href="./src/resources/number-3/noxfinansinvoices.ts">reportPayment</a>(number, { ...params }) -> InvoiceResponseWrap</code>
- <code title="post /3/noxfinansinvoices">client.number3.noxfinansinvoices.<a href="./src/resources/number-3/noxfinansinvoices.ts">send</a>({ ...params }) -> InvoiceResponseWrap</code>
- <code title="put /3/noxfinansinvoices/{Number}/stop">client.number3.noxfinansinvoices.<a href="./src/resources/number-3/noxfinansinvoices.ts">stop</a>(number) -> InvoiceResponseWrap</code>
- <code title="put /3/noxfinansinvoices/{Number}/take-fees">client.number3.noxfinansinvoices.<a href="./src/resources/number-3/noxfinansinvoices.ts">takeFees</a>(number) -> InvoiceResponseWrap</code>
- <code title="put /3/noxfinansinvoices/{Number}/unpause">client.number3.noxfinansinvoices.<a href="./src/resources/number-3/noxfinansinvoices.ts">unpause</a>(number) -> InvoiceResponseWrap</code>

## Offers

Types:

- <code><a href="./src/resources/number-3/offers.ts">FortnoxOffer</a></code>
- <code><a href="./src/resources/number-3/offers.ts">FortnoxOfferEmailInformation</a></code>
- <code><a href="./src/resources/number-3/offers.ts">FortnoxOfferLabel</a></code>
- <code><a href="./src/resources/number-3/offers.ts">FortnoxOfferOfferRow</a></code>
- <code><a href="./src/resources/number-3/offers.ts">OfferWrap</a></code>
- <code><a href="./src/resources/number-3/offers.ts">OrderWrap</a></code>
- <code><a href="./src/resources/number-3/offers.ts">OfferListResponse</a></code>

Methods:

- <code title="post /3/offers">client.number3.offers.<a href="./src/resources/number-3/offers.ts">create</a>({ ...params }) -> OfferWrap</code>
- <code title="get /3/offers/{DocumentNumber}">client.number3.offers.<a href="./src/resources/number-3/offers.ts">retrieve</a>(documentNumber) -> OfferWrap</code>
- <code title="put /3/offers/{DocumentNumber}">client.number3.offers.<a href="./src/resources/number-3/offers.ts">update</a>(documentNumber, { ...params }) -> OfferWrap</code>
- <code title="get /3/offers">client.number3.offers.<a href="./src/resources/number-3/offers.ts">list</a>({ ...params }) -> OfferListResponse</code>
- <code title="put /3/offers/{DocumentNumber}/cancel">client.number3.offers.<a href="./src/resources/number-3/offers.ts">cancel</a>(documentNumber) -> OfferWrap</code>
- <code title="put /3/offers/{DocumentNumber}/createinvoice">client.number3.offers.<a href="./src/resources/number-3/offers.ts">createInvoice</a>(documentNumber) -> OrderWrap</code>
- <code title="put /3/offers/{DocumentNumber}/createorder">client.number3.offers.<a href="./src/resources/number-3/offers.ts">createOrder</a>(documentNumber) -> OrderWrap</code>
- <code title="get /3/offers/{DocumentNumber}/preview">client.number3.offers.<a href="./src/resources/number-3/offers.ts">preview</a>(documentNumber) -> Response</code>
- <code title="get /3/offers/{DocumentNumber}/print">client.number3.offers.<a href="./src/resources/number-3/offers.ts">print</a>(documentNumber) -> Response</code>
- <code title="get /3/offers/{DocumentNumber}/email">client.number3.offers.<a href="./src/resources/number-3/offers.ts">sendEmail</a>(documentNumber) -> OfferWrap</code>
- <code title="put /3/offers/{DocumentNumber}/externalprint">client.number3.offers.<a href="./src/resources/number-3/offers.ts">setSent</a>(documentNumber) -> OfferWrap</code>

## Orders

Types:

- <code><a href="./src/resources/number-3/orders.ts">OrderListResponse</a></code>

Methods:

- <code title="post /3/orders">client.number3.orders.<a href="./src/resources/number-3/orders.ts">create</a>({ ...params }) -> OrderWrap</code>
- <code title="get /3/orders/{DocumentNumber}">client.number3.orders.<a href="./src/resources/number-3/orders.ts">retrieve</a>(documentNumber) -> OrderWrap</code>
- <code title="put /3/orders/{DocumentNumber}">client.number3.orders.<a href="./src/resources/number-3/orders.ts">update</a>(documentNumber, { ...params }) -> OrderWrap</code>
- <code title="get /3/orders">client.number3.orders.<a href="./src/resources/number-3/orders.ts">list</a>({ ...params }) -> OrderListResponse</code>
- <code title="put /3/orders/{DocumentNumber}/cancel">client.number3.orders.<a href="./src/resources/number-3/orders.ts">cancel</a>(documentNumber) -> OrderWrap</code>
- <code title="put /3/orders/{DocumentNumber}/createinvoice">client.number3.orders.<a href="./src/resources/number-3/orders.ts">createInvoice</a>(documentNumber) -> FortnoxInvoiceWrap</code>
- <code title="get /3/orders/{DocumentNumber}/preview">client.number3.orders.<a href="./src/resources/number-3/orders.ts">preview</a>(documentNumber) -> Response</code>
- <code title="get /3/orders/{DocumentNumber}/print">client.number3.orders.<a href="./src/resources/number-3/orders.ts">print</a>(documentNumber) -> Response</code>
- <code title="get /3/orders/{DocumentNumber}/email">client.number3.orders.<a href="./src/resources/number-3/orders.ts">sendEmail</a>(documentNumber) -> OrderWrap</code>
- <code title="put /3/orders/{DocumentNumber}/externalprint">client.number3.orders.<a href="./src/resources/number-3/orders.ts">setSent</a>(documentNumber) -> OrderWrap</code>

## Predefinedaccounts

Types:

- <code><a href="./src/resources/number-3/predefinedaccounts.ts">PredefinedAccount</a></code>
- <code><a href="./src/resources/number-3/predefinedaccounts.ts">PredefinedAccountWrap</a></code>
- <code><a href="./src/resources/number-3/predefinedaccounts.ts">PredefinedaccountListResponse</a></code>

Methods:

- <code title="get /3/predefinedaccounts/{name}">client.number3.predefinedaccounts.<a href="./src/resources/number-3/predefinedaccounts.ts">retrieve</a>(name) -> PredefinedAccountWrap</code>
- <code title="put /3/predefinedaccounts/{name}">client.number3.predefinedaccounts.<a href="./src/resources/number-3/predefinedaccounts.ts">update</a>(name, { ...params }) -> PredefinedAccountWrap</code>
- <code title="get /3/predefinedaccounts">client.number3.predefinedaccounts.<a href="./src/resources/number-3/predefinedaccounts.ts">list</a>() -> PredefinedaccountListResponse</code>

## Predefinedvoucherseries

Types:

- <code><a href="./src/resources/number-3/predefinedvoucherseries.ts">PredefinedVoucherSeries</a></code>
- <code><a href="./src/resources/number-3/predefinedvoucherseries.ts">PredefinedVoucherSeriesWrap</a></code>
- <code><a href="./src/resources/number-3/predefinedvoucherseries.ts">PredefinedvoucherseryListResponse</a></code>

Methods:

- <code title="get /3/predefinedvoucherseries/{Name}">client.number3.predefinedvoucherseries.<a href="./src/resources/number-3/predefinedvoucherseries.ts">retrieve</a>(name) -> PredefinedVoucherSeriesWrap</code>
- <code title="put /3/predefinedvoucherseries/{Name}">client.number3.predefinedvoucherseries.<a href="./src/resources/number-3/predefinedvoucherseries.ts">update</a>(name, { ...params }) -> PredefinedVoucherSeriesWrap</code>
- <code title="get /3/predefinedvoucherseries">client.number3.predefinedvoucherseries.<a href="./src/resources/number-3/predefinedvoucherseries.ts">list</a>() -> PredefinedvoucherseryListResponse</code>

## Pricelists

Types:

- <code><a href="./src/resources/number-3/pricelists.ts">PriceList</a></code>
- <code><a href="./src/resources/number-3/pricelists.ts">PriceListWrap</a></code>
- <code><a href="./src/resources/number-3/pricelists.ts">PricelistListResponse</a></code>

Methods:

- <code title="post /3/pricelists">client.number3.pricelists.<a href="./src/resources/number-3/pricelists.ts">create</a>({ ...params }) -> PriceListWrap</code>
- <code title="get /3/pricelists/{Code}">client.number3.pricelists.<a href="./src/resources/number-3/pricelists.ts">retrieve</a>(code) -> PriceListWrap</code>
- <code title="put /3/pricelists/{Code}">client.number3.pricelists.<a href="./src/resources/number-3/pricelists.ts">update</a>(code, { ...params }) -> PriceListWrap</code>
- <code title="get /3/pricelists">client.number3.pricelists.<a href="./src/resources/number-3/pricelists.ts">list</a>() -> PricelistListResponse</code>

## Prices

Types:

- <code><a href="./src/resources/number-3/prices.ts">FortnoxPrice</a></code>
- <code><a href="./src/resources/number-3/prices.ts">PriceWrap</a></code>
- <code><a href="./src/resources/number-3/prices.ts">PriceRetrieveSublistResponse</a></code>

Methods:

- <code title="post /3/prices">client.number3.prices.<a href="./src/resources/number-3/prices.ts">create</a>({ ...params }) -> PriceWrap</code>
- <code title="get /3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}">client.number3.prices.<a href="./src/resources/number-3/prices.ts">retrieve</a>(fromQuantity, { ...params }) -> PriceWrap</code>
- <code title="put /3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}">client.number3.prices.<a href="./src/resources/number-3/prices.ts">update</a>(fromQuantity, { ...params }) -> PriceWrap</code>
- <code title="get /3/prices">client.number3.prices.<a href="./src/resources/number-3/prices.ts">list</a>() -> PriceWrap</code>
- <code title="delete /3/prices/{PriceList}/{ArticleNumber}/{FromQuantity}">client.number3.prices.<a href="./src/resources/number-3/prices.ts">delete</a>(fromQuantity, { ...params }) -> void</code>
- <code title="get /3/prices/{PriceList}/{ArticleNumber}">client.number3.prices.<a href="./src/resources/number-3/prices.ts">retrieveFirst</a>(articleNumber, { ...params }) -> PriceWrap</code>
- <code title="get /3/prices/sublist/{PriceList}/{ArticleNumber}">client.number3.prices.<a href="./src/resources/number-3/prices.ts">retrieveSublist</a>(articleNumber, { ...params }) -> PriceRetrieveSublistResponse</code>
- <code title="put /3/prices/{PriceList}/{ArticleNumber}">client.number3.prices.<a href="./src/resources/number-3/prices.ts">updateFirst</a>(articleNumber, { ...params }) -> PriceWrap</code>

## Projects

Types:

- <code><a href="./src/resources/number-3/projects.ts">FortnoxProject</a></code>
- <code><a href="./src/resources/number-3/projects.ts">ProjectWrap</a></code>
- <code><a href="./src/resources/number-3/projects.ts">ProjectListResponse</a></code>

Methods:

- <code title="post /3/projects">client.number3.projects.<a href="./src/resources/number-3/projects.ts">create</a>({ ...params }) -> ProjectWrap</code>
- <code title="get /3/projects/{ProjectNumber}">client.number3.projects.<a href="./src/resources/number-3/projects.ts">retrieve</a>(projectNumber) -> ProjectWrap</code>
- <code title="put /3/projects/{ProjectNumber}">client.number3.projects.<a href="./src/resources/number-3/projects.ts">update</a>(projectNumber, { ...params }) -> ProjectWrap</code>
- <code title="get /3/projects">client.number3.projects.<a href="./src/resources/number-3/projects.ts">list</a>() -> ProjectListResponse</code>
- <code title="delete /3/projects/{ProjectNumber}">client.number3.projects.<a href="./src/resources/number-3/projects.ts">delete</a>(projectNumber) -> void</code>

## Salarytransactions

Types:

- <code><a href="./src/resources/number-3/salarytransactions.ts">FortnoxSalaryTransaction</a></code>
- <code><a href="./src/resources/number-3/salarytransactions.ts">SalaryTransactionWrap</a></code>
- <code><a href="./src/resources/number-3/salarytransactions.ts">SalarytransactionListResponse</a></code>

Methods:

- <code title="post /3/salarytransactions">client.number3.salarytransactions.<a href="./src/resources/number-3/salarytransactions.ts">create</a>({ ...params }) -> SalaryTransactionWrap</code>
- <code title="get /3/salarytransactions/{SalaryRow}">client.number3.salarytransactions.<a href="./src/resources/number-3/salarytransactions.ts">retrieve</a>(salaryRow) -> SalaryTransactionWrap</code>
- <code title="put /3/salarytransactions/{SalaryRow}">client.number3.salarytransactions.<a href="./src/resources/number-3/salarytransactions.ts">update</a>(salaryRow, { ...params }) -> SalaryTransactionWrap</code>
- <code title="get /3/salarytransactions">client.number3.salarytransactions.<a href="./src/resources/number-3/salarytransactions.ts">list</a>({ ...params }) -> SalarytransactionListResponse</code>
- <code title="delete /3/salarytransactions/{SalaryRow}">client.number3.salarytransactions.<a href="./src/resources/number-3/salarytransactions.ts">delete</a>(salaryRow) -> SalaryTransactionWrap</code>

## Scheduletimes

Types:

- <code><a href="./src/resources/number-3/scheduletimes.ts">ScheduleTimeWrap</a></code>

Methods:

- <code title="get /3/scheduletimes/{EmployeeId}/{Date}">client.number3.scheduletimes.<a href="./src/resources/number-3/scheduletimes.ts">retrieve</a>(date, { ...params }) -> ScheduleTimeWrap</code>
- <code title="put /3/scheduletimes/{EmployeeId}/{Date}">client.number3.scheduletimes.<a href="./src/resources/number-3/scheduletimes.ts">update</a>(date, { ...params }) -> ScheduleTimeWrap</code>
- <code title="put /3/scheduletimes/{EmployeeId}/{Date}/resetday">client.number3.scheduletimes.<a href="./src/resources/number-3/scheduletimes.ts">resetDay</a>(date, { ...params }) -> ScheduleTimeWrap</code>

## Settings

Types:

- <code><a href="./src/resources/number-3/settings.ts">SettingRetrieveCompanyResponse</a></code>
- <code><a href="./src/resources/number-3/settings.ts">SettingRetrieveLockedPeriodResponse</a></code>

Methods:

- <code title="get /3/settings/company">client.number3.settings.<a href="./src/resources/number-3/settings.ts">retrieveCompany</a>() -> SettingRetrieveCompanyResponse</code>
- <code title="get /3/settings/lockedperiod">client.number3.settings.<a href="./src/resources/number-3/settings.ts">retrieveLockedPeriod</a>() -> SettingRetrieveLockedPeriodResponse</code>

## Supplierinvoiceaccruals

Types:

- <code><a href="./src/resources/number-3/supplierinvoiceaccruals.ts">FortnoxSupplierInvoiceAccrual</a></code>
- <code><a href="./src/resources/number-3/supplierinvoiceaccruals.ts">FortnoxSupplierInvoiceAccrualSupplierInvoiceAccrualRows</a></code>
- <code><a href="./src/resources/number-3/supplierinvoiceaccruals.ts">SupplierInvoiceAccrualWrap</a></code>
- <code><a href="./src/resources/number-3/supplierinvoiceaccruals.ts">SupplierinvoiceaccrualListResponse</a></code>

Methods:

- <code title="post /3/supplierinvoiceaccruals">client.number3.supplierinvoiceaccruals.<a href="./src/resources/number-3/supplierinvoiceaccruals.ts">create</a>({ ...params }) -> SupplierInvoiceAccrualWrap</code>
- <code title="get /3/supplierinvoiceaccruals/{SupplierInvoiceNumber}">client.number3.supplierinvoiceaccruals.<a href="./src/resources/number-3/supplierinvoiceaccruals.ts">retrieve</a>(supplierInvoiceNumber) -> SupplierInvoiceAccrualWrap</code>
- <code title="put /3/supplierinvoiceaccruals/{SupplierInvoiceNumber}">client.number3.supplierinvoiceaccruals.<a href="./src/resources/number-3/supplierinvoiceaccruals.ts">update</a>(supplierInvoiceNumber, { ...params }) -> SupplierInvoiceAccrualWrap</code>
- <code title="get /3/supplierinvoiceaccruals">client.number3.supplierinvoiceaccruals.<a href="./src/resources/number-3/supplierinvoiceaccruals.ts">list</a>() -> SupplierinvoiceaccrualListResponse</code>
- <code title="delete /3/supplierinvoiceaccruals/{SupplierInvoiceNumber}">client.number3.supplierinvoiceaccruals.<a href="./src/resources/number-3/supplierinvoiceaccruals.ts">delete</a>(supplierInvoiceNumber) -> void</code>

## Supplierinvoiceexternalurlconnections

Types:

- <code><a href="./src/resources/number-3/supplierinvoiceexternalurlconnections.ts">SupplierInvoiceExternalURLConnectionSingle</a></code>
- <code><a href="./src/resources/number-3/supplierinvoiceexternalurlconnections.ts">SupplierInvoiceExternalURLConnectionUpdate</a></code>

Methods:

- <code title="post /3/supplierinvoiceexternalurlconnections">client.number3.supplierinvoiceexternalurlconnections.<a href="./src/resources/number-3/supplierinvoiceexternalurlconnections.ts">create</a>({ ...params }) -> SupplierInvoiceExternalURLConnectionSingle</code>
- <code title="get /3/supplierinvoiceexternalurlconnections/{Id}">client.number3.supplierinvoiceexternalurlconnections.<a href="./src/resources/number-3/supplierinvoiceexternalurlconnections.ts">retrieve</a>(id) -> SupplierInvoiceExternalURLConnectionSingle</code>
- <code title="put /3/supplierinvoiceexternalurlconnections/{Id}">client.number3.supplierinvoiceexternalurlconnections.<a href="./src/resources/number-3/supplierinvoiceexternalurlconnections.ts">update</a>(id, { ...params }) -> SupplierInvoiceExternalURLConnectionSingle</code>
- <code title="delete /3/supplierinvoiceexternalurlconnections/{Id}">client.number3.supplierinvoiceexternalurlconnections.<a href="./src/resources/number-3/supplierinvoiceexternalurlconnections.ts">delete</a>(id) -> void</code>

## Supplierinvoicefileconnections

Types:

- <code><a href="./src/resources/number-3/supplierinvoicefileconnections.ts">FortnoxSupplierInvoiceFileConnection</a></code>
- <code><a href="./src/resources/number-3/supplierinvoicefileconnections.ts">FortnoxSupplierInvoiceFileConnectionWrap</a></code>
- <code><a href="./src/resources/number-3/supplierinvoicefileconnections.ts">SupplierinvoicefileconnectionListResponse</a></code>

Methods:

- <code title="post /3/supplierinvoicefileconnections">client.number3.supplierinvoicefileconnections.<a href="./src/resources/number-3/supplierinvoicefileconnections.ts">create</a>({ ...params }) -> FortnoxSupplierInvoiceFileConnectionWrap</code>
- <code title="get /3/supplierinvoicefileconnections/{FileId}">client.number3.supplierinvoicefileconnections.<a href="./src/resources/number-3/supplierinvoicefileconnections.ts">retrieve</a>(fileID) -> FortnoxSupplierInvoiceFileConnectionWrap</code>
- <code title="get /3/supplierinvoicefileconnections">client.number3.supplierinvoicefileconnections.<a href="./src/resources/number-3/supplierinvoicefileconnections.ts">list</a>() -> SupplierinvoicefileconnectionListResponse</code>
- <code title="delete /3/supplierinvoicefileconnections/{FileId}">client.number3.supplierinvoicefileconnections.<a href="./src/resources/number-3/supplierinvoicefileconnections.ts">delete</a>(fileID) -> void</code>

## Supplierinvoicepayments

Types:

- <code><a href="./src/resources/number-3/supplierinvoicepayments.ts">FortnoxSupplierInvoicePayment</a></code>
- <code><a href="./src/resources/number-3/supplierinvoicepayments.ts">FortnoxSupplierInvoicePaymentWrap</a></code>
- <code><a href="./src/resources/number-3/supplierinvoicepayments.ts">FortnoxSupplierInvoicePaymentWriteOff</a></code>
- <code><a href="./src/resources/number-3/supplierinvoicepayments.ts">SupplierinvoicepaymentListResponse</a></code>

Methods:

- <code title="post /3/supplierinvoicepayments">client.number3.supplierinvoicepayments.<a href="./src/resources/number-3/supplierinvoicepayments.ts">create</a>({ ...params }) -> FortnoxSupplierInvoicePaymentWrap</code>
- <code title="get /3/supplierinvoicepayments/{Number}">client.number3.supplierinvoicepayments.<a href="./src/resources/number-3/supplierinvoicepayments.ts">retrieve</a>(number) -> FortnoxSupplierInvoicePaymentWrap</code>
- <code title="put /3/supplierinvoicepayments/{Number}">client.number3.supplierinvoicepayments.<a href="./src/resources/number-3/supplierinvoicepayments.ts">update</a>(number, { ...params }) -> FortnoxSupplierInvoicePaymentWrap</code>
- <code title="get /3/supplierinvoicepayments">client.number3.supplierinvoicepayments.<a href="./src/resources/number-3/supplierinvoicepayments.ts">list</a>() -> SupplierinvoicepaymentListResponse</code>
- <code title="delete /3/supplierinvoicepayments/{Number}">client.number3.supplierinvoicepayments.<a href="./src/resources/number-3/supplierinvoicepayments.ts">delete</a>(number) -> void</code>
- <code title="put /3/supplierinvoicepayments/{Number}/bookkeep">client.number3.supplierinvoicepayments.<a href="./src/resources/number-3/supplierinvoicepayments.ts">bookkeep</a>(number) -> FortnoxSupplierInvoicePaymentWrap</code>

## Supplierinvoices

Types:

- <code><a href="./src/resources/number-3/supplierinvoices.ts">FortnoxSupplierInvoice</a></code>
- <code><a href="./src/resources/number-3/supplierinvoices.ts">FortnoxSupplierInvoiceSupplierInvoiceRow</a></code>
- <code><a href="./src/resources/number-3/supplierinvoices.ts">FortnoxSupplierInvoiceVoucher</a></code>
- <code><a href="./src/resources/number-3/supplierinvoices.ts">FortnoxSupplierInvoiceWrap</a></code>
- <code><a href="./src/resources/number-3/supplierinvoices.ts">SupplierinvoiceListResponse</a></code>

Methods:

- <code title="post /3/supplierinvoices">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">create</a>({ ...params }) -> FortnoxSupplierInvoiceWrap</code>
- <code title="get /3/supplierinvoices/{GivenNumber}">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">retrieve</a>(givenNumber) -> FortnoxSupplierInvoiceWrap</code>
- <code title="put /3/supplierinvoices/{GivenNumber}">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">update</a>(givenNumber, { ...params }) -> FortnoxSupplierInvoiceWrap</code>
- <code title="get /3/supplierinvoices">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">list</a>({ ...params }) -> SupplierinvoiceListResponse</code>
- <code title="put /3/supplierinvoices/{GivenNumber}/approvalbookkeep">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">updateApprovalbookkeep</a>(givenNumber) -> FortnoxSupplierInvoiceWrap</code>
- <code title="put /3/supplierinvoices/{GivenNumber}/approvalpayment">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">updateApprovalpayment</a>(givenNumber) -> FortnoxSupplierInvoiceWrap</code>
- <code title="put /3/supplierinvoices/{GivenNumber}/bookkeep">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">updateBookkeep</a>(givenNumber) -> FortnoxSupplierInvoiceWrap</code>
- <code title="put /3/supplierinvoices/{GivenNumber}/cancel">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">updateCancel</a>(givenNumber) -> FortnoxSupplierInvoiceWrap</code>
- <code title="put /3/supplierinvoices/{GivenNumber}/credit">client.number3.supplierinvoices.<a href="./src/resources/number-3/supplierinvoices.ts">updateCredit</a>(givenNumber) -> FortnoxSupplierInvoiceWrap</code>

## Suppliers

Types:

- <code><a href="./src/resources/number-3/suppliers.ts">FortnoxSupplier</a></code>
- <code><a href="./src/resources/number-3/suppliers.ts">FortnoxSupplierWrap</a></code>
- <code><a href="./src/resources/number-3/suppliers.ts">SupplierListResponse</a></code>

Methods:

- <code title="post /3/suppliers">client.number3.suppliers.<a href="./src/resources/number-3/suppliers.ts">create</a>({ ...params }) -> FortnoxSupplierWrap</code>
- <code title="get /3/suppliers/{SupplierNumber}">client.number3.suppliers.<a href="./src/resources/number-3/suppliers.ts">retrieve</a>(supplierNumber) -> FortnoxSupplierWrap</code>
- <code title="put /3/suppliers/{SupplierNumber}">client.number3.suppliers.<a href="./src/resources/number-3/suppliers.ts">update</a>(supplierNumber, { ...params }) -> FortnoxSupplierWrap</code>
- <code title="get /3/suppliers">client.number3.suppliers.<a href="./src/resources/number-3/suppliers.ts">list</a>() -> SupplierListResponse</code>

## Taxreductions

Types:

- <code><a href="./src/resources/number-3/taxreductions.ts">FortnoxTaxReduction</a></code>
- <code><a href="./src/resources/number-3/taxreductions.ts">FortnoxTaxReductionTaxReductionAmount</a></code>
- <code><a href="./src/resources/number-3/taxreductions.ts">FortnoxTaxReductionWrap</a></code>
- <code><a href="./src/resources/number-3/taxreductions.ts">TaxreductionListResponse</a></code>

Methods:

- <code title="post /3/taxreductions">client.number3.taxreductions.<a href="./src/resources/number-3/taxreductions.ts">create</a>({ ...params }) -> FortnoxTaxReductionWrap</code>
- <code title="get /3/taxreductions/{Id}">client.number3.taxreductions.<a href="./src/resources/number-3/taxreductions.ts">retrieve</a>(id) -> FortnoxTaxReductionWrap</code>
- <code title="put /3/taxreductions/{Id}">client.number3.taxreductions.<a href="./src/resources/number-3/taxreductions.ts">update</a>(id, { ...params }) -> FortnoxTaxReductionWrap</code>
- <code title="get /3/taxreductions">client.number3.taxreductions.<a href="./src/resources/number-3/taxreductions.ts">list</a>({ ...params }) -> TaxreductionListResponse</code>
- <code title="delete /3/taxreductions/{Id}">client.number3.taxreductions.<a href="./src/resources/number-3/taxreductions.ts">delete</a>(id) -> void</code>

## Termsofdeliveries

Types:

- <code><a href="./src/resources/number-3/termsofdeliveries.ts">FortnoxTermsOfDelivery</a></code>
- <code><a href="./src/resources/number-3/termsofdeliveries.ts">FortnoxTermsOfDeliveryWrap</a></code>
- <code><a href="./src/resources/number-3/termsofdeliveries.ts">TermsofdeliveryListResponse</a></code>

Methods:

- <code title="post /3/termsofdeliveries">client.number3.termsofdeliveries.<a href="./src/resources/number-3/termsofdeliveries.ts">create</a>({ ...params }) -> FortnoxTermsOfDeliveryWrap</code>
- <code title="get /3/termsofdeliveries/{Code}">client.number3.termsofdeliveries.<a href="./src/resources/number-3/termsofdeliveries.ts">retrieve</a>(code) -> FortnoxTermsOfDeliveryWrap</code>
- <code title="put /3/termsofdeliveries/{Code}">client.number3.termsofdeliveries.<a href="./src/resources/number-3/termsofdeliveries.ts">update</a>(code, { ...params }) -> FortnoxTermsOfDeliveryWrap</code>
- <code title="get /3/termsofdeliveries">client.number3.termsofdeliveries.<a href="./src/resources/number-3/termsofdeliveries.ts">list</a>() -> TermsofdeliveryListResponse</code>

## Termsofpayments

Types:

- <code><a href="./src/resources/number-3/termsofpayments.ts">FortnoxTermsOfPayment</a></code>
- <code><a href="./src/resources/number-3/termsofpayments.ts">FortnoxTermsOfPaymentWrap</a></code>
- <code><a href="./src/resources/number-3/termsofpayments.ts">TermsofpaymentListResponse</a></code>

Methods:

- <code title="post /3/termsofpayments">client.number3.termsofpayments.<a href="./src/resources/number-3/termsofpayments.ts">create</a>({ ...params }) -> FortnoxTermsOfPaymentWrap</code>
- <code title="get /3/termsofpayments/{Code}">client.number3.termsofpayments.<a href="./src/resources/number-3/termsofpayments.ts">retrieve</a>(code) -> FortnoxTermsOfPaymentWrap</code>
- <code title="put /3/termsofpayments/{Code}">client.number3.termsofpayments.<a href="./src/resources/number-3/termsofpayments.ts">update</a>(code, { ...params }) -> FortnoxTermsOfPaymentWrap</code>
- <code title="get /3/termsofpayments">client.number3.termsofpayments.<a href="./src/resources/number-3/termsofpayments.ts">list</a>() -> TermsofpaymentListResponse</code>
- <code title="delete /3/termsofpayments/{Code}">client.number3.termsofpayments.<a href="./src/resources/number-3/termsofpayments.ts">delete</a>(code) -> void</code>

## Units

Types:

- <code><a href="./src/resources/number-3/units.ts">FortnoxUnit</a></code>
- <code><a href="./src/resources/number-3/units.ts">FortnoxUnitWrap</a></code>
- <code><a href="./src/resources/number-3/units.ts">UnitListResponse</a></code>

Methods:

- <code title="post /3/units">client.number3.units.<a href="./src/resources/number-3/units.ts">create</a>({ ...params }) -> FortnoxUnitWrap</code>
- <code title="get /3/units/{Code}">client.number3.units.<a href="./src/resources/number-3/units.ts">retrieve</a>(code) -> FortnoxUnitWrap</code>
- <code title="put /3/units/{Code}">client.number3.units.<a href="./src/resources/number-3/units.ts">update</a>(code, { ...params }) -> FortnoxUnitWrap</code>
- <code title="get /3/units">client.number3.units.<a href="./src/resources/number-3/units.ts">list</a>() -> UnitListResponse</code>
- <code title="delete /3/units/{Code}">client.number3.units.<a href="./src/resources/number-3/units.ts">delete</a>(code) -> void</code>

## Voucherfileconnections

Types:

- <code><a href="./src/resources/number-3/voucherfileconnections.ts">FortnoxVoucherFileConnection</a></code>
- <code><a href="./src/resources/number-3/voucherfileconnections.ts">FortnoxVoucherFileConnectionWrap</a></code>
- <code><a href="./src/resources/number-3/voucherfileconnections.ts">VoucherfileconnectionListResponse</a></code>

Methods:

- <code title="post /3/voucherfileconnections">client.number3.voucherfileconnections.<a href="./src/resources/number-3/voucherfileconnections.ts">create</a>({ ...params }) -> FortnoxVoucherFileConnectionWrap</code>
- <code title="get /3/voucherfileconnections/{FileId}">client.number3.voucherfileconnections.<a href="./src/resources/number-3/voucherfileconnections.ts">retrieve</a>(fileID) -> FortnoxVoucherFileConnectionWrap</code>
- <code title="get /3/voucherfileconnections">client.number3.voucherfileconnections.<a href="./src/resources/number-3/voucherfileconnections.ts">list</a>() -> VoucherfileconnectionListResponse</code>
- <code title="delete /3/voucherfileconnections/{FileId}">client.number3.voucherfileconnections.<a href="./src/resources/number-3/voucherfileconnections.ts">delete</a>(fileID) -> void</code>

## Vouchers

Types:

- <code><a href="./src/resources/number-3/vouchers/vouchers.ts">FortnoxVoucherListItemList</a></code>
- <code><a href="./src/resources/number-3/vouchers/vouchers.ts">FortnoxVoucherWrap</a></code>

Methods:

- <code title="post /3/vouchers">client.number3.vouchers.<a href="./src/resources/number-3/vouchers/vouchers.ts">create</a>({ ...params }) -> FortnoxVoucherWrap</code>
- <code title="get /3/vouchers/{VoucherSeries}/{VoucherNumber}">client.number3.vouchers.<a href="./src/resources/number-3/vouchers/vouchers.ts">retrieve</a>(voucherNumber, { ...params }) -> FortnoxVoucherWrap</code>
- <code title="get /3/vouchers">client.number3.vouchers.<a href="./src/resources/number-3/vouchers/vouchers.ts">list</a>({ ...params }) -> FortnoxVoucherListItemList</code>

### Sublist

Methods:

- <code title="get /3/vouchers/sublist/{VoucherSeries}">client.number3.vouchers.sublist.<a href="./src/resources/number-3/vouchers/sublist.ts">retrieve</a>(voucherSeries, { ...params }) -> FortnoxVoucherListItemList</code>
- <code title="get /3/vouchers/sublist">client.number3.vouchers.sublist.<a href="./src/resources/number-3/vouchers/sublist.ts">list</a>() -> FortnoxVoucherListItemList</code>

## Voucherseries

Types:

- <code><a href="./src/resources/number-3/voucherseries.ts">FortnoxVoucherSeries</a></code>
- <code><a href="./src/resources/number-3/voucherseries.ts">FortnoxVoucherSeriesApprover</a></code>
- <code><a href="./src/resources/number-3/voucherseries.ts">FortnoxVoucherSeriesWrap</a></code>
- <code><a href="./src/resources/number-3/voucherseries.ts">VoucherseryListResponse</a></code>

Methods:

- <code title="post /3/voucherseries">client.number3.voucherseries.<a href="./src/resources/number-3/voucherseries.ts">create</a>({ ...params }) -> FortnoxVoucherSeriesWrap</code>
- <code title="get /3/voucherseries/{Code}">client.number3.voucherseries.<a href="./src/resources/number-3/voucherseries.ts">retrieve</a>(code) -> FortnoxVoucherSeriesWrap</code>
- <code title="put /3/voucherseries/{Code}">client.number3.voucherseries.<a href="./src/resources/number-3/voucherseries.ts">update</a>(code, { ...params }) -> FortnoxVoucherSeriesWrap</code>
- <code title="get /3/voucherseries">client.number3.voucherseries.<a href="./src/resources/number-3/voucherseries.ts">list</a>() -> VoucherseryListResponse</code>

## Wayofdeliveries

Types:

- <code><a href="./src/resources/number-3/wayofdeliveries.ts">FortnoxWayOfDelivery</a></code>
- <code><a href="./src/resources/number-3/wayofdeliveries.ts">FortnoxWayOfDeliveryWrap</a></code>
- <code><a href="./src/resources/number-3/wayofdeliveries.ts">WayofdeliveryListResponse</a></code>

Methods:

- <code title="post /3/wayofdeliveries">client.number3.wayofdeliveries.<a href="./src/resources/number-3/wayofdeliveries.ts">create</a>({ ...params }) -> FortnoxWayOfDeliveryWrap</code>
- <code title="get /3/wayofdeliveries/{Code}">client.number3.wayofdeliveries.<a href="./src/resources/number-3/wayofdeliveries.ts">retrieve</a>(code) -> FortnoxWayOfDeliveryWrap</code>
- <code title="put /3/wayofdeliveries/{Code}">client.number3.wayofdeliveries.<a href="./src/resources/number-3/wayofdeliveries.ts">update</a>(code, { ...params }) -> FortnoxWayOfDeliveryWrap</code>
- <code title="get /3/wayofdeliveries">client.number3.wayofdeliveries.<a href="./src/resources/number-3/wayofdeliveries.ts">list</a>() -> WayofdeliveryListResponse</code>
- <code title="delete /3/wayofdeliveries/{Code}">client.number3.wayofdeliveries.<a href="./src/resources/number-3/wayofdeliveries.ts">delete</a>(code) -> void</code>

# API

## Fileattachments

### AttachmentsV1

Types:

- <code><a href="./src/resources/api/fileattachments/attachments-v1.ts">FileattachmentsAttachment</a></code>
- <code><a href="./src/resources/api/fileattachments/attachments-v1.ts">AttachmentsV1CountResponse</a></code>

Methods:

- <code title="post /api/fileattachments/attachments-v1">client.api.fileattachments.attachmentsV1.<a href="./src/resources/api/fileattachments/attachments-v1.ts">create</a>([ ...body ]) -> FileattachmentsAttachment</code>
- <code title="put /api/fileattachments/attachments-v1/{attachmentId}">client.api.fileattachments.attachmentsV1.<a href="./src/resources/api/fileattachments/attachments-v1.ts">update</a>(attachmentID, { ...params }) -> FileattachmentsAttachment</code>
- <code title="get /api/fileattachments/attachments-v1">client.api.fileattachments.attachmentsV1.<a href="./src/resources/api/fileattachments/attachments-v1.ts">list</a>({ ...params }) -> FileattachmentsAttachment</code>
- <code title="delete /api/fileattachments/attachments-v1/{attachmentId}">client.api.fileattachments.attachmentsV1.<a href="./src/resources/api/fileattachments/attachments-v1.ts">delete</a>(attachmentID) -> void</code>
- <code title="get /api/fileattachments/attachments-v1/numberofattachments">client.api.fileattachments.attachmentsV1.<a href="./src/resources/api/fileattachments/attachments-v1.ts">count</a>({ ...params }) -> AttachmentsV1CountResponse</code>
- <code title="post /api/fileattachments/attachments-v1/validateincludedonsend">client.api.fileattachments.attachmentsV1.<a href="./src/resources/api/fileattachments/attachments-v1.ts">validate</a>([ ...body ]) -> void</code>

## IntegrationDeveloper

Types:

- <code><a href="./src/resources/api/integration-developer/integration-developer.ts">IntegrationDeveloperGetSalesInfoResponse</a></code>
- <code><a href="./src/resources/api/integration-developer/integration-developer.ts">IntegrationDeveloperListRatingsResponse</a></code>

Methods:

- <code title="get /api/integration-developer/sales-v1/{integrationId}">client.api.integrationDeveloper.<a href="./src/resources/api/integration-developer/integration-developer.ts">getSalesInfo</a>(integrationID) -> IntegrationDeveloperGetSalesInfoResponse</code>
- <code title="get /api/integration-developer/ratings-v1">client.api.integrationDeveloper.<a href="./src/resources/api/integration-developer/integration-developer.ts">listRatings</a>() -> IntegrationDeveloperListRatingsResponse</code>

### Users

Types:

- <code><a href="./src/resources/api/integration-developer/users.ts">UserGetUserInfoResponse</a></code>

Methods:

- <code title="get /api/integration-developer/users/users-v1/{integrationId}/{tenantId}">client.api.integrationDeveloper.users.<a href="./src/resources/api/integration-developer/users.ts">getUserInfo</a>(tenantID, { ...params }) -> UserGetUserInfoResponse</code>

## IntegrationPartner

### Apps

#### SalesV1

Types:

- <code><a href="./src/resources/api/integration-partner/apps/sales-v1.ts">IntegrationPartnerAppSalesResponse</a></code>

Methods:

- <code title="get /api/integration-partner/apps/sales-v1/{appId}">client.api.integrationPartner.apps.salesV1.<a href="./src/resources/api/integration-partner/apps/sales-v1.ts">getSalesInfo</a>(appID) -> IntegrationPartnerAppSalesResponse</code>
- <code title="get /api/integration-partner/apps/sales-v1/{appId}/{tenantId}">client.api.integrationPartner.apps.salesV1.<a href="./src/resources/api/integration-partner/apps/sales-v1.ts">getSalesInfoForTenant</a>(tenantID, { ...params }) -> IntegrationPartnerAppSalesResponse</code>

## Time

Types:

- <code><a href="./src/resources/api/time.ts">TimeReportingArticleRegistration</a></code>
- <code><a href="./src/resources/api/time.ts">TimeReportingTrCostCenter</a></code>
- <code><a href="./src/resources/api/time.ts">TimeReportingTrCustomer</a></code>
- <code><a href="./src/resources/api/time.ts">TimeReportingTrItem</a></code>
- <code><a href="./src/resources/api/time.ts">TimeReportingTrProject</a></code>
- <code><a href="./src/resources/api/time.ts">TimeGetArticlesResponse</a></code>
- <code><a href="./src/resources/api/time.ts">TimeGetRegistrationsResponse</a></code>

Methods:

- <code title="get /api/time/articles-v1">client.api.time.<a href="./src/resources/api/time.ts">getArticles</a>({ ...params }) -> TimeGetArticlesResponse</code>
- <code title="get /api/time/registrations-v2">client.api.time.<a href="./src/resources/api/time.ts">getRegistrations</a>({ ...params }) -> TimeGetRegistrationsResponse</code>

## Warehouse

Types:

- <code><a href="./src/resources/api/warehouse/warehouse.ts">WarehouseRetrieveTenantsV4Response</a></code>

Methods:

- <code title="get /api/warehouse/tenants-v4">client.api.warehouse.<a href="./src/resources/api/warehouse/warehouse.ts">retrieveTenantsV4</a>() -> WarehouseRetrieveTenantsV4Response</code>

### DeliveriesV1

Types:

- <code><a href="./src/resources/api/warehouse/deliveries-v1/deliveries-v1.ts">DeliveriesV1RetrieveDeliveriesV1Response</a></code>

Methods:

- <code title="get /api/warehouse/deliveries-v1">client.api.warehouse.deliveriesV1.<a href="./src/resources/api/warehouse/deliveries-v1/deliveries-v1.ts">retrieveDeliveriesV1</a>({ ...params }) -> DeliveriesV1RetrieveDeliveriesV1Response</code>

#### Inbounddeliveries

Types:

- <code><a href="./src/resources/api/warehouse/deliveries-v1/inbounddeliveries.ts">WarehouseManualInboundDocument</a></code>

Methods:

- <code title="post /api/warehouse/deliveries-v1/inbounddeliveries">client.api.warehouse.deliveriesV1.inbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/inbounddeliveries.ts">create</a>({ ...params }) -> WarehouseManualInboundDocument</code>
- <code title="get /api/warehouse/deliveries-v1/inbounddeliveries/{id}">client.api.warehouse.deliveriesV1.inbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/inbounddeliveries.ts">retrieve</a>(id) -> WarehouseManualInboundDocument</code>
- <code title="put /api/warehouse/deliveries-v1/inbounddeliveries/{id}">client.api.warehouse.deliveriesV1.inbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/inbounddeliveries.ts">update</a>(pathID, { ...params }) -> WarehouseManualInboundDocument</code>
- <code title="put /api/warehouse/deliveries-v1/inbounddeliveries/{id}/release">client.api.warehouse.deliveriesV1.inbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/inbounddeliveries.ts">updateRelease</a>(id) -> void</code>
- <code title="put /api/warehouse/deliveries-v1/inbounddeliveries/{id}/void">client.api.warehouse.deliveriesV1.inbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/inbounddeliveries.ts">updateVoid</a>(id, { ...params }) -> void</code>

#### Outbounddeliveries

Types:

- <code><a href="./src/resources/api/warehouse/deliveries-v1/outbounddeliveries.ts">WarehouseManualOutboundDocument</a></code>

Methods:

- <code title="post /api/warehouse/deliveries-v1/outbounddeliveries">client.api.warehouse.deliveriesV1.outbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/outbounddeliveries.ts">create</a>({ ...params }) -> WarehouseManualOutboundDocument</code>
- <code title="get /api/warehouse/deliveries-v1/outbounddeliveries/{id}">client.api.warehouse.deliveriesV1.outbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/outbounddeliveries.ts">retrieve</a>(id) -> WarehouseManualOutboundDocument</code>
- <code title="put /api/warehouse/deliveries-v1/outbounddeliveries/{id}">client.api.warehouse.deliveriesV1.outbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/outbounddeliveries.ts">update</a>(pathID, { ...params }) -> WarehouseManualOutboundDocument</code>
- <code title="put /api/warehouse/deliveries-v1/outbounddeliveries/{id}/release">client.api.warehouse.deliveriesV1.outbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/outbounddeliveries.ts">updateRelease</a>(id) -> void</code>
- <code title="put /api/warehouse/deliveries-v1/outbounddeliveries/{id}/void">client.api.warehouse.deliveriesV1.outbounddeliveries.<a href="./src/resources/api/warehouse/deliveries-v1/outbounddeliveries.ts">updateVoid</a>(id, { ...params }) -> void</code>

### Documentdeliveries

#### Custom

##### DocumenttypesV1

Types:

- <code><a href="./src/resources/api/warehouse/documentdeliveries/custom/documenttypes-v1.ts">WarehouseCustomDocumentType</a></code>
- <code><a href="./src/resources/api/warehouse/documentdeliveries/custom/documenttypes-v1.ts">DocumenttypesV1DocumenttypesV1Response</a></code>

Methods:

- <code title="get /api/warehouse/documentdeliveries/custom/documenttypes-v1/{type}">client.api.warehouse.documentdeliveries.custom.documenttypesV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/documenttypes-v1.ts">retrieve</a>(type) -> WarehouseCustomDocumentType</code>
- <code title="post /api/warehouse/documentdeliveries/custom/documenttypes-v1">client.api.warehouse.documentdeliveries.custom.documenttypesV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/documenttypes-v1.ts">documenttypesV1</a>({ ...params }) -> DocumenttypesV1DocumenttypesV1Response</code>
- <code title="get /api/warehouse/documentdeliveries/custom/documenttypes-v1">client.api.warehouse.documentdeliveries.custom.documenttypesV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/documenttypes-v1.ts">retrieveDocumenttypesV1</a>() -> WarehouseCustomDocumentType</code>

##### InboundV1

Types:

- <code><a href="./src/resources/api/warehouse/documentdeliveries/custom/inbound-v1.ts">WarehouseCustomInboundDocument</a></code>

Methods:

- <code title="get /api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}">client.api.warehouse.documentdeliveries.custom.inboundV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/inbound-v1.ts">retrieve</a>(id, { ...params }) -> WarehouseCustomInboundDocument</code>
- <code title="put /api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}">client.api.warehouse.documentdeliveries.custom.inboundV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/inbound-v1.ts">update</a>(pathID, { ...params }) -> WarehouseCustomInboundDocument</code>
- <code title="put /api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/release">client.api.warehouse.documentdeliveries.custom.inboundV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/inbound-v1.ts">updateRelease</a>(id, { ...params }) -> void</code>
- <code title="put /api/warehouse/documentdeliveries/custom/inbound-v1/{type}/{id}/void">client.api.warehouse.documentdeliveries.custom.inboundV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/inbound-v1.ts">updateVoid</a>(id, { ...params }) -> void</code>

##### OutboundV1

Types:

- <code><a href="./src/resources/api/warehouse/documentdeliveries/custom/outbound-v1.ts">WarehouseCustomOutboundDocument</a></code>

Methods:

- <code title="get /api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}">client.api.warehouse.documentdeliveries.custom.outboundV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/outbound-v1.ts">retrieve</a>(id, { ...params }) -> WarehouseCustomOutboundDocument</code>
- <code title="put /api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}">client.api.warehouse.documentdeliveries.custom.outboundV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/outbound-v1.ts">update</a>(pathID, { ...params }) -> WarehouseCustomOutboundDocument</code>
- <code title="put /api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/release">client.api.warehouse.documentdeliveries.custom.outboundV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/outbound-v1.ts">updateRelease</a>(id, { ...params }) -> void</code>
- <code title="put /api/warehouse/documentdeliveries/custom/outbound-v1/{type}/{id}/void">client.api.warehouse.documentdeliveries.custom.outboundV1.<a href="./src/resources/api/warehouse/documentdeliveries/custom/outbound-v1.ts">updateVoid</a>(id, { ...params }) -> void</code>

### IncominggoodsV1

Types:

- <code><a href="./src/resources/api/warehouse/incominggoods-v1.ts">WarehouseIncomingGoods</a></code>
- <code><a href="./src/resources/api/warehouse/incominggoods-v1.ts">IncominggoodsV1RetrieveIncominggoodsV1Response</a></code>

Methods:

- <code title="get /api/warehouse/incominggoods-v1/{id}">client.api.warehouse.incominggoodsV1.<a href="./src/resources/api/warehouse/incominggoods-v1.ts">retrieve</a>(id, { ...params }) -> WarehouseIncomingGoods</code>
- <code title="put /api/warehouse/incominggoods-v1/{id}">client.api.warehouse.incominggoodsV1.<a href="./src/resources/api/warehouse/incominggoods-v1.ts">update</a>(pathID, { ...params }) -> WarehouseIncomingGoods</code>
- <code title="post /api/warehouse/incominggoods-v1">client.api.warehouse.incominggoodsV1.<a href="./src/resources/api/warehouse/incominggoods-v1.ts">incominggoodsV1</a>({ ...params }) -> WarehouseIncomingGoods</code>
- <code title="get /api/warehouse/incominggoods-v1">client.api.warehouse.incominggoodsV1.<a href="./src/resources/api/warehouse/incominggoods-v1.ts">retrieveIncominggoodsV1</a>({ ...params }) -> IncominggoodsV1RetrieveIncominggoodsV1Response</code>
- <code title="put /api/warehouse/incominggoods-v1/{id}/completed">client.api.warehouse.incominggoodsV1.<a href="./src/resources/api/warehouse/incominggoods-v1.ts">updateCompleted</a>(id, { ...params }) -> void</code>
- <code title="put /api/warehouse/incominggoods-v1/{id}/release">client.api.warehouse.incominggoodsV1.<a href="./src/resources/api/warehouse/incominggoods-v1.ts">updateRelease</a>(id) -> void</code>
- <code title="put /api/warehouse/incominggoods-v1/{id}/void">client.api.warehouse.incominggoodsV1.<a href="./src/resources/api/warehouse/incominggoods-v1.ts">updateVoid</a>(id) -> void</code>

### ProductionordersV1

Types:

- <code><a href="./src/resources/api/warehouse/productionorders-v1.ts">WarehousePackageItem</a></code>
- <code><a href="./src/resources/api/warehouse/productionorders-v1.ts">WarehouseProductionOrder</a></code>

Methods:

- <code title="get /api/warehouse/productionorders-v1/{id}">client.api.warehouse.productionordersV1.<a href="./src/resources/api/warehouse/productionorders-v1.ts">retrieve</a>(id) -> WarehouseProductionOrder</code>
- <code title="put /api/warehouse/productionorders-v1/{id}">client.api.warehouse.productionordersV1.<a href="./src/resources/api/warehouse/productionorders-v1.ts">update</a>(pathID, { ...params }) -> WarehouseProductionOrder</code>
- <code title="post /api/warehouse/productionorders-v1">client.api.warehouse.productionordersV1.<a href="./src/resources/api/warehouse/productionorders-v1.ts">productionordersV1</a>({ ...params }) -> WarehouseProductionOrder</code>
- <code title="get /api/warehouse/productionorders-v1">client.api.warehouse.productionordersV1.<a href="./src/resources/api/warehouse/productionorders-v1.ts">retrieveProductionordersV1</a>({ ...params }) -> WarehouseProductionOrder</code>

### PurchaseordersV1

Types:

- <code><a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">WarehouseDocumentReference</a></code>
- <code><a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">WarehousePartialPurchaseOrder</a></code>
- <code><a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">WarehousePurchaseOrder</a></code>
- <code><a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">WarehousePurchaseOrderRowNote</a></code>
- <code><a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">PurchaseordersV1RetrieveCsvResponse</a></code>
- <code><a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">PurchaseordersV1UpdateDropshipcompleteResponse</a></code>

Methods:

- <code title="get /api/warehouse/purchaseorders-v1/{id}">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">retrieve</a>(id, { ...params }) -> WarehousePurchaseOrder</code>
- <code title="put /api/warehouse/purchaseorders-v1/{id}">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">update</a>(pathID, { ...params }) -> WarehousePurchaseOrder</code>
- <code title="post /api/warehouse/purchaseorders-v1">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">purchaseordersV1</a>({ ...params }) -> WarehousePurchaseOrder</code>
- <code title="get /api/warehouse/purchaseorders-v1/csv">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">retrieveCsv</a>({ ...params }) -> string</code>
- <code title="get /api/warehouse/purchaseorders-v1/{id}/matches">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">retrieveMatches</a>(id) -> WarehouseDocumentReference</code>
- <code title="get /api/warehouse/purchaseorders-v1/{id}/notes">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">retrieveNotes</a>(id) -> WarehousePurchaseOrderRowNote</code>
- <code title="get /api/warehouse/purchaseorders-v1">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">retrievePurchaseordersV1</a>({ ...params }) -> WarehousePurchaseOrder</code>
- <code title="post /api/warehouse/purchaseorders-v1/{id}/send">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">send</a>(id, { ...params }) -> void</code>
- <code title="post /api/warehouse/purchaseorders-v1/sendpurchaseorders">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">sendpurchaseorders</a>([ ...body ]) -> void</code>
- <code title="put /api/warehouse/purchaseorders-v1/{id}/complete">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">updateComplete</a>(id) -> void</code>
- <code title="put /api/warehouse/purchaseorders-v1/{id}/dropshipcomplete">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">updateDropshipcomplete</a>(id) -> PurchaseordersV1UpdateDropshipcompleteResponse</code>
- <code title="patch /api/warehouse/purchaseorders-v1/{id}/partial">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">updatePartial</a>(id, { ...params }) -> WarehousePartialPurchaseOrder</code>
- <code title="put /api/warehouse/purchaseorders-v1/{id}/void">client.api.warehouse.purchaseordersV1.<a href="./src/resources/api/warehouse/purchaseorders-v1/purchaseorders-v1.ts">updateVoid</a>(id) -> void</code>

#### Response

Types:

- <code><a href="./src/resources/api/warehouse/purchaseorders-v1/response.ts">WarehouseResponseStateChange</a></code>

Methods:

- <code title="put /api/warehouse/purchaseorders-v1/{id}/response">client.api.warehouse.purchaseordersV1.response.<a href="./src/resources/api/warehouse/purchaseorders-v1/response.ts">create</a>(id, { ...params }) -> WarehousePurchaseOrder</code>

### StatusV1

Types:

- <code><a href="./src/resources/api/warehouse/status-v1.ts">StatusV1RetrieveStockbalanceResponse</a></code>

Methods:

- <code title="get /api/warehouse/status-v1/stockbalance">client.api.warehouse.statusV1.<a href="./src/resources/api/warehouse/status-v1.ts">retrieveStockbalance</a>({ ...params }) -> StatusV1RetrieveStockbalanceResponse</code>

### StockpointsV1

Types:

- <code><a href="./src/resources/api/warehouse/stockpoints-v1.ts">WarehouseStockLocation</a></code>
- <code><a href="./src/resources/api/warehouse/stockpoints-v1.ts">WarehouseStockPoint</a></code>

Methods:

- <code title="get /api/warehouse/stockpoints-v1/{id}">client.api.warehouse.stockpointsV1.<a href="./src/resources/api/warehouse/stockpoints-v1.ts">retrieve</a>(id) -> WarehouseStockPoint</code>
- <code title="put /api/warehouse/stockpoints-v1/{id}">client.api.warehouse.stockpointsV1.<a href="./src/resources/api/warehouse/stockpoints-v1.ts">update</a>(pathID, { ...params }) -> WarehouseStockPoint</code>
- <code title="delete /api/warehouse/stockpoints-v1/{id}">client.api.warehouse.stockpointsV1.<a href="./src/resources/api/warehouse/stockpoints-v1.ts">delete</a>(id) -> WarehouseStockPoint</code>
- <code title="get /api/warehouse/stockpoints-v1/multi">client.api.warehouse.stockpointsV1.<a href="./src/resources/api/warehouse/stockpoints-v1.ts">retrieveMulti</a>({ ...params }) -> WarehouseStockPoint</code>
- <code title="get /api/warehouse/stockpoints-v1/{id}/stocklocations">client.api.warehouse.stockpointsV1.<a href="./src/resources/api/warehouse/stockpoints-v1.ts">retrieveStocklocations</a>(id, { ...params }) -> WarehouseStockLocation</code>
- <code title="get /api/warehouse/stockpoints-v1">client.api.warehouse.stockpointsV1.<a href="./src/resources/api/warehouse/stockpoints-v1.ts">retrieveStockpointsV1</a>({ ...params }) -> WarehouseStockPoint</code>
- <code title="post /api/warehouse/stockpoints-v1">client.api.warehouse.stockpointsV1.<a href="./src/resources/api/warehouse/stockpoints-v1.ts">stockpointsV1</a>({ ...params }) -> WarehouseStockPoint</code>

### StocktakingV1

Types:

- <code><a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">WarehouseStockTaking</a></code>
- <code><a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">WarehouseStockTakingRow</a></code>
- <code><a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">WarehouseStockTakingSortParams</a></code>
- <code><a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">StocktakingV1AddrowsResponse</a></code>

Methods:

- <code title="get /api/warehouse/stocktaking-v1/{id}">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">retrieve</a>(id) -> WarehouseStockTaking</code>
- <code title="put /api/warehouse/stocktaking-v1/{id}">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">update</a>(pathID, { ...params }) -> WarehouseStockTaking</code>
- <code title="delete /api/warehouse/stocktaking-v1/{id}">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">delete</a>(id) -> void</code>
- <code title="post /api/warehouse/stocktaking-v1/{id}/addrows">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">addrows</a>(id, { ...params }) -> StocktakingV1AddrowsResponse</code>
- <code title="get /api/warehouse/stocktaking-v1/{id}/candidates">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">retrieveCandidates</a>(id, { ...params }) -> WarehouseStockTakingRow</code>
- <code title="get /api/warehouse/stocktaking-v1">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">retrieveStocktakingV1</a>({ ...params }) -> WarehouseStockTaking</code>
- <code title="post /api/warehouse/stocktaking-v1">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">stocktakingV1</a>({ ...params }) -> WarehouseStockTaking</code>
- <code title="put /api/warehouse/stocktaking-v1/{id}/release">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">updateRelease</a>(id) -> void</code>
- <code title="put /api/warehouse/stocktaking-v1/{id}/void">client.api.warehouse.stocktakingV1.<a href="./src/resources/api/warehouse/stocktaking-v1/stocktaking-v1.ts">updateVoid</a>(id) -> void</code>

#### Rows

Types:

- <code><a href="./src/resources/api/warehouse/stocktaking-v1/rows.ts">RowDeleteResponse</a></code>
- <code><a href="./src/resources/api/warehouse/stocktaking-v1/rows.ts">RowDeleteAllResponse</a></code>

Methods:

- <code title="post /api/warehouse/stocktaking-v1/{id}/rows">client.api.warehouse.stocktakingV1.rows.<a href="./src/resources/api/warehouse/stocktaking-v1/rows.ts">create</a>(id, [ ...body ]) -> void</code>
- <code title="get /api/warehouse/stocktaking-v1/{id}/rows">client.api.warehouse.stocktakingV1.rows.<a href="./src/resources/api/warehouse/stocktaking-v1/rows.ts">list</a>(id, { ...params }) -> WarehouseStockTakingRow</code>
- <code title="delete /api/warehouse/stocktaking-v1/{id}/rows/{rowId}">client.api.warehouse.stocktakingV1.rows.<a href="./src/resources/api/warehouse/stocktaking-v1/rows.ts">delete</a>(rowID, { ...params }) -> RowDeleteResponse</code>
- <code title="delete /api/warehouse/stocktaking-v1/{id}/rows">client.api.warehouse.stocktakingV1.rows.<a href="./src/resources/api/warehouse/stocktaking-v1/rows.ts">deleteAll</a>(id, { ...params }) -> RowDeleteAllResponse</code>

### StocktransferV1

Types:

- <code><a href="./src/resources/api/warehouse/stocktransfer-v1.ts">WarehouseStockTransferDocument</a></code>

Methods:

- <code title="get /api/warehouse/stocktransfer-v1/{id}">client.api.warehouse.stocktransferV1.<a href="./src/resources/api/warehouse/stocktransfer-v1.ts">retrieve</a>(id) -> WarehouseStockTransferDocument</code>
- <code title="put /api/warehouse/stocktransfer-v1/{id}">client.api.warehouse.stocktransferV1.<a href="./src/resources/api/warehouse/stocktransfer-v1.ts">update</a>(pathID, { ...params }) -> WarehouseStockTransferDocument</code>
- <code title="post /api/warehouse/stocktransfer-v1">client.api.warehouse.stocktransferV1.<a href="./src/resources/api/warehouse/stocktransfer-v1.ts">stocktransferV1</a>({ ...params }) -> WarehouseStockTransferDocument</code>
- <code title="put /api/warehouse/stocktransfer-v1/{id}/release">client.api.warehouse.stocktransferV1.<a href="./src/resources/api/warehouse/stocktransfer-v1.ts">updateRelease</a>(id) -> void</code>
- <code title="put /api/warehouse/stocktransfer-v1/{id}/void">client.api.warehouse.stocktransferV1.<a href="./src/resources/api/warehouse/stocktransfer-v1.ts">updateVoid</a>(id, { ...params }) -> void</code>
