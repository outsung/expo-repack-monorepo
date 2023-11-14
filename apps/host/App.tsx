import { Federated } from '@callstack/repack/client';
import { Suspense, lazy } from 'react';
import { Text, SafeAreaView } from 'react-native';

const App1 = lazy(() => Federated.importModule('app1', './App'));
const App2 = lazy(() => Federated.importModule('app2', './App'));

export default function App() {
  return (
    <SafeAreaView>
      <Text>Host App</Text>
      <Suspense fallback={<Text>Loading app1...</Text>}>
        <App1 />
      </Suspense>
      <Suspense fallback={<Text>Loading app2...</Text>}>
        <App2 />
      </Suspense>
    </SafeAreaView>
  );
}