> ricordati di **ScormOfflineView**

#### Come lo testo?
* un test semplice
	* https://gitlab.com/docebo/mobile/scorm-debugger
* test tra offline mode e online mode
	* https://gitlab.com/docebo/mobile/scorm-debugger
	* online mode
	* apro il corso e metto un punteggio 
	* committo
	* chiudo e riapro e vedo lo stesso punteggio
	* chiudo, scarico il corso e vado offline
	* apro e devo avere allo stesso punteggio
	* incremento
	* committo
	* chiudo e riapro
	* devo avere il punteggio incrementato
	* chiudo 
	* apro in online mode
	* devo avere lo stesso punteggio incrementato
* un test di un cliente
	* ![[scorm_con_punteggio.zip]]
	* naviga nelle pagine
	* sembra che fa la commit
	* a pagina 11 le risposte sono:![[Screenshot 2025-06-26 at 16.13.12.png]]
* test senza internet
	* offline mode
	* https://gitlab.com/docebo/mobile/scorm-debugger
	* incrementi
	* fai una commit
	* esco
	* torno in online mode
	* il valore deve essere il solito
#### Come si rilascia una fix?
* prima si prova in locale
* se funziona si fa una modifica e si apre una mr
* si propone e si fa partire una sandbox (mi ricordo che sia una cosa generale)
* si fanno i test sopra
* se funziona si rilascia
* loro creano un nuovo tag
* se abbiamo gia mergiato la modifica di simo nel package.json allora si modifica il tag li
* altrimenti modifichiamo la cartella dcd e facciamo una nostra mr
* ho visto in passato erano state fatte anche delle patch (forse quando non venivano rilasciate o non ce l'accettavano? ma questo funzionerebbe solo in offline mode)

#### Quali sono le cose che devo controllare?
* se fa le chiamate API di commit/finish
	* se non le fa, aprire il desktop e vedere se li le fa (potrebbe usare i [[service-worker]] che non funzionano su iOS, ma su Android si)

#### Come funziona uno SCORM
* commit e finish funzioni HS che sono dentro `dcd/scormapi/js/api_12.js` `Commit: function`
	* Finish quando chiudiamo la chiusura dello scorm ma anche lui lo può chiamare quando vuole `window.addEventListener('pagehide', () => {` <- qua dentro chiama la finish 
		* `browserClose`: quando chiudi lo SCORM con la "x" l'app va su `about:blank` e forza la finish manualmente
	* chiamare API esposti da Docebo e mettono le informaizoni più importanti dentro CMI
		* cerca `cmi: this._as_json`
		* key:value (oggetto) 
			* utente
			* che cosa ha fatto 
* **RICORDATI CHE** con la commit si può mettere un corso a success:
	* ![[Screenshot 2025-05-07 at 17.29.59.png]]
	* ![[Screenshot 2025-05-07 at 17.29.49.png]]

##### Come lo debuggo?
* aprire l'app
* apri reactotron
* apri WebViewWrapper e metti `webviewDebuggingEnabled={true}`
* metti `console.log('WebViewWrapper', source);` prima del return dentro WebViewWrapper
* apri il corso
* apri safari e premere
	* ![[Screenshot 2025-01-30 at 10.12.29.png]]

#### Come capire se fa le chiamate commit/finish?
> a volte le può chiamare la commit/finish alla chiusura, per questo abbiamo un **UNLOAD_SCORM_INJJS** dentro l'app
* controllare il network
* collegarsi in debug e mettere persistLog e controllare i log, se c'è qualche errore
	* ![[Screenshot 2025-05-05 at 13.37.32.png]]
	* quella riga corrisponde a **sendAjaxRequest** alla funzione `$.ajax({ type: 'POST',`
	* mettendosi in debug e chiudendo lo scorm possiamo vedere un po di log in piu
	* ![[Screenshot 2025-05-05 at 13.50.03 1.png]]
	* le cose che noto è che non c'è il Bearer token e che da questo errore:
	* ![[Screenshot 2025-05-05 at 13.44.57.png]]
	* adesso controllo se su desktop passa il Bearer token e non c'è ma entrambi hanno **auth_code**  
	* ![[Screenshot 2025-05-05 at 13.48.59.png]]
	* noto che il context è differente su desktop c'è `context: lms` e su mobile `context: golearn`
	* ora indago se lo stesso errore lo da anche da postman
	* ![[Screenshot 2025-05-06 at 10.52.50.png]]
	* stesso authcode funziona su postman e non su mobile
	* provo a debuggare in offline mode [[#Come si debugga in offline mode]]
	* dopo una lunga analisi abbiamo visto che il problema era sulla asyncronicita della chiamata ajax, la spiegazione è qua [[#Bug della chiamata HTTP durante la chiusura dello SCORM]]

#### (NEW) Come si debugga in offline mode
* scaricare il training material scorm in offline
* cancellare **dcd.zip** dentro la cartella ios `./ios/dcd.zip`
* cancellare **dcd.zip** dentro la cartella android `./android/app/src/main/assets/dcd.zip`
* fare le modifiche necessarie dentro la cartella `node_modules/docebo-content-delivery`
* fare yarn install e si ritroveranno i vari zip del dcd dentro le rispettive cartelle
* (ho notato che non è necessario disinstallare l'app va solo rilanciata da xcode)
* aprire il corso
* mettersi in debug con safari

#### (OLD) Come si debugga in offline mode
* scaricare il training material scorm in offline
* cancellare **dcd.zip** dentro la cartella ios `./ios/dcd.zip`
* cancellare **dcd.zip** dentro la cartella android `./android/app/src/main/assets/dcd.zip`
* fare le modifiche necessarie dentro la cartella `dcd`
* fare yarn install e si ritroveranno i vari zip del dcd dentro le rispettive cartelle
* (ho notato che non è necessario disinstallare l'app va solo rilanciata da xcode)
* aprire il corso
* mettersi in debug con safari
* con questa cambierà un po il giro: https://gitlab.com/docebo/mobile/golearn/-/merge_requests/4072

bash che genera gli zip:
```sh
#!/usr/bin/env bash
zip -r -X -q - ./dcd > ./ios/dcd.zip
zip -r -X -q - ./dcd > ./android/app/src/main/assets/dcd.zip
```

e cartella dcd nella root:
![[Screenshot 2025-05-07 at 17.38.00.png]]

#### Come ti rendi conto che sta tracciando veramente?
* course managment
	* corso
		* reports
			* utente (in questa pagina me ne dovrei accorgere)
				* e qua dentro ci trovi i CMI
				* il total time è > 0 
				* o il time stamp **NON** è di quando ho fatto la start

##### Come si carica lo SCORM nella nostra piatta?
* ce lo possono dare
* quando si scarica la prima volta o dopo l'aggiornamento del corso e scarichi il corso vai su reactoron e dalla chiamata `/lo/{id}/download`
	* quando lo carichi in piattaforma, non si prende il file .zip ma va spacchettato prendere tutti gli elementi e zipparlo all'interno senza la folder wrapper
* o si scarica e si prendere dalla memoria dell'app

#### Bug della chiamata HTTP durante la chiusura dello SCORM
https://docebo.atlassian.net/browse/DD-43293

**Soluzione:** lo abbiamo chiuso dicendo che devono chiamare la Commit/Finish dentro la schermata dello SCORM e non alla chiusura dello SCORM, anche se probabilmente lo lavoreremo in futuro

abbiamo notato che durante la chiusura dello scorm viene lanciata questa funzione js
```js
export const UNLOAD_SCORM_INJJS = `
(function() {
	const scoIframe = document.getElementById('sco')
	if (scoIframe) {
		scoIframe.setAttribute('src', 'about:blank')
	}
})();
`;
```

che mettendo l'src dell'iframe a `about:blank` scatena la chiamata Commit/Finish e si chiude l'iframe
il problema riscontrato è che nella funzione che gestisce il metodo con cui fare la chiamata http:
```js
file: api_12.js

sendRequest: function (url, data, successCallback, errorCallback, retry) {
	if (window.dcd_player.shouldPostMessage() && this.postMessage(url, data)) {
		return true;
	} else if (window.dcd_player.shouldFetch()) {
		this.sendFetchRequest(url, data, successCallback, errorCallback, retry);
	} else {
		this.sendAjaxRequest(url, data, successCallback, errorCallback, retry);
	}
},
```

`window.dcd_player.shouldFetch()` fa un controllo aggiunto da Simo, che però non si ricorda il perché

```js
shouldFetch: function () {
	return !this.isMobile() && 'fetch' in window && !this.isFirefox();
},
```

in cui se siamo su mobile non fa la chiamata fetch, ho provato a forzare a fare la chiamata fetch su mobile e sembra funzionare, solamente che viene chiamata due volte:

![[Screenshot 2025-05-07 at 13.57.48.png]]

quindi siamo tornati sulla funzione precedente e abbiamo analizzato la `sendAjaxRequest` in cui ho notato che la chiamata viene fatta con `async: false` 
![[Screenshot 2025-05-07 at 17.21.20.png]]

se mettiamo **async: true** il problema si risolve e nella documentazione c'è scritto che è deprecata

![[Screenshot 2025-05-07 at 17.22.55.png]]

alla fine dell'analisi abbiamo dedotto che chiudendosi la pagina con `async: false` in qualche modo il browser chiude la chiamata e incontriamo questo errore:
![[Screenshot 2025-05-05 at 13.50.03 1.png]]

> la soluzione è mettere `window.dcd_player.isMobile() ? true : false` in modo che non rompiamo alcun comportamento lato desktop
> P.S. quel **async: false** è stato messo li 11 anni fa, quindi abbastanza obsoleto


----

#### come fanno a vedere gli origini trust? che possono fare
* `content-security-policy` nell'header della chiamata
	* ![[Screenshot 2025-01-30 at 10.27.22.png]]
* alcuni si possono vedere da: `advanced settings > Advance options > clickjacking prevention`
* controlla che il proxy_url sia corretto:
	* SCROM files:
		* `this._proxy_url = '' + (this._launch_type_mobile !== 'none') ? this._r.host : $.url().attr('host');`
	* Golearn files:
		* LO.ts
			* `const launchTypeMobileValue = isScorm ? Platform.select({ android: 'mobile_android', ios: 'mobile_ios' }) || '' : 'none';`

#### HOTFIX_DCD_PROXY_URL
questa si puo togliere perché dovrebbe funzionare gia con la nuova versione del DCD grazie a questo fix: https://gitlab.com/docebo/learn/docebo-content-delivery/-/merge_requests/5/diffs
lo abbiamo fatto perché in questo DD: https://docebo.atlassian.net/browse/DD-41736 non funzionava nessun DCD online perché `_server_url` era sbagliato