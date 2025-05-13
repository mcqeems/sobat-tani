import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#8B4513",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: "absolute",
                    overflow: "hidden",
                    height: 80, // Increased height
                    paddingBottom: 15, // Adjusted padding
                },
                tabBarIconStyle: {
                    marginTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12, // Increased label size
                    paddingBottom: 5,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={28} color={color} /> // Increased icon size
                    ),
                }}
            />
            <Tabs.Screen
                name="market"
                options={{
                    title: "Plant",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome6
                            name="plant-wilt"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="community"
                options={{
                    title: "AI Detection",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="scan-circle-sharp"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="education"
                options={{
                    title: "Article",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
