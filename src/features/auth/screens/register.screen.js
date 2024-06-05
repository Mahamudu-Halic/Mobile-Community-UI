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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeArea>
      <AuthContainer>
        <AuthTitleContainer>
          <AuthTitle>Sign Up</AuthTitle>
        </AuthTitleContainer>
        <AuthFormContainer>
          <AuthTextInput
            label="Name"
            mode="outlined"
            left={<AuthTextInput.Icon icon="account" />}
            onChangeText={setName}
            value={name}
          />
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
            Sign Up
          </AuthButton>

          <AuthOptionContainer>
            <AuthOptionText>Already have an account?</AuthOptionText>
            <AuthOptionButton onPress={() => navigation.navigate("Login")}>
              Log In
            </AuthOptionButton>
          </AuthOptionContainer>
        </AuthFormContainer>
      </AuthContainer>
    </SafeArea>
  );
};
