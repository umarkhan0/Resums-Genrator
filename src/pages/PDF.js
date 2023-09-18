









import React from 'react';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, Image, StyleSheet, View, Link, Line } from '@react-pdf/renderer';
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import faceBook from "../images/f_logo_RGB-Blue_1024.png";
import instagramIcon from '../images/insta.png'
// import  linkedInIcon  from '../images/how-It-works.svg';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column', // Set the direction to column
    width: '210mm', // Set the width to A4 width
    height: '297mm', // Set the height to A4 height
    // Add some padding for content
  },
  headContaner: {

    height: "130px",
    width: "100%",
    backgroundColor: "#44b1b4",
  },
  introBox: {
    position: "absolute",
    height: "255px",
    width: "130px",
    backgroundColor: "#fff",
    marginLeft: "13px",
    marginTop: "13px",
    border: "2px solid #44b1b4",
    borderRadius: "50%",

  },
  imageOwner: {
    height: "110px",
    width: "110px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  textHeading: {
    fontSize: "10px",
    marginTop: "10px",
    color: "#44b1b4"
  },
  answerHeading: {
    fontSize: "8px",
    color: "#000",
    textDecoration: "none"
  },
  imageContainer: {
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  contentEmailEtc: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  nameContent: {
    marginLeft: "180px",
    marginTop: "5px"
  },
  nameStyles: {
    color: "#fff",
    fontSize: "33px",
    fontWeight: "bold",

    // borderBottom: "2px solid red",
  },
  lastNameStyles: {
    color: "#fff",
    fontSize: "33px",
    fontWeight: "bold",
    textDecoration: "underline",
    textUnderlineOffset: "500px",
    textDecorationColor: "#6acdd3",

    // lineHeight: "48px",

  },
  horizontalLine: {

    // width: "110px",
    borderBottomWidth: 1, // Set the line thickness
    borderBottomColor: '#73c9c8'
    // ... your other styles
  },
  skillIntro: {
    color: "#85e6ec",
    fontWeight: "bold",
    fontSize: "13px"
  },
  icons: {
    height: "16px",
    width: "16px",
    marginRight: "7px",
    marginTop: "7px",
    opacity: 0.7
    // color: "#fff"
  },
  secondMainContainer: {
    height: "710px",
    marginLeft: "20px",
    width: "150px",
    borderRight: "2px solid #44b1b4",
    // position: "fixed"
    // marginLeft: "22px"
  },
  achivementSet: {
    marginTop: "160px",
    marginBottom: "9px",
    // marginLeft: "13px",
    fontSize: "10px",
    backgroundColor: "#44b1b4",
    padding: "4px",
    width: "80px",
    textAlign: "center",
    color: "#fff",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px"
  },
  skillsHeading: {
    marginBottom: "12px",
    // marginLeft: "13px",
    marginTop: "5px",
    fontSize: "10px",
    backgroundColor: "#44b1b4",
    padding: "3px",
    paddingTop: "4px",
    paddingBottom: "4px",
    width: "80px",
    textAlign: "center",
    color: "#fff",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px"
  },
  lineStyling: {
    // marginLeft: "2px",
    opacity: "0.7",
    height: "20px",
    position: "absolute"
  },
  containerAchevment: {
    justifyContent: "center"
    ,
  },
  achevmentTime: {
    fontSize: "10px",
  },
  achevmentDeatil: {
    fontSize: "10px",
    marginLeft: "28px",
    width: "109px",
    marginTop: "3px",
    marginBottom: "3px"
  },

  outlineBar: {
    height: "8px",
    width: "120px",
    border: "1px solid #44b1b4",
    backgroundColor: "#f8fbfd",
    borderRadius: "50%",
  marginTop: "3px",

  },
  skillNamw: {
    fontSize: "10px",
    marginTop: "5px"
  },
  aboutSection: {
    height: "70px",
    width: "100px",
    borderBottom: "1px solid red",
    position: "relative"
  },
  aboutSectionMain: {
  marginTop: "30px",
    fontSize: "10px",
    backgroundColor: "#44b1b4",
    width: "85px",
    height: "20px",
    textAlign: "center",
    color: "#fff",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  aboutText:{
width: "380px",
fontSize: "15px",
marginTop: "20px",
marginLeft: "15px"
  },
  // educationSectionMain: {
  //   marginTop: "30px",
  //   fontSize: "10px",
  //   backgroundColor: "#44b1b4",
  //   width: "85px",
  //   height: "20px",
  //   textAlign: "center",
  //   color: "#fff",
  //   borderTopRightRadius: "10px",
  //   borderBottomRightRadius: "10px",
  //   // position: "absolute",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center"
  // }
});

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.headContaner}>
        <View style={styles.introBox}>
          <div style={styles.imageContainer}>
            <Image
              style={styles.imageOwner}
              src="http://1.bp.blogspot.com/-rH9ibyhCVoQ/UNKzT36xWDI/AAAAAAAAASY/oXAzWWb5WWw/s1600/cute+boys+wallpapers+(1).jpg"
            />
          </div>
          <div style={styles.contentEmailEtc}>
            <Text style={styles.textHeading}>Email</Text>
            <Link style={styles.answerHeading}>umaraamir959@gmail.com</Link>
            <Text style={styles.textHeading}>Phone</Text>
            <Text style={styles.answerHeading}>03152805977</Text>
            <Text style={styles.textHeading}>Address</Text>
            <Text style={styles.answerHeading}>141/14 5-G New karachi</Text>
          </div>
        </View>
        <View style={styles.nameContent}>
          <Text style={styles.nameStyles}>Umar</Text>
          <Text style={styles.lastNameStyles}>Aamir</Text>
          <Text style={styles.skillIntro}>WEB DEVELPER</Text>
          <View style={{ flexDirection: "row" }}>

            <Image style={styles.icons} src={faceBook} />
            <Image style={styles.icons} src={instagramIcon} />
            <Image style={styles.icons} src={"https://cdn2.iconfinder.com/data/icons/social-networking-package-1-1/512/networks_-_social_-_web-04-2-128.png"} />
          </View>
        </View>
      </View>
      <View style={{
        flexDirection: "row"
      }}>
      <View style={styles.secondMainContainer}>
        
        <Text style={styles.achivementSet}>Achevment</Text><View style={styles.containerAchevment}>
          <Text style={styles.achevmentTime}>• <span> </span> 2023 | <Text style={{color: "#44b1b4"}}>Achevment Name</Text></Text>
          <View style={{justifyContent: "center"}}>
          <Image style={styles.lineStyling} src='https://tse3.mm.bing.net/th?id=OIP.3WJnAwWJCFa2IxOd1WpNPQAAAA&pid=Api&P=0&h=180'/>

          <Text style={styles.achevmentDeatil}>allow web developers to group a set of related items in lists. Example An unordered</Text>
          </View>
          <Text style={styles.achevmentTime}>• <span> </span> 2024 | <Text style={{color: "#44b1b4"}}>Achevment Name</Text></Text>
          <Text style={styles.achevmentDeatil}>Allow web developers to group a set of related items in lists. Example An unordered</Text>
        </View>   
        <View style={{
          marginTop: "5px"
          ,marginBottom: "6px"
        }}>
          
        <Text style={styles.skillsHeading}>Skills</Text>
        <Text style={styles.skillNamw}>HTML</Text>
        <div style={styles.outlineBar}>
<div style={{
  height: "20px"
  ,
  width:"100%",
  backgroundColor: "#44b1b4"
}}>

</div>

</div>
<Text style={styles.skillNamw}>CSS</Text>
        <div style={styles.outlineBar}>
<div style={{
  height: "20px"
  ,
  width:"50%",
  backgroundColor: "#44b1b4"
}}>

</div>

</div>
<Text style={styles.skillNamw}>JavaScript</Text>
        <div style={styles.outlineBar}>
<div style={{
  height: "20px"
  ,
  width:"90%",
  backgroundColor: "#44b1b4"
}}>

</div>

</div>
<Text style={styles.skillNamw }>ReactJs</Text>
        <div style={styles.outlineBar}>
<div style={{
  height: "20px"
  ,
  width:"70%",
  backgroundColor: "#44b1b4"
} }>

</div>

</div>
        </View>
        <View style={{
          marginTop: "5px"
        }}>
      <Text style={styles.skillsHeading}>Language</Text>
      <Text style={styles.skillNamw}>English</Text>
        <div style={styles.outlineBar}>
<div style={{
  height: "20px"
  ,
  width:"50%",
  backgroundColor: "#44b1b4"
}}>

</div>

</div>
<Text style={styles.skillNamw}>Urdu</Text>
        <div style={styles.outlineBar}>

<div style={{
  height: "20px"
  ,
  width:"100%",
  backgroundColor: "#44b1b4"
}}>

</div>

</div>
      </View>
      </View>
      <View>
<View style={styles.aboutSectionMain}>
  <View style={{
    width: "8px",
    height: "20px",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <view style={{
  width: "100%",
  border: "1px solid #44b1b4"
}}>

</view>
  </View>
<view style={{
  width: "95%",
  border: "1px solid #44b1b4",
  borderRadius: "50%"
}}><Text >ABOUT ME</Text>
</view>

</View>
<View style={styles.aboutText}>
<Text>s it’s currently written, your answer is unclear. Please edit to add additional details that will help others understand how this addresses the question asked. You can find more information on how to write good answers in the help center. – 
Community
Bot
 Nov 2, 2021 at 10:20</Text>
</View>



<View style={styles.aboutSectionMain}>
  <View style={{
    width: "8px",
    height: "20px",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <view style={{
  width: "100%",
  border: "1px solid #44b1b4"
}}>

</view>
  </View>
<view style={{
  width: "95%",
  border: "1px solid #44b1b4",
  borderRadius: "50%"
}}><Text >EDUCATION</Text>
</view>

</View>
<View style={{
  marginTop: "10px",
  marginLeft: "10px"
}}>
<Text style={styles.achevmentTime}> <span> </span> • 2017-2019 | <Text style={{color: "#44b1b4"}}>Univercity Name</Text></Text>
<Text style={{
  width: "310px",
  fontSize: "11px",
  marginLeft: "67px",
  marginTop: "10px",
  marginBottom: "10px"
}}>To Generate Lorem Ipsum, simply select your desired settings below and hit generate. Copy preview to paste straight into rich text editors or copy the HTML markup.</Text>
<Text style={styles.achevmentTime}> <span> </span> • 2017-2019 | <Text style={{color: "#44b1b4"}}>Univercity Name</Text></Text>
<Text style={{
  width: "310px",
  fontSize: "11px",
  marginLeft: "67px",
  marginTop: "10px",
  marginBottom: "10px"
}}>To Generate Lorem Ipsum, simply select your desired settings below and hit generate. Copy preview to paste straight into rich text editors or copy the HTML markup.</Text>
<Text style={styles.achevmentTime}> <span> </span> • 2017-2019 | <Text style={{color: "#44b1b4"}}>Univercity Name</Text></Text>
<Text style={{
  width: "310px",
  fontSize: "11px",
  marginLeft: "67px",
  marginTop: "10px"
}}>To Generate Lorem Ipsum, simply select your desired settings below and hit generate. Copy preview to paste straight into rich text editors or copy the HTML markup.</Text>
</View>

<View style={styles.aboutSectionMain}>
  <View style={{
    width: "8px",
    height: "20px",
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <view style={{
  width: "100%",
  border: "1px solid #44b1b4"
}}>

</view>
  </View>
<view style={{
  width: "95%",
  border: "1px solid #44b1b4",
  borderRadius: "50%"
}}><Text >SOETWARE</Text>
</view>
</View>
<Text style={{
  fontSize: "10px",
  width: "400px",
  marginTop: "5px",
  marginLeft: "10px"
}}>Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts, and</Text>
<View style={{
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  // border: "2px solid red",
  borderBottom: "4px solid black",
  borderRight: "4px solid black",
  borderTop: "4px solid #fff",
  // rotate: "60deg",
  borderLeft: "4px solid black"
  
}}>

</View>
</View>




     </View>
    </Page>
  </Document>
);
const PDFViewerComponent = () => (
  <PDFViewer width="100%" height={900}>
    <PDFDocument />
  </PDFViewer>
);

const PDFDownloadButton = () => (
  <div>
    <PDFDownloadLink document={<PDFDocument />} fileName="my_document.pdf">
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now'
      }
    </PDFDownloadLink>
  </div>
);

export default function PDFunc() {
  return (
    <div>
      <PDFViewerComponent />
      <PDFDownloadButton />
    </div>
  );
}
