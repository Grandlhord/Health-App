import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "First Aid Quick Guide",
            headerStyle: { backgroundColor: "#ef4444" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
          }}
        />
        <Stack.Screen
          name="guide/[id]"
          options={{
            title: "Guide Details",
            headerStyle: { backgroundColor: "#ef4444" },
            headerTintColor: "#fff",
          }}
        />
      </Stack>
    </>
  )
}
