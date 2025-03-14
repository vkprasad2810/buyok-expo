import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "#1F2326" } }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
