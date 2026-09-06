import { Stack } from 'expo-router';
import { ThemeProvider, DefaultTheme } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="marketplace/index" />
      </Stack>
    </ThemeProvider>
  );
}