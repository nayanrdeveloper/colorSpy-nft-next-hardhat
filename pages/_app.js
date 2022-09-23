import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import { CeloProvider, Alfajores, SupportedProviders } from "@celo/react-celo";
import "@celo/react-celo/lib/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <CeloProvider
        dapp={{
          name: "ColorSpy",
          description: "ColorSpy are app for Largest NFT Marketplace of Colors, Gradient Colors anf greatest world Store.",
          url: "https://example.com",
        }}
        network={Alfajores}
        connectModal={{
          // This options changes the title of the modal and can be either a string or a react element
          title: <span>Connect your Wallet</span>,
          providersOptions: {
            // This option hides specific wallets from the default list
            hideFromDefaults: [
              SupportedProviders.PrivateKey,
              SupportedProviders.CeloExtensionWallet,
              SupportedProviders.Valora,
              SupportedProviders.CeloDance,
              SupportedProviders.CeloTerminal,
              SupportedProviders.CoinbaseWallet,
              SupportedProviders.Ledger,
              SupportedProviders.PrivateKey,
              SupportedProviders.WalletConnect,
              SupportedProviders.Injected,
              SupportedProviders.Steakwallet,
              SupportedProviders.CeloWallet,
              // SupportedProviders.MetaMask,
            ],
      
            // This option hides all default wallets
            // hideFromDefaults: true,
      
            // This option toggles on and off the searchbar
            searchable: false,
          },
          
        }}
        theme={{
          primary: '#fff',
          secondary: '#0d6efd',
          text: '#c2d4f8',
          textSecondary: '#8480ae',
          textTertiary: '#ffffff',
          muted: '#e2e8f0',
          background: '#030205',
          error: '#ef4444',
          

        }}
      >
        {" "}
        <Navbar /> <Component {...pageProps} />
      </CeloProvider>
    </div>
  );
}

export default MyApp;
