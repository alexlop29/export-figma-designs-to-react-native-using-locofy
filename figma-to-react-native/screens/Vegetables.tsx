import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "react-native";
import { Color, Padding, Border, FontSize, FontFamily } from "./GlobalStyles";

const Vegetables = () => {
  return (
    <View style={styles.vegetables}>
      <View style={[styles.itemRowView, styles.itemViewLayout]}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.mediaIcon, styles.iconLayout]}
          source={require("../assets/media.png")}
        />
        <Text style={styles.savoyCabbage}>{`Savoy Cabbage
`}</Text>
        <View style={styles.price}>
          <Text style={[styles.text, styles.textTypo]}>1.45</Text>
          <Text style={[styles.kg, styles.kgFlexBox]}>€ / kg</Text>
        </View>
        <View
          style={[styles.buttonsecondary, styles.buttonsecondarySpaceBlock]}
        >
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            source={require("../assets/iconshoppingcart.png")}
          />
        </View>
        <View style={[styles.iconheartWrapper, styles.searchfieldBorder]}>
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            source={require("../assets/iconheart.png")}
          />
        </View>
      </View>
      <View style={styles.vegetables1}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.itemRowView1, styles.itemViewLayout]}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={[styles.mediaIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/media1.png")}
        />
        <Text style={styles.savoyCabbage}>{`Purple Cauliflower

`}</Text>
        <View style={styles.price}>
          <Text style={[styles.text, styles.textTypo]}>1.85</Text>
          <Text style={[styles.kg, styles.kgFlexBox]}>€ / kg</Text>
        </View>
        <View
          style={[styles.buttonsecondary, styles.buttonsecondarySpaceBlock]}
        >
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            source={require("../assets/iconshoppingcart1.png")}
          />
        </View>
        <View style={[styles.iconheartWrapper, styles.searchfieldBorder]}>
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            source={require("../assets/iconheart1.png")}
          />
        </View>
      </View>
      <View style={[styles.itemRowView2, styles.itemViewLayout]}>
        <View style={[styles.container, styles.containerPosition]} />
        <Image
          style={styles.mediaIcon2}
          contentFit="cover"
          source={require("../assets/media2.png")}
        />
        <Text style={styles.savoyCabbage}>{`Boston Lettuce

`}</Text>
        <View style={styles.price}>
          <Text style={[styles.text, styles.textTypo]}>1.10</Text>
          <Text style={[styles.kg, styles.kgFlexBox]}>€ / piece</Text>
        </View>
        <View
          style={[styles.buttonsecondary, styles.buttonsecondarySpaceBlock]}
        >
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            source={require("../assets/iconshoppingcart2.png")}
          />
        </View>
        <View style={[styles.iconheartWrapper, styles.searchfieldBorder]}>
          <Image
            style={styles.iconshoppingCart}
            contentFit="cover"
            source={require("../assets/iconheart2.png")}
          />
        </View>
      </View>
      <Text style={[styles.title, styles.textTypo]}>Vegetables</Text>
      <View style={styles.search}>
        <View style={[styles.searchfield, styles.searchfieldBorder]} />
        <Text style={[styles.text3, styles.text3Position]}>Search</Text>
        <Image
          style={[styles.iconsearch, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/iconsearch.png")}
        />
      </View>
      <View style={[styles.chipsselecetd, styles.chipsselecetdSpaceBlock]}>
        <Image
          style={styles.iconcheck}
          contentFit="cover"
          source={require("../assets/iconcheck.png")}
        />
        <Text style={[styles.abbageAndLettuce, styles.andTypo]}>
          Сabbage and lettuce (14)
        </Text>
      </View>
      <View style={[styles.chipsunselecetd, styles.chipsselecetdSpaceBlock]}>
        <Text style={[styles.ucumbersAndTomatoes, styles.andTypo]}>
          Сucumbers and tomatoes (10)
        </Text>
      </View>
      <View style={[styles.chipsunselecetd1, styles.chipsunselecetdPosition]}>
        <Text style={[styles.ucumbersAndTomatoes, styles.andTypo]}>
          Potatoes and carrots (4)
        </Text>
      </View>
      <View style={[styles.chipsunselecetd2, styles.chipsunselecetdPosition]}>
        <Text style={[styles.ucumbersAndTomatoes, styles.andTypo]}>
          Oinons and garlic (8)
        </Text>
      </View>
      <View style={[styles.chipsunselecetd3, styles.chipsunselecetdPosition]}>
        <Text style={[styles.ucumbersAndTomatoes, styles.andTypo]}>
          Peppers (7)
        </Text>
      </View>
      <Image
        style={styles.tabBarIcon}
        contentFit="cover"
        source={require("../assets/tab-bar.png")}
      />
      <View style={styles.navigationBar}>
        <View style={[styles.background, styles.containerPosition]} />
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemViewLayout: {
    height: 160,
    width: 414,
    left: 0,
    position: "absolute",
  },
  containerPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.textPrimary,
    letterSpacing: 0,
  },
  kgFlexBox: {
    textAlign: "center",
    color: Color.textSecondary,
  },
  buttonsecondarySpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_10xl,
    alignItems: "center",
    top: 104,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  searchfieldBorder: {
    borderWidth: 1,
    borderColor: Color.border,
    borderStyle: "solid",
    backgroundColor: Color.white,
    position: "absolute",
  },
  text3Position: {
    top: "25%",
    height: "50%",
    position: "absolute",
  },
  chipsselecetdSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_mini,
    height: 34,
    borderRadius: Border.br_5xl,
    top: 253,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  andTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
  },
  chipsunselecetdPosition: {
    top: 307,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_mini,
    height: 34,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.white,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  container: {
    position: "absolute",
  },
  mediaIcon: {
    borderRadius: 6,
    left: "4.83%",
    bottom: "10%",
    right: "52.42%",
    top: "10%",
    width: "42.75%",
    height: "80%",
    maxHeight: "100%",
    position: "absolute",
  },
  savoyCabbage: {
    height: "15%",
    left: "52.42%",
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    textAlign: "left",
    color: Color.textPrimary,
    fontFamily: FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
    top: "10%",
    width: "42.75%",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.sFProText,
    lineHeight: 22,
  },
  kg: {
    fontSize: FontSize.size_base,
    marginLeft: 2,
    fontFamily: FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: "center",
  },
  price: {
    top: 52,
    alignItems: "flex-end",
    flexDirection: "row",
    left: 218,
    position: "absolute",
    overflow: "hidden",
  },
  iconshoppingCart: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  buttonsecondary: {
    left: 316,
    backgroundColor: Color.primaryButton,
    position: "absolute",
  },
  iconheartWrapper: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_10xl,
    alignItems: "center",
    top: 104,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    overflow: "hidden",
    left: 218,
    borderColor: Color.border,
    borderStyle: "solid",
  },
  itemRowView: {
    top: 709,
  },
  vectorIcon: {
    height: "89.66%",
    width: "90%",
    top: "17.09%",
    right: "5%",
    bottom: "-6.75%",
    left: "5%",
    position: "absolute",
  },
  vegetables1: {
    top: -40,
    left: 232,
    width: 234,
    height: 234,
    position: "absolute",
  },
  itemRowView1: {
    top: 541,
  },
  mediaIcon2: {
    borderRadius: Border.br_5xs,
    maxHeight: "100%",
    maxWidth: "100%",
    left: "4.83%",
    bottom: "10%",
    right: "52.42%",
    top: "10%",
    width: "42.75%",
    height: "80%",
    position: "absolute",
    overflow: "hidden",
  },
  itemRowView2: {
    top: 373,
  },
  title: {
    bottom: 758,
    fontSize: 30,
    lineHeight: 41,
    fontFamily: FontFamily.sFProDisplay,
    left: 20,
    position: "absolute",
  },
  searchfield: {
    borderRadius: Border.br_8xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  text3: {
    width: "77.54%",
    left: "16.58%",
    fontSize: FontSize.size_mid,
    color: Color.textSecondary,
    top: "25%",
    height: "50%",
    textAlign: "left",
    fontFamily: FontFamily.sFProText,
    lineHeight: 22,
    letterSpacing: 0,
  },
  iconsearch: {
    width: "6.42%",
    right: "87.7%",
    bottom: "25%",
    left: "5.88%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  search: {
    top: 165,
    right: 20,
    height: 48,
    left: 20,
    position: "absolute",
  },
  iconcheck: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  abbageAndLettuce: {
    fontWeight: "500",
    color: Color.colorBlueviolet,
    marginLeft: 8,
    textAlign: "left",
  },
  chipsselecetd: {
    backgroundColor: Color.selectedBGViolet,
    left: 20,
  },
  ucumbersAndTomatoes: {
    textAlign: "center",
    color: Color.textSecondary,
  },
  chipsunselecetd: {
    left: 253,
    backgroundColor: Color.white,
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_mini,
    height: 34,
    borderRadius: Border.br_5xl,
    top: 253,
  },
  chipsunselecetd1: {
    left: 300,
  },
  chipsunselecetd2: {
    left: 20,
  },
  chipsunselecetd3: {
    left: 189,
  },
  tabBarIcon: {
    right: 0,
    bottom: 0,
    height: 80,
    maxWidth: "100%",
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  background: {
    shadowColor: "rgba(0, 0, 0, 0.01)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 18,
    elevation: 18,
    shadowOpacity: 1,
    display: "none",
    position: "absolute",
    backgroundColor: Color.background,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
  },
  vectorIcon1: {
    height: "14.06%",
    width: "1.81%",
    top: "63.8%",
    right: "93.3%",
    bottom: "22.14%",
    left: "4.89%",
    position: "absolute",
  },
  navigationBar: {
    top: 0,
    height: 96,
    width: 414,
    left: 0,
    position: "absolute",
  },
  vegetables: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.background,
  },
});

export default Vegetables;
