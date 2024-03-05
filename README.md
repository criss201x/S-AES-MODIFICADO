# Análisis de S-AES un enfoque practico 
## Abstract

Los algoritmos informáticos han jugado un papel importante en el éxito de la criptología existente hoy en día. Históricamente algoritmos de encriptado como RC4, DES, AES, RSA y otros tienen una estructura subyacente la cual está compuesta de una serie de procedimientos lógicos y matemáticos con la que se procesan los datos de entrada o mensaje a cifrar, si bien es cierto que entre más complejo sea el procedimiento más eficiente será el encriptado del mensaje, esta complejidad es pertinente analizarla con el fin de no asumir los métodos de encriptado como una caja negra. El siguiente articulo realiza un análisis con un enfoque practico acerca del algoritmo S-AES el cual es una simplificación de AES con fin de reducir la dificultad de aprendizaje de este algoritmo. El enfoque practico mencionado consiste en el desarrollo de dos algoritmos en el lenguaje de programación Typescript donde el primero corresponde al algoritmo S-AES y el segundo corresponde al mismo, pero con algunas modificaciones que serán objeto de análisis y comparación. 

## Introducción  

El Estándar de cifrado avanzado (AES) es un algoritmo de cifrado de clave simétrica desarrollado por el Instituto Nacional de Estándares y Tecnología de EE. UU. (NIST). Fue seleccionado como el nuevo estándar para el cifrado comercial y gubernamental en 2001 después de un riguroso proceso de evaluación de cinco años. [1] 

AES funciona realizando una serie de rondas en los datos, cada una de las cuales incluye una operación de sustitución y una operación de permutación. La operación de sustitución reemplaza cada bit de los datos con un bit nuevo, basado en una clave secreta. La operación de permutación reorganiza los bits en los datos. El número de rondas en AES depende del tamaño de la clave. Para una clave de 128 bits, hay 10 rondas; para una clave de 192 bits, hay 12 rondas; y para una clave de 256 bits, hay 14 rondas. [2] 

AES es un algoritmo altamente eficiente y se puede implementar tanto en hardware como en software. Se usa ampliamente en una variedad de aplicaciones, incluido el cifrado de datos, el cifrado de archivos y la seguridad de una red. 

Normalmente los ingenieros que han trabajado AES lo asumen como una caja negra donde se confía en la salida dada la popularidad del algoritmo, pero pocos se atreven a estudiar su estructura interna, esto se debe a que el algoritmo AES está diseñado para ser muy difícil de descifrar. El algoritmo utiliza una serie de técnicas diferentes para dificultar que los atacantes encuentren la clave.  

AES utiliza una serie de técnicas diferentes, como sustitución, permutación y S-boxes. Esto hace que sea más difícil para los atacantes encontrar patrones en los datos.  Las claves de ronda se generan utilizando un algoritmo complejo. Esto hace que sea más difícil para los atacantes adivinar las claves. 

Aprender AES podría ser desafiante de aprender al menos en poco tiempo, ante tal dificultad fue diseñado S-AES como una herramienta de enseñanza para ayudar a los estudiantes a aprender sobre los principios del cifrado simétrico. S-AES es mucho más simple que AES, pero aun así proporciona una buena introducción a los conceptos a los conceptos de cifrado simétrico.  

## Revisión de la literatura 

Si bien es cierto que existe una versión simplificada del cifrado AES esto no quiere decir que sea la única solución de desarrollo de un algoritmo de práctica, incluso existen algoritmos basados en el mismo S-AES que buscan reducir toda vía más la complejidad de aprendizaje del cifrado simétrico, por mencionar tres referentes que han desarrollado propuestas similares a S-AES se tiene:  

El artículo "Un algoritmo de cifrado simple y eficiente basado en S-AES" de M. A. Alghamdi y A. A. Khan (2014) propone un nuevo algoritmo de cifrado basado en S-AES. El algoritmo propuesto es más simple y más eficiente que S-AES, al mismo tiempo que proporciona un buen nivel de seguridad. El algoritmo propuesto se llama S-AES-Lite. Utiliza un tamaño de bloque de 32 bits y un tamaño de clave de 12 bits y Tiene 4 rondas [3].

Los autores del artículo evaluaron la seguridad de S-AES-Lite frente a varios ataques. Descubrieron que S-AES-Lite es seguro contra todos los ataques conocidos. 

Los autores del artículo también compararon el rendimiento de S-AES-Lite con S-AES y AES. Descubrieron que S-AES-Lite es más rápido que S-AES y AES. S-AES-Lite también se puede utilizar como una herramienta de enseñanza o como un algoritmo de cifrado ligero para dispositivos con recursos limitados.

Por otro lado, el artículo "Un nuevo algoritmo de cifrado ligero basado en S-AES" de S. M. Alotaibi y A. A. Khan (2015) propone un nuevo algoritmo de cifrado ligero llamado S-AES-LW. S-AES-LW es una versión más simplificada de S-AES. Utiliza un tamaño de bloque de 16 bits y un tamaño de clave de 8 bits. Tiene 2 rondas, cada una de las cuales consta de una operación de sustitución y una operación de permutación. La operación de sustitución se basa en una tabla de búsqueda simple. La operación de permutación es una simple operación de intercambio de bits. Las claves redondas en S-AES-LW se generan a partir de la clave original utilizando un algoritmo simple [4].

Los autores del artículo evaluaron la seguridad de S-AES-LW frente a una serie de ataques. Descubrieron que S-AES-LW es seguro contra todos los ataques conocidos. También compararon el rendimiento de S-AES-LW con S-AES-Lite y S-AES. Descubrieron que S-AES-LW es más rápido que S-AES-Lite y S-AES. 

S-AES-LW es una buena opción para aplicaciones donde la simplicidad, la eficiencia y la ligereza son importantes. Por ejemplo, S-AES-LW se puede usar para cifrar datos en sistemas integrados, como dispositivos IoT. 

Finalmente, el documento "Un estudio comparativo de S-AES y otros algoritmos de cifrado" de M. A. Alghamdi y A. A. Khan (2016) compara S-AES con otros algoritmos de cifrado, como DES, 3DES y AES. El documento muestra que S-AES es más simple y eficiente que otros algoritmos de encriptación, al mismo tiempo que brinda un buen nivel de seguridad. El documento también muestra que S-AES es más seguro que DES y 3DES, pero no tan seguro como AES [5].

En esta tabla que resume la comparación de S-AES con otros algoritmos de encriptación: 


| Caracteritsticas | S-AES | DES | 3DES | AES |
|---|---|---|---|---|
| Block size | 16 bits | 64 bits | 64 bits | 128 bits |
| Key size | 8 bits | 56 bits | 112 bits | 128 bits |
| Rondas  | 2 | 16 | 16 | 14 |
| seguridad  | Buena | Buena | Buena | Excelente |
| Eficiencia  | Very good | Good | Fair  | Good |
| Soporte  | Limited | Widespread | Widespread  | Widespread |

Como se puede ver, S-AES es una buena opción para aplicaciones donde la simplicidad, la eficiencia y la ligereza son importantes. Sin embargo, si se necesita el más alto nivel de seguridad, AES es una mejor opción. 

## Desarrollo de S-AES y S-AES modificado 

El S-AES utiliza operaciones básicas de cifrado, como sustitución no lineal, permutación y multiplicación en el campo de Galois, para proporcionar una capa de seguridad en la encriptación de datos.

Para materializar el desarrollo del algoritmo en el código Typescript se definen las siguientes funciones y objetos en el código: 

- Boxes: Se definen dos matrices bidimensionales llamadas S_BOX_1 y S_BOX_2. Estas matrices se utilizan para realizar sustituciones no lineales en el proceso de encriptación y desencriptación.  
- Función shiftRows: Esta función toma un estado (state) como entrada, que es una matriz de números. La función realiza un corrimiento de filas en el estado, cambiando la posición de ciertos elementos.  
- Matrices de MixColumns: Se definen dos matrices bidimensionales llamadas MIX_COLUMNS_MATRIX_1 y MIX_COLUMNS_MATRIX_2. Estas matrices se utilizan en la operación MixColumns durante el proceso de encriptación y desencriptación.  
- Constantes de KeyExpansion: Se define una matriz llamada ROUND_CONSTANTS que contiene constantes utilizadas en el proceso de expansión de clave.
- Función padBlock: Esta función toma un bloque de números (block) como entrada y lo rellena con ceros hasta que tenga una longitud de 4 elementos.
- Función substituteNibbles: Esta función toma un nibble (4 bits) y una caja S (sBox) como entrada, y realiza una sustitución no lineal utilizando la caja S.  
- Función permuteNibbles: Esta función toma un nibble y una matriz de MixColumns (mixColumnsMatrix) como entrada, y realiza una permutación utilizando operaciones de multiplicación en el campo de Galois.
- Función galoisMultiplication: Esta función implementa la multiplicación en el campo de Galois, que es una operación utilizada en varias partes del algoritmo S-AES.
- Funciones de encriptación (encrypt) y desencriptación (decrypt): Estas funciones implementan el proceso principal de encriptación y desencriptación utilizando el algoritmo S-AES. Se utilizan otras funciones y estructuras definidas anteriormente, como la expansión de clave (keyExpansion).
- Función keyExpansion: Esta función realiza la expansión de clave para generar las claves de ronda utilizadas en el proceso de encriptación y desencriptación.
- Función main: Esta función principal ejecuta el algoritmo S-AES. Define los datos de entrada (plaintext y key), muestra los valores iniciales por consola, realiza la encriptación y desencriptación, y muestra los resultados por consola. 

Inicialmente el texto sin formato se divide en dos nibbles de 8 bits. Un nibble es un grupo de bits de cuatro bits. El texto sin formato es una secuencia de bits y los nibbles son simplemente grupos de cuatro bits de esa secuencia. Por ejemplo, si el texto sin formato es el valor de 16 bits 12345678, entonces los dos nibbles serían 12 y 34. Esto puede representarse en el siguiente pseudocodigo 

```
function encrypt(plaintext, key): 
# Divide el texto sin formato en dos nibbles de 8 bits.
  nibbles = [plaintext >> 8, plaintext & 0xff] 

# Sustituye cada nible usando una tabla de búsqueda. 
```

