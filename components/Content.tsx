import React from "react";
import { Text, View, TextStyle } from "react-native";

interface ContentProps {
  data: {
    text: string;
    textStyle: TextStyle;
  }[];
}

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <View>
      {data.map((item, index) => (
        <Text key={index} style={item.textStyle}>
          {item.text}
        </Text>
      ))}
    </View>
  );
};

export default Content;
