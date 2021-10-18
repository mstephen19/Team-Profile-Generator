class Intern {
  constructor(name, id, email, school){
    if (!name || !id || !email || !school){
      throw new Error('Please enter all arguments for Intern class!')
    } else {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = 'Intern'
    }
  }
  getRole(){
    return this.role;
  }
  getId(){
    return this.id;
  }
  getEmail(){
    return this.email;
  }
  getSchool(){
    return this.school;
  }
}

module.exports = Intern;