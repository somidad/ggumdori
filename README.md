# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Clone or download this repository
2. Remove `package-lock.json` line in `.gitignore`.

## Versioning

You don't need to edit `app.config.js` for versioning.

Use `npm version major` and `npm version minor` to bump major/minor version. Patch version, everytime you run `npm run prebuild` or `npm run prebuild:release`, will be automatically set to `${year}${month}${day}${hour}${minute}` with proper zero paddings.

## Assets

If you want to use assets of file types other than [those supported by default](https://docs.expo.dev/versions/latest/sdk/asset/#configurable-properties):

1. Add file extensions to `metro.config.js` you want to bundle
2. Use the following code snippet:

- [ ] TODO: Define it as a reusable function

```js
async () => {
  try {
    const nodeRequire = require("@/assets/<filename>");
    const asset = Asset.fromModule(nodeRequire);
    await asset.downloadAsync();
    if (asset.localUri) {
      const fileContents = await readAsStringAsync(asset.localUri);
      // Do something with `fileContents`, e.g. set a state
    }
  } catch (error) {
    console.error(error);
  }
};
```

## Open source license

You can get `license.tsv`, a list of licenses of open source projects by running the command `npm run license`. Use it to make a open source license notice.

---

# To cleanup

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
