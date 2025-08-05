
* in passato se mettevi https://www.salonacademy.ro nella prelogin dava un errore solo su android:
	* ![[Screenshot 2025-07-23 at 10.36.00.png]]
	* ![[Screenshot 2025-07-23 at 10.35.38.png]]
	* per controllare ho lanciato `openssl s_client -connect www.salonacademy.ro:443`
		* ![[Screenshot 2025-07-23 at 10.21.44.png]]
		* e come si nota da un errore
		* poi ho fatto un controllo con la mia docebosaas e sembra che funzioni
		* ![[Screenshot 2025-07-23 at 10.22.30.png]]
	* alla fine avevano qualche certificato rotto loro 