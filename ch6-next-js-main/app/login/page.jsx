"use client";

import {useFormState} from 'react-dom';

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { shareMeal, signInAction } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/meals-form-submit";

export default function LoginPage() {
  const [state, formAction] = useFormState(signInAction, {message: null})

  if (state.status === "Success") {
    redirect("/");
  }
  return (

    <>
      <header className={classes.header}>
        <h1>
          Login With <span className={classes.highlight}>Your Account</span>
        </h1>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </p>
          </div>
          
          {state.message && <p>{state.message}</p>}
          <p className={classes.actions}>
            <LoginFormSubmit/>
          </p>
        </form>
      </main>
    </>
  );
}
