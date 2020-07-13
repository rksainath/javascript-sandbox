
document.querySelector('.button').addEventListener('click', loadData)


function loadData() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'data.txt', true)

    xhr.onload = function () {
        
        if (this.status == 200) {
            document.querySelector('#response').innerHTML = `<h4>${this.responseText}</h4>`
        }
    }

    xhr.send()
}


