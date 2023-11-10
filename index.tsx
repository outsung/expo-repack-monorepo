import { AppRegistry, Platform } from "react-native";
import { ScriptManager, Script, Federated } from "@callstack/repack/client";
import { expo } from "./app.json";
import App from "./App";

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  const resolveURL = Federated.createURLResolver({
    containers: {
      app1: "http://localhost:9000/[name][ext]",
      app2: "http://localhost:9001/[name][ext]",
      module1: "http://localhost:9002/[name][ext]",
    },
  });

  let url;
  if (caller === "main") {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(expo.name, () => App);
