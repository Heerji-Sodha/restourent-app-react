import {Firebase} from './../../Config/Firebase/Firebase'




function Login(state,history){
return dispatch => {
Firebase.auth().signInWithEmailAndPassword(state.email,state.password)
.then( async function(res) {
console.log(res.user.emailVerified)
await Firebase.database().ref("/").child(state.email.slice(0,-12)).on('child_added' ,snap => {
let data = snap.val()
console.log(data)
if(res.user.emailVerified && data === 'user'){
history.push("/MainDaishbord")
}

else if(res.user.emailVerified && data === 'restorent'){
  alert('htha')
  history.push("/MainDaishbord")
}

})
dispatch({
  type :"login",
})
})
.catch(function(error) {
    var errorMessage = error.message;
console.log(errorMessage)
    // ...
  })
}
}

function signupFunc(state){
  console.log(state)
    return (dispatch)=>{
    Firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
    .then(function(res){
      console.log(res)
        Firebase.firestore().collection("user").add(state)
        Firebase.database().ref('/').child(state.email.slice(0,-12))
        .set({type: 'user'}).then(function(){
        console.log("save database")
        }).catch(function(err){
        alert(err)
        })

    }).then(function(){
      Firebase.auth().currentUser.sendEmailVerification().then(function(){
        alert("send Email")

        dispatch({
          type: "true"
        })
      })
      .catch(function(error){
        console.log(error)
      })
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}
}


function signupFunc1(state){
  console.log(state)
    return (dispatch)=>{
    Firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
    .then(function(res){
      console.log(res)
        Firebase.firestore().collection("user").add(state)
        Firebase.database().ref('/').child(state.email.slice(0,-12))
        .set({type: 'restorent'}).then(function(){
        console.log("save database")
        }).catch(function(err){
        alert(err)
        })

    }).then(function(){
      Firebase.auth().currentUser.sendEmailVerification().then(function(){
        alert("send Email")

        dispatch({
          type: "true"
        })
      })
      .catch(function(error){
        console.log(error)
      })
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}
}

// let Addproduct = (state)=>{
//   console.log(state)
//   return dispatch => {

//     let user = Firebase.auth().currentUser.email
//     state.email = user
//     Firebase.firestore().collection(user.slice(0,-12)).add(state)  
//     dispatch({
//       type :"login",
//       // login : res.user.emailVerified
//     })       
// }
// }

// let mayproduct = ()=> {
//   let user = Firebase.auth().currentUser.email
//  let allproduct = []
// return dispatch => {
//   Firebase.firestore().collection(user.slice(0,-12)).get()
//   .then(data=>{
//         console.log(data)
//         data.forEach(value=>{
//             let result = value.data();
//              allproduct.push(result);
//              dispatch({
//                type : 'product',
//                allproduct : allproduct
//              })
//         })
//     })
// }
// }

export {
  Login,
  signupFunc,
  signupFunc1
  // ,Addproduct
}












