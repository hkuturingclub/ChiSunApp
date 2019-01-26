import { Icon } from 'native-base';
import { Linking, Text, View} from 'react-native';
import React from 'react';
import theme from '../../native-base-theme/variables/commonColor';

const styles = {
    iconContainer:{
        color: theme.brandPrimary
    },
    footerText: {
        fontSize: 10,
        color: "grey"
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    footerTextContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-evenly',
        padding: 5,
        color: "grey"
    },
}

const SidebarFooter = () => (
    <View>
      <View style={styles.socialContainer}>
        <Icon onPress={() => Linking.openURL('mailto:chisuncollege@hku.hk').catch((err) => console.log(err))} style={styles.iconContainer} type="MaterialIcons" name="email"/>
        <Icon onPress={() => Linking.openURL('https://www.facebook.com/chisuncollege/')} style={styles.iconContainer} type="Entypo" name="facebook-with-circle"/>
        <Icon onPress={() => Linking.openURL('https://www.instagram.com/chisuncollege/?hl=en')} style={styles.iconContainer} type="Entypo" name="instagram-with-circle"/>
      </View>
      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText} onPress={() => Linking.openURL('mailto:turingclub.hku@gmail.com').catch((err) => console.log(err))}>Give Feedback</Text>
        <Text style={styles.footerText}> | </Text>
        <Text style={styles.footerText}>Developed by Turing Club</Text>
      </View>
    </View>
  )

  export default SidebarFooter
