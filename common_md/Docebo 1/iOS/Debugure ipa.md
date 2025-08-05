doc:
https://gitlab.com/docebo/mobile/golearn/-/wikis/SpikeGeneric/UniversalLinks/AppStoreIpas


installare l'app
![[Screenshot 2025-03-07 at 10.34.25.png]]

![[Screenshot 2025-03-07 at 10.34.59.png]]

![[Screenshot 2025-03-07 at 10.35.15.png]]

![[Screenshot 2025-03-07 at 10.35.51.png]]

lasciare l'alert 
![[Screenshot 2025-03-07 at 10.37.19.png]]

(la path è sulla doc su golearn wiki)

![[Screenshot 2025-03-07 at 10.38.10.png]]

![[Screenshot 2025-03-07 at 10.38.17.png]]

![[Screenshot 2025-03-07 at 10.38.29.png]]

`entitlements.sh ios_123.ipa`

![[Screenshot 2025-03-07 at 10.39.14.png]]

> ricordati che puoi creare uno zip come sotto: `ios_123.ipa.zip` rinominandolo


![[Screenshot 2025-03-07 at 10.40.35.png]]

entrare dentro a Golearn.app facendo show package

![[Screenshot 2025-03-07 at 10.40.41.png]]

qua c'è l'info.plist
![[Screenshot 2025-03-07 at 10.40.47.png]]

![[Screenshot 2025-03-07 at 10.40.52.png]]

questa è la versione:
![[Screenshot 2025-03-07 at 10.41.07.png]]

questa è la build su bitrise:
![[Screenshot 2025-03-07 at 10.41.18.png]]

## per debuggare ancora piu in profondirtà

![[Screenshot 2025-03-07 at 10.50.10.png]]

![[Screenshot 2025-03-07 at 10.50.14.png]]

(segnati l'orario in cui lo fai cosi vedi bene i log perché ce ne sono un miliardo)
installare l'app e dopo premere "Analytics" e aspettare un messaggio in alto nella status bar di completamento, ci mette tipo 30/40secondi o anche di piu 

![[Screenshot 2025-03-07 at 10.49.06.png]]

![[Screenshot 2025-03-07 at 10.49.19.png]]

cercare il sys_ della data corretta

![[Screenshot 2025-03-07 at 10.49.27.png]]

![[Screenshot 2025-03-07 at 10.50.46.png]]

unzipparlo

![[Screenshot 2025-03-07 at 10.51.09.png]]

![[Screenshot 2025-03-07 at 10.51.18.png]]

![[Screenshot 2025-03-07 at 10.51.43.png]]

(in questo caso da errore perché ha un \*)

![[Screenshot 2025-03-07 at 10.52.07.png]]

![[Screenshot 2025-03-07 at 10.59.19.png]]

ricordati che ci possono essere piu di una in base al dominio, vedi sotto (il campo **Domain**):
se funziona vedi i patterns: corretti
![[Screenshot 2025-03-07 at 10.54.26.png]]

gli app id devono combaciare!:
![[Screenshot 2025-03-07 at 10.52.31.png]]

questo quando se lo va a riprendere
![[Screenshot 2025-03-07 at 10.54.41.png]]

## se vuoi andare ancora piu in profondità

aprire questo file

![[Screenshot 2025-03-07 at 10.55.34.png]]

![[Screenshot 2025-03-07 at 10.56.16.png]]

![[Screenshot 2025-03-07 at 10.56.21.png]]

cercare process:swcd `aasa` come nello screenshot sotto

![[Screenshot 2025-03-07 at 10.56.45.png]]