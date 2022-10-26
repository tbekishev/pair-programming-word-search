const wordSearch = (letters, word) => { 
    let newArr = [];
    for (let i = 0; i < letters[0].length; i++){
        newArr[i] = [];
        for(let j = 0; j < letters.length; j++) {
            newArr[i].push(letters[j][i])
        }
    }

    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = newArr.map(ls => ls.join(''));
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }
    return false;
}
module.exports = wordSearch