console.log('Inicio de script'); //#1

setTimeout(() => {
    console.log('Primer timeout'); //#5
}, 5000);

setTimeout(() => {
    console.log('Segundo timeout'); //#3
}, 0);

setTimeout(() => {
    console.log('Tercer timeout'); //#4
}, 0);

console.log('Fin de script'); //#2