import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let saveLoggers = (inclusion) => {
    let prevText = fs.readFileSync(path.resolve(__dirname, '../logs/doc.txt'), 'utf8');
    let text = `\n ${inclusion}`;
    prevText += text;
    fs.writeFileSync(path.resolve(__dirname, '../logs/doc.txt'), prevText);
}

export default saveLoggers;