
const BASE_URL = "https://expenses-server-tau.vercel.app/"

const defaultOptions = {
  "Content-Type": "application/json"
}

export const SendNewExpenses = (data,successFunc,errorFunc) => {

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
    successFunc(d);
  }).catch(err=>{
    console.log('err', err)
    errorFunc(err)
  })

}

export const GetAllExpenses = (succesFunc,errorFunc) => {

  fetch(BASE_URL + 'expenses', {
    method: "GET",
    headers: { ...defaultOptions },

  }).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      return Promise.reject("Failed with code "+res.status  )
    }

  }).then(d => {
    succesFunc(d);
  }).catch(err=>{
    errorFunc(err)
  })

}