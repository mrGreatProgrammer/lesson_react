


const regexp = /^.{8,16}$/;
const str = "1234567812345678";

const result = regexp.test(str); // return boolean

export function regExpLessonFive() {
  console.log(result);
}
