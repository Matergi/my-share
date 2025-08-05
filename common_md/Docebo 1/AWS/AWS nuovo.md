* aprire Leapp e loggarsi
* `cd /Users/giacomo.materozzi/Workspace/scrpits/local`
* `./wand sandbox-create XX`
* la sandbox sarà https://doc-75482.bilbo.docebosandbox.com/

## Cambiare mobile branch

andare nella sandbox 
	1. `./wand sandbox XX`
	2. se non sono sul pwd: `/sandbox` 
		1. `sudo -iu ec2-user`
	3. `cd sandbox_scripts` 
	4. lanciare `change-mobile-app-branch.sh branch-name`