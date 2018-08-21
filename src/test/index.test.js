import App from '../js/App';

describe('App', () => {
  it('App("wasmFn") to be "<h1>Result 5!!</h1>"', () => {
    expect(App((a, b) => a + b)).toBe('<h1>Result 5!!</h1>');
  });
});
