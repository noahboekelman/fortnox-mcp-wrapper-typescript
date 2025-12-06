// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import {
  Metadata,
  asErrorResult,
  asTextContentResult,
} from 'fortnox_mcp_wrapper/fortnox-mcp-api/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

export const metadata: Metadata = {
  resource: 'number_3.employees',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/3/employees',
  operationId: 'create_17',
};

export const tool: Tool = {
  name: 'create_number_3_employees',
  description:
    "EmployeeId is optional. If not supplied the program will generate a unique id.\n \n VacationDaysSaved and all registered and pending vacationdays are read only.\n \n Only one of DatedSchedules and ScheduleId may be supplied. If DatedSchedules are supplied\n it must have one and only one record where FirstDay = '1970-01-01'.\n All FirstDay values must greater or equal to '1970-01-01' and unique.\n\n If DatedWages is supplied neither MonthlySalary nor HourlyPay may be supplied. If\n MonthlySalary or HourlyPay are supplied, DatedWages may not be supplied.\n If DatedWages are supplied it must have one and only one record where FirstDay = '1970-01-01'.\n All FirstDay values must greater or equal to '1970-01-01' and unique.",
  inputSchema: {
    type: 'object',
    properties: {
      Employee: {
        $ref: '#/$defs/fortnox_employee',
      },
    },
    required: [],
    $defs: {
      fortnox_employee: {
        type: 'object',
        properties: {
          Email: {
            type: 'string',
          },
          FirstName: {
            type: 'string',
          },
          LastName: {
            type: 'string',
          },
          AbsenceHoursNonVacationBased: {
            type: 'number',
          },
          AbsenceHoursVacationBased: {
            type: 'number',
          },
          AbsenceWorkdaysNonVacationBased: {
            type: 'number',
          },
          AbsenceWorkdaysVacationBased: {
            type: 'number',
          },
          Address1: {
            type: 'string',
          },
          Address2: {
            type: 'string',
          },
          ATFValue: {
            type: 'number',
          },
          ATKValue: {
            type: 'number',
          },
          AutoNonRecurringTax: {
            type: 'boolean',
          },
          AverageHourlyWage: {
            type: 'string',
          },
          AverageWeeklyHours: {
            type: 'string',
          },
          BankAccountNo: {
            type: 'string',
          },
          City: {
            type: 'string',
          },
          ClearingNo: {
            type: 'string',
          },
          CostCenter: {
            type: 'string',
          },
          Country: {
            type: 'string',
          },
          CurrentCompBalance: {
            type: 'number',
          },
          CurrentFlexBalance: {
            type: 'number',
          },
          DatedSchedules: {
            type: 'array',
            items: {
              $ref: '#/$defs/dated_schedule',
            },
          },
          DatedWages: {
            type: 'array',
            items: {
              $ref: '#/$defs/dated_wage',
            },
          },
          EmployedTo: {
            type: 'string',
            format: 'date',
          },
          EmployeeCategories: {
            type: 'array',
            items: {
              $ref: '#/$defs/employee_category',
            },
          },
          EmployeeChildren: {
            type: 'array',
            items: {
              $ref: '#/$defs/employee_child',
            },
          },
          EmployeeId: {
            type: 'string',
          },
          EmploymentDate: {
            type: 'string',
            format: 'date',
          },
          EmploymentForm: {
            type: 'string',
            enum: ['TV', 'PRO', 'TID', 'SVT', 'VIK', 'PRJ', 'PRA', 'FER', 'SES', 'NEJ'],
          },
          ForaType: {
            type: 'string',
            enum: [
              'A',
              'A51',
              'A52',
              'A53',
              'A54',
              'A55',
              'A56',
              'A57',
              'A58',
              'A59',
              'A60',
              'A61',
              'A62',
              'A63',
              'A64',
              'A65',
              'A66',
              'A67',
              'A68',
              'A69',
              'A70',
              'A71',
              'A72',
              'A73',
              'A74',
              'A75',
              'A76',
              'A77',
              'A78',
              'A79',
              'A80',
              'A81',
              'A82',
              'A83',
              'A84',
              'A85',
              'A86',
              'A3',
              'A91',
              'A92',
              'A93',
              'A11',
              'A12',
              'A13',
              'A14',
              'A15',
              'A16',
              'A17',
              'A18',
              'A19',
              'A20',
              'A21',
              'A22',
              'A23',
              'A24',
              'A25',
              'A26',
              'A27',
              'A28',
              'A29',
              'A30',
              'A41',
              'A42',
              'A43',
              'A44',
              'A45',
              'A46',
              'A47',
              'A48',
              'T',
              'T6',
              '-',
            ],
          },
          FullName: {
            type: 'string',
          },
          FullTimeEquivalent: {
            type: 'number',
          },
          HourlyPay: {
            type: 'string',
          },
          Inactive: {
            type: 'boolean',
          },
          InitialComp: {
            type: 'number',
          },
          InitialFlex: {
            type: 'number',
          },
          JobTitle: {
            type: 'string',
          },
          MonthlySalary: {
            type: 'string',
          },
          NonRecurringTax: {
            type: 'string',
          },
          NonVacationBasedCalendarDaysPartial: {
            type: 'number',
          },
          NonVacationBasedCalendarDaysWhole: {
            type: 'number',
          },
          OpeningSalaries: {
            type: 'array',
            items: {
              $ref: '#/$defs/opening_salary',
            },
          },
          PayslipType: {
            type: 'string',
            enum: ['pdf', 'digital', 'kivra'],
          },
          PersonalIdentityNumber: {
            type: 'string',
          },
          PersonelType: {
            type: 'string',
            enum: ['TJM', 'ARB'],
          },
          Phone1: {
            type: 'string',
          },
          Phone2: {
            type: 'string',
          },
          PostCode: {
            type: 'string',
          },
          PreliminaryTaxDeducted: {
            type: 'number',
          },
          Project: {
            type: 'string',
          },
          SalaryForm: {
            type: 'string',
            enum: ['MAN', 'TIM'],
          },
          ScheduleId: {
            type: 'string',
          },
          TaxAllowance: {
            type: 'string',
            enum: ['HUV', 'EXT', 'TMP', 'STU', 'EJ', '???'],
          },
          TaxColumn: {
            type: 'integer',
          },
          TaxTable: {
            type: 'string',
          },
          VacationBasedAttendanceDays: {
            type: 'number',
          },
          VacationBasedAttendanceHours: {
            type: 'number',
          },
          VacationBasedCalendarDaysWhole: {
            type: 'number',
          },
          VacationBasedSalaryTotal: {
            type: 'number',
          },
          VacationBasedSalaryVariableAddition: {
            type: 'number',
          },
          VacationBasedSalaryWorkedTime: {
            type: 'number',
          },
          VacationCalculationAdvanceVacationDebt: {
            type: 'number',
          },
          VacationCalculationIncludeInCalculation: {
            type: 'boolean',
          },
          VacationCalculationSameWagePercent: {
            type: 'boolean',
          },
          VacationCalculationSoleCustody: {
            type: 'boolean',
          },
          VacationCalculationSumOnlyNoDays: {
            type: 'boolean',
          },
          VacationCalculationTotalVacationSalarySum: {
            type: 'number',
          },
          VacationCalculationVacationEntitlement: {
            type: 'number',
          },
          VacationCalculationVariableAdditionSum: {
            type: 'number',
          },
          VacationDaysPaid: {
            type: 'number',
          },
          VacationDaysPendingPaid: {
            type: 'number',
          },
          VacationDaysPendingPrepaid: {
            type: 'number',
          },
          VacationDaysPendingSaved: {
            type: 'number',
          },
          VacationDaysPendingSavedYear1: {
            type: 'number',
          },
          VacationDaysPendingSavedYear2: {
            type: 'number',
          },
          VacationDaysPendingSavedYear3: {
            type: 'number',
          },
          VacationDaysPendingSavedYear4: {
            type: 'number',
          },
          VacationDaysPendingSavedYear5: {
            type: 'number',
          },
          VacationDaysPendingSavedYear6Plus: {
            type: 'number',
          },
          VacationDaysPendingUnpaid: {
            type: 'number',
          },
          VacationDaysPrepaid: {
            type: 'number',
          },
          VacationDaysRegisteredPaid: {
            type: 'number',
          },
          VacationDaysRegisteredPrepaid: {
            type: 'number',
          },
          VacationDaysRegisteredSaved: {
            type: 'number',
          },
          VacationDaysRegisteredSavedYear1: {
            type: 'number',
          },
          VacationDaysRegisteredSavedYear2: {
            type: 'number',
          },
          VacationDaysRegisteredSavedYear3: {
            type: 'number',
          },
          VacationDaysRegisteredSavedYear4: {
            type: 'number',
          },
          VacationDaysRegisteredSavedYear5: {
            type: 'number',
          },
          VacationDaysRegisteredSavedYear6Plus: {
            type: 'number',
          },
          VacationDaysRegisteredUnpaid: {
            type: 'number',
          },
          VacationDaysSaved: {
            type: 'number',
          },
          VacationDaysSavedEmploymentRateYear1: {
            type: 'number',
          },
          VacationDaysSavedEmploymentRateYear2: {
            type: 'number',
          },
          VacationDaysSavedEmploymentRateYear3: {
            type: 'number',
          },
          VacationDaysSavedEmploymentRateYear4: {
            type: 'number',
          },
          VacationDaysSavedEmploymentRateYear5: {
            type: 'number',
          },
          VacationDaysSavedEmploymentRateYear6Plus: {
            type: 'number',
          },
          VacationDaysSavedYear1: {
            type: 'number',
          },
          VacationDaysSavedYear2: {
            type: 'number',
          },
          VacationDaysSavedYear3: {
            type: 'number',
          },
          VacationDaysSavedYear4: {
            type: 'number',
          },
          VacationDaysSavedYear5: {
            type: 'number',
          },
          VacationDaysSavedYear6Plus: {
            type: 'number',
          },
          VacationDaysUnpaid: {
            type: 'number',
          },
          WorkingTimeEnumeration: {
            type: 'string',
          },
        },
        required: ['Email', 'FirstName', 'LastName'],
      },
      dated_schedule: {
        type: 'object',
        properties: {
          EmployeeId: {
            type: 'string',
          },
          FirstDay: {
            type: 'string',
            format: 'date',
          },
          ScheduleId: {
            type: 'string',
          },
        },
        required: ['EmployeeId', 'FirstDay'],
      },
      dated_wage: {
        type: 'object',
        properties: {
          EmployeeId: {
            type: 'string',
          },
          FirstDay: {
            type: 'string',
            format: 'date',
          },
          HourlyPay: {
            type: 'string',
          },
          MonthlySalary: {
            type: 'string',
          },
        },
        required: ['EmployeeId', 'FirstDay'],
      },
      employee_category: {
        type: 'object',
        properties: {
          Name: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
        },
      },
      employee_child: {
        type: 'object',
        properties: {
          ApprovedDays: {
            type: 'integer',
          },
          Child: {
            type: 'string',
          },
          EmployeeId: {
            type: 'string',
          },
          IngoingWithdrawnDays: {
            type: 'integer',
          },
          Id: {
            type: 'string',
          },
          WithdrawnDays: {
            type: 'number',
          },
        },
        required: ['ApprovedDays', 'Child', 'EmployeeId', 'IngoingWithdrawnDays'],
      },
      opening_salary: {
        type: 'object',
        properties: {
          EmployeeId: {
            type: 'string',
          },
          SalaryTypeNumber: {
            type: 'string',
          },
          Amount: {
            type: 'number',
          },
          Period: {
            type: 'string',
          },
          ProductGroup: {
            type: 'string',
          },
          Quantity: {
            type: 'number',
          },
          QuantityUnit: {
            type: 'string',
          },
          RowId: {
            type: 'integer',
          },
          SalaryTypeName: {
            type: 'string',
          },
          SortCode: {
            type: 'string',
          },
          TextRow: {
            type: 'string',
          },
          Total: {
            type: 'number',
          },
          VAT: {
            type: 'number',
          },
        },
        required: ['EmployeeId', 'SalaryTypeNumber'],
      },
    },
  },
  annotations: {},
};

export const handler = async (client: FortnoxMcpWrapper, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.number3.employees.create(body));
  } catch (error) {
    if (error instanceof FortnoxMcpWrapper.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
