import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/Fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  // store me se fetchStatus slice cut krke le aaye aur ush basis pe spinner kb lgana h htana h decide kr rhe

  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;

//Agar fetchStatus true hai to loadingSpinner lga do aur false h to outlet lga do (jiske ander as a child hai home and bag)
