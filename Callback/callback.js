let posts = [{
    id: 1,
    category: 'Science',
    duration: '5 minutes'
},
{
    id: 2,
    category: 'Maths',
    duration: '10 minutes'
}]

function getPosts(){
    
    setTimeout(function(){
        let output = ''
        posts.forEach(function(post){
        output += `<li>Id: ${post.id}</li>
        <li>Category: ${post.category}</li>
        <li>Duration: ${post.duration}</li>
        <br>`
        
    })
    document.body.innerHTML = output
},1000)
}

function createPost(post,callback){
    setTimeout(function(){
        posts.push(post)
        callback()
    },2000)
}

createPost({id: 3,
    category: 'Computer Science',
    duration: '15 minutes'},getPosts)