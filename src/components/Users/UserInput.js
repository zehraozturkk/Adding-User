import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UserInput.module.css"
import ErrorModal from "../UI/ErrorModal";



const UserInput = props =>{
    const [enteredUserName, setEnteredUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler =(event)=>{
        event.preventDefault();
        console.log(enteredUserName, enteredAge);
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid input',
                message: 'please enter a valid name and age (non-empty values'
            });
            return;
        }
        if(+enteredAge < 1){
            setError({
                title: 'Invalid aage',
                message: 'Please enter a valid age (>0)'
            });
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUsername('');
        setAge('');
        
    }

    const usernameChangeHandler = (event) =>{
        if(event.target.value < 0){
            console.log("4");
        }else{
            setEnteredUsername(event.target.value);
        }

    }
    const ageChangeHandler = (event) =>{
        setAge(event.target.value);

    }

    const errorHandler = () =>{
        setError(null);
    }
    
    return (
        <div>
            {error && <ErrorModal title = {error.title} message={error.message} onHandleError={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>

                    <label htmlFor="username">UserName</label>
                    <input 
                        type="text" 
                        id="userName" 
                        value={enteredUserName} 
                        onChange={usernameChangeHandler} 
                        
                    />

                    <label htmlFor="age">Age(Years)</label>
                    <input 
                        type="number"  
                        id="age" 
                        value={enteredAge} 
                        onChange={ageChangeHandler}
                    />

                    <Button type="submit">Add User</Button>
                </form>
                
            </Card>
        </div>
    )
};

export default UserInput;