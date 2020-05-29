/**********************************************************/ 
/* Имя: recursion.js */ 
/* Язык: JScript */ 
/* Описание: задание 3 */
/**********************************************************/

function F(n) {
    if (n == 1) {
        return 1;
    } else {
        var loga = F(n-1)*n;
        var result = (Math.log(loga)+13);
        return result;
    }
    
}

function sum(n) {
    var sum = 0;
    for(var i = 1; i <= n; i++) {
        sum += F(i);
    }
    return sum;
}

WScript.Echo("Enter n:")
var n = WScript.StdIn.ReadLine();
WScript.Echo(sum(n));