class Manager {
  constructor(managerName, managerId, managerEmail, managerOffice){
    if (!managerName || !managerId || !managerEmail || !managerOffice){
      throw new Error('Please enter all arguments for Intern class!')
    } else {
    this.managerName = managerName;
    this.managerId = managerId;
    this.managerEmail = managerEmail;
    this.managerOffice = managerOffice;
    this.role = 'Manager'
    }
  }
  getRole(){
    return this.role;
  }
  getId(){
    return this.managerId;
  }
  getEmail(){
    return this.managerEmail;
  }
  officeNumber(){
    return this.managerOffice;
  }
}

module.exports = Manager;