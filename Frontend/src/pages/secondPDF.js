import React from 'react';
import { Page, Text, View, Document, PDFViewer , StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { useLocation } from 'react-router-dom';

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: 'Helvetica',
    color: '#333',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contact: {
    textAlign: 'right',
    fontSize: 10,
    color: 'grey',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderBottom: '1 solid grey',
    paddingBottom: 5,
    color: '#666',
  },
  text: {
    marginBottom: 5,
    lineHeight: 1.5,
  },
  list: {
    marginLeft: 10,
    marginBottom: 5,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  listText: {
    flex: 1,
    fontSize: 11,
  },
  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    width: '50%',
  },
});

const ResumeDocument = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>STELLA WALKER</Text>
        <View style={styles.contact}>
          <Text>Everett, WA 98203</Text>
          <Text>555-555-5555</Text>
          <Text>example@example.com</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.text}>
          Dedicated professional with demonstrated skills in customer service, time management, and trend tracking. Experience working in challenging environments to provide customer-focused resolutions and feedback. Willing to take on any task to support team and help the business succeed.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skills}>
          <Text style={styles.skillItem}>• Positive and professional</Text>
          <Text style={styles.skillItem}>• Reliability</Text>
          <Text style={styles.skillItem}>• Client advocacy</Text>
          <Text style={styles.skillItem}>• Conflict resolution</Text>
          <Text style={styles.skillItem}>• Critical thinking</Text>
          <Text style={styles.skillItem}>• Issue troubleshooting</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Lead Customer Service Agent</Text> | Alaska Airlines | Seattle, WA
          <Text style={{ fontStyle: 'italic' }}> May 2019 - Current</Text>
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Met face-to-face with customers to handle issues escalated by associates.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Followed up with customers to share findings and offer solutions for ongoing inquiries.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Avoided revenue losses with diligent attention to customers' needs and complaints.</Text>
          </View>
        </View>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Customer Support Associate</Text> | Everett Transit | Everett, WA
          <Text style={{ fontStyle: 'italic' }}> June 2018 - May 2019</Text>
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Followed up with customers to offer additional support and check resolution satisfaction.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Handled customer inquiries, payments and service requests.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Developed process improvements to enhance overall delivery of service.</Text>
          </View>
        </View>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Customer Experience Specialist</Text> | BestBuy | Everett, WA
          <Text style={{ fontStyle: 'italic' }}> April 2017 - June 2018</Text>
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Assisted customers with billing issues, using self-service tools and troubleshooting service concerns.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Met client needs by handling telephone, email and chat requests with professionalism.</Text>
          </View>
        </View>

        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Customer Service Associate</Text> | Kohls | Seattle, WA
          <Text style={{ fontStyle: 'italic' }}> February 2016 - February 2017</Text>
        </Text>
        <View style={styles.list}>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Drove sales by identifying customer needs and making product referrals.</Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.listText}>Approved or denied coverage claims based on submitted information.</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.text}>
          <Text style={{ fontWeight: 'bold' }}>Bachelor of Arts - Communication</Text>
          <Text> | University of Washington, Seattle, WA | May 2017</Text>
        </Text>
      </View>
    </Page>
  </Document>
);
const PDFViewerComponent = () => (
    <PDFViewer width="100%" height={900}>
      <ResumeDocument />
    </PDFViewer>
  );
  
  const PDFDownloadButton = () => {
    const location = useLocation();
    const daata = location.state.data
    return(
    <div>
      <PDFDownloadLink document={<ResumeDocument data={daata} />} fileName="my_document.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download now'
        }
      </PDFDownloadLink>
    </div>
    )
  }
  export default function PDFSec() {
  
    return (
      <div>
        <PDFViewerComponent />
        <PDFDownloadButton />
      </div>
    );
  }