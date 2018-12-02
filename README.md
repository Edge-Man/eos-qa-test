# React Application to pull the most recent blocks
# User Story: As an EOS User I want to see a list of the most recent blocks on the eosio chain

## Resources:

eos-js: https://github.com/EOSIO/eosjs 

Main Chain Endpoint; EOS Newyork has the transaction API enabled and will return full block content.  Example of the general chain/get_info call: https://api.eosnewyork.io/v1/chain/get_info

Create React App: https://github.com/facebook/create-react-app


## Product Owner Acceptance Criteria:

Page should update with the click of a “LOAD” button.  We should only show 10 most recent blocks, older blocks should dropped from the list when you hit load again.

Block list entries should show the hash of the block (this is the id), it’s timestamp, and the count of actions included in that block (this will typically be 0)

Clicking a block entry should expand that line to show the raw contents of the block output.


## Technical Implementation Expectations:

Application will use create-react-app for setting up the project

Utilize ES6 syntax wherever possible

Use Async Await

Use eos-js for requesting data from the blockchain.

Unit tests in jest

UI tests in cypress


## Deliverables:
See email
