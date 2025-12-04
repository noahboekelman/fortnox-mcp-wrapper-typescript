// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import FortnoxMcpWrapper from 'fortnox-mcp-wrapper';

const client = new FortnoxMcpWrapper({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scheduletimes', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.number3.scheduletimes.retrieve('2019-12-27', { EmployeeId: 'EmployeeId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.number3.scheduletimes.retrieve('2019-12-27', { EmployeeId: 'EmployeeId' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.number3.scheduletimes.update('2019-12-27', { EmployeeId: 'EmployeeId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.number3.scheduletimes.update('2019-12-27', {
      EmployeeId: 'EmployeeId',
      ScheduleTime: {
        Date: '2019-12-27',
        EmployeeId: 'EmployeeId',
        Hours: 'Hours',
        IWH1: 'IWH1',
        IWH2: 'IWH2',
        IWH3: 'IWH3',
        IWH4: 'IWH4',
        IWH5: 'IWH5',
        ScheduleId: 'ScheduleId',
      },
    });
  });

  // Prism tests are disabled
  test.skip('resetDay: only required params', async () => {
    const responsePromise = client.number3.scheduletimes.resetDay('2019-12-27', { EmployeeId: 'EmployeeId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resetDay: required and optional params', async () => {
    const response = await client.number3.scheduletimes.resetDay('2019-12-27', { EmployeeId: 'EmployeeId' });
  });
});
