// const isActive = true;

// const one = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (isActive) {
//             resolve('Person is active');
//         } else {
//             reject('Person isn*t active');
//         }
//     }, 2000);
// });

// console.log('Before one.then()');

// one.then(
//     value => {
//         console.log('onResolve one.then()');
//         console.log(value);
//     },
//     error => {
//         console.log('onReject one.then()');
//         console.log(error);
//     }
// );
// 
// console.log('After one.then()');

// one
//     .then(value => {
//        console.log(value);
 //    })
//     .catch(error => {
//         console.log(error)
//     })
//     .finally(() => console.log('promise settled'));

// const fetchuser = (username, onSucces, onError) => {
//     setTimeout(() => {
//         const isSucces = false;
// 
//         if (isSucces){
//             onSucces('succes value!');
// //         } else{
//             onError('error value');
//         }
//     }, 1500);
// }

// const onFecthSucces = user => {
//     console.log(user);
// }
// const onFecthError = error => {
 //    console.error(error);
// }

// fetchuser("bob", onFecthSucces, onFecthError);

// const fetchUser = username => {
 //    return new Promise(() => {
//         console.log(`Fetching ${username}`)
// 
//         setTimeout(() => {
//             const isSucces = true;
//             if(isSucces){
//                 resolve('succes')
//             } else{
//                 reject('error')
//             }
//         }, timeout);
//     })
// }

// fetchUser("Bob")
// .then(user => console.log(user))
// .catch(error => console.log(error));

// function addNumbers(a, b){
//     return new Promise((resolve, reject) =>{
//         if(typeof a !=='number' || typeof b !== 'number'){
//             reject('rejected');
//         } else {
//             resolve(a + b)
//         }
//     })
// }

// addNumbers(25, 66)
// .then(result => console.log(`Result: ${result}`))
// .catch(error => console.log(error));

//function checkEven(numbers){
//    return new Promise((resolve, reject) => {
//        if(!Array.isArray(numbers) || numbers.some(num => typeof num !== 'number')){
//            reject('Ne virni danji');
//
//        } else if(numbers.some(num => num % 2 !== 0)){
//           reject('ne parni chesla')
//        } else{
//            resolve('vsi chesla parni')
//        }
//    })
//}
//const numbers = [2, 4, 6, 8, 12];

//checkEven(numbers)
//.then(message => console.log("good:", message))
//.catch(error => console.error(error));

//const makePromise = (text, delay) => {
//    return new Promise(resolve => {
//        setTimeout(() => resolve(text), delay)
//    })
//}
//const promiseOne = makePromise('promise one', 1500);
//const promiseTwo = makePromise('promise two', 3000);

//Promise.race([promiseOne, promiseTwo]) 
//.then((value) => {
//    console.log(value)
//})
//.catch((error) => {console.log(error)})




// Any
//Promise.any([
//    new Promise((resolve, reject) => setTimeout(() => reject(new Error('Oops!')), 1000)),
//    new Promise((resolve, reject) => setTimeout(() => resolve('Correct'), 1500)),
//    new Promise((resolve, reject) => setTimeout(() => reject(new Error('error!')), 2000)),

//]).then(value => console.log(value))
//.catch(error => {
//    console.log(error.contructer.name);
//    console.log(error.errors[0]);
//    console.log(error.errors[1]);
//})

// new Promise(resolve => resolve('succes')).then(value => console.log(value));
// Promise.resolve('succes').then(value => console.log(value))

//const makePromise = guestName => {
//    if(guestName === '' || guestName === undefined){
//        return{
//            success: false,
//            message: 'Error guest name'
//        }
//    }
//    return{
//        success: true,
//        message: `Welcome ${guestName}`
//    }
//
//}
//const result = makePromise('David');

//if(result.success){
//    console.log(result.message)
//} else{
//   console.error(result.message)
//}