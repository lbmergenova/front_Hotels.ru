function toUpperCaseFistSumbol(str) {
    if (str) {
        str = str[0].toUpperCase() + str.slice(1);
    }
    return str;
}

function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    let shortStr = str.slice(0, maxLength-1);
    let newLength = Math.max(
        shortStr.lastIndexOf(' '),
        shortStr.lastIndexOf(','),
        shortStr.lastIndexOf('.'),
        shortStr.lastIndexOf('!'),
        shortStr.lastIndexOf('?'),
        shortStr.lastIndexOf(':'),
        shortStr.lastIndexOf(';'),
    );
    if (newLength == -1) {
        return "…";
    }
    return str.slice(0, newLength) + '…';
}

function isSubstring(str1, str2) {
    return str1.includes(str2) || str2.includes(str1);
}

// toUpperCaseFistSumbol
console.log("___________________________")
console.log("toUpperCaseFistSumbol");
console.log(toUpperCaseFistSumbol("слово"));

// truncate
console.log("___________________________")
console.log("truncate")
let str = "Строку можно создать с помощью одинарных, двойных либо обратных кавычек.";
console.log(str.length)
console.log(truncate(str));
let maxL = 2;
let trunStr = truncate(str,maxL);
console.log("len =", trunStr.length, "maxL =",maxL, trunStr);
maxL = 72;
trunStr = truncate(str,maxL);
console.log("len =", trunStr.length, "maxL =",maxL, trunStr);
maxL = 75;
trunStr = truncate(str,maxL);
console.log("len =", trunStr.length, "maxL =",maxL, trunStr);
maxL = 15;
trunStr = truncate(str,maxL);
console.log("len =", trunStr.length, "maxL =",maxL, trunStr);
maxL = 35;
trunStr = truncate(str,maxL);
console.log("len =", trunStr.length, "maxL =",maxL, trunStr);
maxL = 41;
trunStr = truncate(str,maxL);
console.log("len =", trunStr.length, "maxL =",maxL, trunStr);
maxL = 42;
trunStr = truncate(str,maxL);
console.log("len =", trunStr.length, "maxL =",maxL, trunStr);
maxL = 45;
trunStr = truncate(str,maxL);
console.log("len =", trunStr.length, "maxL =",maxL, trunStr);

// isSubstring
console.log("___________________________")
console.log("isSubstring");
console.log(isSubstring("можно", str));
console.log(isSubstring("стол", "первое слов малыша"));
console.log(isSubstring(str, "с"));
console.log(isSubstring(str, "стол"));
