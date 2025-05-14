// Di file components/CustomTabBarButton.tsx

import type { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform, Pressable, PressableStateCallbackType, StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface CustomTabBarButtonExtraProps {
  activeRippleColor?: string;
  pressedOpacity?: number;
}

type Props = BottomTabBarButtonProps & CustomTabBarButtonExtraProps;

const CustomTabBarButton: React.FC<Props> = ({
  children,
  onPress,
  accessibilityState,
  style, // Style dari React Navigation
  activeRippleColor = 'rgba(0, 0, 0, 0.1)',
  pressedOpacity = 0.75,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
  testID,
}) => {
  const rippleConfig = {
    color: activeRippleColor,
    borderless: true,
  };

  const pressableStyle = (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
    const { pressed } = state;
    const finalStylesArray: ViewStyle[] = [];

    // Fungsi untuk memproses dan memfilter style dari props
    const processStyleProp = (styleElement: any) => {
      if (!styleElement) return;
      const flatStyle = StyleSheet.flatten(styleElement) as ViewStyle;

      if (flatStyle && Object.keys(flatStyle).length > 0) {
        // Kondisi spesifik untuk Style C yang memiliki padding bermasalah:
        // Jika style memiliki 'padding' DAN 'flexDirection: "column"'
        // (Ini adalah heuristik berdasarkan log props.style Anda)
        if (flatStyle.padding !== undefined && flatStyle.flexDirection === 'column') {
          // Buang 'padding', ambil sisa style dari objek ini
          const { padding, ...restOfStyleC } = flatStyle;
          if (Object.keys(restOfStyleC).length > 0) {
            finalStylesArray.push(restOfStyleC);
          }
        } else {
          // Untuk style lain (Style A, Style B), ambil apa adanya
          finalStylesArray.push(flatStyle);
        }
      }
    };

    // Terapkan proses di atas ke 'style' prop
    if (Array.isArray(style)) {
      (style as any[]).forEach(processStyleProp);
    } else {
      processStyleProp(style);
    }

    // Tambahkan style dasar kita. Ini akan memastikan flex:1 dan pemusatan
    // untuk Pressable, dan bisa menimpa justifyContent/alignItems dari props
    // jika ada konflik, yang memang kita inginkan untuk container utama.
    finalStylesArray.push(styles.baseButton);

    // Tambahkan style untuk kondisi 'pressed' di iOS
    if (Platform.OS === 'ios' && pressed) {
      finalStylesArray.push({ opacity: pressedOpacity });
    }
    return finalStylesArray;
  };

  return (
    <Pressable
      onPress={onPress}
      style={pressableStyle}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole || 'button'}
      testID={testID}
      android_ripple={rippleConfig}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    flex: 1, // Pastikan tombol mengambil ruang yang sama.
    justifyContent: 'center', // Pusatkan children (icon & label blok) secara vertikal.
    alignItems: 'center', // Pusatkan children (icon & label blok) secara horizontal.
  },
});

export default CustomTabBarButton;
