import { main } from './index';

describe('Main', () => {
  it('should log', () => {
    const spy = jest.spyOn(console, 'log');

    main()

    expect(spy).toHaveBeenCalledWith('ready')
  });
})
