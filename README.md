# Project Playground Functions

### This project consists of functions with specified requirements.
* Designed using JavaScript

## Description of created functions: 
`compareTrue`: receives two boolean values and returns `true` if received values are true.\

`calcArea`: receives a `base` and `height` and returns the `area` of a triangle.

`splitSentence`: receives a `string` and returns an `array` of `strings` seperated by space of 
original string

`concatName`: receives an `array` of `strings` and returns an inverted `string` (last item, first item)

`footballPoints`: receives two `numbers` for victory and draw and returns the total points of a team considering 3 points for victory and 1 point for draw. 

`highestCount`: receives an `array` of `numbers` and returns how often highest `number` is repeted.

`catAndMouse`: receives position of `mouse`, `cat1` and `cat2`, calculates distance of mouse/cats and returns which cat reachs the mouse first.

`fizzBuzz`: receives an `array` of numbers and returns an `array` of `strings` by replacing the numbers with: `fizzBuzz` if divisible by 3 & 5; `fizz` if divisible by 3; `buzz` if divisible by 5 and `bug!` if none of these conditions is applicable.

`encode`: receives a `string` and returns a `strings` by changing all lower case vowels to `numbers`, according to format: `a -> 1; e -> 2; i -> 3; o -> 4; u -> 2`.

`decode`: opposite behavior of `encode` function.

`techList`: receives an `array` of learned technologies and a name of format `string` and returns an `array` of `objects`, with technologies on key `tech` and name on key `name`.\
Format of object: 
`{
  tech: 'techName',
  name: 'name'
}
`

`generatePhoneNumber`: receives an `array` of 11 `numbers` and returns a telephone number with brackets, dash and spaces according following conditions:
* if functions receives `array` with different size than 11 -> message: `Array com tamanho incorreto`
* if number of `array` is smaller than 0, greater than 9 or repeats more than 2 times -> message: `não é possível gerar um número de telefone com esses valores`

`triangleCheck`: receives 3 `numbers` which represent lines to form a triangle and returns if it is possible to form a triangle with passed values

`hydrate`: receives a `string` with quantity of alcohol drinks and returns a sugestion of how much glasses of water you should drink to compensate. Example:\
`reveived string: 3 cachaça, 7 cervejas

returned string: 10 copos de água`
