import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const source = join(import.meta.dirname, 'entry.png');
const destination = join(outputDir, 'entry.png');

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);

if (statSync(destination).size !== statSync(source).size) {
  throw new Error('The copied entry.png differs in byte length from the source.');
}
