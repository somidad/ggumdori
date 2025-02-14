import { SQLiteDatabase } from "expo-sqlite";

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  // When you update DB schema, increment this
  const LATEST_VERSION = 1;

  const pragma = await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version");
  if (!pragma) {
    console.error("SQLite `PRAGMA user_version` returned `null`");
    return;
  }
  const { user_version: currentVersion } = pragma;
  if (currentVersion >= LATEST_VERSION) {
    return;
  }

  // Add proper migration, e.g.:
  // if (currentVersion === 0) {
  //   The very first initialization
  // }

  await db.execAsync(`PRAGMA user_version = ${LATEST_VERSION}`);
}
