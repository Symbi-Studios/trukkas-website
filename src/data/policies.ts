export type PolicyContentBlock = {
  kind: 'title' | 'subtitle' | 'section' | 'subsection' | 'paragraph' | 'listItem'
  text: string
}

export type PolicyDocument = {
  slug: string
  title: string
  eyebrow: string
  description: string
  sourceFile: string
  updatedLabel: string
  content: PolicyContentBlock[]
}

export const policies = [
  {
    "slug": "privacy-policy",
    "title": "PRIVACY POLICY",
    "eyebrow": "Legal",
    "description": "Trukkas Platform (www.trukkas.com)",
    "sourceFile": "PRIVACY POLICY - TRUKKAS.docx",
    "updatedLabel": "Last updated: June 13, 2026",
    "content": [
      {
        "kind": "title",
        "text": "PRIVACY POLICY"
      },
      {
        "kind": "subtitle",
        "text": "Trukkas Platform (www.trukkas.com)"
      },
      {
        "kind": "section",
        "text": "1. INTRODUCTION"
      },
      {
        "kind": "subsection",
        "text": "1.1 About Trukkas"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas is a digital freight forwarding, trucking, logistics coordination, and transportation marketplace platform operated by Trukkas Global Logistics and Supply Ltd (\"Trukkas\", \"Company\", \"we\", \"us\", or \"our\")."
      },
      {
        "kind": "paragraph",
        "text": "The Platform connects freight forwarders, truck owners, drivers, logistics operators, corporate customers, and other stakeholders within the logistics ecosystem, enabling them to coordinate transportation services, manage logistics operations, process payments, monitor deliveries, and exchange logistics-related documentation electronically."
      },
      {
        "kind": "subsection",
        "text": "1.2 Commitment to Privacy"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd is committed to protecting the privacy, confidentiality, integrity, and security of personal data entrusted to us. We recognise the importance of responsible data processing and are committed to complying with the requirements of the Nigeria Data Protection Act, 2023 (\"NDPA\"), applicable regulations issued by the Nigeria Data Protection Commission, and other relevant data protection laws."
      },
      {
        "kind": "subsection",
        "text": "1.3 Purpose of this Privacy Policy"
      },
      {
        "kind": "paragraph",
        "text": "This Privacy Policy explains how we collect, use, store, disclose, transfer, retain, and otherwise process personal data obtained through the Trukkas Platform and related services."
      },
      {
        "kind": "paragraph",
        "text": "This Privacy Policy also outlines the rights available to Data Subjects and explains how such rights may be exercised."
      },
      {
        "kind": "subsection",
        "text": "1.4 Scope of Application"
      },
      {
        "kind": "paragraph",
        "text": "This Privacy Policy applies to personal data collected through:"
      },
      {
        "kind": "listItem",
        "text": "(a) the Trukkas website located at www.trukkas.com;"
      },
      {
        "kind": "listItem",
        "text": "(b) mobile applications operated by Trukkas;"
      },
      {
        "kind": "listItem",
        "text": "(c) administrative and operational dashboards;"
      },
      {
        "kind": "listItem",
        "text": "(d) customer service and support channels;"
      },
      {
        "kind": "listItem",
        "text": "(e) electronic communications;"
      },
      {
        "kind": "listItem",
        "text": "(f) application programming interfaces (APIs); and"
      },
      {
        "kind": "listItem",
        "text": "(g) any other services, products, or digital platforms operated by Trukkas Global Logistics and Supply Ltd."
      },
      {
        "kind": "subsection",
        "text": "1.5 Persons Covered by this Policy"
      },
      {
        "kind": "paragraph",
        "text": "This Privacy Policy applies to all individuals whose personal data is processed by Trukkas, including:"
      },
      {
        "kind": "listItem",
        "text": "(a) Freight Forwarders;"
      },
      {
        "kind": "listItem",
        "text": "(b) Truck Owners;"
      },
      {
        "kind": "listItem",
        "text": "(c) Drivers;"
      },
      {
        "kind": "listItem",
        "text": "(d) Corporate Customers;"
      },
      {
        "kind": "listItem",
        "text": "(e) Vendors and Service Providers;"
      },
      {
        "kind": "listItem",
        "text": "(f) Business Partners;"
      },
      {
        "kind": "listItem",
        "text": "(g) Website Visitors; and"
      },
      {
        "kind": "listItem",
        "text": "(h) other users of the Platform."
      },
      {
        "kind": "subsection",
        "text": "1.6 Acceptance of this Privacy Policy"
      },
      {
        "kind": "paragraph",
        "text": "By accessing, registering on, or using the Platform, Users acknowledge that they have read, understood, and accepted the terms of this Privacy Policy."
      },
      {
        "kind": "section",
        "text": "2. DEFINITIONS"
      },
      {
        "kind": "paragraph",
        "text": "Unless the context otherwise requires, the following terms shall have the meanings assigned below:"
      },
      {
        "kind": "paragraph",
        "text": "\"Account\" means a registered user profile created on the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Consent\" means any freely given, specific, informed, and unambiguous indication of a Data Subject's wishes by which the Data Subject signifies agreement to the processing of personal data."
      },
      {
        "kind": "paragraph",
        "text": "\"Data Controller\" means a person or organisation that determines the purposes and means of processing personal data."
      },
      {
        "kind": "paragraph",
        "text": "\"Data Processor\" means a person or organisation that processes personal data on behalf of a Data Controller."
      },
      {
        "kind": "paragraph",
        "text": "\"Data Subject\" means an identified or identifiable natural person whose personal data is processed."
      },
      {
        "kind": "paragraph",
        "text": "\"KYC Information\" means information collected for customer identification, verification, anti-fraud, anti-money laundering, and regulatory compliance purposes."
      },
      {
        "kind": "paragraph",
        "text": "\"Location Data\" means GPS coordinates, route information, geofencing data, movement records, and other location-related information generated through the use of the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Logistics Data\" means operational information relating to transportation, cargo movement, deliveries, trips, vehicles, routes, bookings, and logistics transactions."
      },
      {
        "kind": "paragraph",
        "text": "\"NDPA\" means the Nigeria Data Protection Act, 2023, as amended, supplemented, or replaced from time to time."
      },
      {
        "kind": "paragraph",
        "text": "\"Personal Data\" means any information relating to an identified or identifiable natural person."
      },
      {
        "kind": "paragraph",
        "text": "\"Personal Data Breach\" means a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data."
      },
      {
        "kind": "paragraph",
        "text": "\"Platform\" means the Trukkas website, mobile applications, dashboards, APIs, software systems, and related services."
      },
      {
        "kind": "paragraph",
        "text": "\"Processing\" means any operation performed on personal data including collection, recording, organisation, storage, adaptation, retrieval, use, disclosure, transfer, restriction, deletion, or destruction."
      },
      {
        "kind": "paragraph",
        "text": "\"Sensitive Personal Data\" means personal data classified as sensitive under applicable law, including financial information, biometric information, health information, precise location information, and other categories designated by law."
      },
      {
        "kind": "paragraph",
        "text": "\"Services\" means the freight forwarding, trucking, logistics coordination, tracking, payment facilitation, document management, and related services offered through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"User\" means any individual or organisation that accesses or uses the Platform."
      },
      {
        "kind": "section",
        "text": "3. DATA CONTROLLER INFORMATION"
      },
      {
        "kind": "paragraph",
        "text": "For the purposes of the Nigeria Data Protection Act, 2023, the Data Controller responsible for the processing of personal data under this Privacy Policy is:"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd"
      },
      {
        "kind": "paragraph",
        "text": "Platform: Trukkas"
      },
      {
        "kind": "paragraph",
        "text": "Website: www.trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Registered Office: Lagos, Nigeria"
      },
      {
        "kind": "paragraph",
        "text": "Privacy Email: privacy@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "General Legal Email: legal@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd determines the purposes and means of processing personal data collected through the Platform and is responsible for ensuring compliance with applicable data protection laws."
      },
      {
        "kind": "paragraph",
        "text": "Where required by law, Trukkas may appoint a Data Protection Officer or designated privacy representative whose details shall be published on the Platform."
      },
      {
        "kind": "section",
        "text": "4. CATEGORIES OF PERSONAL DATA COLLECTED"
      },
      {
        "kind": "paragraph",
        "text": "Depending on the nature of the Services used and the User's interaction with the Platform, Trukkas may collect and process the following categories of personal data:"
      },
      {
        "kind": "subsection",
        "text": "4.1 Information Provided Directly by Users"
      },
      {
        "kind": "listItem",
        "text": "(a) full name;"
      },
      {
        "kind": "listItem",
        "text": "(b) telephone number;"
      },
      {
        "kind": "listItem",
        "text": "(c) email address;"
      },
      {
        "kind": "listItem",
        "text": "(d) residential address;"
      },
      {
        "kind": "listItem",
        "text": "(e) business address;"
      },
      {
        "kind": "listItem",
        "text": "(f) company information;"
      },
      {
        "kind": "listItem",
        "text": "(g) Corporate Affairs Commission registration information;"
      },
      {
        "kind": "listItem",
        "text": "(h) tax identification information;"
      },
      {
        "kind": "listItem",
        "text": "(i) employment or professional information; and"
      },
      {
        "kind": "listItem",
        "text": "(j) other information voluntarily submitted by Users."
      },
      {
        "kind": "subsection",
        "text": "4.2 Identity Verification and KYC Information"
      },
      {
        "kind": "paragraph",
        "text": "To comply with regulatory, security, and operational requirements, Trukkas may collect:"
      },
      {
        "kind": "listItem",
        "text": "(a) National Identity Number (NIN);"
      },
      {
        "kind": "listItem",
        "text": "(b) driver's licence information;"
      },
      {
        "kind": "listItem",
        "text": "(c) international passport information;"
      },
      {
        "kind": "listItem",
        "text": "(d) voter identification information;"
      },
      {
        "kind": "listItem",
        "text": "(e) business registration documents;"
      },
      {
        "kind": "listItem",
        "text": "(f) proof of address documentation;"
      },
      {
        "kind": "listItem",
        "text": "(g) vehicle ownership documents;"
      },
      {
        "kind": "listItem",
        "text": "(h) insurance certificates; and"
      },
      {
        "kind": "listItem",
        "text": "(i) other information required for verification purposes."
      },
      {
        "kind": "subsection",
        "text": "4.3 Financial and Transaction Information"
      },
      {
        "kind": "paragraph",
        "text": "We may collect:"
      },
      {
        "kind": "listItem",
        "text": "(a) bank account details;"
      },
      {
        "kind": "listItem",
        "text": "(b) wallet information;"
      },
      {
        "kind": "listItem",
        "text": "(c) escrow transaction information;"
      },
      {
        "kind": "listItem",
        "text": "(d) payment records;"
      },
      {
        "kind": "listItem",
        "text": "(e) transaction histories;"
      },
      {
        "kind": "listItem",
        "text": "(f) settlement information; and"
      },
      {
        "kind": "listItem",
        "text": "(g) other financial information necessary for the operation of the Services."
      },
      {
        "kind": "subsection",
        "text": "4.4 Vehicle and Logistics Information"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may collect:"
      },
      {
        "kind": "listItem",
        "text": "(a) vehicle registration details;"
      },
      {
        "kind": "listItem",
        "text": "(b) fleet information;"
      },
      {
        "kind": "listItem",
        "text": "(c) vehicle inspection records;"
      },
      {
        "kind": "listItem",
        "text": "(d) vehicle insurance information;"
      },
      {
        "kind": "listItem",
        "text": "(e) cargo information;"
      },
      {
        "kind": "listItem",
        "text": "(f) delivery records;"
      },
      {
        "kind": "listItem",
        "text": "(g) route information; and"
      },
      {
        "kind": "listItem",
        "text": "(h) transportation-related operational data."
      },
      {
        "kind": "subsection",
        "text": "4.5 Technical Information"
      },
      {
        "kind": "paragraph",
        "text": "When Users access the Platform, we may automatically collect:"
      },
      {
        "kind": "listItem",
        "text": "(a) internet protocol (IP) addresses;"
      },
      {
        "kind": "listItem",
        "text": "(b) device identifiers;"
      },
      {
        "kind": "listItem",
        "text": "(c) browser information;"
      },
      {
        "kind": "listItem",
        "text": "(d) operating system information;"
      },
      {
        "kind": "listItem",
        "text": "(e) application usage information; and"
      },
      {
        "kind": "listItem",
        "text": "(f) activity and system logs."
      },
      {
        "kind": "subsection",
        "text": "4.6 Location Information"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may collect and process:"
      },
      {
        "kind": "listItem",
        "text": "(a) GPS coordinates;"
      },
      {
        "kind": "listItem",
        "text": "(b) real-time location information;"
      },
      {
        "kind": "listItem",
        "text": "(c) geofencing information;"
      },
      {
        "kind": "listItem",
        "text": "(d) trip movement data; and"
      },
      {
        "kind": "listItem",
        "text": "(e) time-stamped transportation events."
      },
      {
        "kind": "section",
        "text": "5. SOURCES OF PERSONAL DATA"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may obtain personal data from a variety of sources, including:"
      },
      {
        "kind": "subsection",
        "text": "5.1 Information Provided Directly by Users"
      },
      {
        "kind": "paragraph",
        "text": "Personal data provided during registration, onboarding, verification, communications, transactions, and general use of the Platform."
      },
      {
        "kind": "subsection",
        "text": "5.2 Information Generated Through Platform Activity"
      },
      {
        "kind": "paragraph",
        "text": "Information generated through bookings, transportation activities, payments, communications, location tracking, document management, and use of Platform features."
      },
      {
        "kind": "subsection",
        "text": "5.3 Third-Party Verification Providers"
      },
      {
        "kind": "paragraph",
        "text": "Information obtained from identity verification providers, compliance service providers, fraud prevention providers, and similar third-party service providers."
      },
      {
        "kind": "subsection",
        "text": "5.4 Financial Service Providers"
      },
      {
        "kind": "paragraph",
        "text": "Information received from banks, payment processors, wallet providers, escrow service providers, and other financial institutions involved in Platform transactions."
      },
      {
        "kind": "subsection",
        "text": "5.5 Regulatory and Public Sources"
      },
      {
        "kind": "paragraph",
        "text": "Information obtained from regulatory authorities, public registers, government databases, court records, and publicly available sources where legally permitted."
      },
      {
        "kind": "subsection",
        "text": "5.6 Business Partners and Service Providers"
      },
      {
        "kind": "paragraph",
        "text": "Information obtained from logistics partners, insurance providers, fleet managers, transportation service providers, and other organisations involved in the provision of Services."
      },
      {
        "kind": "section",
        "text": "6. PURPOSES OF PROCESSING PERSONAL DATA"
      },
      {
        "kind": "subsection",
        "text": "6.1 General Purposes"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd processes personal data for legitimate business, operational, legal, regulatory, and security purposes in connection with the operation of the Platform and the provision of Services."
      },
      {
        "kind": "subsection",
        "text": "6.2 Account Registration and User Management"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed for the purpose of:"
      },
      {
        "kind": "listItem",
        "text": "(a) creating and managing user accounts;"
      },
      {
        "kind": "listItem",
        "text": "(b) verifying user identities;"
      },
      {
        "kind": "listItem",
        "text": "(c) maintaining user profiles;"
      },
      {
        "kind": "listItem",
        "text": "(d) providing access to Platform features and functionalities; and"
      },
      {
        "kind": "listItem",
        "text": "(e) administering user relationships."
      },
      {
        "kind": "subsection",
        "text": "6.3 Identity Verification and Regulatory Compliance"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed to:"
      },
      {
        "kind": "listItem",
        "text": "(a) conduct Know Your Customer (KYC) procedures;"
      },
      {
        "kind": "listItem",
        "text": "(b) verify identities and business credentials;"
      },
      {
        "kind": "listItem",
        "text": "(c) prevent fraud and identity theft;"
      },
      {
        "kind": "listItem",
        "text": "(d) comply with anti-money laundering requirements and other regulatory obligations; and"
      },
      {
        "kind": "listItem",
        "text": "(e) satisfy requests from competent authorities where required by law."
      },
      {
        "kind": "subsection",
        "text": "6.4 Freight Booking and Logistics Operations"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed to:"
      },
      {
        "kind": "listItem",
        "text": "(a) facilitate freight booking and transportation services;"
      },
      {
        "kind": "listItem",
        "text": "(b) match freight forwarders with truck owners and drivers;"
      },
      {
        "kind": "listItem",
        "text": "(c) coordinate transportation activities;"
      },
      {
        "kind": "listItem",
        "text": "(d) manage logistics operations and cargo movements; and"
      },
      {
        "kind": "listItem",
        "text": "(e) support transaction execution through the Platform."
      },
      {
        "kind": "subsection",
        "text": "6.5 Driver, Vehicle, and Fleet Verification"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed for:"
      },
      {
        "kind": "listItem",
        "text": "(a) verification of driver qualifications;"
      },
      {
        "kind": "listItem",
        "text": "(b) validation of vehicle ownership and registration;"
      },
      {
        "kind": "listItem",
        "text": "(c) monitoring compliance with transportation requirements;"
      },
      {
        "kind": "listItem",
        "text": "(d) fleet management activities; and"
      },
      {
        "kind": "listItem",
        "text": "(e) maintenance of operational records."
      },
      {
        "kind": "subsection",
        "text": "6.6 Trip Monitoring and Location Services"
      },
      {
        "kind": "paragraph",
        "text": "Location and logistics data may be processed for:"
      },
      {
        "kind": "listItem",
        "text": "(a) trip tracking and monitoring;"
      },
      {
        "kind": "listItem",
        "text": "(b) route management and optimisation;"
      },
      {
        "kind": "listItem",
        "text": "(c) geofencing and location-based services;"
      },
      {
        "kind": "listItem",
        "text": "(d) proof of movement and delivery; and"
      },
      {
        "kind": "listItem",
        "text": "(e) security and operational oversight."
      },
      {
        "kind": "subsection",
        "text": "6.7 Payments and Financial Transactions"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed to:"
      },
      {
        "kind": "listItem",
        "text": "(a) facilitate payments and settlements;"
      },
      {
        "kind": "listItem",
        "text": "(b) operate wallet and escrow services;"
      },
      {
        "kind": "listItem",
        "text": "(c) process refunds and reversals where applicable;"
      },
      {
        "kind": "listItem",
        "text": "(d) maintain transaction records; and"
      },
      {
        "kind": "listItem",
        "text": "(e) prevent fraudulent financial activities."
      },
      {
        "kind": "subsection",
        "text": "6.8 Customer Support and Communications"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed to:"
      },
      {
        "kind": "listItem",
        "text": "(a) respond to enquiries and complaints;"
      },
      {
        "kind": "listItem",
        "text": "(b) provide customer support;"
      },
      {
        "kind": "listItem",
        "text": "(c) communicate service updates and notifications;"
      },
      {
        "kind": "listItem",
        "text": "(d) conduct surveys and feedback exercises; and"
      },
      {
        "kind": "listItem",
        "text": "(e) improve user experience."
      },
      {
        "kind": "subsection",
        "text": "6.9 Security, Fraud Prevention, and Risk Management"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed for:"
      },
      {
        "kind": "listItem",
        "text": "(a) detecting and preventing fraud;"
      },
      {
        "kind": "listItem",
        "text": "(b) monitoring suspicious activities;"
      },
      {
        "kind": "listItem",
        "text": "(c) maintaining platform security;"
      },
      {
        "kind": "listItem",
        "text": "(d) investigating incidents and disputes; and"
      },
      {
        "kind": "listItem",
        "text": "(e) protecting users and business operations."
      },
      {
        "kind": "subsection",
        "text": "6.10 Business Improvement and Analytics"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed to:"
      },
      {
        "kind": "listItem",
        "text": "(a) analyse platform usage patterns;"
      },
      {
        "kind": "listItem",
        "text": "(b) improve services and functionality;"
      },
      {
        "kind": "listItem",
        "text": "(c) conduct internal research and reporting;"
      },
      {
        "kind": "listItem",
        "text": "(d) develop new products and services; and"
      },
      {
        "kind": "listItem",
        "text": "(e) support strategic business decisions."
      },
      {
        "kind": "subsection",
        "text": "6.11 Legal and Regulatory Compliance"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed where necessary to:"
      },
      {
        "kind": "listItem",
        "text": "(a) comply with legal obligations;"
      },
      {
        "kind": "listItem",
        "text": "(b) respond to lawful requests from regulators or authorities;"
      },
      {
        "kind": "listItem",
        "text": "(c) enforce contractual rights;"
      },
      {
        "kind": "listItem",
        "text": "(d) establish, exercise, or defend legal claims; and"
      },
      {
        "kind": "listItem",
        "text": "(e) comply with applicable industry standards."
      },
      {
        "kind": "section",
        "text": "7. LEGAL BASIS FOR PROCESSING"
      },
      {
        "kind": "subsection",
        "text": "7.1 Performance of a Contract"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may process personal data where such processing is necessary for the performance of a contract to which a Data Subject is a party, or to take steps at the request of the Data Subject prior to entering into a contract."
      },
      {
        "kind": "paragraph",
        "text": "This includes processing necessary for account creation, freight booking, logistics coordination, payment processing, trip management, and the provision of Services."
      },
      {
        "kind": "subsection",
        "text": "7.2 Compliance with Legal Obligations"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be processed where necessary to comply with legal, regulatory, tax, accounting, anti-money laundering, transportation, and other statutory obligations applicable to Trukkas."
      },
      {
        "kind": "subsection",
        "text": "7.3 Legitimate Interests"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may process personal data where such processing is necessary for its legitimate business interests, provided that such interests do not override the rights and freedoms of Data Subjects."
      },
      {
        "kind": "paragraph",
        "text": "Such interests may include:"
      },
      {
        "kind": "listItem",
        "text": "(a) fraud prevention;"
      },
      {
        "kind": "listItem",
        "text": "(b) platform security;"
      },
      {
        "kind": "listItem",
        "text": "(c) service improvement;"
      },
      {
        "kind": "listItem",
        "text": "(d) business administration;"
      },
      {
        "kind": "listItem",
        "text": "(e) dispute resolution; and"
      },
      {
        "kind": "listItem",
        "text": "(f) risk management."
      },
      {
        "kind": "subsection",
        "text": "7.4 Consent"
      },
      {
        "kind": "paragraph",
        "text": "Where required by applicable law, Trukkas shall obtain the consent of the Data Subject before processing personal data."
      },
      {
        "kind": "paragraph",
        "text": "Where processing is based on consent, the Data Subject may withdraw consent at any time, subject to applicable legal and contractual restrictions."
      },
      {
        "kind": "subsection",
        "text": "7.5 Protection of Vital Interests"
      },
      {
        "kind": "paragraph",
        "text": "In exceptional circumstances, personal data may be processed where necessary to protect the vital interests of a Data Subject or another natural person."
      },
      {
        "kind": "section",
        "text": "8. COOKIES AND TRACKING TECHNOLOGIES"
      },
      {
        "kind": "subsection",
        "text": "8.1 Use of Cookies"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may utilise cookies, web beacons, pixels, software development kits, and similar technologies to enhance functionality, improve user experience, maintain security, and analyse platform usage."
      },
      {
        "kind": "subsection",
        "text": "8.2 Types of Cookies Used"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may use:"
      },
      {
        "kind": "listItem",
        "text": "(a) essential cookies necessary for operation of the Platform;"
      },
      {
        "kind": "listItem",
        "text": "(b) functional cookies that remember user preferences;"
      },
      {
        "kind": "listItem",
        "text": "(c) analytics cookies that assist in understanding platform usage patterns;"
      },
      {
        "kind": "listItem",
        "text": "(d) security cookies designed to protect accounts and detect suspicious activities; and"
      },
      {
        "kind": "listItem",
        "text": "(e) performance cookies used to improve platform efficiency."
      },
      {
        "kind": "subsection",
        "text": "8.3 Purpose of Cookies"
      },
      {
        "kind": "paragraph",
        "text": "Cookies may be used to:"
      },
      {
        "kind": "listItem",
        "text": "(a) authenticate users;"
      },
      {
        "kind": "listItem",
        "text": "(b) maintain user sessions;"
      },
      {
        "kind": "listItem",
        "text": "(c) improve platform performance;"
      },
      {
        "kind": "listItem",
        "text": "(d) analyse user interactions;"
      },
      {
        "kind": "listItem",
        "text": "(e) personalise user experiences; and"
      },
      {
        "kind": "listItem",
        "text": "(f) enhance security measures."
      },
      {
        "kind": "subsection",
        "text": "8.4 Managing Cookie Preferences"
      },
      {
        "kind": "paragraph",
        "text": "Users may manage or disable cookies through browser or device settings. However, disabling certain cookies may affect the availability or functionality of parts of the Platform."
      },
      {
        "kind": "subsection",
        "text": "8.5 Third-Party Analytics Tools"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may utilise third-party analytics and performance monitoring tools that collect information regarding Platform usage in accordance with their respective privacy policies."
      },
      {
        "kind": "section",
        "text": "9. DATA SHARING AND DISCLOSURE"
      },
      {
        "kind": "subsection",
        "text": "9.1 General Principle"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas does not sell personal data. Personal data shall only be shared where necessary for legitimate business purposes, legal compliance, or the provision of Services."
      },
      {
        "kind": "subsection",
        "text": "9.2 Internal Access"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be accessed by authorised employees, contractors, consultants, and representatives of Trukkas strictly on a need-to-know basis."
      },
      {
        "kind": "subsection",
        "text": "9.3 Third-Party Service Providers"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be shared with:"
      },
      {
        "kind": "listItem",
        "text": "(a) cloud hosting providers;"
      },
      {
        "kind": "listItem",
        "text": "(b) payment processors;"
      },
      {
        "kind": "listItem",
        "text": "(c) wallet and escrow providers;"
      },
      {
        "kind": "listItem",
        "text": "(d) communication service providers;"
      },
      {
        "kind": "listItem",
        "text": "(e) identity verification providers;"
      },
      {
        "kind": "listItem",
        "text": "(f) fraud prevention providers; and"
      },
      {
        "kind": "listItem",
        "text": "(g) technology and infrastructure providers."
      },
      {
        "kind": "subsection",
        "text": "9.4 Logistics and Business Partners"
      },
      {
        "kind": "paragraph",
        "text": "Where necessary to facilitate transportation and logistics services, personal data may be shared with freight forwarders, truck owners, drivers, fleet managers, logistics partners, and service providers involved in a transaction."
      },
      {
        "kind": "subsection",
        "text": "9.5 Professional Advisers"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be disclosed to auditors, legal advisers, consultants, insurers, and other professional advisers where reasonably necessary."
      },
      {
        "kind": "subsection",
        "text": "9.6 Legal and Regulatory Disclosures"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be disclosed to:"
      },
      {
        "kind": "listItem",
        "text": "(a) regulatory authorities;"
      },
      {
        "kind": "listItem",
        "text": "(b) law enforcement agencies;"
      },
      {
        "kind": "listItem",
        "text": "(c) courts and tribunals; and"
      },
      {
        "kind": "listItem",
        "text": "(d) government agencies,"
      },
      {
        "kind": "paragraph",
        "text": "where required by applicable law or lawful request."
      },
      {
        "kind": "subsection",
        "text": "9.7 Corporate Transactions"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be transferred as part of a merger, acquisition, investment, restructuring, financing transaction, asset sale, or similar corporate transaction, subject to appropriate safeguards."
      },
      {
        "kind": "section",
        "text": "10. THIRD-PARTY SERVICES"
      },
      {
        "kind": "subsection",
        "text": "10.1 Third-Party Integrations"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may integrate with third-party services, software applications, payment gateways, mapping services, cloud infrastructure providers, communication providers, and other technology partners."
      },
      {
        "kind": "subsection",
        "text": "10.2 Independent Third Parties"
      },
      {
        "kind": "paragraph",
        "text": "Such third-party services operate independently and may be subject to their own privacy policies, terms of use, and contractual arrangements."
      },
      {
        "kind": "subsection",
        "text": "10.3 External Links"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may contain links to websites, applications, or services operated by third parties. Trukkas does not control and is not responsible for the content, security, or privacy practices of such third parties."
      },
      {
        "kind": "subsection",
        "text": "10.4 Third-Party Privacy Practices"
      },
      {
        "kind": "paragraph",
        "text": "Users are encouraged to review the privacy policies of third-party service providers before providing personal data to such providers."
      },
      {
        "kind": "subsection",
        "text": "10.5 Limitation of Responsibility"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall not be responsible for the collection, processing, storage, disclosure, or security of personal data by third-party services that operate independently of the Platform."
      },
      {
        "kind": "section",
        "text": "11. INTERNATIONAL DATA TRANSFERS"
      },
      {
        "kind": "subsection",
        "text": "11.1 Cross-Border Processing"
      },
      {
        "kind": "paragraph",
        "text": "In the course of operating the Platform and providing the Services, Trukkas Global Logistics and Supply Ltd may transfer, store, process, or permit access to personal data outside the Federal Republic of Nigeria."
      },
      {
        "kind": "paragraph",
        "text": "Such transfers may occur where Trukkas utilises cloud infrastructure providers, technology service providers, payment processors, communication service providers, analytics providers, or other business partners located in foreign jurisdictions."
      },
      {
        "kind": "subsection",
        "text": "11.2 Circumstances of Transfer"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be transferred internationally for purposes including:"
      },
      {
        "kind": "listItem",
        "text": "(a) cloud hosting and data storage;"
      },
      {
        "kind": "listItem",
        "text": "(b) disaster recovery and business continuity operations;"
      },
      {
        "kind": "listItem",
        "text": "(c) payment processing and financial services;"
      },
      {
        "kind": "listItem",
        "text": "(d) customer support services;"
      },
      {
        "kind": "listItem",
        "text": "(e) technology infrastructure management;"
      },
      {
        "kind": "listItem",
        "text": "(f) fraud prevention and security monitoring; and"
      },
      {
        "kind": "listItem",
        "text": "(g) other legitimate business operations necessary for the provision of the Services."
      },
      {
        "kind": "subsection",
        "text": "11.3 Safeguards for International Transfers"
      },
      {
        "kind": "paragraph",
        "text": "Where personal data is transferred outside Nigeria, Trukkas shall implement appropriate safeguards designed to ensure an adequate level of protection for personal data, including:"
      },
      {
        "kind": "listItem",
        "text": "(a) contractual safeguards with data recipients;"
      },
      {
        "kind": "listItem",
        "text": "(b) data processing agreements;"
      },
      {
        "kind": "listItem",
        "text": "(c) technical and organisational security measures;"
      },
      {
        "kind": "listItem",
        "text": "(d) transfer mechanisms recognised under applicable law; and"
      },
      {
        "kind": "listItem",
        "text": "(e) any additional measures required under the Nigeria Data Protection Act, 2023."
      },
      {
        "kind": "subsection",
        "text": "11.4 Compliance with Applicable Law"
      },
      {
        "kind": "paragraph",
        "text": "All international transfers of personal data shall be carried out in accordance with the Nigeria Data Protection Act, 2023, regulations issued by the Nigeria Data Protection Commission, and any other applicable legal requirements."
      },
      {
        "kind": "section",
        "text": "12. DATA RETENTION"
      },
      {
        "kind": "subsection",
        "text": "12.1 Retention Principles"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas retains personal data only for as long as is reasonably necessary to fulfil the purposes for which the data was collected, including operational, contractual, legal, regulatory, security, audit, and dispute resolution purposes."
      },
      {
        "kind": "subsection",
        "text": "12.2 Retention Criteria"
      },
      {
        "kind": "paragraph",
        "text": "The duration for which personal data is retained may depend on factors including:"
      },
      {
        "kind": "listItem",
        "text": "(a) the nature of the personal data;"
      },
      {
        "kind": "listItem",
        "text": "(b) the purpose of processing;"
      },
      {
        "kind": "listItem",
        "text": "(c) contractual obligations;"
      },
      {
        "kind": "listItem",
        "text": "(d) regulatory requirements;"
      },
      {
        "kind": "listItem",
        "text": "(e) applicable limitation periods;"
      },
      {
        "kind": "listItem",
        "text": "(f) litigation or dispute risks; and"
      },
      {
        "kind": "listItem",
        "text": "(g) legitimate business needs."
      },
      {
        "kind": "subsection",
        "text": "12.3 Regulatory Retention Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Certain categories of personal data and transaction records may be retained for longer periods where required by applicable laws, regulations, taxation requirements, transportation regulations, anti-money laundering obligations, audit requirements, or governmental directives."
      },
      {
        "kind": "subsection",
        "text": "12.4 Deletion and Destruction"
      },
      {
        "kind": "paragraph",
        "text": "Where personal data is no longer required for the purposes for which it was collected and there is no legal basis for continued retention, Trukkas shall take reasonable steps to securely delete, destroy, or permanently anonymise such data."
      },
      {
        "kind": "subsection",
        "text": "12.5 Archived Information"
      },
      {
        "kind": "paragraph",
        "text": "Personal data may be retained in secure archived systems where necessary for legal compliance, disaster recovery, historical record keeping, business continuity, or dispute resolution purposes."
      },
      {
        "kind": "section",
        "text": "13. DATA SECURITY"
      },
      {
        "kind": "subsection",
        "text": "13.1 Commitment to Security"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd implements appropriate technical, organisational, administrative, and physical measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure, misuse, or access."
      },
      {
        "kind": "subsection",
        "text": "13.2 Security Measures"
      },
      {
        "kind": "paragraph",
        "text": "Security measures implemented by Trukkas may include:"
      },
      {
        "kind": "listItem",
        "text": "(a) encryption of personal data during transmission and storage;"
      },
      {
        "kind": "listItem",
        "text": "(b) role-based access controls;"
      },
      {
        "kind": "listItem",
        "text": "(c) authentication and identity management systems;"
      },
      {
        "kind": "listItem",
        "text": "(d) network security controls;"
      },
      {
        "kind": "listItem",
        "text": "(e) firewall and intrusion detection systems;"
      },
      {
        "kind": "listItem",
        "text": "(f) security monitoring tools;"
      },
      {
        "kind": "listItem",
        "text": "(g) data backup procedures; and"
      },
      {
        "kind": "listItem",
        "text": "(h) business continuity and disaster recovery mechanisms."
      },
      {
        "kind": "subsection",
        "text": "13.3 Access Controls"
      },
      {
        "kind": "paragraph",
        "text": "Access to personal data is restricted to authorised personnel, contractors, consultants, and service providers who require such access for legitimate business purposes and who are subject to appropriate confidentiality obligations."
      },
      {
        "kind": "subsection",
        "text": "13.4 Monitoring and Auditing"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may monitor, log, and audit access to systems and personal data to detect unauthorised activities, investigate incidents, and maintain security."
      },
      {
        "kind": "subsection",
        "text": "13.5 Security Limitations"
      },
      {
        "kind": "paragraph",
        "text": "While Trukkas takes reasonable measures to protect personal data, no method of transmission over the internet or electronic storage system can be guaranteed to be completely secure. Accordingly, Trukkas cannot guarantee absolute security of personal data."
      },
      {
        "kind": "section",
        "text": "14. DATA SUBJECT RIGHTS"
      },
      {
        "kind": "subsection",
        "text": "14.1 Rights Under Applicable Law"
      },
      {
        "kind": "paragraph",
        "text": "Subject to applicable legal limitations and verification requirements, Data Subjects may exercise the rights available under the Nigeria Data Protection Act, 2023."
      },
      {
        "kind": "subsection",
        "text": "14.2 Right of Access"
      },
      {
        "kind": "paragraph",
        "text": "Data Subjects may request confirmation as to whether personal data relating to them is being processed and may request access to such personal data."
      },
      {
        "kind": "subsection",
        "text": "14.3 Right to Rectification"
      },
      {
        "kind": "paragraph",
        "text": "Data Subjects may request correction of inaccurate, incomplete, misleading, or outdated personal data."
      },
      {
        "kind": "subsection",
        "text": "14.4 Right to Erasure"
      },
      {
        "kind": "paragraph",
        "text": "Data Subjects may request deletion of personal data where:"
      },
      {
        "kind": "listItem",
        "text": "(a) the data is no longer necessary for the purpose for which it was collected;"
      },
      {
        "kind": "listItem",
        "text": "(b) consent has been withdrawn and no other legal basis exists for processing;"
      },
      {
        "kind": "listItem",
        "text": "(c) the processing is unlawful; or"
      },
      {
        "kind": "listItem",
        "text": "(d) applicable law otherwise permits deletion."
      },
      {
        "kind": "subsection",
        "text": "14.5 Right to Restriction of Processing"
      },
      {
        "kind": "paragraph",
        "text": "Data Subjects may request restriction of processing in circumstances recognised by applicable law."
      },
      {
        "kind": "subsection",
        "text": "14.6 Right to Data Portability"
      },
      {
        "kind": "paragraph",
        "text": "Where applicable, Data Subjects may request that personal data be provided in a structured, commonly used, and machine-readable format."
      },
      {
        "kind": "subsection",
        "text": "14.7 Right to Object"
      },
      {
        "kind": "paragraph",
        "text": "Data Subjects may object to the processing of personal data in circumstances permitted under applicable law."
      },
      {
        "kind": "subsection",
        "text": "14.8 Right to Withdraw Consent"
      },
      {
        "kind": "paragraph",
        "text": "Where processing is based on consent, Data Subjects may withdraw such consent at any time without affecting the lawfulness of processing conducted before withdrawal."
      },
      {
        "kind": "subsection",
        "text": "14.9 Right to Lodge Complaints"
      },
      {
        "kind": "paragraph",
        "text": "Data Subjects have the right to submit complaints to the Nigeria Data Protection Commission or any other competent authority where they believe their rights have been violated."
      },
      {
        "kind": "subsection",
        "text": "14.10 Exercising Rights"
      },
      {
        "kind": "paragraph",
        "text": "Requests relating to Data Subject rights may be submitted through the contact details provided in this Privacy Policy and shall be handled in accordance with applicable legal requirements."
      },
      {
        "kind": "section",
        "text": "15. AUTOMATED DECISION-MAKING"
      },
      {
        "kind": "subsection",
        "text": "15.1 Use of Automated Systems"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may utilise automated systems, algorithms, analytics tools, and technology solutions to support operational activities on the Platform."
      },
      {
        "kind": "paragraph",
        "text": "Such activities may include:"
      },
      {
        "kind": "listItem",
        "text": "(a) freight matching;"
      },
      {
        "kind": "listItem",
        "text": "(b) truck allocation;"
      },
      {
        "kind": "listItem",
        "text": "(c) bidding and pricing mechanisms;"
      },
      {
        "kind": "listItem",
        "text": "(d) route optimisation;"
      },
      {
        "kind": "listItem",
        "text": "(e) fraud detection;"
      },
      {
        "kind": "listItem",
        "text": "(f) risk assessment; and"
      },
      {
        "kind": "listItem",
        "text": "(g) compliance monitoring."
      },
      {
        "kind": "subsection",
        "text": "15.2 Purpose of Automated Processing"
      },
      {
        "kind": "paragraph",
        "text": "Automated processing may be used to improve operational efficiency, enhance service delivery, strengthen security measures, and optimise user experience."
      },
      {
        "kind": "subsection",
        "text": "15.3 Human Oversight"
      },
      {
        "kind": "paragraph",
        "text": "Where appropriate, Trukkas shall implement human oversight mechanisms in relation to significant automated decisions affecting Data Subjects."
      },
      {
        "kind": "subsection",
        "text": "15.4 Rights of Data Subjects"
      },
      {
        "kind": "paragraph",
        "text": "Where required under applicable law, Data Subjects may request information regarding automated decision-making processes and may request human review of decisions that significantly affect them."
      },
      {
        "kind": "section",
        "text": "16. CHILDREN'S PRIVACY"
      },
      {
        "kind": "subsection",
        "text": "16.1 Platform Not Intended for Children"
      },
      {
        "kind": "paragraph",
        "text": "The Trukkas Platform and Services are intended solely for individuals who are eighteen (18) years of age or older and who possess the legal capacity to enter into binding contractual arrangements."
      },
      {
        "kind": "subsection",
        "text": "16.2 No Knowing Collection of Children's Data"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd does not knowingly collect, solicit, process, or store personal data relating to children or minors under the age of eighteen (18) years."
      },
      {
        "kind": "subsection",
        "text": "16.3 Inadvertent Collection"
      },
      {
        "kind": "paragraph",
        "text": "Where Trukkas becomes aware that personal data relating to a child has been collected inadvertently or without appropriate authorisation, Trukkas shall take reasonable steps to investigate the matter and, where appropriate, delete such information in accordance with applicable legal requirements."
      },
      {
        "kind": "subsection",
        "text": "16.4 Parental or Guardian Notification"
      },
      {
        "kind": "paragraph",
        "text": "Where applicable law requires parental or guardian consent for the processing of personal data relating to minors, Trukkas reserves the right to request evidence of such consent before permitting access to any relevant services."
      },
      {
        "kind": "section",
        "text": "17. DATA PROCESSORS AND SUB-PROCESSORS"
      },
      {
        "kind": "subsection",
        "text": "17.1 Engagement of Data Processors"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may engage third-party service providers, contractors, consultants, technology partners, cloud service providers, payment processors, communication service providers, and other entities to process personal data on its behalf in connection with the operation of the Platform and the provision of Services."
      },
      {
        "kind": "subsection",
        "text": "17.2 Due Diligence and Selection"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall take reasonable steps to assess the suitability, reliability, competence, and security practices of Data Processors before engaging them to process personal data."
      },
      {
        "kind": "subsection",
        "text": "17.3 Contractual Safeguards"
      },
      {
        "kind": "paragraph",
        "text": "Where personal data is processed on behalf of Trukkas, appropriate contractual arrangements shall be implemented to ensure that such Data Processors:"
      },
      {
        "kind": "listItem",
        "text": "(a) process personal data only on documented instructions from Trukkas;"
      },
      {
        "kind": "listItem",
        "text": "(b) maintain appropriate confidentiality obligations;"
      },
      {
        "kind": "listItem",
        "text": "(c) implement adequate technical and organisational security measures;"
      },
      {
        "kind": "listItem",
        "text": "(d) comply with applicable data protection laws; and"
      },
      {
        "kind": "listItem",
        "text": "(e) assist Trukkas in meeting its legal and regulatory obligations where required."
      },
      {
        "kind": "subsection",
        "text": "17.4 Use of Sub-Processors"
      },
      {
        "kind": "paragraph",
        "text": "Data Processors engaged by Trukkas may appoint sub-processors where necessary for the provision of services, provided that appropriate safeguards are maintained and the protection of personal data is not diminished."
      },
      {
        "kind": "subsection",
        "text": "17.5 Oversight and Accountability"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall maintain reasonable oversight mechanisms designed to monitor compliance by Data Processors and Sub-Processors with applicable contractual and legal obligations relating to personal data."
      },
      {
        "kind": "section",
        "text": "18. PERSONAL DATA BREACHES"
      },
      {
        "kind": "subsection",
        "text": "18.1 Security Incident Management"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas maintains policies, procedures, and response mechanisms designed to identify, investigate, contain, manage, and remediate actual or suspected Personal Data Breaches."
      },
      {
        "kind": "subsection",
        "text": "18.2 Detection and Investigation"
      },
      {
        "kind": "paragraph",
        "text": "Where a Personal Data Breach is suspected or identified, Trukkas shall take reasonable steps to:"
      },
      {
        "kind": "listItem",
        "text": "(a) investigate the nature and scope of the incident;"
      },
      {
        "kind": "listItem",
        "text": "(b) assess the categories of personal data affected;"
      },
      {
        "kind": "listItem",
        "text": "(c) evaluate the risks posed to affected Data Subjects; and"
      },
      {
        "kind": "listItem",
        "text": "(d) implement measures to contain and mitigate the impact of the incident."
      },
      {
        "kind": "subsection",
        "text": "18.3 Regulatory Notification"
      },
      {
        "kind": "paragraph",
        "text": "Where required by applicable law, Trukkas shall notify the Nigeria Data Protection Commission and other competent authorities of a Personal Data Breach within the timeframes prescribed by law."
      },
      {
        "kind": "subsection",
        "text": "18.4 Notification of Data Subjects"
      },
      {
        "kind": "paragraph",
        "text": "Where a Personal Data Breach is likely to result in a significant risk to the rights and freedoms of affected Data Subjects, Trukkas may notify affected individuals in accordance with applicable legal requirements."
      },
      {
        "kind": "subsection",
        "text": "18.5 Remedial Measures"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may implement corrective actions, security enhancements, recovery procedures, and other remedial measures designed to prevent recurrence and strengthen the protection of personal data."
      },
      {
        "kind": "section",
        "text": "19. CHANGES TO THIS PRIVACY POLICY"
      },
      {
        "kind": "subsection",
        "text": "19.1 Right to Amend"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd reserves the right to amend, modify, update, replace, or revise this Privacy Policy at any time to reflect changes in applicable laws, regulatory requirements, business operations, technology, industry standards, or data processing activities."
      },
      {
        "kind": "subsection",
        "text": "19.2 Notification of Changes"
      },
      {
        "kind": "paragraph",
        "text": "Where material changes are made to this Privacy Policy, Trukkas may provide notice through the Platform, email communications, mobile application notifications, website announcements, or any other reasonable means."
      },
      {
        "kind": "subsection",
        "text": "19.3 Continued Use of the Platform"
      },
      {
        "kind": "paragraph",
        "text": "Continued use of the Platform following the effective date of an updated Privacy Policy shall constitute acknowledgement of the revised Privacy Policy, subject to any consent requirements imposed by applicable law."
      },
      {
        "kind": "subsection",
        "text": "19.4 Effective Date"
      },
      {
        "kind": "paragraph",
        "text": "The most current version of this Privacy Policy shall be published on the Platform and shall indicate the date on which it became effective."
      },
      {
        "kind": "section",
        "text": "20. CONTACT INFORMATION"
      },
      {
        "kind": "paragraph",
        "text": "For questions, complaints, requests, concerns, or enquiries relating to this Privacy Policy or the processing of personal data, Data Subjects may contact:"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd"
      },
      {
        "kind": "paragraph",
        "text": "Platform: Trukkas"
      },
      {
        "kind": "paragraph",
        "text": "Website: www.trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Privacy Email: privacy@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Legal Email: legal@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Registered Office: Lagos, Nigeria"
      },
      {
        "kind": "subsection",
        "text": "20.1 Data Subject Requests"
      },
      {
        "kind": "paragraph",
        "text": "Requests relating to access, correction, deletion, restriction, portability, objection, withdrawal of consent, or any other data protection right may be submitted through the contact details provided above."
      },
      {
        "kind": "subsection",
        "text": "20.2 Regulatory Complaints"
      },
      {
        "kind": "paragraph",
        "text": "Data Subjects who are dissatisfied with the manner in which their personal data has been processed may lodge a complaint with the relevant supervisory authority, including the Nigeria Data Protection Commission, without prejudice to any other legal rights or remedies available to them."
      },
      {
        "kind": "subsection",
        "text": "20.3 Response to Enquiries"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall use reasonable efforts to respond to legitimate privacy-related enquiries and requests within the timelines prescribed by applicable law."
      }
    ]
  },
  {
    "slug": "terms-of-use",
    "title": "TERMS OF USE",
    "eyebrow": "Legal",
    "description": "Trukkas Platform (www.trukkas.com)",
    "sourceFile": "TERMS OF USE - TRUKKAS.docx",
    "updatedLabel": "Last updated: June 13, 2026",
    "content": [
      {
        "kind": "title",
        "text": "TERMS OF USE"
      },
      {
        "kind": "subtitle",
        "text": "Trukkas Platform (www.trukkas.com)"
      },
      {
        "kind": "section",
        "text": "1. INTRODUCTION"
      },
      {
        "kind": "paragraph",
        "text": "These Terms of Use (\"Terms\") govern access to and use of the Trukkas platform, including the website located at www.trukkas.com, mobile applications, administrative dashboards, and all related services, features, content, and functionalities made available through the platform (collectively referred to as the \"Platform\")."
      },
      {
        "kind": "paragraph",
        "text": "The Platform is owned and operated by Trukkas Global Logistics and Supply Ltd (\"Trukkas\", \"we\", \"us\", or \"our\"), a company duly incorporated under the laws of the Federal Republic of Nigeria."
      },
      {
        "kind": "paragraph",
        "text": "The Platform is designed to facilitate freight forwarding, trucking, logistics coordination, trip monitoring, document management, payment facilitation, and related services between freight forwarders, truck owners, drivers, and other logistics stakeholders."
      },
      {
        "kind": "paragraph",
        "text": "By accessing, registering on, or using the Platform, you acknowledge that you have read, understood, and agreed to be bound by these Terms and any other policies, guidelines, or notices incorporated herein by reference, including the Privacy Policy."
      },
      {
        "kind": "paragraph",
        "text": "If you do not agree with these Terms, you must not access or use the Platform."
      },
      {
        "kind": "section",
        "text": "2. DEFINITIONS AND INTERPRETATION"
      },
      {
        "kind": "paragraph",
        "text": "In these Terms, unless the context otherwise requires:"
      },
      {
        "kind": "paragraph",
        "text": "\"Account\" means a registered user profile created on the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Booking\" means a freight transportation request, assignment, or logistics engagement initiated through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Cargo\" means any goods, products, materials, containers, equipment, or items transported or intended to be transported through services arranged on the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Content\" means any information, text, images, documents, data, software, graphics, videos, or other materials uploaded, submitted, generated, or displayed on the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Driver\" means an individual authorised to operate a vehicle for the transportation of cargo and registered on the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Freight Forwarder\" means a person or organisation that arranges or coordinates the transportation of cargo through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Job\" means any transportation, haulage, logistics, delivery, or related assignment posted, offered, accepted, or completed through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Platform\" means the Trukkas website, mobile applications, software systems, and all related services operated by Trukkas Global Logistics and Supply Ltd."
      },
      {
        "kind": "paragraph",
        "text": "\"Services\" means all services made available through the Platform, including freight booking, truck sourcing, bidding, tracking, document management, payment facilitation, and related logistics services."
      },
      {
        "kind": "paragraph",
        "text": "\"Truck Owner\" means a person or organisation that owns, manages, or controls one or more trucks made available through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"User\" means any individual, company, partnership, organisation, or other entity that accesses or uses the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Wallet\" means a digital account maintained on the Platform for the receipt, holding, transfer, or settlement of funds."
      },
      {
        "kind": "paragraph",
        "text": "Words importing the singular include the plural and vice versa, and references to persons include individuals, partnerships, companies, and other legal entities."
      },
      {
        "kind": "section",
        "text": "3. ELIGIBILITY AND ACCOUNT REGISTRATION"
      },
      {
        "kind": "subsection",
        "text": "3.1 Eligibility"
      },
      {
        "kind": "paragraph",
        "text": "To use the Platform, a User must:"
      },
      {
        "kind": "listItem",
        "text": "(a) be at least eighteen (18) years of age;"
      },
      {
        "kind": "listItem",
        "text": "(b) possess the legal capacity and authority to enter into binding agreements;"
      },
      {
        "kind": "listItem",
        "text": "(c) where acting on behalf of a company or organisation, have authority to bind such company or organisation; and"
      },
      {
        "kind": "listItem",
        "text": "(d) comply with all applicable laws, regulations, and licensing requirements relevant to the use of the Platform."
      },
      {
        "kind": "subsection",
        "text": "3.2 Account Registration"
      },
      {
        "kind": "paragraph",
        "text": "Access to certain Services may require the creation of an Account."
      },
      {
        "kind": "paragraph",
        "text": "Users shall provide complete, accurate, current, and truthful information during registration and shall promptly update such information whenever necessary."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to verify information provided by Users and to request additional documentation or information at any time."
      },
      {
        "kind": "subsection",
        "text": "3.3 Account Security"
      },
      {
        "kind": "paragraph",
        "text": "Users are responsible for maintaining the confidentiality of their login credentials and for all activities conducted through their Accounts."
      },
      {
        "kind": "paragraph",
        "text": "Users shall immediately notify Trukkas of any unauthorised use of their Account or any suspected security breach."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall not be liable for losses resulting from a User's failure to safeguard Account credentials."
      },
      {
        "kind": "subsection",
        "text": "3.4 Account Suspension and Refusal"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to refuse registration, suspend Accounts, restrict access, or terminate Accounts where it reasonably believes that a User has provided false information, breached these Terms, engaged in unlawful conduct, or posed a risk to the integrity of the Platform."
      },
      {
        "kind": "section",
        "text": "4. DESCRIPTION OF SERVICES"
      },
      {
        "kind": "subsection",
        "text": "4.1 Platform Services"
      },
      {
        "kind": "paragraph",
        "text": "The Platform provides technology-enabled solutions designed to facilitate interactions between freight forwarders, truck owners, drivers, and logistics stakeholders."
      },
      {
        "kind": "paragraph",
        "text": "Services available through the Platform may include:"
      },
      {
        "kind": "listItem",
        "text": "(a) freight booking and job creation;"
      },
      {
        "kind": "listItem",
        "text": "(b) truck sourcing and matching;"
      },
      {
        "kind": "listItem",
        "text": "(c) bidding and rate negotiation mechanisms;"
      },
      {
        "kind": "listItem",
        "text": "(d) trip scheduling and coordination;"
      },
      {
        "kind": "listItem",
        "text": "(e) GPS tracking and route monitoring;"
      },
      {
        "kind": "listItem",
        "text": "(f) logistics document management;"
      },
      {
        "kind": "listItem",
        "text": "(g) payment and escrow facilitation;"
      },
      {
        "kind": "listItem",
        "text": "(h) notifications, reporting, and operational support tools; and"
      },
      {
        "kind": "listItem",
        "text": "(i) such other services as may be introduced from time to time."
      },
      {
        "kind": "subsection",
        "text": "4.2 Platform Role"
      },
      {
        "kind": "paragraph",
        "text": "The Platform serves primarily as a technology marketplace and facilitation platform."
      },
      {
        "kind": "paragraph",
        "text": "Unless expressly stated otherwise, Trukkas does not act as a carrier, transporter, freight forwarder, customs agent, logistics operator, employer, or agent of any User."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas does not take possession of cargo, operate vehicles, employ drivers, or guarantee the performance of any User."
      },
      {
        "kind": "subsection",
        "text": "4.3 No Guarantee of Transactions"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas does not guarantee:"
      },
      {
        "kind": "listItem",
        "text": "(a) the availability of freight opportunities;"
      },
      {
        "kind": "listItem",
        "text": "(b) the availability of trucks or drivers;"
      },
      {
        "kind": "listItem",
        "text": "(c) the completion of any transaction;"
      },
      {
        "kind": "listItem",
        "text": "(d) the quality, safety, legality, or suitability of cargo, vehicles, or services offered by Users; or"
      },
      {
        "kind": "listItem",
        "text": "(e) uninterrupted or error-free operation of the Platform."
      },
      {
        "kind": "section",
        "text": "5. USER CATEGORIES AND RESPONSIBILITIES"
      },
      {
        "kind": "subsection",
        "text": "5.1 Freight Forwarders"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall:"
      },
      {
        "kind": "listItem",
        "text": "(a) provide accurate and complete information regarding cargo and transportation requirements;"
      },
      {
        "kind": "listItem",
        "text": "(b) ensure that cargo descriptions, dimensions, weights, and delivery requirements are accurate;"
      },
      {
        "kind": "listItem",
        "text": "(c) comply with all applicable customs, transportation, importation, exportation, and regulatory requirements;"
      },
      {
        "kind": "listItem",
        "text": "(d) ensure that cargo transported through the Platform is lawful and does not contain prohibited or dangerous goods except where properly disclosed and authorised; and"
      },
      {
        "kind": "listItem",
        "text": "(e) make payments when due in accordance with the applicable transaction terms."
      },
      {
        "kind": "subsection",
        "text": "5.2 Truck Owners"
      },
      {
        "kind": "paragraph",
        "text": "Truck Owners shall:"
      },
      {
        "kind": "listItem",
        "text": "(a) maintain vehicles in a roadworthy and safe condition;"
      },
      {
        "kind": "listItem",
        "text": "(b) ensure that all vehicles possess valid licences, permits, registrations, inspections, and insurance coverage required by law;"
      },
      {
        "kind": "listItem",
        "text": "(c) ensure that drivers engaged through the Platform are properly qualified and authorised;"
      },
      {
        "kind": "listItem",
        "text": "(d) comply with all applicable transportation, safety, environmental, and regulatory requirements; and"
      },
      {
        "kind": "listItem",
        "text": "(e) maintain accurate fleet and vehicle information on the Platform."
      },
      {
        "kind": "subsection",
        "text": "5.3 Drivers"
      },
      {
        "kind": "paragraph",
        "text": "Drivers registered on the Platform shall:"
      },
      {
        "kind": "listItem",
        "text": "(a) possess valid driver's licences and any other legally required permits or authorisations;"
      },
      {
        "kind": "listItem",
        "text": "(b) comply with all applicable traffic, transportation, and safety regulations;"
      },
      {
        "kind": "listItem",
        "text": "(c) exercise reasonable care in handling cargo and performing transportation services;"
      },
      {
        "kind": "listItem",
        "text": "(d) provide accurate trip updates and delivery information through the Platform where required; and"
      },
      {
        "kind": "listItem",
        "text": "(e) conduct themselves professionally and responsibly when interacting with Users and third parties."
      },
      {
        "kind": "subsection",
        "text": "5.4 General User Obligations"
      },
      {
        "kind": "paragraph",
        "text": "All Users shall use the Platform lawfully, responsibly, and in accordance with these Terms and shall not engage in conduct that may damage, disrupt, compromise, or interfere with the operation, security, or reputation of the Platform."
      },
      {
        "kind": "section",
        "text": "6. KNOW YOUR CUSTOMER (KYC) AND VERIFICATION"
      },
      {
        "kind": "subsection",
        "text": "6.1 Verification Requirements"
      },
      {
        "kind": "paragraph",
        "text": "In order to promote safety, trust, regulatory compliance, and the integrity of the Platform, Trukkas may require Users to undergo identity verification, business verification, vehicle verification, and other due diligence procedures before granting access to certain Services."
      },
      {
        "kind": "subsection",
        "text": "6.2 Information and Documentation"
      },
      {
        "kind": "paragraph",
        "text": "Users may be required to submit information and documentation including, but not limited to:"
      },
      {
        "kind": "listItem",
        "text": "(a) government-issued identification documents;"
      },
      {
        "kind": "listItem",
        "text": "(b) driver's licences;"
      },
      {
        "kind": "listItem",
        "text": "(c) vehicle registration documents;"
      },
      {
        "kind": "listItem",
        "text": "(d) proof of address;"
      },
      {
        "kind": "listItem",
        "text": "(e) corporate registration documents and Corporate Affairs Commission records;"
      },
      {
        "kind": "listItem",
        "text": "(f) tax identification information; and"
      },
      {
        "kind": "listItem",
        "text": "(g) any other information reasonably required for verification purposes."
      },
      {
        "kind": "subsection",
        "text": "6.3 Ongoing Verification"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to conduct periodic reviews, request updated documentation, and perform ongoing verification checks to ensure continued compliance with applicable laws, regulations, and Platform requirements."
      },
      {
        "kind": "subsection",
        "text": "6.4 Failure to Complete Verification"
      },
      {
        "kind": "paragraph",
        "text": "Where a User fails to provide requested information, provides inaccurate information, or fails to satisfy verification requirements, Trukkas may refuse registration, suspend access to the Platform, restrict certain Services, or terminate the User's Account."
      },
      {
        "kind": "subsection",
        "text": "6.5 Fraud Prevention"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to investigate suspicious activities and cooperate with law enforcement agencies, regulatory authorities, insurers, and other relevant parties in connection with fraud prevention, financial crimes investigations, or regulatory compliance matters."
      },
      {
        "kind": "section",
        "text": "7. BOOKINGS, BIDDING, AND JOB ALLOCATION"
      },
      {
        "kind": "subsection",
        "text": "7.1 Creation of Jobs"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders may create and publish transportation requests or Jobs through the Platform by providing all information reasonably required to facilitate transportation services."
      },
      {
        "kind": "paragraph",
        "text": "Users shall ensure that all information submitted in connection with a Job is accurate, complete, and up to date."
      },
      {
        "kind": "subsection",
        "text": "7.2 Bidding Process"
      },
      {
        "kind": "paragraph",
        "text": "Truck Owners may submit bids in response to available Jobs through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "The Platform may facilitate negotiations, counter-offers, and communications between Users regarding pricing, schedules, routes, and other transportation requirements."
      },
      {
        "kind": "subsection",
        "text": "7.3 Acceptance and Formation of Transactions"
      },
      {
        "kind": "paragraph",
        "text": "A transaction shall be deemed formed when a Freight Forwarder accepts a bid or otherwise confirms a transportation arrangement through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "Once accepted, the parties involved shall be responsible for performing their respective obligations relating to the transaction."
      },
      {
        "kind": "subsection",
        "text": "7.4 Cancellation and Modification"
      },
      {
        "kind": "paragraph",
        "text": "Bookings may only be cancelled or modified in accordance with applicable Platform policies."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to impose cancellation restrictions, fees, penalties, or other measures designed to discourage abuse of the Platform."
      },
      {
        "kind": "subsection",
        "text": "7.5 Platform Discretion"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to suspend, remove, reject, or cancel any Job, bid, or transaction where it reasonably believes that such activity violates these Terms, applicable laws, or Platform policies."
      },
      {
        "kind": "section",
        "text": "8. PAYMENTS, WALLETS, AND ESCROW SERVICES"
      },
      {
        "kind": "subsection",
        "text": "8.1 Digital Wallet Services"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may provide digital wallet functionality for the receipt, holding, transfer, and settlement of transaction funds."
      },
      {
        "kind": "paragraph",
        "text": "Users acknowledge that wallet services may be provided through regulated third-party payment service providers."
      },
      {
        "kind": "subsection",
        "text": "8.2 Escrow Arrangements"
      },
      {
        "kind": "paragraph",
        "text": "Where escrow services are made available, funds may be held in escrow pending completion of agreed milestones, delivery obligations, proof of delivery requirements, or other transaction conditions."
      },
      {
        "kind": "paragraph",
        "text": "The release of escrow funds shall be governed by the applicable transaction terms and any escrow procedures established by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "8.3 Payment Processing"
      },
      {
        "kind": "paragraph",
        "text": "All payments processed through the Platform shall be subject to applicable payment processing requirements, verification procedures, transaction limits, and anti-fraud measures."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to delay, reject, suspend, or reverse transactions where required by law, regulatory obligations, risk management considerations, or security concerns."
      },
      {
        "kind": "subsection",
        "text": "8.4 Fees and Charges"
      },
      {
        "kind": "paragraph",
        "text": "Users may be required to pay transaction fees, service charges, subscription fees, processing fees, or other charges associated with the use of certain Services."
      },
      {
        "kind": "paragraph",
        "text": "Applicable fees shall be disclosed on the Platform or communicated to Users before they become payable."
      },
      {
        "kind": "subsection",
        "text": "8.5 Taxes"
      },
      {
        "kind": "paragraph",
        "text": "Users shall be responsible for all taxes, levies, duties, and statutory charges arising from their activities on the Platform unless otherwise expressly stated."
      },
      {
        "kind": "subsection",
        "text": "8.6 Refunds and Disputes"
      },
      {
        "kind": "paragraph",
        "text": "Refund requests and payment disputes shall be handled in accordance with applicable Platform policies and dispute resolution procedures."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to investigate disputed transactions and make determinations based on available evidence and Platform records."
      },
      {
        "kind": "section",
        "text": "9. TRIP TRACKING AND LOCATION SERVICES"
      },
      {
        "kind": "subsection",
        "text": "9.1 Location-Based Services"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may utilise GPS technology, geofencing systems, route monitoring tools, and other location-based technologies to facilitate transportation services and operational visibility."
      },
      {
        "kind": "subsection",
        "text": "9.2 User Consent"
      },
      {
        "kind": "paragraph",
        "text": "By using the Platform, Users expressly consent to the collection, processing, and use of location information to the extent necessary for the provision of Services."
      },
      {
        "kind": "paragraph",
        "text": "Drivers and Truck Owners acknowledge that active trip monitoring may be required during transportation activities conducted through the Platform."
      },
      {
        "kind": "subsection",
        "text": "9.3 Operational Purposes"
      },
      {
        "kind": "paragraph",
        "text": "Location data may be used for purposes including:"
      },
      {
        "kind": "listItem",
        "text": "(a) trip tracking and monitoring;"
      },
      {
        "kind": "listItem",
        "text": "(b) route optimisation;"
      },
      {
        "kind": "listItem",
        "text": "(c) estimated time of arrival calculations;"
      },
      {
        "kind": "listItem",
        "text": "(d) proof of movement and delivery;"
      },
      {
        "kind": "listItem",
        "text": "(e) safety and security monitoring; and"
      },
      {
        "kind": "listItem",
        "text": "(f) fraud prevention and dispute resolution."
      },
      {
        "kind": "subsection",
        "text": "9.4 Accuracy Disclaimer"
      },
      {
        "kind": "paragraph",
        "text": "While reasonable efforts are made to provide accurate location information, Trukkas does not warrant that tracking information will always be complete, accurate, uninterrupted, or free from technical errors."
      },
      {
        "kind": "section",
        "text": "10. DOCUMENT MANAGEMENT"
      },
      {
        "kind": "subsection",
        "text": "10.1 Digital Documentation Services"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may facilitate the creation, upload, storage, transmission, management, verification, and retrieval of logistics-related documents."
      },
      {
        "kind": "subsection",
        "text": "10.2 Supported Documents"
      },
      {
        "kind": "paragraph",
        "text": "Documents that may be processed through the Platform include, without limitation:"
      },
      {
        "kind": "listItem",
        "text": "(a) Local Purchase Orders (LPO);"
      },
      {
        "kind": "listItem",
        "text": "(b) Delivery Orders (DO);"
      },
      {
        "kind": "listItem",
        "text": "(c) Truck Delivery Orders (TDO);"
      },
      {
        "kind": "listItem",
        "text": "(d) Equipment Interchange Receipts (EIR);"
      },
      {
        "kind": "listItem",
        "text": "(e) Proof of Delivery (POD) documents; and"
      },
      {
        "kind": "listItem",
        "text": "(f) other transportation, logistics, compliance, or commercial documentation."
      },
      {
        "kind": "subsection",
        "text": "10.3 User Responsibility"
      },
      {
        "kind": "paragraph",
        "text": "Users are solely responsible for ensuring the accuracy, authenticity, legality, and completeness of documents uploaded or submitted through the Platform."
      },
      {
        "kind": "subsection",
        "text": "10.4 Record Retention"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may retain documents and transaction records for operational, legal, compliance, audit, dispute resolution, and business continuity purposes in accordance with applicable laws and Platform policies."
      },
      {
        "kind": "subsection",
        "text": "10.5 No Verification Guarantee"
      },
      {
        "kind": "paragraph",
        "text": "Unless expressly stated otherwise, Trukkas does not guarantee the authenticity, validity, enforceability, or accuracy of documents uploaded by Users and shall not be liable for losses arising from reliance on such documents."
      },
      {
        "kind": "section",
        "text": "11. PROHIBITED ACTIVITIES"
      },
      {
        "kind": "subsection",
        "text": "11.1 General Prohibition"
      },
      {
        "kind": "paragraph",
        "text": "Users shall not use the Platform in any manner that is unlawful, fraudulent, harmful, misleading, or inconsistent with these Terms."
      },
      {
        "kind": "subsection",
        "text": "11.2 Prohibited Conduct"
      },
      {
        "kind": "paragraph",
        "text": "Without limiting the generality of Clause 11.1, Users shall not:"
      },
      {
        "kind": "listItem",
        "text": "(a) provide false, inaccurate, misleading, or incomplete information;"
      },
      {
        "kind": "listItem",
        "text": "(b) impersonate another person, company, or entity;"
      },
      {
        "kind": "listItem",
        "text": "(c) create multiple accounts for fraudulent or deceptive purposes;"
      },
      {
        "kind": "listItem",
        "text": "(d) manipulate, interfere with, or abuse the bidding, booking, payment, escrow, rating, or verification processes of the Platform;"
      },
      {
        "kind": "listItem",
        "text": "(e) upload, transmit, distribute, or introduce viruses, malware, malicious code, or other harmful technologies;"
      },
      {
        "kind": "listItem",
        "text": "(f) attempt to gain unauthorised access to any part of the Platform, its systems, databases, networks, or user accounts;"
      },
      {
        "kind": "listItem",
        "text": "(g) use automated systems, bots, scripts, or other technologies to access or interact with the Platform without prior written authorisation;"
      },
      {
        "kind": "listItem",
        "text": "(h) transport, arrange the transportation of, or facilitate the movement of illegal, prohibited, stolen, hazardous, or restricted goods except where permitted by law and expressly authorised;"
      },
      {
        "kind": "listItem",
        "text": "(i) engage in money laundering, terrorist financing, fraud, identity theft, or other financial crimes;"
      },
      {
        "kind": "listItem",
        "text": "(j) infringe the intellectual property rights, privacy rights, or other legal rights of any person;"
      },
      {
        "kind": "listItem",
        "text": "(k) use the Platform in a manner that could damage its reputation, security, integrity, or operation; or"
      },
      {
        "kind": "listItem",
        "text": "(l) violate any applicable law, regulation, governmental directive, or industry standard."
      },
      {
        "kind": "subsection",
        "text": "11.3 Enforcement Rights"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to investigate suspected violations of these Terms and may suspend, restrict, or terminate access to the Platform, remove content, reverse transactions, or report violations to relevant authorities without prior notice where reasonably necessary."
      },
      {
        "kind": "section",
        "text": "12. USER CONTENT"
      },
      {
        "kind": "subsection",
        "text": "12.1 Ownership of User Content"
      },
      {
        "kind": "paragraph",
        "text": "Users retain ownership of any information, documents, images, data, communications, or other content submitted, uploaded, transmitted, or made available through the Platform (\"User Content\")."
      },
      {
        "kind": "subsection",
        "text": "12.2 Licence Granted to Trukkas"
      },
      {
        "kind": "paragraph",
        "text": "By submitting User Content to the Platform, each User grants Trukkas a non-exclusive, worldwide, royalty-free, transferable licence to host, store, reproduce, process, transmit, display, analyse, and otherwise use such User Content to the extent reasonably necessary for:"
      },
      {
        "kind": "listItem",
        "text": "(a) operating the Platform;"
      },
      {
        "kind": "listItem",
        "text": "(b) providing the Services;"
      },
      {
        "kind": "listItem",
        "text": "(c) complying with legal and regulatory obligations;"
      },
      {
        "kind": "listItem",
        "text": "(d) resolving disputes;"
      },
      {
        "kind": "listItem",
        "text": "(e) maintaining platform security; and"
      },
      {
        "kind": "listItem",
        "text": "(f) improving and developing the Platform."
      },
      {
        "kind": "subsection",
        "text": "12.3 Responsibility for User Content"
      },
      {
        "kind": "paragraph",
        "text": "Users are solely responsible for all User Content submitted through their Accounts and represent and warrant that:"
      },
      {
        "kind": "listItem",
        "text": "(a) they own or have all necessary rights to submit such content;"
      },
      {
        "kind": "listItem",
        "text": "(b) such content does not infringe the rights of any third party;"
      },
      {
        "kind": "listItem",
        "text": "(c) such content is lawful, accurate, and not misleading; and"
      },
      {
        "kind": "listItem",
        "text": "(d) the submission of such content does not violate any law or contractual obligation."
      },
      {
        "kind": "subsection",
        "text": "12.4 Content Removal"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right, but shall not be obligated, to review, monitor, suspend, restrict, remove, or refuse any User Content that it reasonably considers unlawful, inappropriate, inaccurate, misleading, harmful, or inconsistent with these Terms."
      },
      {
        "kind": "section",
        "text": "13. INTELLECTUAL PROPERTY RIGHTS"
      },
      {
        "kind": "subsection",
        "text": "13.1 Ownership of Platform Intellectual Property"
      },
      {
        "kind": "paragraph",
        "text": "The Platform, including its software, source code, databases, architecture, designs, trademarks, logos, graphics, interfaces, text, content, features, functionality, and all associated intellectual property rights, are owned by or licensed to Trukkas Global Services Limited and are protected by applicable intellectual property laws."
      },
      {
        "kind": "subsection",
        "text": "13.2 Limited Licence"
      },
      {
        "kind": "paragraph",
        "text": "Subject to compliance with these Terms, Trukkas grants Users a limited, non-exclusive, non-transferable, revocable licence to access and use the Platform solely for its intended purposes."
      },
      {
        "kind": "subsection",
        "text": "13.3 Restrictions"
      },
      {
        "kind": "paragraph",
        "text": "Except as expressly permitted by law or authorised in writing by Trukkas, Users shall not:"
      },
      {
        "kind": "listItem",
        "text": "(a) copy, reproduce, modify, distribute, publish, sell, license, or commercially exploit any part of the Platform;"
      },
      {
        "kind": "listItem",
        "text": "(b) reverse engineer, decompile, disassemble, or attempt to derive the source code of the Platform;"
      },
      {
        "kind": "listItem",
        "text": "(c) remove, alter, or obscure proprietary notices, trademarks, or copyright notices; or"
      },
      {
        "kind": "listItem",
        "text": "(d) create derivative works based on the Platform or any part thereof."
      },
      {
        "kind": "subsection",
        "text": "13.4 Trademarks"
      },
      {
        "kind": "paragraph",
        "text": "The Trukkas name, logo, branding elements, and associated marks are proprietary to Trukkas Global Logistics and Supply Ltd and may not be used without prior written consent."
      },
      {
        "kind": "section",
        "text": "14. DATA PROTECTION AND PRIVACY"
      },
      {
        "kind": "subsection",
        "text": "14.1 Privacy Commitment"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas is committed to protecting personal data and processing such data in accordance with applicable data protection laws, including the Nigeria Data Protection Act, 2023."
      },
      {
        "kind": "subsection",
        "text": "14.2 Privacy Policy"
      },
      {
        "kind": "paragraph",
        "text": "The collection, use, disclosure, storage, transfer, and protection of personal data are governed by the Trukkas Privacy Policy, which forms an integral part of these Terms and is incorporated herein by reference."
      },
      {
        "kind": "subsection",
        "text": "14.3 User Consent"
      },
      {
        "kind": "paragraph",
        "text": "By accessing or using the Platform, Users acknowledge and consent to the processing of personal data as described in the Privacy Policy."
      },
      {
        "kind": "subsection",
        "text": "14.4 Compliance Obligations"
      },
      {
        "kind": "paragraph",
        "text": "Users shall comply with applicable data protection laws and shall not misuse personal data obtained through the Platform."
      },
      {
        "kind": "subsection",
        "text": "14.5 Security Measures"
      },
      {
        "kind": "paragraph",
        "text": "While Trukkas implements reasonable technical, organisational, and administrative safeguards to protect personal data, no system can be guaranteed to be completely secure, and Users acknowledge the inherent risks associated with electronic communications and internet-based services."
      },
      {
        "kind": "section",
        "text": "15. THIRD-PARTY SERVICES"
      },
      {
        "kind": "subsection",
        "text": "15.1 Third-Party Integrations"
      },
      {
        "kind": "paragraph",
        "text": "The Platform may utilise, integrate with, or provide access to third-party services, applications, payment gateways, cloud infrastructure, mapping services, communication services, verification services, and other technologies."
      },
      {
        "kind": "subsection",
        "text": "15.2 Independent Providers"
      },
      {
        "kind": "paragraph",
        "text": "Such third-party services are provided by independent providers and may be subject to separate terms, conditions, and privacy policies."
      },
      {
        "kind": "subsection",
        "text": "15.3 No Responsibility for Third-Party Services"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas does not own or control third-party service providers and shall not be responsible for the availability, performance, security, legality, or reliability of such services."
      },
      {
        "kind": "subsection",
        "text": "15.4 User Responsibility"
      },
      {
        "kind": "paragraph",
        "text": "Users are responsible for reviewing and complying with any terms and policies applicable to third-party services accessed through or integrated with the Platform."
      },
      {
        "kind": "subsection",
        "text": "15.5 Service Interruptions"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall not be liable for delays, interruptions, failures, inaccuracies, or losses arising from the acts, omissions, or technical failures of third-party service providers."
      },
      {
        "kind": "section",
        "text": "16. SERVICE AVAILABILITY"
      },
      {
        "kind": "subsection",
        "text": "16.1 Availability of Services"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall use reasonable efforts to make the Platform available to Users on a continuous basis. However, the Platform is provided on an \"as available\" and \"as accessible\" basis, and Trukkas does not guarantee uninterrupted access to the Platform or any of its Services."
      },
      {
        "kind": "subsection",
        "text": "16.2 Maintenance and Upgrades"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to suspend, restrict, modify, upgrade, update, maintain, or discontinue any part of the Platform at any time and without prior notice where reasonably necessary for maintenance, security, operational, regulatory, or business purposes."
      },
      {
        "kind": "subsection",
        "text": "16.3 Technical Interruptions"
      },
      {
        "kind": "paragraph",
        "text": "Access to the Platform may be affected by factors beyond Trukkas's control, including internet failures, telecommunications outages, power interruptions, third-party service failures, cyber incidents, system maintenance, or force majeure events."
      },
      {
        "kind": "subsection",
        "text": "16.4 No Availability Guarantee"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas does not warrant that:"
      },
      {
        "kind": "listItem",
        "text": "(a) the Platform will be available at all times;"
      },
      {
        "kind": "listItem",
        "text": "(b) the Platform will operate without interruption or error;"
      },
      {
        "kind": "listItem",
        "text": "(c) defects or errors will be corrected immediately; or"
      },
      {
        "kind": "listItem",
        "text": "(d) the Platform will be free from delays, failures, or interruptions caused by third-party systems or infrastructure."
      },
      {
        "kind": "section",
        "text": "17. SUSPENSION AND TERMINATION OF ACCOUNTS"
      },
      {
        "kind": "subsection",
        "text": "17.1 Suspension Rights"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may suspend, restrict, or limit a User's access to the Platform where it reasonably believes that:"
      },
      {
        "kind": "listItem",
        "text": "(a) the User has breached these Terms;"
      },
      {
        "kind": "listItem",
        "text": "(b) the User has provided false, inaccurate, or misleading information;"
      },
      {
        "kind": "listItem",
        "text": "(c) the User has engaged in fraudulent, unlawful, or suspicious activities;"
      },
      {
        "kind": "listItem",
        "text": "(d) continued access presents a security, operational, regulatory, financial, or reputational risk to the Platform or its Users; or"
      },
      {
        "kind": "listItem",
        "text": "(e) suspension is required by law, regulation, court order, or the directive of a competent authority."
      },
      {
        "kind": "subsection",
        "text": "17.2 Termination of Accounts"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may terminate a User's Account and access to the Platform where:"
      },
      {
        "kind": "listItem",
        "text": "(a) the User commits a material or repeated breach of these Terms;"
      },
      {
        "kind": "listItem",
        "text": "(b) the User engages in fraud, criminal conduct, or serious misconduct;"
      },
      {
        "kind": "listItem",
        "text": "(c) the User fails to satisfy applicable verification or compliance requirements; or"
      },
      {
        "kind": "listItem",
        "text": "(d) Trukkas determines that continued access would adversely affect the integrity, security, or lawful operation of the Platform."
      },
      {
        "kind": "subsection",
        "text": "17.3 User-Initiated Termination"
      },
      {
        "kind": "paragraph",
        "text": "A User may discontinue use of the Platform and request closure of their Account, subject to the completion of outstanding transactions, settlement of obligations, and compliance with applicable laws and Platform policies."
      },
      {
        "kind": "subsection",
        "text": "17.4 Effect of Suspension or Termination"
      },
      {
        "kind": "paragraph",
        "text": "Upon suspension or termination:"
      },
      {
        "kind": "listItem",
        "text": "(a) access to some or all Services may be withdrawn;"
      },
      {
        "kind": "listItem",
        "text": "(b) pending transactions may be suspended pending investigation or resolution;"
      },
      {
        "kind": "listItem",
        "text": "(c) certain data and records may be retained for legal, regulatory, audit, security, or dispute resolution purposes; and"
      },
      {
        "kind": "listItem",
        "text": "(d) any provisions of these Terms that by their nature are intended to survive shall remain in force."
      },
      {
        "kind": "section",
        "text": "18. DISCLAIMERS"
      },
      {
        "kind": "subsection",
        "text": "18.1 Platform Nature"
      },
      {
        "kind": "paragraph",
        "text": "The Platform serves as a technology-enabled marketplace and facilitation platform that connects freight forwarders, truck owners, drivers, and other logistics stakeholders."
      },
      {
        "kind": "subsection",
        "text": "18.2 No Transportation Services"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas does not provide transportation services, operate trucks, employ drivers, own cargo, or act as a logistics carrier unless expressly stated otherwise."
      },
      {
        "kind": "subsection",
        "text": "18.3 No Warranties"
      },
      {
        "kind": "paragraph",
        "text": "To the fullest extent permitted by law, the Platform and Services are provided on an \"as is\" and \"as available\" basis without warranties, representations, or guarantees of any kind, whether express or implied."
      },
      {
        "kind": "subsection",
        "text": "18.4 Transaction Risks"
      },
      {
        "kind": "paragraph",
        "text": "Users acknowledge that transactions conducted through the Platform involve commercial and operational risks and that Trukkas does not guarantee:"
      },
      {
        "kind": "listItem",
        "text": "(a) the quality, safety, legality, suitability, or performance of Users;"
      },
      {
        "kind": "listItem",
        "text": "(b) successful completion of transactions;"
      },
      {
        "kind": "listItem",
        "text": "(c) the condition, security, or lawful nature of cargo;"
      },
      {
        "kind": "listItem",
        "text": "(d) the conduct or performance of any User; or"
      },
      {
        "kind": "listItem",
        "text": "(e) the accuracy of information provided by Users."
      },
      {
        "kind": "subsection",
        "text": "18.5 User Responsibility"
      },
      {
        "kind": "paragraph",
        "text": "Users are solely responsible for exercising appropriate diligence, judgment, and caution in relation to transactions conducted through the Platform."
      },
      {
        "kind": "section",
        "text": "19. LIMITATION OF LIABILITY"
      },
      {
        "kind": "subsection",
        "text": "19.1 Exclusion of Certain Damages"
      },
      {
        "kind": "paragraph",
        "text": "To the fullest extent permitted by applicable law, Trukkas, its directors, officers, employees, agents, affiliates, and service providers shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages arising out of or relating to the use of the Platform."
      },
      {
        "kind": "subsection",
        "text": "19.2 Specific Exclusions"
      },
      {
        "kind": "paragraph",
        "text": "Without limitation, Trukkas shall not be liable for:"
      },
      {
        "kind": "listItem",
        "text": "(a) loss of profits, revenue, contracts, goodwill, business opportunities, or anticipated savings;"
      },
      {
        "kind": "listItem",
        "text": "(b) cargo loss, damage, theft, spoilage, contamination, deterioration, or delay;"
      },
      {
        "kind": "listItem",
        "text": "(c) vehicle breakdowns, accidents, traffic delays, or transportation disruptions;"
      },
      {
        "kind": "listItem",
        "text": "(d) unauthorised access to User accounts resulting from User negligence;"
      },
      {
        "kind": "listItem",
        "text": "(e) acts, omissions, negligence, misconduct, or breaches by Users or third parties; or"
      },
      {
        "kind": "listItem",
        "text": "(f) interruptions, outages, or failures of third-party systems, networks, payment providers, or communication services."
      },
      {
        "kind": "subsection",
        "text": "19.3 Maximum Liability"
      },
      {
        "kind": "paragraph",
        "text": "To the extent permitted by law, Trukkas's aggregate liability arising out of or relating to these Terms shall not exceed the total amount of fees actually paid by the affected User to Trukkas during the six (6) months immediately preceding the event giving rise to the claim."
      },
      {
        "kind": "subsection",
        "text": "19.4 Applicable Law"
      },
      {
        "kind": "paragraph",
        "text": "Nothing in these Terms shall exclude or limit liability where such exclusion or limitation is prohibited by applicable law."
      },
      {
        "kind": "section",
        "text": "20. INDEMNITY"
      },
      {
        "kind": "subsection",
        "text": "20.1 User Indemnity"
      },
      {
        "kind": "paragraph",
        "text": "Each User agrees to indemnify, defend, and hold harmless Trukkas Global Services Limited, its affiliates, directors, officers, employees, agents, contractors, successors, and assigns from and against any claims, actions, demands, losses, damages, liabilities, penalties, fines, costs, and expenses (including reasonable legal fees) arising out of or relating to:"
      },
      {
        "kind": "listItem",
        "text": "(a) the User's use of the Platform or Services;"
      },
      {
        "kind": "listItem",
        "text": "(b) any breach of these Terms;"
      },
      {
        "kind": "listItem",
        "text": "(c) any violation of applicable laws, regulations, or governmental directives by the User;"
      },
      {
        "kind": "listItem",
        "text": "(d) any infringement or alleged infringement of the rights of a third party by the User;"
      },
      {
        "kind": "listItem",
        "text": "(e) the transportation, handling, storage, or delivery of cargo arranged by the User;"
      },
      {
        "kind": "listItem",
        "text": "(f) any inaccurate, false, misleading, or fraudulent information provided by the User; or"
      },
      {
        "kind": "listItem",
        "text": "(g) any negligent, reckless, unlawful, or wilful act or omission of the User."
      },
      {
        "kind": "subsection",
        "text": "20.2 Defence of Claims"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right, at its own discretion and expense, to assume exclusive control of the defence and settlement of any matter subject to indemnification, and the User agrees to cooperate fully in such defence."
      },
      {
        "kind": "subsection",
        "text": "20.3 Survival"
      },
      {
        "kind": "paragraph",
        "text": "The indemnity obligations contained in this Clause shall survive the suspension, termination, or expiration of a User's Account and these Terms."
      },
      {
        "kind": "section",
        "text": "21. FORCE MAJEURE"
      },
      {
        "kind": "subsection",
        "text": "21.1 Force Majeure Events"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall not be liable for any failure, interruption, delay, or inability to perform any obligation under these Terms where such failure results from circumstances beyond its reasonable control, including but not limited to:"
      },
      {
        "kind": "listItem",
        "text": "(a) acts of God;"
      },
      {
        "kind": "listItem",
        "text": "(b) floods, storms, earthquakes, fire, or other natural disasters;"
      },
      {
        "kind": "listItem",
        "text": "(c) war, terrorism, civil unrest, riots, or public disturbances;"
      },
      {
        "kind": "listItem",
        "text": "(d) epidemics, pandemics, or public health emergencies;"
      },
      {
        "kind": "listItem",
        "text": "(e) government actions, regulatory restrictions, or changes in law;"
      },
      {
        "kind": "listItem",
        "text": "(f) telecommunications failures, internet outages, cyberattacks, or disruptions to utility services; or"
      },
      {
        "kind": "listItem",
        "text": "(g) failures of third-party service providers."
      },
      {
        "kind": "subsection",
        "text": "21.2 Suspension of Obligations"
      },
      {
        "kind": "paragraph",
        "text": "Where a Force Majeure event occurs, Trukkas's obligations affected by such event shall be suspended for the duration of the event and for such additional period as may reasonably be required to resume operations."
      },
      {
        "kind": "section",
        "text": "22. DISPUTE RESOLUTION"
      },
      {
        "kind": "subsection",
        "text": "22.1 Amicable Resolution"
      },
      {
        "kind": "paragraph",
        "text": "The Parties shall use reasonable efforts to resolve any dispute, controversy, or claim arising out of or relating to these Terms through good faith negotiations."
      },
      {
        "kind": "subsection",
        "text": "22.2 Mediation"
      },
      {
        "kind": "paragraph",
        "text": "Where a dispute cannot be resolved through negotiations within fourteen (14) days, the dispute shall be referred to mediation in Lagos, Nigeria."
      },
      {
        "kind": "subsection",
        "text": "22.3 Arbitration"
      },
      {
        "kind": "paragraph",
        "text": "Any dispute not resolved through mediation shall be finally settled by arbitration in accordance with the Arbitration and Mediation Act, 2023."
      },
      {
        "kind": "subsection",
        "text": "22.4 Seat and Language"
      },
      {
        "kind": "paragraph",
        "text": "The seat of arbitration shall be Lagos, Nigeria."
      },
      {
        "kind": "paragraph",
        "text": "The language of the arbitration shall be English."
      },
      {
        "kind": "subsection",
        "text": "22.5 Tribunal"
      },
      {
        "kind": "paragraph",
        "text": "The arbitral tribunal shall consist of one (1) arbitrator appointed by agreement of the parties or, failing such agreement, appointed in accordance with the Arbitration and Mediation Act, 2023."
      },
      {
        "kind": "subsection",
        "text": "22.6 Continued Performance"
      },
      {
        "kind": "paragraph",
        "text": "To the extent reasonably practicable, Users and Trukkas shall continue to perform their respective obligations pending final resolution of any dispute."
      },
      {
        "kind": "section",
        "text": "23. GOVERNING LAW"
      },
      {
        "kind": "paragraph",
        "text": "These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria."
      },
      {
        "kind": "paragraph",
        "text": "Subject to the dispute resolution provisions contained herein, any matter arising under these Terms shall be subject to the jurisdiction of the competent courts of Nigeria."
      },
      {
        "kind": "section",
        "text": "24. CHANGES TO THESE TERMS"
      },
      {
        "kind": "subsection",
        "text": "24.1 Right to Amend"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd reserves the right to amend, modify, update, or replace these Terms at any time."
      },
      {
        "kind": "subsection",
        "text": "24.2 Notification of Changes"
      },
      {
        "kind": "paragraph",
        "text": "Where material changes are made, Trukkas may notify Users through the Platform, email communications, notifications, or other reasonable means."
      },
      {
        "kind": "subsection",
        "text": "24.3 Continued Use"
      },
      {
        "kind": "paragraph",
        "text": "A User's continued access to or use of the Platform after revised Terms become effective shall constitute acceptance of such revised Terms."
      },
      {
        "kind": "subsection",
        "text": "24.4 Effective Date"
      },
      {
        "kind": "paragraph",
        "text": "The latest version of these Terms shall be made available on the Platform and shall indicate the date on which the revised Terms became effective."
      },
      {
        "kind": "section",
        "text": "25. CONTACT INFORMATION"
      },
      {
        "kind": "paragraph",
        "text": "For enquiries regarding these Terms, legal notices, complaints, or other communications relating to the Platform, Users may contact:"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Services Limited"
      },
      {
        "kind": "paragraph",
        "text": "Platform: Trukkas"
      },
      {
        "kind": "paragraph",
        "text": "Website: www.trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "General Email: legal@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Privacy Email: privacy@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Registered Office: Lagos, Nigeria"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall use reasonable efforts to respond to enquiries submitted through the above channels within a reasonable time."
      }
    ]
  },
  {
    "slug": "driver-policy",
    "title": "DRIVER POLICY",
    "eyebrow": "Legal",
    "description": "Trukkas Platform (www.trukkas.com)",
    "sourceFile": "DRIVER POLICY - TRUKKAS.docx",
    "updatedLabel": "Last updated: June 13, 2026",
    "content": [
      {
        "kind": "title",
        "text": "DRIVER POLICY"
      },
      {
        "kind": "subtitle",
        "text": "Trukkas Platform (www.trukkas.com)"
      },
      {
        "kind": "section",
        "text": "1. INTRODUCTION"
      },
      {
        "kind": "subsection",
        "text": "1.1 Purpose of this Policy"
      },
      {
        "kind": "paragraph",
        "text": "This Driver Policy establishes the standards, responsibilities, obligations, and conduct requirements applicable to all drivers operating on or through the Trukkas Platform."
      },
      {
        "kind": "paragraph",
        "text": "The purpose of this Policy is to promote safety, professionalism, regulatory compliance, operational efficiency, cargo security, customer satisfaction, and the overall integrity of the Trukkas ecosystem."
      },
      {
        "kind": "subsection",
        "text": "1.2 Applicability"
      },
      {
        "kind": "paragraph",
        "text": "This Policy applies to:"
      },
      {
        "kind": "listItem",
        "text": "(a) owner-drivers;"
      },
      {
        "kind": "listItem",
        "text": "(b) drivers engaged by truck owners;"
      },
      {
        "kind": "listItem",
        "text": "(c) fleet drivers;"
      },
      {
        "kind": "listItem",
        "text": "(d) contract drivers;"
      },
      {
        "kind": "listItem",
        "text": "(e) independent drivers; and"
      },
      {
        "kind": "listItem",
        "text": "(f) any other person authorised to operate a vehicle in connection with transportation services facilitated through the Platform."
      },
      {
        "kind": "subsection",
        "text": "1.3 Relationship with Other Policies"
      },
      {
        "kind": "paragraph",
        "text": "This Policy shall be read together with:"
      },
      {
        "kind": "listItem",
        "text": "(a) the Trukkas Terms of Use;"
      },
      {
        "kind": "listItem",
        "text": "(b) the Trukkas Privacy Policy;"
      },
      {
        "kind": "listItem",
        "text": "(c) applicable safety procedures;"
      },
      {
        "kind": "listItem",
        "text": "(d) transportation regulations; and"
      },
      {
        "kind": "listItem",
        "text": "(e) other policies issued by Trukkas from time to time."
      },
      {
        "kind": "subsection",
        "text": "1.4 Compliance Obligation"
      },
      {
        "kind": "paragraph",
        "text": "All drivers are required to comply with this Policy as a condition for accessing and using the Platform."
      },
      {
        "kind": "paragraph",
        "text": "Failure to comply may result in warnings, suspension, restriction of platform access, removal from the Platform, or other remedial measures deemed appropriate by Trukkas."
      },
      {
        "kind": "section",
        "text": "2. DEFINITIONS"
      },
      {
        "kind": "paragraph",
        "text": "For the purposes of this Policy:"
      },
      {
        "kind": "paragraph",
        "text": "\"Account\" means a driver's registered profile on the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Cargo\" means goods, equipment, materials, containers, products, or other items transported through services facilitated by the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Delivery\" means the successful transportation and handover of Cargo to the designated recipient."
      },
      {
        "kind": "paragraph",
        "text": "\"Driver\" means any individual authorised to operate a vehicle for transportation services through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Freight Forwarder\" means a customer or logistics operator who arranges transportation services through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Platform\" means the Trukkas website, mobile applications, software systems, and related services."
      },
      {
        "kind": "paragraph",
        "text": "\"Proof of Delivery\" or \"POD\" means documentary or electronic evidence confirming successful delivery of Cargo."
      },
      {
        "kind": "paragraph",
        "text": "\"Safety Incident\" means any accident, injury, security breach, vehicle breakdown, cargo damage, cargo loss, theft, or other event affecting transportation operations."
      },
      {
        "kind": "paragraph",
        "text": "\"Trip\" means a transportation assignment undertaken through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Truck Owner\" means any individual or organisation that owns, manages, controls, or provides vehicles used through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Vehicle\" means any truck, trailer, tanker, van, or transportation equipment used in connection with Platform services."
      },
      {
        "kind": "section",
        "text": "3. ELIGIBILITY REQUIREMENTS"
      },
      {
        "kind": "subsection",
        "text": "3.1 Minimum Requirements"
      },
      {
        "kind": "paragraph",
        "text": "To operate as a Driver on the Platform, an individual must:"
      },
      {
        "kind": "listItem",
        "text": "(a) be at least twenty-one (21) years of age;"
      },
      {
        "kind": "listItem",
        "text": "(b) possess a valid driver's licence recognised under applicable law;"
      },
      {
        "kind": "listItem",
        "text": "(c) possess any permits, endorsements, certifications, or authorisations required for the operation of the relevant vehicle category;"
      },
      {
        "kind": "listItem",
        "text": "(d) have the legal right to work and operate within the relevant jurisdiction; and"
      },
      {
        "kind": "listItem",
        "text": "(e) satisfy Trukkas onboarding and verification requirements."
      },
      {
        "kind": "subsection",
        "text": "3.2 Fitness to Drive"
      },
      {
        "kind": "paragraph",
        "text": "Drivers must be physically and mentally fit to perform transportation services safely and responsibly."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to request additional documentation or evidence where concerns arise regarding a Driver's fitness to perform assigned duties safely."
      },
      {
        "kind": "subsection",
        "text": "3.3 Background Screening"
      },
      {
        "kind": "paragraph",
        "text": "Where considered necessary, Trukkas may conduct or require:"
      },
      {
        "kind": "listItem",
        "text": "(a) identity verification;"
      },
      {
        "kind": "listItem",
        "text": "(b) driver's licence verification;"
      },
      {
        "kind": "listItem",
        "text": "(c) address verification;"
      },
      {
        "kind": "listItem",
        "text": "(d) criminal record screening where legally permissible; and"
      },
      {
        "kind": "listItem",
        "text": "(e) other background checks reasonably necessary for operational or security purposes."
      },
      {
        "kind": "section",
        "text": "4. DRIVER REGISTRATION AND KYC"
      },
      {
        "kind": "subsection",
        "text": "4.1 Registration Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall provide complete, accurate, and current information during registration."
      },
      {
        "kind": "paragraph",
        "text": "Required documentation may include:"
      },
      {
        "kind": "listItem",
        "text": "(a) valid driver's licence;"
      },
      {
        "kind": "listItem",
        "text": "(b) National Identification Number (NIN);"
      },
      {
        "kind": "listItem",
        "text": "(c) passport photograph;"
      },
      {
        "kind": "listItem",
        "text": "(d) proof of address;"
      },
      {
        "kind": "listItem",
        "text": "(e) emergency contact details;"
      },
      {
        "kind": "listItem",
        "text": "(f) guarantor information where applicable; and"
      },
      {
        "kind": "listItem",
        "text": "(g) any additional information required by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "4.2 Verification Process"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to verify all information and documents submitted by Drivers."
      },
      {
        "kind": "paragraph",
        "text": "Access to the Platform may be restricted until verification requirements have been completed satisfactorily."
      },
      {
        "kind": "subsection",
        "text": "4.3 Ongoing Compliance"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall ensure that all submitted information remains current and accurate and shall promptly update expired licences, permits, certifications, or other documentation."
      },
      {
        "kind": "subsection",
        "text": "4.4 False Information"
      },
      {
        "kind": "paragraph",
        "text": "Submission of false, misleading, forged, altered, or fraudulent information may result in immediate suspension or permanent removal from the Platform and may be reported to relevant authorities."
      },
      {
        "kind": "section",
        "text": "5. DRIVER CODE OF CONDUCT"
      },
      {
        "kind": "subsection",
        "text": "5.1 Professional Standards"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall conduct themselves professionally at all times and shall:"
      },
      {
        "kind": "listItem",
        "text": "(a) act honestly and ethically;"
      },
      {
        "kind": "listItem",
        "text": "(b) maintain courtesy and respect when dealing with customers, cargo owners, recipients, law enforcement personnel, and other stakeholders;"
      },
      {
        "kind": "listItem",
        "text": "(c) comply with lawful instructions relating to transportation activities;"
      },
      {
        "kind": "listItem",
        "text": "(d) protect the reputation of the Platform; and"
      },
      {
        "kind": "listItem",
        "text": "(e) avoid conduct likely to bring Trukkas into disrepute."
      },
      {
        "kind": "subsection",
        "text": "5.2 Integrity Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall not:"
      },
      {
        "kind": "listItem",
        "text": "(a) solicit unauthorised payments;"
      },
      {
        "kind": "listItem",
        "text": "(b) engage in extortion or harassment;"
      },
      {
        "kind": "listItem",
        "text": "(c) make false claims or reports;"
      },
      {
        "kind": "listItem",
        "text": "(d) falsify trip information;"
      },
      {
        "kind": "listItem",
        "text": "(e) manipulate platform records; or"
      },
      {
        "kind": "listItem",
        "text": "(f) engage in any dishonest conduct."
      },
      {
        "kind": "subsection",
        "text": "5.3 Customer Interaction"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall maintain a professional appearance, communicate respectfully, and promptly report any disputes, complaints, or operational challenges encountered during a Trip."
      },
      {
        "kind": "section",
        "text": "6. VEHICLE COMPLIANCE REQUIREMENTS"
      },
      {
        "kind": "subsection",
        "text": "6.1 Vehicle Standards"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall only operate vehicles that:"
      },
      {
        "kind": "listItem",
        "text": "(a) are roadworthy and safe;"
      },
      {
        "kind": "listItem",
        "text": "(b) are properly registered;"
      },
      {
        "kind": "listItem",
        "text": "(c) possess valid licences and permits;"
      },
      {
        "kind": "listItem",
        "text": "(d) comply with applicable transportation laws; and"
      },
      {
        "kind": "listItem",
        "text": "(e) are suitable for the assigned cargo."
      },
      {
        "kind": "subsection",
        "text": "6.2 Required Documentation"
      },
      {
        "kind": "paragraph",
        "text": "The following documents shall be maintained and produced upon request:"
      },
      {
        "kind": "listItem",
        "text": "(a) vehicle licence;"
      },
      {
        "kind": "listItem",
        "text": "(b) proof of ownership or authority to use the vehicle;"
      },
      {
        "kind": "listItem",
        "text": "(c) insurance certificate;"
      },
      {
        "kind": "listItem",
        "text": "(d) roadworthiness certificate;"
      },
      {
        "kind": "listItem",
        "text": "(e) inspection records; and"
      },
      {
        "kind": "listItem",
        "text": "(f) any other document required by law."
      },
      {
        "kind": "subsection",
        "text": "6.3 Vehicle Maintenance"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall conduct routine inspections and promptly report any defects, faults, or safety concerns affecting the vehicle."
      },
      {
        "kind": "paragraph",
        "text": "Vehicles that present safety risks shall not be used for Platform-related transportation activities."
      },
      {
        "kind": "section",
        "text": "7. SAFETY REQUIREMENTS"
      },
      {
        "kind": "subsection",
        "text": "7.1 General Duty of Care"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall exercise reasonable care and skill in the operation of vehicles and handling of cargo."
      },
      {
        "kind": "subsection",
        "text": "7.2 Compliance with Traffic Laws"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall comply with all applicable road traffic laws, transportation regulations, speed limits, and safety requirements."
      },
      {
        "kind": "subsection",
        "text": "7.3 Fatigue Management"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall not operate vehicles while fatigued, exhausted, or otherwise impaired."
      },
      {
        "kind": "paragraph",
        "text": "Drivers are expected to take adequate rest periods and comply with applicable driving-hour limitations."
      },
      {
        "kind": "subsection",
        "text": "7.4 Alcohol and Drugs"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall not operate vehicles while under the influence of alcohol, illegal drugs, controlled substances, or any medication that may impair driving ability."
      },
      {
        "kind": "subsection",
        "text": "7.5 Accident Prevention"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall exercise due care to minimise risks of accidents, injuries, cargo damage, theft, and other operational incidents."
      },
      {
        "kind": "section",
        "text": "8. CARGO HANDLING REQUIREMENTS"
      },
      {
        "kind": "subsection",
        "text": "8.1 Care of Cargo"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall exercise reasonable care in handling, securing, transporting, and delivering cargo entrusted to them."
      },
      {
        "kind": "subsection",
        "text": "8.2 Cargo Security"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall take appropriate precautions to prevent theft, tampering, loss, damage, contamination, or unauthorised access to cargo."
      },
      {
        "kind": "subsection",
        "text": "8.3 Prohibited Cargo"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall not knowingly transport:"
      },
      {
        "kind": "listItem",
        "text": "(a) illegal goods;"
      },
      {
        "kind": "listItem",
        "text": "(b) stolen property;"
      },
      {
        "kind": "listItem",
        "text": "(c) prohibited substances;"
      },
      {
        "kind": "listItem",
        "text": "(d) contraband; or"
      },
      {
        "kind": "listItem",
        "text": "(e) any cargo prohibited by law."
      },
      {
        "kind": "subsection",
        "text": "8.4 Reporting Obligations"
      },
      {
        "kind": "paragraph",
        "text": "Any loss, damage, shortage, contamination, theft, accident, or unusual occurrence affecting cargo shall be reported immediately through designated reporting channels."
      },
      {
        "kind": "section",
        "text": "9. TRIP MANAGEMENT"
      },
      {
        "kind": "subsection",
        "text": "9.1 Acceptance of Trips"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall only accept Trips that they are capable of performing safely, lawfully, and efficiently."
      },
      {
        "kind": "subsection",
        "text": "9.2 Trip Execution"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall:"
      },
      {
        "kind": "listItem",
        "text": "(a) follow approved routes where applicable;"
      },
      {
        "kind": "listItem",
        "text": "(b) comply with delivery instructions;"
      },
      {
        "kind": "listItem",
        "text": "(c) maintain communication during transit; and"
      },
      {
        "kind": "listItem",
        "text": "(d) provide required updates through the Platform."
      },
      {
        "kind": "subsection",
        "text": "9.3 Delivery Confirmation"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall obtain and submit Proof of Delivery and any other required documentation upon completion of deliveries."
      },
      {
        "kind": "subsection",
        "text": "9.4 Trip Cancellations"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall not cancel Trips without reasonable justification and appropriate notification."
      },
      {
        "kind": "paragraph",
        "text": "Repeated cancellations may result in disciplinary measures."
      },
      {
        "kind": "section",
        "text": "10. LOCATION TRACKING AND MONITORING"
      },
      {
        "kind": "subsection",
        "text": "10.1 GPS Tracking"
      },
      {
        "kind": "paragraph",
        "text": "Drivers acknowledge and consent to the use of GPS tracking and location monitoring technologies during Trips undertaken through the Platform."
      },
      {
        "kind": "subsection",
        "text": "10.2 Operational Monitoring"
      },
      {
        "kind": "paragraph",
        "text": "Location data may be used for:"
      },
      {
        "kind": "listItem",
        "text": "(a) trip monitoring;"
      },
      {
        "kind": "listItem",
        "text": "(b) route verification;"
      },
      {
        "kind": "listItem",
        "text": "(c) cargo security;"
      },
      {
        "kind": "listItem",
        "text": "(d) proof of movement;"
      },
      {
        "kind": "listItem",
        "text": "(e) delivery verification; and"
      },
      {
        "kind": "listItem",
        "text": "(f) dispute resolution."
      },
      {
        "kind": "subsection",
        "text": "10.3 Cooperation with Monitoring Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall not disable, tamper with, manipulate, or interfere with location tracking systems or monitoring technologies used by the Platform."
      },
      {
        "kind": "subsection",
        "text": "10.4 Privacy Considerations"
      },
      {
        "kind": "paragraph",
        "text": "Location data shall be processed in accordance with the Trukkas Privacy Policy and applicable data protection laws."
      },
      {
        "kind": "section",
        "text": "11. COMMUNICATION REQUIREMENTS"
      },
      {
        "kind": "subsection",
        "text": "11.1 Communication with Customers"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall communicate professionally, courteously, and respectfully with Freight Forwarders, Truck Owners, cargo owners, recipients, and other stakeholders at all times."
      },
      {
        "kind": "subsection",
        "text": "11.2 Communication with Trukkas"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall maintain active communication channels and promptly respond to reasonable requests, enquiries, instructions, or notifications issued by Trukkas relating to Trips, compliance matters, investigations, safety incidents, or operational requirements."
      },
      {
        "kind": "subsection",
        "text": "11.3 Trip Updates"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall provide timely updates regarding:"
      },
      {
        "kind": "listItem",
        "text": "(a) departure and arrival times;"
      },
      {
        "kind": "listItem",
        "text": "(b) significant delays;"
      },
      {
        "kind": "listItem",
        "text": "(c) route deviations;"
      },
      {
        "kind": "listItem",
        "text": "(d) accidents or emergencies;"
      },
      {
        "kind": "listItem",
        "text": "(e) cargo-related incidents; and"
      },
      {
        "kind": "listItem",
        "text": "(f) completion of deliveries."
      },
      {
        "kind": "subsection",
        "text": "11.4 Emergency Communications"
      },
      {
        "kind": "paragraph",
        "text": "In the event of an accident, security incident, cargo loss, vehicle breakdown, or any other emergency situation, Drivers shall immediately notify Trukkas and any other relevant stakeholders through approved communication channels."
      },
      {
        "kind": "section",
        "text": "12. PAYMENTS AND INCENTIVES"
      },
      {
        "kind": "subsection",
        "text": "12.1 Payment Processing"
      },
      {
        "kind": "paragraph",
        "text": "Payments relating to Trips completed through the Platform shall be processed in accordance with the applicable payment terms, escrow arrangements, and Platform policies."
      },
      {
        "kind": "subsection",
        "text": "12.2 Eligibility for Payment"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall only be entitled to payment for duly completed Trips supported by the required delivery records, Proof of Delivery documentation, and any other verification requirements specified by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "12.3 Payment Adjustments"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to withhold, delay, reverse, or adjust payments where:"
      },
      {
        "kind": "listItem",
        "text": "(a) fraud is suspected;"
      },
      {
        "kind": "listItem",
        "text": "(b) delivery obligations have not been fulfilled;"
      },
      {
        "kind": "listItem",
        "text": "(c) there is an ongoing dispute relating to a Trip;"
      },
      {
        "kind": "listItem",
        "text": "(d) required documentation has not been submitted; or"
      },
      {
        "kind": "listItem",
        "text": "(e) a Driver has breached this Policy."
      },
      {
        "kind": "subsection",
        "text": "12.4 Incentive Programmes"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may introduce incentive programmes, rewards, bonuses, performance schemes, or promotional benefits from time to time. Participation in such programmes shall be subject to applicable terms and conditions."
      },
      {
        "kind": "subsection",
        "text": "12.5 Fraudulent Claims"
      },
      {
        "kind": "paragraph",
        "text": "Any attempt to obtain payment, incentives, bonuses, reimbursements, or benefits through fraud, deception, falsified records, or manipulation of Platform systems shall constitute a material breach of this Policy."
      },
      {
        "kind": "section",
        "text": "13. DATA PROTECTION AND CONFIDENTIALITY"
      },
      {
        "kind": "subsection",
        "text": "13.1 Confidential Information"
      },
      {
        "kind": "paragraph",
        "text": "Drivers may have access to confidential information relating to customers, cargo, routes, pricing, business operations, logistics activities, and Platform systems."
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall maintain the confidentiality of such information and shall not disclose, copy, use, or distribute such information except as required for legitimate transportation activities."
      },
      {
        "kind": "subsection",
        "text": "13.2 Customer Information"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall protect personal information obtained through the Platform and shall process such information only for authorised transportation and delivery purposes."
      },
      {
        "kind": "subsection",
        "text": "13.3 Data Protection Compliance"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall comply with all applicable data protection and privacy laws and shall not misuse, disclose, sell, transfer, or otherwise exploit personal data obtained through the Platform."
      },
      {
        "kind": "subsection",
        "text": "13.4 Continuing Obligation"
      },
      {
        "kind": "paragraph",
        "text": "The obligations contained in this Clause shall survive the suspension, termination, or cessation of a Driver's participation on the Platform."
      },
      {
        "kind": "section",
        "text": "14. PROHIBITED ACTIVITIES"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall not:"
      },
      {
        "kind": "listItem",
        "text": "(a) transport illegal, prohibited, dangerous, or unauthorised cargo except where expressly permitted by law and properly documented;"
      },
      {
        "kind": "listItem",
        "text": "(b) falsify trip records, delivery confirmations, GPS information, or operational reports;"
      },
      {
        "kind": "listItem",
        "text": "(c) permit unauthorised individuals to operate vehicles assigned to them;"
      },
      {
        "kind": "listItem",
        "text": "(d) share login credentials or Platform accounts with third parties;"
      },
      {
        "kind": "listItem",
        "text": "(e) manipulate location tracking systems or monitoring technologies;"
      },
      {
        "kind": "listItem",
        "text": "(f) engage in theft, fraud, bribery, corruption, extortion, or other unlawful conduct;"
      },
      {
        "kind": "listItem",
        "text": "(g) bypass Platform procedures for the purpose of conducting off-platform transactions where such conduct violates applicable Platform policies;"
      },
      {
        "kind": "listItem",
        "text": "(h) consume alcohol, narcotics, or impairing substances while performing transportation services;"
      },
      {
        "kind": "listItem",
        "text": "(i) engage in harassment, discrimination, threats, violence, or abusive conduct; or"
      },
      {
        "kind": "listItem",
        "text": "(j) undertake any activity that may compromise safety, cargo security, customer trust, or the reputation of Trukkas."
      },
      {
        "kind": "section",
        "text": "15. INCIDENT REPORTING"
      },
      {
        "kind": "subsection",
        "text": "15.1 Reporting Obligation"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall immediately report any incident that may affect cargo, vehicles, customers, transportation activities, or Platform operations."
      },
      {
        "kind": "subsection",
        "text": "15.2 Reportable Incidents"
      },
      {
        "kind": "paragraph",
        "text": "Reportable incidents include:"
      },
      {
        "kind": "listItem",
        "text": "(a) accidents;"
      },
      {
        "kind": "listItem",
        "text": "(b) vehicle breakdowns;"
      },
      {
        "kind": "listItem",
        "text": "(c) cargo loss;"
      },
      {
        "kind": "listItem",
        "text": "(d) cargo damage;"
      },
      {
        "kind": "listItem",
        "text": "(e) theft or attempted theft;"
      },
      {
        "kind": "listItem",
        "text": "(f) personal injury;"
      },
      {
        "kind": "listItem",
        "text": "(g) security threats;"
      },
      {
        "kind": "listItem",
        "text": "(h) law enforcement intervention; and"
      },
      {
        "kind": "listItem",
        "text": "(i) any unusual occurrence affecting a Trip."
      },
      {
        "kind": "subsection",
        "text": "15.3 Cooperation"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall cooperate fully with investigations conducted by Trukkas, insurers, regulators, law enforcement agencies, or other authorised parties."
      },
      {
        "kind": "section",
        "text": "16. INVESTIGATIONS AND DISCIPLINARY ACTION"
      },
      {
        "kind": "subsection",
        "text": "16.1 Investigations"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to investigate any suspected breach of this Policy, applicable law, or Platform requirements."
      },
      {
        "kind": "subsection",
        "text": "16.2 Temporary Suspension"
      },
      {
        "kind": "paragraph",
        "text": "A Driver may be temporarily suspended pending investigation where:"
      },
      {
        "kind": "listItem",
        "text": "(a) a serious safety concern exists;"
      },
      {
        "kind": "listItem",
        "text": "(b) fraud is suspected;"
      },
      {
        "kind": "listItem",
        "text": "(c) a significant customer complaint has been received;"
      },
      {
        "kind": "listItem",
        "text": "(d) required documentation has expired; or"
      },
      {
        "kind": "listItem",
        "text": "(e) continued access presents a risk to the Platform or its users."
      },
      {
        "kind": "subsection",
        "text": "16.3 Disciplinary Measures"
      },
      {
        "kind": "paragraph",
        "text": "Where a breach is established, Trukkas may impose one or more of the following measures:"
      },
      {
        "kind": "listItem",
        "text": "(a) warning letters;"
      },
      {
        "kind": "listItem",
        "text": "(b) mandatory retraining;"
      },
      {
        "kind": "listItem",
        "text": "(c) suspension of Platform access;"
      },
      {
        "kind": "listItem",
        "text": "(d) restriction of Platform privileges;"
      },
      {
        "kind": "listItem",
        "text": "(e) permanent removal from the Platform; or"
      },
      {
        "kind": "listItem",
        "text": "(f) referral to regulatory or law enforcement authorities."
      },
      {
        "kind": "subsection",
        "text": "16.4 Appeals"
      },
      {
        "kind": "paragraph",
        "text": "Drivers may submit written appeals against disciplinary decisions within the period specified by Trukkas."
      },
      {
        "kind": "section",
        "text": "17. LIABILITY AND INSURANCE"
      },
      {
        "kind": "subsection",
        "text": "17.1 Driver Responsibility"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall remain responsible for their actions, omissions, conduct, and compliance with applicable laws while performing transportation services."
      },
      {
        "kind": "subsection",
        "text": "17.2 Insurance Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall ensure that vehicles used through the Platform are covered by valid insurance policies as required by law and any additional requirements imposed by Trukkas or Truck Owners."
      },
      {
        "kind": "subsection",
        "text": "17.3 Limitation of Platform Liability"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas acts as a technology platform facilitating logistics transactions and does not assume responsibility for the acts, omissions, negligence, misconduct, or contractual obligations of Drivers."
      },
      {
        "kind": "subsection",
        "text": "17.4 Indemnity"
      },
      {
        "kind": "paragraph",
        "text": "Drivers agree to indemnify and hold harmless Trukkas Global Logistics and Supply Ltd, its officers, employees, agents, and affiliates against claims, liabilities, damages, losses, costs, and expenses arising from:"
      },
      {
        "kind": "listItem",
        "text": "(a) breach of this Policy;"
      },
      {
        "kind": "listItem",
        "text": "(b) violation of applicable law;"
      },
      {
        "kind": "listItem",
        "text": "(c) negligent conduct;"
      },
      {
        "kind": "listItem",
        "text": "(d) fraudulent acts; or"
      },
      {
        "kind": "listItem",
        "text": "(e) misuse of the Platform."
      },
      {
        "kind": "section",
        "text": "18. COMPLIANCE WITH LAWS"
      },
      {
        "kind": "paragraph",
        "text": "Drivers shall comply with all applicable laws, regulations, directives, and industry standards, including:"
      },
      {
        "kind": "listItem",
        "text": "(a) road traffic laws;"
      },
      {
        "kind": "listItem",
        "text": "(b) transportation regulations;"
      },
      {
        "kind": "listItem",
        "text": "(c) vehicle licensing requirements;"
      },
      {
        "kind": "listItem",
        "text": "(d) environmental regulations;"
      },
      {
        "kind": "listItem",
        "text": "(e) occupational health and safety requirements;"
      },
      {
        "kind": "listItem",
        "text": "(f) anti-corruption laws;"
      },
      {
        "kind": "listItem",
        "text": "(g) anti-money laundering requirements where applicable; and"
      },
      {
        "kind": "listItem",
        "text": "(h) data protection and privacy laws."
      },
      {
        "kind": "section",
        "text": "19. CHANGES TO THIS POLICY"
      },
      {
        "kind": "subsection",
        "text": "19.1 Right to Amend"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd reserves the right to amend, modify, update, replace, or revise this Driver Policy from time to time."
      },
      {
        "kind": "subsection",
        "text": "19.2 Notification of Changes"
      },
      {
        "kind": "paragraph",
        "text": "Material changes may be communicated through the Platform, email notifications, mobile application notifications, driver portals, or other appropriate communication channels."
      },
      {
        "kind": "subsection",
        "text": "19.3 Continued Participation"
      },
      {
        "kind": "paragraph",
        "text": "Continued use of the Platform following the effective date of any amendment shall constitute acceptance of the revised Policy."
      },
      {
        "kind": "section",
        "text": "20. CONTACT INFORMATION"
      },
      {
        "kind": "paragraph",
        "text": "For enquiries relating to this Driver Policy, compliance matters, safety issues, disciplinary matters, or operational concerns, Drivers may contact:"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd"
      },
      {
        "kind": "paragraph",
        "text": "Platform: Trukkas"
      },
      {
        "kind": "paragraph",
        "text": "Website: www.trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Driver Support Email: drivers@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Support Email: support@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Legal Email: legal@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Registered Office: Lagos, Nigeria"
      },
      {
        "kind": "subsection",
        "text": "20.1 Reporting and Escalation"
      },
      {
        "kind": "paragraph",
        "text": "Drivers are encouraged to promptly report incidents, safety concerns, compliance issues, or suspected violations through the designated reporting channels provided by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "20.2 Response and Resolution"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall use reasonable efforts to investigate and respond to legitimate enquiries, complaints, and reports in a timely and professional manner."
      }
    ]
  },
  {
    "slug": "freight-forwarder-policy",
    "title": "FREIGHT FORWARDER POLICY",
    "eyebrow": "Legal",
    "description": "Trukkas Platform (www.trukkas.com)",
    "sourceFile": "FREIGHT FORWARDER POLICY - TRUKKAS.docx",
    "updatedLabel": "Last updated: June 13, 2026",
    "content": [
      {
        "kind": "title",
        "text": "FREIGHT FORWARDER POLICY"
      },
      {
        "kind": "subtitle",
        "text": "Trukkas Platform (www.trukkas.com)"
      },
      {
        "kind": "section",
        "text": "1. INTRODUCTION"
      },
      {
        "kind": "subsection",
        "text": "1.1 Purpose of this Policy"
      },
      {
        "kind": "paragraph",
        "text": "This Freight Forwarder Policy establishes the standards, obligations, responsibilities, and operational requirements applicable to Freight Forwarders using the Trukkas Platform."
      },
      {
        "kind": "paragraph",
        "text": "The Policy is intended to promote safety, transparency, operational efficiency, regulatory compliance, cargo security, and fair dealings among all participants within the Trukkas logistics ecosystem."
      },
      {
        "kind": "subsection",
        "text": "1.2 Scope of Application"
      },
      {
        "kind": "paragraph",
        "text": "This Policy applies to all Freight Forwarders, logistics coordinators, cargo owners, corporate customers, agents, representatives, and other users who arrange, manage, book, coordinate, or facilitate transportation services through the Platform."
      },
      {
        "kind": "subsection",
        "text": "1.3 Relationship with Other Policies"
      },
      {
        "kind": "paragraph",
        "text": "This Policy shall be read together with:"
      },
      {
        "kind": "listItem",
        "text": "(a) the Trukkas Terms of Use;"
      },
      {
        "kind": "listItem",
        "text": "(b) the Trukkas Privacy Policy;"
      },
      {
        "kind": "listItem",
        "text": "(c) the Trukkas Driver Policy;"
      },
      {
        "kind": "listItem",
        "text": "(d) applicable transportation, customs, and trade regulations; and"
      },
      {
        "kind": "listItem",
        "text": "(e) any other policies issued by Trukkas from time to time."
      },
      {
        "kind": "subsection",
        "text": "1.4 Compliance Requirement"
      },
      {
        "kind": "paragraph",
        "text": "Compliance with this Policy is a condition for continued access to and use of the Platform."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to suspend, restrict, or terminate access to the Platform where a Freight Forwarder fails to comply with this Policy."
      },
      {
        "kind": "section",
        "text": "2. DEFINITIONS"
      },
      {
        "kind": "paragraph",
        "text": "For purposes of this Policy:"
      },
      {
        "kind": "paragraph",
        "text": "\"Account\" means a registered user account created on the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Booking\" means a transportation request, logistics engagement, or cargo movement arrangement created through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Cargo\" means goods, products, materials, equipment, containers, machinery, or other items transported through services facilitated by the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Delivery\" means the successful transportation and handover of Cargo to the designated recipient."
      },
      {
        "kind": "paragraph",
        "text": "\"Driver\" means an individual authorised to operate a vehicle used for transportation services facilitated through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Escrow Services\" means any payment holding, settlement, release, or transaction management service provided through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Freight Forwarder\" means any individual, company, logistics operator, cargo owner, agent, or organisation using the Platform to arrange, coordinate, or procure transportation services."
      },
      {
        "kind": "paragraph",
        "text": "\"Logistics Documents\" means transportation-related documents including LPOs, DOs, TDOs, EIRs, PODs, waybills, customs documentation, and other logistics records."
      },
      {
        "kind": "paragraph",
        "text": "\"Platform\" means the Trukkas website, mobile applications, software systems, APIs, and related services."
      },
      {
        "kind": "paragraph",
        "text": "\"Proof of Delivery\" or \"POD\" means documentary or electronic evidence confirming successful delivery of Cargo."
      },
      {
        "kind": "paragraph",
        "text": "\"Prohibited Cargo\" means cargo whose transportation is prohibited, restricted, or unlawful under applicable law or Platform policies."
      },
      {
        "kind": "paragraph",
        "text": "\"Trip\" means a transportation assignment undertaken through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "\"Truck Owner\" means any person or organisation that owns, manages, or provides vehicles for transportation services through the Platform."
      },
      {
        "kind": "section",
        "text": "3. ELIGIBILITY AND REGISTRATION REQUIREMENTS"
      },
      {
        "kind": "subsection",
        "text": "3.1 Eligibility Requirements"
      },
      {
        "kind": "paragraph",
        "text": "To use the Platform as a Freight Forwarder, a person or organisation must:"
      },
      {
        "kind": "listItem",
        "text": "(a) possess the legal capacity to enter into binding agreements;"
      },
      {
        "kind": "listItem",
        "text": "(b) comply with applicable laws and regulations;"
      },
      {
        "kind": "listItem",
        "text": "(c) provide accurate registration information; and"
      },
      {
        "kind": "listItem",
        "text": "(d) satisfy Trukkas verification requirements."
      },
      {
        "kind": "subsection",
        "text": "3.2 Corporate Registration Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Corporate entities may be required to provide:"
      },
      {
        "kind": "listItem",
        "text": "(a) Corporate Affairs Commission registration documents;"
      },
      {
        "kind": "listItem",
        "text": "(b) Tax Identification Number (TIN);"
      },
      {
        "kind": "listItem",
        "text": "(c) registered office details;"
      },
      {
        "kind": "listItem",
        "text": "(d) authorised representative information; and"
      },
      {
        "kind": "listItem",
        "text": "(e) other corporate information reasonably required by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "3.3 Individual Registration Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Individual users may be required to provide:"
      },
      {
        "kind": "listItem",
        "text": "(a) valid means of identification;"
      },
      {
        "kind": "listItem",
        "text": "(b) National Identification Number (NIN);"
      },
      {
        "kind": "listItem",
        "text": "(c) contact information;"
      },
      {
        "kind": "listItem",
        "text": "(d) proof of address; and"
      },
      {
        "kind": "listItem",
        "text": "(e) any additional information reasonably required by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "3.4 Verification and Approval"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to verify all submitted information and may approve, reject, suspend, or restrict accounts based on verification outcomes."
      },
      {
        "kind": "subsection",
        "text": "3.5 Ongoing Compliance"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall maintain accurate and current account information and promptly update any material changes affecting their eligibility or operations."
      },
      {
        "kind": "section",
        "text": "4. FREIGHT FORWARDER RESPONSIBILITIES"
      },
      {
        "kind": "subsection",
        "text": "4.1 General Responsibilities"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall:"
      },
      {
        "kind": "listItem",
        "text": "(a) use the Platform lawfully and responsibly;"
      },
      {
        "kind": "listItem",
        "text": "(b) provide accurate and complete information;"
      },
      {
        "kind": "listItem",
        "text": "(c) comply with applicable laws and regulations;"
      },
      {
        "kind": "listItem",
        "text": "(d) cooperate with Drivers, Truck Owners, and Trukkas personnel; and"
      },
      {
        "kind": "listItem",
        "text": "(e) maintain professional standards in all Platform interactions."
      },
      {
        "kind": "subsection",
        "text": "4.2 Duty of Accuracy"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall ensure that all information submitted through the Platform is accurate, complete, and not misleading."
      },
      {
        "kind": "subsection",
        "text": "4.3 Record Keeping"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall maintain appropriate records relating to bookings, cargo declarations, transportation instructions, payments, and logistics documentation."
      },
      {
        "kind": "subsection",
        "text": "4.4 Cooperation Obligation"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall provide timely information, instructions, approvals, and documentation reasonably required for successful transportation operations."
      },
      {
        "kind": "section",
        "text": "5. CARGO DECLARATION REQUIREMENTS"
      },
      {
        "kind": "subsection",
        "text": "5.1 Accurate Cargo Description"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall accurately disclose the nature, type, quantity, condition, value, and characteristics of all Cargo submitted for transportation."
      },
      {
        "kind": "subsection",
        "text": "5.2 Weight and Dimensions"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall provide accurate information regarding:"
      },
      {
        "kind": "listItem",
        "text": "(a) cargo weight;"
      },
      {
        "kind": "listItem",
        "text": "(b) dimensions;"
      },
      {
        "kind": "listItem",
        "text": "(c) volume;"
      },
      {
        "kind": "listItem",
        "text": "(d) loading requirements; and"
      },
      {
        "kind": "listItem",
        "text": "(e) handling requirements."
      },
      {
        "kind": "subsection",
        "text": "5.3 Special Cargo"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall disclose any special handling requirements relating to:"
      },
      {
        "kind": "listItem",
        "text": "(a) fragile cargo;"
      },
      {
        "kind": "listItem",
        "text": "(b) perishable goods;"
      },
      {
        "kind": "listItem",
        "text": "(c) oversized cargo;"
      },
      {
        "kind": "listItem",
        "text": "(d) temperature-controlled cargo; and"
      },
      {
        "kind": "listItem",
        "text": "(e) high-value cargo."
      },
      {
        "kind": "subsection",
        "text": "5.4 Dangerous Goods"
      },
      {
        "kind": "paragraph",
        "text": "Hazardous materials, dangerous goods, regulated substances, and similar cargo shall be properly identified, documented, packaged, and declared in accordance with applicable laws and regulations."
      },
      {
        "kind": "subsection",
        "text": "5.5 Liability for Misdeclaration"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall be responsible for any losses, damages, delays, injuries, liabilities, penalties, or costs arising from inaccurate, incomplete, misleading, or fraudulent cargo declarations."
      },
      {
        "kind": "section",
        "text": "6. BOOKING AND JOB CREATION"
      },
      {
        "kind": "subsection",
        "text": "6.1 Creation of Bookings"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall create Bookings using the procedures prescribed by Trukkas and provide all required information."
      },
      {
        "kind": "subsection",
        "text": "6.2 Required Booking Information"
      },
      {
        "kind": "paragraph",
        "text": "Bookings may require disclosure of:"
      },
      {
        "kind": "listItem",
        "text": "(a) cargo details;"
      },
      {
        "kind": "listItem",
        "text": "(b) pickup location;"
      },
      {
        "kind": "listItem",
        "text": "(c) delivery location;"
      },
      {
        "kind": "listItem",
        "text": "(d) transportation timelines;"
      },
      {
        "kind": "listItem",
        "text": "(e) vehicle requirements;"
      },
      {
        "kind": "listItem",
        "text": "(f) loading and unloading instructions; and"
      },
      {
        "kind": "listItem",
        "text": "(g) special handling requirements."
      },
      {
        "kind": "subsection",
        "text": "6.3 Modifications"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall promptly notify affected parties of any modifications to Bookings."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to impose restrictions, charges, or operational requirements relating to Booking modifications."
      },
      {
        "kind": "subsection",
        "text": "6.4 Cancellation of Bookings"
      },
      {
        "kind": "paragraph",
        "text": "Bookings may only be cancelled in accordance with applicable Platform policies."
      },
      {
        "kind": "paragraph",
        "text": "Repeated cancellations or abuse of cancellation rights may result in disciplinary action."
      },
      {
        "kind": "subsection",
        "text": "6.5 Verification Rights"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to review, reject, suspend, or remove Bookings that contain inaccurate information, prohibited cargo, regulatory violations, or other risks."
      },
      {
        "kind": "section",
        "text": "7. DOCUMENTATION REQUIREMENTS"
      },
      {
        "kind": "subsection",
        "text": "7.1 Required Documentation"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall provide all documents reasonably required for transportation activities, including:"
      },
      {
        "kind": "listItem",
        "text": "(a) Local Purchase Orders (LPO);"
      },
      {
        "kind": "listItem",
        "text": "(b) Delivery Orders (DO);"
      },
      {
        "kind": "listItem",
        "text": "(c) Truck Delivery Orders (TDO);"
      },
      {
        "kind": "listItem",
        "text": "(d) Equipment Interchange Receipts (EIR);"
      },
      {
        "kind": "listItem",
        "text": "(e) Proof of Delivery documentation;"
      },
      {
        "kind": "listItem",
        "text": "(f) waybills;"
      },
      {
        "kind": "listItem",
        "text": "(g) customs documentation; and"
      },
      {
        "kind": "listItem",
        "text": "(h) any other documents required by law or operational requirements."
      },
      {
        "kind": "subsection",
        "text": "7.2 Accuracy of Documents"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall ensure that all documents submitted through the Platform are accurate, complete, valid, and lawful."
      },
      {
        "kind": "subsection",
        "text": "7.3 Electronic Documentation"
      },
      {
        "kind": "paragraph",
        "text": "Electronic records submitted through the Platform may be relied upon for operational, payment, audit, compliance, and dispute-resolution purposes."
      },
      {
        "kind": "subsection",
        "text": "7.4 Record Retention"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall retain relevant documentation for such periods as may be required by applicable law or business needs."
      },
      {
        "kind": "section",
        "text": "8. PAYMENT OBLIGATIONS"
      },
      {
        "kind": "subsection",
        "text": "8.1 Payment Responsibility"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall be responsible for all fees, transportation charges, Platform charges, taxes, and other amounts due in connection with transportation services arranged through the Platform."
      },
      {
        "kind": "subsection",
        "text": "8.2 Escrow Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Where escrow services are utilised, Freight Forwarders shall comply with all escrow funding, verification, and release requirements established by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "8.3 Timely Payments"
      },
      {
        "kind": "paragraph",
        "text": "All payments shall be made within the prescribed timeframes and through approved payment channels."
      },
      {
        "kind": "subsection",
        "text": "8.4 Disputed Payments"
      },
      {
        "kind": "paragraph",
        "text": "Payment disputes shall be reported promptly and supported by relevant documentation."
      },
      {
        "kind": "subsection",
        "text": "8.5 Fraud Prevention"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall not engage in chargeback abuse, payment manipulation, fraudulent refund requests, or other improper payment practices."
      },
      {
        "kind": "section",
        "text": "9. CARGO SAFETY AND SECURITY"
      },
      {
        "kind": "subsection",
        "text": "9.1 Packaging Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall ensure that Cargo is appropriately packaged, labelled, secured, and prepared for transportation."
      },
      {
        "kind": "subsection",
        "text": "9.2 Loading Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall provide accurate loading instructions and ensure that loading activities comply with safety requirements."
      },
      {
        "kind": "subsection",
        "text": "9.3 High-Value Cargo"
      },
      {
        "kind": "paragraph",
        "text": "Where Cargo is of significant value, Freight Forwarders shall disclose such value and implement appropriate security measures."
      },
      {
        "kind": "subsection",
        "text": "9.4 Security Responsibilities"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall cooperate with Drivers, Truck Owners, and Trukkas in implementing reasonable cargo security measures."
      },
      {
        "kind": "subsection",
        "text": "9.5 Incident Reporting"
      },
      {
        "kind": "paragraph",
        "text": "Cargo loss, damage, theft, contamination, shortages, or other incidents shall be reported promptly through approved reporting channels."
      },
      {
        "kind": "section",
        "text": "10. INTERACTION WITH DRIVERS AND TRUCK OWNERS"
      },
      {
        "kind": "subsection",
        "text": "10.1 Professional Conduct"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall interact with Drivers, Truck Owners, and other users professionally, respectfully, and in good faith."
      },
      {
        "kind": "subsection",
        "text": "10.2 Cooperation"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall provide reasonable assistance, information, and support necessary for successful transportation operations."
      },
      {
        "kind": "subsection",
        "text": "10.3 Non-Harassment"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall not engage in harassment, intimidation, discrimination, threats, abusive conduct, or other inappropriate behaviour."
      },
      {
        "kind": "subsection",
        "text": "10.4 Dispute Escalation"
      },
      {
        "kind": "paragraph",
        "text": "Disputes arising between Freight Forwarders, Drivers, or Truck Owners shall be reported through the Platform's designated dispute resolution channels."
      },
      {
        "kind": "subsection",
        "text": "10.5 Unauthorised Instructions"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall not issue instructions that would require Drivers or Truck Owners to violate applicable laws, safety requirements, Platform policies, or contractual obligations."
      },
      {
        "kind": "section",
        "text": "11. PROHIBITED CARGO"
      },
      {
        "kind": "subsection",
        "text": "11.1 General Prohibition"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall not offer, upload, book, transport, or attempt to transport any Cargo that is unlawful, dangerous, prohibited, restricted, or otherwise unsuitable for transportation through the Platform."
      },
      {
        "kind": "subsection",
        "text": "11.2 Illegal Goods"
      },
      {
        "kind": "paragraph",
        "text": "The following categories of Cargo are strictly prohibited:"
      },
      {
        "kind": "listItem",
        "text": "(a) stolen goods;"
      },
      {
        "kind": "listItem",
        "text": "(b) counterfeit products;"
      },
      {
        "kind": "listItem",
        "text": "(c) narcotics and controlled substances;"
      },
      {
        "kind": "listItem",
        "text": "(d) illegal firearms and ammunition;"
      },
      {
        "kind": "listItem",
        "text": "(e) explosives not authorised by law;"
      },
      {
        "kind": "listItem",
        "text": "(f) smuggled goods; and"
      },
      {
        "kind": "listItem",
        "text": "(g) any other goods whose transportation is prohibited by applicable law."
      },
      {
        "kind": "subsection",
        "text": "11.3 Hazardous and Restricted Cargo"
      },
      {
        "kind": "paragraph",
        "text": "Dangerous goods, hazardous materials, chemicals, radioactive substances, toxic substances, flammable materials, and other regulated cargo may only be transported where:"
      },
      {
        "kind": "listItem",
        "text": "(a) transportation is lawful;"
      },
      {
        "kind": "listItem",
        "text": "(b) all required licences and permits have been obtained;"
      },
      {
        "kind": "listItem",
        "text": "(c) proper disclosures have been made; and"
      },
      {
        "kind": "listItem",
        "text": "(d) all regulatory requirements have been satisfied."
      },
      {
        "kind": "subsection",
        "text": "11.4 Right to Refuse Cargo"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to reject, suspend, cancel, or remove any Booking involving Cargo that presents legal, regulatory, operational, reputational, or safety risks."
      },
      {
        "kind": "subsection",
        "text": "11.5 Liability for Prohibited Cargo"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall be solely responsible for all consequences arising from the declaration, booking, loading, transportation, or attempted transportation of prohibited or improperly declared Cargo."
      },
      {
        "kind": "section",
        "text": "12. LOCATION TRACKING AND MONITORING"
      },
      {
        "kind": "subsection",
        "text": "12.1 Access to Tracking Information"
      },
      {
        "kind": "paragraph",
        "text": "Where available, Freight Forwarders may be provided access to location tracking information relating to Trips facilitated through the Platform."
      },
      {
        "kind": "subsection",
        "text": "12.2 Permitted Use"
      },
      {
        "kind": "paragraph",
        "text": "Tracking information shall be used solely for legitimate transportation, logistics, operational, compliance, security, and customer service purposes."
      },
      {
        "kind": "subsection",
        "text": "12.3 Confidentiality of Tracking Data"
      },
      {
        "kind": "paragraph",
        "text": "Location data, route information, movement records, and tracking information constitute confidential operational information and shall not be disclosed to unauthorised persons."
      },
      {
        "kind": "subsection",
        "text": "12.4 Misuse of Tracking Information"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall not:"
      },
      {
        "kind": "listItem",
        "text": "(a) misuse tracking information;"
      },
      {
        "kind": "listItem",
        "text": "(b) share tracking data with unauthorised parties;"
      },
      {
        "kind": "listItem",
        "text": "(c) use tracking information for unlawful purposes; or"
      },
      {
        "kind": "listItem",
        "text": "(d) attempt to interfere with Platform monitoring systems."
      },
      {
        "kind": "subsection",
        "text": "12.5 Platform Monitoring Rights"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to utilise tracking information for operational monitoring, dispute resolution, fraud prevention, compliance verification, and security purposes."
      },
      {
        "kind": "section",
        "text": "13. DATA PROTECTION AND CONFIDENTIALITY"
      },
      {
        "kind": "subsection",
        "text": "13.1 Confidential Information"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders may receive or access confidential information relating to customers, Drivers, Truck Owners, transportation operations, pricing, business activities, cargo movements, and Platform systems."
      },
      {
        "kind": "paragraph",
        "text": "Such information shall be treated as confidential and shall not be disclosed except where authorised or required by law."
      },
      {
        "kind": "subsection",
        "text": "13.2 Personal Data"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall process personal data obtained through the Platform only for legitimate transportation and logistics purposes and in accordance with applicable data protection laws."
      },
      {
        "kind": "subsection",
        "text": "13.3 Compliance with Privacy Requirements"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall comply with:"
      },
      {
        "kind": "listItem",
        "text": "(a) the Trukkas Privacy Policy;"
      },
      {
        "kind": "listItem",
        "text": "(b) the Nigeria Data Protection Act, 2023;"
      },
      {
        "kind": "listItem",
        "text": "(c) applicable data protection regulations; and"
      },
      {
        "kind": "listItem",
        "text": "(d) any data protection requirements communicated by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "13.4 Unauthorised Use of Information"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall not:"
      },
      {
        "kind": "listItem",
        "text": "(a) sell personal data;"
      },
      {
        "kind": "listItem",
        "text": "(b) disclose confidential information;"
      },
      {
        "kind": "listItem",
        "text": "(c) harvest data from the Platform; or"
      },
      {
        "kind": "listItem",
        "text": "(d) use Platform information for unauthorised marketing, solicitation, or commercial purposes."
      },
      {
        "kind": "subsection",
        "text": "13.5 Continuing Obligations"
      },
      {
        "kind": "paragraph",
        "text": "The confidentiality and data protection obligations contained in this Policy shall survive suspension, termination, or cessation of Platform access."
      },
      {
        "kind": "section",
        "text": "14. PROHIBITED ACTIVITIES"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall not:"
      },
      {
        "kind": "listItem",
        "text": "(a) submit false, inaccurate, misleading, or incomplete information;"
      },
      {
        "kind": "listItem",
        "text": "(b) misdeclare cargo characteristics, value, weight, dimensions, or contents;"
      },
      {
        "kind": "listItem",
        "text": "(c) engage in fraud, deception, or dishonest conduct;"
      },
      {
        "kind": "listItem",
        "text": "(d) attempt to transport prohibited Cargo;"
      },
      {
        "kind": "listItem",
        "text": "(e) manipulate bidding, pricing, payment, escrow, or booking systems;"
      },
      {
        "kind": "listItem",
        "text": "(f) bypass Platform payment mechanisms in violation of Platform policies;"
      },
      {
        "kind": "listItem",
        "text": "(g) interfere with tracking systems or monitoring technologies;"
      },
      {
        "kind": "listItem",
        "text": "(h) misuse confidential information;"
      },
      {
        "kind": "listItem",
        "text": "(i) engage in bribery, corruption, or unlawful inducements;"
      },
      {
        "kind": "listItem",
        "text": "(j) infringe the rights of Drivers, Truck Owners, customers, or third parties; or"
      },
      {
        "kind": "listItem",
        "text": "(k) engage in any activity that may damage the integrity, reputation, security, or operation of the Platform."
      },
      {
        "kind": "section",
        "text": "15. INCIDENT REPORTING"
      },
      {
        "kind": "subsection",
        "text": "15.1 Reporting Obligation"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall promptly report any incident affecting Cargo, transportation activities, Drivers, Truck Owners, customers, or Platform operations."
      },
      {
        "kind": "subsection",
        "text": "15.2 Reportable Incidents"
      },
      {
        "kind": "paragraph",
        "text": "Incidents requiring reporting include:"
      },
      {
        "kind": "listItem",
        "text": "(a) cargo loss;"
      },
      {
        "kind": "listItem",
        "text": "(b) cargo damage;"
      },
      {
        "kind": "listItem",
        "text": "(c) cargo theft;"
      },
      {
        "kind": "listItem",
        "text": "(d) delivery delays;"
      },
      {
        "kind": "listItem",
        "text": "(e) documentation discrepancies;"
      },
      {
        "kind": "listItem",
        "text": "(f) safety incidents;"
      },
      {
        "kind": "listItem",
        "text": "(g) security breaches; and"
      },
      {
        "kind": "listItem",
        "text": "(h) suspected fraud or unlawful conduct."
      },
      {
        "kind": "subsection",
        "text": "15.3 Supporting Information"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall provide all available information, documents, photographs, records, and evidence relevant to any reported incident."
      },
      {
        "kind": "subsection",
        "text": "15.4 Cooperation"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall cooperate fully with investigations conducted by Trukkas, insurers, regulators, law enforcement agencies, or other authorised parties."
      },
      {
        "kind": "section",
        "text": "16. INVESTIGATIONS AND DISCIPLINARY ACTION"
      },
      {
        "kind": "subsection",
        "text": "16.1 Investigation Rights"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas reserves the right to investigate suspected breaches of this Policy, the Terms of Use, applicable laws, or Platform requirements."
      },
      {
        "kind": "subsection",
        "text": "16.2 Temporary Suspension"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may temporarily suspend a Freight Forwarder's account where:"
      },
      {
        "kind": "listItem",
        "text": "(a) fraud is suspected;"
      },
      {
        "kind": "listItem",
        "text": "(b) prohibited Cargo is involved;"
      },
      {
        "kind": "listItem",
        "text": "(c) serious complaints have been received;"
      },
      {
        "kind": "listItem",
        "text": "(d) regulatory concerns arise; or"
      },
      {
        "kind": "listItem",
        "text": "(e) continued access presents operational or security risks."
      },
      {
        "kind": "subsection",
        "text": "16.3 Disciplinary Measures"
      },
      {
        "kind": "paragraph",
        "text": "Where a breach is established, Trukkas may impose one or more of the following measures:"
      },
      {
        "kind": "listItem",
        "text": "(a) written warnings;"
      },
      {
        "kind": "listItem",
        "text": "(b) mandatory compliance training;"
      },
      {
        "kind": "listItem",
        "text": "(c) suspension of Platform access;"
      },
      {
        "kind": "listItem",
        "text": "(d) restriction of Platform privileges;"
      },
      {
        "kind": "listItem",
        "text": "(e) removal from the Platform; and"
      },
      {
        "kind": "listItem",
        "text": "(f) referral to regulatory authorities or law enforcement agencies."
      },
      {
        "kind": "subsection",
        "text": "16.4 Appeals"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders may submit written appeals against disciplinary decisions in accordance with procedures established by Trukkas."
      },
      {
        "kind": "section",
        "text": "17. LIABILITY AND INSURANCE"
      },
      {
        "kind": "subsection",
        "text": "17.1 Freight Forwarder Responsibilities"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall remain responsible for the accuracy of Cargo information, legality of Cargo, transportation instructions, compliance obligations, and all information provided through the Platform."
      },
      {
        "kind": "subsection",
        "text": "17.2 Cargo Insurance"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders are encouraged to obtain appropriate cargo insurance coverage for shipments transported through the Platform."
      },
      {
        "kind": "paragraph",
        "text": "Trukkas may require proof of insurance for certain categories of Cargo."
      },
      {
        "kind": "subsection",
        "text": "17.3 Limitation of Platform Liability"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas operates as a technology platform facilitating logistics transactions and does not assume responsibility for the actions, omissions, negligence, misconduct, or contractual obligations of Freight Forwarders, Drivers, Truck Owners, or third parties."
      },
      {
        "kind": "subsection",
        "text": "17.4 Indemnity"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders agree to indemnify and hold harmless Trukkas Global Logistics and Supply Ltd, its officers, employees, agents, affiliates, and representatives from claims, losses, liabilities, damages, costs, and expenses arising from:"
      },
      {
        "kind": "listItem",
        "text": "(a) breach of this Policy;"
      },
      {
        "kind": "listItem",
        "text": "(b) unlawful Cargo;"
      },
      {
        "kind": "listItem",
        "text": "(c) inaccurate Cargo declarations;"
      },
      {
        "kind": "listItem",
        "text": "(d) violation of applicable laws; or"
      },
      {
        "kind": "listItem",
        "text": "(e) negligent, fraudulent, or unlawful conduct."
      },
      {
        "kind": "section",
        "text": "18. COMPLIANCE WITH LAWS"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders shall comply with all applicable laws, regulations, directives, and industry requirements, including:"
      },
      {
        "kind": "listItem",
        "text": "(a) transportation and haulage laws;"
      },
      {
        "kind": "listItem",
        "text": "(b) customs and import/export regulations;"
      },
      {
        "kind": "listItem",
        "text": "(c) port and terminal regulations;"
      },
      {
        "kind": "listItem",
        "text": "(d) trade and commerce laws;"
      },
      {
        "kind": "listItem",
        "text": "(e) taxation requirements;"
      },
      {
        "kind": "listItem",
        "text": "(f) anti-corruption legislation;"
      },
      {
        "kind": "listItem",
        "text": "(g) anti-money laundering requirements; and"
      },
      {
        "kind": "listItem",
        "text": "(h) data protection and privacy laws."
      },
      {
        "kind": "section",
        "text": "19. CHANGES TO THIS POLICY"
      },
      {
        "kind": "subsection",
        "text": "19.1 Right to Amend"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd reserves the right to amend, modify, update, replace, or revise this Freight Forwarder Policy from time to time."
      },
      {
        "kind": "subsection",
        "text": "19.2 Notification of Changes"
      },
      {
        "kind": "paragraph",
        "text": "Material changes may be communicated through the Platform, email communications, account notifications, or other appropriate channels."
      },
      {
        "kind": "subsection",
        "text": "19.3 Continued Use"
      },
      {
        "kind": "paragraph",
        "text": "Continued use of the Platform following implementation of changes shall constitute acceptance of the revised Policy."
      },
      {
        "kind": "section",
        "text": "20. CONTACT INFORMATION"
      },
      {
        "kind": "paragraph",
        "text": "For enquiries relating to this Freight Forwarder Policy, bookings, cargo compliance matters, disputes, investigations, or operational issues, Freight Forwarders may contact:"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas Global Logistics and Supply Ltd"
      },
      {
        "kind": "paragraph",
        "text": "Platform: Trukkas"
      },
      {
        "kind": "paragraph",
        "text": "Website: www.trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarder Support Email: freight@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Support Email: support@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Legal Email: legal@trukkas.com"
      },
      {
        "kind": "paragraph",
        "text": "Registered Office: Lagos, Nigeria"
      },
      {
        "kind": "subsection",
        "text": "20.1 Reporting and Escalation"
      },
      {
        "kind": "paragraph",
        "text": "Freight Forwarders are encouraged to promptly report incidents, complaints, disputes, compliance concerns, or suspected violations through the designated communication channels provided by Trukkas."
      },
      {
        "kind": "subsection",
        "text": "20.2 Resolution Process"
      },
      {
        "kind": "paragraph",
        "text": "Trukkas shall use reasonable efforts to investigate and respond to legitimate enquiries, complaints, and reports in a timely and professional manner."
      }
    ]
  }
] satisfies PolicyDocument[]

export function getPolicy(slug: string) {
  return policies.find((policy) => policy.slug === slug)
}
