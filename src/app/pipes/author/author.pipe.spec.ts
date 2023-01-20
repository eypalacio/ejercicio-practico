import { AuthorPipe } from './author.pipe';

describe('AutorPipe', () => {
  it('create an instance', () => {
    const pipe = new AuthorPipe();
    expect(pipe).toBeTruthy();
  });
});
