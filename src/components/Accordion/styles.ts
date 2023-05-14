import styled from "styled-components/native";

export const Container = styled.View``;

export const AccordingButton = styled.TouchableOpacity`
  flex-direction: row;

  margin-bottom: 16px;

  align-items: center;
`;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

  color: ${({ theme }) => theme.colors.brand_background};
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-left: 16px;
`;
