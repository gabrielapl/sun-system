import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient)`
  align-items: center;
  justify-content: center;

  padding: 12px;
  border-radius: 8px;

  min-width: 80px;

  margin-right: 18px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;

  margin-top: 12px;
`;
