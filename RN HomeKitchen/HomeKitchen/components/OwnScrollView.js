import { useHeaderHeight } from "@react-navigation/elements";
import React from "react";
import { FlatList, SafeAreaView } from "react-native";

function OwnScrollView(props) {
  const headerHeight = useHeaderHeight();
  const { data } = props;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        top: headerHeight,
        marginBottom: headerHeight,
      }}
    >
      <FlatList
        {...props}
        data={data || []}
        keyExtractor={(_e, i) => "dom" + i.toString()}
        ListEmptyComponent={null}
        renderItem={null}
        ListHeaderComponent={() => (
          <React.Fragment>{props.children}</React.Fragment>
        )}
      />
    </SafeAreaView>
  );
}

export default OwnScrollView;
