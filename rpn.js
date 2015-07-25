// sample input
const x = '3 5 6 9 + * -';
const y = '2 4 / 5 6 - *';

const ops = {
  '+': function(a, b) { return a + b; },
  '-': function(a, b) { return a - b; },
  '/': function(a, b) { return a / b; },
  '*': function(a, b) { return a * b; },
  '^': function(a, b) { return Math.pow(a, b); }
};

function parse(str) {
  return str.split(/\s+/);
}

function evalExpr(expr) {
  const term = expr.pop();

  if (term in ops) {
    const arg2 = evalExpr(expr);
    const arg1 = evalExpr(expr);

    if (isNaN(arg1) || isNaN(arg2)) throw new SyntaxError('what? why?');
    return ops[term](arg1, arg2);
  }
  return parseFloat(term, 10);
}

evalExpr(parse(x)); // -72
