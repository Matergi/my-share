
# cosa vedere

* che il training material non sia xAPI ma sia "feedback questionnaire"
	* ![[Screenshot 2025-04-01 at 14.05.11.png]]
* che dentro advanced settings > elearning > xapi url contenga "/s-xapi":
	* ![[Screenshot 2025-04-01 at 14.07.33.png]]
	* altrimenti non si vede "Feedback questionnaire"
* che l'utente che sta playando feedback questionnaire abbia un email associata, senno dicono che qualcosa potrebbe non funzionare
# configurazione

* creare l'entità da learning impact
	* ![[Screenshot 2025-04-01 at 13.11.22.png]]
	* ![[Screenshot 2025-04-01 at 13.12.32.png]]
	* ![[Screenshot 2025-04-01 at 13.13.21.png]]
	* abilitare tutto
	  ![[Screenshot 2025-04-01 at 13.14.02.png]]
	* salvare
	* creare l'icona 
		* save > save 
	* abilitare il survey editor
		* ![[Screenshot 2025-04-01 at 13.15.30.png]]
		* ![[Screenshot 2025-04-01 at 13.15.53.png]]
		* abilitare docebo
		  ![[Screenshot 2025-04-01 at 13.17.41.png]]
		* inserire la piatta dentro "client domain" e premere enable
		  ![[Screenshot 2025-04-01 at 13.18.17.png]]
		* aggiornare la pagina e premere su quel link
		  ![[Screenshot 2025-04-01 at 13.19.53.png]]
		* premere su "Access Rights"
		  ![[Screenshot 2025-04-01 at 13.20.59.png]]
		* aggiornare se non si vede nulla
		* si dovrebbe vedere questo
		  ![[Screenshot 2025-04-01 at 13.21.54.png]]
		* copiare questo
		  ![[Screenshot 2025-04-01 at 13.22.18.png]]
* abilitare il toggle
	* ![[Screenshot 2025-04-01 at 13.22.54.png]]
	* ![[Screenshot 2025-04-01 at 13.24.02.png]]
	* abilitare anche questo
	  ![[Screenshot 2025-04-01 at 13.24.33.png]]
	* questi sono i toggle 
	  ![[Screenshot 2025-04-01 at 13.26.01.png]]
	* premere su "Apply" in basso a destra
* accedere come admin alla piatta
* configurare learning evaluation dentro gli advanced settings:
	* ![[Screenshot 2025-04-01 at 13.27.52.png]]
	* ![[Screenshot 2025-04-01 at 13.28.39.png]]
	* copiare il login che si trova dentro al (survey editor > "enable docebo" button) del learning impact 
		* ![[Screenshot 2025-04-01 at 13.22.18.png]]
	* incollarlo nel campo "Learning evaluation username" 
	  ![[Screenshot 2025-04-01 at 13.31.00.png]]
	* come Learning evaluation organisation chart ID mettere il numero che si trova nel (survey editor > "enable docebo" button) lo trovi nei passaggi prima
	  ![[Screenshot 2025-04-01 at 13.31.56.png]]
	* i due URL sono sempre gli stessi
	  ![[Screenshot 2025-04-01 at 13.33.55.png]]
	* per recuperare la private key
		* andare sul (survey editor > "enable docebo" button) del learing impact e premere docebo integration ![[Screenshot 2025-04-01 at 13.34.33.png]]
		* e premere su "generate new key" 
		  ![[Screenshot 2025-04-01 at 13.36.33.png]]
		* copiare la key che viene mostrata e incollarla sul campo private key
	* premere "confirm"
* configurare xapi nell'advanced settings
	* su (survey editor > "enable docebo" button > account parameters > Docebo integration) possiamo generare l'xapi link
	  ![[Screenshot 2025-04-01 at 13.38.21.png]]
	* ![[Screenshot 2025-04-01 at 13.41.01.png]]
	* aggiungerlo qui:
	  ![[Screenshot 2025-04-01 at 13.42.19.png]]
	* ![[Screenshot 2025-04-01 at 13.42.45.png]]
	* abilitare questo:
	  ![[Screenshot 2025-04-01 at 13.43.04.png]]
* check
	* ![[Screenshot 2025-04-01 at 13.48.37.png]]
	* ![[Screenshot 2025-04-01 at 13.49.06.png]]
	* (CHECK 1)
	* premere su "last training session"
	  ![[Screenshot 2025-04-01 at 13.56.09.png]]
	* sotto stakeholders si vede se è stato creato 
	  ![[Screenshot 2025-04-01 at 13.56.48.png]]
	* (CHECK 2)
	* aggiornare la pagina
	* stakeholders è stato aggiornato
	  ![[Screenshot 2025-04-01 at 14.00.32.png]]
	* la check significa completato penso
	  ![[Screenshot 2025-04-01 at 14.00.59.png]]
* creare un corso
	* advanced settings > course managment
	* crea un corso E-learning
	* deve esserci "feedback quetionnaire" e devi aggiungerlo come training material
	  ![[Screenshot 2025-04-01 at 13.50.33.png]]
	* mettere titolo e descrizione e salvare
	* enrollare un utente
	* andare su "learning evaluation" dentro advanced settings 
	  ![[Screenshot 2025-04-01 at 13.52.25.png]]
	* premere il + in alto a destra
	  ![[Screenshot 2025-04-01 at 13.53.25.png]]
	* selezionare il corso precedentemente creato
	  ![[Screenshot 2025-04-01 at 13.53.52.png]]
	* next > confirm
	  ![[Screenshot 2025-04-01 at 13.55.03.png]]
	* ![[Screenshot 2025-04-01 at 13.55.31.png]]
	* (CHECK 1 sopra)
* play course
	* andare sul corso e premere questo: 
	  ![[Screenshot 2025-04-01 at 13.58.07.png]]
	* ![[Screenshot 2025-04-01 at 13.58.32.png]]
	* start now > completarlo e submitarlo
	* (CHECK 2 sopra)

# scelte tecniche

> il DLI era una webview ma non funzionava, inizialmente abbiamo provato a mettere WKAppBoundDomains perché sembrava fosse un problema di CORS ma in realtà è perché loro utilizzano i [[service-worker]] e su iOS non funzionano quindi 

* [stackoverflow.com/a/64155509/841052](https://stackoverflow.com/a/64155509/841052)
* [If you enable App-Bound domains, you will have Service Worker support](https://firt.dev/ios-14/#service-workers)
* https://medium.com/better-programming/convert-a-pwa-into-a-flutter-app-using-webviews-387060548a37
	* ![[Screenshot 2025-04-09 at 11.01.26.png]]

resoconto:
* WKAppBoundDomains serve per far funzionare i service-worker su iOS
* se lo abilitiamo non possiamo settare la webview come baseURL con un dominio diverso da quelli specificati dentro all'info-plist
	* se non settiamo un baseURL dentro alla webview non funzioneranno gli url relativi es gli internal links (perché ovviamente non sa la baseURL)

le soluzioni che vedono sono:
* non mettere WKAppBoundDomains, e quindi fixare il DLI per fare in modo che almeno su iOS non utilizzi i [[service-worker]], da capire anche a cosa gli servono
* **è stata scelto questa -->**  non mettere WKAppBoundDomains, e se è un DLI renderizzare una schermata con un bottone come facciamo da altre parti, che serve ad aprire il DLI in un inAppBroswer (l'ho testato e funziona)
* mettere WKAppBoundDomains, e togliere la baseURL dalle webview, quindi "rompere gli internal links attualmente funzionanti"
* mettere WKAppBoundDomains e aggiungerci il dominio lato build time, quindi fare in modo che il dominio si possa settare in qualche modo dall'app publisher della piatta, in modo che possa stare dentro al plist e che continui a funzionare la webview come prima 

# Altro

spiegazione

![[Screenshot 2025-04-01 at 11.25.31.png]]

ogni LMS una entity
![[Screenshot 2025-04-01 at 11.27.14.png]]

id 
* lms capo a istanza
* impact è a livello di ambiente non di istanza

entiry
![[Screenshot 2025-04-01 at 11.28.45.png]]

region
![[Screenshot 2025-04-01 at 11.28.48.png]]

learnign impact notification (Push notification?) 

![[Screenshot 2025-04-01 at 11.30.57.png]]


soluzione su mobile, vengono abilitati solo questi url per permettere di far funzionare un iframe dentro ad un iframe

![[Screenshot 2025-03-25 at 10.13.19.png]]

![[Screenshot 2025-03-25 at 10.13.34.png]]
