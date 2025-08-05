---
toggle: release/weekly/mobile/tasklist-new-tabs
day: 2025-07-03
---
# Grooming

tutto questo sotto toggle

questi sono i campi nuovi dentro Learners only
![[Screenshot 2025-06-27 at 11.47.36.png]]

aggiungeremo queste su mobile
![[Screenshot 2025-06-27 at 11.48.52.png]]

la prima apre questa (certifciazioni filtrate per quelle scadute)
![[Screenshot 2025-06-27 at 11.49.08.png]]

la seconda (lista corsi scaduti con blankslate)
![[Screenshot 2025-06-27 at 11.49.54.png]]

le pagine le trovi quando vai su my activity e tappi e si apre la pagina

# Come si prepara l'ambiente
* andare sull'admin menu
* premere su **Certifications and retraining** > **Manage**
* premere su **New certification**
	* assegnargli un nome es: "certification to renew"
	* attivare questo![[Screenshot 2025-07-04 at 10.43.42.png]]
* una volta creata premere sull'icona di awarded to  ![[Screenshot 2025-07-04 at 10.44.20.png]]
* adesso ci ritroviamo su questa pagina![[Screenshot 2025-07-04 at 10.45.42.png]]
* premere su **Award users**
	* assegnarli un utente
	* mettiamo come issue data una data parecchio passata
	* e come expiry date una data passata
	* cosi (e oggi è il giorno 04/07/2025): ![[Screenshot 2025-07-04 at 10.47.12.png]]
	* premere su confirm
* adesso tornare sull'altra schermata e assegnamo un corso
* ![[Screenshot 2025-07-04 at 10.48.16.png]]
* premere su **Assign items**
	* scegliere il corso
* adesso bisogna tornare nell'admin menu
* e poi course managment
* e scegliere il corso precedentemente selezionato
* controllare che la certificazione sia stata associata correttamente, si vede negli advanced settings del corso![[Screenshot 2025-07-04 at 10.51.14.png]]
* ![[Screenshot 2025-07-04 at 10.52.02.png]]
* dopo bisogna enrollare l'utente
* adesso ti puoi loggare con l'utente e aprire tasklist dal desktop
* e la ritroverai qua ![[Screenshot 2025-07-04 at 10.55.02.png]]
# Sviluppo - certifications to renew
è stato aggiunta la chiamata da fare per capire quanti elementi ci sono (per la pagina iniziale) nel file `/App/Services/Adapters/TaskList/Request.ts`
![[Screenshot 2025-07-04 at 13.26.38.png]]
e nel file `/App/Services/Adapters/TaskList/Response.ts` è stato aggiunto l'adapter per la response
![[Screenshot 2025-07-04 at 13.27.26.png]]
nel file `/App/Types/TaskList.ts` è stato aggiunta la nuova tab da supportare **certifications_to_renew**

quando si preme sulla "tab"
![[Screenshot 2025-07-04 at 15.17.26.png]]

viene aperto **TaskListDetailsScreen**
che nel controller fa la chiamata **refreshTaskListDetails** e ho creato un nuovo screen **CertificationsToRenew** modificato l'adapter della risposta dell'api per supportare un nuovo type **UserCertification** e in base al type viene renderizzato lo screen corretto:

![[Screenshot 2025-07-04 at 15.19.24.png]]

il check del `!isMounted` l'ho aggiunto io @giacomo perché prima lo faceva dentro la render di ogni singola view perché effettivamente se aprivo la tab "Certifications to renew" funzionava, e poi aprivo i corsi e poi tornavo di nuovo su "Certifications to renew" si rompeva, quindi quel controllo è necessario

![[Screenshot 2025-07-04 at 15.20.20.png]]

prima a tutte le view venivano passati tutti i tipi, ora per renderlo piu pulito passo solo il suo tipo

esempio qua che sia l'**extractor** che il **renderItem** volevano entrambi i type
![[Screenshot 2025-07-04 at 15.21.42.png]]

questo perché il **TaskListLazyList** non era generico del tutto:
![[Screenshot 2025-07-04 at 15.22.41.png]]