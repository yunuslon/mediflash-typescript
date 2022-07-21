import {View} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface GapProps {
  width?: number;
  height?: number;
}

const Gap: React.FC<GapProps> = ({width = 0, height = 0}) => {
  return <View style={{width: wp(width), height: hp(height)}} />;
};

export default Gap;
