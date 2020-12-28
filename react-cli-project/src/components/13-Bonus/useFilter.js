import * as React from 'react';

const useFilter = (sourceList, fieldName) => {
    const [search, setSearch] = React.useState('');
    const [filterList, setFilterList] = React.useState([]);

    React.useEffect(() => {
        setFilterList(sourceList.filter(x => x[fieldName].includes(search)));
    }, [sourceList, search]);


    return [filterList, setSearch, search];
}


export default useFilter;