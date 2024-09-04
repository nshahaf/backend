import http from 'http'
import path from 'path'
import cors from 'cors'
import express from 'express'


const app = express()
const server = http.createServer(app)

app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve('dist')))
} else {
  const corsOptions = {
      origin: [   'http://127.0.0.1:3000',
                  'http://localhost:3000',
                  'http://127.0.0.1:5173',
                  'http://localhost:5173'
              ],
      credentials: true
  }
  app.use(cors(corsOptions))
}

app.get('/api/desserts', (req, res) => {
  res.json(desserts)
  })

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'))
})

const port = process.env.PORT || 3030

app.listen(port, () =>
console.log(`Server listening on port http://127.0.0.1:${port}/`)
)

const desserts = [
      {
        "image": {
          "desktop": "imgs/image-waffle-desktop.jpg"
        },
        "id": "d001",
        "qty": 0,
        "name": "Waffle with Berries",
        "category": "Waffle",
        "price": 6.5
      },
      {
        "image": {
          "desktop": "imgs/image-creme-brulee-desktop.jpg"
        },
        "id": "d002",
        "qty": 0,
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.0
      },
      {
        "image": {
          "desktop": "imgs/image-macaron-desktop.jpg"
        },
        "id": "d003",
        "qty": 0,
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.0
      },
      {
        "image": {
          "desktop": "imgs/image-tiramisu-desktop.jpg"
        },
        "id": "d004",
        "qty": 0,
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.5
      },
      {
        "image": {
          "desktop": "imgs/image-baklava-desktop.jpg"
        },
        "id": "d005",
        "qty": 0,
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.0
      },
      {
        "image": {
          "desktop": "imgs/image-meringue-desktop.jpg"
        },
        "id": "d006",
        "qty": 0,
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.0
      },
      {
        "image": {
          "desktop": "imgs/image-cake-desktop.jpg"
        },
        "id": "d007",
        "qty": 0,
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.5
      },
      {
        "image": {
          "desktop": "imgs/image-brownie-desktop.jpg"
        },
        "id": "d008",
        "qty": 0,
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.5
      },
      {
        "image": {
          "desktop": "imgs/image-panna-cotta-desktop.jpg"
        },
        "id": "d009",
        "qty": 0,
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.5
      }
    ]