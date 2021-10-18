const fs = require('fs');

const generateCards = (objArray)=>new Promise((resolve, reject)=>{
  if (objArray){
    let cardsArr = [];
    let engOrInt = objArray[0].school ? 'Intern' : 'Engineer'
    for (let obj of objArray){
      let schoolOrGit = obj.school ? `<p>School: ${obj.school}</p>` : `<p><a href="https://github.com/${obj.github}">GitHub</a></p>`
      cardsArr.push(`<div class="card">
      <h2>${engOrInt}</h2>
      <h1>${obj.name}</h1>
      <h3>Employee ID: ${obj.id}</h3>
      <p><a href="mailto:${obj.email}">Email</a></p>
      ${schoolOrGit}
    </div>`)
    }
    resolve(cardsArr);
  } else {
    reject(err);
  }
})


function createDocument(man, cards){
  return `<!DOCTYPE html>
  <html>
  <head>
  <title>My Team</title>
  <link rel="stylesheet" href="style.css">
  </head>
  <body>

  <div class="container">
    <div class="card">
      <h2>Manager</h2>
      <h1>${man.managerName}</h1>
      <h3>Employee ID: ${man.managerId}</h3>
      <p><a href="mailto:${man.managerEmail}">Email</a></p>
      <p>Office #: ${man.managerOffice}</p>
    </div>
  </div>
  <div class="container">
    ${cards[0].join('\n')}
  </div>

  <div class="container">
    ${cards[1].join('\n')}
  </div>


  </body>
  </html>
  `
}

function generateHTML(data){
  const parsed = JSON.parse(data);
  const manager = parsed.manager;
  let promises = [generateCards(parsed.engineers), generateCards(parsed.interns)]
  Promise.all(promises)
    .then(result => fs.writeFile('./dist/myTeam.html', createDocument(manager, result), err => err ? console.error(err): null));
}

module.exports = generateHTML;

// in generateHTML, create a function which for each engineer generates the code for a card with their information and pushes it into an array
// in generateHTML, do the same function for interns
// Promise.all those two functions, then once resolved, take the end results and use them accordingly in main generateHTML function
// return template literal

// MAYBE you can just put functions inside of template literals? then it will be fairly easier