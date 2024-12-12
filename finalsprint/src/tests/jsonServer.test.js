const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// by cybrrgrl (Scarlett)
describe('JSON Server API', () => {
  let mock;

  beforeAll(() => {
    // Create a mock adapter for axios
    mock = new MockAdapter(axios);
  });

  afterAll(() => {
    // Restore axios to its original state
    mock.restore();
  });

  it('should fetch products from the JSON server', async () => {
    // Mock the GET request to /products
    const mockProducts = [
      { id: 1, name: 'Gold Bracelet', price: 400, image: '/images/image 3.png' },
      { id: 2, name: 'Copper Bracelet', price: 315, image: '/images/image 4.png' },
    ];

    mock.onGet('http://localhost:5000/products').reply(200, mockProducts);

    // Fetch products
    const response = await axios.get('http://localhost:5000/products');

    // Assertions
    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockProducts);
  });

  it('should add a product to the cart', async () => {
    // Mock the POST request to /cart
    const productToAdd = {
      id: 1,
      name: 'Gold Bracelet',
      price: 400,
      image: '/images/image 3.png',
      quantity: 1,
    };

    mock.onPost('http://localhost:5000/cart', productToAdd).reply(201, productToAdd);

    // Add product to cart
    const response = await axios.post('http://localhost:5000/cart', productToAdd);

    // Assertions
    expect(response.status).toBe(201);
    expect(response.data).toEqual(productToAdd);
  });

  it('should fetch the cart items', async () => {
    // Mock the GET request to /cart
    const mockCart = [
      {
        id: 1,
        name: 'Gold Bracelet',
        price: 400,
        image: '/images/image 3.png',
        quantity: 1,
      },
    ];

    mock.onGet('http://localhost:5000/cart').reply(200, mockCart);

    // Fetch cart items
    const response = await axios.get('http://localhost:5000/cart');

    // Assertions
    expect(response.status).toBe(200);
    expect(response.data).toEqual(mockCart);
  });
});
