export interface NewsItem {
  id: string;
  date: string; // ISO format "YYYY-MM-DD"
  displayDate: {
    sk: string;
    en: string;
  };
  categoryKey: 'EVENT' | 'PARTNERSHIP' | 'ANNOUNCEMENT' | 'CONFERENCE' | 'TRAINING';
  title: {
    sk: string;
    en: string;
  };
  description: {
    sk: string;
    en: string;
  };
  link?: string;
  linkText?: {
    sk: string;
    en: string;
  };
  secondaryLink?: string;
  secondaryLinkText?: {
    sk: string;
    en: string;
  };
  featured?: boolean; // Highlights top/special items (e.g., ticket sales, annual flagship events)
  isUpcoming?: boolean; // True for future/upcoming events
  images?: string[]; // Path to public images e.g. ["/images/dhs-forum-1.jpg"]
}

export const CATEGORY_LABELS = {
  EVENT: { sk: 'Podujatie', en: 'Event' },
  PARTNERSHIP: { sk: 'Partnerstvo', en: 'Partnership' },
  ANNOUNCEMENT: { sk: 'Oznámenie', en: 'Announcement' },
  CONFERENCE: { sk: 'Konferencia', en: 'Conference' },
  TRAINING: { sk: 'Školenie', en: 'Training' },
};

export const newsArticles: NewsItem[] = [
  {
    id: 'dhs-forum-2026',
    date: '2026-04-10',
    displayDate: { sk: '10. apríl 2026', en: 'April 10, 2026' },
    categoryKey: 'CONFERENCE',
      isUpcoming: false,
    title: {
      sk: 'Digital Health Slovakia Forum 2026: medzinárodná platforma pre digitálne zdravotníctvo',
      en: 'Digital Health Slovakia Forum 2026: An International Platform for Digital Health',
    },
    description: {
      sk: 'Digital Health Slovakia zorganizovala v Bratislave Digital Health Slovakia Forum 2026, ktoré spojilo odborníkov a stakeholderov z 13 krajín. Program priniesol praktické skúsenosti z digitalizácie zdravotníctva vo viacerých európskych krajinách a venoval sa interoperabilite, HL7 FHIR, SNOMED CT a implementácii EHDS na Slovensku.',
      en: 'Digital Health Slovakia organized the Digital Health Slovakia Forum 2026 in Bratislava, bringing together digital health experts and stakeholders from 13 countries. The programme featured practical experiences from digital health transformation across Europe and focused on interoperability, HL7 FHIR, SNOMED CT and EHDS implementation in Slovakia.',
    },
    link: 'https://dhsforum.com/',
    linkText: { sk: 'Navštíviť stranku fóra', en: 'Visit Forum Website' },
    secondaryLink: 'https://www.tickettailor.com/events/ehdssolutions/2060538',
    secondaryLinkText: { sk: 'Kúpiť lístky / Registrácia', en: 'Buy Tickets / Register' },
    images: ['/images/DHS_Forum_2026.jpg'],
  },
  {
    id: 'snomed-vienna-2026',
    date: '2026-04-12',
    displayDate: { sk: '12.–17. apríl 2026', en: 'April 12–17, 2026' },
    categoryKey: 'EVENT',
    title: {
      sk: 'SNOMED International Business Meetings vo Viedni',
      en: 'SNOMED International Business Meetings in Vienna',
    },
    description: {
      sk: 'Digital Health Slovakia sa zúčastnila SNOMED International Business Meetings a SNOMED in Austria Day vo Viedni. Odborné diskusie sa venovali sémantickej interoperabilite, implementácii SNOMED CT a významu štandardizovaných zdravotných údajov v kontexte EHDS.',
      en: 'Digital Health Slovakia participated in the SNOMED International Business Meetings and SNOMED in Austria Day in Vienna. Discussions focused on semantic interoperability, SNOMED CT implementation and the importance of standardized health data in the context of the EHDS.',
    },
    images: ['/images/SNOMED_IBM_2026.jpg'],
  },
  {
    id: 'metrocamp-2026',
    date: '2026-04-21',
    displayDate: { sk: '21. apríl 2026', en: 'April 21, 2026' },
    categoryKey: 'EVENT',
    title: {
      sk: 'Interoperabilita zdravotných údajov: Slovensko verzus Európa',
      en: 'Health Data Interoperability: Slovakia vs. Europe',
    },
    description: {
      sk: 'Digital Health Slovakia prispela na konferencii METROCAMP Healthcare Day prezentáciou o stave interoperability zdravotných údajov na Slovensku v porovnaní s Európou. Pozornosť bola venovaná významu medzinárodných štandardov a príležitostiam, ktoré pre Slovensko prináša Európsky priestor pre zdravotné údaje (EHDS).',
      en: 'Digital Health Slovakia contributed to METROCAMP Healthcare Day with a presentation on the state of health data interoperability in Slovakia compared with Europe. The presentation highlighted the importance of international standards and the opportunities that the European Health Data Space (EHDS) brings to Slovakia.',
    },
    images: ['/images/METROCAMP_2026.jpg'],
  },
  {
    id: 'hl7-rotterdam-2026',
    date: '2026-05-16',
    displayDate: { sk: '16.–22. máj 2026', en: 'May 16–22, 2026' },
    categoryKey: 'EVENT',
    title: {
      sk: 'Budovanie kompetencií v oblasti interoperability na HL7 Connectathone',
      en: 'Building Interoperability Skills at the HL7 Connectathon',
    },
    description: {
      sk: 'Na HL7 International Connectathone a Working Group Meeting v Rotterdame bola predstavený projekt XiA zameraný na budovanie kompetencií v oblasti interoperability. Digital Health Slovakia zorganizovala moderovanú diskusiu o vzdelávaní IT odborníkov, zdravotníckych pracovníkov, manažérov a regulátorov.',
      en: 'At the HL7 International Connectathon and Working Group Meeting in Rotterdam, the XiA project, focused on building interoperability skills, was presented. Digital Health Slovakia organized and moderated a discussion on interoperability education for IT professionals, healthcare professionals, managers and regulators.',
    },
    images: ['/images/HL7_Connectathon_2026.jpg'],
  },
  {
    id: 'globsec-prague-2026',
    date: '2026-05-22',
    displayDate: { sk: '22. máj 2026', en: 'May 22, 2026' },
    categoryKey: 'EVENT',
    title: {
      sk: 'Inovácie v zdravotníctve a Európsky priestor pre zdravotné údaje na GLOBSEC',
      en: 'Healthcare Innovation and the European Health Data Space at GLOBSEC',
    },
    description: {
      sk: 'Digital Health Slovakia sa zúčastnila odbornej diskusie GLOBSEC v Prahe venovanej inováciám v zdravotníctve, európskemu regulačnému prostrediu a Európskemu priestoru pre zdravotné údaje (EHDS). Diskusia sa zamerala na hľadanie rovnováhy medzi reguláciou, podporou inovácií a konkurencieschopnosťou európskeho zdravotníctva.',
      en: 'Digital Health Slovakia participated in a GLOBSEC discussion in Prague focused on healthcare innovation, the European regulatory landscape and the European Health Data Space (EHDS). The discussion explored the balance between regulation, innovation and the competitiveness of European healthcare.',
    },
    images: ['/images/GLOBSEC_2026.jpg'],
  },
  {
    id: 'gidh-geneva-2026',
    date: '2026-06-22',
    displayDate: { sk: '22.–24. jún 2026', en: 'June 22–24, 2026' },
    categoryKey: 'EVENT',
    title: {
      sk: 'Globálne perspektívy digitálneho zdravia: GIDH v Ženeve',
      en: 'Global Perspectives on Digital Health: GIDH in Geneva',
    },
    description: {
      sk: 'Digital Health Slovakia sa zúčastnila 3. stretnutia Global Initiative on Digital Health (GIDH) v sídle WHO v Ženeve. Diskusie sa venovali pripravovanej Globálnej stratégii digitálneho zdravia WHO na roky 2028–2033, interoperabilite, digitálnej infraštruktúre a národným prístupom k digitalizácii zdravotníctva.',
      en: 'Digital Health Slovakia participated in the 3rd Global Convening of the Global Initiative on Digital Health (GIDH) at WHO Headquarters in Geneva. Discussions focused on the WHO Draft Global Strategy on Digital Health 2028–2033, interoperability, digital public infrastructure and country-led approaches to digital health transformation.',
    },
    link: 'https://www.linkedin.com/posts/eva-sabajova-234b4464_gidh-interoperability-ehds-ugcPost-7478107724376014850-IeO0/',
    linkText: { sk: 'Zobraziť príspevok na LinkedIn', en: 'View LinkedIn Post' },
    images: ['/images/WHO_GIDH_2026.jpg'],
  },
  {
    id: 'phc-2026',
    date: '2026-09-09',
    displayDate: { sk: '9.–11. september 2026', en: 'September 9–11, 2026' },
    categoryKey: 'CONFERENCE',
    isUpcoming: true,
    title: {
      sk: 'EHDS a vzdelávanie v oblasti interoperability na Public Health Conference 2026',
      en: 'EHDS and Interoperability Education at Public Health Conference 2026',
    },
    description: {
      sk: 'Digital Health Slovakia prispeje k programu Public Health Conference 2026 prezentáciami venovanými Európskemu priestoru pre zdravotné údaje (EHDS) a vzdelávaniu v oblasti interoperability v rámci projektu XiA. Témy sa zamerajú na aktuálne výzvy a príležitosti spojené s digitalizáciou a interoperabilitou vo verejnom zdravotníctve.',
      en: 'Digital Health Slovakia will contribute to the Public Health Conference 2026 with presentations on the European Health Data Space (EHDS) and interoperability education within the XiA project. The sessions will address current challenges and opportunities related to digital transformation and interoperability in public health.',
    },
    link: 'https://v4phc2026.org',
    linkText: { sk: 'V4 PHC 2026 – Healthy Horizons', en: 'V4 PHC 2026 – Healthy Horizons' },
    images: ['/images/PHC_2026.png'],
  },
  {
    id: 'hospitals-fhir-pisa-2026',
    date: '2026-10-19',
    displayDate: { sk: '19.–21. október 2026', en: 'October 19–21, 2026' },
    categoryKey: 'EVENT',
    isUpcoming: true,
    title: {
      sk: 'Hospitals on FHIR User Days 2026 v Pise',
      en: 'Hospitals on FHIR User Days 2026 in Pisa',
    },
    description: {
      sk: 'Digital Health Slovakia sa v októbri 2026 zúčastní podujatia Hospitals on FHIR User Days v Pise. Podujatie bude zamerané na výmenu practical skúseností s využívaním HL7 FHIR v nemocniciach a na ďalšie budovanie európskej komunity Hospitals on FHIR.',
      en: 'Digital Health Slovakia will participate in the Hospitals on FHIR User Days in Pisa in October 2026. The event will focus on exchanging practical experience in the use of HL7 FHIR in hospitals and further building the European Hospitals on FHIR community.',
    },
    link: 'https://www.linkedin.com/posts/eva-sabajova-234b4464_eehrxf-hospitalsonfhir-hl7-ugcPost-7483523154133495808-gEGV/',
    linkText: { sk: 'Zobraziť detail na LinkedIn', en: 'View details on LinkedIn' },
    images: ['/images/HospitalsOnFHIR_2026.gif'],
  },
];