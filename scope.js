const a=1; const b=2; const c=3;
(function firstFunction () {
  const b = 5; const c = 6;

  (function secondFunction () {
    const b = 8;

    (function thirdFunction () {
      const a = 7; const c = 9;

      (function fourthFunction () {
        const a = 1; const c = 6;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
      })()
    })()
  })()
})()

//***El alcance (scope) en JavaScript define el contexto en el cual una variable o función es accesible y se divide principalmente en global y local. Las variables y funciones declaradas fuera de cualquier función tienen un alcance global y pueden ser accedidas desde cualquier parte del código. En cambio, las variables y funciones declaradas dentro de una función tienen un alcance local y sólo son accesibles dentro de esa función. Las funciones anidadas pueden acceder al alcance de su función padre, permitiendo un acceso a las variables de la función externa. Un patrón común para crear un alcance local y evitar la contaminación del alcance global es el uso de una IIFE (Immediately Invoked Function Expression). Comprender y manejar correctamente el alcance es crucial para evitar errores y mantener el código organizado, evitando conflictos de nombres y asegurando un acceso predecible a variables y funciones.








