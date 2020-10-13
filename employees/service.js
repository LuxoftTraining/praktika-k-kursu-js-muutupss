import DATA from './employees-json'

export function findByName(name, surname) {
    let res = [];
    for (var e of DATA.employees) {
        if ((!name || e.name===name) &&
            (!surname || e.surname===surname)) {
            res.push(e);
        }
    }
    return res;
}

export function addEmployee(name, surname){
    let res = DATA.employees
    if (!name || !surname) { 
        throw new Error("Error!!!")
    } else {
        let maxid = res[0].id
        for (let i of res){
            if (i.id > maxid) {
                maxid = i.id
            }
        }
        res.push(
            {
                id : maxid + 1,
                name : name,
                surname : surname
            }
        )
        return (maxid + 1)
    }
}

export function deleteEmployee(id){
    let res = DATA.employees
    let j = 0
    for (let i of DATA.employees){
        if (i.id == id){
            res.splice(j, 1);
            break;
        }
        j++
    }
    return res
}

function showEmployee(employees){
    const keys = Object.keys(employees)
    for (let i of keys) {
        console.log( i + " = " + employees[i])
    }
}

export function showEmployees () {
    DATA.employees.forEach((e) => showEmployee(e))
}

const employeeMap = {}

export function findById(id){
    if (employeeMap[id]){
        return employeeMap[id]
    } else {
        let res = {}
        DATA.employees.forEach((em) => {
            if (em.id == id){
                employeeMap[id] = em
                res = em
            }
        })
        return res
    }
}

function addPhone(id, phone) {
    const em = findById(id)
    const phones = em.phones
    if (!phones) {
        em.phones = []
    }
    em.phones.push(phone)
    return DATA
}

function setDateOfBirth(id, date) {
    const em = findById(id)
    em.dateOfBirth = date
    console.log(em.dateOfBirth)
}

function getAge(id) {
    const em = findById(id);
    let ageDiff = Date.now() - em.dateOfBirth.getTime();
    let ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
   
function formatDate(date) {
    let day = date.getDate();
    if (day<10) day = '0'+day;
    let month = date.getMonth()+1;
    if (month<10) month = '0'+month;
    let year = date.getFullYear();
   
    return day + '.' + month + '.' + year;
   }
   
function getEmployeeInfo(id) {
    const e = findById(id);
   
    const phones = e.phones ? `${e.phones}` : '';
    const age = e.dateOfBirth ? `${getAge(e.id)}` : '';
    return ` 
     ${e.name}
     ${e.surname}
     ${phones} 
     ${age}
    `;
   }

   function testEmployee() {
    addPhone(5, "123");
    addPhone(5, "777");
    setDateOfBirth(5, new Date(2000,1,1))
    const info = getEmployeeInfo(5);
    console.log(info);
   }

   function getEmployeeJSON(id) {
    const e = findById(id);
    return JSON.stringify(e);
   }

   export function setEmployeeManager(id, managerId){
        let manager = findById(id);
        manager.managerRef = managerId
   }
   
   export function searchEmployees(name, surname, managerRef) {
    let results = [];
    for (let e of DATA.employees) {
     if ((!name || e.name==name) &&
      (!surname || e.surname==surname) &&
      (!managerRef || e.managerRef==managerRef)) {
      results.push(e);
     }
    }
    return results;
   }
   
   
   