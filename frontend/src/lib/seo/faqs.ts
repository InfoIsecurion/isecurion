export type Faq = { question: string; answer: string };

export const homeFaqs: Faq[] = [
  {
    question: "Is ISECURION CREST accredited?",
    answer: "Yes. ISECURION is a CREST Member, accredited for Penetration Testing. CREST is an international accreditation body for the cyber security industry, and its company accreditation is awarded to organisations that meet its standards for processes, technical methodologies and data handling. The CREST accreditation applies to ISECURION's Penetration Testing service. ISECURION is also CERT-In empanelled and ISO 27001:2022 certified.",
  },
  {
    question: "What does CREST accreditation mean for penetration testing, and why does it matter?",
    answer: "CREST accreditation is an independent assessment of a company's penetration testing processes, technical methodologies and data-handling practices. For clients, it provides assurance that testing is delivered to a recognised international standard, which is valued by enterprises, regulated sectors and organisations that work with global partners. ISECURION is a CREST Member accredited for Penetration Testing.",
  },
  {
    question: "What is VAPT and why does my organisation need it?",
    answer: "VAPT stands for Vulnerability Assessment and Penetration Testing. It is a two-phase security evaluation: the assessment phase identifies known vulnerabilities in your systems, while the penetration testing phase simulates real-world attacks to exploit those weaknesses. Organisations need VAPT to discover security gaps before malicious actors do, to meet regulatory compliance requirements, and to protect sensitive customer data.",
  },
  {
    question: "What is the difference between vulnerability assessment and penetration testing?",
    answer: "A vulnerability assessment identifies, classifies and prioritises security weaknesses across systems, applications and networks, usually with a broad scan supported by manual validation. Penetration testing goes further: skilled testers actively attempt to exploit vulnerabilities to show real-world impact and attack paths. Together they make up VAPT, giving both wide coverage and proof of what an attacker could actually achieve.",
  },
  {
    question: "Is ISECURION CERT-In empanelled?",
    answer: "Yes, ISECURION is a CERT-In (Indian Computer Emergency Response Team) empanelled cybersecurity company. This empanelment is granted by the Ministry of Electronics and Information Technology (MeitY), Government of India, and confirms that our team meets the stringent technical and quality standards required to conduct cybersecurity audits and penetration testing for government and critical-sector organisations.",
  },
  {
    question: "What is the difference between CERT-In empanelment and CREST accreditation?",
    answer: "CERT-In empanelment is an Indian government recognition that allows an organisation to conduct information security audits, and it is widely required by Indian government bodies and regulated entities. CREST accreditation is an international accreditation for penetration testing providers, recognised by clients and regulators in many countries. ISECURION holds both: it is CERT-In empanelled and a CREST Member accredited for Penetration Testing.",
  },
  {
    question: "How do I choose a VAPT or penetration testing company in India?",
    answer: "Look for recognised credentials such as CERT-In empanelment and CREST accreditation, testers who hold qualifications like OSCP, CEH or CISSP, a methodology that combines manual testing with tools rather than relying only on scanners, clear reports with remediation guidance and a retest, strong confidentiality and data-handling practices, and experience in your industry. ISECURION is CERT-In empanelled, a CREST Member accredited for Penetration Testing and ISO 27001:2022 certified.",
  },
  {
    question: "What types of penetration testing does ISECURION offer?",
    answer: "ISECURION offers web application, mobile application (iOS and Android), cloud (AWS, Azure and GCP), network and infrastructure, API, IoT, industrial control system, smart contract and crypto exchange penetration testing, along with secure code review, red team assessments and AI-augmented red teaming. The CREST accreditation applies to ISECURION's Penetration Testing service.",
  },
  {
    question: "What is the difference between penetration testing and red teaming?",
    answer: "A penetration test is a scoped exercise that aims to find and exploit as many vulnerabilities as possible in specific systems. A red team assessment is objective-based: testers simulate a real adversary across people, process and technology to test whether your organisation can detect and respond to an attack. ISECURION provides both penetration testing and red team assessments, including AI-augmented red teaming.",
  },
  {
    question: "How long does a typical VAPT engagement take?",
    answer: "A web application assessment typically takes 5-10 business days, a mobile application test takes 5-7 days, a network infrastructure test ranges from 7-15 days, and a comprehensive red team exercise can take 3-6 weeks. ISECURION provides a detailed timeline estimate after an initial scoping call.",
  },
  {
    question: "What deliverables will I receive after a VAPT engagement?",
    answer: "ISECURION provides an executive summary, a technical report with findings classified by severity (Critical, High, Medium, Low, Informational), proof-of-concept evidence, detailed remediation guidance, and a remediation-verification retest to confirm fixes have been applied correctly.",
  },
  {
    question: "How much does a VAPT or penetration test cost in India?",
    answer: "The cost depends on the scope: the number of applications, APIs, IP addresses or cloud environments, the complexity of the systems, the testing approach (black box, grey box or white box), the depth required and whether a retest is included. ISECURION prepares a fixed-scope quotation after a short scoping call. To request one, email info@isecurion.com or call +91 88612 01570.",
  },
  {
    question: "How often should an organisation conduct penetration testing?",
    answer: "Most organisations should run a penetration test at least once a year and after significant changes such as a major release, infrastructure or cloud migration, acquisition or security incident. Frameworks and regulators including SOC 2, ISO 27001, PCI DSS and sector regulators in India expect regular security testing, and high-risk or fast-changing environments often test more frequently.",
  },
  {
    question: "What industries does ISECURION serve?",
    answer: "ISECURION serves a broad range of industries including BFSI, fintech, healthcare, e-commerce, government & public sector, IT & SaaS, manufacturing, automotive, crypto and blockchain, and telecommunications. We serve clients across India, the USA, the UK, the UAE, Qatar, Singapore, Australia, and the wider GCC region.",
  },
  {
    question: "What compliance frameworks does ISECURION support?",
    answer: "ISECURION supports SOC 2, ISO 27001:2022, GDPR, India's DPDP Act, RBI Information Security Audit, IRDA Audit, SEBI CSCRF, Market SOC (MSOC), AADHAR/UIDAI Audit, DORA Compliance, FIU-IND for Crypto & VDAs, UAE VASP Compliance, ISO 42001 (AI Management Systems), and UPI Compliance Audit.",
  },
  {
    question: "Does ISECURION provide 24x7 SOC and managed security services?",
    answer: "Yes. ISECURION offers Managed Security Services (MSSP), In-House SOC and Hybrid SOC services, providing round-the-clock monitoring, threat detection and incident response so that attacks can be detected, contained and remediated quickly.",
  },
  {
    question: "Does ISECURION offer cybersecurity services outside India?",
    answer: "Yes. ISECURION delivers cybersecurity services globally. We have an office in Schaumburg, Illinois, USA, and serve clients in the United Kingdom, the European Union, the UAE, Qatar, Singapore, Australia, and across the GCC region. Remote assessments and on-site engagements are both available.",
  },
  {
    question: "Where are ISECURION's offices and how can I contact the team?",
    answer: "ISECURION's corporate office is in Bengaluru, with offices in Kolkata, Mumbai, Ahmedabad and Noida in India, and in Schaumburg, Illinois in the United States. To contact the team, email info@isecurion.com or call +91 88612 01570.",
  },
  {
    question: "What is Vulnytics and how does it help my security team?",
    answer: "Vulnytics is ISECURION's proprietary vulnerability management platform. It aggregates findings from penetration tests, automated scanners, and bug bounty programs into a single workspace, enabling teams to assign tasks, track remediation progress, and generate executive and technical reports.",
  },
  {
    question: "What is Drosera, ISECURION's phishing simulation platform?",
    answer: "Drosera is ISECURION's phishing simulation platform. It helps organisations run realistic phishing campaigns, measure how employees respond and strengthen security awareness over time. Drosera complements ISECURION's Phishing Simulation service and is available at drosera.ai.",
  },
];