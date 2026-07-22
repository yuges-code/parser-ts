import fs from 'fs';
import path from 'path';
import parser from "../dist/parser-ts.js";

const content = `
    <script>
        switch (1+4) {
            case 5:
                break;

            default:
                break;
        }
    </script>
`;

const parsed = parser.parse(content, 'html');

fs.writeFileSync(path.resolve(process.cwd(), './parsed.json'), JSON.stringify(parsed.root.toArray(), undefined, '  '));

console.log(parsed.root.children);
