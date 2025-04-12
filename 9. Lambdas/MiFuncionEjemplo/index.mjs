export const handler = async (event, context) => {
  const params = event.queryStringParameters ?? { n: "0" };
  const n = parseInt(params.n, 10) || 0;
  return {
    statusCode: 200,
    body: JSON.stringify({
      n,
      values: Fibonacci(n)
    })
  }
};

function Fibonacci(n) {
  const result = [0, 1];
  while (result.length < n) {
    const a = result[result.length - 1];
    const b = result[result.length - 2];
    result.push(a + b);
  }
  return result.slice(0, n);
}
