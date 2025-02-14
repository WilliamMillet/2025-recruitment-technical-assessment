import useWindowWidth from "../../hooks/useWindowWidth";

const FilterButton = ({ icon, label }) => (
  <button className="filter-rooms-btn thick-btn">
    <span className="material-symbols-rounded">{icon}</span>
    <span>{label}</span>
  </button>
);

const SearchBar = ({ search, setSearch }) => (
  <div className="room-grid-view-search-bar-container">
    <span className="material-symbols-rounded room-grid-view-search-icon">
      search
    </span>
    <input
      type="search"
      className="room-grid-view-search-bar"
      placeholder="Search for a building..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  </div>
);

const RoomGridViewHeader = ({ search, setSearch }) => {
  const windowWidth = useWindowWidth();
  const thinScreen = windowWidth < 760;

  return (
    <section
      className={`room-grid-view-header ${thinScreen ? "flex-column" : ""}`}
    >
      {thinScreen ? (
        <>
          <SearchBar search={search} setSearch={setSearch} />
          <div className="room-grid-view-btns-container">
            <FilterButton icon="filter_alt" label="Filters" />
            <FilterButton icon="filter_list" label="Sort" />
          </div>
        </>
      ) : (
        <>
          <FilterButton icon="filter_alt" label="Filters" />
          <SearchBar search={search} setSearch={setSearch} />
          <FilterButton icon="filter_list" label="Sort" />
        </>
      )}
    </section>
  );
};

export default RoomGridViewHeader;
