const Team = require('../lib/team');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

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
    it('should add manager',()=>{
      const team = new Team();
      const manager = new Manager('test', 'test', 'test', 'test')
      team.setManager(manager)
      expect(team.manager).not.toEqual(undefined)
      expect(team.manager).toHaveProperty('managerName', 'test')
    })
    it('should throw an error it manager is not an instance of Manager class', ()=>{
      const team = new Team();
      const fakeManager = {name: 'john', apples: '7'}
      const cb = ()=> team.setManager(fakeManager);
      expect(cb).toThrow();
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
      expect(team.engineers[0]).toHaveProperty('name', 'john')
    })
    it('should throw an error if engineer is not an instance of the Engineer class', ()=>{
      const team = new Team();
      const fakeEngineer = {name: 'john', apples: '7'}
      const cb = ()=> team.addEngineer(fakeEngineer);
      expect(cb).toThrow();
    })
  })
  describe('addIntern', ()=>{
    it('should add an intern', ()=>{
      const team = new Team();
      const intern = new Intern('john', 'id', 'emailHere', 'harvard');
      const intern2 = new Intern('jimmy', 'id', 'emailHere', 'berkeley');
      team.addIntern(intern);
      team.addIntern(intern2);
      expect(team.interns.length).toEqual(2);
      expect(team.interns[0]).toHaveProperty('name', 'john')
    })
    it('should throw an error if intern is not an instance of the Intern class', ()=>{
      const team = new Team();
      const fakeIntern = {name: 'john', apples: '7'}
      const cb = ()=> team.addIntern(fakeIntern);
      expect(cb).toThrow();
    })
  })
})