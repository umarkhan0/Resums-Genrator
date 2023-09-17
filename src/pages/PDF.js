









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
    height: "84.5%",
    marginLeft: "20px",
    width: "140px",
    borderRight: "2px solid #44b1b4",
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
    // flex: 1,
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
  }
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
      <View style={styles.secondMainContainer}>
        <Text style={styles.achivementSet}>Achevment</Text><View style={styles.containerAchevment}>
          <Text style={styles.achevmentTime}>• <span> </span> 2023 | <Text style={{color: "#44b1b4"}}>Achevment Name</Text></Text>
          <View style={{justifyContent: "center"}}>
          <Image style={styles.lineStyling} src='https://tse3.mm.bing.net/th?id=OIP.3WJnAwWJCFa2IxOd1WpNPQAAAA&pid=Api&P=0&h=180'/>

          <Text style={styles.achevmentDeatil}>allow web developers to group a set of related items in lists. Example An unordered</Text>
          </View>
          <Text style={styles.achevmentTime}>• <span> </span> 2024 | <Text style={{color: "#44b1b4"}}>Achevment Name</Text></Text>
          <Text style={styles.achevmentDeatil}>Allow web developers to group a set of related items in lists. Example An unordered</Text>

          {/* <span style={styles.lineStyling}></span> */}
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
