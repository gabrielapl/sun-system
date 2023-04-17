import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.brand_background};

  padding: 116px 0;
`;

export const Content = styled.SafeAreaView`
  flex: 1;

  align-items: center;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  align-items: center;
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  opacity: 0.65;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  margin-bottom: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.bold};

  text-align: center;
`;

export const ButtonWrapper = styled.View`
  align-items: center;
`;

export const ButtonHeading = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
  font-size: 14px;
`;

export const LoginButton = styled.TouchableOpacity``;

export const LoginButtonBackground = styled(LinearGradient)`
  flex-direction: row;

  border-radius: 8px;
  padding: 16px 32px;
  gap: 16px;

  align-items: center;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
