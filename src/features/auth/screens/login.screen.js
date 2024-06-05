import { SafeArea } from "../../../components/safe-area.component";
import { useState } from "react";
import {
  AuthButton,
  AuthContainer,
  AuthForgotPasswordButton,
  AuthFormContainer,
  AuthOptionButton,
  AuthOptionContainer,
  AuthOptionText,
  AuthTextInput,
  AuthTitle,
  AuthTitleContainer,
} from "../components/auth.component.style";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeArea>
      <AuthContainer>
        <AuthTitleContainer>
          <AuthTitle>Log In</AuthTitle>
        </AuthTitleContainer>
        <AuthFormContainer>
          <AuthTextInput
            label="Email"
            mode="outlined"
            left={
              <AuthTextInput.Icon
                icon="email"
                onPress={() => console.log("clicked")}
              />
            }
            keyboardType={"email-address"}
            textContentType="emailAddress"
            autoCapitalize="none"
            onChangeText={setEmail}
            value={email}
          />
          <AuthTextInput
            onChangeText={setPassword}
            label="Password"
            secureTextEntry={!showPassword}
            textContentType="password"
            autoCapitalize="none"
            mode="outlined"
            left={<AuthTextInput.Icon icon="key" color={"#959395"} />}
            right={
              <AuthTextInput.Icon
                icon={showPassword ? "eye-off" : "eye"}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
            value={password}
          />
          <AuthButton mode="contained" onPress={() => navigation.navigate("")}>
            Log In
          </AuthButton>

          <AuthForgotPasswordButton>Forgot Password?</AuthForgotPasswordButton>
          <AuthOptionContainer>
            <AuthOptionText>Don't have an account?</AuthOptionText>
            <AuthOptionButton onPress={() => navigation.navigate("Register")}>
              Register
            </AuthOptionButton>
          </AuthOptionContainer>
        </AuthFormContainer>
      </AuthContainer>
    </SafeArea>
  );
};
