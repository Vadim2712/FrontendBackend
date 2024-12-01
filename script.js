// 1 - 2
function zad1_2() {
    let name = prompt('Как зовут?')
    let age = parseFloat(prompt('Сколько лет?'))
    alert(`Привет ${name}, тебе ${age}.`)
    console.log(`Ваше имя ${name}, ваш возраст ${age}`)
    if (age >= 18)
    {
        console.log('Вы совершеннолетний')
    }
    else
    {
        console.log('Вы несовершеннолетний')
    }
}
// 3
function zad3() {
    const min = 1
    const max = 10
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    let number = prompt('Напишите своё число')

    if (number == random)
    {
        console.log('Поздравляем! Вы угадали число!')
    }
    else if(random < 5)
    {
        console.log('Число меньше 5')
    }
    else if(random > 5)
    {
        console.log('Число больше 5')
    }
}

// 4
function zad4() {
    let a = prompt('Задайте пароль')
    if (a == '')
    {
        console.log('Вы не ввели пароль')
    }
    else
    {
        let b = prompt('Введите пароль')
        if (b == '')
        {
            console.log('Вы не ввели пароль')
        }
        else
        {
            if (a == b)
            {
                console.log('Доступ разрешен')
            }
            if (a != b)
            {
                console.log('Доступ запрещен')
            }
        }
    }
}
// 5
function zad5() {
    let a = parseFloat(prompt('Введите первое число : '))
    let b = parseFloat(prompt('Введите второе число : '))
    let c = prompt('Введите действие: ')

    if (c == '+')
    {
        console.log(a + b)
    }
    else if(c == '-')
    {
        console.log(a - b)
    }
    else if(c == '*')
    {
        console.log(a * b)
    }
    else if(c == '/')
    {
        console.log(a / b)
    }
    else
    {
        console.log('Неверный оператор')
    }
}
//1
function zada1() {
    const name = "Вадим";
    const age = 18; 

    if (age >= 18) {
        console.log("Вы совершеннолетний");
    } else {
        console.log("Вы несовершеннолетний");
    }
}
//2
function zada2() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    let j = 10;
    while (j >= 1) {
        console.log(j);
        j--;
    }
}
//3
function zada3() {
    const lectures = ['СПО', 'ПКС', 'ТИП'];
    const practices = ['Русский язык', 'Английский язык', 'Психология'];

    lectures.push('Фулстек'); 
    practices.unshift('Физкультура'); 

    lectures.forEach(lecture => {
        console.log(lecture);
    });

    practices.forEach(practice => {
        console.log(practice);
    });

    function printArrayAsString(array) {
        console.log(array.join(', '));
    }

    printArrayAsString(lectures);
    printArrayAsString(practices);
}
//4
function zada4(){
    const lectures = ['Матан', 'Обществознание', 'Обработка данных', 'Программирование'];

    function filterLecturesStartingWithO(array) {
        return array.filter(lecture => lecture.startsWith('О'));
    }

    const filteredLectures = filterLecturesStartingWithO(lectures);
    console.log(filteredLectures);
}
//12
function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
        const currentDisplay = window.getComputedStyle(element).display;

        if (currentDisplay === "none") {
            element.style.display = "block"; 
        } else {
            element.style.display = "none"; 
        }
    });
}

window.onload = function() {
    toggleVisibility('.content'); 
};


function logCurrentTime() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

function changeH1TextBasedOnUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    if (utmTerm) {
        document.querySelector("h1").textContent = utmTerm;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    showMessage("Скрипт загружен!");
    logCurrentTime();
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility(".content");
    changeH1TextBasedOnUtmTerm();
});
