# 🎮 Flappy Somnia

A blockchain-powered Flappy Bird game built on Somnia Network.

## Features

- **Blockchain Integration**: Every game is recorded on the Somnia Network
- **Smart Contract**: Verifiable gameplay and scores
- **MetaMask Integration**: Connect and play with your wallet
- **Leaderboard**: Global competition with on-chain verification
- **Polished Interface**: Clean, modern design with Somnia branding
- **Responsive**: Works on desktop and mobile browsers

## Getting Started

1. Install MetaMask and connect to Somnia Testnet
2. Get STT tokens from the faucet if needed
3. Connect your wallet and start playing!

## Network Details

- **Network**: Somnia Testnet
- **Chain ID**: 0xC488 (50312)
- **RPC URL**: https://dream-rpc.somnia.network/
- **Explorer**: https://shannon-explorer.somnia.network/
- **Gas Token**: STT (Somnia Test Token)
- **Faucet**: https://testnet.somnia.network/

## 🌟 Features

### Core Game Mechanics
- **Classic Flappy Bird Gameplay**: Navigate through pipes using space bar or mouse clicks
- **Smooth Physics**: Realistic gravity and jump mechanics
- **Dynamic Difficulty**: Balanced for better playability
- **Responsive Controls**: Space bar or mouse click to jump

### Blockchain Integration
- **On-Chain Score Recording**: All game scores are recorded on the Somnia Testnet
- **Transaction Batching**: Efficient gas usage by batching all game actions
- **Wallet Integration**: Connect your wallet to start playing
- **Verifiable Gameplay**: All actions are recorded and verifiable on-chain

### UI Features
- **Detailed Game Over Screen**: 
  - Final score display
  - Total jumps
  - Game ID
  - Transaction status
- **Responsive Design**: Works on both desktop and mobile devices
- **Visual Effects**: 
  - Dynamic backgrounds
  - Smooth transitions
  - Loading states

## 🔧 Technical Stack

- **Frontend**:
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS
  - Lucide React Icons

- **Smart Contract Integration**:
  ```solidity
  // Core Functions
  function startGame(address player) external returns (uint256 gameId);
  function endGame(
      uint256 gameId,
      uint256 finalScore,
      uint256 totalJumps,
      JumpData[] calldata jumps
  ) external;
  ```

## 🎯 Game Data Structure

### Jump Data
```typescript
interface JumpData {
  timestamp: number;
  scoreAtJump: number;
  multiplierAtJump: number;
}
```

### Game State
```typescript
interface GameState {
  isPlaying: boolean;
  birdPosition: number;
  pipePositions: { x: number; gapY: number }[];
  gameSpeed: number;
  totalJumps: number;
  gameId?: string;
  jumps: QueuedJump[];
  score: number;
}
```

## 🎮 How to Play

1. Connect your wallet using the "Connect Wallet" button
2. Get STT tokens from the faucet if needed
3. Click "Start Game" to begin
4. Press SPACE or click to make the bird jump
5. Avoid pipes and collect points
6. Game ends when you hit a pipe or leave the screen
7. View your final score and statistics

## 🏆 Scoring System

- **Base Points**: 1 point per pipe cleared
- **Simple Scoring**: Focus on achieving the highest score possible

## 🔗 Blockchain Features

### Transaction Batching
Instead of sending individual transactions for each jump, the game batches all actions and sends them together at the end of each game session. This approach:
- Reduces gas costs
- Improves user experience
- Maintains game state integrity

### Data Recording
Each game session records:
- Total score
- Number of jumps
- Timestamp of each jump
- Score at each jump

## 🛠 Development

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
```

## 🔜 Future Enhancements

- Global leaderboard
- Achievement system
- Power-ups and special abilities
- Multiplayer challenges
- Social sharing features
- Enhanced visual effects

## 📝 License

MIT License - feel free to use this code for your own projects!

## 🌐 Network Details

- **Network**: Somnia Testnet
- **Chain ID**: 50312
- **Rollup ID**: 1
- **Gas Token**: FUSE - Sepolia SC: 0x9dB48D9FB1E306B14c7bB1336e4D0A0E6b5753eb
- **RPC URL**: https://dream-rpc.somnia.network/
- **Explorer**: https://shannon-explorer.somnia.network/
- **Faucet**: https://faucet.quicknode.com/fuse/flash
- **Bridge**: https://fuse-flash.bridge.quicknode.com/
- **Bridge API**: https://fuse-flash-api.bridge.quicknode.com/
- **Symbol**: STT
- **Alternative Block Explorer**: https://somnia-testnet.socialscan.io/
- **Alternate RPC**: https://rpc.ankr.com/somnia_testnet