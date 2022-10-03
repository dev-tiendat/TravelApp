import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import OnBoardScreen from '../screens/OnBoardScreen';
import HomeScreen from '../screens/HomeScreen/';
import DetailsScreen from '../screens/DetailsScreen';
import {PlaceData} from '../constants/interface/interface';

type RootStackParamList = {
  OnBoard: undefined;
  Home: undefined;
  Details: PlaceData;
};

type OnBoardScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'OnBoard',
  'Home'
>;
type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'Details'
>;
type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoard" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type {OnBoardScreenProps, HomeScreenProps, DetailsScreenProps};
export default Navigator;
