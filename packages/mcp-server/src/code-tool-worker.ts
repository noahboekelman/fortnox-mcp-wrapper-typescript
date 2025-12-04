// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import path from 'node:path';
import util from 'node:util';

import Fuse from 'fuse.js';
import ts from 'typescript';

import { WorkerInput, WorkerSuccess, WorkerError } from './code-tool-types';
import { FortnoxMcpWrapper } from 'fortnox-mcp-wrapper';

function getRunFunctionSource(code: string): {
  type: 'declaration' | 'expression';
  client: string | undefined;
  code: string;
} | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);
  const printer = ts.createPrinter();

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return {
          type: 'declaration',
          client: statement.parameters[0]?.name.getText(),
          code: printer.printNode(ts.EmitHint.Unspecified, statement.body!, sourceFile),
        };
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (
          ts.isIdentifier(declaration.name) &&
          declaration.name.text === 'run' &&
          // Check if it's initialized with a function
          declaration.initializer &&
          (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
        ) {
          return {
            type: 'expression',
            client: declaration.initializer.parameters[0]?.name.getText(),
            code: printer.printNode(ts.EmitHint.Unspecified, declaration.initializer, sourceFile),
          };
        }
      }
    }
  }

  return null;
}

function getTSDiagnostics(code: string): string[] {
  const functionSource = getRunFunctionSource(code)!;
  const codeWithImport = [
    'import { FortnoxMcpWrapper } from "fortnox-mcp-wrapper";',
    functionSource.type === 'declaration' ?
      `async function run(${functionSource.client}: FortnoxMcpWrapper)`
    : `const run: (${functionSource.client}: FortnoxMcpWrapper) => Promise<unknown> =`,
    functionSource.code,
  ].join('\n');
  const sourcePath = path.resolve('code.ts');
  const ast = ts.createSourceFile(sourcePath, codeWithImport, ts.ScriptTarget.Latest, true);
  const options = ts.getDefaultCompilerOptions();
  options.target = ts.ScriptTarget.Latest;
  options.module = ts.ModuleKind.NodeNext;
  options.moduleResolution = ts.ModuleResolutionKind.NodeNext;
  const host = ts.createCompilerHost(options, true);
  const newHost: typeof host = {
    ...host,
    getSourceFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return ast;
      }
      return host.getSourceFile(...args);
    },
    readFile: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return codeWithImport;
      }
      return host.readFile(...args);
    },
    fileExists: (...args) => {
      if (path.resolve(args[0]) === sourcePath) {
        return true;
      }
      return host.fileExists(...args);
    },
  };
  const program = ts.createProgram({
    options,
    rootNames: [sourcePath],
    host: newHost,
  });
  const diagnostics = ts.getPreEmitDiagnostics(program, ast);
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
    if (!d.file || !d.start) return `- ${message}`;
    const { line: tsLine } = ts.getLineAndCharacterOfPosition(d.file, d.start);
    // We add two lines in the beginning, for the client import and the function declaration.
    // So the actual (zero-based) line number is tsLine - 2.
    const lineNumber = tsLine - 2;
    const line = code.split('\n').at(lineNumber)?.trim();
    return line ? `- ${message}\n    at line ${lineNumber + 1}\n      ${line}` : `- ${message}`;
  });
}

const fuse = new Fuse(
  [
    'client.number3.listAccountCharts',
    'client.number3.listPrintTemplates',
    'client.number3.retrieveCompanyInformation',
    'client.number3.retrieveEuVatLimitRegulation',
    'client.number3.retrieveSieFile',
    'client.number3.retrieveUserInformation',
    'client.number3.retrieveVacationDebtBasis',
    'client.number3.absencetransactions.create',
    'client.number3.absencetransactions.delete',
    'client.number3.absencetransactions.list',
    'client.number3.absencetransactions.retrieve',
    'client.number3.absencetransactions.retrieveByDateAndCode',
    'client.number3.absencetransactions.update',
    'client.number3.accounts.create',
    'client.number3.accounts.delete',
    'client.number3.accounts.list',
    'client.number3.accounts.retrieve',
    'client.number3.accounts.update',
    'client.number3.archive.deleteFile',
    'client.number3.archive.removeFiles',
    'client.number3.archive.retrieve',
    'client.number3.archive.retrieveFile',
    'client.number3.archive.uploadFile',
    'client.number3.articlefileconnections.create',
    'client.number3.articlefileconnections.list',
    'client.number3.articlefileconnections.remove',
    'client.number3.articlefileconnections.retrieve',
    'client.number3.articles.create',
    'client.number3.articles.delete',
    'client.number3.articles.list',
    'client.number3.articles.retrieve',
    'client.number3.articles.update',
    'client.number3.articleurlconnections.create',
    'client.number3.articleurlconnections.list',
    'client.number3.articleurlconnections.remove',
    'client.number3.articleurlconnections.retrieve',
    'client.number3.articleurlconnections.update',
    'client.number3.assetfileconnections.create',
    'client.number3.assetfileconnections.delete',
    'client.number3.assetfileconnections.list',
    'client.number3.assets.changeOb',
    'client.number3.assets.create',
    'client.number3.assets.delete',
    'client.number3.assets.depreciate',
    'client.number3.assets.list',
    'client.number3.assets.listDepreciations',
    'client.number3.assets.retrieve',
    'client.number3.assets.scrap',
    'client.number3.assets.sell',
    'client.number3.assets.update',
    'client.number3.assets.writeDown',
    'client.number3.assets.writeUp',
    'client.number3.assets.types.create',
    'client.number3.assets.types.delete',
    'client.number3.assets.types.list',
    'client.number3.assets.types.retrieve',
    'client.number3.assets.types.update',
    'client.number3.attendancetransactions.create',
    'client.number3.attendancetransactions.delete',
    'client.number3.attendancetransactions.list',
    'client.number3.attendancetransactions.retrieve',
    'client.number3.attendancetransactions.retrieveByDateAndCode',
    'client.number3.attendancetransactions.update',
    'client.number3.contractaccruals.create',
    'client.number3.contractaccruals.delete',
    'client.number3.contractaccruals.list',
    'client.number3.contractaccruals.retrieve',
    'client.number3.contractaccruals.update',
    'client.number3.contracts.create',
    'client.number3.contracts.createInvoice',
    'client.number3.contracts.finish',
    'client.number3.contracts.increaseInvoiceCount',
    'client.number3.contracts.list',
    'client.number3.contracts.retrieve',
    'client.number3.contracts.update',
    'client.number3.contracttemplates.create',
    'client.number3.contracttemplates.list',
    'client.number3.contracttemplates.retrieve',
    'client.number3.contracttemplates.update',
    'client.number3.costcenters.create',
    'client.number3.costcenters.delete',
    'client.number3.costcenters.list',
    'client.number3.costcenters.retrieve',
    'client.number3.costcenters.update',
    'client.number3.currencies.create',
    'client.number3.currencies.delete',
    'client.number3.currencies.list',
    'client.number3.currencies.retrieve',
    'client.number3.currencies.update',
    'client.number3.customerreferences.create',
    'client.number3.customerreferences.delete',
    'client.number3.customerreferences.list',
    'client.number3.customerreferences.retrieve',
    'client.number3.customerreferences.update',
    'client.number3.customers.create',
    'client.number3.customers.delete',
    'client.number3.customers.list',
    'client.number3.customers.retrieve',
    'client.number3.customers.update',
    'client.number3.emailsenders.list',
    'client.number3.emailsenders.trusted.add',
    'client.number3.emailsenders.trusted.delete',
    'client.number3.employees.create',
    'client.number3.employees.list',
    'client.number3.employees.retrieve',
    'client.number3.employees.update',
    'client.number3.expenses.create',
    'client.number3.expenses.list',
    'client.number3.expenses.retrieve',
    'client.number3.financialyears.create',
    'client.number3.financialyears.list',
    'client.number3.financialyears.retrieve',
    'client.number3.inbox.remove',
    'client.number3.inbox.retrieve',
    'client.number3.inbox.retrieveFile',
    'client.number3.inbox.upload',
    'client.number3.invoiceaccruals.create',
    'client.number3.invoiceaccruals.list',
    'client.number3.invoiceaccruals.remove',
    'client.number3.invoiceaccruals.retrieve',
    'client.number3.invoiceaccruals.update',
    'client.number3.invoicepayments.bookkeep',
    'client.number3.invoicepayments.create',
    'client.number3.invoicepayments.list',
    'client.number3.invoicepayments.remove',
    'client.number3.invoicepayments.retrieve',
    'client.number3.invoicepayments.update',
    'client.number3.invoices.bookkeep',
    'client.number3.invoices.cancel',
    'client.number3.invoices.create',
    'client.number3.invoices.credit',
    'client.number3.invoices.list',
    'client.number3.invoices.preview',
    'client.number3.invoices.print',
    'client.number3.invoices.printReminder',
    'client.number3.invoices.retrieve',
    'client.number3.invoices.sendEinvoice',
    'client.number3.invoices.sendEmail',
    'client.number3.invoices.sendEprint',
    'client.number3.invoices.setDone',
    'client.number3.invoices.setSent',
    'client.number3.invoices.update',
    'client.number3.labels.create',
    'client.number3.labels.delete',
    'client.number3.labels.list',
    'client.number3.labels.update',
    'client.number3.modesofpayments.create',
    'client.number3.modesofpayments.delete',
    'client.number3.modesofpayments.list',
    'client.number3.modesofpayments.retrieve',
    'client.number3.modesofpayments.update',
    'client.number3.noxfinansinvoices.pause',
    'client.number3.noxfinansinvoices.reportPayment',
    'client.number3.noxfinansinvoices.retrieve',
    'client.number3.noxfinansinvoices.send',
    'client.number3.noxfinansinvoices.stop',
    'client.number3.noxfinansinvoices.takeFees',
    'client.number3.noxfinansinvoices.unpause',
    'client.number3.offers.cancel',
    'client.number3.offers.create',
    'client.number3.offers.createInvoice',
    'client.number3.offers.createOrder',
    'client.number3.offers.list',
    'client.number3.offers.preview',
    'client.number3.offers.print',
    'client.number3.offers.retrieve',
    'client.number3.offers.sendEmail',
    'client.number3.offers.setSent',
    'client.number3.offers.update',
    'client.number3.orders.cancel',
    'client.number3.orders.create',
    'client.number3.orders.createInvoice',
    'client.number3.orders.list',
    'client.number3.orders.preview',
    'client.number3.orders.print',
    'client.number3.orders.retrieve',
    'client.number3.orders.sendEmail',
    'client.number3.orders.setSent',
    'client.number3.orders.update',
    'client.number3.predefinedaccounts.list',
    'client.number3.predefinedaccounts.retrieve',
    'client.number3.predefinedaccounts.update',
    'client.number3.predefinedvoucherseries.list',
    'client.number3.predefinedvoucherseries.retrieve',
    'client.number3.predefinedvoucherseries.update',
    'client.number3.pricelists.create',
    'client.number3.pricelists.list',
    'client.number3.pricelists.retrieve',
    'client.number3.pricelists.update',
    'client.number3.prices.create',
    'client.number3.prices.delete',
    'client.number3.prices.list',
    'client.number3.prices.retrieve',
    'client.number3.prices.retrieveFirst',
    'client.number3.prices.retrieveSublist',
    'client.number3.prices.update',
    'client.number3.prices.updateFirst',
    'client.number3.projects.create',
    'client.number3.projects.delete',
    'client.number3.projects.list',
    'client.number3.projects.retrieve',
    'client.number3.projects.update',
    'client.number3.salarytransactions.create',
    'client.number3.salarytransactions.delete',
    'client.number3.salarytransactions.list',
    'client.number3.salarytransactions.retrieve',
    'client.number3.salarytransactions.update',
    'client.number3.scheduletimes.resetDay',
    'client.number3.scheduletimes.retrieve',
    'client.number3.scheduletimes.update',
    'client.number3.settings.retrieveCompany',
    'client.number3.settings.retrieveLockedPeriod',
    'client.number3.supplierinvoiceaccruals.create',
    'client.number3.supplierinvoiceaccruals.delete',
    'client.number3.supplierinvoiceaccruals.list',
    'client.number3.supplierinvoiceaccruals.retrieve',
    'client.number3.supplierinvoiceaccruals.update',
    'client.number3.supplierinvoiceexternalurlconnections.create',
    'client.number3.supplierinvoiceexternalurlconnections.delete',
    'client.number3.supplierinvoiceexternalurlconnections.retrieve',
    'client.number3.supplierinvoiceexternalurlconnections.update',
    'client.number3.supplierinvoicefileconnections.create',
    'client.number3.supplierinvoicefileconnections.delete',
    'client.number3.supplierinvoicefileconnections.list',
    'client.number3.supplierinvoicefileconnections.retrieve',
    'client.number3.supplierinvoicepayments.bookkeep',
    'client.number3.supplierinvoicepayments.create',
    'client.number3.supplierinvoicepayments.delete',
    'client.number3.supplierinvoicepayments.list',
    'client.number3.supplierinvoicepayments.retrieve',
    'client.number3.supplierinvoicepayments.update',
    'client.number3.supplierinvoices.create',
    'client.number3.supplierinvoices.list',
    'client.number3.supplierinvoices.retrieve',
    'client.number3.supplierinvoices.update',
    'client.number3.supplierinvoices.updateApprovalbookkeep',
    'client.number3.supplierinvoices.updateApprovalpayment',
    'client.number3.supplierinvoices.updateBookkeep',
    'client.number3.supplierinvoices.updateCancel',
    'client.number3.supplierinvoices.updateCredit',
    'client.number3.suppliers.create',
    'client.number3.suppliers.list',
    'client.number3.suppliers.retrieve',
    'client.number3.suppliers.update',
    'client.number3.taxreductions.create',
    'client.number3.taxreductions.delete',
    'client.number3.taxreductions.list',
    'client.number3.taxreductions.retrieve',
    'client.number3.taxreductions.update',
    'client.number3.termsofdeliveries.create',
    'client.number3.termsofdeliveries.list',
    'client.number3.termsofdeliveries.retrieve',
    'client.number3.termsofdeliveries.update',
    'client.number3.termsofpayments.create',
    'client.number3.termsofpayments.delete',
    'client.number3.termsofpayments.list',
    'client.number3.termsofpayments.retrieve',
    'client.number3.termsofpayments.update',
    'client.number3.units.create',
    'client.number3.units.delete',
    'client.number3.units.list',
    'client.number3.units.retrieve',
    'client.number3.units.update',
    'client.number3.voucherfileconnections.create',
    'client.number3.voucherfileconnections.delete',
    'client.number3.voucherfileconnections.list',
    'client.number3.voucherfileconnections.retrieve',
    'client.number3.vouchers.create',
    'client.number3.vouchers.list',
    'client.number3.vouchers.retrieve',
    'client.number3.vouchers.sublist.list',
    'client.number3.vouchers.sublist.retrieve',
    'client.number3.voucherseries.create',
    'client.number3.voucherseries.list',
    'client.number3.voucherseries.retrieve',
    'client.number3.voucherseries.update',
    'client.number3.wayofdeliveries.create',
    'client.number3.wayofdeliveries.delete',
    'client.number3.wayofdeliveries.list',
    'client.number3.wayofdeliveries.retrieve',
    'client.number3.wayofdeliveries.update',
    'client.api.fileattachments.attachmentsV1.count',
    'client.api.fileattachments.attachmentsV1.create',
    'client.api.fileattachments.attachmentsV1.delete',
    'client.api.fileattachments.attachmentsV1.list',
    'client.api.fileattachments.attachmentsV1.update',
    'client.api.fileattachments.attachmentsV1.validate',
    'client.api.integrationDeveloper.getSalesInfo',
    'client.api.integrationDeveloper.listRatings',
    'client.api.integrationDeveloper.users.getUserInfo',
    'client.api.integrationPartner.apps.salesV1.getSalesInfo',
    'client.api.integrationPartner.apps.salesV1.getSalesInfoForTenant',
    'client.api.time.getArticles',
    'client.api.time.getRegistrations',
    'client.api.warehouse.retrieveTenantsV4',
    'client.api.warehouse.deliveriesV1.retrieveDeliveriesV1',
    'client.api.warehouse.deliveriesV1.inbounddeliveries.create',
    'client.api.warehouse.deliveriesV1.inbounddeliveries.retrieve',
    'client.api.warehouse.deliveriesV1.inbounddeliveries.update',
    'client.api.warehouse.deliveriesV1.inbounddeliveries.updateRelease',
    'client.api.warehouse.deliveriesV1.inbounddeliveries.updateVoid',
    'client.api.warehouse.deliveriesV1.outbounddeliveries.create',
    'client.api.warehouse.deliveriesV1.outbounddeliveries.retrieve',
    'client.api.warehouse.deliveriesV1.outbounddeliveries.update',
    'client.api.warehouse.deliveriesV1.outbounddeliveries.updateRelease',
    'client.api.warehouse.deliveriesV1.outbounddeliveries.updateVoid',
    'client.api.warehouse.documentdeliveries.custom.documenttypesV1.documenttypesV1',
    'client.api.warehouse.documentdeliveries.custom.documenttypesV1.retrieve',
    'client.api.warehouse.documentdeliveries.custom.documenttypesV1.retrieveDocumenttypesV1',
    'client.api.warehouse.documentdeliveries.custom.inboundV1.retrieve',
    'client.api.warehouse.documentdeliveries.custom.inboundV1.update',
    'client.api.warehouse.documentdeliveries.custom.inboundV1.updateRelease',
    'client.api.warehouse.documentdeliveries.custom.inboundV1.updateVoid',
    'client.api.warehouse.documentdeliveries.custom.outboundV1.retrieve',
    'client.api.warehouse.documentdeliveries.custom.outboundV1.update',
    'client.api.warehouse.documentdeliveries.custom.outboundV1.updateRelease',
    'client.api.warehouse.documentdeliveries.custom.outboundV1.updateVoid',
    'client.api.warehouse.incominggoodsV1.incominggoodsV1',
    'client.api.warehouse.incominggoodsV1.retrieve',
    'client.api.warehouse.incominggoodsV1.retrieveIncominggoodsV1',
    'client.api.warehouse.incominggoodsV1.update',
    'client.api.warehouse.incominggoodsV1.updateCompleted',
    'client.api.warehouse.incominggoodsV1.updateRelease',
    'client.api.warehouse.incominggoodsV1.updateVoid',
    'client.api.warehouse.productionordersV1.productionordersV1',
    'client.api.warehouse.productionordersV1.retrieve',
    'client.api.warehouse.productionordersV1.retrieveProductionordersV1',
    'client.api.warehouse.productionordersV1.update',
    'client.api.warehouse.purchaseordersV1.purchaseordersV1',
    'client.api.warehouse.purchaseordersV1.retrieve',
    'client.api.warehouse.purchaseordersV1.retrieveCsv',
    'client.api.warehouse.purchaseordersV1.retrieveMatches',
    'client.api.warehouse.purchaseordersV1.retrieveNotes',
    'client.api.warehouse.purchaseordersV1.retrievePurchaseordersV1',
    'client.api.warehouse.purchaseordersV1.send',
    'client.api.warehouse.purchaseordersV1.sendpurchaseorders',
    'client.api.warehouse.purchaseordersV1.update',
    'client.api.warehouse.purchaseordersV1.updateComplete',
    'client.api.warehouse.purchaseordersV1.updateDropshipcomplete',
    'client.api.warehouse.purchaseordersV1.updatePartial',
    'client.api.warehouse.purchaseordersV1.updateVoid',
    'client.api.warehouse.purchaseordersV1.response.create',
    'client.api.warehouse.statusV1.retrieveStockbalance',
    'client.api.warehouse.stockpointsV1.delete',
    'client.api.warehouse.stockpointsV1.retrieve',
    'client.api.warehouse.stockpointsV1.retrieveMulti',
    'client.api.warehouse.stockpointsV1.retrieveStocklocations',
    'client.api.warehouse.stockpointsV1.retrieveStockpointsV1',
    'client.api.warehouse.stockpointsV1.stockpointsV1',
    'client.api.warehouse.stockpointsV1.update',
    'client.api.warehouse.stocktakingV1.addrows',
    'client.api.warehouse.stocktakingV1.delete',
    'client.api.warehouse.stocktakingV1.retrieve',
    'client.api.warehouse.stocktakingV1.retrieveCandidates',
    'client.api.warehouse.stocktakingV1.retrieveStocktakingV1',
    'client.api.warehouse.stocktakingV1.stocktakingV1',
    'client.api.warehouse.stocktakingV1.update',
    'client.api.warehouse.stocktakingV1.updateRelease',
    'client.api.warehouse.stocktakingV1.updateVoid',
    'client.api.warehouse.stocktakingV1.rows.create',
    'client.api.warehouse.stocktakingV1.rows.delete',
    'client.api.warehouse.stocktakingV1.rows.deleteAll',
    'client.api.warehouse.stocktakingV1.rows.list',
    'client.api.warehouse.stocktransferV1.retrieve',
    'client.api.warehouse.stocktransferV1.stocktransferV1',
    'client.api.warehouse.stocktransferV1.update',
    'client.api.warehouse.stocktransferV1.updateRelease',
    'client.api.warehouse.stocktransferV1.updateVoid',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as WorkerInput;

  const runFunctionSource = code ? getRunFunctionSource(code) : null;
  if (!runFunctionSource) {
    const message =
      code ?
        'The code is missing a top-level `run` function.'
      : 'The code argument is missing. Provide one containing a top-level `run` function.';
    return Response.json(
      {
        message: `${message} Write code within this template:\n\n\`\`\`\nasync function run(client) {\n  // Fill this out\n}\n\`\`\``,
        logLines: [],
        errLines: [],
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const diagnostics = getTSDiagnostics(code);
  if (diagnostics.length > 0) {
    return Response.json(
      {
        message: `The code contains TypeScript diagnostics:\n${diagnostics.join('\n')}`,
        logLines: [],
        errLines: [],
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new FortnoxMcpWrapper({
    ...opts,
  });

  const logLines: string[] = [];
  const errLines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      logLines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      errLines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      result,
      logLines,
      errLines,
    } satisfies WorkerSuccess);
  } catch (e) {
    return Response.json(
      {
        message: parseError(code, e),
        logLines,
        errLines,
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
