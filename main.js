let endPoint = 'https://jsonplaceholder.typicode.com/posts'

function promiseFetching(){

    fetch(endPoint)
    .then( response =>{
        return response.json()
    })
    .then( data =>{
        console.log(data)
    })
  
}

promiseFetching()

async function asyncFetching(){

    let response = await fetch(endPoint)
    let body = await response.json()
    console.log(body)

}   

asyncFetching()
