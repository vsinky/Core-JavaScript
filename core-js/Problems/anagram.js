function anagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        console.log('Invalid Input');
        return
    }
    let str1 = a.toUpperCase().split('').sort().join('');
    let str2 = b.toUpperCase().split('').sort().join('');
    console.log(str1, str2);
    if (str1 === str2) {
        console.log("True");
    } else {
        console.log("False");
    }
}
anagram("Indian", "ndiani")