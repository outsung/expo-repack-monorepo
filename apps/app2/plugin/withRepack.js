const { withXcodeProject } = require("expo/config-plugins");

const { ISA } = require("xcparse");

/** @type {import('@expo/config-plugins').ConfigPlugin} */
const withRepack = (config) => {
  return withXcodeProject(config, (config) => {
    const pbxproj = config.modResults.hash.project;

    for (const [isa, sectionObject] of Object.entries(pbxproj.objects ?? {})) {
      if (isa === ISA.PBXShellScriptBuildPhase) {
        for (const section of Object.values(sectionObject)) {
          if (section.name === '"Bundle React Native code and images"') {
            section.shellScript =
              '"if [[ -f \\"$PODS_ROOT/../.xcode.env\\" ]]; then\\n  source \\"$PODS_ROOT/../.xcode.env\\"\\nfi\\nif [[ -f \\"$PODS_ROOT/../.xcode.env.local\\" ]]; then\\n  source \\"$PODS_ROOT/../.xcode.env.local\\"\\nfi\\n\\n# The project root by default is one level up from the ios directory\\nexport PROJECT_ROOT=\\"$PROJECT_DIR\\"/..\\n\\nif [[ \\"$CONFIGURATION\\" = *Debug* ]]; then\\n  export SKIP_BUNDLING=1\\nfi\\nif [[ -z \\"$ENTRY_FILE\\" ]]; then\\n  # Set the entry JS file using the bundler\'s entry resolution.\\n  export ENTRY_FILE=\\"$(\\"$NODE_BINARY\\" -e \\"require(\'expo/scripts/resolveAppEntry\')\\" \\"$PROJECT_ROOT\\" ios relative | tail -n 1)\\"\\nfi\\n\\nexport BUNDLE_COMMAND=webpack-bundle\\n\\n`\\"$NODE_BINARY\\" --print \\"require(\'path\').dirname(require.resolve(\'react-native/package.json\')) + \'/scripts/react-native-xcode.sh\'\\"`\\n\\n"';
          }
        }
      }
    }
    return config;
  });
};

module.exports = withRepack;
