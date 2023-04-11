import { MagnifyingGlass } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;

  background-color: ${({ theme }) => theme.colors.brand_background};
  border-radius: 8px;

  margin-top: 56px;

  margin-bottom: 48px;
`;

export const TextInput = styled.TextInput`
  flex: 1;

  color: ${({ theme }) => theme.colors.white};
  padding: 16px 20px;
  padding-left: 52px;
`;

export const Icon = styled(MagnifyingGlass)`
  position: absolute;

  z-index: 2;
  left: 20px;
`;
