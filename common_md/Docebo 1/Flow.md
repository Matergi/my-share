documentazione: https://gitlab.com/docebo/mobile/golearn/-/wikis/TechDocs/DoceboFlow/Introduction

https://help.docebo.com/hc/en-us/articles/22705349597842-Embedded-learning-in-your-mobile-application

https://help.docebo.com/hc/en-us/articles/4900486554770-Embedded-learning-building-blocks-versions-and-release-history

il codice viene copiato e incollato con PDF o ZIP

https://gitlab.com/docebo/mobile/react-native-docebo-flow
https://gitlab.com/docebo/mobile/go.learn-firebase-flow
https://gitlab.com/docebo/mobile/ios-docebo-flow
https://gitlab.com/docebo/mobile/android-flow-poc



deve fare una richiesta del token e un await sull'app per le credenziali per non renderlo pubblico nella pagina web (i clienti potrebbero usare anche il loro access token e l'app richiede l'access token al loro backend, deve avvenire tutto lato mobile)
![[Screenshot 2025-02-26 at 11.28.42.png]]

option sono injectate lato nativo, (tina puo configurare piu appLauncher)
![[Screenshot 2025-02-26 at 11.29.59.png]]

![[Screenshot 2025-02-26 at 11.31.08.png]]

uno se lo può creare come vuole
![[Screenshot 2025-02-26 at 11.31.21.png]]

qua ci sono gia degli esempi
![[Screenshot 2025-02-26 at 11.32.06.png]]

window.postMessage chiama questo
![[Screenshot 2025-02-26 at 11.34.21.png]]
e la chiama la parte nativa con il nuovo token

questa viene injectata dopo
![[Screenshot 2025-02-26 at 11.35.22.png]]

nella repo react-native
![[Screenshot 2025-02-26 at 11.43.25.png]]