// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { FortnoxMcpWrapper } from '../client';

export abstract class APIResource {
  protected _client: FortnoxMcpWrapper;

  constructor(client: FortnoxMcpWrapper) {
    this._client = client;
  }
}
