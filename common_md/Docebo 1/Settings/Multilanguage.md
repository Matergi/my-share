---
url: https://www.figma.com/board/eae39Qn6wWLvfItxVWwiVD/Mobile-Flows?node-id=0-1&p=f&t=9jEjpjf9L6DYKs7I-0
toggle: release/weekly/mobile/multilanguage
toggle-app: MULTI_LANGUAGE_ENABLED
---

# Grooming
### come si attiva?
* con questo toggle: `release/weekly/mobile/multilanguage`
	* in app: **MULTI_LANGUAGE_ENABLED**

## funzionalità
* quando entra nella pagina del profilo si vede la lingua che c'è salvata sul profilo o di default la lingua inglese

## cose da controllare
* se metto arabo nel telefono e apro l'app si vede RTL
* con cambio lingua all'arabo su LMS nell'app si deve vedere RTL
* se metti arabo e poi su LMS metti inglese si continua a vedere RTL?

## Domande
* che lingua prima della login
	* la lingua del device (se non è disponibile EN)
* cosa fare quando mi sloggo
	* resta la lingua del profilo vecchio
	* va portato fuori la lingua dal user reducer
* se cambio dal desktop cosa succede nell'app
	* nulla la prossima volta che fa la session si trova a lingua aggiornata e viene applicata quando chiude e riapre
		* my profile aggiornata ma non applicata????
			* se c'è una inconsistenza con il desktop dobbiamo riavviare (senza chiederlo lo deve fare lui)
				* e quando si riallineano?
					* si salva una che verrà applicata solo all'avvio dell'app
		* e quando ti logghi crea sempre nuovi screen quindi non c'è bisogno?

# Test

**Initial setup**  
- device in EN (LTR)
- user account in EN (LTR)

**Test**  
- First app startup: app follows the device language
- Change language to Arabic (RTL)
- App reboot
    - Second app startup (no language preference set): app follows the device language
- Prelogin -> Login -> app tries to apply EN over AR
    - RTL must change => Nothing happen
- App reboot
    - RTL changes in LTR and EN is applied
- User change language **in app** to Japanese (LTR does not change)
    - JA is applied correctly
- User change language **on desktop** to Greek (LTR does not change)
    - GR is applied correctly
- User change language **on desktop** to Arabic (LTR changes to RTL)
- App renboot
    - LTR must change => Nothing happen
- App reboot
    - LTR changes in RTL and EN is applied