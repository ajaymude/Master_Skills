/* ═══════════════════════════════════════════════════════════════════════════
   🧭 REACT NAVIGATION - COMPLETE GUIDE
   Navigation in React Native Applications
   ═══════════════════════════════════════════════════════════════════════════ */


/* ═══════════════════════════════════════════════════════════════════════════
   📦 INSTALLATION
   ═══════════════════════════════════════════════════════════════════════════ */

// Step 1: Install core package
// npm install @react-navigation/native

// Step 2: Install dependencies (Expo)
// npx expo install react-native-screens react-native-safe-area-context

// Step 2: Install dependencies (React Native CLI)
// npm install react-native-screens react-native-safe-area-context
// cd ios && pod install

// Step 3: Install navigator types (as needed)
// npm install @react-navigation/native-stack      // Native Stack Navigator
// npm install @react-navigation/stack             // JS Stack Navigator
// npm install @react-navigation/bottom-tabs       // Bottom Tabs
// npm install @react-navigation/drawer            // Drawer Navigator
// npm install @react-navigation/material-top-tabs // Top Tabs
// npm install react-native-gesture-handler


/* ═══════════════════════════════════════════════════════════════════════════
   🔧 BASIC SETUP
   ═══════════════════════════════════════════════════════════════════════════ */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create Stack Navigator
const Stack = createNativeStackNavigator();

// App Component with Navigation
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   📱 1. STACK NAVIGATOR (Most Common)
   ═══════════════════════════════════════════════════════════════════════════ */

// Stack Navigator - screens stack on top of each other
// Use for: screen-to-screen navigation, detail pages, forms

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function StackNavigatorExample() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: '#6200ee' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Welcome' }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{ title: 'Item Details' }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }} // Hide header
            />
        </Stack.Navigator>
    );
}

// Screen Component with Navigation
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>

            {/* Navigate to another screen */}
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />

            {/* Navigate with parameters */}
            <Button
                title="Go to Details with Params"
                onPress={() => navigation.navigate('Details', {
                    itemId: 42,
                    itemName: 'My Item'
                })}
            />

            {/* Push creates new instance (can go to same screen multiple times) */}
            <Button
                title="Push Details"
                onPress={() => navigation.push('Details', { itemId: 100 })}
            />
        </View>
    );
}

// Receiving Parameters
function DetailsScreen({ route, navigation }) {
    // Get parameters
    const { itemId, itemName } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Item ID: {itemId}</Text>
            <Text>Item Name: {itemName}</Text>

            {/* Go back to previous screen */}
            <Button title="Go Back" onPress={() => navigation.goBack()} />

            {/* Go to first screen in stack */}
            <Button title="Go to Home" onPress={() => navigation.popToTop()} />

            {/* Update current screen params */}
            <Button
                title="Update Params"
                onPress={() => navigation.setParams({ itemName: 'Updated Name' })}
            />
        </View>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   🔧 STACK NAVIGATOR OPTIONS
   ═══════════════════════════════════════════════════════════════════════════ */

<Stack.Screen
  name="Details"
  component={DetailsScreen}
  options={{
    // Header customization
    title: 'Custom Title',
    headerShown: true,
    headerStyle: { backgroundColor: '#f4511e' },
    headerTintColor: '#fff',
    headerTitleStyle: { fontWeight: 'bold' },
    headerTitleAlign: 'center',
    
    // Header components
    headerLeft: () => <CustomBackButton />,
    headerRight: () => <SettingsIcon />,
    headerTitle: () => <LogoTitle />,
    
    // Animation
    animation: 'slide_from_right', // slide_from_left, fade, none
    presentation: 'card', // modal, transparentModal, containedModal
    
    // Gestures
    gestureEnabled: true,
    gestureDirection: 'horizontal',
  }}
/>

// Dynamic options based on route params
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={({ route }) => ({ 
    title: route.params?.name || 'Profile' 
  })}
/>


/* ═══════════════════════════════════════════════════════════════════════════
   📑 2. BOTTOM TAB NAVIGATOR
   ═══════════════════════════════════════════════════════════════════════════ */

// Bottom tabs - persistent tabs at bottom of screen
// Use for: main app sections, primary navigation

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // or react-native-vector-icons

const Tab = createBottomTabNavigator();

function BottomTabNavigatorExample() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                // Tab icons
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                // Tab bar styling
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    height: 60,
                    paddingBottom: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                // Header
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarBadge: 3, // Show badge with number
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{ tabBarLabel: 'Search' }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ tabBarLabel: 'Profile' }}
            />
        </Tab.Navigator>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   📂 3. DRAWER NAVIGATOR
   ═══════════════════════════════════════════════════════════════════════════ */

// Drawer - side menu that slides in
// Use for: secondary navigation, settings, account options

// Additional dependency needed:
// npm install react-native-gesture-handler react-native-reanimated

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigatorExample() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#fff',
                    width: 280,
                },
                drawerActiveBackgroundColor: '#e6e6ff',
                drawerActiveTintColor: '#6200ee',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    fontSize: 16,
                    marginLeft: -10,
                },
            }}
        >
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    drawerLabel: 'Home',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    drawerLabel: 'Settings',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

// Open/close drawer programmatically
function HomeScreen({ navigation }) {
    return (
        <View>
            <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

// Custom Drawer Content
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            {/* User Profile Section */}
            <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <Image source={{ uri: 'avatar.png' }} style={{ width: 60, height: 60, borderRadius: 30 }} />
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}>John Doe</Text>
                <Text>john@example.com</Text>
            </View>

            {/* Default drawer items */}
            <DrawerItemList {...props} />

            {/* Custom drawer item */}
            <DrawerItem
                label="Logout"
                onPress={() => alert('Logging out...')}
                icon={({ color, size }) => <Ionicons name="log-out-outline" size={size} color={color} />}
            />
        </DrawerContentScrollView>
    );
}

// Use custom drawer
<Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
    {/* screens */}
</Drawer.Navigator>


/* ═══════════════════════════════════════════════════════════════════════════
   📑 4. TOP TAB NAVIGATOR (Material Top Tabs)
   ═══════════════════════════════════════════════════════════════════════════ */

// Top tabs - swipeable tabs at top
// Use for: category switching, swipeable pages

// npm install @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigatorExample() {
    return (
        <TopTab.Navigator
            initialRouteName="All"
            screenOptions={{
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: 'gray',
                tabBarIndicatorStyle: {
                    backgroundColor: '#6200ee',
                    height: 3,
                },
                tabBarStyle: {
                    backgroundColor: '#fff',
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold',
                    textTransform: 'none',
                },
                tabBarScrollEnabled: true, // For many tabs
                swipeEnabled: true,
            }}
        >
            <TopTab.Screen name="All" component={AllScreen} />
            <TopTab.Screen name="Photos" component={PhotosScreen} />
            <TopTab.Screen name="Videos" component={VideosScreen} />
            <TopTab.Screen name="Music" component={MusicScreen} />
        </TopTab.Navigator>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   🔀 5. NESTING NAVIGATORS
   ═══════════════════════════════════════════════════════════════════════════ */

// Common pattern: Tab Navigator with Stack inside each tab

const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Stack for Home Tab
function HomeStackScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="HomeMain" component={HomeScreen} options={{ headerShown: false }} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
            <HomeStack.Screen name="ItemView" component={ItemView} />
        </HomeStack.Navigator>
    );
}

// Stack for Profile Tab
function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} options={{ headerShown: false }} />
            <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
            <ProfileStack.Screen name="Settings" component={SettingsScreen} />
        </ProfileStack.Navigator>
    );
}

// Main App with Tabs containing Stacks
function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Profile" component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

// Navigate between nested navigators
function HomeScreen({ navigation }) {
    return (
        <View>
            {/* Navigate within same stack */}
            <Button title="Details" onPress={() => navigation.navigate('Details')} />

            {/* Navigate to screen in another tab's stack */}
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('Profile', {
                    screen: 'Settings'
                })}
            />

            {/* With initial params */}
            <Button
                title="Edit Profile"
                onPress={() => navigation.navigate('Profile', {
                    screen: 'EditProfile',
                    params: { userId: 123 }
                })}
            />
        </View>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   🔐 6. AUTHENTICATION FLOW
   ═══════════════════════════════════════════════════════════════════════════ */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from './AuthContext'; // Your auth context

const Stack = createNativeStackNavigator();

function App() {
    const { isLoggedIn, isLoading } = useAuth();

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isLoggedIn ? (
                    // User is signed in - show main app
                    <>
                        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
                        <Stack.Screen name="Modal" component={ModalScreen} options={{ presentation: 'modal' }} />
                    </>
                ) : (
                    // User is NOT signed in - show auth screens
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Register" component={RegisterScreen} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   🔗 7. DEEP LINKING
   ═══════════════════════════════════════════════════════════════════════════ */

// Configure deep linking for app://product/123 or https://myapp.com/product/123

const linking = {
    prefixes: ['myapp://', 'https://myapp.com'],
    config: {
        screens: {
            Home: 'home',
            Profile: 'user/:id',
            Product: {
                path: 'product/:productId',
                parse: {
                    productId: (productId) => parseInt(productId),
                },
            },
            Settings: 'settings',
            NotFound: '*', // Wildcard for 404
        },
    },
};

function App() {
    return (
        <NavigationContainer linking={linking} fallback={<Loading />}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Product" component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   🪝 8. NAVIGATION HOOKS
   ═══════════════════════════════════════════════════════════════════════════ */

import {
    useNavigation,
    useRoute,
    useFocusEffect,
    useIsFocused,
    useNavigationState
} from '@react-navigation/native';

function MyComponent() {
    // Get navigation object (when not passed as prop)
    const navigation = useNavigation();

    // Get route object (when not passed as prop)
    const route = useRoute();

    // Check if screen is focused
    const isFocused = useIsFocused();

    // Get navigation state
    const state = useNavigationState((state) => state);
    const currentRouteName = useNavigationState(
        (state) => state.routes[state.index].name
    );

    // Focus effect - runs when screen comes into focus
    useFocusEffect(
        React.useCallback(() => {
            console.log('Screen focused');
            // Fetch data, start listeners, etc.

            return () => {
                console.log('Screen unfocused');
                // Cleanup - stop listeners, etc.
            };
        }, [])
    );

    return (
        <View>
            <Text>Route name: {route.name}</Text>
            <Text>Is focused: {isFocused ? 'Yes' : 'No'}</Text>
            <Button title="Navigate" onPress={() => navigation.navigate('Screen')} />
        </View>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   🎨 9. CUSTOM TRANSITIONS & ANIMATIONS
   ═══════════════════════════════════════════════════════════════════════════ */

import { TransitionPresets } from '@react-navigation/stack';

// Using @react-navigation/stack for custom transitions
const Stack = createStackNavigator();

function AnimatedStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                // Preset animations
                ...TransitionPresets.SlideFromRightIOS,
                // or: ModalSlideFromBottomIOS, ModalPresentationIOS, FadeFromBottomAndroid
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
                name="Modal"
                component={ModalScreen}
                options={{
                    ...TransitionPresets.ModalPresentationIOS,
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    );
}

// For native-stack (simpler options)
<Stack.Navigator>
    <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
            animation: 'slide_from_right', // slide_from_left, fade, none, flip
            presentation: 'card', // modal, transparentModal, containedModal, fullScreenModal
        }}
    />
</Stack.Navigator>


/* ═══════════════════════════════════════════════════════════════════════════
   📋 10. NAVIGATION EVENTS
   ═══════════════════════════════════════════════════════════════════════════ */

function ProfileScreen({ navigation }) {
    React.useEffect(() => {
        // Subscribe to focus event
        const unsubscribeFocus = navigation.addListener('focus', () => {
            console.log('Screen is focused');
            // Refresh data
        });

        // Subscribe to blur event
        const unsubscribeBlur = navigation.addListener('blur', () => {
            console.log('Screen is unfocused');
        });

        // Subscribe to before remove (prevent going back)
        const unsubscribeBeforeRemove = navigation.addListener('beforeRemove', (e) => {
            // Prevent default back behavior
            e.preventDefault();

            // Show confirmation
            Alert.alert(
                'Discard changes?',
                'You have unsaved changes.',
                [
                    { text: "Don't leave", style: 'cancel', onPress: () => { } },
                    { text: 'Discard', style: 'destructive', onPress: () => navigation.dispatch(e.data.action) },
                ]
            );
        });

        return () => {
            unsubscribeFocus();
            unsubscribeBlur();
            unsubscribeBeforeRemove();
        };
    }, [navigation]);

    return <View />;
}


/* ═══════════════════════════════════════════════════════════════════════════
   🧭 NAVIGATION METHODS REFERENCE
   ═══════════════════════════════════════════════════════════════════════════ */

// navigation.navigate('ScreenName')       - Navigate to screen
// navigation.navigate('ScreenName', {})   - Navigate with params
// navigation.push('ScreenName')           - Push screen (allows duplicates)
// navigation.goBack()                     - Go back one screen
// navigation.popToTop()                   - Go to first screen in stack
// navigation.pop(n)                       - Go back n screens
// navigation.replace('ScreenName')        - Replace current screen
// navigation.reset({...})                 - Reset navigation state
// navigation.setParams({})                - Update current screen params
// navigation.setOptions({})               - Update current screen options
// navigation.isFocused()                  - Check if screen is focused
// navigation.canGoBack()                  - Check if can go back
// navigation.getParent()                  - Get parent navigator
// navigation.getState()                   - Get navigation state

// Drawer specific:
// navigation.openDrawer()                 - Open drawer
// navigation.closeDrawer()                - Close drawer
// navigation.toggleDrawer()               - Toggle drawer

// Tab specific:
// navigation.jumpTo('TabName')            - Jump to specific tab


/* ═══════════════════════════════════════════════════════════════════════════
   ✅ COMPLETE EXAMPLE - FULL APP STRUCTURE
   ═══════════════════════════════════════════════════════════════════════════ */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';

// Navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Home Stack
function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

// Profile Stack
function ProfileStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfileMain" component={ProfileScreen} options={{ title: 'Profile' }} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

// Main Tab Navigator
function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    const icons = {
                        Home: focused ? 'home' : 'home-outline',
                        Search: focused ? 'search' : 'search-outline',
                        Profile: focused ? 'person' : 'person-outline',
                    };
                    return <Ionicons name={icons[route.name]} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#6200ee',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileStackNavigator} />
        </Tab.Navigator>
    );
}

// Root Navigator with Auth
function RootNavigator() {
    const isLoggedIn = true; // Replace with actual auth state

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isLoggedIn ? (
                <Stack.Screen name="Main" component={MainTabNavigator} />
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} />
            )}
        </Stack.Navigator>
    );
}

// App Entry Point
export default function App() {
    return (
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    );
}


/* ═══════════════════════════════════════════════════════════════════════════
   📖 QUICK REFERENCE
   ═══════════════════════════════════════════════════════════════════════════ */

// INSTALLATION
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm install @react-navigation/native-stack    (Stack)
// npm install @react-navigation/bottom-tabs     (Tabs)
// npm install @react-navigation/drawer          (Drawer)

// NAVIGATION TYPES
// Stack     → Screens stack on top (detail pages)
// BottomTab → Tabs at bottom (main sections)
// Drawer    → Side menu (settings, account)
// TopTab    → Swipeable tabs at top (categories)

// COMMON PATTERNS
// navigation.navigate('Screen')                  - Go to screen
// navigation.navigate('Screen', { id: 1 })       - With params
// route.params.id                                - Get params
// navigation.goBack()                            - Go back
// useFocusEffect(() => {})                       - Run on focus