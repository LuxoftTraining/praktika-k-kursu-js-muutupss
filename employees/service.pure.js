import {findById} from "./service"

export function removeEmployee(employees, id) {
    return employees.filter(e=>e.id!==id);
}

export function addPhone(employees, id, phone) {
    const em = findById(id)
    const phones = em.phones
    const totalPhones = (!phones) ? [...phone] : [...phones,...phone]
    const employeeId = {...em, phones : totalPhones}
    const employeesWithoutId = employees.filter(e => e.id != id)
    return [...employeesWithoutId, employeeId]
}

export function addEmployee(employees, name, surname){
    if (!name || !surname) { 
        throw new Error("Error!!!")
    } else {
        let maxid = employees[0].id
        for (let i of employees){
            if (i.id > maxid) {
                maxid = i.id
            }
        }
        const newemployees =  {
            id : maxid + 1,
            name : name,
            surname : surname
        }
        return [...employees, newemployees]
    }
}

export function setDateOfBirth(employees, id, date) {
    const em = findById(id)
    const newEm = {...em, dateOfBirth : date}
    const employeesWithoutId = employees.filter(e => e.id != id)
    return [...employeesWithoutId, newEm]
}

export function setEmployeeManager(employees, id, managerId){
    const manager = findById(id);
    const newManager = {...manager, managerRef : managerId}
    const employeesWithoutId = employees.filter(e => e.id != id)
    return [...employeesWithoutId, newManager]
}
