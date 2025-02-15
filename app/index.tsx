import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button, useTheme } from "react-native-paper";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { supabase } from "@/utils/supabase";

export default function Landing() {
  const theme = useTheme();
  const router = useRouter();

  GoogleSignin.configure({
    scopes: [],
    webClientId: process.env.EXPO_PUBLIC_GOOGLE_WEB_CLEINT_ID,
  });

  async function onPressGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo.data?.idToken) {
        const { data, error } = await supabase.auth.signInWithIdToken({
          provider: "google",
          token: userInfo.data.idToken,
        });
        console.log(error, data);
        if (error) {
          throw error;
        }
        router.push("/statements");
      } else {
        throw new Error("no ID token present!");
      }
    } catch (error: any) {
      console.error(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onPress={onPressGoogleSignin}>Signin with Google</Button>
    </View>
  );
}
