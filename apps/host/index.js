import { ScriptManager, Script, Federated } from "@callstack/repack/client";
import { Platform } from "react-native";
import { registerRootComponent } from "expo";

import App from "./App";

const resolveURL = Federated.createURLResolver({
  containers: {
    app1: 'http://192.168.1.75:9000/[name][ext]',
    app2: 'http://192.168.1.75:9001/[name][ext]',
    module1: 'http://192.168.1.75:9002/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
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
