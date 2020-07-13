document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getAPI)

function getText(){
    fetch('data.txt')
        .then(function(response){
            return response.text()
        })
        .then(function(response){
            document.querySelector('.response').innerHTML = response
        })
        
}

function getJSON(){
    fetch('data.json')
        .then(function(response){
           return response.json()
        })
        .then(function(items){
            let output = ''
            items.forEach(function(item){
                output += `<li>Name: ${item.Name}</li><li>Place: ${item.Place}</li><li>Occupation: ${item.Occupation}</li> <br>`
            })
            document.querySelector('.response').innerHTML = output
        })
}

function getAPI(){
    fetch('https://api.github.com/users')
        .then(function(response){
           return response.json()
        })
        .then(function(items){
            let output = ''
            items.forEach(function(item){
                output += `<li>username: ${item.login}</li>`
            })
            document.querySelector('.response').innerHTML = output
        })
}