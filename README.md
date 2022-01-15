## fs-directory

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=viqueen_fs-directory&metric=alert_status)](https://sonarcloud.io/dashboard?id=viqueen_fs-directory)

## use it

```bash
npm install fs-directory --save
```

```javascript
import { listFiles } from "fs-directory";

const filters = {
  fileFilter: (entry) => entry.name.endsWith(".js"),
  directoryFilter: () => true,
};

const jsFiles = listFiles(process.cwd(), filters);
const allFiles = listFiles(process.cwd());
```

---

## develop it

### environment

- [NodeJS](https://nodejs.org/en/)
- optional: [nvm](https://github.com/nvm-sh/nvm)

### build it, test it, and format it

```bash
npm run build
npm test
npm run format
```
