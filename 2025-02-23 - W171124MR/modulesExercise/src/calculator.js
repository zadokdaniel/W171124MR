export function duplicate(str, num) {
  return new Array(num).fill(str).join("");

  let duplicated = "";
  for (let i = 0; i < num; i++) {
    duplicated += str;
  }
  return duplicated;
}
