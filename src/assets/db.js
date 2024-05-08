export const items = [
  {
    "id": 1,
    "title": "Cali Burrito",
    "description": "With your choice of filling, topped with Chipotle fries, Jack Cheese, Sour Cream, Pico de Gallo, Guacamole and Pickled Jalapeno with Carrots for spicy. Rolled in a flour tortilla.",
    "price": 18.60,
    "img": "https://media-cdn.tripadvisor.com/media/photo-s/11/90/b0/f6/guzman-y-gomez.jpg",
    "status": "In Stock"
  },
  {
    "id": 2,
    "title": "Nacho Fries",
    "description": "GYG's skin on, real potato fries, melted Jack cheese, salsa, with the filling of your choice, topped with sour cream, guacamole and pickled jalapenos for spicy.",
    "price": 18.80,
    "img": "https://media-cdn.tripadvisor.com/media/photo-s/11/90/b0/f6/guzman-y-gomez.jpg",
    "status": "Out of Stock"
  },
  {
    "id": 3,
    "title": "Bowl",
    "description": "With rice, Jack cheese, black beans, salsa, and filling of your choice. Served with GYG's corn chips.",
    "price": 17.10,
    "img": "https://media-cdn.tripadvisor.com/media/photo-s/11/90/b0/f6/guzman-y-gomez.jpg",
    "status": "In Stock"
  },
  {
    "id": 4,
    "title": "Enchilada",
    "description": "With rice, Jack cheese, black beans, salsa, and filling of your choice. Rolled in a flour tortilla and topped with salsas melted Jack cheese, sour cream, guacamole, and GYG's corn chips.",
    "price": 20.30,
    "img": "https://media-cdn.tripadvisor.com/media/photo-s/11/90/b0/f6/guzman-y-gomez.jpg",
    "status": "In Stock"
  }
]

export const orders = {
  "ongoingOrders": [
    {
      "id": 101,
      "items": [
        {
          "id": 1,
          "quantity": 2
        },
        {
          "id": 2,
          "quantity": 1
        }
      ],
      "status": "Processing",
      "date": "2024-04-23"
    },
    {
      "id": 102,
      "items": [
        {
          "id": 3,
          "quantity": 1
        }
      ],
      "status": "Pending",
      "date": "2024-04-22"
    }
  ],
  "orderHistory": [
    {
      "id": 201,
      "items": [
        {
          "id": 1,
          "quantity": 1
        },
        {
          "id": 3,
          "quantity": 1
        }
      ],
      "status": "Delivered",
      "date": "2024-04-22"
    },
    {
      "id": 202,
      "items": [
        {
          "id": 4,
          "quantity": 2
        }
      ],
      "status": "Delivered",
      "date": "2024-04-20"
    }
  ]
}

