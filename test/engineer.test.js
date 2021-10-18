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
})