var EnglishMarks=55;
var BanglaMarks=65;
var MathMarks=50;
var ReligiousMarks=70;
var ScienceMarks=65;

var totalMarks=EnglishMarks+BanglaMarks+MathMarks+ReligiousMarks+ScienceMarks;
console.log(totalMarks);
if(totalMarks/5 >=80 && totalMarks/5 <=100){
    console.log("You got A+. Congratulation!!");
}
else if(totalMarks/5 >=70 && totalMarks/5 <=79){
    console.log("You got A . Good!")
}
else if (totalMarks/5 >=60 && totalMarks/5 <=69){
    console.log("you got A- and you passed the exam. Not Bad !")
}
else {
    console.log("Shame on you, you failed!")
}

var date = new Date();
console.log(date);