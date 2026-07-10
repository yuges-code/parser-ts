import fs from 'fs';
import path from 'path';
import parser from "../dist/parser-ts.js";

const content = `
    <script>

        if (true) {
            const fn = (number) => { number * 4 };
        } else if (false) {
            if (4+6) {
                const d= 3;
            }
        } else {
            
        }
    </script>
`;

const parsed = parser.parse(content, 'html');

fs.writeFileSync(path.resolve(process.cwd(), './parsed.json'), JSON.stringify(parsed.root.toArray(), undefined, '  '));

console.log(parsed.root.children);
