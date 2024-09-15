import { Tabs } from "expo-router";

import AntDesign from '@expo/vector-icons/AntDesign';
import { theme } from "../theme";

export default function Layout(){

    return (
        <Tabs screenOptions={{tabBarActiveTintColor: theme.colors.primary}}>
            <Tabs.Screen name="index" options={{ 
                title: "Search",
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" size={size} color={color} />
                  ),
                }}/>
            <Tabs.Screen name="addClothes" options={{ 
                title: "Add Clothes",
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="home" size={size} color={color} />
                  ),
                }}/>
        </Tabs>
    )
}
