
per debug ricordati di copiare:
`GoogleService-Info-PROD.plist` dentro `GoogleService-Info.plist`

```
const isSubscribeToggleEnabled = FeatureToggle.get('PUSH_NOTIFICATION_SUBSCRIPTION_ENABLED', { toggles: featureToggles });
```

isPushNotificationSubscriptionEnabled

![[Screenshot 2025-03-03 at 12.17.43.png]]


> Nel notification center vengono visualizzate tutte le notifiche che hanno avuto un device a cui mandare la notifica.  
> Se una notifica non aveva un fcm token a cui mandarlo la notifica non viene mandata e quindi non registrata nel notifcation center
> 
> Se l'utente slogga viene chiamato un endpoint che fa la unregister e cancella il suo fcm token