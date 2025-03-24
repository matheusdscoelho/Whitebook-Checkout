export function isValidCPF(cpf: string): boolean {
  const cleanedCpf = cpf.replace(/\D/g, "");

  if (cleanedCpf.length !== 11) return false;

  if (/^(\d)\1{10}$/.test(cleanedCpf)) return false;

  let sum = 0;
  let remainder: number;

  for (let i = 0; i < 9; i++) {
    sum += parseInt(cleanedCpf.charAt(i)) * (10 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanedCpf.charAt(9))) return false;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cleanedCpf.charAt(i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanedCpf.charAt(10))) return false;

  return true;
}

export function isValidCardNumber(cardNumber: string): boolean {
  const cleanedCardNumber = cardNumber.replace(/\s/g, "");

  let sum = 0;
  let shouldDouble = false;

  for (let i = cleanedCardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanedCardNumber.charAt(i));

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}
