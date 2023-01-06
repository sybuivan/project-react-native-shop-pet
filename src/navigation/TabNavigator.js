// import React from 'react';
// import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
// import {TabView, SceneMap} from 'react-native-tab-view';

// const FirstRoute = () => (
//   <View style={[styles.scene, {backgroundColor: '#ff4081'}]} />
// );
// const SecondRoute = () => (
//   <View style={[styles.scene, {backgroundColor: '#673ab7'}]} />
// );

// export default TabNavigator = () => {
//   const [state, setState] = React.useState({
//     index: 0,
//     routes: [
//       {key: 'first', title: 'First'},
//       {key: 'second', title: 'Second'},
//     ],
//   });

//   return (
//     <TabView
//       navigationState={state}
//       renderScene={SceneMap({
//         first: FirstRoute,
//         second: SecondRoute,
//       })}
//       onIndexChange={index => setState({index})}
//       initialLayout={{width: Dimensions.get('window').width}}
//       style={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: StatusBar.currentHeight,
//   },
//   scene: {
//     flex: 1,
//   },
// });
