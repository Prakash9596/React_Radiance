//backend se sara data receive krne ke liye

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus); //fetchslice se status sb liya 
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};   //backend se sara data receive kiya 

export default FetchItems;
