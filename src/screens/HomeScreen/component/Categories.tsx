import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import COLORS from '../../../constants/colors';

const Categories = () => {
  const categoryIcons = [
    <Icon name="flight" size={25} color={COLORS.primary} />,
    <Icon name="beach-access" size={25} color={COLORS.primary} />,
    <Icon name="near-me" size={25} color={COLORS.primary} />,
    <Icon name="place" size={25} color={COLORS.primary} />,
  ];

  return (
    <View style={styles.container}>
      {categoryIcons.map((icon, index) => (
        <View key={index} style={styles.iconContainer}>
          {icon}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
});

export default Categories;
