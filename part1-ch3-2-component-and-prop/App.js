import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

/**
 * Header
 * MyProfile
 * Division
 * FriendSection
 * FriendList
 */
const Header = (props) => {
  return <Text>{props.title}</Text>
}
const MyProfile = () => {
  return <Profile name="1채" uri="https://i.namu.wiki/i/zGmm9YtOETG6BD1RANRyelBdJYnU_nUWD3aL4UK6HRbml43VVUtMTl_cmrH_NgztIabiBVmJ_8ci7WuOUiIIc0j9gEqjCmnXbTClZd56NwreHkXNOirMFMC5Mh74WAhBduMSXvr9nC0RnB1ZS2c0wg.webp" profileSize={40} />
}
const Division = () => {
  return <Text>Division</Text>
}
const FriendSection = () => {
  return <Text>FriendSection</Text>
}
const FriendList = () => {
  return (
    <View>
      <Profile name="카일워커" uri="https://i.namu.wiki/i/llYoZmIkGshbZtGV0S2Lcxp3AtQIwjG9yDy-wdBUqSSemyu9phw8o-zvORJ3c_wAav_RrfL0obhGBIqCGoflYibPxlRxSFaqlBuTYnNS5Lny5k5Mdci05n3Zy2htB_lEkNkM86i5NEyeFWKY9a1APA.webp" profileSize={30} />
      <Profile name="후벵디아스" uri="https://i.namu.wiki/i/uyxND_fVVIOT25QlhbEkNM-rsndVUgqlnx93Tc9Q4URqWcrcvFq7_ZusZC5lTnZSxsCChEt9X14sWsmv9kHZGuOUfkBOTpKaaa3JYPBYD2P2BKWhuedOhc8auwYmiAZ77RFp43asWophfC7mKw-_FA.webp" profileSize={30} />
      <Profile name="엘링홀란드" uri="https://i.namu.wiki/i/0r16p9LSlmfuJ_yZ2z4fKqF9pE-QSnPdQ8GFEI7iK7q2FxymcqwqOThAIG2zx2089q9wvjMO0zyOwXCk_j5B1jxvOMzPsjMWT_dw4mSQA3VpiUJ4gd7PJD3IvHjwEPH3ihHZfAVr0Lw8q_zNgrDagA.webp" profileSize={30} />
      <Profile name="제레미도쿠" uri="https://i.namu.wiki/i/2-MJ6HgiDOeCEsJpJMzXJhkrXnRNlNTjVAT1gjFZdlGGVygs30TbosdvO8xdLBkUytY1zxA8ju2zY_u1zOjmczjOiGVQr1WxfVlO13t-wyNhrtaHLIZdWtAB7f7e21Xn5zocAEGu2sKiGH5HaSmd6w.webp" profileSize={30} />
      <Profile name="잭스테픈" uri="https://i.namu.wiki/i/H-AwqcDYbmRLhhUOEyZqZJ6B47H3Ur9ly6mJQKG5lgkm_k8yQyu8ZiwNfIpfKKxVbtWFUCNYTE66JhK-JUfp9zZSaL8S8jpkxHH-1WIhB4uhvxxaAUqtngvh6F4BHvJLWQ3YngEKiFff8ngjIlmFJw.webp" profileSize={30} />
      <Profile name="주앙칸셀루" uri="https://i.namu.wiki/i/_KbyPuUXa5n8n9UGxXOCd-qXfPwLcmkiM-SlUqQFZbNMskw4cKi_8XZ5VSJaQdCqmWMo9tQX_YE8x1rYKUM2xUY1a5sz6k-lBtrWeM1Wg6APR6_unrOMyF-AulgJA2TBwpKj1Cf8q-RUgZOjmcHw0g.webp" profileSize={30} />
    </View>
  )
}

const Profile = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Image source={{uri: props.uri}} style={{width: props.profileSize, height: props.profileSize}} />
      <Text>{props.name}</Text>
    </View>
  )
}

/*
class Profile extends React.Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: this.props.uri}} style={{width: this.props.profileSize, height: this.props.profileSize}} />
        <Text>{this.props.name}</Text>
      </View>
    )
  }
}
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구" />
      <MyProfile />
      <Division />
      <FriendSection />
      <FriendList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
