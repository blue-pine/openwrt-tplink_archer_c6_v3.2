(function($){

    $.su = $.su || {};   $.su.CHAR = $.su.CHAR||{};
 $.su.CHAR.HELP ={
       STATUS_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje relevantní informace o připojení k široké oblasti sítě (internetu)."
                       }]
},
       STATUS_WIRELESS :{ 
               TITLE:"Bezdrátová síť 2,4 GHz / 5 GHz",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje relevantní informace o bezdrátové síti."
                       }]
},
       STATUS_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o ethernetových (LAN) portech."
                       }]
},
       STATUS_GUEST :{ 
               TITLE:"Síť pro hosty 2,4 GHz / 5 GHz",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o bezdrátových sítích pro hosty."
                       }]
},
       STATUS_USB :{ 
               TITLE:"USB zařízení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o USB úložištích a/nebo tiskárnách momentálně připojených k routeru přes USB porty."
                       }]
},
       STATUS_PERFORMANCE :{ 
               TITLE:"Výkon",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje aktuální výkon směrovače."
                       }]
},
       STATUS_WIRED :{ 
               TITLE:"Klienti kabelové sítě",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o zařízeních připojených kabelem k síti."
                       }]
},
       STATUS_WIRELESS_CLIENTS :{ 
               TITLE:"Klienti bezdrátové sítě",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o bezdrátových zařízeních připojených k síti."
                       }]
},
       INTERNET_TITLE :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Nakonfigurujte parametry IPv4 a zvolte vhodnou metodu klonování MAC, jak potřebujete."
                       }]
},
       INTERNET_INTERNET :{ 
               TITLE:"IPv4",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zvolte typ připojení k internetu a vložte odpovídající parametry."
                       } ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: Dynamická IP adresa:"
                       } ,{                      
                           type: "paragraph",
                           content: "Zvolte tento typ v případě, že vám poskytovatel internetu poskytuje připojení k serveru DHCP."
                       } ,{                      
                           type: "name",
                           title: "IP adresa / maska podsítě / výchozí brána / primární DNS / sekundární DNS",
                           content: "Tyto parametry jsou automaticky přiděleny serverem DHCP od poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Obnovit",
                           content: "Klikněte se pro získání nových IP parametrů od serveru DHCP."
                       } ,{                      
                           type: "name",
                           title: "Uvolnit",
                           content: "Klikněte sem pro uvolnění adres přidělených serverem DHCP."
                       } ,{                      
                           type: "name",
                           title: "Adresa DNS",
                           content: "V případě, že poskytovatel internetových služeb poskytne jednu nebo dvě adresy DNS, zaškrtněte toto políčko a zadejte primární a sekundární adresu DNS do příslušných políček. V opačném případě budou adresy DNS přiřazeny dynamicky poskytovatelem internetových služeb."
                       } ,{                      
                           type: "name",
                           title: "Velikost MTU",
                           content: "Výchozí a typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro většinu ethernetových sítí je 1 500 bajtů. Není doporučeno měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
                       } ,{                      
                           type: "name",
                           title: "Název hostitele",
                           content: "Zadáním hodnoty do tohoto pole specifikujete název hostitele směrovače."
                       } ,{                      
                           type: "name",
                           title: "Získat IP použitím Unicast DHCP",
                           content: "Zaškrtněte tento checkbox, jestliže server DHCP vašeho poskytovatele internetu nepodporuje broadcastové aplikace a vy nemůže získat IP adresu dynamicky."
                       } ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: Statická IP adresa"
                       } ,{                      
                           type: "paragraph",
                           content: "Tento typ vyberte, pokud od vašeho poskytovatele internetových služeb obdržíte konkrétní (pevnou) IP adresu, parametry masky podsítě a brány DNS serveru."
                       } ,{                      
                           type: "name",
                           title: "IP adresa / maska podsítě / výchozí brána / primární DNS / sekundární DNS",
                           content: "Vložte informace od vašeho poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Velikost MTU",
                           content: "Výchozí a typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro většinu ethernetových sítí je 1 500 bajtů. Není doporučeno měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
                       } ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: BigPond Cable (BigPond kabelové připojení)"
                       } ,{                      
                           type: "paragraph",
                           content: "Zvolte tento typ v případě, že vám poskytovatel internetu poskytuje připojení BigPond Cable."
                       } ,{                      
                           type: "name",
                           title: "Uživatelské jméno / heslo",
                           content: "Vložte uživatelské jméno a heslo od poskytovatele internetu. Tyto pole rozeznávají velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Ověřovací server",
                           content: "Zadejte IP adresu nebo název hostitele ověřovacího serveru."
                       } ,{                      
                           type: "name",
                           title: "Ověřovací doména",
                           content: "Vložte suffix jména domény serveru (na základě polohy). Například nsw.bigpond.net.au pro NSW/ACT, vic.bigpond.net.au pro VIC/TAS/WA/SA/NT, nebo qld.bigpond.net.au pro QLD."
                       } ,{                      
                           type: "name",
                           title: "Velikost MTU",
                           content: "Výchozí a typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro většinu ethernetových sítí je 1 500 bajtů. Není doporučeno měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
                       } ,{                      
                           type: "name",
                           title: "Režim připojení",
                           content: "Vyberte odpovídající režim připojení, který určuje, jak se připojit k internetu.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "V tomto režimu se připojení k internetu obnoví automaticky, kdykoli je přerušeno."
                       } ,{                      
                           type: "name",
                           title: "Na vyžádání",
                           content: "V tomto režimu bude připojení k internetu ukončeno automaticky po určité době nečinnosti (max. doba nečinnosti). Připojení je znovu navázáno, poté co se pokusíte o připojení k internetu."
                       } ,{                      
                           type: "name",
                           title: "Manuálně",
                           content: "V tomto režimu je připojení k internetu ovládáno manuálně kliknutím na tlačítko Připojit nebo Odpojit. Tento režim podporuje také funkci max. doby nečinnosti. Do pole max. doba nečinnosti zadejte maximální dobu (v minutách), po kterou může být připojení k internetu neaktivní, než bude ukončeno . Výchozí hodnota je 15 minut. Pokud chcete, aby připojení k internetu zůstalo aktivní po celou dobu, zadejte 0 (nula)."
                       }]
} ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: PPPoE"
                       } ,{                      
                           type: "paragraph",
                           content: "Tento typ vyberte, pokud používáte službu DSL (Digital Subscriber Line-digitální účastnická linka) a od poskytovatele internetových služeb máte uživatelské jméno a heslo."
                       } ,{                      
                           type: "name",
                           title: "Uživatelské jméno / heslo",
                           content: "Vložte uživatelské jméno a heslo od poskytovatele internetu. Tyto pole rozeznávají velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "IP adresa / Primární DNS / Sekundární DNS",
                           content: "Tyto parametry jsou automaticky přiděleny serverem DHCP od poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Sekundární připojení (žádné, dynamická IP, statická IP adresa)",
       children: [{                      
                           type: "name",
                           title: "Žádné",
                           content: "Vyberte, pokud není k dispozici žádné sekundární připojení."
                       } ,{                      
                           type: "name",
                           title: "Dynamická IP adresa:",
                           content: "Vyberte, pokud IP adresa a maska podsítě jsou přiřazeny automaticky poskytovatelem internetových služeb.",
       children: [{                      
                           type: "name",
                           title: "Obnovit",
                           content: "Klikněte sem pro obnovení IP parametrů of poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Uvolnit",
                           content: "Klikněte sem pro uvolnění přidělených IP parametrů."
                       }]
} ,{                      
                           type: "name",
                           title: "Statická IP adresa",
                           content: "Zvolte v případě, že IP adresa a maska podsítě jsou známy od poskytovatele internetu a vložte tyto informace do odpovídajících polí."
                       }]
} ,{                      
                           type: "name",
                           title: "Velikost MTU",
                           content: "Typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro ethernetové sítě je 1 480 bajtů.",
       children: [{                      
                           type: "note",
                           title: "Poznámka",
                           content: "V ojedinělých případech může poskytovatel internetu vyžadovat, abyste nastavili velikost MTU pro lepší výkon sítě. Neměli byste měnit tuto hodnotu, jestliže to není opravdu nutné."
                       }]
} ,{                      
                           type: "name",
                           title: "Název služby / název přístupového koncentrátoru",
                           content: "Ve výchozím stavu jsou položky Jméno služby a Jméno koncentrátoru přístupu (AC) prázdné. Tyto pole by se neměli konfigurovat, jestliže to není vyžadováno poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Interval detekce online",
                           content: "Zadejte interval mezi 0 a 120 (v sekundách), po kterém bude směrovač detekovat online přístupové koncentrátory. Výchozí hodnota je 10."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Jestliže poskytovatel internetu poskytuje specifické (fixní) IP adresy, zvolte Použít následující IP adresu a vložte IP adresu do pole. Jinak zvolte Získat dynamicky od poskytovatele internetu pro získání serverem přidělené IP adresy automaticky."
                       } ,{                      
                           type: "name",
                           title: "Adresa DNS",
                           content: "Jestliže poskytovatel internetu poskytuje specifické (fixní) DNS IP adresy, zvolte Použít následující DNS adresy a vložte adresu(y) do pole primární DNS respektive sekundární DNS. Jinak zvolte Získat dynamicky od poskytovatele internetu pro získání serverem přidělené DNS IP adresy automaticky."
                       } ,{                      
                           type: "name",
                           title: "Režim připojení",
                           content: "Vyberte odpovídající režim připojení, který určuje, jak se připojit k internetu.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "V tomto režimu se připojení k internetu obnoví automaticky, kdykoli je přerušeno."
                       } ,{                      
                           type: "name",
                           title: "Na vyžádání",
                           content: "V tomto režimu bude připojení k internetu ukončeno automaticky po určité době nečinnosti (max. doba nečinnosti). Připojení je znovu navázáno, poté co se pokusíte o připojení k internetu."
                       } ,{                      
                           type: "name",
                           title: "Časový interval",
                           content: "V tomto režimu je připojení k internetu navázáno pouze na určité časové rozmezí. Pokud je vybrána tato možnost, zadejte čas začátku a čas konce,oba jsou ve formátu HH: MM."
                       } ,{                      
                           type: "name",
                           title: "Manuálně",
                           content: "V tomto režimu je připojení k internetu ovládáno manuálně kliknutím na tlačítko Připojit nebo Odpojit. Tento režim podporuje také funkci max. doby nečinnosti. Do pole max. doba nečinnosti zadejte maximální dobu (v minutách), po kterou může být připojení k internetu neaktivní, než bude ukončeno . Výchozí hodnota je 15 minut. Pokud chcete, aby připojení k internetu zůstalo aktivní po celou dobu, zadejte 0 (nula)."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Režim připojení \"Časový interval\" se projeví až poté, co bude systémový čas na stránce Pokročilé nastavení → Systémové nástroje → Nastavení času nakonfigurován."
                       }]
} ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: L2TP/PPTP"
                       } ,{                      
                           type: "paragraph",
                           content: "Tento typ vyberte, pokud se připojujete k L2TP/PPTP VPN serveru a máte od poskytovatele internetových služeb uživatelské jméno, heslo a IP adresu / název domény serveru."
                       } ,{                      
                           type: "name",
                           title: "Uživatelské jméno / heslo",
                           content: "Vložte uživatelské jméno a heslo od poskytovatele internetu. Tyto pole rozeznávají velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "IP adresa / Primární DNS / Sekundární DNS",
                           content: "Tyto parametry budou automaticky přiděleny server DHCP poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Sekundární připojení (Dynamická nebo statická IP adresa)",
       children: [{                      
                           type: "name",
                           title: "Dynamická IP adresa:",
                           content: "Vyberte, pokud IP adresa a maska podsítě jsou přiřazeny automaticky poskytovatelem internetových služeb."
                       } ,{                      
                           type: "name",
                           title: "Statická IP adresa",
                           content: "Zvolte, jestliže IP adresa, maska podsítě, brána a DNS adresy jsou poskytnuty od poskytovatele internetu a vložte tyto informace do odpovídajících polí."
                       }]
} ,{                      
                           type: "name",
                           title: "IP adresa VPN serveru / Název domény",
                           content: "Vložte IP adresu VPN serveru nebo jméno domény od poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Velikost MTU",
                           content: "Výchozí a typická velikost MTU (Maximum Transmission Unit - maximální přenosová jednotka) pro většinu ethernetových sítí je 1 460 bajtů pro L2TP nebo 1420 bajtů pro PPTP. Nedoporučuje se měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
                       } ,{                      
                           type: "name",
                           title: "Režim připojení",
                           content: "Vyberte odpovídající režim připojení, který určuje, jak se připojit k internetu.",
       children: [{                      
                           type: "name",
                           title: "Auto",
                           content: "V tomto režimu se připojení k internetu obnoví automaticky, kdykoli je přerušeno."
                       } ,{                      
                           type: "name",
                           title: "Na vyžádání",
                           content: "V tomto režimu bude připojení k internetu ukončeno automaticky po určité době nečinnosti (max. doba nečinnosti). Připojení je znovu navázáno, poté co se pokusíte o připojení k internetu."
                       } ,{                      
                           type: "name",
                           title: "Manuálně",
                           content: "V tomto režimu je připojení k internetu ovládáno manuálně kliknutím na tlačítko Připojit nebo Odpojit. Tento režim podporuje také funkci max. doby nečinnosti. Do pole max. doba nečinnosti zadejte maximální dobu (v minutách), po kterou může být připojení k internetu neaktivní, než bude ukončeno . Výchozí hodnota je 15 minut. Pokud chcete, aby připojení k internetu zůstalo aktivní po celou dobu, zadejte 0 (nula)."
                       }]
},{
    type: "title",
    id: "internet_ipv4_dslite_title",
    title: "Typ připojení k Internetu: DS-Lite"
},{
    type: "paragraph",
    id: "internet_ipv4_dslite_detail",
    content: "Zvolte tento typ, jestliže váš poskytovatel internetu používá nasazení DS-Lite a poskytuje IPv6 adresu pro nastavení tunelu IPv4-in-IPv6 v síti IPv6 pro komunikaci IPv4 přenosu nebo IPv6 přenosu v jejich vlastní síti."
},{
    type: "name",
    id: "internet_ipv4_dslite_name",
    title: "Název AFTR",
    content: "Jestliže váš poskytovatel internetu podporuje získání AFTR jména automaticky, zvolte, prosím, Automaticky. Jestliže váš poskytovatel internetu poskytuje specifické jméno AFTR, zvolte, prosím, Manuálně a vložte jméno domény a adresu ipv6 od poskytovatele internetu do vstupního pole. "
},{
    type: "title",
    id: "internet_ipv4_v6plus_title",
    title: "Typ připojení k Internetu: v6plus"
},{
    type: "paragraph",
    id: "internet_ipv4_v6plus_detail",
    content: "Zvolte tento typ, jestliže váš poskytovatel internetu používá nasazení v6plus a poskytuje IPv6 adresu pro nastavení tunelu IPv4-in-IPv6 v síti IPv6 pro komunikaci IPv4 přenosu nebo IPv6 přenosu v jejich vlastní síti."
}
]
},
       INTERNET_MAC :{ 
               TITLE:"Klonování MAC adresy",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zvolte vhodnou metodu klonování MAC podle toho, jak potřebujete."
                       } ,{                      
                           type: "name",
                           title: "Neklonovat MAC adresu",
                           content: "NEMĚŇTE výchozí MAC adresu směrovače, v případě, že poskytovatel internetových služeb neváže přidělenou IP adresu na MAC adresu."
                       } ,{                      
                           type: "name",
                           title: "Klonovat aktuální MAC adresu počítače",
                           content: "Zkopírujete aktuální MAC adresu počítače, který je připojen ke směrovači, v případě, že poskytovatel internetových služeb váže přidělenou IP adresu na MAC adresu tohoto počítače."
                       } ,{                      
                           type: "name",
                           title: "Použít vlastní MAC adresu",
                           content: "Zadejte MAC adresu manuálně, v případě, že poskytovatel internetových služeb váže přidělenou IP adresu na tuto konkrétní MAC adresu."
                       }]
},
       INTERNET_WAN_AGGREGATION :{ 
               TITLE:"Agregace WAN",
               id: "internet_wan_aggregation_title",
               CONTENT: [{
                           type: "paragraph",
                           id: "internet_wan_aggregation_detail",
                           content: "Agregace WAN mění port LAN1 na dodatečný port WAN a vytváří jednu vysoce širokopásmovou datovou cestu. Získejte rychlejší internet od poskytovatele internetu, který poskytuje širokopásmové rychlosti vyšší než 1Gbps a nebuďte dále limitováni vaším síťovým hardwarem. "
                       } ,{                      
                           type: "note",
                           id: "internet_wan_aggregation_note",
                           title: "Poznámka",
                           content: "Před aktivací této funkce se ujistěte, že váš poskytovatel internetu podporuje Agregaci WAN a váš modem má dva porty WAN."
                       } ,{                      
                           type: "step",
                           title: "Aplikovat agregaci WAN",
                           id: "internet_wan_aggregation_step",
       content: [ 
                "1. Zapněte Agregaci WAN.",
                "2. Klikněte na Uložit.",
                "3. Připojte porty WAN a LAN1 na routeru ke dvěma portům WAN na modemu pomocí dvou ethernetových kabelů."]
}]
},
       LAN_IPV4 :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje adresu MAC, IP adresu a masku podsítě routeru."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "unikátní fyzická adresa přidělena k ethernetovému LAN potu směrovače."
                       } ,{                      
                           type: "name",
                           title: "IP adresa",
                           content: "Zobrazuje výchozí IP adresu routeru, která je používána pro přihlášení ke stránce webové správy routeru. Můžete ji změnit na jinou."
                       } ,{                      
                           type: "name",
                           title: "Maska podsítě",
                           content: "Zvolte přidělený identifikátor používaný portem LAN pro směrování interního a externího provozu nebo vložení nové masky podsítě."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "V případě, že nová IP adresa LAN není ve stejné podsíti se starou, fond IP adres na serveru DHCP bude automaticky nakonfigurován. Přesměrování portů a hostitel DMZ však změnu neprojeví, dokud nebudou překonfigurovány."
                       }]
},
       LINK_AGG :{ 
               TITLE:"Agregace portů (Link Aggregation)",
               CONTENT: [{
                           type: "paragraph",
                           content: "Agregace linek spojuje dva porty dohromady k vytvoření jednoho spoje s vysokou datovou propustností, tím se dosáhne vyšších rychlostí a vytváří stabilnější síť."
                       } ,{                      
                           type: "step",
                           id: "link_agg_step_help",
                           title: "Pro zapnutí agregace linek:",
       content: [ 
                "1. Zapněte funkci agregace linek",
                "2. Vyberte dva porty pro agregaci linek.",
                "3. Klikněte na Uložit."]
}]
},
       IPTV :{ 
               TITLE:"IPTV",
               CONTENT: [{
                           type: "paragraph",
                           content: "IPTV (Internet Protocol Television) je systém, kterým jsou dodávány služby televize pomocí souboru internetových protokolů po síti spínaných paketů, jako je LAN nebo internet."
                       } ,{                      
                           type: "name",
                           id: "igmp-snooping",
                           title: "Funkce IGMP Snooping",
                           content: "Funkce IGMP (Internet Group Management Protocol) Snooping umožňuje routeru pouze přeposílat multicastový provoz portům, které ho vyžadují."
                       } ,{                      
                           type: "name",
                           title: "IGMP Proxy",
                           content: "Zvolte povolit funkci IGMP Proxy, jestliže služba IPTV od poskytovatele internetu je založena na technologii IGMP."
                       } ,{                      
                           type: "name",
                           title: "Verze IGMP",
                           content: "Zvolte verzi IGMP podle vašeho poskytovatele internetu. Výchozí verze IGMP je V2."
                       } ,{                      
                           type: "name",
                           id: "igmp-wifi",
                           title: "Wireless Multicast Forwarding",
                           content: "Zvolte povolit funkci Bezdrátové Multicast přeposílání, která umožňuje, aby multicastové pakety byly přeposílány do bezdrátové sítě."
                       } ,{                      
                           type: "name",
                           title: "IPTV",
                           content: "Zvolte povolit funkci IPTV , jestliže služba IPTV od poskytovatele internetu není založena na technologii IGMP."
                       } ,{                      
                           type: "name",
                           title: "Profil poskytovatele internetu",
                           content: "Zvolte příslušný profil poskytovatele internetu pro dokončení konfigurace. Jsou tři druhy profilů:",
       children: [{                      
                           type: "name",
                           title: "Země-Jméno poskytovatele internetu",
                           content: "Profily poskytovatele internetu s výchozím nastavením jsou ve formátu \"Země-Jméno ISP\". Jednoduše najděte a zvolte vašeho poskytovatele z rozbalovacího seznamu."
                       } ,{                      
                           type: "name",
                           id: "iptv_bridge_child_1to4",
                           title: "Most ( Průchozí )",
                           content: "Jestliže váš poskytovatel internetu není na seznamu a žádný další parametr není vyžadován pro nastavení IPTV, můžete jednoduše zvolit profil a specifikovat port LAN, který je určený pro IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Specifikujte jaký druh dat bude LAN port přenášet. Například jestliže je IPTV zvolena pro LAN1, bude tento port přenášet pouze IPTV data, a vy byste měli připojit set-top box k LAN1."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_2to5",
                           title: "Most ( Průchozí )",
                           content: "Jestliže váš poskytovatel internetu není na seznamu a žádný další parametr není vyžadován pro nastavení IPTV, můžete jednoduše zvolit profil a specifikovat port LAN, který je určený pro IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Stanovte, jaký druh dat bude port LAN přenášet. Například, když je zvolena IPTV pro LAN2, port přenáší pouze IPTV a vy byste měli k tomuto portu připojit set-top box."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_5to8",
                           title: "Most ( Průchozí )",
                           content: "Jestliže váš poskytovatel internetu není na seznamu a žádný další parametr není vyžadován pro nastavení IPTV, můžete jednoduše zvolit profil a specifikovat port LAN, který je určený pro IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Stanovte, jaký druh dat bude port LAN přenášet. Například, když je zvolena IPTV pro LAN5, port přenáší pouze IPTV a vy byste měli k tomuto portu připojit set-top box."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_1to4",
                           title: "Vlastní",
                           content: "Jestliže váš poskytovatel internetu není na seznamu, ale jsou požadovány nějaké parametry, jako jsou internet/VoIP/IPTV VLAN ID a Priorita, zvolte tento profil.",
       children: [{                      
                           type: "name",
                           title: "Internet/VoIP/IPTV VLAN ID/Priorita",
                           content: "Nakonfigurujte ID VLAN a priority podle požadavků poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Značka 802.1Q",
                           content: "Vyberte, zda chcete označit internetové pakety značkou 802.1Q."
                       } ,{                      
                           type: "name",
                           title: "IPTV Multicast VLAN ID / Priorita",
                           content: "Můžete povolit funkci IPTV multicast jak potřebujete a VLAN ID a prioritu podle požadavků poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Specifikujte jaký druh dat bude LAN port přenášet. Například jestliže je IPTV zvolena pro LAN1, bude tento port přenášet pouze IPTV data, a vy byste měli připojit set-top box k LAN1."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_2to5",
                           title: "Vlastní",
                           content: "Jestliže váš poskytovatel internetu není na seznamu, ale jsou požadovány nějaké parametry, jako jsou internet/VoIP/IPTV VLAN ID a Priorita, zvolte tento profil.",
       children: [{                      
                           type: "name",
                           title: "Internet/VoIP/IPTV VLAN ID/Priorita",
                           content: "Nakonfigurujte ID VLAN a priority podle požadavků poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Značka 802.1Q",
                           content: "Vyberte, zda chcete označit internetové pakety značkou 802.1Q."
                       } ,{                      
                           type: "name",
                           title: "IPTV Multicast VLAN ID / Priorita",
                           content: "Můžete povolit funkci IPTV multicast jak potřebujete a VLAN ID a prioritu podle požadavků poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Stanovte, jaký druh dat bude port LAN přenášet. Například, když je zvolena IPTV pro LAN2, port přenáší pouze IPTV a vy byste měli k tomuto portu připojit set-top box."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_5to8",
                           title: "Vlastní",
                           content: "Jestliže váš poskytovatel internetu není na seznamu, ale jsou požadovány nějaké parametry, jako jsou internet/VoIP/IPTV VLAN ID a Priorita, zvolte tento profil.",
       children: [{                      
                           type: "name",
                           title: "Internet/VoIP/IPTV VLAN ID/Priorita",
                           content: "Nakonfigurujte ID VLAN a priority podle požadavků poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Značka 802.1Q",
                           content: "Vyberte, zda chcete označit internetové pakety značkou 802.1Q."
                       } ,{                      
                           type: "name",
                           title: "IPTV Multicast VLAN ID / Priorita",
                           content: "Můžete povolit funkci IPTV multicast jak potřebujete a VLAN ID a prioritu podle požadavků poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Stanovte, jaký druh dat bude port LAN přenášet. Například, když je zvolena IPTV pro LAN5, port přenáší pouze IPTV a vy byste měli k tomuto portu připojit set-top box."
                       }]
}]
}]
},
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Server DHCP",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Ve výchozím nastavení je server DHCP (Dynamic Host Configuration Protocol) povolen,dynamicky přiděluje parametry TCP/IP zařízením klienta z fondu IP adres.",
                "Nevypínejte DHCP server, pokud nemáte jiný DHCP server, nebo pokud nechcete manuálně přiřadit TCP/IP parametry každému klientskému zařízení v síti."]
} ,{                      
                           type: "name",
                           title: "Fond IP adres",
                           content: "Zadejte rozsah IP adres, které lze zapůjčit klientům."
                       } ,{                      
                           type: "name",
                           title: "Čas zapůjčení adresy",
                           content: "Vložte čas trvání (mezi 1 a 2880 minutami), ve kterém bude propůjčena IP adresa klientovi. Výchozí hodnota je 120."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Rezervace adresy",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje odpovídající parametry o zařízeních s rezervovanými IP adresami."
                       } ,{                      
                           type: "step",
                           title: "Rezervace IP adresy",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Klikněte na Scan pro zvolení momentálně připojených zařízení ze seznamu klientů DHCP; nebo vložte adresu MAC vámi zvoleného klienta do pole MAC adresa a IP adresu, kterou chcete pro klienta rezervovat do pole IP adresa.",
                "3. Vložte popis klienta do pole Popis.",
                "4. Vyberte Povolit.",
                "5. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže chcete zakázat tuto položku, klikněte na ikonu Žárovky."
                       }]
},
       DHCP_CLIENT_LIST :{ 
               TITLE:"Seznam klientů DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o momentálně připojených zařízeních."
                       }]
},
       DDNS :{ 
               TITLE:"Dynamické DNS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Dynamická DNS (Systém jmen dynamických domén) vám umožňuje přidělovat fixního hostitele a jméno domény k dynamické internetové IP adrese. TO je užitečné, když provozujete svoji vlastní webovou stránku, FTP server nebo jiný server za routerem. Pro začátek se potřebujete zaregistrovat u poskytovatele služby Dynamické DNS, jako je např.: www.dyndns.com."
                       } ,{                      
                           type: "step",
                           title: "Nastavení Dynamické DNS",
       content: [ 
                "1. Zvolte poskytovatele služby dynamické DNS.",
                "2. Vložte uživatelské jméno a heslo účtu dynamické DNS.",
                "3. Zadejte název domény, který jste obdrželi od poskytovatel služby DDNS.",
                "4. Zvolte interval updatování z rozbalovacího seznamu.",
                "5. Jestliže váš poskytovatel internetu je NO-IP, WAN IP Binding může zajistit, že jméno domény je svázáno s WAN IP tohoto routeru.",
                "6. Klikněte na Login a Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže chcete použít nový účet DDNS, nejdříve se, prosím, odhlaste a poté se přihlaste pod novým účtem."
                       }]
},
       DYNAMIC_DNS :{ 
               TITLE:"Dynamické DNS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Dynamická DNS (Systém jmen dynamických domén) vám umožňuje přidělovat fixního hostitele a jméno domény k dynamické internetové IP adrese. TO je užitečné, když provozujete svoji vlastní webovou stránku, FTP server nebo jiný server za routerem. Pro začátek se potřebujete zaregistrovat u poskytovatele služby Dynamické DNS, jako je např.: www.dyndns.com."
                       }]
},
       DOMAIN_NAME_LIST :{ 
               TITLE:"Seznám názvů domén",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato tabulka zobrazuje informace o všech jménech domén, které jsou registrovány vaším cloudovým účtem."
                       } ,{                      
                           type: "step",
                           title: "Registrovat nové jméno domény",
       content: [ 
                "1. Klikněte na Registrovat.",
                "2. Vložte jméno domény, kterou chcete registrovat.",
                "3. Klikněte na Uložit."]
}]
},
       ADVANCED_ROUTING_STATIC_ROUTING :{ 
               TITLE:"Statické směrování",
               CONTENT: [{
                           type: "paragraph",
                           content: "Statické směrování se používá k předdefinování pevné trasy síťových informačních paketů, které mají dorazit ke konkrétnímu hostiteli nebo síti."
                       } ,{                      
                           type: "step",
                           title: "Nastavení statického směrování",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Vložte IP adresu do pole Network Destination pro přidělení statické cesty pro tuto položku.",
                "3. Vložte masku podsítě do pole Maska Podsítě pro určení podílu sítě a podílu hostitele v IP adrese.",
                "4. Vložte IP adresu brány do pole Výchozí Brána pro připojení routeru k síti nebo hostiteli.",
                "5. Zvolte LAN nebo WAN v poli Rozhraní pro určení typu Network Destination.",
                "6. Vložte stručný popis této položky.",
                "7. Vyberte Povolit.",
                "8. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže chcete zakázat tuto položku, klikněte na ikonu Žárovky."
                       }]
},
       ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE :{ 
               TITLE:"Směrovací tabulka systému",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje všechny platné cesty, které jsou momentálně používány."
                       }]
},
       WIRELESS_TITLE :{ 
               TITLE:"Nastavení bezdrátové sítě",
               CONTENT: [{
                           type: "paragraph",
                           content: "Nakonfigurujte nastavení bezdrátové sítě, jak potřebujete."
                       }]
},
       OFDMA :{ 
               TITLE:"OFDMA",
               CONTENT: [{
                           type: "paragraph",
                           content: "OFDMA umožňuje více uživatelům přenášet data současně, a tak výrazně zvyšuje rychlost a efektivitu. Všimněte si, že pouze pokud vaši klienti podporují také OFDMA, můžete plně využívat výhod."
                       }]
},
       WIRELESS_SMART_CONNECT :{ 
               TITLE:"Chytré připojení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zaškrtnutím tohoto pole povolíte chytré připojení. Tato funkce pomáhá zařízením v rychlejším chodu tím, že jim přiřazuje nejlepší bezdrátová pásma v závislosti na aktuálních podmínkách a vyrovnává požadavky sítě."
                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Bezdrátová síť 2,4 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Název sítě (SSID)",
                           content: "Je doporučeno, abyste změnili jméno sítě (SSID). Tohle pole rozlišuje velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Skrýt identifikátor SSID",
                           content: "Zvolte v případě, že chcete skrýt jméno 2.4GHz sítě (SSID) v seznamu bezdrátových sítí. Když tuto možnost zvolíte, SSID nebude vysíláno a vy se budete muset manuálně připojovat k síti."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečení",
                           content: "Vyberte jednu z následujících možností zabezpečení:",
       children: [{                      
                           type: "name",
                           title: "Žádné zabezpečení",
                           content: "Zvolte tuto možnost pro zakázání zabezpečení bezdrátové sítě. Není doporučeno."
                        } ,{ 
 							type: "name",
 							title: "WPA2/WPA3-Personal",
							id: "WPA3_24G_TITLE",
 							content: "Tuto možnost vyberte, chcete-li povolit standardní metodu ověřování založenou na předsdíleném klíči (PSK), nazývaném také přístupová fráze. Pokud je vybrána, nakonfigurujte následující.",
 							children: [{
 								type: "name",
 								title: "Verze",
 								content: "Vyberte verzi zabezpečení bezdrátové sítě.",
 								children: [{
 									type: "name",
 									title: "Auto",
 									content: "Automatický režim umožňuje postupnou migraci do sítě WPA3-Personal při zachování interoperability se zařízeními WPA2-Personal a bez přerušení pro uživatele. Doporučujeme ponechat možnost Auto."
 								},{
 									type: "name",
 									title: "WPA3-SAE",
 									content: "Sítě Wi-Fi chráněné WPA3-SAE dostávají robustnější autentizaci založenou na heslech prostřednictvím Simultánní autentizace rovných (SAE), což přináší silnější ochranu sítí."
 								}]
 							}]
 						},{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Zvolte tuto možnost pro povolení zabezpečení bezdrátové sítě. Je to důrazně doporučeno pro ochranu bezdrátové sítě před neautorizovanými přístupy. V případě, že je zvolena tato možnost, nakonfigurujte následující.",
       children: [{                      
                           type: "name",
                           title: "Verze",
                           content: "Zvolte typ zabezpečení. WPA2-PSK je vyšší zabezpečení. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Šifrování",
                           content: "Zvolte type šifrování zabezpečení. AES je vyšší zabezpečení. Není doporučeno používat šifrování TKIP v případě, že router pracuje v režimu 802.11n. Kromě toho použití TKIP znemožní funkci WPS. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Heslo",
                           content: "Do tohoto políčka zadejte heslo bezdrátové sítě s 8 až 63 znaky ASCII nebo 8 až 64 hexadecimálními znaky."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Enterprise",
                           content: "Vyberte tuto možnost, pokud chcete aktivovat pokročilejší metodu ověřování pomocí RADIUS serveru (Remote Authentication Dial In User Service-Uživatelská vytáčená služba pro vzdálenou autentizaci). Pokud vyberete tuto možnost, WPS funkce bude deaktivována.",
       children: [{                      
                           type: "name",
                           title: "Verze",
                           content: "Zvolte verzi zabezpečení. WPA2 je vyšší zabezpečení. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Šifrování",
                           content: "Zvolte type šifrování zabezpečení. AES je vyšší zabezpečení. Není doporučeno používat šifrování TKIP v případě, že router pracuje v režimu 802.11n. Kromě toho použití TKIP znemožní funkci WPS. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "IP adresa RADIUS serveru",
                           content: "Zadejte IP adresu RADIUS serveru."
                       } ,{                      
                           type: "name",
                           title: "Port RADIUS serveru",
                           content: "Zadejte číslo portu RADIUS serveru."
                       } ,{                      
                           type: "name",
                           title: "Heslo RADIUS serveru",
                           content: "Zadejte sdílené heslo RADIUS serveru."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           id: "WEP_24G_TITLE",
                           content: "Zvolte tuto možnost pro povolení základní metody ověření, jestliže některé z klientských zařízení má přístup k bezdrátové síti pouze prostřednictvím WEP (Wired Equivalent Privacy). Jestliže je tato možnost zvolena, funkce WPS bude nedostupná.",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Zvolte typ ověření pro bezdrátovou síť. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Formát klíče WEP",
                           content: "Použijte formát ASCII nebo hexadecimální. Formát ASCII je kombinací písmen a číslic. Hexadecimální formát je kombinace čísla (0-9) a písmen (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Typ klíče",
                           content: "Vyberte délku klíče WEP.",
       children: [{                      
                           type: "name",
                           title: "64bitový",
                           content: "Umožňuje zadat 10 hexadecimálních číslic (0-9, A-F, a-f) nebo 5 znaků ASCII do pole hodnota WEP."
                       } ,{                      
                           type: "name",
                           title: "128bitový",
                           content: "Umožňuje zadat 26 hexadecimálních číslic (0-9, A-F, a-f) nebo 13 znaků ASCII do pole hodnota WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Hodnota klíče",
                           content: "Zadejte WEP klíč do příslušného pole."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Kanál",
                           content: "Vyberte provozní kanál pro 2,4GHz bezdrátovou síť. Doporučuje se ponechat kanál na Automaticky, pokud nemáte problém s přerušovaným bezdrátovým připojením."
                       } ,{                      
                           type: "name",
                           title: "Přenosový výkon",
                           content: "Vyberte hodnotu výkonu přenosu dat \"Vysoký, Střední nebo Nízký\". Výchozí a doporučená hodnota výkonu je Vysoký."
                       } ,{                      
                           type: "name",
                           id: "atf_2g4",
                           title: "Funkce Airtime Fairness",
                           content: "Zaškrtněte tento checkbox pro povolení funkce Airtime Fairness(ATF), která vám umožňuje optimalizovat propustnost každého toku. Plánovač provozu ATF používá cíle vysílacího času podle destinace pro rovnováhu využití vysílacího času napříč destinacemi toku."
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_2g4",
                           title: "Funkce Multi-uživatelské MIMO",
                           content: "Klikněte na Povolit pro použití funkce Multi-uživatelský MIMO (MU-MIMO)."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Bezdrátová síť 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Název sítě (SSID)",
                           content: "Je doporučeno, abyste změnili jméno sítě (SSID). Tohle pole rozlišuje velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Skrýt identifikátor SSID",
                           content: "Zvolte v případě, že chcete skrýt jméno 5GHz sítě (SSID) v seznamu bezdrátových sítí. Když tuto možnost zvolíte, SSID nebude vysíláno a vy se budete muset manuálně připojovat k síti."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečení",
                           content: "Vyberte jednu z následujících možností zabezpečení:",
       children: [{                      
                           type: "name",
                           title: "Žádné zabezpečení",
                           content: "Zvolte tuto možnost pro zakázání zabezpečení bezdrátové sítě. Není doporučeno."
                        } ,{ 
 							type: "name",
 							title: "WPA2/WPA3-Personal",
							id: "WPA3_5G_TITLE",
 							content: "Tuto možnost vyberte, chcete-li povolit standardní metodu ověřování založenou na předsdíleném klíči (PSK), nazývaném také přístupová fráze. Pokud je vybrána, nakonfigurujte následující.",
 							children: [{
 								type: "name",
 								title: "Verze",
 								content: "Vyberte verzi zabezpečení bezdrátové sítě.",
 								children: [{
 									type: "name",
 									title: "Auto",
 									content: "Automatický režim umožňuje postupnou migraci do sítě WPA3-Personal při zachování interoperability se zařízeními WPA2-Personal a bez přerušení pro uživatele. Doporučujeme ponechat možnost Auto."
 								},{
 									type: "name",
 									title: "WPA3-SAE",
 									content: "Sítě Wi-Fi chráněné WPA3-SAE dostávají robustnější autentizaci založenou na heslech prostřednictvím Simultánní autentizace rovných (SAE), což přináší silnější ochranu sítí."
 								}]
 							}]
 						},{                     
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Zvolte tuto možnost pro povolení zabezpečení bezdrátové sítě. Je to důrazně doporučeno pro ochranu bezdrátové sítě před neautorizovanými přístupy. V případě, že je zvolena tato možnost, nakonfigurujte následující.",
       children: [{                      
                           type: "name",
                           title: "Verze",
                           content: "Zvolte verzi zabezpečení. WPA2-PSK je vyšší zabezpečení. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Šifrování",
                           content: "Zvolte type šifrování zabezpečení. AES je vyšší zabezpečení. Není doporučeno používat šifrování TKIP v případě, že router pracuje v režimu 802.11n. Kromě toho použití TKIP znemožní funkci WPS. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Heslo",
                           content: "Do tohoto políčka zadejte heslo bezdrátové sítě s 8 až 63 znaky ASCII nebo 8 až 64 hexadecimálními znaky."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Enterprise",
                           content: "Vyberte tuto možnost, pokud chcete aktivovat pokročilejší metodu ověřování pomocí RADIUS serveru (Remote Authentication Dial In User Service-Uživatelská vytáčená služba pro vzdálenou autentizaci). Pokud vyberete tuto možnost, WPS funkce bude deaktivována.",
       children: [{                      
                           type: "name",
                           title: "Verze",
                           content: "Zvolte verzi zabezpečení. WPA2 je vyšší zabezpečení. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Šifrování",
                           content: "Zvolte type šifrování zabezpečení. AES je vyšší zabezpečení. Není doporučeno používat šifrování TKIP v případě, že router pracuje v režimu 802.11n. Kromě toho použití TKIP znemožní funkci WPS. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "IP adresa RADIUS serveru",
                           content: "Zadejte IP adresu RADIUS serveru."
                       } ,{                      
                           type: "name",
                           title: "Port RADIUS serveru",
                           content: "Zadejte číslo portu RADIUS serveru."
                       } ,{                      
                           type: "name",
                           title: "Heslo RADIUS serveru",
                           content: "Zadejte sdílené heslo RADIUS serveru."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
                           id: "WEP_5G_TITLE",
                           content: "Zvolte tuto možnost pro povolení základní metody ověření, jestliže některé z klientských zařízení má přístup k bezdrátové síti pouze prostřednictvím WEP (Wired Equivalent Privacy). Jestliže je tato možnost zvolena, funkce WPS bude nedostupná.",
       children: [{                      
                           type: "name",
                           title: "Typ",
                           content: "Zvolte typ ověření pro bezdrátovou síť. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Formát klíče WEP",
                           content: "Použijte formát ASCII nebo hexadecimální. Formát ASCII je kombinací písmen a číslic. Hexadecimální formát je kombinace čísla (0-9) a písmen (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Typ klíče",
                           content: "Vyberte délku klíče WEP.",
       children: [{                      
                           type: "name",
                           title: "64bitový",
                           content: "Umožňuje zadat 10 hexadecimálních číslic (0-9, A-F, a-f) nebo 5 znaků ASCII do pole hodnota WEP."
                       } ,{                      
                           type: "name",
                           title: "128bitový",
                           content: "Umožňuje zadat 26 hexadecimálních číslic (0-9, A-F, a-f) nebo 13 znaků ASCII do pole hodnota WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Hodnota klíče",
                           content: "Zadejte WEP klíč do příslušného pole."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Kanál",
                           content: "Vyberte provozní kanál pro 5GHz bezdrátovou síť. Doporučuje se ponechat kanál na Automaticky, pokud nemáte problém s přerušovaným bezdrátovým připojením."
                       } ,{                      
                           type: "name",
                           title: "Přenosový výkon",
                           content: "Vyberte hodnotu výkonu přenosu dat \"Vysoký, Střední nebo Nízký\". Výchozí a doporučená hodnota výkonu je Vysoký."
                       } ,{                      
                           type: "name",
                           id: "atf_5g",
                           title: "Funkce Airtime Fairness",
                           content: "Zaškrtněte tento checkbox pro povolení funkce Airtime Fairness(ATF), která vám umožňuje optimalizovat propustnost každého toku. Plánovač provozu ATF používá cíle vysílacího času podle destinace pro rovnováhu využití vysílacího času napříč destinacemi toku."
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_5g",
                           title: "Funkce Multi-uživatelské MIMO",
                           content: "Klikněte na Povolit pro použití funkce Multi-uživatelský MIMO (MU-MIMO)."
                       }]
},
       WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "paragraph",
                           content: "WPS (Nastavení zabezpečení Wi-Fi) vám poskytuje snadněji nastavit zabezpečené připojení k Wi-Fi"
                       } ,{                      
                           type: "name",
                           title: "Stiskněte tlačítko WPS (doporučeno)",
       content: [ 
                "Tato metoda vám umožňuje připojit jakékoli zařízení s povoleným WPS k bezdrátové síti.",
                "Klikněte na tlačítko Start WPS na obrazovce. Během dvou minut stiskněte tlačítko WPS na zařízení klienta."]
} ,{                      
                           type: "name",
                           title: "PIN směrovače",
       content: [ 
                "Výchozí PIN naleznete na štítku na routeru.",
                "Klikněte na Generovat, abyste získali nový PIN nebo klikněte na Default pro změnu PINu na původní výrobní PIN."]
} ,{                      
                           type: "name",
                           title: "Zadejte klientův PIN kód",
       content: [ 
                "Tato metoda vám umožňuje přidat bezdrátové zařízení manuálně.",
                "Vložte PIN zařízení do políčka a poté klikněte na Připojit."]
}]
},
       WIRELESS_STATISTICS :{ 
               TITLE:"Bezdrátové stanice online",
               CONTENT: [{
                           type: "name",
                           title: "Číslo klienta",
                           content: "Zobrazuje číslo připojeného bezdrátového klienta."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje MAC adresu připojeného bezdrátového klienta."
                       } ,{                      
                           type: "name",
                           title: "Typ připojení",
                           content: "Zobrazuje bezdrátové frekvenční pásmo (2,4 GHz nebo 5 GHz) připojeného bezdrátového klienta."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečení",
                           content: "Zobrazuje typ zabezpečení připojeného bezdrátového klienta."
                       } ,{                      
                           type: "name",
                           title: "Přijaté pakety",
                           content: "Zobrazuje počet paketů přijatých připojeným bezdrátovým klientem."
                       } ,{                      
                           type: "name",
                           title: "Odeslané pakety",
                           content: "Zobrazuje počet paketů odeslaných připojeným bezdrátovým klientem."
                       } ,{                      
                           type: "paragraph",
                           content: "Kliknutím na tlačítko Obnovit aktualizujete informace na této stránce."
                       }]
},
       WIRELESS_SCHEDULE :{ 
               TITLE:"Harmonogram bezdrátové sítě",
               CONTENT: [{
                           type: "paragraph",
                           content: "S Rozvrhem bezdrátového připojení můžete zakázat bezdrátový signál během určitého časového úseku. Např. můžete vypnout bezdrátový signál mezi 00:00 a 7:00 hodinou ranní."
                       } ,{                      
                           type: "name",
                           title: "Časový plán vypnutí bezdrátové sítě",
                           content: "Zobrazuje úsek(y), během kterého je bezdrátový signál vypnutý.",
       children: [{                      
                           type: "step",
                           title: "Nastavit čas vypnutí bezdrátové sítě",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Nastavte časový úsek, během kterého potřebujete mít bezdrátový signál vypnutý.",
                "3. Zvolte dny opakování. Můžete zvolit \"Každý den\" nebo specifikovat určité dny.",
                "4. Klikněte na Uložit."]
}]
}]
},
       GUEST_NETWORK_SETTINGS :{ 
               TITLE:"Nastavení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato funkce vám umožňuje poskytovat přístup k Wi-Fi pro hosty bez zpřístupnění hlavní sítě."
                       } ,{                      
                           type: "name",
                           title: "Povolte hostům přístup jeden k druhému",
                           content: "Zaškrtněte tento checkbox, čímž umožníte bezdrátovým zařízením v síti pro hosty komunikovat mezi sebou pomocí metod, jako jsou network neighbors, Samba, Ping a FTP."
                       } ,{                      
                           type: "name",
                           id: "access_local",
                           title: "Povolte hostům přístup ke svojí lokální síti",
                           content: "Zaškrtněte tento checkbox, čímž umožníte bezdrátovým zařízením v síti pro hosty komunikovat se zařízeními připojenými k portům LAN na routeru nebo k hlavní síti pomocí metod, jako jsou network neighbors, Samba, Ping a FTP."
                       }]
},
       GUEST_NETWORK_WIRELESS :{ 
               TITLE:"Bezdrátová síť 2,4 GHz / 5 GHz",
               CONTENT: [{
                           type: "name",
                           title: "Povolit síť pro hosty",
                           content: "Zaškrtnutím tohoto tlačítka zapnete funkci Síť pro hosty."
                       } ,{                      
                           type: "name",
                           title: "Název sítě (SSID)",
                           content: "Můžete ponechat výchozí název sítě pro hosty (SSID) nebo vytvořit nový název (až 32 znaků)."
                       } ,{                      
                           type: "name",
                           title: "Skrýt identifikátor SSID",
                           content: "Zaškrtněte toto políčko, pokud chcete skrýt identifikátor SSID sítě pro hosty v seznamu bezdrátových sítí."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Interval aktualizace hesla",
                           content: "Zvolte interval updatování hesla k síti pro hosty."
                       } ,{                      
                           type: "name",
                           title: "Zabezpečení",
                           content: "Když zvolíte možnost bez aktualizace hesla, vyberte jednu z následujících možností zabezpečení:",
       children: [{                      
                           type: "name",
                           title: "Žádné zabezpečení",
                           content: "Zvolte tuto možnost pro zakázání zabezpečení bezdrátové sítě. Není doporučeno."
                        } ,{ 
 							type: "name",
 							title: "WPA2/WPA3-Personal",
							id: "WPA3_GUEST_TITLE",
 							content: "Tuto možnost vyberte, chcete-li povolit standardní metodu ověřování založenou na předsdíleném klíči (PSK), nazývaném také přístupová fráze. Pokud je vybrána, nakonfigurujte následující.",
 							children: [{
 								type: "name",
 								title: "Verze",
 								content: "Vyberte verzi zabezpečení bezdrátové sítě.",
 								children: [{
 									type: "name",
 									title: "Auto",
 									content: "Automatický režim umožňuje postupnou migraci do sítě WPA3-Personal při zachování interoperability se zařízeními WPA2-Personal a bez přerušení pro uživatele. Doporučujeme ponechat možnost Auto."
 								},{
 									type: "name",
 									title: "WPA3-SAE",
 									content: "Sítě Wi-Fi chráněné WPA3-SAE dostávají robustnější autentizaci založenou na heslech prostřednictvím Simultánní autentizace rovných (SAE), což přináší silnější ochranu sítí."
 								}]
 							}]
 						},{                      
                           type: "name",
                           title: "WPA/WPA2-Personal",
                           content: "Zvolte tuto možnost pro povolení zabezpečení bezdrátové sítě. Je to důrazně doporučeno pro ochranu sítě pro hosty před neautorizovanými přístupy. V případě, že je zvolena tato možnost, nakonfigurujte následující.",
       children: [{                      
                           type: "name",
                           title: "Verze",
                           content: "Zvolte verzi zabezpečení. WPA2-PSK je vyšší zabezpečení. Jestliže si nejste jistí, zvolte Auto."
                       } ,{                      
                           type: "name",
                           title: "Šifrování",
                           content: "Zvolte type šifrování zabezpečení. AES je vyšší zabezpečení. Není doporučeno používat šifrování TKIP v případě, že router pracuje v režimu 802.11n. Kromě toho použití TKIP znemožní funkci WPS. Jestliže si nejste jistí, zvolte Auto."
                       }]
} ,{                      
                           type: "name",
                           id: "portal-help-title",
                           title: "Portál",
                           content: "Autentifikace pomocí Portálu zvyšuje zabezpečení vaší sítě tím, že vyžaduje ověření ze strany klientů, kteří potřebují dočasný přístup k vaší bezdrátové síti."
                       } ,{                      
                           type: "step",
                           id: "portal-help-content",
                           title: "Nastavit autentifikaci portálu:",
       content: [ 
                "1. Zvolte Portál pro zabezpečení.",
                "2. Zvolte jednoduché heslo nebo Žádné ověření pro Ověření pravosti.",
                "A. Jednoduché heslo - Určete heslo pro",
                "B. Žádné ověření - Klienti mohou přistupovat k síti bez jakéhokoli ověření.",
                "3. Zvolte 1 hodinu, 2 hodiny, 4 hodiny, 8 hodin nebo Vždy pro specifikaci času vypršení ověření. Když ověření klienta vyprší, musí se přihlásit znovu pro ověření přístupu.",
                "4. (Volitelné) Povolte Přesměrování a vložte URL adresu přesměrování podle potřeby. Poté nově ověřený klient bude přesměrován na vámi určenou URL adresu.",
                "5. (Volitelné) Můžete také přizpůsobovat stránku ověření přihlášení.",
                "A. Název Portálu - Až 31 znaků.",
                "B. Podmínky použití - Až 1023 znaků",
                "C. Obrázek loga - Uploadujte JPG nebo PNG obrázek (menší než 100KB) pro nastavení loga.",
                "D. Obrázek pozadí - Uploadujte JPG nebo PNG obrázek (menší než 2MB) nastavení pozadí.",
                "6. Klikněte na Uložit."]
}]
} ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Heslo",
                           content: "Vytvořte heslo mezi 8 a 63 ASCII znaky nebo v délce 8 až 64 hexadecimálních znaků (0-9, a-f, A-F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Heslo",
                           content: "Použijte možnost vygenerování náhodného hesla nebo si vytvořte heslo mající 8 až 63 znaků ASCII nebo 8 až 64 hexadecimálních znaků (0-9, a-f, A-F)."
                       }]
},
       NAT :{ 
               TITLE:"ALG",
               CONTENT: [{
                           type: "paragraph",
                           content: "ALG umožňuje upravovat průchodové filtry pro Překlad síťových adres (NAT), aby byly zapojeny do brány pro podporu převodu adres a portů pro určitou vrstvu aplikace \"control/data\" protokolů: FTP, TFTP, H323 atd. Povolení ALG je doporučeno."
                       } ,{                      
                           type: "name",
                           title: "Povolit FTP ALG",
                           content: "Tato volba umožňuje klientům a serverům FTP (File Transfer Protocol) přenos dat přes NAT."
                       } ,{                      
                           type: "name",
                           title: "Povolit TFTP ALG",
                           content: "Tato volba umožňuje klientům a serverům TFTP (Trivial File Transfer Protocol) přenos dat přes NAT."
                       } ,{                      
                           type: "name",
                           title: "Povolit H323 ALG",
                           content: "Tato volba umožňuje klientům Microsoft NetMeeting komunikovat přes NAT."
                       } ,{                      
                           type: "name",
                           title: "Povolit RTSP ALG",
                           content: "Tato volba umožňuje klientům přehrávačů médií komunikovat se servery streamující média přes NAT."
                       } ,{                      
                           type: "name",
                           title: "Povolit SIP ALG",
                           content: "Jestliže je tato položka zvolena, je umožněno klientům komunikovat se servery SIP (Session Initiation Protocol) přes NAT."
                       } ,{                      
                           type: "name",
                           title: "Povolit průchod PPTP",
                           content: "Tato volba umožňuje Point-to-Point relacím tunelové propojení prostřednictvím IP sítě a průchod přes směrovač."
                       } ,{                      
                           type: "name",
                           title: "Povolit průchod L2TP",
                           content: "Tato volba umožňuje Layer 2 Point-to-Point relacím tunelové propojení prostřednictvím IP sítě a průchod přes směrovač."
                       } ,{                      
                           type: "name",
                           title: "Povolit průchod IPSec",
                           content: "Jestliže je tato položka zvolena, je umožněno protokolu zabezpečení internetu (IPSec), aby pro něj byl vytvořen tunel skrz síť IP a aby procházel přes router. IPSec používá kryptografickou službu zabezpečení pro zajištění soukromí a zabezpečení komunikací po sítích IP."
                       }]
},
       VIRTUAL_SERVERS :{ 
               TITLE:"Přesměrování portů",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Přesměrování portů se používá k nastavení veřejné služby ve vaší místní síti. Přesměrování je definováno jako externí port a všechny požadavky z Internetu do tohoto externího portu budou přesměrovány na určený počítač, který musí být nakonfigurován se statickou nebo rezervovanou IP adresu.",
                "Když vytvoříte server na lokální síti a chcete ho sdílet na internetu, Virtual Servers může tuto službu realizovat a poskytnout ho uživatelům internetu."]
} ,{                      
                           type: "paragraph",
                           content: "Tabulka zobrazuje relevantní parametry virtuálního serveru."
                       } ,{                      
                           type: "name",
                           title: "Typ služby",
                           content: "Zobrazuje jméno virtuálního serveru."
                       } ,{                      
                           type: "name",
                           title: "Externí port",
                           content: "Zobrazuje číslo portu nebo rozsah portů používaných pro přesměrování."
                       } ,{                      
                           type: "name",
                           title: "Interní IP adresa",
                           content: "Zobrazuje IP adresu počítače, na kterém běží aplikace služby."
                       } ,{                      
                           type: "name",
                           title: "Interní port",
                           content: "Zobrazuje číslo portu počítače, na kterém běží aplikace služby."
                       } ,{                      
                           type: "name",
                           title: "Protokol",
                           content: "Zobrazuje protokol používaný pro aplikaci služby: TCP, UDP nebo Všechny (Všechny protokoly podporované směrovačem)."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Zobrazuje aktuální stav (zapnuto nebo vypnuto) specifického pravidla filtrování."
                       } ,{                      
                           type: "name",
                           title: "Upravit",
                           content: "Zobrazuje možnosti Upravit nebo Odstranit příslušné pravidlo."
                       } ,{                      
                           type: "step",
                           title: "Nastavení pravidla pro přesměrování portů",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Kliknutím na \"Zobrazit existující služby\" vyberte službu ze seznamu a automaticky se vyplní číslo příslušných portů v polích Externí port a Interní port. Pokud služba není v seznamu, zadejte číslo externího portu (např. 21) nebo rozsah portů (např.21 až 25). Pokud je Interní port stejný jako Externí port nechte pole prázdné nebo zadejte konkrétní číslo portu (např. 21) v případě, že Externí port je pouze jeden. Zadejte IP adresu počítače, na kterém běží aplikace služby v tečkovaném desítkovém formátu do pole Interní IP adresa.",
                "3. Vyberte protokol pro aplikaci služby: TCP, UDP nebo Všechny zrozevíracího seznamu protokolů.",
                "4. Vyberte Povolit.",
                "5. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
       content: [ 
                "1. Jestliže chcete zakázat tuto položku, klikněte na ikonu Žárovky.",
                "2. Doporučujeme zachovat výchozí nastavení Interního Portu a Protokolu, jestliže si nejste jistí jaký port nebo protokol použít.",
                "3. Jestliže lokální hostitelské zařízení provozuje více než jeden typ dostupných služeb, musíte vytvořit pravidlo pro každou z nich. Všimněte si, prosím, že Externí Port se Nesmí překrývat."]
}]
},
       PORT_TRIGGERING :{ 
               TITLE:"Port triggering",
               CONTENT: [{
                           type: "paragraph",
                           content: "Port triggering se používá, aby předal provoz na určitém portu na konkrétní server v síti LAN."
                       } ,{                      
                           type: "paragraph",
                           content: "Tabulka zobrazuje relevantní parametry pro port triggering."
                       } ,{                      
                           type: "name",
                           title: "Aplikace",
                           content: "Zobrazuje název aplikace."
                       } ,{                      
                           type: "name",
                           title: "Triggering port",
                           content: "Zobrazuje odchozí port používaný ke spuštění pravidla filtrování odchozího spojení."
                       } ,{                      
                           type: "name",
                           title: "Trigger protokol",
                           content: "Zobrazuje protokol používaný pro triggering port. TCP, UDP nebo Všechny (Všechny protokoly podporované směrovačem)."
                       } ,{                      
                           type: "name",
                           title: "Externí port",
                           content: "Zobrazuje port nebo rozsah portů používaných vzdáleným systémem. Odezva je pomocí jednoho z těchto portů předána do počítače, který toto pravidlo aktivuje. Můžete zadat až 5 skupin portů (nebo skupiny portů). Každá skupina portů musí být oddělena \",\" (čárkou), například, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
                       } ,{                      
                           type: "name",
                           title: "Externí protokol",
                           content: "Zobrazuje protokol používaný pro příchozí port. TCP, UDP nebo Všechny (Všechny protokoly podporované směrovačem)."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Zobrazuje aktuální stav (zapnuto nebo vypnuto) specifického pravidla filtrování."
                       } ,{                      
                           type: "name",
                           title: "Upravit",
                           content: "Zobrazuje možnosti Upravit nebo Odstranit příslušné pravidlo."
                       } ,{                      
                           type: "step",
                           title: "Nastavení pravidla pro port triggering",
       content: [{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Každé pravidlo může být najednou použito pouze jedním zařízením."
                       },
                "1. Klikněte na Přidat.",
                "2. Kliknutím na Zobrazit existující aplikace vyberte aplikaci ze seznamu a automaticky se vyplní výchozí hodnoty do příslušných polí . Chcete-li přidat aplikace neuvedené v seznamu, manuálně zadejte Aplikace, Triggering port, Triggering protokol, Externí port a Externí protokol.",
                "3. Vyberte Povolit.",
                "4. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže chcete zakázat toto pravidlo, klikněte na ikonu Žárovky."
                       }]
},
       DMZ :{ 
               TITLE:"DMZ",
               CONTENT: [{
                           type: "paragraph",
                           content: "Hostitelská funkce DMZ (Demilitarized Zone) umožňuje lokálnímu hostiteli se vystavit internetu kvůli službě s určitým záměrem, jako jsou Hraní her po internetu nebo video konference. V základě DMZ umožňuje jednomu počítači v síti LAN otevřít všechny své porty. Tento počítač musí být nakonfigurován se statickou IP adresou a musí mít zakázanou funkci klienta DHCP."
                       } ,{                      
                           type: "paragraph",
                           content: "Když je DMZ povolena, hostitel DMZ je zcela vystaven internetu, což může přinášet potenciální rizika bezpečnosti pro počítač. Jestliže nepoužíváte DMZ, zakažte ji včas."
                       } ,{                      
                           type: "step",
                           title: "Přiřazení počítače nebo serveru jako DMZ serveru",
       content: [ 
                "1. Klikněte na Povolit DMZ.",
                "2. V poli IP adresa hostitele DMZ zadejte IP adresu místního počítače, který bude nastavent jako hostitel DMZ.",
                "3. Klikněte na Uložit."]
}]
},
       UPNP :{ 
               TITLE:"UPnP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Ve výchozím stavu je funkce UPnP (Universal Plug-and-Play) povolena, což umožňuje zařízením, jako jsou počítače a internetová zařízení, se automaticky rozeznávat a komunikovat mezi sebou v lokální síti."
                       } ,{                      
                           type: "paragraph",
                           content: "Možná budete muset povolit UPnP, jestliže chcete používat aplikace pro multiplayerové hraní her, připojení peer-to-peer, komunikace v reálném čase (jako jsou VoIP nebo teleVoIP konference) nebo vzdálenou pomoc atd."
                       } ,{                      
                           type: "name",
                           title: "Seznam služby UPnP",
                           content: "Seznam služeb UPnP zobrazuje UPnP informace o lokálním hostiteli(ích)."
                       }]
},
       MODEM :{ 
               TITLE:"3G/4G Nápověda",
               CONTENT: [{
                           type: "name",
                           title: "3G/4G USB modem",
                           content: "Zobrazí stav 3G/4G USB modemu."
                       } ,{                      
                           type: "name",
                           title: "Použijte automaticky identifikované parametry poskytovatele internetu",
                           content: "Tato funkce je ve výchozím stavu povolena. Jestliže je povolena, může router identifikovat poskytovatele internetu pro SIM/UIM kartu a automaticky vyplnit parametry. Jestliže identifikace selže, zvolte prosím, Oblast a Mobilního poskytovatele internetu manuálně."
                       } ,{                      
                           type: "name",
                           title: "Oblast",
                           content: "Automaticky volí a zobrazuje oblast, když je USB modem a SIM karta úspěšně identifikována. V případě, že ne, zvolte region z rozbalovacího menu."
                       } ,{                      
                           type: "name",
                           title: "Poskytovatel mobilních internetových služeb",
                           content: "Zobrazí ISP od 3G/4G sítě. Pokud není detekován automaticky, vyberte ISP z rozevírací nabídky. Výchozí hodnoty čísla k vytočení a APN budou automaticky vyplněny."
                       } ,{                      
                           type: "name",
                           title: "SIM/UIM PIN",
                           content: "Jestliže je ochrana SIM/UIM povolena, vložte kód PIN. Ochrana SIM/UIM je ve výchozím stavu zakázána. V případě, že zadáte 3krát špatný PIN, bude karta automaticky zablokována. Odblokovat ji můžete pouze vložením kódu PUK z vašeho PC/laptopu."
                       } ,{                      
                           type: "name",
                           title: "Zpráva",
                           content: "Zobrazuje informace o PINu vaši SIM/UIM karty, jestliže je ochrana PINem povolena."
                       } ,{                      
                           type: "name",
                           title: "Nastavení Vytáčené číslo,APN, Uživatelské jméno/heslo",
                           content: "Jestliže není váš poskytovatel internetu na seznamu <strong>Mobile ISP</strong>, zaškrtněte tento checkbox a vložte číslo pro vytáčení, APN (Access Point Name), uživatelské jméno a heslo, které vám byly poskytnuty poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Vytáčené číslo",
                           content: "Vložte číslo pro vytáčení poskytnuté vaším poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Vložte APN (jméno access pointu) poskytnuté vaším poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Uživatelské jméno / heslo",
                           content: "Vložte uživatelské jméno a heslo poskytnuté vaším poskytovatelem internetu. Tyto pole rozlišují velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Připojit na požádání",
                           content: "V tomto režimu bude připojení k internetu ukončeno automaticky po určité době nečinnosti (max. doba nečinnosti). Připojení je znovu navázáno, poté co se pokusíte o připojení k internetu."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Občas nelze spojení přerušit, přestože zadáte hodnotu Max. Čas nečinnosti, protože některé aplikace k internetu přistupují na pozadí."
                       } ,{                      
                           type: "name",
                           title: "Připojit automaticky",
                           content: "V tomto režimu se internetové spojení automaticky znovu naváže po každém odpojení."
                       } ,{                      
                           type: "name",
                           title: "Připojit manuálně",
                           content: "V tomto režimu můžete kliknout na tlačítko Spojit nebo Připojit a ručně ovládat připojení k internetu. Tento režim také podporuje funkci Max. Čas nečinnosti. Do pole Max. Čas nečinnosti zadejte maximální dobu (v minutách), po kterou může být internetové spojení neaktivní, než bude ukončeno. Výchozí hodnota je 15 minut. Pokud chcete, aby internetové spojení bylo aktivní neustále, zadejte hodnotu 0 (nula)."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Občas nelze spojení přerušit, přestože zadáte hodnotu Max. Čas nečinnosti, protože některé aplikace k internetu přistupují na pozadí."
                       } ,{                      
                           type: "paragraph",
                           content: "Klikněte na tlačítko Uložit pro uložení nastavení."
                       }]
},
       MODEM_ADVANCED :{ 
               TITLE:"3G/4G Pokročilé nastavení - Nápověda",
               CONTENT: [{
                           type: "name",
                           title: "3G/4G USB modemu",
                           content: "Zobrazí stav 3G/4G USB modemu."
                       } ,{                      
                           type: "name",
                           title: "Použijte automaticky identifikované parametry poskytovatele internetu",
                           content: "Tato funkce je ve výchozím stavu povolena. Jestliže je povolena, může router identifikovat poskytovatele internetu pro SIM/UIM kartu a automaticky vyplnit parametry. Jestliže identifikace selže, zvolte prosím, Oblast a Mobilního poskytovatele internetu manuálně."
                       } ,{                      
                           type: "name",
                           title: "Oblast",
                           content: "Automaticky volí a zobrazuje region, když jsou USB modem a SIM karta úspěšně identifikovány. V případě, že ne, zvolte váš region v rozbalovacím menu."
                       } ,{                      
                           type: "name",
                           title: "Poskytovatel mobilních internetových služeb",
                           content: "Zobrazí ISP od 3G/4G sítě. Pokud není detekován automaticky, vyberte ISP z rozevírací nabídky. Výchozí hodnoty čísla k vytočení a APN budou automaticky vyplněny."
                       } ,{                      
                           type: "name",
                           title: "SIM/UIM PIN",
                           content: "Jestliže je ochrana SIM/UIM povolena, vložte kód PIN. Ochrana SIM/UIM je ve výchozím stavu zakázána. V případě, že zadáte 3krát špatný PIN, bude karta automaticky zablokována. Odblokovat ji můžete pouze vložením kódu PUK z vašeho PC/laptopu."
                       } ,{                      
                           type: "name",
                           title: "Zpráva",
                           content: "Zobrazuje informace o PINu vaši SIM/UIM karty, jestliže je ochrana PINem povolena."
                       } ,{                      
                           type: "name",
                           title: "Nastavení Vytáčené číslo,APN, Uživatelské jméno/heslo",
                           content: "Jestliže není váš poskytovatel internetu na seznamu <strong>Mobile ISP</strong>, zaškrtněte tento checkbox a vložte číslo pro vytáčení, APN (Access Point Name), uživatelské jméno a heslo, které vám byly poskytnuty poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Vytáčené číslo",
                           content: "Vložte číslo pro vytáčení poskytnuté vaším poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Vložte APN (jméno access pointu) poskytnuté vaším poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Uživatelské jméno / heslo",
                           content: "Vložte uživatelské jméno a heslo poskytnuté vaším poskytovatelem internetu. Tyto pole rozlišují velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Připojit na požádání",
                           content: "V tomto režimu bude připojení k internetu ukončeno automaticky po určité době nečinnosti (max. doba nečinnosti). Připojení je znovu navázáno, poté co se pokusíte o připojení k internetu."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Občas nelze spojení přerušit, přestože zadáte hodnotu Max. Čas nečinnosti, protože některé aplikace k internetu přistupují na pozadí."
                       } ,{                      
                           type: "name",
                           title: "Připojit automaticky",
                           content: "V tomto režimu se internetové spojení automaticky znovu naváže po každém odpojení."
                       } ,{                      
                           type: "name",
                           title: "Připojit manuálně",
                           content: "V tomto režimu můžete kliknout na tlačítko Spojit nebo Připojit a ručně ovládat připojení k internetu. Tento režim také podporuje funkci Max. Čas nečinnosti. Do pole Max. Čas nečinnosti zadejte maximální dobu (v minutách), po kterou může být internetové spojení neaktivní, než bude ukončeno. Výchozí hodnota je 15 minut. Pokud chcete, aby internetové spojení bylo aktivní neustále, zadejte hodnotu 0 (nula)."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Občas nelze spojení přerušit, přestože zadáte hodnotu Max. Čas nečinnosti, protože některé aplikace k internetu přistupují na pozadí."
                       } ,{                      
                           type: "name",
                           title: "Typ ověřování",
                           content: "Zvolte typ ověření. Výchozí hodnota je Auto. Někteří poskytovatelé internetu požadují specifické typy ověření, potvrďte to, prosím, s poskytovatelem internetu nebo ponechte výchozí nastavení."
                       } ,{                      
                           type: "name",
                           title: "Auto",
                           content: "Jestliže jste zvolili Auto (výchozí), router automaticky stanovuje typ ověření používaný vaším poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "PAP",
                           content: "Je-li zvolena hodnota PAP (Password Authentication Protocol), směrovač ověří klienta pomocí dvou operací handshake. Tuto možnost vyberte, pokud ISB vyžaduje tento typ ověření."
                       } ,{                      
                           type: "name",
                           title: "CHAP",
                           content: "Je-li zvolena hodnota CHAP (Challenge Handshake Authentication Protocol), směrovač ověří klienta pomocí tří operací handshake a pravidelně potvrzuje identitu klienta. Tuto možnost vyberte, pokud ISP vyžaduje tento typ ověření."
                       } ,{                      
                           type: "name",
                           title: "Velikost MTU",
                           content: "Výchozí velikost MTU (Maximální jednotka přenosu) je 1480 bytů. Neměňte ji, jestliže to není požadováno vaším poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Použít následující adresy DNS",
                           content: "Jestliže váš poskytovatel internetu poskytuje IP adresy serveru DNS, zaškrtněte tento checkbox a vložte IP adresy <strong>Primární DNS</strong> a Sekundární DNS (volitelné). Jinak budou DNS servery přiděleny dynamicky vaším poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Primární DNS",
                           content: "Vložte IP adresu DNS v desítkovém formátu oddělené tečkami, která byla poskytnuta poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Sekundární DNS",
                           content: "(Volitelné) Vložte další IP adresu DNS v desítkovém formátu oddělené tečkami, která byla poskytnuta poskytovatelem internetu."
                       } ,{                      
                           type: "paragraph",
                           content: "Klikněte na tlačítko <strong>Uložit</strong> pro uložení vašeho nastavení."
                       }]
},
       DISK_SETTING :{ 
               TITLE:"Nastavení zařízení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Obrazovka Nastavení zařízení zobrazuje příslušné informace o všech USB zařízení připojených přes USB port."
                       } ,{                      
                           type: "name",
                           title: "Prohledat",
                           content: "Směrovač obvykle automaticky najde nově připojené zařízení. Pokud nenajde, kliknutím na toto tlačítko se spustí vyhledávání nově připojeného zařízení a obnoví se obrazovka aktualizovanými informacemi."
                       } ,{                      
                           type: "name",
                           title: "Jednotka",
                           content: "Zobrazuje název USB jednotky."
                       } ,{                      
                           type: "name",
                           title: "Kapacita",
                           content: "Zobrazuje celkovou kapacitu USB jednotky."
                       } ,{                      
                           type: "name",
                           title: "Volné místo",
                           content: "Zobrazuje aktuální volnou kapacitu úložného prostoru."
                       } ,{                      
                           type: "name",
                           title: "Bezpečně odebrat",
                           content: "Kliknutím na toto tlačítko bezpečně odpojíte paměťové USB zařízení dříve než jej fyzicky odpojíte ze směrovače."
                       } ,{                      
                           type: "paragraph",
                           content: "Tlačítko Odebrat se objevuje pouze v případě, když je USB úložiště připojeno k routeru. Když je zařízení zaneprázdněno, není požné jej odebrat."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Toto zaškrtávací políčko se zobrazí pouze v případě, že je paměťové zařízení USB připojeno ke směrovači. Touto volbou povolíte sdílení souborů na USB zařízení."
                       } ,{                      
                           type: "step",
                           title: "Nastavení souborového serveru",
       content: [ 
                "1. Připojte paměťové USB zařízení do USB portu směrovače pomocí USB kabelu.",
                "2. Nově připojené USB zařízení by mělo být automaticky nalezeno směrovačem a v části Nastavení zařízení by se měly zobrazit jeho údaje. V opačném případě klikněte na Prohledat.",
                "3. Kliknutím na Aktivní povolíte sdílení souborů."]
}]
},
       FOLDER_SHARE_ACCOUNT :{ 
               TITLE:"Účet sdílení",
               CONTENT: [{
                           type: "name",
                           title: "Účet",
                           content: "Pro přístup ke sdíleným souborům a složkám můžete vybrat možnost Použít výchozí účet nebo Použít nový účet a vytvořit nový uživatelský účet zadáním následujících údajů."
                       } ,{                      
                           type: "name",
                           title: "Uživatelské jméno / heslo",
                           content: "Zadejte uživatelské jméno o délce 1 až 15 alfanumerických znaků a podtržení a heslo o délce 1 až 15 ASCII znaků. Tato pole rozlišují velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Potvrdit heslo",
                           content: "Znovu zadejte heslo kvůli možnému překlepu. Tento údaj rozlišuje velká a malá písmena."
                       } ,{                      
                           type: "paragraph",
                           content: "Klikněte na Uložit pro uložení veškerého nastavení."
                       }]
},
       FOLDER_SHARE_SETTINGS :{ 
               TITLE:"Nastavení sdílení",
               CONTENT: [{
                           type: "name",
                           title: "Název síťového/mediálního serveru",
                           content: "Zobrazuje název používaný pro přístup k paměťovému zařízení USB."
                       } ,{                      
                           type: "name",
                           title: "Povolit",
                           content: "Vyberte pro povolení metody přístupu."
                       } ,{                      
                           type: "name",
                           title: "Metoda přístupu",
                           content: "Existují tři metody přístupu, které umožňují přístup k připojenému paměťovému USB zařízení. Můžete si vybrat jednu nebo více metod přístupu zaškrtnutím příslušného políčka.",
       children: [{                      
                           type: "name",
                           title: "Okolní počítače",
                           content: "Jestliže je to povoleno, uživatelé v síti mohou přistupovat k USB úložišti pomocí přidělené IP adresy (např.: \\\\192.168.0.1)."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Jestliže je to povoleno, FTP klienti v lokální síti mohou přistupovat k úložišti pomocí přidělené IP adresy následované číslem portu FTP serveru (např.: ftp://192.168.0.1:21)."
                       } ,{                      
                           type: "name",
                           title: "FTP (Přes Internet)",
                           content: "Pokud je aktivována tato možnost, uživatelé mohou přistupovat k paměťovému USB zařízení přes FTP pomocí internetu. Tato funkce podporuje stahování i nahrávání souborů. Chcete-li změnit číslo portu FTP serveru, zadejte číslo portu a kliknutím na tlačítko Uložit se změny uloží."
                       }]
} ,{                      
                           type: "name",
                           title: "Odkaz",
                           content: "Zobrazuje adresu pro přístup k paměťovému zařízení USB."
                       } ,{                      
                           type: "name",
                           title: "Port",
                           content: "Zobrazí číslo portu serveru FTP. Použijte výchozí hodnotu 21 nebo hodnotu mezi 1024 a 65535."
                       } ,{                      
                           type: "paragraph",
                           content: "Klikněte na Uložit pro uložení veškerého nastavení."
                       }]
},
       FOLDER_SHARE_FOLDERS :{ 
               TITLE:"Sdílení složek",
               CONTENT: [{
                           type: "name",
                           title: "Sdílet vše",
                           content: "Je-li aktivní, sdílíte všechny soubory a složky, je-li vypnutá, sdílíte pouze vybrané složky."
                       } ,{                      
                           type: "name",
                           title: "Povolit ověřování",
                           content: "Doporučujeme zapnout tuto funkci, která zajišťuje uživatelům přístup ke sdíleným složkám po zadání uživatelského jména a hesla."
                       } ,{                      
                           type: "name",
                           title: "Název složky",
                           content: "Zobrazuje název sdílené složky."
                       } ,{                      
                           type: "name",
                           title: "Cesta ke složce",
                           content: "Zobrazuje cestu ke sdílené složce."
                       } ,{                      
                           type: "name",
                           title: "Sdílení médií",
                           content: "Označuje, zda sdílená složka má povolené sdílení médií nebo ne."
                       } ,{                      
                           type: "name",
                           title: "Název jednotky",
                           content: "Zobrazuje název sdílené jednotky."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Zobrazuje stav sdílené složky pomocí indikátoru žárovky."
                       } ,{                      
                           type: "name",
                           title: "Upravit",
                           content: "Zobrazuje možnosti Upravit nebo Odstranit příslušnou sdílenou složku."
                       } ,{                      
                           type: "name",
                           title: "Procházet",
                           content: "Slouží k vyhledávání sdílených složek."
                       } ,{                      
                           type: "name",
                           title: "Povolit přístup klientům sítě pro hosty",
                           content: "Umožňuje klientům sítě pro hosty přístup ke sdíleným složkám."
                       } ,{                      
                           type: "name",
                           title: "Povolit ověřování",
                           content: "Je-li zapnuta, uživatelé mohou přistupovat ke sdíleným složkám pouze s platným uživatelským jménem a heslem."
                       } ,{                      
                           type: "name",
                           title: "Povolit možnost zápisu",
                           content: "Umožňuje uživatelům provádět změny obsahu sdílené složky."
                       } ,{                      
                           type: "name",
                           title: "Povolit sdílení médií",
                           content: "Vyberte pro povolení sdílení médií."
                       } ,{                      
                           type: "name",
                           title: "Obnovit",
                           content: "Kliknutím aktualizujete seznam sdílených složek."
                       }]
},
       PRINT_SERVER :{ 
               TITLE:"Server tiskárny",
               CONTENT: [{
                           type: "name",
                           title: "Server tiskárny",
                           content: "Přepněte na On (Zapnuto) pro povolení funkce Tiskového serveru."
                       } ,{                      
                           type: "name",
                           title: "Název tiskárny",
                           content: "Zobrazuje jméno tiskárny připojené k routeru."
                       }]
},
       TIME_MACHINE :{ 
               TITLE:"Time Machine",
               CONTENT: [{
                           type: "paragraph",
                           content: "Time Machine zálohuje všechny vaše soubory ve vašem Mac počítači na USB úložiště připojení k vašemu modem routeru."
                       } ,{                      
                           type: "name",
                           title: "Povolit",
                           content: "Zaškrtněte tento checkbox pro povolení funkce Time Machine."
                       } ,{                      
                           type: "name",
                           title: "Záložní disk",
                           content: "Zvolte umístění pro zálohy Time Machine."
                       } ,{                      
                           type: "name",
                           title: "Omezení velikosti záloh",
                           content: "Vymezte jak velké místo na disku může být použito pro zálohy Time Machine. 0 znamená žádné omezení místa."
                       } ,{                      
                           type: "name",
                           title: "Uložit",
                           content: "Klikněte sem pro uložení nastavení."
                       }]
},
       OFFLINE_DOWNLOAD :{ 
               TITLE:"Offline Download",
               CONTENT: [{
                           type: "paragraph",
                           content: "Při povolení Stahování Offline může router stahovat soubory bez nutnosti zapnutého počítače po celou dobu."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Přepněte na On (Zapnuto) pro povolení funkce Stahování offline."
                       } ,{                      
                           type: "name",
                           title: "Cesta ke složce",
                           content: "Zvolte cestu k adresáři pro ukládání nebo dočasnému uložení vašich stažených souborů.",
       children: [{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Neměňte cestu k adresáři nebo neodebírejte USB úložiště, když probíhá stahování nebo upload souborů; mohlo by dojít k závažným chybám."
                       }]
} ,{                      
                           type: "name",
                           title: "Rozvrh",
                           content: "Zaškrtněte tento checkbox pro povolení funkce rozvrhu, která vám umožňuje určit časový úsek(y) pro stahování/upload souborů."
                       } ,{                      
                           type: "name",
                           title: "Zachovat uploadování po dokončení úkolu",
                           content: "Zaškrtněte tento checkbox pro zachování uploadování dat kompletně stažených souborů ostatním."
                       } ,{                      
                           type: "name",
                           title: "Maximální počet aktivních stahování",
                           content: "Vložte hodnotu mezi 1 a 10 pro nastavení maximálního počtu aktivních stahování. Výchozí hodnota je 5."
                       }]
},
       OFFLINE_DOWNLOAD_ITEMS :{ 
               TITLE:"Stahování",
               CONTENT: [{
                           type: "note",
                           title: "Soubor",
                           content: "Zobrazuje jméno a typ stahovaného souboru."
                       } ,{                      
                           type: "note",
                           title: "Rychlost",
                           content: "Zobrazuje aktuální rychlost stahování (nebo uploadu)."
                       } ,{                      
                           type: "note",
                           title: "Dokončeno",
                           content: "Zobrazuje progres stahování."
                       } ,{                      
                           type: "note",
                           title: "Zbývající čas",
                           content: "Zobrazuje zbývající čas stahování."
                       } ,{                      
                           type: "note",
                           title: "Připojení členové",
                           content: "Zobrazuje počet připojených členů stahování."
                       } ,{                      
                           type: "note",
                           title: "Stav",
                           content: "Zobrazuje aktuální stav stahování (stahování, čekání, nasazování, přerušeno, dokončeno nebo chyba)."
                       } ,{                      
                           type: "name",
                           title: "Přidat nové stahování",
       children: [{                      
                           type: "step",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Zvolte zdroj stahování, torrent z PC, torrent z USB nebo torrent URL.",
                "3. Zvolte umístění torrentu pro BT nebo vložte URL pro FTP, HTTP a aMule.",
                "4. Klikněte na Uložit.",
                "5. Co se týče aMule, specifikujte IP adresu aMule serveru a port v možnosti Pokročilé > aMule Server."]
}]
} ,{                      
                           type: "name",
                           title: "Smazat stahování",
                           content: "Zaškrtněte checkbox odpovídající stahování, které chcete smazat a klikněte na Smazat v tabulce nahoře."
                       } ,{                      
                           type: "name",
                           title: "Přerušit stahování",
                           content: "Klikněte na checkbox odpovídající stahování, který chcete přerušit a klikněte na Přerušit v tabulce nahoře."
                       } ,{                      
                           type: "name",
                           title: "Obnovit stahování",
                           content: "Klikněte na checkbox odpovídající stahování, které chcete obnovit a klikněte na Obnovit v tabulce nahoře."
                       }]
},
       OFFLINE_DOWNLOAD_ADVANCED :{ 
               TITLE:"Pokročilé nastavení",
               CONTENT: [{
                           type: "name",
                           title: "Limity rychlosti",
                           content: "Určete maximální rychlost stahování a uploadu pro internetové připojení."
                       } ,{                      
                           type: "name",
                           title: "Maximální rychlost stahování",
                           content: "Vložte hodnotu mezi 1 a 100000 kB/s pro nastavení maximální rychlosti stahování. Výchozí hodnota je 1024."
                       } ,{                      
                           type: "name",
                           title: "Maximální rychlost uploadu",
                           content: "Vložte hodnotu mezi 1 a 100000 kB/s pro nastavení maximální rychlosti uploadu. Výchozí hodnota je 512."
                       } ,{                      
                           type: "name",
                           title: "Počet připojení",
                           content: "Určete maximální počet připojení."
                       } ,{                      
                           type: "name",
                           title: "Celkový maximální počet připojení",
                           content: "Vložte hodnotu mezi 1 a 200 pro nastavení maximálního počtu připojení. Výchozí hodnota je 100."
                       } ,{                      
                           type: "name",
                           title: "Maximální počet připojených členů na Torrent",
                           content: "Vložte hodnotu mezi 1 a 100 pro nastavení celkového maximálního počtu připojených členů na Torrent. Výchozí hodnota je 50."
                       } ,{                      
                           type: "name",
                           title: "Povolte síť DHT",
                           content: "Povolte tuto funkci pro zlepšení účinnosti nacházení členů, čímž můžete zvýšit rychlost stahování."
                       } ,{                      
                           type: "name",
                           title: "Povolte záměnu členů",
                           content: "Povolením této funkce zlepšíte účinnost komunikace mezi vaší skupinou členů, čímž můžete zvýšit rychlost stahování."
                       } ,{                      
                           type: "name",
                           title: "Povolte protokol šifrování BitTorrent",
                           content: "Povolte tuto funkci pro posílení ochrany soukromí a diskrétnosti během procesu přenosu dat."
                       } ,{                      
                           type: "name",
                           title: "Server aMule",
                           content: "Vložte IP adresu a port serveru aMule. Stahování aMule funguje pouze, když je router připojen k serveru."
                       }]
},
       PARENTAL_CONTROL :{ 
               TITLE:"Rodičovská kontrola",
               CONTENT: [{
                           type: "paragraph",
                           content: "S funkcí Rodičovské kontroly můžete blokovat nevhodné, explicitní a škodlivé stránky; omezovat přístup v určitém čase během dne (např. Facebook nebo YouTube během doby určené pro domácí úkoly)."
                       }]
},
       PARENTAL_CONTROL_DEVICES :{ 
               TITLE:"Zařízení pod rodičovskou kontrolou",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato tabulka zobrazuje informace a nastavení zařízení, která jsou aktuálně omezovány Rodičovskou kontrolou."
                       } ,{                      
                           type: "step",
                           title: "Omezení pro nové klientské zařízení",
       content: [ 
                "1. Zapněte Rodičovskou kontrolu.",
                "2. Klikněte na Přidat.",
                "3. Klikněte na Scan pro vybrání momentálně připojených zařízení ze Seznamu připojených zařízení; nebo Jméno zařízení a MAC adresu vložte manuálně pro přidání zařízení, které není připojeno.",
                "4. Klikněte na ikonu Času účinnosti pro určení časového úseku, během kterého budou omezení platná.",
                "5. Vložte stručný popis do pole Popis. Toto pole je volitelné.",
                "6. Zvolte Povolit tuto položku.",
                "7. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže chcete zakázat tuto položku, klikněte na ikonu Žárovky."
                       }]
},
       PARENTAL_CONTROL_RESTRICTION :{ 
               TITLE:"Omezení obsahu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Obsah Omezení vám umožňuje omezit přístup ke konkrétním webovým stránkám pomocí klíčových slov a jména domény. Klientská zařízení kontrolovaná Rodičovskou kontrolou mohou nebo nemohou přistupovat k těmto webovým stránkám v závislosti na metodě omezení, kterou jste zvolili."
                       } ,{                      
                           type: "step",
                           title: "Specifikovat obsah přístupu",
       content: [ 
                "1. Zapněte Obsah Omezení",
                "2. Zvolte Metodu Omezení podle těchto potřeb:",
                "A. Jestliže chcete, aby kontrolovaná zařízení měla přístup ke všem stránkám kromě několika konkrétních, zvolte Blacklist.",
                "B. Jestliže chcete, aby kontrolovaná zařízení měla přístup pouze k určitým stránkám, zvolte Whitelist.",
                "3. Klikněte na Přidat a Nové klíčové slovo pro přidání klíčového slova webové adresy (např. wikipedia) nebo jména domény na Blacklist nebo na Whitelist.",
                "4. Klikněte na Uložit."]
}]
},
       PARENTAL_CONTROL_V2 :{ 
               TITLE:"Rodičovská kontrola",
               CONTENT: [{
                           type: "paragraph",
                           content: "S uživatelskými profily, filtrem obsahu a omezením přístupu poskytuje Rodičovská kontrola každému členovi Vaší rodiny optimalizovaný a vhodný přístup k internetu."
                       } ,{                      
                           type: "step",
                           title: "Aplikovat Rodičovskou kontrolu na nové zařízení",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Vložte jméno tohoto profilu a klikněte na \"+\" pro přidání zařízení k tomuto profilu.",
                "3. Upravte si Blokovaný Obsah podle svých potřeb. Všechny webové stránky obsahující klíčová slova budou blokována.",
                "4. Jestliže chcete omezit celkový čas, po který může být tento profil online, povolte a specifikujte Časová omezení (Time Limits). Můžete také použít Čas večerky (Bed Time) pro nastavení každodenního časového úseku, během kterého zařízení spojená s tímto profilem nemohou používat internet.",
                "5. Klikněte na Uložit."]
} ,{                      
                           type: "step",
                           title: "Pro zobrazení detailní internetové historie profilu",
       content: [ 
                "1. Ve sloupci Náhled klikněte na odpovídající tlačítko Náhled.",
                "2. Jestliže chcete vidět více záznamů, klikněte na tlačítko <span class=\"ptl-ctr-help-icon history\"></span> Historie.",
                "3. Můžete blokovat nebo odblokovat webové stránky kliknutím na <span class=\"ptl-ctr-help-icon block\"></span> nebo <span class=\"ptl-ctr-help-icon unblock\"></span> tlačítko."]
} ,{                      
                           type: "step",
                           title: "Pro okamžité zakázání nebo povolení přístupu k internetu",
       content: [ 
                "Ve sloupci Přístup k internetu (Internet Access) klikněte na <span class=\"ptl-ctr-help-icon stop\"></span> pro přerušení přístupu k internetu odpovídajících zařízení profilu nebo klikněte na <span class=\"ptl-ctr-help-icon enable\"></span> pro opětovné povolení přístupu."]
}]
},
       QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "QoS (Quality of Service) pomáhá prioritizovat internetový provoz na základě potřeb. Můžete určit úroveň priorit zařízení, fyzického portu nebo aplikace v seznamu pravidel QoS."
                       } ,{                      
                           type: "note",
                           id: "qos-boost",
                           title: "Poznámka",
                           content: "Je-li povolená funkce NAT Boost, měli byste zakázat funkci QoS."
                       } ,{                      
                           type: "name",
                           title: "Šířka pásma uploadu",
                           content: "Vložte maximální šířku pásma uploadu od poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Šířka pásma stahování",
                           content: "Vložte maximální šířku pásma stahování od poskytovatele internetu."
                       }]
},
       QOS_ADV :{ 
               TITLE:"Pokročilé nastavení",
               CONTENT: [{
                           type: "name",
                           title: "Vysoká/Střední/Nízká priorita",
                           content: "Určete procentuální poměr pro vysokou/střední/nízkou prioritu provozu.",
       children: [{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Maximální hodnota (procento) všech priorit by měla být 1."
                       }]
}]
},
       QOS_RULE :{ 
               TITLE:"Seznam pravidel QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zde můžete přidat detailní pravidla QoS pro prioritizaci provozu internetu."
                       } ,{                      
                           type: "step",
                           title: "Nastavit pravidlo QoS",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Zvolte typ priority, abyste mohli přidat pravidlo QoS.",
                "V případě zařízení - Klikněte na Scan, abyste vybrali požadované zařízení nebo manuálně vložte jméno zařízení a jeho MAC adresu.",
                "V případě aplikace - Zvolte požadovanou aplikaci nebo upravte aplikaci konfigurováním jména, protokolu a cílového port (1-65535). Můžete vložit jeden nebo více portů nebo rozsah portů, oddělený čárkami (např. 21,36-105,111).",
                "V případě fyzického portu - Zvolte váš požadovaný port.",
                "3. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Můžete přetahovat pravidlo mezi různými seznamy priorit, abyste změnili jeho prioritu."
                       }]
},
       QOS_DATABASE :{ 
               TITLE:"Upgrade databáze",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zveřejníme nejnovější verzi databáze na www.tp-link.com. Můžete stahovat a updatovat databázi routeru pro rozšíření jeho podporovaných aplikací."
                       } ,{                      
                           type: "name",
                           title: "Nový databázový soubor",
                           content: "Klikněte na Procházet pro nalezení nejnovějšího databázového souboru. Vyberte jej a klikněte na Upgrade pro upgradování databáze na nejnovější verzi."
                       }]
},
       QOS_V2 :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "QoS (Kvalita služby) Vám umožňuje přiřadit prioritu internetovému přenosu určitého zařízení pro garantování rychlejšího připojení, když ho nejvíce potřebujete."
                       }]
},
       QOS_GLOBAL_SETTINGS :{ 
               TITLE:"Globální Nastavení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Šířka pásma Uploadu - Vložte maximální šířku pásma uploadu poskytovanou poskytovatelem internetu."
                       } ,{                      
                           type: "paragraph",
                           content: "Šířka pásma stahování - Vložte maximální šířku pásma stahování poskytovanou poskytovatelem internetu."
                       }]
},
       QOS_DEVICE_PRIORITY :{ 
               TITLE:"Priorita Zařízení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zvolte zařízení, kterému(ým) chcete přiřadit prioritu a stanovte, jak dlouho bude priorita trvat."
                       } ,{                      
                           type: "step",
                           title: "Přidělení priority zařízení",
       content: [ 
                "1. Najděte v seznamu zařízení, kterému chcete přiřadit prioritu, a zapněte Prioritu.",
                "2. Zvolte na jak dlouho bude priorita zařízení přidělena ve sloupci Časový limit (Timing)."]
}]
},
       SECURITY_FIREWALL :{ 
               TITLE:"Brána firewall",
               CONTENT: [{
                           type: "name",
                           title: "SPI Firewall",
                           content: "SPI (Stateful Packet Inspection/Kontrola stavu paketů) Firewall zabraňuje kybernetickým útokům a ověřuje provoz procházející routerem na základě protokolu. Ve výchozím stavu je tato funkce povolena."
                       }]
},
       SECURITY_DOS :{ 
               TITLE:"Ochrana před útoky DoS",
               CONTENT: [{
                           type: "name",
                           title: "Ochrana před útoky DoS",
                           content: "Ochrana DoS (Denial of Service) chrání LAN před DoS útoky od zaplavování sítě požadavky na server. Můžete filtrovat následující tři druhy útoků podle potřeby. Existují čtyři úrovně pro každé filtrování:",
       children: [{                      
                           type: "name",
                           title: "Vypnuto",
                           content: "Žádná ochrana."
                       } ,{                      
                           type: "name",
                           title: "Nízká",
                           content: "Nízká úroveň ochrany a malý vliv na výkon směrovače."
                       } ,{                      
                           type: "name",
                           title: "Střední",
                           content: "Střední úroveň ochrany a střední vliv na výkon směrovače."
                       } ,{                      
                           type: "name",
                           title: "Vysoká",
                           content: "Vysoká úroveň ochrany, ale znatelný vliv na výkon směrovače."
                       }]
} ,{                      
                           type: "name",
                           title: "Filtrování ICMP-FLOOD útoků",
                           content: "Povolte předcházet záplavě útoků ICMP (Internet Control Message Protocol)."
                       } ,{                      
                           type: "name",
                           title: "Filtrování UDP-FLOOD útoků",
                           content: "Povolte předcházet záplavě útoků UDP (User Datagram Protocol)."
                       } ,{                      
                           type: "name",
                           title: "Filtrování TCP-SYN-FLOOD útoků",
                           content: "Povolte předcházet záplavě útoků TCP-SYN (Transmission Control Protocol-Synchronize)."
                       } ,{                      
                           type: "name",
                           title: "Ignorovat Ping paket z port WAN",
                           content: "Zapnout ignorování ping paketů z portu WAN"
                       } ,{                      
                           type: "name",
                           title: "Zakázat Ping paket z portu LAN",
                           content: "Zapnout zákaz ping paketů z portu WAN"
                       }]
},
       SECURITY_LIST :{ 
               TITLE:"Seznam blokovaných hostitelů útoků DoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato tabulka zobrazuje IP adresu a MAC adresu blokovaného hostitele(ů)."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Řízení přístupu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Kontrola přístupů (Access Control) je používáno pro povolení nebo blokování přístupu k síti určitým klientským zařízením. Když je zařízení blokováno, není možné komunikovat s ostatními zařízeními nebo se připojit k internetu."
                       } ,{                      
                           type: "step",
                           title: "Kontrolovat přístup",
       content: [ 
                "1. Zapněte povolení Kontroly přístupů",
                "2. Jestliže chcete také kontrolovat přístupy zařízení připojených k síti pro hosty, zapněte Kontrolu zařízení pro hosty.",
                "3. Zvolte režim přístupů podle potřeb a klikněte na Uložit:",
                "A. Jestliže chcete blokovat přístup zařízení na níže uvedeném seznamu, zvolte Blacklist.",
                "B. Jestliže chcete povolit přístup pouze pro zařízení na níže uvedeném seznamu, zvolte Whitelistlist.",
                "4. V sekci Zařízení na Blacklistu/Whitelistu klikněte na Přidat. Vložte Jméno zařízení a MAC adresu zařízení. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže chcete zakázat tuto položku, klikněte na ikonu Žárovky."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Online zařízení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato tabulka zobrazuje informace o všech připojených zařízeních (včetně zařízení připojených k síti pro hosty v případě, že je Kontrola zařízení pro hosty povolena)."
                       }]
},
       IPMAC_BIND_SETTING :{ 
               TITLE:"Vazba IP a MAC adresy",
               CONTENT: [{
                           type: "paragraph",
                           content: "IP & MAC provázání (také známé jako ARP provázání) je užitečné pro kontrolování přístupů určitých zařízení v síti LAN provázáním IP a MAC adresy zařízení. Provázání IP a MAC také zabraňuje jiným zařízením používat určitou IP adresu"
                       } ,{                      
                           type: "step",
                           title: "Nastavit zařízení s provázáním IP a MAC",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Zadejte MAC adresu zařízení.",
                "3. Vložte IP adresu, kterou chcete provázat s MAC adresou nahoře.",
                "4. Vyberte Povolit.",
                "5. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
       content: [ 
                "1. Jednu IP adresu nemůžete vázat na více než jednu MAC adresu.",
                "2. Jestliže chcete zakázat tuto položku, klikněte na ikonu Žárovky."]
}]
},
       IPMAC_BIND_ARP :{ 
               TITLE:"Seznam ARP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato tabulka zobrazuje MAC adresu a IP adresu momentálně připojených zařízení."
                       }]
},
       IPV6 :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "name",
                           title: "IPv6",
                           content: "IPv6 (Internet Protocol version 6) je nejnovější verze IP (Internet Protocol) a zabývá se problémem vyčerpání adres IPv4 (Internet Protocol version 4)."
                       } ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: Dynamická IP adresa:"
                       } ,{                      
                           type: "name",
                           title: "Dynamická IP adresa:",
                           content: "Zvolte tento typ v případě, že poskytovatel internetu používá Dynamické přidělení IPv6 adresy."
                       } ,{                      
                           type: "name",
                           title: "IPv6 adresa / primární DNS / sekundární DNS",
                           content: "Tyto parametry jsou automaticky přidělovány serverem DHCPv6 poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Obnovit",
                           content: "Klikněte sem pro získání nových parametrů IPv6 ze serveru DHCPv6 poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Uvolnit",
                           content: "Klikněte sem pro uvolnění všech IPv6 adres přidělených serverem DHCPv6 poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Získat IPv6 adresu",
                           content: "Zvolte DHCPv6 pro získání trvalé IPv6 adresy nebo SLAAC pro získání IPv6 adresy generované z advertisement paketů routeru podle poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Prefix Delegation",
                           content: "Vyberte Povolit Získat Prefix Delegation od serveru DHCPv6 Vašeho ISP, nebo Zakázat určení předpony adresy ručně. Klienti v síti LAN bude generovat adresu IPv6 s touto předponou."
                       } ,{                      
                           type: "name",
                           title: "Adresa DNS",
                           content: "Zvolte Získat dynamicky od poskytovatele internetu nebo Použít následující DNS adresy. Jestliže zvolíte Použít následující DNS adresy, vložte, prosím, manuálně DNS adresu od poskytovatele internetu."
                       } ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: Statická IP adresa"
                       } ,{                      
                           type: "name",
                           title: "Statická IP adresa",
                           content: "Zvolte tento typ, jestliže poskytovatel internetu používá statické přidělování IPv6 adresy."
                       } ,{                      
                           type: "name",
                           title: "IPv6 adresa/ výchozí brána / primární DNS / sekundární DNS",
                           content: "Zadejte tyto parametry, které máte od poskytovatele internetových služeb."
                       } ,{                      
                           type: "name",
                           title: "Velikost MTU",
                           content: "Výchozí a typická velikost MTU (Maximum Transmission Unit-maximální přenosová jednotka) pro většinu ethernetových sítí je 1 500 bajtů. Není doporučeno měnit výchozí velikost MTU, pokud to nevyžaduje poskytovatel internetových služeb."
                       } ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: Tunelové propojení 6to4"
                       } ,{                      
                           type: "name",
                           title: "Tunelové propojení 6to4",
                           content: "Zvolte tento typ v případě, že poskytovatel internetu používá 6to4 nasazení pro přidělování adres."
                       } ,{                      
                           type: "name",
                           title: "IPv4 adresa / IPv4 maska podsítě / IPv4 výchozí brána / adresa tunelového propojení",
                           content: "Tyto parametry budou dynamicky generovány informacemi IPv4 WAN portu po kliknutí na tlačítko Připojit."
                       } ,{                      
                           type: "name",
                           title: "Použijte Následující DNS server",
                           content: "Zvolte pro manuální vložení primární DNS a/nebo sekundární DNS od poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Připojit",
                           content: "Klikněte pro připojení k internetu."
                       } ,{                      
                           type: "name",
                           title: "Odpojit",
                           content: "Klikněte pro odpojení od internetu."
                       } ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: PPPoE"
                       } ,{                      
                           type: "name",
                           title: "PPPoE",
                           content: "Zvolte tento typ v případě, že poskytovatel internetu používá PPPoEv6 a poskytuje uživatelské jméno a heslo."
                       } ,{                      
                           type: "name",
                           title: "Uživatelské jméno / heslo",
                           content: "Zadejte tyto parametry, které máte od poskytovatele internetových služeb."
                       } ,{                      
                           type: "name",
                           title: "IPv6 adresa",
                           content: "Tato adresa bude automaticky přidělena serverem DHCPv6 poskytovatele internetu poté, co vložíte uživatelské jméno a heslo a kliknete na Připojit."
                       } ,{                      
                           type: "name",
                           title: "Získat IPv6 adresu",
                           content: "Zvolte DHCPv6 pro získání trvalé IPv6 adresy nebo SLAAC pro získání IPv6 adresy generované z advertisement paketů routeru, nebo Určené poskytovatelem internetu pro manuální vložení IPv6 adresy podle poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Prefix Delegation",
                           content: "Vyberte Povolit Získat Prefix Delegation od serveru DHCPv6 Vašeho ISP, nebo Zakázat určení předpony adresy ručně. Klienti v síti LAN bude generovat adresu IPv6 s touto předponou."
                       } ,{                      
                           type: "name",
                           title: "Adresa DNS",
                           content: "Zvolte Získat dynamicky od poskytovatele internetu nebo Použít následující DNS adresy. Jestliže zvolíte Použít následující DNS adresy, vložte, prosím, manuálně DNS adresu od poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Připojit",
                           content: "Klikněte pro připojení k internetu."
                       } ,{                      
                           type: "name",
                           title: "Odpojit",
                           content: "Klikněte pro odpojení od internetu."
                       } ,{                      
                           type: "title",
                            title: "Typ připojení k Internetu: Pass Through (Most)"
                       } ,{                      
                           type: "paragraph",
                           content: "Zvolte tento typ, jestliže váš poskytovatel internetu používá rozmístění sítě Pass-Through (Most). Žádná konfigurace není vyžadována pro tento typ připojení."
                       }]
},
       IPV6_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Kromě připojení k internetu typu Pass-Through (Most) všechny typy připojení k internetu vyžadují konfiguraci IPv6."
                       } ,{                      
                           type: "name",
                           title: "Přiřazený typ",
                           content: "Zvolte vhodný typ podle poskytovatele internetu.",
       children: [{                      
                           type: "name",
                           title: "DHCPv6",
                           content: "Chcete-li automaticky přidělovat IP adresy klientům v síti LAN.",
       children: [{                      
                           type: "name",
                           title: "Prefix adresy",
                           content: "Vložte prefix adresy podle poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Čas uvolnění",
                           content: "Platný čas přidělené IP adresy. Buď zachovejte výchozích 86400 sekund nebo jej změňte, jestli je to vyžadováno poskytovatelem internetu."
                       } ,{                      
                           type: "name",
                           title: "Adresa",
                           content: "IP adresa automaticky přidělená serverem DHCPv6 poskytovatele internetu."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC+ Bezstavové DHCP",
       children: [{                      
                           type: "name",
                           title: "Prefix adresy",
                           content: "Vložte prefix adresy podle poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Adresa",
                           content: "IP adresa automaticky přidělená od ISP."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC+RDNSS",
       children: [{                      
                           type: "name",
                           title: "Prefix adresy",
                           content: "Vložte prefix adresy podle poskytovatele internetu."
                       } ,{                      
                           type: "name",
                           title: "Adresa",
                           content: "IP adresa automaticky přidělená od ISP."
                       }]
},{
	type: "name",
	id:"ipv6_lan_assigned_type_nd_proxy_name",
	title: "ND Proxy",
	content: " Funkce poskytující proxy pro klienty LAN na základě Neighbor Discovery protokolu."
}]
}]
},
       IPV6_MAC_CLONE :{ 
               TITLE:"Klonování MAC adresy",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zvolte vhodnou metodu klonování MAC podle toho, jak potřebujete."
                       } ,{                      
                           type: "name",
                           title: "Neklonovat MAC adresu",
                           content: "NEMĚŇTE výchozí MAC adresu směrovače, v případě, že poskytovatel internetových služeb neváže přidělenou IP adresu na MAC adresu."
                       } ,{                      
                           type: "name",
                           title: "Klonovat aktuální MAC adresu počítače",
                           content: "Zkopírujete aktuální MAC adresu počítače, který je připojen ke směrovači, v případě, že poskytovatel internetových služeb váže přidělenou IP adresu na MAC adresu tohoto počítače."
                       } ,{                      
                           type: "name",
                           title: "Použít vlastní MAC adresu",
                           content: "Zadejte MAC adresu manuálně, v případě, že poskytovatel internetových služeb váže přidělenou IP adresu na tuto konkrétní MAC adresu."
                       }]
},
       TIME_SETTING :{ 
               TITLE:"Nastavení času",
               CONTENT: [{
                           type: "paragraph",
                           content: "Nastavení času vám umožňuje nakonfigurovat systémový čas routeru. Jakmile bude změněn, systémový čas bude aplikován do časově závislých funkcí a konfigurací, jako je Rodičovská kontrola."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Můžete zapnout funkce 24-hodinového času před konfigurací, která bude aplikována do funkcí založených na systémovém čase a konfigurací."
                       } ,{                      
                           type: "title",
                            title: "Systémový čas"
                       } ,{                      
                           type: "step",
                           title: "Získat čas z internetu",
       content: [ 
                "Je zvoleno ve výchozím stavu, Získat z internetu vám umožňuje získat systémový čas z internetu.",
                "1. Zvolte Získat z internetu.",
                "2. Zvolte lokální Časové pásmo z rozbalovacího menu.",
                "3. Do pole NTP Server I vložte IP adresu nebo jméno domény požadovaného NTP serveru.",
                "4. V poli NTP Server II zadejte IP adresu nebo název domény druhého NTP serveru. (Nepovinné)",
                "5. Klikněte na Získat.",
                "6. Klikněte na Uložit."]
} ,{                      
                           type: "step",
                           title: "Získat čas z PC",
       content: [ 
                "Tato funkce vám umožňuje získat systémový čas z PC. Zkontrolujte, prosím, čas PC před konfigurací.",
                "Zvolte Získat z PC a klikněte na Uložit."]
} ,{                      
                           type: "step",
                           title: "Manuálně nastavit čas",
       content: [ 
                "Jestliže zařízení nemůže automaticky získat čas z internetu nebo PC, můžete manuálně nakonfigurovat systémový čas.",
                "1. Zvolte Manuálně.",
                "2. Vložte aktuální Datum a Čas.",
                "3. Klikněte na Uložit."]
}]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Letní čas",
                           content: "Tato funkce může automaticky synchronizovat systémový čas s letním časem."
                       } ,{                      
                           type: "step",
                           title: "Nastavení letního času",
       content: [ 
                "1. Vyberte Povolit letní čas.",
                "2. Určete časový úsek letního času v lokálním časovém pásmu.",
                "3. Klikněte na Uložit."]
}]
},
       DIGNOSTIC :{ 
               TITLE:"Diagnostika",
               CONTENT: [{
                           type: "paragraph",
                           content: "Router poskytuje nástroje Ping a Traceroute, aby vám pomohl nalézat potíže v síti."
                       } ,{                      
                           type: "title",
                            title: "Ping & Traceroute"
                       } ,{                      
                           type: "paragraph",
                           content: "Nástroj Ping odesílá pakety na cílovou IP adresu nebo jméno domény a zaznamenává výsledky, jako jsou počet paketů odeslaných a přijatých a doba od odeslání k přijetí."
                       } ,{                      
                           type: "paragraph",
                           content: "Nástroj Traceroute odesílá pakety na cílovou IP adresu nebo jméno domény a zobrazuje počet skoků a dobu dosažení cíle."
                       } ,{                      
                           type: "paragraph",
                           content: "Můžete použít Ping nebo Traceroute pro lokální zařízení IP adresou nebo jménem domény, jako jsou tp-link.com, yahoo.com, atd."
                       } ,{                      
                           type: "step",
                           title: "Diagnostika pomocí nástroje Ping",
       content: [ 
                "1. Zvolte Ping jako Nástroj diagnostiky.",
                "2. Vložte cílovou IP adresu nebo Jméno domény.",
                "3. Klikněte na ikonu Šipky pro otevření Pokročilého menu a určete Počet Pingů a Velikost paketu Ping. (Volitelné)",
                "4. Klikněte na Start."]
} ,{                      
                           type: "step",
                           title: "Diagnostika pomocí nástroje Traceroute",
       content: [ 
                "1. Zvolte nástroj Traceroute jako Nástroj diagnostiky",
                "2. Vložte cílovou IP adresu nebo Jméno domény.",
                "3. Klikněte na ikonu Šipky pro otevření Pokročilého menu a určete počet skoků (které by měly být splněny) v poli Traceroute Max TTL (Time to Live). Výchozí hodnota je 20. (Volitelné)",
                "4. Klikněte na Start."]
}]
},
       PORT_MIRROR :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                            title: "Zrcadlení portů"
                       } ,{                      
                           type: "paragraph",
                           content: "Port Mirroring (zrcadlení portů) odkazuje na proces přeposílání kopií paketů ze zrcadleného portu do zrcadlícího portu. Obvykle je zrcadlící port připojen k zařízení datové diagnostiky, které je používáno pro analýzu zrcadlených paketů a monitorování a odhalování potíží v síti."
                       } ,{                      
                           type: "step",
                           title: "Přeposlat kopie paketů určeným portům",
       content: [ 
                "1. Povolte Zrcadlení portů (port mirroring)",
                "2. Zvolte požadované porty jako zrcadlené porty.",
                "3. Zvolte požadované porty jako zrcadlící porty.",
                "4. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Port nemůže být nastaven jako zrcadlený port a zrcadlící současně."
                       }]
},
       FIRMWARE :{ 
               TITLE:"Upgrade firmwaru",
               CONTENT: [{
                           type: "paragraph",
                           content: "Upgrade firmwaru aktualizuje firmware routeru novými funkcemi nebo opravami chyb. Doporučujeme upgradovat router nejnovějším souborem firmwaru pro nejlepší výkon."
                       } ,{                      
                           type: "step",
                           title: "Povšimnutí následujícího vám pomůže vyhnout se chybě při upgradu:",
       content: [ 
                "Před aktualizací",
                "1. Ujistěte se, že máte stabilní připojení vašeho routeru k počítači. NEDOPORUČUJE se aktualizace firmwaru bezdrátově.",
                "2. Ujistěte se, že jste odebrali všechna USB zařízení připojená k vašemu routeru.",
                "3. Nezapomeňte zálohovat konfigurační soubor routeru.",
                "Během aktualizace",
                "Ponechte router PŘIPOJENÝ K NAPÁJENÍ, dokud není aktualizace dokončena."]
}]
},
       FIRMWARE_UPGRADE_ONLINE :{ 
               TITLE:"Upgradovat firmware online",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Klikněte na tlačítko Upgrade (Aktualizovat) a po zobrazení výzvy potvrdťe. Router automaticky stáhne a aktualizuje na nejnovější firmware. Můžete také kliknout na Zkontrolovat aktualizace pro kontrolu dostupnosti nejnovější verze firmwaru."]
}]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"To upgrade the firmware manually",
               CONTENT: [{
                           type: "step",
       content: [ 
                "1. Klikněte na Podporu ve spodu stránky a stáhněte nejnovější firmware do svého počítače. Ujistěte se, prosím, že soubor firmwaru, který se chystáte stáhnout se shoduje s verzí hardwaru routeru, jak je vyznačeno na stránce.",
                "2. Klikněte na Procházet a vyberte stažený soubor firmwaru.",
                "3. Klikněte na Aktualizovat."]
} ,{                      
                           type: "paragraph",
       content: [ 
                "Aktualizace firmwaru trvá několik minut. Router se po aktualizaci firmwaru automaticky restartuje."]
}]
},
       BACKUP :{ 
               TITLE:"Záloha a obnova",
               CONTENT: [{
                           type: "paragraph",
                           content: "Funkce Zálohy a Obnovy vám umožňuje zálohovat momentální konfiguraci routeru pro zpětné obnovení nebo můžete jednoduše vrátit router do výchozího nastavení."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Nevypínejte, prosím, router během procesu zálohování nebo obnovy."
                       } ,{                      
                           type: "title",
                           title: "Záloha",
                           content: "Důrazně doporučujeme zálohovat současnou konfiguraci. V případě obnovy je nutné vrátit router do jeho předešlého stavu."
                       } ,{                      
                           type: "step",
                           title: "Zálohovat současnou konfiguraci",
       content: [ 
                "1. Klikněte na Zálohovat.",
                "2. Počkejte než router zálohuje současnou konfiguraci."]
}]
},
       RESTORE :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Obnovení",
                           content: "Můžete vrátit nastavení routeru do předchozího stavu pomocí souboru zálohy."
                       } ,{                      
                           type: "step",
                           title: "Obnovení ze zálohy",
       content: [ 
                "1. Klikněte na tlačítko Procházet.",
                "2. Vyhledejte a vyberte soubor se zálohou.",
                "3. Klikněte na tlačítko Obnovit."]
}]
},
       FACTORY :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Obnova do výchozího nastavení z výroby",
       content: [ 
                "V případě vrácení routeru do původního výrobního nastavení ztratíte veškerá nastavení a vrátíte se k původním hodnotám. Například všechny bezdrátové připojení, rodičovské kontroly a informace sítě budou vymazány.",
                "Po obnovení výrobního nastavení musíte nastavit nové heslo pro přístup ke stránce webové správy routeru."]
}]
},
       REBOOT :{ 
               TITLE:"Plán restartování",
               CONTENT: [{
                           type: "paragraph",
                           content: "Funkce Plán restartování vyčistí paměť cache pro zlepšení provozního výkonu routeru. Můžete restartovat router manuálně nebo nastavit pravidelný restart."
                       } ,{                      
                           type: "step",
                           title: "Restartovat manuálně",
       content: [ 
                "Klikněte na Restart a vyčkejte pár minut na restartování routeru."]
} ,{                      
                           type: "step",
                           title: "Nastavení času restartu",
       content: [ 
                "1. Povolit Plán restartu",
                "2. Nastavit kdy a jak často se router restartuje specifikováním parametrů v polích Reboot Time (Čas restartu) a Repeat (Opakování).",
                "3. Klikněte na Uložit."]
}]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Správa",
               CONTENT: [{
                           type: "paragraph",
                           content: "Administrace vám umožňuje spravovat přihlašovací heslo a přístupová práva klientů připojených k routeru."
                       } ,{                      
                           type: "name",
                           title: "Správa účtů",
                           content: "Tato funkce vám umožňuje změnit heslo.",
       children: [{                      
                           type: "step",
                           title: "Změnit heslo",
       content: [ 
                "1. Vložte staré heslo.",
                "2. Vložte nové heslo.",
                "3. Potvrďte nové heslo.",
                "4. Klikněte na Uložit."]
}]
}]
},
       ADMIN_RECOVERY :{ 
               TITLE:"Obnovení hesla",
               CONTENT: [{
                           type: "name",
                           title: "Obnovení původního hesla",
                           content: "Default Password Recovery (Obnovení Výchozího Hesla) vám umožňuje vrátit se k původnímu heslu bez nutnosti přenastavení routeru k jeho původnímu nastavení.",
       children: [{                      
                           type: "step",
                           title: "Změnit heslo",
       content: [ 
                "1. Povolte funkci Obnova výchozího hesla.",
                "2. Do pole Od vložte platnou e-mailovou adresu použitou pro odeslání ověřovacího kódu pro obnovu přihlašovacích informací.",
                "3. Do pole Komu vložte platnou e-mailovou adresu použitou pro příjem ověřovacího kódu.",
                "4. Vložte SMTP server pro odchozí e-maily (Od).",
                "5. Jestliže e-mail v poli Od vyžaduje šifrování, musíte zaškrtnout checkbox Povolit Ověření a vložit Uživatelské jméno (e-mailovou adresu) a heslo.",
                "6. Klikněte na Uložit."]
}]
}]
},
       ADMIN_LOCAL :{ 
               TITLE:"Lokální správa",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato funkce umožňuje místním zařízením přistupovat a spravovat router. "
                       } ,{                      
                           type: "name",
                           id: "local_management_https",
                           title: "Místní správa prostřednictvím HTTPS",
                           content: "Povolte Místní Správu prostřednictvím HTTPS, jestliže chcete přistupovat k routeru pomocí HTTPS i HTTP, nebo ji ponechte zakázanou, jestliže k routeru chcete přistupovat pouze pomocí HTTP."
                       } ,{                      
                           type: "name",
                           title: "Přístup pro všechna zařízení připojená k místní síti (LAN)",
                           content: "Zapněte tuto funkci, pokud chcete povolit lokální správu ze všech zařízení připojených k místní síti (LAN). Pokud bude vypnutá, povolená bude správa jen z konkrétních zařízení."
                       } ,{                      
                           type: "name",
                           title: "MAC adresa",
                           content: "Zobrazuje MAC adresu zařízení s povoleným přístupem."
                       } ,{                      
                           type: "name",
                           title: "Popis",
                           content: "Zobrazuje popis zařízení s povoleným přístupem."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Zobrazuje aktuální stav zařízení s povoleným přístupem (zapnuto nebo vypnuto)."
                       } ,{                      
                           type: "name",
                           title: "Upravit",
                           content: "Zobrazuje možnosti Upravit a Odstranit příslušné zařízení v seznamu."
                       } ,{                      
                           type: "step",
                           title: "Přidání klientského zařízení do seznamu",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Kliknutím na \"Zobrazit existující zařízení\" vyberte existující zařízení nebo zadejte MAC adresu zařízení do pole MAC adresa.",
                "3. Zadejte Popis tohoto zařízení.",
                "4. Vyberte Povolit.",
                "5. Klikněte na OK."]
} ,{                      
                           type: "step",
                           title: "Úprava nebo odstranění zařízení v seznamu",
                           content: "V tabulce klikněte na ikonu Upravit nebo na ikonu Koše u zařízení, které chcete upravit nebo odstranit."
                       } ,{                      
                           type: "step",
                           title: "Odstranění více zařízení",
                           content: "Vyberte všechna zařízení, která chcete odstranit a klikněte na Odstranit."
                       }]
},
       ADMIN_REMOTE_WITHOUT_HTTPS :{ 
               TITLE:"Vzdálená správa",
               CONTENT: [{
                           type: "name",
                           title: "Vzdálená správa",
                           content: "Funkce Vzdálené správy umožňuje vzdáleným zařízením přistupovat a řídit router.",
       children: [{                      
                           type: "step",
                           title: "Zakázat všem vzdáleným zařízením řídit router",
                           content: "Zvolte Zakázat vzdálenou správu a klikněte na Uložit."
                       } ,{                      
                           type: "step",
                           title: "Povolit všem vzdáleným zařízením řídit router",
       content: [ 
                "1. Zvolte Povolit vzdálenou správu pro všechny zařízení.",
                "2. Vložte Port webové správy (1024-65535 nebo 80), přes který budou vzdálená zařízení přistupovat k routeru.",
                "3. Klikněte na Uložit."]
} ,{                      
                           type: "step",
                           title: "Povolit určitým vzdáleným zařízením řídit router",
       content: [ 
                "1. Zvolte Povolit vzdálenou správu pro určitá zařízení.",
                "2. Vložte Port webové správy (1024-65535 nebo 80), přes který budou vzdálená zařízení přistupovat k routeru.",
                "3. Vložte IP adresu vzdálených zařízení pro vzdálenou správu routeru.",
                "4. Klikněte na Uložit."]
}]
}]
},
       ADMIN_REMOTE :{ 
               TITLE:"Vzdálená správa",
               CONTENT: [{
                           type: "paragraph",
                           content: "Funkce Vzdálená správa umožňuje vzdálený přístup a konfiguraci směrovače z Internetu."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step_title",
                           content: "Nastavit Vzdálenou Správu"
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step1",
                           content: "1. Označte zaškrtávací pole pro povolení funkce Vzdálená Správa."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step2",
                           content: "2. Ponechte porty HTTPS a HTTP ve výchozím nastavení."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step3",
                           content: "3. Vyberte, které vzdálené zařízení bude mít vzdálený přístup k routeru:",
       children: [{                      
                           type: "name",
                           title: "Všech zařízení",
                           content: "Všechna zařízení mají přístup k routeru."
                       } ,{                      
                           type: "name",
                           title: "Určitá zařízení",
                           content: "Vložte IP adresu vzdáleného zařízení, které bude mít přístup k routeru."
                       }]
} ,{                      
                           type: "paragraph",
                           id: "admin_remote_step4",
                           content: "4. Klikněte na Uložit."
                       } ,{                      
                           type: "paragraph",
                           content: "Nyní můžete spravovat vzdáleně router prostřednictvím adresy zobrazené pod označením Webová adresa správy."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže se objeví varování, když vzdáleně navštívíte výše zmíněnou adresu, klikněte na Důvěryhodné (nebo podobnou možnost) a pokračujte."
                       }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Jakmile je Noční režim povolen, kontrolky LED budou vypnuty během určeného časové úseku bez ovlivnění výkonu routeru."
                       } ,{                      
                           type: "step",
                           title: "Povolit noční režim",
       content: [ 
                "1. Zvolte Povolit Noční režim",
                "2. Určete časový úsek, kdy budou LED kontrolky vypnuty.",
                "3. Klikněte na Uložit."]
}]
},
       SYSTEM_LOG :{ 
               TITLE:"Systémový protokol",
               CONTENT: [{
                           type: "paragraph",
                           content: "Systémový záznam zobrazuje nejposlednější činnosti routeru. Tabulka se skládá z typu, úrovně a obsahu záznamu systémových záznamů, které mohou být filtrovány. Můžete také uložit systémové záznamy na lokální počítač nebo je odeslat na e-mail."
                       } ,{                      
                           type: "step",
                           title: "Uložit systémové záznamy na lokání počítač",
       content: [ 
                "1. Nastavte typ a minimální úroveň ve filtru pro zobrazení požadovaných systémových záznamů. Seznam úrovní je sestupné řazení s nejnižší úrovní na konci. ",
                "2. Klikněte na Uložit záznam pro uložení souboru systémových záznamů na lokální počítač."]
} ,{                      
                           type: "step",
                           title: "Přijmout systémové záznamy e-mailem",
       content: [ 
                "1. Nastavte typ a úroveň ve filtru pro zobrazení požadovaných systémových záznamů. Seznam úrovní je sestupné řazení s nejnižší úrovní na konci. ",
                "2. Klikněte na Nastavení e-mailu.",
                "3. Do pole Odesílatel vložte platnou e-mailovou adresu, která bude použita jako odchozí e-mail.",
                "4. Do pole Příjemce vložte platnou e-mailovou adresu, která bude použita jako příchozí e-mail.",
                "5. Vložte adresu SMTP serveru odchozího e-mailu (Odesílatel).",
                "Poznámka: Jestliže odchozí e-mail (SMTP server) vyžaduje ověření, zaškrtněte checkbox Povolit ověření a vložte Uživatelské jméno (e-mailovou adresu) a Heslo.",
                "6. Jestliže chcete pravidelně přijímat systémové záznamy e-mailem, zaškrtněte checkbox Povolit automatický e-mail a nastavte konkrétní čas (ve 24-hodinovém formátu) nebo časový interval.",
                "Jestliže chcete ihned obdržet aktuální systémové záznamy, klikněte na Odeslat záznam nyní.",
                "7. Klikněte na Uložit."]
}]
},
       TRAFFIC_STATISTIC :{ 
               TITLE:"Monitor provozu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje využití provozu zařízení v posledních 10 minutách nebo všech zařízení v posledních 10 minutách/24 hodinách/7 dnech."
                       }]
},
       TRAFFIC_STATISTIC_LIST :{ 
               TITLE:"Seznam monitoru provozu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Seznam seskupen typem připojení zařízení: drátový nebo bezdrátový."
                       }]
},
       SYSTEM_PARA_WIRELESS :{ 
               TITLE:"Systémový parametr",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wifi_title",
                           title: "Bezdrátová síť 2,4 GHz / 5 GHz",
                           content: "Tato sekce vám umožňuje nakonfigurovat parametry provozních přenosových pravidel v bezdrátových sítích. Doporučujeme zachovat výchozí nastavení, jestliže si nejste ve vašem případě jistí správnou volbou."
                       } ,{                      
                           type: "name",
                           title: "Beacon Interval (Interval výstražných signálů)",
                           content: "Zadáním hodnoty mezi 40 a 1000 v milisekundách určíte interval beacon paketů, které jsou vysílány směrovačem z důvodu synchronizace bezdrátové sítě. Výchozí hodnota je 100 milisekund."
                       } ,{                      
                           type: "name",
                           title: "RTS Threshold (Práh RTS)",
                           content: "Zadáním hodnoty mezi 1 a 2346 určíte velikost paketu přenosu dat přes směrovač. Ve výchozím nastavení hodnota Threshold RTS (Request to Send)-(Požadavek na odeslání) je 2346. Pokud je velikost paketu větší než nastavená hodnota threshold, směrovač odešle určité přijímací stanici požadavek na odeslání rámců a určí odeslání datového rámce, v opačném případě bude paket odeslán okamžitě."
                       } ,{                      
                           type: "name",
                           title: "DTIM Interval",
                           content: "Tato hodnota určuje interval DTIM (Delivery Traffic Indication Message). Vložte hodnotu mezi 1 a 15 intervaly. Výchozí interval je 1, což označuje, že DTIM interval je stejný jako Beacon Interval."
                       } ,{                      
                           type: "name",
                           title: "Obnovovací interval skupinového klíče",
                           content: "Zadejte počet sekund (minimum 30) k ovládání časového intervalu pro automatickou obnovu šifrovacího klíče. Výchozí hodnota 0 znamená žádnou obnovu klíče."
                       } ,{                      
                           type: "name",
                           title: "Funkce WMM",
                           content: "Funkce WMM garantuje přednostní přenos paketů se zprávami vysoké priority. Ve výchozím nastavení je zapnuta (doporučeno)."
                       } ,{                      
                           type: "name",
                           title: "Funkce Short GI",
                           content: "Tato funkce je ve výchozím stavu povolena a je doporučena pro zvýšení kapacity paketů dobou GI (Guard Interval)."
                       } ,{                      
                           type: "name",
                           title: "Funkce AP Isolation",
                           content: "Jestliže chcete omezit vzájemné ovlivňování všech bezdrátových zařízení připojených k síti, ale zachovat jejich přístup k internetu, zaškrtněte checkbox Povolit AP izolaci."
                       },{
							             type: "name",
							             title: "USB 3.0 Redukce interferenčního rušení",
							             content: "Klikněte na Povolit pro snížení USB 3.0 interferenčního rušení."
					   }]
},
       SYSTEM_PARA_WDS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wds_title",
                            title: "2,4GHz / 5GHz WDS"
                       } ,{                      
                           type: "step",
                           title: "Povolit WDS",
                           content: "Funkce přemostění WDS (Wireless Distribution System) vám umožňuje rozšířit pokrytí bezdrátové sítě přemostěním AP (access point) v bezdrátové síti WLAN (Lokální síť)."
                       } ,{                      
                           type: "step",
       content: [ 
                "1. Zvolte povolit fuknci WDS Přemostění.",
                "2. Přemostit síť funkcí Scan: klikněte na Scan, zobrazte všechny dostupné sítě a zvolte síť, kterou chcete přemostit. SSID (jméno sítě), MAC adresa a zabezpečení budou automaticky vyplněny.",
                "Nebo přemostit síť manuálně: vložte SSID (jméno sítě), MAC adresu a režim WDS sítě, kterou chcete přemostit. Zvolte typ zabezpečení a vložte související parametry, které by měly být stejné jako síť, která bude přemostěna.",
                "3. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže si nejste jistí režimem WDS, ponechte výchozí volbu Automaticky."
                       }]
},
       SYSTEM_PARA_WPS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "WPS",
                           content: "WPS (Nastavení zabezpečení Wi-Fi) vám poskytuje snadněji připojit zařízení s povoleným WPS k routeru stisknutím tlačítka WPS. Zkontrolujte, jestli je povolena funkce WPS a klikněte na Uložit."
                       }]
},
       SYSTEM_PARA_NAT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "NAT",
                           content: "Tato funkce je ve výchozím stavu povolena. Doporučujeme ponechat výchozí nastavení. Jestliže ji zakážete, možná dojde ke ztrátě přístupu k internetu."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Pokud je NAT vypnuto, změna konfigurace v přesměrování portů NAT se neprojeví."
                       } ,{                      
                           type: "name",
                           id: "sys_para_nat_boost",
                           title: "NAT Boost",
                           content: "Zaškrtněte checkbox Povolit NAT Boost a klikněte na Uložit pro zajištění, aby měl router nejlepší propustnost."
                       } ,{                      
                           type: "note",
                           id: "sys_para_nat_boost_note",
                           title: "Poznámka",
                           content: "Pokud je aktivní funkce QoS nebo Traffic Statistics, nelze NAT Boost povolit."
                       }]
},
       SYSTEM_PARA_DOS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Nastavení ochrany DOS",
                           content: "Ochrana DOS chrání router před útoky ICMP-FLOOD, UDP-FLOOD a TCP-FLOOD."
                       } ,{                      
                           type: "name",
                           title: "Úroveň paketů ICMP-FLOOD",
                           content: "Vložte hodnotu mezi 5 a 7200 pro spuštění ochrany ICMP-FLOOD ihned, jakmile počet paketů ICMP přesáhne přednastavenou prahovou hodnotu."
                       } ,{                      
                           type: "name",
                           title: "Úroveň paketů UDP-FLOOD",
                           content: "Vložte hodnotu mezi 5 a 7200 UDP paketů pro spuštění ochrany UDP-FLOOD ihned, jakmile počet paketů UDP přesáhne přednastavenou prahovou hodnotu."
                       } ,{                      
                           type: "name",
                           title: "Úroveň paketů TCP-FLOOD",
                           content: "Vložte hodnotu mezi 5 a 7200 TCP-SYN paketů pro spuštění ochrany TCP-SYN ihned, jakmile počet paketů TCP přesáhne přednastavenou prahovou hodnotu."
                       }]
},
       SYSTEM_PARA_DUPLEX :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Duplex",
                           content: "Zvolte duplexní typ ze seznamu rozbalovacího seznamu a klikněte na Uložit."
                       }]
},
       SYSTEM_PARA_LED :{ 
               TITLE:"LED",
               CONTENT: [{
                           type: "name",
                           title: "Povolit",
                           content: "Zaškrtněte toto pole, pokud chcete vypnout kontrolku LED během Nočního režimu, aniž by byl ovlivněn výkon směrovače."
                       } ,{                      
                           type: "name",
                           title: "Doba nočního režimu",
                           content: "Zadejte časové období, během které se uplatní Noční režim."
                       } ,{                      
                           type: "paragraph",
                           content: "Kliknutím na Uložit uložíte veškerá nastavení."
                       }]
},
       OPEN_VPN :{ 
               TITLE:"OpenVPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "S OpenVPN můžete využít internet pro zabezpečený přístup k vaší síti, když nejste doma. Pro využití služby VPN musíte nakonfigurovat Dynamickou DNS (doporučeno) nebo přidělit statickou IP adresu WAN portu routeru. Váš systémový čas by měl být synchronizován s internetem."
                       } ,{                      
                           type: "name",
                           title: "Typ služby",
                           content: "Vyberte komunikační protokol pro server OpenVPN: UDP nebo TCP."
                       } ,{                      
                           type: "name",
                           title: "Port služby",
                           content: "Vložte číslo komunikačního portu mezi 1024 a 65535. Výchozí hodnota a běžně používaný port je 1194."
                       } ,{                      
                           type: "name",
                           title: "Maska/Podsíť VPN",
                           content: "Zadejte rozsah adres IP, které je možné zapůjčit klientům serveru OpenVPN."
                       } ,{                      
                           type: "name",
                           title: "Klientský přístup",
                           content: "Zvolte typ přístupu pro vašeho OpenVPN klienta.",
       children: [{                      
                           type: "name",
                           title: "Pouze domácí síť",
                           content: "Klienti mohou přistupovat pouze k domácí síti. Výchozí cesta klienta nebude měněna."
                       } ,{                      
                           type: "name",
                           title: "Internet a domácí síť",
                           content: "Klienti mohou přistupovat k domácí síti a internetovým stránkám nebo službám s geografickým omezením, když jste v zahraničí. Cesta klienta bude změněna."
                       }]
}]
},
       OPEN_VPN_CERTIFICATE :{ 
               TITLE:"Certifikát",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Použijte certifikát pro informace o připojení a identitu připojení VPN pro vzdálený počítač.",
                "Kliknutím vygenerujete nový certifikát."]
}]
},
       OPEN_VPN_CONF :{ 
               TITLE:"Soubor s konfigurací",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Vzdálení klienti budou používat konfigurační soubor pro přístup k vašemu routeru.",
                "Kliknutím na toto tlačítko uložíte soubor konfigurace OpenVPN, který se použije pro přidání nového připojení VPN."]
}]
},
       OPEN_VPN_GUIDE :{ 
               TITLE:"Průvodce instalací klienta VPN",
               CONTENT: [{
                           type: "step",
                           title: "Připojit klientská zařízení k OpenVPN serveru:",
       content: [{                      
                           type: "paragraph",
                           content: "Před konfigurací serveru OpenVPN, prosím, nakonfigurujte službu Dynamickou DNS (doporučeno) nebo přidělte statickou adresu portu WAN. Ujistěte se, že nastavení NAT externího portu není servisní port, a že systémový čas je synchronizován s internetem."
                       },
                "1. Zvolte Povolit server VPN.",
                "2. Nakonfigurujte parametry serveru OpenVPN (Typ služby, Port služby, Přístup klienta a VPN podsíť/Maska sítě) a klikněte na Uložit.",
                "3. Klikněte a Exportovat pro uložení souboru konfigurace.",
                "4. Na klientských zařízeních stáhněte a nainstalujte klientskou utilitu OpenVPN z <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a>",
                "Oficiálně podporované platformy zahrnují Windows, Mac OSX a Linux.",
                "5. Spusťte klientskou utilitu OpenVPN a přidejte nové VPN připojení použitím uloženého souboru konfigurace pro připojení klientského zařízení k VPN serveru."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Chcete-li se dozvědět více klientech OpenVPN, navštivte stránku <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
                       }]
},
       PPTP_VPN :{ 
               TITLE:"PPTP VPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "S PPTP VPN můžete používat internet pro snadný a rychlý přístup k vaší síti, když nejste doma. To může být zakázáno vašim poskytovatelem internetu. Pro využívání služby VPN musíte nakonfigurovat službu Dynamické DNS (doporučeno) nebo přidělte statickou IP adresu WAN portu routeru. Váš systémový čas by měl být synchronizován s internetem."
                       } ,{                      
                           type: "name",
                           title: "Adresa IP klienta",
                           content: "Zadejte rozsah adres IP (až pro 10 klientů), které je možné zapůjčit klientům serveru PPTP VPN."
                       } ,{                      
                           type: "name",
                           title: "Uživatelské jméno a heslo",
                           content: "Zadejte uživatelské jméno a heslo pro ověření klientů k serveru PPTP VPN."
                       }]
},
       PPTP_VPN_GUIDE :{ 
               TITLE:"Průvodce instalací klienta VPN",
               CONTENT: [{
                           type: "step",
                           title: "Připojit klientská zařízení k PPTP VPN serveru:",
       content: [{                      
                           type: "paragraph",
                           content: "Před konfigurací serveru PPTP VPN, prosím, nakonfigurujte službu Dynamickou DNS (doporučeno) nebo přidělte statickou adresu portu WAN. Ujistěte se, že nastavení NAT externího portu není 1723, a že systémový čas je synchronizován s internetem."
                       },
                "1. Zvolte Povolit server VPN.",
                "2. Nakonfigurujte parametry serveru PPTP VPN a klikněte na Uložit.",
                "3. Na klientských zařízeních vytvořte připojení PPTP VPN. Oficiálně podporované platformy zahrnují Windows, Mac OSX, Linux, iOS a Android.",
                "4. Spusťte program PPTP VPN, přidejte nové připojení a vložte jméno domény registrované služby DDNS nebo statické IP adresy, která je přidělena portu WAN pro připojení klientského zařízení k serveru PPTP VPN."]
}]
},
       VPN_CONNNECTION :{ 
               TITLE:"Připojení VPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato stránka zobrazí klienty, kteří jsou aktuálně připojeni k serverům OpenVPN a PPTP VPN hostovaným na vašem směrovači."
                       }]
},
       BASIC_NETWORK :{ 
               TITLE:"Mapa sítě",
               CONTENT: [{
                           type: "paragraph",
                           content: "Na mapě sítě můžete zobrazit aktuální stav připojení sítě a informace o bezdrátovém připojení routeru a informace o připojených zařízeních."
                       }]
},
       BASIC_NETWORK_INTEREST :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o internetu."
                       }]
},
       BASIC_NETWORK_ROUTER :{ 
               TITLE:"Směrovač",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje aktuální síťové informace o bezdrátových síti a portech LAN."
                       }]
},
       BASIC_NETWORK_CLIENTS :{ 
               TITLE:"Klienti kabelové/bezdrátové sítě",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o jméně sítě (upravitelné), přidělené IP a MAC adrese připojených klientů routeru."
                       }]
},
       BASIC_NETWORK_PRINTER :{ 
               TITLE:"Tiskárna",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje název tiskárny připojené ke směrovači přes USB port."
                       }]
},
       BASIC_NETWORK_USB :{ 
               TITLE:"USB disk",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje relevantní informace o USB disku připojeném k routeru přes USB port."
                       }]
},
       BASIC_NETWORK_ONEMESH :{ 
               TITLE:"Zařízení Mesh",
               CONTENT: [{
                           type: "name",
                           title: "Název",
                           content: "Zobrazuje jméno mesh zařízení připojeného k routeru."
                       } ,{                      
                           type: "name",
                           title: "Model",
                           content: "Zobrazuje výrobní model mesh zařízení."
                       } ,{                      
                           type: "name",
                           title: "Stav",
                           content: "Zobrazuje stav připojení mesh zařízení."
                       } ,{                      
                           type: "name",
                           title: "Umístění",
                           content: "Zobrazuje umístění mesh zařízení."
                       } ,{                      
                           type: "paragraph",
                           content: "Kliknutím na <span class=\"one-mesh-modify-icon\"></span> můžete upravit informace o zařízení"
                       }]
},
       BASIC_SPEED_TEST :{ 
               TITLE:"Test rychlosti",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato funkce testuje rychlost nahrávání a stahování, kterou získáváte od vašeho poskytovatele internetu, a poskytuje užitečné informace o možnostech vašeho internetu."
                       } ,{                      
                           type: "paragraph",
                           content: "Tip: Pro přesnější výsledky zkuste vypnout ostatní aplikace a programy."
                       } ,{                      
                           type: "paragraph",
                           content: "Historie - Záznam z předešlého testu rychlosti."
                       } ,{                      
                           type: "paragraph",
                           content: "Testovat znovu - klikněte zde pro provedení testu rychlosti."
                       }]
},
       BASIC_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Klikněte na Automatickou detekci nebo zvolte typ připojení k internetu manuálně. Poté vložte odpovídající parametry od poskytovatele internetu."
                       }]
},
       BASIC_WIRELESS_SMART_CONNECT :{ 
               TITLE:"Chytré připojení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zaškrtnutím tohoto pole povolíte chytré připojení. Tato funkce pomáhá zařízením v rychlejším chodu tím, že jim přiřazuje nejlepší bezdrátová pásma v závislosti na aktuálních podmínkách a vyrovnává požadavky sítě."
                       }]
},
       BASIC_WIRELESS :{ 
               TITLE:"Nastavení bezdrátové sítě",
               CONTENT: [{
                           type: "paragraph",
                           content: "Můžete nakonfigurovat nastavení bezdrátové sítě (SSID, heslo atd.)"
                       } ,{                      
                           type: "name",
                           title: "Název sítě (SSID)",
                           content: "Je doporučeno, abyste změnili jméno sítě (SSID). Tohle pole rozlišuje velká a malá písmena."
                       } ,{                      
                           type: "name",
                           title: "Skrýt identifikátor SSID",
                           content: "Zvolte jestliže chcete skrýt jméno sítě (SSID) 2.4GHz/5GHz na seznamu bezdrátových sítí. Jakmile toto zvolíte nebude SSID vysíláno a vy se budete muset manuálně připojit k síti."
                       } ,{                      
                           type: "name",
                           title: "Heslo",
                           content: "Zadejte heslo bezdrátové sítě s 8 až 63 znaky ASCII nebo 8 až 64 hexadecimálními znaky. Tento údaj rozlišuje velká a malá písmena."
                       }]
},
       BASIC_DEVICE_SETTINGS :{ 
               TITLE:"USB úložiště",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato funkce vám umožňuje sdílet USB úložiště mezi různými klienty v lokální síti nebo přes internet."
                       } ,{                      
                           type: "title",
                           title: "Nastavení zařízení",
                           content: "Sekce Nastavení zařízení zobrazuje základní informace o USB úložišti připojenému přes USB port. USB flash disk má obvykle pouze jeden svazek."
                       } ,{                      
                           type: "name",
                           title: "Prohledat",
                           content: "Obvykle router automaticky detekuje jakékoli nově připojené zařízení. Jestliže ne, klikněte na toto tlačítko pro skenování a obnovení obrazovky s aktualizovanými informacemi.",
       children: [{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Šedá oblast reprezentuje velikost, která je zakázána. Můžete kliknout na tuto oblast pro sdílení určité velikosti."
                       }]
} ,{                      
                           type: "name",
                           title: "Odstranit",
                           content: "Klikněte na toto tlačítko pro bezpečné odebrání USB úložiště před jeho fyzickým vysunutím z USB portu.",
       children: [{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Tlačítko Odebrat se objevuje pouze v případě, když je USB úložiště připojeno k routeru. Když je zařízení zaneprázdněno, není požné jej odebrat."
                       }]
} ,{                      
                           type: "step",
                           title: "Nastavení souborového serveru",
       content: [ 
                "1. Přidejte USB úložiště přímo do USB portu nebo použitím USB kabelu. Jestliže zařízení vyžaduje externí napájení, ujistěte se, že je externí napájení připojeno.",
                "2. Nově přidané USB zařízení by mělo být routerem automaticky detekováno a zobrazeno pod sekcí Nastavení Zařízení. Jestliže ne, klikněte na Scan.",
                "Poznámka: Objeví se ikona Sdílení. Můžete na ni kliknout, abyste zakázali obsah, který nechcete sdílet."]
}]
},
       BASIC_SHARING_SETTINGS :{ 
               TITLE:"Přístupová adresa",
               CONTENT: [{
                           type: "name",
                           title: "Název síťového/mediálního serveru",
                           content: "Zobrazuje jméno použité pro přístup k USB úložišti pomocí metody Network Neighborhood nebo funkce Sdílení médií. Ve výchozím stavu je to TP-Share."
                       } ,{                      
                           type: "name",
                           title: "Metoda přístupu",
                           content: "Existují 3 metody přístupu ke sdílenému USB úložišti.",
       children: [{                      
                           type: "name",
                           title: "Okolní počítače",
                           content: "Zvolte tuto možnost pro umožnění uživatelům v síti přistupovat ke sdílenému obsahu pomocí adresy uvedené ve sloupci Adresa."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Zvolte tuto možnost pro povolení funkce serveru FTP, která umožňuje FTP klientům a uživatelům v síti přistupovat k USB úložišti pomocí FTP adresy uvedené ve sloupci Adresa."
                       } ,{                      
                           type: "name",
                           title: "FTP (přes internet)",
                           content: "Zvolte tuto možnost pro umožnění FTP klientům a uživatelům vzdáleně přistupovat, stahovat a uploadovat soubory na USB úložiště pomocí FTP přes internet. Pro úpravu přístupových adres klikněte na Upravit a nastavte Dynamickou DNS pro router. Pro změnu portu FTP serveru vložte nové číslo portu a klikněte na Uložit pro aplikaci změn."
                       }]
} ,{                      
                           type: "name",
                           title: "Adresa",
                           content: "Zobrazuje adresu pro přístup k paměťovému zařízení USB."
                       } ,{                      
                           type: "name",
                           title: "Port",
                           content: "Zobrazuje číslo portu použitého pro přístup k FTP serveru."
                       }]
},
       BASIC_FOLDER_SHARING :{ 
               TITLE:"Sdílení obsahu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje složky, které sdílíte. Všechny složky jsou ve výchozím stavu sdíleny. Můžete kliknout na ikonu Upravit pro upravení sdílených složek."
                       } ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Ikona sdílení se objeví sekci Nastavení zařízení (Device Settings). Můžete na ni kliknout, abyste zakázali obsah, který nechcete sdílet."
                       }]
},
       FOLDER_SHARING :{ 
               TITLE:"Sdílení obsahu a zabezpečení",
               CONTENT: [{
                           type: "name",
                           title: "Sdílení obsahu",
                           content: "Zobrazuje složky, které sdílíte. Všechny složky jsou ve výchozím stavu sdíleny. Můžete kliknout na ikonu Upravit pro upravení sdílených složek.",
       children: [{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Ikona sdílení se objeví sekci Nastavení zařízení (Device Settings). Můžete na ni kliknout, abyste zakázali obsah, který nechcete sdílet."
                       }]
} ,{                      
                           type: "name",
                           title: "Ověření pravosti přístupu",
       content: [ 
                "Přepněte na Zapnuto pro povolení ověření, které bude vyžadovat po uživatelích vložení platného uživatelského jména a hesla, aby získali přístup ke sdíleným složkám. Přístup jako Administrátor umožňuje číst a upravovat soubory, zatímco jako Uživatel umožňuje pouze čtení souborů.",
                "Uživatelské jméno může začínat písmenem nebo podtržítkem a může obsahovat 1 až 15 písmen, číslic nebo podtržítek.",
                "Heslo by mělo obsahovat 1 až 15 znaků - písmen, číslic nebo podtržítek."]
} ,{                      
                           type: "name",
                           title: "Povolit sdílení médií",
                           content: "Při povolení této funkce mohou všechna zařízení podporující DLNA v lokální síti přistupovat k souborům médií ve všech sdílených složkách. Od uživatelů nebude vyžadováno vložení uživatelského jména nebo hesla dokonce i v případě, že je povoleno Ověření."
                       }]
},
       BASIC_PRINT_SERVER :{ 
               TITLE:"Server tiskárny",
               CONTENT: [{
                           type: "name",
                           title: "Server tiskárny",
                           content: "Přepněte na On (Zapnuto) pro povolení funkce Tiskového serveru."
                       } ,{                      
                           type: "name",
                           title: "Název tiskárny",
                           content: "Zobrazuje jméno tiskárny připojené k routeru."
                       }]
},
       BASIC_PARENTAL_CONTROL :{ 
               TITLE:"Rodičovská kontrola",
               CONTENT: [{
                           type: "paragraph",
                           content: "Se základním nastavením Rodičovské kontroly můžete omezit přístup v určitou dobu dne (např.. Žádný přístup k internetu z dětského PC během času pro domácí úkoly)."
                       }]
},
       BASIC_PARENTAL_DEVICE :{ 
               TITLE:"Zařízení pod rodičovskou kontrolou",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato tabulka zobrazuje informace a nastavení zařízení, která jsou aktuálně omezovány Rodičovskou kontrolou."
                       } ,{                      
                           type: "step",
                           title: "Omezení pro nové klientské zařízení",
       content: [ 
                "1. Zapněte Rodičovskou kontrolu.",
                "2. Klikněte na Přidat.",
                "3. Klikněte na Scan pro vybrání momentálně připojených zařízení ze Seznamu připojených zařízení; nebo Jméno zařízení a MAC adresu vložte manuálně pro přidání zařízení, které není připojeno.",
                "4. Klikněte na ikonu Času účinnosti pro určení časového úseku, během kterého budou omezení platná.",
                "5. Vložte stručný popis do pole Popis. Toto pole je volitelné.",
                "6. Zvolte Povolit tuto položku.",
                "7. Klikněte na Uložit."]
} ,{                      
                           type: "note",
                           title: "Poznámka",
                           content: "Jestliže chcete zakázat tuto položku, klikněte na ikonu Žárovky."
                       }]
},
       BASIC_GUEST_NETWORK :{ 
               TITLE:"Síť pro hosty",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato funkce vám umožňuje poskytovat přístup k Wi-Fi pro hosty bez zpřístupnění hlavní sítě."
                       } ,{                      
                           type: "name",
                           title: "Povolte hostům přístup jeden k druhému",
                           content: "Zaškrtněte tento checkbox, čímž umožníte bezdrátovým zařízením v síti pro hosty komunikovat mezi sebou pomocí metod, jako jsou network neighbors, Samba, Ping a FTP."
                       } ,{                      
                           type: "name",
                           title: "Povolte hostům přístup ke svojí lokální síti",
                           content: "Zaškrtněte tento checkbox, čímž umožníte bezdrátovým zařízením v síti pro hosty komunikovat se zařízeními připojenými k portům LAN na routeru nebo k hlavní síti pomocí metod, jako jsou network neighbors, Samba, Ping a FTP."
                       } ,{                      
                           type: "name",
                           title: "Povolit síť pro hosty",
                           content: "Zaškrtnutím tohoto tlačítka zapnete funkci Síť pro hosty."
                       } ,{                      
                           type: "name",
                           title: "Název sítě (SSID)",
                           content: "Můžete ponechat výchozí název sítě pro hosty (SSID) nebo vytvořit nový název (až 32 znaků)."
                       } ,{                      
                           type: "name",
                           title: "Skrýt identifikátor SSID",
                           content: "Zaškrtněte toto políčko, pokud chcete skrýt identifikátor SSID sítě pro hosty v seznamu bezdrátových sítí."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Interval aktualizace hesla",
                           content: "Zvolte interval updatování hesla k síti pro hosty."
                       } ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Heslo",
                           content: "Vytvořte heslo mezi 8 a 63 ASCII znaky nebo v délce 8 až 64 hexadecimálních znaků (0-9, a-f, A-F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Heslo",
                           content: "Použijte možnost vygenerování náhodného hesla nebo si vytvořte heslo mající 8 až 63 znaků ASCII nebo 8 až 64 hexadecimálních znaků (0-9, a-f, A-F)."
                       }]
},
       BASIC_ACCOUNT_LOGIN :{ 
               TITLE:"TP-Link Cloud",
               CONTENT: [{
                           type: "paragraph",
                           content: "Služba TP-Link Cloud vám dovoluje vzdáleně monitorovat vaši síť v reálném čase, přistupovat a spravovat vaše zařízení TP-Link přes internet kdykoli a kdekoli."
                       }]
},
       ACCOUNT_INFO :{ 
               TITLE:"Informace o účtu",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje vaše TP-Link ID informace. Můžete upravovat informace vašeho účtu kliknutím na ikonu Upravit (Edit)."
                       }]
},
       DEVICE_INFO :{ 
               TITLE:"Informace o zařízení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zobrazuje informace o vašem zařízení zahrnující cloud účet, který zařízení spravuje."
                       }]
},
       BOUND_ACCOUNT :{ 
               TITLE:"Provázané účty",
               CONTENT: [{
                           type: "paragraph",
                           content: "Tato tabulka zobrazuje všechny cloud účty, které jsou momentálně provázány s tímto zařízením."
                       } ,{                      
                           type: "step",
                           title: "Provázat uživatelský účet",
       content: [ 
                "1. Klikněte na Provázat.",
                "2. Vložte registrovaný e-mail, který chcete provázat.",
                "3. Klikněte na Uložit."]
}]
},
       NEW_PARENTAL_CONTROL :{ 
               TITLE:"Rodičovská kontrola",
               CONTENT: [{
                           type: "paragraph",
                           content: "Pomocí filtrů výše věku, omezení přístupu a uživatelských účtů poskytuje Rodičovská kontrola vaší rodině přístup k internetu vhodně přizpůsobený každému na míru."
                       } ,{                      
                           type: "step",
                           title: "Aplikovat Rodičovskou kontrolu na nové zařízení",
       content: [ 
                "1. Klikněte na Přidat.",
                "2. Vložte jméno tohoto profilu a klikněte na \"+\" pro přidání zařízení k tomuto profilu.",
                "3.Zvolte úroveň filtru a upravte obsah filtru podle svých potřeb. Můžete vložit klíčová slova pro hledání webových stránek, které chcete vyfiltrovat v naší databázi. Další webové stránky (URL) mohou být vloženy manuálně.<br/>Podívejte se na následující vysvětlení pro různé kategorie filtrů:<p>Obsah pro dospělé - Stránky, které mohou obsahovat sexuální, škodlivý nebo nezákonný obsah, včetně pornografie, užívání návykových látek, násilí a diskriminace</p><p>Hazardní hry - Stránky, které mohou propagovat nebo poskytovat informace o hazardních hrách, včetně stránek s online hazardními hrami</p><p>Sexuální výuka - Stránky, které poskytují informace o sexu, včetně rozmnožování, sexualitě, bezpečného sexu a plánovaného rodičovství, pohlavně přenosných nemocí a vyrovnání se se sexuálním traumatem</p><p>Online komunikace - Stránky, které poskytují formáty komunikace s ostatními pomocí textu, hlasu nebo videa, včetně e-mailu, blogů. online fór a služeb VoIP a video chat</p><p>Sociální sítě - Stránky, které šíří osobní vyjádření nebo komunikaci, čímž spojují lidi a jejich osobní aktivity na základě podobných zájmů, kariéry, jiných okolností nebo skutečných známostí</p><p>Platba za surfování - Stránky, které kompenzují uživatelům prohlížení určitých webových stránek, e-mailových zpráv nebo reklam, odkazů nebo odpovědí na průzkumy</p><p>Média - Stránky, které nabízejí zdarma, placený nebo předplacený audio a/nebo video obsah, včetně služeb streamování, TV programů nebo stahování hudby</p><p>Stahování - Stránky, které poskytují přístup ke sdílení souborů a distribuce, včetně peer-to-peer sdílení, online úložiště souborů a obsahu mobilních zařízení (např.: hudba a aplikace)</p><p>Hry - Stránky, které poskytují přístup k webovým hrám nebo hrám ke stažení, včetně online her, sítí herních konzolí a her v prohlížeči</p>",
                "4. Jestliže chcete omezit celkový čas, po který může být tento profil online, povolte a specifikujte Časová omezení (Time Limits). Můžete také použít Čas večerky (Bed Time) pro nastavení každodenního časového úseku, během kterého zařízení spojená s tímto profilem nemohou používat internet.",
                "5. Klikněte na Uložit."]
} ,{                      
                           type: "step",
                           title: "Pro zobrazení detailní internetové historie profilu",
       content: [ 
                "1. Ve sloupci Náhled klikněte na odpovídající tlačítko Náhled.",
                "2. Jestliže chcete vidět více záznamů, klikněte na tlačítko <span class=\"ptl-ctr-help-icon history\"></span> Historie.",
                "3. Můžete blokovat nebo odblokovat webové stránky kliknutím na <span class=\"ptl-ctr-help-icon block\"></span> nebo <span class=\"ptl-ctr-help-icon unblock\"></span> tlačítko."]
} ,{                      
                           type: "step",
                           title: "Pro okamžité zakázání nebo povolení přístupu k internetu",
       content: [ 
                "Ve sloupci Přístup k internetu (Internet Access) klikněte na <span class=\"ptl-ctr-help-icon stop\"></span> pro přerušení přístupu k internetu odpovídajících zařízení profilu nebo klikněte na <span class=\"ptl-ctr-help-icon enable\"></span> pro opětovné povolení přístupu."]
}]
},
       BASIC_QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Funkce QoS (Qualitiy of Service) rozděluje priority online aktivitám nebo zařízením, čímž garantuje rychlejší připojení k síti, když ho potřebujete nejvíce."
                       } ,{                      
                           type: "paragraph",
                           content: "Zvolte Prioritu Aplikace (Application Priority) pro rozvržení priorit rychlosti sítě pro online aktivity a Prioritu Zařízení (Device Priority) pro rozvržení priorit rychlosti sítě mezi zařízení."
                       }]
},
       BASIC_APPLICATION_PRIORITY :{ 
               TITLE:"Priorita Aplikace",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zvolte online aktivity, kterým chcete přidělit prioritu nebo klikněte na Vlastní (Custom) pro nastavení úrovně priority každé online aktivity."
                       }]
},
       BASIC_DEVICE_PRIORITY :{ 
               TITLE:"Priorita Zařízení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Zvolte zařízení, kterému(ým) chcete přiřadit prioritu a stanovte, jak dlouho bude priorita trvat."
                       } ,{                      
                           type: "step",
                           title: "Přidělení priority zařízení",
       content: [ 
                "1. Najděte v seznamu zařízení, kterému chcete přiřadit prioritu, a zapněte Prioritu.",
                "2. Zvolte na jak dlouho bude priorita zařízení přidělena ve sloupci Časový limit (Timing)."]
}]
},
       ANTI_VIRUS :{ 
               TITLE:"Antivirus",
               CONTENT: [{
                           type: "paragraph",
                           content: "Pomocí častého skenování sítě, detekce závadných stránek a izolace infikovaných zařízení udržuje funkce Antivirus vaše osobní informace v bezpečí. Můžete také zkontrolovat, jak je vaše síť zabezpečena, a jestli byly zaznamenány nějaké útoky na vaši síť."
                       } ,{                      
                           type: "paragraph",
                           content: "Historie - Zaznamenává zařízení, která byla ochráněna Antivirem, a zdroj a klasifikaci útoku."
                       } ,{                      
                           type: "paragraph",
                           content: "Povolit vše - Klepněte sem pro povolení všech Druhů Ochrany (Protection Types), jestliže není jeden nebo více povolen."
                       } ,{                      
                           type: "paragraph",
                           content: "Druhy ochrany - Povolte Druhy Ochrany (Protection Types) podle vysvětlení. Doporučujeme povolit všechny druhy ochrany (Protection Types)."
                       }]
},
       APPLICATION_PRIORITY :{ 
               TITLE:"Priorita Aplikace",
               CONTENT: [{
                           type: "paragraph",
                           content: "Funkce Priorita Aplikace přiděluje prioritu online aktivitám, čímž garantuje rychlejší připojení k síti, když ho nejvíc potřebujete. Zvolte online aktivity, kterým chcete přidělit prioritu nebo klikněte na Vlastní (Custom) pro nastavení úrovně priorit každé online aktivity."
                       }]
},
       DEVICE_PRIORITY :{ 
               TITLE:"Priorita Zařízení",
               CONTENT: [{
                           type: "paragraph",
                           content: "Funkce Priorita Zařízení přiděluje prioritu zařízením, čímž garantuje rychlejší připojení k síti, když ho nejvíc potřebujete. Zvolte zařízení, kterému(ým) chcete přidělit prioritu, a dobu, kterou bude priorita trvat."
                       } ,{                      
                           type: "step",
                           title: "Přidělení priority zařízení",
       content: [ 
                "1. Najděte v seznamu zařízení, kterému chcete přiřadit prioritu, a zapněte Prioritu.",
                "2. Zvolte na jak dlouho bude priorita zařízení přidělena ve sloupci Časový limit (Timing)."]
}]
},
       FIREWALL :{ 
               TITLE:"Brána firewall",
               CONTENT: [{
                           type: "paragraph",
                           content: "SPI (Stateful Packet Inspection/Kontrola stavu paketů) Firewall zabraňuje kybernetickým útokům a ověřuje provoz procházející routerem na základě protokolu. Ve výchozím stavu je tato funkce povolena."
                       } ,{                      
                           type: "name",
                           title: "Povolit SPI Firewall",
                           content: "Nezakazujte SPI Firewall, pokud to není nutné."
                       } ,{                      
                           type: "name",
                           title: "Povolit \"Ping\" z WAN portu/Povolit \"Ping\" z LAN portu",
                           content: "Povolit ping pakety z WAN/LAN portu. Je doporučeno zachovat původní nastavení."
                       }]
},
CWMP: {
      TITLE: "CWMP nastavení",
      CONTENT: [{
        type: "paragraph",
        content: "CWMP (CPE WAN Management Protocol, jinak také TR-069) umožňuje autokonfiguračnímu serveru (ACS) provádět autokonfiguraci, provisioning, připojení and diagnostiku tohoto zařízení. Můžete nastavit tuto funkci podle pokynů vašeho ISP."
      }, {
        type: "name",
        title: "CWMP",
        content: "Zatrhněte pro povolení CWMP (CPE WAN Management Protocol) funkce."
      }, {
        type: "name",
        title: "Inform",
        content: "Povolte tuto funkci pro pravidelné odesílání Inform zpráv na ACS (autokonfigurační server). "
      }, {
        type: "name",
        title: "Inform interval",
        content: "Zadejte čas ve vteřinách, po jaké době má být odeslána Inform zpráva."
      }, {
        type: "name",
        title: "ACS URL",
        content: "Zadejte adresu ACS poskytnutou vaším ISP."
      }, {
        type: "name",
        title: "ACS uživatelské jméno/ACS heslo",
        content: "Zadejte uživatelské jméno a heslo pro připojení k ACS serveru."
      }, /*{
        type: "name",
        title: "Rozhraní použité pro TR-069 klienta",
        content: "Vyberte, jaké rozhraní bude používat TR-069 klient."
      }, {
        type: "name",
        title: "Zobrazovat SOAP zprávy v sériové konzoli",
        content: "Zatrhněte pro povolení nebo zakázání této funkce."
      },*/ {
        type: "name",
        title: "Ověřování požadavku na připojení",
        content: "Zaškrtněte toto políčko pro povolení ověřování požadavku na připojení.",
        children: [{
          type: "name",
          title: "Uživatelské jméno/Heslo",
          content: "Vyplňte uživatelské jméno a heslo pro připojení ACS serveru k routeru."
        }, {
          type: "name",
          title: "Cesta/port/URL",
          content: "Zadejte cestu, port a URL pro připojení k ACS serveru."
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
