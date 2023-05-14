import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.ImageBackground`
  height: 280px;
  width: 100%;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  background-color: #000;
  padding: 34px 20px;
`;

export const IconWrapper = styled.View`
  flex: 1;
  align-items: center;
  bottom: 8px;
`;

export const Content = styled.ScrollView`
  flex: 1;
  margin-top: 72px;
  margin-bottom: 24px;
  padding: 0 20px;
`;

export const Heading = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 32px;

  color: ${({ theme }) => theme.colors.brand_background};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const SocialWrapper = styled.View``;

export const About = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  opacity: 0.75;

  color: ${({ theme }) => theme.colors.brand_background};
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 40px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.brand_background};
  opacity: 0.1;

  margin: 20px 0;
`;
