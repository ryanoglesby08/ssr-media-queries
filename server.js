import Express from 'express'

import React from 'react'
import { renderToString } from 'react-dom/server'

import App from './src/App'

const app = Express()
const port = 3000

app.use('/dist', Express.static('dist'))
app.use(handleRender)

function handleRender(req, res) {

  // Render the component to a string
  const html = renderToString(<App />);

  // Send the rendered page back to the client
  res.send(renderFullPage(html))
}

function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Test react media</title>
      </head>
      <body>
        <div id="root">${html}</div>
        
        <script type="text/javascript" src="dist/app.bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)

console.log(`Listening on port ${port}`)
