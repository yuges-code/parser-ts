import fs from 'fs';
import path from 'path';
import parser from "../dist/parser-ts.js";

const content = `
    <script>
        switch (1+4) {
            case "lol":
                kek()?.['lol']?.()['aha asd'];

                break;

            default:
                break;
        }
    </script>
`;

const arr = [];

const parsed = parser.parse(content, 'html', 0, { parsed: (token) => {
    if (token.constructor.name === 'JSDataStringValueToken') {
        arr.push(...token.lexeme.split(/\s/));
    }
}});

fs.writeFileSync(path.resolve(process.cwd(), './parsed.json'), JSON.stringify(parsed.root.toArray(), undefined, '  '));

// console.log(parsed.root.children);
console.log(arr);
