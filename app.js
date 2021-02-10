// const posts = [
//   {title: 'Post One', body: 'This is post one'},
//   {title: 'Post Two', body: 'This is post two'}
// ]

// function createPost(post){
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       posts.push(post)

//       const error = false

//       if(!error){
//         resolve()
//       } else {
//         reject('Error: Something went wrong')
//       }
//       resolve()
//     }, 2000)
//   })
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = ''
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`
//     })
//     document.body.innerHTML = output
//   }, 1000)
// }

// createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(err){
//   console.log(err)
// })

// Async & Await Notes
// async function myFunc(){
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000)
//   })

//   const error = false
//   if(!error){
//     const res = await promise; //Wait until promise is resolved
//     return res
//   } else {
//     await Promise.reject(new Error('Something went wrong'))
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

async function getUsers(){
  // await response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  // Only proceed once it's resolved
  const data = await response.json()

  // only proceed once second promise is resolved
  return data
}

getUsers().then(users => console.log(users))