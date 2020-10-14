import {Employee, jsonToEmployees} from "./employees/model/Employee"
import { runUI, addEmployeeUI, openTab, searchEmployeeUI,removeEmployeeUI } from './employees/ui-all';
import {employeesWithSalaryMoreThan} from './trainfunctions/functionf'
import DATA from './employees/employees-json'
import './style.css';

let html = ""

function render() {
    document.getElementById("employees").innerHTML = html;
}

window.addEmployeeUI = addEmployeeUI;
window.openTab = openTab;
window.searchEmployeeUI = searchEmployeeUI;
window.removeEmployeeUI = removeEmployeeUI;
runUI();
let employees = jsonToEmployees(DATA.employees);
for (let e of employees) {
    e.total()
    .then(total=>{
        html += `${e.name} total: ${total} <br>`;
    })
    .catch(bonus => {
        html += `${e.name} Недопустимый размер бонуса: ${bonus} <br>`;
    })
    .then(render)
}
//printBonus();

async function printBonus() {
    html += "<br>Async/await version:<br>";
    for (let e of employees) {
        let bonus = await e.bonus();
        html += `${e.name} bonus: ${bonus} 
              total: ${e.salary+bonus}<br>`;
        render();
    }
}


window.f = employeesWithSalaryMoreThan;