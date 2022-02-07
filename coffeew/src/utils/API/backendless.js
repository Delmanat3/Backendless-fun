// require("dotenv").config();
// const Backendless=require("backendless")
// const APP_ID=process.env.APP_ID
// const API_KEY=process.env.API_KEY
// Backendless.initApp(APP_ID, API_KEY);
const axios=require("axios")
///////////////////////////////////////////////////////////// POST ROUTE //////////////////////////////////////////////////////////////////

// var objToSave = {name: 'Joe', age: 25};
// Backendless.Data.of('Person').save(objToSave)
//   .then(function (object) {
//     console.log('Object has been saved');
//     return object;
//   })
//   .catch(function (error) {
//     console.log( 'Error ' + error.message);
//     throw error;
//   });

///////////////////////////////////////////////////////////// RETRIEVE ROUTE //////////////////////////////////////////////////////////////////


export const Me=async(token)=>{

    return await axios({
        method: 'put',
        url:`https://avidbat.backendless.app/api/cache/me?timeout=7200000`,
        headers: {UserToken:token},
      });
}

export const LOGIN_USER=async(form)=>{

    return await axios({
        method: 'post',
        url:`https://avidbat.backendless.app/api/users/login`,
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
        url:`https://avidbat.backendless.app/api/users/register`,
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

  return  await axios.get(" https://api.backendless.com/EE3689CE-9F42-4757-FFA5-B03A97D43E00/AA2D74E7-F77B-4ADA-80B7-C3FE8930EBCE/data/Product")

}
// export const Me=async(query)=>{
// return await axios.get(`https://api.backendless.com/EE3689CE-9F42-4757-FFA5-B03A97D43E00/AA2D74E7-F77B-4ADA-80B7-C3FE8930EBCE/data/Users/${query}`)
// }

///////////////////////////////////////////////////////////// PUT ROUTE //////////////////////////////////////////////////////////////////
// Backendless.Data.of('Person').findFirst()
//   .then(function (object) {
//     // update the object - assign a random value
//     // to the "age" property
//     object.age = Math.round( Math.random() * 50 );

//     // now save the object back in the database
//     Backendless.Data.of('Person').save(object)
//       .then( function (savedObject) {
//         console.log( 'Object has been updated' );
//       })
//       .catch(function (error) {
//         console.log( 'Error updating object ' + 
//                      error.message);
//         throw error;
//       });
//   })
//   .catch(function (error) {
//     console.log( 'Error ' + error.message);
//     throw error;
//   });
///////////////////////////////////////////////////////////// DELETE ROUTE //////////////////////////////////////////////////////////////////

//   Backendless.Data.of('Person').findFirst()
//   .then(function (object) {
//     // the "object" argument is the retrieved 
//     // object from the database. Let's delete it:
//     Backendless.Data.of('Person').remove(object)
//       .then( function (savedObject) {
//         console.log( 'Object has been removed' );
//       })
//       .catch(function (error) {
//         console.log( 'Error removing object ' + 
//                      error.message);
//         throw error;
//       });
//   })
//   .catch(function (error) {
//     console.log( 'Error retrieving object ' + 
//                  error.message);
//     throw error;
//   });
///////////////////////////////////////////////////////////// ADD_USER //////////////////////////////////////////////////////////////////

// function userRegistered( user )
// {
//   console.log( "user has been registered" );
// }

// function gotError( err ) 
// {
//   console.log( "error message - " + err.message );
//   console.log( "error code - " + err.statusCode );
// }

// var user = new Backendless.User();
// user.name="curtis"
// user.email = "dman@demo.com";
// user.password = "1234";

// Backendless.UserService.register( user )
//   .then( userRegistered )
//   .catch( gotError );

///////////////////////////////////////////////////////////// LOGIN_USER //////////////////////////////////////////////////////////////////

// function userLoggedIn( user )
// {
//   console.log( "user has logged in" );
//   // any other API call at this point
//   // or later in the app will be executed
//   // on behalf of the logged in user
// }

// function gotError( err ) // see more on error handling
// {
//   console.log( "error message - " + err.message );
//   console.log( "error code - " + err.statusCode );
// }

// var login = "me@me.com";
// var password = "bdgc";
// Backendless.UserService.login( login, password )
//  .then( userLoggedIn )
//  .catch( gotError );