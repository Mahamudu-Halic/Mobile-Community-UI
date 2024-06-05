import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";

export const AuthContainer = styled.View`
  flex: 1;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const AuthTitleContainer = styled.View`
  align-items: center;
`;

export const AuthTitle = styled.Text`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const AuthFormContainer = styled.View`
  padding: 20px;
  gap: 10px;
`;

export const AuthTextInput = styled(TextInput)`
  background: ${(props) => props.theme.colors.gray.primary};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.green.primary,
})`
  padding: 5px;
  font-size: 18px;
`;

export const AuthForgotPasswordButton = styled(Button).attrs({
  textColor: colors.green.primary,
})``;

export const AuthOptionButton = styled(Button).attrs({
  color: colors.green.primary,
})``;

export const AuthOptionText = styled.Text``;

export const AuthOptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
