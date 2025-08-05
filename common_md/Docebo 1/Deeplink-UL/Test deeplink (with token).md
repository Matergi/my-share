

1. https://travistidwell.com/jsencrypt/demo/
	1. creade chiave
	2. 2048
2. api and sso
	1. api credentials
	2. add oauth2 app
	3. nome a caso
	4. client a caso lo puoi chiama
	5. redirect URI la piatta
3. show 
4. jwt.io
5. algoritmo 
	1. RS256
	2. payload
		1. iss = client-id dell'app
		2. sub=username del utente
```
{
"iss": "appJWT",
"sub": "enea",  
`"exp": 2555329600,`  
`"iat": 1555424025,`  
`"aud": "``[mate.docebosaas.com](http://mate.docebosaas.com/)``"`  
`}`
```
6. ci metto lo chiavi giuste
	1. pub
	2. privata
7. una volta creato il JWT token
	1. `golearn://{TargetPage}?domain={DomainBase64}&token={JWT}`
	2. per creare il DomainBase64
		1. https://www.base64decode.org