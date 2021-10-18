class Intern{
  constructor(name, id, email, school){
    if (!name || !id || !email || !school){
      return;
    } else {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    }
  }
}

module.exports = Intern;