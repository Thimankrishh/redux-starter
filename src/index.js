import { compose, pipe} from 'lodash/fp';

let input = "   JAVASCRIPT   ";
let output = "<div>" + input.trim() + "<di";

const trim = input => input.trim();
const wrapInDiv = input => `<div>${input}<div/>`; // both these funcs are same. so we can use another func to pass both element and input.
const wrapInSpan = input => `<span>${input}<span/>`;

const wrap = type => input => `<${type}>${input}<${type}/>`; // curried function. 

const result = wrap(trim(input)); // this is called functional composition.

// this pipe func build pipeline. output of the func given as input for the next func. always returns an one value. So here we can't have a function which takes more than one args.
// we can't pass args to funcs in pipe bcz pipe take only functions. 
const transform = pipe(trim, wrapInDiv); 

console.log(transform(input));
// cons of above way is we have to read right to left for order of the functions it executes. to overcome that we have another method.


