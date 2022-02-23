function managerHtml(manager) {
  return `<div class="card" style="width: 18rem; margin: 20px;">
    <div class="card-header">
      ${manager.name}
    </div>
    <div class="card-header">
      ${manager.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: ${manager.email}</li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>`
}
function engineerHtml(engineer) {
  return `<div class="card" style="width: 18rem; margin: 20px;">
    <div class="card-header">
      ${engineer.name}
    </div>
    <div class="card-header">
    ${engineer.getRole()}
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: ${engineer.email}</li>
      <li class="list-group-item"><a href="https://github.com/${engineer.github}">Github: ${engineer.github}</a></li>
    </ul>
  </div>`
}
function internHtml(intern) {
  return `<div class="card" style="width: 18rem; margin: 20px;">
    <div class="card-header">
      ${intern.name}
    </div>
    <div class="card-header">
    ${intern.getRole()}
  </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: ${intern.getEmail()}</li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>`
}

function HtmlGenerator(data) {
  const htmlArray = []
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === 'Manager') {
      htmlArray.push(managerHtml(data[i]))
    }
    if (data[i].getRole() === 'Intern') {
      htmlArray.push(internHtml(data[i]))
    }
    if (data[i].getRole() === 'Engineer') {
      htmlArray.push(engineerHtml(data[i]))
    }
  }
  return htmlArray.join('')
}
module.exports = team => {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
        <title>HtmlGenerator</title>
      </head>
      <body style="background-color: aquamarine;">
      <header  style="font-size: larger;text-align: center;text-decoration: underline;background-color: rgb(177, 204, 255);"">Team Builder</header>
        <div class="row">
            ${HtmlGenerator(team)}
        </div>
    
      
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    
       
      </body>
    </html>`

}
