// const date = new Date();
// console.log(date);

// let ms = Date.parse('2025-01-14T13:51:20.423');
// alert(ms)

//const date1 = new Date('January 16, 2025');
//console.log(date1)

//const date2 = new Date(2020, 9, 10);
//console.log(date2)

//const date = new Date(1000000000009);
//console.log(date);
//const date = Date.now();
//console.log(date);


//const date = new Date();
//console.log('Date: ' + date);


//console.log('Date: ' + date.getDate()); // 15
//console.log('Date: ' + date.getDay()); // 3 
//console.log('Date: ' + date.getMonth()); // 0
//console.log('Date: ' + date.getFullYear()); // 2025
//console.log('Date: ' + date.getHours());

let date = new Date();
const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'nameric',
    hour: '2-digit',
    minutes: '2-digit',
}

const locateUk = date.toLocaleString('Uk-uk', options);
console.log(locateUk);

const locateUs = date.toLocaleString('Us-us', options);
console.log(locateUs);