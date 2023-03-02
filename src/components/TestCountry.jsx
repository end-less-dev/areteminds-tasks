import { useState } from "react"
import Country from "../json-packages/Country.json"
import State from "../json-packages/State.json"
import City from "../json-packages/City.json"

const TestCountry =()=>{
    // const country = Country.map((countryObj)=>{
    //     return countryObj.country_name
    // })
    // console.log(country)

    const[countryValue,SetCountryValue] = useState("");
    const[stateValue,SetStateValue] = useState("");

    const handleCountry = (e)=>{
        SetCountryValue(e.target.value)
        console.log(e.target.value)
    }
    const handleState = (e)=>{
        SetStateValue(e.target.value)
        console.log(e.target.value)
    }
    // console.log("State->",State.map((datas)=>{
    //     return datas.data
    // }));
    // console.log("New->",State[2].data.map((stateObj)=>{
    //     return stateObj.state_name
    // }))
    // const filterStates = State[2].data.map((data)=>{
    //     if(data.country_id === countryValue){
    //         return true;
    //     }
    // })
    return(
        <>
            <select class="form-select" aria-label="Default select example" onChange={handleCountry}>
                <option>Choose Country</option>
                {Country.map((data)=>{
                    return(
                        <option value={data.country_id}>{data.country_name}</option>
                    )
                })}
            </select>
            <br />
            <select class="form-select" aria-label="Default select example" onChange={handleState}>
                <option>Choose State</option>
                {State[2].data.map((data)=>{
                    if(data.country_id === countryValue){
                        return(
                            <option value={data.state_id}>{data.state_name}</option>
                        )
                }
            })}
            </select>
            <br />
            <select class="form-select" aria-label="Default select example">
                <option>Choose City</option>
                {City[2].data.map((data)=>{
                    if(data.state_id === stateValue){
                        return(
                            <option>{data.city_name}</option>
                        )
                    }
                })}
            </select>
        </>
    )
}
export default TestCountry;