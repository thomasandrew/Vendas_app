/*import React from 'react'
import { View } from 'react-native'
import {Button, Screen, Container, Text} from '../../components/ui'

import { useDarkMode } from '../../providers/DarkModeProvider'

export default function ({navigation}) {
    const { darkMode, setDarkMode } = useDarkMode()
    return (
            <Container>
            <Text>Pagina de Menus</Text>
            <Text></Text>
            <Button title={`darkMode ${darkMode?'ativado':'desativado'}`} onPress={() => setDarkMode(!darkMode)} />
            <Text></Text>
            <Button title="Tela de Clientes" onPress={()=> navigation.navigate('Main',{ screen: 'ClientesScreen' })}/>
            <Text></Text>
            <Button title="Desconectar" onPress={()=> navigation.navigate('LoginScreen')}/>
            </Container>
    )
}
*/

import React from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import {
  Screen,
  Container,
  Text,
} from "../../components/ui";
import { Icon } from "react-native-elements";


import { useDarkMode } from "../../providers/DarkModeProvider";
import MenuItem from './Item_menu/MenuItem'
import { darkTheme, lightTheme } from "../../theme";

export default function ({ navigation }) {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <View style={[styles.container, {backgroundColor: darkMode ? darkTheme.body : lightTheme.body}]}>

      <View style={styles.start}>
        
        <View style={styles.menuContainer}>
        
        <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
          onPress={()=> navigation.navigate('Main',{ screen: 'ClientesScreen' })}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
          onPress={() => setDarkMode(!darkMode)}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.menuItem}>
      <TouchableOpacity>
        <Icon
          name="user"
          type="font-awesome"
          size={40}
          color="white"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
          
        </View>

      </View>

      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
      start: {
        flex: 1,
        marginTop: '10%',
      },
      menuContainer: {
        height: '40%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      menuItem: {
        width: "33.333333%",
        height: "50%",
        padding: 20,
        //backgroundColor: '#ccc',
        //borderColor: '#000',
        //borderWidth: 2,
      },
      image: {
        width: "100%",
        height: "100%",
        opacity: 0.8,
        borderColor: "#fff",
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });