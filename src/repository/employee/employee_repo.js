const Employee = require('../../model/employee/employee_model');

// Create a new employee
const createEmployee = async (employeeData) => {
  try {
    const employee = new Employee(employeeData);
    await employee.save();
    return employee;
  } catch (error) {
    throw new Error('Error creating employee: ' + error.message);
  }
};

// Get an employee by ID
const getEmployeeById = async (id) => {
  try {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  } catch (error) {
    throw new Error('Error retrieving employee: ' + error.message);
  }
};

// Update an employee by ID
const updateEmployeeById = async (id, updateData) => {
  try {
    const employee = await Employee.findByIdAndUpdate(id, updateData, { new: true });
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  } catch (error) {
    throw new Error('Error updating employee: ' + error.message);
  }
};

// Delete an employee by ID
const deleteEmployeeById = async (id) => {
  try {
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  } catch (error) {
    throw new Error('Error deleting employee: ' + error.message);
  }
};

// Get all employees
const getAllEmployees = async () => {
  try {
    const employees = await Employee.find();
    return employees;
  } catch (error) {
    throw new Error('Error retrieving employees: ' + error.message);
  }
};

module.exports = {
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  getAllEmployees
};
