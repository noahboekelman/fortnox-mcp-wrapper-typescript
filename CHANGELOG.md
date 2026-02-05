# Changelog

## 0.1.0 (2026-02-05)

Full Changelog: [v0.0.1...v0.1.0](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/compare/v0.0.1...v0.1.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** manual updates ([a6290ce](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/a6290ce92da83d01a74895983ba3a53008760672))
* **api:** manual updates ([816b771](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/816b771df6654cb33f1b8b282c2d15a007ed3f53))
* **api:** manual updates ([9917555](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/9917555084984ccf83c97538464bb17162506e6d))
* **mcp:** add initial server instructions ([6c92c26](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/6c92c26e103d9513ccbb71b3ed4bc0ad3a184923))
* **mcp:** handle code mode calls in the Stainless API ([40820d9](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/40820d9a357d6bc81507e558828a0519a1daeda8))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([ca0942b](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/ca0942b5c9492ff2b3511436b8f98fef69864c76))
* **docs:** fix mcp installation instructions for remote servers ([4598bb0](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/4598bb0ad2ce7c63b1f6103be4b6676ec2cbc939))
* flag defaults ([a6ecf0a](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/a6ecf0a83c6015b5496b0cdb9dfbc039f3d3d69a))
* **mcp:** add client instantiation options to code tool ([f3a0165](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/f3a01653f73eedcde5126232f507aeaf331297ac))
* **mcp:** allow falling back for required env variables ([aa42269](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/aa42269ad996d3f3f0a7f2d7143a8f50dafa1b42))
* **mcp:** correct code tool API endpoint ([122a45d](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/122a45d04d365e684fe7294c478d2a0faa3c2765))
* **mcp:** correct code tool api output types ([694ffc9](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/694ffc99093fcbb5fb85e4b8a9f12950d4701d95))
* **mcp:** fix options parsing ([408c83b](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/408c83ba3199fa8c520bca3db753deb397e6afba))
* **mcp:** pass base url to code tool ([b722af6](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/b722af6f21e62b9fcd67852a26f286dfb0c99d5e))
* **mcp:** return correct lines on typescript errors ([dec6a88](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/dec6a881f0b0e5748cac12fe6d3a2d213d1b42d8))
* **mcp:** update code tool prompt ([7aab849](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/7aab849f35ecb2d0270a83c5aa72b54e6bf41553))


### Chores

* break long lines in snippets into multiline ([c51ee38](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/c51ee38207d3248150128a938ca3b585cbd8756e))
* bump debug version ([ecce6e1](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/ecce6e1316bb611499813a091b98a69165b2ebfd))
* **ci:** upgrade `actions/github-script` ([c8a08c7](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/c8a08c7dc5e611579b110d54bf599e5b624cc7f8))
* **client:** do not parse responses with empty content-length ([34029ba](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/34029baa963f301f2582ade3ccc197aa11fc958d))
* **client:** restructure abort controller binding ([e6f49a6](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/e6f49a6016a6a8dfe541500d34f586332aee3a15))
* configure new SDK language ([a9db2bd](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/a9db2bd88b6a7c1c05f6c9a7d29f6589a7cfa9a9))
* fix typo in descriptions ([0bb70b4](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/0bb70b46268c7f81fb0945bfe55892c3e96da40c))
* **internal:** codegen related update ([b281c97](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/b281c976514c56da5586106b76628f185407bde0))
* **internal:** codegen related update ([a9c5d8b](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/a9c5d8b502f135775d8f7b911723880eba91ee76))
* **internal:** codegen related update ([70ff9ca](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/70ff9cad53fc4c7ec775b6e3dc619c32395891a7))
* **internal:** codegen related update ([820be38](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/820be38bca278c00947964f0d44569d700e26241))
* **internal:** codegen related update ([55cc6b7](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/55cc6b7d92f7f64421517eaa90370ace81b97a9f))
* **internal:** codegen related update ([4745890](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/4745890572c22c910aebae01436c0371e4c36ab6))
* **internal:** codegen related update ([0ae857f](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/0ae857f6376af606650f1563c2680dbac5c6ba9d))
* **internal:** codegen related update ([dc82f08](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/dc82f08f54be0f218426308046b1ca81d7256a51))
* **internal:** codegen related update ([0732129](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/07321290b9035bc10b35e39b8367d039e11bb43e))
* **internal:** codegen related update ([67eedde](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/67eedde924b21266f663e5d922d91bcb4719c6b3))
* **internal:** codegen related update ([d26c653](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/d26c653f5acd82d5cdf7da45edc796fade2a7efc))
* **internal:** codegen related update ([ddde565](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/ddde56505bf46839698d88a34a8624937b01657e))
* **internal:** codegen related update ([226d251](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/226d2516e999c7207ddad8ab0690ef72468e3e01))
* **internal:** configure pnpm minimumReleaseAge to 1 day ([d43b51e](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/d43b51e1cc4df716035b1f2b553d6b79feb4673e))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([af2d935](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/af2d93523f7153843a82c1f7909e3beae091a90d))
* **internal:** support oauth authorization code flow for MCP servers ([3fff08b](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/3fff08b0b8edfa66209e0778ccdc100adf1573e2))
* **internal:** update `actions/checkout` version ([4364d77](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/4364d77f56b28c7958da6d161518a3bd5241123c))
* **internal:** update lock file ([b69391c](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/b69391c41d74e8e82158328c93cdc7ba3689396d))
* **internal:** upgrade babel, qs, js-yaml ([1fb26b6](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/1fb26b61b992488d07fbabb2a8aecaf6b08f94f3))
* **internal:** upgrade brace-expansion and @babel/helpers ([c09cc66](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/c09cc668886940de44510016d9ba9531eba83adf))
* **mcp:** add intent param to execute tool ([772e72f](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/772e72fe952e2137a088b465b4aad214cd7aab70))
* **mcp:** pass intent param to execute handler ([ccd5bd3](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/ccd5bd3a8b0d4e85dad058c7f79a0d7f1c68f6a4))
* **mcp:** remove deprecated tool schemes ([632b3d8](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/632b3d85f556b14dac28b956b33db1ef484d8688))
* **mcp:** up tsconfig lib version to es2022 ([04af7a6](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/04af7a6661fbcced747d1a1c3eb7a1424daf91b0))
* **mcp:** upgrade dependencies ([a411f7f](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/a411f7f34ed7f501d59869135a3d8c7af35e959f))
* update SDK settings ([66ab6fc](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/66ab6fc92db3ddff531bad7c006f3321b349d42a))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([ca08d8c](https://github.com/noahboekelman/fortnox-mcp-wrapper-typescript/commit/ca08d8cce0e485d5397c92936f95a58e21d3efef))
