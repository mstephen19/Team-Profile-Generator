let necessaryData = [];

const generateCards = (objArray)=> new Promise((resolve, reject)=>{
  if (objArray){
    let cards = objArray.map(obj => {
      let schoolOrGit;
      obj.school ? schoolOrGit = obj.school : schoolOrGit = obj.github;
      `${obj.name}
      ${obj.id}
      ${obj.email}
      ${schoolOrGit}
      `
    })
    resolve(cards);
  } else {
    reject(new Error('Oh no! Cards failed to generate'))
  }
})

function generateHTML(data){
  necessaryData.push([data.employees, data.interns])
  let promises = []
  necessaryData.map(info => promises.push(generateCards(info)));
  Promise.all(promises)
    .then(generatedCards => createDocument(data, generatedCards))
    .catch(err => console.error(err));
}

function createDocument(allData, cards){
  return `<!DOCTYPE html>
  ${allData.manager}

  ${cards}
  `
}