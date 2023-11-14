import { useState, useEffect, Suspense } from 'react';
import { Text } from 'react-native';

import Module1 from 'module1/Root';
import { foo } from '../helpers/foo';

export default function App() {
  const [fooText, setFooText] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const fooText = await foo();
        setFooText(fooText);
      } catch {
        setFooText('Failed to get foo text');
      }
    })();
  }, []);

  return (
    <>
      <Text>App 1</Text>
      <Suspense fallback={<Text>Loading module1...</Text>}>
        <Module1 />
      </Suspense>
      <Text>{fooText}</Text>
    </>
  );
}