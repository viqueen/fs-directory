## fs-directory

---

```bash
npm install fs-directory --save
```

```javascript
import { listFiles } from 'fs-directory';

const filters = {
    fileFilter: (entry) => entry.name.endsWith('.js'),
    directoryFilter: () => true
}

const jsFiles = listFiles(process.cwd(), filters);
const allFiles = listFiles(process.cwd());
```

---

### environment

- [NodeJS](https://nodejs.org/en/)
- optional: [nvm](https://github.com/nvm-sh/nvm)

