import { metadata } from '../app/layout';

describe('RootLayout', () => {
  describe('metadata', () => {
    it('has correct title', () => {
      expect(metadata.title).toBe('Olympic Medal Count');
    });

    it('has correct description', () => {
      expect(metadata.description).toBe(
        'Track Olympic medal standings by country'
      );
    });
  });

  describe('Layout', () => {
    it('can be imported without errors', async () => {
      await expect(import('../app/layout')).resolves.toBeDefined();
    });
  });
});
