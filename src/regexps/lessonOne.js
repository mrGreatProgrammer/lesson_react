const txt =  "";

// const regExp = new RegExp('шаблон', 'флаги')
// const regExp = /шаблон/флаги;
// const regexp = /Игорь./
// const str = "Привет, меня зовут Игорь! Мне 23 года."
// const regexp = /\d\d/
// const str = "Привет, меня зовут Игорь! Мне 23 года."
// const regexp = /\D\D/
// const str = "Привет, меня зовут Игорь! Мне 23 года."
// const regexp = /\s/
// const str = "Привет, меня зовут Игорь! Мне 23 года."
// const regexp = /\S/
// const str = "Привет, меня зовут Игорь! Мне 23 года."
// const regexp = /[ЮИ]ра/
// const str = "Это Юра и Ира сказали Ура!"
// const regexp = /[^ЮИ]ра/
// const str = "Это Юра и Ира сказали Ура!"
// const regexp = /[^а-я]/
// const str = "абвгдеёжзклмнопрстуфхчцшщъыьэюя"
const regexp = /[^а-яё]/
const str = "абвгдеёжзклмнопрстуфхчцшщъыьэюя"

const result = str.match(regexp)

export function regExpLessonOne() {
    console.log(result);
}

// . - любой символ, кроме \n
// \d - цифры символ [0-9]
// \D - не цифры символ
// \s - пробельные символы [ \t\n\v\f\r]
// \S - всё кроме пробельных символов
// \w - слово [a-zA-Z0-9_]
// [abc] - набор
// [^abc] - исключа щий набор
// [a-z] - диапазон внутри набора
// math - метод String для поиска совпадений