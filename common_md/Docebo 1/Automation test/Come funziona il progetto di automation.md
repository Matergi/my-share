
## servizi utilizzati 
* jenkins
	* è quello che fa partire le pipelines, poi le pipline fanno partire wdio che si interagisce con browserstack
* wdio
	* https://webdriver.io/
* appium
* cucumber

## Struttura progetto
* RunnerParams.env![[Screenshot 2025-05-21 at 11.47.53.png]]

### Re-run
* cercare il test dentro al progetto
* mettici @testing sopra
* ![[Screenshot 2025-06-02 at 10.36.21.png]]
* controlla che il tag dentro RunnerParams.env sia @testing
* ![[Screenshot 2025-06-02 at 10.37.06.png]]
* ora lancia `npm run wdio`
* 

## run tests
* andare su browser stacks
* ![[Screenshot 2025-05-21 at 11.51.15.png]]
* andare su app e poi su app automate
* ![[Screenshot 2025-05-21 at 11.51.58.png]]
* e ci troveremo nella dashboard
* ![[Screenshot 2025-05-21 at 11.52.15.png]]
* 