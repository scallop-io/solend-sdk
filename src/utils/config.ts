import {
  ConfigType,
  MarketConfigType,
} from "../classes/shared";

export const extendConfig = (
  config: ConfigType,
  environment: "production" | "devnet" | "beta" = "production"
) => {
  if (environment === "devnet") {
    config.push(scallopDevnetMarket);
  }

  return config;
};

const scallopDevnetMarket: MarketConfigType = {
  name: "scallop",
  isPrimary: false,
  description: "",
  address: "7y2cniJyAJtc3ybVrT6Yi9KSZTckYKzHuy6qDFtaBnmd",
  hidden: false,
  authorityAddress: "6bZodG81UoAPXBcwq2uVZAafvJ2Lg2vV6jEDH7KDYCnx",
  creator: "Do6WjSs4UNELD5BwUX8FAGmBgX6Uox98va1ZCMLM3tT4",
  reserves: [
    {
      liquidityToken: {
        coingeckoID: "usd-coin",
        decimals: 6,
        logo: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
        mint: "6xNro2H4EJioyVYGr8DK1bsFMdUstbuSYFgVEsC2PJdH",
        name: "USD Coin",
        symbol: "USDC",
        volume24h: 3141083055.1569686,
      },
      pythOracle: "Gnt27xtC473ZT2Mw5u8wZ68Z3gULkSTb5DuxJy7eJotD",
      switchboardOracle: "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW",
      address: "4RLzaeG8xDrVNkg6a3rbCxpe51TKmEis7KyYRyM7CLH9",
      collateralMintAddress: "13d26Z4HCxVf9P4TWoPu5cxqe1gEixPQMXDpHMDRgJNs",
      collateralSupplyAddress: "EFw7BHfouKikHX7P3L69uR3rayGHq1SN3721yuRa9529",
      liquidityAddress: "8vD4fMiTFFcrbXRWnLxybKwTETAhhWvkvGRHvZvKN23B",
      liquidityFeeReceiverAddress:
        "6yZhLf1ypstSFQvwkM9BibjvQihk2ZhqSJcb2mqfWQD9",
      userBorrowCap: 50000000,
      userSupplyCap: 30000000,
    },
  ],
};
