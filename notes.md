Changes to post model

- We should have proposalId so we can see link a post 
with the corresponding proposal on DAOhaus
    - We can use DAOhaus as a second source of truth
    about the validity and truthiness of the content. 
- We should write in a description field for posts
- IPFS cover image support. 
- Linking images inside of markdown


IPFS Integration

- Save MD on IPFS
- Save static pages on IPFS
- Save images on IPFS
- Call IPFS inside of gatsby-node and link 

Advantages of using a SSG
- Speed. Content is a static copy of decentralized content. 
- Maximum uptime. If graph is down or IPFS is slow, the content is still there, loading fast. 
- Simple and Lightweight. People want to read content, not code
- Flexible. Will be able to use many decentralized IPFS services or put data directly on chain. 
- Censorship Resistant: Can launch static sites from a local build. 
