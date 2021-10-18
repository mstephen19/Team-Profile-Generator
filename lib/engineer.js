class Engineer {
  constructor(name, id, email, github){
    if (!name || !id || !email || !github){
      throw new Error('Please enter all arguments for Engineer class!')
    } else {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
      this.role = 'Engineer'
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
  getGithub(){
    return this.github;
  }
}

module.exports = Engineer;