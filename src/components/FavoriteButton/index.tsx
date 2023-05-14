import { BookmarkSimple } from "phosphor-react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";

interface FavoriteButtonProps {
  isNotFavoriteColor: "white" | "brand_background";
}

export function FavoriteButton({ isNotFavoriteColor }: FavoriteButtonProps) {
  const { colors } = useTheme();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
      <BookmarkSimple
        weight={isFavorite ? "fill" : "regular"}
        color={
          isFavorite ? colors.gradient.button[0] : colors[isNotFavoriteColor]
        }
        size={28}
      />
    </TouchableOpacity>
  );
}
