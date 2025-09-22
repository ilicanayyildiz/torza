// Mock blockchain minting for demo only
export function mockMint(nftId: string, toUserId: string): string {
  // Generate a fake transaction hash
  const timestamp = Date.now();
  const input = `${nftId}-${toUserId}-${timestamp}`;
  
  // Simple hash simulation (not cryptographically secure)
  let hash = '0x';
  for (let i = 0; i < 64; i++) {
    hash += Math.floor(Math.random() * 16).toString(16);
  }
  
  return hash;
}
