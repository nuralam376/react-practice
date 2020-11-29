export const keys = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDepartments = () => {
  return [
    { id: "1", title: "Development" },
    { id: "2", title: "marketing" },
    { id: "3", title: "Accounting" },
    { id: "4", title: "HR" },
  ];
};

export function insertEmployees(data) {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(keys.employees, JSON.stringify(employees));
}

export function updateEmployees(data) {
  let employees = getAllEmployees();
  let recordIndex = employees.findIndex((employee) => employee.id == data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(keys.employees, JSON.stringify(employees));
}

export function deleteEmployee(id) {
  let employees = getAllEmployees();
  let employee = employees.findIndex((employee) => employee.id == id);
  employees.splice(employee, 1);
  localStorage.setItem(keys.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(keys.employees) == null) {
    localStorage.setItem(keys.employeeId, "0");
  }
  let id = +localStorage.getItem(keys.employeeId);
  localStorage.setItem(keys.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(keys.employees) == null) {
    localStorage.setItem(keys.employees, JSON.stringify([]));
  }
  let employees = JSON.parse(localStorage.getItem(keys.employees));
  let departments = getDepartments();

  return employees.map((x) => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
}
