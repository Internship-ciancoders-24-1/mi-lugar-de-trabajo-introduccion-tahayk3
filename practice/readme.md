A partir de un string enviado como parámetro a una función, se realiza lo siguiente:
Se verifica que el string tenga menos de 20 caracteres, luego se separa los operadores(+,-,*,/, ^, r) y los números 
en arrays diferentes, en base a ciclos y condiciones, se realizan las diferentes operaciones. 

La jerarquía de operaciones se trabajó iterando el array de operadores, el primer ciclo busca los operadores ^, r. EL segundo *./. Finalmente, el tercero opera las sumas y restas.

La function split, se utiliza para modificar el array, una vez se realicen operaciones ^, r.  y *./.




1. Inicio del programa
2.      Lectura de la expresión matemática por medio de una función 
3. 	    Si la expresión matemática tiene más de 20 caracteres, el programa finaliza
4. 	    Se separa operadores y números en arrays
5. 	    Se operan las raíces y potencias
6. 	    Se operan las multiplicaciones y divisiones
7. 	    Se operan las sumas y restas
8. 	    Se guarda el resultado en un array
9. 	    Mostrar el resultado de la operación al usuario
10. Fin del programa

