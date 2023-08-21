# Game Equipment On-Chain Platform Using Avalanche Subnet
This platform enables the binding of any game equipment ID to an NFT (Non-Fungible Token) using an Avalanche subnet. Additionally, it supports functionalities required in games such as equipment trading, upgrading, and synthesis.

The platform provides the following interfaces:

### Mint:
function mint(address user, uint256 itemId, uint256 validUntil, bytes calldata signature)  
function batchMint(address user, uint256[] memory itemIds, uint256 validUntil, bytes[] calldata signatures)  
### Query:
function batchItemIdToTokenId(uint256[] calldata itemIds)  
function batchTokenIdToItemId(uint256[] calldata tokenIds)  
function tokenURI(uint256 tokenId) public view virtual returns (string memory)  
function tokenOfOwner(address user, uint256 start_index, uint256 end_index)  
### OnlyOwner:
function setBaseURI(string memory _baseURI) external onlyOwner  
function addSigner(address _signer) external onlyOwner  
function removeSigner(address _signer) external onlyOwner  
