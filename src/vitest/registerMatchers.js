import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';

console.log(expect.extend);
expect.extend(matchers);
