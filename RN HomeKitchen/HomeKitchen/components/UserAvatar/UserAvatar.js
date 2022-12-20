import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import PropTypes from "prop-types";

import {
  getUserInitial,
  getRandomColor,
  getContainerStyle,
  getTextStyle,
} from "./utils";
import ImageLoader from "./ImageLoader";

import constants from "./constants";

const propTypes = {
  initialName: PropTypes.string,
  userName: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.objectOf({ uri: PropTypes.string }),
    PropTypes.number,
  ]),
  size: PropTypes.number,
  backgroundColor: PropTypes.string,
  loaderColor: PropTypes.string,
  textColor: PropTypes.string,
  activeCircleColor: PropTypes.string,
  fontSize: PropTypes.number,
  rounded: PropTypes.bool,
  backgroundColors: PropTypes.arrayOf(PropTypes.string),
  active: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  borderRadius: PropTypes.number,
};

const defaultProps = {
  initialName: null,
  userName: null,
  src: null,
  size: constants.SIZE,
  backgroundColors: constants.BACKGROUND_COLORS,
  loaderColor: constants.LOADER_COLOR,
  textColor: constants.TEXT_COLOR,
  activeCircleColor: constants.ACTIVE_CIRCLE_COLOR,
  fontSize: constants.FONT_SIZE,
  rounded: false,
  active: false,
  style: {},
  borderRadius: 0,
};

const UserAvatar = ({
  initialName,
  userName,
  src,
  size,
  backgroundColor,
  loaderColor,
  textColor,
  fontSize,
  rounded,
  backgroundColors,
  activeCircleColor,
  active,
  style,
  borderRadius,
}) => {
  const [imageLoading, onLoadImage] = useState(false);
  const userInitialName = initialName || getUserInitial({ userName });
  const avatarBackgroundColor =
    backgroundColor || getRandomColor({ userName, backgroundColors });

  const containerStyle = getContainerStyle({ size, rounded, borderRadius });
  const textStyle = getTextStyle({ textColor, size, fontSize });

  return (
    <View style={[style, { width: size, height: size }]}>
      {src ? (
        <View>
          <Image
            style={containerStyle}
            source={src}
            onLoadStart={() => onLoadImage(true)}
            onLoadEnd={() => onLoadImage(false)}
          />
          {imageLoading && (
            <ImageLoader
              size={size}
              loaderColor={loaderColor}
              containerStyle={containerStyle}
            />
          )}
        </View>
      ) : (
        <View
          style={[
            containerStyle,
            {
              backgroundColor: avatarBackgroundColor,
            },
          ]}
        >
          <Text style={textStyle}>{userInitialName}</Text>
        </View>
      )}
      {active && !imageLoading && (
        <View
          style={[
            {
              backgroundColor: activeCircleColor,
              position: "absolute",
              alignSelf: "flex-end",
              borderColor: "white",
              borderWidth: 2,
            },
            {
              width: size / 4,
              height: size / 4,
              borderRadius: size / 4,
              bottom: rounded ? size / 32 : -(size / 32),
              right: rounded ? size / 32 : -(size / 32),
            },
          ]}
        />
      )}
    </View>
  );
};
UserAvatar.propTypes = propTypes;
UserAvatar.defaultProps = defaultProps;
export default UserAvatar;
