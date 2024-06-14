

// const count = function(fromCount = 0, toCount = 5, step = 1){
//     console.log(`fromCount = ${fromCount}, toCount = ${toCount}, step = ${step}`);
//     for (let i = fromCount; i<= toCount; i += step);{
//         console.log(i);
//     }
// };

// count(1, 5); 

// const sum = function(amount, balance){
//     if (amount === 0){
//         console.log('Enter sum more then 0');
//     }
//     else if(amount > balance){
//         console.log('Not enough money');
//     }
//     else{
//         console.log('Purschased!');
//     }
// };
// sum(400, 800);
// sum(0, 800);
// sum(2000, 800);

const sum = function (amount, balance){
    if(amount === 0){
        console.log('Enter sum more then 0');
        return;
    }
    if(amount > balance){
        console.log('Not enough money');
        return;
    }
    console.log('Purschased!');
}
sum(400, 800);
sum(0, 800);
sum(2000, 800);