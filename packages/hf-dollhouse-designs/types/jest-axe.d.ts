declare module 'jest-axe' {
  import { Matcher } from 'expect';

  // Extend Jest's matchers to include jest-axe's
  declare global {
    namespace jest {
      interface Matchers<R> {
        toHaveNoViolations(): R;
      }
    }
  }

  export function toHaveNoViolations(): Matcher;
}
