import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import CustomTabBarButton from '../components/CustomTabBarButton';
import '../global.css';

const ACTIVE_TINT_COLOR = '#8B4513';
const INACTIVE_TINT_COLOR = '#5C8D3E';
const TAB_BAR_BACKGROUND = '#D1E8CF';
const RIPPLE_COLOR_FOR_ACTIVE = 'rgba(139, 69, 19, 0.15)';
const PRESSED_OPACITY_IOS = 0.8;

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ACTIVE_TINT_COLOR,
        tabBarInactiveTintColor: INACTIVE_TINT_COLOR,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          overflow: 'hidden',
          height: 80,
          paddingBottom: 15,
          backgroundColor: TAB_BAR_BACKGROUND,
        },
        tabBarIconStyle: {
          marginTop: 5,
          // HAPUS marginLeft: 20,
          // TAMBAHKAN INI untuk memusatkan ikon di dalam ruangnya:
          alignItems: 'center',
          // Anda juga bisa mencoba menambahkan justifyContent: 'center' jika ikonnya masih belum pas secara vertikal
          justifyContent: 'center', // Opsional, coba jika perlu
          width: '100%', // Opsional, kadang diperlukan jika container ikon tidak mengambil lebar penuh
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingBottom: 5,
          textAlign: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={28} color={color} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              activeRippleColor={RIPPLE_COLOR_FOR_ACTIVE}
              pressedOpacity={PRESSED_OPACITY_IOS}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="plants"
        options={{
          title: 'Plants',
          tabBarIcon: ({ color, focused, size }) => (
            <FontAwesome6 name="plant-wilt" size={focused ? size : size - 2} color={color} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              activeRippleColor={RIPPLE_COLOR_FOR_ACTIVE}
              pressedOpacity={PRESSED_OPACITY_IOS}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ai-detection"
        options={{
          title: 'AI Detection',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name={focused ? 'scan-circle-sharp' : 'scan-circle-outline'} size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              activeRippleColor={RIPPLE_COLOR_FOR_ACTIVE}
              pressedOpacity={PRESSED_OPACITY_IOS}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="article"
        options={{
          title: 'Article',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              activeRippleColor={RIPPLE_COLOR_FOR_ACTIVE}
              pressedOpacity={PRESSED_OPACITY_IOS}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused, size }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton
              {...props}
              activeRippleColor={RIPPLE_COLOR_FOR_ACTIVE}
              pressedOpacity={PRESSED_OPACITY_IOS}
            />
          ),
        }}
      />
    </Tabs>
  );
}
