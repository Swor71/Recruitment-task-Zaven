/**
 * task2.js
 *
 * Hey! We want to log Array with valid emails
 * but it's not working right now :(
 * Something is missing in our code!
 *
 * Write transformEmails String static method that should return
 * Array with only valid emails
 */

String.prototype.transformEmails = function() {
  const x = this.split(', ');
  let y = [];
  x.filter(item => item.match(/\S+@{1}\S+\.{1}\S+/) ? y.push(item.trim()) : null);
  
  return y;
}

console.log('test@email.com,  test@mail, test+1@mail.net'.transformEmails());