(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.su.CHAR.HELP ={
       STATUS_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt WAN(Internet)-Verbindungsinformationen an."
                       }]
},
       STATUS_WIRELESS :{ 
               TITLE:"2,4-/5GHz-WLAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt WLAN-Informationen an."
                       }]
},
       STATUS_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu Ihrer LAN-Verbindung an."
                       }]
},
       STATUS_GUEST :{ 
               TITLE:"2,4-/5GHz-Gastnetz",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu Ihrem Gast-WLAN an."
                       }]
},
       STATUS_USB :{ 
               TITLE:"USB-Geräte",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu den aktuell verbundenen USB-Geräten an."
                       }]
},
       STATUS_PERFORMANCE :{ 
               TITLE:"Performance",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zur aktuellen Routerperformance."
                       }]
},
       STATUS_WIRED :{ 
               TITLE:"Kabelgebundene Teilnehmer",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu den aktuell über Kabel verbundenen Clientgeräten an."
                       }]
},
       STATUS_WIRELESS_CLIENTS :{ 
               TITLE:"WLAN-Teilnehmer",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu den aktuell über WLAN verbundenen Clientgeräten an."
                       }]
},
       INTERNET_TITLE :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Konfigurieren Sie die IPv4-Parameter und entscheiden Sie, ob die MAC-Adresse geklont werden muss."
                       }]
},
       INTERNET_INTERNET :{ 
               TITLE:"IPv4",
               CONTENT: [{
                           type: "paragraph",
                           content: "Wählen Sie Ihren Internetverbindungstyp und geben Sie die notwendigen Parameter ein."
                       } ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: Dynamische IP-Adresse"
                       } ,{                      
                           type: "paragraph",
                           content: "Wählen Sie diesen Typ, wenn Ihr Internetdiensteanbieter Ihre IP-Konfiguration automatisch mittels eines DHCP-Servers zuweist."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse, Subnetzmaske, Standardgateway, Haupt-/Backup-DNS-Server",
                           content: "Diese Parameter werden von Ihrem Internetdiensteanbieter automatisch per DHCP-Server zugewiesen."
                       } ,{                      
                           type: "name",
                           title: "Erneuern",
                           content: "Klicken Sie hier, um Ihre IP-Parameter zu erneuern."
                       } ,{                      
                           type: "name",
                           title: "Freigeben",
                           content: "Klicken Sie hier, um Ihre IP-Konfiguration zurückzugeben."
                       } ,{                      
                           type: "name",
                           title: "DNS-Serveradresse",
                           content: "Bietet Ihr Internetdiensteanbieter DNS-Serveradressen, setzen Sie hier einen Haken und geben Sie sie hier ein. Ansonsten werden die Adressen automatisch zugewiesen."
                       } ,{                      
                           type: "name",
                           title: "MTU-Größe",
                           content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1500 Byte. Wir empfehlen, diese nicht zu ändern, es sei denn, Sie wurden angewiesen, dies zu tun."
                       } ,{                      
                           type: "name",
                           title: "Hostname",
                           content: "Der Wert, den Sie hier eingeben, spezifiziert den Hostnamen Ihres Routers."
                       } ,{                      
                           type: "name",
                           title: "IP-Konfiguration mittels Unicast abfragen",
                           content: "Wählen Sie dies an, wenn der DHCP-Server Ihres Internetdiensteanbieters keine Broadcastapplikationen unterstützt und Sie ansonsten keine IP-Adresse abrufen können."
                       } ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: Statische IP-Adresse"
                       } ,{                      
                           type: "paragraph",
                           content: "Wählen Sie dies aus, wenn Ihr Internetdiensteanbieter Ihnen eine statische IP-Konfiguration bereitgestellt hat (bestehend aus IP-Adresse, Subnetzmaske, Gateway- und DNS-Serveradresse(n))."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse, Subnetzmaske, Standardgateway, Haupt-/Backup-DNS-Server",
                           content: "Geben Sie hier die von Ihrem Internetdiensteanbieter vorgegebenen Informationen ein."
                       } ,{                      
                           type: "name",
                           title: "MTU-Größe",
                           content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1500 Byte. Wir empfehlen, diese nicht zu ändern, es sei denn, Sie wurden angewiesen, dies zu tun."
                       } ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: BigPond-Cable"
                       } ,{                      
                           type: "paragraph",
                           content: "Wählen Sie diesen Typ aus, wenn Ihr Internetdiensteanbieter Ihnen eine BigPond-Kabel-Verbindung zur Verfügung stellt."
                       } ,{                      
                           type: "name",
                           title: "Benutzername/Passwort",
                           content: "Geben Sie Benutzernamen und Passwort ein, wie von Ihrem Internetdiensteanbieter vorgegeben. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "Auth.-Server",
                           content: "IP-Adresse oder Hostname des Authentifizierungsservers."
                       } ,{                      
                           type: "name",
                           title: "Auth.-Domäne",
                           content: "Geben Sie das Domänennamensuffix des Servers (basierend auf dem Standort) ein. Beispiele: nsw.bigpond.net.au für NSW/ACT, vic.bigpond.net.au für VIC/TAS/WA/SA/NT oder qld.bigpond.net.au für QLD."
                       } ,{                      
                           type: "name",
                           title: "MTU-Größe",
                           content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1500 Byte. Wir empfehlen, diese nicht zu ändern, es sei denn, Sie wurden angewiesen, dies zu tun."
                       } ,{                      
                           type: "name",
                           title: "Verbindungsmodus",
                           content: "Wählen Sie hier den von Ihnen gewünschten Internetverbindungsmodus aus.",
       children: [{                      
                           type: "name",
                           title: "Automatisch",
                           content: "Automatische Wiederverbindung, wenn die Internetverbindung getrennt wird."
                       } ,{                      
                           type: "name",
                           title: "Verbinden bei Bedarf",
                           content: "Werden für eine gewisse Zeit (Maximale Leerlaufzeit) keine Internetdaten über Ihren Router übertragen, wird die Verbindung getrennt. Bei einer erneuten Verbindungsanfrage wird sie automatisch wiederhergestellt."
                       } ,{                      
                           type: "name",
                           title: "Manuelles Verbinden",
                           content: "Zum Herstellen und Trennen Ihrer Internetverbindung bedarf es eines Klicks in der Weboberfläche. Definieren Sie eine Maximale Leerlaufzeit, wird die Verbindung auch getrennt, wenn über dieses Zeitintervall keine Internetdaten durch Ihren Router gegangen sind. Standardwert hierfür: 15 Minuten. Deaktivieren Sie die Maximale Leerlaufzeit, indem Sie den Wert 0 setzen."
                       }]
} ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: PPPoE"
                       } ,{                      
                           type: "paragraph",
                           content: "Wählen Sie diesen Typ aus, wenn Sie DSL haben und hierfür einen Benutzernamen und ein Passwort von Ihrem Internetdiensteanbieter bekommen haben."
                       } ,{                      
                           type: "name",
                           title: "Benutzername/Passwort",
                           content: "Geben Sie Benutzernamen und Passwort ein, wie von Ihrem Internetdiensteanbieter vorgegeben. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse/Haupt-DNS-Server/Backup-DNS-Server",
                           content: "Diese Parameter werden von Ihrem Internetdiensteanbieter automatisch per DHCP-Server zugewiesen."
                       } ,{                      
                           type: "name",
                           title: "Zweitverbindung (Keine, Dynamische IP-Adresse, Statische IP-Adresse)",
       children: [{                      
                           type: "name",
                           title: "Keine",
                           content: "Wählen Sie dies aus, wenn Sie keine Zweitverbindung verwenden."
                       } ,{                      
                           type: "name",
                           title: "Dynamische IP-Adresse",
                           content: "Wählen Sie dies aus, wenn IP-Adresse und Subnetzmaske von Ihrem Internetdiensteanbieter automatisch vergeben werden.",
       children: [{                      
                           type: "name",
                           title: "Erneuern",
                           content: "Klicken Sie hier, um Ihre IP-Parameter zu erneuern."
                       } ,{                      
                           type: "name",
                           title: "Freigeben",
                           content: "Klicken Sie hier, um Ihre IP-Konfiguration zurückzugeben."
                       }]
} ,{                      
                           type: "name",
                           title: "Statische IP-Adresse",
                           content: "Wählen Sie dies aus, wenn Ihre IP-Adresse und Subnetzmaske von Ihrem Internetdiensteanbieter vorgegeben wurden. Geben Sie dann die Informationen in die zugehörigen Felder ein."
                       }]
} ,{                      
                           type: "name",
                           title: "MTU-Größe",
                           content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1480 Byte.",
       children: [{                      
                           type: "note",
                           title: "Hinweise",
                           content: "In seltenen Fällen erfordert ein Internetdiensteanbieter, dass Sie die MTU-Größe zwecks besserer Performance anpassen. Diesen Wert sollten Sie nur ändern, wenn Sie angewiesen werden, dies zu tun."
                       }]
} ,{                      
                           type: "name",
                           title: "Dienstname/AC-Name",
                           content: "Standardmäßig sind die Felder für Dienstnamen und Access Concentrator (AC) frei. Diese Felder sollten Sie nur dann befüllen, wenn Sie angewiesen werden, dies zu tun."
                       } ,{                      
                           type: "name",
                           title: "Intervall für Online-Erkennung",
                           content: "Geben Sie ein Intervall von 0 bis 120 Sekunden ein, in dem der Router den Access Concentrator erkennen soll. Standardwert: 10"
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse",
                           content: "Haben Sie von Ihrem Internetdiensteanbieter eine bestimmte (statische) IP-Adresse bekommen, wählen Sie Folgende IP-Adresse verwenden und geben Sie sie ein. Ansonsten wählen Sie Dynamisch vom Internetdiensteanbieter, um automatisch eine IP-Adresse zu beziehen."
                       } ,{                      
                           type: "name",
                           title: "DNS-Serveradresse",
                           content: "Haben Sie von Ihrem Internetdiensteanbieter eine bestimmte (statische) DNS-Serveradresse bekommen, wählen Sie Folgende DNS-Serveradressen verwenden und geben Sie sie ein. Ansonsten wählen Sie Dynamisch vom Internetdiensteanbieter, um die DNS-Serveradressen automatisch zu beziehen."
                       } ,{                      
                           type: "name",
                           title: "Verbindungsmodus",
                           content: "Wählen Sie hier den von Ihnen gewünschten Internetverbindungsmodus aus.",
       children: [{                      
                           type: "name",
                           title: "Automatisch",
                           content: "Automatische Wiederverbindung, wenn die Internetverbindung getrennt wird."
                       } ,{                      
                           type: "name",
                           title: "Verbinden bei Bedarf",
                           content: "Werden für eine gewisse Zeit (Maximale Leerlaufzeit) keine Internetdaten über Ihren Router übertragen, wird die Verbindung getrennt. Bei einer erneuten Verbindungsanfrage wird sie automatisch wiederhergestellt."
                       } ,{                      
                           type: "name",
                           title: "Zeitbasierend",
                           content: "Sie definieren eine Start- und eine Endzeit (im Format HH:MM). Zu diesen Zeitpunkten wird Ihre Internetverbindung hergestellt bzw. getrennt."
                       } ,{                      
                           type: "name",
                           title: "Manuelles Verbinden",
                           content: "Zum Herstellen und Trennen Ihrer Internetverbindung bedarf es eines Klicks in der Weboberfläche. Definieren Sie eine Maximale Leerlaufzeit, wird die Verbindung auch getrennt, wenn über dieses Zeitintervall keine Internetdaten durch Ihren Router gegangen sind. Standardwert hierfür: 15 Minuten. Deaktivieren Sie die Maximale Leerlaufzeit, indem Sie den Wert 0 setzen."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Die Zeitbasierende Verbindung funktioniert nur, wenn die Systemzeit unter Erweitert → Systemtools → Zeiteinstellungen konfiguriert ist."
                       }]
} ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: L2TP/PPTP"
                       } ,{                      
                           type: "paragraph",
                           content: "Wählen Sie diesen Typ, wenn Sie sich mit einem L2TP-/PPTP-VPN-Server verbinden möchten und mit Benutzernamen, Passwort und IP-Adresse/Domänennamen ausgestattet sind."
                       } ,{                      
                           type: "name",
                           title: "Benutzername/Passwort",
                           content: "Geben Sie Benutzernamen und Passwort ein, wie von Ihrem Internetdiensteanbieter vorgegeben. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse/Haupt-DNS-Server/Backup-DNS-Server",
                           content: "Diese Parameter werden von Ihrem Internetdiensteanbieter automatisch per DHCP-Server zugewiesen."
                       } ,{                      
                           type: "name",
                           title: "Zweitverbindung (Dynamische oder Statische IP-Adresse)",
       children: [{                      
                           type: "name",
                           title: "Dynamische IP-Adresse",
                           content: "Wählen Sie dies aus, wenn IP-Adresse und Subnetzmaske von Ihrem Internetdiensteanbieter automatisch vergeben werden."
                       } ,{                      
                           type: "name",
                           title: "Statische IP-Adresse",
                           content: "Wählen Sie dies, sofern IP-Adresse, Subnetzmaske, Gateway und DNS-Serveradressen von Ihrem Internetdiensteanbieter vorgegeben wurden. Diese Informationen müssen dann von Hand eingegeben werden."
                       }]
} ,{                      
                           type: "name",
                           title: "IP-Adresse/Domänenname des VPN-Servers",
                           content: "Geben Sie die IP-Adresse oder den Domänennamen des VPN-Servers ein, wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "MTU-Größe",
                           content: "Die Standard-MTU(Maximal Transmission Unit)-Größe für L2TP beträgt 1460B. Für PPTP 1420 Byte. Es wird empfohlen, diesen Wert nur bei Erfordernis zu ändern."
                       } ,{                      
                           type: "name",
                           title: "Verbindungsmodus",
                           content: "Wählen Sie hier den von Ihnen gewünschten Internetverbindungsmodus aus.",
       children: [{                      
                           type: "name",
                           title: "Automatisch",
                           content: "Automatische Wiederverbindung, wenn die Internetverbindung getrennt wird."
                       } ,{                      
                           type: "name",
                           title: "Verbinden bei Bedarf",
                           content: "Werden für eine gewisse Zeit (Maximale Leerlaufzeit) keine Internetdaten über Ihren Router übertragen, wird die Verbindung getrennt. Bei einer erneuten Verbindungsanfrage wird sie automatisch wiederhergestellt."
                       } ,{                      
                           type: "name",
                           title: "Manuelles Verbinden",
                           content: "Zum Herstellen und Trennen Ihrer Internetverbindung bedarf es eines Klicks in der Weboberfläche. Definieren Sie eine Maximale Leerlaufzeit, wird die Verbindung auch getrennt, wenn über dieses Zeitintervall keine Internetdaten durch Ihren Router gegangen sind. Standardwert hierfür: 15 Minuten. Deaktivieren Sie die Maximale Leerlaufzeit, indem Sie den Wert 0 setzen."
                       }]
},
{
    type: "title",
    id: "internet_ipv4_dslite_title",
    title: "Internetverbindungstyp: DS-Lite"
},{
    type: "paragraph",
    id: "internet_ipv4_dslite_detail",
    content: "Wählen Sie diesen Typ, wenn Ihr ISP DS-Lite-Bereitstellung verwendet und eine IPv6-Adresse für die Einrichtung eines IPv4-in-IPv6-Tunnels im IPv6-Netzwerk bereitstellt, um IPv4-Verkehr oder IPv6-Verkehr in seinem eigenen Netzwerk zu kommunizieren."
},{
    type: "name",
    id: "internet_ipv4_dslite_name",
    title: "AFTR-Name",
    content: "Wenn Ihr ISP unterstützt, den Nachname automatisch zu erhalten, wählen Sie bitte Automatisch. Wenn Ihr ISP einen bestimmten AFTR-Namen bereitstellt, wählen Sie bitte Manuell und geben Sie den vom ISP angegebenen Domainnamen und die ipv6-Adresse in das Eingabefeld ein. "
},{
    type: "title",
    id: "internet_ipv4_v6plus_title",
    title: "Internetverbindungstyp: v6plus"
},{
    type: "paragraph",
    id: "internet_ipv4_v6plus_detail",
    content: "Wählen Sie diesen Typ, wenn Ihr ISP v6plus-Bereitstellung verwendet und eine IPv6-Adresse für die Einrichtung eines IPv4-in-IPv6-Tunnels im IPv6-Netzwerk bereitstellt, um IPv4-Verkehr oder IPv6-Verkehr in seinem eigenen Netzwerk zu kommunizieren."
}
]
},
       INTERNET_MAC :{ 
               TITLE:"MAC-Adresse klonen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Wählen Sie, ob die MAC-Adresse geklont werden soll."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse NICHT klonen",
                           content: "Standard-MAC-Adresse des Routers wiederherstellen."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse des aktuellen Computers auf den WAN-Port klonen",
                           content: "Hiermit kopieren Sie die MAC-Adresse Ihres Computers. Sinnvoll, wenn Ihr Computer bisher direkt an das Internet angeschlossen war (ohne Router) und Ihr Internetdiensteanbieter sich diese MAC-Adresse gemerkt hat."
                       } ,{                      
                           type: "name",
                           title: "Benutzerdefinierte MAC-Adresse",
                           content: "Geben Sie die gewünschte MAC-Adresse von Hand ein."
                       }]
},
       INTERNET_WAN_AGGREGATION :{ 
               TITLE:"WAN-Aggregation",
               id: "internet_wan_aggregation_title",
               CONTENT: [{
                           type: "paragraph",
                           id: "internet_wan_aggregation_detail",
                           content: "WAN-Aggregation konfiguriert den LAN1-Port zu einem zusätzlichen WAN-Port um und ermöglicht so eine schnellere Datenübertragung. Genießen Sie auch dann volle Internetgeschwindigkeit, wenn Ihr Internetdiensteanbieter Datenraten von über 1Gbps anbietet."
                       } ,{                      
                           type: "note",
                           id: "internet_wan_aggregation_note",
                           title: "Hinweise",
                           content: "Bevor Sie diese Funktion aktivieren, stellen Sie sicher, dass Ihr Internetdiensteanbieter WAN-Aggregation unterstützt und dass Ihr Modem über zwei entsprechende Ports verfügt."
                       } ,{                      
                           type: "step",
                           title: "Aktivieren von WAN-Aggregation",
                           id: "internet_wan_aggregation_step",
       content: [ 
                "1. Wählen Sie die Funktion WAN-Aggregation an.",
                "2. Klicken Sie Speichern.",
                "3. Verbinden Sie den WAN-Port und den LAN1-Port Ihres Routers mit den zwei Ports Ihres Modems mittels zweier Ethernetkabel."]
}]
},
       LAN_IPV4 :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt MAC-Adresse, IP-Adresse und Subnetzmaske des Routers an."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "Die Hardwareadresse der LAN-Ports Ihres Routers."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse",
                           content: "Zeigt die Standard-IP-Adresse des Routers, über die Sie sich in die Weboberfläche einloggen können. Kann geändert werden."
                       } ,{                      
                           type: "name",
                           title: "Subnetzmaske",
                           content: "Wählen Sie einen zugewiesen, vom LAN-Port verwendeten Identifikator, um internen/externen Datenverkehr zu routen oder geben Sie eine neue Subnetzmaske ein."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Befindet die neue LAN-IP-Adresse sich in einem anderen Subnetz als die alte, wird die Konfiguration des DHCP-Servers automatisch angepasst. Virtuelle Server und DMZ-Host müssen in diesem Fall hingegen neu konfiguriert werden."
                       }]
},
       LINK_AGG :{ 
               TITLE:"Link-Aggregation",
               CONTENT: [{
                           type: "paragraph",
                           content: "Link-Aggregation bündelt zwei physische Ports zu einem virtuellen, so dass deren Übertragungskapazitäten kombiniert werden."
                       } ,{                      
                           type: "step",
                           id: "link_agg_step_help",
                           title: "So richten Sie Link-Aggregation ein",
       content: [ 
                "1. Aktivieren Sie Link-Aggregation.",
                "2. Geben Sie zwei für Link-Aggregation zu verwendende Ports an.",
                "3. Klicken Sie Speichern."]
}]
},
       IPTV :{ 
               TITLE:"IPTV",
               CONTENT: [{
                           type: "paragraph",
                           content: "IPTV (Internet Protocol Television) ist ein System zur Übertragung von Fernsehbildern über das Internetprotokoll."
                       } ,{                      
                           type: "name",
                           id: "igmp-snooping",
                           title: "IGMP Snooping",
                           content: "Mittels IGMP(Internet Group Management Protocol)-Snooping leitet der Router Multicast-Datenverkehr nur an die Ports weiter, die diese Daten angefordert haben."
                       } ,{                      
                           type: "name",
                           title: "IGMP-Proxy",
                           content: "Wählen Sie dies aus, um IGMP-Proxy zu aktivieren, falls der IPTV-Dienst Ihres Internetdiensteanbieters IGMP-basierend ist."
                       } ,{                      
                           type: "name",
                           title: "IGMP-Version",
                           content: "Wählen Sie die IGMP-Version gemäß den Vorgaben Ihres Internetdiensteanbieters. Die Standard-IGMP-Version ist 2."
                       } ,{                      
                           type: "name",
                           id: "igmp-wifi",
                           title: "Multicast-Weiterleitung über WLAN",
                           content: "Wählen Sie dies, um die Multicast-Weiterleitung über WLAN zu aktivieren."
                       } ,{                      
                           type: "name",
                           title: "IPTV",
                           content: "Wählen Sie dies, um IPTV zu aktivieren, falls der IPTV-Dienst Ihres Internetdiensteanbieters nicht auf IGMP basiert."
                       } ,{                      
                           type: "name",
                           title: "Internetdiensteanbieter-Profile",
                           content: "Wählen Sie Ihr Internetdiensteanbieter-Profil aus. Es gibt drei Arten von Profilen:",
       children: [{                      
                           type: "name",
                           title: "Land/Internetdiensteanbieter",
                           content: "Internetdiensteanbieterprofile mit Standardeinstellungen erscheinen im Format Land-Internetdiensteanbietername. Suchen Sie Ihren Internetdiensteanbieter einfach aus der Drop-Down-Liste aus."
                       } ,{                      
                           type: "name",
                           id: "iptv_bridge_child_1to4",
                           title: "Bridge",
                           content: "Ist Ihr Internetdiensteanbieter nicht aufgeführt und sind keine weiteren Parameter zur Einrichtung von IPTV erforderlich, wählen Sie einfach dieses Profil aus und geben Sie den für IPTV verwendeten LAN-Port an.",
       children: [{                      
                           type: "name",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Geben Sie an, welche Art Daten dieser LAN-Port übertragen soll. Ist zum Beispiel für den LAN-Port 1 IPTV ausgewählt, ist dieser dediziert für IPTV zuständig und Ihr Receiver muss an den LAN1-Port angeschlossen werden."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_2to5",
                           title: "Bridge",
                           content: "Ist Ihr Internetdiensteanbieter nicht aufgeführt und sind keine weiteren Parameter zur Einrichtung von IPTV erforderlich, wählen Sie einfach dieses Profil aus und geben Sie den für IPTV verwendeten LAN-Port an.",
       children: [{                      
                           type: "name",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Geben Sie an, welche Art Daten der LAN-Port übertragen soll. Ist für LAN2 beispielsweise IPTV ausgewählt, funktioniert dieser lediglich für IPTV-Daten und Sie sollten Ihren Receiver an LAN2 anschließen."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_5to8",
                           title: "Bridge",
                           content: "Ist Ihr Internetdiensteanbieter nicht aufgeführt und sind keine weiteren Parameter zur Einrichtung von IPTV erforderlich, wählen Sie einfach dieses Profil aus und geben Sie den für IPTV verwendeten LAN-Port an.",
       children: [{                      
                           type: "name",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Geben Sie an, welche Art Daten der LAN-Port übertragen soll. Ist für LAN5 beispielsweise IPTV ausgewählt, funktioniert dieser lediglich für IPTV-Daten und Sie sollten Ihren Receiver an LAN5 anschließen."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_1to4",
                           title: "Benutzerdefiniert",
                           content: "Ist Ihr Internetdiensteanbieter nicht aufgeführt, benötigt aber bestimmte Parameter wie VLAN-IDs für Internet/VoIP/IPTV sowie Priorität, wählen Sie dieses Profil aus.",
       children: [{                      
                           type: "name",
                           title: "Internet-/VoIP-/IPTV-VLAN-ID/-Priorität",
                           content: "Konfigurieren Sie die VLAN-IDs und Prioritäten wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "802.11Q-Tag",
                           content: "Bitte auswählen wenn die Internetpakete gemäß 802.11Q getaggt werden sollen."
                       } ,{                      
                           type: "name",
                           title: "IPTV-Multicast-VLAN-ID/Priorität",
                           content: "Sie können IPTV-Multicast nach Ihren Wünschen aktivieren und VLAN-ID und Priorität gemäß den Vorgaben Ihres Internetdiensteanbieters konfigurieren."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Geben Sie an, welche Art Daten dieser LAN-Port übertragen soll. Ist zum Beispiel für den LAN-Port 1 IPTV ausgewählt, ist dieser dediziert für IPTV zuständig und Ihr Receiver muss an den LAN1-Port angeschlossen werden."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_2to5",
                           title: "Benutzerdefiniert",
                           content: "Ist Ihr Internetdiensteanbieter nicht aufgeführt, benötigt aber bestimmte Parameter wie VLAN-IDs für Internet/VoIP/IPTV sowie Priorität, wählen Sie dieses Profil aus.",
       children: [{                      
                           type: "name",
                           title: "Internet-/VoIP-/IPTV-VLAN-ID/-Priorität",
                           content: "Konfigurieren Sie die VLAN-IDs und Prioritäten wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "802.11Q-Tag",
                           content: "Bitte auswählen wenn die Internetpakete gemäß 802.11Q getaggt werden sollen."
                       } ,{                      
                           type: "name",
                           title: "IPTV-Multicast-VLAN-ID/Priorität",
                           content: "Sie können IPTV-Multicast nach Ihren Wünschen aktivieren und VLAN-ID und Priorität gemäß den Vorgaben Ihres Internetdiensteanbieters konfigurieren."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Geben Sie an, welche Art Daten der LAN-Port übertragen soll. Ist für LAN2 beispielsweise IPTV ausgewählt, funktioniert dieser lediglich für IPTV-Daten und Sie sollten Ihren Receiver an LAN2 anschließen."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_5to8",
                           title: "Benutzerdefiniert",
                           content: "Ist Ihr Internetdiensteanbieter nicht aufgeführt, benötigt aber bestimmte Parameter wie VLAN-IDs für Internet/VoIP/IPTV sowie Priorität, wählen Sie dieses Profil aus.",
       children: [{                      
                           type: "name",
                           title: "Internet-/VoIP-/IPTV-VLAN-ID/-Priorität",
                           content: "Konfigurieren Sie die VLAN-IDs und Prioritäten wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "802.11Q-Tag",
                           content: "Bitte auswählen wenn die Internetpakete gemäß 802.11Q getaggt werden sollen."
                       } ,{                      
                           type: "name",
                           title: "IPTV-Multicast-VLAN-ID/Priorität",
                           content: "Sie können IPTV-Multicast nach Ihren Wünschen aktivieren und VLAN-ID und Priorität gemäß den Vorgaben Ihres Internetdiensteanbieters konfigurieren."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Geben Sie an, welche Art Daten der LAN-Port übertragen soll. Ist für LAN5 beispielsweise IPTV ausgewählt, funktioniert dieser lediglich für IPTV-Daten und Sie sollten Ihren Receiver an LAN5 anschließen."
                       }]
}]
}]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"DHCP-Server",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Standardmäßig ist der DHCP(Dynamic Host Configuration Protocol)-Server aktiviert. Dann weist er den Clients im Netz die TCP/IP-Konfigurationen automatisch zu.",
                "IP-Adressen werden dabei aus dem IP-Adresspool vergeben. Deaktivieren Sie den DHCP-Server nicht, wenn Sie keinen anderen aktiven DHCP-Server im Netz haben und Sie Ihre IP-Konfigurationen nicht alle von Hand vornehmen möchten."]
} ,{                      
                           type: "name",
                           title: "IP-Adresspool",
                           content: "Geben Sie den IP-Adressbereich an, der für DHCP-Clients reserviert werden soll."
                       } ,{                      
                           type: "name",
                           title: "Adresshaltezeit",
                           content: "Geben Sie die Zeit (1 bis 2880 Minuten) die der Client seine IP-Konfiguration behalten kann. Standardwert: 120."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Adressreservierung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt die Parameter IP-reservierter Geräte an."
                       } ,{                      
                           type: "step",
                           title: "So reservieren Sie eine IP-Adresse:",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Klicken Sie Suchen, um ein aktuell verbundenes Gerät aus der DHCP-Clientliste herauszusuchen oder die MAC-Adresse des gewünschten Gerätes in das Feld MAC-Adresse sowie die zu reservierende IP-Adresse in das Feld IP-Adresse einzugeben.",
                "3. Geben Sie in das Feld Beschreibung eine aussagekräftige Beschreibung für das Gerät ein.",
                "4. Wählen Sie als Status Aktivieren.",
                "5. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Um einen Eintrag zu deaktivieren, klicken Sie auf die Birne."
                       }]
},
       DHCP_CLIENT_LIST :{ 
               TITLE:"DHCP-Clientliste",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu aktuell verbundenen Geräten an."
                       }]
},
       DDNS :{ 
               TITLE:"Dynamisches DNS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Dynamisches DNS (Dynamisches Domänennamensystem) ordnet Ihre dynamische Internet-IP-Adresse einem festen, unveränderlichen Hostnamen zu. Dies ist hilfreich, wenn Sie in Ihrem lokalen Netz einen Server (z.B. FTP) betreiben. Hierfür müssen Sie sich zunächst bei einem DDNS-Anbieter wie www.dyndns.com anmelden."
                       } ,{                      
                           type: "step",
                           title: "So richten Sie Dynamisches DNS ein:",
       content: [ 
                "1. Wählen Sie den DDNS-Anbieter aus.",
                "2. Geben Sie Benutzernamen und Passwort Ihres DDNS-Kontos ein.",
                "3. Geben Sie Ihren DDNS-Domänennamen ein.",
                "4. Wählen Sie aus der Drop-Down-Liste das gewünschte Update-Intervall aus.",
                "5. Ist Ihr Diensteanbieter No-IP, können Sie mittels WAN-IP-Binding sicherstellen, dass der Domänenname mit der WAN-IP-Adresse des Routers assoziiert wird.",
                "6. Klicken Sie Einloggen und Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Möchten Sie ein anderes DDNS-Konto verwenden, loggen Sie sich bitte zunächst aus dem aktuellen aus."
                       }]
},
       DYNAMIC_DNS :{ 
               TITLE:"Dynamisches DNS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Dynamisches DNS (Dynamisches Domänennamensystem) ordnet Ihre dynamische Internet-IP-Adresse einem festen, unveränderlichen Hostnamen zu. Dies ist hilfreich, wenn Sie in Ihrem lokalen Netz einen Server (z.B. FTP) betreiben. Hierfür müssen Sie sich zunächst bei einem DDNS-Anbieter wie www.dyndns.com anmelden."
                       }]
},
       DOMAIN_NAME_LIST :{ 
               TITLE:"Liste der Domänennamen",
               CONTENT: [{
                           type: "paragraph",
                           content: "In dieser Tabelle sehen Sie Informationen zu den mit Ihrem Cloudkonto assoziierten Domänennamen."
                       } ,{                      
                           type: "step",
                           title: "Registrierung eines neuen Domänennamens",
       content: [ 
                "1. Klicken Sie Registrieren.",
                "2. Geben Sie den zu registrierenden Domänennamen ein.",
                "3. Klicken Sie Speichern."]
}]
},
       ADVANCED_ROUTING_STATIC_ROUTING :{ 
               TITLE:"Statisches Routing",
               CONTENT: [{
                           type: "paragraph",
                           content: "Statisches Routing legt eine Route fest, die Datenpakete gehen müssen, um ihr Ziel zu erreichen."
                       } ,{                      
                           type: "step",
                           title: "Einrichtung des Statischen Routings",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Geben Sie eine IP-Adresse in das Feld Zielnetz ein, um die Statische Route diesem Eintrag zuzuordnen.",
                "3. Geben Sie eine Subnetzmaske in das Feld Subnetzmaske ein, um um die Netzgröße festzulegen.",
                "4. Geben Sie in das Feld Standard-Gateway eine Gateway-IP-Adresse ein, über die der Router das Ziel erreichen kann.",
                "5. Wählen Sie im Feld Schnittstelle LAN oder WAN als Zielnetztyp.",
                "6. Geben Sie für diesen Eintrag eine kurze Beschreibung an.",
                "7. Wählen Sie Aktivieren.",
                "8. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Um einen Eintrag zu deaktivieren, klicken Sie auf die Birne."
                       }]
},
       ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE :{ 
               TITLE:"Systemroutingtabelle",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt alle aktuell gültigen Routingeinträge an."
                       }]
},
       WIRELESS_TITLE :{ 
               TITLE:"WLAN-Einstellungen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Konfigurieren Sie die WLAN-Einstellungen nach Ihren Vorstellungen."
                       }]
},
       OFDMA :{ 
               TITLE:"OFDMA",
               CONTENT: [{
                           type: "paragraph",
                           content: "OFDMA ermöglicht es mehreren Benutzern, Daten gleichzeitig zu übertragen, und verbessert so Geschwindigkeit und Effizienz erheblich. Nur wenn Ihre Clients auch OFDMA unterstützen, können Sie die Vorteile voll nutzen."
                       }]
},
       WIRELESS_SMART_CONNECT :{ 
               TITLE:"Smart Connect",
               CONTENT: [{
                           type: "paragraph",
                           content: "Aktivieren Sie dieses Kontrollkästchen, um Smart Connect zu aktivieren. Diese Funktion kann die Leistung von Geräten verbessern, indem je nach den tatsächlich vorgefundenen Verhältnissen die Funkfrequenzen so zugewiesen werden, dass die Netzwerklast optimal verteilt wird."
                       }]
},
       WIRELESS_24G :{ 
               TITLE:"2,4GHz-WLAN",
               CONTENT: [{
                           type: "name",
                           title: "WLAN-Name (SSID)",
                           content: "Es wird empfohlen, den WLAN-Namen (SSID) zu ändern. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "WLAN verbergen",
                           content: "Wählen Sie diese Option, um Ihr 2,4GHz-WLAN zu verstecken. Ist dies ausgewählt, wird Ihre SSID nicht sichtbar sein und muss von Hand eingegeben werden, sofern Sie diesem WLAN beitreten wollen."
                       } ,{                      
                           type: "name",
                           title: "Sicherheit",
                           content: "Wählen Sie hier eine der folgenden Optionen:",
       children: [{                      
                           type: "name",
                           title: "Keine Sicherheit",
                           content: "Wählen Sie diese Option, um Ihr WLAN unverschlüsselt zu betreiben. Nicht empfohlen."
                        } ,{ 
 							type: "name",
 							title: "WPA2/WPA3-Personal",
							id: "WPA3_24G_TITLE",
 							content: "Wählen Sie diese Option aus, um die Standard-Authentifizierungsmethode, die auf ein vorher festgelegtes Passwort (PSK) basiert, zu aktivieren. Hiermit konfigurieren Sie Folgendes:",
 							children: [{
 								type: "name",
 								title: "Version",
 								content: "Wählen Sie eine Sicherheitsmethode für Ihr WLAN aus.",
 								children: [{
 									type: "name",
 									title: "Automatisch",
 									content: "Der automatische Modus ermöglicht eine schrittweise Migration zu einem WPA3 abgesichertes Netzwerk ohne Übertragungsstörungen und unter Beibehaltung der Kompatibilität mit WPA2 gesicherten Geräten.Es wird empfohlen, die Option auf Auto zu setzen."
 								},{
 									type: "name",
 									title: "WPA3-PSK",
 									content: "WLAN-Netzwerke, die durch WPA3-PSK geschützt sind, erhalten eine zuverlässigere passwortbasierte Authentifizierung  durch die gleichzeitige, gleichberechtigte Authentifizierung (SAE) welches einen stärkeren Schutz für Netzwerke bietet."
 								}]
 							}]
 						},{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Wählen Sie diese Option, um Ihr WLAN verschlüsselt zu betreiben. Dies wird wärmstens empfohlen, um dieses vor unberechtigten Zugriffen zu schützen. Ist dies aktiviert, konfigurieren Sie bitte auch Folgendes.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Wählen Sie eine Sicherheitsversion. WPA2-PSK wird empfohlen. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "Verschlüsselung",
                           content: "Wählen Sie einen Sicherheitstyp aus. AES wird empfohlen. TKIP wird nicht empfohlen, da Wireless-N nicht dazu kompatibel ist. Außerdem ist mit TKIP kein WPS möglich. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "Passwort",
                           content: "Geben Sie ein aus 8 bis 63 ASCII- oder 8 bis 64 Hexadezimal-Zeichen bestehendes Passwort ein."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Enterprise",
                           content: "Professionelle Authentifizierungsmethode, die einen RADIUS(Remote Authentication Dial In User Service)-Server benutzt. Ist dies aktiviert, wird vom Router kein WPS unterstützt.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Wählen Sie eine Sicherheitsversion. WPA2 wird empfohlen. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "Verschlüsselung",
                           content: "Wählen Sie einen Sicherheitstyp aus. AES wird empfohlen. TKIP wird nicht empfohlen, da Wireless-N nicht dazu kompatibel ist. Außerdem ist mit TKIP kein WPS möglich. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse des RADIUS-Servers",
                           content: "Geben Sie hier die IP-Adresse des Authentifizierungsservers ein."
                       } ,{                      
                           type: "name",
                           title: "RADIUS-Port",
                           content: "Nummer des Ports, auf dem der RADIUS-Dienst läuft."
                       } ,{                      
                           type: "name",
                           title: "RADIUS-Passwort",
                           content: "Das Passwort, mit dem Sie sich am RADIUS-Server authentifizieren müssen."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           id: "WEP_24G_TITLE",
                           content: "Wählen Sie diese Option, um eine Grundauthentifizierung zu benutzen, wenn die Clientgeräte nur WEP (Wired Equivalent Privacy) unterstützen. Ist dies gewählt, wird WPS deaktiviert.",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Wählen Sie einen Authentifizierungstyp aus. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "WEP-Schlüsselformat",
                           content: "Entweder ASCII oder Hexadezimal. ASCII erlaubt alle ASCII-Zeichen, während Hexadezimal nur Hexadezimalzeichen (0..9, a..f) unterstützt."
                       } ,{                      
                           type: "name",
                           title: "Schlüssellänge",
                           content: "Die Länge des WEP-Schlüssels.",
       children: [{                      
                           type: "name",
                           title: "64 Bit",
                           content: "Benötigt 10 Hexadezimal- oder 5 ASCII-Zeichen."
                       } ,{                      
                           type: "name",
                           title: "128 Bit",
                           content: "Benötigt 26 Hexadezimal- oder 13 ASCII-Zeichen."
                       }]
} ,{                      
                           type: "name",
                           title: "Schlüssel",
                           content: "Geben Sie hier den WEP-Schlüssel ein."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Kanal",
                           content: "Wählen Sie den zu verwendenden 2,4GHz-Kanal aus. Es wird empfohlen, die Standardeinstellung (Auto) beizubehalten, sofern keine anderen Gründe dagegensprechen."
                       } ,{                      
                           type: "name",
                           title: "Sendeleistung",
                           content: "Wählen Sie zwischen Hoch, Mittel oder Niedrig. Der Standardwert ist Hoch (empfohlen)."
                       } ,{                      
                           type: "name",
                           id: "atf_2g4",
                           title: "Airtime-Fairness",
                           content: "Wählen Sie dies aus, um Airtime-Fairness (ATF) zu aktivieren und damit den Durchsatz Ihrer WLAN-Geräte zu optimieren. Der ATF-Trafficplaner verteilt die Airtime gerecht zwischen allen Teilnehmern."
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_2g4",
                           title: "MU-MIMO",
                           content: "Hiermit aktivieren Sie MU(Multi-User)-MIMO."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"5GHz-WLAN",
               CONTENT: [{
                           type: "name",
                           title: "WLAN-Name (SSID)",
                           content: "Es wird empfohlen, den WLAN-Namen (SSID) zu ändern. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "WLAN verbergen",
                           content: "Wählen Sie diese Option, um Ihr 5GHz-WLAN zu verstecken. Ist dies ausgewählt, wird Ihre SSID nicht sichtbar sein und muss von Hand eingegeben werden, sofern Sie diesem WLAN beitreten wollen."
                       } ,{                      
                           type: "name",
                           title: "Sicherheit",
                           content: "Wählen Sie hier eine der folgenden Optionen:",
       children: [{                      
                           type: "name",
                           title: "Keine Sicherheit",
                           content: "Wählen Sie diese Option, um Ihr WLAN unverschlüsselt zu betreiben. Nicht empfohlen."
                        } ,{
 							type: "name",
 							title: "WPA2/WPA3-Personal",
							id: "WPA3_5G_TITLE",
 							content: "Wählen Sie diese Option aus, um die Standard-Authentifizierungsmethode, die auf ein vorher festgelegtes Passwort (PSK) basiert, zu aktivieren. Hiermit konfigurieren Sie Folgendes:",
 							children: [{
 								type: "name",
 								title: "Version",
 								content: "Wählen Sie eine Sicherheitsmethode für Ihr WLAN aus.",
 								children: [{
 									type: "name",
 									title: "Automatisch",
 									content: "Der automatische Modus ermöglicht eine schrittweise Migration zu einem WPA3 abgesichertes Netzwerk ohne Übertragungsstörungen und unter Beibehaltung der Kompatibilität mit WPA2 gesicherten Geräten.Es wird empfohlen, die Option auf Auto zu setzen."
 								},{
 									type: "name",
 									title: "WPA3-PSK",
 									content: "WLAN-Netzwerke, die durch WPA3-PSK geschützt sind, erhalten eine zuverlässigere passwortbasierte Authentifizierung  durch die gleichzeitige, gleichberechtigte Authentifizierung (SAE) welches einen stärkeren Schutz für Netzwerke bietet."
 								}]
 							}]
 						},{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Wählen Sie diese Option, um Ihr WLAN verschlüsselt zu betreiben. Dies wird wärmstens empfohlen, um dieses vor unberechtigten Zugriffen zu schützen. Ist dies aktiviert, konfigurieren Sie bitte auch Folgendes.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Wählen Sie eine Sicherheitsversion. WPA2-PSK wird empfohlen. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "Verschlüsselung",
                           content: "Wählen Sie einen Sicherheitstyp aus. AES wird empfohlen. TKIP wird nicht empfohlen, da Wireless-N nicht dazu kompatibel ist. Außerdem ist mit TKIP kein WPS möglich. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "Passwort",
                           content: "Geben Sie ein aus 8 bis 63 ASCII- oder 8 bis 64 Hexadezimal-Zeichen bestehendes Passwort ein."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Enterprise",
                           content: "Professionelle Authentifizierungsmethode, die einen RADIUS(Remote Authentication Dial In User Service)-Server benutzt. Ist dies aktiviert, wird vom Router kein WPS unterstützt.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Wählen Sie eine Sicherheitsversion. WPA2 wird empfohlen. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "Verschlüsselung",
                           content: "Wählen Sie einen Sicherheitstyp aus. AES wird empfohlen. TKIP wird nicht empfohlen, da Wireless-N nicht dazu kompatibel ist. Außerdem ist mit TKIP kein WPS möglich. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "IP-Adresse des RADIUS-Servers",
                           content: "Geben Sie hier die IP-Adresse des Authentifizierungsservers ein."
                       } ,{                      
                           type: "name",
                           title: "RADIUS-Port",
                           content: "Nummer des Ports, auf dem der RADIUS-Dienst läuft."
                       } ,{                      
                           type: "name",
                           title: "RADIUS-Passwort",
                           content: "Das Passwort, mit dem Sie sich am RADIUS-Server authentifizieren müssen."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           id: "WEP_5G_TITLE",
                           content: "Wählen Sie diese Option, um eine Grundauthentifizierung zu benutzen, wenn die Clientgeräte nur WEP (Wired Equivalent Privacy) unterstützen. Ist dies gewählt, wird WPS deaktiviert.",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Wählen Sie einen Authentifizierungstyp aus. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "WEP-Schlüsselformat",
                           content: "Entweder ASCII oder Hexadezimal. ASCII erlaubt alle ASCII-Zeichen, während Hexadezimal nur Hexadezimalzeichen (0..9, a..f) unterstützt."
                       } ,{                      
                           type: "name",
                           title: "Schlüssellänge",
                           content: "Die Länge des WEP-Schlüssels.",
       children: [{                      
                           type: "name",
                           title: "64 Bit",
                           content: "Benötigt 10 Hexadezimal- oder 5 ASCII-Zeichen."
                       } ,{                      
                           type: "name",
                           title: "128 Bit",
                           content: "Benötigt 26 Hexadezimal- oder 13 ASCII-Zeichen."
                       }]
} ,{                      
                           type: "name",
                           title: "Schlüssel",
                           content: "Geben Sie hier den WEP-Schlüssel ein."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Kanal",
                           content: "Wählen Sie den zu verwendenden 5GHz-Kanal aus. Es wird empfohlen, die Standardeinstellung (Auto) beizubehalten, sofern keine anderen Gründe dagegensprechen."
                       } ,{                      
                           type: "name",
                           title: "Sendeleistung",
                           content: "Wählen Sie zwischen Hoch, Mittel oder Niedrig. Der Standardwert ist Hoch (empfohlen)."
                       } ,{                      
                           type: "name",
                           id: "atf_5g",
                           title: "Airtime-Fairness",
                           content: "Wählen Sie dies aus, um Airtime-Fairness (ATF) zu aktivieren und damit den Durchsatz Ihrer WLAN-Geräte zu optimieren. Der ATF-Trafficplaner verteilt die Airtime gerecht zwischen allen Teilnehmern."
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_5g",
                           title: "MU-MIMO",
                           content: "Hiermit aktivieren Sie MU(Multi-User)-MIMO."
                       }]
},
       WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "paragraph",
                           content: "WPS (WiFi Protected Setup) stellt eine einfache Methode dar, eine sichere WLAN-Verbindung zu errichten."
                       } ,{                      
                           type: "name",
                           title: "Push-Button-Methode (empfohlen)",
       content: [ 
                "Diese Methode erlaubt es Ihnen, ein WPS-fähiges Gerät ganz einfach in Ihr WLAN zu bringen.",
                "Klicken Sie WPS starten und drücken Sie innerhalb von zwei Minuten die WPS-Taste an Ihrem Clientgerät."]
} ,{                      
                           type: "name",
                           title: "Router-PIN",
       content: [ 
                "Die Standard-PIN kann auf einem Aufkleber am Router gefunden werden.",
                "Klicken Sie Erzeugen, um eine neue PIN zu erzeugen oder Standard, um die Original-PIN wiederherzustellen."]
} ,{                      
                           type: "name",
                           title: "PIN des Clients",
       content: [ 
                "Manuelles Hinzufügen eines WLAN-Geräts.",
                "Geben Sie dessen PIN in das Feld ein und klicken Sie Verbinden.."]
}]
},
       WIRELESS_STATISTICS :{ 
               TITLE:"Verbundene WLAN-Geräte",
               CONTENT: [{
                           type: "name",
                           title: "lfd. Nr.",
                           content: "Laufende Nummer des WLAN-Clients."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "Die MAC-Adresse des WLAN-Gerätes"
                       } ,{                      
                           type: "name",
                           title: "Verbindungstyp",
                           content: "Zeigt an, ob das Gerät über 2,4 oder 5GHz verbunden ist."
                       } ,{                      
                           type: "name",
                           title: "Sicherheit",
                           content: "Vom WLAN-Client verwendeter Sicherheitstyp."
                       } ,{                      
                           type: "name",
                           title: "Empfangene Pakete",
                           content: "Anzahl der vom Gerät empfangenen IP-Pakete."
                       } ,{                      
                           type: "name",
                           title: "Gesendete Pakete",
                           content: "Anzahl der vom Gerät gesendeten IP-Pakete."
                       } ,{                      
                           type: "paragraph",
                           content: "Klicken Sie Aktualisieren, um die Informationen neu zu laden."
                       }]
},
       WIRELESS_SCHEDULE :{ 
               TITLE:"WLAN-Zeitplan",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit dem WLAN-Zeitplan können Sie Ihr WLAN für die angegebene Zeitspanne deaktivieren. Beispielsweise können Sie Ihr WLAN um 0 Uhr ab- und um 7 Uhr einschalten."
                       } ,{                      
                           type: "name",
                           title: "Uhrzeit, zu der das WLAN abgeschaltet wird",
                           content: "Zeigt den Zeitraum an, in dem Ihr WLAN abgeschaltet ist.",
       children: [{                      
                           type: "step",
                           title: "Einrichtung der automatischen WLAN-Abschaltung",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Stellen Sie hier die Zeit(en) ein, zu der/denen Ihr WLAN nicht gebraucht wird.",
                "3. Wählen Sie die gewünschten Wochentage aus oder wählen Sie \"Täglich\".",
                "4. Klicken Sie Speichern."]
}]
}]
},
       GUEST_NETWORK_SETTINGS :{ 
               TITLE:"Einstellungen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Diese Funktion bietet Ihren Gästen Internetzugriff über WLAN, ohne dass diese auf Ihr Netz zugreifen können."
                       } ,{                      
                           type: "name",
                           title: "Gäste dürfen einander sehen",
                           content: "Wählen Sie dies, damit die Teilnehmer Ihres Gastnetzes einander sehen können (Netzwerkumgebung, Samba, Ping, FTP)."
                       } ,{                      
                           type: "name",
                           id: "access_local",
                           title: "Gäste dürfen auf mein lokales Netz zugreifen",
                           content: "Wählen Sie dies, damit die Teilnehmer Ihres Gastnetzes mit den Geräten in Ihrem lokalen Netz kommunizieren können (Netzwerkumgebung, Samba, Ping, FTP)."
                       }]
},
       GUEST_NETWORK_WIRELESS :{ 
               TITLE:"2,4-/5GHz-WLAN",
               CONTENT: [{
                           type: "name",
                           title: "Gastnetz aktivieren",
                           content: "Aktivieren des Gastnetzes."
                       } ,{                      
                           type: "name",
                           title: "WLAN-Name (SSID)",
                           content: "Gast-WLAN-Name, kann frei gewählt werden (1 bis 32 Zeichen)."
                       } ,{                      
                           type: "name",
                           title: "WLAN verbergen",
                           content: "Hiermit können Sie Ihr Gast-WLAN unsichtbar machen."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Passwortaktualisierungsintervall",
                           content: "Aktualisierungsintervall des Gast-WLAN-Passworts wählen."
                       } ,{                      
                           type: "name",
                           title: "Sicherheit",
                           content: "Haben Sie entschieden, dass das Passwort nie erneuert wird, wählen Sie eine der folgenden Sicherheitsoptionen:",
       children: [{                      
                           type: "name",
                           title: "Keine Sicherheit",
                           content: "Wählen Sie diese Option, um Ihr WLAN unverschlüsselt zu betreiben. Nicht empfohlen."
                        } ,{ 
 							type: "name",
 							title: "WPA2/WPA3-Personal",
							id: "WPA3_GUEST_TITLE",
 							content: "Wählen Sie diese Option aus, um die Standard-Authentifizierungsmethode, die auf ein vorher festgelegtes Passwort (PSK) basiert, zu aktivieren. Hiermit konfigurieren Sie Folgendes:",
 							children: [{
 								type: "name",
 								title: "Version",
 								content: "Wählen Sie eine Sicherheitsmethode für Ihr WLAN aus.",
 								children: [{
 									type: "name",
 									title: "Automatisch",
 									content: "Der automatische Modus ermöglicht eine schrittweise Migration zu einem WPA3 abgesichertes Netzwerk ohne Übertragungsstörungen und unter Beibehaltung der Kompatibilität mit WPA2 gesicherten Geräten.Es wird empfohlen, die Option auf Auto zu setzen."
 								},{
 									type: "name",
 									title: "WPA3-PSK",
 									content: "WLAN-Netzwerke, die durch WPA3-PSK geschützt sind, erhalten eine zuverlässigere passwortbasierte Authentifizierung  durch die gleichzeitige, gleichberechtigte Authentifizierung (SAE) welches einen stärkeren Schutz für Netzwerke bietet."
 								}]
 							}]
 						},{	                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Wählen Sie diese Option, um Ihr WLAN verschlüsselt zu betreiben. Dies wird wärmstens empfohlen, um dieses vor unberechtigten Zugriffen zu schützen. Ist dies aktiviert, konfigurieren Sie bitte auch Folgendes.",
       children: [{                      
                           type: "name",
                           title: "Version",
                           content: "Wählen Sie eine Sicherheitsversion. WPA2-PSK wird empfohlen. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       } ,{                      
                           type: "name",
                           title: "Verschlüsselung",
                           content: "Wählen Sie einen Sicherheitstyp aus. AES wird empfohlen. TKIP wird nicht empfohlen, da Wireless-N nicht dazu kompatibel ist. Außerdem ist mit TKIP kein WPS möglich. Wenn Sie sich nicht sicher sind, wählen Sie Automatisch."
                       }]
} ,{                      
                           type: "name",
                           id: "portal-help-title",
                           title: "Portal",
                           content: "Portalauthentifizierung erhöht die Sicherheit in Ihrem Netz, indem sie von Teilnehmern Ihres WLANs Zugangsdaten abfragt."
                       } ,{                      
                           type: "step",
                           id: "portal-help-content",
                           title: "So richten Sie Portalauthentifizierung ein:",
       content: [ 
                "1. Wählen Sie Portal aus.",
                "2. Wählen Sie Simples Passwort oder Keine Authentifizierung.",
                "A. Simples Passwort – Geben Sie ein Passwort (aus 8..16 alphanumerischen Zeichen und Unterstrichen).",
                "B. Keine Authentifizierung – Clients können ohne jegliche Authentifizierung auf Ihr WLAN zugreifen.",
                "3. Wählen Sie 1 Stunde, 2 Stunden, 4 Stunden, 8 Stunden oder Immer, um die Sitzungsdauer zu definieren. Läuft die Sitzung ab, muss der zugehörige Client sich erneut authentifizieren.",
                "4. (Optional) Aktivieren Sie die Umleitung und geben Sie die gewünschte Weiterleitungsadresse ein. Neu eingeloggte Clients werden dann auf diese Adresse weitergeleitet.",
                "5. (Optional) Sie können sie Login-Seite selbst gestalten.",
                "A. Portaltitel – Kann bis zu 31 Zeichen lang sein.",
                "B. Nutzungsbedingungen – Können bis zu 1023 Zeichen umfassen.",
                "C. Logo – Hier können Sie ein JPG- oder ein PNG-Bild, das kleiner als 100kB ist, als Logo einladen.",
                "D. Hintergrundbild – Hier können Sie ein JPG- oder ein PNG-Bild, das kleiner als 2MB ist, als Hintergrundbild einladen.",
                "6. Klicken Sie Speichern."]
}]
} ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Passwort",
                           content: "Erstellen Sie ein 8 bis 63 ASCII- oder 8 bis 64 Hexadezimalzeichen langes Kennwort (0-9, a-f, A-F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Passwort",
                           content: "Hier haben Sie die Möglichkeit, ein eigenes Passwort aus 8 bis 63 ASCII-Zeichen oder 8 bis 64 Hexadezimalzeichen zu erstellen."
                       }]
},
       NAT :{ 
               TITLE:"ALG",
               CONTENT: [{
                           type: "paragraph",
                           content: "ALG (Applikation Layer Gateway) erlaubt das Benutzen von NAT(Network Address Translation)-Passierfiltern, um die Funktion bestimmter Protokolle zu gewährleisten: FTP, TFTP, H323 usw. Es wird empfohlen, ALG zu aktivieren."
                       } ,{                      
                           type: "name",
                           title: "FTP-ALG aktivieren",
                           content: "Ermöglicht den Dateitransfer mittels FTP (File Transfer Protocol) durch Ihren NAT-Router."
                       } ,{                      
                           type: "name",
                           title: "TFTP-ALG aktivieren",
                           content: "Ermöglicht den Dateitransfer mittels TFTP (Trivial File Transfer Protocol) durch Ihren NAT-Router."
                       } ,{                      
                           type: "name",
                           title: "H323-ALG aktivieren",
                           content: "Ermöglicht Microsoft NetMeeting im NAT-Betrieb."
                       } ,{                      
                           type: "name",
                           title: "RTSP-ALG aktivieren",
                           content: "Erlaubt Windows-Mediaplayer-Clients, mit Streaming-Servern zu kommunizieren."
                       } ,{                      
                           type: "name",
                           title: "SIP-ALG aktivieren",
                           content: "Ist dies aktiviert, erlaubt es die Kommunikation von SIP-Clients mit SIP(Session Initialisation Protocol)-Servern über NAT."
                       } ,{                      
                           type: "name",
                           title: "PPTP-Passthrough aktivieren",
                           content: "Erlaubt die Tunnelung von Punkt-zu-Punkt-Sitzungen durch IP-Netze."
                       } ,{                      
                           type: "name",
                           title: "L2TP-Passthrough aktivieren",
                           content: "Erlaubt die Tunnelung von Layer-2-Punkt-zu-Punkt-Sitzungen durch IP-Netze."
                       } ,{                      
                           type: "name",
                           title: "IPsec-Passthrough aktivieren",
                           content: "Ist dies aktiviert, erlaubt es die durch ein IP-Netz getunnelte Kommunikation von IPsec(Internet Protocol security)-Clients durch den Router. IPsec verwendet Verschlüsselung, um Ihre Kommunikation über das Internet abzusichern."
                       }]
},
       VIRTUAL_SERVERS :{ 
               TITLE:"Virtuelle Server",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Virtuelle Server werden verwendet, um Dienste aus dem lokalen Netz auch im Internet verfügbar zu machen. Bei der Konfiguration eines Virtuellen Servers geben Sie einen externen Port(bereich) und eine lokale IP-Adresse an. Verbindungsanfragen auf diesem Port werden dann an die angegebene lokale IP-Adresse weitergereicht. Naturgemäß muss diese IP-Adresse statisch sein (von Hand konfiguriert oder im DHCP-Server reserviert).",
                "Virtuelle Server werden verwendet, wenn Sie einen lokalen Server aus dem Internet erreichbar machen wollen."]
} ,{                      
                           type: "paragraph",
                           content: "Diese Tabelle zeigt die aktuell eingestellten Parameter der Virtuellen Server."
                       } ,{                      
                           type: "name",
                           title: "Dienstname",
                           content: "Der Name des Virtuellen Servers."
                       } ,{                      
                           type: "name",
                           title: "Externer Port",
                           content: "Vom Virtuellen Server verwendeter Port(bereich)."
                       } ,{                      
                           type: "name",
                           title: "Interne IP-Adresse",
                           content: "Lokale IP-Adresse des Servers, auf dem der Dienst des Virtuellen Servers läuft."
                       } ,{                      
                           type: "name",
                           title: "Interner Port",
                           content: "Port, auf dem der Dienst des Virtuellen Servers läuft."
                       } ,{                      
                           type: "name",
                           title: "Protokoll",
                           content: "Das Protokoll, das der Dienst benutzt: TCP, UDP oder Alle (alle vom Router unterstützten Protokolle)."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Aktueller Status der Regel (aktiviert oder deaktiviert)."
                       } ,{                      
                           type: "name",
                           title: "Bear-beiten",
                           content: "Hier haben Sie die Möglichkeit, einen Virtuellen Server zu Bearbeiten oder zu Löschen."
                       } ,{                      
                           type: "step",
                           title: "Einrichten eines Virtuellen Servers",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Ist Ihre Applikation in der Drop-Down-Liste Gebräuchliche Dienste zu finden, wählen Sie sie dort aus. Dann werden die Felder Externer Port und Interner Port automatisch befüllt. Ansonsten tragen Sie die Portnummer(n) bitte selbst von Hand ein (Beispiel: 21-25). Lassen Sie das Feld Interner Port frei, wird der externe Port in dieses Feld übernommen. Geben Sie zum Schluss die IP-Adresse des Servers in das Feld Interne IP-Adresse ein.",
                "3. Wählen Sie das für Ihre Applikation zu verwendende Protokoll: TCP, UDP oder Alle.",
                "4. Wählen Sie als Status Aktivieren.",
                "5. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
       content: [ 
                "1. Um einen Eintrag zu deaktivieren, klicken Sie auf die Birne.",
                "2. Es wird empfohlen, die Standardeinstellungen von Interner Port und Protokoll beizubehalten, falls Sie sich unsicher sind.",
                "3. Laufen auf dem lokalen Gerät mehrere Dienste, legen Sie bitte für jeden eine eigene Regel an. Externe Portbereiche dürfen einander nicht überlappen."]
}]
},
       PORT_TRIGGERING :{ 
               TITLE:"Port-Triggering",
               CONTENT: [{
                           type: "paragraph",
                           content: "Port Triggering wird verwendet, damit bestimmte Applikationen trotz Einsatzes eines NAT-Routers funktionieren."
                       } ,{                      
                           type: "paragraph",
                           content: "Diese Tabelle zeigt die aktuell eingestellten Parameter des Porttriggerings."
                       } ,{                      
                           type: "name",
                           title: "Applikation",
                           content: "Name der Applikation."
                       } ,{                      
                           type: "name",
                           title: "Triggerport",
                           content: "Port, auf dem eine ausgehende Verbindung das Inkrafttreten der Triggerregel auslöst."
                       } ,{                      
                           type: "name",
                           title: "Triggerprotokoll",
                           content: "Das Protokoll, das auf dem Triggerport verwendet wird: TCP, UDP oder Alle (alle vom Router unterstützten Protokolle)."
                       } ,{                      
                           type: "name",
                           title: "Externer Port",
                           content: "Der Port(bereich), der durch die Regel für den Trigger-PC geöffnet werden soll. Sie können hier bis zu 5 Portgruppen angeben. Diese müssen durch Kommata getrennt werden. Beispiel: 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
                       } ,{                      
                           type: "name",
                           title: "Externes Protokoll",
                           content: "Das Protokoll, das die eingehenden Verbindungen verwenden dürfen: TCP, UDP oder Alle (alle vom Router unterstützten Protokolle)."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Aktueller Status der Regel (aktiviert oder deaktiviert)."
                       } ,{                      
                           type: "name",
                           title: "Bear-beiten",
                           content: "Hier haben Sie die Möglichkeit, einen Virtuellen Server zu Bearbeiten oder zu Löschen."
                       } ,{                      
                           type: "step",
                           title: "So richten Sie eine Porttriggeringregel ein:",
       content: [{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Jede Regel kann nur von einem LAN-Teilnehmer zugleich benutzt werden."
                       },
                "1. Klicken Sie Hinzufügen.",
                "2. Klicken Sie Gebräuchliche Applikationen, um die Felder Applikation, Triggerport, Triggerprotokoll, Externer Port und Externes Protokoll automatisch auszufüllen oder füllen Sie sie von Hand aus.",
                "3. Wählen Sie als Status Aktivieren.",
                "4. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Um eine Regel zu deaktivieren, klicken Sie auf die Birne."
                       }]
},
       DMZ :{ 
               TITLE:"DMZ",
               CONTENT: [{
                           type: "paragraph",
                           content: "Die DMZ(DeMilitarized Zone)-Funktion ermöglicht das komplette Sichtbarmachen eines lokalen Gerätes über das Internet für einen bestimmten Zweck, z.B. Gaming- oder Videokonferenzserver. Allgemein kann man sagen, dass der DMZ-Server von außen auf allen Ports erreichbar ist. Dieser muss eine statische oder eine reservierte lokale IP-Adresse haben."
                       } ,{                      
                           type: "paragraph",
                           content: "Ist DMZ aktiviert, ist der DMZ-Host von außen komplett sichtbar, was Sicherheitsrisiken bergen kann. Wird DMZ nicht verwendet, sollte es deaktiviert werden."
                       } ,{                      
                           type: "step",
                           title: "So machen Sie einen Computer zum DMZ-Server:",
       content: [ 
                "1. Klicken Sie DMZ aktivieren.",
                "2. In das Feld IP-Adresse des DMZ-Hosts geben Sie die IP-Adresse eines lokalen Computers ein.",
                "3. Klicken Sie Speichern."]
}]
},
       UPNP :{ 
               TITLE:"UPnP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Standardmäßig ist UPnP (Universal Plug-and-Play) aktiviert, um es diversen Geräten zu ermöglichen, im lokalen Netz miteinander zu kommunizieren."
                       } ,{                      
                           type: "paragraph",
                           content: "UPnP wird von einigen Anwendungen wie Multiplayer-Gaming, Peer-to-Peer-Verbindungen, Echtzeitkommunikation (wie VoIP oder Videokonferenzen) oder Fernwartung verwendet."
                       } ,{                      
                           type: "name",
                           title: "UPnP-Dienstliste",
                           content: "Die UPnP-Dienstliste zeigt die aktuellen Informationen zu lokalen UPnP-Geräten."
                       }]
},
       MODEM :{ 
               TITLE:"3G/4G Help",
               CONTENT: [{
                           type: "name",
                           title: "3G/4G-USB-Modem",
                           content: "Zeigt den Status des 3G/4G-USB-Modems an."
                       } ,{                      
                           type: "name",
                           title: "Automatisch erkannte Verbindungsparameter verwenden",
                           content: "Standardmäßig ist diese Funktion aktiviert. Damit kann der Router den Anbieter Ihrer SIM/UIM-Karte automatisch erkennen und die passenden Parameter eintragen. Schlägt die Identifizierung fehl, wählen Sie Region und Mobilfunkanbieter bitte von Hand aus."
                       } ,{                      
                           type: "name",
                           title: "Region",
                           content: "Wählt nach erfolgreicher Identifikation von USB-Modem und SIM-Karte automatisch den Standort aus. Ansonsten wählen Sie Ihren Standort bitte von Hand aus der Drop-Down-Liste aus."
                       } ,{                      
                           type: "name",
                           title: "Mobilfunkanbieter",
                           content: "Zeigt den Internetdienstanbieter des 3G/4G-Netzes an. Wählen Sie den Internetdienstanbieter über das Dropdownmenü aus, falls der Anbieter nicht automatisch erkannt wird. Anschließend werden die Standardeinwählnummer und der APN automatisch vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "SIM-/UIM-PIN",
                           content: "Ist der SIM/UIM-Kartenschutz aktiv, geben Sie bitte Ihre PIN ein. Standardmäßig ist dies deaktiviert. Geben Sie die PIN 3-mal falsch ein, wird Ihre SIM/UIM-Karte automatisch gesperrt. Dann muss sie über die Software Ihres Sticks oder über Ihr Handy durch Eingabe des PUKs entsperrt werden."
                       } ,{                      
                           type: "name",
                           title: "Nachricht",
                           content: "Zeigt die PIN-Infomationen Ihrer SIM/UIM-Karte ein, sofern die PIN aktiviert ist."
                       } ,{                      
                           type: "name",
                           title: "Einstellungen Einwahlnummer,APN,Benutzername/Kennwort",
                           content: "Ist Ihr Internetdiensteanbieter in der Liste der <strong>Mobilfunkanbieter</strong> nicht aufgeführt, wählen Sie dies aus und geben Sie Einwahlnummer, APN (Accesspoint-Namen), Benutzernamen und Passwort wie von Ihrem Internetdiensteanbieter vorgegeben ein."
                       } ,{                      
                           type: "name",
                           title: "Einwahlnummer",
                           content: "Geben Sie die von Ihrem Internetdiensteanbieter vorgegebene Einwahlnummer ein."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Geben Sie den von Ihrem Internetdiensteanbieter vorgegebenen APN (Accesspoint-Namen) ein."
                       } ,{                      
                           type: "name",
                           title: "Benutzername/Passwort",
                           content: "Geben Sie Benutzernamen und Passwort ein, wie von Ihrem Internetdiensteanbieter vorgegeben. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "Verbinden bei Bedarf",
                           content: "Werden für eine gewisse Zeit (Maximale Leerlaufzeit) keine Internetdaten über Ihren Router übertragen, wird die Verbindung getrennt. Bei einer erneuten Verbindungsanfrage wird sie automatisch wiederhergestellt."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Es kann passieren, dass Sie das Gerät länger als die im Feld „Max. Leerlaufzeit“ angegebene Zeit nicht nutzen, die Verbindung jedoch dennoch nicht unterbrochen wird, weil bestimmte Hintergrundanwendungen auf das Internet zugreifen."
                       } ,{                      
                           type: "name",
                           title: "Automatisch verbinden",
                           content: "In diesem Modus wird die Internetverbindung automatisch sofort wiederhergestellt, sobald sie getrennt wird."
                       } ,{                      
                           type: "name",
                           title: "Manuell verbinden",
                           content: "In diesem Modus können Sie die Internetverbindung manuell steuern, indem Sie auf die Schaltflächen „Verbinden“ bzw. „Trennen“ klicken. Dieser Modus unterstützt ebenfalls eine maximale Leerlaufzeit. Geben Sie im Feld „Max. Leerlaufzeit“ die Dauer (in Minuten) an Inaktivität an, nach der die Internetverbindung getrennt werden soll. Der Standardwert lautet „15 Minuten“. Geben Sie 0 (Null) ein, um die Internetverbindung dauerhaft aufrecht zu erhalten."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Es kann passieren, dass Sie das Gerät länger als die im Feld „Max. Leerlaufzeit“ angegebene Zeit nicht nutzen, die Verbindung jedoch dennoch nicht unterbrochen wird, weil bestimmte Hintergrundanwendungen auf das Internet zugreifen."
                       } ,{                      
                           type: "paragraph",
                           content: "Klicken Sie Speichern, um Ihre Einstellungen zu speichern."
                       }]
},
       MODEM_ADVANCED :{ 
               TITLE:"Hilfe zu 3G/4G",
               CONTENT: [{
                           type: "name",
                           title: "3G/4G-USB-Modem",
                           content: "Zeigt den Status des 3G/4G-USB-Modems an."
                       } ,{                      
                           type: "name",
                           title: "Automatisch erkannte Verbindungsparameter verwenden",
                           content: "Standardmäßig ist diese Funktion aktiviert. Damit kann der Router den Anbieter Ihrer SIM/UIM-Karte automatisch erkennen und die passenden Parameter eintragen. Schlägt die Identifizierung fehl, wählen Sie Region und Mobilfunkanbieter bitte von Hand aus."
                       } ,{                      
                           type: "name",
                           title: "Region",
                           content: "Wählt nach erfolgreicher Identifikation von USB-Modem und SIM-Karte automatisch den Standort aus. Ansonsten wählen Sie Ihren Standort bitte von Hand aus der Drop-Down-Liste aus."
                       } ,{                      
                           type: "name",
                           title: "Mobilfunkanbieter",
                           content: "Zeigt den Internetdienstanbieter des 3G/4G-Netzes an. Wählen Sie den Internetdienstanbieter über das Dropdownmenü aus, falls der Anbieter nicht automatisch erkannt wird. Anschließend werden die Standardeinwählnummer und der APN automatisch vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "SIM-/UIM-PIN",
                           content: "Ist der SIM/UIM-Kartenschutz aktiv, geben Sie bitte Ihre PIN ein. Standardmäßig ist dies deaktiviert. Geben Sie die PIN 3-mal falsch ein, wird Ihre SIM/UIM-Karte automatisch gesperrt. Dann muss sie über die Software Ihres Sticks oder über Ihr Handy durch Eingabe des PUKs entsperrt werden."
                       } ,{                      
                           type: "name",
                           title: "Nachricht",
                           content: "Zeigt die PIN-Infomationen Ihrer SIM/UIM-Karte ein, sofern die PIN aktiviert ist."
                       } ,{                      
                           type: "name",
                           title: "Einstellungen Einwahlnummer,APN,Benutzername/Kennwort",
                           content: "Ist Ihr Internetdiensteanbieter in der Liste der <strong>Mobilfunkanbieter</strong> nicht aufgeführt, wählen Sie dies aus und geben Sie Einwahlnummer, APN (Accesspoint-Namen), Benutzernamen und Passwort wie von Ihrem Internetdiensteanbieter vorgegeben ein."
                       } ,{                      
                           type: "name",
                           title: "Einwahlnummer",
                           content: "Geben Sie die von Ihrem Internetdiensteanbieter vorgegebene Einwahlnummer ein."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Geben Sie den von Ihrem Internetdiensteanbieter vorgegebenen APN (Accesspoint-Namen) ein."
                       } ,{                      
                           type: "name",
                           title: "Benutzername/Passwort",
                           content: "Geben Sie Benutzernamen und Passwort ein, wie von Ihrem Internetdiensteanbieter vorgegeben. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "Verbinden bei Bedarf",
                           content: "Werden für eine gewisse Zeit (Maximale Leerlaufzeit) keine Internetdaten über Ihren Router übertragen, wird die Verbindung getrennt. Bei einer erneuten Verbindungsanfrage wird sie automatisch wiederhergestellt."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Es kann passieren, dass Sie das Gerät länger als die im Feld „Max. Leerlaufzeit“ angegebene Zeit nicht nutzen, die Verbindung jedoch dennoch nicht unterbrochen wird, weil bestimmte Hintergrundanwendungen auf das Internet zugreifen."
                       } ,{                      
                           type: "name",
                           title: "Automatisch verbinden",
                           content: "In diesem Modus wird die Internetverbindung automatisch sofort wiederhergestellt, sobald sie getrennt wird."
                       } ,{                      
                           type: "name",
                           title: "Manuell verbinden",
                           content: "In diesem Modus können Sie die Internetverbindung manuell steuern, indem Sie auf die Schaltflächen „Verbinden“ bzw. „Trennen“ klicken. Dieser Modus unterstützt ebenfalls eine maximale Leerlaufzeit. Geben Sie im Feld „Max. Leerlaufzeit“ die Dauer (in Minuten) an Inaktivität an, nach der die Internetverbindung getrennt werden soll. Der Standardwert lautet „15 Minuten“. Geben Sie 0 (Null) ein, um die Internetverbindung dauerhaft aufrecht zu erhalten."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Es kann passieren, dass Sie das Gerät länger als die im Feld „Max. Leerlaufzeit“ angegebene Zeit nicht nutzen, die Verbindung jedoch dennoch nicht unterbrochen wird, weil bestimmte Hintergrundanwendungen auf das Internet zugreifen."
                       } ,{                      
                           type: "name",
                           title: "Authentifizierungstyp",
                           content: "Wählen Sie einen Authentifizierungstyp aus. Standardwert: Automatisch. Einige Internetdiensteanbieter verlangen einen bestimmten Authentifizierungstyp. Bitte stellen Sie sicher, dass Sie den richtigen verwenden."
                       } ,{                      
                           type: "name",
                           title: "Automatisch",
                           content: "Steht dies auf Automatisch (Standard), wählt der Router automatisch den von Ihrem Internetdiensteanbieter vorgegebenen Authentifizierungstyp aus."
                       } ,{                      
                           type: "name",
                           title: "PAP",
                           content: "Bei PAP (Password Authentication Protocol) führt der Router die Authentifizierung mit der Gegenstelle unter Verwendung von zwei Handshakes durch. Wählen Sie diese Option aus, wenn dies für Ihren Internetdienstanbieter erforderlich ist."
                       } ,{                      
                           type: "name",
                           title: "CHAP",
                           content: "Bei CHAP (Challenge Handshake Authentication Protocol) führt der Router die Authentifizierung mit der Gegenstelle unter Verwendung von drei Handshakes durch und überprüft die Identität der Gegenstelle in Intervallen. Wählen Sie diese Option aus, wenn dies für Ihren Internetdienstanbieter erforderlich ist."
                       } ,{                      
                           type: "name",
                           title: "MTU-Größe",
                           content: "Die Standard-MTU(Maximum Transmission Unit)-Größe beträgt 1480 Byte. Ändern Sie dies nur, wenn Ihr Internetdiensteanbieter Sie dazu auffordert."
                       } ,{                      
                           type: "name",
                           title: "Folgende DNS-Serveradressen benutzen",
                           content: "Hat Ihnen Ihr Internetdiensteanbieter die DNS-Server IP-Adressen mitgeteilt, wählen Sie dies aus und geben Sie die IP-Adresse von <strong>Haupt-DNS-Server</strong> und <strong>Backup-DNS-Server</strong> (optional) ein. Ansonsten werden die DNS-Serveradressen von Ihrem Internetdiensteanbieter dynamisch zugewiesen."
                       } ,{                      
                           type: "name",
                           title: "Haupt-DNS-Server",
                           content: "Geben Sie eine DNS-Server-IP-Adresse ein, wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "Backup-DNS-Server",
                           content: "(Optional) Geben Sie eine weitere DNS-Server-IP-Adresse ein, wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "paragraph",
                           content: "Klicken Sie <strong>Speichern</strong>, um die Einstellungen zu speichern."
                       }]
},
       DISK_SETTING :{ 
               TITLE:"Geräteeinstellungen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Auf der Seite Geräteeinstellungen sehen Sie Informationen zu am USB-Port angeschlossenen Geräten."
                       } ,{                      
                           type: "name",
                           title: "Suchen",
                           content: "Normalerweise findet der Router neu angeschlossene USB-Geräte automatisch. Mit dieser Schaltfläche können Sie angeschlossene USB-Geräte manuell erkennen lassen."
                       } ,{                      
                           type: "name",
                           title: "Name",
                           content: "Zeigt den Namen der Partition."
                       } ,{                      
                           type: "name",
                           title: "Kapazität",
                           content: "Gesamtkapazität des USB-Datenträgers"
                       } ,{                      
                           type: "name",
                           title: "Freier Speicherplatz",
                           content: "Aktuell verfügbarer Speicherplatz auf dem USB-Datenträger."
                       } ,{                      
                           type: "name",
                           title: "Sicher entfernen",
                           content: "Klicken Sie hier, bevor Sie das USB-Gerät physisch vom Router entfernen."
                       } ,{                      
                           type: "paragraph",
                           content: "Die Entfernen-Schaltfläche erscheint nur, wenn ein USB-Datenträger an den Router angeschlossen ist. Solange der Datenträger sich in Verwendung befindet, kann er nicht entfernt werden."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Diese Option erscheint nur, wenn ein USB-Datenträger an den Router angeschlossen ist. Aktiviert die Freigabe des USB-Geräts."
                       } ,{                      
                           type: "step",
                           title: "Einrichtung eines Fileservers",
       content: [ 
                "1. Schließen Sie einen USB-Datenträger an Ihren Router an.",
                "2. Stellen Sie sicher, dass das Gerät unter Geräteeinstellungen aufgeführt wird.",
                "3. Wählen Sie Dateifreigabe aktivieren."]
}]
},
       FOLDER_SHARE_ACCOUNT :{ 
               TITLE:"Freigeben für",
               CONTENT: [{
                           type: "name",
                           title: "Benutzerkonto",
                           content: "Sie können entweder Standardaccount oder Neues Benutzerkonto wählen."
                       } ,{                      
                           type: "name",
                           title: "Benutzername/Passwort",
                           content: "Der Benutzername besteht aus 1 bis 15 alphanumerischen Zeichen und dem Unterstrich (_). Das Kennwort ist 1 bis 15 ASCII-Zeichen lang. Bei diesen Feldern muss die Groß-/Kleinschreibung beachtet werden."
                       } ,{                      
                           type: "name",
                           title: "Passwort bestätigen",
                           content: "Geben Sie Ihr Passwort hier erneut ein, um Tippfehler auszuschließen."
                       } ,{                      
                           type: "paragraph",
                           content: "Klicken Sie Speichern, um die Einstellungen zu speichern."
                       }]
},
       FOLDER_SHARE_SETTINGS :{ 
               TITLE:"Freigabeeinstellungen",
               CONTENT: [{
                           type: "name",
                           title: "Netz-/Mediaserver-Name",
                           content: "Der Name, unter dem der angeschlossene USB-Datenträger erreichbar ist."
                       } ,{                      
                           type: "name",
                           title: "Aktivieren",
                           content: "Zugriff zulassen."
                       } ,{                      
                           type: "name",
                           title: "Zugriffsmethode",
                           content: "Es existieren drei Möglichkeiten, auf den angeschlossenen USB-Datenträger zuzugreifen. Wählen Sie von diesen mindestens eine aus.",
       children: [{                      
                           type: "name",
                           title: "Samba/UNC",
                           content: "Ist dies aktiviert, können lokale Teilnehmer über die Router-IP-Adresse (z.B. 192.168.0.1) auf den USB-Datenträger zugreifen."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Ist dies aktiviert, können lokale FTP-Clients über die Router-IP-Adresse auf den USB-Datenträger zugreifen."
                       } ,{                      
                           type: "name",
                           title: "FTP über Internet",
                           content: "Ermöglicht den FTP-Zugriff vom Internet aus. Die Standard-Portnummer lautet 21. Hier haben Sie die Möglichkeit, die Portnummer zu ändern. Klicken Sie Speichern, um Ihre Änderungen zu übernehmen."
                       }]
} ,{                      
                           type: "name",
                           title: "Link",
                           content: "Stellt einen Link zum Öffnen des Datenträgers zur Verfügung."
                       } ,{                      
                           type: "name",
                           title: "Port",
                           content: "Zeigt die Portnummer des FTP-Servers an. Verwenden Sie den vorgegebenen Wert 21 oder geben Sie einen Wert zwischen 1024 und 65535 ein."
                       } ,{                      
                           type: "paragraph",
                           content: "Klicken Sie Speichern, um die Einstellungen zu speichern."
                       }]
},
       FOLDER_SHARE_FOLDERS :{ 
               TITLE:"Ordnerfreigabe",
               CONTENT: [{
                           type: "name",
                           title: "Komplett freigeben",
                           content: "Ermöglicht die Freigabe des ganzen USB-Datenträgers. Möchten Sie nur einzelne Ordner freigeben, deaktivieren Sie diese Option."
                       } ,{                      
                           type: "name",
                           title: "Authentifizierung erfordern",
                           content: "Es wird empfohlen, die Authentifizierung zu aktivieren, so dass jeder, der auf den Datenträger zugreifen möchte, Benutzernamen und Passwort braucht."
                       } ,{                      
                           type: "name",
                           title: "Ordnername",
                           content: "Name des freigegebenen Ordners."
                       } ,{                      
                           type: "name",
                           title: "Ordnerpfad",
                           content: "Der Pfad zu dem freigegebenen Ordner."
                       } ,{                      
                           type: "name",
                           title: "Medienfreigabe",
                           content: "Erlaubt dem Mediaserver die Verwendung dieses Ordners."
                       } ,{                      
                           type: "name",
                           title: "Datenträgername",
                           content: "Name des freigegebenen Datenträgers."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Zeigt den Status des freigegebenen Ordners an."
                       } ,{                      
                           type: "name",
                           title: "Bear-beiten",
                           content: "Bearbeiten oder Löschen einer Freigabe."
                       } ,{                      
                           type: "name",
                           title: "Durchsuchen",
                           content: "Klicken Sie hier, um einen freizugebenden Ordner herauszusuchen."
                       } ,{                      
                           type: "name",
                           title: "Zugriff aus dem Gastnetz erlauben",
                           content: "Bestimmt, ob die Teilnehmer Ihres Gastnetzes Zugriff auf die Freigabe bekommen."
                       } ,{                      
                           type: "name",
                           title: "Authentifizierung erfordern",
                           content: "Ist dies aktiviert, müssen Benutzer einen Namen und ein Passwort eingeben, um Zugriff auf die freigegebenen Ordner zu erhalten (empfohlen)."
                       } ,{                      
                           type: "name",
                           title: "Schreibzugriff",
                           content: "Erlaubt dem Benutzer das Verändern von Datenträgerinhalten."
                       } ,{                      
                           type: "name",
                           title: "Medienfreigabe",
                           content: "Erlaubt dem Mediaserver die Verwendung dieses Ordners."
                       } ,{                      
                           type: "name",
                           title: "Neu laden",
                           content: "Aktualisiert die Anzeige der freigegebenen Ordner."
                       }]
},
       PRINT_SERVER :{ 
               TITLE:"Printserver",
               CONTENT: [{
                           type: "name",
                           title: "Printserver",
                           content: "Aktivieren des Printservers."
                       } ,{                      
                           type: "name",
                           title: "Druckername",
                           content: "Zeigt den Namen des mit dem Router verbundenen Drucker an."
                       }]
},
       TIME_MACHINE :{ 
               TITLE:"Time Machine",
               CONTENT: [{
                           type: "paragraph",
                           content: "Time Machine sichert all Ihre Dateien von Ihrem Mac auf einen an Ihrem Modemrouter angeschlossenen USB-Datenträger."
                       } ,{                      
                           type: "name",
                           title: "Aktivieren",
                           content: "Aktivieren der Time-Machine-Funktion."
                       } ,{                      
                           type: "name",
                           title: "Speicherort",
                           content: "Wählen Sie einen Ort, an dem Ihre Time-Machine-Backups abgelegt werden sollen."
                       } ,{                      
                           type: "name",
                           title: "Backup-Platz",
                           content: "Reservieren Sie ein Speicherplatzkontingent für Ihre Time-Machine-Backups. 0 bedeutet, dass kein Limit gesetzt ist."
                       } ,{                      
                           type: "name",
                           title: "Speichern",
                           content: "Klicken Sie, um Ihre Einstellungen zu speichern."
                       }]
},
       OFFLINE_DOWNLOAD :{ 
               TITLE:"Offline herunterladen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ist Offline herunterladen aktiv, kann Ihr Router Downloads tätigen, ohne dass Ihr Computer läuft."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Offline herunterladen aktivieren."
                       } ,{                      
                           type: "name",
                           title: "Ordnerpfad",
                           content: "Wählen Sie einen Ordner aus, in dem die heruntergeladenen Dateien zwischengespeichert werden sollen.",
       children: [{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Während Sie Dateien downloaden, ändern Sie den Pfad nicht und entfernen Sie den USB-Datenträger nicht. Ansonsten können Fehler auftreten."
                       }]
} ,{                      
                           type: "name",
                           title: "Zeitplan",
                           content: "Wählen Sie dies aus, um den Download-Zeitplan zu aktivieren und Downloads nur im angegebenen Zeitfenster zu tätigen."
                       } ,{                      
                           type: "name",
                           title: "Datei nach Abschluss des Downloads weiterhin bereitstellen",
                           content: "Wählen Sie dies aus, um heruntergeladene Dateien auch nach Abschluss des Downloads weiterhin bereitzustellen."
                       } ,{                      
                           type: "name",
                           title: "Maximale Anzahl aktiver Downloads",
                           content: "Geben Sie einen Wert von 1 bis 10 ein, um die maximale Anzahl gleichzeitiger Downloads anzugeben. Standardwert: 5."
                       }]
},
       OFFLINE_DOWNLOAD_ITEMS :{ 
               TITLE:"Downloads",
               CONTENT: [{
                           type: "note",
                           title: "Datei",
                           content: "Name und Typ der Datei."
                       } ,{                      
                           type: "note",
                           title: "Geschwindigkeit",
                           content: "Zeigt die aktuelle Download-/Upload-Geschwindigkeit."
                       } ,{                      
                           type: "note",
                           title: "Abgeschlossen",
                           content: "Zeigt den Fertigstellungsgrad des Downloads an."
                       } ,{                      
                           type: "note",
                           title: "Restzeit",
                           content: "Zeigt die verbleibende Zeit des Downloads an."
                       } ,{                      
                           type: "note",
                           title: "Verbundene Peers",
                           content: "Zeigt die Anzahl verbundener Peers für diesen Download."
                       } ,{                      
                           type: "note",
                           title: "Status",
                           content: "Zeigt den aktuellen Status des Downloads an (Herunterladen, Warten, Bereitstellen, pausiert, abgeschlossen oder Fehler)."
                       } ,{                      
                           type: "name",
                           title: "Hinzufügen eines Downloads",
       children: [{                      
                           type: "step",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Wählen Sie die Downloadquelle: Torrent-Datei vom PC, Torrent-Datei von USB oder URL.",
                "3. Wählen Sie den Bittorrent-URL oder geben Sie einen FTP-, HTTP- oder aMule-URL an.",
                "4. Klicken Sie Speichern.",
                "5. Für aMule geben Sie bitte unter Erweitert > aMule-Server die IP-Adresse und die Portnummer für den aMule-Server ein."]
}]
} ,{                      
                           type: "name",
                           title: "Downloads entfernen",
                           content: "Wählen Sie den/die zu löschenden Download(s) aus und klicken Sie über der Tabelle Löschen."
                       } ,{                      
                           type: "name",
                           title: "Downloads pausieren",
                           content: "Wählen Sie den/die zu pausierenden Download(s) aus und klicken Sie über der Tabelle Pause."
                       } ,{                      
                           type: "name",
                           title: "Downloads wiederaufnehmen",
                           content: "Wählen Sie den/die zu wiederaufzunehmenden Download(s) aus und klicken Sie über der Tabelle Wiederaufnehmen."
                       }]
},
       OFFLINE_DOWNLOAD_ADVANCED :{ 
               TITLE:"Erweitert",
               CONTENT: [{
                           type: "name",
                           title: "Geschwindigkeitslimits",
                           content: "Geben Sie die maximale Download- und Upload-Geschwindigkeit Ihrer Internetverbindung an."
                       } ,{                      
                           type: "name",
                           title: "Maximale Download-Geschwindigkeit",
                           content: "Geben Sie als maximale Downloadgeschwindigkeit einen Wert von 1 bis 100000 kB/s ein. Standardwert: 1024."
                       } ,{                      
                           type: "name",
                           title: "Maximale Upload-Geschwindigkeit",
                           content: "Geben Sie als maximale Uploadgeschwindigkeit einen Wert von 1 bis 100000 kB/s ein. Standardwert: 512."
                       } ,{                      
                           type: "name",
                           title: "Verbindungsanzahl",
                           content: "Geben Sie die maximale Anzahl Verbindungen an."
                       } ,{                      
                           type: "name",
                           title: "Globale maximale Verbindungsanzahl",
                           content: "Geben Sie einen Wert von 1 bis 200 ein, um ein globales Limit der Verbindungsanzahl zu definieren. Standardwert: 100."
                       } ,{                      
                           type: "name",
                           title: "Maximale Anzahl verbundener Peers pro Torrent",
                           content: "Geben Sie einen Wert von 1 bis 100 ein, um ein Limit der Verbindungsanzahl pro Torrent zu definieren. Standardwert: 50."
                       } ,{                      
                           type: "name",
                           title: "DHT-Netz aktivieren",
                           content: "Aktivieren Sie dies, um die Effizienz beim Finden von Peers und damit die Download-Geschwindigkeit zu steigern."
                       } ,{                      
                           type: "name",
                           title: "Peer-Exchange aktivieren ",
                           content: "Aktivieren Sie dies, um die Kommunikationseffizienz unter den Peers zu verbessern und damit die Download-Geschwindigkeit zu steigern."
                       } ,{                      
                           type: "name",
                           title: "BitTorrent-Protokollverschlüsselung aktivieren",
                           content: "Aktivieren Sie dies, um Ihre Datenübertragung sicherer zu gestalten."
                       } ,{                      
                           type: "name",
                           title: "aMule-Server",
                           content: "Geben Sie die IP-Adresse und die Portnummer eines aMule-Servers ein. Der aMule-Download funktioniert nur, wenn Ihr Router mit dem Server verbunden ist."
                       }]
},
       PARENTAL_CONTROL :{ 
               TITLE:"Kindersicherung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit der Kindersicherung können Sie bestimmte Websites, auch zeitabhängig, blockieren (z.B. Facebook und YouTube, wenn Hausaufgaben gemacht werden sollen)"
                       }]
},
       PARENTAL_CONTROL_DEVICES :{ 
               TITLE:"Der Kindersicherung unterliegende Geräte",
               CONTENT: [{
                           type: "paragraph",
                           content: "In dieser Tabelle sehen Sie Informationen und Einstellungen zu den der Kindersicherung unterliegenden Geräten."
                       } ,{                      
                           type: "step",
                           title: "So sperren Sie den Internetzugang für ein neues Gerät:",
       content: [ 
                "1. Aktivieren Sie Kindersicherung.",
                "2. Klicken Sie Hinzufügen.",
                "3. Klicken Sie Suchen, um ein aktuell verbundenes Gerät auszuwählen oder geben Sie Gerätenamen und MAC-Adresse ein, wenn das Gerät gerade nicht verbunden ist.",
                "4. Klicken Sie auf das Symbol Effektivzeit, um festzulegen, wann die Restriktion gelten soll.",
                "5. Vergeben Sie eine kurze Beschreibung (optional).",
                "6. Wählen Sie Diesen Eintrag Aktivieren.",
                "7. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Um einen Eintrag zu deaktivieren, klicken Sie auf die Birne."
                       }]
},
       PARENTAL_CONTROL_RESTRICTION :{ 
               TITLE:"Contentbeschränkung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Der Contentfilter erlaubt es, den Zugriff auf bestimmte Webpräsenzen/Domänennamen einzuschränken."
                       } ,{                      
                           type: "step",
                           title: "Freigabe von Inhalten",
       content: [ 
                "1. Aktivieren Sie den Contentfilter.",
                "2. Wählen Sie die Einschränkungsrichtlinie entsprechend Ihren Vorstellungen:",
                "A. Sollen die kontrollierten Geräte auf alle Webseiten bis auf die vorgegebenen zugreifen können, wählen Sie Blacklist.",
                "B. Sollen die kontrollierten Geräte nur auf die vorgegebenen Webpräsenzen Zugriff haben, wählen Sie Whitelist.",
                "3. Klicken Sie Schlüsselwort hinzufügen, um einen Domänennamen zur Blacklist bzw. zur Whitelist hinzuzufügen.",
                "4. Klicken Sie Speichern."]
}]
},
       PARENTAL_CONTROL_V2 :{ 
               TITLE:"Kindersicherung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit Benutzerprofilen, Inhaltsfilter und Zugriffsbeschränkungen bietet die Kindersicherung jedem Mitglied Ihrer Familie einen personalisierten und angemessenen Internetzugang."
                       } ,{                      
                           type: "step",
                           title: "Kindersicherung für ein neues Gerät einrichten",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Vergeben Sie dem Profil einen Namen und klicken Sie \"+\", um diesem ein Gerät oder mehrere hinzuzufügen.",
                "3. Passen Sie den blockierten Inhalt Ihren Bedürfnissen entsprechend an. Alle Websites, die die Schlüsselwörter enthalten, werden gesperrt.",
                "4. Möchten Sie für dieses Profil eine Zeitbegrenzung einrichten, verwenden Sie die Zeitbegrenzung. Sie können auch eine Zu-Bett-Geh-Zeit definieren, nach welcher die Geräte unter diesem Profil das Internet nicht mehr benutzen können.",
                "5. Klicken Sie Speichern."]
} ,{                      
                           type: "step",
                           title: "Details zur Internetnutzung eines Profils",
       content: [ 
                "1. In der Spalte Insights klicken Sie auf die Schaltfläche Insights.",
                "2. Möchten Sie weitere Aufzeichnungen sehen, rufen Sie die Historie <span class=\"ptl-ctr-help-icon history\"></span> auf.",
                "3. Sie können Webpräsenzen blockieren und Blockierungen aufheben, indem Sie auf <span class=\"ptl-ctr-help-icon block\"></span> oder <span class=\"ptl-ctr-help-icon unblock\"></span> klicken."]
} ,{                      
                           type: "step",
                           title: "Internetzugriff augenblicklich (ent)sperren",
       content: [ 
                "Klicken Sie in der Spalte Internetzugriff <span class=\"ptl-ctr-help-icon stop\"></span>, um die Geräte dieses Profils vom Internet zu trennen. Klicken Sie <span class=\"ptl-ctr-help-icon enable\"></span>, um den Internetzugriff wiederherzustellen."]
}]
},
       QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "QoS (Quality of Service) lässt Sie Ihren Internetdatenverkehr entsprechend Ihren Vorstellungen priorisieren. So können Sie ein bestimmtes Gerät, einen physischen Port oder eine bestimmte Anwendung gezielt bevorzugen."
                       } ,{                      
                           type: "note",
                           id: "qos-boost",
                           title: "Hinweise",
                           content: "Wenn NAT Boost aktiviert ist, sollte QoS deaktiviert sein."
                       } ,{                      
                           type: "name",
                           title: "Uploaddatenrate",
                           content: "Geben Sie hier die maximal mögliche Uploadgeschwindigkeit Ihrer Leitung ein."
                       } ,{                      
                           type: "name",
                           title: "Downloaddatenrate",
                           content: "Geben Sie hier die maximal mögliche Downloadgeschwindigkeit Ihrer Leitung ein."
                       }]
},
       QOS_ADV :{ 
               TITLE:"Erweitert",
               CONTENT: [{
                           type: "name",
                           title: "Hohe/mittlere/niedrige Priorität",
                           content: "Geben Sie einen Prozentsatz für Datenverkehr mit hoher/mittlerer/niedriger Priorität ein.",
       children: [{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Die Summe aller Prioritäten muss kleiner oder gleich 1 sein."
                       }]
}]
},
       QOS_RULE :{ 
               TITLE:"QoS-Regelliste",
               CONTENT: [{
                           type: "paragraph",
                           content: "Hier können Sie detaillierte QoS-Regeln anlegen, um Ihren Internetdatenverkehr zu priorisieren."
                       } ,{                      
                           type: "step",
                           title: "Einrichten einer QoS-Regel",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Wählen Sie einen Prioritätentyp für die QoS-Regel.",
                "Gerätebezogen - Klicken Sie Suchen, um ein Gerät auszuwählen oder definieren Sie es durch seine MAC-Adresse und vergeben Sie zusätzlich einen Namen.",
                "Applikationsbezogen - Wählen Sie die gewünschte Applikation aus oder geben Sie Namen, Protokoll und Zielport (1..65535) nach Ihren Wünschen ein. Sie können einen einzelnen Port, mehrere Ports oder einen Portbereich, jeweils durch Kommata getrennt, spezifizieren (z.B. 21,36-105,111).",
                "Portbezogen - Wählen Sie den gewünschten Port aus.",
                "3. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Sie können eine Regel mit der Maus in eine andere Prioritätenliste ziehen, um ihre Priorität zu ändern."
                       }]
},
       QOS_DATABASE :{ 
               TITLE:"Datenbank-Upgrade",
               CONTENT: [{
                           type: "paragraph",
                           content: "Datenbanken werden auf www.tp-link.de veröffentlicht. Wenn Sie sich eine neue Datenbank herunterladen, können Sie mit dieser die Liste der durch Ihren Router unterstützten Anwendungen erweitern."
                       } ,{                      
                           type: "name",
                           title: "Datei mit der neuen Datenbank",
                           content: "Klicken Sie Durchsuchen, um die heruntergeladene Datenbankdatei auszuwählen. Klicken Sie dann Upgrade."
                       }]
},
       QOS_V2 :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "QoS (Quality of Service) ermöglicht es Ihnen, den Internetverkehr bestimmter Geräte zu priorisieren, um eine schnellere Verbindung zu gewährleisten, wenn Sie sie am meisten benötigen."
                       }]
},
       QOS_GLOBAL_SETTINGS :{ 
               TITLE:"Globale Einstellungen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Upload-Bandbreite - Geben Sie die maximale Upload-Bandbreite ein, die von Ihrem ISP bereitgestellt wird."
                       } ,{                      
                           type: "paragraph",
                           content: "Download-Bandbreite - Geben Sie die maximale Download-Bandbreite ein, die von Ihrem ISP bereitgestellt wird."
                       }]
},
       QOS_DEVICE_PRIORITY :{ 
               TITLE:"Gerätepriorität",
               CONTENT: [{
                           type: "paragraph",
                           content: "Wählen Sie das/die zu priorisierende(n) Gerät/Geräte und geben Sie einen Gültigkeitszeitraum an."
                       } ,{                      
                           type: "step",
                           title: "Priorisieren eines Geräts",
       content: [ 
                "1. Wählen Sie das zu priorisierende Gerät aus und aktivieren Sie Priorität.",
                "2. Wählen Sie in der Spalte Timing, wie lange dieses Gerät priorisiert werden soll."]
}]
},
       SECURITY_FIREWALL :{ 
               TITLE:"Firewall",
               CONTENT: [{
                           type: "name",
                           title: "SPI-Firewall",
                           content: "Die SPI(Stateful Packet Inspection)-Firewall verhindert Cyberangriffe und validiert den Datenverkehr, der durch Ihren Router geht, basierend auf dem Protokoll. Standardmäßig ist diese Funktion aktiviert."
                       }]
},
       SECURITY_DOS :{ 
               TITLE:"DoS-Schutz",
               CONTENT: [{
                           type: "name",
                           title: "DoS-Schutz",
                           content: "DoS-(Denial of Service)-Schutz schützt Ihr lokales Netz vor DoS-Angriffen. Die folgenden drei Angriffstypen können gefiltert werden. Es gibt für jeden Typ vier Filterebenen:",
       children: [{                      
                           type: "name",
                           title: "Aus",
                           content: "Kein Schutz."
                       } ,{                      
                           type: "name",
                           title: "Niedrig",
                           content: "Geringer Schutz, geringer Einfluss auf die Router-Performance."
                       } ,{                      
                           type: "name",
                           title: "Mittel",
                           content: "Moderater Schutz, eventuell merklicher Einfluss auf die Router-Performance."
                       } ,{                      
                           type: "name",
                           title: "Hoch",
                           content: "Hoher Schutz, merklicher Einfluss auf die Router-Performance."
                       }]
} ,{                      
                           type: "name",
                           title: "Filterung von ICMP-FLOOD-Angriffen",
                           content: "Aktivieren Sie dies, um ICMP(Internet Control Message Protocol)-Angriffe abzuwehren."
                       } ,{                      
                           type: "name",
                           title: "Filterung von UDP-FLOOD-Angriffen",
                           content: "Aktivieren Sie dies, um UDP(User Datagram Protocol)-Angriffe abzuwehren."
                       } ,{                      
                           type: "name",
                           title: "Filterung von TCP-SYN-FLOOD-Angriffen",
                           content: "Aktivieren Sie dies, um TCP-SYN(Transmission Control Protocol Synchronize)-Angriffe abzuwehren."
                       } ,{                      
                           type: "name",
                           title: "Ping-Pakete auf den WAN-Port ignorieren",
                           content: "Beantwortet Echo-Anfragen auf den WAN-Port nicht."
                       } ,{                      
                           type: "name",
                           title: "Ping-Pakete von LAN-Seite ignorieren",
                           content: "Beantwortet Echo-Anfragen auf die LAN-Ports nicht."
                       }]
},
       SECURITY_LIST :{ 
               TITLE:"Liste blockierter DoS-Hosts",
               CONTENT: [{
                           type: "paragraph",
                           content: "In dieser Tabelle sehen Sie die IP-Adresse(n) und die MAC-Adresse(n) des/der blockierten DoS-Host(s)."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Zugriffskontrolle",
               CONTENT: [{
                           type: "paragraph",
                           content: "Die Kindersicherung regelt den Netzzugriff der angegebenen Geräte. Ist ein Gerät blockiert, kann es weder mit dem lokalen Netz noch mit dem Internet kommunizieren."
                       } ,{                      
                           type: "step",
                           title: "Kindersicherung konfigurieren",
       content: [ 
                "1. Aktivieren Sie Kindersicherung.",
                "2. Möchten Sie auch die Geräte im Gastnetz kontrollieren, aktivieren Sie Gastgeräte kontrollieren.",
                "3. Wählen Sie den gewünschten Zugriffsmodus und klicken Sie Speichern:",
                "A. Sollen die Geräte in der Liste blockiert werden, wählen Sie Blacklist.",
                "B. Sollen nur die in der Liste aufgeführten Geräte Zugriff bekommen, wählen Sie Whitelist.",
                "4. Klicken Sie im Abschnitt Geräte in der Blacklist/Whitelist auf Hinzufügen. Geben Sie Gerätenamen und MAC-Adresse des Gerätes ein und klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Um einen Eintrag zu deaktivieren, klicken Sie auf die Birne."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Geräte online",
               CONTENT: [{
                           type: "paragraph",
                           content: "In dieser Tabelle sehen Sie Informationen zu den verbundenen Geräten (auch von Geräten im Gastnetz, sofern Gastgerätekontrolle aktiviert ist)."
                       }]
},
       IPMAC_BIND_SETTING :{ 
               TITLE:"IP-/MAC-Adress-Bindung",
               CONTENT: [{
                           type: "paragraph",
                           content: "IP-/MAC-Adressbindung (auch als ARP-Binding bekannt) kontrolliert den Zugriff bestimmter Geräte, indem die IP-Adresse und die MAC-Adresse miteinander verknüpft werden. IP-/MAC-Adressbindung verhindert auch, dass eine bestimmte IP-Adresse von Unberechtigten verwendet wird."
                       } ,{                      
                           type: "step",
                           title: "Verwenden der IP-/MAC-Adressbindung",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Geben Sie die MAC-Adresse des Gerätes ein.",
                "3. Geben Sie eine IP-Adresse ein, die Sie an die obige MAC-Adresse binden wollen.",
                "4. Wählen Sie als Status Aktivieren.",
                "5. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
       content: [ 
                "1. Ein und die selbe IP-Adresse kann nicht gleichzeitig mehreren MAC-Adressen zugeordnet sein.",
                "2. Um einen Eintrag zu deaktivieren, klicken Sie auf die Birne."]
}]
},
       IPMAC_BIND_ARP :{ 
               TITLE:"ARP-Liste",
               CONTENT: [{
                           type: "paragraph",
                           content: "In dieser Tabelle sehen Sie die MAC-Adresse(n) und die IP-Adresse(n) des/der aktuell verbundenen Gerät(e)."
                       }]
},
       IPV6 :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "name",
                           title: "IPv6",
                           content: "IPv6 (Internetprotokoll Version 6) ist die neueste Version von IP (Internetprotokoll) und behebt unter Anderem das Problem der immer knapper werdenden IPv4(Internetprotokoll Version 4)-Adressen."
                       } ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: Dynamische IP-Adresse"
                       } ,{                      
                           type: "name",
                           title: "Dynamische IP-Adresse",
                           content: "Wählen Sie diesen Typ, wenn Ihr Internetdiensteanbieter dynamische IPv6-Adresszuweisung benutzt."
                       } ,{                      
                           type: "name",
                           title: "IPv6-Adresse/Haupt-DNS-Server/Backup-DNS-Server",
                           content: "Diese Parameter werden vom DHCPv6-Server Ihres Internetdiensteanbieters automatisch zugewiesen."
                       } ,{                      
                           type: "name",
                           title: "Erneuern",
                           content: "Klicken Sie, um neue IPv6-Parameter vom DHCPv6-Server Ihres Internetdiensteanbieters abzurufen."
                       } ,{                      
                           type: "name",
                           title: "Freigeben",
                           content: "Klicken Sie hier, um sämtliche von Ihrem Internetdiensteanbieter zugewiesenen IPv6-Adressen zurückzugeben."
                       } ,{                      
                           type: "name",
                           title: "Abruf meiner IPv6-Adresse",
                           content: "Wählen Sie DHCPv6, um eine nichttemporäre IPv6-Adresse zu beziehen oder SLAAC, um eine IPv6-Adresse aus dem Router-Advertisement-Paket zu erzeugen, je nach Vorgabe Ihres Internetdiensteanbieters."
                       } ,{                      
                           type: "name",
                           title: "Präfix-Delegation",
                           content: "Aktivieren Sie dies, um eine Präfixdelegation vom DHCPv6-Server Ihres Internetdiensteanbieters zu erhalten. Deaktivieren Sie dies, um ein Adresspräfix von Hand einzugeben. Mit diesem Präfix erzeugen lokale Clients ihre IPv6-Adressen."
                       } ,{                      
                           type: "name",
                           title: "DNS-Serveradresse",
                           content: "Wählen Sie Dynamisch vom Internetdiensteanbieter abrufen oder Folgende DNS-Serveradressen verwenden. Haben Sie Folgende DNS-Serveradressen verwenden gewählt, geben Sie die von Ihrem Internetdiensteanbieter bereitgestellte(n) DNS-Serveradresse(n) ein."
                       } ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: Statische IP-Adresse"
                       } ,{                      
                           type: "name",
                           title: "Statische IP-Adresse",
                           content: "Wählen Sie diesen Typ, falls Ihr Internetdiensteanbieter eine statische IPv6-Adresse verwendet."
                       } ,{                      
                           type: "name",
                           title: "IPv6-Adresse/Standardgateway/Haupt-DNS-Server/Backup-DNS-Server",
                           content: "Geben Sie hier die Informationen ein, die Ihnen Ihr Internetdiensteanbieter gegeben hat."
                       } ,{                      
                           type: "name",
                           title: "MTU-Größe",
                           content: "Ein typischer Wert für die MTU(Maximum Transmission Unit)-Größe von Ethernet-Anwendungen ist 1500 Byte. Wir empfehlen, diese nicht zu ändern, es sei denn, Sie wurden angewiesen, dies zu tun."
                       } ,{                      
                           type: "title",
                            title: "Internetverbindungytyp: 6to4-Tunnel"
                       } ,{                      
                           type: "name",
                           title: "6to4-Tunnel",
                           content: "Wählen Sie diesen Typ, falls Ihr Internetdiensteanbieter eine 6to4-Adresszuweisung verwendet."
                       } ,{                      
                           type: "name",
                           title: "IPv4-Adresse/IPv4-Subnetzmaske/IPv4-Standardgateway/Tunneladresse",
                           content: "Diese Parameter werden dynamisch erzeugt, wenn Sie Verbinden klicken."
                       } ,{                      
                           type: "name",
                           title: "Folgende DNS-Serveradressen benutzen",
                           content: "Wählen Sie dies, um vom Internetdiensteanbieter vorgegebene Haupt- und eventuell Backup-DNS-Serveradresse von Hand einzugeben."
                       } ,{                      
                           type: "name",
                           title: "Verbinden",
                           content: "Klicken Sie, um eine Internetverbindung aufzubauen."
                       } ,{                      
                           type: "name",
                           title: "Trennen",
                           content: "Klicken Sie, um Ihre Internetverbindung zu trennen."
                       } ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: PPPoE"
                       } ,{                      
                           type: "name",
                           title: "PPPoE",
                           content: "Wählen Sie diesen Typ, falls Ihr Internetdiensteanbieter PPPoEv6 mit Benutzernamen und Passwort verwendet."
                       } ,{                      
                           type: "name",
                           title: "Benutzername/Passwort",
                           content: "Geben Sie hier die Informationen ein, die Ihnen Ihr Internetdiensteanbieter gegeben hat."
                       } ,{                      
                           type: "name",
                           title: "IPv6-Adresse",
                           content: "Diese Adresse wird vom DHCPv6-Server Ihres Internetdiensteanbieters automatisch zugewiesen, nachdem Sie Benutzernamen und Passwort eingegeben und Verbinden geklickt haben."
                       } ,{                      
                           type: "name",
                           title: "Abruf meiner IPv6-Adresse",
                           content: "Wählen Sie DHCPv6, um eine nichttemporäre IPv6-Adresse zu beziehen, SLAAC, um eine IPv6-Adresse aus dem Router-Advertisement-Paket zu erzeugen oder vom Internetdiensteanbieter vorgegeben, um die IPv6-Adresse von Hand einzugeben."
                       } ,{                      
                           type: "name",
                           title: "Präfix-Delegation",
                           content: "Aktivieren Sie dies, um eine Präfixdelegation vom DHCPv6-Server Ihres Internetdiensteanbieters zu erhalten. Deaktivieren Sie dies, um ein Adresspräfix von Hand einzugeben. Mit diesem Präfix erzeugen lokale Clients ihre IPv6-Adressen."
                       } ,{                      
                           type: "name",
                           title: "DNS-Serveradresse",
                           content: "Wählen Sie Dynamisch vom Internetdiensteanbieter abrufen oder Folgende DNS-Serveradressen verwenden. Haben Sie Folgende DNS-Serveradressen verwenden gewählt, geben Sie die von Ihrem Internetdiensteanbieter vorgegebene DNS-Serveradresse von Hand ein."
                       } ,{                      
                           type: "name",
                           title: "Verbinden",
                           content: "Klicken Sie, um eine Internetverbindung aufzubauen."
                       } ,{                      
                           type: "name",
                           title: "Trennen",
                           content: "Klicken Sie, um Ihre Internetverbindung zu trennen."
                       } ,{                      
                           type: "title",
                            title: "Internetverbindungstyp: Passthrough (Bridge)"
                       } ,{                      
                           type: "paragraph",
                           content: "Wählen Sie diesen Typ, falls Ihr Internetdiensteanbieter Passthrough(Bridge)-Netzdeployment anbietet. Bei diesem Verbindungstyp bedarf es keiner Konfiguration."
                       }]
},
       IPV6_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Bis auf den Internetverbindungstyp Passthrough (Bridge) benötigen alle Internetverbindungstypen eine IPv6-Konfiguration."
                       } ,{                      
                           type: "name",
                           title: "Zugewiesener Typ",
                           content: "Wählen Sie die von Ihrem Internetdiensteanbieter vorgegebene Einstellung.",
       children: [{                      
                           type: "name",
                           title: "DHCPv6",
                           content: "Weist Geräten im lokalen Netz automatisch IPv6-Adressen zu.",
       children: [{                      
                           type: "name",
                           title: "Adresspräfix",
                           content: "Geben Sie das Adresspräfix ein, wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "Adresshaltezeit",
                           content: "Die Gültigkeitsdauer Ihrer IP-Adresse. Behalten Sie den Standardwert von 86400 Sekunden oder ändern Sie den Wert, falls von Ihrem Internetdiensteanbieter verlangt."
                       } ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "Die IP-Adresse, die vom DHCPv6-Server Ihres Internetdiensteanbieters automatisch zugewiesen wurde."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC + Zustandsloses DHCP",
       children: [{                      
                           type: "name",
                           title: "Adresspräfix",
                           content: "Geben Sie das Adresspräfix ein, wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "Die von Ihrem Internetdiensteanbieter automatisch zugewiesene IP-Adresse."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC + RDNSS",
       children: [{                      
                           type: "name",
                           title: "Adresspräfix",
                           content: "Geben Sie das Adresspräfix ein, wie von Ihrem Internetdiensteanbieter vorgegeben."
                       } ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "Die von Ihrem Internetdiensteanbieter automatisch zugewiesene IP-Adresse."
                       }]
},{
    type: "name",
    id:"ipv6_lan_assigned_type_nd_proxy_name",
    title: "ND Proxy",
    content: "Eine Funktion, die Proxys für LAN-Clients bereitstellt, die auf dem Neighbor Discovery Protocol basieren."
}
]
}]
},
       IPV6_MAC_CLONE :{ 
               TITLE:"MAC-Adresse klonen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Wählen Sie, ob die MAC-Adresse geklont werden soll."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse NICHT klonen",
                           content: "Standard-MAC-Adresse des Routers wiederherstellen."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse des aktuellen Computers auf den WAN-Port klonen",
                           content: "Hiermit kopieren Sie die MAC-Adresse Ihres Computers. Sinnvoll, wenn Ihr Computer bisher direkt an das Internet angeschlossen war (ohne Router) und Ihr Internetdiensteanbieter sich diese MAC-Adresse gemerkt hat."
                       } ,{                      
                           type: "name",
                           title: "Benutzerdefinierte MAC-Adresse",
                           content: "Geben Sie die gewünschte MAC-Adresse von Hand ein."
                       }]
},
       TIME_SETTING :{ 
               TITLE:"Zeiteinstellungen",
               CONTENT: [{
                           type: "paragraph",
                           content: "In den Uhrzeiteinstellungen können Sie die Systemzeit Ihres Routers anpassen. Diese beeinflusst zeitbasierende Funktionen wie die Kindersicherung."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Aktivieren der 24-Stunden-Uhr. Es wird empfohlen, dies vor den Konfigurationsschritten der zeitbasierenden Funktionen zu tun."
                       } ,{                      
                           type: "title",
                            title: "Systemzeit"
                       } ,{                      
                           type: "step",
                           title: "Uhrzeit automatisch aus dem Internet abrufen",
       content: [ 
                "Standardmäßig aktiviert. Aus dem Internet abrufen erlaubt das Synchronisieren Ihrer Routeruhr mit einem Zeitserver über das Internet.",
                "1. Wählen Sie Aus dem Internet abrufen.",
                "2. Wählen Sie aus der Drop-Down-Liste Ihre Zeitzone aus.",
                "3. Geben Sie in das Feld NTP-Server I die IP-Adresse oder den Domänennamen eines NTP-Servers ein.",
                "4. Geben Sie in das Feld NTP-Server II die Adresse eines weiteren NTP-Servers ein (optional).",
                "5. Klicken Sie Abrufen.",
                "6. Klicken Sie Speichern."]
} ,{                      
                           type: "step",
                           title: "Uhrzeit von Ihrem Computer abrufen",
       content: [ 
                "Hiermit können Sie die Systemzeit Ihres PCs in Ihren Router übernehmen. Bitte überprüfen Sie zunächst, ob Erstere korrekt ist.",
                "Wählen Sie Vom PC übernehmen und Klicken Sie Speichern."]
} ,{                      
                           type: "step",
                           title: "Uhrzeit manuell einstellen",
       content: [ 
                "Kann Ihr Gerät die Uhrzeit nicht vom Internet oder Ihrem PC übernehmen, können Sie die Systemzeit von Hand setzen.",
                "1. Wählen Sie Manuell.",
                "2. Geben Sie das aktuelle Datum und die aktuelle Uhrzeit ein.",
                "3. Klicken Sie Speichern."]
}]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Sommerzeit",
                           content: "Hiermit können Sie Ihre Systemzeit automatisch an die Sommerzeit anpassen."
                       } ,{                      
                           type: "step",
                           title: "So konfigurieren Sie die Sommerzeit:",
       content: [ 
                "1. Aktivieren Sie Sommerzeit verwenden.",
                "2. Geben Sie den Zeitraum an, in dem in Ihrer Zeitzone die Sommerzeit gilt.",
                "3. Klicken Sie Speichern."]
}]
},
       DIGNOSTIC :{ 
               TITLE:"Diagnose",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ihr Router verfügt über ein Ping- und ein Traceroute-Diagnosetool zur Erkennung von Verbindungsproblemen."
                       } ,{                      
                           type: "title",
                            title: "Ping & Traceroute"
                       } ,{                      
                           type: "paragraph",
                           content: "Das Ping-Tool schickt Pakete an das angegebene Ziel und wertet die Antwortpakete aus hinsichtlich Erfolgsquote und Antwortzeit."
                       } ,{                      
                           type: "paragraph",
                           content: "Das Traceroute-Tool schickt Pakete an das angegebene Ziel und zeigt IP-Adresse und Antwortzeit der Zwischenschritte an."
                       } ,{                      
                           type: "paragraph",
                           content: "Sie können Ping und Traceroute auf lokale Geräte oder Internethosts ausführen, z.B. 192.168.0.100 oder tp-link.de."
                       } ,{                      
                           type: "step",
                           title: "Diagnose mittels Ping",
       content: [ 
                "1. Wählen Sie Ping als Diagnosetool.",
                "2. Geben Sie IP-Adresse oder Hostnamen des Ziels ein.",
                "3. (optional) Klicken Sie auf den Pfeil, um das Erweiterte Menü zu öffnen und Anzahl und Größe der Ping-Pakete zu bestimmen.",
                "4. Klicken Sie Start."]
} ,{                      
                           type: "step",
                           title: "Diagnose mittels Traceroute",
       content: [ 
                "1. Wählen Sie Traceroute als Diagnosetool.",
                "2. Geben Sie IP-Adresse oder Hostnamen des Ziels ein.",
                "3. (optional) Klicken Sie auf den Pfeil, um das Erweiterte Menü zu öffnen und die maximale Anzahl Hops (to be reached) in das Feld Traceroute-TTL (Time to Live) ein. Standardwert: 20.",
                "4. Klicken Sie Start."]
}]
},
       PORT_MIRROR :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                            title: "Port-Mirroring"
                       } ,{                      
                           type: "paragraph",
                           content: "Port-Mirroring leitet Kopien der Pakete vom mirrored Port auf den mirroring Port weiter. An diesem ist normalerweise ein Diagnosegerät angeschlossen, um die Pakete zwecks Überwachung und Fehleranalyse auszuwerten."
                       } ,{                      
                           type: "step",
                           title: "Paketkopien auf angegebenen Port weiterleiten",
       content: [ 
                "1. Aktivieren Sie Port-Mirroring.",
                "2. Wählen Sie die zu überwachenden Ports als mirrored Ports.",
                "3. Wählen Sie einen Port als mirroring Port.",
                "4. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Ein Port kann nicht mirrored Port und mirroring Port zugleich sein."
                       }]
},
       FIRMWARE :{ 
               TITLE:"Firmware-Upgrade",
               CONTENT: [{
                           type: "paragraph",
                           content: "Firmware-Upgrades versorgen Ihren Router mit neuen Funktionen und Fehlerbehebungen. Es wird empfohlen, Ihren Router mit der neuesten Firmware zu betreiben, um die beste Performance zu ermöglichen."
                       } ,{                      
                           type: "step",
                           title: "Bitte befolgen Sie dies, um mögliche Fehler beim Upgrade zu vermeiden:",
       content: [ 
                "Vor der Aktualisierung",
                "1. Stellen Sie sicher, dass Sie eine stabile Verbindung zwischen Router und Computer haben. Ein Upgrade über eine WLAN-Verbindung wird NICHT empfohlen.",
                "2. Stellen Sie sicher, dass kein USB-Gerät an Ihren Router angeschlossen ist.",
                "3. Sichern Sie vorsichtshalber die Konfiguration Ihres Routers in einer Datei.",
                "While upgrading",
                "Lassen Sie den Router EINGESCHALTET, bis das Upgrade abgeschlossen ist."]
}]
},
       FIRMWARE_UPGRADE_ONLINE :{ 
               TITLE:"Firmware online aktualisieren",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Klicken Sie Upgrade und bestätigen Sie. Der Router lädt und installiert die neueste Firmware automatisch. Sie können auch Nach Upgrades überprüfen klicken, um nach neuer Firmware zu suchen."]
}]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Firmware von Hand aktualisieren",
               CONTENT: [{
                           type: "step",
       content: [ 
                "1. Klicken Sie unten auf der Seite auf Support und laden Sie sich die neueste Firmware herunter. Bitte stellen Sie sicher, dass die Firmware für die Hardwareversion Ihres Routers freigegeben ist.",
                "2. Klicken Sie Durchsuchen und wählen Sie die heruntergeladene Firmwaredatei aus.",
                "3. Klicken Sie Upgrade."]
} ,{                      
                           type: "paragraph",
       content: [ 
                "Das Firmware-Upgrade wird einige Minuten dauern. Anschließend startet der Router automatisch neu."]
}]
},
       BACKUP :{ 
               TITLE:"Konfigurationsmenü",
               CONTENT: [{
                           type: "paragraph",
                           content: "Das Konfigurationsmanagement erlaubt Ihnen das Sichern Ihrer aktuellen Routerkonfiguration sowie das Rücksetzen Ihres Routers auf Standardeinstellungen."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Bitte schalten Sie Ihren Router während des Rücksetzens oder während des Upgrades NICHT aus."
                       } ,{                      
                           type: "title",
                           title: "Sichern",
                           content: "Es wird empfohlen, Ihre fertige Konfiguration zu speichern, um zu gegebenem Anlass Ihren Router schnell in einen betriebsfähigen Zustand versetzen zu können."
                       } ,{                      
                           type: "step",
                           title: "Sichern der aktuellen Konfiguration",
       content: [ 
                "1. Klicken Sie Sichern.",
                "2. Warten Sie, bis das Konfigurationsbackup ausgeführt ist."]
}]
},
       RESTORE :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Wiederherstellen",
                           content: "Sie können Ihren Router auf einen früheren Stand zurücksetzen, wenn Sie eine damalige Backup-Datei haben."
                       } ,{                      
                           type: "step",
                           title: "So stellen Sie eine gesicherte Routerkonfiguration wieder her:",
       content: [ 
                "1. Klicken Sie Durchsuchen.",
                "2. Wählen Sie die Konfigurationsdatei aus.",
                "3. Klicken Sie Wiederherstellen."]
}]
},
       FACTORY :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Wiederherstellen der Standardeinstellungen",
       content: [ 
                "Beim Zurücksetzen auf Werkseinstellungen gehen prinzipbedingt alle Einstellungen Ihres Geräts wie WLAN, Kindersicherung, Netz, … verloren.",
                "Nach dem Rücksetzen des Gerätes müssen Sie ein neues Passwort für die Weboberfläche vergeben."]
}]
},
       REBOOT :{ 
               TITLE:"Zeitgesteuerter Neustart",
               CONTENT: [{
                           type: "paragraph",
                           content: "Der Zeitgesteuerte Neustart leert den Zwischenspeicher Ihres Routers für bessere Performance. Sie können Ihren Router von Hand oder regelmäßig automatisiert neu starten."
                       } ,{                      
                           type: "step",
                           title: "Manuell einen Neustart auslösen",
       content: [ 
                "Klicken Sie Neustart und warten Sie ein paar Minuten, bis der Neustart abgeschlossen ist."]
} ,{                      
                           type: "step",
                           title: "Verwenden des Zeitgesteuerten Neustarts",
       content: [ 
                "1. Aktivieren Sie Zeitgesteuerter Neustart.",
                "2. Definieren Sie, wann und in welchem Intervall der Router neustarten soll. Füllen Sie hierfür die Felder Neustart-Uhrzeit und Wiederholen.",
                "3. Klicken Sie Speichern."]
}]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Verwaltung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Unter Verwaltung können Sie das Login-Passwort sowie die Rechte der verbundenen Clientgeräte bearbeiten."
                       } ,{                      
                           type: "name",
                           title: "Benutzerkonto",
                           content: "Hiermit können Sie Ihr Passwort ändern.",
       children: [{                      
                           type: "step",
                           title: "Ändern Ihres Passworts",
       content: [ 
                "1. Geben Sie Ihr altes Passwort ein.",
                "2. Geben Sie Ihr neues Passwort ein.",
                "3. Neues Passwort bestätigen.",
                "4. Klicken Sie Speichern."]
}]
}]
},
       ADMIN_RECOVERY :{ 
               TITLE:"Passwortwiederherstellung",
               CONTENT: [{
                           type: "name",
                           title: "Wiederherstellen des Standardpassworts",
                           content: "Die Passwortwiederherstellung erlaubt Ihnen die Wiederherstellung des Standard-Login-Passworts, ohne dass Sie das ganze Gerät auf Standardeinstellungen zurücksetzen müssen.",
       children: [{                      
                           type: "step",
                           title: "Ändern Ihres Passworts",
       content: [ 
                "1. Aktivieren Sie die Passwortwiederherstellung.",
                "2. Geben Sie in das Von-Feld eine gültige Absender-E-Mail-Adresse ein.",
                "3. Geben Sie in das An-Feld eine gültige Empfänger-E-Mail-Adresse ein.",
                "4. Geben Sie die SMTP-Serveradresse der Absender-E-Mail-Adresse (Von) an.",
                "5. Erfordert der SMTP-Server Ihrer Absender-E-Mail-Adresse eine Authentifizierung (ist normalerweise der Fall), aktivieren Sie die Authentifizierung und geben Sie Benutzernamen (normalerweise E-Mail-Adresse) und das Passwort ein.",
                "6. Klicken Sie Speichern."]
}]
}]
},
       ADMIN_LOCAL :{ 
               TITLE:"Lokale Verwaltung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Hiermit können Sie die Geräte, die Zugriff auf die Managementoberfläche Ihres Routers haben, einschränken."
                       } ,{                      
                           type: "name",
                           id: "local_management_https",
                           title: "Lokale Verwaltung über HTTPS",
                           content: "Aktivieren Sie Lokale Verwaltung via HTTPS, wenn Sie mittels HTTPS und HTTP auf Ihren Router zugreifen möchten."
                       } ,{                      
                           type: "name",
                           title: "Zugriff für alle LAN-Geräte",
                           content: "Allen Geräten im lokalen Netz Zugriff auf die Weboberfläche gewähren. Ist dies deaktiviert, müssen Sie mindestens ein Gerät zulassen, um sich nicht selbst auszusperren."
                       } ,{                      
                           type: "name",
                           title: "MAC-Adresse",
                           content: "Die MAC-Adresse des konfigurierten Gerätes."
                       } ,{                      
                           type: "name",
                           title: "Beschreibung",
                           content: "Eine Beschreibung des Gerätes."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Gibt an, ob das Gerät zugelassen oder gesperrt ist."
                       } ,{                      
                           type: "name",
                           title: "Bear-beiten",
                           content: "Hier haben Sie die Möglichkeit, Einträge zu Bearbeiten und zu Löschen."
                       } ,{                      
                           type: "step",
                           title: "So fügen Sie ein neues Gerät zur Liste hinzu:",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Klicken Sie Existierende Geräte, um eines auszuwählen oder spezifizieren Sie das Gerät durch manuelle Eingabe der MAC-Adresse.",
                "3. Vergeben Sie eine Beschreibung.",
                "4. Wählen Sie als Status Aktivieren.",
                "5. Klicken Sie OK."]
} ,{                      
                           type: "step",
                           title: "So bearbeiten oder löschen Sie ein in der Liste befindliches Gerät:",
                           content: "Klicken Sie in der Tabelle Bearbeiten oder Löschen, um einen Eintrag zu bearbeiten oder zu löschen."
                       } ,{                      
                           type: "step",
                           title: "Löschen mehrerer Geräte",
                           content: "Wählen Sie alle zu löschenden Geräte aus und klicken Sie dann auf Löschen."
                       }]
},
       ADMIN_REMOTE_WITHOUT_HTTPS :{ 
               TITLE:"Fernwartung",
               CONTENT: [{
                           type: "name",
                           title: "Fernwartung",
                           content: "Mittels Fernwartung können Sie über das Internet auf Ihren Router zugreifen, um ihn zu konfigurieren.",
       children: [{                      
                           type: "step",
                           title: "Remote-Geräten keinen Zugriff auf den Router erlauben",
                           content: "Wählen Sie Fernwartung deaktivieren und klicken Sie Speichern."
                       } ,{                      
                           type: "step",
                           title: "Allen Remote-Geräten Zugriff auf den Router erlauben",
       content: [ 
                "1. Wählen Sie Fernwartung für ALLE Geräte aktivieren.",
                "2. Geben Sie den Dienstport für die Fernwartung (80 oder 1024 bis 65535) ein. Über diesen können Sie aus der Ferne auf Ihren Router zugreifen.",
                "3. Klicken Sie Speichern."]
} ,{                      
                           type: "step",
                           title: "Nur bestimmten Remote-Geräten Zugriff auf den Router erlauben",
       content: [ 
                "1. Wählen Sie Fernwartung für ein bestimmtes Gerät aktivieren.",
                "2. Geben Sie den Dienstport für die Fernwartung (80 oder 1024 bis 65535) ein. Über diesen können Sie aus der Ferne auf Ihren Router zugreifen.",
                "3. Geben Sie als die Für Fernwartung zugelassene IP-Adresse die IP-Adresse des Remote-Geräts ein.",
                "4. Klicken Sie Speichern."]
}]
}]
},
       ADMIN_REMOTE :{ 
               TITLE:"Fernwartung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mittels Fernwartung können Sie auch über das Internet die Weboberfläche Ihres Routers erreichen."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step_title",
                           content: "Einrichten der Fernwartung"
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step1",
                           content: "1. Markieren Sie dies, um die Fernwartung zu aktivieren."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step2",
                           content: "2. HTTPS- und HTTP-Port auf Standardeinstellungen belassen."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step3",
                           content: "3. Wählen Sie aus, welches Remote-Gerät auf Ihren Router zugreifen können darf:",
       children: [{                      
                           type: "name",
                           title: "Alle Geräte",
                           content: "Alle Remote-Geräte dürfen auf den Router zugreifen."
                       } ,{                      
                           type: "name",
                           title: "Angegebene Geräte",
                           content: "Geben Sie die IP-Adresse des Remote-Geräts ein, das auf diesen Router zugreifen können darf."
                       }]
} ,{                      
                           type: "paragraph",
                           id: "admin_remote_step4",
                           content: "4. Klicken Sie Speichern."
                       } ,{                      
                           type: "paragraph",
                           content: "Nun können Sie Ihren Router über die unter Webadresse für Management gezeigte Adresse fernwarten."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Erscheint eine Warnung, wenn Sie die oben angezeigte Adresse besuchen, klicken Sie Zertifikat vertrauen (oder ähnlich)."
                       }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ist der Nachtmodus aktiviert, werden die LEDs während der angegebenen Zeitspanne nicht leuchten. Ansonsten funktioniert der Router normal weiter."
                       } ,{                      
                           type: "step",
                           title: "Aktivieren des Nachtmodus",
       content: [ 
                "1. Wählen Sie Nachtmodus aktivieren.",
                "2. Geben Sie einen Zeitraum an, in dem die LEDs nicht leuchten sollen.",
                "3. Klicken Sie Speichern."]
}]
},
       SYSTEM_LOG :{ 
               TITLE:"Systemprotokoll",
               CONTENT: [{
                           type: "paragraph",
                           content: "Das Systemprotokoll zeigt Ihnen die neuesten Routeraktivitäten. Die Tabelle zeigt Typ, Ebene und die eigentliche Information. Sie können das Protokoll auch in eine Textdatei auf Ihren Computer speichern oder per E-Mail verschicken."
                       } ,{                      
                           type: "step",
                           title: "Speichern des Systemprotokolls auf dem Computer",
       content: [ 
                "1. Setzen Sie den Typ und zu filternde Mindestebene nach Ihren Wünschen. Die Ebenen sind absteigend geordnet, unten steht die niedrigste Ebene.",
                "2. Klicken Sie Protokoll speichern, um das Protokoll auf Ihren Computer herunterzuladen."]
} ,{                      
                           type: "step",
                           title: "Systemprotokoll per E-Mail verschicken",
       content: [ 
                "1. Setzen Sie den Typ und zu filternde Mindestebene nach Ihren Wünschen. Die Ebenen sind absteigend geordnet, unten steht die niedrigste Ebene.",
                "2. Klicken Sie E-Mail-Einstellungen.",
                "3. Geben Sie in das Von-Feld die E-Mail-Adresse, die als Absenderadresse verwendet werden soll, ein.",
                "4. Geben Sie in das An-Feld die E-Mail-Adresse, die als Empfängeradresse verwendet werden soll, ein.",
                "5. Geben Sie die zur Absenderadresse gehörige SMTP-Serveradresse ein.",
                "Hinweise: Benötigt Ihr SMTP-Server Authentifizierung, wählen Sie Authentifizierung aktivieren und geben Sie Benutzernamen (meistens die E-Mail-Adresse) und Passwort ein.",
                "6. Möchten Sie das Protokoll regelmäßig per E-Mail erhalten, aktivieren Sie die Automail-Funktion und geben Sie eine Uhrzeit oder ein Intervall an.",
                "Möchten Sie das Protokoll sofort verschicken, klicken Sie Protokoll jetzt verschicken.",
                "7. Klicken Sie Speichern."]
}]
},
       TRAFFIC_STATISTIC :{ 
               TITLE:"Traffic-Monitor",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt den Datenverbrauch der letzten 10 Minuten pro Gerät oder den aller Geräte der letzten 10 Minuten/24 Stunden/7 Tage."
                       }]
},
       TRAFFIC_STATISTIC_LIST :{ 
               TITLE:"Traffic-Monitor",
               CONTENT: [{
                           type: "paragraph",
                           content: "Die Liste ist nach Verbindungstyp der Geräte unterteilt (über Kabel oder WLAN)."
                       }]
},
       SYSTEM_PARA_WIRELESS :{ 
               TITLE:"Systemparameter",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wifi_title",
                           title: "2,4-/5GHz-WLAN",
                           content: "Dieser Abschnitt ermöglicht Ihnen die Parametrierung der Datenübertragung im WLAN. Es ist empfohlen, die Standardeinstellungen beizubehalten, wenn Sie nicht genau wissen, was Sie tun."
                       } ,{                      
                           type: "name",
                           title: "Ortungsintervall",
                           content: "Geben Sie einen Wert von 40 bis 1000 (Millisek.) ein. Ortungspakete werden vom Router zur Synchronisierung des WLANs ausgesendet. Standardwert ist 100."
                       } ,{                      
                           type: "name",
                           title: "RTS-Grenzwert",
                           content: "Hier können Sie den RTS(Request to Send)-Grenzwert angeben. Ist ein Paket größer als dieser Wert, sendet der Router RTS-Frames zu einer bestimmten WLAN-Geräten, um den Versand eines Datenframes abzustimmen. Standardwert: 2346."
                       } ,{                      
                           type: "name",
                           title: "DTIM-Intervall",
                           content: "Dieser Wert stellt das Interval der DTIMs (Delivery Traffic Indication Messages) in Ortungsintervallen dar. Geben Sie einen Wert von 1 bis 15 ein. Der Standardwert ist 1, was bedeutet, dass ein DTIM-Intervall genauso lang wie ein Ortungsintervall ist."
                       } ,{                      
                           type: "name",
                           title: "Gruppenschlüsselaktualisierungsintervall",
                           content: "Geben Sie die Dauer des Gruppenschlüsselaktualisierungsintervalls in Sekunden an. Dieser Wert muss 0 (=deaktiviert) oder mindestens 30 betragen."
                       } ,{                      
                           type: "name",
                           title: "WMM aktivieren",
                           content: "WMM garantiert, dass Nachrichten hoher Priorität bevorzugt übertragen werden. Es wird wärmstens empfohlen, diese Option aktiviert zu lassen"
                       } ,{                      
                           type: "name",
                           title: "Short-GI aktivieren",
                           content: "Diese Funktion ist standardmäßig aktiviert und empfohlen. Sie erhöht den Datendurchsatz auf Kosten des Schutzintervalls (GI)."
                       } ,{                      
                           type: "name",
                           title: "AP-Isolierung aktivieren",
                           content: "Möchten Sie Ihre WLAN-Geräte daran hindern, miteinander zu kommunizieren, aktivieren Sie WLAN-Clients dürfen einander nicht sehen."
                       } ,{
							             type: "name",
							             title: "USB3.0-Interferenzreduzierung",
							             content: "Aktivieren Sie dies, um USB3.0-Interferenzen zu reduzieren."
						}]
},
       SYSTEM_PARA_WDS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wds_title",
                            title: "2,4GHz/5GHz – WDS"
                       } ,{                      
                           type: "step",
                           title: "WDS aktivieren",
                           content: "WDS(Wireless Distribution System)-Bridging ermöglicht Ihnen das Erweitern Ihres WLANs, indem Ihr Router sich mit einem anderen AP (Accesspoint) verbindet."
                       } ,{                      
                           type: "step",
       content: [ 
                "1. Aktivieren Sie WDS-Bridging.",
                "2. Um ein WLAN mittels der Suchen-Funktion zu bridgen: Klicken Sie Suchen, um nach WLANs zu suchen und wählen Sie das aus, mit dem Sie sich verbinden wollen. Die SSID (WLAN-Name), MAC-Adresse und Sicherheitstyp werden automatisch angezeigt.",
                "Um ein WLAN von Hand zu bridgen: Geben Sie SSID (WLAN-Name), MAC-Adresse und WDS-Modus des zu bridgenden WLANs ein. Wählen Sie den richtigen Sicherheitstyp aus und geben Sie zugehörige Parameters ein. Diese müssen denen im zu bridgenden WLAN entsprechen.",
                "3. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Sind Sie sich hinsichtlich des WDS-Modus unsicher, behalten Sie einfach den Standardwert Automatisch bei."
                       }]
},
       SYSTEM_PARA_WPS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "WPS",
                           content: "WPS (WiFi-Protected Setup) erlaubt Ihnen das einfache Verbinden WPS-fähiger Geräte mit Ihrem WLAN, indem Sie die WPS-Taste drücken."
                       }]
},
       SYSTEM_PARA_NAT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "NAT",
                           content: "Standardmäßig ist diese Funktion aktiviert. Es wird empfohlen, die Standardeinstellung zu behalten. Deaktivieren Sie dies, haben Sie unter Umständen keinen Internetzugriff."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Ist NAT deaktiviert, funktionieren die definierten NAT-Weiterleitungsregeln nicht."
                       } ,{                      
                           type: "name",
                           id: "sys_para_nat_boost",
                           title: "NAT-Boost",
                           content: "Wählen Sie NAT-Boost aktivieren und klicken Sie Speichern, um bestmögliche NAT-Performance zu gewährleisten."
                       } ,{                      
                           type: "note",
                           id: "sys_para_nat_boost_note",
                           title: "Hinweise",
                           content: "Ist NAT-Boost aktiviert, funktionieren die Funktionen QoS und Trafficstatistiken nicht."
                       }]
},
       SYSTEM_PARA_DOS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "DoS-Einstellungen",
                           content: "Der DoS-Schutz bewahrt Ihr Netz vor ICMP-FLOOD-, UDP-FLOOD- und TCP-FLOOD-Angriffen."
                       } ,{                      
                           type: "name",
                           title: "Grenzwert für ICMP-FLOOD-Pakete",
                           content: "Geben Sie einen Wert von 5 bis 7200 ein, um den ICMP-FLOOD-Schutz zu starten, sobald die Zahl der empfangenen ICMP-Pakete den Grenzwert erreicht hat."
                       } ,{                      
                           type: "name",
                           title: "Grenzwert für UDP-FLOOD-Pakete",
                           content: "Geben Sie einen Wert von 5 bis 7200 ein, um den UDP-FLOOD-Schutz zu starten, sobald die Zahl der empfangenen UDP-Pakete den Grenzwert erreicht hat."
                       } ,{                      
                           type: "name",
                           title: "Grenzwert für TCP-FLOOD-Pakete",
                           content: "Geben Sie einen Wert von 5 bis 7200 ein, um den TYP-SYN-FLOOD-Schutz zu starten, sobald die Zahl der empfangenen TYP-SYN-Pakete den Grenzwert erreicht hat."
                       }]
},
       SYSTEM_PARA_DUPLEX :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Duplex",
                           content: "Wählen Sie den Duplextyp aus der Drop-Down-Liste und klicken Sie Speichern."
                       }]
},
       SYSTEM_PARA_LED :{ 
               TITLE:"LED",
               CONTENT: [{
                           type: "name",
                           title: "Aktivieren",
                           content: "Aktivieren Sie dieses Kontrollkästchen, um die LEDs im Nachtmodus auszuschalten. Dies betrifft nur die LEDs, der Router arbeitet normal."
                       } ,{                      
                           type: "name",
                           title: "Nachtzeit",
                           content: "Geben Sie das Zeitfenster für den Nachtmodus an."
                       } ,{                      
                           type: "paragraph",
                           content: "Klicken Sie Speichern, um Ihre Einstellungen zu sichern."
                       }]
},
       OPEN_VPN :{ 
               TITLE:"OpenVPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit OpenVPN können Sie über das Internet eine gesicherte Verbindung aufbauen, um auf Ihr Heimnetz zuzugreifen. Um den VPN-Dienst zu nutzen, sollten Sie Dynamisches DNS konfigurieren (empfohlen) oder dafür sorgen, dass Sie eine statische WAN-IP-Adresse haben. Außerdem sollte die Systemzeit über das Internet synchronisiert sein."
                       } ,{                      
                           type: "name",
                           title: "Dienstname",
                           content: "Wählen Sie das Protokoll zur Kommunikation mit dem OpenVPN-Server aus, UDP oder TCP."
                       } ,{                      
                           type: "name",
                           title: "Serviceport",
                           content: "Geben Sie für die Kommunikation eine Portnummer von 1024 bis 65535 an. Standard: 1194."
                       } ,{                      
                           type: "name",
                           title: "VPN-Subnetz(maske)",
                           content: "Geben Sie den IP-Adressbereich ein, aus dem der OpenVPN-Server IP-Adressen für Clients bereitstellen soll."
                       } ,{                      
                           type: "name",
                           title: "Clientzugriff",
                           content: "Wählen Sie den Zugriffstyp für den OpenVPN-Client aus.",
       children: [{                      
                           type: "name",
                           title: "Nur Heimnetzwerk",
                           content: "Clients können nur auf Ihr Heimnetz zugreifen. Die Standardroute des Clients wird nicht geändert."
                       } ,{                      
                           type: "name",
                           title: "Heimnetzwerk und Internet",
                           content: "Clients können auf Ihr Heimnetz und Internetdienste zugreifen, als befänden Sie sich bei Ihnen zu Hause. Damit können geografische Einschränkungen der Diensteanbieter umgangen werden. Die Standardroute des Clients wird entsprechend angepasst."
                       }]
}]
},
       OPEN_VPN_CERTIFICATE :{ 
               TITLE:"Zertifikat",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Verwenden Sie dieses Zertifikat, um Informationen über die Identität des Remotecomputers bei der VPN-Verbindung zu erhalten.",
                "Klicken Sie hierauf, um ein Zertifikat zu erzeugen."]
}]
},
       OPEN_VPN_CONF :{ 
               TITLE:"Konfigurationsdatei",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Remote-Clients verwenden die Konfigurationsdatei für den Zugriff auf Ihren Router.",
                "Klicken Sie auf diese Schaltfläche, um die OpenVPN-Konfigurationsdatei zu speichern, mit der dann eine neue VPN-Verbindung hinzugefügt werden kann."]
}]
},
       OPEN_VPN_GUIDE :{ 
               TITLE:"Anleitung zur VPN-Clientinstallation",
               CONTENT: [{
                           type: "step",
                           title: "Verbinden eines Clientgerätes mit dem OpenVPN-Server:",
       content: [{                      
                           type: "paragraph",
                           content: "Bevor Sie den OpenVPN-Server konfigurieren, please configure Dynamisches DNS Service (empfohlen) or assign a statisch IP-Adresse for WAN-Port. And make sure the external port of NAT Einstellungen is not the service port, and the Systemzeit is synchronisiert with Internet."
                       },
                "1. Aktivieren Sie den VPN-Server.",
                "2. Konfigurieren the OpenVPN-Server parameters (Diensttyp, Dienstport, Clientzugriff and VPN Subnetz/Netzmaske) and click Speichern.",
                "3. Klicken Sie Exportieren, um Ihre Konfiguration in einer Datei zu speichern.",
                "4. Installieren Sie auf den Clientgeräten das OpenVPN-Client-Utility von <a class=\"link\" href=\"http://openVPN.net/index.php/download/community-downloads.html\">http://openVPN.net/index.php/download/community-downloads.html</a>",
                "Unterstützte Plattformen: Windows, MacOSX und Linux.",
                "5. Starten Sie das OpenVPN-Client-Utility und erstellen Sie eine neue VPN-Verbindung unter Verwendung der Konfigurationsdatei, um das Clientgerät mit dem VPN-Server verbinden zu können."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Weitergehende Informationen zu OpenVPN-Clients finden Sie unter <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>."
                       }]
},
       PPTP_VPN :{ 
               TITLE:"PPTP-VPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit PPTP-VPN können Sie ganz einfach über das Internet auf Ihr Heimnetz zugreifen. Ist eventuell von einigen Internetdiensteanbietern gesperrt. Um den VPN-Dienst zu nutzen, sollten Sie Dynamisches DNS konfigurieren (empfohlen) oder dafür sorgen, dass Sie eine statische WAN-IP-Adresse haben. Außerdem sollte die Systemzeit über das Internet synchronisiert sein."
                       } ,{                      
                           type: "name",
                           title: "Client-IP-Adresse",
                           content: "Geben Sie den IP-Adressbereich (für bis zu 10 Clients) ein, aus dem der PPTP-VPN-Server IP-Adressen für Clients bereitstellen soll."
                       } ,{                      
                           type: "name",
                           title: "Benutzername und Kennwort",
                           content: "Geben Sie den Benutzernamen und das Kennwort für die Authentifizierung an dem PPTP-VPN-Server ein."
                       }]
},
       PPTP_VPN_GUIDE :{ 
               TITLE:"Anleitung zur VPN-Clientinstallation",
               CONTENT: [{
                           type: "step",
                           title: "Verbinden eines Clientgerätes mit dem PPTP-VPN-Server:",
       content: [{                      
                           type: "paragraph",
                           content: "Um den PPTP-VPN-Dienst zu nutzen, sollten Sie Dynamisches DNS konfigurieren (empfohlen) oder dafür sorgen, dass Sie eine statische WAN-IP-Adresse haben. Außerdem sollte der Port 1723 sich nicht in Verwendung befinden und die Systemzeit über das Internet synchronisiert sein."
                       },
                "1. Aktivieren Sie den VPN-Server.",
                "2. Konfigurieren Sie die PPTP-VPN-Parameter und klicken Sie Speichern.",
                "3. Erstellen Sie auf den Clientgeräten eine PPTP-VPN-Verbindung. Unterstützte Plattformen: Windows, MacOSX, Linux, iOS und Android.",
                "4. Starten Sie Ihr PPTP-VPN-Programm und erstellen Sie eine neue VPN-Verbindung. Geben Sie den DDNS-Domänennamen bzw. die WAN-IP-Adresse ein, um das Clientgerät mit dem VPN-Server verbinden zu können."]
}]
},
       VPN_CONNNECTION :{ 
               TITLE:"VPN-Verbindungen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Auf dieser Seite werden die Clients angezeigt, die aktuell mit den OpenVPN- und PPTP-VPN-Servern, die auf dem Router ausgeführt werden, verbunden sind."
                       }]
},
       BASIC_NETWORK :{ 
               TITLE:"Netzplan",
               CONTENT: [{
                           type: "paragraph",
                           content: "Der Netzplan zeigt Ihnen den aktuellen LAN-Verbindungsstatus sowie Informationen zum WLAN und verbundenen Geräten."
                       }]
},
       BASIC_NETWORK_INTEREST :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu Ihrer Internetverbindung."
                       }]
},
       BASIC_NETWORK_ROUTER :{ 
               TITLE:"Router",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt aktuelle LAN- und WLAN-Verbindungsinformationen an."
                       }]
},
       BASIC_NETWORK_CLIENTS :{ 
               TITLE:"Kabelgebundene/drahtlose Clients",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt den Netznamen (bearbeitbar) sowie IP- und MAC-Adressen der mit dem Router verbundenen Clientgeräte."
                       }]
},
       BASIC_NETWORK_PRINTER :{ 
               TITLE:"Drucker",
               CONTENT: [{
                           type: "paragraph",
                           content: "Name des an den USB-Port angeschlossenen Druckers."
                       }]
},
       BASIC_NETWORK_USB :{ 
               TITLE:"USB-Datenträger",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu den am Router angeschlossenen USB-Datenträgern an."
                       }]
},
       BASIC_NETWORK_ONEMESH :{ 
               TITLE:"Mesh-Geräte",
               CONTENT: [{
                           type: "name",
                           title: "Name",
                           content: "Zeigt den Namen des mit dem Router verbundenen Mesh-Geräts an."
                       } ,{                      
                           type: "name",
                           title: "Modell",
                           content: "Zeigt das Produktmodell des Mesh-Gerätes an."
                       } ,{                      
                           type: "name",
                           title: "Status",
                           content: "Zeigt den Verbindungsstatus des Mesh-Gerätes an."
                       } ,{                      
                           type: "name",
                           title: "Standort",
                           content: "Zeigt den Standort des Mesh-Geräts an."
                       } ,{                      
                           type: "paragraph",
                           content: "Sie können auf <span class=\"one-mesh-modify-icon\"></span> klicken, um die Geräteinformationen zu ändern."
                       }]
},
       BASIC_SPEED_TEST :{ 
               TITLE:"Geschwindigkeitstest",
               CONTENT: [{
                           type: "paragraph",
                           content: "Diese Funktion tested aktuelle Upload- sowie Downloadgeschwindigkeit und gibt Ihnen hilfreiche Tipps, was mit Ihrer Internetverbindung anzufangen ist."
                       } ,{                      
                           type: "paragraph",
                           content: "Hinweis: Für realistische Ergebnisse versuchen Sie bitte, den Datenverkehr anderer Anwendungen in Ihrem Netz weitestgehend zu unterbinden."
                       } ,{                      
                           type: "paragraph",
                           content: "Historie - Ergebnisse früherer Speedtests."
                       } ,{                      
                           type: "paragraph",
                           content: "Erneut testen - Klicken, um einen Speedtest zu starten."
                       }]
},
       BASIC_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Klicken Sie Automatische Erkennung oder wählen Sie den Internetverbindungstyp manuell aus. Geben Sie die von Ihrem Internetdiensteanbieter vorgegebenen Verbindungsparameter ein."
                       }]
},
       BASIC_WIRELESS_SMART_CONNECT :{ 
               TITLE:"Smart Connect",
               CONTENT: [{
                           type: "paragraph",
                           content: "Aktivieren Sie dieses Kontrollkästchen, um Smart Connect zu aktivieren. Diese Funktion kann die Leistung von Geräten verbessern, indem je nach den tatsächlich vorgefundenen Verhältnissen die Funkfrequenzen so zugewiesen werden, dass die Netzwerklast optimal verteilt wird."
                       }]
},
       BASIC_WIRELESS :{ 
               TITLE:"WLAN-Einstellungen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Hier können Sie die WLAN-Einstellungen (SSID, Passwort usw.) konfigurieren."
                       } ,{                      
                           type: "name",
                           title: "WLAN-Name (SSID)",
                           content: "Es wird empfohlen, den WLAN-Namen (SSID) zu ändern. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       } ,{                      
                           type: "name",
                           title: "WLAN verbergen",
                           content: "Wählen Sie dies aus, um Ihr 2,4GHz/5GHz-WLAN zu verstecken. Ist dies ausgewählt, wird Ihre SSID nicht sichtbar sein und muss von Hand eingegeben werden, sofern Sie diesem WLAN beitreten wollen."
                       } ,{                      
                           type: "name",
                           title: "Passwort",
                           content: "Geben Sie ein aus 8 bis 63 ASCII- oder 8 bis 64 Hexadezimal-Zeichen bestehendes Passwort ein. Hier wird zwischen Groß- und Kleinschreibung unterschieden."
                       }]
},
       BASIC_DEVICE_SETTINGS :{ 
               TITLE:"USB-Speichergerät",
               CONTENT: [{
                           type: "paragraph",
                           content: "Hiermit können Sie USB-Datenträger zur Verwendung in Ihrem lokalen Netz und über das Internet freigeben."
                       } ,{                      
                           type: "title",
                           title: "Geräteeinstellungen",
                           content: "Der Abschnitt Geräteeinstellungen zeigt Grundinformationen zu den angeschlossenen USB-Datenträgern."
                       } ,{                      
                           type: "name",
                           title: "Suchen",
                           content: "Normalerweise erkennt der Router neu angeschlossene USB-Geräte automatisch. Klicken Sie hier, können Sie eine Erkennung manuell veranlassen.",
       children: [{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Ein grauer Bereich repräsentiert einen deaktivierten Datenträger. Klicken Sie darauf, um den Datenträger freizugeben."
                       }]
} ,{                      
                           type: "name",
                           title: "Entfernen",
                           content: "Klicken Sie hier, um den USB-Datenträger sicher abzumelden, bevor Sie ihn physisch vom USB-Port entfernen.",
       children: [{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Die Entfernen-Schaltfläche erscheint nur, wenn ein USB-Datenträger an den Router angeschlossen ist. Solange der Datenträger sich in Verwendung befindet, kann er nicht entfernt werden."
                       }]
} ,{                      
                           type: "step",
                           title: "Einrichtung eines Fileservers",
       content: [ 
                "1. Schließen Sie den USB-Datenträger direkt oder über ein USB-Kabel am USB-Port an. Stellen Sie sicher, dass ein eventuell notwendiges Zusatznetzteil angeschlossen ist.",
                "2. Neu angeschlossene USB-Geräte werden normalerweise automatisch erkannt und unter Geräteeinstellungen angezeigt. Ist dies nicht der Fall, klicken Sie Suchen.",
                "Hinweis: Das Symbol für die Freigabe wird angezeigt. Sie können auf das Symbol klicken, um die Laufwerke zu deaktivieren, die Sie nicht freigeben müssen."]
}]
},
       BASIC_SHARING_SETTINGS :{ 
               TITLE:"Adresse für Zugriff",
               CONTENT: [{
                           type: "name",
                           title: "Netz-/Mediaserver-Name",
                           content: "Zeigt den Namen, unter dem der verbundene USB-Datenträger über Samba/UNC oder Medienfreigabe zu erreichen ist. Standardmäßig lautet dieser TP-Share."
                       } ,{                      
                           type: "name",
                           title: "Zugriffsmethode",
                           content: "Es gibt drei Möglichkeiten auf den freigegebenen USB-Datenträger zuzugreifen.",
       children: [{                      
                           type: "name",
                           title: "Samba/UNC",
                           content: "Wählen Sie diese Option, um lokalen Benutzern den Zugriff auf die freigegebenen Inhalte über die angezeigte Adresse zu ermöglichen."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Wählen Sie diese Option, um den FTP-Server zu aktivieren, damit lokale FTP-Clients auf den USB-Datenträger über die angezeigte Adresse zugreifen können."
                       } ,{                      
                           type: "name",
                           title: "FTP (über Internet)",
                           content: "FTP-Zugriff auf den USB-Datenträger auch aus dem Internet zulassen. Um die Adresse zu bearbeiten, klicken Sie Bearbeiten und richten Sie für Ihren Router Dynamisches DNS ein. Um einen anderen Port für den FTP-Serverzu verwenden, geben Sie eine neue Portnummer ein und klicken Sie Speichern."
                       }]
} ,{                      
                           type: "name",
                           title: "Adresse",
                           content: "Stellt einen Link zum Öffnen des Datenträgers zur Verfügung."
                       } ,{                      
                           type: "name",
                           title: "Port",
                           content: "Die Portnummer, über die der FTP-Server zu erreichen ist."
                       }]
},
       BASIC_FOLDER_SHARING :{ 
               TITLE:"Freigabe von Inhalten",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt die freigebbaren Ordner an. Standardmäßig sind alle Ordner freigegeben. Klicken Sie Bearbeiten, um die Ordnerfreigaben zu bearbeiten."
                       } ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Das Freigabesymbol wird im Abschnitt Geräteeinstellungen angezeigt. Sie können auf das Symbol Teilen klicken, um die Laufwerke zu deaktivieren, die Sie nicht freigeben müssen."
                       }]
},
       FOLDER_SHARING :{ 
               TITLE:"Ordnerfreigabe und Sicherheitseinstellungen",
               CONTENT: [{
                           type: "name",
                           title: "Freigabe von Inhalten",
                           content: "Zeigt die freigebbaren Ordner an. Standardmäßig sind alle Ordner freigegeben. Klicken Sie Bearbeiten, um die Ordnerfreigaben zu bearbeiten.",
       children: [{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Das Freigabesymbol wird im Abschnitt Geräteeinstellungen angezeigt. Sie können auf das Symbol Teilen klicken, um die Laufwerke zu deaktivieren, die Sie nicht freigeben müssen."
                       }]
} ,{                      
                           type: "name",
                           title: "Zugriffsauthentifizierung",
       content: [ 
                "Bei aktivierter Authentifizierung wird bei Verbindungsanfragen auf die Freigaben eine Kombination aus Benutzernamen und Passwort verlangt. Als Administrator haben Sie Lese- und Schreibzugriff, während der Benutzer die Dateien nur lesen kann.",
                "Der Benutzername muss mit einem Buchstaben oder einem Unterstrich beginnen und darf 1 bis 15 Buchstaben, Ziffern und Unterstriche enthalten.",
                "Das Passwort darf 1 bis 15 Buchstaben, Ziffern und Unterstriche enthalten."]
} ,{                      
                           type: "name",
                           title: "Medienfreigabe",
                           content: "Ist dies aktiviert, können alle DLNA-Geräte im lokalen Netz auf freigegebene Multimediadateien zugreifen. Hierfür ist keine Authentifizierung erforderlich, selbst wenn Zugriffsauthentifizierung aktiviert ist."
                       }]
},
       BASIC_PRINT_SERVER :{ 
               TITLE:"Printserver",
               CONTENT: [{
                           type: "name",
                           title: "Printserver",
                           content: "Aktivieren des Printservers."
                       } ,{                      
                           type: "name",
                           title: "Druckername",
                           content: "Zeigt den Namen des mit dem Router verbundenen Drucker an."
                       }]
},
       BASIC_PARENTAL_CONTROL :{ 
               TITLE:"Kindersicherung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit der Kindersicherung können Sie den Internetzugriff uhrzeitbasierend einschränken (z.B. für den Kinder-PC, wenn Hausaufgaben gemacht werden sollen)."
                       }]
},
       BASIC_PARENTAL_DEVICE :{ 
               TITLE:"Der Kindersicherung unterliegende Geräte",
               CONTENT: [{
                           type: "paragraph",
                           content: "In dieser Tabelle sehen Sie Informationen und Einstellungen zu den der Kindersicherung unterliegenden Geräten."
                       } ,{                      
                           type: "step",
                           title: "So sperren Sie den Internetzugang für ein neues Gerät:",
       content: [ 
                "1. Aktivieren Sie Kindersicherung.",
                "2. Klicken Sie Hinzufügen.",
                "3. Klicken Sie Suchen, um ein aktuell verbundenes Gerät auszuwählen oder geben Sie Gerätenamen und MAC-Adresse ein, wenn das Gerät gerade nicht verbunden ist.",
                "4. Klicken Sie auf das Symbol Effektivzeit, um festzulegen, wann die Restriktion gelten soll.",
                "5. Vergeben Sie eine kurze Beschreibung (optional).",
                "6. Wählen Sie Diesen Eintrag Aktivieren.",
                "7. Klicken Sie Speichern."]
} ,{                      
                           type: "note",
                           title: "Hinweise",
                           content: "Um einen Eintrag zu deaktivieren, klicken Sie auf die Birne."
                       }]
},
       BASIC_GUEST_NETWORK :{ 
               TITLE:"Gast-WLAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Diese Funktion bietet Ihren Gästen Internetzugriff über WLAN, ohne dass diese auf Ihr Netz zugreifen können."
                       } ,{                      
                           type: "name",
                           title: "Gäste dürfen einander sehen",
                           content: "Wählen Sie dies, damit die Teilnehmer Ihres Gastnetzes einander sehen können (Netzwerkumgebung, Samba, Ping, FTP)."
                       } ,{                      
                           type: "name",
                           title: "Gäste dürfen auf mein lokales Netz zugreifen",
                           content: "Wählen Sie dies, damit die Teilnehmer Ihres Gastnetzes mit den Geräten in Ihrem lokalen Netz kommunizieren können (Netzwerkumgebung, Samba, Ping, FTP)."
                       } ,{                      
                           type: "name",
                           title: "Gastnetz aktivieren",
                           content: "Aktivieren des Gastnetzes."
                       } ,{                      
                           type: "name",
                           title: "WLAN-Name (SSID)",
                           content: "Gast-WLAN-Name, kann frei gewählt werden (1 bis 32 Zeichen)."
                       } ,{                      
                           type: "name",
                           title: "WLAN verbergen",
                           content: "Hiermit können Sie Ihr Gast-WLAN unsichtbar machen."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Passwortaktualisierungsintervall",
                           content: "Aktualisierungsintervall des Gast-WLAN-Passworts wählen."
                       } ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Passwort",
                           content: "Erstellen Sie ein 8 bis 63 ASCII- oder 8 bis 64 Hexadezimalzeichen langes Kennwort (0-9, a-f, A-F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Passwort",
                           content: "Hier haben Sie die Möglichkeit, ein eigenes Passwort aus 8 bis 63 ASCII-Zeichen oder 8 bis 64 Hexadezimalzeichen zu erstellen."
                       }]
},
       BASIC_ACCOUNT_LOGIN :{ 
               TITLE:"TP-Link-Cloud",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit TP-Links Clouddienst können Sie Ihr Netz aus der Ferne in Echtzeit überwachen sowie jederzeit von überall aus auf Ihre TP-Link-Geräte zugreifen."
                       }]
},
       ACCOUNT_INFO :{ 
               TITLE:"Kontoinformationen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Informationen zu Ihrer TP-Link-ID. Durch Klick auf Bearbeiten können Sie diese verändern."
                       }]
},
       DEVICE_INFO :{ 
               TITLE:"Geräteinformationen",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt Geräteinformationen wie das assoziierte Cloudkonto an."
                       }]
},
       BOUND_ACCOUNT :{ 
               TITLE:"Gebundene Konten",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zeigt alle aktuell mit dem Gerät assoziierten Cloudkonten an."
                       } ,{                      
                           type: "step",
                           title: "So binden Sie ein Benutzerkonto",
       content: [ 
                "1. Klicken Sie Binden.",
                "2. Geben Sie eine zuvor registrierte E-Mail-Adresse ein, um diese zu binden.",
                "3. Klicken Sie Speichern."]
}]
},
       NEW_PARENTAL_CONTROL :{ 
               TITLE:"Kindersicherung",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit den altersbasierenden Filtern, Zugriffsbeschränkungen und Benutzerprofilen bietet die Kindersicherung für jedes Familienmitglied einen geeigneten, persönlichen Internetzugriff."
                       } ,{                      
                           type: "step",
                           title: "Kindersicherung für ein neues Gerät einrichten",
       content: [ 
                "1. Klicken Sie Hinzufügen.",
                "2. Vergeben Sie dem Profil einen Namen und klicken Sie \"+\", um diesem ein Gerät oder mehrere hinzuzufügen.",
                "3. Wählen Sie eine Filterebene und passen Sie den Filter an Ihre Vorstellungen an. Sie können in der Datenbank nach Schlüsselwörtern suchen. Sie können weitere Adressen (URLs) von Hand eingeben.<br/>Hier finden Sie eine Übersicht über die verschiedenen Filterkategorien:<p>Erwachsene - Seiten mit sexuellen, jugendgefährdenden oder gesetzeswidrigen Inhalten wie Pornographie, Drogenkonsum, Gewalt und Diskriminierung</p><p>Glücksspiel - Seiten, die Glücksspiel anbieten oder bewerben</p><p>Aufklärung - Seiten, in denen Sexualität informativ dargestellt wird, z.B. Fortpflanzung, Safer Sex, Verhütung, Geschlechtskrankheiten und Behandlung von Vergewaltigungsopfern</p><p>Online-Kommunikation - Seiten, die Benutzern die Möglichkeit geben, mit Anderen über Text, Sprache oder Video, E-Mail, Blogs, Foren, VoIP und Videochat zu kommunizieren</p><p>Soziale Netzwerke - Seiten, über die man sich persönlich mitteilen und kommunizieren sowie Kontakte knüpfen kann zu Personen mit ähnlichen Interessen, Berufen, Vergangenheiten/Ursprüngen oder aus räumlicher Nähe</p><p>Pay-to-Surf - Seiten, die den Benutzer dafür bezahlen, bestimmte Webpräsenzen zu besuchen, E-Mail oder Werbung zu lesen oder anzuklicken oder an Umfragen teilzunehmen</p><p>Medien - Seiten, die kostenfreie oder kostenpflichtige Audio- und/oder Videoinhalte anbieten, wie z.B. Streamingdienste, Fernsehprogramm oder legale Musikdownloads</p><p>Downloads - Seiten, die Filesharing ermöglichen, z.B. P2P, Shared-Hoster und Mobilgeräteinhalte (z.B. Musik und Apps)</p><p>Spiele - Seiten, die den Zugriff auf gehostete oder herunterladbare Spiele ermöglichen, auch für Spielekonsolen</p>",
                "4. Möchten Sie für dieses Profil eine Zeitbegrenzung einrichten, verwenden Sie die Zeitbegrenzung. Sie können auch eine Zu-Bett-Geh-Zeit definieren, nach welcher die Geräte unter diesem Profil das Internet nicht mehr benutzen können.",
                "5. Klicken Sie Speichern."]
} ,{                      
                           type: "step",
                           title: "Details zur Internetnutzung eines Profils",
       content: [ 
                "1. In der Spalte Insights klicken Sie auf die Schaltfläche Insights.",
                "2. Möchten Sie weitere Aufzeichnungen sehen, rufen Sie die Historie <span class=\"ptl-ctr-help-icon history\"></span> auf.",
                "3. Sie können Webpräsenzen blockieren und Blockierungen aufheben, indem Sie auf <span class=\"ptl-ctr-help-icon block\"></span> oder <span class=\"ptl-ctr-help-icon unblock\"></span> klicken."]
} ,{                      
                           type: "step",
                           title: "Internetzugriff augenblicklich (ent)sperren",
       content: [ 
                "Klicken Sie in der Spalte Internetzugriff <span class=\"ptl-ctr-help-icon stop\"></span>, um die Geräte dieses Profils vom Internet zu trennen. Klicken Sie <span class=\"ptl-ctr-help-icon enable\"></span>, um den Internetzugriff wiederherzustellen."]
}]
},
       BASIC_QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "QoS (Quality of Service) priorisiert Onlineaktivitäten und Geräte, um Ihren bevorzugten Anwendungen eine schnellere Verbindung zu garantieren."
                       } ,{                      
                           type: "paragraph",
                           content: "Wählen Sie die Applikationspriorität, um bestimmte Onlineaktivitäten zu bevorzugen und Gerätepriorität, um bestimmte Geräte zu bevorzugen."
                       }]
},
       BASIC_APPLICATION_PRIORITY :{ 
               TITLE:"Applikationspriorität",
               CONTENT: [{
                           type: "paragraph",
                           content: "Wählen Sie die Onlineaktivität, die Sie priorisieren wollen oder klicken Sie Benutzerdefiniert, um die Prioritätsebene jeder Onlineaktivität von Hand einzustellen."
                       }]
},
       BASIC_DEVICE_PRIORITY :{ 
               TITLE:"Gerätepriorität",
               CONTENT: [{
                           type: "paragraph",
                           content: "Wählen Sie das/die zu priorisierende(n) Gerät/Geräte und geben Sie einen Gültigkeitszeitraum an."
                       } ,{                      
                           type: "step",
                           title: "Priorisieren eines Geräts",
       content: [ 
                "1. Wählen Sie das zu priorisierende Gerät aus und aktivieren Sie Priorität.",
                "2. Wählen Sie in der Spalte Timing, wie lange dieses Gerät priorisiert werden soll."]
}]
},
       ANTI_VIRUS :{ 
               TITLE:"Antivirus",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mit häufigen Netzscans, Häufige Netzscans, Erkennung bösartiger Server und Isolierung infizierter Geräte sorgen dafür, dass Ihre persönlichen Informationen sicher bleiben. Sie können auch den Schutzstatus Ihres Netzes überprüfen sowie nachsehen, ob Angriffe auf Ihr Netz festgestellt wurden."
                       } ,{                      
                           type: "paragraph",
                           content: "Historie - Beinhaltet Informationen zu den Geräten, die durch Antivirus geschützt wurden sowie die Quelle und die Klassifizierung des Angriffs."
                       } ,{                      
                           type: "paragraph",
                           content: "Alle aktivieren - Alle Schutztypen aktivieren."
                       } ,{                      
                           type: "paragraph",
                           content: "Schutztypen - Beachten Sie die Erläuterungen, wenn Sie die Schutztypen aktivieren. Es wird empfohlen, alle Schutztypen zu aktivieren."
                       }]
},
       APPLICATION_PRIORITY :{ 
               TITLE:"Applikationspriorität",
               CONTENT: [{
                           type: "paragraph",
                           content: "Die Applikationspriorisierung bevorzugt bestimmte Onlineaktivitäten, damit diese ihre Daten schneller übertragen können. Wählen Sie die zu bevorzugende Onlineaktivität oder klicken Sie Benutzerdefiniert, um die Priorität für jede Onlineaktivität von Hand einzustellen."
                       }]
},
       DEVICE_PRIORITY :{ 
               TITLE:"Gerätepriorität",
               CONTENT: [{
                           type: "paragraph",
                           content: "Die Gerätepriorität priorisiert Geräte, damit diese ihre Daten schneller übertragen können. Wählen Sie das/die zu priorisierende(n) Gerät/Geräte und geben Sie einen Gültigkeitszeitraum an."
                       } ,{                      
                           type: "step",
                           title: "Priorisieren eines Geräts",
       content: [ 
                "1. Wählen Sie das zu priorisierende Gerät aus und aktivieren Sie Priorität.",
                "2. Wählen Sie in der Spalte Timing, wie lange dieses Gerät priorisiert werden soll."]
}]
},
       FIREWALL :{ 
               TITLE:"Firewall",
               CONTENT: [{
                           type: "paragraph",
                           content: "Die SPI(Stateful Packet Inspection)-Firewall verhindert Cyberangriffe und validiert den Datenverkehr, der durch Ihren Router geht, basierend auf dem Protokoll. Standardmäßig ist diese Funktion aktiviert."
                       } ,{                      
                           type: "name",
                           title: "SPI-Firewall aktivieren",
                           content: "Deaktivieren Sie die SPI-Firewall nicht, außer Sie wissen, was Sie tun."
                       } ,{                      
                           type: "name",
                           title: "Pings von WAN-Seite beantworten/Pings von LAN-Seite beantworten",
                           content: "Ping-Pakete von WAN- bzw. LAN-Seite beantworten. Es wird empfohlen, die Standardeinstellungen beizubehalten."
                       }]
},
CWMP: {
      TITLE: "CWMP-Einstellungen",
      CONTENT: [{
        type: "paragraph",
        content: "Über CWMP (CPE WAN Management Protocol, auch TR-069 genannt) können die  Server zur automatischen Konfiguration (ACS - Auto-Configuration Server) die automatische Konfiguration, Bereitstellung, Verbindung und Diagnose für dieses Gerät durchführen. Sie können diese Funktion gemäß den Anweisungen Ihres Internetdienstanbieters konfigurieren."
      }, {
        type: "name",
        title: "CWMP",
        content: "Aktivieren Sie diese Option, um die CWMP-Funktion (CPE-WAN-Management- Protocol) zu aktivieren."
      }, {
        type: "name",
        title: "Meldungs",
        content: "Aktivieren Sie diese Funktion, um regelmäßig eine Meldungsnachricht an den ACS (Auto Configuration Server) zu senden."
      }, {
        type: "name",
        title: "Meldungsintervall",
        content: "Geben Sie die Zeit in Sekunden ein, zu der die Meldungsnachricht an den ACS gesendet wird."
      }, {
        type: "name",
        title: "ACS-URL",
        content: "Geben Sie die Webadresse des ACS ein, die von Ihrem ISP bereitgestellt wurde."
      }, {
        type: "name",
        title: "ACS-Benutzername / ACS-Passwort",
        content: "Geben Sie den Benutzernamen und das Passwort ein, um sich beim ACS-Server anzumelden."
      }, /*{
        type: "name",
        title: "Vom TR-069-Client verwendete Schnittstelle",
        content: "Wählen Sie aus, welche Schnittstelle vom TR-069-Client verwendet werden soll."
      }, {
        type: "name",
        title: "SOAP-Nachrichten auf der seriellen Konsole anzeigen",
        content: "Aktivieren oder deaktivieren Sie diese Funktion."
      },*/ {
        type: "name",
        title: "Authentifizierung für Verbindungsanforderung",
        content: "Aktivieren Sie dieses Kontrollkästchen, um die Authentifizierung für die Verbindungsanforderung zu aktivieren.",
        children: [{
          type: "name",
          title: "Benutzername / Passwort",
          content: "Geben Sie den Benutzernamen und das Passwort  ein, damit sich der ACS-Server beim Router anmeldet."
        }, {
          type: "name",
          title: "Pfad/Port/URL",
          content: "Geben Sie den Pfad, den Port und die URL ein, die eine Verbindung zum ACS-Server herstellen."
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
