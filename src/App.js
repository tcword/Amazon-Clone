import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Footer from './Footer';
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51HRhH2KiEXqadUxbGji35uOzeaCEQDgNcMxcZhbCVMJDLBkA36PBMtd95Es4YRFhthsRckgDVcIPhWz7yzKK6dRs00uQB3JnUy"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  // useEffect - piece of code which runs based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in..
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>>", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

{
  /* React-Router */
}

{
  /* localhost.com */
}
{
  /* localhost.com/checkout */
}
{
  /* localhost.com/login */
}

export default App;
