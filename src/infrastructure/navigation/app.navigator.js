import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MarketScreen } from "../../features/Market/screens/market.screen";
import { InsightScreen } from "../../features/Insights/screens/insight.screen";
import { InboxScreen } from "../../features/Inbox/screens/inbox.screen";
import { ProfileScreen } from "../../features/Profile/screens/profile.screen";
import { FeedScreen } from "../../features/Feed/screens/feed.screen";
import { MarketContextProvider } from "../../services/market/market.context";

const AppNavigator = () => {
  const Tap = createBottomTabNavigator();
  return (
    <MarketContextProvider>
      <NavigationContainer>
        <Tap.Navigator
          screenOptions={{
            tabBarActiveTintColor: "tomato",
            headerShown: false,
          }}
        >
          <Tap.Screen
            name="Market"
            component={MarketScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tap.Screen
            name="Insights"
            component={InsightScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="bulb" size={size} color={color} />
              ),
            }}
          />
          <Tap.Screen
            name="Inbox"
            component={InboxScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="file-tray" size={size} color={color} />
              ),
            }}
          />
          <Tap.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="book" size={size} color={color} />
              ),
            }}
          />
          <Tap.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </Tap.Navigator>
      </NavigationContainer>
    </MarketContextProvider>
  );
};

export default AppNavigator;
