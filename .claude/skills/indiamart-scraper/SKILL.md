---
name: indiamart-scraper
description: Scrape company details (address, owner, phone, products, turnover) from IndiaMart listings for a CSV of companies identified by GSTIN and name, optionally enriching owner/company data via the Apollo.io API. Use when the user asks to scrape IndiaMart, collect supplier/lead data, or enrich a company list.
---

# IndiaMart Scraper

Vendored from https://github.com/Ashish-Github193/IndiaMart-Scraper. Reads a CSV of
companies, finds each company's IndiaMart page via a DuckDuckGo search
(`<GSTIN> <COMPANY_NAME> site:indiamart.com`), scrapes the listing with headless
Chrome/Selenium, optionally enriches results through Apollo.io, and appends each
company as a row to an output CSV.

## Prerequisites

- Python 3.10+ and Google Chrome/Chromium (Selenium 4 manages the driver automatically).
- Install dependencies: `pip install -r scripts/requirements.txt`
- Optional enrichment: export `APOLLO_API_KEY=<key>`. Without a valid key the Apollo
  calls fail and the script exits (`sys.exit()` in `utils/utils_owner_details.py` and
  `utils/utils_company_details.py`), so either set the key or stub those calls out if
  only the IndiaMart scrape is needed.

## Input format

`scripts/uploads/companies.csv` — columns `GSTIN,COMPANY_NAME` (a 3-row sample is
included; replace it with the real list). `scripts/uploads/states.csv` maps Indian
state names and is used to extract the state from scraped addresses — leave it as is.

## Running

```bash
cd .claude/skills/indiamart-scraper/scripts
mkdir -p shared/outgoing          # output dir expected by main.py
python main.py
```

Output lands in `shared/outgoing/<random-digits>.csv` with columns: gstin,
company name, page link, address, state, zip code, owner name, phone number,
products, nature of business, annual turnover, linkedin_url, personal_email,
phone_number, founded_year, estimated_num_employees, industry, website_url.

To resume a partially completed run, change the `offset` argument in the
`main(...)` call at the bottom of `main.py` to the row index to restart from.

## Notes and caveats

- The scraper drives a real browser; expect roughly a few seconds per company.
  Rows that yield no IndiaMart link in the search results are skipped.
- IndiaMart's obfuscated CSS class names (e.g. `FM_ds5`, `footerPNS`) are hardcoded
  in `utils/utils_website_scraper.py`; if the site ships a redesign, selectors there
  are the first thing to fix.
- If the DuckDuckGo search page fails to load, `main.py` stops the whole run
  (returns instead of continuing) — rerun with an `offset` if that happens.
- Respect IndiaMart's terms of service and rate limits; keep runs small and
  do not redistribute scraped personal data.
