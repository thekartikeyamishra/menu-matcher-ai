import React from 'react';
import LottieView from 'lottie-react-native';

const LoadingAnimation = () => {
  return <LottieView source={require('../../assets/loading.json')} autoPlay loop style={{ height: 150 }} />;
};

export default LoadingAnimation;
