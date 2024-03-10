import type { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.16',
      },
      {
        version: '0.8.15',
      },
      {
        version: '0.8.2',
      },
      {
        version: '0.6.11',
      },
    ],
  },
  networks: {
    // main: {
    //   chainId: 137,
    //   url: `${process.env.MAIN_RPC_URL}`,
    //   accounts: [`0x${process.env.MAIN_PRIVATE_KEY}`],
    // },
    // mumbai: {
    //   chainId: 80001,
    //   url: `${process.env.MUMBAI_RPC_URL}`,
    //   accounts: [`0x${process.env.MUMBAI_PRIVATE_KEY}`],
    // },
    localhost: {
      url: 'http://127.0.0.1:8545',
      accounts: {
        mnemonic: 'test test test test test test test test test test test junk',
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 20,
      },
    },
  },
  gasReporter: {
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_KEY,
    enabled: !!process.env.REPORT_GAS,
    token: 'MATIC',
  },
};

export default config;
