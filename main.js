function intloop() {
    for(let i = 1; i != 11; i++) {
        alert(i);
    }
}

function question() {
    res1 = prompt('Вопрос');
    if(res1 == 'нет') alert('Педика ответ');
}

function intloopseven() {
    var i = 0;
    while(i != 11) {
        if(i != 7) alert(i);
        i++;
    }
}

function intloopatob() {
    var a = +prompt("первое число");
    var b = +prompt("второе число");
    var sum = 0;
    while(a != b + 1) {
        sum += a;
        a += 1;
        alert(sum);
    }
    alert(sum);
}