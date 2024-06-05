import { Text, View } from "react-native";
import styled from "styled-components";

export const MarketItem = ({ item }) => {
  const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
  `;

  const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 120px;
  `;

  const MarketItemContainer = styled.View`
    margin: 10px;
  `;
  return (
    <MarketItemContainer>
      <Item>
        <CompactImage
          source={{
            uri: item.photo,
          }}
        />
      </Item>
      <Text>chocoloate</Text>
      <Text>$5.00</Text>
    </MarketItemContainer>
  );
};
