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
        paper['title'] = paper['title'].replace('{', '').replace('}', '')
    
    paper['authors'] = entry.get('author')
    if paper['authors']: 
        # Split authors by ' and ' and strip whitespace
        paper['authors'] = [author.strip() for author in paper['authors'].split(' and ')] 
        # Swap the first and last name of each author and remove comma 
        paper['authors'] = [f"{name.split(', ')[1]} {name.split(', ')[0]}" for name in paper['authors']]
        # Join all authors into a single string separated by commas except the last author which is separated by 'and'
        if len(paper['authors']) > 1:
            paper['authors'] = ', '.join(paper['authors'][:-1]) + ' and ' + paper['authors'][-1]
    
    paper['venue'] = entry.get('journal') or entry.get('booktitle')
    # Remove curly braces from the venue 
    if paper['venue']:
        paper['venue'] = paper['venue'].replace('{', '').replace('}', '')
    
    paper['year'] = entry.get('year') 
    if paper['year']:
        paper['year'] = int(paper['year'])  # Convert year to integer
    
    if entry.get('doi'): 
        paper['links'] = {
            "doi": f"https://doi.org/{entry.get('doi')}"
        }
    else: 
        paper['links'] = {}
    
    if entry.get('abstract'):
        paper['abstract'] = entry.get('abstract')
    
    paper['tags'] = []
    
    json_output.append(paper)

json_output = {
    "publications": json_output
}

# Write the JSON output to a file
with open('scripts/publications.json', 'w', encoding='utf-8') as json_file:
    json.dump(json_output, json_file, indent=4, ensure_ascii=False)