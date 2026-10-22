import React from "react";
import { Image, ImageProps, StyleSheet } from "react-native";

interface RoundedImageProps extends ImageProps {
  size?: number;
  radius?: number;
}

export default function RoundedImage({
  size = 280,
  radius = 20,
  style,
  ...props
}: RoundedImageProps) {
  return (
    <Image
      {...props}
      style={[
        {
          width: size,
          height: size,
          borderRadius: radius,
          overflow: "hidden",
        },
        style,
      ]}
    />
  );
}
