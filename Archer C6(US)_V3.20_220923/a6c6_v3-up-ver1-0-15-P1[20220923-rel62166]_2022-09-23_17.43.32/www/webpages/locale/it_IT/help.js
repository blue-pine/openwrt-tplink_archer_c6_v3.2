(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.su.CHAR.HELP ={
       STATUS_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informazioni rilevanti riguardo la connessione WAN (Internet)."
                       }]
},
       STATUS_WIRELESS :{ 
               TITLE:"Wireless 2.4GHz/5GHz",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informazioni rilevanti riguardo la rete wireless."
                       }]
},
       STATUS_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra le informazioni relative alle porte Ethernet (LAN)."
                       }]
},
       STATUS_GUEST :{ 
               TITLE:"Rete Ospiti 2.4GHz/5GHz",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informazioni riguardo la rete wireless ospiti."
                       }]
},
       STATUS_USB :{ 
               TITLE:"Dispositivi USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informazioni dei dispositivi USB storage e/o stampanti connessi al router tramite le porte USB."
                       }]
},
       STATUS_PERFORMANCE :{ 
               TITLE:"Prestazioni",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra le prestazioni correnti del router."
                       }]
},
       STATUS_WIRED :{ 
               TITLE:"Client Cablati",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informazioni dei dispositivi cablati connessi alla rete."
                       }]
},
       STATUS_WIRELESS_CLIENTS :{ 
               TITLE:"Client Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informazioni dei dispositivi wireless connessi alla rete."
                       }]
},
       INTERNET_TITLE :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Configurate i parametri IPv4 e selezionate il metodo MAC Clone appropriato secondo le vostre necessità."
                       }]
},
       INTERNET_INTERNET :{ 
               TITLE:"IPv4",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selezionate il Tipo di Connessione Internet e immettete i parametri corrispondenti."
                       } ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: IP dinamico"
                       } ,{                      
                           type: "paragraph",
                           content: "Selezionate questo tipo se vi è stato fornita una connessione server DHCP dell'ISP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP/Subnet mask/Gateway predefinito/DNS primario/DNS secondario",
                           content: "Questi parametri sono assegnati automaticamente dal server DHCP dell'ISP."
                       } ,{                      
                           type: "name",
                           title: "Rinnova",
                           content: "Fate clic per ottenere i nuovi parametri IP dal server DHCP."
                       } ,{                      
                           type: "name",
                           title: "Rilascia",
                           content: "Fate clic per rilasciare tutti gli indirizzi IP assegnati dal server DHCP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo DNS",
                           content: "Se l'ISP fornisce uno o due indirizzi DNS, selezionate la casella di controllo e immettete gli indirizzi DNS primario e secondario nei campi corrispondenti. In caso contrario, gli indirizzi DNS verranno assegnati dinamicamente dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Dimensione MTU",
                           content: "La dimensione tipica di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.500 Byte. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Nome host",
                           content: "Immettete un valore in questo campo per specificare il nome host del router."
                       } ,{                      
                           type: "name",
                           title: "Ottieni IP Usando DHCP Unicast",
                           content: "Selezionate questa casella di controllo se il server DHCP dell'ISP non supporta applicazioni broadcast e non potete ottenere dinamicamente l'indirizzo IP."
                       } ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: IP statico"
                       } ,{                      
                           type: "paragraph",
                           content: "Selezionate questo tipo se siete in possesso di un indirizzo IP specifico (fisso), subnet mask, gateway e parametri DNS forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP/Subnet mask/Gateway predefinito/DNS primario/DNS secondario",
                           content: "Immettete le informazioni fornite dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Dimensione MTU",
                           content: "La dimensione tipica di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.500 Byte. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
                       } ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: cavo BigPond"
                       } ,{                      
                           type: "paragraph",
                           content: "Selezionate questo tipo se l'ISP fornisce connessione BigPond Cable."
                       } ,{                      
                           type: "name",
                           title: "Nome utente/password",
                           content: "Immettete username e password forniti dall'ISP. Questi campi fanno distinzione fra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Server di autenticazione",
                           content: "Immettete l'indirizzo IP o hostname del server di autenticazione."
                       } ,{                      
                           type: "name",
                           title: "Dominio di autenticazione",
                           content: "Immettete il suffisso nome dominio del server (in base al luogo). Per esempio, nsw.bigpond.net.au per NSW/ACT, vic.bigpond.net.au per VIC/TAS/WA/SA/NT, o qld.bigpond.net.au per QLD."
                       } ,{                      
                           type: "name",
                           title: "Dimensione MTU",
                           content: "La dimensione tipica di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.500 Byte. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Modalità di connessione",
                           content: "Selezionate una modalità di connessione appropriata per l'accesso a Internet.",
       children: [{                      
                           type: "name",
                           title: "Automatica",
                           content: "In questa modalità, la connessione a Internet viene ristabilita automaticamente dopo ogni disconnessione."
                       } ,{                      
                           type: "name",
                           title: "Su richiesta",
                           content: "In questa modalità, la connessione Internet viene terminata automaticamente dopo un periodo di tempo di inattività specificato (Max Idle Time). La connessione verrà ristabilita quando tenterete di accedere nuovamente a Internet."
                       } ,{                      
                           type: "name",
                           title: "Manualmente",
                           content: "In questa modalità, la connessione a Internet è controllata manualmente facendo clic sul pulsante Connetti o Disconnetti. Questa modalità supporta anche la funzione Max Idle Time. Nel campo Max Idle Time immettete il tempo massimo (in minuti) di inattività della connessione a Internet prima che venga terminata. Il valore di default è 15 minuti. Se desiderate che la connessione a Internet rimanga sempre attiva, immettete 0 (zero)."
                       }]
} ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: PPPoE"
                       } ,{                      
                           type: "paragraph",
                           content: "Selezionate questo tipo se utilizzate il servizio DSL (Digital Subscriber Line) e disponete di un nome utente e una password forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Nome utente/password",
                           content: "Immettete username e password forniti dall'ISP. Questi campi fanno distinzione fra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP/DNS primario/DNS secondario",
                           content: "Questi parametri sono assegnati automaticamente dal server DHCP dell'ISP."
                       } ,{                      
                           type: "name",
                           title: "Connessione secondaria (Nessuna, IP dinamico, IP statico)",
       children: [{                      
                           type: "name",
                           title: "Nessuna",
                           content: "Selezionate se non viene fornita alcuna connessione secondaria."
                       } ,{                      
                           type: "name",
                           title: "IP dinamico",
                           content: "Selezionate se l'indirizzo IP e la subnet mask vengono assegnati automaticamente dall'ISP.",
       children: [{                      
                           type: "name",
                           title: "Rinnova",
                           content: "Fate clic per rinnovare i parametri IP dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Rilascia",
                           content: "Fate clic per rilasciare i parametri IP assegnati."
                       }]
} ,{                      
                           type: "name",
                           title: "IP statico",
                           content: "Selezionate se indirizzo IP e subnet mask sono forniti dall'ISP, e immettete le informazioni nei campi corrispondenti."
                       }]
} ,{                      
                           type: "name",
                           title: "Dimensione MTU",
                           content: "La dimensione tipica dell'MTU (Maximum Transmission Unit) delle reti Ethernet è 1.480 byte.",
       children: [{                      
                           type: "note",
                           title: "Nota",
                           content: "Raramente l'ISP può richiedervi di regolare la dimensione della MTU per migliorare le prestazioni di rete. Non modificate il valore a meno che non sia assolutamente necessario."
                       }]
} ,{                      
                           type: "name",
                           title: "Nome servizio/Nome concentratore di accessi",
                           content: "Di default, Nome Servizio e Nome Concentratore Accessi (AC) sono vuoti. Questi campi non devono essere configurati, a meno che non sia richiesto dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Rileva Intervallo online",
                           content: "Immettete il valore dell'intervallo, compreso tra 0 e 120 (in secondi), che determina ogni quanto tempo il router rileva Access Concentrator online. Il valore di default è 10."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP",
                           content: "Se l'ISP fornisce uno specifico indirizzo IP statico, selezionate Usa il seguente Indirizzo IP e immettete l'indirizzo IP nel campo. Altrimenti selezionate Ottieni Dinamicamente dall'ISP per ottenere un indirizzo IP assegnato automaticamente."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo DNS",
                           content: "Se l'ISP fornisce specifici indirizzi DNS statici, selezionate Usa i seguenti Indirizzi DNS e immettete gli indirizzi DNS primario e secondario nei rispettivi campi. Altrimenti selezionate Ottieni Dinamicamente dall'ISP per ottenere gli indirizzi DNS assegnati automaticamente."
                       } ,{                      
                           type: "name",
                           title: "Modalità di connessione",
                           content: "Selezionate una modalità di connessione appropriata per l'accesso a Internet.",
       children: [{                      
                           type: "name",
                           title: "Automatica",
                           content: "In questa modalità, la connessione a Internet viene ristabilita automaticamente dopo ogni disconnessione."
                       } ,{                      
                           type: "name",
                           title: "Su richiesta",
                           content: "In questa modalità, la connessione Internet viene terminata automaticamente dopo un periodo di tempo di inattività specificato (Max Idle Time). La connessione verrà ristabilita quando tenterete di accedere nuovamente a Internet."
                       } ,{                      
                           type: "name",
                           title: "Basata sul tempo",
                           content: "In questa modalità, la connessione Internet viene stabilita solo in un periodo di tempo specifico. Se l'opzione è selezionata, immettete ora di inizio e di fine in formato HH:MM."
                       } ,{                      
                           type: "name",
                           title: "Manualmente",
                           content: "In questa modalità, la connessione a Internet è controllata manualmente facendo clic sul pulsante Connetti o Disconnetti. Questa modalità supporta anche la funzione Max Idle Time. Nel campo Max Idle Time immettete il tempo massimo (in minuti) di inattività della connessione a Internet prima che venga terminata. Il valore di default è 15 minuti. Se desiderate che la connessione a Internet rimanga sempre attiva, immettete 0 (zero)."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "La modalità di connessione basata sul tempo avrà effetto solo se l'Ora di sistema è impostata su Avanzate → Utilità di sistema → Impostazioni data/ora."
                       }]
} ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: L2TP/PPTP"
                       } ,{                      
                           type: "paragraph",
                           content: "Selezionate questo tipo se vi connettete a un server VPN L2TP/PPTP e disponete di nome utente, password e indirizzo IP/nome di dominio del server forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Nome utente/password",
                           content: "Immettete username e password forniti dall'ISP. Questi campi fanno distinzione fra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP/DNS primario/DNS secondario",
                           content: "Questi parametri verranno assegnati automaticamente dal server DHCP dell'ISP."
                       } ,{                      
                           type: "name",
                           title: "Connessione secondaria (IP dinamico o statico)",
       children: [{                      
                           type: "name",
                           title: "IP dinamico",
                           content: "Selezionate se l'indirizzo IP e la subnet mask vengono assegnati automaticamente dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "IP statico",
                           content: "Selezionate se indirizzo IP, subnet mask, gateway, e indirizzi DNS sono forniti dall'ISP, e immettete le informazioni nei campi corrispondenti."
                       }]
} ,{                      
                           type: "name",
                           title: "IP/nome di dominio server VPN",
                           content: "Immettete l'indirizzo IP del server VPN o il nome dominio fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Dimensione MTU",
                           content: "La tipica dimensione di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.460 byte per L2TP o 1.420 per PPTP. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Modalità di connessione",
                           content: "Selezionate una modalità di connessione appropriata per l'accesso a Internet.",
       children: [{                      
                           type: "name",
                           title: "Automatica",
                           content: "In questa modalità, la connessione a Internet viene ristabilita automaticamente dopo ogni disconnessione."
                       } ,{                      
                           type: "name",
                           title: "Su richiesta",
                           content: "In questa modalità, la connessione Internet viene terminata automaticamente dopo un periodo di tempo di inattività specificato (Max Idle Time). La connessione verrà ristabilita quando tenterete di accedere nuovamente a Internet."
                       } ,{                      
                           type: "name",
                           title: "Manualmente",
                           content: "In questa modalità, la connessione a Internet è controllata manualmente facendo clic sul pulsante Connetti o Disconnetti. Questa modalità supporta anche la funzione Max Idle Time. Nel campo Max Idle Time immettete il tempo massimo (in minuti) di inattività della connessione a Internet prima che venga terminata. Il valore di default è 15 minuti. Se desiderate che la connessione a Internet rimanga sempre attiva, immettete 0 (zero)."
                       }]
},
{
    type: "title",
    id: "internet_ipv4_dslite_title",
    title: "Tipo di connessione Internet: DS-Lite"
},{
    type: "paragraph",
    id: "internet_ipv4_dslite_detail",
    content: "Selezionate questo tipo se il vostro ISP usa DS-Lite e fornisce un indirizzo IPv6 per impostare un tunnel IPv4-in-IPv6 nella rete IPv6 per fare comunicare il traffico IPv4 o IPv6 nelle loro rispettive reti."
},{
    type: "name",
    id: "internet_ipv4_dslite_name",
    title: "Nome AFTR",
    content: "Se il vostro ISP supporta l'ottenimento automatico del Nome AFTR, selezionate Auto. Se il vostro ISP fornisce uno specifico Nome AFTR, selezionate Manuale e immettete nella casella nome dominio e indirizzo IPv6 forniti dallo ISP. "
},{
    type: "title",
    id: "internet_ipv4_v6plus_title",
    title: "Tipo di connessione Internet: v6plus"
},{
    type: "paragraph",
    id: "internet_ipv4_v6plus_detail",
    content: "Selezionate questo tipo se il vostro ISP usa v6plus e fornisce un indirizzo IPv6 per impostare un tunnel IPv4-in-IPv6 nella rete IPv6 per fare comunicare il traffico IPv4 o IPv6 nelle loro rispettive reti."
}]
},
       INTERNET_MAC :{ 
               TITLE:"MAC Clone",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selezionate il metodo MAC Clone appropriato secondo le vostre necessità."
                       } ,{                      
                           type: "name",
                           title: "NON clonare indirizzo MAC",
                           content: "NON modificate l'indirizzo MAC di default del router, per evitare l'insorgere di problemi nel caso in cui l'ISP vincoli l'indirizzo IP assegnato all'indirizzo MAC."
                       } ,{                      
                           type: "name",
                           title: "Clona indirizzo MAC computer corrente",
                           content: "Selezionate per copiare l'indirizzo MAC corrente del computer connesso al router, nel caso in cui l'ISP vincoli l'indirizzo IP assegnato all'indirizzo MAC del computer."
                       } ,{                      
                           type: "name",
                           title: "Utilizza indirizzo MAC personalizzato",
                           content: "Immettete l'indirizzo MAC manualmente, nel caso in cui l'ISP vincoli l'indirizzo IP assegnato a un indirizzo MAC specifico."
                       }]
},
       INTERNET_WAN_AGGREGATION :{ 
               TITLE:"Aggregazione WAN",
               id: "internet_wan_aggregation_title",
               CONTENT: [{
                           type: "paragraph",
                           id: "internet_wan_aggregation_detail",
                           content: "Aggregazione WAN trasforma la porta LAN1 in una porta WAN aggiuntiva, e crea un singolo canale dati ad alta capacità. Sfruttate la connessione Internet degli ISP che forniscono banda fino a 1Gbps senza essere limitati dall'hardware di rete."
                       } ,{                      
                           type: "note",
                           id: "internet_wan_aggregation_note",
                           title: "Nota",
                           content: "Prima di abilitare questa funzione assicuratevi che il vostro ISP supporti l'Aggregazione WAN e il vostro modem abbia 2 porte WAN."
                       } ,{                      
                           type: "step",
                           title: "Per applicare la aggregazione WAN",
                           id: "internet_wan_aggregation_step",
       content: [ 
                "1. Spostate su Aggregazione WAN per abilitarla.",
                "2. Fate clic su Salva.",
                "3. C	ollegate la porta WAN del router e la porta LAN1 alle porte WAN del vostro modem con 2 cavi Ethernet."]
}]
},
       LAN_IPV4 :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra indirizzo MAC, indirizzo IP e subnet mask del router."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "L'indirizzo fisico univoco assegnato alla porta Ethernet (LAN) del router."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP",
                           content: "Mostra l'indirizzo IP di default del router che viene usato per fare login alla pagina di gestione web del router. Potete modificarlo."
                       } ,{                      
                           type: "name",
                           title: "Subnet mask",
                           content: "Selezionate un identifier assegnato usato dalla porta LAN per ruotare il traffico Interno ed Esterno o immettete una nuova subnet mask."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se il nuovo indirizzo IP della LAN non si trova nella stessa subnet in cui si trova quello vecchio, il pool di indirizzi IP nel server DHCP verrà configurato automaticamente; tuttavia, il server virtuale e l'host DMZ host non avranno effetto finché non saranno riconfigurati."
                       }]
},
       LINK_AGG :{ 
               TITLE:"Link Aggregation",
               CONTENT: [{
                           type: "paragraph",
                           content: "Link Aggregation combina insieme 2 porte per creare una singola connessione dati con banda elevata, fornendo quindi maggiore velocità ed elevata stabilità alla rete cablata."
                       } ,{                      
                           type: "step",
                           id: "link_agg_step_help",
                           title: "Per applicare link aggregation",
       content: [ 
                "1. Spostate il tasto per abilitare la funzione Link Aggregation.",
                "2. Specificate 2 porte per il link aggregation.",
                "3. Fate clic su Salva."]
}]
},
       IPTV :{ 
               TITLE:"IPTV",
               CONTENT: [{
                           type: "paragraph",
                           content: "IPTV (Internet Protocol Television) è un sistema mediante il quale vengono veicolati i servizi televisivi usando pacchetti con il protocollo Internet su reti come LAN o Internet."
                       } ,{                      
                           type: "name",
                           id: "igmp-snooping",
                           title: "IGMP Snooping",
                           content: "La funzione IGMP (Internet Group Management Protocol) Snooping permette al router di inoltrare traffico multicast solo alle porte indicate."
                       } ,{                      
                           type: "name",
                           title: "Proxy IGMP",
                           content: "Selezionate per abilitare la funzione IGMP Proxy se il servizio IPTV fornito dall'ISP è una tecnologia basata su IGMP."
                       } ,{                      
                           type: "name",
                           title: "Versione IGMP",
                           content: "Selezionate la versione IGMP in accordo con il vostro ISP. La versione IGMP di default è la V2."
                       } ,{                      
                           type: "name",
                           id: "igmp-wifi",
                           title: "Inoltro Wireless Multicast",
                           content: "Selezionate per abilitare la funzione Inoltro Multicast Wireless che consente ai pacchetti multicast di essere inoltrati nella rete wireless."
                       } ,{                      
                           type: "name",
                           title: "IPTV",
                           content: "Selezionate per abilitare la funzione IPTV se il servizio IPTV fornito dall'ISP non è una tecnologia basata su IGMP."
                       } ,{                      
                           type: "name",
                           title: "Profilo ISP",
                           content: "Selezionate il profilo ISP (Internet Service Provider) appropriato per completare la configurazione. Vi sono 3 diversi tipi di profilo:",
       children: [{                      
                           type: "name",
                           title: "Regione-Nome ISP",
                           content: "Profili ISP con le impostazioni di default in formato \"Regione-Nome ISP\". Trovate e selezionate il vostro ISP dal menu a tendina."
                       } ,{                      
                           type: "name",
                           id: "iptv_bridge_child_1to4",
                           title: "Bridge",
                           content: "Se il vostro ISP non è elencato e non vengono richiesti altri parametri per impostare IPTV, potete semplicemente selezionare questo profilo e specificare la porta LAN dedicata a IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Specificate quale tipo di dati della porta LAN verranno trasmessi. Per esempio, se IPTV è selezionato per LAN1, i dati IPTV saranno trasmessi solo in questa porta e dovrete collegare il decoder alla LAN1."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_2to5",
                           title: "Bridge",
                           content: "Se il vostro ISP non è elencato e non vengono richiesti altri parametri per impostare IPTV, potete semplicemente selezionare questo profilo e specificare la porta LAN dedicata a IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Specificate quale tipo di dati trasmetterà la porta LAN. Per esempio, se IPTV è selezionato per la LAN2, la LAN2 trasmetterà solo dati IPTV e voi dovrete collegare il decoder alla LAN2."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_5to8",
                           title: "Bridge",
                           content: "Se il vostro ISP non è elencato e non vengono richiesti altri parametri per impostare IPTV, potete semplicemente selezionare questo profilo e specificare la porta LAN dedicata a IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Specificate quale tipo di dati trasmetterà la porta LAN. Per esempio, se IPTV è selezionato per la LAN5, la LAN5 trasmetterà solo dati IPTV e voi dovrete collegare il decoder alla LAN5."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_1to4",
                           title: "Personalizzato",
                           content: "Se il vostro ISP non è elencato ma disponete dei parametri necessari come Internet/VoIP/IPTV VLAN ID e Priorità, selezionate questo profilo.",
       children: [{                      
                           type: "name",
                           title: "VLAN ID/Priorità Internet/VoIP/IPTV ",
                           content: "Configurate VLAN ID e priorità forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Tag 802.11Q",
                           content: "Selezionate per taggare i pacchetti Internet con 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "ID VLAN multicast IPTV/Priorità",
                           content: "Potete abilitare la funzione IPTV multicast come desiderate, e configurare VLAN ID e Priorità in accordo con l'ISP."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Specificate quale tipo di dati della porta LAN verranno trasmessi. Per esempio, se IPTV è selezionato per LAN1, i dati IPTV saranno trasmessi solo in questa porta e dovrete collegare il decoder alla LAN1."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_2to5",
                           title: "Personalizzato",
                           content: "Se il vostro ISP non è elencato ma disponete dei parametri necessari come Internet/VoIP/IPTV VLAN ID e Priorità, selezionate questo profilo.",
       children: [{                      
                           type: "name",
                           title: "VLAN ID/Priorità Internet/VoIP/IPTV ",
                           content: "Configurate VLAN ID e priorità forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Tag 802.11Q",
                           content: "Selezionate per taggare i pacchetti Internet con 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "ID VLAN multicast IPTV/Priorità",
                           content: "Potete abilitare la funzione IPTV multicast come desiderate, e configurare VLAN ID e Priorità in accordo con l'ISP."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Specificate quale tipo di dati trasmetterà la porta LAN. Per esempio, se IPTV è selezionato per la LAN2, la LAN2 trasmetterà solo dati IPTV e voi dovrete collegare il decoder alla LAN2."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_5to8",
                           title: "Personalizzato",
                           content: "Se il vostro ISP non è elencato ma disponete dei parametri necessari come Internet/VoIP/IPTV VLAN ID e Priorità, selezionate questo profilo.",
       children: [{                      
                           type: "name",
                           title: "VLAN ID/Priorità Internet/VoIP/IPTV ",
                           content: "Configurate VLAN ID e priorità forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Tag 802.11Q",
                           content: "Selezionate per taggare i pacchetti Internet con 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "ID VLAN multicast IPTV/Priorità",
                           content: "Potete abilitare la funzione IPTV multicast come desiderate, e configurare VLAN ID e Priorità in accordo con l'ISP."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Specificate quale tipo di dati trasmetterà la porta LAN. Per esempio, se IPTV è selezionato per la LAN5, la LAN5 trasmetterà solo dati IPTV e voi dovrete collegare il decoder alla LAN5."
                       }]
}]
}]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Server DHCP",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Di default il server DHCP (Dynamic Host Configuration Protocol) è abilitato; assegna in modo dinamico i parametri TCP/IP ai dispositivi client dal pool di indirizzi IP.",
                "NON disabilitate il server DHCP a meno che non disponiate di un altro server DHCP o desideriate assegnare manualmente i parametri TCP/IP ad ogni dispositivo client della rete."]
} ,{                      
                           type: "name",
                           title: "Pool di indirizzi IP",
                           content: "Immettete l'intervallo di indirizzi IP che possono essere assegnati ai client. "
                       } ,{                      
                           type: "name",
                           title: "Durata del lease indirizzo",
                           content: "Immettete la durata (fra 1 e 2880 minuti) durante la quale un indirizzo IP viene lasciato ad un client. Il valore di default è 120."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"RiservaIndirizzi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra i parametri corrispondenti dei dispositivi con IP riservato."
                       } ,{                      
                           type: "step",
                           title: "Per prenotare un indirizzo IP",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Fate clic su Scansione per scegliere un dispositivo connesso dalla Lista DHCP Client, o immettete l'indirizzo MAC del vostro client desiderato nel campo indirizzo MAC, e l'indirizzo IP che volete riservare al client nel campo indirizzo IP.",
                "3. Immettete una descrizione del client nel campo Descrizione.",
                "4. Selezionate Abilita.",
                "5. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se volete disabilitare questa entry, fate clic sull'icona Bulbo."
                       }]
},
       DHCP_CLIENT_LIST :{ 
               TITLE:"Lista Client DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra le informazioni dei dispositivi attualmente connessi."
                       }]
},
       DDNS :{ 
               TITLE:"DNS Dinamico",
               CONTENT: [{
                           type: "paragraph",
                           content: "DNS Dinamico (Dynamic Domain Name System) vi permette di assegnare un host e un nome dominio fissi ad un indirizzo IP Internet dinamico. È utile quando fate hosting dei vostri sito web, server FTP o altri server dietro al router. Per iniziare dovete registrarvi ad un fornitore DNS Dinamico come www.dyndns.com."
                       } ,{                      
                           type: "step",
                           title: "Per impostare un DNS dinamico",
       content: [ 
                "1. Selezionate il fornitore DNS Dinamico.",
                "2. Immettete Username e Password dell'account DNS Dinamico.",
                "3. Immettete il nome di dominio ricevuto dal provider di servizi DDNS.",
                "4. Selezionate l'Intervallo di Aggiornamento dall'elenco a discesa.",
                "5. Se il vostro fornitore è NO-IP, WAN IP Binding può garantire che il nome dominio sia legato all'IP WAN di questo router.",
                "6. Fate clic su Login e Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se volete usare un nuovo account DDNS, prima fate logout e poi fate login con il nuovo account."
                       }]
},
       DYNAMIC_DNS :{ 
               TITLE:"DNS Dinamico",
               CONTENT: [{
                           type: "paragraph",
                           content: "DNS Dinamico (Dynamic Domain Name System) vi permette di assegnare un host e un nome dominio fissi ad un indirizzo IP Internet dinamico. È utile quando fate hosting dei vostri sito web, server FTP o altri server dietro al router. Per iniziare dovete registrarvi ad un fornitore DNS Dinamico come www.dyndns.com."
                       }]
},
       DOMAIN_NAME_LIST :{ 
               TITLE:"Elenco Nomi Dominio",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa tabella mostra le informazioni di tutti i nomi dominio che sono registrati con il vostro account cloud."
                       } ,{                      
                           type: "step",
                           title: "Registra un nuovo nome dominio",
       content: [ 
                "1. Fate clic su Registra.",
                "2. Immettete il nome dominio che volete registrare.",
                "3. Fate clic su Salva."]
}]
},
       ADVANCED_ROUTING_STATIC_ROUTING :{ 
               TITLE:"Routing Statico",
               CONTENT: [{
                           type: "paragraph",
                           content: "Il routing statico viene utilizzato per predeterminare un percorso fisso per i pacchetti di informazioni di rete per raggiungere un host o una rete specifica."
                       } ,{                      
                           type: "step",
                           title: "Per impostare un routing statico",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Immettete un indirizzo IP nel campo Rete di Destinazione per assegnare la route statica a questa entry.",
                "3. Immettete una subnet mask nel campo Subnet Mask per determinare la porzione di rete e di host dell'indirizzo IP.",
                "4. Immettete un indirizzo IP gateway nel campo Default Gateway per connettere il router alla rete o all'host.",
                "5. Selezionate LAN o WAN nel campo Interfaccia per specificare il tipo di Rete di Destinazione.",
                "6. Immettete una breve descrizione di questa entry.",
                "7. Selezionate Abilita.",
                "8. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se volete disabilitare questa entry, fate clic sull'icona Bulbo."
                       }]
},
       ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE :{ 
               TITLE:"Tabella di routing del sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra tutte le entry delle route valide che sono attualmente in uso."
                       }]
},
       WIRELESS_TITLE :{ 
               TITLE:"Impostazioni Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Configurate le impostazioni wireless secondo le vostre necessità."
                       }]
},
       OFDMA :{ 
               TITLE:"OFDMA",
               CONTENT: [{
                           type: "paragraph",
                           content: "OFDMA consente a più utenti di trasmettere dati contemporaneamente, aumentando considerevolmente velocità ed efficenza. Fate attenzione che solo se i vostri client supportano OFDMA potrete sfruttarne appieno i benefici."
                       }]
},
       WIRELESS_SMART_CONNECT :{ 
               TITLE:"Smart Connect",
               CONTENT: [{
                           type: "paragraph",
                           content: "Seleziona questa casella di controllo per abilitare Smart Connect. Questa funziona aiuta a velocizzare i dispositivi, assegnandoli alle migliori bande wireless in base alle condizioni attuali per bilanciare le esigenze di rete."
                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wireless 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Nome di rete (SSID)",
                           content: "Si consiglia di cambiare il nome di rete (SSID). Questo campo fa distinzione fra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Nascondi SSID",
                           content: "Selezionate se volete nascondere il nome di rete (SSID) 2.4GHz dall'elenco delle reti wireless. Quando la selezionate, lo SSID non sarà più inviato in broadcast e dovrete aggiungervi manualmente alla rete."
                       } ,{                      
                           type: "name",
                           title: "Sicurezza",
                           content: "Selezionate una delle seguenti opzioni di sicurezza:",
       children: [{                      
                           type: "name",
                           title: "Nessuna sicurezza",
                           content: "Selezionate questa opzione per disabilitare la sicurezza wireless. Si sconsiglia questa azione."
                        } ,{   
                            type: "name",
                            title: "WPA2/WPA3-Personale",
							id: "WPA3_24G_TITLE",
                            content: "Selezionate questa opzione per abilitare il metodo di autenticazione standard basato su Pre-shared Key (PSK), noto anche come passphrase. Se selezionato, configurate i seguenti campi.",
                            children: [{
                                type: "name",
                                title: "Versione",
                                content: "Selezionate una versione di sicurezza per la vostra rete wireless.",
                                children: [{
                                    type: "name",
                                    title: "Auto ",
                                    content: "La modalità Auto consente una migrazione graduale ad una rete WPA3-Personal mantenendo la interoperabilità con i dispositivi WPA2-Personal senza interruzioni per gli utenti. Si consiglia di lasciare questa opzione su Auto."
                                },{
                                    type: "name",
                                    title: "WPA3-SAE",
                                    content: "Le reti Wi-Fi protette da WPA3-SAE ricevono una password più efficace basata sull'autenticazione SAE (Simultaneous Authentication of Equals), portando nelle reti una protezione più forte."
                                }]
                            }]
                        },{	                      
                           type: "name",
                           title: "WPA/WPA2-Personale",
                           content: "Selezionate questa opzione per abilitare la sicurezza wireless. Si consiglia di proteggere la rete wireless da accessi non autorizzati. Se la selezionate, configurate i seguenti punti.",
       children: [{                      
                           type: "name",
                           title: "Versione",
                           content: "Selezionate un livello di sicurezza. WPA2-PSK è più sicura. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Crittografia",
                           content: "Selezionate una crittografia di sicurezza. AES è più sicuro. Si consiglia di NON usare la crittografia TKIP se il router opera in modalità 802.11n. Inoltre usando TKIP si disabilita la funzione WPS. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Password",
                           content: "Immettete in questo campo una password wireless composta di 8-63 caratteri ASCII, o 8-64 caratteri esadecimali."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA / WPA2-Enterprise",
                           content: "Selezionate l'opzione per abilitare il metodo di autenticazione più avanzato utilizzando un server RADIUS (Remote Authentication Dial In User Service). Se l'opzione è selezionata, la funzione WPS sarà disabilitata.",
       children: [{                      
                           type: "name",
                           title: "Versione",
                           content: "Selezionate un livello di sicurezza. WPA2 è più sicura. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Crittografia",
                           content: "Selezionate una crittografia di sicurezza. AES è più sicuro. Si consiglia di NON usare la crittografia TKIP se il router opera in modalità 802.11n. Inoltre usando TKIP si disabilita la funzione WPS. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "IP server RADIUS",
                           content: "Immettete l'indirizzo IP del server RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Porta RADIUS",
                           content: "Immettete il numero di porta del server RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Password RADIUS",
                           content: "Immettete la password condivisa del server RADIUS."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           id: "WEP_24G_TITLE",
                           content: "Selezionate questa opzione per abilitare il metodo base di autenticazione se alcuni dei dispositivi client possono accedere in wireless solo tramite WEP (Wired Equivalent Privacy). Se viene selezionata questa opzione, verrà disabilitata la funzione WPS.",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selezionate un tipo di autenticazione per la rete wireless. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Formato chiave WEP",
                           content: "Utilizzate il formato ASCII o selezionate Esadecimale. Il formato ASCII è una combinazione di caratteri alfabetici e numerici. Il formato esadecimale è una combinazione di numeri (0-9) e lettere (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo di chiave",
                           content: "Selezionate la lunghezza della chiave WEP.",
       children: [{                      
                           type: "name",
                           title: "64 bit",
                           content: "Permette di inserire 10 cifre esadecimali (0-9, A-F, a-f) o 5 caratteri ASCII nel campo Valore WEP."
                       } ,{                      
                           type: "name",
                           title: "128 bit",
                           content: "Permette di inserire 26 cifre esadecimali (0-9, A-F, a-f) o 13 caratteri ASCII nel campo Valore WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valore chiave",
                           content: "Immettete la chiave WEP nel rispettivo campo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Canale",
                           content: "Selezionate un canale operativo per la rete wireless 2.4GHz. Se non si verificano problemi di instabilità wireless, vi consigliamo di lasciare l'impostazione Automatica."
                       } ,{                      
                           type: "name",
                           title: "Potenza di trasmissione",
                           content: "Selezionate Alta, Media o Bassa per specificare la potenza di trasmissione dati. L'impostazione predefinita è Alta."
                       } ,{                      
                           type: "name",
                           id: "atf_2g4",
                           title: "Funzione Airtime Fairness",
                           content: "Selezionate questa casella di controllo per abilitare la funzione Airtime Fairness(ATF) che vi consente di ottimizzare il throughput di ogni flusso. Lo schedulatore di traffico ATF usa i target airtime di destinazione per bilanciare l'uso di airtime fra i flussi di destinazione."
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_2g4",
                           title: "Funzione MIMO Multi-User",
                           content: "Fate clic per abilitare la funzione MIMO Multi-User."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wireless 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Nome di rete (SSID)",
                           content: "Si consiglia di cambiare il nome di rete (SSID). Questo campo fa distinzione fra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Nascondi SSID",
                           content: "Selezionate se volete nascondere il nome di rete (SSID) 5GHz dall'elenco delle reti wireless. Quando selezionate, lo SSID non sarà più inviato in broadcast e dovrete aggiungervi manualmente alla rete."
                       } ,{                      
                           type: "name",
                           title: "Sicurezza",
                           content: "Selezionate una delle seguenti opzioni di sicurezza:",
       children: [{                      
                           type: "name",
                           title: "Nessuna sicurezza",
                           content: "Selezionate questa opzione per disabilitare la sicurezza wireless. Si sconsiglia questa azione."
                        } ,{   
                            type: "name",
                            title: "WPA2/WPA3-Personale",
							id: "WPA3_5G_TITLE",
                            content: "Selezionate questa opzione per abilitare il metodo di autenticazione standard basato su Pre-shared Key (PSK), noto anche come passphrase. Se selezionato, configurate i seguenti campi.",
                            children: [{
                                type: "name",
                                title: "Versione",
                                content: "Selezionate una versione di sicurezza per la vostra rete wireless.",
                                children: [{
                                    type: "name",
                                    title: "Auto ",
                                    content: "La modalità Auto consente una migrazione graduale ad una rete WPA3-Personal mantenendo la interoperabilità con i dispositivi WPA2-Personal senza interruzioni per gli utenti. Si consiglia di lasciare questa opzione su Auto."
                                },{
                                    type: "name",
                                    title: "WPA3-SAE",
                                    content: "Le reti Wi-Fi protette da WPA3-SAE ricevono una password più efficace basata sull'autenticazione SAE (Simultaneous Authentication of Equals), portando nelle reti una protezione più forte."
                                }]
                            }]
                        },{	                      
                           type: "name",
                           title: "WPA/WPA2-Personale",
                           content: "Selezionate questa opzione per abilitare la sicurezza wireless. Si consiglia di proteggere la rete wireless da accessi non autorizzati. Se la selezionate, configurate i seguenti punti.",
       children: [{                      
                           type: "name",
                           title: "Versione",
                           content: "Selezionate un livello di sicurezza. WPA2-PSK è più sicura. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Crittografia",
                           content: "Selezionate una crittografia di sicurezza. AES è più sicuro. Si consiglia di NON usare la crittografia TKIP se il router opera in modalità 802.11n. Inoltre usando TKIP si disabilita la funzione WPS. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Password",
                           content: "Immettete in questo campo una password wireless composta di 8-63 caratteri ASCII, o 8-64 caratteri esadecimali."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA / WPA2-Enterprise",
                           content: "Selezionate l'opzione per abilitare il metodo di autenticazione più avanzato utilizzando un server RADIUS (Remote Authentication Dial In User Service). Se l'opzione è selezionata, la funzione WPS sarà disabilitata.",
       children: [{                      
                           type: "name",
                           title: "Versione",
                           content: "Selezionate un livello di sicurezza. WPA2 è più sicura. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Crittografia",
                           content: "Selezionate una crittografia di sicurezza. AES è più sicuro. Si consiglia di NON usare la crittografia TKIP se il router opera in modalità 802.11n. Inoltre usando TKIP si disabilita la funzione WPS. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "IP server RADIUS",
                           content: "Immettete l'indirizzo IP del server RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Porta RADIUS",
                           content: "Immettete il numero di porta del server RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Password RADIUS",
                           content: "Immettete la password condivisa del server RADIUS."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           id: "WEP_5G_TITLE",
                           content: "Selezionate questa opzione per abilitare il metodo base di autenticazione se alcuni dei dispositivi client possono accedere in wireless solo tramite WEP (Wired Equivalent Privacy). Se viene selezionata questa opzione, verrà disabilitata la funzione WPS.",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selezionate un tipo di autenticazione per la rete wireless. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Formato chiave WEP",
                           content: "Utilizzate il formato ASCII o selezionate Esadecimale. Il formato ASCII è una combinazione di caratteri alfabetici e numerici. Il formato esadecimale è una combinazione di numeri (0-9) e lettere (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo di chiave",
                           content: "Selezionate la lunghezza della chiave WEP.",
       children: [{                      
                           type: "name",
                           title: "64 bit",
                           content: "Permette di inserire 10 cifre esadecimali (0-9, A-F, a-f) o 5 caratteri ASCII nel campo Valore WEP."
                       } ,{                      
                           type: "name",
                           title: "128 bit",
                           content: "Permette di inserire 26 cifre esadecimali (0-9, A-F, a-f) o 13 caratteri ASCII nel campo Valore WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valore chiave",
                           content: "Immettete la chiave WEP nel rispettivo campo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Canale",
                           content: "Selezionate un canale operativo per la rete wireless 5GHz. Se non si verificano problemi di instabilità wireless, vi consigliamo di lasciare l'impostazione Automatica."
                       } ,{                      
                           type: "name",
                           title: "Potenza di trasmissione",
                           content: "Selezionate Alta, Media o Bassa per specificare la potenza di trasmissione dati. L'impostazione predefinita è Alta."
                       } ,{                      
                           type: "name",
                           id: "atf_5g",
                           title: "Funzione Airtime Fairness",
                           content: "Selezionate questa casella di controllo per abilitare la funzione Airtime Fairness(ATF) che vi consente di ottimizzare il throughput di ogni flusso. Lo schedulatore di traffico ATF usa i target airtime di destinazione per bilanciare l'uso di airtime fra i flussi di destinazione."
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_5g",
                           title: "Funzione MIMO Multi-User",
                           content: "Fate clic per abilitare la funzione MIMO Multi-User."
                       }]
},
       WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "paragraph",
                           content: "WPS (Wi-Fi Protected Setup) fornisce un modo facile per impostare una connessione Wi-Fi protetta."
                       } ,{                      
                           type: "name",
                           title: "Tasto Push (consigliato)",
       content: [ 
                "Questo metodo vi permette di connettere facilmente alla rete wireless qualsiasi dispositivo con WPS abilitato.",
                "Nella scheramta, fate clic su Avvio WPS. Entro 2 minuti, premete il tasto WPS del dispositivo client."]
} ,{                      
                           type: "name",
                           title: "PIN del Router",
       content: [ 
                "Potete trovare il PIN di default sull'etichetta del router.",
                "Fate clic su Genera per ottenere un nuovo PIN o fate clic su Default per riportare il PIN corrente ai valori di default."]
} ,{                      
                           type: "name",
                           title: "Immettete il PIN del Client",
       content: [ 
                "Questo metodo vi permette di aggiungere manualmente un dispositivo wireless.",
                "Immettete nel campo il PIN del dispositivo, quindi fate clic su Connetti."]
}]
},
       WIRELESS_STATISTICS :{ 
               TITLE:"DispositiviWireless Online",
               CONTENT: [{
                           type: "name",
                           title: "Numero client",
                           content: "Mostra il numero del client wireless associato."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "Mostra l'indirizzo MAC del client wireless associato."
                       } ,{                      
                           type: "name",
                           title: "Tipo di connessione",
                           content: "Mostra la frequenza wireless (2.4GHz o 5GHz) del client wireless associato."
                       } ,{                      
                           type: "name",
                           title: "Sicurezza",
                           content: "Mostra il tipo di sicurezza del client wireless associato."
                       } ,{                      
                           type: "name",
                           title: "Pacchetti ricevuti",
                           content: "Mostra il numero di pacchetti ricevuti dal client wireless associato."
                       } ,{                      
                           type: "name",
                           title: "Pacchetti inviati",
                           content: "Mostra il numero di pacchetti inviati dal client wireless associato."
                       } ,{                      
                           type: "paragraph",
                           content: "Fate clic su Aggiorna per aggiornare le informazioni della pagina."
                       }]
},
       WIRELESS_SCHEDULE :{ 
               TITLE:"Pianificazione wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Con la Schedulazione Wireless potete disabilitare il segnale wireless durante periodi di tempo specifici. Per esempio, potete spegnere il segnale wireless fra le 00:00 e le 07:00."
                       } ,{                      
                           type: "name",
                           title: "Tempo di Spegnimento Wireless",
                           content: "Mostra i periodi di tempo durante il quale il segnale wireless è spento.",
       children: [{                      
                           type: "step",
                           title: "Impostazione spegnimento wireless",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Impostate il periodo di tempo durante il quale volete spegnere il segnale wireless.",
                "3. Selezionate i giorni di attività. Potete scegliere \"Ogni Giorno\" o specificare giorni specifici.",
                "4. Fate clic su Salva."]
}]
}]
},
       GUEST_NETWORK_SETTINGS :{ 
               TITLE:"Impostazioni",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa funzione vi permette di dare accesso Wi-Fi agli ospiti senza interessare la rete principale."
                       } ,{                      
                           type: "name",
                           title: "Permetti agli ospiti di vedersi fra loro",
                           content: "Selezionate questa casella di controllo per consentire ai dispositivi wireless della Rete Ospiti di comunicare fra di loro utilizzando Samba, Ping e FTP."
                       } ,{                      
                           type: "name",
                           id: "access_local",
                           title: "Consenti agli ospiti l'accesso alla mia rete locale",
                           content: "Selezionate questa casella di controllo per permettere ai dispositivi wireless della Rete Ospiti di comunicare con i dispositivi connessi alle porte LAN o alla rete principale del router mediante Samba, Ping e FTP."
                       }]
},
       GUEST_NETWORK_WIRELESS :{ 
               TITLE:"Wireless 2.4GHz/5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Abilita ReteOspiti",
                           content: "Selezionate la casella di controllo per abilitare la funzione Rete Ospiti."
                       } ,{                      
                           type: "name",
                           title: "Nome di rete (SSID)",
                           content: "Usate il nome rete Ospiti (SSID) di default o create un nuovo nome (fino a 32 caratteri)."
                       } ,{                      
                           type: "name",
                           title: "Nascondi SSID",
                           content: "Selezionate la casella se desiderate nascondere il nome rete ospiti SSID dall'elenco delle reti Wi-Fi."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Intervallo di aggiornamento password",
                           content: "Selezionate l'intervallo di aggiornamento della passwod della Rete Ospiti."
                       } ,{                      
                           type: "name",
                           title: "Sicurezza",
                           content: "Se scegliete di non aggiornare mai la password, selezionate una delle seguenti opzioni di sicurezza:",
       children: [{                      
                           type: "name",
                           title: "Nessuna sicurezza",
                           content: "Selezionate questa opzione per disabilitare la sicurezza wireless. Si sconsiglia questa azione."
                        } ,{   
                            type: "name",
                            title: "WPA2/WPA3-Personale",
							id: "WPA3_GUEST_TITLE",
                            content: "Selezionate questa opzione per abilitare il metodo di autenticazione standard basato su Pre-shared Key (PSK), noto anche come passphrase. Se selezionato, configurate i seguenti campi.",
                            children: [{
                                type: "name",
                                title: "Versione",
                                content: "Selezionate una versione di sicurezza per la vostra rete wireless.",
                                children: [{
                                    type: "name",
                                    title: "Auto ",
                                    content: "La modalità Auto consente una migrazione graduale ad una rete WPA3-Personal mantenendo la interoperabilità con i dispositivi WPA2-Personal senza interruzioni per gli utenti. Si consiglia di lasciare questa opzione su Auto."
                                },{
                                    type: "name",
                                    title: "WPA3-SAE",
                                    content: "Le reti Wi-Fi protette da WPA3-SAE ricevono una password più efficace basata sull'autenticazione SAE (Simultaneous Authentication of Equals), portando nelle reti una protezione più forte."
                                }]
                            }]
                        },{	                      
                           type: "name",
                           title: "WPA/WPA2-Personale",
                           content: "Selezionate questa opzione per abilitare la sicurezza wireless. Si consiglia di proteggere la Rete Ospiti da accessi non autorizzati. Se la selezionate, configurate i seguenti punti.",
       children: [{                      
                           type: "name",
                           title: "Versione",
                           content: "Selezionate un livello di sicurezza. WPA2-PSK è più sicura. Se non siete sicuri, selezionate Auto."
                       } ,{                      
                           type: "name",
                           title: "Crittografia",
                           content: "Selezionate una crittografia di sicurezza. AES è più sicuro. Si consiglia di NON usare la crittografia TKIP se il router opera in modalità 802.11n. Inoltre usando TKIP si disabilita la funzione WPS. Se non siete sicuri, selezionate Auto."
                       }]
} ,{                      
                           type: "name",
                           id: "portal-help-title",
                           title: "Portale",
                           content: "Portale Autenticazione aumenta la sicurezza della vostra rete richiedendo l'autenticazione ai client che vogliono un accesso temporaneo alla vostra rete wireless."
                       } ,{                      
                           type: "step",
                           id: "portal-help-content",
                           title: "Per impostare Autenticazione portale:",
       content: [ 
                "1. Selezionate il Portale di Sicurezza.",
                "2. Selezionate Password Semplice o Nessuna Autenticazione per l'Autenticazione.",
                "A. Password Semplice – Specificate una password di autenticazione (fra 8 e 16 lettere, numeri e _).",
                "B. Nessuna Autenticazione – I client possono accedere alla rete senza alcuna autenticazione.",
                "3. Selezionate 1 ora, 2 ore, 4 ore, 8 ore o Sempre per specificare il timeout di autenticazione. Quando un'autenticazione client scade, il client deve rifare login per un'autenticazione accesso.",
                "4. (Opzionale) Abilitate Reindirizza e immettete l'indirizzo URL di reindirizzamento come richiesto. Quindi un client nuovamente autenticato verrà reindirizzato alla URL che avete specificato.",
                "5. (Opzionale) Potete anche personalizzare la pagina di login di autenticazione.",
                "A. Titolo Portale – Fino a 31 caratteri.",
                "B. Termini d'Uso – Fino a 1023 caratteri.",
                "C. Immagine Logo – Scaricate un'immagine JPG o PNG (meno di 100KB) per personalizzare il logo.",
                "D. Immagine Sfondo – Scaricate un'immagine JPG o PNG (meno di 2MB) per personalizzare lo sfondo.",
                "6. Fate clic su Salva."]
}]
} ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Password",
                           content: "Crea una password formata da 8 a 63 caratteri ASCII oppure da 8 a 64 caratteri esadecimali (0-9, a-f, A-F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Password",
                           content: "Utilizzate la password generata in modo casuale o create una password composta da 8-63 caratteri ASCII o 8-64 caratteri esadecimali (0-9, a-f, A-F)."
                       }]
},
       NAT :{ 
               TITLE:"ALG",
               CONTENT: [{
                           type: "paragraph",
                           content: "ALG (Application Layer Gateway) permette ai filtri trasversal dei NAT (Network Address Translation) personalizzati di essere connessi al gateway per supportare indirizzo e porta tradotti per certe applicazioni di livello protocollo \"controllo/dati\": FTP, TFTP, H323 etc. Si consiglia di abilitare ALG."
                       } ,{                      
                           type: "name",
                           title: "Abilita ALG FTP",
                           content: "Se selezionata, permette ai client e ai server FTP (File Transfer Protocol) di trasferire i dati via NAT."
                       } ,{                      
                           type: "name",
                           title: "Abilita ALG TFTP",
                           content: "Se selezionata, permette ai client e ai server TFTP (Trivial File Transfer Protocol) di trasferire i dati via NAT."
                       } ,{                      
                           type: "name",
                           title: "Abilita ALG H323",
                           content: "Se selezionata, permette ai client Microsoft NetMeeting di comunicare via NAT."
                       } ,{                      
                           type: "name",
                           title: "Abilita ALG RTSP",
                           content: "Se selezionata, permette ai lettori multimediali client di comunicare con i server di flussi multimediali via NAT."
                       } ,{                      
                           type: "name",
                           title: "Abilita SIP ALG",
                           content: "Se selezionato, consente ai client di comunicare con server SIP (Session Initiation Protocol) tramite NAT."
                       } ,{                      
                           type: "name",
                           title: "Abilita passthrough PPTP",
                           content: "Se selezionata, permette il tunneling delle sessioni point-to-point attraverso una rete IP e il passaggio attraverso il router."
                       } ,{                      
                           type: "name",
                           title: "Abilita passthrough L2TP",
                           content: "Se selezionata, permette il tunneling delle sessioni point-to-point layer 2 attraverso una rete IP e il passaggio attraverso il router."
                       } ,{                      
                           type: "name",
                           title: "Abilita passthrough IPSec",
                           content: "Se selezionato, permette a IPSec (Internet Protocol Security) di avere un tunnel attraverso una rete IP e di passare il router. IPSec usa servizi di crittografia per assicurare comunicazioni sicure e private su reti IP."
                       }]
},
       VIRTUAL_SERVERS :{ 
               TITLE:"Server Virtuali",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "I server virtuali vengono utilizzati per impostare i servizi pubblici sulla rete locale. Un server virtuale è definito come una porta esterna, e tutte le richieste da Internet a questa porta esterna saranno reindirizzate a un computer designato, configurato con un indirizzo IP statico o riservato.",
                "Se installate un server nella rete locale e volete condividerlo su Internet, i Virtual Server possono farlo."]
} ,{                      
                           type: "paragraph",
                           content: "La tabella mostra i parametri rilevanti del virtual server."
                       } ,{                      
                           type: "name",
                           title: "Tipo di servizio",
                           content: "Mostra il nome del virtual server."
                       } ,{                      
                           type: "name",
                           title: "Porta esterna",
                           content: "Mostra il numero di porta o un intervallo di porte utilizzate dal server virtuale."
                       } ,{                      
                           type: "name",
                           title: "IP interno",
                           content: "Mostra l'indirizzo IP del computer che esegue l'applicazione di servizio."
                       } ,{                      
                           type: "name",
                           title: "Porta interna",
                           content: "Mostra il numero di porta del computer che esegue l'applicazione di servizio."
                       } ,{                      
                           type: "name",
                           title: "Protocollo",
                           content: "Mostra il protocollo utilizzato per l'applicazione di servizio: TCP, UDP o All (tutti i protocolli supportati dal router)."
                       } ,{                      
                           type: "name",
                           title: "Stato",
                           content: "Mostra lo stato corrente (abilitato o disabilitato) della regola di filtro specifica. "
                       } ,{                      
                           type: "name",
                           title: "Modifica",
                           content: "Mostra le opzioni per modificare o eliminare la regola corrispondente."
                       } ,{                      
                           type: "step",
                           title: "Per impostare una regola di server virtuale",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Fate clic su Mostra Servizi Esistenti per selezionare un servizio dall'elenco per popolare automaticamente il numero di porta appropriato nei campi Porta esterna e Porta interna. Se il servizio non è presente nell'elenco, immettete il numero della porta esterna (ad es. 21) o un intervallo di porte (ad es. 21-25). Lasciate vuoto il campo Porta interna se è uguale a Porta esterna, oppure immettete un numero di porta specifico (ad es. 21) se la porta esterna è una sola. Inserite l'indirizzo IP del computer che esegue l'applicazione di servizio in formato decimale puntato nel campo IP interno.",
                "3. Selezionate un protocollo per l'applicazione di servizio: TCP, UDP o All dall'elenco a discesa dei Protocolli.",
                "4. Selezionate Abilita.",
                "5. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
       content: [ 
                "1. Se volete disabilitare questa entry, fate clic sull'icona Bulbo.",
                "2. Si consiglia di tenere le impostazioni di default per Porta Interna e Protocollo se sapete quale porta o protocollo usare.",
                "3. Se il dispositivo host locale fa hosting per più di un tipo di servizio disponibile, dovete creare una regola per ogni servizio. Fate attenzione che la Porta Esterna NON sia sovrapposta."]
}]
},
       PORT_TRIGGERING :{ 
               TITLE:"Port Triggering",
               CONTENT: [{
                           type: "paragraph",
                           content: "Port Triggering è utilizzata per inoltrare il traffico su una determinata porta a un server specifico della rete."
                       } ,{                      
                           type: "paragraph",
                           content: "La tabella mostra i parametri rilevanti del port triggering."
                       } ,{                      
                           type: "name",
                           title: "Applicazione",
                           content: "Mostra il nome dell'applicazione."
                       } ,{                      
                           type: "name",
                           title: "Port Triggering",
                           content: "Mostra la porta del traffico in uscita utilizzata per attivare una regola di filtro di una connessione in uscita."
                       } ,{                      
                           type: "name",
                           title: "Protocollo Triggering",
                           content: "Mostra il protocollo utilizzato per l'Port Triggering. TCP, UDP o All (tutti i protocolli supportati dal router)."
                       } ,{                      
                           type: "name",
                           title: "Porta esterna",
                           content: "Mostra la porta o l'intervallo di porte utilizzate dal sistema remoto. Tramite una di queste porte sarà inoltrata una risposta al PC che attiva la regola. Potete immettere al massimo 5 gruppi di porte (o sezioni di porte). Ogni gruppo di porte deve essere separato da \",\" (virgola), ad esempio, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
                       } ,{                      
                           type: "name",
                           title: "Protocollo esterno",
                           content: "Mostra il protocollo utilizzato per la porta in ingresso: TCP, UDP o Tutti (tutti i protocolli supportati dal router)."
                       } ,{                      
                           type: "name",
                           title: "Stato",
                           content: "Mostra lo stato corrente (abilitato o disabilitato) della regola di filtro specifica. "
                       } ,{                      
                           type: "name",
                           title: "Modifica",
                           content: "Mostra le opzioni per modificare o eliminare la regola corrispondente."
                       } ,{                      
                           type: "step",
                           title: "Per impostare una regola di Port Triggering",
       content: [{                      
                           type: "note",
                           title: "Nota",
                           content: "Ogni regola può essere utilizzata da un solo host per volta."
                       },
                "1. Fate clic su Aggiungi.",
                "2. Fate clic su Mostra applicazioni esistenti per selezionare un'applicazione dall'elenco e popolare automaticamente i campi con i valori predefiniti appropriati. Se desiderate aggiungere un'applicazione non inclusa nell'elenco, immettete manualmente Applicazione, Porta Triggering, Protocollo Triggering, Porta Esterna e Protocollo Esterno.",
                "3. Selezionate Abilita.",
                "4. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se volete disabilitare questa regola, fate clic sull'icona Bulbo."
                       }]
},
       DMZ :{ 
               TITLE:"DMZ",
               CONTENT: [{
                           type: "paragraph",
                           content: "La funzione host DMZ (Demilitarized Zone) permette ad un host locale di essere esposto in Internet per servizi speciali quali Internet gaming o videoconferenza. Di base DMZ consente ad un singolo computer della LAN di aprire tutte le sue porte. Questo computer deve essere configurato con un indirizzo IP statico e avere la sua funzione DHCP client disabilitata."
                       } ,{                      
                           type: "paragraph",
                           content: "Quando DMZ è abilitato, l'host DMZ è esposto totalmente su Internet, e potrebbero esserci rischi di sicurezza per il computer. Se DMZ non è in uso, disabilitatelo del tutto."
                       } ,{                      
                           type: "step",
                           title: "Per assegnare a un computer o un server la funzione di server DMZ",
       content: [ 
                "1. Selezionate Abilita DMZ.",
                "2. Nel campo Indirizzo IP host DMZ, immettete l'indirizzo IP del computer locale che desiderate configurare come host DMZ.",
                "3. Fate clic su Salva."]
}]
},
       UPNP :{ 
               TITLE:"UPnP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Di default, la funzione UPnP (Universal Plug-and-Play) è abilitata per permettere ai dispositivi, quali computer e dispositivi Internet, di rilevare automaticamente e comunicare con ogni altro dispositivo presente nella rete locale."
                       } ,{                      
                           type: "paragraph",
                           content: "Dovete abilitare UPnP se volete usare applicazioni per gaming multigiocatore, connessioni peer-to-peer, comunicazioni in real-time (ad esempio VoIP o videoconferenza VoIP), assistenza da remoto, etc."
                       } ,{                      
                           type: "name",
                           title: "Elenco servizi UPnP",
                           content: "La Lista Servizi UPnP mostra le infiormazioni UPnP degli host locali."
                       }]
},
       MODEM :{ 
               TITLE:"Guida 3G/4G",
               CONTENT: [{
                           type: "name",
                           title: "Modem USB 3G/4G",
                           content: "Visualizza lo stato del modem USB 3G/4G."
                       } ,{                      
                           type: "name",
                           title: "Usa i parametri automatici dell'ISP",
                           content: "Questa funzione è abilitata di default. Se abilitata, il router può identificare l'ISP con la SIM/UIM card e compilare i parametri automaticamente. Se fallisce l'identificazione, selezionate manualmente Regione e ISP Mobile."
                       } ,{                      
                           type: "name",
                           title: "Regione",
                           content: "Seleziona e mostra automaticamente la regione quando il modem USB e la SIM card sono identificate con successo, altrimenti selezionate la regione dal menu a discesa."
                       } ,{                      
                           type: "name",
                           title: "ISP mobile",
                           content: "Visualizza l'ISP (Internet Service Provider) della rete 3G/4G. Se non viene rilevato automaticamente, seleziona l'ISP dal menu a discesa. Il numero di composizione e l'APN vengono popolati automaticamente di conseguenza."
                       } ,{                      
                           type: "name",
                           title: "SIM_UIM_PIN SIM/UIM PIN",
                           content: "Se è abilitata la Protezione SIM/UIM, immettete il codice PIN. La Protezione SIM/UIM è disabilitata di default. Fate attenzione che se immettete per 3 volte un PIN non valido, la SIM/UIM card verra bloccata automaticamente. Potrete sbloccarla solo immettendo il codice PUK da PC/laptop."
                       } ,{                      
                           type: "name",
                           title: "MESSAGE Messaggio",
                           content: "Mostra le informazioni PIN della SIM/UIM card se la Protezione PIN è abilitata."
                       } ,{                      
                           type: "name",
                           title: "Impostazioni Componi numero,APN,Nome utente/Password",
                           content: "Se l'ISP non è elencato nell'elenco <strong>ISP Mobile</strong>, selezionate questa casella di controllo e immettete Dial Number, APN (Access Point Name), Username e Password forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Componi numero",
                           content: "Immettete il Dial Number fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Immettete l'APN (Access Point Name) fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Nome utente/password",
                           content: "Immettete Username e Password forniti dall'ISP. Questi campi fanno distinzione fra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Connessione a richiesta",
                           content: "In questa modalità, la connessione Internet viene terminata automaticamente dopo un periodo di tempo di inattività specificato (Max Idle Time). La connessione verrà ristabilita quando tenterete di accedere nuovamente a Internet."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Occasionalmente, la connessione non può essere scollegata anche se hai specificato il Tempo di inattività max, perché alcune applicazioni continuano ad accedere a Internet nel back-end."
                       } ,{                      
                           type: "name",
                           title: "Connessione automatica",
                           content: "In questa modalità, la connessione Internet si ricollega automaticamente ogni volta che ti disconnetti."
                       } ,{                      
                           type: "name",
                           title: "Connessione manuale",
                           content: "In questa modaltà, puoi cliccare il pulsante Connetti o Disconnetti per controllare manualmente la connessione Internet. Questa modalità supporta anche la funzione Tempo di inattività max. Inserisci nel campo Tempo di inattività max un tempo massimo (in minuti) per cui la connessione Internet può restare disattiva prima di essere interrotta. Il valore predefinito è di 15 minuti. Se desideri che la connessione Internet rimanga attiva sempre, inserisci 0 (zero)."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Occasionalmente, la connessione non può essere scollegata anche se hai specificato il Tempo di inattività max, perché alcune applicazioni continuano ad accedere a Internet nel back-end."
                       } ,{                      
                           type: "paragraph",
                           content: "Fate clic su Salva per salvare le impostazioni."
                       }]
},
       MODEM_ADVANCED :{ 
               TITLE:"Guida alle impostazioni avanzate 3G/4G",
               CONTENT: [{
                           type: "name",
                           title: "Modem USB 3G/4G",
                           content: "Visualizza lo stato del modem USB 3G/4G."
                       } ,{                      
                           type: "name",
                           title: "Usa i parametri automatici dell'ISP",
                           content: "Questa funzione è abilitata di default. Se abilitata, il router può identificare l'ISP con la SIM/UIM card e compilare i parametri automaticamente. Se fallisce l'identificazione, selezionate manualmente Regione e ISP Mobile."
                       } ,{                      
                           type: "name",
                           title: "Regione",
                           content: "Seleziona e mostra automaticamente la regione quando il modem USB e la SIM card sono identicate con successo, altrimenti selezionate la regione dal menu a discesa."
                       } ,{                      
                           type: "name",
                           title: "ISP mobile",
                           content: "Visualizza l'ISP (Internet Service Provider) della rete 3G/4G. Se non viene rilevato automaticamente, seleziona l'ISP dal menu a discesa. Il numero di composizione e l'APN vengono popolati automaticamente di conseguenza."
                       } ,{                      
                           type: "name",
                           title: "SIM_UIM_PIN SIM/UIM PIN",
                           content: "Se è abilitata la Protezione SIM/UIM, immettete il codice PIN. La Protezione SIM/UIM è disabilitata di default. Fate attenzione che se immettete per 3 volte un PIN non valido, la SIM/UIM card verra bloccata automaticamente. Potrete sbloccarla solo immettendo il codice PUK da PC/laptop."
                       } ,{                      
                           type: "name",
                           title: "MESSAGE Messaggio",
                           content: "Mostra le informazioni PIN della SIM/UIM card se la Protezione PIN è abilitata."
                       } ,{                      
                           type: "name",
                           title: "Impostazioni Componi numero,APN,Nome utente/Password",
                           content: "Se l'ISP non è elencato nell'elenco <strong>ISP Mobile</strong>, selezionate questa casella di controllo e immettete Dial Number, APN (Access Point Name), Username e Password forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Componi numero",
                           content: "Immettete il Dial Number fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Immettete l'APN (Access Point Name) fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Nome utente/password",
                           content: "Immettete Username e Password forniti dall'ISP. Questi campi fanno distinzione fra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Connessione a richiesta",
                           content: "In questa modalità, la connessione Internet viene terminata automaticamente dopo un periodo di tempo di inattività specificato (Max Idle Time). La connessione verrà ristabilita quando tenterete di accedere nuovamente a Internet."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Occasionalmente, la connessione non può essere scollegata anche se hai specificato il Tempo di inattività max, perché alcune applicazioni continuano ad accedere a Internet nel back-end."
                       } ,{                      
                           type: "name",
                           title: "Connessione automatica",
                           content: "In questa modalità, la connessione Internet si ricollega automaticamente ogni volta che ti disconnetti."
                       } ,{                      
                           type: "name",
                           title: "Connessione manuale",
                           content: "In questa modaltà, puoi cliccare il pulsante Connetti o Disconnetti per controllare manualmente la connessione Internet. Questa modalità supporta anche la funzione Tempo di inattività max. Inserisci nel campo Tempo di inattività max un tempo massimo (in minuti) per cui la connessione Internet può restare disattiva prima di essere interrotta. Il valore predefinito è di 15 minuti. Se desideri che la connessione Internet rimanga attiva sempre, inserisci 0 (zero)."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Occasionalmente, la connessione non può essere scollegata anche se hai specificato il Tempo di inattività max, perché alcune applicazioni continuano ad accedere a Internet nel back-end."
                       } ,{                      
                           type: "name",
                           title: "Tipo di autenticazione",
                           content: "Selezionate un tipo di autenticazione. Di default è Auto. Alcuni ISP richiedono uno specifico tipo di autenticazione, verificatelo con l'ISP o lasciate le impostazioni di default."
                       } ,{                      
                           type: "name",
                           title: "Automatica",
                           content: "Se Auto (default), il router determina automaticamente il tipo di autenticazione usato dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "PAP",
                           content: "Se è impostato PAP (Password Authentication Protocol), il router si autentica con il suo peer utilizzando due handshake. Seleziona questa opzione se l'ISP richiede questo tipo di autenticazione."
                       } ,{                      
                           type: "name",
                           title: "CHAP",
                           content: "Se è impostato CHAP (Challenge Handshake Authentication Protocol), il router si autentica con il peer utilizzando tre handshake e convalida periodicamente l'identità del peer. Seleziona questa opzione se l'ISP richiede questo tipo di autenticazione."
                       } ,{                      
                           type: "name",
                           title: "Dimensione MTU",
                           content: "La dimensione di default della MTU (Maximum Transmission Unit) è 1480 bytes. Non cambiatela a meno che non sia richiesto dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Utilizza i seguenti server DNS",
                           content: "Se l'ISP fornisce gli indirizzi IP dei server DNS, selezionate questa casella di controllo e immettete qui sotto gli indirizzi IP di <strong>DNS primario</strong> e DNS secondario (opzionale). Altrimenti, i server DNS verranno assegnati dinamicamente dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "DNS primario",
                           content: "Immettete l'indirizzo IP DNS in formato puntato decimale fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "DNS secondario",
                           content: "(Opzionale) Immettete un altro indirizzo IP DNS in formato puntato decimale fornito dall'ISP."
                       } ,{                      
                           type: "paragraph",
                           content: "Fate clic su <strong>Salva</strong> per salvare le impostazioni."
                       }]
},
       DISK_SETTING :{ 
               TITLE:"ImpostazioniDispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "La pagina Impostazioni dispositivo visualizza le informazioni di qualsiasi dispositivo di storage USB collegato tramite la porta USB."
                       } ,{                      
                           type: "name",
                           title: "Scansiona",
                           content: "Solitamente il router rileva automaticamente qualsiasi dispositivo appena collegato. Se ciò non avviene, fate clic sul pulsante per eseguire l'analisi di ogni nuovo dispositivo connesso e aggiornare la pagina con le informazioni aggiornate."
                       } ,{                      
                           type: "name",
                           title: "Volume",
                           content: "Mostra il nome del volume USB."
                       } ,{                      
                           type: "name",
                           title: "Capacità",
                           content: "Mostra la capacità di storage totale del dispositivo USB. "
                       } ,{                      
                           type: "name",
                           title: "Spazio libero",
                           content: "Mostra lo spazio di storage corrente disponibile. "
                       } ,{                      
                           type: "name",
                           title: "Rimozione sicura",
                           content: "Fate clic sul pulsante per disconnettere in modo sicuro il dispositivo di storage USB prima di scollegarlo fisicamente dal router."
                       } ,{                      
                           type: "paragraph",
                           content: "Il tasto Rimuovi appare solo quando il dispositivo di storage USB è connesso al router. Quando il volume corrente è impegnato, non potete smontarlo."
                       } ,{                      
                           type: "name",
                           title: "Stato",
                           content: "Questa casella di controllo appare solo quando vi è un dispositivo di storage USB collegato al router. Selezionate per abilitare la condivisione di file del dispositivo USB."
                       } ,{                      
                           type: "step",
                           title: "Per impostare un file server",
       content: [ 
                "1. Collegate il dispositivo storage USB alla porta USB del router tramite un cavo USB.",
                "2. Il nuovo dispositivo USB dovrebbe essere rilevato automaticamente dal router e le relative informazioni visualizzate nella sezione Impostazioni dispositivo. In caso contrario, fate clic su Scansiona.",
                "3. Selezionate Attiva per attivare la condivisione di file."]
}]
},
       FOLDER_SHARE_ACCOUNT :{ 
               TITLE:"CondivisioneAccesso",
               CONTENT: [{
                           type: "name",
                           title: "Account",
                           content: "È possibile selezionare Utilizza account di default per accedere ai file e alle cartelle condivise o Utilizza nuovo account e immettere le seguenti informazioni per creare un nuovo account utente."
                       } ,{                      
                           type: "name",
                           title: "Nome utente/password",
                           content: "Inserisci un nome utente tra 1 e 15 caratteri alfanumerici o stringa di caratteri di sottolineatura e una password tra 1 e 15 caratteri ASCII. Questi campi rispettano le maiuscole/minuscole."
                       } ,{                      
                           type: "name",
                           title: "Conferma password",
                           content: "Immettete nuovamente la password per confermare che non ci siano errori di battitura. Il campo fa distinzione tra maiuscole e minuscole."
                       } ,{                      
                           type: "paragraph",
                           content: "Fate clic su Salva per salvare tutte le impostazioni."
                       }]
},
       FOLDER_SHARE_SETTINGS :{ 
               TITLE:"ImpostazioniCondivisione",
               CONTENT: [{
                           type: "name",
                           title: "Rete/Nome server multimediale",
                           content: "Mostra il nome utilizzato per accedere al dispositivo di storage USB collegato."
                       } ,{                      
                           type: "name",
                           title: "Abilita",
                           content: "Selezionate per abilitare il metodo di accesso."
                       } ,{                      
                           type: "name",
                           title: "Metodo di accesso",
                           content: "Esistono tre metodi di accesso al dispositivo di storage USB collegato. È possibile scegliere uno o più metodi di accesso selezionando la casella di controllo corrispondente.",
       children: [{                      
                           type: "name",
                           title: "Risorse di rete",
                           content: "Se abilitato, gli utenti della rete possono accedere al dispositivo di storage USB usando un indirizzo IP assegnato (es. \\\\192.168.0.1)."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Se abilitato, i client FTP della rete locale possono accedere al dispositivo di storage USB usando l'indirizzo IP assegnato, seguito dal numero porta del server FTP (es. ftp://192.168.0.1:21)."
                       } ,{                      
                           type: "name",
                           title: "FTP (via Internet)",
                           content: "Se abilitato, gli utenti possono accedere da remoto all'unità di storage USB tramite FTP via Internet. La funzione supporta download e upload dei file. Per cambiare il numero di porta del server FTP, immettete un numero di porta e fate clic su Salva per applicare le modifiche."
                       }]
} ,{                      
                           type: "name",
                           title: "Collegamento",
                           content: "Mostra l'indirizzo utilizzato per accedere al dispositivo storage USB condiviso."
                       } ,{                      
                           type: "name",
                           title: "Porta",
                           content: "Visualizza il numero di porta del server FTP. Utilizza il valore predefinito 21 o un valore compreso tra 1024 e 65535."
                       } ,{                      
                           type: "paragraph",
                           content: "Fate clic su Salva per salvare tutte le impostazioni."
                       }]
},
       FOLDER_SHARE_FOLDERS :{ 
               TITLE:"CondivisioneCartella",
               CONTENT: [{
                           type: "name",
                           title: "Condividi tutte",
                           content: "Attivate per condividere tutti i file e le cartelle o disattivate per condividere solo le cartelle selezionate."
                       } ,{                      
                           type: "name",
                           title: "Abilita autenticazione",
                           content: "Vi consigliamo di abilitare l'autenticazione per richiedere agli utenti di inserire nome utente e password validi per accedere alle cartelle di condivisione."
                       } ,{                      
                           type: "name",
                           title: "Nome cartella",
                           content: "Mostra il nome della cartella condivisa."
                       } ,{                      
                           type: "name",
                           title: "Percorso cartella",
                           content: "Mostra il percorso della cartella condivisa."
                       } ,{                      
                           type: "name",
                           title: "Condivisione file multimediali",
                           content: "Indica se la cartella condivisa può essere utilizzata o meno per condividere file multimediali."
                       } ,{                      
                           type: "name",
                           title: "Nome volume",
                           content: "Mostra il nome del volume condiviso."
                       } ,{                      
                           type: "name",
                           title: "Stato",
                           content: "Mostra lo stato della cartella condivisa per mezzo dall'indicatore a lampadina."
                       } ,{                      
                           type: "name",
                           title: "Modifica",
                           content: "Mostra le opzioni per modificare o eliminare la cartella condivisa corrispondente."
                       } ,{                      
                           type: "name",
                           title: "Sfoglia",
                           content: "Fate clic per cercare una cartella di condivisione."
                       } ,{                      
                           type: "name",
                           title: "Consentiaccesso a rete ospiti",
                           content: "Selezionate per consentire ai client sulla rete ospiti di accedere alle cartelle condivise."
                       } ,{                      
                           type: "name",
                           title: "Abilita autenticazione",
                           content: "Selezionate per richiedere agli utenti di accedere alle cartelle condivise con un nome utente e una password validi."
                       } ,{                      
                           type: "name",
                           title: "Attiva accesso in scrittura",
                           content: "Selezionate per consentire agli utenti di apportare modifiche al contenuto della cartella."
                       } ,{                      
                           type: "name",
                           title: "Attiva condivisione file multimediali",
                           content: "Selezionate per abilitare la condivisione multimediale."
                       } ,{                      
                           type: "name",
                           title: "Aggiorna",
                           content: "Fate clic per aggiornare l'elenco delle cartelle di condivisione."
                       }]
},
       PRINT_SERVER :{ 
               TITLE:"Print Server",
               CONTENT: [{
                           type: "name",
                           title: "Print Server",
                           content: "Spostate su Acceso per abilitare la funzione Print Server."
                       } ,{                      
                           type: "name",
                           title: "Nome stampante",
                           content: "Mostra il nome della stampante connessa al router."
                       }]
},
       TIME_MACHINE :{ 
               TITLE:"Time Machine",
               CONTENT: [{
                           type: "paragraph",
                           content: "Time Machine fa il backup di tutti i file del vostro computer Mac su un dispositivo di storage USB collegato al vostro modem router."
                       } ,{                      
                           type: "name",
                           title: "Abilita",
                           content: "Selezionate questa casella di controllo per abilitare la funzione Time Machine."
                       } ,{                      
                           type: "name",
                           title: "Disco Backup",
                           content: "Selezionate una destinazione per i backup Time Machine."
                       } ,{                      
                           type: "name",
                           title: "Limite Dimensione per i Backup",
                           content: "Allocate lo spazio disco che può essere usato per i backup Time Machine. 0 significa nessun limite allo spazio."
                       } ,{                      
                           type: "name",
                           title: "Salva",
                           content: "Fate clic per salvare le vostre impostazioni."
                       }]
},
       OFFLINE_DOWNLOAD :{ 
               TITLE:"Offline Download",
               CONTENT: [{
                           type: "paragraph",
                           content: "Con Offline Download abilitato, il router può scaricare file senza tenere acceso il computer per tutto il tempo."
                       } ,{                      
                           type: "name",
                           title: "Stato",
                           content: "Spostate su Acceso per abilitare la funzione Offline Download."
                       } ,{                      
                           type: "name",
                           title: "Percorso cartella",
                           content: "Selezionate una directory per archiviare i download.",
       children: [{                      
                           type: "note",
                           title: "Nota",
                           content: "Non cambiate la directory ne smontate il dispositivo di storage USB quando state facendo upload o download di file; possono verificarsi gravi problemi."
                       }]
} ,{                      
                           type: "name",
                           title: "Schedulazione",
                           content: "Selezionate la casella di controllo per abilitare la Schedulazione che vi permette di specificare il periodo di tempo per fare download/upload dei file."
                       } ,{                      
                           type: "name",
                           title: "Mantieni aggiornamento dopo che è stata completata l'attività",
                           content: "Selezionate la casella di controllo per tenere i dati di uploading dei download completati insieme agli altri."
                       } ,{                      
                           type: "name",
                           title: "Numero Massimo di Download Attivi",
                           content: "Immettete un valore compreso fra 1 e 10 per impostare il numero massimo dei download attivi. Il valore di default è 5."
                       }]
},
       OFFLINE_DOWNLOAD_ITEMS :{ 
               TITLE:"Download",
               CONTENT: [{
                           type: "note",
                           title: "File",
                           content: "Mostra nome e tipo dei file scaricati."
                       } ,{                      
                           type: "note",
                           title: "Velocità",
                           content: "Mostra la velocità corrente di download o upload."
                       } ,{                      
                           type: "note",
                           title: "Completato",
                           content: "Mostra il progresso del download."
                       } ,{                      
                           type: "note",
                           title: "Tempo Rimanente",
                           content: "Mostra il tempo rimanente del download."
                       } ,{                      
                           type: "note",
                           title: "Peer Connessi",
                           content: "Mostra il numero di peer connessi dei download."
                       } ,{                      
                           type: "note",
                           title: "Stato",
                           content: "Mostra lo stato corrente del download (download, attesa, pausa, completato o errore)."
                       } ,{                      
                           type: "name",
                           title: "Aggiungi un nuovo download",
       children: [{                      
                           type: "step",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Selezionate la sorgente di download, torrent da PC, torrent da USB, o URL.",
                "3. Selezionate la posizione torrent per BT, o immettete la URL per FTP, HTTP ed aMule.",
                "4. Fate clic su Salva.",
                "5. Per aMule, specificate indirizzo IP e porta per il server aMule in Avanzate > Server aMule."]
}]
} ,{                      
                           type: "name",
                           title: "Elimina download",
                           content: "Selezionate la casella di controllo corrispondente dei download che volete eliminare, quindi fate clic su Elimina sopra la tabella."
                       } ,{                      
                           type: "name",
                           title: "Metti in pausa i download",
                           content: "Fate clic sulla casella di controllo corrispondente dei download che volete mettere in pausa, quindi fate clic su Pausa sopra la tabella."
                       } ,{                      
                           type: "name",
                           title: "Riprendi i download",
                           content: "Fate clic sulla casella di controllo corrispondente ai download che volete riprendere, quindi fate clic su Riprendi sopra la tabella."
                       }]
},
       OFFLINE_DOWNLOAD_ADVANCED :{ 
               TITLE:"Avanzata",
               CONTENT: [{
                           type: "name",
                           title: "Limiti Velocità",
                           content: "Specificate la velocità massima di download e upload della connessione Internet."
                       } ,{                      
                           type: "name",
                           title: "Velocità Massima Download",
                           content: "Immettete un valore compreso fra 1 e 100000 kB/s per impostare la velocità massima di download. Il valore di default è 1024."
                       } ,{                      
                           type: "name",
                           title: "Velocità Massima Upload",
                           content: "Immettete un valore compreso fra 1 e 100000 kB/s per impostare la velocità massima di upload. Il valore di default è 1024."
                       } ,{                      
                           type: "name",
                           title: "Numero di Connessioni",
                           content: "Specificate il numero massimo di connessioni."
                       } ,{                      
                           type: "name",
                           title: "Numero Massimo di Connessioni",
                           content: "Immettete un valore compreso fra 1 e 200 per impostare il numero massimo globale di connessioni. Il valore di default è 100."
                       } ,{                      
                           type: "name",
                           title: "Numero Massimo di Peer Connessi per Torrent",
                           content: "Immettete un valore compreso fra 1 e 100 per impostare il numero massimo di peer connessi per torrent. Il valore di default è 50."
                       } ,{                      
                           type: "name",
                           title: "Abilita Rete DHT",
                           content: "Abilitate questa funzione per migliorare l'efficienza per trovare i peer così che possiate incrementare la velocità di download."
                       } ,{                      
                           type: "name",
                           title: "Abilita Peer Exchange",
                           content: "Abilitate questa funzione per migliorare l'efficienza della comunicazione fra il gruppo di peer così che possiate incrementare la velocità di download."
                       } ,{                      
                           type: "name",
                           title: "Abilita Protocollo Crittografia BitTorrent ",
                           content: "Abilitate questa funzione per potenziare privacy e riservatezza durante il processo della trasmissione dati."
                       } ,{                      
                           type: "name",
                           title: "Server aMule ",
                           content: "Immettete indirizzo IP e porta del server aMule. Il download di aMule opera solo quando il router è connesso al server."
                       }]
},
       PARENTAL_CONTROL :{ 
               TITLE:"Parental Control",
               CONTENT: [{
                           type: "paragraph",
                           content: "Con Parental Control potete bloccare siti web inappropriati o pericolosi; l'accesso limitato a certi periodi del giorno (Per esempio, Facebook o YouTube durante l'orario di lavoro)."
                       }]
},
       PARENTAL_CONTROL_DEVICES :{ 
               TITLE:"Dispositivi Sotto Parental Controls",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa tabella mostra le informazioni e le impostazioni dei dispositivi che sono limitati dal Parental Control."
                       } ,{                      
                           type: "step",
                           title: "Per limitare un nuovo dispositivo client",
       content: [ 
                "1. Spostate su Acceso Parental Control.",
                "2. Fate clic su Aggiungi.",
                "3. Fate clic su Scansione per scegliere un dispositivo connesso dall'elenco Dispositivi Accesso; o immettete manualmente Nome Dispositivo e Indirizzo MAC per aggiungere un dispositivo che non è connesso.",
                "4. Fate clic su Tempo Effettivo per specificare un periodo di tempo durante il quale si applicano le restrizioni.",
                "5. Immettete una breve descrizione nel campo Descrizione. Questa campo è opzionale.",
                "6. Selezionate Abilita Questo Entry.",
                "7. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se volete disabilitare questa entry, fate clic sull'icona Bulbo."
                       }]
},
       PARENTAL_CONTROL_RESTRICTION :{ 
               TITLE:"Restrizione contenuto",
               CONTENT: [{
                           type: "paragraph",
                           content: "Restrizione Contenuto vi permette di limitare l'accesso a specifici siti web usando parole chiave e nomi dominio. Essendo i dispositivi client controllati da Parental Control possono o non possono accedere a questi siti web secondo la policy di limitazione che selezionate."
                       } ,{                      
                           type: "step",
                           title: "Specifica il contenuto per l'accesso",
       content: [ 
                "1. Spostate su Acceso Restrizione Contenuto.",
                "2. Selezionate la Policy di Limitazione secondo le vostre necessità:",
                "A. Se volete che i dispositivi controllati possano accedere a tutti i siti web eccetto alcuni, selezionate Blacklist.",
                "B. Se volete che i dispositivi controllati possano accedere solo ad alcuni i siti web, selezionate Whitelist.",
                "3. Fate clic su Aggiungi una Nuova Parola Chiave per aggiungere una parola chiave di indirizzo web (per esempio, wikipedia) o nome dominio alla Blacklist o alla Whitelist.",
                "4. Fate clic su Salva."]
}]
},
       PARENTAL_CONTROL_V2 :{ 
               TITLE:"Parental Control",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mediante profili utente, filtro contenuto e limiti accesso, il Parental Control fornisce ad ogni membro della vostra famiglia un accesso a Internet personalizzata e appropriata."
                       } ,{                      
                           type: "step",
                           title: "Per applicare il Parental Control ad un nuovo dispositivo",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Immettete un nome per questo profilo e fate clic su \"+\" per aggiungere il dispositivo a questo profilo.",
                "3. Personalizzate il Contenuto Bloccato secondo le vostre esigenze. Tutti i siti web che contengono le parole chiave verranno bloccati.",
                "4. Se volete limitare il tempo totale online di questo profilo, abilitate e specificate i Limiti di Tempo. Potete usare anche il Periodo di Tempo Vietato per impostare il periodo di tempo giornaliero durante il quale i dispositivi sotto questo profilo non possono usare Internet.",
                "5. Fate clic su Salva."]
} ,{                      
                           type: "step",
                           title: "Per veder lo storico dettagliato di Internet di un profilo",
       content: [ 
                "1. Nella colonna Insights, fate clic sul pulsante Insights corrispondente.",
                "2. Se volete vedere più dati, fate clic sul tasto Storico <span class=\"ptl-ctr-help-icon history\"></span>.",
                "3. Potete bloccare o sbloccare dei siti web facendo clic su <span class=\"ptl-ctr-help-icon block\"></span> o <span class=\"ptl-ctr-help-icon unblock\"></span>."]
} ,{                      
                           type: "step",
                           title: "Disabilitate o abilitate all'istante l'accesso a Internet",
       content: [ 
                "Nella colonna Accesso Internet, fate clic su <span class=\"ptl-ctr-help-icon stop\"></span> per vietare l'accesso a Internet ai dispositivi del profilo corrispondente e fate clic su <span class=\"ptl-ctr-help-icon enable\"></span> per riabilitare l'accesso."]
}]
},
       QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "QoS (Quality of Service) vi aiuta a dare priorità al traffico Internet secondo le vostre necessità. Potete specificare il livello di priorità per un dispositivo, una porta fisica o un'applicazione nell'elenco regole QoS."
                       } ,{                      
                           type: "note",
                           id: "qos-boost",
                           title: "Nota",
                           content: "Se è abilitato NAT Boost, è necessario disabilitare QoS."
                       } ,{                      
                           type: "name",
                           title: "Larghezza banda di Upload",
                           content: "Immettete la banda massima di upload fornita dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Larghezza di banda di download",
                           content: "Immettete la banda massima di download fornita dall'ISP."
                       }]
},
       QOS_ADV :{ 
               TITLE:"Avanzata",
               CONTENT: [{
                           type: "name",
                           title: "Priorità Alta/Media/Bassa",
                           content: "Specificate una percentuale per la priorità di traffico alta/media/bassa.",
       children: [{                      
                           type: "note",
                           title: "Nota",
                           content: "Il livello massimo (percentuale) di tutte le priorità è 1."
                       }]
}]
},
       QOS_RULE :{ 
               TITLE:"Elenco regole QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Qui potete aggiungere dettagliate regole QoS per dare prorità al traffico Internet."
                       } ,{                      
                           type: "step",
                           title: "Imposta una regola QoS",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Selezionate un tipo di priorità da aggiungere alla regola QoS.",
                "Per Dispositivo - Fate clic su Scansiona per selezionare il dispositivo desiderato, o immettete manualmente un nome dispositivo e il suo indirizzo MAC.",
                "Per Applicazione - Selezionate l'applicazione desiderata o personalizzate un'applicazione configurando nome, protocollo e porta di destinazione (1-65535). Potete immettere una o più porte o un range di porte, separate da virgole (es. 21,36-105,111).",
                "Per Porta Fisica - Selezionate la porta desiderata.",
                "3. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Potete trascinare una regola fra differenti liste di priorità per modificare le priorità."
                       }]
},
       QOS_DATABASE :{ 
               TITLE:"Aggiornamento Database",
               CONTENT: [{
                           type: "paragraph",
                           content: "Trovate la versione più aggiornata del database in www.tp-link.it. Potete scaricare e aggiornare il database del router per estendere le applicazioni supportate."
                       } ,{                      
                           type: "name",
                           title: "Nuovo file di database",
                           content: "Fate clic su Cerca per localizzare il file più aggiornato del database. Selezionatelo e fate clic su Aggiorna per aggiornare il database all'ultima versione."
                       }]
},
       QOS_V2 :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "QoS (Quality of Service) vi permette di dare priorità al traffico Internet di specifici dispositivi per garantire loro una connessione più veloce."
                       }]
},
       QOS_GLOBAL_SETTINGS :{ 
               TITLE:"Impostazioni Globali",
               CONTENT: [{
                           type: "paragraph",
                           content: "Banda Upload - Immettete la banda massima di upload fornita dal vostro ISP."
                       } ,{                      
                           type: "paragraph",
                           content: "Banda Download - Immettete la banda massima di download fornita dal vostro ISP."
                       }]
},
       QOS_DEVICE_PRIORITY :{ 
               TITLE:"Priorità Dispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "Scegliete il/i dispositivo/i cui volete dare priorità e per quanto tempo avrà la priorità."
                       } ,{                      
                           type: "step",
                           title: "Per dare priorità sd un dispositivo",
       content: [ 
                "1. Trovate nella lista il dispositivo cui volete assegnare la priorità e spostate su Priorità.",
                "2. Selezionate quanto a lungo il dispositivo avrà la priorità assegnata nella colonna Tempo."]
}]
},
       SECURITY_FIREWALL :{ 
               TITLE:"Firewall",
               CONTENT: [{
                           type: "name",
                           title: "Firewall SPI",
                           content: "Il Firewall SPI (Stateful Packet Inspection) previene cyber attacchi e valida il traffico che passa attraverso il router in base al protocollo. Questa funzione è abilitata di default."
                       }]
},
       SECURITY_DOS :{ 
               TITLE:"ProtezioneDoS",
               CONTENT: [{
                           type: "name",
                           title: "ProtezioneDoS",
                           content: "Protezione DoS (Denial of Service) protegge la LAN da attacchi DoS che inondano la rete con richieste server. Potete filtrare le 3 seguenti modalità di attacco secondo le vostre necessità. Vi sono 4 livelli per ogni filtro:",
       children: [{                      
                           type: "name",
                           title: "Disattivata",
                           content: "Nessuna protezione."
                       } ,{                      
                           type: "name",
                           title: "Bassa",
                           content: "Livello basso di protezione e impatto basso sulle prestazioni del router."
                       } ,{                      
                           type: "name",
                           title: "Media",
                           content: "Livello moderato di protezione e impatto moderato sulle prestazioni del router."
                       } ,{                      
                           type: "name",
                           title: "Alta",
                           content: "Livello alto di protezione e impatto notevole sulle prestazioni del router."
                       }]
} ,{                      
                           type: "name",
                           title: "Filtro attacco ICMP-FLOOD",
                           content: "Abilitate per prevenire attacchi flood ICMP (Internet Control Message Protocol)."
                       } ,{                      
                           type: "name",
                           title: "Filtro attacco UDP-FLOOD",
                           content: "Abilitate per prevenire attacchi flood UDP (User Datagram Protocol)."
                       } ,{                      
                           type: "name",
                           title: "Filtro attacco TCP-SYN-FLOOD",
                           content: "Abilitate per prevenire attacchi flood TCP-SYN (Transmission Control Protocol-Synchronize)."
                       } ,{                      
                           type: "name",
                           title: "Ignora i Pacchetti Ping dalla Porta WAN",
                           content: "Consente di ignorare i pacchetti ping provenienti dalla porta WAN."
                       } ,{                      
                           type: "name",
                           title: "Vieta i Pacchetti Ping dalla Porta LAN",
                           content: "Consente di vietare i pacchetti ping provenienti dalla porta WAN."
                       }]
},
       SECURITY_LIST :{ 
               TITLE:"ElencoDoS Host bloccati",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa tabella mostra indirizzo IP e indirizzo MAC degli host DoS bloccati."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"ControlloAccessi",
               CONTENT: [{
                           type: "paragraph",
                           content: "Controllo Accessi viene usato per autorizzare o bloccare l'accesso alla rete di specifici dispositivi client. Quando un dispositivo è bloccato, non può comunicare con gli altri dispositivi o connettersi a Internet."
                       } ,{                      
                           type: "step",
                           title: "Controllo accessi",
       content: [ 
                "1. Spostate su Acceso per abilitare Controllo Accessi.",
                "2. Se volete anche controllare gli accessi dei dispositivi connessi alla Rete Ospiti, spostate su Acceso il Controllo Dispositivi Ospiti.",
                "3. Selezionate una modalità di accesso secondo le vostre necessità e fate clic su Salva:",
                "A. Se volete bloccare l'accesso ai dispositivi dell'elenco sottostante, selezionate Blacklist.",
                "A. Se volete permettere l'accesso ai dispositivi dell'elenco sottostante, selezionate Whitelist.",
                "4. Nella sezione dispositivi in Blacklist/Whitelist, fate clic su Aggiungi. Immettete nome dispositivo e indirizzo MAC del dispositivo. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se volete disabilitare questa entry, fate clic sull'icona Bulbo."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Dispositivi Online",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa tabella mostra le informazioni dei dispositivi connessi (inclusi i dispositivi connessi alla Rete Ospiti se Controllo Dispositivi Ospiti è abilitato)."
                       }]
},
       IPMAC_BIND_SETTING :{ 
               TITLE:"Binding IP e MAC",
               CONTENT: [{
                           type: "paragraph",
                           content: "IP & MAC Binding (noto anche come ARP Binding) è utile per controllare l'accesso di uno specifico dispositivo della LAN legando insieme l'indirizzo IP e l'indirizzo MAC del dispositivo. IP & MAC binding impedisce inoltre che altri dispositivi possano usare lo stesso indirizzo IP."
                       } ,{                      
                           type: "step",
                           title: "Per impostare un dispositivo con IP & MAC Binding",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Immettete l'indirizzo MAC del dispositivo.",
                "3. Immettete un indirizzo IP che volete legare all'indirizzo MAC qui sopra.",
                "4. Selezionate Abilita.",
                "5. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
       content: [ 
                "1. Non è possibile associare lo stesso indirizzo IP a più indirizzi MAC.",
                "2. Se volete disabilitare questa entry, fate clic sull'icona Bulbo."]
}]
},
       IPMAC_BIND_ARP :{ 
               TITLE:"Lista ARP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa tabella mostra indirizzo MAC e indirizzo IP del dispositivo connesso."
                       }]
},
       IPV6 :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "name",
                           title: "IPv6",
                           content: "IPv6 (Internet Protocol versione 6) è la versione più recente di IP (Internet Protocol) e affronta il problema dell'esaurimento degli indirizzi IPv4 (Internet Protocol version 4)."
                       } ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: IP dinamico"
                       } ,{                      
                           type: "name",
                           title: "IP dinamico",
                           content: "Selezionate questo tipo se l'ISP assegna indirizzi IPv6 dinamici."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IPv6/DNS primario/DNS secondario",
                           content: "Questi parametri sono assegnati automaticamente dal server DHCPv6 dell'ISP."
                       } ,{                      
                           type: "name",
                           title: "Rinnova",
                           content: "Fate clic per ottenere nuovi parametri IPv6 dal server DHCPv6 dell'ISP."
                       } ,{                      
                           type: "name",
                           title: "Rilascia",
                           content: "Fate clic per rilasciare tutti gli indirizzi IPv6 assegnati dal server DHCPv6 dell'ISP."
                       } ,{                      
                           type: "name",
                           title: "Ottieni indirizzo IPv6",
                           content: "Selezionate DHCPv6 per ottenere un indirizzo IPv6 non temporaneo o SLAAC per ottenere un indirizzo IPv6 generato dal pacchetto advertisement del router, in accordo con l'ISP."
                       } ,{                      
                           type: "name",
                           title: "Delegazione Prefisso",
                           content: "Selezionate Abilita per ottenere una Delegazione Prefisso dal Server DHCPv6 dall'ISP, o Disabilita per designare un prefisso indirizzo manualmente. I Client nella LAN genereranno un indirizzo IPv6 con questo prefisso."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo DNS",
                           content: "Selezionate Ottieni Dinamicamente dall'ISP o Usa i Seguenti Indirizzi DNS. Se è selezionato Usa i Seguenti Indirizzi DNS, immettete manualmente l'indirizzo DNS fornito dall'ISP."
                       } ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: IP statico"
                       } ,{                      
                           type: "name",
                           title: "IP statico",
                           content: "Selezionate questo tipo se l'ISP assegna indirizzi IPv6 statici."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IPv6/Gateway predefinito/DNS primario/DNS secondario",
                           content: "Immettete i parametri forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Dimensione MTU",
                           content: "La dimensione tipica di default della MTU (Maximum Transmission Unit) della maggior parte delle reti Ethernet è 1.500 Byte. Consigliamo di NON cambiare la dimensione MTU predefinita se non richiesto dall'ISP."
                       } ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: tunnel 6to4"
                       } ,{                      
                           type: "name",
                           title: "tunnel 6to4",
                           content: "Selezionate questo tipo se l'ISP assegna indirizzi 6to4 deployment."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IPv4/Subnet mask IPv4/Gateway predefinito IPv4/Indirizzo tunnel",
                           content: "Questi parametri saranno generati dinamicamente dalle informazioni IPv4 della porta WAN dopo che avrete fatto clic su Connetti."
                       } ,{                      
                           type: "name",
                           title: "Usa i seguenti server DNS",
                           content: "Selezionate per immettete il DNS primario e/o DNS secondario fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Connetti",
                           content: "Fate clic per connettervi a Internet."
                       } ,{                      
                           type: "name",
                           title: "Disconnetti",
                           content: "Fate clic per disconnettervi da Internet."
                       } ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: PPPoE"
                       } ,{                      
                           type: "name",
                           title: "PPPoE",
                           content: "Selezionate questo tipo se l'ISP usa PPPoEv6, e fornisce una username e una password."
                       } ,{                      
                           type: "name",
                           title: "Nome utente/password",
                           content: "Immettete i parametri forniti dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IPv6",
                           content: "Questo indirizzo verrà assegnato automaticamente dal server DHCPv6 dell'ISP, dopo immettete username e password e fate clic su Connetti."
                       } ,{                      
                           type: "name",
                           title: "Ottieni indirizzo IPv6",
                           content: "Selezionate DHCPv6 per ottenere un indirizzo IPv6 non temporaneo o SLAAC per ottenere un indirizzo IPv6 generato dal pacchetto advertisement del router, o specificato dall'ISP per immettere manualmente l'indirizzo IPv6, in accordo con l'ISP."
                       } ,{                      
                           type: "name",
                           title: "Delegazione Prefisso",
                           content: "Selezionate Abilita per ottenere una Delegazione Prefisso dal Server DHCPv6 dall'ISP, o Disabilita per designare un prefisso indirizzo manualmente. I Client nella LAN genereranno un indirizzo IPv6 con questo prefisso."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo DNS",
                           content: "Selezionate Ottieni Dinamicamente dall'ISP o Usa i Seguenti Indirizzi DNS. Se è selezionato Usa i Seguenti Indirizzi DNS, immettete manualmente l'indirizzo DNS fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Connetti",
                           content: "Fate clic per connettervi a Internet."
                       } ,{                      
                           type: "name",
                           title: "Disconnetti",
                           content: "Fate clic per disconnettervi da Internet."
                       } ,{                      
                           type: "title",
                            title: "Tipo di connessione Internet: Pass-Through (Bridge)"
                       } ,{                      
                           type: "paragraph",
                           content: "Selezionate questo tipo se l'ISP usa Pass-Through (Bridge). Non viene richiesta nessuna configurazione per questo tipo di connessione."
                       }]
},
       IPV6_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ad eccezione della Connessione Internet di tipo Pass-Through (Bridge), gli altri tipi di connessione Internet richiedono configurazione IPv6."
                       } ,{                      
                           type: "name",
                           title: "Tipo assegnato",
                           content: "Selezionate quello appropriato secondo l'ISP.",
       children: [{                      
                           type: "name",
                           title: "DHCPv6",
                           content: "Per assegnare automaticamente gli indirizzi IP ai client della LAN.",
       children: [{                      
                           type: "name",
                           title: "Prefisso indirizzo",
                           content: "Immettete il prefisso indirizzo fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Durata rilascio",
                           content: "È il periodo di durata dell'indirizzo IP assegnato. Lasciate il valore di default di 86400 secondi o cambiatelo se lo richiede l'ISP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo",
                           content: "È l'indirizzo IP assegnato automaticamente dal server DHCPv6 dell'ISP."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC + Stateless DHCP",
       children: [{                      
                           type: "name",
                           title: "Prefisso indirizzo",
                           content: "Immettete il prefisso indirizzo fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo",
                           content: "Questo è l'indirizzo IP assegnato automaticamente dall'ISP."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC+RDNSS",
       children: [{                      
                           type: "name",
                           title: "Prefisso indirizzo",
                           content: "Immettete il prefisso indirizzo fornito dall'ISP."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo",
                           content: "Questo è l'indirizzo IP assegnato automaticamente dall'ISP."
                       }]
},{
    type: "name",
    id:"ipv6_lan_assigned_type_nd_proxy_name",
    title: "ND Proxy",
    content: "Una funzione che fornisce dei proxy ai client LAN in base al Neighbor Discovery Protocol."
}]
}]
},
       IPV6_MAC_CLONE :{ 
               TITLE:"MAC Clone",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selezionate il metodo MAC Clone appropriato secondo le vostre necessità."
                       } ,{                      
                           type: "name",
                           title: "NON clonare indirizzo MAC",
                           content: "NON modificate l'indirizzo MAC di default del router, per evitare l'insorgere di problemi nel caso in cui l'ISP vincoli l'indirizzo IP assegnato all'indirizzo MAC."
                       } ,{                      
                           type: "name",
                           title: "Clona indirizzo MAC computer corrente",
                           content: "Selezionate per copiare l'indirizzo MAC corrente del computer connesso al router, nel caso in cui l'ISP vincoli l'indirizzo IP assegnato all'indirizzo MAC del computer."
                       } ,{                      
                           type: "name",
                           title: "Utilizza indirizzo MAC personalizzato",
                           content: "Immettete l'indirizzo MAC manualmente, nel caso in cui l'ISP vincoli l'indirizzo IP assegnato a un indirizzo MAC specifico."
                       }]
},
       TIME_SETTING :{ 
               TITLE:"Impostazione data/ora",
               CONTENT: [{
                           type: "paragraph",
                           content: "Configurazione Orario vi permette di configurare l'ora di sistema del router. Una volta modificata, l'ora del sistema verrà applicata alle funzioni e alle configurazioni time-based come Parental Control."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Potete spostare su Acceso per abilitare la visualizzazione sulle 24 ore prima della configurazione. Verrà applicata alle funzioni e alle configurazioni di sistema time-based."
                       } ,{                      
                           type: "title",
                            title: "Ora sistema"
                       } ,{                      
                           type: "step",
                           title: "Ottieni ora da Internet",
       content: [ 
                "Selezionato di default, Ottieni da Internet vi consente di ottenere l'ora del sistema da Internet.",
                "1. Selezionate Ottieni da Internet.",
                "2. Selezionate il Fuso Orario locale dal menu a discesa.",
                "3. Nel campo server NTP immettete l'indirizzo IP o il nome dominio del server NTP desiderato.",
                "4. Nel campo Server NTP II, immettete l'indirizzo IP o il nome di dominio del secondo server NTP (facoltativo).",
                "5. Fate clic su Ottieni.",
                "6. Fate clic su Salva."]
} ,{                      
                           type: "step",
                           title: "Ottieni ora dal PC",
       content: [ 
                "Questa funzione vi permette di ottenere l'ora di sistema dal PC. Controllate l'ora del PC prima della configurazione.",
                "Selezionate Ottieni da PC e fate clic su Salva."]
} ,{                      
                           type: "step",
                           title: "Imposta ora manualmente",
       content: [ 
                "Se il dispositivo non può ottenere automaticamente l'ora da Internet o dal PC, potete configurare manualmente l'ora del sistema.",
                "1. Selezionate Manualmente.",
                "2. Immettete Data e Ora.",
                "3. Fate clic su Salva."]
}]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Ora legale",
                           content: "Questa funzione può sincronizzare automaticamente l'ora di sistema con l'ora legale."
                       } ,{                      
                           type: "step",
                           title: "Per impostare l'ora legale",
       content: [ 
                "1. Selezionate Attiva ora legale.",
                "2. Specificate un lasso di tempo dell'ora legale nel fuso orario locale.",
                "3. Fate clic su Salva."]
}]
},
       DIGNOSTIC :{ 
               TITLE:"Diagnostica",
               CONTENT: [{
                           type: "paragraph",
                           content: "Il router fornisce strumenti Ping e Traceroute per aiutarvi a risolvere i problemi di rete."
                       } ,{                      
                           type: "title",
                            title: "Ping & Traceroute"
                       } ,{                      
                           type: "paragraph",
                           content: "Lo strumento Ping invia pacchetti ad un indirizzo IP o un nome dominio target e i log che risultano, come il numero dei pacchetti inviati e ricevuti, e il tempo di round-trip."
                       } ,{                      
                           type: "paragraph",
                           content: "Lo strumento Traceroute invia pacchetti ad un indirizzo IP o un nome dominio e mostra il numero di hop e il tempo che servono per raggiungere la destinazione."
                       } ,{                      
                           type: "paragraph",
                           content: "Potete fare ping o traceroute di un dispositivo locale dall'indirizzo IP o di un nome dominio, ad esempio tp-link.com, yahoo.com, etc."
                       } ,{                      
                           type: "step",
                           title: "Per eseguire una diagnosi con Ping",
       content: [ 
                "1. Selezionate Ping come Strumento di Diagnostica.",
                "2. Immettete indirizzo IP o nome dominio target.",
                "3. Fate clic sull'icona Freccia per aprire il menu Avanzate e specificate Numero Ping e Dimensione Pacchetto Ping. (opzionale)",
                "4. Fate clic su Avvio."]
} ,{                      
                           type: "step",
                           title: "Per eseguire una diagnosi con Traceroute",
       content: [ 
                "1. Selezionate Traceroute come Strumento di Diagnostica.",
                "2. Immettete indirizzo IP o nome dominio target.",
                "3. Fate clic sull'icona Freccia per aprire il menu Avanzate e specificate il numero di hop (che sono richiesti) nel campo Traceroute Max TTL (Time to Live). Il valore di default è 20. (opzionale)",
                "4. Fate clic su Avvio."]
}]
},
       PORT_MIRROR :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                            title: "Port Mirroring"
                       } ,{                      
                           type: "paragraph",
                           content: "Port Mirroring fa riferimento al processo di copia dei pacchetti inoltrati dalla porta mirrored alla porta mirroring. Abitualmente alla porta mirroring viene connesso un dispositivo di diagnostica dati che viene usato per analizzare i pacchetti mirrored per monitorare la rete e risolvere i problemi."
                       } ,{                      
                           type: "step",
                           title: "Inoltra copia dei pacchetti alla porta designata",
       content: [ 
                "1. Abilitate Port Mirroring.",
                "2. Selezionate le porte che desiderate siano porte mirrored.",
                "3. Selezionate una porta come porta mirroring.",
                "4. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Una porta non può essere configurata allo stesso tempo come porta mirrored e mirroring."
                       }]
},
       FIRMWARE :{ 
               TITLE:"Aggiornamento Firmware",
               CONTENT: [{
                           type: "paragraph",
                           content: "Aggiorna Firmware aggiorna il firmware del router con nuove funzioni o risolve dei bug. Si consiglia di aggiornare il router con l'ultimo firmware per ottenere prestazioni migliori."
                       } ,{                      
                           type: "step",
                           title: "I seguenti consigli vi aiuteranno ad evitare inconvenienti durante l'aggiornamento:",
       content: [ 
                "Prima di aggiornare",
                "1. Assicuratevi di avere una connessione stabile fra il router e il computer. Si consiglia di NON aggiornare il firmware tramite wireless.",
                "2. Assicuratevi di avere rimosso tutti i dispositivi USB connessi al router.",
                "3. Ricordatevi di fare backup del file di configurazione del router.",
                "Mentre state facendo l'aggiornamento",
                "il router deve essere tenuto acceso fino a quando non si è completato l'aggiornamento."]
}]
},
       FIRMWARE_UPGRADE_ONLINE :{ 
               TITLE:"Per aggiornare il firmware online",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Fate clic su Aggiorna e confermate quando appare il messaggio di avviso. Il router scaricherà e aggiornerà automaticamente l'ultimo firmware. Potete anche fare clic su Controlla per verificare l'ultima versione di firmware."]
}]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Per aggiornare il firmware manualmente",
               CONTENT: [{
                           type: "step",
       content: [ 
                "1. Fate clic su Supporto in fondo alla pagina e scaricate il firmware più recente sul computer. Assicuratevi che il firmware che state scaricando abbia la stessa versione hardware del router come mostrato nella pagina.",
                "2. Fate clic su Cerca e selezionate il firmware scaricato.",
                "3. Fate clic su Aggiorna."]
} ,{                      
                           type: "paragraph",
       content: [ 
                "L'aggiornamento firmware richiede qualche minuto per completarsi. Il router si riavvia automaticamente quando è finito l'aggiornamento firmware."]
}]
},
       BACKUP :{ 
               TITLE:"Ripristino e backup",
               CONTENT: [{
                           type: "paragraph",
                           content: "La funzione Backup & Ripristino vi permette fare il backup della configurazione del router per ricaricare la configurazione, o riportare il router alle impostazioni di default."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "NON spegnete il router durante il processo di backup o ripristino."
                       } ,{                      
                           type: "title",
                           title: "Backup",
                           content: "Si consiglia di fare il backup della configurazione corrente, nel caso serva riportare il router allo stato precedente."
                       } ,{                      
                           type: "step",
                           title: "Per fare il backup della configurazione corrente",
       content: [ 
                "1. Fate clic su Backup.",
                "2. Attendete che il router faccia il backup della configurazione corrente."]
}]
},
       RESTORE :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Ripristino",
                           content: "Potete riportare il router alle condizioni precedenti con il file di backup."
                       } ,{                      
                           type: "step",
                           title: "Per ripristinare da un backup",
       content: [ 
                "1. Fate clic su Sfoglia.",
                "2. Selezionate il file di backup.",
                "3. Fate clic su Ripristina."]
}]
},
       FACTORY :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Ripristino Impostazioni di Default",
       content: [ 
                "Resettando il router cancellerete tutte le vostre configurazioni e impostazioni, e lo riporterete alle impostazioni di fabbrica di default. Per esempio le impostazioni wireless, rete e parental control verranno elimninati.",
                "Dopo che avrete riportato il router alle impostazioni di fabbrica, dovrete impostare una nuova password per accedere alla pagina di gestione web del router."]
}]
},
       REBOOT :{ 
               TITLE:"Schedulazione Riavvio",
               CONTENT: [{
                           type: "paragraph",
                           content: "La funzione Schedulazione Riavvio pulisce la cache per migliorare le prestazioni del router. Potete riavviare manualmente il router o impostarne il riavvio in modo predefinito."
                       } ,{                      
                           type: "step",
                           title: "Riavvio manuale",
       content: [ 
                "Fate clic su Riavvio e attendete qualche minuto per il riavvio del router."]
} ,{                      
                           type: "step",
                           title: "Per schedulare l'ora del riavvio",
       content: [ 
                "1. Abilitate Schedulazione Riavvio.",
                "2. Impostate quando e quanto spesso riavviare il router specificando i parametri in Ora Riavvio e nei campi Ripeti.",
                "3. Fate clic su Salva."]
}]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Amministrazione",
               CONTENT: [{
                           type: "paragraph",
                           content: "Amministrazione vi permette di gestire la password di login e i permessi di accesso dei client connessi al router."
                       } ,{                      
                           type: "name",
                           title: "Gestione Account",
                           content: "Questa funzione vi consente di cambiare la password.",
       children: [{                      
                           type: "step",
                           title: "Modifica la password",
       content: [ 
                "1. Immetti Vecchia Password.",
                "2. Immetti Nuova Password.",
                "3. Conferma Nuova Password.",
                "4. Fate clic su Salva."]
}]
}]
},
       ADMIN_RECOVERY :{ 
               TITLE:"Recupero password",
               CONTENT: [{
                           type: "name",
                           title: "Recupera Password di Default",
                           content: "Recupero Password di Default vi permette ripristinare la password di login di default senza riportare il router alle sue impostazioni di fabbrica di default.",
       children: [{                      
                           type: "step",
                           title: "Modifica la password",
       content: [ 
                "1. Abilitate la funzione Recupera Password di Default.",
                "2. Nel campo Da, immettete un indirizzo email usato per inviare un codice di verifica per recuperare le informazioni di login.",
                "3. Nel campo A, immettete un indirizzo email usato per ricevere il codice di verifica.",
                "4. Immettete Server SMTP della email in uscita (Da).",
                "5. Se la mail nel campo Da richiede crittografia, dovete selezionare la casella di controllo Abilita Autenticazione e immettere le sue Username (indirizzo email) e Password.",
                "6. Fate clic su Salva."]
}]
}]
},
       ADMIN_LOCAL :{ 
               TITLE:"Gestione Locale",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa funzione consente ai dispositivi locali di accedere e gestire il router."
                       } ,{                      
                           type: "name",
                           id: "local_management_https",
                           title: "Gestione Locale tramite HTTPS",
                           content: "Abilitate la Gestione Locale tramite HTTPS se volete accedere al router sia tramite HTTPS che HTTP, o lasciatelo disabilitato se volete accedere al router solo tramite HTTP."
                       } ,{                      
                           type: "name",
                           title: "Accesso a tutti i dispositivi connessi alla LAN",
                           content: "Attivate per abilitare la gestione locale di tutti i dispositivi connessi alla LAN o disattivate per abilitare la gestione di un dispositivo specifico."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo MAC",
                           content: "Mostra l'indirizzo MAC del dispositivo con accesso limitato."
                       } ,{                      
                           type: "name",
                           title: "Descrizione",
                           content: "Mostra la descrizione del dispositivo con accesso limitato."
                       } ,{                      
                           type: "name",
                           title: "Stato",
                           content: "Mostra lo stato corrente del dispositivo con accesso limitato (abilitato o disabilitato)."
                       } ,{                      
                           type: "name",
                           title: "Modifica",
                           content: "Mostra le opzioni per modificare o eliminare il dispositivo corrispondente dell'elenco."
                       } ,{                      
                           type: "step",
                           title: "Per aggiungere un dispositivo client all'elenco",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Fate clic su Mostra Dispositivi Esistenti e scegliete un dispositivo esistente o immettete l'indirizzo MAC di un dispositivo nel campo Indirizzo MAC. ",
                "3. Immettete una descrizione del dispositivo.",
                "4. Selezionate Abilita.",
                "5. Fate clic su OK."]
} ,{                      
                           type: "step",
                           title: "Per modificare o eliminare un dispositivo dell'elenco",
                           content: "Nella tabella, fate clic su Modifica o su Cestino per modificare o eliminare il dispositivo corrispondente. "
                       } ,{                      
                           type: "step",
                           title: "Per eliminare più dispositivi",
                           content: "Selezionate tutti i dispositivi che desiderate eliminare, quindi fate clic su Elimina, sopra la tabella."
                       }]
},
       ADMIN_REMOTE_WITHOUT_HTTPS :{ 

               TITLE:"GestioneRemota",
               CONTENT: [{
                           type: "name",
                           title: "GestioneRemota",
                           content: "La funzione Gestione Remota consente a dispositivi remoti di accedere e gestire il router.",
       children: [{                      
                           type: "step",
                           title: "Impedisci a tutti i dispositivi remoti di gestire il router",
                           content: "Selezionate Disabilita Gestione Remota e fate clic su Salva."
                       } ,{                      
                           type: "step",
                           title: "Consenti a tutti i dispositivi remoti di gestire il router",
       content: [ 
                "1. Selezionate Abilita Gestione Remota per TUTTI i Dispositivi.",
                "2. Immettete la Porta di Gestione Web (1024-65535 oppure 80) tramite la quale i dispositivi remoti accederanno al router.",
                "3. Fate clic su Salva."]
} ,{                      
                           type: "step",
                           title: "Consenti ad uno specifico dispositivo di gestire il router",
       content: [ 
                "1. Selezionate Abilita Gestione Remota per un dispositivo specifico.",
                "2. Immettete la Porta di Gestione Web (1024-65535 oppure 80) tramite la quale il dispositivo remoto accederà al router.",
                "3. Immettete l'Indirizzo IP per la Gestione Remota del dispositivo remoto che gestisce il router.",
                "4. Fate clic su Salva."]
}]
}]
},
       ADMIN_REMOTE :{ 
               TITLE:"GestioneRemota",
               CONTENT: [{
                           type: "paragraph",
                           content: "La funzionalità Gestione Remota consente di accedere e configurare il router in remoto tramite Internet."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step_title",
                           content: "Per impostare la Gestione Remota"
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step1",
                           content: "1. Selezionate la casella di controllo per abilitare la Gestione Remota."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step2",
                           content: "2. Lasciate la Porta HTTPS e la Porta HTTP con le impostazioni di default."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step3",
                           content: "3. Selezionate per decidere quale dispositivo remoto può accedere da remoto al router:",
       children: [{                      
                           type: "name",
                           title: "Tutti i dispositivi",
                           content: "Tutti i dispositivi remoti possono accedere al router."
                       } ,{                      
                           type: "name",
                           title: "Dispositivo Specificato",
                           content: "Immettete l'Indirizzo IP del dispositivo remoto che accederà al router."
                       }]
} ,{                      
                           type: "paragraph",
                           id: "admin_remote_step4",
                           content: "4. Fate clic su Salva."
                       } ,{                      
                           type: "paragraph",
                           content: "Adesso potete gestire da remoto il router usando l'indirizzo mostrato in Indirizzo Web per la Gestione."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se appare un messaggio di allarme quando visitate da remoto l'indirizzo sopra riportato, fate clic su Trust (o un'opzione simile) per continuare."
                       }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Una volta che la Modalità Notte è abilitata, i LED verranno spenti ogni giorno durante il periodo specificato senza influire sulle prestazioni del router."
                       } ,{                      
                           type: "step",
                           title: "Abilita Modalità Notte",
       content: [ 
                "1. Selezionate Abilita Modalità Notte.",
                "2. Specificate un periodo di tempo durante il quale i LED saranno spenti.",
                "3. Fate clic su Salva."]
}]
},
       SYSTEM_LOG :{ 
               TITLE:"Log di Sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "Log di Sistema mostra le attività più recenti del router. La tabella contiene tipo, livello e contenuto log dei log di sistema che possono essere filtrati per essere visti. Potete anche salvare i log di sistema nel computer locale o inviarli ad una email."
                       } ,{                      
                           type: "step",
                           title: "Salva i log di sistema nel computer locale",
       content: [ 
                "1. Impostate il tipo e il livello minimo per filtrare i log di sistema desiderati. La lista dei livelli è in ordine discendente, con il livello inferiore nella parte bassa della lista.",
                "2. Fate clic su Salva Log per salvare i log di sistema nel computer locale."]
} ,{                      
                           type: "step",
                           title: "Ricevi i log di sistema via email",
       content: [ 
                "1. Impostate Tipo e Livello per filtrare i log di sistema desiderati. La lista dei livelli è in ordine discendente, con il livello inferiore nella parte bassa della lista.",
                "2. Fate clic su Impostazione Email.",
                "3. Nel campo Da, immettete un indirizzo email attivo da utilizzare come email in uscita.",
                "4. Nel campo A, immettete un indirizzo email attivo da utilizzare come email in entrata.",
                "5. Immettete l'indirizzo del server SMT della email in uscita (Da).",
                "Nota: Se la email in uscita richiede autenticazione, selezionate la casella di controllo Abilita Autenticazione e immettete le sue Username (indirizzo email) e Password.",
                "6. Se volete ricevere regolarmente i log di sistema via email, selezionate la casella di controllo Abilita Auto Mail e impostate un orario specifico (in formato 24 ore) o un intervallo di tempo.",
                "Se volete ricevere immediatamente i log di sistema, fate clic su Adesso Mail Log.",
                "7. Fate clic su Salva."]
}]
},
       TRAFFIC_STATISTIC :{ 
               TITLE:"Traffic Monitor",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra l'utilizzo del traffico da parte di un dispositivo negli ultimi 10 minuti o da parte di tutti i dispositivi negli ultimi 10 minuti/24 ore/7 giorni."
                       }]
},
       TRAFFIC_STATISTIC_LIST :{ 
               TITLE:"Lista Traffic Monitor",
               CONTENT: [{
                           type: "paragraph",
                           content: "La lista raggrruppa i dispositivi per tipo di connessione: cablati o wireless."
                       }]
},
       SYSTEM_PARA_WIRELESS :{ 
               TITLE:"Parametri Sistema",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wifi_title",
                           title: "Wireless 2.4GHz/5GHz",
                           content: "Questa sezione vi consente di configurare i parametri delle regole della trasmissione del traffico della rete wirelesss. Si consiglia di lasciare le impostazioni di default se non siete sicuri delle modifiche che volete apportare."
                       } ,{                      
                           type: "name",
                           title: "Intervallo beacon",
                           content: "Immettete un valore compreso tra 40 e 1000 millisecondi per determinare la durata di tempo nel quale i pacchetti beacon vengono trasmessi dal router per sincronizzare la rete wireless. Il valore di default è 100 millisecondi."
                       } ,{                      
                           type: "name",
                           title: "Soglia RTS",
                           content: "Immettete un valore compreso tra 1 e 2346 per determinare la dimensione dei pacchetti trasmessi tramite il router. Di default, la dimensione soglia RTS (Request to Send) è 2346. Se la dimensione del pacchetto è superiore alla soglia prefissata, il router invia i frame di richiesta di invio a una particolare stazione ricevente e negozia l'invio di un frame di dati, oppure il pacchetto verrà inviato immediatamente."
                       } ,{                      
                           type: "name",
                           title: "Intervallo DTIM",
                           content: "Questo valore determina l'intervallo DTIM (Delivery Traffic Indication Message). Immettete un valore compreso fra 1 e 15 intervalli. L'intervallo di default è 1, e indica che l'intervallo DTIM è uguale all'intervallo Beacon."
                       } ,{                      
                           type: "name",
                           title: "Group Key Update Period",
                           content: "Immettete il numero di secondi (minimo 30) dell'intervallo di tempo per il rinnovo automatico della chiave di crittografia. Il valore di default è 0 e indica che le chiavi non vengono rinnovate."
                       } ,{                      
                           type: "name",
                           title: "Funzione WMM",
                           content: "La funzione WMM garantisce che i pacchetti con messaggi ad alta priorità vengano trasmessi prima degli altri. È abilitata per impostazione predefinita ed è altamente raccomandata."
                       } ,{                      
                           type: "name",
                           title: "Funzione Short GI",
                           content: "Questa funzione è abilitata di default e consigliata per migliorare la capacità dei pacchetti con il tempo di GI (Guard Interval)."
                       } ,{                      
                           type: "name",
                           title: "Funzione Isolamento AP",
                           content: "Se volete confinare i dispositivi wireless connessi alla rete ed impedire che interagiscano fra loro, ma volete che possano accedere a Internet, selezionate la casella di controllo Abilita AP Isolation."
                       } ,{
                           type: "name",
                           title: "Freccia Riduzione Interferenze USB 3.0",
                           content: "Fate clic per ridurre le interferenze USB 3.0."
                       }]
},
       SYSTEM_PARA_WDS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wds_title",
                            title: "WDS 2,4 GHz/5 GHz"
                       } ,{                      
                           type: "step",
                           title: "Abilita WDS",
                           content: "La funzione Bridge WDS (Wireless Distribution System) vi consente di estendere la copertura della rete wireless facendo bridge con un AP (access point) in una rete locale wireless (WLAN)."
                       } ,{                      
                           type: "step",
       content: [ 
                "1. Selezionate per abilitare la funzione Bridge WDS.",
                "2. Per creare un bridge con una rete mediante la funzione Scansiona: Fate clic su Scansiona per scansionare e mostrare tutte le reti disponibili e selezionate la rete con la quale volete creare un bridge. SSID (nome di rete), indirizzo MAC e Sicurezza verranno compilati automaticamente.",
                "Per creare manualmente un bridge con una rete: Immettete SSID (nome di rete), indirizzo MAC e modalità WDS della rete con la quale volete creare un bridge. Selezionate un tipo di Sicurezza e immettete i relativi parametri, che devono essere gli stessi della rete con la quale fare bridge.",
                "3. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se non siete sicuri della modalità WDS, lasciate l'opzione di default Auto."
                       }]
},
       SYSTEM_PARA_WPS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "WPS",
                           content: "WPS (Wi-Fi Protected Setup) vi consente di collegare facilmente al router i dispositivi con WPS abilitato premendo il tasto WPS. Verificate se WPS è attivo e fate clic su Salva."
                       }]
},
       SYSTEM_PARA_NAT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "NAT",
                           content: "Questa funzione è abilitata di default. Si consiglia di lasciare le impostazioni di default. Se la disabilitate, non avrete accesso a Internet."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Quando NAT è disabilitata, le configurazioni di NAT Forwarding non avranno effetto."
                       } ,{                      
                           type: "name",
                           id: "sys_para_nat_boost",
                           title: "Incremento NAT",
                           content: "Selezionate la casella di controllo Abilita NAT Boost e fate clic su Salva per assicurarvi che il router abbia il miglior throughput."
                       } ,{                      
                           type: "note",
                           id: "sys_para_nat_boost_note",
                           title: "Nota",
                           content: "Se NAT Boost è abilitato, le opzioni QoS e Statistiche di Traffico vengono disabilitate automaticamente."
                       }]
},
       SYSTEM_PARA_DOS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Impostazioni Protezione DOS",
                           content: "La Protezione DOS protegge il router da attacchi ICMP-FLOOD, UDP-FLOOD e TCP-FLOOD."
                       } ,{                      
                           type: "name",
                           title: "Livello pacchetti flood ICMP",
                           content: "Immettete un valore fra 5 e 7200 per attivare immediatamente la protezione ICMP-FLOOD quando il numero di pacchetti ICMP supera il valore di soglia preimpostato."
                       } ,{                      
                           type: "name",
                           title: "Livello pacchetti flood UDP",
                           content: "Immettete un valore compreso fra 5 e 7200 pacchetti UDP per attivare immediatamente la protezione UDP-FLOOD quando il numero di pacchetti UDP supera il valore di soglia preimpostato."
                       } ,{                      
                           type: "name",
                           title: "Livello pacchetti flood TCP",
                           content: "Immettete un valore compreso fra 5 e 7200 pacchetti TCP-SYN per attivare immediatamente la protezione TCP-SYN-FLOOD quando il numero di pacchetti TCP supera il valore di soglia preimpostato."
                       }]
},
       SYSTEM_PARA_DUPLEX :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Duplex",
                           content: "Selezionate il tipo di duplex dall'elenco a discesa e fate clic su Salva."
                       }]
},
       SYSTEM_PARA_LED :{ 
               TITLE:"LED",
               CONTENT: [{
                           type: "name",
                           title: "Attiva modalità notturna",
                           content: "Selezionare questa casella di controllo per spegnere i LED durante il Periodo Modaltà notte senza influire sulle prestazioni del router."
                       } ,{                      
                           type: "name",
                           title: "Modalità notturna",
                           content: "Specifica un periodo di tempo durante il quale si applica la modalità notte."
                       } ,{                      
                           type: "paragraph",
                           content: "Fate clic su Salva per salvare tutte le impostazioni."
                       }]
},
       OPEN_VPN :{ 
               TITLE:"OpenVPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Con OpenVPN potete usare Internet in sicurezza per accedere alla rete quando siete fuori casa. Per usare il Servizio VPN dovete configurare il Servizio DNS Dinamico (consigliato) o assegnare un indirizzo IP statico alla porta WAN del router. L'Ora di Sistema deve essere sincronizzato con Internet."
                       } ,{                      
                           type: "name",
                           title: "Tipo di servizio",
                           content: "Seleziona il protocollo di comunicazione per il server OpenVPN: UDP o TCP."
                       } ,{                      
                           type: "name",
                           title: "Porta di servizio",
                           content: "Immettete un numero porta di comunicazione compreso fra 1024 e 65535. La porta di servizio comune e di default è 1194."
                       } ,{                      
                           type: "name",
                           title: "Subnet/Netmask VPN",
                           content: "Inserisci l'intervallo di indirizzi IP che possono essere dedicati ai client dal server OpenVPN."
                       } ,{                      
                           type: "name",
                           title: "Accesso client",
                           content: "Selezionate il tipo di accesso per il client OpenVPN.",
       children: [{                      
                           type: "name",
                           title: "Solo rete domestica",
                           content: "Il client può accedere solo alla rete domestica. La route di default del client non verrà cambiato."
                       } ,{                      
                           type: "name",
                           title: "Internet e rete domestica",
                           content: "Il client può accedere alla rete domestica, ai siti Internet o ai servizi con una limitazione geografica quando siete all'estero. La route di default del client verrà alterato."
                       }]
}]
},
       OPEN_VPN_CERTIFICATE :{ 
               TITLE:"Certificato",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Utilizza il certificato per le informazioni e l'identità della connessione VPN per il computer remoto.",
                "Clicca per generare un nuovo certificato."]
}]
},
       OPEN_VPN_CONF :{ 
               TITLE:"File di configurazione",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "I client remoti useranno il file di configurazione per accedere al vostro router.",
                "Clicca questo pulsante per salvare il file di configurazione OpenVPN da utilizzare per aggiungere una nuova connessione VPN."]
}]
},
       OPEN_VPN_GUIDE :{ 
               TITLE:"Guida all'installazione del client VPN",
               CONTENT: [{
                           type: "step",
                           title: "Connetti i dispositivi client al server OpenVPN:",
       content: [{                      
                           type: "paragraph",
                           content: "Prima di configurare il server OpenVPN, configurate il servizio DNS Dinamico (consigliato) o assegnate un indirizzo IP statico alla porta WAN. Assicuratevi che la porta esterna della impostazioni NAT non sia la porta di servizio e che l'Ora di Sistema sia sincronizzata con Internet."
                       },
                "1. Selezionate Abilita Server VPN.",
                "2. Configurate i parametri del server OpenVPN (Tipo di Servizio, Porta di Servizio, Accesso Client e VPN Subnet/Netmask) e fate clic su Salva.",
                "3. Fate clic su Esporta per salvare il file di configurazione.",
                "4. Nei dispositivi client scaricate e installate la utility client OpenVPN da <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a>",
                "Le piattaforme ufficiali supportate includono Windows, Mac OSX e Linux.",
                "5. Lanciate la utility client OpenVPN e aggiungete una nuova connessione VPN usando il file di configurazione salvato per connettere il dispositivo client al server VPN."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Per maggiori informazioni sui client OpenVPN, visita <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
                       }]
},
       PPTP_VPN :{ 
               TITLE:"PPTP VPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Con VPN PPTP potete usare Internet in modo sicuro e veloce per accedere alla rete quando siete fuori casa. Può essere bloccato da alcuni ISP. Per usare il Servizio VPN dovete configurare il Servizio DNS Dinamico (consigliato) o assegnare un indirizzo IP statico alla porta WAN del router. L'Ora di Sistema deve essere sincronizzato con Internet."
                       } ,{                      
                           type: "name",
                           title: "Indirizzo IP client",
                           content: "Inserisci l'intervallo di indirizzi IP (fino a 10 client) che possono essere dedicati ai client dal server PPTP VPN."
                       } ,{                      
                           type: "name",
                           title: "Nome utente e password",
                           content: "Inserisci il nome utente e la password per autenticare i client al server PPTP VPN."
                       }]
},
       PPTP_VPN_GUIDE :{ 
               TITLE:"Guida all'installazione del client VPN",
               CONTENT: [{
                           type: "step",
                           title: "Connetti i dispositivi client al server VPN PPTP:",
       content: [{                      
                           type: "paragraph",
                           content: "Prima di configurare il server VPN PPTP, configurate il servizio DNS Dinamico (consigliato) o assegnate un indirizzo IP statico alla porta WAN. Assicuratevi che la porta esterna della impostazione NAT non sia 1723 e che l'Ora di Sistema sia sincronizzata con Internet."
                       },
                "1. Selezionate Abilita Server VPN.",
                "2. Configurate i parametri del server VPN PPTP e fate clic su Salva.",
                "3. Create una connessione VPN PPTP nei dispositivi client. Le piattaforme ufficiali supportate includono Windows, Mac OSX, Linux, iOS e Android.",
                "4. Lanciate il programma VPN PPTP, aggiungete una nuova connessione e immettete il nome dominio del servizio DDNS registrato o l'indirizzo IP statico che è stato assegnato alla porta WAN, per connettere il dispositivo client al server VPN PPTP."]
}]
},
       VPN_CONNNECTION :{ 
               TITLE:"Connessioni VPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa pagina visualizza i client correntemente connessi ai server OpenVPN e PPTP VPN ospitati sul router."
                       }]
},
       BASIC_NETWORK :{ 
               TITLE:"Mappa di rete",
               CONTENT: [{
                           type: "paragraph",
                           content: "In Mappa Rete, potete vedere lo stato delle connessioni di rete correnti e le informazioni wireless del router oltre alle informazioni dei dispositivi connessi."
                       }]
},
       BASIC_NETWORK_INTEREST :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra le informazioni Internet."
                       }]
},
       BASIC_NETWORK_ROUTER :{ 
               TITLE:"Router",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra le informazioni correnti della rete wirelesss e delle porte LAN."
                       }]
},
       BASIC_NETWORK_CLIENTS :{ 
               TITLE:"Client Cablati/Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra il nome di rete (editabile), l'IP assegnato e l'indirizzo MAC dei client connessi al router."
                       }]
},
       BASIC_NETWORK_PRINTER :{ 
               TITLE:"Stampante",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra il nome della stampante collegata al router tramite la porta USB."
                       }]
},
       BASIC_NETWORK_USB :{ 
               TITLE:"Disco USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informazioni rilevanti del disco USB connesso al router tramite porta USB."
                       }]
},
       BASIC_NETWORK_ONEMESH :{ 
               TITLE:"Dispositivi Mesh",
               CONTENT: [{
                           type: "name",
                           title: "Nome",
                           content: "Mostra il nome del dispositivo mesh connesso al router."
                       } ,{                      
                           type: "name",
                           title: "Modello",
                           content: "Mostra il modello del dispositivo mesh."
                       } ,{                      
                           type: "name",
                           title: "Stato",
                           content: "Mostra lo stato della connessione del dispositivo mesh."
                       } ,{                      
                           type: "name",
                           title: "Luogo",
                           content: "Mostra la posizione del dispositivo mesh."
                       } ,{                      
                           type: "paragraph",
                           content: "Potete fare clic su <span class=\"one-mesh-modify-icon\"></span> per modificare le informazioni del dispositivo."
                       }]
},
       BASIC_SPEED_TEST :{ 
               TITLE:"Speed Test",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa funzione testa la velocità corrente di upload e download che state ottendendo dal vostro fornitore Internet e fornisce consigli utili riguardo le prestazioni di Internet."
                       } ,{                      
                           type: "paragraph",
                           content: "Nota: Per ottenere un risultato il più possibile accurato, chiudete tutte le app e i programmi."
                       } ,{                      
                           type: "paragraph",
                           content: "Storico - Un archivio degli speed test precedenti."
                       } ,{                      
                           type: "paragraph",
                           content: "Rieffettua il Test - Fate clic per rieffettuare uno speed test."
                       }]
},
       BASIC_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Fate clic su Rilevazione Automatica o selezionate manualmente il tipo di connessione Internet. Immettete quindi i parametri forniti dall'ISP."
                       }]
},
       BASIC_WIRELESS_SMART_CONNECT :{ 
               TITLE:"Smart Connect",
               CONTENT: [{
                           type: "paragraph",
                           content: "Seleziona questa casella di controllo per abilitare Smart Connect. Questa funziona aiuta a velocizzare i dispositivi, assegnandoli alle migliori bande wireless in base alle condizioni attuali per bilanciare le esigenze di rete."
                       }]
},
       BASIC_WIRELESS :{ 
               TITLE:"Impostazioni Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Potete configurare le impostazioni wireless (SSID, password, etc.)"
                       } ,{                      
                           type: "name",
                           title: "Nome di rete (SSID)",
                           content: "Si consiglia di cambiare il nome di rete (SSID). Questo campo fa distinzione fra maiuscole e minuscole."
                       } ,{                      
                           type: "name",
                           title: "Nascondi SSID",
                           content: "Selezionate se volete nascondere il nome di rete (SSID) 2.4GHz/5GHz dall'elenco delle reti wireless. Una volta selezionato, lo SSID non verrà più diffuso in broadcast e bisognerà aggiungersi manualmente alla rete."
                       } ,{                      
                           type: "name",
                           title: "Password",
                           content: "Immettete una password wireless composta di 8-63 caratteri ASCII, o 8-64 caratteri esadecimali. Il campo fa distinzione tra maiuscole e minuscole."
                       }]
},
       BASIC_DEVICE_SETTINGS :{ 
               TITLE:"Dispositivo Storage USB ",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa funzione vi consente di condividere dispositivi di storage USB fra diversi client della rete locale o tramite Internet."
                       } ,{                      
                           type: "title",
                           title: "ImpostazioniDispositivo",
                           content: "La sezione Impostazioni Dispositivo mostra le informazioni di base del dispositivo di storage USB connesso alla porta USB. Una chiavetta USB ha abitualmente un solo volume."
                       } ,{                      
                           type: "name",
                           title: "Scansiona",
                           content: "Abitualmente il router rileva automaticamente i nuovi dispositivi che vengono connessi. Se non accade ciò, fate clic su questo tasto per scansionare e aggiornare lo schermo con le informazioni aggiornate.",
       children: [{                      
                           type: "note",
                           title: "Nota",
                           content: "L'area grigia rappresenta un volume disabilitato. Facendo clic sull'area potete condividere il volume specifico."
                       }]
} ,{                      
                           type: "name",
                           title: "Rimuovi",
                           content: "Facendo clic su questo tasto smontate in sicurezza il dispositivo di storage USB prima di sconnetterlo fisicamente dalla porta USB.",
       children: [{                      
                           type: "note",
                           title: "Nota",
                           content: "Il tasto Rimuovi appare solo quando il dispositivo di storage USB è connesso al router. Quando il volume corrente è impegnato, non potete smontarlo."
                       }]
} ,{                      
                           type: "step",
                           title: "Per impostare un file server",
       content: [ 
                "1. Attaccate il dispositivo di storage USB direttamente alla porta USB o tramite un cavo USB. Se il dispositivo richiede alimentazione esterna, assicuratevi che sia presente e connessa.",
                "2. Il nuovo dispositivo USB collegato dovrebbe essere rilevato automaticamente dal router e mostrato nella sezione Impostazioni Dispositivo. Se ciò non accade, fate clic su Scansiona.",
                "Nota: appare l'icona Condividi. Potete fare clic sull'icona per disabilitare i volumi che non volete condividere."]
}]
},
       BASIC_SHARING_SETTINGS :{ 
               TITLE:"Indirizzo Accesso",
               CONTENT: [{
                           type: "name",
                           title: "Rete/Nome server multimediale",
                           content: "Mostra il nome usato per l'accesso al dispositivo di storage USB connesso mediante il metodo Network Neighborhood o la funzione Condivisione Media. Di default è TP-Share."
                       } ,{                      
                           type: "name",
                           title: "Metodo di accesso",
                           content: "Vi sono 3 metodi per accedere al dispositivo di storage USB condiviso.",
       children: [{                      
                           type: "name",
                           title: "Risorse di rete",
                           content: "Selezionate questa opzione per permettere agli utenti della rete l'accesso ai contenuti condivisi tramite l'indirizzo mostrato nella colonna Indirizzi."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Selezionate questa opzione per abilitare la funzione server FTP che permette ai client FTP e agli utenti di rete di accedere al dispositivo di storage USB mediante l'indirizzo FTP mostrato nella colonna Indirizzi."
                       } ,{                      
                           type: "name",
                           title: "FTP (via Internet)",
                           content: "Selezionate questa opzione per permettere ai client FTP e agli utenti l'accesso da remoto, scaricare e caricare file sul dispositivo di storage USB condiviso tramite FTP via Internet. Per personalizzare l'indirizzo di accesso, fate clic su Edita e impostate il DNS Dinamico per il router. Per cambiare porta al server FTP, immettete un nuovo numero porta e fate clic su Salva per applicare le modifiche."
                       }]
} ,{                      
                           type: "name",
                           title: "Indirizzo",
                           content: "Mostra l'indirizzo utilizzato per accedere al dispositivo storage USB condiviso."
                       } ,{                      
                           type: "name",
                           title: "Porta",
                           content: "Mostra il numero porta usato per l'accesso al server FTP."
                       }]
},
       BASIC_FOLDER_SHARING :{ 
               TITLE:"Condivisione Contenuti",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra le cartelle condivise. Tutte le cartelle sono condivise di default. Potete fare clic su Edita per personalizzare le cartelle condivise."
                       } ,{                      
                           type: "note",
                           title: "Nota",
                           content: "L'icona Condividi appare nella sezione Impostazioni Dispositivo. Potete fare clic sull'icona Condividi per disabilitare i volumi che non volete condividere."
                       }]
},
       FOLDER_SHARING :{ 
               TITLE:"Condivisione Contenuti e Sicurezza",
               CONTENT: [{
                           type: "name",
                           title: "Condivisione Contenuti",
                           content: "Mostra le cartelle condivise. Tutte le cartelle sono condivise di default. Potete fare clic su Edita per personalizzare le cartelle condivise.",
       children: [{                      
                           type: "note",
                           title: "Nota",
                           content: "L'icona Condividi appare nella sezione Impostazioni Dispositivo. Potete fare clic sull'icona Condividi per disabilitare i volumi che non volete condividere."
                       }]
} ,{                      
                           type: "name",
                           title: "Autenticazione Accessi",
       content: [ 
                "Spostate su On per abilitare l'autenticazione che serve agli utenti per immettere username e password valide per accedere alle cartelle condivise. Accedendo come Amministratore potete leggere e modificare i file, mentre l'Utente può solo leggere i file.",
                "La Username deve iniziare con una lettera e contenere fra 1 e 15 caratteri usando lettere e cifre.",
                "La Username deve contenere fra 1 e 15 caratteri usando lettere e cifre."]
} ,{                      
                           type: "name",
                           title: "Attiva condivisione file multimediali",
                           content: "Con questa funzione abilitata, tutti i dispositivi che supportano DLNA presenti nella rete locale possono accedere ai file multimediali di tutte le cartelle condivise. Se Autenticazione Accessi è abilitato, agli utenti non viene richiesto di immettere username o password "
                       }]
},
       BASIC_PRINT_SERVER :{ 
               TITLE:"Print Server",
               CONTENT: [{
                           type: "name",
                           title: "Print Server",
                           content: "Spostate su Acceso per abilitare la funzione Print Server."
                       } ,{                      
                           type: "name",
                           title: "Nome stampante",
                           content: "Mostra il nome della stampante connessa al router."
                       }]
},
       BASIC_PARENTAL_CONTROL :{ 
               TITLE:"Parental Control",
               CONTENT: [{
                           type: "paragraph",
                           content: "Con le impostazioni di base del Parental Control potete limitare l'accesso in certe fasce orarie giornaliere (Per esempio, nessun accesso Internet dai PC dei bambini durante l'orario lavorativo)."
                       }]
},
       BASIC_PARENTAL_DEVICE :{ 
               TITLE:"Dispositivi Sotto Parental Controls",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa tabella mostra le informazioni e le impostazioni dei dispositivi che sono limitati dal Parental Control."
                       } ,{                      
                           type: "step",
                           title: "Per limitare un nuovo dispositivo client",
       content: [ 
                "1. Spostate su Acceso Parental Control.",
                "2. Fate clic su Aggiungi.",
                "3. Fate clic su Scansione per scegliere un dispositivo connesso dall'elenco Dispositivi Accesso; o immettete manualmente Nome Dispositivo e Indirizzo MAC per aggiungere un dispositivo che non è connesso.",
                "4. Fate clic su Tempo Effettivo per specificare un periodo di tempo durante il quale si applicano le restrizioni.",
                "5. Immettete una breve descrizione nel campo Descrizione. Questa campo è opzionale.",
                "6. Selezionate Abilita Questo Entry.",
                "7. Fate clic su Salva."]
} ,{                      
                           type: "note",
                           title: "Nota",
                           content: "Se volete disabilitare questa entry, fate clic sull'icona Bulbo."
                       }]
},
       BASIC_GUEST_NETWORK :{ 
               TITLE:"Rete Ospiti",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa funzione vi permette di dare accesso Wi-Fi agli ospiti senza interessare la rete principale."
                       } ,{                      
                           type: "name",
                           title: "Permetti agli ospiti di vedersi fra loro",
                           content: "Selezionate questa casella di controllo per consentire ai dispositivi wireless della Rete Ospiti di comunicare fra di loro utilizzando Samba, Ping e FTP."
                       } ,{                      
                           type: "name",
                           title: "Consenti agli ospiti l'accesso alla mia rete locale",
                           content: "Selezionate questa casella di controllo per permettere ai dispositivi wireless della Rete Ospiti di comunicare con i dispositivi connessi alle porte LAN o alla rete principale del router mediante Samba, Ping e FTP."
                       } ,{                      
                           type: "name",
                           title: "Abilita ReteOspiti",
                           content: "Selezionate la casella di controllo per abilitare la funzione Rete Ospiti."
                       } ,{                      
                           type: "name",
                           title: "Nome di rete (SSID)",
                           content: "Usate il nome rete Ospiti (SSID) di default o create un nuovo nome (fino a 32 caratteri)."
                       } ,{                      
                           type: "name",
                           title: "Nascondi SSID",
                           content: "Selezionate la casella se desiderate nascondere il nome rete ospiti SSID dall'elenco delle reti Wi-Fi."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Intervallo di aggiornamento password",
                           content: "Selezionate l'intervallo di aggiornamento della passwod della Rete Ospiti."
                       } ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Password",
                           content: "Crea una password formata da 8 a 63 caratteri ASCII oppure da 8 a 64 caratteri esadecimali (0-9, a-f, A-F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Password",
                           content: "Utilizzate la password generata in modo casuale o create una password composta da 8-63 caratteri ASCII o 8-64 caratteri esadecimali (0-9, a-f, A-F)."
                       }]
},
       BASIC_ACCOUNT_LOGIN :{ 
               TITLE:"TP-Link Cloud",
               CONTENT: [{
                           type: "paragraph",
                           content: "Il servizio TP-Link Cloud vi permette di monitorare da remoto la vostra rete in tempo reale, di accedere e gestire i vostri dispositivi TP-Link da Internet in ogni momento e luogo."
                       }]
},
       ACCOUNT_INFO :{ 
               TITLE:"Informazioni Account",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra le informazioni del vostro TP-Link ID. Potete editare le informazioni dell'account facendo clic sull'icona Edit."
                       }]
},
       DEVICE_INFO :{ 
               TITLE:"Informazioni Dispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra le informazioni relative al vostro dispositivo, incluso l'account cloud che sta gestendo il dispositivo."
                       }]
},
       BOUND_ACCOUNT :{ 
               TITLE:"Account legati",
               CONTENT: [{
                           type: "paragraph",
                           content: "Questa tabella mostra tutti gli account cloud che sono legate al dispositivo."
                       } ,{                      
                           type: "step",
                           title: "Per legare un account utente",
       content: [ 
                "1. Fate clic su Lega.",
                "2. Immettete l'email registrata che volete legare.",
                "3. Fate clic su Salva."]
}]
},
       NEW_PARENTAL_CONTROL :{ 
               TITLE:"Parental Control",
               CONTENT: [{
                           type: "paragraph",
                           content: "Con i filtri legati a fascia d'età, limiti accesso e profili utenti, il Parental Control fornisce alla vostra famiglia un accesso a Internet personalizzato e appropriato."
                       } ,{                      
                           type: "step",
                           title: "Per applicare il Parental Control ad un nuovo dispositivo",
       content: [ 
                "1. Fate clic su Aggiungi.",
                "2. Immettete un nome per questo profilo e fate clic su \"+\" per aggiungere il dispositivo a questo profilo.",
                "3. Selezionate un Livello Filtro e personalizzate il contenuto del filtro secondo le vostre necessità. Potete immettere delle chiavi di rete per cercare i siti web che volete filtrare nel nostro database. Altri siti web (URL) possono essere immessi manualmente.<br/>Fate riferimento alle seguenti spiegazioni per le diverse categorie di filtro:<p>Contenuto per Adulti - Siti con contenuti sessuali, nocivi o illeciti, inclusi pornografia, sostanze stupefacenti, violenza e discriminazione</p><p>Gioco d Azzardo - Siti che promuovono gioco d'azzardo, inclusi i siti di gioco d'azzardo online</p><p>Educazione Sessuale - Siti che discutono di sesso, inclusi riproduzione, sessualità, sesso sicuro e controllo delle nascite, malattie sessualmente trasmissibili e traumi sessuali</p><p>Comunicazione Online - Siti che ospitano formati di comunicazione verso altri tramite testo, voce o video, inclusi email, blog, forum online, VoIP e servizi di chat video</p><p>Social Networking - Siti che distribuiscono espressioni o comunicazioni personali, che mettono in comunicazione persone e le loro attività personali basate su interessi, carriere, trascorsi o rapporti nella vita reale</p><p>Pay to Surf - Siti che compensano gli utenti che vedono specifici siti web, messaggi email o pubblicità, link da cliccare o risposte a ricerche</p><p>Media - Siti che offrono contenuti audio e/o video gratis, a pagamento o tramite sottoscrizione, inclusi servizi di streaming, programmi TV o scaricare musica</p><p>Download - Siti che forniscono accessi per condivisione e distribuzione di file, inclusi condivisione peer-to-peer, storage di file online e contenuti per dispositivi mobili (es. musica e app)</p><p>Giochi - Siti che forniscono accessi per giochi web-hosted o scaricabili, inclusi gioco online,reti di console di gioco e giochi mediante browser</p>",
                "4. Se volete limitare il tempo totale online di questo profilo, abilitate e specificate i Limiti di Tempo. Potete usare anche il Periodo di Tempo Vietato per impostare il periodo di tempo giornaliero durante il quale i dispositivi sotto questo profilo non possono usare Internet.",
                "5. Fate clic su Salva."]
} ,{                      
                           type: "step",
                           title: "Per veder lo storico dettagliato di Internet di un profilo",
       content: [ 
                "1. Nella colonna Insights, fate clic sul pulsante Insights corrispondente.",
                "2. Se volete vedere più dati, fate clic sul tasto Storico <span class=\"ptl-ctr-help-icon history\"></span>.",
                "3. Potete bloccare o sbloccare dei siti web facendo clic su <span class=\"ptl-ctr-help-icon block\"></span> o <span class=\"ptl-ctr-help-icon unblock\"></span>."]
} ,{                      
                           type: "step",
                           title: "Disabilitate o abilitate all'istante l'accesso a Internet",
       content: [ 
                "Nella colonna Accesso Internet, fate clic su <span class=\"ptl-ctr-help-icon stop\"></span> per vietare l'accesso a Internet ai dispositivi del profilo corrispondente e fate clic su <span class=\"ptl-ctr-help-icon enable\"></span> per riabilitare l'accesso."]
}]
},
       BASIC_QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "La funzione QoS (Quality of Service) gestisce le priorità di attività e dispositivi online per garantire una maggiore velocità di connessione di rete quando serve."
                       } ,{                      
                           type: "paragraph",
                           content: "Selezionate Priorità Applicazione per gestire le priorità per le attività online e selezionate la Priorità Dispositivo per dare priorità ai dispositivi."
                       }]
},
       BASIC_APPLICATION_PRIORITY :{ 
               TITLE:"Priorità Applicazione",
               CONTENT: [{
                           type: "paragraph",
                           content: "Scegliete le attività online cui volete dare priorità o fate clic su Personalizza per impostare il livello di priorità per ogni attività online."
                       }]
},
       BASIC_DEVICE_PRIORITY :{ 
               TITLE:"Priorità Dispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "Scegliete il/i dispositivo/i cui volete dare priorità e per quanto tempo avrà la priorità."
                       } ,{                      
                           type: "step",
                           title: "Per dare priorità sd un dispositivo",
       content: [ 
                "1. Trovate nella lista il dispositivo cui volete assegnare la priorità e spostate su Priorità.",
                "2. Selezionate quanto a lungo il dispositivo avrà la priorità assegnata nella colonna Tempo."]
}]
},
       ANTI_VIRUS :{ 
               TITLE:"Antivirus",
               CONTENT: [{
                           type: "paragraph",
                           content: "Con frequenti scansioni di rete, il rilevamento di siti pericolosi e l'isolamento di dispositivi infetti, l'Antivirus rende sicure le vostre informazioni personali. Potete anche controllare come è protetta la vostra rete e se la vostra rete ha subito attacchi."
                       } ,{                      
                           type: "paragraph",
                           content: "Storico - Registra i dispositivi che sono protetti dall'Antivirus oltre alla sorgente e alla classificazione degli attacchi."
                       } ,{                      
                           type: "paragraph",
                           content: "Abilita Tutto - Tappate per abilitare tutti le Protezioni se alcune non sono abilitate."
                       } ,{                      
                           type: "paragraph",
                           content: "Tipo di Protezione - Abilitate questa funzione facendo riferimento alle spiegazioni. Si consiglia di abilitarle tutte."
                       }]
},
       APPLICATION_PRIORITY :{ 
               TITLE:"Priorità Applicazione",
               CONTENT: [{
                           type: "paragraph",
                           content: "La funzione Priorità Applicazione gestisce la priorità delle attività online per garantire una maggiore velocità di connessione di rete quando serve. Scegliete le attività online cui volete assegnare priorità o fate clic su Personalizza per impostare il livello di priorità di ogni attività online."
                       }]
},
       DEVICE_PRIORITY :{ 
               TITLE:"Priorità Dispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "La funzione Priorità Dispositivo gestisce la priorità dei dispositivi per garantire una maggiore velocità di connessione di rete quando serve. Scegliete il/i dispositivo/i cui volete dare priorità e per quanto tempo avrà assegnata la priorità."
                       } ,{                      
                           type: "step",
                           title: "Per dare priorità sd un dispositivo",
       content: [ 
                "1. Trovate nella lista il dispositivo cui volete assegnare la priorità e spostate su Priorità.",
                "2. Selezionate quanto a lungo il dispositivo avrà la priorità assegnata nella colonna Tempo."]
}]
},
       FIREWALL :{ 
               TITLE:"Firewall",
               CONTENT: [{
                           type: "paragraph",
                           content: "Il Firewall SPI (Stateful Packet Inspection) previene cyber attacchi e valida il traffico che passa attraverso il router in base al protocollo. Questa funzione è abilitata di default."
                       } ,{                      
                           type: "name",
                           title: "Abilita Firewall SPI",
                           content: "Non disabilitate il Firewall SPI a meno che non sia strettamente necessario."
                       } ,{                      
                           type: "name",
                           title: "Consenti i Ping dalla Porta WAN/Consenti i Ping dalla Porta LAN",
                           content: "Abilitate per consentire i pacchetti ping dalla porta WAN/LAN. Si consiglia di lasciare le impostazioni di default."
                       }]
},
CWMP: {
      TITLE: "Impostazioni CWMP",
      CONTENT: [{
        type: "paragraph",
        content: "CWMP (CPE WAN Management Protocol, chiamato anche TR-069) consente ad ACS (Auto-Configuration Server) di fornire configurazione automatica, provision, connessione e diagnostica per questo dispositivo. Potete configurare questa funzione seguendo le istruzioni del vostro ISP (Gestore Internet)."
      }, {
        type: "name",
        title: "CWMP",
        content: "Spostate su On per abilitare la funzione CWMP (CPE WAN Management Protocol)."
      }, {
        type: "name",
        title: "Inform",
        content: "Abilitate questa funzione per inviare periodicamente un messaggio Inform al ACS (Auto Configuration Server)."
      }, {
        type: "name",
        title: "Intervallo Inform",
        content: "Immettete la durata di tempo in secondi dopo il quale verrà inviato il messaggio Inform al ACS."
      }, {
        type: "name",
        title: "ACS URL",
        content: "Immettete l'indirizzo web del ACS che è stato fornito dal vostro ISP (Gestore Internet)."
      }, {
        type: "name",
        title: "ACS Username/Password",
        content: "Immettete username e password per fare login al server ACS."
      }, /*{
        type: "name",
        title: "Interfaccia usata dal client TR-069",
        content: "Selezionate quale interfaccia viene usata dal client TR-069."
      }, {
        type: "name",
        title: "Visualissa i messaggi SOAP nella console seriale",
        content: "Spostate per abilitare o disabilitare questa funzione."
      },*/ {
        type: "name",
        title: "Autenticazione Richiesta Connessione",
        content: "Selezionate questa casella di controllo per abilitare l'autenticazione per la richiesta di connessione.",
        children: [{
          type: "name",
          title: "Username/Password",
          content: "Immettete username e password del server ACS per fare login al router."
        }, {
          type: "name",
          title: "Percorso/Porta/URL",
          content: "Immettete percorso, porta e URL per la connessione al server ACS."
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
