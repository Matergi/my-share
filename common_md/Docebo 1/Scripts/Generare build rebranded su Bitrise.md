* incollare questo file dentro a scripts/bitrise
  ![[rebranded.ts]]
* copiare l'enviroment che sarà un array di key, value e metterlo dentro un file chiamato `enviroments.json`
	* es: ![[enviroments.json]]
* settare queste due variabili:
	1. BRANCH
	2. API_URL
* lanciare `npx ts-node scripts/bitrise/rebranded.ts`