import typescript from '@rollup/plugin-typescript';

import { readFileSync } from 'fs';

const packageConfig = JSON.parse(readFileSync('./package.json'));

export default {
    input: 'src/core/Moovinly.ts',
    output: [
        {
            file: packageConfig.main,
            format: 'esm',
        },
    ],
    plugins: [
        typescript(),
    ]
}