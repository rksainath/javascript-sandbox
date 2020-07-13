let myhttp3 = new myHttp3()

// myhttp3.get('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => console.log(response))
// .catch(err => console.log(err))

data = {
    title: 'Digital Minimalism',
    body: 'Cal Newport'
}

// myhttp3.post('https://jsonplaceholder.typicode.com/posts', data)
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

// myhttp3.put('https://jsonplaceholder.typicode.com/posts/1', data)
//     .then(response => console.log(response))
//     .catch(err => console.log(err))    

myhttp3.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response))
    .catch(err => console.log(err))
