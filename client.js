const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

function bonusCalc(employeeArray){
  let bonusArray = [];

  for ( let employee of employees){
    let bonus = 0;

    if (employee.reviewRating === 3){
      bonus += 4;
    } else if (employee.reviewRating === 4){
      bonus += 6;
    } else if (employee.reviewRating === 5){
      bonus += 10;
    }
      let en = Number(employee.employeeNumber)
    if (en < 10000 && en >= 1000 ) {
      bonus += 5;
    }

    let as = Number(employee.annualSalary);
    if (as >= 65000) {
      bonus -= 1;
    }

    if (bonus > 13) {
      bonus = 13
    } else if (bonus < 0) {
      bonus = 0;
    }
let newObject ={
  name: employee.name,
  bonusPercentage: bonus,
  totalCompensation: Math.round((bonus/100 +1)*as),
  totalBonus: Math.round((bonus/100)*as)
}
    bonusArray.push(newObject)
  }

  return bonusArray;
}
console.log(bonusCalc(employees));


// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
