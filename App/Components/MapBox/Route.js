// @flow
import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

const Route = ({ route, lineColor }) => {
  const layerStyles = {
    route: {
      lineColor,
      lineWidth: 6,
      lineOpacity: 0.5,
    },
  };

  return (
    <MapboxGL.ShapeSource id="routeSource" shape={route}>
      <MapboxGL.LineLayer
        id="routeFill"
        style={layerStyles.route}
      />
    </MapboxGL.ShapeSource>
  );
};

export default Route;
