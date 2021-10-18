const Intern = require('../lib/intern')

describe('intern class', ()=>{
  it('should create a new instance with arguments provided', ()=>{
    const newIntern = new Intern('mark', 'test', 'test', 'test')
    expect(newIntern).toHaveProperty('name', 'mark')
    expect(newIntern).toHaveProperty('id', 'test')
    expect(newIntern).toHaveProperty('email', 'test')
    expect(newIntern).toHaveProperty('school', 'test')
  })
  it('should throw an error if not all arguments are met', ()=>{
    const cb = ()=> new Intern('beep', 'boop')
    expect(cb).toThrow();
  })
  it('should return role from getRole method', ()=>{
    const newIntern = new Intern('mark', 'test', 'test', 'test')
    expect(newIntern.getRole()).toEqual('Intern')
  })
  it('should return id from getId method', ()=>{
    const newIntern = new Intern('test', '123', 'test', 'test')
    expect(newIntern.getId()).toEqual('123')
  })
  it('should return email from getEmail method', ()=>{
    const newIntern = new Intern('test', '123', 'test@gmail.com', 'test')
    expect(newIntern.getEmail()).toEqual('test@gmail.com')
  })
  it('should return school from getSchool method', ()=>{
    const newIntern = new Intern('test', '123', 'test@gmail.com', 'test420')
    expect(newIntern.getSchool()).toEqual('test420')
  })
})