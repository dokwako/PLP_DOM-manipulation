// variables declaration

var myString = "Hello, this is javascipt basics";
console.log(myString);

let Num = 73;
console.log(Num);

const myBoolean = true;
console.log(myBoolean);

var array =[21,33,42,112,222,456,889];
console.log(array);

var myObject ={name:"denzil",age: 21};
console.log(myObject);


// Defining functions to perform simple operetions

// Function to add two numbers
function add(a, b) {
    return a + b;
}
console.log("Add 20 and 3: " + add(20, 3)); 

// Function to subtract the second number from the first
function subtract(a, b) {
    return a - b;
}
console.log("subtract b from a: " + subtract(49, 13)); 

// Function to divide the first number by the second
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.log("Error: Division by zero");
        return null;
    }
}
console.log("Divide 6 by 3: " + divide(6, 3));

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}
      
console.log("Multiply 5 and 3: " + multiply(5, 3));  

// DOM Manipulation
document.getElementById("myButton").addEventListener("click", function() {
    let input = document.getElementById("myInput").value;
    document.getElementById("myText").textContent = input;
});
// Interactive Charts and Graphs using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});