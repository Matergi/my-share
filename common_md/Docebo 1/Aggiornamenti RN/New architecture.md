https://reactnative.dev/blog/2024/10/23/the-new-architecture-is-here
https://www.youtube.com/live/K2JTTKpptGs?si=rrZjAPG-8T_hhjXa&t=9370


https://github.com/reactwg/react-native-new-architecture/?tab=readme-ov-file


la nuova architettura include anche la compatibilità con la vecchia architettura per tutte quelle librerie che ancora non hanno aggiornato

nella vecchia architettura RN comunicava con il nativo utilizzano un bridge asyncrono e doveva serializzare e mettere in coda le funzione native tramite il bridge, che venivano processate in modo asyncrono, la cosa buona di questa architettura era che il main thread non veniva mai bloccato per renderizzare gli aggiornamenti o per gestire le funziona native

comunque l'utente si aspetta feedback immediati per le interazione come se fosse un app nativa. questo significa che alcune azioni vanno fatte in modo syncrono e interrompere potenzialmente qualche processo, visto che tutta la vecchia architettura gestiva in modo asyncrono hanno dovuto riscrivere tutto per gestire sia asyncrono che syncrono

in piu nella vecchia architettura, serializzare funzioni e passare dal bridge generava un po di collo di bottiglia, specialmente sugli aggiornamenti frequenti e grandi oggetti, e questo rendeva difficile arrivare ad un 60+FPS

infine, poiché la vecchia architettura manteneva una singola copia dell'interfaccia utente utilizzano la gerarchia nativa e ne modificava direttamente lo stato (tutto dal nativo senza copie) questo obbligava le richiede e le modifiche a passare da un solo thread, quello principale condiviso con l'UI, con la nuova architettura tutto questo è stato gestito in maniera piu separata e permette di calcolare i layout in parallelo o fuori dal main thread
	cosa significa calcolare calcolare i layout in parallelo o fuori dal main thread:
		i calcoli vengono vengono fatti in background, quindi la UI resta reattiva e fluida, si può leggere la layout in tempo reale, perfetto per tooltip, popover, scroll ecc 


## Problemi incontrati
* icone dell'header del corso non funzionano
	* probabilmente perché c'è un layer sopra con opacità 0
* video nel my channel