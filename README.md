# Análisis de S-AES un enfoque practico 
## Abstract

Los algoritmos informáticos han jugado un papel importante en el éxito de la criptología existente hoy en día. Históricamente algoritmos de encriptado como RC4, DES, AES, RSA y otros tienen una estructura subyacente la cual está compuesta de una serie de procedimientos lógicos y matemáticos con la que se procesan los datos de entrada o mensaje a cifrar, si bien es cierto que entre más complejo sea el procedimiento más eficiente será el encriptado del mensaje, esta complejidad es pertinente analizarla con el fin de no asumir los métodos de encriptado como una caja negra. El siguiente articulo realiza un análisis con un enfoque practico acerca del algoritmo S-AES el cual es una simplificación de AES con fin de reducir la dificultad de aprendizaje de este algoritmo. El enfoque practico mencionado consiste en el desarrollo de dos algoritmos en el lenguaje de programación Typescript donde el primero corresponde al algoritmo S-AES y el segundo corresponde al mismo, pero con algunas modificaciones que serán objeto de análisis y comparación. 

## Introducción  

El Estándar de cifrado avanzado (AES) es un algoritmo de cifrado de clave simétrica desarrollado por el Instituto Nacional de Estándares y Tecnología de EE. UU. (NIST). Fue seleccionado como el nuevo estándar para el cifrado comercial y gubernamental en 2001 después de un riguroso proceso de evaluación de cinco años. [1] 

AES funciona realizando una serie de rondas en los datos, cada una de las cuales incluye una operación de sustitución y una operación de permutación. La operación de sustitución reemplaza cada bit de los datos con un bit nuevo, basado en una clave secreta. La operación de permutación reorganiza los bits en los datos. El número de rondas en AES depende del tamaño de la clave. Para una clave de 128 bits, hay 10 rondas; para una clave de 192 bits, hay 12 rondas; y para una clave de 256 bits, hay 14 rondas. [2] 

AES es un algoritmo altamente eficiente y se puede implementar tanto en hardware como en software. Se usa ampliamente en una variedad de aplicaciones, incluido el cifrado de datos, el cifrado de archivos y la seguridad de una red. 

Normalmente los ingenieros que han trabajado AES lo asumen como una caja negra donde se confía en la salida dada la popularidad del algoritmo, pero pocos se atreven a estudiar su estructura interna, esto se debe a que el algoritmo AES está diseñado para ser muy difícil de descifrar. El algoritmo utiliza una serie de técnicas diferentes para dificultar que los atacantes encuentren la clave.  

AES utiliza una serie de técnicas diferentes, como sustitución, permutación y S-boxes. 
