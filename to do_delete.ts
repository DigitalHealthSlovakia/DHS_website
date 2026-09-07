/* thigs which need to be done  */
## AZURE migration
1. migrate the domain 
2. migrate Emails
    prepare steps for ESA about the migration... what exactly needs to be done



## NEWS
need to automate the LINKEDIN feed -- use Azure cloud - we need to redo the news data as well as the news.astro
need to resolve the Slovak vs English versions...

                Step 1: The "Trigger" (Azure Logic App)
                1.	Log into your Azure Portal.
                2.	Search for Logic Apps and create a new one called LinkedInToWebsite.
                3.	The Trigger: Search for the LinkedIn connector.
                o	Select "When a new post is published by me."
                o	Log in with the CEO's LinkedIn credentials. (This is a one-time connection; no 60-day tokens).
                4.	The Action: Search for the GitHub connector.
                o	Select "Create or Update File."
                o	Choose your website's repository and the src/data/news.ts file.
                ________________________________________
                Step 2: The "Idiotproof" Code
                Since you have no coding experience, I have rewritten the news.ts file to be a "template." You will paste this into your project once.
                Action: Replace your src/data/news.ts with this:
                TypeScript
                export interface NewsItem {
                date: string;
                category: string;
                content: string;
                link: string;
                }

                // THE ROBOT ONLY TOUCHES THE LINE BELOW
                export const autoNews: NewsItem[] = [
                /* ROBOT_START */
                /* ROBOT_END */
                ];

                // YOU ONLY TOUCH THIS PART MANUALLY
                export const manualNews: NewsItem[] = [
                {
                    date: "2026-04-10",
                    category: "UPCOMING EVENT",
                    content: "Join us at the Digital Health Slovakia Forum.",
                    link: "https://dhsforum.com/",
                }
                ];

                export const newsArticles = [...manualNews, ...autoNews];



## CONTACT FORM

 line 16
 <section class="contact-section" data-animate>
      <form action="PASTE_YOUR_AZURE_URL_HERE" method="POST" class="contact-form">
