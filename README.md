# Digital Health Slovakia (DHS) Website

Official website for **Digital Health Slovakia**, built with [Astro](https://astro.build/). This site is localized in English and Slovak and hosted as a static site via a Microsoft 365 / Azure non-profit grant.

## 📂 Content Management (Where to update what)

To update the website's dynamic content, edit the TypeScript files in `src/data/`. You do not need to edit the `.astro` files for standard text/list updates.

| Content Area | Data File | Associated Page |
| :--- | :--- | :--- |
| **Team Profiles** | `src/data/team.ts` | About Us |
| **Membership Prices** | `src/data/pricing.ts` | Membership |
| **Members/Partners** | `src/data/members.ts` | Home / About |
| **News & Articles** | `src/data/news.ts` | News |
| **Affiliations** | `src/data/affiliations.ts` | About / Partners |
| **Supporters** | `src/data/supporters.ts` | Support / Home |

## 🖼️ Media & Assets
* **Images:** Located in `public/images/`.
  * Team photos start with `Tim_`
  * Member logos start with `Clenovia_`
  * Partner logos start with `Partneri_`
  * Supporter logos start with `Podporili_`
* **Documents:** Located in `public/documents/` (e.g., V2Pv25_DHS.pdf).

## 🌍 Localization
The site uses a folder-based routing system:
* **English pages:** `src/pages/en/`
* **Slovak pages:** `src/pages/sk/`
* **Styles:** All global styling is managed in `src/styles/global.css`.

## 🛠️ Development Commands

Use the Visual Studio Code terminal to run the following:

1. **Install Dependencies** (Run once after cloning or downloading):
   bash
   npm install

2. **Start Local Preview** (Real-time updates at localhost:4321):

    Bash
    npm run dev

3. **Build Website** (Generates static files for deployment):

    Bash
    npm run build

## 🔒 Security Notes
    Privacy: Do you not commit private API keys or personal contact numbers to the GitHub repository.

    Deployment: This site is set up for static hosting. Ensure all assets are in the public/ folder before building.

Maintained by: Digital Health Slovakia - Michal Juhás

Contact: info@digitalhealthslovakia.com