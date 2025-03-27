// Define RPC endpoints first
export const RPC_ENDPOINTS = [
  'https://dream-rpc.somnia.network/',
  'https://rpc.ankr.com/somnia_testnet'
];

// Then use it for RPC_URL
export const RPC_URL = RPC_ENDPOINTS[0];

export const CHAIN_ID = '0xC488'; // 50312 in hex
export const ROLLUP_ID = '1';
export const GAS_TOKEN = {
  name: 'Somnia Test Token',
  symbol: 'STT',
  decimals: 18
};

export const NETWORK_CONFIG = {
  chainId: '0xC488',
  chainName: 'Somnia Testnet',
  nativeCurrency: {
    name: 'Somnia Test Token',
    symbol: 'STT',
    decimals: 18
  },
  rpcUrls: RPC_ENDPOINTS,
  blockExplorerUrls: ['https://shannon-explorer.somnia.network/']
};

export const CONTRACT_ADDRESS = "0x1b8ebE4041dAF9F2b5286B611bB1BA180949073f";

export const CONTRACT_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "finalScore",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalJumps",
        "type": "uint256"
      }
    ],
    "name": "GameEnded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      }
    ],
    "name": "GameStarted",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "currentGameId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finalScore",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalJumps",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAtJump",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "multiplierAtJump",
            "type": "uint256"
          }
        ],
        "internalType": "struct FlappyFuse.JumpData[]",
        "name": "jumps",
        "type": "tuple[]"
      }
    ],
    "name": "endGame",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "gameJumps",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "scoreAtJump",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "multiplierAtJump",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "games",
    "outputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finalScore",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalJumps",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "ended",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      }
    ],
    "name": "getGameInfo",
    "outputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "startTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "endTime",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "finalScore",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalJumps",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "ended",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      }
    ],
    "name": "getGameJumps",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "scoreAtJump",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "multiplierAtJump",
            "type": "uint256"
          }
        ],
        "internalType": "struct FlappyFuse.JumpData[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "player",
        "type": "address"
      }
    ],
    "name": "startGame",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalGames",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLeaderboard",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "player",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "score",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          }
        ],
        "internalType": "struct FlappyFuse.LeaderboardEntry[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Update network details
export const NETWORK_DETAILS = {
  name: 'Somnia Testnet',
  chainId: '0xC488',
  rollupId: ROLLUP_ID,
  nativeCurrency: {
    name: 'Somnia Test Token',
    symbol: 'STT',
    decimals: 18,
    sepoliaContract: GAS_TOKEN.sepoliaContract
  },
  rpcUrls: RPC_ENDPOINTS,
  blockExplorerUrls: ['https://shannon-explorer.somnia.network/', 'https://somnia-testnet.socialscan.io/'],
  faucet: 'https://faucet.quicknode.com/fuse/flash',
  bridge: 'https://fuse-flash.bridge.quicknode.com/',
  bridgeApi: 'https://fuse-flash-api.bridge.quicknode.com/'
};

// Update the switchToSomniaTestnet function for better error handling and network management
export const switchToSomniaTestnet = async () => {
  try {
    console.log('Switching to Somnia Testnet...');
    
    if (!window.ethereum) {
      throw new Error('MetaMask is not installed');
    }

    const currentChainId = await window.ethereum.request({ method: 'eth_chainId' });
    console.log('Current chain ID:', currentChainId);

    if ((currentChainId?.toString().toLowerCase() || '') === CHAIN_ID.toLowerCase()) {
      console.log('Already on Somnia Testnet');
      return;
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: CHAIN_ID }]
      });
      console.log('Successfully switched to Somnia Testnet');
    } catch (switchError: any) {
      console.log('Switch error:', switchError);
      
      if (switchError.code === 4902) {
        console.log('Network not found in MetaMask, adding it...');
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [NETWORK_CONFIG]
          });
          
          const newChainId = await window.ethereum.request({ method: 'eth_chainId' });
          if ((newChainId?.toString().toLowerCase() || '') !== CHAIN_ID.toLowerCase()) {
            throw new Error('Please select the Somnia Testnet network in MetaMask');
          }
          console.log('Somnia Testnet network successfully added and selected');
        } catch (addError) {
          console.error('Error adding Somnia Testnet network:', addError);
          throw new Error('Failed to add Somnia Testnet network to MetaMask. Please add it manually.');
        }
      } else if (switchError.code === 4001) {
        throw new Error('Please approve the network switch request in MetaMask');
      } else {
        console.error('Error switching to Somnia Testnet network:', switchError);
        throw new Error('Failed to switch to Somnia Testnet network. Please try manually switching in MetaMask.');
      }
    }

    const finalChainId = await window.ethereum.request({ method: 'eth_chainId' });
    if ((finalChainId?.toString().toLowerCase() || '') !== CHAIN_ID.toLowerCase()) {
      throw new Error(`Network switch failed. Current chain: ${finalChainId}, expected: ${CHAIN_ID}`);
    }
  } catch (error) {
    console.error('Network switch failed:', error);
    throw error;
  }
};

// Helper function to add Somnia network to MetaMask
export const addSomniaNetwork = async () => {
  if (!window.ethereum) {
    throw new Error('MetaMask is not installed');
  }

  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [NETWORK_CONFIG]
    });
  } catch (error) {
    console.error('Failed to add Somnia network:', error);
    throw error;
  }
};