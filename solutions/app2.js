// Függvény neve: `sorterPromise` x
// - Export: a sorterPromise függvény legyen a default export! x
// - Írj egy függvényt, amely paraméterként szintén egy tömböt kap. x A függvény visszatérési értéke egy Promise. x
// - A Promise resolved lesz, amennyiben a tömb minden eleme string, x és visszatér 
// ezek abc-rend szerint rendezett tömbjével.  
// - Ha nem minden elem string, akkor a Promise rejected lesz, visszatérési értéke:
// `Error: Not all elements are string type!`
'use strict';

function sorterPromise(myArray = []) {
    return new Promise((resolve, reject) => {
        if (myArray.every(item => typeof item === 'string')) {
            resolve(myArray.sort())
        } else {
            reject('Error: Not all elements are string type!')
        }
    });
}

// export default sorterPromise;
export default sorterPromise;