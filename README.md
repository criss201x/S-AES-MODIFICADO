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
  substituted_nibbles = [lookup_table[nibble] for nibble in nibbles] 

# XOR los dos nibles juntos para formar un nuevo valor de 16 bits.
  ciphertext = substituted_ciphertext[0] ^ substituted_ciphertext[1] 

# Agregue la clave redonda al texto cifrado usando XOR.
  ciphertext = ciphertext ^ key 

  return ciphertext 
```

Ahora cada nibble se sustituye mediante una tabla de búsqueda. La tabla de búsqueda es una tabla que contiene una asignación de cada posible nible a un nuevo nible. El mapeo no es reversible, por lo que este paso del proceso de cifrado es irreversible.  


La tabla de búsqueda se genera mediante un generador de números aleatorios. El generador de números aleatorios garantiza que la tabla de búsqueda sea impredecible y que un atacante no pueda adivinarla.

La tabla de búsqueda se utiliza para sustituir cada nibble en el texto sin formato. La sustitución se realiza buscando el nibble en la tabla de búsqueda y reemplazándolo con el nibble correspondiente en la tabla de búsqueda.  


```
function substitute_nibbles(nibbles, lookup_table): 

# Create a new list to store the substituted nibbles. 

substituted_nibbles = []

# Iterate through the nibbles and substitute each nibble using the lookup table. 

for nibble in nibbles: 
   substituted_nibbles.append(lookup_table[nibble])
  # Return the list of substituted nibbles. 
  return substituted_nibbles

```
No incluye todos los detalles del paso, pero es suficiente para dar una idea general de cómo funciona. Los nibbles de texto sin formato son 12 y 34. texto_sin formato_nibbles = [12, 34] 

Como paso siguiente los dos nibbles se unen mediante XOR para formar un nuevo valor de 16 bits. XOR es una operación binaria que toma dos bits y devuelve un nuevo bit basado en los valores de los dos bits de entrada. Si los dos bits de entrada son iguales, el bit de salida es 0. Si los dos bits de entrada son diferentes, el bit de salida es 1.  

La operación XOR se usa en el algoritmo S-AES para agregar difusión al proceso de cifrado. La difusión es importante para la seguridad porque dificulta que un atacante encuentre patrones en el texto cifrado. Esto puede ser representado en el siguiente pseudocodigo  

function xor(a, b): 

  # Crea un nuevo bit para almacenar el resultado de la operación XOR. 

  result = 0 

  # Iterar a través de los bits de ayb y XOR juntos. 

  for i in range(len(a)): 

    result = result ^ a[i] ^ b[i] 

  # Retorna el resultado de la operación XOR 

  return result 

la clave redonda se agrega al nuevo valor usando XOR. La clave redonda es un valor de 16 bits que se utiliza para cifrar el texto sin formato. La clave redonda se genera a partir de la clave original utilizando un algoritmo de programación de claves. 

La operación XOR se realiza en el nuevo valor y la clave de ronda tomando cada bit del nuevo valor y haciéndolo XOR con el bit correspondiente de la clave de ronda. El resultado de la operación XOR es un nuevo bit que es 0 o 1. 

Por ejemplo, si el nuevo valor es 02 y la clave redonda es 13, entonces el resultado de la operación XOR es 15. Esto significa que el primer bit del resultado es 1, el segundo bit es 1, el tercer bit es 0, y el cuarto bit es 1. Esto puede ser representado en el siguiente pseudocodigo  


function xor(a, b): 

  # Crea un nuevo bit para almacenar el resultado de la operación XOR. 

  result = 0 

  # Iterar a través de los bits de ayb y XOR juntos. 

  for i in range(len(a)): 

    result = result ^ a[i] ^ b[i] 

  # Devuelve el resultado de la operación XOR. 

  return result 

El siguiente paso se devuelve el texto cifrado. El texto cifrado es la versión cifrada del texto sin formato. Se puede descifrar utilizando la clave original y el proceso de descifrado. El texto cifrado se descifra primero usando la clave redonda. La clave redonda se utiliza para descifrar el texto cifrado realizando operaciones XOR en el texto cifrado y la clave de ronda. 

Luego, el texto cifrado se sustituye utilizando la tabla de búsqueda. La tabla de búsqueda se usa para sustituir los nibbles en el texto cifrado buscando los nibbles en la tabla de búsqueda y reemplazándolos con los nibbles correspondientes en la tabla de búsqueda. 

Luego, el texto cifrado se divide en dos nibbles de 8 bits. Luego, los nibbles se unen mediante XOR para formar un nuevo valor de 16 bits. El valor final es el texto sin formato. El texto sin formato es la versión descifrada del texto cifrado. Esto puede verse representado en el siguiente pseudocodigo: 

# El texto cifrado es  

ciphertext = [1, 1, 0, 1] 

# la llave de ronda es 13 

key = [1, 0, 1, 1] 

# el texto descifrado es 2. 

decrypted_ciphertext = xor(ciphertext, key) 

# El texto cifrado descifrado sustituido es 12. 

substituted_decrypted_ciphertext = substitute_nibbles(decrypted_ciphertext, lookup_table) 

# El texto plano es  

plaintext = subs_decrypted_ciphertext[0] ^ subs_decrypted_ciphertext[1] 

El paso final en el algoritmo S-AES es intercambiar los dos nibbles. Este paso se realiza para agregar más confusión al proceso de encriptación.  

El intercambio de los nibbles se realiza tomando el primer nibble y moviéndolo a la segunda posición, y tomando el segundo nibble y moviéndolo a la primera posición. Por ejemplo, si los nibbles son 12 y 34, entonces el paso final intercambiará los nibbles para que sean 34 y 12. 

 

function swap_nibbles(nibbles): 

  # Cambia el primer nibble por el segundo nibble. 

 nibbles[0], nibbles[1] = nibbles[1], nibbles[0]  

  # Devuelve los bocadillos. 

 return nibbles 

 

Para el desarrollo del algoritmo modificado se tienen en cuenta las siguientes consideraciones: 

    Se han agregado nuevas cajas de sustitución S complementarias, denominadas S_BOX_1 y S_BOX_2. 

    Se ha modificado la política de corrimiento de ShiftRows en la función shiftRows(). 

    Se han agregado nuevas matrices de MixColumns complementarias, denominadas MIX_COLUMNS_MATRIX_1 y MIX_COLUMNS_MATRIX_2. 

    Se han añadido nuevas constantes para el KeyExpansion, denominadas ROUND_CONSTANTS. 

    Se ha modificado la política de relleno de bloques en la función padBlock(). 

    Se ha agregado una nueva función substituteNibbles() para la sustitución no lineal utilizando una caja S complementaria. 

    Se ha añadido una nueva función permuteNibbles() para la permutación de nibbles utilizando las matrices de MixColumns complementarias. 

    Se ha agregado una nueva función galoisMultiplication() para realizar multiplicación en el campo de Galois. 

    Se han realizado modificaciones en las funciones encrypt() y decrypt() para aplicar las modificaciones propuestas. 

    Se ha añadido la función keyExpansion() para la expansión de clave y generación de las claves de ronda. 

    Se ha agregado un ejemplo adicional de encriptación utilizando el modo CBC (Cipher Block Chaining). 
     

Para desarrollar el ataque de fuerza bruta se desarrolla una función que implementa para descifrar una serie de textos cifrados utilizando el modo de cifrado CBC (Cipher Block Chaining). A continuación, te proporcionaré una explicación detallada de cada parte de la función:  

La función bruteForceAttack toma dos argumentos: ciphertexts, que es una matriz de números que representa los textos cifrados, y iv, que es el vector de inicialización utilizado en el modo CBC.  

La función comienza convirtiendo los textos cifrados y el vector de inicialización a su representación hexadecimal. Esto se realiza mediante la función decimalToHexadecimal, que toma un número decimal y devuelve su equivalente en hexadecimal.  

A continuación, se inicia un bucle que iterará a través de todas las posibles claves. La variable key representa la clave actual y se inicializa en 0.  

La clave se convierte en una matriz de bytes utilizando operaciones de desplazamiento y máscaras bit a bit. La clave se divide en cuatro bytes, donde cada byte representa un octeto de la clave.  

Después de obtener los bytes de la clave, se generan las subclaves utilizando la función generateSubkeys. Esta función es probablemente definida en otro lugar del código y no se proporciona en el fragmento que compartiste. Las subclaves se utilizan en el cifrado CBC.  

A continuación, se realiza el descifrado utilizando el cifrado CBC con la clave actual y el vector de inicialización. El resultado se almacena en la variable decryptedPlaintexts, que es una matriz de textos descifrados en su representación hexadecimal.  

Se realiza una comparación entre los textos descifrados y los textos cifrados objetivo. Si los textos descifrados coinciden con los textos cifrados objetivo en todas las posiciones específicas, se realiza una comparación adicional entre el vector de inicialización descifrado y el vector de inicialización objetivo.  

Si tanto los textos descifrados como el vector de inicialización descifrado coinciden con los textos cifrados objetivo y el vector de inicialización objetivo, respectivamente, se imprime un mensaje indicando que se ha encontrado la clave y se muestra la clave en su representación hexadecimal. Luego, la función retorna, lo que significa que el ataque se detiene.  

Si no se encuentra ninguna coincidencia después de probar todas las claves posibles, se imprime un mensaje indicando que la clave no fue encontrada.  

Es importante tener en cuenta que esta función implementa un ataque de fuerza bruta, lo que significa que prueba todas las claves posibles en busca de una coincidencia. Dependiendo del tamaño del espacio de claves y del poder de procesamiento disponible, este tipo de ataque puede llevar mucho tiempo y no ser práctico en situaciones donde el espacio de claves es lo suficientemente grande. 

 

Resultados y conclusiones  

    AES es un algoritmo de cifrado de clave simétrica que se considera uno de los algoritmos de cifrado más seguros del mundo. Es utilizado por gobiernos, empresas e individuos para proteger datos confidenciales. AES es un cifrado de bloque, lo que significa que cifra los datos en bloques de 128 bits. 

    S-AES es una versión simplificada de AES que está diseñada para ser más eficiente en términos de velocidad y consumo de energía. S-AES es un cifrado de bloques de 64 bits que utiliza una clave de 128 bits. S-AES no es tan seguro como AES, pero todavía se considera lo suficientemente seguro para muchas aplicaciones. 

    S-AES-Lite es una versión más simplificada de S-AES que es aún más eficiente en términos de velocidad y consumo de energía. S-AES-Lite es un cifrado de bloque de 32 bits que utiliza una clave de 64 bits. S-AES-Lite no es tan seguro como S-AES, pero aún se considera lo suficientemente seguro para algunas aplicaciones. 

    S-AES-LW es la versión más ligera de S-AES. Es un cifrado de bloques de 16 bits que utiliza una clave de 32 bits. S-AES-LW es la versión menos segura de S-AES, pero todavía se considera lo suficientemente segura para algunas aplicaciones. 

 

Bibliografia 

 

[1] https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf 

[2] Kaplan, M. (2017). Digital privacy and security using Windows: A practical guide. Apress. 

[3] Alghamdi, M. A., & Khan, A. A. (2014, March). A simple and efficient encryption algorithm based on S-AES. In 2014 3rd International Conference on Information Technology and Applications (ICITA) (pp. 1-5). IEEE. 

[4] S. M. Alotaibi and A. A. Khan. (2015). A Novel Lightweight Encryption Algorithm Based on S-AES   

[5] Alghamdi, M. A., & Khan, A. A. (2016). A comparative study of S-AES and other encryption algorithms. International Journal of Computer Science and Information Security, 14(1), 1-10. 

 

 

 

 

 

  
