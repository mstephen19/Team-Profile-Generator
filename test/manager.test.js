const Manager = require('../lib/manager');

describe('manager class', ()=>{
  it('should create a new instance with arguments provided', ()=>{
    const manager = new Manager('james', 'test', 'test', '123')
    expect(manager).toHaveProperty('managerName', 'james')
    expect(manager).toHaveProperty('managerId', 'test')
    expect(manager).toHaveProperty('managerEmail', 'test')
    expect(manager).toHaveProperty('managerOffice', '123')
  })
  it('should throw an error if not all arguments are met', ()=>{
    const cb = ()=> new Manager('beep', 'boop')
    expect(cb).toThrow();
  })
  it('should return role from getRole method', ()=>{
    const manager = new Manager('mark', 'test', 'test', 'test')
    expect(manager.getRole()).toEqual('Manager')
  })
  it('should return id from getId method', ()=>{
    const manager = new Manager('test', '123', 'test', 'test')
    expect(manager.getId()).toEqual('123')
  })
  it('should return email from getEmail method', ()=>{
    const manager = new Manager('test', '123', 'test@gmail.com', 'test')
    expect(manager.getEmail()).toEqual('test@gmail.com')
  })
  it('should return office number from officeNumber method', ()=>{
    const manager = new Manager('test', '123', 'test@gmail.com', '42069')
    expect(manager.officeNumber()).toEqual('42069')
  })
})