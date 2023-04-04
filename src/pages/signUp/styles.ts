import styled from "styled-components/native";

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const Heading = styled.Text`
  font-size: 16px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.white};
`;



export const SubHeading = styled.Text`
  font-size: 14px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonWrapper = styled.View`
  width: 100%;
  padding: 0 104px;
`;

export const LoginButton = styled.TouchableOpacity`
  width: 100%;
  height: 58px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
`;

export const LoginButtonText = styled.TouchableOpacity`
   font-size: 16px;
  font-weight: 700;
`;
