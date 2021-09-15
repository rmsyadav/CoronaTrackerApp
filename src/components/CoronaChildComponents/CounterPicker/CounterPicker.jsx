import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from "@material-ui/core";
import style from './CounterPicker.module.css';
import {Fetchcountries} from '../../../Api';

function CounterPicker({handleCountryChange}) {
    const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{

        const fetchAPI=async()=>{
            setFetchedCountries(await Fetchcountries());
        }
        fetchAPI();
    },[setFetchedCountries]);

    return (
       <FormControl>
           <NativeSelect defaultValue="" onChange={(e)=>{
               handleCountryChange(e.target.value);
           }}>
            <option value="">Globel</option>
              {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>

              )} 
           </NativeSelect>
       </FormControl>
    )
}

export default CounterPicker;
