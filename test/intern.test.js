const Intern = require('../lib/engineer')

describe('engineer class', ()=>{
  it('should create a new instance with arguments provided', ()=>{
    const newIntern = new Intern('mark', 'test', 'test', 'test')
    expect(newIntern).toHaveProperty('name', 'mark')
    expect(newIntern).toHaveProperty('id', 'test')
    expect(newIntern).toHaveProperty('email', 'test')
    expect(newIntern).toHaveProperty('github', 'test')
  })
  it('should throw an error if not all arguments are met', ()=>{
    const cb = ()=> new Intern('beep', 'boop')
    expect(cb).toThrow();
  })
})