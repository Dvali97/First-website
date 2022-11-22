import s from './Search.module.css';

const Search = () => {
    return <form action="/action_page.php">
    <input type="text" className={s.SearchInput} placeholder="Search.." name="search" />
    <button type="submit" className={s.button}>Search</button>
  </form>
}

export default Search;