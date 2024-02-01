# expo-repack-monorepo

This example shows you how to setup [Expo](https://github.com/expo/expo) & [Re.Pack](https://github.com/callstack/repack) with its `ModuleFederationPlugin`.


## Usage

Change to your ip:
- `192.168.1.75`

Install dependencies:

```bash
pnpm install
```

Change to your expo projectId:
- `*/app.json > expo.extra.eas.projectId`

Development builds (only host):

```bash
cd ./apps/host
pnpm build:eas --profile local
```

Run bundle server (No need to use `expo start` command):

```bash
pnpm dev
```

Enter `http://[ip]:8081/index.bundle?platform=ios` in `Enter URL manually` of Development build:
<img src = "https://github.com/outsung/expo-repack-monorepo/assets/40460655/42f9851e-5bc5-45f5-85dc-2d78bdea7f83" width="300" />

## Reference

For a more example of without Expo please visit 
- [Re.Pack Examples repository](https://github.com/callstack/repack-examples).
- [Super App Showcase repository](https://github.com/callstack/super-app-showcase). 


## Issues
- ~~Plugin for Android not yet implemented~~ solved
- ~~[Expo Updates](https://docs.expo.dev/versions/latest/sdk/updates/) is not working~~ solved


