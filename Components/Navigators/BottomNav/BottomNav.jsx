import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottomMenu';
// import BottomNavigation from '/BottomMenu'




function TabNavigation(){
  return(
   <NavigationContainer independent={true} style={{ flex: 1, backgroundColor: 'yellow' }}>
      <BottomNavigation />
    </NavigationContainer>
  )
}

export default TabNavigation;



