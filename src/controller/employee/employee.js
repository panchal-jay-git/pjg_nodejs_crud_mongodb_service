const {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees,
  } = require('../../repository/employee/employee_repo');
  
  /**
   * Get all employees
   */
  async function getEmployees(req, res, next) {
    try {
      const response = await getAllEmployees();
      res.body = {
        message: messages('getEmployees'),
        data: response,
      };
      next();
    } catch (error) {
      throw new Error('')
    }
  }
  
  /**
   * Get employee by ID
   */
  async function getEmployee(req, res, next) {
    try {
      const employeeId = req.params.id;
      const response = await getEmployeeById(employeeId);
      res.body = {
        message: messages('getEmployee'),
        data: response,
      };
      next();
    } catch (error) {
      throw new Error('')
    }
  }
  
  /**
   * Create a new employee
   */
  async function setEmployee(req, res, next) {
    try {
      const employeeData = req.body;
      const response = await createEmployee(employeeData);
      res.body = {
        message: messages('createEmployee'),
        data: response,
      };
      next();
    } catch (error) {
      throw new Error('')
    }
  }
  
  /**
   * Update employee by ID
   */
  async function updateEmployee(req, res, next) {
    try {
      const employeeId = req.params.id;
      const updateData = req.body;
      const response = await updateEmployeeById(employeeId, updateData);
      res.body = {
        message: messages('updateEmployee'),
        data: response,
      };
      next();
    } catch (error) {
      throw new Error('')
    }
  }
  
  /**
   * Delete employee by ID
   */
  async function deleteEmployee(req, res, next) {
    try {
      const employeeId = req.params.id;
      const response = await deleteEmployeeById(employeeId);
      res.body = {
        message: messages('deleteEmployee'),
        data: response,
      };
      next();
    } catch (error) {
      throw new Error('')
    }
  }
  
  module.exports = {
    getEmployees,
    getEmployee,
    setEmployee,
    updateEmployee,
    deleteEmployee,
  };
  