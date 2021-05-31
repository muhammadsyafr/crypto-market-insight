import { React, useState, useEffect, Link } from "libraries";
import appConfig from "../../configs/appConfig";
import { API } from "../../configs/";
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { convertPrice, convertPercentage } from "utils";
import { Loaders } from "components/atoms";
import { TheadCoinList } from "components/molecules/index";

export const ListMarketCoin = (props) => {
  const [viewCoinCount, setviewCoinCount] = useState(10);
  const [page, setPage] = useState(1);
  const [dataCoins, setDataCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);

  // get first data include change count per view
  useEffect(() => {
    let kumpulanCoin = [];
    setLoading(true);
    API.getCoin({
      url: `${appConfig.url.api}/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=${viewCoinCount}&page=${page}&sparkline=true&price_change_percentage='1h%2C24h%2C7d`,
    }).then((res) => {
      // log(res.axiosResponse)
      res.axiosResponse.data.forEach((coin) => {
        // desctructuring
        let [
          id,
          name,
          symbol,
          image,
          currentPrice,
          priceChg24h,
          marketCap,
          sparkline,
        ] = [
          coin.id,
          coin.name,
          coin.symbol,
          coin.image,
          coin.current_price,
          coin.price_change_percentage_24h,
          coin.market_cap,
          coin.sparkline_in_7d,
        ];

        // make object
        let objAssign = {
          id: id,
          name: name,
          symbol: symbol,
          image: image,
          currentPrice: currentPrice,
          priceChg24h: priceChg24h,
          marketCap: marketCap,
          sparkline: sparkline,
        };
        // set object to array(state coin)
        kumpulanCoin.push(objAssign);
      });
      setDataCoins(kumpulanCoin);
      setLoading(false);
    });
  }, [viewCoinCount]);
  
  // update when load more
  useEffect(() => {
    var kumpulanCoin = [];
    setLoadingBtn(true);
    API.getCoin({
      url: `${appConfig.url.api}/api/v3/coins/markets?vs_currency=idr&order=market_cap_desc&per_page=${viewCoinCount}&page=${page}&sparkline=true&price_change_percentage='1h%2C24h%2C7d`,
    }).then((res) => {
      res.axiosResponse.data.forEach((coin) => {
        let [
          id,
          name,
          symbol,
          image,
          currentPrice,
          priceChg24h,
          marketCap,
          sparkline,
        ] = [
          coin.id,
          coin.name,
          coin.symbol,
          coin.image,
          coin.current_price,
          coin.price_change_percentage_24h,
          coin.market_cap,
          coin.sparkline_in_7d,
        ];

        // make object
        let objAssign = {
          id: id,
          name: name,
          symbol: symbol,
          image: image,
          currentPrice: currentPrice,
          priceChg24h: priceChg24h,
          marketCap: marketCap,
          sparkline: sparkline,
        };
        // set object to array(state coin)
        kumpulanCoin.push(objAssign);
      });
      var dataCoinAmount = dataCoins.concat(kumpulanCoin);
      setDataCoins(dataCoinAmount);
      setLoadingBtn(false);
    })
  },[page])

  function changeViewCount(e){
    setviewCoinCount(e.target.value)
  }

  return (
    <div className={`${props.className ? props.className : ''} px-4 container mx-auto flex flex-col`}>
      <div className="relative mb-4 flex justify-start items-center">
        <h4 className="text-lg font-medium text-gray-900">Items to view : </h4>&nbsp;
        <svg className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299"/></svg>
        <select onChange={(e) => changeViewCount(e)} className="border text-center border-gray-300 rounded text-gray-600 h-6 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
          <option selected={viewCoinCount === 10 ? 'selected' : ''}>10</option>
          <option selected={viewCoinCount === 20 ? 'selected' : ''}>20</option>
          <option selected={viewCoinCount === 50 ? 'selected' : ''}>50</option>
          <option selected={viewCoinCount === 100 ? 'selected' : ''}>100</option>
        </select>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <TheadCoinList />
              <tbody className="bg-white divide-y divide-gray-200">
                {
                  loading === true ? <td colSpan="6" className="text-center"><Loaders /></td> : dataCoins
                  ? dataCoins.map((coin, i) => {
                      return (
                        <tr key={coin.name}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {i + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          <Link to={'coin/'+coin.id}>
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={coin.image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {coin.name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {coin.symbol}
                                </div>
                              </div>
                            </div>
                            </Link>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 font-semibold">
                              Rp.{convertPrice(coin.currentPrice)}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${coin.priceChg24h > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                              {convertPercentage(coin.priceChg24h)} %
                              {/* {coin.priceChg24h} */}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 font-semibold">
                                Rp.{convertPrice(coin.marketCap)}
                            </div>
                          </td> 
                          <td className="px-6 py-4 whitespace-nowrap flex text-center">
                            <svg height="64" width="246">
                            <Sparklines data={coin.sparkline.price}>
                              <SparklinesLine style={{ stroke: "#651FFF", strokeWidth: "1", fill: "none" }} />
                            </Sparklines>
                          </svg>
                          </td> 
                        </tr>
                      );
                    })
                  : "data not found"
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {
        loading === true ? '' : 
        <button onClick={() => setPage(page + 1)} className={`${loadingBtn === true ? 'disabled:opacity-50' : ''} mt-8 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-black hover:text-white transition duration-200 rounded shadow-md bg-blue-gray-50 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}>
          {loadingBtn === true ? <Loaders /> : 'Load More'}
        </button>
      }
    </div>
  );
};
export default ListMarketCoin;
