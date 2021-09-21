const weight = Number(prompt('What is your weight?'));
const height = Number(prompt('What is your height?'));

//BMI = weight/ (height x height)
const BMI = weight / (height ** 2);

//comparing calculated BMI in a range
if (BMI <= 18.5) {

    console.log(`Your BMI(${BMI}) is low. you need to gain weight`);
} else if (BMI >= 24.9) {

    console.log(`your BMI(${BMI}) is high. you nedd to loose some weight`);
} else {

    console.log(`Your BMI is good. BMI = ${BMI}`)

}

//open index.html file
//open the console to see the output
