# Ready Lab website 

This webpage was built using the [Vite](https://vite.dev/guide/) build tool as a React JavaScript project with Tailwind CSS enabled. Some UI components (under `src/components/ui/`) were adopted from [Shadcn UI](https://ui.shadcn.com). The website is deployed as a static webpage on GitHub Pages, and then redirected to the MIE domain. 

- [Maintenance Guide](#maintenance-guide): guide for updating rendered data 
    - [Publications](#publications)
    - [Team Members](#team-members)
    - [News](#news)
    - [Group Photos](#group-photos)
- [Setup Guide](#setup-guide): guide to setting up the local code repository for the first time 
- [Local Testing Guide](#local-testing-guide): guide to locally test the website rendering before pushing updates to the `main` branch. 
- [Deployment Guide](#deployment-guide): documentation of the deployment process. 
- [Code Architecture](#code-architecture): summary of the high-level design of this code repository and a guide for major design modifications to the website. 

**CAUTION**: when changes are made to the website, always [test locally](#local-testing-guide) before pushing your changes to the `main` branch. If you are unsure, push your changes to a branch and have someone else to test it before merging the branch to `main`. 

## Maintenance Guide 

If modification of the user interface is not needed, managing the content being displayed on the website can be done in the `json` files under directory `src/assets/`. Please do not rename or move any file. 

### Publications 

All publications are managed in the file `src/assets/publications.json`. Specifications of the entries are detailed below, and please enter information with formats that are consistent with existing entries. 

```json 
{
    "title": "required", 
    "authors": "required", 
    "venue": "required - name of the journal or the conference proceeding", 
    "year": "required - a number year for sorting", 
    "tags": ["a list of tags that the paper should be filtered with"], 
    "links": {
        "doi": "optional", 
        "pdf": "optional", 
        "slides": "optional", 
        "code": "optional - a link to e.g. a GitHub code repository"
    }, 
    "award": "optional - name of the award associated with the paper", 
    "abstract": "optional" 
}
```

**Notes**: 
- For the `tags`, the website will automatically find all unique tags assigned to all papers listed in `publications.json` and generate the filter options. Please be careful with spelling and cases to avoid duplicates. 
- For the `links`: the `doi` and `code` should be actual URL links to webpages, if entered. If the `pdf` and/or the `slides` options are used, rename and upload the document in the appropriate folder under `public/pdfs/` and `public/slides/`, and enter the corresponding file name in the paper entry in `publications.json` (file name only, no directory). 
- If additional `links` options need to be added, modifying the corresponding data type in `src/type.ts`. Then, add a corresponding icon to `public/icons/` and define the path in `src/components/PublicationCard.tsx` accordingly. 
- If an `abstract` is added, double check the content being pasted in `publications.json`. Note that any special typesetting and hyperlinks are currently not supported. 

### Team Members

All members, including active members and alumni, are managed in the file `src/assets/members.json`. Specifications of the entries are detailed below: 

```json 
{
    "name": "required", 
    "active": "required - either true or false", 
    "graduationYear": "a number year is required - any number if active", 
    "imageUrl": "required - file name for the headshot in src/assets/headshots", 
    "role": "required - one of postdoc, phd, masc, meng, undergrad, visiting", 
    "description": "required", 
    "linkedinUrl": "optional", 
    "googlescholarUrl": "optional"
}
```

**Note**: 
- A good convention is to always add new members at the top of the JSON list, so that more senior members show up earlier on the rendered page. 
- If `active` is set to `true`, number entered for `graduationYear` is ignored, but a number is still required for data type consistency. 
- When an active lab member graduates, simply change `active` to `false` and enter the correct `graduationYear`. 
- Please rename the headshot image with a meaningful filename for sustainable file management in `public/headshots/`. Crop the image to square (1:1 aspect ratio) to avoid unintended cut off or scaling when being rendered on the website. 
- The `description` field should be entered as Markdown text, where hyperlinks may be added (e.g., `[Google](www.google.com)`) and special characters may be used in math mode (i.e., with `$`). 
- If a `linkedinUrl` or a `googlescholarUrl` is entered, an hyperlinked icon will automatically show up in your profile. If an URL is not available, please remove the field. 

### News 

All news are managed in the file `src/assets/news.json`. Specifications of the entries are detailed below: 

```json 
{
    "year": "required", 
    "month": "required -- number month between 1 and 12", 
    "type": "required -- one of Member, Award, Publication, Presentation, Graduation, Other", 
    "content": "required"
}
```

**Note**:
- If a new `type` that is not in the currently supported list is needed, modify the corresponding data type in `src/type.ts`. Then, add a corresponding icon to the new news type under `public/icons/` and define the path in `src/components/NewsCard.tsx` accordingly. 
- The `content` field should be entered as Markdown text, where hyperlinks may be added (e.g., `[Google](www.google.com)`) and special characters may be used in math mode (i.e., with `$`). 

### Group Photos

To add new group photos to the `Home` page: upload the image under `public/lab_photos/`, and then add the file name under the `lab_photos` list in `src/route/Home.tsx`. Note that the photos will be displayed in the order file names are listed in this list, and ensure the new photo is cropped to similar aspect ratios to avoid unintended scaling. 

## Setup Guide 

Install all required pacakges and dependencies listed in `package.json` by running the following command in the terminal window: 

```
npm install 
``` 

A new folder named `node_modules/` should then be created in your repository's root directory. This folder is not tracked by Git (added in `.gitignore`). 

## Local Testing Guide 

**NOTE**: If this is your first time running the website locally on your computer, complete the [Setup Guide](#setup-guide) first. 

After editing the code, and before pushing any changes to the cloud, you may launch a development version of the website locally by running the following command in the terminal window: 

```
npm run dev 
``` 

The website should now be locally available at the following URL through any web browser on your computer: 

```
http://localhost:5173
```

When testing the user interface, using Google Chrome as the browser is recommended. Make sure the window is resized to mobile width to test for responsiveness of the web elements. 

While the local dev version is running, you may still make changes to the code. Every time you save your changes in a file (e.g., `Cmd` + `S` or `Ctrl` + `S`), the webpage will be automatically updated and reloaded with the new changes. Sometimes, you may need to manually refresh the page due to browser cache, but you should not need to restart the terminal command. 

Enter `Ctrl` + `C` in the same terminal where you initiated `npm run dev` to end the local runtime. 

## Deployment Guide 

A GitHub action has been created in `.github/workflows/deploy.yml` to automatically build and deploy the static webpage to GitHub pages every time a new commit is pushed to the `main` branch. 

If new npm packages are installed and the GitHub deployment fails, read the failure message carefully. It is very likely that your `package-lock.json` is out of sync. If running the `npm install` command locally to automatically update `package-lock.json` does not fix the build failure, try the following workflow in the terminal: 
- Delete existing files: `rm -rf node_modules package-lock.json`
- Clear the cache: `npm cache clean --force` 
- Regenerate the lockfile: `npm install` 
- Test the strict install: `npm ci` 
- Commit and push all the new changes to GitHub 

The website is being redirected to the MIE-managed domain: `readylab.mie.utoronto.ca`. MIE manages the DNS registration, and we need to make sure this subdomain is recorded in the `CNAME` file and saved in the GitHub repository: "Settings" --> "Pages" --> "Custom domain". The option of "Enforce HTTPS" is also checked to support secure HTTPS connection. 

More instructions on configuring a subdomain can be found [here](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain), and the DNS CNAME added by MIE is 
``` 
readylab.mie.utoronto.ca.   IN      CNAME   readylab-utoronto.github.io.
```

## Code Architecture 

Design of this website has been made as modular as possible: 
- Each webpage of the website is designed in a separate `.tsx` file under `src/routes/`. 
- The header (navigation panel) and the footer are consistent across all webpages, and they are designed in `src/components/NavBar.tsx` and `src/components/Footer.tsx`. 
- Many pages reuse standard components designed in `src/components/`, such as the presentation of each publication, each lab member, and each news. 
- Many UI components are adopted from [Shadcn UI](https://ui.shadcn.com), and these components are imported from `src/components/ui/`. 
- The data types of some common data objects that are used across multiple files (e.g., a paper reference, a lab member) are defined in `src/type.ts`. 
- Structured data for the website that can be organized in JSON files should be stored in `src/assets/`, and other static images should be stored in `public/`. The difference is that resources in `src/assets/` need to be imported at the top of the script before they can be referenced in the code, but images in `public/` can be directly referenced in functions and HTML tags (e.g., `<img>`). 

If a new page is designed: 
- Create a new `.tsx` file in `src/routes/` following a similar format as other pages. Insert consistent header and footer is appropriate. 
- Add a link to this new page in `src/main.tsx`, otherwise the page cannot be reached. 
- If this page should be exposed in the header navigation panel, edit `src/components/NavBar.tsx` to add a link to the new page. 
- When designing the page, you may reuse any UI components from `src/components/ui/` to keep the repository clean. 
