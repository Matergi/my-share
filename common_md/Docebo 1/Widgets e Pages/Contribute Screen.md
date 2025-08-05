
share content 
![[Screenshot 2025-02-28 at 10.06.30.png]]

![[Screenshot 2025-02-28 at 10.07.35.png]]

chiamata api al nostro BE per gli og:tags
![[Screenshot 2025-02-28 at 10.08.20.png]]
(non funziona su tutti i siti)

share viene fatto una chiamata API per condividerlo

nel next lo creo e ci faccio dare l'url
![[Screenshot 2025-02-28 at 10.14.00.png]]

![[Screenshot 2025-02-28 at 10.14.29.png]]

se uno killa l'app ci dovrebbe essere un cron che lo cancella

invece quando si torna indietro si richiama una DELETE
![[Screenshot 2025-02-28 at 10.16.12.png]]

fetch delle skills
![[Screenshot 2025-02-28 at 10.10.26.png]]

avanti si potranno scegliere con chi condividerlo
![[Screenshot 2025-02-28 at 10.10.40.png]]


## implementazione

card fake per mostrare lo spinner
![[Screenshot 2025-02-28 at 10.19.18.png]]

dopo lo mettiamo in converting e mettiamo quelli realmente che ci ritorna l'api
![[Screenshot 2025-02-28 at 10.20.08.png]]

questa è la saga che naviga tra gli screen
![[Screenshot 2025-02-28 at 10.22.40.png]]

