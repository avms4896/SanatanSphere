import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title:"Home",
          tabBarIcon:({color,size})=>(
            <Ionicons
              name="home"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen
        name="bhajans"
        options={{
          title:"Bhajans",
          tabBarIcon:({color,size})=>(
            <Ionicons
              name="musical-notes"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen
        name="downloads"
        options={{
          title:"Downloads",
          tabBarIcon:({color,size})=>(
            <Ionicons
              name="download"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title:"Favorites",
          tabBarIcon:({color,size})=>(
            <Ionicons
              name="heart"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title:"Settings",
          tabBarIcon:({color,size})=>(
            <Ionicons
              name="settings"
              size={size}
              color={color}
            />
          )
        }}
      />

    </Tabs>
  );
}