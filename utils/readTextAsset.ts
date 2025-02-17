import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";

export async function readTextAsset(name: string) {
  try {
    const nodeRequire = require(`@/assets/${name}`);
    const asset = Asset.fromModule(nodeRequire);
    await asset.downloadAsync();
    if (asset.localUri) {
      return await readAsStringAsync(asset.localUri);
    }
  } catch (error) {
    console.error(error);
  }
  return "";
}
