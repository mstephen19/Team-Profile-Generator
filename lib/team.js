class Team {
  constructor(){
    this.manager = undefined;
    this.engineers = [],
    this.interns = []
  }
  setManager = function(managerObject){
    (this.manager) = managerObject;
  }
  addEngineer = function(engineer){
    (this.engineers).push(engineer)
  }
  addIntern = function(intern){
    (this.interns).push(intern)
  }
}

module.exports = Team;