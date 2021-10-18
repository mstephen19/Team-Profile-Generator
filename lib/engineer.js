class Engineer{
  constructor(name, id, email, github){
    if (!name || !id || !email || !github){
      throw new Error('Please enter all arguments for Engineer class!')
    } else {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
    }
  }
}

module.exports = Engineer;