const happyBirthday = require('./happy-birthday');

describe('happy birthday', () => {
  it('context body is happy birthday', () => {
    const context = {}
    happyBirthday(context);
    expect(context.body).toStrictEqual({ happy: 'birthday' });
  });
});
