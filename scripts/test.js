import fs from 'fs';
import path from 'path';
import parser from "../dist/parser-ts.js";

const content = `
    <script>
        for (let index = 0; index < array.length; index++) {
            const element = array;
        }
    </script>
`;

const parsed = parser.parse(content, 'html');

fs.writeFileSync(path.resolve(process.cwd(), './parsed.json'), JSON.stringify(parsed.root.toArray(), undefined, '  '));

console.log(parsed.root.children);
