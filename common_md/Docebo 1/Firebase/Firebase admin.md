---
doc diez: https://gitlab.com/docebo/mobile/golearn/-/wikis/Handover/FirebaseAdminAndDashboard
---
> per rigenerare la documentazione web: yarn apidoc 

### Come si pubblica?
* apri una mr verso maintenance
* quando viene mergiata parte la pipeline di gitlab
	* deploy-hosting
	* deploy-functions

### Struttura codice
il punto di inizio è `functions/src/index.ts`

### Emulatore
functions/package.json
`yarn emulator` 

errore: perché la porta 5000 è gia usata
![[Screenshot 2025-02-25 at 10.25.10.png]]

si cambia nel firebase.json
![[Screenshot 2025-02-25 at 10.25.31.png]]

![[Screenshot 2025-02-25 at 10.26.06.png]]

![[Screenshot 2025-02-25 at 10.26.22.png]]

> ATTENZIONE ci sono le credenziali anche di prod


ci servono i dati !!!!ATTENZIONE!!!! ci sono le credenziali anche di prod
![[Screenshot 2025-02-25 at 10.26.55.png]]
![[Screenshot 2025-02-25 at 10.27.15.png]]
![[Screenshot 2025-02-25 at 10.27.28.png]]

adesso ci sono tutti i dati:
![[Screenshot 2025-02-25 at 10.28.08.png]]

### Other

in teoria durante il rilascio fa un backup 
![[Screenshot 2025-02-25 at 10.06.02.png]]

dashboard c'è test.mobile

deploy delle functions:
![[Screenshot 2025-02-25 at 10.13.10.png]]

### migrazioni

![[Screenshot 2025-02-25 at 10.13.48.png]]

per creare una nuova:
![[Screenshot 2025-02-25 at 10.14.47.png]]

> prima si mergia la dashboard e poi la admin


# Script versioni lib github con slack

la funzione che chiama github per sapere se ci sono deglli aggiornamenti su una determinata libreria e poi le invia su slack è: **sendSlackNotification**

l'env c'è uno dentro il progetto e uno dentro su firebase

lo puoi incontrare premendo **Detailed usage stats**
![[Screenshot 2025-05-12 at 11.32.50.png]]

e dopo su **variables**
![[Screenshot 2025-05-12 at 11.38.50.png]]
### Errori

##### github: 403
`"method":"get","url":"``[https://api.github.com/repos/itinance/react-native-fs/releases/latest](https://api.github.com/repos/itinance/react-native-fs/releases/latest)``"},"code":"ERR_BAD_REQUEST","status":403}`

se metto questo url sul browser funziona, quindi mi sono ricordato che ci sono dei limiti per github: [https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28

andrebbe messo un authToken per farlo funzionare.

ho provato a lanciarlo manualmente da console di firebase e ha funzionato, secondo me utilizza un'altro IP