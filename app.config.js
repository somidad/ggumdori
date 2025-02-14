import { readFileSync } from "fs";
import { env } from "process";

const PACKAGE_NAME = 'com.jojosw.ggumdori';

// WARNING: Do not change below lines unless you know what you are doing.

const IS_DEV = env.APP_VARIANT === "development";
const packageName = IS_DEV ? `${PACKAGE_NAME}.dev` : PACKAGE_NAME;

const { version } = JSON.parse(readFileSync("./package.json", "utf8"));
const [major, minor] = version.split(".");
const patch = (() => {
  const now = new Date();
  const year = now.getFullYear().toString().padStart(4, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  return year + month + day + hour + minute;
})();

export default {
  expo: {
    name: "ggumdori",
    slug: "ggumdori",
    version: `${major}.${minor}.${patch}`,
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      bundleIdentifier: packageName.replaceAll("_", "-"),
      supportsTablet: true,
    },
    android: {
      package: packageName.replaceAll("-", "_"),
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      "expo-asset",
    ],
    experiments: {
      typedRoutes: true,
    },
  },
};
