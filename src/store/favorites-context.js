import { createContex, useState } from 'react';

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0
});

function FavoritesContextProvider(props)
{
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) 
    {
        setUserFavorites((prevUserFavorites) => { return prevUserFavorites.concat(favoriteMeetup)});
    }

    function removeFavoriteHandler(meetupId) 
    {
        setUserFavorites((prevUserFavorites) => { return prevUserFavorites.filter( meetup => meetupId != meetup.id)});
    }

    function itemIsFavoriteHandler(meetupId) 
    {
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length
    };

    return <FavoritesContextProvider.Provider value={context}>
        {props.children}
    </FavoritesContextProvider.Provider>
}