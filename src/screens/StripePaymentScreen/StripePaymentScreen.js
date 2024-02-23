import {CardField, useStripe} from '@stripe/stripe-react-native';
import {Button} from 'react-native-paper';
import SmallButton from '../../components/SmallButton';
import {StyleSheet, View} from 'react-native';
import {LIGHT_PURPLE, WHITE} from '../../utils/colors';
import {useEffect, useState} from 'react';
import {PUBLISH_ABLE_KEY} from '../../utils/stripeKey';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function StripePaymentScreen() {
  const {confirmPayment, initPaymentSheet, presentPaymentSheet} = useStripe();
  const navigation = useNavigation();

  const [clientSecret, setClientSecret] = useState(
    'pi_1JKtqG2eZvKYlo2CbZqhT2lB_secret_J2JdCnzZi2YDvXHkGuLBRTRM1',
  );
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.stripe.com/v1/payment_intents',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${PUBLISH_ABLE_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: 1000, // Amount in cents
              currency: 'usd',
              payment_method_types: ['card'],
            }),
          },
        );

        const data = await response.json();
        setClientSecret(data.client_secret);
        initPaymentSheet({paymentIntentClientSecret: clientSecret});
      } catch (error) {
        console.error('Error fetching payment intent:', error);
      }
    };

    fetchData();
  }, []);

  console.log(clientSecret, 'clientSecretclientSecretclientSecret');


  useEffect(() => {
    const initializePaymentSheet = async () => {
      try {
        await initPaymentSheet({
          paymentIntentClientSecret: clientSecret,
          returnURL: 'your-placeholder-url',
        });
      } catch (error) {
        console.error('Error initializing Payment Sheet:', error);
      }
    };

    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);

  // const handlePaymentSheet = async () => {
  //   try {
  //     await presentPaymentSheet();
  //   } catch (error) {
  //     console.error('Error presenting Payment Sheet:', error);
  //   }
  // };

  const handlePaymentResult = async () => {
       setTimeout(() => {
        navigation.navigate('OrderCompleteScreen');
      }, 250);
   
  };
  return (
    <LinearGradient
    colors={['#4c56', '#3998', '#19316a']}
    style={[styles.container]}>
      <CardField
        postalCodeEnabled={true}
        style={styles.cardField}
        cardStyle={styles.cardStyle}
        onCardChange={cardDetails => {
          console.log('cardDetails', cardDetails);
        }}
        onFocus={focusedField => {
          console.log('focusField', focusedField);
        }}
      />

      <Button
        mode="contained"
        // loading={loading}
        onPress={handlePaymentResult}
        style={styles.button}
        contentStyle={styles.buttonContent}
        labelStyle={styles.buttonLabel}>
        Pay
      </Button>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardField: {
    width: '96%',
    height: 50,
    marginVertical: 20,
    marginHorizontal: '5%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.2,
    },
    // shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  cardStyle: {
    textColor: '#000000',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    placeholderColor: Platform.OS === 'ios' ? null : 'lightgrey',
  },
  button: {
    marginTop: 20,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    backgroundColor: LIGHT_PURPLE,
  },
  buttonContent: {
    height: '100%',
  },
  buttonLabel: {
    color: WHITE,
  },
});
