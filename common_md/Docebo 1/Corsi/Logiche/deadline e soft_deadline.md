![[Feature-1996 Learning Plan Soft Deadline.pdf]]


toggle: `release/weekly/lp-enrollment-soft-deadline`
attiva questo campo
![[Screenshot 2025-07-25 at 10.45.41.png]]

quando ho attiva questa, se il LP è scaduto la softdeadline ti permette di accedere lo stesso, non solo al LP ma a tutti i corsi contenuti nel LP anche se sono scaduti.

esempio corso scaduto:
![[Screenshot 2025-07-25 at 10.46.47.png]]


quando vado sul LP che contiene un corso scaduto e softdeadline è disabilitata:

il corso è bloccato e scaduto
![[Screenshot 2025-07-25 at 10.47.25.png]]

ma se attivo la soft deadline tutti i corsi sono attivi 
![[Screenshot 2025-07-25 at 10.47.57.png]]
e anche se entro solo nel corso è attivo
![[Screenshot 2025-07-25 at 10.48.13.png]]



se il corso è scaduto ed è incluso in tanti LP, ma esiste almeno un LP con softdeadline che contiene quel corso, il corso è disponibile in tutti gli altri LP e fuori da LP

cambia la logia nel tasklist e tra quelli scaduti ti torna un corso che è scaduto "ma non lo è" perché è in un LP con softdeadline
![[Screenshot 2025-07-25 at 10.56.20.png]]

anche il corso ha il suo proprio softdeadline 


### note API di matte nella storia
https://docebo.atlassian.net/browse/DOC-83561
Courses API
  - can_enter = true --> can_enter_reason not returned
  - can_enter = false --> can_enter_reason is a translated string
SSE SOFT_DEADLINE SU LP ATTIVA
  - can_enter = false --> can_enter_reason + can_enter_reason_code with a number ----> COURSE MUST BE ACCESSIBLE


LP API
can_enter is the value that control the access. If soft deadline is on then can_enter is true


## Other

ILT come si comporta?