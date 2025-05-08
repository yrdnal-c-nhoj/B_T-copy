import fs from 'fs';
import path from 'path';

function findMostRecentClockJSX(startDir) {
  let mostRecentFile = null;
  let mostRecentTime = 0;

  function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (file === 'Clock.jsx') {
        if (stat.mtimeMs > mostRecentTime) {
          mostRecentTime = stat.mtimeMs;
          mostRecentFile = fullPath;
        }
      }
    }
  }

  walkDir(startDir);
  return mostRecentFile;
}
