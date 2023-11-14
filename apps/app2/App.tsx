
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { Section } from './src/components/Section';


export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? "#333" : "#EEE",
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? "#000" : "#FFF",
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <Text>...ReloadInstructions...</Text>
          </Section>
          <Section title="Debug">
            <Text>...DebugInstructions...</Text>
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>

          <Text>...LearnMoreLinks...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});
