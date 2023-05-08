import { ThirdwebProvider, coinbaseWallet, localWallet, metamaskWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { FACTORY_ADDRESS, THIRDWEB_API_KEY } from "../const/addresses";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance-testnet";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}
      supportedWallets={[
        smartWallet({
          factoryAddress: FACTORY_ADDRESS,
          thirdwebApiKey: THIRDWEB_API_KEY,
          gasless: true,
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            localWallet({persist: true}),
          ]
        })
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
