# Cinecer0 Referencia

## Reproducir video, imágen, GIFs y texto

+ "URLvideo" -- reproduce video
+ video "URLvideo" -- reproduce video 
+ image "URLimagen-o-URLgif"  
+ text "Este es mi texto" 
"" -- estado vacío, borra lo que te tenga 

## Cambiar posición de material multimedia
setPosX [x] $ -- izquierda (-1) a derecha 1  
setPosY [y] $ -- de abajo (-1) hacia arriba 1  
setCoord [x] [y] $ -- todos los valores negativos van entre paréntesis 

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

## ramp

(ramp [Dur_In_Cycles] [Initial_Value] [End_Value])  

ramp can be use in style functions. Example  
width (ramp x y z)  

fadeIn [Dur_In_Cycles]  

fadeOut [Dur_In_Cycles]  

## quant

$ quant [Cicle_Multiplier] [Offset]  

quant function has two values. Cycle multiplier aligns the anchor time with multiples of the given value. Offset is a value from 0 to 1 that will shift the starting position of the quantisation  

quant can be use with any style functions with or without a ramp. Example:  
+ opacity (ramp x y z) $ quant x y  

## Time Functions (for Videos)

natural [shift] $ -- aligns the starting time of the video with the first beat of the first measure  

every [cycles] [shift] $ -- adjusts the length to a given number of cycles  

round [shift] $ -- adjusts the length to the nearest number of measures in Estuary's tempo.  

roundMetre [shift] $ -- adjusts the length to the nearest number of measures multiple of 2,4,8,16,etc. in order to maintain the video synchronised with Estuary's tempo.  

chop [startPos] [endPos] [cycles] [shift] $ -- plays the video from the starting position (0-1) to the end position (0-1) stretching or compressing the length to adjust it to the number of cycles provided as a parameter.  

chop' [startPos] [cycles] [shift] $ --  plays the video from the starting position (0-1) stretching or compressing its length to adjust it to the number of cycles provided as a parameter.  

chopSecs [startPos] [endPos] [cycles] [shift] $ -- plays the video from the starting position to the end position stretching or compressing its length to adjust it to the number of cycles provided as a parameter. This function does not have the start and end positions normalized from 0 to 1.  
