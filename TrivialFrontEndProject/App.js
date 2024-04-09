import {NavigationContainer} from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';

const App = () => {
  return (
    <NavigationContainer>
      <SignInScreen/>
    </NavigationContainer>
  );
};

export default App;