// instalation
// install chocolatey
// node jdk
// android studio

// npx @react-native-community/cli init MyApp
// npm install -g react-native-cli
// to run the project
// npm start
// npm run android
// npm run ios
// npm run windows
// npm run macos
// npm run linux

// npx react-native start
// npx react-native run-android
// npx react-native run-ios
// npx react-native run-windows
// npx react-native run-macos
// npx react-native run-linux

// npx react-native init MyApp
// npm install -g react-native-cli
// to run the project
// npm start
// npm run android
// npm run ios
// npm run windows
// npm run macos
// npm run linux
// npm run web
// npm run native
// npm run all
// npm run clean
// npm run build
// npm run test
// npm run lint
// npm run format





// list of the react native components with example

<>
  <Text>Hello World</Text>
  <View>Hello World</View>
  <Image>Hello World</Image>
  <SafeAreaView>Hello World</SafeAreaView>
  <Image
    src={require("assets/images/logo.png")}
    alt="logo"
    style={{ width: 100, height: 100 }}
    resizeMode="contain"
    onError={() => {
      console.log("Error loading image");
    }}
    onLoad={() => {
      console.log("Image loaded");
    }}
    onLoadEnd={() => {
      console.log("Image loaded end");
    }}
    onLoadStart={() => {
      console.log("Image loaded start");
    }}
    onLoadProgress={() => {
      console.log("Image loaded progress");
    }}
  />

  // SafeAreaView is a component that provides a safe area for the content to be displayed
  <SafeAreaView style={{ flex: 1 }} >Hello World</SafeAreaView>

  // FlatList is a component that displays a list of items
  <FlatList>Hello World</FlatList>

  // SectionList is a component that displays a list of items in sections
  <SectionList>Hello World</SectionList>

  // TextInput is a component that allows the user to enter text
  <TextInput
    value="Hello World"
    placeholder="Enter your name"
    onChangeText={(text) => {
      console.log("Text changed", text);
    }}
    secureTextEntry={true}
    keyboardType="email-address"
    autoCapitalize="none"
    autoComplete="off"
    autoCorrect={false}
    autoFocus={true}
    returnKeyType="done"
    returnKeyLabel="done"
  />

  // ScrollView is a component that allows the user to scroll the content
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ flexDirection: "row" }}
    vertical={true}
    showsVerticalScrollIndicator={false}
    style={{ flex: 1 }}
    onScroll={() => {
      console.log("Scroll");
    }}
    onScrollEndDrag={() => {
      console.log("Scroll end drag");
    }}
    onScrollBeginDrag={() => {
      console.log("Scroll begin drag");
    }}
    onMomentumScrollEnd={() => {
      console.log("Momentum scroll end");
    }}
    onMomentumScrollBegin={() => {
      console.log("Momentum scroll begin");
    }}
  >
    <TextInput placeholder="Enter your name" />
    <TextInput placeholder="Enter your name" />
    <FlatList
      data={[
        { id: 1, name: "John" },
        { id: 2, name: "Jane" },
        { id: 3, name: "Jim" },
        { id: 4, name: "Jill" },
      ]}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  </ScrollView>

  // Pressable is a component that allows the user to press the content
  <Pressable
    onPress={() => {
      console.log("Button pressed");
    }}
    onLongPress={() => {
      console.log("Button long pressed");
    }}
    onPressIn={() => {
      console.log("Button pressed in");
    }}
    onPressOut={() => {
      console.log("Button pressed out");
    }}
    onPressUp={() => {
      console.log("Button pressed up");
    }}
    onPressDown={() => {
      console.log("Button pressed down");
    }}
    onPressMove={() => {
      console.log("Button pressed move");
    }}
    onPressCancel={() => {
      console.log("Button pressed cancel");
    }}
    onPressRelease={() => {
      console.log("Button pressed release");
    }}
    disabled={true}
    hitSlop={10}
    activeOpacity={0.5}
    style={{ backgroundColor: "red", padding: 10, borderRadius: 10 }}
  >
    <Text>Hello World</Text>
  </Pressable>

  // Switch is a component that allows the user to toggle the content
  <Switch
    value={true}
    onValueChange={(value) => {
      console.log("Switch value changed", value);
    }}
  />

  // TouchableNativeFeedback is a component that allows the user to press the content
  <TouchableNativeFeedback
    onPress={() => {
      console.log("Button pressed");
    }}
  >
    Hello World
  </TouchableNativeFeedback>

  // TouchableWithoutFeedback is a component that allows the user to press the content
  <TouchableWithoutFeedback
    onPress={() => {
      console.log("Button pressed");
    }}
  >
    Hello World
  </TouchableWithoutFeedback>

  // TouchableOpacity is a component that allows the user to press the content
  <TouchableOpacity>Hello World</TouchableOpacity>
  <TouchableHighlight>Hello World</TouchableHighlight>/
  <TouchableNativeFeedback>Hello World</TouchableNativeFeedback>
  <TouchableWithoutFeedback>Hello World</TouchableWithoutFeedback>
  <TouchableOpacity>Hello World</TouchableOpacity>
  <TouchableHighlight>Hello World</TouchableHighlight>/
</>;

// components

// event handling

// state management

// navigation

// api integration

// styling

// animation

// performance optimization

// debugging

// testing

// deployment

// documentation


// icon fontawesome





// setup for the react native project

// react-native.config.js



// folder structure
// src
// components
// components/Button.js
// components/Button.style.js
// screens
// utils
// assets
// styles
// types
// hooks
// services
// navigation
// api
