function FavoriteList({ favorites, dispatch }) {
  if (favorites.length === 0) return null;

  return (
    <div>
      <h2>⭐ Favorites</h2>
      <ul>
        {favorites.map((c) => (
          <li key={c.code}>
            {c.name}
            <button
              onClick={() => dispatch({ type: "REMOVE_FAVORITE", payload: c })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
