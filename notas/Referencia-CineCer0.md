# Cinecer0 Referencia

## Reproducir video, imágen, GIFs y texto

+ "URLvideo" -- reproduce video
+ video "URLvideo" -- reproduce video 
+ image "URLimagen-o-URLgif"  
+ text "Este es mi texto" 
"" -- estado vacío, borra lo que te tenga 

## Valores fijos

+ 1 -- números completos  
+ 1.5 -- números con decimales 
+ (-1) -- números negativos siempre con paréntesis

## Cambiar posición de material multimedia

+ setPosX [x] $ -- izquierda (-1) a derecha 1  
+ setPosY [y] $ -- de abajo (-1) hacia arriba 1  
+ setCoord [x] [y] $

## Audio en Videos

+ vol 0.5 $ "myVideo.extension" -- por default, los videos se reproducen sin audio, al agregar esta función se activa el audio  

## Funciones para video, imágen y GIFs

+ setWidth [w] $ -- 1 = ancho natural del video
+ setHeight [h] $ -- 1 = alto natural del video  
+ setSize [wh] $ -- un único parámetro afecta tanto el ancho como el alto 
+ setRotate [d] $ -- rotar, valor en grados  
+ setOpacity [o] $ -- va de opacidad 0 a 1 (sin opacidad)  
+ setBlur [bl] $ -- 0 = sin desenfoque (1++ = más desenfoque)  
+ setBrightness [br] $ --  0-0.9 = menos brillo, 1++ = más brillo  
+ setContrast [c] $ -- 0-0.9 = menos contraste, 1++ = más contraste  
+ setGrayscale [g] $ -- 0 = sin escala de grises, 1 = completamente en escala de grises  
+ setSaturate [s] $ -- 0-0.9 = menos saturación, 1++ = más saturación
+ circleMask [m] $ -- 0 sin máscara, 0-0.99 la máscara circular crece desde el centro  
+ circleMask' [m] [x] [y] $ -- similar a la anterior pero dos parametros más que configuran la posición del centro de la máscara
+ sqrMask [m] $ -- 0 sin máscara, 0-0.99 la máscara cuadrada crece desde el centro   
+ rectMask [t] [r] [b] [l] $ -- 4 valores para incrementar la máscara a partir de los lados: arriba derecha abajo izquierda 
+ z [n] -- cambia la posición de la capa. Todos los materiales multimedia se reproducen en capas que se acumulan.  

## Funciones para el texto

size [n] -- 1 = tamaño por default, 1++ incremento 
font "fontType" -- las fuentes disponibles dependen del browser  
colour "colour" -- valor requerido: hexacolor
rgb [r] [g] [b] -- 3 valores: rojo verde azul, los parámetros van de 0-1
rgba [r] [g] [b] [a] -- similar a la anterior pero con el valor alpha que modifica opacidad (va de 0 a 1) 
hsl [h] [s] [l] -- 3 valores: rojo verde azul matiz, saturación y brillo, los parámetros van de 0-1
hsla [h] [s] [l] [a] -- similar a la anterior pero con el valor alpha que modifica opacidad (va de 0 a 1)  
strike -- tachado  
bold -- negritas 
italic -- itálicas 
z [n] -- cambia la posición de la capa. Todos los materiales multimedia se reproducen en capas que se acumulan. 

## Valores dinámicos

+ (ramp [tiempo-en-ciclos] [valor-inicial] [valor-final]) -- corre una única vez
+ (fadeIn [tiempo-en-ciclos]) -- corre una única vez
+ (fadeOut [tiempo-en-ciclos]) -- corre una única vez 
+ (sin [frecuencia]) -- 0-1 = más lento, 1++ = más rápido -- corre en loop
+ (range [valor-1] [valor-2] $ sin [frecuencia]) -- corre en loop, anima ida y vuelta de un valor a otro en la frecuencia dada

## Funciones de tiempo

+ quant [Cicle_Multiplier] [Offset] $

## Funaciones de tiempo para videos

+ every [tiempo-en-ciclos] [shift] $ -- elonga/comprime la velocida de reproducción del video ajustándose a duración dada
+ snap [shift] $ -- ajusta la duración del video al número de ciclos más cercano
+ snapMetre [shift] $ -- similar a snap solo que esta ajusta la duración del video a 2,4,8,16,32, etc
+ freeSeg [tiempo-inicial] [tiempo-final] $ -- reproduce el segmento (en procentaje) del video indicado
+ seg [tiempo-inicial] [tiempo-final] [tiempo-en-ciclos] $ -- igual a la anterior pero indicando duración
+ seg (secs [valor-inicial]) (secs [valor-final]) [tiempo-en-ciclos] $ -- variación de la anterior pero con valores en segundos
+ freeRun $ -- reproduccion del video libre
