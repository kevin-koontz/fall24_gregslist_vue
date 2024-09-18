export class House {
  constructor(data) {
    this.id = data.id
    this.imgUrl = data.imgUrl || "https://user-images.githubusercontent.com/102513373/208978485-ee3a19b6-ebd8-4745-b0a2-7e509552146c.png"
    this.description = data.description || "No description provided by creator."
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture
  }

  get priceAsCurrency() {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.price)
  }
}

const data = {
  "_id": "645d60f381faf24223ae886b",
  "bedrooms": 3,
  "bathrooms": 2,
  "levels": 2,
  "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
  "year": 2003,
  "price": 230000,
  "description": "Super sick house",
  "creatorId": "63f7d6202d1cf882287f12e2",
  "createdAt": "2023-05-11T21:41:07.979Z",
  "updatedAt": "2023-05-11T21:41:07.979Z",
  "__v": 0,
  "creator": {
    "_id": "63f7d6202d1cf882287f12e2",
    "name": "Charles Francis Xavier",
    "picture": "https://media.tumblr.com/73b6bbb5a253780cfa957f4afd8d9e86/tumblr_inline_mqe0j8cDgp1qz4rgp.gif",
    "id": "63f7d6202d1cf882287f12e2"
  },
  "id": "645d60f381faf24223ae886b"
}


