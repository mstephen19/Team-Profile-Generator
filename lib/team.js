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
    //loop through all the engineers. if there are none with the same employee ID, add them. else nothing
    (this.engineers).push(engineer)
  }
  addIntern = function(intern){
        //loop through all the interns. if there are none with the same employee ID, add them. else nothing
    (this.interns).push(intern)
  }
}

module.exports = Team;