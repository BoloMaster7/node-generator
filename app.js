
const fs= require('fs')

// fs.writeFile('outputfile.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

const genders = ['M', 'F']
const maleNames = ['John', 'Paul', 'Kerry', 'Bob', 'Tom', 'Bruce', 'Steve']
const femaleNames =['Judy', 'Panam', 'Meredith', 'Ann', 'Sue', 'Veronica', 'Zoey']
const lastNames =['Brown', 'Black', 'Scott', 'Spears', 'Lavigne', 'Alvarez', 'Palmer']
const people = []


function randChoice(arr) {
  return arr[Math.floor(Math.random()*arr.length)]}

  for (i=1; i<=20; i++){
    let obj={
      gender:'',
      firstName: '',
      lastName: '',
      age: '',
    }

    const renderGender = randChoice(genders);
    obj.gender = renderGender;


    if(renderGender == 'M'){
      obj.gender = renderGender
      const renderName = randChoice(maleNames)
      obj.name = renderName;
  }else if (renderGender == 'F') 
      {obj.gender = renderGender
      const renderName = randChoice(femaleNames)
      obj.name = renderName;
  }
  obj.lastName =Math.random(lastNames);
  people.push(obj)
 

  }
 console.log('rendername', people)