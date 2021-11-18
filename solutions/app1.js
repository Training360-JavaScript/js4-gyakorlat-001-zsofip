// Függvény neve: `converterPromise` x
// - Export: a converterPromise függvény legyen a default export! x
// - Írj egy olyan függvényt, amely paraméterként kap egy tömböt. x A függvény visszatérési értéke egy Promise.  x
// - A Promise resolved lesz, amennyiben a tömb minden eleme string, és azok sikeresen nagybetűssé alakíthatók: tehát a Promise visszaad 
// egy új tömböt, amely az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.
// - Ellenkező esetben a Promise rejected lesz, a visszatérési érték pontosan: 
// `Error: Not all elements are string type!`
'use strict';

function converterPromise(myArray = []) {
    return new Promise((resolve, reject) => {
        if (myArray.every(item => typeof item === 'string')) {
            resolve(myArray.map(item => item.toUpperCase()))
        } else {
            reject('Error: Not all elements are string type!')
        }
    });
}

// export default converterPromise;
export default converterPromise;