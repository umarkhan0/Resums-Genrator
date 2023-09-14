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
      <Text style={styles.text}>MY name is umar</Text>
      <Image src="path_to_your_image.jpg" /> {/* Replace with the path to your image */}
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
      <PDFViewerComponent />
      <PDFDownloadButton />
    </div>
  );
}
