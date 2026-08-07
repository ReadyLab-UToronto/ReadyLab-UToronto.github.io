# ReadyLab-UToronto.github.io
Ready Lab website 

## Maintenance Guide 

If changes of the user interface are not needed, managing the content being displayed on the website can be done in the `json` files under directory `src/assets/data/`. Please do not rename or move any file. 

### Publications 

All publications are managed in the file `src/assets/data/publications.json`. Specifications of the entries are detailed below, and please enter information with formats that are consistent with existing entries. 

```json 
{
    "title": "required", 
    "authors": "required", 
    "venue": "required - name of the journal or the conference proceeding", 
    "year": "required - a number year for sorting", 
    "tags": ["a list of tags that the paper should be filtered with"], 
    "links": {
        "doi": "required", 
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
- For the `links`, only the `doi` is required. If the `pdf` and/or the `slides` options are used, rename and upload the document in the appropriate folder under `src/assets/pdfs` and `src/assets/slides`, and enter the corresponding file name in the paper entry in `publications.json` (file name only, no directory). 
- If an `abstract` is added, double check the content being pasted in `publications.json`. Note that any special typesetting and hyperlinks are currently not supported. 

### Team Members

All members, including active members and alumni, are managed in the file `src/assets/data/members.json`. Specifications of the entries are detailed below: 

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
- Please rename the headshot image with a meaningful filename for sustainable file management in `src/assets/headshots/`. Crop the image to square to avoid unintended cut off when being presented on the website. 
- The `description` field should be entered as Markdown text, where hyperlinks may be added (e.g., `[Google](www.google.com)`) and special characters may be used with the math mode (i.e., with `$`). 
- If a `linkedinUrl` or a `googlescholarUrl` is entered, an hyperlinked icon will automatically show up in your profile. If an URL is not available, please remove the field. 

### News 

All news are managed in the file `src/assets/data/news.json`. Specifications of the entries are detailed below: 

```json 
{
    "year": "required", 
    "month": "required -- number month between 1 and 12", 
    "type": "required -- one of Member, Award, Publication, Graduation, Other", 
    "content": "required"
}
```

**Note**:
- If a new `type` that is not in the currently supported list is needed, modify the corresponding data type in `src/type.tsx`. Then, add a corresponding icon to the new news type under `src/assets/icons/` and define the path in `src/components/NewsCard.tsx` accordingly. 
- The `content` field should be entered as Markdown text, where hyperlinks may be added (e.g., `[Google](www.google.com)`) and special characters may be used with the math mode (i.e., with `$`). 

## Setup Guide 

Install all required pacakges and dependencies listed in `package.json`: 

```
npm install 
``` 

After making edits to the code, run the following command to launch the dev version: 

```
npm run dev 
``` 

The website should now be locally available at: 

```
http://localhost:5173
```