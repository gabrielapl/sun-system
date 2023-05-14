import styled from "styled-components/native";

interface ContainerProps {
  isMarginBottom: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.brand_background};

  border-radius: 8px;
  overflow: hidden;
  justify-content: space-between;

  margin-bottom: ${({ isMarginBottom }) => (isMarginBottom ? "24px" : 0)};
`;

export const Content = styled.View`
  padding: 24px 0;
  padding-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 32px;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const MiniAbout = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  opacity: 0.6;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 20px;
  max-width: 172px;
`;

export const KeepReadingContainer = styled.View`
  align-items: center;

  flex-direction: row;
`;

export const KeepReadingText = styled.Text`
  font-weight: 400;
  font-size: 14px;

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-right: 8px;
`;
