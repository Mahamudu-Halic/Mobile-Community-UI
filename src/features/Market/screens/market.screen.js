import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeArea } from "../../../components/safe-area.component";
import { useContext } from "react";
import { MarketContext } from "../../../services/market/market.context";
import { Avatar } from "react-native-paper";
import styled from "styled-components";
import { MarketItem } from "../components/market-item.component";
const MarketContainer = styled.View`
  flex: 1;
  padding: 0 10px;
`;

const MarketTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const MarketVideoContainer = styled.View`
  flex: 0.4;
  background: ${(props) => props.theme.colors.green.primary};
`;

export const MarketScreen = () => {
  const { market } = useContext(MarketContext);
  return (
    <SafeArea>
      <MarketVideoContainer>
        {/* <VideoPlayer
          video={{
            uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{ uri: "https://i.picsum.photos/id/866/1600/900.jpg" }}
        /> */}
      </MarketVideoContainer>
      <MarketContainer>
        <View>
          <MarketTitle>Hot Deals</MarketTitle>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {market.map((item) => item?.hot && <MarketItem item={item} />)}
          </ScrollView>
        </View>
        <View>
          <MarketTitle>Trending</MarketTitle>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {market.map((item) => item?.trending && <MarketItem item={item} />)}
          </ScrollView>
        </View>
      </MarketContainer>
    </SafeArea>
  );
};
