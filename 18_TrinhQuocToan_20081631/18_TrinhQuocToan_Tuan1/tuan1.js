//bai1

const markWeight1 = 78; 
const markHeight1 = 1.69; 
const johnWeight1 = 92; 
const johnHeight1 = 1.95; 

const markWeight2 = 95; 
const markHeight2 = 1.88; 
const johnWeight2 = 85; 
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / (markHeight1 * markHeight1);
const johnBMI1 = johnWeight1 / (johnHeight1 * johnHeight1);

const markBMI2 = markWeight2 / (markHeight2 * markHeight2);
const johnBMI2 = johnWeight2 / (johnHeight2 * johnHeight2);

const markHigherBMI1 = markBMI1 > johnBMI1;
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Mark has a higher BMI than John in Data 1:", markHigherBMI1);

console.log("\nData 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Mark has a higher BMI than John in Data 2:", markHigherBMI2);

//bai2

console.log("Data 1:");
console.log(`Mark's BMI (${markBMI1}) is ${markHigherBMI1 ? "higher" : "lower"} than John's (${johnBMI1})!`);

console.log("\nData 2:");
console.log(`Mark's BMI (${markBMI2}) is ${markHigherBMI2 ? "higher" : "lower"} than John's (${johnBMI2})!`);
//bai3
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];
const calculateAverage = (scores) => scores.reduce((sum, score) => sum + score, 0) / scores.length;

const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);

console.log("Data 1:");
console.log("Dolphins average score:", dolphinsAverage);
console.log("Koalas average score:", koalasAverage);

if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
  console.log("Koalas win the competition!");
} else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log("It's a draw with both teams having a minimum score of 100!");
} else {
  console.log("No team wins the trophy!");
}
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsAverageBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAverageBonus1 = calculateAverage(koalasScoresBonus1);

console.log("\nData Bonus 1:");
console.log("Dolphins average score:", dolphinsAverageBonus1);
console.log("Koalas average score:", koalasAverageBonus1);

if (dolphinsAverageBonus1 > koalasAverageBonus1 && dolphinsAverageBonus1 >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverageBonus1 > dolphinsAverageBonus1 && koalasAverageBonus1 >= 100) {
  console.log("Koalas win the competition!");
} else if (dolphinsAverageBonus1 === koalasAverageBonus1 && dolphinsAverageBonus1 >= 100 && koalasAverageBonus1 >= 100) {
  console.log("It's a draw with both teams having a minimum score of 100!");
} else {
  console.log("No team wins the trophy!");
}

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const dolphinsAverageBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAverageBonus2 = calculateAverage(koalasScoresBonus2);

console.log("\nData Bonus 2:");
console.log("Dolphins average score:", dolphinsAverageBonus2);
console.log("Koalas average score:", koalasAverageBonus2);

if (dolphinsAverageBonus2 > koalasAverageBonus2 && dolphinsAverageBonus2 >= 100) {
  console.log("Dolphins win the competition!");
} else if (koalasAverageBonus2 > dolphinsAverageBonus2 && koalasAverageBonus2 >= 100) {
  console.log("Koalas win the competition!");
} else if (dolphinsAverageBonus2 === koalasAverageBonus2 && dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
  console.log("It's a draw with both teams having a minimum score of 100!");
} else {
  console.log("No team wins the trophy!");
}
//bai4
const billValues = [275, 40, 430];
billValues.forEach((bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const totalValue = bill + tip;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
});
//bai5
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins!");
  }
};

const dolphinsScores1 = [44, 23, 71];
const koalasScores1 = [65, 54, 49];

const dolphinsScores2 = [85, 54, 41];
const koalasScores2 = [23, 34, 27];

const avgDolphins1 = calcAverage(...dolphinsScores1);
const avgKoalas1 = calcAverage(...koalasScores1);

const avgDolphins2 = calcAverage(...dolphinsScores2);
const avgKoalas2 = calcAverage(...koalasScores2);

console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1);

console.log("\nData 2:");
checkWinner(avgDolphins2, avgKoalas2);
//bai6
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  const tipForBill100 = calcTip(100);
  console.log("Tip for bill 100:", tipForBill100);
  const bills = [125, 555, 44];
  const tips = bills.map((bill) => calcTip(bill));
  const total = bills.map((bill, index) => bill + tips[index]);
  
  console.log("Bills:", bills);
  console.log("Tips:", tips);
  console.log("Total:", total);
//bai7
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    },
  };
  
  const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
      this.bmi = this.mass / (this.height ** 2);
      return this.bmi;
    },
  };
  
  mark.calcBMI();
  john.calcBMI();
  if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
  } else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
  }
//bai8  
