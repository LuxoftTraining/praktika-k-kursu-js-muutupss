import {employeeManagerView} from './ui'
import DATA from './employees-json'

const employees = DATA.employees
String.prototype.trimAll = function() {
    return this.replace(/>\s+</g,'><').replace(/\s\s+/g,' ').trim()
};


test('employeeManagerView', ()=>
    expect(employeeManagerView(employees,1).trimAll()).toEqual(`
        <span>
            <select>
                <option value="1" selected>Pavel Pavlushin</option>
                <option value="2" >Fuf Guf</option>
                <option value="3" >Mou Hou</option>
                <option value="4" >Poop Shpot</option>
                <option value="5" >Hohy Poku</option>
            </select>
         </span>
    `.trimAll())
);