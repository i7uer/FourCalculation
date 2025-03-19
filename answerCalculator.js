function calculateAnswer(expression) {
  const evalResult = eval(expression);
  if (evalResult instanceof Fraction) {
    return evalResult.toFraction(true); // 转换为分数格式
  }
  return evalResult;
}

function calculateAnswers(exercises) {
  return exercises.map(calculateAnswer);
}

function calculateAnswer(expression) {
  const evalResult = eval(expression);
  return evalResult; // 注意这里只计算值，如果涉及分数处理，需要做进一步修改
}

module.exports = { calculateAnswers, calculateAnswer }; // 添加 calculateAnswer
