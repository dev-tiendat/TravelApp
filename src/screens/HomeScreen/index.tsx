import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {HomeScreenProps} from '../../navigation/Navigator';
import COLORS from '../../constants/colors';
import places from '../../constants/places';
import {Place, PlaceData} from '../../constants/interface/interface';
import Categories from './component/Categories';
import Card from './component/Card';
import RecommendedCard from './component/RecommendedCard';

const {width} = Dimensions.get('screen');

const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent={false} backgroundColor={COLORS.primary} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={COLORS.white} />
        <Icon name="notifications-none" size={28} color={COLORS.white} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: COLORS.primary,
            height: 120,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1}}>
            <Text style={style.headerTitle}>Explore the</Text>
            <Text style={style.headerTitle}>beautiful places</Text>
            <View style={style.inputContainer}>
              <Icon name="search" size={28} />
              <TextInput
                placeholder="Search place"
                style={{color: COLORS.grey}}
              />
            </View>
          </View>
        </View>
        <Categories />
        <Text style={style.sectionTitle}>Places</Text>
        <View>
          <FlatList
            contentContainerStyle={{paddingLeft: 20}}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={places}
            renderItem={({item}) => (
              <Card
                place={item}
                navigation={function (place) {
                  navigation.navigate('Details', place);
                }}
              />
            )}
          />
          <Text style={style.sectionTitle}>Recommended</Text>
          <FlatList
            snapToInterval={width - 20}
            contentContainerStyle={{paddingLeft: 20, paddingBottom: 20}}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={places}
            renderItem={({item}) => <RecommendedCard place={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.primary,
  },
  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
});
export default HomeScreen;
