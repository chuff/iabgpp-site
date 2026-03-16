import { defineConfig } from 'vite'
import { readFileSync } from 'fs'
import { resolve } from 'path'

const stubSrc = resolve('node_modules/@iabgpp/stub/lib/stub.js')

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    {
      name: 'iabgpp-stub',
      configureServer(server) {
        server.middlewares.use('/stub.js', (_req, res) => {
          res.setHeader('Content-Type', 'application/javascript')
          res.end(readFileSync(stubSrc))
        })
      },
      generateBundle() {
        this.emitFile({
          type: 'asset',
          fileName: 'stub.js',
          source: readFileSync(stubSrc, 'utf-8'),
        })
      },
    },
  ],
})
