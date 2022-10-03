import React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../../constants/colors';
import {PlaceData} from '../../../constants/interface/interface';
const {width} = Dimensions.get('screen');

interface RecommendedCardProps {
  place: PlaceData;
}

const RecommendedCard: React.FC<RecommendedCardProps> = ({place}: any) => {
  return (
    <ImageBackground style={styles.container} source={place.image}>
      <Text style={styles.title}>{place.name}</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="place" size={22} color={COLORS.white} />
            <Text style={{color: COLORS.white, marginLeft: 5}}>
              {place.location}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={22} color={COLORS.white} />
            <Text style={{color: COLORS.white, marginLeft: 5}}>5.0</Text>
          </View>
        </View>
        <Text style={styles.textDetail}>{place.details}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
  },
  title: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textDetail: {
    color: COLORS.white,
    fontSize: 13,
  },
});

export default RecommendedCard;
