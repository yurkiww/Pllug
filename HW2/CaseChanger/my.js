function changeCase(str){
    let changedStr = '';

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            changedStr += str[i].toUpperCase();
        } else if (str[i] === str[i].toUpperCase()) {
            changedStr += str[i].toLowerCase()
        } 
    }
    console.log(changedStr)
}

// Гуд працює
// Зауваження по стилю - час від часу забуваєш крапку з комою
