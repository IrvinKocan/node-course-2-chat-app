var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    })
});

describe('generateLocationMessage', () => {
   it('should generate correct location object', () => {
       var from = 'Deb';
       var lat = 15;
       var long = -1.3;
       var url = `https://www.google.com/maps?q=15,-1.3`;

       var message = generateLocationMessage(from, lat, long);

       expect(typeof message.createdAt).toBe('number');
       expect(message).toMatchObject({
           from,
           url
       });
   });
});