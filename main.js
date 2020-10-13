import {Employee} from "./employees/model/Employee"
import { runUI, addEmployeeUI, openTab, searchEmployeeUI,removeEmployeeUI } from './employees/ui-all';
import {employeesWithSalaryMoreThan} from './trainfunctions/functionf'
import './style.css';

window.addEmployeeUI = addEmployeeUI;
window.openTab = openTab;
window.searchEmployeeUI = searchEmployeeUI;
window.removeEmployeeUI = removeEmployeeUI;
runUI();

window.f = employeesWithSalaryMoreThan;