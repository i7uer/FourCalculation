const { generateExercises } = require("./expressionGenerator");
const { writeToFile } = require("./fileHandler");
const { calculateAnswers } = require("./answerCalculator");

const args = process.argv.slice(2);
const numQuestions = parseInt(args[0].split("-n")[1]) || 10; // 获取-n参数
const rangeLimit = parseInt(args[1].split("-r")[1]) || 10; // 获取-r参数

if (!rangeLimit) {
  console.error("Error: You must specify a range with -r.");
  process.exit(1);
}

// 生成题目和答案
const exercises = generateExercises(numQuestions, rangeLimit);
const answers = calculateAnswers(exercises);

// 输出到文件
writeToFile("Exercises.txt", exercises);
writeToFile("Answers.txt", answers);

console.log(
  `生成了 ${numQuestions} 道题目，保存在 Exercises.txt 和 Answers.txt。`
);
