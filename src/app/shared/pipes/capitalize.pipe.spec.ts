import { CapitalizePipe } from './capitalize.pipe';

describe('shared/pipes: CapitalizePipe', () => {
  const pipe = new CapitalizePipe();

  it('should capitalize only the first character', () => {
    expect(pipe.transform('jojo')).toBe('Jojo');
    expect(pipe.transform('étrange')).toBe('Étrange');
    expect(pipe.transform('dio da')).toBe('Dio da');
  });
});
