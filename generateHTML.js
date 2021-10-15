let necessaryData = [];

const generateCards = (objArray)=> new Promise((resolve, reject)=>{
  if (objArray){
    let cards = objArray.map(obj => {
      `
      
      `
    })
    resolve(cards);
  } else {
    reject(new Error('Oh no!'))
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

  `
}