# Situation carcérale en Suisse 

Une image de notre visualisation est disponible dans le fichier suivant: 

https://github.com/ln2troie/Situation-carcerale-en-Suisse/blob/main/Exemple%20visualisation.jpg

Description : cette visualisation a été effectuée grâce à la bibliothèque graphique « D3.js. » Les données ont été récoltées sur « Open Data ». Il s’agit des données de l’organisation fédérale de la statistique, plus précisément le relevé de la privation de Liberté (FHE). 

Chaque année, les données relatives à l’effectif des personnes en détention en Suisse sont recensées le 31 janvier, auprès des établissements pénitentiaires cantonaux des départements de justice et police. Cette base de données recense le nombre de personnes en détention le jour du relevé, selon le sexe, la nationalité, le nombre de places disponibles. Le nombre de décès et de suicides est également relevé. 

Librairie utilisée : D3.js.

D3.js est une bibliothèque graphique JavaScript permettant l’affichage de données numériques contenues dans des fichiers, sous une forme graphique et dynamique (visualisation). D3.js donne vie aux données en utilisant le protocole HTML et les langages SVG et CSS. La version utilisée est la version 7.8. 

Les données sont représentées sous forme de « bar chart animé ». Chaque barre représente les différentes variables en fonction des années correspondantes. Le « bar chart » change en fonction de la variable que l’on veut visualiser, cela nous permet donc de voir l’évolution dans le temps de chaque variables, prises individuellement, et d’avoir une meilleure compréhension du phénomène (attention, l’échelle est adaptée en fonction de chaque variable).

Les variables :

Les variables représentées sur le graphique sont les suivantes : 

-	Les années 
-	Le nombre d’établissements pénitentiaires
-	Le nombre de places de détention 
-	La population résidente permanente
-	Le nombre de places (pour 100'000 habitants)
-	Effectif (pour 100'000 habitants)
-	Le taux d’occupation (en%)
-	L’effectif de détenus au jour du relevé 
-	Les femmes détenues au jour du relevé 
-	Le pourcentage de femmes détenues au jour du relevé
-	Le nombre d’étrangers détenus au jour du relevé
-	Le pourcentage d’étrangers détenus au jour du relevé
-	Le nombre de détenus en détention préventive
-	Le nombre de détenus en exécution anticipée (peines et mesures)
-	Le nombre de détenus en exécution de peine et mesures
-	Le nombre de détenus en exécution de mesures selon la Loi fédérale sur les étrangers et l’intégration
-	Le nombre de détenus pour d’autres mesures de détention
-	Le nombre d’entrées en milliers
-	Le nombre d’entrées en détention préventive
-	Le nombre d’entrées en exécution anticipée de peine ou de mesure
-	Le nombre d’entrées en exécution de peine ou de mesure
-	Le nombre d’entrées en mesure de contrainte selon la Loi fédérale sur les étrangers et l’intégration
-	Le nombre d’entrées pour d’autres motifs de détention
-	Le nombre de journées de détention (en milliers)
-	Le nombre de journées de détention en détention préventive
-	Le nombre de journées de détention en exécution anticipée de peine ou de mesure
-	Le nombre de journée de détention en exécution de peine ou de mesure 
-	Le nombre de journée de détention en exécution de mesures de contraintes selon la Loi fédérale sur les étrangers et l’intégration
-	Le nombre de journées de détention pour d’autres motifs de détention
-	Le nombre de suicides
-	Le nombre de décès 

L’axe des X représente les années et est identique pour chaque représentation. L’axe des Y contient ces différentes données et varie en fonction de la variable choisie ou souhaitée (l’échelle est également adaptée à chaque variable en question). 


Notre visualisation de données utilise le langage HTML et intègre du Java script. Le développement de cette page a eu lieu avec l’éditeur de code « VS CODE ». Le fichier GitHub contient 3 fichiers : 

-	Un fichier « bar_chart_load.htm » qui va lire les informations contenues dans le fichier « je-f-19.04.01.21_processed.csv ». Ces deux fichiers sont « interdépendants », ce qui signifient que toute modifications de donnée effectuées dans le fichier csv sera affiché  dans le graphique du fichier « bar_chart_load.htm ». Afin de charger correctement cette page web, il faut utiliser un serveur web. L’IDE « VS CODE » offre cette possibilité en ajoutant un plugin à cet effet.

-	Un fichier « bar_chart_embedded.html » permet d’ouvrir notre projet à partir d’un navigateur web et contient directement toutes les informations. Cette option permet d’accéder à notre visualisation directement sans l’aide de l’IDE.

La situation carcérale en générale : 

Dernièrement, plusieurs tentatives de suicides ont réouvert le débat quant à la situation de la situation des personnes en détention. Nous nous sommes rendues comptes que nous n’avions qu’une vague idée du nombre de personnes réellement détenues en Suisse. De plus, ayant suivi un cursus de droit et nous orientant possiblement dans le domaine juridique, il a été très intéressant de pouvoir visualiser ce que représentaient ces chiffres en Suisse. Le nombre de suicides dans les prisons suisses est en augmentation (13 en 2022 !) et est très préoccupant.
S’agissant du nombre de places disponibles et du nombre de places occupées, il est frappant de voir à quel point la population carcérale est nombreuse. Le fait de pouvoir mieux nous représenter la différence entre le nombre de détenus masculins et féminins nous a permis de prendre conscience de cette forte différence. 

Cette visualisation nous a permis de donner vie à nos données et de prendre conscience des différentes représentations possibles grâce à une visualisation. 

Les biais possibles et autres points à améliorer : 

L’axe des Y étant différent pour chaque représentations et l’échelle étant changeante, un lecteur qui ne porterait pas une lecture attentive sur la différence de graduation entre les différentes représentations pourrait penser que le nombre de personnes en détention est pratiquement similaire au nombre de suicides (alors qu’il s’agit de deux échelles différentes).

L’utilisation de représentation « en cookies » afin de pouvoir représenter des données liées entre elles aurait pu apporter un élément intéressant à notre visualisation, en permettant de lier les différentes données entre elles. 

Ce projet a été réalisé dans le cadre du cours de visualisation de données dispensé par le Professeur Isaac Pante. 