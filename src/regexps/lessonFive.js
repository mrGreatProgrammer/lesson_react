// const regexp = /[a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][a-f\d]{2}[-:][af\d]{2}/gi
// const regexp = /([a-f\d]{2}[-:]){5}[af\d]{2}/gi
// const regexp = /[a-f\d]{2}([-:])([a-f\d]{2}[-:]){4}[af\d]{2}/gi
// const regexp = /[a-f\d]{2}([-:])([a-f\d]{2}\1){4}[af\d]{2}/gi
// const regexp = /[a-f\d]{2}(?<separator>[-:])([a-f\d]{2}\k<separator>){4}[af\d]{2}/gi

// const str = `
//   ARP таблица:
//   Физический адрес     адрес IP-адрес
//   03-60-8C-01-02-03    197.17.13.3
//   00:01:A2:05:09:89    197.17.13.44
//   AA-00-22-6A:92-89    197.17.13.123
//   08-AE-02-90-90-90    197.17.13.4
//   08:BC:AC:90:90:90    197.17.13.67
// `

// const result = Array.from(str.matchAll(regexp))

// const regexp = /./g
// const str = "Меня зовут Igor Sidorov. А тебя ?"

// const result = str.match(regexp);

// const regexp = /(\w+)\s(\w+)/
const regexp = /(?<first_name>\w+)\s(?<last_name>\w+)/;
const str = "Меня зовут Igor Sidorov. А тебя ?";
// const result = str.replace(regexp, "$<last_name>");

const result = str.replace(regexp, (match, p1, p2, offset, input, groups) => {
  console.log("match", match);
  console.log("p1", p1);
  console.log("p2", p2);
  console.log("offset", offset);
  console.log("input", input);
  console.log("groups", groups);
  return `${p1} ${p2}`
});

// const regexp = /^.{8,16}$/;
// const str = "1234567812345678";

// const result = regexp.test(str); // return boolean

export function regExpLessonFive() {
  console.log(result);
}

// ************* СКОБОЧНЫЕ ГРУППЫ И ОБРАТНЫЕ ССЫЛКИ В ШАБЛОНЕ ************* //

// () - скобочная группа
// (?:) - скобочная группа исключенная из запоминания
// \N - обратная ссылка в шаблоне, где N - номер скобочной группы
// (?<name>) - именованная скобочная группа, где name - имя скобочной группы
// \k<name> - обратная ссылка в шаблоне, где name - имя скобочной группы
//
// replace() - метод String для замены, имеет ряд спецсимволов
// $& - вставляет все найденное совпадение
// $` - вставляет часть строки до совпадение
// $' - вставляет часть строки после совпадение
// $N - обратная ссылка в шаблоне, где N - номер скобочной группы
// $<name> - обратная ссылка в шаблоне, где name - имя скобочной группы
