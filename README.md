# Project Playground Functions

### This project consists of creating functions to facilitate the management of a zoo.
* Designed by using JavaScript

## Description of created functions: 
`getSpeciesByIds`: receives one or more ids to search for animal species by id and returns an `array` containing all species of input parameter ids.

`getAnimalsOlderThan`: receives a species name & minimal age and returns a `boolean` verifying if all animals of this species have a certrain minimal age

`getEmployeeByName`: receives an employee name to search for first or last name and returns an `object` of this employee

`getRelatedEmployees`: seperated in two functions (best practices). First function `isManager` verifies if employee is manager or not by receiving an id and return a `boolean`, true or false.\
Function `getRelatedEmployees` uses this function to validate two conditions:\
(1) true -> returns an `array` with the names of employees which manager is responsible for or\
(2) false -> returns an `error message`: 'O id inserido não é de uma pessoa colaboradora gerente!' if employee is not manager

`countAnimals`: responsible for counting the animals of every species in three cases:\
(1) if no input parameter was given, return an `object` which contains every species name as key and total amount of every species as value\
(2) with `{ specie: 'penguins' }` as parameter, return the quantity of penguins in zoo\
(3) with `{ specie: 'giraffes', sex: 'female' }` as parameter, return the quantity of female giraffes in zoo

`calculateEntry`: seperated in two functions (best practices).\
First function `countEntrants`...\
Function `calculateEntry`...


```
const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
```

<!---
calculateEntry: separada em duas funções mediante a prática de responsabilidade única, a primeira função recebe um array de visitantes no formato abaixo e retorna um objeto com a quantidade de pessoas em casa faixa etária: { child: 3, adult: 2, senior: 1 }; e a segunda função recebe o objeto da primeira função e calcula o valor total a ser pago pelas entradas deste grupo de pessoas presente na constante entrants.
-->
