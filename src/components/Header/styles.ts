import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: space-between;
`;

export const Hi = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 32px;
`;

export const Name = styled.Text`
  margin-left: 8px;

  color: ${({ theme }) => theme.colors.gradient.pink[1]};
`;

export const ContentWrapper = styled.View``;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`;
