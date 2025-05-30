import { useDrink } from "../hooks/useDrink";
import { ICompleteDrinkInfo } from "../models/IDrink";
import { DrinkInfo } from "./DrinkInfo";

export const FavouritesPresentation = () => {
  const { removeDrinks, favouriteList } = useDrink();

  const completeFavouritesList = favouriteList as ICompleteDrinkInfo[];

  return (
    <>
      <div>
        Drinks added to your favourites: {completeFavouritesList.length}
      </div>
      {completeFavouritesList.length > 0 ? (
        completeFavouritesList.map((drink) => (
          <div key={drink.idDrink}>
            <DrinkInfo drink={drink} removeDrinks={removeDrinks} />
          </div>
        ))
      ) : (
        <p>No drinks added to favourites yet.</p>
      )}
    </>
  );
};
