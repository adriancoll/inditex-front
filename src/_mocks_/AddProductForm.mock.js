export const ProductMock = {
  _id: 'testid',
  brand: 'Honor',
  model: 'Magic Lite 5G',
  price: 165,
  image:
    'https://specifications-pro.com/wp-content/uploads/2023/01/Honor-Magic-5-Lite-5G-600x600.jpg',
  colors: ['verde', 'negro', 'plata'],
  storage: [128, 256],
  specification: {
    weight: 196,
    ram: '6-8',
    cpu: 'Dimensity 700',
    dimensions: '167.5 x 76.9 x 8.3 mm (6.59 x 3.03 x 0.33 in)',
    battery: 6000,
    resolution: '720 x 1600',
    os: 'Android 13',
    cameras: 2
  }
}

export const AddProductFormMock = {
  id: ProductMock._id,
  colorCode: 0,
  storageCode: 0
}
