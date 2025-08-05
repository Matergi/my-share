---
toggle: release/weekly/new-learningplan-persistent-completion-enrollment
---
# Grooming

* toggle: **NEW_LEARNINGPLAN_PERSISTENT_COMPLETION_ENROLLMENT**
	* FeatureToggle.get
	* **release/weekly/new-learningplan-persistent-completion-enrollment**

![[Screenshot 2025-06-27 at 11.17.23.png]]

tenere traccia del completamento quando il LP viene modificato
se un utente completa il LP, quello puo essere modificato dopo il suo completato, add oremove dei corsi

mostrando sia il fatto che i corsi sono stati aggiunti o tolti e non facendo perdere il fatto che l'utente l'avesse completato prima della modifica

la complition non cambia!
![[Screenshot 2025-06-27 at 11.18.55.png]]

c'e la info di quando è stato completato e mi appare la info che ci sono state delle modifiche rispetto a quando è stato completato

questa global riflette lo stato attuale
![[Screenshot 2025-06-27 at 11.19.53.png]]

ci puo essere la situazione in cui LP è completed però dentro non l'hai finito in realtà 

questo riflette la realtà:
![[Screenshot 2025-06-27 at 11.22.47.png]]

il **badge** puo creare confusione

---

i corsi che ci sono nel LP e quelli completati o no, si calcolano lato APP

![[Screenshot 2025-06-27 at 11.25.57.png]]

il badge ci viene tornato
(se è in progress non facciamo vedere il badge) lo mostriamo solo e è completed
![[Screenshot 2025-06-27 at 11.26.25.png]]


---
questo si calcola a mano: quanti corsi erano obbligatori quando il LP era completato
![[Screenshot 2025-06-27 at 11.27.21.png]]

![[Screenshot 2025-06-27 at 11.28.51.png]]

**madatory_courses_completed_at_completion**: numero di corsi obbligatori quando il corso è stato segnato come completato

qua va controllato che il numero di corsi che sono obbligatori e confrontarlo con **madatory_courses_completed_at_completion**
![[Screenshot 2025-06-27 at 11.30.31.png]]


# Sviluppo
@giuseppe