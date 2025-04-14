const express = require('express')
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/usersRoutes')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/api', productRoutes)
app.use('/api', userRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
  console.log(`http://localhost:${port}`)
})
