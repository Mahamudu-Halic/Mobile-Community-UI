import { Text } from "react-native";
import { SafeArea } from "../../../components/safe-area.component";
import { Avatar, Button } from "react-native-paper";
import { useContext, useState } from "react";
import { AuthContext } from "../../../services/auth/auth.context";
import styled from "styled-components";
import { Heading } from "../../../components/heading.component";

export const ProfileScreen = () => {
  const { user } = useContext(AuthContext);
  const TopRow = styled.View`
    flex: 0.3;
    background: ${(props) => props.theme.colors.green.primary};
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10px;
  `;

  const TopRowButton = styled(Button).attrs({ textColor: "#fff" })``;

  const ProfileInfoContainer = styled.View`
    align-items: center;
  `;

  const BottomRow = styled.View`
    width: 100%;
    position: absolute;
    top: 20%;
    bottom: 0;
  `;

  const UserName = styled.Text`
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 3px;
  `;

  const PhotosContainer = styled.View`
    background: ${(props) => props.theme.colors.gray.primary};
    flex: 1;
    border-radius: 20px;
  `;

  const ProfileNavContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.gray.primary};
    border-radius: 20px;
    padding: 1px;
    margin: 0 auto 10px;
    border: solid 1px ${(props) => props.theme.colors.gray.tertiary};
  `;

  const NavButton = styled(Button)`
    width: 120px;
  `;

  const [showPhotos, setShowPhotos] = useState(false);

  return (
    <SafeArea>
      <TopRow>
        <TopRowButton>Settings</TopRowButton>
        <Heading>Profile</Heading>
        <TopRowButton>Logout</TopRowButton>
      </TopRow>
      <BottomRow>
        <ProfileInfoContainer>
          {/* <Avatar.Icon
            icon={"human"}
            size={180}
            backgroundColor="#fff"
            color="#2182bd"
          /> */}
          <Avatar.Image
            source={require("../../../../assets/profile.png")}
            size={180}
            backgroundColor="#fff"
          />
          <UserName>Mahamudu Halic</UserName>
          <Text>mahamuduhalic@gmail.com</Text>
          <Text>{user?.email}</Text>
        </ProfileInfoContainer>
        <ProfileNavContainer>
          <NavButton
            mode={"contained"}
            textColor={!showPhotos ? "#5DB075" : "#BDBDBD"}
            buttonColor={!showPhotos ? "#fff" : "transparent"}
            onPress={() => setShowPhotos(false)}
          >
            Posts
          </NavButton>
          <NavButton
            mode={"contained"}
            textColor={showPhotos ? "#5DB075" : "#BDBDBD"}
            buttonColor={showPhotos ? "#fff" : "transparent"}
            onPress={() => setShowPhotos(true)}
          >
            Photos
          </NavButton>
        </ProfileNavContainer>
        {showPhotos && <PhotosContainer></PhotosContainer>}
      </BottomRow>
    </SafeArea>
  );
};
