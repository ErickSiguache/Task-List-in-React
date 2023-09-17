export function textValidator(textToValidate) {
  const text = textToValidate.toString().trim();

  if (text === "") {
    throw new Error("El texto a validar está vacío.");
  }

  if (typeof text === "undefined" || typeof text === null) {
    throw new Error("El texto a validar es indefinido o nulo.");
  }

  if (text.length <= 3) {
    throw new Error("La longitud del texto debe ser mayor a tres carácter.");
  }

  return text;
}
