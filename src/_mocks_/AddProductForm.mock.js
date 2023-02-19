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

export const AllProductsMock = [
  {
    brand: 'Apple',
    model: 'iPhone 9',
    slug: 'apple-iphone-9',
    price: 549,
    image:
      'https://specifications-pro.com/wp-content/uploads/2020/03/iPhone-9-600x600.jpeg',
    colors: ['plata', 'gris espacio', 'oro', 'rojo'],
    storage: [64, 128, 256],
    specification: {
      battery: 2050,
      cpu: ' Apple A13 Bionic',
      ram: '3 GB',
      resolution: '750 x 1334',
      os: 'iOS 13',
      dimensions: '138.4 x 67.3 x 7.3 mm',
      weight: 205,
      cameras: 1
    }
  },
  {
    brand: 'Vivo',
    model: 'V27 Pro',
    slug: 'vivo-v27-pro',
    price: 450,
    image:
      'https://specifications-pro.com/wp-content/uploads/2022/11/vivo-V27-Pro-600x600.jpg',
    colors: ['negro', 'verde'],
    storage: [128, 256],
    specification: {
      weight: 182,
      ram: '8-12',
      cpu: 'Dimensity 8200',
      dimensions: '164.1 x 74.8 x 7.4 mm',
      battery: 4600,
      resolution: '1080 x 2400',
      os: 'Android 13',
      cameras: 2
    }
  },
  {
    brand: 'Honor',
    model: 'Magic Lite 5G',
    slug: 'honor-magic-lite-5g',
    price: 165,
    image:
      'https://specifications-pro.com/wp-content/uploads/2023/01/Honor-Magic-5-Lite-5G-600x600.jpg',
    colors: ['verde', 'negro', 'plata'],
    storage: [128],
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
  },
  {
    brand: 'Xiaomi',
    model: 'Poco X6',
    slug: 'xiaomi-poco-x6',
    image:
      'https://specifications-pro.com/wp-content/uploads/2023/02/Xiaomi-Poco-X6-600x600.jpeg',
    colors: ['blanco', 'negro', 'azul'],
    storage: [128, 256],
    price: 165,
    specification: {
      weight: 189,
      ram: '6-8',
      cpu: 'Snapdragon 732G',
      dimensions: '66.4 x 76.2 x 8 mm (6.53 x 3.00 x 0.31 in)',
      battery: 5000,
      resolution: '1080 x 2400',
      os: 'Android 13',
      cameras: 3
    }
  },
  {
    brand: 'Sony',
    model: 'Xperia 1V',
    slug: 'Sony-Xperia-1V',
    image:
      'https://specifications-pro.com/wp-content/uploads/2023/02/Sony-Xperia-1-V-600x600.jpg',
    colors: ['negro', 'blanco', 'morado'],
    storage: [256, 512],
    price: 1480,
    specification: {
      weight: 185,
      ram: '12',
      cpu: 'SD 8 Gen 2',
      dimensions: '165 x 71 x 8.2 mm (6.50 x 2.80 x 0.32 in)',
      battery: 5000,
      resolution: '1644 x 3840',
      os: 'Android 13',
      cameras: 4
    }
  },
  {
    brand: 'Asus',
    model: 'ROG Phone 6D Ultimate',
    slug: 'asus-rog-phone-6d-ultimate',
    image:
      'https://specifications-pro.com/wp-content/uploads/2022/08/Asus-ROG-Phone-6D-Ultimate-600x600.jpg',
    colors: ['gris'],
    price: 966,
    storage: [512],
    specification: {
      weight: 230,
      ram: '16',
      cpu: 'Dimensity 9000 Plus',
      dimensions: '173 x 77 x 10.3 mm (6.81 x 3.03 x 0.41 in)',
      os: 'Android 12',
      battery: 6000,
      resolution: '1080 x 2448',
      cameras: 3
    }
  },
  {
    brand: 'Oppo',
    model: 'Find X6',
    slug: 'oppo-find-x6',
    price: 850,
    image:
      'https://specifications-pro.com/wp-content/uploads/2022/09/Oppo-Find-X6-600x600.jpg',
    colors: ['negro', 'Blanco'],
    storage: [256],
    specification: {
      weight: 193,
      ram: '8-12',
      cpu: 'Gen 1 Plus',
      dimensions: '160.3 x 72.6 x 8.7 mm (6.31 x 2.86 x 0.34 in)',
      battery: 4800,
      resolution: '1080 x 2448',
      os: 'Android 13',
      cameras: 3
    }
  },
  {
    brand: 'Apple',
    model: 'iPhone 14 Pro Max',
    slug: 'apple-iphone-14-pro-max',
    price: 1100,
    image:
      'https://specifications-pro.com/wp-content/uploads/2022/09/iPhone-14-Pro-Max-600x600.jpg',
    storage: [128, 256, 512, 1000],
    colors: ['morado oscuro', 'oro', 'negro', 'plata'],
    specification: {
      weight: 240,
      ram: '6',
      cpu: 'A16 Bionic',
      dimensions: '160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)',
      battery: 4323,
      resolution: '1290 x 2796',
      os: 'Android 13',
      cameras: 4
    }
  }
]

export const AddProductFormMock = {
  id: ProductMock._id,
  colorCode: 0,
  storageCode: 0
}
