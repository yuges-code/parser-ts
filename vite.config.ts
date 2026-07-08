import path from 'path';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    lib: {
      name: 'parser-ts',
      fileName: 'parser-ts',
      entry: path.resolve(__dirname, 'src/main.ts'),
    },
  },
  plugins: [
    dts({
      outDirs: './dist/types',
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
});
