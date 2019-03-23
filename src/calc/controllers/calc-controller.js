const arithmeticOperations = new Map([
  ["plus", (a, b) => a + b],
  ["minus", (a, b) => a - b],
  ["div", (a, b) => a / b],
  ["multi", (a, b) => a * b]
]);

function getArithmeticOperations(operation) {
  return arithmeticOperations.get(operation);
}

function getNumber(number) {
  return parseFloat(number);
}

const sum = (req, res) => {
  let { op, n1, n2 } = req.query;
  op = getArithmeticOperations(op);
  n1 = getNumber(n1);
  n2 = getNumber(n2);

  if (!op || !n1 || !n2) {
    return res.status(400).json({
      status: "error",
      message: "One or more of the fields is incorrect"
    });
  }

  const sum = op(n1, n2);

  return res.status(200).json({
    status: "success",
    data: `${sum}`
  });
};

module.exports = {
  sum
};
