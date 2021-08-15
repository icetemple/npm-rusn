/// <reference types="./rusn.d.ts" />

export function rusPluralize(number, forms) {
  if (typeof forms === "string") {
    return forms;
  }

  const [first, second, third] = forms;

  const r100 = number % 100;
  if (r100 < 10 || r100 > 20) {
    const r10 = number % 10;
    if (r10 == 1) {
      return first;
    }

    if (r10 > 1 && r10 < 5) {
      return second;
    }
  }

  return third;
}
