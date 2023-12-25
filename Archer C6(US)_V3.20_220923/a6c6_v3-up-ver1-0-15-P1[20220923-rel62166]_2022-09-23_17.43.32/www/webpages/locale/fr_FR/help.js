(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.su.CHAR.HELP ={
       STATUS_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations relatives à la connexion internet."
                       }]
},
       STATUS_WIRELESS :{ 
               TITLE:"Wi-Fi 2.4GHz/5GHz",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations relatives au réseau Wi-Fi."
                       }]
},
       STATUS_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche toutes les informations relatives aux ports réseau Ethernet."
                       }]
},
       STATUS_GUEST :{ 
               TITLE:"Réseau invités 2.4GHz/5GHz",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations relatives au réseau Wi-Fi invités."
                       }]
},
       STATUS_USB :{ 
               TITLE:"Appareils USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations relatives au périphérique de stockage ou à l'imprimante connectée au port USB du routeur."
                       }]
},
       STATUS_PERFORMANCE :{ 
               TITLE:"Performances",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations relatives au routeur."
                       }]
},
       STATUS_WIRED :{ 
               TITLE:"Clients filaires",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations relatives aux appareils filaires connectés au routeur."
                       }]
},
       STATUS_WIRELESS_CLIENTS :{ 
               TITLE:"Clients Wi-Fi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations relatives aux appareils Wi-Fi connectés au routeur."
                       }]
},
       INTERNET_TITLE :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Configurer les paramètres IPv4 et sélectionner la méthode de clonage MAC appropriée à vos besoins."
                       }]
},
       INTERNET_INTERNET :{ 
               TITLE:"IPv4",
               CONTENT: [{
                           type: "paragraph",
                           content: "Sélectionner le type de connexion internet et saisir les paramètres correspondants."
                       } ,{                      
                           type: "title",
                            title: "Type de Connexion internet : IP Dynamique"
                       } ,{                      
                           type: "paragraph",
                           content: "Sélectionner ce type de connexion si votre FAI offre une connexion avec serveur DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP/Masque de sous réseau/Passerelle par défaut/DNS Primaire/DNS Secondaire",
                           content: "Ces paramètres sont assignés automatiquement par le serveur DHCP de votre FAI."
                       } ,{                      
                           type: "name",
                           title: "Renouveler",
                           content: "Cliquer pour obtenir de nouveaux paramètres IP depuis le serveur DHCP."
                       } ,{                      
                           type: "name",
                           title: "Libérer",
                           content: "Cliquer pour libérer les paramètres IP obtenus depuis le serveur DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresse DNS",
                           content: "Cocher cette case vous permettra de saisir le DNS de votre FAI ou ceux de votre choix. À défaut le serveur DHCP de votre FAI fournira les adresses adéquates."
                       } ,{                      
                           type: "name",
                           title: "Taille de la MTU",
                           content: "l'Unité Maximum de Transfert typique par défaut est 1500 octets pour la plupart des réseaux Ethernet. Il est déconseillé de changer la valeur par défaut sauf si votre FAI le requiert."
                       } ,{                      
                           type: "name",
                           title: "Nom d'hôte",
                           content: "Saisir une valeur afin d'attribuer un nom d'hôte au routeur."
                       } ,{                      
                           type: "name",
                           title: "Obtenir une IP par DHCP unicast",
                           content: "Cocher cette case si le serveur DHCP du FAI ne supporte pas les applications de broadcast et que vous ne pouvez pas obtenir une adresse IP dynamiquement."
                       } ,{                      
                           type: "title",
                            title: "Type de Connexion internet : IP Statique"
                       } ,{                      
                           type: "paragraph",
                           content: "Choisir ce réglage si votre connexion internet ne requiert pas d'authentification et que les paramètres IP, Masque de sous réseau passerelle et serveurs DNS vous sont fournis par votre FAI."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP/Masque de sous réseau/Passerelle par défaut/DNS Primaire/DNS Secondaire",
                           content: "Saisir les informations fournies par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Taille de la MTU",
                           content: "l'Unité Maximum de Transfert typique par défaut est 1500 octets pour la plupart des réseaux Ethernet. Il est déconseillé de changer la valeur par défaut sauf si votre FAI le requiert."
                       } ,{                      
                           type: "title",
                            title: "Type de connexion internet : Câble BigPond"
                       } ,{                      
                           type: "paragraph",
                           content: "Sélectionner ce type de connexion si le FAI fourni une connexion câble BigPond."
                       } ,{                      
                           type: "name",
                           title: "Nom d'utilisateur/Mot de passe",
                           content: "Saisir le nom d'utilisateur et le mot de passe fournis par le FAI. Majuscules et minuscules sont différenciées."
                       } ,{                      
                           type: "name",
                           title: "Serveur d'authentification",
                           content: "Saisir le nom d'hôte ou l'adresse IP du serveur d'authentification."
                       } ,{                      
                           type: "name",
                           title: "Domaine d'authentification",
                           content: "Saisir le suffixe de nom de domaine du serveur (basé sur son emplacement). Par exemple, sw.bigpond.net.au pour NSW/ACT, vic.bigpond.net.au pour VIC/TAS/WA/SA/NT, ou qld.bigpod.net.au pour QLD."
                       } ,{                      
                           type: "name",
                           title: "Taille de la MTU",
                           content: "l'Unité Maximum de Transfert typique par défaut est 1500 octets pour la plupart des réseaux Ethernet. Il est déconseillé de changer la valeur par défaut sauf si votre FAI le requiert."
                       } ,{                      
                           type: "name",
                           title: "Mode de connexion",
                           content: "Choisir le mode adéquat pour vous connecter à internet.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Dans ce mode la connexion internet est automatiquement rétablie après une déconnexion."
                       } ,{                      
                           type: "name",
                           title: "A la demande",
                           content: "Dans ce mode la connexion est rompue après une période d'inactivité maximale paramétrable. La connexion est rétablie dès que vous tentez d'accéder à internet ."
                       } ,{                      
                           type: "name",
                           title: "Manuelle",
                           content: "Dans ce mode la connexion est établie manuellement en cliquant sur le bouton Connecter et rompue par le bouton Déconnecter. Ce mode permet aussi de gérer une période d'inactivité maximale dont la valeur est à saisir dans le champ adéquat; Par défaut la valeur est de 15 minutes, une valeur à 0 (zéro) désactive la fonction."
                       }]
} ,{                      
                           type: "title",
                            title: "Type de Connexion internet : PPPoE"
                       } ,{                      
                           type: "paragraph",
                           content: "sélectionner ce type de connexion si l'accès internet proposé par votre FAI le requiert."
                       } ,{                      
                           type: "name",
                           title: "Nom d'utilisateur/Mot de passe",
                           content: "Saisir le nom d'utilisateur et le mot de passe fournis par le FAI. Majuscules et minuscules sont différenciées."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP DNS Primaire/DNS Secondaire",
                           content: "Ces paramètres sont assignés automatiquement par le serveur DHCP de votre FAI."
                       } ,{                      
                           type: "name",
                           title: "Connexion secondaire (Aucune, IP Dynamique, IP Statique)",
       children: [{                      
                           type: "name",
                           title: "Aucune",
                           content: "Choisir cette valeur quand aucune connexion secondaire n'est requise."
                       } ,{                      
                           type: "name",
                           title: "IP Dynamique",
                           content: "Choisir cette option si l'adresse IP et le masque de sous réseau sont attribués par votre FAI.",
       children: [{                      
                           type: "name",
                           title: "Renouveler",
                           content: "Cliquer pour recevoir de nouveaux paramètres IP par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Libérer",
                           content: "Cliquer pour libérer les paramètres IP obtenus."
                       }]
} ,{                      
                           type: "name",
                           title: "IP Statique",
                           content: "Sélectionner si l'adresse IP et le masque de sous réseau sont fournis par le FAI et saisir les informations dans les champs correspondants."
                       }]
} ,{                      
                           type: "name",
                           title: "Taille de la MTU",
                           content: "l'unité maximum de transfert typique est 1480 octets pour les réseaux Ethernet.",
       children: [{                      
                           type: "note",
                           title: "Remarque",
                           content: "dans de rare cas, le FAI peut imposer de modifier le MTU pour des performances réseaux optimales. Vous ne devriez pas changer ce réglage sans raison impérieuse."
                       }]
} ,{                      
                           type: "name",
                           title: "Nom du service/Nom du concentrateur d'accès",
                           content: "Par défaut, le nom de service et le nom d' Access Concentrator (AC) sont vides. Ces champs ne doivent être configurés que si le FAI l'impose."
                       } ,{                      
                           type: "name",
                           title: "Intervalle de détection de connexion",
                           content: "Saisir une valeur comprise entre 0 et 120 (secondes) correspondant à l'intervalle entre chaque détection du concentrateur d'accès en ligne par le routeur, la valeur par défaut étant 10."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP",
                           content: "Si le FAI fourni une adresse IP fixe spécifique, sélectionner utiliser l'adresse IP suivante et la saisir dans le champ dédié. Autrement sélectionner obtenir dynamiquement par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Adresse DNS",
                           content: "Si le FAI fourni des adresses IP statiques de DNS, sélectionner utiliser les adresses DNS Suivantes et saisir les adresses dans les champs dédiés respectifs. Autrement sélectionner obtenir dynamiquement afin d'obtenir automatiquement les informations par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Mode de connexion",
                           content: "Choisir le mode adéquat pour vous connecter à internet.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Dans ce mode la connexion internet est automatiquement rétablie après une déconnexion."
                       } ,{                      
                           type: "name",
                           title: "A la demande",
                           content: "Dans ce mode la connexion est rompue après une période d'inactivité maximale paramétrable. La connexion est rétablie dès que vous tentez d'accéder à internet ."
                       } ,{                      
                           type: "name",
                           title: "Planifiée",
                           content: "Dans ce mode la connexion n'est établie que dans une fenêtre horaire spécifique. Si cette option est sélectionnée, saisir l'heure de début et de fin en respectant le format HH:MM."
                       } ,{                      
                           type: "name",
                           title: "Manuelle",
                           content: "Dans ce mode la connexion est établie manuellement en cliquant sur le bouton Connecter et rompue par le bouton Déconnecter. Ce mode permet aussi de gérer une période d'inactivité maximale dont la valeur est à saisir dans le champ adéquat; Par défaut la valeur est de 15 minutes, une valeur à 0 (zéro) désactive la fonction."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Le mode de connexion planifié implique que le réglage des paramètres horaires soit correctement configuré dans le menu Avancé -> Paramètres système -> Configuration horaire."
                       }]
} ,{                      
                           type: "title",
                            title: "Type de Connexion internet : L2TP/PPTP"
                       } ,{                      
                           type: "paragraph",
                           content: "Choisir ce type de connexion si vous souhaitez vous connecter à un serveur VPN L2TP/PPTP et que vous disposez des identifiants de connexion et de l'adresse IP/du nom de domaine du serveur de votre FAI."
                       } ,{                      
                           type: "name",
                           title: "Nom d'utilisateur/Mot de passe",
                           content: "Saisir le nom d'utilisateur et le mot de passe fournis par le FAI. Majuscules et minuscules sont différenciées."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP DNS Primaire/DNS Secondaire",
                           content: "Ces paramètres sont assignés automatiquement par le serveur DHCP de votre FAI."
                       } ,{                      
                           type: "name",
                           title: "Connexion secondaire (IP Dynamique ou IP Statique)",
       children: [{                      
                           type: "name",
                           title: "IP Dynamique",
                           content: "Choisir cette option si l'adresse IP et le masque de sous réseau sont attribués par votre FAI."
                       } ,{                      
                           type: "name",
                           title: "IP Statique",
                           content: "Sélectionner si l'adresse IP et le masque de sous réseau, la passerelle et les DNS sont fournis par le FAI et saisir les informations dans les champs correspondants."
                       }]
} ,{                      
                           type: "name",
                           title: "IP du serveur VPN/Nom de domaine",
                           content: "Saisir l'adresse IP du serveur VPN ou le nom de domaine fourni par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Taille de la MTU",
                           content: "l'Unité Maximum de Transfert typique par défaut (MTU) est 1460 octets pour la plupart des connexions L2TP ou 1420 pour les connexions PPTP. Il est déconseillé de changer la valeur par défaut sauf si votre FAI le requiert."
                       } ,{                      
                           type: "name",
                           title: "Mode de connexion",
                           content: "Choisir le mode adéquat pour vous connecter à internet.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "Dans ce mode la connexion internet est automatiquement rétablie après une déconnexion."
                       } ,{                      
                           type: "name",
                           title: "A la demande",
                           content: "Dans ce mode la connexion est rompue après une période d'inactivité maximale paramétrable. La connexion est rétablie dès que vous tentez d'accéder à internet ."
                       } ,{                      
                           type: "name",
                           title: "Manuelle",
                           content: "Dans ce mode la connexion est établie manuellement en cliquant sur le bouton Connecter et rompue par le bouton Déconnecter. Ce mode permet aussi de gérer une période d'inactivité maximale dont la valeur est à saisir dans le champ adéquat; Par défaut la valeur est de 15 minutes, une valeur à 0 (zéro) désactive la fonction."
                       }]
},
{
    type: "title",
    id: "internet_ipv4_dslite_title",
    title: "Type de Connexion internet : DS-Lite"
},{
    type: "paragraph",
    id: "internet_ipv4_dslite_detail",
    content: "Sélectionnez ce type si votre fournisseur de services Internet utilise le déploiement DS-Lite et fournit une adresse IPv6 pour la configuration d'un tunnel IPv4-in-IPv6 sur le réseau IPv6 afin de communiquer les trafics IPv4 ou IPv6 dans leurs propres réseaux respectifs."
},{
    type: "name",
    id: "internet_ipv4_dslite_name",
    title: "Nom AFTR",
    content: "Si votre fournisseur d'accès prend en charge l'obtention automatique du nom AFTR, sélectionnez Auto. Si votre FAI fournit un nom AFTR spécifique, sélectionnez Manuel et entrez le nom de domaine et l'adresse ipv6 fournis par le FAI dans la zone de saisie. "
},{
    type: "title",
    id: "internet_ipv4_v6plus_title",
    title: "Type de Connexion internet : v6plus"
},{
    type: "paragraph",
    id: "internet_ipv4_v6plus_detail",
    content: "Sélectionnez ce type si votre fournisseur de services Internet utilise le déploiement v6plus et fournit une adresse IPv6 pour la configuration d'un tunnel IPv4-in-IPv6 sur le réseau IPv6 afin de communiquer les trafics IPv4 ou IPv6 dans leurs propres réseaux respectifs."
}]
},
       INTERNET_MAC :{ 
               TITLE:"Clonage adresse MAC",
               CONTENT: [{
                           type: "paragraph",
                           content: "Sélectionner la méthode de clonage MAC adéquate."
                       } ,{                      
                           type: "name",
                           title: "Ne pas cloner l'adresse MAC",
                           content: "NE change pas l'adresse MAC par défaut du routeur, au cas ou le FAI n'associe pas l'adresse IP attribuée à l'adresse MAC."
                       } ,{                      
                           type: "name",
                           title: "Cloner l'adresse MAC de l'ordinateur",
                           content: "Copie l'adresse MAC de l'ordinateur connecté au routeur, au cas ou le FAI associe l'adresse IP attribuée à l'adresse MAC de l'ordinateur."
                       } ,{                      
                           type: "name",
                           title: "Utiliser une adresse MAC personnalisée",
                           content: "Saisir l'adresse MAC manuellement, au cas ou le FAI associe l'adresse IP attribuée à une adresse MAC spécifique."
                       }]
},
       INTERNET_WAN_AGGREGATION :{ 
               TITLE:"Agrégation WAN",
               id: "internet_wan_aggregation_title",
               CONTENT: [{
                           type: "paragraph",
                           id: "internet_wan_aggregation_detail",
                           content: "L'agrégation de WAN, transforme le port LAN1 en port WAN additionnel, et crée une connexion haut débit. Ainsi si votre FAI offre un débit supérieur à 1 Gbps il ne sera pas restreint par le matériel réseau."
                       } ,{                      
                           type: "note",
                           id: "internet_wan_aggregation_note",
                           title: "Remarque",
                           content: "Avant d'activer cette fonction, assurez vous que votre FAI supporte l'agrégation de WAN et que votre modem dispose de deux ports WAN."
                       } ,{                      
                           type: "step",
                           title: "Pour appliquer l'agrégation de WAN",
                           id: "internet_wan_aggregation_step",
       content: [ 
                "1. Basculer sur ON pour activer l'agrégation de WAN.",
                "2. Cliquer sur Sauvegarder.",
                "3. Connecter les ports WAN et LAN1 du routeur aux deux ports WAN de votre modem à l'aide de cordons Ethernet."]
}]
},
       LAN_IPV4 :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche l'adresse MAC, l'IP et le masque de sous-réseau du routeur."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "Adresse physique unique attribuée au port LAN du routeur."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP",
                           content: "Affiche l'adresse IP par défaut du routeur permettant de se connecter à sa page d'administration Cette adresse est modifiable."
                       } ,{                      
                           type: "name",
                           title: "Masque de sous réseau",
                           content: "Sélectionner un masque de sous réseau prédéfini ou saisir un nouveau masque de sous réseau."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "si la nouvelle adresse IP n'est pas dans le même sous réseau que l'ancienne, la plage IP du serveur DHCP sera reconfigurée automatiquement, néanmoins les serveurs virtuels et la DMZ ne seront opérationnels qu'après reconfiguration."
                       }]
},
       LINK_AGG :{ 
               TITLE:"Agrégation de liens",
               CONTENT: [{
                           type: "paragraph",
                           content: "L'agrégation de liens combine deux ports afin de créer un lien à haut débit, entre les deux appareils ainsi reliés et offre en plus une redondance qui augmente la disponibilité de la liaison."
                       } ,{                      
                           type: "step",
                           id: "link_agg_step_help",
                           title: "Pour mettre en œuvre l'agrégation de liens",
       content: [ 
                "1. Basculer sur ON pour activer la fonction d'agrégation de liens.",
                "2. Spécifier deux ports pour l'agrégation de liens.",
                "3. Cliquer sur bouton Sauvegarde."]
}]
},
       IPTV :{ 
               TITLE:"IPTV",
               CONTENT: [{
                           type: "paragraph",
                           content: "IPTV (Internet Protocol Télévision) est un système par lequel les services de télévision sont acheminés par une suite de protocoles internet via un réseau à commutation de paquets tels qu'un réseau local ou internet."
                       } ,{                      
                           type: "name",
                           id: "igmp-snooping",
                           title: "Surveillance IGMP",
                           content: "La fonction IGMP (Internet Group Management Protocol) permet au routeur de ne transmettre le trafic multicast qu'aux seuls ordinateurs l'ayant demandé."
                       } ,{                      
                           type: "name",
                           title: "Proxy IGMP",
                           content: "Sélectionner pour activer la fonction Proxy IGMP si le service IPTV du FAI est basé sur IGMP."
                       } ,{                      
                           type: "name",
                           title: "Version IGMP",
                           content: "Sélectionner la version d'IGMP utilisée par votre FAI. La version par défaut d'IGMP est la V2."
                       } ,{                      
                           type: "name",
                           id: "igmp-wifi",
                           title: "Transferts Wi-Fi multicast",
                           content: "Sélectionner pour activer la fonction de transfert Wi-Fi Multicast qui permet de diffuser en Wi-Fi les paquets Multicast."
                       } ,{                      
                           type: "name",
                           title: "IPTV",
                           content: "Sélectionner pour activer la fonction IPTV si le service IPTV du FAI n'est pas basé sur IGMP."
                       } ,{                      
                           type: "name",
                           title: "Profil FAI",
                           content: "Sélectionner le profil FAI (Fournisseur d'Accès à Internet) approprié pour réaliser la configuration. Il existe trois types de profils :",
       children: [{                      
                           type: "name",
                           title: "Pays - Nom du FAI",
                           content: "Les profils FAI pré paramétrés sont au format \"Pays-FAI\". Trouvez et sélectionnez votre FAI depuis la liste déroulante."
                       } ,{                      
                           type: "name",
                           id: "iptv_bridge_child_1to4",
                           title: "Pont",
                           content: "Si votre FAI n'est pas listé et qu'aucun autre paramètre n'est requis pour paramétrer l'IPTV, vous pouvez sélectionner ce profil et définir le port dédié à l'accès IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Spécifier quel type de données le port LAN transmettra. Par exemple, si IPTV est utilisé pour le port LAN1, ce dernier ne transmettra que les données IPTC et vous devrez brancher le décodeur au port LAN1."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_2to5",
                           title: "Pont",
                           content: "Si votre FAI n'est pas listé et qu'aucun autre paramètre n'est requis pour paramétrer l'IPTV, vous pouvez sélectionner ce profil et définir le port dédié à l'accès IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Spécifier quel type de données seront transmises par le port LAN. Par exemple, si IPTV est défini pour le LAN2, il ne transmettra que des données IPTV et vous devrez y connecter votre décodeur."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_5to8",
                           title: "Pont",
                           content: "Si votre FAI n'est pas listé et qu'aucun autre paramètre n'est requis pour paramétrer l'IPTV, vous pouvez sélectionner ce profil et définir le port dédié à l'accès IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Spécifier quel type de données seront transmises par le port LAN. Par exemple, si IPTV est défini pour le LAN5, il ne transmettra que des données IPTV et vous devrez y connecter votre décodeur."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_1to4",
                           title: "Personnalisé",
                           content: "Si votre FAI n'est pas listé mais qu'il vous à communiqué les paramètres requis pour Internet, la VoIP l'IPTV (N° de VLAN et priorités) , sélectionnez ce profil.",
       children: [{                      
                           type: "name",
                           title: "Priorité Internet/VoIP/N° de VLAN IPTV",
                           content: "Configurer les ID et priorités de VLAN comme indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Tag 802.11Q",
                           content: "Choisir si vous taguez les paquets internet selon 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "N°de VLAN du Multicast IPTV/Priorité",
                           content: "Vous pouvez activer la fonction Multicast IPTV selon votre convenance, et configurer les N°de VLAN et priorités selon les indications du FAI."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Spécifier quel type de données le port LAN transmettra. Par exemple, si IPTV est utilisé pour le port LAN1, ce dernier ne transmettra que les données IPTC et vous devrez brancher le décodeur au port LAN1."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_2to5",
                           title: "Personnalisé",
                           content: "Si votre FAI n'est pas listé mais qu'il vous à communiqué les paramètres requis pour Internet, la VoIP l'IPTV (N° de VLAN et priorités) , sélectionnez ce profil.",
       children: [{                      
                           type: "name",
                           title: "Priorité Internet/VoIP/N° de VLAN IPTV",
                           content: "Configurer les ID et priorités de VLAN comme indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Tag 802.11Q",
                           content: "Choisir si vous taguez les paquets internet selon 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "N°de VLAN du Multicast IPTV/Priorité",
                           content: "Vous pouvez activer la fonction Multicast IPTV selon votre convenance, et configurer les N°de VLAN et priorités selon les indications du FAI."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Spécifier quel type de données seront transmises par le port LAN. Par exemple, si IPTV est défini pour le LAN2, il ne transmettra que des données IPTV et vous devrez y connecter votre décodeur."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_5to8",
                           title: "Personnalisé",
                           content: "Si votre FAI n'est pas listé mais qu'il vous à communiqué les paramètres requis pour Internet, la VoIP l'IPTV (N° de VLAN et priorités) , sélectionnez ce profil.",
       children: [{                      
                           type: "name",
                           title: "Priorité Internet/VoIP/N° de VLAN IPTV",
                           content: "Configurer les ID et priorités de VLAN comme indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Tag 802.11Q",
                           content: "Choisir si vous taguez les paquets internet selon 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "N°de VLAN du Multicast IPTV/Priorité",
                           content: "Vous pouvez activer la fonction Multicast IPTV selon votre convenance, et configurer les N°de VLAN et priorités selon les indications du FAI."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Spécifier quel type de données seront transmises par le port LAN. Par exemple, si IPTV est défini pour le LAN5, il ne transmettra que des données IPTV et vous devrez y connecter votre décodeur."
                       }]
}]
}]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Serveur DHCP",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Par défaut le serveur DHCP (Dynamic Host Configuration Protocol) est actif ; il assigne dynamiquement des paramètres TCP/IP aux appareils clients parmi ceux définis dans la plage d'adresses IP.",
                "NE PAS désactiver le serveur DHCP sans qu'un autre serveur soit actif ou que vous ayez attribué manuellement des paramètres TCP/IP à chaque appareil client de votre réseau."]
} ,{                      
                           type: "name",
                           title: "Plage d'adresses IP",
                           content: "Saisir l'étendue des adresses IP qui seront attribuées aux clients."
                       } ,{                      
                           type: "name",
                           title: "Durée du bail",
                           content: "Saisir la durée du bail (1 à 2880 minutes) pendant laquelle l'IP est réservée au client. Par défaut la valeur est de 120."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Réservation d'adresses",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les paramètres correspondants aux appareils à adresse IP réservée."
                       } ,{                      
                           type: "step",
                           title: "Pour réserver une adresse IP",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Cliquer sur Détecter pour choisir un appareil actuellement connecté dans la liste des clients DHCP ; ou saisir l'adresse MAC et l'adresse IP du client désiré dans les champs dédiés.",
                "3. Saisir une description pour le client dans le champ dédié.",
                "4. Cliquer sur Activer.",
                "5. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si vous voulez désactiver cet élément, cliquer sur l'icône en forme d'ampoule."
                       }]
},
       DHCP_CLIENT_LIST :{ 
               TITLE:"Liste de clients DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations des appareils connectés."
                       }]
},
       DDNS :{ 
               TITLE:"DNS Dynamique",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le DNS Dynamique (Dynamic Domain Name System) vous permet d'assigner un nom de domaine à une adresse IP dynamique. C'est pratique quand vous hébergez un site WEB, un serveur FTP, ou un serveur situé en aval du routeur. Pour commencer, il faut obtenir le nom de domaine auprès d'un fournisseur tel www.dyn.com"
                       } ,{                      
                           type: "step",
                           title: "Pour paramétrer un DNS Dynamique",
       content: [ 
                "1. Sélectionner le fournisseur de service de DNS Dynamique.",
                "2. Saisir le nom d'utilisateur et le mot de passe du compte de DNS dynamique.",
                "3. Saisir le nom de domaine réservé chez le fournisseur de service DDNS.",
                "4. Sélectionner l'intervalle de mise à jour depuis la liste déroulante.",
                "5. Si votre fournisseur de service est NO-IP, Associer l'adresse IP WAN garanti que le nom de domaine est associé à l'IP du WAN du routeur.",
                "6. Cliquer sur Se connecter et Sauvegarder"]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si vous voulez utiliser un nouveau compte DDNS, merci de vous déconnecter du premier avant de vous connecter au nouveau compte."
                       }]
},
       DYNAMIC_DNS :{ 
               TITLE:"DNS Dynamique",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le DNS Dynamique (Dynamic Domain Name System) vous permet d'assigner un nom de domaine à une adresse IP dynamique. C'est pratique quand vous hébergez un site WEB, un serveur FTP, ou un serveur situé en aval du routeur. Pour commencer, il faut obtenir le nom de domaine auprès d'un fournisseur tel www.dyn.com"
                       }]
},
       DOMAIN_NAME_LIST :{ 
               TITLE:"Liste de noms de domaine",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette liste affiche les informations de tous les nom de domaine enregistrés avec votre compte Cloud."
                       } ,{                      
                           type: "step",
                           title: "Pour enregistrer un nom de domaine",
       content: [ 
                "1. Cliquer sur Enregistrer.",
                "2. Saisir le nom de domaine que vous souhaitez enregistrer.",
                "3. Cliquer sur bouton Sauvegarde."]
}]
},
       ADVANCED_ROUTING_STATIC_ROUTING :{ 
               TITLE:"Routage statique",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le routage statique est utilisé pour prédéfinir une route destinée à joindre un hôte ou un réseau spécifique."
                       } ,{                      
                           type: "step",
                           title: "Pour paramétrer une route statique",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Saisir une adresse IP dans le champ de destination réseau pour assigner une route statique à cet élément.",
                "3. Saisir un masque de sous réseau dans le champ dédié pour déterminer la taille du réseau.",
                "4. Saisir une adresse IP de passerelle dans le champ passerelle par défaut pour connecter le routeur au réseau ou à un hôte.",
                "5. Sélectionner LAN ou WAN dans le champ interface pour spécifier le type de réseau de destination.",
                "6. Saisir une brève description de cette entrée.",
                "7. Sélectionner Activer.",
                "8. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si vous voulez désactiver cet élément, cliquer sur l'icône en forme d'ampoule."
                       }]
},
       ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE :{ 
               TITLE:"Table de routage système",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche toutes les routes valides actuellement en utilisation."
                       }]
},
       WIRELESS_TITLE :{ 
               TITLE:"Paramètres Wi-Fi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Configurer les paramètres Wi-Fi selon vos besoins."
                       }]
},
       OFDMA :{ 
               TITLE:"OFDMA",
               CONTENT: [{
                           type: "paragraph",
                           content: "OFDMA permet à plusieurs utilisateurs de transmettre des données simultanément, ce qui améliore considérablement la vitesse et l'efficacité. Vous remarquerez que ce n'est que lorsque vos clients prennent également en charge l'OFDMA que vous pouvez pleinement profiter des avantages."
                       }]
},
       WIRELESS_SMART_CONNECT :{ 
               TITLE:"Connexion intelligente",
               CONTENT: [{
                           type: "paragraph",
                           content: "Sélectionnez cette case pour activer la connexion intelligente. Cette fonction aide les dispositifs à fonctionner plus vite en les attribuant aux meilleures bandes sans-fil dans les conditions réelles pour équilibrer les demandes du réseau."
                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wi-Fi 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Nom de réseau (SSID)",
                           content: "Nous vous recommandons de modifier le nom du réseau Wi-Fi (SSID). Ce champ différencie minuscules et majuscules"
                       } ,{                      
                           type: "name",
                           title: "Masquer le SSID",
                           content: "Sélectionner si vous ne voulez pas diffuser le SSID du réseau Wi-Fi 2.4GHz. En ce cas pour vous connecter à ce réseau il faudra saisir manuellement son nom."
                       } ,{                      
                           type: "name",
                           title: "Sécurité",
                           content: "Choisir l'une des options de sécurité suivantes :",
       children: [{                      
                           type: "name",
                           title: "Sécurité désactivée",
                           content: "Sélectionner cette option pour désactiver la sécurité Wi-Fi. Ce n'est pas recommandé."
                        } ,{
                            type: "name",
                            title: "WPA2/WPA3-Personnel",
							id: "WPA3_24G_TITLE",
                            content: "Sélectionnez cette option pour activer la méthode d'authentification standard basée sur une clé pré-partagée (PSK), également appelée phrase secrète. Si sélectionné, configurez les éléments suivants.",
                            children: [{
                                type: "name",
                                title: "Version",
                                content: "Sélectionnez une version de sécurité pour votre réseau WiFi.",
                                children: [{
                                    type: "name",
                                    title: "Auto ",
                                    content: "Le mode automatique permet une migration progressive vers un réseau WPA3-Personal tout en maintenant l'interopérabilité avec les périphériques WPA2-Personal et sans perturber les utilisateurs. Il est recommandé de laisser l'option à Auto."
                                },{
                                    type: "name",
                                    title: "WPA3-SAE",
                                    content: "Les réseaux WiFi protégés par WPA3-SAE reçoivent une authentification plus robuste basée sur un mot de passe via l'authentification simultanée sur égaux (SAE), renforçant ainsi la protection des réseaux."
                                }]
                            }]
                        },{                      
                           type: "name",
                           title: "WPA/WPA2-Personnel",
                           content: "Sélectionner cette option pour activer la sécurité Wi-Fi. Il est fortement recommandé de protéger le réseau Wi-Fi contre les accès non autorisés. Si la fonction est activée, configurer les paramètres suivants :",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Choisir une version de la sécurité. WPA2-PSK est plus sûr. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Chiffrement",
                           content: "Sélectionner un type de chiffrement de sécurité. AES est le plus sûr. Il N'EST PAS recommandé d'utiliser le chiffrement TKIP si le routeur fonctionne en mode IEEE802.11n. De plus TKIP désactive la fonction WPS. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Mot de passe",
                           content: "Saisir un Mot de passe de taille comprise entre 8 et 63 caractères ASCII ou 8 et 64 caractères hexadécimaux (0-9, A-F, a-f) dans ce champ."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Entreprise",
                           content: "Choisir cette option pour activer la méthode d'authentification la plus évoluée utilisant un serveur Radius (Remote Authentication Dial In User Service). Si cette authentification est sélectionnée la fonction WPS est désactivée.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Choisir une version de la sécurité. WPA2 est plus sûr. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Chiffrement",
                           content: "Sélectionner un type de chiffrement de sécurité. AES est le plus sûr. Il N'EST PAS recommandé d'utiliser le chiffrement TKIP si le routeur fonctionne en mode IEEE802.11n. De plus TKIP désactive la fonction WPS. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "IP du serveur Radius",
                           content: "Saisir l'adresse IP du serveur Radius."
                       } ,{                      
                           type: "name",
                           title: "Port radius",
                           content: "Entrer le numéro de port du serveur RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Mot de passe Radius",
                           content: "Saisir un Mot de passe de taille comprise entre 8 et 63 caractères ASCII ou 8 et 64 caractères hexadécimaux dans ce champ."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           id: "WEP_24G_TITLE",
                           content: "Sélectionner cette option pour activer la méthode d'authentification de base si l'un des clients ne supporte que WEP (Wired Équivalent Privacy). Si vous la sélectionnez, WPS sera désactivé.",
       children: [{                      
                           type: "name",
                           title: "Type",
                           content: "Sélectionner un type d'authentification pour le réseau Wi-Fi. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Format de clé WEP",
                           content: "Utilisez soit le format ASCII ou Hexadécimal. Le format ASCII correspond à une combinaison alphanumérique. Le format Hexadécimal est une combinaison ne comprend que des chiffres (0-9) et certaines lettres (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Type de clé",
                           content: "Choisir une taille de clé WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Permet la saisie de 10 caractères hexadécimaux (0-9, A-F, a-f) ou 5 caractères ASCII pour la clé WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Permet la saisie de 26 caractères hexadécimaux (0-9, A-F, a-f) ou 13 caractères ASCII pour la clé WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Clés",
                           content: "Saisir la clé WEP dans le champ dédié."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Choisir un canal pour le réseau Wi-Fi 2.4GHz. Il est recommandé de laisser le réglage Auto, si vous ne rencontrez pas des problèmes de déconnexions intermittentes."
                       } ,{                      
                           type: "name",
                           title: "Puissance de transmission",
                           content: "Choisir parmi Haute, Moyenne et Basse pour contrôler la puissance d'émission. La valeur recommandée et paramétrée par défaut est Haute."
                       } ,{                      
                           type: "name",
                           id: "atf_2g4",
                           title: "Fonction Airtime Fairness",
                           content: "Cocher cette case pour activer la fonction Airtime Fairness (ATF) qui vous permet d'optimiser le débit pour chaque flux. Le planificateur de trafic ATF utilise des cibles de temps de communication par destination pour équilibrer l'occupation temporelle de chaque flux. (un client Wi-Fi lent consomme plus de temps de communication qu'un client rapide)"
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_2g4",
                           title: "Fonction MiMo Multi utilisateur ",
                           content: "Cliquer sur Activer pour utiliser la fonction MiMo multi-utilisateur."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wi-Fi 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Nom de réseau (SSID)",
                           content: "Nous vous recommandons de modifier le nom du réseau Wi-Fi (SSID). Ce champ différencie minuscules et majuscules"
                       } ,{                      
                           type: "name",
                           title: "Masquer le SSID",
                           content: "Sélectionner si vous ne voulez pas diffuser le SSID du réseau Wi-Fi 5GHz. En ce cas pour vous connecter à ce réseau il faudra saisir manuellement son nom."
                       } ,{                      
                           type: "name",
                           title: "Sécurité",
                           content: "Choisir l'une des options de sécurité suivantes :",
       children: [{                      
                           type: "name",
                           title: "Sécurité désactivée",
                           content: "Sélectionner cette option pour désactiver la sécurité Wi-Fi. Ce n'est pas recommandé."
                        } ,{   
                            type: "name",
                            title: "WPA2/WPA3-Personnel",
							id: "WPA3_5G_TITLE",
                            content: "Sélectionnez cette option pour activer la méthode d'authentification standard basée sur une clé pré-partagée (PSK), également appelée phrase secrète. Si sélectionné, configurez les éléments suivants.",
                            children: [{
                                type: "name",
                                title: "Version",
                                content: "Sélectionnez une version de sécurité pour votre réseau WiFi.",
                                children: [{
                                    type: "name",
                                    title: "Auto ",
                                    content: "Le mode automatique permet une migration progressive vers un réseau WPA3-Personal tout en maintenant l'interopérabilité avec les périphériques WPA2-Personal et sans perturber les utilisateurs. Il est recommandé de laisser l'option à Auto."
                                },{
                                    type: "name",
                                    title: "WPA3-SAE",
                                    content: "Les réseaux WiFi protégés par WPA3-SAE reçoivent une authentification plus robuste basée sur un mot de passe via l'authentification simultanée sur égaux (SAE), renforçant ainsi la protection des réseaux."
                                }]
                            }]
                        },{	                      
                           type: "name",
                           title: "WPA/WPA2-Personnel",
                           content: "Sélectionner cette option pour activer la sécurité Wi-Fi. Il est fortement recommandé de protéger le réseau Wi-Fi contre les accès non autorisés. Si la fonction est activée, configurer les paramètres suivants :",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Choisir une version de la sécurité. WPA2-PSK est plus sûr. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Chiffrement",
                           content: "Sélectionner un type de chiffrement de sécurité. AES est le plus sûr. Il N'EST PAS recommandé d'utiliser le chiffrement TKIP si le routeur fonctionne en mode IEEE802.11n. De plus TKIP désactive la fonction WPS. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Mot de passe",
                           content: "Saisir un Mot de passe de taille comprise entre 8 et 63 caractères ASCII ou 8 et 64 caractères hexadécimaux (0-9, A-F, a-f) dans ce champ."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Entreprise",
                           content: "Choisir cette option pour activer la méthode d'authentification la plus évoluée utilisant un serveur Radius (Remote Authentication Dial In User Service). Si cette authentification est sélectionnée la fonction WPS est désactivée.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Choisir une version de la sécurité. WPA2 est plus sûr. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Chiffrement",
                           content: "Sélectionner un type de chiffrement de sécurité. AES est le plus sûr. Il N'EST PAS recommandé d'utiliser le chiffrement TKIP si le routeur fonctionne en mode IEEE802.11n. De plus TKIP désactive la fonction WPS. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "IP du serveur Radius",
                           content: "Saisir l'adresse IP du serveur Radius."
                       } ,{                      
                           type: "name",
                           title: "Port radius",
                           content: "Entrer le numéro de port du serveur RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Mot de passe Radius",
                           content: "Saisir un Mot de passe de taille comprise entre 8 et 63 caractères ASCII ou 8 et 64 caractères hexadécimaux dans ce champ."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           id: "WEP_5G_TITLE",
                           content: "Sélectionner cette option pour activer la méthode d'authentification de base si l'un des clients ne supporte que WEP (Wired Équivalent Privacy). Si vous la sélectionnez, WPS sera désactivé.",
       children: [{                      
                           type: "name",
                           title: "Type",
                           content: "Sélectionner un type d'authentification pour le réseau Wi-Fi. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Format de clé WEP",
                           content: "Utilisez soit le format ASCII ou Hexadécimal. Le format ASCII correspond à une combinaison alphanumérique. Le format Hexadécimal est une combinaison ne comprend que des chiffres (0-9) et certaines lettres (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Type de clé",
                           content: "Choisir une taille de clé WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Permet la saisie de 10 caractères hexadécimaux (0-9, A-F, a-f) ou 5 caractères ASCII pour la clé WEP."
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Permet la saisie de 26 caractères hexadécimaux (0-9, A-F, a-f) ou 13 caractères ASCII pour la clé WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Clés",
                           content: "Saisir la clé WEP dans le champ dédié."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Choisir un canal pour le réseau Wi-Fi 5GHz. Il est recommandé de laisser le réglage Auto, si vous ne rencontrez pas des problèmes de déconnexions intermittentes."
                       } ,{                      
                           type: "name",
                           title: "Puissance de transmission",
                           content: "Choisir parmi Haute, Moyenne et Basse pour contrôler la puissance d'émission. La valeur recommandée et paramétrée par défaut est Haute."
                       } ,{                      
                           type: "name",
                           id: "atf_5g",
                           title: "Fonction Airtime Fairness",
                           content: "Cocher cette case pour activer la fonction Airtime Fairness (ATF) qui vous permet d'optimiser le débit pour chaque flux. Le planificateur de trafic ATF utilise des cibles de temps de communication par destination pour équilibrer l'occupation temporelle de chaque flux. (un client Wi-Fi lent consomme plus de temps de communication qu'un client rapide)"
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_5g",
                           title: "Fonction MiMo Multi utilisateur ",
                           content: "Cliquer sur Activer pour utiliser la fonction MiMo multi-utilisateur."
                       }]
},
       WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le WPS (Wi-Fi Protected Setup) vous offre une alternative facile pour réaliser une connexion sécurisée à un réseau Wi-Fi."
                       } ,{                      
                           type: "name",
                           title: "Bouton WPS (recommandé)",
       content: [ 
                "Cette méthode vous permet de connecter aisément tout appareil compatible WPS au réseau Wi-Fi",
                "Cliquer sur le bouton WPS à l'écran. Dans les deux minutes, appuyer sur le bouton WPS du client."]
} ,{                      
                           type: "name",
                           title: "Code WPS",
       content: [ 
                "Le code par défaut est inscrit sur l'étiquette du routeur (PIN).",
                "Cliquer sur Générer pour obtenir un nouveau Code ou sur Par défaut pour restaurer le code par défaut (celui inscrit sur l'étiquette)."]
} ,{                      
                           type: "name",
                           title: "Entrer le Code WPS du client",
       content: [ 
                "Cette méthode vous permet de connecter d'ajouter un client Wi-Fi manuellement.",
                "Saisir le code WPS du client dans le champ dédié et cliquer sur Se connecter."]
}]
},
       WIRELESS_STATISTICS :{ 
               TITLE:"Clients Wi-Fi connectés",
               CONTENT: [{
                           type: "name",
                           title: "Nombre de client(s)",
                           content: "Affiche le nombre de clients Wi-Fi associés."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "Affiche l'adresse MAC du client Wi-Fi connecté."
                       } ,{                      
                           type: "name",
                           title: "Type de connexion",
                           content: "Affiche la bande de fréquences (2.4GHz ou 5GHz) utilisée par le client Wi-Fi connecté."
                       } ,{                      
                           type: "name",
                           title: "Sécurité",
                           content: "Affiche le type de chiffrement du client Wi-Fi associé."
                       } ,{                      
                           type: "name",
                           title: "Paquets reçus",
                           content: "Affiche le nombre de paquets reçus par le client Wi-Fi connecté."
                       } ,{                      
                           type: "name",
                           title: "Paquets émis",
                           content: "Affiche le nombre de paquets émis par le client Wi-Fi connecté."
                       } ,{                      
                           type: "paragraph",
                           content: "Cliquer sur Actualiser pour mettre à jour les informations affichées sur cette page."
                       }]
},
       WIRELESS_SCHEDULE :{ 
               TITLE:"Horaire du réseau sans fil",
               CONTENT: [{
                           type: "paragraph",
                           content: "Avec la planification du Wi-Fi, vous pouvez couper l'émission du Wi-Fi pendant des périodes spécifiques. Par exemple, vous pouvez couper le signal entre minuit et 7h."
                       } ,{                      
                           type: "name",
                           title: "Horaire de coupure du Wi-Fi",
                           content: "Affiche les périodes pendant lesquelles le Wi-Fi est désactivé.",
       children: [{                      
                           type: "step",
                           title: "Pour paramétrer la plage horaire d'extinction du Wi-Fi",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Définir la plage horaire pendant laquelle vous désirez couper l'émission du Wi-Fi,",
                "3. Sélectionner les jours ou s'applique la planification, vous pouvez choisir \"Tous les jours\" ou spécifier certain d'entre eux,",
                "4. Cliquer sur bouton Sauvegarde."]
}]
}]
},
       GUEST_NETWORK_SETTINGS :{ 
               TITLE:"Paramétrages",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette fonction vous permet d'offrir un accès Wi-Fi à vos invités sans leur ouvrir l'accès à votre réseau local."
                       } ,{                      
                           type: "name",
                           title: "Permettre aux invités de communiquer entre eux",
                           content: "Cocher cette case pour autoriser les clients Wi-Fi du réseau invités à communiquer entre eux par le voisinage réseau, samba, Ping & FTP."
                       } ,{                      
                           type: "name",
                           id: "access_local",
                           title: "Permet au invités d'accéder à mon réseau local",
                           content: "Cocher cette case pour autoriser les clients Wi-Fi du réseau invités à communiquer avec les appareils connectés au port LAN du routeur ou au réseau principal par le voisinage réseau, samba, Ping & FTP."
                       }]
},
       GUEST_NETWORK_WIRELESS :{ 
               TITLE:"Wi-Fi 2.4GHz/5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Activer le réseau invités",
                           content: "Cocher cette case pour activer le réseau invités."
                       } ,{                      
                           type: "name",
                           title: "Nom de réseau (SSID)",
                           content: "Utiliser le nom de réseau (SSID) invité par défaut ou en saisir un autre (32 caractères maximum comportant minuscules et majuscules)."
                       } ,{                      
                           type: "name",
                           title: "Masquer le SSID",
                           content: "Cocher cette case si vous décidez que le nom du réseau invités ne doit pas apparaitre dans la liste des réseaux disponibles."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Intervalle de mise à jour du Mot de passe",
                           content: "Sélectionner l'intervalle de mise à jour du mot de passe réseau invité."
                       } ,{                      
                           type: "name",
                           title: "Sécurité",
                           content: "Si vous choisissez de ne jamais mettre à jour le Mot de passe, choisir l'une des options de sécurité suivantes :",
       children: [{                      
                           type: "name",
                           title: "Sécurité désactivée",
                           content: "Sélectionner cette option pour désactiver la sécurité Wi-Fi. Ce n'est pas recommandé."
                        } ,{   
                            type: "name",
                            title: "WPA2/WPA3-Personnel",
							id: "WPA3_GUEST_TITLE",
                            content: "Sélectionnez cette option pour activer la méthode d'authentification standard basée sur une clé pré-partagée (PSK), également appelée phrase secrète. Si sélectionné, configurez les éléments suivants.",
                            children: [{
                                type: "name",
                                title: "Version",
                                content: "Sélectionnez une version de sécurité pour votre réseau WiFi.",
                                children: [{
                                    type: "name",
                                    title: "Auto ",
                                    content: "Le mode automatique permet une migration progressive vers un réseau WPA3-Personal tout en maintenant l'interopérabilité avec les périphériques WPA2-Personal et sans perturber les utilisateurs. Il est recommandé de laisser l'option à Auto."
                                },{
                                    type: "name",
                                    title: "WPA3-SAE",
                                    content: "Les réseaux WiFi protégés par WPA3-SAE reçoivent une authentification plus robuste basée sur un mot de passe via l'authentification simultanée sur égaux (SAE), renforçant ainsi la protection des réseaux."
                                }]
                            }]
                        },{	                      
                           type: "name",
                           title: "WPA/WPA2-Personnel",
                           content: "Sélectionner cette option pour activer la sécurité Wi-Fi. Il est fortement recommandé de protéger le réseau invité contre les accès non autorisés. Si la fonction est activée, configurer les paramètres suivants :",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Choisir une version de la sécurité. WPA2-PSK est plus sûr. Si vous ne savez pas quoi choisir laisser sur Auto."
                       } ,{                      
                           type: "name",
                           title: "Chiffrement",
                           content: "Sélectionner un type de chiffrement de sécurité. AES est le plus sûr. Il N'EST PAS recommandé d'utiliser le chiffrement TKIP si le routeur fonctionne en mode IEEE802.11n. De plus TKIP désactive la fonction WPS. Si vous ne savez pas quoi choisir laisser sur Auto."
                       }]
} ,{                      
                           type: "name",
                           id: "portal-help-title",
                           title: "Portail",
                           content: "Le portail d'authentification améliore la sécurité de votre réseau en requérant l'authentification des clients utilisant brièvement votre réseau Wi-Fi."
                       } ,{                      
                           type: "step",
                           id: "portal-help-content",
                           title: "Pour paramétrer le portail d'authentification",
       content: [ 
                "1. Sélectionner Portail comme type de sécurisation.",
                "2. Sélectionner Mot de passe ou pas d'authentification .",
                "A. Mot de passe - Spécifier un mot de passe comportant 8 à 16 lettres, chiffres et _.",
                "B. Pas d'authentification - Les clients peuvent accéder librement au réseau.",
                "3. Sélectionner 1,2,4,8 heures ou Permanent pour définir la durée de la session. Quand la session expire, le client doit s'authentifier à nouveau pour accéder au réseau.",
                "4. (Optionnel) Activer la redirection et saisir l'URL adéquate. Dès qu'un client est authentifié, il est redirigé vers la page spécifiée.",
                "5. (Optionnel) Vous pouvez aussi personnaliser la page d'authentification.",
                "A. Titre du portail - Jusqu'à 31 caractères.",
                "B. Conditions d'utilisation - Jusqu'à 1024 caractères.",
                "C. Logo - Fichier image au format JPG ou PNG (< 2Mo) .",
                "D. Fond d'écran - Fichier image au format JPG ou PNG (<2Mo)",
                "6. Cliquer sur bouton Sauvegarde."]
}]
} ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Mot de passe",
                           content: "Créez un mot de passe contenant entre 8 et 63 caractères ASCII ou entre 8 et 64 caractères hexadécimaux (0-9, a-f, A-F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Mot de passe",
                           content: "Utilisez le Mot de passe aléatoire généré, ou définissez un Mot de passe comprenant 8 à 63 caractères ASCII ou 8 à 64 caractères hexadécimaux (0-9,a-f,A-F)."
                       }]
},
       NAT :{ 
               TITLE:"ALG",
               CONTENT: [{
                           type: "paragraph",
                           content: "L' ALG (Application Layer Gateway) permet aux filtres de traversée NAT (Network Address Translation) d'être intégrés à la passerelle pour offrir la traduction de port et d'adresse à certains protocoles tels : FTP, TFTP, H323 etc... Il est recommandé d'activer ALG."
                       } ,{                      
                           type: "name",
                           title: "Activer ALG FTP",
                           content: "Permet aux clients et serveurs FTP (Protocole de Transfert de Fichiers) de transmettre des données via le NAT."
                       } ,{                      
                           type: "name",
                           title: "Activer ALG TFTP",
                           content: "Permet aux clients et serveurs TFTP (Protocole de Transfert de Fichiers Trivial) de transmettre des données via le NAT."
                       } ,{                      
                           type: "name",
                           title: "Activer ALG H323",
                           content: "Permet aux clients Microsoft NetMeeting de communiquer via le NAT."
                       } ,{                      
                           type: "name",
                           title: "Activer ALG RTSP",
                           content: "Permet aux clients de communiquer avec des serveurs de diffusion de médias via le NAT."
                       } ,{                      
                           type: "name",
                           title: "Activer SIP ALG",
                           content: "Si Sélectionné, les clients peuvent communiquer avec des serveurs SIP (Session Initiation Protocol) via le NAT."
                       } ,{                      
                           type: "name",
                           title: "Activer le passthrough PPTP",
                           content: "Permet d'établir des sessions de communication via des tunnels point à point entre un réseau local et un réseau distant séparés par le routeur."
                       } ,{                      
                           type: "name",
                           title: "Activer le passthrough L2TP",
                           content: "Permet d'établir des sessions de communication via des tunnels point à point de niveau 2 entre un réseau local et un réseau distant séparés par le routeur."
                       } ,{                      
                           type: "name",
                           title: "Activer le passthrough IPSec",
                           content: "Si sélectionné, un tunnel IPSec () peut être généré et traverser le routeur. IPSec utilise des services de sécurité cryptographiques pour garantir la sécurité et la confidentialité des communications via des réseaux IP."
                       }]
},
       VIRTUAL_SERVERS :{ 
               TITLE:"Serveurs virtuels",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Les serveurs virtuels sont utilisés pour définir des services publics sur votre réseau local. Un serveur virtuel est défini en tant que port externe, et toutes les requêtes provenant d'internet vers ce port externe sont redirigées vers un appareil défini, qui doit être configuré avec une adresse IP statique ou réservée.",
                "Quand vous disposez d'un serveur sur le réseau local et que vous voulez le rendre accessible depuis internet, les serveurs virtuels peuvent réaliser l'opération et le rendre accessible aux utilisateurs depuis internet."]
} ,{                      
                           type: "paragraph",
                           content: "La liste afficher les paramètres du serveur virtuel."
                       } ,{                      
                           type: "name",
                           title: "Type de service",
                           content: "Affiche le nom du serveur virtuel."
                       } ,{                      
                           type: "name",
                           title: "Port externe",
                           content: "Affiche le n° ou la plage de ports utilisés par le serveur virtuel."
                       } ,{                      
                           type: "name",
                           title: "IP Interne",
                           content: "Affiche l'adresse IP de l'ordinateur sur lequel est hébergé le service applicatif."
                       } ,{                      
                           type: "name",
                           title: "Port Interne",
                           content: "Affiche le port TCP/IP de l'ordinateur sur lequel est hébergé le service applicatif."
                       } ,{                      
                           type: "name",
                           title: "Protocole",
                           content: "Affiche le protocole utilisé par le service applicatif: TCP/UDP ou Tout (Tous les protocoles supportés par le routeur)."
                       } ,{                      
                           type: "name",
                           title: "Etat",
                           content: "Affiche l'état actuel (Activé ou Désactivé) de la règle concernée."
                       } ,{                      
                           type: "name",
                           title: "Modifier",
                           content: "Affiche les options pour Modifier ou Supprimer les éléments sélectionnés."
                       } ,{                      
                           type: "step",
                           title: "Pour définir une règle de serveur virtuel",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2, Cliquer sur Visualiser les services existants pour sélectionner un service dans la liste afin de renseigner automatiquement les champs Port interne et Port externe relatifs au service sélectionné, Si le service n'existe pas, saisir manuellement les valeurs requises comme suit: si le port interne est identique au port externe laisser le champ vide; saisir un n° de port ou une plage de ports séparés par un tirer (ex 21 ou 21-25). Saisir l'adresse IP de l'ordinateur hébergeant le service dans le champ dédié (ex:192.168.111.222).",
                "3. Sélectionner un protocole pour le service applicatif: TCP, UDP ou Tous dans la liste déroulante.",
                "4. Cliquer sur Activer.",
                "5. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
       content: [ 
                "1. Si vous voulez désactiver cet élément, cliquer sur l'icône en forme d'ampoule.",
                "2. il est recommandé de conserver les paramètres par défaut de port interne et de protocole si vous ne savez quel port ou protocole utiliser.",
                "3. Si le serveur local héberge plus d'une occurrence des services vous devrez créer une règle pour chaque service. Merci de faire attention au fait qu'un port Externe ne doit PAS être affecté à plusieurs règles."]
}]
},
       PORT_TRIGGERING :{ 
               TITLE:"Déclenchement par port",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le déclenchement par port est utilisé pour transférer le trafic d'un port vers un serveur spécifique dans le réseau."
                       } ,{                      
                           type: "paragraph",
                           content: "La liste affiche les paramètres du port de déclenchement."
                       } ,{                      
                           type: "name",
                           title: "Application",
                           content: "Affiche le nom de l'application."
                       } ,{                      
                           type: "name",
                           title: "Port déclencheur",
                           content: "Affiche le port sortant déclenchant l'ouverture du port externe."
                       } ,{                      
                           type: "name",
                           title: "Protocole déclencheur",
                           content: "Affiche le protocole utilisé par le port déclencheur."
                       } ,{                      
                           type: "name",
                           title: "Port externe",
                           content: "Affiche le port ou la plage de ports utilisés par le système distant. Une réponse utilisant l'un de ses ports sera transférée à l'ordinateur qui déclenche cette redirection. Vous pouvez entrer jusqu'à 5 groupes de ports (ou sections de ports). Chaque groupe de ports doit être séparé par des virgules par exemple: 2000-2038,2046,2050-2051,2085,3010-3030."
                       } ,{                      
                           type: "name",
                           title: "Protocole externe",
                           content: "Affiche le protocole utilisé pour le port entrant: TCP, UDP, Tous (tous les protocoles utilisés par le routeur)."
                       } ,{                      
                           type: "name",
                           title: "Etat",
                           content: "Affiche l'état actuel (Activé ou Désactivé) de la règle concernée."
                       } ,{                      
                           type: "name",
                           title: "Modifier",
                           content: "Affiche les options pour Modifier ou Supprimer les éléments sélectionnés."
                       } ,{                      
                           type: "step",
                           title: "Pour définir une règle de déclenchement par port",
       content: [{                      
                           type: "note",
                           title: "Remarque",
                           content: "Chaque règle ne peut être utilisée que par un seul hôte à la fois."
                       },
                "1. Cliquer sur Ajouter.",
                "2, Cliquer sur Visualiser les applications existantes pour sélectionner une application dans la liste afin de renseigner automatiquement les champs relatifs au service sélectionné, Si le service n'existe pas, saisir manuellement les valeurs requises comme suit: Application, port de déclenchement, Protocole de déclenchement, Port externe, Protocole externe.",
                "3, Sélectionner Activer.",
                "4. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si vous voulez désactiver cette règle, cliquer sur l'icône en forme d'ampoule."
                       }]
},
       DMZ :{ 
               TITLE:"DMZ",
               CONTENT: [{
                           type: "paragraph",
                           content: "La DMZ (Demilitarized Zone) permet à un hôte du réseau local d'être totalement visible via internet pour des services spécifiques tels les jeux en ligne ou la vidéo-conférence. De façon basique la DMZ autorise un ordinateur à ouvrir tous ses ports vers internet. Cet ordinateur doit impérativement utiliser une adresse IP statique."
                       } ,{                      
                           type: "paragraph",
                           content: "Quand la DMZ est activée, l'hôte DMZ est complètement exposé sur internet, ce qui peut être potentiellement dangereux pour cet hôte. Si la DMZ n'est pas utilisée il est préférable de la désactiver."
                       } ,{                      
                           type: "step",
                           title: "Pour définir un ordinateur ou un serveur en DMZ",
       content: [ 
                "1. Cliquer sur Activer DMZ.",
                "2, Dans le champ Adresse IP de l’hôte DMZ, saisir l'adresse IP de l'ordinateur à placer en DMZ.",
                "3. Cliquer sur bouton Sauvegarde."]
}]
},
       UPNP :{ 
               TITLE:"UPnP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Par défaut, la fonction UPnP (Universal Plug-and-Play) est activée pour autoriser les appareils, tels les ordinateurs et les appareils connectés à se découvrir mutuellement et à communiquer entre eux en réseau local."
                       } ,{                      
                           type: "paragraph",
                           content: "Vous pouvez avoir besoin d'activer la fonction UPnP si vous souhaitez utiliser des applications de type jeux multi-joueurs, connexions P2P, communications en temps réel (VoIP, Conférence VoIP) ou de l'assistance à distance..."
                       } ,{                      
                           type: "name",
                           title: "Liste de services UPnP",
                           content: "La liste de services UPnP affiche les informations UPnP des hôtes locaux."
                       }]
},
       MODEM :{ 
               TITLE:"Aide 3G/4G",
               CONTENT: [{
                           type: "name",
                           title: "Modem USB 3G/4G ",
                           content: "Affiche l'état du modem USB 3G/4G."
                       } ,{                      
                           type: "name",
                           title: "Utiliser les paramètres du FAI identifié",
                           content: "Cette fonction est activée par défaut. Ce qui permet au routeur d'identifier le FAI de la carte SIM et de pré remplir les paramètres automatiquement. Si l'identification échoue, merci de définir manuellement les paramètres relatifs au FAI."
                       } ,{                      
                           type: "name",
                           title: "Pays",
                           content: "Sélectionne et affiche automatiquement le Pays quand le modem USB et la carte SIM sont correctement identifiés. Quand ce n'est pas le cas, sélectionner le pays depuis la liste déroulante."
                       } ,{                      
                           type: "name",
                           title: "FAI Mobile",
                           content: "Affiche le FAI (Fournisseur d'accès Internet) du réseau 3G/4G. Si la détection automatique n'a pas eu lieu, sélectionnez la FAI dans la liste déroulante. Le numéro de composition et l'APN par défaut seront automatiquement renseignés."
                       } ,{                      
                           type: "name",
                           title: "Code PIN SIM/UIM",
                           content: "Si la protection de la carte SIM/USIM est active saisir le code PIN. La protection est par défaut désactivée. Veuillez noter que si vous saisissez 3 fois de façon erronée le code pin, la carte SIM/USIM sera automatiquement bloquée. Il vous faudra saisir le code PUK depuis un ordinateur pour la débloquer."
                       } ,{                      
                           type: "name",
                           title: "Message",
                           content: "Affiche les informations de code PIN de la carte SIM si la protection par code PIN est active."
                       } ,{                      
                           type: "name",
                           title: "Paramétrages Numéro de connexion,APN,Nom d'utilisateur/Mot de passe",
                           content: "Si le FAI n'est pas présent dans la liste <strong>FAI Mobile</strong> cocher cette case et saisir le N° à composer, l'APN (Access Point Name), le nom d'utilisateur et le mot de passe fournis par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Numéro de connexion",
                           content: "Saisir le N° d'accès indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Saisir l'APN (Access Point Name) indiqué par le FAI. "
                       } ,{                      
                           type: "name",
                           title: "Nom d'utilisateur/Mot de passe",
                           content: "Saisir le nom d'utilisateur et le mot de passe fournis par le FAI. Majuscules et minuscules sont différenciées."
                       } ,{                      
                           type: "name",
                           title: "Connexion à la demande",
                           content: "Dans ce mode la connexion est rompue après une période d'inactivité maximale paramétrable. La connexion est rétablie dès que vous tentez d'accéder à internet ."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Il est possible que la connexion ne puisse être interrompue même si vous spécifiez le temps d'inactivité maximum par ce que certains dispositifs accèdent constamment à l'Internet dans l'arrière-plan."
                       } ,{                      
                           type: "name",
                           title: "Connexion automatique",
                           content: "Dans ce mode, la connexion Internet se reconnecte automatiquement après chaque déconnexion."
                       } ,{                      
                           type: "name",
                           title: "Connexion manuelle",
                           content: "Dans ce mode, vous pouvez cliquer sur le bouton Connexion/Déconnexion pour contrôler manuellement la connexion à l'Internet. Ce mode prend aussi en charge la fonction Temps d'inactivité maximum. Saisissez le délai maximum (en minutes) pendant lequel la connexion Internet peut demeurer inactive avant qu'elle ne soit interrompue, dans le champ Temps d'inactivité maximum. La valeur par défaut est 15 minutes. Si vous souhaitez que la connexion Internet demeure constamment active, saisissez 0 (zéro)."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Il est possible que la connexion ne puisse être interrompue même si vous spécifiez le temps d'inactivité maximum par ce que certains dispositifs accèdent constamment à l'Internet dans l'arrière-plan."
                       } ,{                      
                           type: "paragraph",
                           content: "Cliquer sur le bouton Sauvegarder pour faire une copie des paramètres."
                       }]
},
       MODEM_ADVANCED :{ 
               TITLE:"Aide des Paramètres avancés 3G/4G",
               CONTENT: [{
                           type: "name",
                           title: "Modem USB 3G/4G ",
                           content: "Affiche l'état du modem USB 3G/4G."
                       } ,{                      
                           type: "name",
                           title: "Utiliser les paramètres du FAI identifié",
                           content: "Cette fonction est activée par défaut. Ce qui permet au routeur d'identifier le FAI de la carte SIM et de pré remplir les paramètres automatiquement. Si l'identification échoue, merci de définir manuellement les paramètres relatifs au FAI."
                       } ,{                      
                           type: "name",
                           title: "Pays",
                           content: "Sélectionne et affiche automatiquement le Pays quand le modem USB et la carte SIM sont correctement identifiés. Quand ce n'est pas le cas, sélectionner le pays depuis la liste déroulante."
                       } ,{                      
                           type: "name",
                           title: "FAI Mobile",
                           content: "Affiche le FAI (Fournisseur d'accès Internet) du réseau 3G/4G. Si la détection automatique n'a pas eu lieu, sélectionnez la FAI dans la liste déroulante. Le numéro de composition et l'APN par défaut seront automatiquement renseignés."
                       } ,{                      
                           type: "name",
                           title: "Code PIN SIM/UIM",
                           content: "Si la protection de la carte SIM/USIM est active saisir le code PIN. La protection est par défaut désactivée. Veuillez noter que si vous saisissez 3 fois de façon erronée le code pin, la carte SIM/USIM sera automatiquement bloquée. Il vous faudra saisir le code PUK depuis un ordinateur pour la débloquer."
                       } ,{                      
                           type: "name",
                           title: "Message",
                           content: "Affiche les informations de code PIN de la carte SIM si la protection par code PIN est active."
                       } ,{                      
                           type: "name",
                           title: "Paramétrages Numéro de connexion,APN,Nom d'utilisateur/Mot de passe",
                           content: "Si le FAI n'est pas présent dans la liste <strong>FAI Mobile</strong> cocher cette case et saisir le N° à composer, l'APN (Access Point Name), le nom d'utilisateur et le mot de passe fournis par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Numéro de connexion",
                           content: "Saisir le N° d'accès indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Saisir l'APN (Access Point Name) indiqué par le FAI. "
                       } ,{                      
                           type: "name",
                           title: "Nom d'utilisateur/Mot de passe",
                           content: "Saisir le nom d'utilisateur et le mot de passe fournis par le FAI. Majuscules et minuscules sont différenciées."
                       } ,{                      
                           type: "name",
                           title: "Connexion à la demande",
                           content: "Dans ce mode la connexion est rompue après une période d'inactivité maximale paramétrable. La connexion est rétablie dès que vous tentez d'accéder à internet ."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Il est possible que la connexion ne puisse être interrompue même si vous spécifiez le temps d'inactivité maximum par ce que certains dispositifs accèdent constamment à l'Internet dans l'arrière-plan."
                       } ,{                      
                           type: "name",
                           title: "Connexion automatique",
                           content: "Dans ce mode, la connexion Internet se reconnecte automatiquement après chaque déconnexion."
                       } ,{                      
                           type: "name",
                           title: "Connexion manuelle",
                           content: "Dans ce mode, vous pouvez cliquer sur le bouton Connexion/Déconnexion pour contrôler manuellement la connexion à l'Internet. Ce mode prend aussi en charge la fonction Temps d'inactivité maximum. Saisissez le délai maximum (en minutes) pendant lequel la connexion Internet peut demeurer inactive avant qu'elle ne soit interrompue, dans le champ Temps d'inactivité maximum. La valeur par défaut est 15 minutes. Si vous souhaitez que la connexion Internet demeure constamment active, saisissez 0 (zéro)."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Il est possible que la connexion ne puisse être interrompue même si vous spécifiez le temps d'inactivité maximum par ce que certains dispositifs accèdent constamment à l'Internet dans l'arrière-plan."
                       } ,{                      
                           type: "name",
                           title: "Type d'authentification",
                           content: "Sélectionner un type d'authentification pour le réseau Wi-Fi. Par défaut la valeur est Auto. Certains FAI requièrent un type particulier d'authentification, conservez le réglage par défaut ou utilisez celui indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Auto",
                           content: "Si Auto (par défaut), le routeur détermine automatiquement le type d'authentification utilisée par le FAI."
                       } ,{                      
                           type: "name",
                           title: "PAP",
                           content: "En mode PAP (Password Authentication Protocol), le routeur effectue une authentification utilisant le mot de passe/identifiant en clair. Sélectionnez cette option si la FAI requiert ce type d'authentification."
                       } ,{                      
                           type: "name",
                           title: "CHAP",
                           content: "En mode CHAP (Challenge Handshake Authentication Protocol), le routeur utilise un mode d'authentification cryptée en 3 étapes. Sélectionnez cette option si la FAI requiert ce type d'authentification."
                       } ,{                      
                           type: "name",
                           title: "Taille de la MTU",
                           content: "La taille de MTU () par défaut est de 1480Octets. Ne pas modifier sauf indication du FAI."
                       } ,{                      
                           type: "name",
                           title: "Utiliser les serveurs DNS suivants",
                           content: "Si le FAI dispose de serveurs DNS, cocher cette case et saisir l'adresse IP du <strong>DNS Primaire</strong> et DNS Secondaire (optionnel) dans les champs dédiés. Autrement, ils seront complétés dynamiquement par le FAI."
                       } ,{                      
                           type: "name",
                           title: "DNS Primaire",
                           content: "Saisir l'adresse IP DNS indiquée par le FAI au format XXX.XXX.XXX.XXX."
                       } ,{                      
                           type: "name",
                           title: "DNS Secondaire",
                           content: "(Optionnel) Saisir une autre adresse IP (xxx.xxx.xxx.xxx) de DNS fournie par le FAI."
                       } ,{                      
                           type: "paragraph",
                           content: "Cliquer sur le bouton <strong>Sauvegarder</strong> pour faire une copie des paramètres."
                       }]
},
       DISK_SETTING :{ 
               TITLE:"Disques USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cet écran affiche les information relatives à chaque disque USB connecté."
                       } ,{                      
                           type: "name",
                           title: "Rechercher",
                           content: "Usuellement, le routeur détecte automatiquement tout disque USB qui vient d'être connecté. Si ce n'est pas le cas cliquer sur ce bouton afin de détecter les nouveaux disques USB ou mettre à jour les informations de ceux déjà connectés."
                       } ,{                      
                           type: "name",
                           title: "Volume",
                           content: "Affiche le nom des disques USB."
                       } ,{                      
                           type: "name",
                           title: "Capacité",
                           content: "Affiche la capacité totale de chaque disque USB."
                       } ,{                      
                           type: "name",
                           title: "Espace libre",
                           content: "Affiche l'espace de stockage libre sur le disque USB."
                       } ,{                      
                           type: "name",
                           title: "Déconnexion sécurisée",
                           content: "Cliquer sur ce bouton pour déconnecter électroniquement le disque USB avant de pouvoir le déconnecter physiquement du routeur."
                       } ,{                      
                           type: "paragraph",
                           content: "Le bouton Éjecter n'apparait que quand un périphérique de stockage USB est connecté au routeur. Quand le volume est en cours d'utilisation il est impossible de l'éjecter."
                       } ,{                      
                           type: "name",
                           title: "Etat",
                           content: "Cette case à cocher n'apparait qu'en présence d'un dispositif de stockage USB connecté au routeur, cocher la case pour autoriser le partage réseau de la ressource concernée."
                       } ,{                      
                           type: "step",
                           title: "Pour paramétrer un serveur de fichiers",
       content: [ 
                "1. Connecter un dispositif de stockage au port USB du routeur.",
                "2. L'appareil doit être détecté par le routeur qui va afficher les informations dans la section Paramètres des appareils sinon, cliquer sur Rechercher.",
                "3. Cocher la case Partager pour activer le partage de fichiers."]
}]
},
       FOLDER_SHARE_ACCOUNT :{ 
               TITLE:"Compte de partage",
               CONTENT: [{
                           type: "name",
                           title: "Compte",
                           content: "Vous pouvez soit utiliser le compte par défaut pour vous connecter aux partages soit créer un nouveau compte dont vous définirez ci-après les identifiants."
                       } ,{                      
                           type: "name",
                           title: "Nom d'utilisateur/Mot de passe",
                           content: "Saisissez un nom d'utilisateur contenant entre 1 et 15 caractères alphanumériques ou une chaîne de caractères de la même longueur et un mot de passe contenant entre 1 et 15 caractères ASCII. Ces champs sont sensibles à la casse."
                       } ,{                      
                           type: "name",
                           title: "Confirmer le Mot de passe",
                           content: "Ressaisir le Mot de passe pour le confirmer. Attention aux minuscules et aux majuscules."
                       } ,{                      
                           type: "paragraph",
                           content: "Cliquer sur Sauvegarder pour garder une copie de tous les paramètres."
                       }]
},
       FOLDER_SHARE_SETTINGS :{ 
               TITLE:"Paramètres de partage",
               CONTENT: [{
                           type: "name",
                           title: "Nom du serveur de médias/réseau",
                           content: "Affiche le nom utilisé pour accéder au disque USB à distance."
                       } ,{                      
                           type: "name",
                           title: "Activer",
                           content: "Choisir pour activer la méthode d'accès."
                       } ,{                      
                           type: "name",
                           title: "Méthode d'accès",
                           content: "Il existe 3 méthodes d'accès pour autoriser l'accès au dispositif de stockage USB. Vous pouvez en sélectionner plusieurs en cochant les cases correspondantes.",
       children: [{                      
                           type: "name",
                           title: "Voisinage réseau",
                           content: "Si activé les utilisateurs du réseau local peuvent accéder au périphérique de stockage USB via l'adresse IP du routeur (ex: \\\\192.168.0.1)."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Si activé, les clients FTP sur le réseau local peuvent accéder au périphérique de stockage USB via l'adresse IP du routeur, suivi de son numéro de port (ex: http://192.168.0.1:21)."
                       } ,{                      
                           type: "name",
                           title: "FTP (Via internet)",
                           content: "Cette méthode si elle est active permet aux utilisateurs d'accéder au partage directement par l'adresse IP publique du routeur suivi du port FTP (exemple ftp://8X.1Y.22Z.217:21) pour modifier l'adresse du port FTP saisir une autre valeur et cliquer sur Sauvegarder pour appliquer le changement."
                       }]
} ,{                      
                           type: "name",
                           title: "Lien",
                           content: "Affiche l'adresse utilisable pour accéder au partage de ressource USB."
                       } ,{                      
                           type: "name",
                           title: "Port",
                           content: "Affiche le numéro de port du serveur FTP. Utilisez la valeur par défaut 21 ou une valeur entre 1024 et 65535."
                       } ,{                      
                           type: "paragraph",
                           content: "Cliquer sur Sauvegarder pour garder une copie de tous les paramètres."
                       }]
},
       FOLDER_SHARE_FOLDERS :{ 
               TITLE:"Partage de dossier",
               CONTENT: [{
                           type: "name",
                           title: "Partager tout",
                           content: "Sélectionner pour partager tous les dossiers et fichiers sinon laisser Partager tout sur Off afin que seuls les dossiers sélectionnés soient partagés."
                       } ,{                      
                           type: "name",
                           title: "Activer authentification",
                           content: "Il est fortement recommandé d'activer l'authentification pour imposer aux utilisateurs de saisir des identifiants avant de pouvoir accéder aux contenus partagés."
                       } ,{                      
                           type: "name",
                           title: "Nom de dossier",
                           content: "Affiche le nom du dossier partagé."
                       } ,{                      
                           type: "name",
                           title: "Chemin d’accès",
                           content: "Affiche le chemin d'accès au dossier partagé."
                       } ,{                      
                           type: "name",
                           title: "Serveur de médias",
                           content: "Indique si le contenu du dossier est accessible depuis un lecteur de médias (lecteur Windows média…)."
                       } ,{                      
                           type: "name",
                           title: "Nom de volume",
                           content: "Affiche le nom du disque USB ou la mention volumnx si ce nom n’est pas défini."
                       } ,{                      
                           type: "name",
                           title: "Etat",
                           content: "Indique si le partage réseau est actif pour le dossier concerné par une icône, et quand il est inactif par l’icône."
                       } ,{                      
                           type: "name",
                           title: "Modifier",
                           content: "Affiche les options pour modifier ou supprimer le dossier partagé concerné."
                       } ,{                      
                           type: "name",
                           title: "Naviguer",
                           content: "Cliquer pour rechercher un dossier partagé."
                       } ,{                      
                           type: "name",
                           title: "Permettre l'accès au réseau invités",
                           content: "Cocher la case pour autoriser les clients du réseau invités à accéder aux dossiers partagés."
                       } ,{                      
                           type: "name",
                           title: "Activer authentification",
                           content: "Cocher la case pour activer l'authentification et autoriser l'accès aux dossiers partagés aux seuls utilisateurs correctement authentifiés. Le nom d’utilisateur et lemot de passe requis sont par défaut ceux du routeur (admin/admin)."
                       } ,{                      
                           type: "name",
                           title: "Autoriser l'écriture",
                           content: "Cocher la case pour donner l'autorisation aux clients de modifier le contenu du dossier."
                       } ,{                      
                           type: "name",
                           title: "Autoriser le partage de médias",
                           content: "Cocher la case pour activer le serveur de médias."
                       } ,{                      
                           type: "name",
                           title: "Actualiser",
                           content: "Cliquer pour mettre à jour la liste des répertoires partagés."
                       }]
},
       PRINT_SERVER :{ 
               TITLE:"Serveur d'impression",
               CONTENT: [{
                           type: "name",
                           title: "Serveur d'impression",
                           content: "Basculer sur On pour activer la fonction de serveur d'impression."
                       } ,{                      
                           type: "name",
                           title: "Nom de l'imprimante",
                           content: "Affiche le nom de l'imprimante connectée au routeur."
                       }]
},
       TIME_MACHINE :{ 
               TITLE:"Time Machine",
               CONTENT: [{
                           type: "paragraph",
                           content: "Time Machine sauvegarde tous les fichiers de votre MAC sur un périphérique de stockage connecté à votre modem routeur"
                       } ,{                      
                           type: "name",
                           title: "Activer",
                           content: "Cocher cette Case pour activer la fonction time Machine."
                       } ,{                      
                           type: "name",
                           title: "Sauvegarde de disque",
                           content: "Sélectionner la destination des sauvegardes Time Machine."
                       } ,{                      
                           type: "name",
                           title: "Limite de taille des sauvegardes",
                           content: "Défini l'espace disque attribué aux sauvegardes Time Machine. 0 Signifie aucune limite."
                       } ,{                      
                           type: "name",
                           title: "Sauvegarder",
                           content: "Cliquer pour sauvegarder vos réglages."
                       }]
},
       OFFLINE_DOWNLOAD :{ 
               TITLE:"Téléchargement hors connexion",
               CONTENT: [{
                           type: "paragraph",
                           content: "Quand le téléchargement hors ligne est activé, le routeur peut télécharger des fichiers sans devoir laisser l'ordinateur sous tension."
                       } ,{                      
                           type: "name",
                           title: "Etat",
                           content: "Basculer sur On pour activer la fonction de téléchargement hors ligne."
                       } ,{                      
                           type: "name",
                           title: "Chemin d’accès",
                           content: "Sélectionner un chemin pour stocker ou mettre en cache les téléchargements.",
       children: [{                      
                           type: "note",
                           title: "Remarque",
                           content: "Ne pas modifier le chemin d'accès ni déconnecter le périphérique de stockage USB pendant des téléchargements ou téléversements ; sans quoi une erreur fatale pourrait se produire."
                       }]
} ,{                      
                           type: "name",
                           title: "Planification",
                           content: "Cocher la case pour activer la fonction planification qui vous permet de définir la plage horaire pendant laquelle les téléchargements/téléversements sont autorisés."
                       } ,{                      
                           type: "name",
                           title: "Continuer à téléverser après l'achèvement de la tâche.",
                           content: "Cocher la case pour continuer à partager les données des téléchargements achevés."
                       } ,{                      
                           type: "name",
                           title: "Nombre maximal de téléchargements actifs",
                           content: "Saisir une valeur comprise entre 1 et 10 pour définir le nombre maximal de téléchargements simultanés. La valeur par défaut est 5."
                       }]
},
       OFFLINE_DOWNLOAD_ITEMS :{ 
               TITLE:"Téléchargements",
               CONTENT: [{
                           type: "note",
                           title: "Fichier",
                           content: "Affiche le nom et le type du fichier téléchargé."
                       } ,{                      
                           type: "note",
                           title: "Vitesse",
                           content: "Affiche la vitesse actuelle de téléchargement (ou téléversement)."
                       } ,{                      
                           type: "note",
                           title: "Achevé",
                           content: "Affiche l'avancement du téléchargement."
                       } ,{                      
                           type: "note",
                           title: "Temps restant",
                           content: "Affiche le temps restant avant l'achèvement du téléchargement."
                       } ,{                      
                           type: "note",
                           title: "Pairs connectés",
                           content: "Affiche le nombre de connexions relatives au téléchargement."
                       } ,{                      
                           type: "note",
                           title: "Etat",
                           content: "Affiche l'état actuel du téléchargement (Téléchargement, En attente, Diffusion, En pause, Achevé, En erreur.)"
                       } ,{                      
                           type: "name",
                           title: "Pour ajouter un téléchargement",
       children: [{                      
                           type: "step",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Sélectionner la source à télécharger, Torrent depuis l'ordi. , Torrent depuis le port USB, URL.",
                "3. Sélectionner l'emplacement du Torrent pour bit torrent, ou l'url pour FTP, HTTP et aMule.",
                "4. Cliquer sur bouton Sauvegarde.",
                "5. Pour aMule, spécifier l'adresse IP et le port du serveur aMule dans Configuration Avancée -> Serveur aMule."]
}]
} ,{                      
                           type: "name",
                           title: "Pour supprimer les téléchargements",
                           content: "Cocher la case correspondant au(x) téléchargement(s) que vous voulez supprimer, puis cliquer sur Supprimer au dessus de la liste."
                       } ,{                      
                           type: "name",
                           title: "Pour mettre en pause les téléchargements",
                           content: "Cocher la case correspondant au(x) téléchargement(s) que vous voulez mettre en pause, puis cliquer sur Pause au dessus de la liste."
                       } ,{                      
                           type: "name",
                           title: "Pour reprendre les téléchargements",
                           content: "Cocher la case correspondant au(x) téléchargement(s) que vous voulez reprendre, puis cliquer sur Reprendre au dessus de la liste."
                       }]
},
       OFFLINE_DOWNLOAD_ADVANCED :{ 
               TITLE:"Configuration Avancée",
               CONTENT: [{
                           type: "name",
                           title: "Limites de débit",
                           content: "Spécifier la vitesse maximale de téléchargement et téléversement pour la connexion internet."
                       } ,{                      
                           type: "name",
                           title: "Vitesse maximale de téléchargement",
                           content: "Saisir une valeur comprise entre 1 et 100000Ko/s pour définir le débit de téléversement maximal. La valeur par défaut est 1024."
                       } ,{                      
                           type: "name",
                           title: "Vitesse maximale de téléversement",
                           content: "Saisir une valeur comprise entre 1 et 100000kB/s pour définir le débit de téléversement maximal. La valeur par défaut est 512."
                       } ,{                      
                           type: "name",
                           title: "Nombre de connexions.",
                           content: "Spécifier le nombre maximal de connexions."
                       } ,{                      
                           type: "name",
                           title: "Nombre maximum global de connexion.",
                           content: "Saisir une valeur comprise entre 1 et 200 pour définir le nombre global maximum de connexions. La valeur par défaut est 100."
                       } ,{                      
                           type: "name",
                           title: "Nombre maximal de Pairs connectés par Torrent",
                           content: "Saisir une valeur comprise entre 1 et 100 pour définir le nombre maximum de connexions pour un fichier Torrent. La valeur par défaut est 50."
                       } ,{                      
                           type: "name",
                           title: "Activer le réseau DHT",
                           content: "Activer cette fonction pour améliorer l'efficacité de recherche de pairs et accroitre ainsi la vitesse de téléchargement."
                       } ,{                      
                           type: "name",
                           title: "Permettre l'échange pair à pair",
                           content: "Activer cette fonction pour améliorer l'efficacité des communications entre les pairs d'un groupe et accroitre ainsi la vitesse de téléchargement."
                       } ,{                      
                           type: "name",
                           title: "Activer le chiffrement du protocole Bit Torrent",
                           content: "Activer cette fonction pour renforcer l'intimité et la confidentialité pendant les transferts de données."
                       } ,{                      
                           type: "name",
                           title: "Serveur aMule",
                           content: "Saisir l'adresse IP et le port du serveur aMule. Le téléchargement n'est possible que lorsque le routeur est connecté au serveur aMule."
                       }]
},
       PARENTAL_CONTROL :{ 
               TITLE:"Contrôle Parental",
               CONTENT: [{
                           type: "paragraph",
                           content: "Avec le contrôle parental, vous pouvez bloquer les sites inappropriés, pour adulte ou vecteurs d'infection; restreindre l'accès à certaines heures (Facebook et YouTube durant le temps des devoirs). "
                       }]
},
       PARENTAL_CONTROL_DEVICES :{ 
               TITLE:"Appareils soumis au contrôle parental",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette liste affiche les informations et paramètres des appareils actuellement soumis au contrôle parental."
                       } ,{                      
                           type: "step",
                           title: "Pour limiter l'accès d'un nouveau client",
       content: [ 
                "1. Basculer Sur On le contrôle parental.",
                "2. Cliquer sur Ajouter",
                "3. Cliquer sur détecter pour sélectionner un appareil actuellement connecté dans la liste d'accès des appareils ; ou saisir le nom d'appareil et son adresse MAC.",
                "4. Cliquer l'icône durée effective pour spécifier une plage horaire pendant laquelle la restriction s'applique.",
                "5. Saisir une brève description dans le champ dédié. (optionnel)",
                "6. Sélectionner activer cet élément.",
                "7. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si vous voulez désactiver cet élément, cliquer sur l'icône en forme d'ampoule."
                       }]
},
       PARENTAL_CONTROL_RESTRICTION :{ 
               TITLE:"Restriction de contenus",
               CONTENT: [{
                           type: "paragraph",
                           content: "Les restrictions de contenus vous permettent de restreindre l'accès à certains sites via des mots clé et des noms de domaine. Les appareils clients soumis au contrôle parental peuvent ou non accéder à ses sites en fonction de la politique de restriction que vous avez défini."
                       } ,{                      
                           type: "step",
                           title: "Pour spécifier le contenu auquel accéder",
       content: [ 
                "1. Basculer Sur On les restrictions de contenus.",
                "2. Sélectionner la politique de restrictions en fonction des besoins :",
                "A. Si vous voulez que l'appareil contrôlé puisse accéder à tous les sites WEB à l'exception de certains, sélectionner liste noire.",
                "B. Si vous voulez que les appareils sous contrôle n'aient accès qu'à certains site, sélectionner liste blanche.",
                "2. Cliquer sur Ajouter un mot clé pour ajouter un mot ou une adresse WEB (par exemple : Wikipédia) qui seront ajoutés à la liste blanche ou noire.",
                "4. Cliquer sur bouton Sauvegarde."]
}]
},
       PARENTAL_CONTROL_V2 :{ 
               TITLE:"Contrôle Parental",
               CONTENT: [{
                           type: "paragraph",
                           content: "Avec des profils d’utilisateur, un filtre de contenu et des limites d’accès, le Contrôle Parental fournit à chaque membre de votre famille un accès Internet personnalisé et adapté"
                       } ,{                      
                           type: "step",
                           title: "Pour appliquer le contrôle parental à un nouvel appareil",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Entrez un nom pour ce profil et cliquez sur \"+\" pour ajouter des périphériques à ce profil.",
                "3. Personnalisez le contenu bloqué en fonction de vos besoins. Tous les sites Web contenant certains mots-clés seront bloqués.",
                "4. Si vous souhaitez limiter le temps total que ce profil peut passer en ligne, activez et spécifiez les limites de temps. Vous pouvez également utiliser l'heure du coucher pour définir une période de temps quotidienne pendant laquelle les appareils de ce profil ne peuvent pas utiliser Internet.",
                "5. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "step",
                           title: "Pour afficher l'historique Internet détaillé d'un profil",
       content: [ 
                "1. Dans la colonne aperçu, cliquez sur le bouton aperçu correspondant.",
                "2. Si vous voulez voir d'autres enregistrements, cliquez sur le bouton Historique <span class=\"ptl-ctr-help-icon history\"></span>.",
                "3. Vous pouvez bloquer ou débloquer des sites Web en cliquant sur le bouton <span class=\"ptl-ctr-help-icon block\"></span> ou <span class=\"ptl-ctr-help-icon unblock\"></span>."]
} ,{                      
                           type: "step",
                           title: "Pour désactiver ou activer l'accès à Internet immédiatement",
       content: [ 
                "Dans la colonne Accès Internet, cliquez sur <span class=\"ptl-ctr-help-icon stop\"></span> pour empêcher les périphériques du profil correspondant d'accéder à Internet et cliquez sur <span class=\"ptl-ctr-help-icon enable\"></span> pour leur donner accès à nouveau."]
}]
},
       QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "La QoS aide à donner optimiser le trafic selon les impératifs de débit requis. Vous pouvez spécifier des niveaux de priorité à un appareil à un port physique ou à une utilisation dans la liste des règles de QoS."
                       } ,{                      
                           type: "note",
                           id: "qos-boost",
                           title: "Remarque",
                           content: "Si NAT Boost est activé, QoS doit être désactivé."
                       } ,{                      
                           type: "name",
                           title: "Débit Montant",
                           content: "Saisir le débit montant maximal indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Débit Descendant",
                           content: "Saisir le débit descendant maximal indiqué par le FAI."
                       }]
},
       QOS_ADV :{ 
               TITLE:"Configuration Avancée",
               CONTENT: [{
                           type: "name",
                           title: "Priorité Haute/Moyenne/Basse",
                           content: "Spécifier un pourcentage pour les priorités de trafic Haute/Moyenne/Basse.",
       children: [{                      
                           type: "note",
                           title: "Remarque",
                           content: "Le total maximal des priorités ne peut excéder 100%."
                       }]
}]
},
       QOS_RULE :{ 
               TITLE:"Liste de règles de QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ici vous pouvez ajouter des règles de QoS pour régir les priorités de trafic internet."
                       } ,{                      
                           type: "step",
                           title: "Pour paramétrer une règle de QoS",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Sélectionner un type de priorité pour ajouter la règle de QoS.",
                "Par appareil - Cliquer sur détecter pour sélectionner l'appareil désiré, ou saisir manuellement un nom d'appareil et son adresse MAC.",
                "Par application - Sélectionner l'application désirée ou définissez une application personnalisée en complétant les champs : nom, protocole et port de destination (1 à 65535). Vous pouvez saisir un N° de port unique et/ou des plages de ports en les séparant par une virgule (ex : 21, 36-105,111)",
                "Par port physique - Sélectionner le port désiré.",
                "3. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Vous pouvez déplacer une règle entre les différentes listes de priorités pour en changer la priorité."
                       }]
},
       QOS_DATABASE :{ 
               TITLE:"Mise à jour de la base de données",
               CONTENT: [{
                           type: "paragraph",
                           content: "Nous mettons à disposition la dernière version de base de données sur www.tp-link.com. Vous pouvez télécharger et mettre à jour la base de données du routeur afin d'étendre la liste des applications supportées."
                       } ,{                      
                           type: "name",
                           title: "Nouvelle base de données",
                           content: "Cliquer sur Naviguer pour localiser la base de données la plus récente. Sélectionnez la et cliquer sur mise à jour pour qu'elle contienne les informations les plus récentes."
                       }]
},
       QOS_V2 :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "La qualité de service (QoS) vous permet de hiérarchiser le trafic Internet pour chaque appareil afin de garantir une connexion plus rapide lorsque vous en avez le plus besoin."
                       }]
},
       QOS_GLOBAL_SETTINGS :{ 
               TITLE:"Paramètres généraux",
               CONTENT: [{
                           type: "paragraph",
                           content: "Bande passante en Upload - Entrez la bande passante maximale de tranfert Upload fournie par votre fournisseur de services Internet."
                       } ,{                      
                           type: "paragraph",
                           content: "Bande passante en Download- Entrez la bande passante de téléchargement (download) maximale fournie par votre fournisseur de services Internet."
                       }]
},
       QOS_DEVICE_PRIORITY :{ 
               TITLE:"Priorité d'appareil",
               CONTENT: [{
                           type: "paragraph",
                           content: "Choisissez le(s) périphérique(s) au(x)quel(s) vous souhaitez accorder une priorité et pour quelle durée."
                       } ,{                      
                           type: "step",
                           title: "Pour donner la priorité à un appareil",
       content: [ 
                "1. Trouvez l'appareil auquel vous voulez donner la priorité dans la liste et activez Priorité.",
                "2. Sélectionnez la durée de priorité accordée à l'appareil dans la colonne durée."]
}]
},
       SECURITY_FIREWALL :{ 
               TITLE:"Pare-feu",
               CONTENT: [{
                           type: "name",
                           title: "Pare-feu SPI",
                           content: "Le pare-feu SPI (Stateful Packet Inspection) empêche les cyber-attaques et valide le trafic qui traverse le routeur en se basant sur le protocole. Par défaut, cette fonctionnalité est activée."
                       }]
},
       SECURITY_DOS :{ 
               TITLE:"Protection DoS",
               CONTENT: [{
                           type: "name",
                           title: "Protection DoS",
                           content: "La protection DoS (Denial of Service) protège le réseau des attaques par requêtes massives. Vous pouvez filtrer les trois sortes d'attaques suivantes selon vos besoins. Il existe 4 niveaux de filtrage :",
       children: [{                      
                           type: "name",
                           title: "Désactivé",
                           content: "Aucune protection."
                       } ,{                      
                           type: "name",
                           title: "Faible",
                           content: "Niveau de protection faible et impact mineur sur les performances du routeur."
                       } ,{                      
                           type: "name",
                           title: "Moyen",
                           content: "Niveau de protection moyen et impact supportable sur les performances du routeur."
                       } ,{                      
                           type: "name",
                           title: "Fort",
                           content: "Niveau de protection fort et impact notable sur les performances du routeur."
                       }]
} ,{                      
                           type: "name",
                           title: "Filtrage des attaques ICMP-FLOOD",
                           content: "Activer pour se prémunir contre les attaques via ICMP (Internet Control Message Protocol)."
                       } ,{                      
                           type: "name",
                           title: "Filtrage des attaques UDP-FLOOD",
                           content: "Activer pour se prémunir contre les attaques via UDP (User Datagram Protocol)."
                       } ,{                      
                           type: "name",
                           title: "Filtrage des attaques TCP-SYN-FLOOD",
                           content: "Activer pour se prémunir contre les attaques via TCP-SYN (Transmission Control Protocol - Synchronize)."
                       } ,{                      
                           type: "name",
                           title: "Ignorer les paquet Ping sur le port WAN",
                           content: "Activer pour ignorer les requêtes PING depuis le WAN."
                       } ,{                      
                           type: "name",
                           title: "Interdire les paquets Ping depuis le LAN",
                           content: "Activer pour ignorer les requêtes PING depuis le LAN."
                       }]
},
       SECURITY_LIST :{ 
               TITLE:"Liste d'hôtes DoS bloqués",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette liste affiche les adresse IP et MAC des hôtes DoS bloqués."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Contrôle d'accès",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le contrôle d'accès est utilisé pour autoriser ou bloquer l'accès au réseau à des appareils clients spécifiques. Quand un appareil est bloqué, il est incapable de communiquer avec les autres appareils ni d'accéder à internet."
                       } ,{                      
                           type: "step",
                           title: "Pour contrôler les accès",
       content: [ 
                "1. Basculer Sur On pour activer le contrôle parental.",
                "2. si vous voulez aussi contrôler les accès des appareils connectés au réseau invités, basculer sur On le control des appareils d'invités.",
                "3. Sélectionner un mode d'accès correspondant à vos besoins et cliquer sur Sauvegarder :",
                "A. Si vous voulez bloquer l'accès aux appareils de la liste ci-dessous, sélectionner liste noire.",
                "B. Si vous voulez n'autoriser l'accès qu'aux appareils de la liste ci-dessous, sélectionner liste blanche.",
                "4. Dans Appareils dans la section Liste Blanche/Noire, cliquer sur ajouter. Saisir le nom d'appareil et son adresse MAC. Cliquer sur Sauvegarder."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si vous voulez désactiver cet élément, cliquer sur l'icône en forme d'ampoule."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Appareils connectés",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette liste affiche les informations relatives à tous les appareils connectés (inclut les clients du réseau invité s'il est activé)."
                       }]
},
       IPMAC_BIND_SETTING :{ 
               TITLE:"Association IP&MAC",
               CONTENT: [{
                           type: "paragraph",
                           content: "L'association d'adresses IP & MAC (aussi appelée Association ARP) est utile pour gérer l'accès d'un appareil dans le réseau en associant son adresse IP à son adresse MAC. L'association IP & MAC empêche aussi de l'utilisation d'une adresse IP spécifique par un autre appareil."
                       } ,{                      
                           type: "step",
                           title: "Pour paramétrer l'association IP & MAC d'un appareil",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Entrer l'adresse MAC de l'appareil.",
                "3. Saisir l'adresse IP que vous souhaitez associer à l'adresse MAC ci-dessus.",
                "4. Cliquer sur Activer.",
                "5. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
       content: [ 
                "1. Vous ne pouvez pas associer la même adresse IP à plusieurs adresses MAC.",
                "2. Si vous voulez désactiver cet élément, cliquer sur l'icône en forme d'ampoule."]
}]
},
       IPMAC_BIND_ARP :{ 
               TITLE:"Liste ARP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette liste affiche les adresse IP et MAC des appareils clients actuellement connectés."
                       }]
},
       IPV6 :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "name",
                           title: "IPv6",
                           content: "IPv6 (Internet Protocol version 6) est la version la plus récente de l'IP (Internet Protocol) et traite le problème de pénurie d'adresses IPv4."
                       } ,{                      
                           type: "title",
                            title: "Type de Connexion internet : IP Dynamique"
                       } ,{                      
                           type: "name",
                           title: "IP Dynamique",
                           content: "Sélectionner ce type si le FAI utilise une attribution IPv6 dynamique."
                       } ,{                      
                           type: "name",
                           title: "Adresse IPv6/Masque de sous réseau/Passerelle par défaut/DNS Primaire/DNS Secondaire",
                           content: "Ces paramètres sont assignés automatiquement par le serveur DHCPv6 de votre FAI."
                       } ,{                      
                           type: "name",
                           title: "Renouveler",
                           content: "Cliquer pour obtenir de nouveaux paramètres du serveur DHCP IPv6 du FAI."
                       } ,{                      
                           type: "name",
                           title: "Libérer",
                           content: "Cliquer pour libérer les paramètres IP obtenus depuis le serveur DHCPv6 du FAI."
                       } ,{                      
                           type: "name",
                           title: "Obtenir une adresse IPv6",
                           content: "Sélectionner selon les indications du FAI, DHCPv6 pour obtenir une adresse IPv6 non temporaire ou SLAAC pour obtenir une adresse IPv6 générée par le paquet router advertissement."
                       } ,{                      
                           type: "name",
                           title: "Délégation de préfixe",
                           content: "Activer pour obtenir un préfixe de délégation par le serveur DHCPv6 du FAI, Désactiver pour définir manuellement un préfixe de délégation. Les clients dans le réseau local génèreront une IPv6 avec ce préfixe."
                       } ,{                      
                           type: "name",
                           title: "Adresse DNS",
                           content: "Sélectionner Obtenir dynamiquement par le FAI ou Utiliser les adresses DNS suivantes, dans ce cas saisir les adresses DNS fournies par le FAI."
                       } ,{                      
                           type: "title",
                            title: "Type de Connexion internet : IP Statique"
                       } ,{                      
                           type: "name",
                           title: "IP Statique",
                           content: "Sélectionner ce type si le FAI fourni une adresse IPv6 Statique."
                       } ,{                      
                           type: "name",
                           title: "Adresse IPv6/Masque de sous réseau/Passerelle par défaut/DNS Primaire/DNS Secondaire",
                           content: "Saisir les paramètres fournis par votre FAI."
                       } ,{                      
                           type: "name",
                           title: "Taille de la MTU",
                           content: "l'Unité Maximum de Transfert typique par défaut est 1500 octets pour la plupart des réseaux Ethernet. Il est déconseillé de changer la valeur par défaut sauf si votre FAI le requiert."
                       } ,{                      
                           type: "title",
                            title: "Type de connexion internet : Tunnel 6to4"
                       } ,{                      
                           type: "name",
                           title: "Tunnel 6to 4",
                           content: "Sélectionner ce type si le FAI utilise un déploiement 6to4 pour attribuer les adresses."
                       } ,{                      
                           type: "name",
                           title: "Adresse IPv4/Masque de sous réseau IPv4/Passerelle par défaut IPv4/Adresse du tunnel",
                           content: "Ces paramètres sont générés dynamiquement par l'information IPv4 du port WAN après avoir cliqué sur Se connecter."
                       } ,{                      
                           type: "name",
                           title: "Utiliser le serveur DNS suivant",
                           content: "Sélectionner pour saisir manuellement le DNS primaire et/ou secondaire fournis par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Se connecter",
                           content: "Cliquer pour se connecter à internet."
                       } ,{                      
                           type: "name",
                           title: "Se déconnecter",
                           content: "Cliquer pour se déconnecter d'internet."
                       } ,{                      
                           type: "title",
                            title: "Type de Connexion internet : PPPoE"
                       } ,{                      
                           type: "name",
                           title: "PPPoE",
                           content: "Sélectionner ce type si le FAI utilise PPPoEv6 dynamique, et fourni un nom d'utilisateur et un mot de passe."
                       } ,{                      
                           type: "name",
                           title: "Nom d'utilisateur/Mot de passe",
                           content: "Saisir les paramètres fournis par votre FAI."
                       } ,{                      
                           type: "name",
                           title: "Adresse IPv6",
                           content: "Ces paramètres sont assignés automatiquement par le serveur DHCPv6 de votre FAI, après la saisie du nom d'utilisateur, du mot de passe et le clic sur le bouton Se connecter."
                       } ,{                      
                           type: "name",
                           title: "Obtenir une adresse IPv6",
                           content: "Sélectionner selon les indications du FAI, DHCPv6 pour obtenir une adresse IPv6 non temporaire ou SLAAC pour obtenir une adresse IPv6 générée par le paquet router advertissement, ou spécifiée par le FAI pour saisir manuellement l'adresse IPv6."
                       } ,{                      
                           type: "name",
                           title: "Délégation de préfixe",
                           content: "Activer pour obtenir un préfixe de délégation par le serveur DHCPv6 du FAI, Désactiver pour définir manuellement un préfixe de délégation. Les clients dans le réseau local génèreront une IPv6 avec ce préfixe."
                       } ,{                      
                           type: "name",
                           title: "Adresse DNS",
                           content: "Sélectionner pour obtenir dynamiquement par le FAI ou Utiliser les adresses DNS suivantes qui en ce cas devront être obtenues du FAI et manuellement saisies."
                       } ,{                      
                           type: "name",
                           title: "Se connecter",
                           content: "Cliquer pour se connecter à internet."
                       } ,{                      
                           type: "name",
                           title: "Se déconnecter",
                           content: "Cliquer pour se déconnecter d'internet."
                       } ,{                      
                           type: "title",
                            title: "Type de connexion internet : Passthrough (Pont)"
                       } ,{                      
                           type: "paragraph",
                           content: "Sélectionner ce type si le FAI utilise un déploiement réseau ponté (=Passthrough, Bridge). Aucune configuration requise pour ce type de connexion."
                       }]
},
       IPV6_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Excepter pour le mode bridge les autres types de connexion internet requièrent la configuration des paramètres IPv6."
                       } ,{                      
                           type: "name",
                           title: "Type assigné",
                           content: "Sélectionne celui le plus approprié requis par le FAI.",
       children: [{                      
                           type: "name",
                           title: "DHCPv6",
                           content: "Pour attribuer automatiquement des adresses IP aux clients du réseau local.",
       children: [{                      
                           type: "name",
                           title: "Préfixe d'adresse",
                           content: "Saisir le préfixe d'adresse indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Durée du bail",
                           content: "C'est la durée d'affectation de l'adresse IP. Conserver la valeur par défaut de 84600s (24H) ou modifier selon les prérequis du FAI."
                       } ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "C'est l'adresse IP automatiquement assignée par le serveur DCHPv6 du FAI."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC+Stateless DHCP",
       children: [{                      
                           type: "name",
                           title: "Préfixe d'adresse",
                           content: "Saisir le préfixe d'adresse indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "Adresse IP automatiquement assignée par le FAI."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC+RDNSS",
       children: [{                      
                           type: "name",
                           title: "Préfixe d'adresse",
                           content: "Saisir le préfixe d'adresse indiqué par le FAI."
                       } ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "Adresse IP automatiquement assignée par le FAI."
                       }]
},{
    type: "name",
    id:"ipv6_lan_assigned_type_nd_proxy_name",
    title: "ND Proxy",
    content: "Fonction fournissant des proxies aux clients du réseau local basés sur Neighbor Discovery Protocol (NDP)."
}]
}]
},
       IPV6_MAC_CLONE :{ 
               TITLE:"Clonage adresse MAC",
               CONTENT: [{
                           type: "paragraph",
                           content: "Sélectionner la méthode de clonage MAC adéquate."
                       } ,{                      
                           type: "name",
                           title: "Ne pas cloner l'adresse MAC",
                           content: "NE change pas l'adresse MAC par défaut du routeur, au cas ou le FAI n'associe pas l'adresse IP attribuée à l'adresse MAC."
                       } ,{                      
                           type: "name",
                           title: "Cloner l'adresse MAC de l'ordinateur",
                           content: "Copie l'adresse MAC de l'ordinateur connecté au routeur, au cas ou le FAI associe l'adresse IP attribuée à l'adresse MAC de l'ordinateur."
                       } ,{                      
                           type: "name",
                           title: "Utiliser une adresse MAC personnalisée",
                           content: "Saisir l'adresse MAC manuellement, au cas ou le FAI associe l'adresse IP attribuée à une adresse MAC spécifique."
                       }]
},
       TIME_SETTING :{ 
               TITLE:"Paramètres horaires",
               CONTENT: [{
                           type: "paragraph",
                           content: "Les paramètres horaires vous permettent de définir l'heure système du routeur. Une fois modifiée, l'heure système sera celle prise en compte par les fonctions basées sur l'heure tel le contrôle parental."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Vous pouvez basculer sur ON pour activer la fonction horaire 24H avant de configurer le routeur, cela influera sur les fonctions et configurations basées sur l'heure."
                       } ,{                      
                           type: "title",
                            title: "Heure système"
                       } ,{                      
                           type: "step",
                           title: "Pour obtenir l'heure via internet",
       content: [ 
                "Sélectionné par défaut, Obtenir via internet vous permet de mettre à jour l'heure système via internet.",
                "1. Sélectionner Obtenir depuis internet.",
                "2. Sélectionner le fuseau horaire depuis la liste déroulante.",
                "3. Dans le champ Serveur NTP I, saisir le nom de domaine ou l'adresse IP du serveur NTP désiré.",
                "4. Dans le champ Serveur NTP secondaire, saisir l'adresse IP ou le nom de serveur NTP secondaire de votre choix (Optionnel)",
                "5. Cliquer sur le boutonObtenir.",
                "6. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "step",
                           title: "Pour obtenir l'heure via l'ordinateur",
       content: [ 
                "Cette fonction vous permet d'obtenir l'heure système depuis un l'ordinateur connecté. Vérifiez l'exactitude de l'heure de l'ordinateur au préalable.",
                "Sélectionner obtenir depuis l'ordinateur et cliquer sur Sauvegarder."]
} ,{                      
                           type: "step",
                           title: "Pour définir l'heure manuellement",
       content: [ 
                "Si l'appareil ne peut récupérer automatiquement l'heure depuis internet ou un ordinateur, vous pouvez la paramétrer manuellement.",
                "1. Sélectionner manuellement",
                "2. Saisir la date et l'heure actuelle.",
                "3. Cliquer sur bouton Sauvegarde."]
}]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Heure d'été",
                           content: "Cette fonction peu synchroniser automatiquement l'heure système avec la fonction heure d'été/hiver."
                       } ,{                      
                           type: "step",
                           title: "Pour définir les paramètres liés à l'heure d'été",
       content: [ 
                "1. Sélectionner Activer l'heure d'été.",
                "2. Spécifier la plage de dates pendant laquelle l'heure d'été s'applique.",
                "3. Cliquer sur bouton Sauvegarde."]
}]
},
       DIGNOSTIC :{ 
               TITLE:"Diagnostics",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le routeur dispose des outils PING et TRACEROUTE pour vous aider à dépanner certains problèmes réseaux."
                       } ,{                      
                           type: "title",
                            title: "Ping & Traceroute"
                       } ,{                      
                           type: "paragraph",
                           content: "L'outil PING envoi des paquets à une adresse IP cible ou à un nom de domaine et enregistre les résultats, tels que le nombre de paquets envoyés et reçus et le temps de réponse."
                       } ,{                      
                           type: "paragraph",
                           content: "L'outil TRACEROUTE envoi des paquets à une adresse IP ou à un nom de domaine cible et affiche le nombre de saut et le temps mis à atteindre la destination."
                       } ,{                      
                           type: "paragraph",
                           content: "Vous pouvez utiliser PING ou TRACEROUTE pour un appareil du réseau local en utilisant son adresse IP ou son nom de domaine."
                       } ,{                      
                           type: "step",
                           title: "Pour un diagnostic via PING",
       content: [ 
                "1. Sélectionner l'outil de diagnostique : PING.",
                "2. Saisir l'adresse IP ou le nom de domaine cible.",
                "3. Cliquer sur l'icône flèche pour ouvrir le menu avancé et spécifier le nombre de PING et la taille du paquet PING. (Optionnel)",
                "4. Cliquer sur démarrer."]
} ,{                      
                           type: "step",
                           title: "Pour un diagnostic via Traceroute",
       content: [ 
                "1. Sélectionner l'outil de diagnostique : TRACEROUTE.",
                "2. Saisir l'adresse IP ou le nom de domaine cible.",
                "3. Cliquer sur l'icône flèche pour ouvrir le menu avancé et spécifier le nombre de sauts (à atteindre) dans le champ Traceroute TTL (Time to live) Max. Par défaut la valeur est 20. (Optionnel)",
                "4. Cliquer sur démarrer."]
}]
},
       PORT_MIRROR :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                            title: "Miroir de Port"
                       } ,{                      
                           type: "paragraph",
                           content: "Le miroir de port se réfère au processus qui transfert des copies de paquets d'un port source vers un port destination. Usuellement le port destination est connecté à un appareil de diagnostique, qui est utilisé pour analyser les paquets recopiés afin de surveiller et dépanner un réseau."
                       } ,{                      
                           type: "step",
                           title: "Pour transférer des copies des paquets au port spécifié",
       content: [ 
                "1. Activer le miroir de port.",
                "2. Sélectionner les ports sources à écouter.",
                "3. Sélectionner un port comme port destination de l'écoute.",
                "4. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Un port ne peut être et le port source et le port destination."
                       }]
},
       FIRMWARE :{ 
               TITLE:"Mise à jour logicielle",
               CONTENT: [{
                           type: "paragraph",
                           content: "La mise à jour du routeur installe une version logicielle implémentant de nouvelles fonctions ou des correctifs. Il est recommandé de mettre le routeur à jour avec la dernière version logicielle pour profiter de meilleures performances."
                       } ,{                      
                           type: "step",
                           title: "Consulter ce qui suit pour éviter les échecs de mise à jour :",
       content: [ 
                "Avant de procéder",
                "1. Assurez vous que vous disposez d'une connexion stable entre le routeur et l'ordinateur. Il n'est pas recommandé de procéder en Wi-Fi.",
                "2. Assurez vous que vous avez déconnecté tous les périphériques USB du routeur.",
                "3. N'oubliez pas de sauvegarder la configuration actuelle du routeur.",
                "Pendant la mise à jour",
                "Maintenir le routeur SOUS TENSION et ce jusqu'à l'achèvement de la mise à jour."]
}]
},
       FIRMWARE_UPGRADE_ONLINE :{ 
               TITLE:"Pour une mise à jour logicielle en ligne",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Cliquer sur Mise à à jour si le bouton correspondant est afficher, confirmer ensuite. Le routeur va télécharger et mettre à jour son logiciel interne automatiquement. Vous pouvez aussi cliquer sur Vérifier les mises à jours afin de rechercher la dernière version logicielle disponible."]
}]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Pour une mise à jour logicielle manuelle",
               CONTENT: [{
                           type: "step",
       content: [ 
                "1. Cliquer sur Support en bas de page et télécharger la mise à jour logicielle sur votre ordinateur. Assurez vous que le fichier téléchargé correspond à la version matérielle du routeur indiquée sur cette page.",
                "2. Cliquez sur Naviguer et sélectionnez le fichier de mise à jour (préalablement désarchivé si nécessaire).",
                "3. Cliquer sur Mettre à jour."]
} ,{                      
                           type: "paragraph",
       content: [ 
                "La mise à jour logicielle prend quelques instants pour s'achever. Le routeur redémarrera automatiquement à l'issue de la mise à jour."]
}]
},
       BACKUP :{ 
               TITLE:"Sauvegarde et restauration",
               CONTENT: [{
                           type: "paragraph",
                           content: "La fonction de sauvegarde et de restauration vous permet de sauvegarder la configuration actuelle pour une récupération ou tout simplement reconfigurer le routeur à ses paramètres par défaut."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Merci de NE PAS mettre le routeur hors tension pendant les phases de sauvegarde ou de restauration de la configuration."
                       } ,{                      
                           type: "title",
                           title: "Sauvegarde",
                           content: "Il est fortement recommandé de sauvegarder la configuration actuelle, au cas ou il serait nécessaire de revenir à un état antérieur."
                       } ,{                      
                           type: "step",
                           title: "Pour sauvegarder la configuration actuelle",
       content: [ 
                "1. Cliquer sur bouton Sauvegarde.",
                "2. Attendre que le routeur sauvegarde la configuration actuelle."]
}]
},
       RESTORE :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Restauration",
                           content: "Vous pouvez restaurer le routeur à un état antérieur de configuration à l'aide d'un fichier de config préalablement sauvegardé."
                       } ,{                      
                           type: "step",
                           title: "Pour restaurer une configuration",
       content: [ 
                "1. Cliquer sur le bouton Naviguer.",
                "2. Naviguer jusqu'à l'emplacement de la sauvegarde et la sélectionner.",
                "3. Cliquer sur Restaurer."]
}]
},
       FACTORY :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Paramètres par défaut",
       content: [ 
                "Restaurer le routeur à ses paramètres d'usine supprimera toutes les modifications apportées et les remplacera par les paramètres d'usine. Par exemple, tous les paramètres : Wi-Fi, de contrôle parental, d'information réseau seront effacés.",
                "Après une restauration aux paramètres par défaut, vous devrez redéfinir le mot de passe requis pour l'accès à la page d'administration Web du routeur."]
}]
},
       REBOOT :{ 
               TITLE:"Programmation du redémarrage.",
               CONTENT: [{
                           type: "paragraph",
                           content: "La fonction de programmation du redémarrage permet d'améliorer les performances du routeur par l'effacement de sa mémoire de travail. Vous pouvez redémarrer manuellement le routeur ou paramétrer des redémarrages réguliers."
                       } ,{                      
                           type: "step",
                           title: "Pour redémarrer manuellement",
       content: [ 
                "Cliquer sur Redémarrer et attendre que le routeur redémarre."]
} ,{                      
                           type: "step",
                           title: "Pour programmer l'heure de redémarrage",
       content: [ 
                "1. Activer la programmation du redémarrage.",
                "2. Définir quand et à quelle fréquence le routeur redémarrera en spécifiant les paramètres dans les champs dédiés.",
                "3. Cliquer sur bouton Sauvegarde."]
}]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Administration",
               CONTENT: [{
                           type: "paragraph",
                           content: "L'administration vous permet de gérer les permissions des clients connecté et leurs identifiants d'accès au routeur."
                       } ,{                      
                           type: "name",
                           title: "Gestion de compte",
                           content: "Cette fonction vous permet de modifier le mot de passe.",
       children: [{                      
                           type: "step",
                           title: "Pour modifier le mot de passe",
       content: [ 
                "1. Saisir l'ancien mot de passe.",
                "2. Saisir le nouveau mot de passe.",
                "3. Saisir le nouveau mot de passe pour le confirmer.",
                "4. Cliquer sur bouton Sauvegarde."]
}]
}]
},
       ADMIN_RECOVERY :{ 
               TITLE:"Récupération du Mot de passe",
               CONTENT: [{
                           type: "name",
                           title: "Récupération du mot de passe par défaut",
                           content: "La récupération du mot de passe vous permet de récupérer le mot de passe d'authentification par défaut sans devoir restaurer les paramètres par défaut du routeur.",
       children: [{                      
                           type: "step",
                           title: "Pour modifier le mot de passe",
       content: [ 
                "1. Activer la fonction de récupération du mot de passe par défaut.",
                "2. Dans le champ De, saisir une adresse email valide pour envoyer un code de vérification destiné à récupérer les informations d'authentification.",
                "3. Dans le champ A, saisir une adresse email valide destinée à la réception du code de vérification.",
                "4. Saisir les paramètres du serveur SMTP pour les emails émis (De).",
                "5. Si le serveur d'envoi requiert un chiffrement, vous devrez cocher la case Activer l'authentification et saisir le nom d'utilisateur et mot de passe associé fournis par votre hébergeur de messagerie.",
                "6. Cliquer sur bouton Sauvegarde."]
}]
}]
},
       ADMIN_LOCAL :{ 
               TITLE:"Administration locale",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette fonction autorise les appareils locaux à accéder et administrer le routeur."
                       } ,{                      
                           type: "name",
                           id: "local_management_https",
                           title: "Administration locale en HTTPS",
                           content: "Activer l'administration via HTTPS si vous souhaitez accéder au routeur via HTTP et HTTPS, ou laisser désactivé si vous souhaitez accéder au routeur uniquement en HTTP."
                       } ,{                      
                           type: "name",
                           title: "Accès autorisé à tous les appareils",
                           content: "Activer ce choix pour permettre à quiconque connecté au réseau d'accéder à l'interface de ce routeur, ou Désactiver pour n'autoriser que certains appareils."
                       } ,{                      
                           type: "name",
                           title: "Adresse MAC",
                           content: "Adresse MAC de l'appareil autorisé."
                       } ,{                      
                           type: "name",
                           title: "Description",
                           content: "Description de l'appareil autorisé."
                       } ,{                      
                           type: "name",
                           title: "Etat",
                           content: "Affiche l'état actuel de la limitation d'accès à l'administration locale (Activée/Inactive)."
                       } ,{                      
                           type: "name",
                           title: "Modifier",
                           content: "Affiche les options pour modifier ou supprimer l'appareil sélectionné de la liste."
                       } ,{                      
                           type: "step",
                           title: "Pour ajouter un appareil autorisé à la liste",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Cliquer sur Visualiser les appareils présents pour choisir un appareil ou saisir l'adresse MAC d'un appareil dans le champ Adresse MAC.",
                "3. Saisir une description pour l'appareil.",
                "4. Cliquer sur Activer.",
                "5. Cliquer sur OK."]
} ,{                      
                           type: "step",
                           title: "Pour modifier ou supprimer un appareil de la liste",
                           content: "Dans la liste, cliquer sur l'icône Editer ou sur l'icône Poubelle correspondant à l'appareil que vous souhaitez Editer ou Modifier."
                       } ,{                      
                           type: "step",
                           title: "Pour supprimer plusieurs appareils",
                           content: "Sélectionner tous les appareils concernés et cliquer sur Supprimer."
                       }]
},
       ADMIN_REMOTE_WITHOUT_HTTPS :{ 
               TITLE:"Administration distante",
               CONTENT: [{
                           type: "name",
                           title: "Administration distante",
                           content: "La fonction d'administration à distance permet à des appareils distants d'accéder au routeur pour l'administrer.",
       children: [{                      
                           type: "step",
                           title: "Pour interdire à tout appareil distant d'administrer le routeur",
                           content: "Sélectionner désactiver l'administration distante et cliquer sur Sauvegarder."
                       } ,{                      
                           type: "step",
                           title: "Pour autoriser tout appareil distant à administrer le routeur",
       content: [ 
                "1. Cocher la case Administration distante pour tous les appareils.",
                "2. Saisir le port d'administration distante (1024-65535 ou 80) par lequel les clients distants pourront accéder à l'interface du routeur.",
                "3. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "step",
                           title: "Pour autoriser un appareil désigné à administrer le routeur",
       content: [ 
                "1. Cocher la case Administration distante pour un appareil,",
                "2. Saisir le port d'administration distante (1024-65535 ou 80) par lequel le client distant pourra accéder à l'interface du routeur.",
                "3. Saisir l'adresse IP du client autorisé à administrer le routeur à distance",
                "4. Cliquer sur bouton Sauvegarde."]
}]
}]
},
       ADMIN_REMOTE :{ 
               TITLE:"Administration distante",
               CONTENT: [{
                           type: "paragraph",
                           content: "L'administration à distance vous permet d'accéder et de configurer le routeur à distance depuis internet."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step_title",
                           content: "Pour paramétrer l'administration distante"
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step1",
                           content: "1. Cocher la case pour activer l'administration à distance."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step2",
                           content: "2. conserver les ports HTTPS et HTTPS comme paramètres par défaut."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step3",
                           content: "3. Sélectionner de décider quel appareil distant peut accéder au routeur :",
       children: [{                      
                           type: "name",
                           title: "Tous les appareils",
                           content: "Tout appareil distant peut accéder au routeur."
                       } ,{                      
                           type: "name",
                           title: "Appareil désigné",
                           content: "Saisir l'adresse IP de l'appareil distant autorisé à accéder au routeur."
                       }]
} ,{                      
                           type: "paragraph",
                           id: "admin_remote_step4",
                           content: "4. Cliquer sur bouton Sauvegarde."
                       } ,{                      
                           type: "paragraph",
                           content: "Maintenant vous pouvez administrer le routeur à distance via l'adresse affichée sous adresse Web d'administration."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si un message d'alerte apparait quand vous accédez à l'adresse ci-dessous à distance, cliquez sur \"Faire confiance\" (ou une option similaire) pour continuer."
                       }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"DEL",
               CONTENT: [{
                           type: "paragraph",
                           content: "Une fois le mode nuit activé, les DELs seront éteintes durant la période définie sans que cela n'altère le fonctionnement ni les performances du routeur."
                       } ,{                      
                           type: "step",
                           title: "Pour activer le mode nuit",
       content: [ 
                "1. Sélectionner Activer le mode nuit.",
                "2. Spécifier la plage horaire pendant laquelle les DEL doivent être éteintes.",
                "3. Cliquer sur bouton Sauvegarde."]
}]
},
       SYSTEM_LOG :{ 
               TITLE:"Messages Système",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le journal d'évènements affiche les évènements récents concernant le routeur. La liste comporte le type, le niveau et la nature de l'évènement, elle peut être filtrée. Vous pouvez sauvegarder le journal d'évènements localement ou l'envoyer par email."
                       } ,{                      
                           type: "step",
                           title: "Pour sauvegarder les évènements système sur l'ordinateur local",
       content: [ 
                "1. Définir le type et le niveau minimal d'évènements système à filtrer. La liste de niveaux est en ordre décroissant, avec le niveau le plus bas en dernier.",
                "2. Cliquer sur Sauvegarder les évènements pour exporter le journal des évènements système sur cet ordinateur."]
} ,{                      
                           type: "step",
                           title: "Pour recevoir les évènements système par email.",
       content: [ 
                "1. Définir le type et le niveau d'évènements système à filtrer. La liste de niveaux est en ordre décroissant, avec le niveau le plus bas en dernier.",
                "2. Cliquer sur paramètres Email.",
                "3. Dans le champ Depuis, saisir une adresse email valide qui sera utilisée comme adresse email originaire.",
                "4. Dans le champ à, saisir une adresse email valide qui sera utilisée comme adresse email destinataire.",
                "5. Saisir l'adresse du serveur SMTP de l'email sortant (De).",
                "Remarque : si l'email sortant requiert une authentification, cocher la case Authentification et saisir l'identifiant (adresse email en général) et le mot de passe associé.",
                "6. Si vous souhaitez recevoir régulièrement, le journal des évènements système par email, cocher la case Activer Email automatique et définissez une heure (format 24h) ou un intervalle de temps.",
                "Si vous voulez recevoir le journal d'évènement immédiatement, cliquer sur envoyer journal par email maintenant.",
                "7. Cliquer sur bouton Sauvegarde."]
}]
},
       TRAFFIC_STATISTIC :{ 
               TITLE:"Moniteur de Traffic",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche le trafic réseau d'un appareil ou de tous les appareils depuis les 10 minutes / 24H / 7 Jours qui précèdent."
                       }]
},
       TRAFFIC_STATISTIC_LIST :{ 
               TITLE:"Moniteur de trafic",
               CONTENT: [{
                           type: "paragraph",
                           content: "La liste est définie par le type de connexion des appareils : Filaire ou Wi-Fi."
                       }]
},
       SYSTEM_PARA_WIRELESS :{ 
               TITLE:"Paramètre système",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wifi_title",
                           title: "Wi-Fi 2.4GHz/5GHz",
                           content: "Cette section vous permet de configurer les paramètres de règles de transmissions dans les réseaux Wi-Fi. Il est recommandé de conserver les paramètres par défaut si vous ne savez pas quels sont les bons paramètres."
                       } ,{                      
                           type: "name",
                           title: "Intervalle entre balises",
                           content: "Saisir une valeur entre 40 et 1000 ms pour déterminer l'intervalle entre balises qui sont des paquets émis par le routeur pour synchroniser le réseau . La valeur par défaut est 100."
                       } ,{                      
                           type: "name",
                           title: "Seuil RTS",
                           content: "Saisir une valeur entre 1 et 2346 pour déterminer la taille des paquets de données transmis par le routeur. Par défaut le seuil RTS (Request To Send) est 2346 . Si la taille du paquet est supérieure à la valeur du seuil, le routeur envoi une requête au client destinataire et négocie l'envoi d'une trame de donnée, sinon il envoi le paquet immédiatement."
                       } ,{                      
                           type: "name",
                           title: "Intervalle DTIM",
                           content: "Cette valeur détermine l'intervalle DTIM (Delivery Traffic Indication Message). Saisir une valeur comprise entre 1 et 15, la valeur par défaut : 1 indique que l'intervalle DTIM est identique à l'intervalle entre balises."
                       } ,{                      
                           type: "name",
                           title: "Intervalle de génération",
                           content: "Entrer le nombre de secondes (30 au minimum) qui s'écoule entre deux renouvellement de clés de chiffrement, la valeur par défaut qui est de 0 désactive le renouvellement."
                       } ,{                      
                           type: "name",
                           title: "Fonction WMM",
                           content: "La fonction WMM garanti que les paquets à priorité élevée seront transmis préférentiellement. Il est fortement conseillé de conserver le réglage par défaut qui active cette fonction."
                       } ,{                      
                           type: "name",
                           title: "Fonction GI court",
                           content: "Cette fonction est activée par défaut afin d'augmenter le débit en fonction de la durée de l'intervalle de garde."
                       } ,{                      
                           type: "name",
                           title: "Fonction Isolement",
                           content: "Si vous voulez confiner et les appareils wifi connectés au réseau et les restreindre en les empêchant d'interagir entre eux, tout en ayant accès à internet, cocher la case Activer l'isolation des client Wi-Fi."
                       } ,{
                            type: "name",
                            title: "Réduction d'interférence du port USB 3.0",
                            content: "Cocher cette case pour activer la réduction d'interférence du port USB 3.0."
                       }]
},
       SYSTEM_PARA_WDS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wds_title",
                            title: "WDS 2,4GHz/5GHz"
                       } ,{                      
                           type: "step",
                           title: "Pour activer WDS",
                           content: "La fonction de pontage WDS (Wireless Distribution System) permet l'extension de portée Wi-Fi en pontant le routeur avec un Point d'accès (PA) source en Wi-Fi."
                       } ,{                      
                           type: "step",
       content: [ 
                "1. Sélectionner pour activer la fonction de pontage WDS.",
                "2. Pour ponter un réseau par la fonction de détection : Cliquer sur détecter pour que s'affiche la liste des réseaux détectés puis sélectionner le réseau auquel vous voulez ponter le routeur. Les champs : SSID (nom de réseau), l'adresse MAC, et sécurité seront complétés automatiquement.",
                "Ou pour ponter un réseau manuellement : Saisir le SSID (nom de réseau Wi-Fi), l'adresse MAC et le mode WDS du réseau à ponter. Sélectionner le type de sécurité et saisir les paramètres associés, qui sont impérativement identiques à ceux du réseau à ponter.",
                "3. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si vous n'est pas sûr à propos du mode WDS, conserver l'option à sa valeur par défaut : auto."
                       }]
},
       SYSTEM_PARA_WPS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "WPS",
                           content: "Le WPS (Wi-Fi Protected Setup) vous permet de connecter facilement les appareils qui supportent cette fonction avec le routeur en pressant le bouton WPS de ce dernier. Activez la fonction puis cliquez sur Sauvegarder."
                       }]
},
       SYSTEM_PARA_NAT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "NAT",
                           content: "Cette fonction est activée par défaut. Il est recommandé de conserver le paramétrage par défaut. Si vous le désactivez, vous pourriez rompre l'accès à internet."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Quand le NAT est désactivé, les configurations relatives aux translations NAT sont inactives."
                       } ,{                      
                           type: "name",
                           id: "sys_para_nat_boost",
                           title: "Boost NAT",
                           content: "Cocher la case Activer NAT Boost et cliquer sur Sauvegarder pour garantir que le routeur offre le meilleur débit."
                       } ,{                      
                           type: "note",
                           id: "sys_para_nat_boost_note",
                           title: "Remarque",
                           content: "Quand le Boost NAT est actif, la QoS et les statistiques de trafic sont désactivés automatiquement."
                       }]
},
       SYSTEM_PARA_DOS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Paramètres de protection DoS",
                           content: "La protection DoS protège le routeur contre les attaques de type : ICMP-FLOOD, UDP-FLOOD and TCP-FLOOD."
                       } ,{                      
                           type: "name",
                           title: "Seuil Paquets ICMP-FLOOD",
                           content: "Saisir une valeur comprise entre 5 et 7200 Paquets pour déclencher la protection ICMP-FLOOD immédiatement quand le nombre de paquets ICMP excède la valeur de seuil définie."
                       } ,{                      
                           type: "name",
                           title: "Seuil Paquets UDP-FLOOD",
                           content: "Saisir une valeur comprise entre 5 et 7200 Paquets pour déclencher la protection UDP-FLOOD immédiatement quand le nombre de paquets UDP excède la valeur de seuil définie."
                       } ,{                      
                           type: "name",
                           title: "Seuil TCP-SYN-FLOOD",
                           content: "Saisir une valeur comprise entre 5 et 7200 Paquets pour déclencher la protection TCP-SYN FLOOD immédiatement quand le nombre de paquets TCP excède la valeur de seuil définie."
                       }]
},
       SYSTEM_PARA_DUPLEX :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Duplex",
                           content: "Sélectionner le type de Duplex depuis la liste déroulante et cliquer sur Sauvegarder."
                       }]
},
       SYSTEM_PARA_LED :{ 
               TITLE:"DEL",
               CONTENT: [{
                           type: "name",
                           title: "Activer le mode nuit",
                           content: "Sélectionnez cette case pour éteindre les LED pendant la période Mode nuit sans affecter la performance du routeur."
                       } ,{                      
                           type: "name",
                           title: "Etendue du mode nuit",
                           content: "Spécifiez la période à laquelle le Mode nuit s’applique."
                       } ,{                      
                           type: "paragraph",
                           content: "Cliquer sur Sauvegarder pour enregistrer tous vos paramètres."
                       }]
},
       OPEN_VPN :{ 
               TITLE:"OpenVPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Avec OpenVPN, vous pouvez utiliser internet de façon sécurisée pour accéder à votre réseau quand vous êtes en déplacement. Pour utiliser le service VPN, vous devez définir un nom de domaine dynamique ou utiliser une adresse IP WAN statique sur le routeur. L'heure système doit être synchronisée via internet."
                       } ,{                      
                           type: "name",
                           title: "Type de service",
                           content: "Sélectionnez le protocole de communication pour le serveur OpenVPN : UDP ou TCP."
                       } ,{                      
                           type: "name",
                           title: "Port de service",
                           content: "Saisir un numéro de port de communication compris entre 1024 et 65535. Le port par défaut commun est 1194"
                       } ,{                      
                           type: "name",
                           title: "Sous-réseau/masque réseau VPN",
                           content: "Saisissez la plage d'adresses IP qui peuvent être allouées aux clients du serveur OpenVPN."
                       } ,{                      
                           type: "name",
                           title: "Accès clients",
                           content: "Sélectionner le type d'accès pour le client OpenVPN.",
       children: [{                      
                           type: "name",
                           title: "Réseau domestique exclusivement",
                           content: "Le client ne peut accéder qu'au réseau domestique. La route par défaut du client ne sera pas modifiée."
                       } ,{                      
                           type: "name",
                           title: "Réseau Internet et domestique",
                           content: "Le client peut accéder au réseau domestique, à des sites ou des services internet avec des restrictions géographiques quand vous êtes à l'étranger. La route par défaut du client sera modifiée."
                       }]
}]
},
       OPEN_VPN_CERTIFICATE :{ 
               TITLE:"Certifier",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Utilise ce certificat pour obtenir des informations et l'identité de la connexion VPN pour l'ordinateur distant.",
                "Cliquez pour générer un nouveau certificat."]
}]
},
       OPEN_VPN_CONF :{ 
               TITLE:"Fichier de configuration",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Les clients distants devront utiliser le fichier de configuration pour accéder à votre routeur.",
                "Cliquez sur ce bouton pour enregistrer le fichier de configuration OpenVPN qui peut être réutilisé pour ajouter des nouvelles connexions VPN."]
}]
},
       OPEN_VPN_GUIDE :{ 
               TITLE:"Guide d'installation de client VPN",
               CONTENT: [{
                           type: "step",
                           title: "Pour connecter les appareils clients au serveur OpenVPN :",
       content: [{                      
                           type: "paragraph",
                           content: "Avant de configurer le serveur OpenVPN, configurez (recommandé) le service DNS Dynamique ou assignez une adresse IP Statique au port WAN. Assurez vous que le port externe des paramètres NAT n'est pas le port de service et que l'heure système du routeur soit synchronisée avec internet."
                       },
                "1) Cocher activer le serveur VPN",
                "2. Configurer les paramètres du serveur OpenVPN (Type de service, Accès client et Masque de sous-réseau/Sous réseau VPN) puis cliquer sur Sauvegarder.",
                "3. Cliquer sur Exporter pour sauvegarder une copie du fichier de configuration",
                "4. Sur l'appareil client, télécharger et installer le client OPENVPN depuis <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a>",
                "Les plateformes officiellement supportées incluent Windows MAC OS et Linux.",
                "5. Lancer le client OpenVPN et ajouter une connexion VPN utilisant le fichier de configuration préalablement enregistré pour connecter l'appareil client au serveur VPN."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Pour en savoir plus sur les clients OpenVPN, visitez <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
                       }]
},
       PPTP_VPN :{ 
               TITLE:"VPN PPTP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Avec un VPN PPtP, vous pouvez utiliser internet de façon sécurisée pour accéder à votre réseau quand vous êtes en déplacement. Certains FAI empêchent ce type de liaisons. Pour utiliser le service VPN, vous devez définir un nom de domaine dynamique ou utiliser une adresse IP WAN statique sur le routeur. L'heure système doit être synchronisée via internet."
                       } ,{                      
                           type: "name",
                           title: "Adresse IP du client",
                           content: "Saisissez la plage d'adresses IP qui peuvent être allouées aux clients du serveur PPTP VPN."
                       } ,{                      
                           type: "name",
                           title: "Nom d'utilisateur et mot de passe",
                           content: "Saisissez le nom d'utilisateur et le mot de passe pour authentifier les clients du serveur PPTP VPN."
                       }]
},
       PPTP_VPN_GUIDE :{ 
               TITLE:"Guide d'installation de client VPN",
               CONTENT: [{
                           type: "step",
                           title: "Pour connecter les appareils clients au serveur PPTP VPN",
       content: [{                      
                           type: "paragraph",
                           content: "Avant de configurer le serveur VPN PPTP, configurez (recommandé) le service DNS Dynamique ou assignez une adresse IP Statique au port WAN. Assurez vous que le port externe des paramètres NAT n'est pas le port 1723 et que l'heure système du routeur soit synchronisée avec internet."
                       },
                "1) Cocher activer le serveur VPN",
                "2. Configurer les paramètres du serveur VPN PPTP et cliquer sur Sauvegarder.",
                "3. Sur les appareils clients, créer une connexion VPN PPTP. Les plateformes supportées incluent : Windows OS X Linux, iOS et Android.",
                "4. Lancer le programme VPN PPTP, ajouter une connexion et saisir le nom de domaine du service DDNS, ou l'adresse IP assignée au port WAN, pour connecter l'appareil client au serveur VPN PPTP."]
}]
},
       VPN_CONNNECTION :{ 
               TITLE:"Connexions VPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette page contient les clients qui sont couramment connectés aux serveurs OPenVPN et PPTP VPN hébergés sur le routeur."
                       }]
},
       BASIC_NETWORK :{ 
               TITLE:"Cartographie du réseau",
               CONTENT: [{
                           type: "paragraph",
                           content: "Dans la cartographie réseau, vous pouvez visualiser l'état de la connexion actuelle et les informations relatives aux appareils connectés."
                       }]
},
       BASIC_NETWORK_INTEREST :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations sur la connexion internet."
                       }]
},
       BASIC_NETWORK_ROUTER :{ 
               TITLE:"Routeur",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations des réseaux Wi-Fi et ports Ethernet."
                       }]
},
       BASIC_NETWORK_CLIENTS :{ 
               TITLE:"Clients filaires/Wi-Fi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche le nom du réseau (modifiable), les adresses IP et MAC des clients connectés au routeur."
                       }]
},
       BASIC_NETWORK_PRINTER :{ 
               TITLE:"Imprimante",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche le nom de l'imprimante connectée au routeur via un port USB."
                       }]
},
       BASIC_NETWORK_USB :{ 
               TITLE:"Disque USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations relatives au disque USB connecté au routeur par un port USB."
                       }]
},
       BASIC_NETWORK_ONEMESH :{ 
               TITLE:"Appareils Mesh",
               CONTENT: [{
                           type: "name",
                           title: "Nom",
                           content: "Affiche le nom de l'appareil Mesh connecté au routeur."
                       } ,{                      
                           type: "name",
                           title: "Modèle",
                           content: "Affiche le modèle de l'appareil Mesh."
                       } ,{                      
                           type: "name",
                           title: "Etat",
                           content: "Affiche le statut de connexion de l'appareil Mesh."
                       } ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "Affiche l'emplacement de l'appareil Mesh."
                       } ,{                      
                           type: "paragraph",
                           content: "You can click <span class=\"one-mesh-modify-icon\"></span> to modify the device information."
                       }]
},
       BASIC_SPEED_TEST :{ 
               TITLE:"Test de vitesse",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette fonctionnalité teste le débit de téléchargement actuel et celui de téléchargement provenant de votre fournisseur d'accès, et vous fournit des conseils utiles sur les possibilités offertes par votre réseau Internet."
                       } ,{                      
                           type: "paragraph",
                           content: "Astuce: pour obtenir un résultat plus précis, veuillez fermer d'autres applications et programmes."
                       } ,{                      
                           type: "paragraph",
                           content: "Historique - Un enregistrement des précédents tests de débit."
                       } ,{                      
                           type: "paragraph",
                           content: "Testez de nouveau - Cliquez pour effectuer un test de débit."
                       }]
},
       BASIC_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cliquer sur détection automatique ou sélectionner le type de connexion internet manuellement. Puis saisir les paramètres adéquats fournis par le FAI."
                       }]
},
       BASIC_WIRELESS_SMART_CONNECT :{ 
               TITLE:"Connexion intelligente",
               CONTENT: [{
                           type: "paragraph",
                           content: "Sélectionnez cette case pour activer la connexion intelligente. Cette fonction aide les dispositifs à fonctionner plus vite en les attribuant aux meilleures bandes sans-fil dans les conditions réelles pour équilibrer les demandes du réseau."
                       }]
},
       BASIC_WIRELESS :{ 
               TITLE:"Paramètres Wi-Fi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Vous pouvez configurer les paramètres Wi-Fi (SSID, mot de passe etc...)"
                       } ,{                      
                           type: "name",
                           title: "Nom de réseau (SSID)",
                           content: "Nous vous recommandons de modifier le nom du réseau Wi-Fi (SSID). Ce champ différencie minuscules et majuscules"
                       } ,{                      
                           type: "name",
                           title: "Masquer le SSID",
                           content: "Sélectionner si vous ne voulez pas diffuser le SSID des réseaux Wi-Fi 2.4/5GHz. En ce cas pour vous connecter à ces réseaux il faudra saisir manuellement leur nom."
                       } ,{                      
                           type: "name",
                           title: "Mot de passe",
                           content: "Définissez un Mot de passe Wi-Fi comprenant 8 à 63 caractères ASCII ou 8 à 64 caractères hexadécimaux (0-9,a-f,A-F) Attention les majuscules minuscules sont différenciées."
                       }]
},
       BASIC_DEVICE_SETTINGS :{ 
               TITLE:"Périphérique de stockage USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette fonction vous permet de partager les périphériques de stockage USB avec plus clients du réseau local où via internet."
                       } ,{                      
                           type: "title",
                           title: "Disques USB",
                           content: "La section Paramètres d'appareil affiche les information relatives au périphérique de stockage USB connecté au routeur. Une clé USB ne contient généralement qu'un seul volume"
                       } ,{                      
                           type: "name",
                           title: "Rechercher",
                           content: "Le routeur détecte automatiquement tout nouveau périphérique branché, si toutefois ce n'est pas le cas, cliquer sur ce bouton pour forcer la détection et rafraichir le contenu de cette page.",
       children: [{                      
                           type: "note",
                           title: "Remarque",
                           content: "Une aire grisée représente un volume désactivé. Vous pouvez cliquer sur l'aire pour partager ce volume."
                       }]
} ,{                      
                           type: "name",
                           title: "Enlever",
                           content: "Cliquer sur ce bouton pour éjecter le périphérique de stockage USB en toute sécurité avant de le débrancher du routeur.",
       children: [{                      
                           type: "note",
                           title: "Remarque",
                           content: "Le bouton Éjecter n'apparait que quand un périphérique de stockage USB est connecté au routeur. Quand le volume est en cours d'utilisation il est impossible de l'éjecter."
                       }]
} ,{                      
                           type: "step",
                           title: "Pour paramétrer un serveur de fichiers",
       content: [ 
                "1. Brancher le périphérique de stockage au port USB en direct ou par un cordon USB. Si l'appareil requiert une alimentation externe assurez vous quelle est connectée et sous tension.",
                "2. Le périphérique USB qui vient d'être connecté doit être détecté par le routeur et affiché sous la section paramètres d'appareil. A défaut cliquer sur Rechercher.",
                "Remarque: l'icône Partager apparaît. Vous pouvez cliquer sur l'icône pour désactiver les volumes que vous n'avez pas besoin de partager."]
}]
},
       BASIC_SHARING_SETTINGS :{ 
               TITLE:"Adresse d'accès",
               CONTENT: [{
                           type: "name",
                           title: "Nom du serveur de médias/réseau",
                           content: "Affiche le nom utilisé pour accéder au périphérique de stockage USB via la méthode voisinage réseau, ou la fonction de partage de médias. Par défaut le nom est TP-Share."
                       } ,{                      
                           type: "name",
                           title: "Méthode d'accès",
                           content: "Il existe trois méthodes d'accès aux périphériques de stockage USB partagés.",
       children: [{                      
                           type: "name",
                           title: "Voisinage réseau",
                           content: "Sélectionner cette option pour autoriser les utilisateurs à accéder à aux contenus partagés via l'adresse visible dans la colonne adresse."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Sélectionner cette option pour activer la fonction serveur FTP qui permet aux clients FTP et utilisateurs du réseau d'accéder au périphérique de stockage USB via l'adresse FTP visible dans la colonne adresse."
                       } ,{                      
                           type: "name",
                           title: "FTP (Accès via internet)",
                           content: "Sélectionner cette option pour autoriser les utilisateurs et clients FTP à accéder à distance, télécharger et déposer des fichiers sur le périphérique de stockage USB via le service FTP par internet. Pour personnaliser l'adresse d'accès, cliquer sur Modifier et paramétrer le DNS Dynamique du routeur. Pour modifier le port du serveur FTP, saisir un autre numéro de port et cliquer sur Sauvegarder pour appliquer les modifications."
                       }]
} ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "Affiche l'adresse utilisable pour accéder au partage de ressource USB."
                       } ,{                      
                           type: "name",
                           title: "Port",
                           content: "Affiche le numéro de port utilisé pour accéder au serveur FTP."
                       }]
},
       BASIC_FOLDER_SHARING :{ 
               TITLE:"Partage de contenus ",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les dossiers partagés. Tous les dossiers sont partagés par défaut. Vous pouvez cliquer sur l'icône Modification pour personnaliser le partage des dossiers."
                       } ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "L'icône Partager apparaît dans la section Paramètres de l'appareil. Vous pouvez cliquer sur l'icône Partager pour désactiver les volumes que vous n'avez pas besoin de partager."
                       }]
},
       FOLDER_SHARING :{ 
               TITLE:"Partage de contenus et sécurité",
               CONTENT: [{
                           type: "name",
                           title: "Partage de contenus ",
                           content: "Affiche les dossiers partagés. Tous les dossiers sont partagés par défaut. Vous pouvez cliquer sur l'icône Modification pour personnaliser le partage des dossiers.",
       children: [{                      
                           type: "note",
                           title: "Remarque",
                           content: "L'icône Partager apparaît dans la section Paramètres de l'appareil. Vous pouvez cliquer sur l'icône Partager pour désactiver les volumes que vous n'avez pas besoin de partager."
                       }]
} ,{                      
                           type: "name",
                           title: "Authentification d'accès",
       content: [ 
                "Basculer sur ON pour activer l'authentification requérant de la part de l'utilisateur la saisie d'un nom d'utilisateur et d'un mot de passe pour obtenir l'accès à tous les dossiers partagés. L'accès Administrateur permet la lecture et la modification des fichiers tandis que l'accès utilisateur n'offre qu'un accès en lecture.",
                "Le nom d'utilisateur commence obligatoirement par une lettre ou un signe _ et doit comporter 1 à 15 caractères comprenant lettres, chiffres et _.",
                "Le mot de passe doit contenir 1 à 15 caractères comprenant lettres, chiffres et _."]
} ,{                      
                           type: "name",
                           title: "Autoriser le partage de médias",
                           content: "Avec cette fonction activée; tous les appareils utilisant DLNS dans le réseau local peuvent accéder aux contenus médias de tous les dossiers partagés. Les utilisateurs n'auront pas à saisir des identifiants ou des mots de passe même si l'accès après authentification est activé."
                       }]
},
       BASIC_PRINT_SERVER :{ 
               TITLE:"Serveur d'impression",
               CONTENT: [{
                           type: "name",
                           title: "Serveur d'impression",
                           content: "Basculer sur On pour activer la fonction de serveur d'impression."
                       } ,{                      
                           type: "name",
                           title: "Nom de l'imprimante",
                           content: "Affiche le nom de l'imprimante connectée au routeur."
                       }]
},
       BASIC_PARENTAL_CONTROL :{ 
               TITLE:"Contrôle Parental",
               CONTENT: [{
                           type: "paragraph",
                           content: "Avec les paramètres basiques du contrôle parental, vous pouvez restreindre l'accès durant certaines périodes de la journée (par exemple pas d'accès depuis l'ordinateur des enfants durant le temps des devoirs)."
                       }]
},
       BASIC_PARENTAL_DEVICE :{ 
               TITLE:"Appareils soumis au contrôle parental",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette liste affiche les informations et paramètres des appareils actuellement soumis au contrôle parental."
                       } ,{                      
                           type: "step",
                           title: "Pour limiter l'accès d'un nouveau client",
       content: [ 
                "1. Basculer Sur On le contrôle parental.",
                "2. Cliquer sur Ajouter",
                "3. Cliquer sur détecter pour sélectionner un appareil actuellement connecté dans la liste d'accès des appareils ; ou saisir le nom d'appareil et son adresse MAC.",
                "4. Cliquer l'icône durée effective pour spécifier une plage horaire pendant laquelle la restriction s'applique.",
                "5. Saisir une brève description dans le champ dédié. (optionnel)",
                "6. Sélectionner activer cet élément.",
                "7. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "note",
                           title: "Remarque",
                           content: "Si vous voulez désactiver cet élément, cliquer sur l'icône en forme d'ampoule."
                       }]
},
       BASIC_GUEST_NETWORK :{ 
               TITLE:"Réseau invités",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette fonction vous permet d'offrir un accès Wi-Fi à vos invités sans leur ouvrir l'accès à votre réseau local."
                       } ,{                      
                           type: "name",
                           title: "Permettre aux invités de communiquer entre eux",
                           content: "Cocher cette case pour autoriser les clients Wi-Fi du réseau invités à communiquer entre eux par le voisinage réseau, samba, Ping & FTP."
                       } ,{                      
                           type: "name",
                           title: "Permet au invités d'accéder à mon réseau local",
                           content: "Cocher cette case pour autoriser les clients Wi-Fi du réseau invités à communiquer avec les appareils connectés au port LAN du routeur ou au réseau principal par le voisinage réseau, samba, Ping & FTP."
                       } ,{                      
                           type: "name",
                           title: "Activer le réseau invités",
                           content: "Cocher cette case pour activer le réseau invités."
                       } ,{                      
                           type: "name",
                           title: "Nom de réseau (SSID)",
                           content: "Utiliser le nom de réseau (SSID) invité par défaut ou en saisir un autre (32 caractères maximum comportant minuscules et majuscules)."
                       } ,{                      
                           type: "name",
                           title: "Masquer le SSID",
                           content: "Cocher cette case si vous décidez que le nom du réseau invités ne doit pas apparaitre dans la liste des réseaux disponibles."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Intervalle de mise à jour du Mot de passe",
                           content: "Sélectionner l'intervalle de mise à jour du mot de passe réseau invité."
                       } ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Mot de passe",
                           content: "Créez un mot de passe contenant entre 8 et 63 caractères ASCII ou entre 8 et 64 caractères hexadécimaux (0-9, a-f, A-F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Mot de passe",
                           content: "Utilisez le Mot de passe aléatoire généré, ou définissez un Mot de passe comprenant 8 à 63 caractères ASCII ou 8 à 64 caractères hexadécimaux (0-9,a-f,A-F)."
                       }]
},
       BASIC_ACCOUNT_LOGIN :{ 
               TITLE:"Cloud TP-Link",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le service de Cloud TP-Link vous permet de surveiller à distance votre réseau en temps réel d'accéder à vos appareils TP-Link puis à les administrer depuis internet à tout moment et depuis n'importe où."
                       }]
},
       ACCOUNT_INFO :{ 
               TITLE:"Informations sur le compte",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations liés à votre identifiant TP-Link. Vous pouvez éditer les informations en cliquant sur l'icône d'édition."
                       }]
},
       DEVICE_INFO :{ 
               TITLE:"Informations sur l'appareil",
               CONTENT: [{
                           type: "paragraph",
                           content: "Affiche les informations de l'appareil, ce qui inclut le compte Cloud qui administre l'appareil."
                       }]
},
       BOUND_ACCOUNT :{ 
               TITLE:"Comptes associés",
               CONTENT: [{
                           type: "paragraph",
                           content: "Cette liste affiche tous les comptes Cloud qui sont actuellement associés à cet appareil."
                       } ,{                      
                           type: "step",
                           title: "Pour associer un compte utilisateur",
       content: [ 
                "1. Cliquer sur Associer.",
                "2. Saisir l'adresse email que vous souhaitez associer.",
                "3. Cliquer sur Sauvegarder."]
}]
},
       NEW_PARENTAL_CONTROL :{ 
               TITLE:"Contrôle Parental",
               CONTENT: [{
                           type: "paragraph",
                           content: "Avec les filtres par niveau d'âge, les limites d'accès et les profils d'utilisateur, le contrôle parental offre à votre famille un accès Internet personnalisé et approprié."
                       } ,{                      
                           type: "step",
                           title: "Pour appliquer le contrôle parental à un nouvel appareil",
       content: [ 
                "1. Cliquer sur Ajouter.",
                "2. Entrez un nom pour ce profil et cliquez sur \"+\" pour ajouter des périphériques à ce profil.",
                "3. Sélectionnez un niveau de filtrage et personnalisez le contenu du filtre en fonction de vos besoins. Vous pouvez saisir des mots clés pour rechercher des sites Web que vous souhaitez filtrer dans notre base de données. D'autres sites Web (URL) peuvent être saisis manuellement. <br/> Reportez-vous aux explications suivantes pour les différentes catégories de filtres : <p> Contenus pour adultes - Sites proposant des contenus sexuels, nocifs ou illicites, y compris de la pornographie, de la toxicomanie, de la violence et de la discrimination </p><p> Jeux d'argent - Sites qui font la promotion ou qui fournissent des informations sur le jeu, y compris les sites de jeux en ligne </p><p> Éducation sexuelle - Sites qui évoquent la sexualité de manière informative, incluant : la reproduction, la sexualité, les rapports sexuels protégés et le contrôle des naissances, les maladies sexuellement transmissibles et la prise en charge des traumatismes sexuels </p> Communication en ligne - Sites qui hébergent des services de communication interpersonnelle par le biais du texte, de la voix ou de la vidéo, y compris le courrier électronique, les blogs, les forums en ligne, les services de voix et de vidéo sur IP. </p><p> Réseaux sociaux - Sites qui diffusent des expressions personnelles ou des communications, et mettent en relation des personnes et leur activité personnelle en se basant sur des intérêts communs, des carrières, des antécédents ou une relation dans la vrai vie</p><p> Navigation rémunérée - Sites qui récompensent les utilisateurs qui consultent des sites Web, des messages électroniques ou des publicités, qui cliquent sur les liens ou répondent à des sondages </p><p> Media - Sites offrant des contenus audio et/ou vidéo gratuits, payants ou par abonnement, y compris des services de diffusion en continu, des émissions de télévision ou des téléchargements de musique </p><p> Téléchargements - Sites qui fournissent ou donnent accès au partage et à la distribution de fichiers, y compris le partage peer-to-peer, le stockage de fichiers en ligne et du contenu pour périphériques mobiles (par exemple, musique et applications). </p><p> Jeux - Sites qui fournissent ou donnent accès à des jeux hébergés sur le Web ou téléchargeables, y compris les jeux en ligne, les réseaux pour consoles de jeux et les jeux pour navigateurs </p>",
                "4. Si vous souhaitez limiter le temps total que ce profil peut passer en ligne, activez et spécifiez les limites de temps. Vous pouvez également utiliser l'heure du coucher pour définir une période de temps quotidienne pendant laquelle les appareils de ce profil ne peuvent pas utiliser Internet.",
                "5. Cliquer sur bouton Sauvegarde."]
} ,{                      
                           type: "step",
                           title: "Pour afficher l'historique Internet détaillé d'un profil",
       content: [ 
                "1. Dans la colonne aperçu, cliquez sur le bouton aperçu correspondant.",
                "2. Si vous voulez voir d'autres enregistrements, cliquez sur le bouton Historique <span class=\"ptl-ctr-help-icon history\"></span>.",
                "3. Vous pouvez bloquer ou débloquer des sites Web en cliquant sur le bouton <span class=\"ptl-ctr-help-icon block\"></span> ou <span class=\"ptl-ctr-help-icon unblock\"></span>."]
} ,{                      
                           type: "step",
                           title: "Pour désactiver ou activer l'accès à Internet immédiatement",
       content: [ 
                "Dans la colonne Accès Internet, cliquez sur <span class=\"ptl-ctr-help-icon stop\"></span> pour empêcher les périphériques du profil correspondant d'accéder à Internet et cliquez sur <span class=\"ptl-ctr-help-icon enable\"></span> pour leur donner accès à nouveau."]
}]
},
       BASIC_QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "La fonction QoS (qualité de service) privilégie les activités en ligne et les périphériques pour garantir une connexion réseau plus rapide lorsque vous en avez le plus besoin."
                       } ,{                      
                           type: "paragraph",
                           content: "Sélectionnez Priorité d'application pour définir la priorité de débit par activité en ligne, et sélectionnez Priorité d'appareil pour définir la priorité de débit par appareil."
                       }]
},
       BASIC_APPLICATION_PRIORITY :{ 
               TITLE:"Priorité d'application",
               CONTENT: [{
                           type: "paragraph",
                           content: "Choisissez l'activité en ligne à laquelle vous souhaitez donner la priorité ou cliquez sur Personnalisé pour définir le niveau de priorité de chaque application."
                       }]
},
       BASIC_DEVICE_PRIORITY :{ 
               TITLE:"Priorité d'appareil",
               CONTENT: [{
                           type: "paragraph",
                           content: "Choisissez le(s) périphérique(s) au(x)quel(s) vous souhaitez accorder une priorité et pour quelle durée."
                       } ,{                      
                           type: "step",
                           title: "Pour donner la priorité à un appareil",
       content: [ 
                "1. Trouvez l'appareil auquel vous voulez donner la priorité dans la liste et activez Priorité.",
                "2. Sélectionnez la durée de priorité accordée à l'appareil dans la colonne durée."]
}]
},
       ANTI_VIRUS :{ 
               TITLE:"Antivirus",
               CONTENT: [{
                           type: "paragraph",
                           content: "Grâce aux analyses réseau fréquentes, à la détection de sites malveillants et à l'isolement d'appareils infectés, la fonctionnalité Antivirus protège vos informations personnelles. Vous pouvez également vérifier comment votre réseau est protégé, et s'il ya eu des attaques sur votre réseau."
                       } ,{                      
                           type: "paragraph",
                           content: "Historique - Enregistre les appareils qui ont été protégés par l'antivirus ainsi que la source et la nature des attaques."
                       } ,{                      
                           type: "paragraph",
                           content: "Activer tout - Appuyez pour activer \"tous les types de protection\" si un ou plusieurs ne sont pas activés."
                       } ,{                      
                           type: "paragraph",
                           content: "Types de protection - Activez les types de protection en vous référant aux explications. Il est recommandé d'activer tous les types de protection."
                       }]
},
       APPLICATION_PRIORITY :{ 
               TITLE:"Priorité d'application",
               CONTENT: [{
                           type: "paragraph",
                           content: "La fonction Priorité d'application accorde la priorité aux activités en ligne pour garantir une connexion réseau plus rapide lorsque vous en avez le plus besoin. Choisissez l'application à laquelle vous souhaitez donner la priorité ou cliquez sur Personnalisé pour définir le niveau de priorité de chaque application."
                       }]
},
       DEVICE_PRIORITY :{ 
               TITLE:"Priorité d'appareil",
               CONTENT: [{
                           type: "paragraph",
                           content: "La fonction Priorité d'appareil donne la priorité aux périphériques spécifiés pour leur garantir une connexion réseau plus rapide lorsque vous en avez le plus besoin. Choisissez le(s) périphérique(s) au(x)quel(s) vous souhaitez accorder une priorité et pour quelle durée."
                       } ,{                      
                           type: "step",
                           title: "Pour donner la priorité à un appareil",
       content: [ 
                "1. Trouvez l'appareil auquel vous voulez donner la priorité dans la liste et activez Priorité.",
                "2. Sélectionnez la durée de priorité accordée à l'appareil dans la colonne durée."]
}]
},
       FIREWALL :{ 
               TITLE:"Pare-feu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Le pare-feu SPI (Stateful Packet Inspection) empêche les cyber-attaques et valide le trafic qui traverse le routeur en se basant sur le protocole. Par défaut, cette fonctionnalité est activée."
                       } ,{                      
                           type: "name",
                           title: "Activer le pare-feu SPI",
                           content: "Ne désactivez pas le pare-feu SPI à moins que cela ne soit nécessaire."
                       } ,{                      
                           type: "name",
                           title: "Permettre le Ping depuis le port WAN/Permettre le Ping depuis le port LAN",
                           content: "Activer pour autoriser le Ping depuis le port WAN/LAN. Il est recommandé de conserver les paramètres par défaut."
}]
},
CWMP: {
      TITLE: "Paramètres CWMP",
      CONTENT: [{
        type: "paragraph",
        content: "CWMP (CPE WAN Management Protocol, également appelé TR-069) permet au serveur de configuration automatique (ACS) d'effectuer la configuration automatique, l'approvisionnement, la connexion et les diagnostics sur ce périphérique. Vous pouvez configurer cette fonction selon les instructions de votre FAI."
      }, {
        type: "name",
        title: "CWMP",
        content: "Activez cette option pour activer la fonction CWMP (CPE WAN Management Protocol)."
      }, {
        type: "name",
        title: "Informer",
        content: "Activez cette fonction pour envoyer périodiquement un message d'information à l'ACS (Auto Configuration Server)."
      }, {
        type: "name",
        title: "Informer l'intervalle",
        content: "Entrez le temps en secondes où le message d'information sera envoyé à l'ACS."
      }, {
        type: "name",
        title: "URL ACS",
        content: "Saisissez l'adresse Web de l'ACS fournie par votre FAI."
      }, {
        type: "name",
        title: "Nom d'utilisateur / mot de passe ACS",
        content: "Entrez le nom d'utilisateur et le mot de passe pour vous connecter au serveur ACS."
      }, /*{
        type: "name",
        title: "Interface utilisée par le client TR-069",
        content: "Sélectionnez l'interface à utiliser par le client TR-069."
      }, {
        type: "name",
        title: "Affichez les messages SOAP sur la console série",
        content: "Basculez pour activer ou désactiver cette fonction."
      },*/ {
        type: "name",
        title: "Authentification de la demande de connexion",
        content: "Cochez cette case pour activer l'authentification pour la demande de connexion.",
        children: [{
          type: "name",
          title: "Nom d'utilisateur / mot de passe",
          content: "Entrez le nom d'utilisateur et le mot de passe du serveur ACS pour se connecter au routeur."
        }, {
          type: "name",
          title: "Chemin / Port / URL",
          content: "Entrez le chemin, le port et l'URL qui se connecte au serveur ACS."
        }]
      }, ]
    },
WakeOnLanRpm:{
	TITLE:"WOL ",
	CONTENT: [{
	type: "paragraph",
	content: "Wake-on-LAN (WOL) is an Ethernet or Token Ring networking standard that allows a computer to be turned on or off by a network message."
} ,{
	type: "paragraph",
	content: "Note: This feature can be used to support WOL functionality on power, motherboard, and network protocol adapters."
} ,{
	type: "name",
	title: "WOL Settings",
		children:[{
				type:"name",
				title:"MAC",
				content:"Enter the MAC address of the PC in the field."
			  },{
				type:"name",
				title:"PC",
				content:"Enter the name of the PC in the field."
			 },{
				type:"name",
				title:"Save",
				content:"Press this button to add a new item to the end of the list."
			 },{
				type:"name",
				title:"MAC temporary copy",
				content:"Press this button to copy the MAC address to the left text box."
			 },{
				type:"name",
				title:"Scan",
				content:"Press this button to scan the MAC address and IP address of all existing PCs. "
			}]
		},{
			type:"name",
			title:"WOL List",
		children:[{
				type:"name",
				title:"Wake Up",
				content:"Press this button to turn on the PC."
			},{
				type:"name",
				title:"Delete",
				content:"Press this button to delete the item list."
			}]
},{
			type:"name",
			title:"WOL Search List",
		children:[{
				type:"name",
				title:"Add",
				content:"Press this button to enter the MAC address."
			},{
				type:"name",
				title:"MAC",
				content:"Copy it to the field, and return to the previous page."
			},{
				type:"name",
				title:"Backwards",
				content:"Press this button to go directly to the previous page."
				}]
		}]
},
       "" :     ""
    };
})(jQuery);
