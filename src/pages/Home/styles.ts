import styled from "styled-components/native";

export const Container = styled.ScrollView``;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: 24px;
`;

export const ScrollWrapper = styled.ScrollView`
  width: 100%;
  margin-bottom: 48px;
`;
