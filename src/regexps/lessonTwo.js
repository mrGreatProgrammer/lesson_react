
// const regexp = /\d\d\.\d\d\.\d\d\d\d/
// const str = "Сегодня 24.11.2022"

// const regexp = /\d{2}\.\d{2}\.\d{4}/
// const regexp = /\d{2,4}/
// const str = "У меня только 500, не хватает еще 1000"

// const regexp = /\d{2,4}?/
// const str = "У меня только 500, не хватает еще 1000"
// const regexp = /\d{2,}/
// const str = "У меня только 500, не хватает еще 1000"
// const regexp = /\d{2,}?/
// const str = "У меня только 500, не хватает еще 1000"
// const regexp = /colou?r/
// const str = "What color is the cat ?"
// const regexp = /colou?r/
// const str = "What colour is the cat ?"
// const regexp = /\d*/
// const str = "0123456789"
// const regexp = /\d*?/
// const str = "0123456789"
// const regexp = /\d+/
// const str = "0123456789"
// const regexp = /\d+?/
// const str = "0123456789"
// const result = str.match(regexp)
// const regexp = /\s*,\s*/
// const str = "0,1 , 2,  3    ,    4, 5 ,    6  ,7"

// const result = str.split(regexp)
const regexp = /\d{6}/
const str = "... телефон 123456. Его почта ..."

const result = str.search(regexp)


export function regExpLessonTwo(){
    console.log(result);
};


// **************** КВАНТИФИКАТОРЫ **************** //

// Жадные квантификаторы ( стараюстя наибольшое количество раз повторить ):
// {n} - повторить n раз
// {m,n} - поворить от m до n раз
// {m,} - поворить от m до бесканечьности раз
// ? - {0,1}
// * - {0,}
// + - {1,}

// Ленивые квантификаторы ( стараюстя наименьшее количество раз повторить ):
// {m,n}?
// {m,}?
// *? - {0}
// +?