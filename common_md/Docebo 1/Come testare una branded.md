## Configurare Branded Mobile App Publisher

1. crearsi una sandbox [[share/common_md/Docebo 1/AWS/AWS nuovo]]
2. cambiare il puntamento della build di bitrise (quando viene avviata la build dalla piattaforma andrà a fare una build con il branch in sviluppo e non in release)
	1. [[share/common_md/Docebo 1/AWS/AWS nuovo#Cambiare mobile branch]]
3. attivare l'app su erp (MobileRebrandingSingleDomain) "single" fa riferimento alla fixed domain
	2. per aprire erp puoi farlo direttamente da okta
	3. per piu info: https://gitlab.com/docebo/mobile/golearn/-/wikis/OpenAndFixedBrandedApps
	4. ... https://salesforce-erp.docebo.com/ ...
	5. ![[Screenshot 2024-10-24 at 10.55.20.png]]

## Configurare la piatta

1. aprire la piatta e andare sui settings e aprire `Branded Mobile App Publisher`
	1. usr: test.mobile pwd: test1Goo
	2. creo un app
	3. punterà a questo url![[Screenshot 2024-10-24 at 10.58.00.png]]
	4. attivare l'app ios
		1. mettere come storelink: https://www.google.com
	5. attivare l'app android
		1. mettere come storelink: https://www.google.com
		2. appidentification: `com.docebo.eolo.main`
		3. selezionare apk
	6. adesso premi "generate builds"
2. andare su bitrise e stoppare le build e copiarsi l'enviroment di uno dei due ios o android
3. seguire questa guida con l'enviroment copiato: [[share/common_md/Docebo 1/Scripts/Generare build rebranded su Bitrise]]
4. (in futuro non servirà piu fara tutto il BE) controlla se sono partite su bitrise
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
5. se non funziona su ios 
	1. prova controllare prima il `.well-know`
		1. `{dominio}/.well-known/apple-app-site-association`
			1. controlla l'appID
			2. es: https://doc-67991.bilbo.docebosandbox.com/.well-known/apple-app-site-association
		2. per android se ti interessa: `{dominio}/.well-known/assetlinks.json`
		3. questo è quello che realmente chiama l'iPhone `https://app-site-association.cdn-apple.com/a/v1/{dominio}`
			1. controlla l'appID
			2. es: https://app-site-association.cdn-apple.com/a/v1/doc-67991.bilbo.docebosandbox.com
	2. controllare gli entitlements di apple ""
		1. se è un app in produzione e non hai l'IPA puoi usare Apple configurator https://apps.apple.com/us/app/apple-configurator/id1037126344?mt=12
		2. installare l'app
		3. premere + e selezionare l'app
		4. ti darà errore ma lo scarica e lo mette in:
			1. `/Library/Group containers/id.configurator/Library/Caches/Downloads`
	3. metterti in proxy (con [proxyman](https://proxyman.io/)) e controllare che al download dell'app chiami:
		1. `https://app-site-association.cdn-apple.com/a/v1/{dominio}`
	4. puoi controllare con questa guida qualcosa:
		1. https://www.youtube.com/watch?v=xxyEq_ySoO4
	5. se non lo chiama `https://app-site-association.cdn-apple.com` e gli entitlements sono corretti?