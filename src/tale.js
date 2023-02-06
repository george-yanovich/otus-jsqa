


// function kolobok(characterName) {
//  switch (characterName) {
//     case 'дедушка':
//         console.log('Я от дедушки ушел!');
//         break;
//     case 'заяц':
//         console.log('Я от зайца ушел!');
//         break;
//     case 'лиса':
//         console.log('Меня съели!');
//         break;
//  }
// }


// function newYear(characterName) {
//     switch (characterName) {
//         case 'Дед Мороз':
//             console.log(`${characterName}! ${characterName}! ${characterName}!`);
//             break;
//         case 'Снегурочка':
//             console.log(`${characterName}! ${characterName}! ${characterName}!`)
//             break;
//     }
// }


import { faker } from '@faker-js/faker';

const randomName = faker.internet.userName(); // Rowan Nikolaus
const randomEmail = faker.internet.password(); // Kassandra.Haley@erich.biz

console.log(randomName, randomEmail);



