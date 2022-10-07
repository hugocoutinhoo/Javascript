document.write("Olá")
//arrays são considerados OBJETOS em JS, porém servem como listas.

var arr = [5, "Hugo", true, {teste: 1, teste2: 2}];
console.log(arr);

var arr2 = [5,4,3,2,1];
console.log(arr2);

console.log(arr[1]);
console.log(arr2[3]);

//inserindo elementos nos arrays
arr[4] = 10;

//sobescrever elementos
arr[0] = "Coutinho";

console.log(arr);