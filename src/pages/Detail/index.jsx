import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { getCountryData } from "../../redux/action";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import InfoCard from "../../components/InfoCard";

const Detail = () => {
  const { data, error, isLoading } = useSelector((store) => store);

  const [params] = useSearchParams();
  const countryCode = params.get("code");
  const query = params.get("q");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryData({ code: countryCode, query }));
  }, [params]);

  // covid nesnesini diziye cevirdik
  const covidArr = Object.entries(data?.covid || {});
  console.log(data);
  return (
    <div className="min-h-[calc(100vh-74px)] bg-zinc-800 text-white grid place-items-center p-6">
      <div className="min-h-[80vh] bg-white rounded-lg shadow-lg p-8 max-w-3xl max-md:w-full">
        {/* ust icerik */}
        <div className="flex gap-5 justify-between items-center mb-6">
          <Link
            to="/"
            className="bg-gray-700 py-2 px-3 rounded hover:bg-gray-800"
          >
            {" "}
            Geri
          </Link>
          <div className="flex items-center space-x-2">
            {isLoading ? (
              <Loader type="header" />
            ) : (
              !error && (
                <div className="flex items-center gap-2">
                  <img
                    className="w-24 rounded-md"
                    src={data.country.flags.png}
                    alt={data.country.flags.alt}
                  />
                  <h1
                    data-testid="country-title"
                    className="text-gray-900 text-2xl font-bold"
                  >
                    {data.country.altSpellings[1]}
                  </h1>
                </div>
              )
            )}
          </div>
        </div>

        {/* alt icerik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error
              message={error}
              retry={() =>
                dispatch(getCountryData({ code: countryCode, query }))
              }
            />
          ) : (
            covidArr.map((item, key) => <InfoCard key={key} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
