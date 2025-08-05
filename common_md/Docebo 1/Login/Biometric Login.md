
#### dove?
Biometric.ts
c'è la possibilità di dirgli attivalo nella profile per la prossima login

#### cosa?
did mount e did update va fatto updateBiometricData 

lo puoi abilitare da firebase


#### come?
ci salviamo le credenziali dell'utente sul keychain
user:pwd ci si salva e si tira fuori tramite `getBiometricData()`

e poi nella saga checkBiometricLoginSaga se è abilitato va a scrivere nel `updateBiometricData()` e se deve chiedere i permessi li chiede e poi li scrive nell'async storage

* e la prossima login?
	* (adesso lo devi attivare dal profilo??)
	* vedi un bottone entra con biometric-login 


