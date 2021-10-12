// Доволі шакально зроблено як на мене, не все дороблено, але з горем пополам воно якось та працює
// Трішки не вистачило часу, щоб все доробити та зробити нормально
// Мав трабли з дедлайнами, пострараюсь такого більше не допускати


let el = document.querySelector(".com")

function validateName(inputtxt){ //юзай camelCase коли називаєш змінні
    let letters = /^[0-9a-zA-Z]+$/;

      if(inputtxt.value.match(letters) && inputtxt.value.length >= 3 && inputtxt.value.length <= 24 ){
             return true;
      }else{
            return false;
        }
      }

//ой відступи попердолило
//функцію можна спростити трохи до

function validateNameExample(inputtxt){ 
  let letters = /^[0-9a-zA-Z]+$/;
  return inputtxt.value.match(letters) && inputtxt.value.length >= 3 && inputtxt.value.length <= 24;
}

      
function validateNickname(inputtxt){ 
      let letters = /^[A-Za-z]+$/;
    if(inputtxt.value.match(letters) && inputtxt.value.length >= 1 && inputtxt.value.length <= 100){
           return true;
    }else{
          return false;
      }
    }

    function validateComment(inputtxt){ 
        if(inputtxt.value.length >= 1 && inputtxt.value.length <= 1000){
               return true;
        }else{
              return false;
          }
        }
//функція не перевіряє символи

function doAll(a,b,c){
    validateNickname(a)
    validateName(b)
    validateComment(c)
    
    if(validateNickname(a)&& validateName(b) && validateComment(c)){
        let newComment = document.createElement("div");
        document.body.after(newComment)
        newComment.insertAdjacentHTML('afterbegin',c.value+" ");
        let br = document.createElement("br");
        document.body.after(br)
        newComment.insertAdjacentHTML('afterbegin',b.value+" ");
        newComment.insertAdjacentHTML('afterbegin',a.value+"-");
    }
    document.form.reset();
}

// Загалом - дійсно шакально) Я пробував перевіряти, але дуже багато зауважень.
// Частина завдань не зроблена взагалі, в тих, що зроблені - теж не все є повністю.
// Дуже погана якість коду, видно, що писалося поспіхом
// Рекомендую сісти і переписати це все нормально з нуля, коли в тебе буде вільний час
// Можеш потім, як зробиш, навіть мене пінганути, постараюся подивитися ще раз,
// але зараз оціню те, що є

