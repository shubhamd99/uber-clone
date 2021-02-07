#### Uber UI with React Native

* Run Project:

1. Android - yarn android
2. IOS - yarn ios

* Shapes in React Native - https://codedaily.io/tutorials/22/The-Shapes-of-React-Native

* Install `react-native-vector-icons`:

1. yarn add react-native-vector-icons
2. IOS - Add UIAppFonts in Info.plist file and then do `npx pod install` in ios/ directory
3. Android - Add this `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` in android/app/build.gradle

* Get Current Position - https://www.npmjs.com/package/@react-native-community/geolocation
1. yarn add @react-native-community/geolocation
2. IOS - Add NSLocationAlwaysAndWhenInUseUsageDescription in info.plist
3. Android - Add android.permission.ACCESS_FINE_LOCATION in AndroidManifest.xml
4. cd ios && pod install
