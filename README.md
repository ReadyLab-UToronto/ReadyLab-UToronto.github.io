# Ready Lab website 

This webpage was built using the [Vite](https://vite.dev/guide/) build tool as a React JavaScript project. Some UI components (under `src/components/ui/`) were adopted from [Shadcn UI](https://ui.shadcn.com). The website is deployed as a static webpage on GitHub Pages, and then redirected to the MIE domain. 

- [Maintenance Guide](#maintenance-guide)
- [Setup Guide](#setup-guide)
- [Local Testing Guide](#local-testing-guide)
- [Deployment Guide](#deployment-guide)

## Maintenance Guide 

If changes of the user interface are not needed, managing the content being displayed on the website can be done in the `json` files under directory `src/assets/`. Please do not rename or move any file. 

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
- For the `links`, the `doi` and `code` should be actual URL links to webpages, if entered. If the `pdf` and/or the `slides` options are used, rename and upload the document in the appropriate folder under `public/pdfs/` and `public/slides/`, and enter the corresponding file name in the paper entry in `publications.json` (file name only, no directory). 
- If an `abstract` is added, double check the content being pasted in `publications.json`. Note that any special typesetting and hyperlinks are currently not supported. 

### Team Members

All members, including active members and alumni, are managed in the file `src/assets/members.json`. Specifications of the entries are detailed below: 

```json 
{
    "name": "required", 
    "active": "required - either true or false", 
    "graduationYear": "a number year is required - any number if active", 
    "imageUrl": "required - file name for the headshot in src/assets/headshots", 
    "role": "required - one of postdoc, phd, masc, meng, undergrad", 
    "description": "required", 
    "linkedinUrl": "optional", 
    "googlescholarUrl": "optional"
}
```

**Note**: 
- If `active` is set to `true`, number entered for `graduationYear` is ignored, but a number is still required for data type consistency. 
- When an active lab member graduates, simply change `active` to `false` and enter the correct `graduationYear`. 
- Please rename the headshot image with a meaningful filename for sustainable file management in `public/headshots/`. Crop the image to square to avoid unintended cut off when being presented on the website. 
- The `description` field should be entered as Markdown text, where hyperlinks may be added (e.g., `[Google](www.google.com)`) and special characters may be used with the math mode (i.e., with `$`). 
- If a `linkedinUrl` or a `googlescholarUrl` is entered, an hyperlinked icon will automatically show up in your profile. If an URL is not available, please remove the field. 

### News 

All news are managed in the file `src/assets/news.json`. Specifications of the entries are detailed below: 

```json 
{
    "year": "required", 
    "month": "required -- number month between 1 and 12", 
    "type": "required -- one of Member, Award, Publication, Graduation, Other", 
    "content": "required"
}
```

**Note**:
- If a new `type` that is not in the currently supported list is needed, modify the corresponding data type in `src/type.tsx`. Then, add a corresponding icon to the new news type under `public/icons/` and define the path in `src/components/NewsCard.tsx` accordingly. 
- The `content` field should be entered as Markdown text, where hyperlinks may be added (e.g., `[Google](www.google.com)`) and special characters may be used with the math mode (i.e., with `$`). 

## Setup Guide 

Install all required pacakges and dependencies listed in `package.json` by running the following command in the terminal window: 

```
npm install 
``` 

A new folder named `node_modules/` should then be created in your repository's root directory. This folder is not tracked by Git (added in `.gitignore`). 

## Local Testing Guide 

After making edits to the code, and before pushing any changes to the cloud, you may launch a development version of the website locally by running the following command in the terminal window: 

```
npm run dev 
``` 

The website should now be locally available at the following URL through any web browser: 

```
http://localhost:5173
```

While the local dev version is running, you may still make changes to the code. Every time you save your changes in a file (e.g., `Cmd` + `S` or `Ctrl` + `S`), the webpage will be automatically updated and reloaded with the new changes. 

## Deployment Guide 

A GitHub action has been created in `.github/workflows/deploy.yml` to automatically build and deploy the static webpage to GitHub pages every time a new commit is pushed to the `main` branch. 

If new npm packages are installed and the GitHub deployment fails, read the failure message carefully. It is very likely that your `package-lock.json` is out of sync. If running the `npm install` command locally to automatically update `package-lock.json` does not fix the build failure, try the following workflow in the terminal: 
- Delete existing files: `rm -rf node_modules package-lock.json`
- Clear the cache: `npm cache clean --force` 
- Regenerate the lockfile: `npm install` 
- Test the strict install: `npm ci` 
- Commit and push all the new changes to GitHub 