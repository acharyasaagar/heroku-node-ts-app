import express from 'express'
import packageJson from './package.json'

const app = express()

const PORT = process.env.PORT || 5555

app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/version', (req, res) => {
  res.send(packageJson.version)
})

app.get('/healthcheck', (req, res) => {
  res.send('ok')
})

app.get('/timestamp', (req, res) => {
  res.send(new Date().toISOString())
})

app.listen(PORT, () => console.log('Server is listening at port', PORT))
