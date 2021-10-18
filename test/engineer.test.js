const Engineer = require('../lib/engineer')

describe('engineer class', ()=>{
  it('should create a new instance with arguments provided', ()=>{
    const newEngineer = new Engineer('mark', 'test', 'test', 'test')
    expect(newEngineer).toHaveProperty('name', 'mark')
    expect(newEngineer).toHaveProperty('id', 'test')
    expect(newEngineer).toHaveProperty('email', 'test')
    expect(newEngineer).toHaveProperty('github', 'test')
  })
  it('should throw an error if not all arguments are met', ()=>{
    const cb = ()=> new Engineer('beep', 'boop')
    expect(cb).toThrow();
  })
  it('should return role from getRole method', ()=>{
    const newEngineer = new Engineer('mark', 'test', 'test', 'test')
    expect(newEngineer.getRole()).toEqual('Engineer')
  })
  it('should return id from getId method', ()=>{
    const newEngineer = new Engineer('test', '123', 'test', 'test')
    expect(newEngineer.getId()).toEqual('123')
  })
  it('should return email from getEmail method', ()=>{
    const newEngineer = new Engineer('test', '123', 'test@gmail.com', 'test')
    expect(newEngineer.getEmail()).toEqual('test@gmail.com')
  })
  it('should return github from getGithub method', ()=>{
    const newEngineer = new Engineer('test', '123', 'test@gmail.com', 'test420')
    expect(newEngineer.getGithub()).toEqual('test420')
  })
})