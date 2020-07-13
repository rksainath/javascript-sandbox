document.getElementById('button1').addEventListener('click', loadCustomer)
document.getElementById('button2').addEventListener('click', loadCustomers)

function loadCustomer() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customer.json', true)

    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText)
            // console.log(customer)
            const output =
                `<ul>
        <li>Id: ${customer.id}</li>
        <li>Name: ${customer.Name}</li>
        <li>Place: ${customer.Occupation}</li>
        <li>Occupation: ${customer.Place}</li>
        </ul>`
            // console.log(output)
            document.getElementById('customer').innerHTML = output
        }
    }

    xhr.send()
}

function loadCustomers() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customers.json', true)
    let output = ''
    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText)
            
            customers.forEach(function (customer) {
               output+=  `<ul>
        <li>Id: ${customer.id}</li>
        <li>Name: ${customer.Name}</li>
        <li>Place: ${customer.Occupation}</li>
        <li>Occupation: ${customer.Place}</li>
        </ul>`
        
            })
            
            document.getElementById('customers').innerHTML = output
        }
    }

    

    xhr.send()
}