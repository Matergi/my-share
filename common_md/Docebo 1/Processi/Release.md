
* i report della mattina prima
	* se va bene 
		* si puo fa la relese
	* se non va bene
		* release blocker
		* priorità massima e va lavorato subito
		* si mergia
		* si rilanciano i test e poi si fa la release
* git checkout maintenance
* yarn release-(patch/minor/major)
	* se va in errore:
		* controllare che non ci sia il tag su origin
		* controllare che non siano partire le pipeline
		* cancellare il tag in locale
		* cancellare i branch da locale e da prod
		* rilanciare
* parte una mr con il push del tag
* dopo partono 3 mr
	* nel mentre parte anche le build per gli store
	* ![[Screenshot 2025-03-31 at 18.15.30.png]]
* se qualcosa va storto?
	* se fallisce la pipeline
		* rilanciamo la pipe tanto non succede nulla
	* se fallisce bitrise
		* rilanciamo la build 
* qua se tutto le pipe, e lo store è andato bene e tutte le build bene
* **Merge into `maintenance/weekly-70`**: Manually merge the MR.
* **Merge into `release/release-70`**: Manually merge the MR.
* **!! Do NOT merge into !!** `release/rebranded-client`
	* (ci pensa l'SWDM): deve essere allineato con il BE, il merge di brended deve essere in sync con il desktop però viene fatto quando pubblichi anche la golearn
* adesso dobbiamo cambiare il changelog
* Android
	* entrare nel google play console
	* ![[Screenshot 2025-02-25 at 12.42.24.png]]
	* premere sulla freccia accanto alla versione (in questo caso 6.6.0) 
	* ![[Screenshot 2025-02-25 at 12.43.14.png]]
	* premi su "Add release notes"
	* ![[Screenshot 2025-02-25 at 12.43.27.png]]
	* inserisci le note e salva
		* se ti da questo errore significa che non hai i permessi
		* ![[Screenshot 2025-05-13 at 10.45.51.png]]
* iOS
	* vai sul app store connect
	* ![[Screenshot 2025-02-25 at 12.44.18.png]]
	* premi sulla + e inserisci il numero della nuova versione
	* scorri in basso fino a build (in questo caso c'è gia ma normalmente devi inserirla una), normalmente ti troverai solo 1 versione
	* ![[Screenshot 2025-05-13 at 11.00.10.png]]
	* adesso salvare e controllare in alto a destra la lingua
	* ![[Screenshot 2025-05-13 at 11.01.13.png]]
	* adesso scrivere il changelog dentro what's new
	* ![[Screenshot 2025-02-25 at 12.44.38.png]]
	* cambiare lingua
	* ![[Screenshot 2025-02-25 at 12.44.48.png]]
	* inserire il nuovo changelog 
	* premere su **Add for review**
	* ![[Screenshot 2025-05-13 at 11.01.54.png]]
	* aspettare fino ad arrivare a questa schermata e premere su **Submit to App Review** cosi che la manda realmente in review
	* ![[Screenshot 2025-05-13 at 10.56.17.png]]

# procedura con diez

![[Screenshot 2025-03-07 at 11.18.25.png]]
![[Screenshot 2025-03-07 at 11.18.59.png]]
### risolvere i conflitti manualmente

>mettere tutto in up-to-date in locale

> fare yarn && yarn typecheck && yarn lint

se c'è un conflitto si risolvono a m ano
![[Screenshot 2025-02-25 at 12.06.06.png]]

git merge --continue
![[Screenshot 2025-02-25 at 12.07.06.png]]
git push

3 comandi per la release
![[Screenshot 2025-02-25 at 12.09.37.png]]

ora si troveranno le pipeline
![[Screenshot 2025-02-25 at 12.12.36.png]]

viene eseguita questa che ha una rule che viene lanciata solo con un commit che ha un tag
![[Screenshot 2025-02-25 at 12.13.02.png]]

lancia questo 
![[Screenshot 2025-02-25 at 12.13.31.png]]

![[Screenshot 2025-02-25 at 12.13.56.png]]

queste righe di bitrise mette le IPA e APK nello store
![[Screenshot 2025-02-25 at 12.14.30.png]]

esempio:
![[Screenshot 2025-02-25 at 12.15.11.png]]

ios:
![[Screenshot 2025-02-25 at 12.15.23.png]]

android:
![[Screenshot 2025-02-25 at 12.15.37.png]]

android va automaticamente in testing e vanno messe le release note
![[Screenshot 2025-02-25 at 12.42.24.png]]
![[Screenshot 2025-02-25 at 12.43.14.png]]
![[Screenshot 2025-02-25 at 12.43.27.png]]
![[Screenshot 2025-02-25 at 12.43.42.png]]

mentre iOS va fatto manualmente e mettere le realease note 
![[Screenshot 2025-02-25 at 12.44.18.png]]
modificare solo `What's new in this version`
![[Screenshot 2025-02-25 at 12.44.48.png]]
![[Screenshot 2025-02-25 at 12.44.38.png]] 
### da sistemare
non dovremmo far partire le build su bitrise e dobbiamo stopparle a mano

![[Screenshot 2025-02-25 at 12.16.21.png]]

non si mergia rebended-client (ci pensa l'SWDM): deve essere allineato con il BE
il merge di brended deve essere in sync con il desktop però viene fatto quando pubblichi anche la golearn

questo lo dovrebbe risolvere:
![[Screenshot 2025-03-07 at 11.31.46.png]]

questo lo ristoppa: (sarebbe il merge del changelog) però dovrebbe essere sistemato
![[Screenshot 2025-03-07 at 11.33.40.png]]
## OEM

c'è anche la relase OEM
![[Screenshot 2025-02-25 at 12.17.14.png]]

# RHD
fa le RHD
prende tutti i DOC che sono merged-for-next-release e li porta avanti 
![[Screenshot 2025-02-25 at 12.17.41.png]]![[Screenshot 2025-02-25 at 12.18.16.png]]

RHD mobile con tutti i task
![[Screenshot 2025-02-25 at 12.19.04.png]]

## rilascio finale

![[Screenshot 2025-02-26 at 12.02.20.png]]
![[Screenshot 2025-02-26 at 12.03.38.png]]

ora sono pubblicate