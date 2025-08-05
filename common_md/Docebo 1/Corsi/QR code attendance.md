---
toggle: release/weekly/mobile/qr-attendance
other toggle: nella course/{id}/sessions c'è un campo che lo abilita
---
# setup
* creare un corso ILT
* creare una session
* creare un evento
* entrare dentro l'evento
* attivare il toggle sulla sandbox 
	* [[Docebo/Processi/Gestione di toggles e app in una sandbox#Attivare un toggle]]
	* ![[Screenshot 2025-05-21 at 15.34.10.png]]
* abilitare l'attendance con QRCode
	* ![[Screenshot 2025-04-30 at 11.43.33.png]]
	* ![[Screenshot 2025-04-30 at 11.44.02.png]]

#### Quali sono i toggle?
* **QR_ATTENDANCE_ENABLED** 
* ![[Screenshot 2025-04-29 at 18.04.02.png]]

#### parti di view sotto toggle
* header in altro
	* ![[Screenshot 2025-05-21 at 15.40.51.png]]
	* basta il toggle della sandbox
* dentro all'evento
	* ![[Screenshot 2025-05-21 at 15.41.39.png]]
	* serve il toggle della sandbox e il toggle dentro all'evento
		* ![[Screenshot 2025-05-21 at 15.42.07.png]]
# Come trovo il QRCode
* andare sul corso e fare play
	* ![[Screenshot 2025-04-29 at 18.05.45.png]]
* per vedere quel tasto per il QR code devi essere instructor del corso!!
* ![[Screenshot 2025-04-29 at 18.06.05.png]]
* ![[Screenshot 2025-04-29 at 18.06.31.png]]


# Sviluppo
#### Problemi sorti lato sviluppo
* se ci sono piu di una azione (in qualsiasi punto dove viene usato il parallax layout) se si prsereme sull'azione visibile in realtà si sta premendo la prima azione
	* lo abbiamo risolto mostrando tutte le azioni nell'header
* la chiamata API dell'attendance (attualmente) ritorna tutti gli utenti, quindi facciamo una ricerca per username con fallback alla mail per trovare l'utente
	* lo abbiamo risolto mettendo l'api che si chiama attendance_qr
* se apriamo un deeplink a un evento che sta dentro una sessione che contiene solo eventi passati, il deeplink non funzionerà e mostrerà una snackbar con scritto "sessione non disponibile" perché durante il giro del deeplink non fa la chiamata `/courses/{id}/sessions` ma solamente la `/courses/{id}`
	* [[share/common_md/Docebo 1/Corsi/ILT Course#api]]

#### Domande
* EventAttendanceStatus che significa?
	* **UNDEFINED** non è mai stato settato
	* **ABSENT** settato come: non ha partecipato
	* **PRESENT** settato come: ha partecipato
* Se uno è segnato come **ABSENT**, attualmente si vede il footer con il bottone mark attendance che ti permette di fare la chiamata
	* @francesca ha detto che dovremmo premere il bottone e aprire un blank slate
* perché alcuni event non hanno l'ID?
	* non ho saputo il motivo :(

### come ci accedo?

* Deeplink
	* golearn://course/189/session/54/event/55/attendance
* ILT Controller `getHeaderActions`
	* ricordati che sotto ci sono 2 headers nel parallax layout e ho creato questa funzione: `renderRightActionsButton` 
		* header parallax: si vede solo 1 azione ma è finta
			* ![[Screenshot 2025-04-22 at 12.39.30.png]]
			* si nota dall'onpress fake ![[Screenshot 2025-04-22 at 12.54.06.png]]
		* Toolbar è quella reale che si mostra dopo lo scroll ha tutte le azioni nella lista
			* ![[Screenshot 2025-04-22 at 12.40.09.png]]
			* ![[Screenshot 2025-04-22 at 12.40.50.png]]
		* questo per dire che, le azioni sotto sono cliccabili anche se non si vedono
			* ![[Screenshot 2025-04-22 at 12.42.31.png]]
		* quale potrebbero essere i problemi?
			* se ci sono piu di una azione (in qualsiasi punto dove viene usato il parallax layout) se si preme sull'azione visibile in realtà si sta premendo la prima azione
		* lo abbiamo risolto mostrando tutte le azioni in alto a destra
* ILT Event

#### Come testo la geolocalizzazione su sandbox?
> **@andre_cardia:** 
> se devi testare la geolocalizzazione però va anche aggiunta la api key su redis


#### Reducer
il reducer è quello del course `CourseReducer` che con key:value contiene le informazioni del corso:

* course_id
	* general props
	* course{}
		* sessions[]
			* dates[]

#### Chiamate API
`/course/v1/events/{event_id}/attendance_qr`
era stata fatta una api: **attendance_qr** perché in quella che usa anche il desktop viene visualizzata solo dall'admin quindi non aveva i permessi per l'utente normale 


# Bug

#### DD-44896
DD: https://docebo.atlassian.net/browse/DD-44896
* setup
	* creo una pagina con widget agenda
		* ![[Screenshot 2025-08-04 at 17.39.09.png]]
	* crea un corso
		* crea una sessione (sessione full)
			* max 1 utente enrollabile
			* creato un evento
				* oggi tutto il giorno
		* creo una sessione (sessione non full)
			* lo configuro con posti disponibili
* BUG 1
	* apro l'agenda e premo su quell'evento
		* si apre la pagina di sessione e vedo quell'errore
			* ![[Screenshot 2025-08-04 at 17.39.52.png]]
* BUG 2 
	* mi enrollo sessione full
	* apro il course screen e vado nella tab sessioni e mi trovo il bug
	* ![[Screenshot 2025-08-04 at 17.49.31 1.png]]
* RISOLUZIONE
	* il problema è che nella tab della session se sei enrollato a una sola sessione ti mostra la sessione in cui sei entrollato e quel messaggio se sei enrollato non lo devi vedere, quindi basta fare questa fix e si risolvono entrambi
	* ![[Screenshot 2025-08-04 at 18.03.10.png]]