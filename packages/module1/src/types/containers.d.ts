declare module 'app1/BlueText' {
  const BlueText: React.ComponentType<{ children: string }>;
  export default BlueText;
}

declare module 'app1/foo' {
  function foo(): Promise<string>;
  export { foo };
}