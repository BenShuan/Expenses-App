
const BASE_URL = "http://localhost:3000/"

const defaultOptions = {
  "Content-Type": "application/json"
}

export const SendNewExpenses = (data) => {

  fetch(BASE_URL + 'expenses', {
    method: "POST",
    headers: { ...defaultOptions },
    body: JSON.stringify(data)

  }).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      return Promise.reject("Failed with code "+res.status  )
    }

  }).then(d => {
    console.log('data', d)
  }).catch(err=>{
    console.log('err', err)
  })

}