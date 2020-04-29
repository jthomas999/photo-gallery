import { IonContent, IonText, IonRow, IonCol, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import React, { Component } from 'react';
import './Tab1.css';
import { Plugins } from '@capacitor/core';

const INITIAL_STATE = {
};

class Tab1 extends Component {
  state: any = {};
  props: any = {};
  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  async getCurrentState(): Promise<boolean> {
    const result = await Plugins.FacebookLogin.getCurrentAccessToken();
    try {
      return result && result.accessToken;
    } catch (e) {
      return false;
    }
  }

  async signIn(): Promise<void> {
    const { history } = this.props;
    const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];
    const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result && result.accessToken) {
      history.push({
        pathname: '/home',
        state: { token: result.accessToken.token, userId: result.accessToken.userId }
      });
    }
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonRow>
            <IonCol className="text-center">
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="text-center">
              <IonText className="title">
                Welcome to FastShop!
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="text-center">
              <IonText className="text-center">
                Login
              </IonText>
            </IonCol>
          </IonRow>
          <IonButton className="login-button" onClick={() => this.signIn()} expand="full" fill="solid" color="primary">
            Login with Facebook
          </IonButton>
        </IonContent>
      </IonPage>
    )
  }
}
export default Tab1;
