import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/apiSlice";
import CircularProgress from '@mui/material/CircularProgress';
import BackButton from "./BackButton";
import TableData from "./TableData";

function ApiTimer() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.apiData);

  useEffect(() => {
    // Function to fetch data
    const fetchApiData = () => {
      dispatch(fetchData());
    };

    // Initial API call
    fetchApiData();

    // Set interval to make API calls every 5 seconds
    const fetchDataInterval = setInterval(fetchApiData, 5000);

    return () => {
      clearInterval(fetchDataInterval);
    };

  }, [dispatch]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Api Timer Solution</h1>

      <BackButton />

      {loading && (
        <div>
          <p>Please wait, data is being fetched...</p>
          <CircularProgress />
        </div>
      )}
      {data && !loading && (
        <div>
            <TableData data={data} />
        </div>
      )}
      {error && !loading && <p>{error}</p>}
    </div>
  );
}

export default ApiTimer;
