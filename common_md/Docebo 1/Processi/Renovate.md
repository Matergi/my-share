```bash
git checkout renovate/dev-dependencies
git reset --hard origin/renovate/dev-dependencies
# remove node-modules
yarn
yarn lint
yarn tsc
yarn test
# if ok -> merge
```