const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    })

   it('should add new user', () => {
       var users = new Users();
       var user = {
           id: '123',
           name: 'Irvin',
           room: 'Office Fans'
       };
       var resUser = users.addUser(user.id, user.name, user.room);

       expect(users.users).toEqual([user]);
   });

   it('should return names for Node course', () => {
      var userList = users.getUserList('Node Course');
      expect(userList).toEqual(['Mike', 'Julie']);
   });

   it('should remove user with id', () => {
       var removedUser = users.removeUser('1');
       expect(users.users.length).toEqual(2);
       expect(removedUser.id).toEqual('1');
   });

   it('should not remove user with invalid id', () => {
       var removedUser = users.removeUser('33');
       expect(users.users.length).toEqual(3);
       expect(removedUser).toBeUndefined();
   });

   it('should find user with id', () => {
       var user = users.getUser('1');
       expect(user).toEqual({
           id: '1',
           name: 'Mike',
           room: 'Node Course'
       });
   });

   it('should not find user with invalid id', () => {
       var user = users.getUser('33');
       expect(user).not.toBeDefined();
   });
});