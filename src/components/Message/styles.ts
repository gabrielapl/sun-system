import styled from "styled-components/native";

interface ContainerProps {
  isOwner: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: ${({ isOwner }) => (isOwner ? "row-reverse" : "row")};
  align-items: center;
  margin-bottom: 24px;
`;

export const Avatar = styled.View<ContainerProps>`
  width: 48px;
  height: 48px;

  background-color: ${({ theme }) => theme.colors.gradient.blue[0]};
  border-radius: 999px;

  margin-right: ${({ isOwner }) => (isOwner ? "0" : "12px")};
  margin-left: ${({ isOwner }) => (isOwner ? "12px" : "0")};
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const MessageContainer = styled.View`
  padding: 12px 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.brand_background};
`;

export const MessageText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;
