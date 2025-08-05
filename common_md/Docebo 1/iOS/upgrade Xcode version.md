
si cambia cosi:
![[Screenshot 2025-03-17 at 12.19.26.png]]

controllare quando è uscita la versione di ReactNative:
https://github.com/facebook/react-native/releases?q=0.73.9

e controllarre in quella data quale era l'ultima verione di Xcode rilasciata
https://xcodereleases.com/

se la ultima rilasciata non risolve l'errore:
```
TMS-90725: SDK version issue - This app was built with the iOS 17.5 SDK. Starting April 24, 2025, all iOS and iPadOS apps must be built with the iOS 18 SDK or later, included in Xcode 16 or later, in order to be uploaded to App Store Connect or submitted for distribution.
```

allora chiedere agli altri che usano e andare a tentativi

## quando hai trovato la versione

* provare se funziona facendo partire la pipeline di bitrise sul branch
* controllare se si avvia
* copiare lo yml sul progetto dentro i file:
	* ![[Screenshot 2025-03-25 at 16.04.10.png]]
* adesso per testarla su una rebranded
	* creare un nuovo workflow, con la versione nuova
	* ricordati che quando lanci la build su bitrise devi scegliere il branch e il workflow corretto!
	* fare una rebranded [[Docebo/Come testare una branded]]
	* fare la resign e caricarla su RebrandedTest con transporter
	* provare a farla partire
* dopo va cambiato il file .yml ma l'ultima volta ci ha pensato Matte 

# 17 Marzo 2025

> giuseppe aveva la 16.0 e io la 16.1
> quindi proviamo a fare una build con la 16.1
> alla fine abbiamo scelto la 15.2 perché ce l'aveva matte e funzionava a lui

https://bitrise.io/blog/post/xcode-16-is-now-available-on-bitrise-with-major-stack-updates
https://stacks.bitrise.io/changelogs/osx-xcode-16.0.x/