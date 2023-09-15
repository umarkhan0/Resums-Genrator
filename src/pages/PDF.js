import React from 'react';
import { PDFDownloadLink, PDFViewer, Document, Page, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    // flexDirection: 'colum',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Center vertically on the page
  },
  text: {
    textAlign: 'center',
  },
});

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <div className>
      <Text style={styles.text}>MY name is umar</Text>
      <Image src="https://tse4.mm.bing.net/th?id=OIP.Nolz7WP6ihgX54G98AcWnAHaEo&pid=Api&P=0&h=180" /> Replace with the path to your image
</div>

      
    </Page>
  </Document>
);

const PDFViewerComponent = () => (
  <PDFViewer width="100%" height={500}>
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
      <h1>MY name is umar</h1>
      <img src="https://tse4.mm.bing.net/th?id=OIP.Nolz7WP6ihgX54G98AcWnAHaEo&pid=Api&P=0&h=180"/>
      <PDFViewerComponent />
      <PDFDownloadButton />
    </div>
  );
}
