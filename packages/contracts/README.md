# @ttgen/contracts

Sui Move smart contracts workspace for TTGen Project.

Current example:
- `ttgen::ehr` module with:
  - `create_record`
  - `update_consent`
  - `share_record`
  - `delete_record`
- Unit tests using `test_scenario`:
  - create + update path
  - non-owner rejection
  - owner delete path

Commands:
- `pnpm --filter @ttgen/contracts build`
- `pnpm --filter @ttgen/contracts test`
- `pnpm --filter @ttgen/contracts test:coverage`
- `pnpm --filter @ttgen/contracts check`
