
## Prima di aggiornare
* deve essere una LTS
* controllare bitrise
	* [https://bitrise.io/stacks/stack_reports/osx-xcode-16.2.x/#global-npm-packages](https://bitrise.io/stacks/stack_reports/osx-xcode-16.2.x/#global-npm-packages)
	* ![[Screenshot 2025-05-23 at 10.44.50.png]]
	* ![[Screenshot 2025-05-23 at 10.45.21.png]]
	* la 20 dovrebbe essere un alias alla 20.18.1

## Procedimento
sostituisce la versione node su tutto il progetto
![[Screenshot 2025-03-06 at 09.55.59.png]]

da bitrise se la va a prendere in automatico

![[Screenshot 2025-03-06 at 09.57.50.png]]

## per cambiare il default 

> nvm alias default 20.18.1