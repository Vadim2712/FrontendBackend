// Проверка валидации формы
function validateForm() {
    const form = document.getElementById("myForm");
    const inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
    const checkbox = form.querySelector("input[type='checkbox']");
    let valid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
        }
    });

    if (!checkbox.checked) {
        valid = false;
    }

    document.getElementById("submitBtn").disabled = !valid;
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    form.addEventListener("input", validateForm);
    form.addEventListener("change", validateForm);
    validateForm(); // Initial validation
});

// Открытие/закрытие формы
function openForm_1(){
    const form = document.getElementById("modal");
    const text = document.getElementById("serviceName");
    console.log(text);
    text.innerText = "Сайт-визитка";
    form.style.display = 'block';
}
function openForm_2(){
    const form = document.getElementById("modal");
    const text = document.getElementById("serviceName");
    text.innerText = "Корпоративный сайт";
    form.style.display = 'block';
}
function openForm_3(){
    const form = document.getElementById("modal");
    const text = document.getElementById("serviceName");
    text.innerText = "Интерент-магазин";
    form.style.display = 'block';
}
function closeForm(){
    document.getElementById("modal").style.display = "none";
}
function sentForm(){
    document.getElementById("Text").style.display = "block";
}

// Закрываем модальное окно при клике вне его области
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
// Уведомление об отправке
document.getElementById('submitBtn').addEventListener('click', () => alert('Заявка отправлена!'));

// Получаем кнопку
const scrollToTopButton = document.getElementById('scrollToTop');

// Показываем кнопку при прокрутке вниз
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Показываем кнопку
    } else {
        scrollToTopButton.style.display = "none"; // Скрываем кнопку
    }
};

// Прокрутка вверх при клике на кнопку
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0, // Прокрутка к верху страницы
        behavior: 'smooth' // Плавная прокрутка
    });
};

let name = prompt('Как Вас зовут? ')
let age = prompt('Сколько Вам лет? ')
alert(`Здравствуйте ${name}, вам правда ${age}?`)
console.log(`Здравствуйте ${name}, вам правда ${age}?`)

if (age<=18){
    console.log('Несовершеннолетний')

}else{
    console.log('Совершеннолетний')
}

const min = 1
const max = 10
const random = Math.floor(Math.random() * (max - min + 1)) + min;

    let a = prompt('Угадайте число лол? ')

		if (a == random) {
			console.log('Угадали!')
		}
        else if(random<5){
            console.log(`Число меньше 5 а точнее оно равно ${random}`)

        }
        else if(random > 5){
            console.log(`Число больше 5 а точнее оно равно ${random}`)
        }


let first = prompt('Введите пароль')
let second = prompt('Введите пароль для проверки')
if (first != '' && second != '') {
	if (first == second) {
		console.log('Доступ разрешен')
	} else first != second
	console.log('Доступ запрещен')
} else {
	console.log('Вы ничего не ввели')
}

let a = parseFloat(prompt('Введите первое число : '))
let b = parseFloat(prompt('Введите второе число : '))
let znak = prompt('Введите оператор действия (+, -, *, /) : ')

if (znak == '+'){
    console.log(a+b)
}
else if(znak=='-'){
    console.log(a - b)
}
else if(znak=='*'){
    console.log(a * b)
}
else if(znak=='/'){
    console.log(a / b)
}
else{
    console.log('Вы ввели не верный оператор')
}