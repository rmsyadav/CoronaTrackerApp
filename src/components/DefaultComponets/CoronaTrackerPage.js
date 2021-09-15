import React, { Component } from 'react';
import Cards from '../CoronaChildComponents/Cards/Card';
import Chart from '../CoronaChildComponents/Chart/Chart';
import CounterPicker from "../CoronaChildComponents/CounterPicker/CounterPicker";
import styles from './CoronaTrackerPage.module.css';
import {fetchData} from '../../Api/index';

export class CoronaTrackerPage extends Component {
       state={
           data:{},
           country:'',
       }

    async componentDidMount(){
          const fetchedData=await fetchData();
          this.setState({data:fetchedData});
     }
     handleCountryChange=async(country)=>{
         const fetchedData=await fetchData(country);
         this.setState({data:fetchedData,country:country});
     }
    render() {
        const {data,country}=this.state;
        return (
            <div className={styles.container}>
                
                 <Cards data={data}></Cards>
                 <CounterPicker handleCountryChange={this.handleCountryChange}></CounterPicker>
                 <Chart data={data} country={country}></Chart>
                
               
        
            </div>
        )
    }
}

export default CoronaTrackerPage;
