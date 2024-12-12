const BASE_URL = 'https://fakestoreapi.com';


//Fetch all products

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return await response.json();
  } catch (error) {
    console.error('Error fetching all products:', error);
    return [];
  }
};

//Fetch a single product by ID

export const getProductById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch product with ID ${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    return null;
  }
};

// Fetch all categories

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};


// Fetch products by category

export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${BASE_URL}/products/category/${category}`);
    if (!response.ok) throw new Error(`Failed to fetch products in category ${category}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    return [];
  }
};


// Fetch all products in carts

export const getAllCartProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/carts`);
    if (!response.ok) throw new Error`Failed to fetch cart products`;
    return await response.json();
  } catch (error) {
    console.error(`Error fetching cart products:`, error);
    return [];
  }
};

// Fetch cart by ID

export const getCartById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/carts/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch cart with ID ${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching cart with ID ${id}:`, error);
    return null;
  }
};

// Add to cart

export const addToCart = async (userId, products) => {
  try {
    const response = await fetch(`${BASE_URL}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        date: new Date().toISOString().split('T')[0], // Using today's date in YYYY-MM-DD format
        products,
      }),
    });

    if (!response.ok) throw new Error('Failed to add item to the cart');
    
    return await response.json();
  } catch (error) {
    console.error('Error adding item to the cart:', error);
    return null;
  }
};

//Fetch carts within a date range

export const getCartsByDateRange = async (startDate, endDate) => {
  try {
    const response = await fetch(`${BASE_URL}/carts?startdate=${startDate}&enddate=${endDate}`);
    if (!response.ok) throw new Error('Failed to fetch carts by date range');
    return await response.json();
  } catch (error) {
    console.error('Error fetching carts by date range:', error);
    return [];
  }
};


//Fetch carts by user ID

export const getCartsByUserId = async (Id) => {
  try {
    const response = await fetch(`${BASE_URL}/carts/user/${Id}`);
    if (!response.ok) throw new Error(`Failed to fetch carts for user with ID ${Id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching carts for user with ID ${Id}:`, error);
    return [];
  }
};


// Delete cart by ID

export const deleteCartById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/carts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(`Failed to delete cart with ID ${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error deleting cart with ID ${id}:`, error);
    return null;
  }
};

// Fetch all users

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};


// Fetch user by ID

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error(`Failed to fetch user with ID ${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching user with ID ${id}:`, error);
    return null;
  }
};

//Create a new user
 
export const createUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error('Failed to create user');
    return await response.json();
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
};

// Update user by ID

export const updateUserById = async (id, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error(`Failed to update user with ID ${id}`);
    return await response.json();
  } catch (error) {
    console.error(`Error updating user with ID ${id}:`, error);
    return null;
  }
};

// User login

export const userLogin = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) throw new Error('Failed to login');
    return await response.json();
  } catch (error) {
    console.error('Error logging in user:', error);
    return null;
  }
};

// Get all categories

export const getProductCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/categories`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};
