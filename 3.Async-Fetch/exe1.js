const request = fetch('document.txt')
console.log('Making the request:', request) // Promise is pending

const response = request.then(response => response.text())
console.log('Treating the response', response) // Promise is pending

response.then(text => {
  console.log(text)
})
.catch(error => {
    console.log('There was an error!', error)
  })
  