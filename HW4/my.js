//Створити функцію яка б отримувала параметром масив з елементів різних типів (строки, масиви, числа, об’єкти і т.д), на виході має повернути строку у camel case (приклад строки у camel case: thisIsExampleOfTheCamelCase), яка б поєднувала в собі всі елементи масиву які є строками.

let arr1 = [1,2,'bob',true,'john','casul']

function toCamelCase(array){
   
   // ЧОМУСЬ В МЕНЕ ВРАЖЕННЯ ЩО Я ЯКОСЬ НЕПРАВИЛЬНО ВИКОРИСТОВУЮ MAP & FILTER, ТОМУ 2 ВАРІАНТ МЕНІ ЗДАВСЯ СИЛЬНО ПРОСТІШИМ

//      let newArr = array.filter((item,i,arr)=>{  
//                    return typeof item == 'string';        

//     }).map((item,i,arr)=>{
//             return item[0].toUpperCase()+ item.slice(1);  
           
//     }).map((item,i,arr)=>{
//         return item.split(' ');

// })

// return newArr.join('')[0].toLowerCase() + newArr.join('').slice(1);
let str= [];
let newStr = [];
     for (let i in array){
        if(typeof array[i] === "string"){           
                str.push(array[i][0].toUpperCase()+ array[i].slice(1));                                            
             }    
             
     }
     str = str.join('')
     newStr.push(str[0].toLowerCase()+str.slice(1))
     return newStr.join();
 
}
// console.log(toCamelCase(arr1))


//  Ні, все правильно використовуєш. Єдине - що не обов'язково в функцію всередині передавати всі дані,
//  можна лише item. Наприклад, в твоєму випадку функція виглядала б дуже елегантно без лишнього коду
let newArr = arr1.filter(item => typeof item === 'string')
    .map(item => item[0].toUpperCase() + item.slice(1))
    .map(item => item.split(' '))



//Створити функцію яка отримує параметром масив цілих чисел 1 <= value <= 26, і повертала б масиву у якому кожен елемент масиву є літерою англійського алфавіту відповідний конкретному елементу масива (наприклад 1 = a, 2 = b, 3 = c, 4 = d, …). Приклад [4, 3, 22, 11] - в результаті маємо отримати [d, c, v, k]

// function toAlphabet(arr){
//   let newArr= []
//     for (let i in arr){
        
//         newArr.push(String.fromCharCode(arr[i]+96))
//     }
//    return newArr;
// }
// console.log(toAlphabet([1,2,3,5]))

function toAlphabet(arr){
    let newArr = arr.map((item,i,index)=>{
            return String.fromCharCode(item+96)
    })
    return newArr;
  }
//   console.log(toAlphabet([1,2,3,5]))



//Створити функцію яка параметром отримує об’єкт (наприклад {a: 22, b: -11.35, c: 41.2, d: ‘hello’}) і повертає новий об’єкт у який містить тільки числа більші рівні 0.


function filterPositive(obj){
    for(let i in obj) {
      
        if(typeof obj[i]!=='number' ||  obj[i]<0){
            delete obj[i];
        }
    }
    return obj;
  };
//   console.log(filterPositive({a: 22, b: 0, c: 41.2, d: "kek"}))

// не дуже очевидно, але непогано. Єдиний нюанс - у тебе ще змінюється значення, яке ти передаєш в функцію ззовні
// такого ліпше уникати і не міняти передану змінну (якщо це об'єкт або масив), а створювати нову



// Скрипт який виводить в консоль дату і час коли DOM побудований, але css, зображення ще не завантажились.



document.addEventListener("DOMContentLoaded", ()=> {
    console.log(Date());
 });

// Скрипт який виводить в консоль дату і час коли DOM побудований і css, зображення вже завантажились.

window.onload = () => {
    console.log(Date());
 };


// Скрипт який виводить в консоль дату і час коли юзер натиснув на закрити вкладку або перезавантажити сторінку.

window.onbeforeunload = ()=> {
    console.log(Date());
 };


// Скрипт який виводить повертає назву браузера та назву операційної системи через дефіс "-" як одну строку.

console.log(navigator.appCodeName + "-" + navigator.platform);


// Скрипт який змушує браузер показувати сповіщення, коли ви намагаєтесь перезавантажити сторінку, видалити вкладку, чи вимкнути браузер.

window.onbeforeunload = () =>{
    return false;
 };

 // власне, не виводиться сповіщення. Мав би показуватись алерт

// Скрипт який виводить в консоль скільки секунд юзер перебував на сторінці, після того як юзер натиснув на закрити вкладку або перезавантажити сторінку.

window.onload = () => {
    start = new Date();
 }
 
 window.onbeforeunload = () => {
    end = new Date();
    console.log((start.getTime() - end.getTime()) / 1000);
 }


 // в загальному - гуд, окрема рекомендація - слідкуй за стилем коду, щоб всюди були 
 // однакові акуранті відступи, без лишніх пробілів і т.п. Тоді код буде набагато простіше читати
 // і розбирати як тобі, так і мені