import classes from "./Checkout.module.css";
import useInput from '../../hooks/use-input';

const Checkout = (props) => {
  let formIsValid = false;
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangedHandler,
    inputBlurHandler: streetBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: postalCodeInputHasError,
    valueChangeHandler: postalCodeChangedHandler,
    inputBlurHandler: postalCodeBlurHandler,
  } = useInput((value) => value.trim().length === 6);
  
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangedHandler,
    inputBlurHandler: cityBlurHandler,
  } = useInput((value) => value.trim() !== "");

  
  if (enteredCityIsValid && enteredNameIsValid && enteredPostalCodeIsValid && enteredStreetIsValid) {
    formIsValid = true;
  }
  
  const inputNameClasses = `${classes.control} ${
    nameInputHasError ? classes.invalid : ""
    }`;
  
  const inputStreetClasses = `${classes.control} ${
    streetInputHasError ? classes.invalid : ""
    }`;
  
    const inputPostalCodeClasses = `${classes.control} ${
    postalCodeInputHasError ? classes.invalid : ""
    }`;
    
  const inputCityClasses = `${classes.control} ${
    cityInputHasError ? classes.invalid : ""
  }`;
  
  const confirmHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity
    })
  };
  
  return (
    <form className={classes.form} onSubmit={confirmHandler} autoComplete="off">
      <div className={inputNameClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
          autoComplete="off"
        />
        {/* {nameInputHasError && (
          <p className={classes.error}>Please enter a valid name.</p>
        )} */}
      </div>
      <div className={inputStreetClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangedHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
          autoComplete="off"
        />
        {/* {streetInputHasError && (
          <p className={classes.error}>Please enter a street.</p>
        )} */}
      </div>
      <div className={inputPostalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          value={enteredPostalCode}
          onChange={postalCodeChangedHandler}
          onBlur={postalCodeBlurHandler}
        />
        {/* {postalCodeInputHasError && (
          <p className={classes.error}>Please enter a Postal Code.</p>
        )} */}
      </div>
      <div className={inputCityClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onChange={cityChangedHandler}
          onBlur={cityBlurHandler}
        />
        {/* {cityInputHasError && (
          <p className={classes.error}>Please enter a City.</p>
        )} */}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={!formIsValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
