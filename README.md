# Project Playground Functions

### This project consists of creating functions to facilitate the management of a zoo.
* Designed by using JavaScript
* The devoloped functions and zoo data can be found in src folder

## Description of created functions: 
`getSpeciesByIds`: receives one or more ids to search for animal species by id and returns an `array` containing all species of input parameter ids.

`getAnimalsOlderThan`: receives a species name & minimal age and returns a `boolean` verifying if all animals of this species have a certrain minimal age

`getEmployeeByName`: receives an employee name to search for first or last name and returns a `object` of this employee

`getRelatedEmployees`: seperated in two functions (best practices). First function `isManager` verifies if employee is manager or not by receiving an id and return a `boolean`, true or false.\
Function `getRelatedEmployees` uses this function to validate two conditions:\
(1) true -> returns an `array` with the names of employees which manager is responsible for or\
(2) false -> returns an `error message`: 'O id inserido não é de uma pessoa colaboradora gerente!' if employee is not manager

`countAnimals`: responsible for counting the animals of every species in three cases:\
(1) if no input parameter was given, return an `object` which contains every species name as key and total amount of every species as value\
(2) with `{ specie: 'penguins' }` as parameter, return the quantity of penguins in zoo\
(3) with `{ specie: 'giraffes', sex: 'female' }` as parameter, return the quantity of female giraffes in zoo

`calculateEntry`: seperated in two functions (best practices).\
First function `countEntrants` receives an `array` of entrants in the format below and returns a `object` with the number of visitors in each age group: `{ child: 3, adult: 2, senior: 1 }`.\
Function `calculateEntry` receives the returned `object` of the first function and calculate the total costs of the zoo visitors (const entrants) based on the entry fee.

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

`getAnimalMap`: responsible for geographical mapping of the species and animals, able to filter in alphabetical order and gender. The function can receive three keys as input parameters and return the following:\
(1) no input parameter -> returns animals categorized by location\
(2) includeNames: true -> returns the name of each animal in the geographic mapping\
(3) includeNames: true + sorted: true -> returns sorted animal names\
(4) includeNames: true + sex: 'male' -> returns animal name of specific gender\
(5) combination of keys includeName + sorted + sex -> returns only sorted animal names with specific gender


