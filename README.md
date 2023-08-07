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

