const employees = [{
    id : 1,
    gender: "M",
    joiningDate: new Date()
},
{
    id : 2,
    gender: "F",
    joiningDate: new Date()
},
{
    id : 3,
    gender: "G",
    joiningDate: new Date()
},
{
    id : 0,
    gender: "M",
    joiningDate: new Date()
},
{
    id : -1,
    gender: "F",
    joiningDate: new Date()
},
{
    id : 4,
    gender: "F",
    joiningDate: new Date()
},
{
    id : 0,
    gender: "H",
    joiningDate: new Date()
}
]

const checkValidEmployee = (employee) => {
    if(!employee ||
        !/^(M|F)$/i.test(employee.gender) ||
         employee.joiningDate >  new Date() ||
    employee.id <= 0) return false;
    return true;
}

const validEmployees = employees.filter(checkValidEmployee);

console.log(validEmployees);