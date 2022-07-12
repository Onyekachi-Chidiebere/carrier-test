import { useState } from "react";
import transactions from "../../helper/transactions";

const useHome = () => {
    //initialize data;
    const [data, setdata] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');



    return {data, searchQuery, setSearchQuery,}
};

export default useHome;