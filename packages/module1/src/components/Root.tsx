
import { lazy, Suspense } from 'react';
import { Text } from 'react-native';

// TODO
const BlueText = lazy(() => import('app1/BlueText'));

export default function Root() {
  return (
    <Suspense fallback={<Text>Loading module1...</Text>}>
      <BlueText>Module 1</BlueText>
    </Suspense>
  );
}

