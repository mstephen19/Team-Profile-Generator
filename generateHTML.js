const fs = require('fs');

const generateCards = (objArray)=>new Promise((resolve, reject)=>{
    if (objArray.length !== 0){
      let cardsArr = [];
      let engOrInt = objArray[0].school ? 'Intern' : 'Engineer'
      for (let obj of objArray){
        let schoolOrGit = obj.school ? `<p>School: ${obj.school}</p>` : `<p><a href="https://github.com/${obj.github}" target="_blank">GitHub</a></p>`
        cardsArr.push(`<div class="card">
        <h2>${engOrInt}</h2>
        <h1>${obj.name}</h1>
        <h3>Employee ID: ${obj.id}</h3>
        <p><a href="mailto:${obj.email}" target="_blank">Email</a></p>
        ${schoolOrGit}
    </div>`)
      }
      resolve(cardsArr);
    } else {
      reject(new Error(err));
    }
  })

function createDocument(man, cards){
  let containers;
  if (cards.length === 1){
    containers = `<div class="container">
    ${cards[0].join('\n')}
  </div>`
  } else {
    containers = `<div class="container">
    ${cards[0].join('\n')}
  </div>

  <div class="container">
    ${cards[1].join('\n')}
  </div>`
  }
  return `<!DOCTYPE html>
  <html>
  <head>
  <title>My Team</title>
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <header>
    <h1>My Team</h1>
  </header>
  <div class="container">
    <div class="card">
      <h2>Manager</h2>
      <h1>${man.managerName}</h1>
      <h3>Employee ID: ${man.managerId}</h3>
      <p><a href="mailto:${man.managerEmail}" target="_blank">Email</a></p>
      <p>Office #: ${man.managerOffice}</p>
    </div>
  </div>

  ${containers}

  </body>
  </html>
  `
}

function generateHTML(data){
  const parsed = JSON.parse(data);
  const manager = parsed.manager;
  let promises = [];
  if (parsed.interns.length !== 0 && parsed.engineers.length !== 0) {
    promises.push(generateCards(parsed.engineers))
    promises.push(generateCards(parsed.interns))
  } else if (parsed.interns.length === 0) {
    promises.push(generateCards(parsed.engineers))
  } else {
    promises.push(generateCards(parsed.interns))
  }
  Promise.all(promises)
    .then(result => fs.writeFile('./dist/myTeam.html', createDocument(manager, result), err => err ? console.error(err): null));
}

module.exports = generateHTML;

// pseudocode for self

// in generateHTML, create a function which for each engineer generates the code for a card with their information and pushes it into an array
// in generateHTML, do the same function for interns
// Promise.all those two functions, then once resolved, take the end results and use them accordingly in main generateHTML function
// return template literal