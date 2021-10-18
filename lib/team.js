const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

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
    if (engineer instanceof Engineer){
      (this.engineers).push(engineer)
    } else {
      throw new Error('Please make sure it\'s an instance of the Engineer class!')
    }
    //loop through all the engineers. if there are none with the same employee ID, add them. else nothing
  }
  addIntern = function(intern){
    if (intern instanceof Intern){
      (this.interns).push(intern)
    } else {
      throw new Error('Please make sure it\'s an instance of the Intern class!')
    }
    //loop through all the interns. if there are none with the same employee ID, add them. else nothing
  }
}

module.exports = Team;