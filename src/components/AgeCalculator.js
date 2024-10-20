import Button from 'react-bootstrap/Button';
import React, { useState,useEffect } from 'react'
import Stack from 'react-bootstrap/Stack'

const AgeCalculator = () => {

    //define states to manage user input and calculate age
    const [birthdate, setbirthdate] = useState('');
    const [age, setage] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        setTimeout(() => {
          setage({
            years: 0,
            months: 0,
            days: 0,
        });
        }, 0);
      },[]);

    //function to calculate age
    const calculateAge = () => {
        const birthDate = new Date(birthdate); //convert the input to a Date object 
        const today = new Date(); //Get the current date

        if (birthDate > today) {
            // Display error message
            setError('Invalid input. Birth date cannot be in the future.');
            setage(null);
            return;
        }

        const yearsDiff = today.getFullYear() - birthDate.getFullYear();
        const monthsDiff = today.getMonth() - birthDate.getMonth();
        const daysDiff = today.getDate() - birthDate.getDate();

        let ageYears = yearsDiff;
        let ageMonths = monthsDiff;
        let ageDays = daysDiff;

        //handle cases where the day or month of birthday is  ahead of the day or month
        if (daysDiff < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthDate.getDate());
            ageMonths -= 1;
            ageDays = Math.floor((today - lastMonth) / (24 * 60 * 60 * 1000));
        }

        if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
            ageYears -= 1;
            ageMonths += 12;
        }

        //set the calculated age in the state
        setage({
            years: ageYears,
            months: ageMonths,
            days: ageDays,
        });

        setError('');
    };

    return (

        <div className='container-flex pt-4 pb-5 bg-light '>
            {/*<h1 className='md'>Age Calculator</h1>*/}
            <Stack gap={3} className=' col-8 p-3 mx-auto'>
                <div className="card p-3 col-12" >
                    <div className='card-body'>
                        <div className='row row-cols-auto text-center justify-content-center'>
                            <div className='col'>
                                <input
                                    type='date'
                                    value={birthdate}

                                    onChange={(e) => {
                                        //Ensure that the input value is no longer then 10 characters
                                        if (e.target.value.length <= 10) {
                                            setbirthdate(e.target.value);
                                        }
                                    }}
                                    max="9999-12-31" //set the max allowed date
                                    min="0000-01-01" //set the min allowed date
                                />
                            </div>
                            <dic className='col'>
                                {/* button to trigger age calculation function */}
                                <Button variant='success' onClick={calculateAge}>Calculate</Button>
                            </dic>
                        </div>
                    </div>
                </div>
                <div className='fw-bold'>
                    {/* Display error message if exists */}
                    {error && <p className="errormsg">{error}</p>}

                    {/* structure to display the result s */}

                    {age && (
                        <div className="container fs-4 text-center p-3 fw-bold">
                            <div className='row '>
                                <div className="col">
                                    <p id="year" className="">{age.years}</p>
                                    <p>Years</p>
                                </div>
                                <div className="col">
                                    <p id="month">{age.months}</p>
                                    <p>Months</p>
                                </div>
                                <div className="col">
                                    <p id="day">{age.days}</p>
                                    <p>Days</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {age && (
                        <div className='container text-center p-3'>
                            <div className='row'>
                                <p>You are {age.years} years, {age.months} months, and {age.days} days old.</p>
                            </div>
                        </div>
                    )}
                </div>

            </Stack>
        </div>

    )
}

export default AgeCalculator