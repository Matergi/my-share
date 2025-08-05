
#### Problemi incontrati
* si bloccava la build perché chiedeva le credenziali con la GUI 
	* @matteo_dannelli era riuscito a vedere in live la build e lo ha notato cosi
	* quindi è stato aggiunto questo comando
	* ![[Screenshot 2025-05-21 at 15.45.55.png]]
	* https://gitlab.com/docebo/mobile/golearn/-/merge_requests/4235

## Certificato
ti crei certificatesigningrequest
lo importi su developer apple
crei nuovo certificato dentro certificates, identidiers & profile
e nel download ti ritrovi un .cer
lo apri e lo trovi nel keychain
e lo esporti in un .p12
e ti chiede di mettere una password che il cliente NON non deve mettere


noi scriot:
dal p12 ci creiamo la key e la cert

e con il comando securety lo importiamo e tramite il flga `-P ""` non chiede la password tramite cli


security:
sblocca il keychain (come se aprissi il keychain)


codesign
