





// const regexp = /в/gi;

// const str =
//   "Я вас любил: любовь еще, быть может,\nВ душе моей угасла не совсем;\nНо пусть она вас больше не тревожит;\nЯ не хочу печалить вас ничем.\nЯ вас любил безмолвно, безнадежно,\nТо робостью, то ревностью томим;\nЯ вас любил так искренно, так нежно,\nКак дай вам бог любимой быть другим.";

// const result = Array.from(str.matchAll(regexp));

// const regexp = /[^\s]+/g;
// const regexp = /^[^\s]+/g;
// const regexp = /[^\s]+$/g;
// const regexp = /^[^\s]+/gm;
// const str =  "Я вас любил: любовь еще, быть может,\nВ душе моей угасла не совсем;\nНо пусть она вас больше не тревожит;\nЯ не хочу печалить вас ничем.\nЯ вас любил безмолвно, безнадежно,\nТо робостью, то ревностью томим;\nЯ вас любил так искренно, так нежно,\nКак дай вам бог любимой быть другим.";

// const regexp = /am/g
// const regexp = /\sam\s/g
// const regexp = /\bam\b/g
// const regexp = /\Bam\B/g
// const str ="Hello, I am a JavaScript programmer... Yes, I am..."

// const result = str.match(regexp);

// const regexp = /.{8,16}/;
const regexp = /^.{8,16}$/;
const str = "1234567812345678";

const result = regexp.test(str); // return boolean

export function regExpLessonFour() {
  console.log(result);
}



// ************* ЯКОРЯ ************** //
// ^ - начало текста или строки, если есть флаг m
// $ - конец текста  или строки, если есть флаг m
// \b - граница словаме между словом:
// 1) ^ и \w
// 2) \w и \W
// 3) \W и \w
// 4) \w и $
// \B - Не граница слова
// test() - метод    для проверки присуттвия совпадения