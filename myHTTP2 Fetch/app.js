let myhttp2 = new myHttp2()

// myhttp2.get('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => console.log(response))
// .catch(err => console.log(err))

data = {
    title: 'Digital Minimalism',
    body: 'Cal Newport'
}

// myhttp2.post('https://jsonplaceholder.typicode.com/posts', data)
//     .then(response => console.log(response))
//     .catch(err => console.log(err))

// myhttp2.put('https://jsonplaceholder.typicode.com/posts/1', data)
//     .then(response => console.log(response))
//     .catch(err => console.log(err))    

myhttp2.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => console.log(response))
    .catch(err => console.log(err))
