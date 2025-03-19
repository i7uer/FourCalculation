const fs = require("fs");
const { calculateAnswer } = require("./answerCalculator"); // 从 answerCalculator 导入 calculateAnswer

function checkAnswers(exerciseFile, answerFile) {
  const exercises = fs.readFileSync(exerciseFile, "utf8").split("\n");
  const answers = fs.readFileSync(answerFile, "utf8").split("\n");

  let correctCount = 0;
  let wrongCount = 0;
  let correctIndex = [];
  let wrongIndex = [];

  exercises.forEach((exercise, index) => {
    const calculatedAnswer = calculateAnswer(exercise); // 计算答案
    if (calculatedAnswer == answers[index].trim()) {
      // 使用 trim() 去除多余的空格
      correctCount++;
      correctIndex.push(index + 1);
    } else {
      wrongCount++;
      wrongIndex.push(index + 1);
    }
  });

  return {
    correct: correctCount,
    wrong: wrongCount,
    correctIndexes: correctIndex,
    wrongIndexes: wrongIndex,
  };
}

module.exports = { checkAnswers };
