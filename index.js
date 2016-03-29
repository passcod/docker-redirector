'use strict'

const http = require('http')

http.createServer((req, res) => {
  res.writeHead(req.method === 'GET' ? 302 : 307, {
    Location: `https://${req.headers.host}${req.url}`
  })
  res.end()
}).listen(80, () => console.log('Redirector started.'))

