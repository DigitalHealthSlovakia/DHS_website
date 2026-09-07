export interface NewsItem {
  date: string;
  category: string; // "EVENT", "PARTNERSHIP", "ANNOUNCEMENT"
  content: string;
  link: string;
  linkText: string;
  additionalText?: string;
  secondaryLink?: string;
  secondaryLinkText?: string;
}

export const newsArticles: NewsItem[] = [
  {
    date: "2026-04-10",
    category: "UPCOMING EVENT",
    content: "Join us at the annual ",
    linkText: "Digital Health Slovakia Forum",
    link: "https://dhsforum.com/",
    additionalText: " conference. This year's DHS Forum will take place on April 10, 2026 at Loft Hotel in Bratislava. ",
    secondaryLinkText: "Register here.",
    secondaryLink: "https://www.tickettailor.com/events/ehdssolutions/2060538"
  },
  {
    date: "2023-06-03",
    category: "GLOBAL PARTNERSHIP",
    content: "The World Health Organization signed an agreement with HL7 International to jointly develop guidelines and advance the adoption of open interoperability standards that WHO says are critical to the development of equitable and evidence-based digital health, June 3, 2023. More information: ",
    link: "https://www.who.int/news/item/03-07-2023-who-and-hl7-collaborate-to-support-adoption-of-open-interoperability-standards",
    linkText: "WHO and HL7 collaborate to support adoption of open interoperability standards."
  }
];