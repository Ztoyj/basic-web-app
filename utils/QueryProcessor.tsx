export default function QueryProcessor(query: string): string {
  const match1 = query.match(/What is (\d+) plus (\d+)\?/);
  const match2 = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/);
  const match3 = query.match(/What is (\d+) multiplied by (\d+)\?/);
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "yujiazhe"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Helen"
    );
  }
  if (match1) {
    const num1 = parseInt(match1[1], 10);
    const num2 = parseInt(match1[2], 10);
    return String(num1+num2);
  }
  if (match2) {
    const num1 = parseInt(match2[1], 10);
    const num2 = parseInt(match2[2], 10);
    const num3 = parseInt(match2[3], 10);
    return String(Math.max(Math.max(num1, num2), num3));
  }
  if (match3) {
    const num1 = parseInt(match3[1], 10);
    const num2 = parseInt(match3[2], 10);
    return String(num1 * num2);
  }
  return "";
}
