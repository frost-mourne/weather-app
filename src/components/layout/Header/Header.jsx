import SearchBar from "./SearchBar";

function Header({setData}) {

    return (
        <div>
            <h1>Погода</h1>
            <SearchBar setData={setData}/>
        </div>
      );
}
export default Header;