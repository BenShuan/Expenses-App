
const BASE_URL = "https://expenses-server-tau.vercel.app/"
// const BASE_URL = "http://localhost:3000/"

const defaultOptions = {
  "Content-Type": "application/json"
}

export const SendNewExpenses = (url,data,successFunc,errorFunc) => {

  fetch(BASE_URL + 'expenses/'+url, {
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

export const GetAllExpenses = async (collection) => {

  return fetch(BASE_URL + 'expenses/'+collection, {
    method: "GET",
    headers: { ...defaultOptions },

  })
  // .then(res => {
  //   if (res.status >= 200 && res.status < 300) {
  //     return res.json();
  //   } else {
  //     return Promise.reject("Failed with code "+res.status  )
  //   }

  // }).then(d => {
  //   succesFunc(d);
  // }).catch(err=>{
  //   errorFunc(err)
  // })

}

export const GetOneExpenses = (url,data,succesFunc,errorFunc) => {

  fetch(BASE_URL + 'expenses/'+url, {
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

export const UpdateExpenses = (url,data,succesFunc,errorFunc) => {

  fetch(BASE_URL + `expenses/`+url, {
    method: "PUT",
    headers: { ...defaultOptions },
    body:JSON.stringify(data)

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

export const DeleteExpenses = (url,data,succesFunc,errorFunc) => {

  fetch(BASE_URL + `expenses/`+url, {
    method: "DELETE",
    headers: { ...defaultOptions },
    body:JSON.stringify(data)

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