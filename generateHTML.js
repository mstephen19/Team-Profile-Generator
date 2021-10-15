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
  let parsed = JSON.parse(data);
  necessaryData.push(parsed.engineers, parsed.interns)
  // console.log(necessaryData);
  // console.log('Before:' + necessaryData);
  let promises = []
  necessaryData.forEach(info => promises.push(generateCards(info)));
  // console.log(promises)
  // console.log('After:' + necessaryData);
  // Promise.all(promises)
  //   .then(generatedCards => {
  //     // console.log('Cards' + generatedCards);
  //     // console.log('AllData' + parsed);
  //     // createDocument(parsed, generatedCards)
  //   })
  //   .catch(err => console.error(err));
}

// function createDocument(allData, cards){
//   return `<!DOCTYPE html>
//   ${allData.manager}

//   ${cards}
//   `
// }

module.exports = generateHTML;