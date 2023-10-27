export function formatPriceARS(price: any): any {
  if (typeof price === "number") {
    let priceStr = price.toFixed(2).replace(".", ",");

    let [entirePart, decimalPart] = priceStr.split(",");

    let regex = /\B(?=(\d{3})+(?!\d))/g;
    entirePart = entirePart.replace(regex, ".");

    priceStr = entirePart + "," + decimalPart;

    priceStr = priceStr;

    return priceStr;
  }
}

export function getPrice(product: any): number {
  // If the product has a direct price, return it.
  if (product.price) {
    return formatPriceARS(product.price);
  }

  // Otherwise, look into the measurements.
  if (product.measurements && product.measurements.length) {
    console.log("product->", product);
    return product.measurements[0].price;
  }

  // If neither condition is met, return Infinity.
  return Infinity;
}
