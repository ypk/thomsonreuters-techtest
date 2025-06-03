import Home from '../app/page';

jest.mock('../app/components/ui/LoadingSpinner', () => ({
  LoadingSpinner: jest.fn(() => null),
}));

describe('Home Page', () => {
  it('should be importable and callable', () => {
    expect(Home).toBeDefined();
    expect(() => Home()).not.toThrow();
  });
});
