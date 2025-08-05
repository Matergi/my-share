### **Issue found: Unsafe Implementation of WebView SSL Error Handler**

in questo INQ https://docebo.atlassian.net/browse/INQ-6370 
![[Screenshot 2025-05-28 at 09.39.05.png]]
l'utente aveva specificato una version code: 9619 che in realtà era il numero di build di bitrise

android onReciveSSLError:
riceve errori di certifiacati ssl, e lui fa sempre la cancel "NO"

noi abbiamo fatto una patch che viene sovrascritto questo comportamento, quindi se l'utente riceve un errore di SSL compare un alert nativo, in cui gli dice: ma tu sei sicuro che vuoi andare avanti? se si allora vai avanti, se no la cancel
https://docebo.atlassian.net/browse/DOC-38566
con 4.10.1 golearn

ma poi penso si è risolto con aggiornamenti di webview che blocca sempre