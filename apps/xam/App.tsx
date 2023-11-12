import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Federated } from "@callstack/repack/client";
import { Suspense, lazy } from "react";

const NoticeApp = lazy(() => Federated.importModule("notice", "./App"));

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Expo with Repack!</Text>
      <Suspense fallback={<Text>Loading app1...</Text>}>
        <NoticeApp />
      </Suspense>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
