import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { Info, TrendingUp, AttachMoney, Public } from "@mui/icons-material";

const TokenDetails = ({ apiData }) => {
  const { id } = useParams();
  const card = apiData?.find((item) => item?.id === id);

  if (!card) {
    return <div className="error-message">Token not found</div>;
  }

  return (
    <>
      <BackButton />
      <h2>Token Detail</h2>
      <div className="token-details">
        <div className="token-card">
          <div className="token-info">
            <h2>
              {card?.name} ({card?.symbol})
            </h2>
            <p className="market-rank">
              <Info /> Market Cap Rank: {card?.market_cap_rank}
            </p>
            <p className="market-cap">
              <AttachMoney /> Market Cap: ${card?.market_cap}
            </p>
            <div className="pricing-info">
              <p>
                <AttachMoney /> Current Price: ${card?.current_price}
              </p>
              <p>
                <Public /> Total Volume: ${card?.total_volume}
              </p>
              <p><Public />Total Supply: {card?.total_supply}</p>
            </div>
          </div>
          <div className="token-img">
            <img src={card?.image} alt={card?.name} width={120} />
          </div>

          <div className="token-stats">
            <table>
              <thead>
                <tr>
                  <th>
                    <Info /> Market Cap
                  </th>
                  <th>${card?.market_cap}</th>
                </tr>
                <tr>
                  <th>
                    <TrendingUp /> Market Cap Change (24h)
                  </th>
                  <th>{card?.market_cap_change_24h}</th>
                </tr>
                <tr>
                  <th>
                    <TrendingUp /> Market Cap Change % (24h)
                  </th>
                  <th>{card?.market_cap_change_percentage_24h}%</th>
                </tr>
                <tr>
                  <th>
                    <TrendingUp /> Change Price (24h)
                  </th>
                  <th>${card?.current_price}</th>
                </tr>
                <tr>
                  <th>
                    <TrendingUp /> Price Change % (24h)
                  </th>
                  <th>{card?.price_change_percentage_24h}%</th>
                </tr>
                <tr>
                  <th>
                    <TrendingUp /> Circulating Supply
                  </th>
                  <th>{card?.circulating_supply}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenDetails;
