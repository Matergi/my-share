---
doc diez: https://gitlab.com/docebo/mobile/golearn/-/wikis/Handover/CommunityWidget
---
## come attivarlo
* andare su questo url: https://mate.docebosaas.com/community/manage
* e creare una community (ne puoi creare solo una e non puoi cancellarla)
* forse va syncronizzato con una piattaforma esterna??
	* penso di no

## Code
delle guardie

![[Screenshot 2025-03-07 at 11.09.40.png]]

getCommunityHTML:
![[Screenshot 2025-03-07 at 11.10.44.png]]

pd-app vuole come parametro una bootstrap che non è la nostra:
![[Screenshot 2025-03-07 at 11.11.26.png]]

viene rifatta la mobile bootstrap perché ci serve la vera risposta reale e passarla:

![[Screenshot 2025-03-07 at 11.12.05.png]]

![[Screenshot 2025-03-07 at 11.13.15.png]]

![[Screenshot 2025-03-07 at 11.13.08.png]]

senza questi si sputtana il css booh:
![[Screenshot 2025-03-07 at 11.14.02.png]]

isMobileApp (ti nasconde la parte di amministrazione) o qualcosa del genere perché sull'app non ci vuole la parte admin

## Come testarlo
* andare sulla funzione **getCommunityHTML** 
* fare questa modifica:
* ![[Screenshot 2025-06-16 at 12.47.56.png]]
* aprire la pagina community (si vedrà bianca)
* lanciarlo sulla console:![[Screenshot 2025-06-16 at 12.48.22.png]]