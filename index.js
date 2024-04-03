// Initialize employee object
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  // Function to update employee with a new key-value pair without mutating original object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Function to update employee destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key-value pair from employee without mutating original object
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key-value pair destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log("Original employee:", employee);
  
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "city", "New York");
  console.log("Updated employee (non-destructive):", updatedEmployee);
  
  console.log("Original employee after non-destructive update:", employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "city", "Los Angeles");
  console.log("Employee after destructive update:", employee);
  
  let employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without street address (non-destructive):", employeeWithoutStreetAddress);
  
  console.log("Original employee after non-destructive delete:", employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee after destructive delete:", employee);
  