import { produce } from 'immer'; 

let person = { name: 'Bad'};

function publish(person){

  return produce(person, draftPerson => { // 1st arg initial state, 