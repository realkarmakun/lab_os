/**********************************************************/ 
/* Имя: matrix.js */ 
/* Язык: JScript */ 
/* Описание: задание 2 */
/**********************************************************/
function generateMatrix(n) {
    var matrix = [];

    for(var i=0; i<n; i++) {
        matrix[i] = [];
        for(var j=0; j<n; j++) {
            if (i == j) {
                matrix[i][j] = 1;
            } else if (i >j) {
                matrix[i][j] = 8;
            } else {
                matrix[i][j] = 3;
            }
        }
    }

    return matrix;
}

function findMultiplesOfThree(matrix, size) {
    var counter = 0;

    for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
            if ((matrix[i][j] % 3) == 0) {
                counter++;
            }
        }
    }

    return counter;
}

function sumOfElementsOnEvenLines(matrix, size) {
    var sum = 0;

    for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
            if ((i+1) % 2  == 0) {
                sum += matrix[i][j];
            }
        }
    }
    
    return sum;
}

function productOfEvenNumbersInOddColumns(matrix, size) {
    var product = 1;

    for(var i=0; i<size; i++) {
        for(var j=0; j<size; j++) {
            if ((!((j+1) % 2  == 0)) && (matrix[i][j] %2 == 0)) {
                product *= matrix[i][j];
            }
        }
    }

    return product;
}

function sumOfElementsAboveSecondaryDiagonale(matrix, size) {
    var sum = 0;

    for ( i = 0; i < size - 1; i++) {
        for (j = 0; j < size-i-1; j++) {
            sum += matrix[i][j];
        }
    } 
    return sum;
}

function getSortedMatrix(matrix, size) {
    var clonedMatrix = matrix;

    for(var i=0; i<size; i++) {
        if ((i+1) % 2 == 0) {
            clonedMatrix[i].sort(function( a, b ) {return a - b});
        } else {
            clonedMatrix[i].sort(function( a, b ) {return b - a});
        }
    }

    return clonedMatrix;
}

function Determinant(A)   // Детерминант матрицы
{
    var N = A.length, B = [], denom = 1, exchanges = 0;
    for (var i = 0; i < N; ++i)
     { B[ i ] = [];
       for (var j = 0; j < N; ++j) B[ i ][j] = A[ i ][j];
     }
    for (var i = 0; i < N-1; ++i)
     { var maxN = i, maxValue = Math.abs(B[ i ][ i ]);
       for (var j = i+1; j < N; ++j)
        { var value = Math.abs(B[j][ i ]);
          if (value > maxValue){ maxN = j; maxValue = value; }
        }
       if (maxN > i)
        { var temp = B[ i ]; B[ i ] = B[maxN]; B[maxN] = temp;
          ++exchanges;
        }
       else { if (maxValue == 0) return maxValue; }
       var value1 = B[ i ][ i ];
       for (var j = i+1; j < N; ++j)
        { var value2 = B[j][ i ];
          B[j][ i ] = 0;
          for (var k = i+1; k < N; ++k) B[j][k] = (B[j][k]*value1-B[ i ][k]*value2)/denom;
        }
       denom = value1;
     }
    if (exchanges%2) return -B[N-1][N-1];
    else return B[N-1][N-1];
}

function AdjugateMatrix(A)   // Матрица из алгебраических дополнений
{                                        
    var N = A.length, adjA = [];
    for (var i = 0; i < N; i++)
     { adjA[ i ] = [];
       for (var j = 0; j < N; j++)
        { var B = [], sign = ((i+j)%2==0) ? 1 : -1;
          for (var m = 0; m < j; m++)
           { B[m] = [];
             for (var n = 0; n < i; n++)   B[m][n] = A[m][n];
             for (var n = i+1; n < N; n++) B[m][n-1] = A[m][n];
           }
          for (var m = j+1; m < N; m++)
           { B[m-1] = [];
             for (var n = 0; n < i; n++)   B[m-1][n] = A[m][n];
             for (var n = i+1; n < N; n++) B[m-1][n-1] = A[m][n];
           }
          adjA[ i ][j] = sign*Determinant(B);  
        }
     }
    return adjA;
}

function InverseMatrix(A)   // Обратная матрица
{   
    var det = Determinant(A);                
    if (det == 0) return false;
    var N = A.length, A = AdjugateMatrix(A);
    for (var i = 0; i < N; i++)
     { for (var j = 0; j < N; j++) A[ i ][j] /= det; }
    return A;
}

function MultiplyMatrix(A,B)
{
    var rowsA = A.length, colsA = A[0].length,
        rowsB = B.length, colsB = B[0].length,
        C = [];
    if (colsA != rowsB) return false;
    for (var i = 0; i < rowsA; i++) C[ i ] = [];
    for (var k = 0; k < colsB; k++)
     { for (var i = 0; i < rowsA; i++)
        { var t = 0;
          for (var j = 0; j < rowsB; j++) t += A[ i ][j]*B[j][k];
          C[ i ][k] = t;
        }
     }
    return C;
}

function printMatrix(matrix) {
    for(var i =0; i<matrix.length; i++) {
        WScript.Echo("|"+ matrix[i].toString()+"|");
    }
}

// Основной код
WScript.Echo("Enter N:");
var size = WScript.StdIn.ReadLine();

var currentMatrix = generateMatrix(size);
var sortedMatrix = getSortedMatrix(generateMatrix(size), size)
var revertedMatrix = InverseMatrix(generateMatrix(size));
var multipliedMatrix = MultiplyMatrix(generateMatrix(size), getSortedMatrix(generateMatrix(size),size));

WScript.Echo("[1] Sgenerirovannaya matrix:");
printMatrix(currentMatrix);

WScript.Echo("[2] Kol-vo elementov ktranih 3:");
WScript.Echo(findMultiplesOfThree(currentMatrix, size));

WScript.Echo("[3] Summa elem-tov matrix v kashdoi chetnoy stroke:");
WScript.Echo(sumOfElementsOnEvenLines(currentMatrix, size));

WScript.Echo("[4] Vichislenie proizved chet elem v nechet stolb:");
WScript.Echo(productOfEvenNumbersInOddColumns(currentMatrix, size));

WScript.Echo("[5] summ elem on poboch diag:");
WScript.Echo(sumOfElementsAboveSecondaryDiagonale(currentMatrix, size));

WScript.Echo("[6] Sort matrix:");
printMatrix(sortedMatrix);

WScript.Echo("[7] Obratnaya matrix:");
printMatrix(revertedMatrix);

WScript.Echo("[8] Umnoshenie sort na obrat:");
printMatrix(multipliedMatrix);