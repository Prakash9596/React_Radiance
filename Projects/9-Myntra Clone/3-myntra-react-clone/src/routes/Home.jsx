import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);  // store me se items slice cut krke le aaye

  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}; //ush items ko ek ek krke display kr diye

export default Home;
