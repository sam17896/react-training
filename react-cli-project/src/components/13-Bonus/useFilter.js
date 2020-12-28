import * as React from 'react';

const useFilter = (sourceList, searchQuery, fieldName) => {
    const [filterList, setFilterList] = React.useState([]);

    React.useEffect(() => {
        setFilterList(sourceList.filter(x => x[fieldName].includes(searchQuery)));
    }, [sourceList, searchQuery]);


    return [filterList];
}


export default useFilter;