// Filename: ComplexCode.js
// Description: A complex and elaborate JavaScript code sample showcasing a simulated e-commerce website with various features.

// Global Variables
var products = []; // Store product data
var cart = []; // Store selected products for purchase
var user = null; // Store user information
var totalAmount = 0; // Store total purchase amount

/********************* Utility Functions ************************/

// Function to generate a unique ID for each product
function generateUniqueId() {
  var id = Math.random().toString(36).substr(2, 9);
  if (products.find((product) => product.id === id)) {
    return generateUniqueId();
  }
  return id;
}

// Function to calculate the total amount of the cart
function calculateTotalAmount() {
  return cart.reduce((acc, item) => acc + item.price, 0);
}

// Function to display product details
function displayProductDetails(product) {
  console.log(`Product ID: ${product.id}`);
  console.log(`Name: ${product.name}`);
  console.log(`Price: $${product.price.toFixed(2)}`);
  console.log(`Description: ${product.description}`);
  console.log(`Rating: ${product.rating}`);
}

/********************* User Management ************************/

// Function to register a new user
function registerUser(name, email, password) {
  user = {
    name: name,
    email: email,
    password: password,
  };
  console.log(`Successfully registered user ${user.email}`);
}

// Function to authenticate a user
function authenticateUser(email, password) {
  if (user && user.email === email && user.password === password) {
    console.log(`User ${user.email} authenticated successfully`);
    return true;
  } else {
    console.log(`User authentication failed`);
    return false;
  }
}

/********************* Product Management ************************/

// Function to add a new product to the catalog
function addProduct(name, price, description) {
  var product = {
    id: generateUniqueId(),
    name: name,
    price: price,
    description: description,
    rating: 0,
  };
  products.push(product);
  console.log(`Product "${product.name}" added successfully`);
}

// Function to update the rating of a product
function rateProduct(productId, rating) {
  var product = products.find((product) => product.id === productId);
  if (product) {
    product.rating = rating;
    console.log(`Product "${product.name}" rated successfully`);
  } else {
    console.log(`Product with ID ${productId} not found`);
  }
}

/********************* Cart Management ************************/

// Function to add a product to the cart
function addToCart(productId) {
  var product = products.find((product) => product.id === productId);
  if (product) {
    cart.push(product);
    console.log(`Product "${product.name}" added to the cart`);
  } else {
    console.log(`Product with ID ${productId} not found`);
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  var productIndex = cart.findIndex((product) => product.id === productId);
  if (productIndex !== -1) {
    var removedProduct = cart.splice(productIndex, 1)[0];
    console.log(`Product "${removedProduct.name}" removed from the cart`);
  } else {
    console.log(`Product with ID ${productId} not found in the cart`);
  }
}

// Function to update the quantity of a product in the cart
function updateCartQuantity(productId, quantity) {
  var product = cart.find((product) => product.id === productId);
  if (product) {
    product.quantity = quantity;
    console.log(`Product "${product.name}" quantity updated`);
  } else {
    console.log(`Product with ID ${productId} not found in the cart`);
  }
}

/********************* Checkout ************************/

// Function to process the checkout
function checkout() {
  if (cart.length === 0) {
    console.log('Cart is empty. Add products before checkout.');
    return;
  }
  
  if (!user) {
    console.log('User not authenticated. Please login to proceed.');
    return;
  }
  
  totalAmount = calculateTotalAmount();
  
  console.log('************* Checkout *************');
  console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
  console.log(`User: ${user.name} (${user.email})`);
  console.log('Products in Cart:');
  
  cart.forEach((product) => displayProductDetails(product));
  
  console.log('*************************************');
  console.log('Thank you for shopping with us!');
  console.log('*************************************');
  
  // Clear cart and reset total amount
  cart = [];
  totalAmount = 0;
}

/********************* Sample Usage ************************/

// Register two users
registerUser('John Doe', 'john@example.com', 'john@123');
registerUser('Jane Smith', 'jane@example.com', 'jane@456');

// Authenticate a user
authenticateUser('john@example.com', 'john@123');

// Add products
addProduct('Product 1', 9.99, 'This is product 1');
addProduct('Product 2', 19.99, 'This is product 2');
addProduct('Product 3', 14.99, 'This is product 3');

// Rate a product
rateProduct(products[0].id, 4.5);

// Add products to the cart
addToCart(products[0].id);
addToCart(products[1].id);

// Remove a product from the cart
removeFromCart(products[1].id);

// Update cart quantity
updateCartQuantity(products[0].id, 3);

// Checkout
checkout();