const productImageMap: Record<string, string> = {
  tacos: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=800',
  pizza: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=800',
  burger: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=800',
  sandwich: 'https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=800',
  frites: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800',
  boisson: 'https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=800',
  jus: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=800',
  shawarma: 'https://images.pexels.com/photos/8753657/pexels-photo-8753657.jpeg?auto=compress&cs=tinysrgb&w=800',
  panini: 'https://images.pexels.com/photos/1209029/pexels-photo-1209029.jpeg?auto=compress&cs=tinysrgb&w=800',
  wrap: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800',
  dessert: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800',
  default: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
};

export function getProductImage(productName: string): string {
  const normalized = productName.toLowerCase();

  for (const [key, url] of Object.entries(productImageMap)) {
    if (normalized.includes(key)) {
      return url;
    }
  }

  return productImageMap.default;
}
