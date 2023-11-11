export function formatPriceARS(price: any): any {
  if (typeof price === "number") {
    let priceFormatted = price.toFixed(2).replace(".", ",");

    let [entirePart, decimalPart] = priceFormatted.split(",");

    let regex = /\B(?=(\d{3})+(?!\d))/g;
    entirePart = entirePart.replace(regex, ".");

    priceFormatted = entirePart + "," + decimalPart;

    priceFormatted = priceFormatted;

    return priceFormatted;
  }
}

export const getMinPrice = (product: any) => {
  // Verifica si el producto tiene medidas y precios válidos
  if (
    product.measurements &&
    product.measurements.length > 0 &&
    product.measurements.some(
      (measure: any) => typeof measure.price === "number"
    )
  ) {
    // Filtra y mapea para obtener solo precios válidos
    const prices = product.measurements
      .map((measure: any) => measure.price)
      .filter((price: number) => typeof price === "number" && !isNaN(price));

    // Encuentra el precio mínimo
    const minPrice = Math.min(...prices);

    // Maneja el caso de precio igual a 0
    if (minPrice === 0) {
      return 0;
    }

    // Formatea y devuelve el precio mínimo
    return formatPriceARS(minPrice);
  }

  // Retorna un mensaje si no se puede determinar el precio
  return 0;
};

export function getPrice(product: any): number {
  // Otherwise, look into the measurements.
  if (product.measurements && product.measurements.length) {
    return product.measurements[0].price;
  }

  // If the product has a direct price, return it.
  if (product.price) {
    return formatPriceARS(product.price);
  }

  // If neither condition is met, return Infinity.
  return Infinity;
}

export const formatPhoneNumber = (number: string) => {
  // Convertir el número a string
  const numberStr = number.toString();

  // Comprobar si la longitud del número es la esperada (13 dígitos)
  if (numberStr.length !== 13) {
    return "Número inválido";
  }

  // Extraer las partes del número
  const countryCode = numberStr.substring(0, 2); // Código de país (54)
  const mobilePrefix = numberStr.substring(2, 3); // Prefijo de móvil (9)
  const areaCode = numberStr.substring(3, 6); // Código de área (XXX)
  const firstPart = numberStr.substring(6, 9); // Primera parte del número local (XXX)
  const secondPart = numberStr.substring(9); // Segunda parte del número local (XXXX)

  // Formatear el número
  return `+(${countryCode}) ${mobilePrefix} ${areaCode} ${firstPart}-${secondPart}`;
};
