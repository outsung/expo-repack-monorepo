import { Platform } from "react-native";
import { registerRootComponent } from "expo";

import App from "./App";

import { ScriptManager, Script, Federated } from "@callstack/repack/client";

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  console.log("call Resolver : ", scriptId, caller);

  const resolveURL = Federated.createURLResolver({
    containers: {
      notice: "http://192.168.35.68:9001/[name][ext]",
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

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
