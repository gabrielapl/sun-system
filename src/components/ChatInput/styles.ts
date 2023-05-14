import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 64px;
`;
export const Input = styled.TextInput`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.brand_background};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;

  margin-right: 12px;
  padding: 0 18px;
`;
export const MessageSend = styled.TouchableOpacity`
  width: 64px;
  height: 64px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.gradient.pink[0]};
  align-items: center;
  justify-content: center;
`;
