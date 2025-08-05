
# Enroll
ti puoi self-enrollare nel corso
se abiliti waiting list ti puoi self-enrollare in una session

# Settings
* come abilitare il self enrollment? ^475207
	* andare sulle proprietà del corso e poi su Advanced Settings / Catalogue options
	* ![[Screenshot 2025-05-28 at 13.11.42.png]]
	* ![[Screenshot 2025-05-28 at 13.10.49.png]]
	* ![[Screenshot 2025-05-28 at 13.11.05.png]]
# api

>/course/{id}

torna solamente le sessioni con eventi (presenti/futuri), quindi se una sessione ha 1 evento ed è passato la sessione non viene tornata in questa API

mi torna tutti i dettagli se sono in waiting list ecc (mi torna tutti gli stati)

![[Screenshot 2025-05-28 at 12.54.49.png]]

>/course/{id}/sessions 

torna tutte le sessioni con eventi (passati/presenti/futuri)
tutte le sessioni a cui sono enrollato di un corso (se sei in waiting list non te le passa)
non mi da lo stato della session

# Self enroll

>sembra che da UI user ti puoi self-enrollare in una sola sessione

visivamente l'admin puo enrollare l'utente a piu sessioni, ma l'utente sia su desktop che su mobile può enrollarsi a una sola sessione (o non ho trovato il modo di farlo)

su mobile

![[Screenshot 2025-05-28 at 12.23.05 1.png]]:

![[Screenshot 2025-05-28 at 12.23.18 1.png]]

come vedi non da la possibilità di selezionarle piu di una

![[Screenshot 2025-05-28 at 12.23.27 1.png]]

anche su desktop come vedi non da la possibilità di selezionarle piu di una

![[Screenshot 2025-05-28 at 12.24.50.png]]

* abbiamo trovato un caso in cui se ti metti in waiting list su una sessione e l'admin ti enrolla ad un'altra sessione trovi questo caso, in cui la sessione ha il badge waiting list
	* [[#Settings]] "come abilitare il self enrollment"
		* [[#^475207]]
	* fai un corso con piu sessioni
	* ![[Screenshot 2025-06-04 at 15.57.29.png]]
	* iscriviti manualmente in una sessione manualmente con la app
	* e poi iscrivi manualmente l'utente tramite admin ad altre sessioni diversa da quella iscritta lato app
	* e se riapri il corso vedrai questa schermata:
	* ![[Screenshot 2025-05-28 at 12.42.46.png]]


