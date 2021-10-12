let animals = document.querySelector('.animals');
let cat = document.getElementById('cat');
let birds = document.querySelector('.birds');

// Функція яка збільшує розмір шрифту всіх елементів списку animals

function enlargeFont(){
    // animals.style.fontSize = "1.5em"
    animals.setAttribute("style", 'font-size: 1.5em');
};
// enlargeFont();


// Функція яка видаляє всі класи останнього елемента списку animals

function deleteClass(){
    animals.lastElementChild.removeAttribute('class');
};
// deleteClass();


// Функція яка змінює background-color наступного елемента після елемента з id="cat"

function changeBg(){
    cat.nextElementSibling.style.backgroundColor = "red";
};
// changeBg();

// Функція яка змінює колір тексту на червоний всім елементам які мають клас dangerous

function changeColor(){      
        for(let i =0;i<animals.childElementCount;i++){
            if(animals.children[i].className.includes("dangerous")){
                animals.children[i].style.color = "red";
                };
            };
};
// changeColor()

// з відступами трохи проблема

// Функція яка видаляє всі елементи які мають клас pet, але якщо крім класу pet є ще інші класи, то вони повинні залишитись

function deletePet(){      
    for(let i =0;i<animals.childElementCount;i++){
        if(animals.children[i].className == "pet"){
            animals.children[i].remove();
        };
    };
};
// deletePet()


// Функція яка додає додає новий елемент в список birds - після цього це має бути список у якому новий елемент є першим

function addBirdStart(){
    let kiwi = document.createElement('li');
    kiwi.textContent = 'Kiwi';
    birds.prepend(kiwi);
};
// addBirdStart();

// Функція яка додає додає новий елемент в список birds - після цього це має бути список у якому новий елемент є останнім

function addBirdEnd(){
    let penguin = document.createElement('li');
    penguin.textContent = 'Penguin';
    birds.append(penguin);
};
// addBirdEnd()


// Функція яка додає додає новий список id="fish" перед списком birds

function addFishList(){
    let fish = document.createElement('ul');
    fish.setAttribute('id','fish');
    birds.before(fish);
};
// addFishList();


// Функція яка змінює порядок елементів в списку animals - останній елемент стає першим, передостанній  - другим, і т.д.

function changeOrder(){
    for(let i =0;i<animals.childElementCount;i++){
        animals.prepend(animals.children[i]);
    };
};
// changeOrder();


// Функція яка перетворює класи елементів списку animals і додає до цих елементів data-* атрибути з назвою класу який був прибраний. Наприклад: <li class="wild dangerous">Tiger</li> => <li data-wild data-dangerous>Tiger</li>

function convertClass(){
    for(let i =0;i<animals.childElementCount;i++){
        let curentName =animals.children[i].getAttribute('class');
        if(animals.children[i].hasAttribute('class')){
            let att = curentName.split(" ");
            att = att.filter(Boolean); // видаляю лишні пробіли між назвами класів, якщо вони є
            for(let j = 0; j< att.length;j++){
                 animals.children[i].setAttribute(`data-${att[j]}`, '');
            };    
        };
        animals.children[i].removeAttribute("class");
    };
   
};
// convertClass();

