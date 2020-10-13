import {removeEmployee, addPhone, addEmployee, setDateOfBirth, setEmployeeManager} from './service.pure';
import DATA from './employees-json'

const employees = DATA.employees

const employeesRemoved4 = 
    [
        {
        id: 1,
        name: "Pavel",
        surname: "Pavlushin",
        department: "IT",
        salary: 1000
        },
        {
        id: 2,
        name: "Fuf",
        surname: "Guf",
        department: "IT",
        salary: 3000
        },
        {
        id: 3,
        name: "Mou",
        surname: "Hou",
        department: "Score",
        salary: 4000
        },
        {
        id: 5,
        name: "Hohy",
        surname: "Poku",
        department: "Nani",
        salary: 1300
        },
    ]    

const employeesAddPhone4 = 
[
    {
    id: 1,
    name: "Pavel",
    surname: "Pavlushin",
    department: "IT",
    salary: 1000
    },
    {
    id: 2,
    name: "Fuf",
    surname: "Guf",
    department: "IT",
    salary: 3000
    },
    {
    id: 3,
    name: "Mou",
    surname: "Hou",
    department: "Score",
    salary: 4000
    },
    {
    id: 5,
    name: "Hohy",
    surname: "Poku",
    department: "Nani",
    salary: 1300
    },
    {
    id: 4,
    name: "Poop",
    surname: "Shpot",
    department: "Score",
    salary: 2500,
    phones: ["498284","23424"]
    }
]    

const employeesaddEmployee6 = 
[
    {
    id: 1,
    name: "Pavel",
    surname: "Pavlushin",
    department: "IT",
    salary: 1000
    },
    {
    id: 2,
    name: "Fuf",
    surname: "Guf",
    department: "IT",
    salary: 3000
    },
    {
    id: 3,
    name: "Mou",
    surname: "Hou",
    department: "Score",
    salary: 4000
    },
    {
    id: 4,
    name: "Poop",
    surname: "Shpot",
    department: "Score",
    salary: 2500,
    },
    {
    id: 5,
    name: "Hohy",
    surname: "Poku",
    department: "Nani",
    salary: 1300
    },
    {
    id: 6,
    name: "Top",
    surname: "Kot"
    },
]    

const employeessetDateOfBirth4 = [
    {
    id: 1,
    name: "Pavel",
    surname: "Pavlushin",
    department: "IT",
    salary: 1000
    },
    {
    id: 2,
    name: "Fuf",
    surname: "Guf",
    department: "IT",
    salary: 3000
    },
    {
    id: 3,
    name: "Mou",
    surname: "Hou",
    department: "Score",
    salary: 4000
    },
    {
    id: 5,
    name: "Hohy",
    surname: "Poku",
    department: "Nani",
    salary: 1300
    },
    {
    id: 4,
    name: "Poop",
    surname: "Shpot",
    department: "Score",
    salary: 2500,
    dateOfBirth: "01-01-2001"
    }
]    

const employeessetEmployeeManager4 = [
    {
        id: 1,
        name: "Pavel",
        surname: "Pavlushin",
        department: "IT",
        salary: 1000
        },
        {
        id: 2,
        name: "Fuf",
        surname: "Guf",
        department: "IT",
        salary: 3000
        },
        {
        id: 3,
        name: "Mou",
        surname: "Hou",
        department: "Score",
        salary: 4000
        },
        {
        id: 5,
        name: "Hohy",
        surname: "Poku",
        department: "Nani",
        salary: 1300
        },
        {
        id: 4,
        name: "Poop",
        surname: "Shpot",
        department: "Score",
        salary: 2500,
        managerRef: 2
        }
]

test('removeEmployee', () =>
    expect(removeEmployee(employees,4))
    .toEqual(employeesRemoved4)
);
      
test('addPhone', () =>
    expect(addPhone(employees, 4, ["498284","23424"]))
    .toEqual(employeesAddPhone4)
);

test('addEmployee', () =>
    expect(addEmployee(employees,"Top","Kot"))
    .toEqual(employeesaddEmployee6)
);

test('setDateOfBirth', () =>
    expect(setDateOfBirth(employees, 4, "01-01-2001"))
    .toEqual(employeessetDateOfBirth4)
);

test('setEmployeeManager', () =>
    expect(setEmployeeManager(employees, 4, 2))
    .toEqual(employeessetEmployeeManager4)
);