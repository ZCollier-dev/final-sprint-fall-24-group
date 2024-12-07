export const generateOrderNumber = () => Math.floor(100000 + Math.random() * 900000);

export const calculateTotalWithTax = (total) => total * 1.15;

export const materialPrices = {
  Iron: 15,
  Copper: 20,
  Gold: 30,
};
