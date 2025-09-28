import React, { useState } from 'react'
function MyComponent(){
   const [cars, setCars] = useState([])
   const [carYear, setCarYear] = useState(new Date().getFullYear())
   const [carMake, setCarMake] = useState("")
   const [carModel, setCarModel] = useState("")
   const handleAddCar = ()=>{
    const newCar = {
         year: carYear, 
         make: carMake, 
         model: carModel
    }

    setCars(c => [...c, newCar])
    setCarYear(new Date().getFullYear())
    setCarMake("")
    setCarModel("")
    console.log("Clicked button")
   }
   const handleRemoveCar = (index)=>{
    if(cars.length > 1){
        setCars(c=> c.filter(( _, i) => i !== index))
    }
    
   }
   const handleYearChange = (event)=>{      
    setCarYear(event.target.value)

   }
   const handleMakeChange = (event)=>{
    setCarMake(event.target.value)
   }
   const handleModelChange = (event)=>{
    setCarModel(event.target.value)
   }
   const newcarVal = cars.filter((car) => car.year&&car.make &&car.model)
    return(
    <div>
        <h2>List of Car Object</h2>
        <ul>
            {newcarVal.map((car, index)=> <li key= {index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>)

            }


        </ul>
        <input type="number"  value={carYear} onChange={handleYearChange}/>
        <br />
        <input type="text"  value={carMake} onChange={handleMakeChange} placeholder='Producer'/>
        <br />
        <input type="text"  value={carModel} onChange={handleModelChange} placeholder='Model'/>
         <button onClick={handleAddCar}>Add Car</button>
    </div>
)}
export default MyComponent