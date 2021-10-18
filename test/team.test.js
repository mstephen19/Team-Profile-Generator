const Team = require('../lib/team');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

describe('Team', ()=>{
  describe('team creation', ()=>{
    it('should create a new empty team', ()=>{
      const team = new Team();
      expect(typeof team).toEqual('object');
      expect(team).toHaveProperty('manager');
      expect(team).toHaveProperty('engineers');
      expect(team).toHaveProperty('interns');
    });
  });
  describe('setManager',()=>{
    it('should add manager info',()=>{
      const team = new Team();
      const manager = {name: 'test', id: 'test'}
      team.setManager(manager)
      expect(team.manager).not.toEqual(undefined)
      expect(team.manager).toHaveProperty('name')
      expect(team.manager).toHaveProperty('id')
    })
  })
  describe('addEngineer', ()=>{
    it('should add an engineer', ()=>{
      const team = new Team();
      const engineer = new Engineer('john', 'id', 'emailHere', 'mstephen19');
      const engineer2 = new Engineer('jimmy', 'id', 'emailHere', 'jimBob42');
      team.addEngineer(engineer)
      team.addEngineer(engineer2)
      expect(team.engineers.length).toEqual(2);
    })
  })
})