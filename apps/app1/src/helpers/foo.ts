import { baz } from 'module1/baz';

export async function foo() {
  return `foo + ${await baz()}`;
}