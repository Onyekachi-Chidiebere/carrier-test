import { useEffect, useState } from "react";
import transactions from "../../helper/transactions";

const useHome = () => {
    //initialize data;
    const [data, setdata] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(()=>{
        //restructure data into sections;
        for(let i =0; i< transactions.length; i++){
            let structuredObject = {};
            for(let j =0; j<Object.values(transactions[i]).length; j++){
                if(Object.values(transactions[i][j].includes(searchQuery))){
                    if(structuredObject[transactions[i].date]){
                        return  structuredObject[transactions[i].date].push(transactions[i])
                    }else{
                        return  structuredObject[transactions[i].date] = [transactions[i]];

                    }
                }
            }
        }

        let structuredList = [];
        
    })



    return {data, searchQuery, setSearchQuery,}
};

export default useHome;