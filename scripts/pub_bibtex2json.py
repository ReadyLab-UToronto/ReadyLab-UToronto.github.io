import bibtexparser
import json

# Upload the BibTeX file to the scripts/ directory before running this script 
with open('scripts/publications.bib', 'r', encoding='utf-8') as bibtex_file:
    bib_database = bibtexparser.load(bibtex_file)

json_output = []
for entry in bib_database.entries:
    paper = {} 
    
    paper['title'] = entry.get('title')
    # Remove curly braces from the title
    if paper['title']:
        paper['title'] = paper['title'].replace('{', '').replace('}', '').replace("’", "'").replace("‐", "-")
    
    paper['authors'] = entry.get('author')
    if not paper['authors']:
        paper['authors'] = entry.get('editor')  # Use editor if author is not available
        print(f"Warning: No author found for paper titled '{paper['title']}'. Using editor instead.")
    if paper['authors']: 
        # Split authors by ' and ' and strip whitespace
        paper['authors'] = [author.strip() for author in paper['authors'].split(' and ')] 
        # Swap the first and last name of each author and remove comma 
        paper['authors'] = [f"{name.split(', ')[1]} {name.split(', ')[0]}" for name in paper['authors']]
        # Join all authors into a single string separated by commas except the last author which is separated by 'and'
        if len(paper['authors']) > 1:
            paper['authors'] = ', '.join(paper['authors'][:-1]) + ' and ' + paper['authors'][-1]
    else: 
        print(f"Warning: No author or editor found for paper titled '{paper['title']}'.")
    
    paper['venue'] = entry.get('journal') or entry.get('booktitle')
    # Remove curly braces from the venue 
    if paper['venue']:
        paper['venue'] = paper['venue'].replace('{', '').replace('}', '').replace("’", "'").replace("‐", "-").replace("\\&", "&")
    else: 
        print(f"Warning: No venue found for paper titled '{paper['title']}'.")
    
    paper['year'] = entry.get('year') 
    if paper['year']:
        paper['year'] = int(paper['year'])  # Convert year to integer
    else: 
        print(f"Warning: No year found for paper titled '{paper['title']}'.")
    
    if entry.get('doi'): 
        paper['links'] = {
            "doi": f"https://doi.org/{entry.get('doi')}"
        }
    elif entry.get('url'):
        paper['links'] = {
            "doi": entry.get('url')
        }
    else: 
        paper['links'] = {}
        print(f"Warning: No DOI or URL found for paper titled '{paper['title']}'.")
    
    if entry.get('abstract'):
        paper['abstract'] = entry.get('abstract')
        paper['abstract'] = paper['abstract'].replace("’", "'").replace("‐", "-").replace("Abstract\n", "").replace("ASTRACT:\n", "")
    
    paper['tags'] = []
    
    json_output.append(paper)

json_output = {
    "publications": json_output
}

# Write the JSON output to a file
with open('scripts/publications.json', 'w', encoding='utf-8') as json_file:
    json.dump(json_output, json_file, indent=4, ensure_ascii=False)