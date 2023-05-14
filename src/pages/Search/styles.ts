import styled from "styled-components/native";

export const Container = styled.View``;

export const Header = styled.View``;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-top: 32px;
`;

export const Content = styled.ScrollView``;

export const MayAlsoLikeText = styled.Text`
  font-weight: 400;
  font-size: 16px;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-top: 40px;
  margin-bottom: 16px;
`;
