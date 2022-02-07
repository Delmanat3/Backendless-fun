
const axios=require("axios")


export const Me=async(token)=>{

    return await axios({
        method: 'put',
        url:`https://{xxx}.backendless.app/api/cache/me?timeout=7200000`,
        headers: {UserToken:token},
      });
}

export const LOGIN_USER=async(form)=>{

    return await axios({
        method: 'post',
        url:`https://{xxx}.backendless.app/api/users/login`,
        headers: {ContentType:"application/json"}, 
        data: {
          login: form.email,
          password:form.password, 
        }
      });
}

export const ADD_USER=async(form)=>{

    return await axios({
        method: 'post',
        url:`https://{xxx}.backendless.app/api/users/register`,
        headers: {ContentType:"application/json"}, 
        data: {
          email: form.email,
          password:form.password, 
          firstName: form.firstName,
          lastName:form.lastName, 

        }
      });
}
export const bigLoad=async()=>{

  return  await axios.get(" https://api.backendless.com/{xxx}/{xxx}/data/Product")

}