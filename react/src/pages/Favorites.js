import { useContext } from "react";

import FavouritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavouritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You have no favorites. Stat adding Some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
