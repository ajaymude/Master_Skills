// css in the react native
// inline styles's example'
{/* <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }}>Hello World</Text> */}


// internal styles 's example'



// external styles





import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // background color styles
    backgroundColor: 'red',

    // border styles
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,

    // padding styles
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingLeft: 40,
    paddingRight: 50,
    paddingTop: 60,
    paddingBottom: 70,
    paddingStart: 80,
    paddingEnd: 90,

    // margin styles
    margin: 10,
    marginHorizontal: 20,
    marginVertical: 30,
    marginLeft: 40,
    marginRight: 50,
    marginTop: 60,
    marginBottom: 70,
    marginStart: 80,
    marginEnd: 90,


    // text styles
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Arial',
    textAlign: 'center',
    textAlignVertical: 'center',
    textAlignJustify: 'justify',
    textAlignJustifyAlign: 'justify',
    textAlignJustifyAlignItems: 'center',
    textAlignJustifyAlignContent: 'center',
    textAlignJustifyAlignItems: 'center',


    // position styles
    position: 'absolute',
    top: 0,
    left: 0,
    right: '100%',
    bottom: '100%',


    // flex styles
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',

    // display styles
    display: 'flex',
    display: 'inline',
    display: 'inline-flex',
    display: 'inline-block',
    display: 'block',
    display: 'grid',
    display: 'inline-grid',
    display: 'inline-block',

    // gap styles
    gap: 10,
    gapHorizontal: 20,
    gapVertical: 30,
    gapLeft: 40,
    gapRight: 50,
    gapTop: 60,
    gapBottom: 70,
    gapStart: 80,
    gapEnd: 90,

    // align items styles
    alignItems: 'center',
    alignItems: 'flex-start',
    alignItems: 'flex-end',
    alignItems: 'flex-center',
    alignItems: 'flex-stretch',
    alignItems: 'flex-baseline',
    alignItems: 'flex-space-between',
    alignItems: 'flex-space-around',

    // justify content styles
    justifyContent: 'center',
    justifyContent: 'flex-start',
    justifyContent: 'flex-end',
    justifyContent: 'flex-center',
    justifyContent: 'flex-stretch',
    justifyContent: 'flex-baseline',
    justifyContent: 'flex-space-between',
    justifyContent: 'flex-space-around',

    // align content styles
    alignContent: 'center',
    alignContent: 'flex-start',
    alignContent: 'flex-end',
    alignContent: 'flex-center',
    alignContent: 'flex-stretch',
    alignContent: 'flex-baseline',
    alignContent: 'flex-space-between',
    alignContent: 'flex-space-around',


    // align self styles
    alignSelf: 'center',
    alignSelf: 'flex-start',
    alignSelf: 'flex-end',
    alignSelf: 'flex-center',
    alignSelf: 'flex-stretch',
    alignSelf: 'flex-baseline',
    alignSelf: 'flex-space-between',
    alignSelf: 'flex-space-around',


    // justify items styles
    justifyItems: 'center',
    justifyItems: 'flex-start',
    justifyItems: 'flex-end',
    justifyItems: 'flex-center',
    justifyItems: 'flex-stretch',
    justifyItems: 'flex-baseline',
    justifyItems: 'flex-space-between',
    justifyItems: 'flex-space-around',


    // justify self styles
    justifySelf: 'center',
    justifySelf: 'flex-start',
    justifySelf: 'flex-end',
    justifySelf: 'flex-center',
    justifySelf: 'flex-stretch',
    justifySelf: 'flex-baseline',
    justifySelf: 'flex-space-between',
    justifySelf: 'flex-space-around',


    // flex grow styles
    flexGrow: 1,
    flexGrow: 1,

    // flex shrink styles
    flexShrink: 1,

    // flex basis styles
    flexBasis: '100%',
    flexBasis: '100%',


    // flex direction styles
    flexDirection: 'row',
    flexDirection: 'column',
    flexDirection: 'row-reverse',
    flexDirection: 'column-reverse',
    flexDirection: 'row',
    flexDirection: 'column',
    flexDirection: 'row-reverse',
    flexDirection: 'column-reverse',


    // flex wrap styles
    flexWrap: 'wrap',
    flexWrap: 'wrap-reverse',
    flexWrap: 'wrap',


    // flex justify styles
    flexJustify: 'center',
    flexJustify: 'flex-start',
    flexJustify: 'flex-end',
    flexJustify: 'flex-center',
    flexJustify: 'flex-stretch',
    flexJustify: 'flex-baseline',
    flexJustify: 'flex-space-between',
    flexJustify: 'flex-space-around',


    // flex justify styles
    flexAlign: 'center',
    flexAlign: 'flex-start',
    flexAlign: 'flex-end',
    flexAlign: 'flex-center',
    flexAlign: 'flex-stretch',
    flexAlign: 'flex-baseline',
    flexAlign: 'flex-space-between',
    flexAlign: 'flex-space-around',


    // flex align self styles   
    flexAlignSelf: 'flex-start',
    flexAlignSelf: 'flex-end',
    flexAlignSelf: 'flex-center',
    flexAlignSelf: 'flex-stretch',
    flexAlignSelf: 'flex-baseline',
    flexAlignSelf: 'flex-space-between',
    flexAlignSelf: 'flex-space-around',


    // flex justify styles
    flexJustify: 'center',
    flexJustify: 'flex-start',
    flexJustify: 'flex-end',
    flexJustify: 'flex-center',
    flexJustify: 'flex-stretch',
    flexJustify: 'flex-baseline',
    flexJustify: 'flex-space-between',
    flexJustify: 'flex-space-around',

    // flex justify self styles
    flexJustifySelf: 'flex-start',
    flexJustifySelf: 'flex-end',
    flexJustifySelf: 'flex-center',
    flexJustifySelf: 'flex-stretch',
    flexJustifySelf: 'flex-baseline',
    flexJustifySelf: 'flex-space-between',
    flexJustifySelf: 'flex-space-around',


    // flex align items styles
    flexAlignItems: 'center',
    flexAlignItems: 'flex-start',
    flexAlignItems: 'flex-end',
    flexAlignItems: 'flex-center',
    flexAlignItems: 'flex-stretch',
    flexAlignItems: 'flex-baseline',
    flexAlignItems: 'flex-space-between',
    flexAlignItems: 'flex-space-around',

    // flex align content styles
    flexAlignContent: 'center',
    flexAlignContent: 'flex-start',
    flexAlignContent: 'flex-end',
    flexAlignContent: 'flex-center',
    flexAlignContent: 'flex-stretch',
    flexAlignContent: 'flex-baseline',
    flexAlignContent: 'flex-space-between',
    flexAlignContent: 'flex-space-around',

    // text styles
    textColor: 'red',
    textSize: 20,
    textWeight: 'bold',
    textStyle: 'italic',
    textFamily: 'Arial',
    textAlign: 'center',
    textAlignVertical: 'center',
    textAlignJustify: 'justify',
    textAlignJustifyAlign: 'justify',
    textAlignJustifyAlignItems: 'center',
    textAlignJustifyAlignContent: 'center',
    textAlignJustifyAlignItems: 'center', 
    textDecoration: 'underline',
    textDecorationColor: 'blue',
    textDecorationStyle: 'dotted',
    textDecorationThickness: 1,
    textDecorationSkip: 'underline',
    textDecorationSkipInk: 'underline',
    textDecorationSkipInkColor: 'blue',
    textDecorationSkipInkStyle: 'dotted',
    textDecorationSkipInkThickness: 1,
    letterSpacing: 1,
    lineHeight: 1,
    textTransform: 'uppercase',
    textTransform: 'lowercase',
    textTransform: 'capitalize',
    textTransform: 'none',
    textTransform: 'full-width',
    textTransform: 'full-size-kana',
    textTransform: 'full-width-kana',
    textOverflow: 'ellipsis',
    textOverflow: 'clip',
    textOverflow: 'fade',
    textOverflow: 'none',
    textOverflow: 'clip',
    textOverflow: 'fade',
    textOverflow: 'none',

   


  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

