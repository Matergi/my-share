
* fai un commit con AUTOMATION_ENABLED, AUTOMATION_UPLOAD
* pusha e aspetta che bitrise abbia finito la build
* poi apri le pipeline di ARP_GOLEARN
* https://jenkins.docebo.info/job/Pipelines/view/ARP/job/ARP_GOLEARN/
* vai su "Build with parameters"
* qua metti develop
* ![[Screenshot 2025-07-03 at 11.11.12.png]]
* TEST_CODE_BRANCH lascia quello che c'è perché è quello su LMS
* ![[Screenshot 2025-07-03 at 11.11.35.png]]
* cambia l'app branch con quello che ti serve
* ![[Screenshot 2025-07-03 at 11.12.09.png]]
* metti il numero di build di bitrise
* ![[Screenshot 2025-07-03 at 11.12.29.png]]
* e premi **Build**


# vuoi lanciarlo in parallelo a quelli della notte

* SANDBOX_IOS = default
	* puoi usare anche dev_1 o dev_2
* SANDBOX_ANDROID = default
	* puoi usare anche dev_1 o dev_2