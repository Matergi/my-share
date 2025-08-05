questi sono appunti disordinati dal passaggio di consegne di ale

> aggiungi un widget di tasklist 
> sarebbe i task che ho in scadenza o che mi ha assegnato il mio manager

su golearn vedrò solo
![[Screenshot 2025-02-24 at 10.20.13.png]]

le altre sopra sono solo su desktop

ongi tab a ha dentro le cose che sono da fare:
![[Screenshot 2025-02-24 at 10.20.41.png]]

praticamente per far vedere un task li non devo fare nulla, ogni corso ci va da solo se ci deve andare, perché fa una query e lo prende in automatico

#### mobile
(possibile nuovo listAvatarItem)

checked `true` lo deve far vedere la posizione è come si ordina noi (lo ritorna nella `/page`)
![[Screenshot 2025-02-24 at 10.23.31.png]]
![[Screenshot 2025-07-03 at 13.17.54.png]]

come va a prendersi tutti i tab?
![[Screenshot 2025-02-24 at 10.27.19.png]]

per ogni tab (la prima chiave dopo tabs)
![[Screenshot 2025-02-24 at 10.28.06.png]]
questa è la preview fuori  

quando invece entro dentro al task si richiama sempre la solita API ma specifica per un task specifico
![[Screenshot 2025-02-24 at 10.29.43.png]]![[Screenshot 2025-02-24 at 10.30.48.png]]
cosi ^

### codice

> fuori (la preview - widget): TasklistWidget
> dentro al dettaglio: TaskListDetail

![[Screenshot 2025-02-24 at 10.35.11.png]]
per velocizzare l'api mettiamo sempre page size1 nella preview con toSingleTabParams per far si che si riceva il count con il minor page size possibile

per l'api, altrimenti non si vede nella prima pagina, va inserito i dettagli per fare la chiamata per capire quanti elementi ci sono
![[Screenshot 2025-02-24 at 10.35.41.png]]

per ogni cosa prendi queste cose e passale all'api
![[Screenshot 2025-02-24 at 10.36.01.png]]

dopo per mostrarlo devi cambiare l'adapter
![[Screenshot 2025-07-03 at 13.25.15.png]]
## informazioni in piu
se vede che ci sono dei tab che non sono disponibili su mobile te lo dice 

![[Screenshot 2025-02-24 at 10.40.18.png]]
questo si mostra quando:

![[Screenshot 2025-02-24 at 10.44.02.png]]
se è uno di questi allora ok, se invece questa funzione toTaskListItem ritorna false e come si vede nello screen sopra il count `data[tab]?.count > 0` allora significa che ha almeno 1 item allora metti il warning a true

![[Screenshot 2025-02-24 at 10.44.24.png]]


## ci sono due liste
* course list
* assets list: ha i list item leggermente diversi
* ci sarà da da implementate un certification: ci saranno listitem diversi
* ![[Screenshot 2025-02-24 at 10.49.06.png]]
* ![[Screenshot 2025-02-24 at 10.50.06.png]]
* il type lo mettiamo noi lato codice cosi, qua andrebbe aggiunto un type:
* ![[Screenshot 2025-02-24 at 10.52.25.png]]
