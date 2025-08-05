## Configurare Branded Mobile App Publisher

[[Docebo/Come testare una branded#Configurare Branded Mobile App Publisher]]

## Configurare UL sulla piatta

1. aprire la piatta e andare sui settings e aprire `Branded Mobile App Publisher`
	1. usr: test.mobile pwd: test1Goo
	2. creo un app
	3. punterà a questo url![[Screenshot 2024-10-24 at 10.58.00.png]]
	4. attivare l'app ios
		1. mettere come storelink: https://www.google.com
		2. attivare universal link e come valore metterci: `9YX23B3FLL.com.docebo.eolo.main`
	5. attivare l'app android
		1. mettere come storelink: https://www.google.com
		2. appidentification: `com.docebo.eolo.main`
		3. selezionare apk
		4. attivo applink con questo valore: `42:3D:E0:22:51:84:35:25:C1:EB:B9:45:FF:20:19:3C:31:6B:2A:9D:30:06:57:AE:AD:62:2D:BA:47:CC:28:E8`
	6. adesso premi "generate builds"
2. (in futuro non servirà piu fara tutto il BE) controlla se sono partite su bitrise
	1. aspetta :)
	2. apri la build ios e scaricare ipa
		1. ![[resign.zip]]
		2. metti l'ipa dentro la cartella /resign
		3. controlla che hai l'accesso a `rebranding test` di apple, nel caso chiedere a ale o matte
		4. lancia il comando: `./resign.sh ios_{version_number}.ipa match_AppStore_comdoceboeolomain.mobileprovision "Apple Distribution: Docebo Srl (9YX23B3FLL)"`
			1. se ti da l'errore: `Apple Distribution: Docebo Srl (9YX23B3FLL): no identity found` 
				1. andare sul progetto `apple-certificates` se non ce l'hai fai un clone e poi `fastlane match appstore` con `com.docebo.eolo.main`
					1. se ti da errore
						1. prova a mettere `export MATCH_PASSWORD=MobileDocebo5`
						2. p.s. una volta ha dato errore perché la key_id era cambiata (non si sa perché agli altri funzionava e a me no)
						3. se ti da errore (questo file cambierà :( scade il 13 dicembre
							1. ![[Certificates.p12]]
							2. la password è vuota!
			2. se ti funziona tutto ti troverai un file: `app-resigned.ipa`
		5. andare su app-c 
			1. fastlane pilot upload --api_key_path ./app_store_connect_api_key.json
				1. se non funziona scarica transporter :(
					1. aggiungi l'app `app-resigned.ipa`
		6. adesso dovresti trovare l'app su testflight
	3. per android basta solo aprire la build android e scarica quella con il numero `android_xxxxxxxxxxx.apk`
3. se non funziona su ios 
	1. prova controllare prima il `.well-know`
		1. `{dominio}/.well-known/apple-app-site-association`
			1. controlla l'appID
			2. es: https://doc-67991.bilbo.docebosandbox.com/.well-known/apple-app-site-association
		2. per android se ti interessa: `{dominio}/.well-known/assetlinks.json`
		3. questo è quello che realmente chiama l'iPhone `https://app-site-association.cdn-apple.com/a/v1/{dominio}`
			1. controlla l'appID
			2. es: https://app-site-association.cdn-apple.com/a/v1/doc-67991.bilbo.docebosandbox.com

# Debug

* prova controllare prima il `.well-know`
	1. `{dominio}/.well-known/apple-app-site-association`
		1. controlla l'appID
		2. es: https://doc-67991.bilbo.docebosandbox.com/.well-known/apple-app-site-association
	2. per android se ti interessa: `{dominio}/.well-known/assetlinks.json`
	3. questo è quello che realmente chiama l'iPhone `https://app-site-association.cdn-apple.com/a/v1/{dominio}`
		1. controlla l'appID
		2. es: https://app-site-association.cdn-apple.com/a/v1/doc-67991.bilbo.docebosandbox.com
* app-links non puo avere la wildcard cosi -> * ma deve avere almeno un domino es: \*.dominio.com
* Vedere se apple chiama la cdn
	* metterti in proxy (con [proxyman](https://proxyman.io/)) e controllare che al download dell'app chiami:
		1. `https://app-site-association.cdn-apple.com/a/v1/{dominio}`
	* I came across the same thing when adding a new domain for links. Until xcode 14 there were no problems and it even worked on the simulator.
	* Now (Xcode 15.2) I was only able to test on the device:
		1. Make sure that you have `?mode=developer` in "Associated Domains" entitlements in "Signing & Capabilities" tab (or under the key `com.apple.developer.associated-domains` if you use plist)
		2. Enable dev mode for associated domains on the phone: "Settings -> Developer -> Associated Domains Development"
		3. You need to install and connect your iPhone to the proxy. Personally I use Proxyman ([https://docs.proxyman.io/debug-devices/ios-device](https://docs.proxyman.io/debug-devices/ios-device)), but Charles, Fiddler and so on will work too.
		4. **Really important**: to test universal links you need to delete the app from device. And delete it each time when you update your association json. Otherwise app wouldn't request it.
		5. Run the app on your phone: in your proxy you will see list of requests to association file:
		6. ![[cMYyd.png]]
		7. If you don't see direct request to your site (there was such situation in my case) — you need to block requests to the apple cdn (you can just enable ssl proxying for this domain in your proxy, then all requests will fail with ssl handshake error) and reinstall the app.
		8. _Optional, but handy:_ I tested links without existing website, so I use proxy to emulate the response from server as well. Use "map local" to the `https://<your domain>/.well-known/apple-app-site-association` and mock the response with the association json you want to check. Example of the json you can see on apple site ([https://developer.apple.com/documentation/xcode/supporting-associated-domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains))
		9. ![[VCgYo.png]]
* controllare gli entitlements di apple ""
	1. se è un app in produzione e non hai l'IPA puoi usare Apple configurator https://apps.apple.com/us/app/apple-configurator/id1037126344?mt=12
	2. installare l'app
	3. premere + e selezionare l'app
	4. ti darà errore ma lo scarica e lo mette in:
		1. `/Library/Group containers/id.configurator/Library/Caches/Downloads`
	5. guida scritta da ale: https://gitlab.com/docebo/mobile/golearn/-/wikis/SpikeGeneric/UniversalLinks/AppStoreIpas

# Errori passati
* prima c'era un bug nel codice perché generava il plist di ios
	* ?? non mi ricordo bene?? remax penso usava uno script vecchio
* si apre la webview dentro l'app (se apri l'universal link dalle note di apple)
	* https://docebo.atlassian.net/browse/DD-43593
	* il problema è che se copi un link di note (non l'url text ma il link giallo) e lo incolli, quando vai a modificarlo si modifica solo il testo e non l'url, quindi se copi un url con lo / finale riconoscerà che è un UL però dentro l'app non abbiamo gestito questo caso e si parirà l'inappbrowser
	* ![[ScreenRecording_05-22-2025 17-08-16_1.mp4]]