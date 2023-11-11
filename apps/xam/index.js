import { Platform } from "react-native";
import { registerRootComponent } from "expo";

import App from "./App";

// import { ScriptManager, Script, Federated } from "@callstack/repack/client";
// ScriptManager.shared.addResolver(async (scriptId, caller) => {
//   const resolveURL = Federated.createURLResolver({
//     containers: {
//       app1: "http://localhost:9000/[name][ext]",
//       app2: "http://localhost:9001/[name][ext]",
//       module1: "http://localhost:9002/[name][ext]",
//     },
//   });

//   let url;
//   if (caller === "main") {
//     url = Script.getDevServerURL(scriptId);
//   } else {
//     url = resolveURL(scriptId, caller);
//   }

//   if (!url) {
//     return undefined;
//   }

//   return {
//     url,
//     cache: false, // For development
//     query: {
//       platform: Platform.OS,
//     },
//   };
// });

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
