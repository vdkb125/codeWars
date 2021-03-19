// This time no story, no theory. The examples below show you how to write function accum:
//
// Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	let strArray = s.split('')
  let mumble = `${strArray[0].toUpperCase()}`
  for (let i = 1; i < strArray.length; i++){
    mumble += (`-${strArray[i].toUpperCase()}` + `${strArray[i].toLowerCase().repeat(i)}`)
  }
  return mumble
}
