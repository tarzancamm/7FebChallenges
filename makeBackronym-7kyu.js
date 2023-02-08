// Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).

// The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:

// dict["P"] == "perfect"
// Examples
// "dgm" ==> "disturbing gregarious mustache"

// "lkj" ==> "literal klingon joke"

//! Dict preloaded within Codewars. Unable to execute function in VSCode.

const makeBackronym = (str) => {
    let arr = str.split('')
    let answer = []

    for (let i = 0; i < arr.length; i++) {
        let word = dict[arr[i].toUpperCase()]
        answer.push(word)
    } 
    return answer.join(' ')
}

console.log(makeBackronym('lkj'))