document.getElementById('button1').addEventListener('click', getText)
document.getElementById('button2').addEventListener('click', getJSON)
document.getElementById('button3').addEventListener('click', getAPI)

function getText(){
    fetch('data.txt')
        .then(res => res.text())
        .then(res => {
            document.querySelector('.response').innerHTML = res
        })
        
}

function getJSON(){
    fetch('data.json')
        .then(res => res.json())
        .then((items) => {
            let output = ''
            items.forEach(function(item){
                output += `<li>Name: ${item.Name}</li><li>Place: ${item.Place}</li><li>Occupation: ${item.Occupation}</li> <br>`
            })
            document.querySelector('.response').innerHTML = output
        })
}

function getAPI(){
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then((items) => {
            let output = ''
            items.forEach(function(item){
                output += `<li>username: ${item.login}</li>`
            })
            document.querySelector('.response').innerHTML = output
        })
}