# Show money assignment
Assignment to displays the Balance Sheet Report using a mock Xero API.
## Problem statement
    https://github.com/DemystData/code-drills/tree/main/show-me-the-money

## To run application 
    docker compose up
    
## To stop application 
    docker compose down

## Client
    runs on http://localhost:4001

### Techstack: 
    React, TypeScript, TailwindCSS

## Server: BFF for client application. It fetches API from mock Xero API
    runs on http://localhost:4000
### Techstack: 
    NodeJS, TypeScript, Express

### Mock Xero API
    https://hub.docker.com/r/jaypeng2015/show-me-the-money
    
###Balance sheet API: http://localhost:4000/api/reports/balanceSheet


## Balance sheet preview
![UI](docs/balancesheet.png)

