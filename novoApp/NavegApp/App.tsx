import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withFormik } from 'formik';




function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>Filme!</Text>
      <TextInput/>
    </View>
  );
}


function SettingsScreen(props : any) {

  function setEmail(value : string){
    console.log(value);
    props.email += value;
    console.log(props.email);
  }

  const Form = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput 
        text={props.email}
      />
  
      <TextInput
        value={props.password}
        onChangeText={text => props.password = text}
      />
  
      <Button
        onPress={props.handleSubmit}
        title="Login"
      />
    </View>
  );

  return Form
}

const Tab = createBottomTabNavigator();
//Vamos criar essa constante para o manuseio da função
export default function App() {
  //criamos a função e já a exportamos.
  return (
    <NavigationContainer>
          {/* //essa tag SEMPRE deve estar envolvendo as rotas na aplicação */}
      <Tab.Navigator
        tabBarOptions={{ style: { height: 100, paddingBottom: 50 } }}>
        {/* //apenas para vermos mais fácil e ver que possível estilizar, um pouco a tab
        //essa tab mostra que vamos usar tabs */}
  <Tab.Screen name="Home" component={HomeScreen} />
  {/* //define as tabs */}
  <Tab.Screen name="Settings" component={SettingsScreen({ email: '', password: '' })} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  
}

