
per togliere l'errore, dobbiamo importarlo nel `tsconfig`

piattaforme da cui andre a scaricare le traduzioni
![[Screenshot 2025-03-06 at 10.21.51.png]]

con Golearn sempre da lyceum, e se è un brended, lyceum è solo come fallback

> noi andiamo a prendere le traduzioni da questi tag invece che dalla piattaforma solo in caso che la chiamata alla piattaforma vada in errore

![[Screenshot 2025-03-06 at 10.33.33.png]]

https://translation-search.gandalf.docebo.cloud/?release=latest&locale=en&search=&module=&key=Error%2520-%2520Going%2520to%2520login%2520not%2520possible&translation=&caseSensitive=false&regex=false

tutti i giorni sulle tag hanno un sync
![[Screenshot 2025-03-06 at 10.27.46.png]]

tutte le chiavi di docebo pesano `140mb` quindi non si vuole tutte queste traduzioni e si filtrano lato script

Qua dove vengono pubblicati
![[Screenshot 2025-03-06 at 10.29.37.png]]

viene eseguito quando un tag viene pushato
![[Screenshot 2025-03-06 at 10.30.14.png]]
