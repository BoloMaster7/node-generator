
const fs= require('fs')


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
  obj.lastName =lastNames[Math.floor(Math.random()*lastNames.length)];
  obj.age =(Math.round(Math.random()*(78-18)+18));
  people.push(obj)
  
  }
 
 let peopleJson = JSON.parse(JSON.stringify(people))
 console.log('array after json', peopleJson)

 const jsonString = JSON.stringify(peopleJson)
 fs.writeFile('./people.json', jsonString, err => {
  if (err) {
    console.log('Error writing file', err)
} else {
    console.log('Successfully wrote file')
}

});
