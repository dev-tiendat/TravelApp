import {ImageSourcePropType} from 'react-native';

export interface Place {
  image: any;
  name: string;
  location: string;
  details: string;
}

export interface PlaceData extends Place {
    id: string
}
