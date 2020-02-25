import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/images/search_svg.svg'
// import { ReactComponent as Cancel } from '../../assets/images/cancel.svg'
import styles from './searchInput.module.css'

const SearchInput = () => {
    const [searchText, setSearchText] = useState('')

    return (
        <div className={styles.searchInput}>
             <SearchIcon/>
             <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
             {/*<Cancel className={styles.red}/>*/}
        </div>
    );
};

export default SearchInput;