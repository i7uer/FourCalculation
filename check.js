const { checkAnswers } = require("./answerChecker");
const fs = require("fs");

const results = checkAnswers("Exercises.txt", "Answers.txt");

// 格式化输出内容
let outputContent = `Correct: ${results.correct} (${results.correctIndexes.join(
  ", "
)})\n`;
outputContent += `Wrong: ${results.wrong} (${results.wrongIndexes.join(", ")})`;

// 输出到 Grade.txt
fs.writeFileSync("Grade.txt", outputContent, "utf8");

console.log("统计结果已写入 Grade.txt。");
