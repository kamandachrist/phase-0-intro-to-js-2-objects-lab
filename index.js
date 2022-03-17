// Write your solution in this file!

const newEmployee = {
    name: 'Insert name here',
    streetAddress: 'Insert Address here',
  }

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    }
    
  }

  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const replace = {employee}
    console.log(replace)
    replace.employee[key] = value
      return replace.employee

    }
  
  function deleteFromEmployeeByKey(employee, key, value){
    const erase = {...employee}
    delete erase[key], value
    return erase
    
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    const erase = {employee}
    delete erase[key], value;
    return erase
  }


  