# Cinecer0 Reference

The CineCer0 mini-language (pronounced “sin–ay–ser-oh”) language allows video files to b e projected temporally and geometrically, targeting similar functionality to that of [CineVivo](https://github.com/essteban/CineVivo), again with an economical Haskell-like notation.

## Playing Videos

"video.extension" --videos play as a string <br />
"videoURL" --you can add the URL to play videos <br />
"" --empty state

## Image y Video

setWidth [w] $ -- 1 = natural video width <br/>
setHeight [h] $ -- 1 = natural video height <br />
setSize [wh] $ <br /> --one parameter will affect both width and heigh proportionally
setPosX [x] $ -- from left (-1) to right 1 <br />
setPosY [y] $ -- from bottom (-1) to top 1 <br />
setCoord [x] [y] $ <br />
setOpacity [o] $ -- from 0 - 1 (no opacity) <br />
setBlur [bl] $ -- 0 = no blur (1++ = more) <br />
setBrightness [br] $ --  0-0.9 = less, 1++ = more <br />
setContrast [c] $ -- 0-0.9 = less, 1++ = more <br />
setGrayscale [g] $ -- 0 = no grayscale, 1 = full grayscale <br />
setSaturate [s] $ -- 1 = natural video saturation (1++ = more, 1-- =less) <br />
circleMask [m] $ -- 0 is no mask, 0-0.99 makes the mask appear from biggest to smallest (it grows/decrease from the centre)
circleMask' [m] [w] [h] $ -- similar to circleMask but with two more parameters that move the center of the circleMask
sqrMask [m] $ -- 0 is no mask, 0-0.99 makes the mask appear from biggest to smallest (it grows/decrease from the centre)
rectMask [t] [r] [b] [l] $ -- accepts four parameters: top right bottom left, which are the amount of reduction in each side
