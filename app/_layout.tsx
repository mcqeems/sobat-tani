import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#8B4513", // Brown color for active icons
                tabBarInactiveTintColor: "#5C8D3E", // Green color for inactive icons
                headerShown: false,
                tabBarShowLabel: true,
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    position: "absolute",
                    overflow: "hidden",
                    height: 80,
                    paddingBottom: 15,
                    backgroundColor: "#D1E8CF", // Lighter green for overall background
                },
                tabBarIconStyle: {
                    marginTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    paddingBottom: 5,
                    color: "#5C8D3E",
                },
            }}
        >
            <Tabs.Screen
                name="index" // Changed from "Home" to "index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="plants" // Changed from "Plants" to "plants"
                options={{
                    title: "Plants",
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
                name="ai-detection" // Changed from "AIDetection" to "ai-detection"
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
                name="article" // Changed from "Article" to "article"
                options={{
                    title: "Article",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="book" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile" // Changed from "Profile" to "profile"
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
