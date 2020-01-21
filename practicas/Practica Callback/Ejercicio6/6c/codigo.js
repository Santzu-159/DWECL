const posts = [
    {title: "Post1", body: "This is post one"},
    {title: "Post2", body: "This is post two"}
];

async function getPosts(){
    let resultado = await ejecutar();
    console.log("patata");
    setTimeout(()=> 
    {
        let output =``;
        posts.forEach( (post, index) => {
            output += `<li>${post.title}</li>`;
        })
        
        document.body.innerHTML = output;
    }
    , 1000);
}

function createPost (newPost) {
    setTimeout( () => { posts.push(newPost) } , 2000);
}

function ejecutar(){
    
    createPost({title: "Post3", body: "This is post three"});
}