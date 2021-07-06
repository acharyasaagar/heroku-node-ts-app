import express from 'express'

const app = express()

const PORT = process.env.PORT || 5555

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => console.log('Server is listening at port', PORT))
