// Доволі шакально зроблено як на мене, не все дороблено, але з горем пополам воно якось та працює
// Трішки не вистачило часу, щоб все доробити та зробити нормально
// Мав трабли з дедлайнами, пострараюсь такого більше не допускати


let el = document.querySelector(".com")

function validateName(inputtxt){ 
    let letters = /^[0-9a-zA-Z]+$/;

      if(inputtxt.value.match(letters) && inputtxt.value.length >= 3 && inputtxt.value.length <= 24 ){
             return true;
      }else{
            return false;
        }
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

