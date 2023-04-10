import styled from "styled-components/native";

export const Container = styled.View`
  width: 140px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.brand_background};

  margin-right: 16px;
  overflow: hidden;
`;

export const Footer = styled.View`
  flex-direction: row;

  padding: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;

export const NavigationIcon = styled.TouchableOpacity``;
