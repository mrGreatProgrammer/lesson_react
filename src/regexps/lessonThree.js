// const regexp = /./g
// const str = "a\nb"
// const regexp = /./gs
// const str = "a\nb"
// const regexp = new RegExp(".", "gs")
// const str = "a\nb"
const regexp = /кот/gi;
const str = "Кот терракотого цвета кушает котлету.";

// const result = str.match(regexp);
// const result = Array.from(str.matchAll(regexp));
const result = Array.from(str.matchAll(regexp));

export function regExpLessonThree() {
  console.log(result);
}

// ************* ФЛАГИ ************** //
// g - гобальный поиск
// s - включает режим в котором . любой символ, даже \n
// i - регистронезависемы поиск
