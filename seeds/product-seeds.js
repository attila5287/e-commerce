const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
    img_url: "https://raw.githubusercontent.com/attila5287/e-commerce/main/public/product_images/plain_tshirt.png",
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
    img_url: "https://raw.githubusercontent.com/attila5287/e-commerce/main/public/product_images/running_sneakers.png",
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
    img_url: "https://raw.githubusercontent.com/attila5287/e-commerce/main/public/product_images/baseball_cap.png",
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
    img_url: "https://raw.githubusercontent.com/attila5287/e-commerce/main/public/product_images/vinyl_record.png",
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
    img_url: "https://raw.githubusercontent.com/attila5287/e-commerce/main/public/product_images/cargo_shorts.png",
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
