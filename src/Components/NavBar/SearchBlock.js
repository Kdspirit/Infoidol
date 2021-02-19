import SearchIcon from '@material-ui/icons/Search';

const SearchBlock = () => {
    return (
        <section className="searchBar">
            <span>
                <figure><SearchIcon/></figure>
            </span>

            <div>
            <input type="search" name="search" value="" placeholder="Search Your Passion"/>
            </div>
        </section>
    );
}

export default SearchBlock;