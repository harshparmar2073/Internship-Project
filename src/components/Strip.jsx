import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grow,
  Typography,
  Grid,
  Button,
  ButtonBase,
  Box,
  TextField,
  Autocomplete,
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import CustomTextField from '../components/CustomTextField';
import CustomCheckbox from '../components/CustomCheckbox';
import CustomButton from '../components/CustomButton';
import { makeStyles } from '@mui/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSnackbar } from '../lib/context';
import { toast } from 'react-toastify';
import api from '../api';
import { loadStripe } from '@stripe/stripe-js';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import CustomTextarea from '../components/CustomTextarea';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import clsx from 'clsx';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Country, State, City } from 'country-state-city';
import FormikSelect from '../components/FormikSelect';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-google-places-autocomplete';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { GoogleMap, LoadScript, Autocomplete as GoogleAutocomplete } from '@react-google-maps/api';

const useRadioStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: '50%',
    width: 18,
    height: 18,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#48a068',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    'input:hover ~ &': {
      backgroundColor: '#f89e23',
    },
  },
});

function StyledRadio(props) {
  const classes = useRadioStyles();
  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      size="small"
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

// Uncomment and update the schema as needed
export const Stripes = yup.object().shape({
  // Example:
  // firstName: yup.string().required('First Name is required.'),
});

function Stripe(props) {
  const countryData = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    displayValue: country.name,
  }));

  const useStyles = makeStyles((theme) => ({
    button: {
      ...theme.typography.button,
      padding: '4px 0px',
      height: 'fit-content',
      borderRadius: '3px',
      boxShadow:
        '0 1px 0 0 rgba(22, 29, 37, 0.1), inset 0 1px 0 1px rgba(255, 255, 255, 0.06)',
      fontWeight: 'bold!important',
      width: 'fit-content',
      transition: '0.2s all',
      outline: 'none',
      '&:active': {
        transform: 'scale(0.98)',
        boxShadow: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
      },
    },
  }));

  const classes = useStyles();
  const { openSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [disableStripe, setDisableStripe] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [showStripe, setShowStripe] = useState(false);
  const location = useLocation();
  const { sellerId } = location.state || {};

  const initialValues = {
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    address: '',
    username: '',
    password: '',
    type: 'buyer',
    tnc: '',
    latitude: 0,
    longitude: 0,
    continent: '',
    country: '',
  };

  const [details, setDetails] = useState(initialValues);
  const [place, setPlace] = useState(null);
  const autocompleteRef = useRef(null);

  const redirectToStripe = async () => {
    const stripePromise = loadStripe(
      'pk_test_51K6IJQB5OnvlhtIimji1uXUxV8S6AHtaxogATTN4oXsV6yEPToxCmxfq25eP28CUNIKw1FhqVwFAD0H78Ajcb3Fj00gYZf5paT'
    );
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
  };

  useEffect(() => {
    if (sessionId) {
      redirectToStripe();
    }
  }, [sessionId]);

  const handleStripeSubscription = async () => {
    try {
      setDisableStripe(true);
      // API call to create Stripe session, assuming it returns a session ID
      const { data } = await api.post(`signup/stripe?reference=${sellerId}`);
      setSessionId(data);
    } catch (error) {
      setDisableStripe(false);
      const errorMessage = error?.response?.data?.errors?.length
        ? error.response.data.errors.join(', ')
        : error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: 'auto',
      }}
    >
      <Typography
        sx={{
          fontSize: '32px',
          color: '#4aa56d',
          textTransform: 'uppercase',
          fontWeight: 600,
          mb: 3,
          textAlign: 'center',
        }}
      >
        Annual Subscription
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography
            sx={{
              fontSize: '20px',
              color: '#3a3963',
              fontWeight: 500,
            }}
          >
            Pay With Stripe
          </Typography>
        </Grid>

        <Grid item xs={5}>
          <Typography
            sx={{
              fontSize: '20px',
              color: '#3a3963',
              fontWeight: 500,
              textAlign: 'right',
            }}
          >
            Total
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography
            sx={{
              fontSize: '24px',
              color: '#4aa56d',
              fontWeight: 600,
              textAlign: 'right',
            }}
          >
            $999
          </Typography>
        </Grid>

        <Grid item xs={12} sx={{ mt: 3, textAlign: 'center' }}>
          <ButtonBase
            onClick={() => {
              if (!disableStripe) {
                handleStripeSubscription();
              }
            }}
            disabled={disableStripe}
            className={classes.button}
            sx={{
              padding: '12px 24px',
              backgroundColor: disableStripe ? '#ccc' : '#4aa56d',
              color: '#fff',
              borderRadius: '4px',
              fontWeight: 600,
            }}
          >
            <span>Pay With Stripe</span>
          </ButtonBase>
        </Grid>
      </Grid>
    </Box>
  );
}

function StripePage() {
  const WrappedSignUpPage = GoogleApiWrapper({
    // Provide your API key here if needed
    // apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
  })(Stripe);

  return (
    <Box>
      <WrappedSignUpPage />
    </Box>
  );
}

export default StripePage;
