import styled from "styled-components/native";

export const Container = styled.View`
  padding-bottom: 140apx;
`;

export const Header = styled.View``;

export const Title = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-top: 32px;
`;

export const MessageList = styled.FlatList`
  margin-top: 18px;
`;
