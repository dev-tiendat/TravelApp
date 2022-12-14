import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../constants/colors';
import {PlaceData} from '../../../constants/interface/interface';
import {HomeScreenProps} from '../../../navigation/Navigator';
const {width} = Dimensions.get('screen');

interface CardProps {
  place: PlaceData;
  navigation: (place: PlaceData) => void;
}

const Card: React.FC<CardProps> = ({place}, navigation) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={navigation(place)}>
      <ImageBackground style={styles.cardImage} source={place.image}>
        {/* <Text style={styles.title}>{place.name}</Text> */}
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="place" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>
              {place.location}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={20} color={COLORS.white} />
            <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  //   title: {
  //     color: COLORS.white,
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //     marginTop: 10,
  //   },
});

export default Card;
