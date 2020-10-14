import { maxHeaderSize } from "http";
import DATA from "../employees/employees-json"

export function f1(){
    return [].reduce.call(arguments, (x,y) => x + y)/arguments.length
}

export function f2(m){
    return f1.apply(null, m)
}

export function makeShout() {
    var phrase = "Привет!";
    var shout = function() {
        alert(phrase);
    }
    phrase = "Готово!"
    return shout;
}

export function sum(x) {
    return function(y) {
        return (x + y)
    }
}

export function makeProperty(o, name, predicate) {
    var value;
    o["get" + name] = function() { return value; };

    o["set" + name] = function(v) {
        if (predicate && !predicate(v))
            throw "set" + name + ": invalid value " + v;
        else
            value = v;
    };
}

export function info(obj, fnc){
    for (let val in obj) fnc(val,obj[val])
}

export function amountInDep(dep) {
    return DATA.employees.map(e=>e.department)
        .filter(d=>d===dep)
        .length;
}

export function sumSalaryInDep(dep) {
    return DATA.employees
         .filter(e=>e.department===dep)
	     .map(e=>e.salary)
        .reduce((a,b)=>a+b);
}

export function avgSalaryInDep(dep) {
    return DATA.employees
         .filter(e=>e.department===dep)
	     .map(e=>e.salary)
         .reduce((a,b)=>a+b)/
        DATA.employees
        .filter(e=>e.department===dep)
        .length;
}

export function maxSalaryInDep(dep) {
    console.log(dep)
    return DATA.employees
         .filter(e=>e.department===dep)
	     .map(e=>e.salary)
        .reduce((a,b)=>{return (a > b) ? a : b});
}

export function depWithMaxSalary() {
    return    DATA.employees
        .map(e => e.department)
        .reduce((a,b) => {return (maxSalaryInDep(a) > maxSalaryInDep(b)) ? a : b})
}

export function depEmployees() {
    return    DATA.employees
        .map(e => e.name)
}

export function employeesWithSalaryMoreThan(salary) {
    return    DATA.employees
        .filter(e => e.salary > salary)
        .map (e => e.name)
}
