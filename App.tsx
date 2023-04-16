/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    
  };

  return (
    <SafeAreaView style={[backgroundStyle,styles.container]}>
      <ScrollView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header text={'Hello World!'} textStyle={styles.textStyle} isTop={true} />
      <Content data={[{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ac massa semper consequat. Suspendisse tincidunt sit amet',textStyle:styles.contentStyle},{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ac massa semper consequat. Suspendisse tincidunt sit amet',textStyle:styles.contentStyle},{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ac massa semper consequat. Suspendisse tincidunt sit amet',textStyle:styles.contentStyle}]}  />
      <Header text={'Hello World!'} textStyle={styles.textStyle} isTop={false} />
      <Content data={[{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ac massa semper consequat. Suspendisse tincidunt sit amet',textStyle:styles.contentStyle},{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ac massa semper consequat. Suspendisse tincidunt sit amet',textStyle:styles.contentStyle},{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar ac massa semper consequat. Suspendisse tincidunt sit amet',textStyle:styles.contentStyle}]}  />
      <Footer/>

      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  textStyle:{
    fontWeight:'normal',
    fontSize:25,
    
  },
  contentStyle:{
    fontWeight:'normal',
    fontSize:25,
    color:'cyan',
  },
  container:{
    margin:20
  }

});

export default App;
