(function($){
    $.su = $.su || {};   
    $.su.CHAR = $.su.CHAR||{};
 $.su.CHAR.HELP ={
       STATUS_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe informações relevantes sobre a a conexão de rede grande área (Internet)."
                       }]
},
       STATUS_WIRELESS :{ 
               TITLE:"Wireless 2.4GHz/5GHz",
	       id: "help_status_wifi_title",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe informações relevantes sobre a rede wireless."
                       }]
},
       STATUS_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informações sobre as portas Ethernet (LAN)."
                       }]
},
       STATUS_GUEST :{ 
               TITLE:"Rede para Convidados 2.4GHz/5GHz",
	       id: "help_status_guest_title",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe informações sobre as redes wireless para os convidados."
                       }]
},
       STATUS_USB :{ 
               TITLE:"Dispositivos USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "Displays information of the current USB storage devices and/or printer connected to the router via the USB ports."
                       }]
},
       STATUS_PERFORMANCE :{ 
               TITLE:"Desempenho",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra o desempenho do roteador atual."
                       }]
},
       STATUS_WIRED :{ 
               TITLE:"Clientes Cabeados",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe informação dos dispositivos cabeados ligados à rede."
                       }]
},
       STATUS_WIRELESS_CLIENTS :{ 
               TITLE:"Clientes Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe informação dos dispositivos wireless ligados à rede."
                       }]
},
       INTERNET_TITLE :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Configure os parâmetros IPv4 e selecione o método MAC Clone conforme sua necessidade."
                       }]
},
       INTERNET_INTERNET :{ 
               TITLE:"IPv4",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selecione a Internet Tipo de conexão e inserir os parâmetros correspondentes."
                       } ,{                      
                           type: "title",
                            title: "Internet Connection Type: IP Dinâmico"
                       } ,{                      
                           type: "paragraph",
                           content: "Selecione essa opção caso tenha sido fornecido com uma conexão de servidor DHCP pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP/Máscara de Sub-rede/Gateway Padrão/DNS Primário/DNS Secundário",
                           content: "Estes parâmetros são automaticamente atribuídos pelo servidor DHCP do seu provedor."
                       } ,{                      
                           type: "name",
                           title: "Renovar",
                           content: "Clique neste botão para obter novos parâmetros IP do servidor DHCP do provedor."
                       } ,{                      
                           type: "name",
                           title: "Liberar",
                           content: "Clique para liberar todos os endereços IP atribuídos pelo servidor DHCP."
                       } ,{                      
                           type: "name",
                           title: "Endereço DNS",
                           content: "Caso o provedor forneça um ou mais endereços, marque esta caixa e insira o endereço DNS primário e secundário nos campos de entrada correspondentes. Caso contrário, os endereços DNS serão atribuídos pelo provedor dinamicamente."
                       } ,{                      
                           type: "name",
                           title: "Tamanho MTU",
                           content: "O tamanho MTU típico e padrão (Unidade de Transmissão Máxima) é de 1500 Bytes. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Nome Host",
                           content: "Insira um valor neste campo para especificar o nome do host do roteador."
                       } ,{                      
                           type: "name",
                           title: "Obter IP Utilizando DHCP Unicast",
                           content: "Selecione esta opção se o servidor DHCP do rovedor não suporta aplicações de broadcast e você não pode obter o endereço IP dinamicamente."
                       } ,{                      
                           type: "title",
                            title: "Tipo de Conexão de Internet: IP Estático"
                       } ,{                      
                           type: "paragraph",
                           content: "Selecione este tipo caso seja fornecido com endereço IP fixo específico, máscara de sub-rede, gateway e parâmetros DNS pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP/Máscara de Sub-rede/Gateway Padrão/DNS Primário/DNS Secundário",
                           content: "Digite as informações fornecidas pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Tamanho MTU",
                           content: "O tamanho MTU típico e padrão (Unidade de Transmissão Máxima) é de 1500 Bytes. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
                       } ,{                      
                           type: "title",
                            title: "Tipo de Conexão de Internet: Cabo BigPond"
                       } ,{                      
                           type: "paragraph",
                           content: "Selecione este tipo se o provedor fornece conexão cabo BigPond."
                       } ,{                      
                           type: "name",
                           title: "Nome de Usuário/Senha",
                           content: "Insira o nome de usuário e senha oferecidos pelos seu provedor. Estes campos são sensíveis a letras mínusculas e maiúsculas."
                       } ,{                      
                           type: "name",
                           title: "Autenticação. Servidor",
                           content: "Insira um endereço IP do servidor de autenticação ou nome host."
                       } ,{                      
                           type: "name",
                           title: "Autenticação. Domínio",
                           content: "Insira o sufixo do nome de domínio do servidor (com base na localização). Por exemplo, nsw.bigpond.net.au para NSW/ACT, vic.bigpond.net.au para VIC/TAS/WA/SA/NT, ou qld.bigpond.net.au para QLD."
                       } ,{                      
                           type: "name",
                           title: "Tamanho MTU",
                           content: "O tamanho MTU típico e padrão (Unidade de Transmissão Máxima) é de 1500 Bytes. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Modo de Conexão",
                           content: "Selecione um modo de conexão apropriado que determina como conectar-se à Internet.",
       children: [{                      
                           type: "name",
                           title: "Automático",
                           content: "Neste modo, a conexão de Internet reconecta automaticamente a qualquer momento em que ficar desconectada."
                       } ,{                      
                           type: "name",
                           title: "Sob Demanda",
                           content: "Neste modo, a conexão Internet será encerrada automaticamente após um atingir um tempo específico de inatividade (Tempo Máximo de Inatividade). A conexão é reestabelecida quando você é solicitado a acessar a Internet novamente."
                       } ,{                      
                           type: "name",
                           title: "Manualmente",
                           content: "Neste modo, a conexão é controlada manualmente ao clicar no botão Conectar ou Desconectar. Este modo também suporta a função de Tempo Máximo de Inatividade. Insira um tempo (em minutos) máximo para que a Internet fique inativa no campo Tempo Máximo de Inatividade. O valor padrão é de 15 minutos. Caso queira que a conexão permaneça ativa o tempo todo, insira 0 (zero)."
                       }]
} ,{                      
                           type: "title",
                            title: "Tipo de Conexão de Internet: PPPoE"
                       } ,{                      
                           type: "paragraph",
                           content: "Selecione este tipo caso utilize o serviço DSL (Linha de Assinante Digital) e lhe é fornecido um nome de usuário e senha pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Nome de Usuário/Senha",
                           content: "Insira o nome de usuário e senha oferecidos pelos seu provedor. Estes campos são sensíveis a letras mínusculas e maiúsculas."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP/DNS Primário/DNS Secundário",
                           content: "Estes parâmetros são automaticamente atribuídos pelo servidor DHCP do seu provedor."
                       } ,{                      
                           type: "name",
                           title: "Conexão Secundária (Nenhum, IP Dinâmico, IP EStático)",
       children: [{                      
                           type: "name",
                           title: "Nenhum",
                           content: "Selecione caso nenhuma conexão secundária é fornecida."
                       } ,{                      
                           type: "name",
                           title: "IP Dinâmico",
                           content: "Selecione caso o endereço IP e máscara sub-rede são atribuídos automaticamente pelo provedor.",
       children: [{                      
                           type: "name",
                           title: "Renovar",
                           content: "Clique em renovar os parâmetros IP do seu provedor."
                       } ,{                      
                           type: "name",
                           title: "Liberar",
                           content: "Clique para liberar os parâmetros IP atribuídos."
                       }]
} ,{                      
                           type: "name",
                           title: "IP Estático",
                           content: "Selecione se o endereço IP e a máscara de sub-rede são fornecidos pelo provedor, e insira as informações nos campos correspondentes."
                       }]
} ,{                      
                           type: "name",
                           title: "Tamanho MTU",
                           content: "O tamanho típico MTU ",
       children: [{                      
                           type: "note",
                           title: "Aviso",
                           content: "Em um caso raro, o provedor pode exigir que você ajuste o tamanho MTU para um melhor desempenho da rede. Você não deve alterar o valor, a menos que seja absolutamente necessário."
                       }]
} ,{                      
                           type: "name",
                           title: "Nome do Serviço/Nome do Concentrador de Acesso",
                           content: "Por padrão, o nome do serviço e o nome do concentrador de acesso (AC) são deixados em branco. Esses campos não devem ser configurados a menos que exigido pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Detecção de Intervalo Online",
                           content: "Insira um valor de intervalo de tempo entre 0 e 120 para qual o roteador detectar o Concentrador de Acesso online a cada intervalo. O valor padrão é 10."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Se o Iprovedor fornece um endereço IP específico (fixo), selecione Utilizar o seguinte endereço IP e digite o endereço IP no campo. Caso contrário selecione Obter dinamicamente a partir do provedor para obter um endereço IP atribuído pelo servidor automaticamente."
                       } ,{                      
                           type: "name",
                           title: "Endereço DNS",
                           content: "Se o provedor fornece os endereços IP de DNS (fixo) específicos, selecione Utilizar os seguintes endereços de DNS e digite o endereço (s) para o DNS primário e campos DNS secundários respectivamente. Caso contrário, selecione Obter dinamicamente pelo provedor para obter o endereço IP DNS atribuído pelo servidor automaticamente."
                       } ,{                      
                           type: "name",
                           title: "Modo de Conexão",
                           content: "Selecione um modo de conexão apropriado que determina como conectar-se à Internet.",
       children: [{                      
                           type: "name",
                           title: "Automático",
                           content: "Neste modo, a conexão de Internet reconecta automaticamente a qualquer momento em que ficar desconectada."
                       } ,{                      
                           type: "name",
                           title: "Sob Demanda",
                           content: "Neste modo, a conexão Internet será encerrada automaticamente após um atingir um tempo específico de inatividade (Tempo Máximo de Inatividade). A conexão é reestabelecida quando você é solicitado a acessar a Internet novamente."
                       } ,{                      
                           type: "name",
                           title: "Por Tempo",
                           content: "Neste modo, a conexão de Internet é reestabelecida em um tempo específico.                           Caso esta opção seja selecionada, insira o tempo de início e final, ambos estão no formato HH:MM."
                       } ,{                      
                           type: "name",
                           title: "Manualmente",
                           content: "Neste modo, a conexão é controlada manualmente ao clicar no botão Conectar ou Desconectar. Este modo também suporta a função de Tempo Máximo de Inatividade. Insira um tempo (em minutos) máximo para que a Internet fique inativa no campo Tempo Máximo de Inatividade. O valor padrão é de 15 minutos. Caso queira que a conexão permaneça ativa o tempo todo, insira 0 (zero)."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "O modo de conexão Por Tempo só terá efeito uma vez que o Sistema de Horário em Avançado → Ferramentas de Sistema → Configurações de Horário estiver configurado."
                       }]
} ,{                      
                           type: "title",
                            title: "Tipo de Conexão de Internet: L2TP/PPTP"
                       } ,{                      
                           type: "paragraph",
                           content: "Selecione este tipo caso você se conecta a um Servidor VPN L2TP/PPTP e lhe foi oferecido um nome de usuário, senha, um Endereço IP/Nome de Domínio do servidor através do provedor."
                       } ,{                      
                           type: "name",
                           title: "Nome de Usuário/Senha",
                           content: "Insira o nome de usuário e senha oferecidos pelos seu provedor. Estes campos são sensíveis a letras mínusculas e maiúsculas."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP/DNS Primário/DNS Secundário",
                           content: "Estes parâmetros são automaticamente atribuídos pelo servidor DHCP do seu provedor."
                       } ,{                      
                           type: "name",
                           title: "Conexão Secundária (IP Dinâmico ou Estático)",
       children: [{                      
                           type: "name",
                           title: "IP Dinâmico",
                           content: "Selecione caso o endereço IP e máscara sub-rede são atribuídos automaticamente pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "IP Estático",
                           content: "Selecione se o endereço IP, máscara de sub-rede, gateway e endereços DNS são fornecidos pelo provedor, e insira as informações nos campos correspondentes ."
                       }]
} ,{                      
                           type: "name",
                           title: "IP Servidor VPN/Nome de Domínio",
                           content: "Insira um endereço IP de servidor ou nome de domínio oferecido pelo seu provedor."
                       } ,{                      
                           type: "name",
                           title: "Tamanho MTU",
                           content: "O valor MTU (Maximum Transmission Unit) típico e predefinido para a maioria das redes Ethernet é 1460 Bytes para L2TP ou 1420 Bytes para PPTP.  Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Modo de Conexão",
                           content: "Selecione um modo de conexão apropriado que determina como conectar-se à Internet.",
       children: [{                      
                           type: "name",
                           title: "Automático",
                           content: "Neste modo, a conexão de Internet reconecta automaticamente a qualquer momento em que ficar desconectada."
                       } ,{                      
                           type: "name",
                           title: "Sob Demanda",
                           content: "Neste modo, a conexão Internet será encerrada automaticamente após um atingir um tempo específico de inatividade (Tempo Máximo de Inatividade). A conexão é reestabelecida quando você é solicitado a acessar a Internet novamente."
                       } ,{                      
                           type: "name",
                           title: "Manualmente",
                           content: "Neste modo, a conexão é controlada manualmente ao clicar no botão Conectar ou Desconectar. Este modo também suporta a função de Tempo Máximo de Inatividade. Insira um tempo (em minutos) máximo para que a Internet fique inativa no campo Tempo Máximo de Inatividade. O valor padrão é de 15 minutos. Caso queira que a conexão permaneça ativa o tempo todo, insira 0 (zero)."
                       }]
} ,{                      
                           type: "title",
                           id: "internet_ipv4_dslite_title",
                            title: "Tipo de Conexão de Internet: DS-Lite"
                       } ,{                      
                           type: "paragraph",
                           id: "internet_ipv4_dslite_detail",
                           content: "Selecione este tipo caso seu provedor utilize implementação e ofereça nome de domínio AFTR ou endereço IPv6 para configuração túnel IPv4 em IPv6 na rede IPv6 para se comunicar com tráfegos IPv4 ou IPv6 em suas respectivas redes."
                       } ,{                      
                           type: "name",
                           id: "internet_ipv4_dslite_name",
                           title: "Nome AFTR",
                           content: "If your ISP supports obtaining AFTR Name automatically, please select Auto. If your ISP provides a specific AFTP Name, please select Manual and enter the domain name and ipv6 address provided by ISP in the input box. "
                       } ,{                      
                           type: "title",
                           id: "internet_ipv4_v6plus_title",
                            title: "Internet Connection Type: v6plus"
                       } ,{                      
                           type: "paragraph",
                           id: "internet_ipv4_v6plus_detail",
                           content: "Select this type if your ISP uses v6plus deployment and provides an IPv6 address for setting up an IPv4-in-IPv6 tunnel in the IPv6 network to communicate IPv4 traffics or IPv6 traffics in their own respective network."
                       }]
},
       INTERNET_MAC :{ 
               TITLE:"Clone de MAC",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selecione o método MAC Clone apropriado conforme sua necessidade."
                       } ,{                      
                           type: "name",
                           title: "NÃO Clonar Endereço MAC",
                           content: "Não altere o endereço MAC padrão do roteador, caso o provedor não vincule o endereço IP atribuído ao endereço MAC."
                       } ,{                      
                           type: "name",
                           title: "Clonar Endereço MAC do Computador Atual",
                           content: "Selecione para copiar o endereço MAC atual do computador que está conectado ao roteador, caso o provedor vincule o endereço IP atribuído ao endereço MAC do computador."
                       } ,{                      
                           type: "name",
                           title: "Utilizar Endereço MAC Personalizado",
                           content: "Insira o endereço MAC manualmente, caso o provedor vincule o endereço IP atribuído ao específico endereço MAC."
                       }]
},
       INTERNET_WAN_AGGREGATION :{ 
               TITLE:"WAN Aggregation",
	       id: "internet_wan_aggregation_title",
               CONTENT: [{
                           type: "paragraph",
                           id: "internet_wan_aggregation_detail",
                           content: "WAN Aggregation transforms the LAN1 port to an additional WAN port, and makes a single high-bandwidth data path. Unleash faster internet from ISPs that provide bandwidth rates over 1Gbps and no longer be limited by your networking hardware."
                       } ,{                      
                           type: "note",
                           id: "internet_wan_aggregation_note",
                           title: "Aviso",
                           content: "Before enabling this feature, make sure that your ISP supports WAN Aggregation and your modem has two WAN ports."
                       } ,{                      
                           type: "step",
                           title: "To apply WAN aggregation",
			   id: "internet_wan_aggregation_step",
       content: [ 
                "1.	Toggle on WAN Aggregation to enable it.",
                "2.	Clique em Salvar.",
                "3.	Connect the router’s WAN port and LAN1 port to your modem’s two WAN ports with two Ethernet cables."]
}]
},
       LAN_IPV4 :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe o endereço MAC, endereço IP e máscara de sub-rede do roteador."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "O único endereço físico atribuído à porta Ethernet (LAN) do roteador."
                       } ,{                      
                           type: "name",
                           title: "Endereço IP",
                           content: "Exibe o endereço IP padrão do roteador que é usado para efetuar login na página de gestão web do roteador. Você pode alterá-lo."
                       } ,{                      
                           type: "name",
                           title: "Máscara de Sub-rede",
                           content: "Escolha um identificador atribuído usado pela porta LAN para rotear tráfego interno e externo ou insira uma nova máscara de sub-rede."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Caso o novo endereço de IP LAN não estiver na mesma sub-rede que a antiga, o endereço IP Pool no servidor DHCP, será automaticamente configurado; de qualquer forma, o Servidor Virtual e o Host DMZ não surtirão efeito até que eles sejam reconfigurados."
                       }]
},
       LINK_AGG :{ 
               TITLE:"Agregação de Link",
               CONTENT: [{
                           type: "paragraph",
                           content: "Link Aggregation combines two ports together to make a single high-bandwidth data path, thus sustaining a higher-speed and more stable wired network."
                       } ,{                      
                           type: "step",
			   id: "link_agg_step_help",
                           title: "To apply link aggregation:",
       content: [ 
                "1. Toggle on to enable the Link Aggregation feature.",
                "2. Specify two ports for link aggregation.",
                "3. Clique em Salvar."
       ]
}]
},
       IPTV :{ 
               TITLE:"IPTV",
               CONTENT: [{
                           type: "paragraph",
                           content: "IPTV (Internet Protocol Television) é um sistema através do qual os serviços de televisão são entregues usando o conjunto de protocolos de Internet através de uma rede de comutação de pacotes, como uma rede local ou pela Internet. "
                       } ,{                      
                           type: "name",
                           id: "igmp-snooping",
                           title: "IGMP Snooping",
                           content: "O IGMP (Internet Group Management Protocol) é um recurso que permite que o roteador apenas redirecione o tráfego multicast para as portas que os tenham solicitado."
                       } ,{                      
                           type: "name",
                           title: "IGMP Proxy",
                           content: "Selecione para ativar o recurso IGMP Proxy se o serviço de IPTV fornecido pelo provedor é IGMP de base tecnológica."
                       } ,{                      
                           type: "name",
                           title: "Versão IGMP",
                           content: "Selecione a versão IGMP de acordo com seu provedor. A versão IGMP padrão é V2."
                       } ,{                      
                           type: "name",
                           id: "igmp-wifi",
                           title: "Direcionamento Multicast Wireless",
                           content: "Selecione para ativar o recurso wireless Multicast Forwarding que permite que os pacotes multicast sejam encaminhados para a rede wireless."
                       } ,{                      
                           type: "name",
                           title: "IPTV",
                           content: "Selecione para habilitar a função IPTV caso o serviço IPTV fornecido pelo provedor seja não IGMP de base tecnológica."
                       } ,{                      
                           type: "name",
                           title: "Perfil ISP",
                           content: "Selecione o perfil de provedor apropriado para finalizar a configuração. Há três tipos de perfis:",
       children: [{                      
                           type: "name",
                           title: "Country-ISP Name",
                           content: "Perfis de provedor com configurações padrão são no formato \"País - Nome do Provedor\". Simplesmente encontre e selecione seu provedor da lista flutuante."
                       } ,{                      
                           type: "name",
                           id: "iptv_bridge_child_1to4",
                           title: "Ponte",
                           content: "Caso seu provedor não esteja listado e nenhum outro parâmetro seja solicitado para configurar IPTV, você pode simplesmente especificar a porta LAN dedicada à IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Especifique que tipo de dado a porta LAN irá transmitir. Por exemplo, se o IPTV for selecionado para LAN1, ele só transmitirá dados de IPTV e você deverá conectar o decodificador a LAN1."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_2to5",
                           title: "Ponte",
                           content: "Caso seu provedor não esteja listado e nenhum outro parâmetro seja solicitado para configurar IPTV, você pode simplesmente especificar a porta LAN dedicada à IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Specify which kind of data the LAN port will transmit. For example, if IPTV is selected for LAN2, it will only transmit IPTV data and you should connect the set-top box to LAN2."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_bridge_child_5to8",
                           title: "Ponte",
                           content: "Caso seu provedor não esteja listado e nenhum outro parâmetro seja solicitado para configurar IPTV, você pode simplesmente especificar a porta LAN dedicada à IPTV.",
       children: [{                      
                           type: "name",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Specify which kind of data the LAN port will transmit. For example, if IPTV is selected for LAN5, it will only transmit IPTV data and you should connect the set-top box to LAN5."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_1to4",
                           title: "Personalizado",
                           content: "Caso seu provedor não esteja listado mas proporciona alguns parâmetros necessários como Internet/VoIP/IDs VLAN IPTV e Prioridade, selecione este perfil.",
       children: [{                      
                           type: "name",
                           title: "Internet/VoIP/IPTV VLAN ID/Priority",
                           content: "Configure os IDs VLAN e prioridades como fornecidas pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "802.11Q Tag",
                           content: "Selecione para marcação de pacotes de Internet com 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "ID VLAN Multicast IPTV/Prioridade",
                           content: "Você pode ativar o recurso de multicast IPTV conforme desejado e configure o ID VLAN e Prioridade de acordo com o provedor."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN1/LAN2/LAN3/LAN4",
                           content: "Especifique que tipo de dado a porta LAN irá transmitir. Por exemplo, se o IPTV for selecionado para LAN1, ele só transmitirá dados de IPTV e você deverá conectar o decodificador a LAN1."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_2to5",
                           title: "Personalizado",
                           content: "Caso seu provedor não esteja listado mas proporciona alguns parâmetros necessários como Internet/VoIP/IDs VLAN IPTV e Prioridade, selecione este perfil.",
       children: [{                      
                           type: "name",
                           title: "Internet/VoIP/IPTV VLAN ID/Priority",
                           content: "Configure os IDs VLAN e prioridades como fornecidas pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "802.11Q Tag",
                           content: "Selecione para marcação de pacotes de Internet com 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "ID VLAN Multicast IPTV/Prioridade",
                           content: "Você pode ativar o recurso de multicast IPTV conforme desejado e configure o ID VLAN e Prioridade de acordo com o provedor."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN2/LAN3/LAN4/LAN5",
                           content: "Specify which kind of data the LAN port will transmit. For example, if IPTV is selected for LAN2, it will only transmit IPTV data and you should connect the set-top box to LAN2."
                       }]
} ,{                      
                           type: "name",
                           id: "iptv_custom_5to8",
                           title: "Personalizado",
                           content: "Caso seu provedor não esteja listado mas proporciona alguns parâmetros necessários como Internet/VoIP/IDs VLAN IPTV e Prioridade, selecione este perfil.",
       children: [{                      
                           type: "name",
                           title: "Internet/VoIP/IPTV VLAN ID/Priority",
                           content: "Configure os IDs VLAN e prioridades como fornecidas pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "802.11Q Tag",
                           content: "Selecione para marcação de pacotes de Internet com 802.11Q."
                       } ,{                      
                           type: "name",
                           title: "ID VLAN Multicast IPTV/Prioridade",
                           content: "Você pode ativar o recurso de multicast IPTV conforme desejado e configure o ID VLAN e Prioridade de acordo com o provedor."
                       } ,{                      
                           type: "name",
                           id: "iptv_custom_child",
                           title: "LAN5/LAN6/LAN7/LAN8",
                           content: "Specify which kind of data the LAN port will transmit. For example, if IPTV is selected for LAN5, it will only transmit IPTV data and you should connect the set-top box to LAN5."
                       }]
                    }
                  ]
              }
           ]
       },
       DHCP_SERVER_SETTINGS :{ 
               TITLE:"Servidor DHCP",
               CONTENT: [{
                           type: "paragraph",
       content: [         
       		"Por padrão, o Servidor DHCP (Protocolo de Configuração de Host Dinâmico) permanece habilitado, ele atribui dinamicamente parâmetros TCP/IP para dispositivos cliente do endereço IP Pool.",
       		"NÃO desabilite o Servidor DHCP a menos que você possua outro servidor DHCP ou deseja atribuir manualmente os parâmetros TCP/IP para cada dispositivo cliente na sua rede."
                ]
} ,{                      
                           type: "name",
                           title: "Pool Address IP",
                           content: "Insira a faixa de endereços IP que podem ser concedidos aos dispositivos clientes."
                       } ,{                      
                           type: "name",
                           title: "Tempo de Concessão de Endereço",
                           content: "Insira a duração de tempo que um endereço IP é concedido ao dispositivo cliente entre 2 e 2880 minutos. O padrão é de 120 minutos."
                       }]
},
       RESERVED_IP_ADDRESS :{ 
               TITLE:"Reserva de Endereço",
               CONTENT: [{
                           type: "paragraph",
                           content: "Você pode manualmente reservar um endereço IP para um cliente que está conectado ao roteador. Uma vez reservado, o endereço IP será atribuído apenas ao mesmo dispositivo cliente pelo Servidor DHCP."
                       } ,{                      
        type: "step",
        title: "Para reservar um endereço IP",
        content: [
          "1. Clique em Adicionar.",
          "2. Insira o endereço MAC do seu cliente desejado.",
          "3. Insira o endereço IP que deseja reservar para o cliente,.",
          "4. Insira uma descrição para o cliente.",
          "5. Selecione Habilitar Esta Entrada.",
          "6. Clique em OK."
        ]
      }, {
        type: "step",
        title: "Para modificar ou deletar um cliente existente.",
        content: "Na tabela, clique no ícone Editar ou na lixeira correspondente ao cliente que deseja modificar ou deletar."
                       }]
},
       DHCP_CLIENT_LIST :{ 
               TITLE:"Lista de Clientes DHCP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe as informações de dispositivos conectados no momento."
                       }]
},
    DDNS: {
      TITLE: "DNS Dinâmico",
      CONTENT: [{
        type: "paragraph",
        content: "O DNS Dinâmico permite atribuir um host fixo e nome de domínio para um endereço IP de Internet dinâmico . É útil quando você estiver hospedando seu próprio website, servidor FTP, ou outro servidor através do Roteador. Para começar, você precisa se inscrever com um serviço DNS Dinâmico como www.dyndns.com. Então, insira suas informações de registro."
      }, {
        type: "step",
        title: "Para configurar DNS Dinâmico",
        content: [
          "1. Selecione o provedor de serviços de DNS dinâmico.",
          "2. Insira seu nome de usuário e senha da sua conta de DNS Dinâmico.",
          "3. Insira o nome de domínio que você registrou com o provedor de serviço DNS Dinâmico.",
          "4. Selecione o período de intervalo para qual o pedido de atualização de DNS Dinâmico será enviado.",
          "5. Se o seu provedor de serviços é NO- IP, selecione Vínculo IP WAN para garantir que o nome de domínio esteja ligado ao IP WAN deste roteador .",
          "6. Clique em Login e Salvar."
        ]
      }, {
        type: "note",
        title: "Aviso",
        content: "Se você deseja usar uma nova conta DDNS, faça o login em primeiro lugar e, em seguida, inicie uma sessão com a nova conta."
      }]
    },
    DYNAMIC_DNS: {
      TITLE: "DNS Dinâmico",
      CONTENT: [{
        type: "paragraph",
        content: "O DNS Dinâmico permite atribuir um host fixo e nome de domínio para um endereço IP de Internet dinâmico . É útil quando você estiver hospedando seu próprio website, servidor FTP, ou outro servidor através do Roteador. Para começar, você precisa se inscrever com um serviço DNS Dinâmico como www.dyndns.com. Então, insira suas informações de registro."
      }]
    },
    DOMAIN_NAME_LIST: {
      TITLE: "Lista de Nome de Domínio",
      CONTENT: [{
        type: "paragraph",
        content: "Esta tabela exibe os nomes de domínio DNS Dinâmicos registrados no seu ID TP-Link."
      }, {
        type: "step",
        title: "Para registrar um novo nome de domínio",
        content: [
          "1. Clique em Registrar",
          "2. Insira o nome de domínio.",
          "3. Clique em Salvar."
		]
}]
},
       ADVANCED_ROUTING_STATIC_ROUTING :{ 
               TITLE:"Roteamento Estático",
               CONTENT: [{
                           type: "paragraph",
                           content: "Roteamento estático é utilizado para predeterminar uma rota fixa para pacotes de informação de rede para alcançar um host específico ou rede."
                       } ,{                      
                           type: "step",
                           title: "Para configurar um Roteamento Estático",
       content: [ 
                  "1. Clique em Adicionar.",
	          "2. Destino de Rede - Insira um endereço IP no formato decimal pontilhado para atribuir a rota estática para esta entrada.",
	          "3. Máscara de Sub-rede - Insira uma máscara de sub-rede no formato decimal pontilhado para determinar a porção de rede e porção de host do endereço IP.",
	          "4. Gateway Padrão - Insira um endereço de IP gateway no formato decimal pontilhado para conectar o roteador à rede ou host.",
	          "5. Interface - Selecione LAN ou WAN para especificar o tipo de Destino de Rede.",
	          "6. Descrição - Insira uma breve descrição para esta entrada.",
	          "7. Selecione Habilitar Esta Entrada.",
	          "8. Clique em OK."
		]
} ,{                      
        type: "step",
        title: "Para modificar ou apagar uma entrada existente",
        content: "Na tabela, clique no ícone Editar ou na lixeira correspondente ao cliente que deseja modificar ou deletar."
                       }]
},
       ADVANCED_ROUTING_SYSTEM_ROUTING_TABLE :{ 
               TITLE:"Tabela de Roteamento de Sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe todas as entradas de rota válidos que estão atualmente em uso."
                       }]
},
       WIRELESS_TITLE :{ 
               TITLE:"Configurações Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe todas as entradas de rota válidos que estão atualmente em uso."
                       }]
},
       OFDMA :{ 
               TITLE:"OFDMA",
               CONTENT: [{
                           type: "paragraph",
                           content: "OFDMA enables multiple users to transmit data simultaneously, and thus greatly improves speed and efficiency. Noted that only when your clients also support OFDMA, can you fully enjoy the benefits."
                       }]
},
       WIRELESS_SMART_CONNECT :{ 
               TITLE:"Smart Connect",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selecione esta caixa de seleção para habilitar a função smart connect. Esta função ajuda dispositivos a operarem com maior velocidade ao atribuí-los a melhor banda wireless baseada nas verdadeiras condições a fim de balancear as demandas de rede."
                       }]
},
       WIRELESS_24G :{ 
               TITLE:"Wireless 2.4GHz",
               CONTENT: [{
                           type: "name",
                           title: "Nome de Rede (SSID)",
                           content: "É recomendável alterar o nome de rede (SSID). Este campo é também suscetível à letras maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Escolha se você deseja ocultar o nome da rede 2.4 GHz (SSID) da lista de redes wireless. Quando selecionado, o SSID não será transmitido e você precisa acessar a rede manualmente."
                       } ,{                      
                           type: "name",
                           title: "Segurança",
                           content: "Selecione uma das opções de segurança a seguir:",
       children: [{                      
                           type: "name",
                           title: "Sem Segurança",
                           content: "Selecione esta opção para desabilitar a segurança wireless. Esta não é recomendada."
                       } ,{                      
                           type: "name",
                           id: "WPA3_24G_TITLE",
                           title: "WPA2/WPA3-Pessoal",
                           content: "Selecione esta opção para habilitar o método de padrão de autenticação através da chave de pré-compartilhamento (PSK) também chamada de frase-chave. Caso selecionada, configure a seguir.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança para a sua rede wireless.",
       children: [{                      
                           type: "name",
                           title: "Automático",
                           content: "O modo automático permite a migração gradual para uma rede WPA3-Pessoal, mantendo a interoperabilidade com dispositivos WPA2-Pessoal e sem interrupção dos usuários. Recomenda-se deixar a opção para Auto."
                       } ,{                      
                           type: "name",
                           title: "WPA3-SAE",
                           content: "Wi-Fi networks protected by WPA3-SAE receive more robust password-based authentication through Simultaneous Authentication of Equals (SAE), bringing stronger protections for the networks."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Pessoal",
                           content: "Selecione esta opção para habilitar a segurança wireless. É altamente recomendável que você ative a segurança wireless para proteger sua rede wireless de acessos não-autorizados. Caso selecionado, configure o seguinte.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança. Selecione uma versão de segurança. WPA2-PSK é mais segura. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Criptografia",
                           content: "Selecione um tipo de criptografia de segurança. AES é mais seguro. Não é recomendado usar a criptografia TKIP se o roteador opera em modo 802.11n. Além disso, usando TKIP irá desativar a função WPS. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Senha",
                           content: "Insira a senha wireless entre 8 e 63 caracteres ASCII, ou entre 8 e 64 caracteres hexadecimal neste campo."
                       }]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Empresarial",
                           content: "Selecione esta opção para habilitar o método mais avançado de autenticação utilizando o servidor RADIUS Remote Authentication Dial In User Service). Caso selecionado, a função WPS será desabilitada.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança. WPA2 é mais seguro. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Criptografia",
                           content: "Selecione um tipo de criptografia de segurança. AES é mais seguro. Não é recomendado usar a criptografia TKIP se o roteador opera em modo 802.11n. Além disso, usando TKIP irá desativar a função WPS. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "IP Servidor RADIUS",
                           content: "Insira o endereço IP do servidor RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Porta RADIUS",
                           content: "Insira o número de porta do servidor RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Senha RADIUS",
                           content: "Insira a senha de compartilhamento do servidor RADIUS."
                       }]
} ,{                      
                           type: "name",
                           title: "WEP",
			   id: "WEP_24G_TITLE",
                           content: "Selecione esta opção para habilitar um método básico de autenticação caso algum dos dispositivos clientes possua apenas um acesso utilizando WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selecione um tipo de autenticação para a rede wireless. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Formato de Chave WEP",
                           content: "Utilize formato ASCII ou selecione Hexadecimal. O formato ASCII é uma combinação de caracteres alfabéticos e numéricos. O formato Hexadecimal é uma combinação de números (0-9) e letras (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Chave",
                           content: "Selecione um tamanho de chave WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Permite que você insira 10 dígitos hexadecimais (0-9, A-F, a-f) ou 5 caracteres ASCII no campo de Valor WEP. "
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Permite você inserir 26 dígitos hexadecimais (0-9, A-F, a-f) ou 13 caracteres ASCIIno campor de Valor WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor de Chave",
                           content: "Insira uma chave WEP no campo respectivo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Selecione um canal de operação para a rede wireless 2.4GHz. É recomendável deixar o canal em Auto (Automáico), caso não tenha experiência com problema de conexão wireles intermitente."
                       } ,{                      
                           type: "name",
                           title: "Poder de Transmissão",
                           content: "Selecione Alto, Médio ou Baixo para especificar o poder de transmissão de dados. A configuração padrão e recomendada Alta."
                       } ,{                      
                           type: "name",
                           id: "atf_2g4",
                           title: "Airtime Fairness Feature",
                           content: "Selecione esta caixa de seleção para habilitar o recurso Airtime Fairness (ATF) que permite otimizar o rendimento de cada fluxo. O agendador de tráfego ATF usa as metas de tempo de transmissão por destino para equilibrar o uso de tempo de transmissão em destinos de fluxo."
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_2g4",
                           title: "Multi-User MIMO Feature",
                           content: "Clique em habilitar para usar o recurso MIMO Multi-usuário."
                       }]
},
       WIRELESS_5G :{ 
               TITLE:"Wireless 5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Nome de Rede (SSID)",
                           content: "É recomendável alterar o nome de rede (SSID). Este campo é também suscetível à letras maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Escolha se você deseja ocultar o nome da rede 5GHz (SSID) da lista de redes wireless. Quando selecionado, o SSID não será transmitido e você precisa acessar a rede manualmente."
                       } ,{                      
                           type: "name",
                           title: "Segurança",
                           content: "Selecione uma das opções de segurança a seguir:",
       children: [{                      
                           type: "name",
                           title: "Sem Segurança",
                           content: "Selecione esta opção para desabilitar a segurança wireless. Esta não é recomendada."
                       } ,{                      
                           type: "name",
                           id: "WPA3_5G_TITLE",
                           title: "WPA2/WPA3-Pessoal",
                           content: "Selecione esta opção para habilitar o método de padrão de autenticação através da chave de pré-compartilhamento (PSK) também chamada de frase-chave. Caso selecionada, configure a seguir.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança para a sua rede wireless.",
       children: [{                      
                           type: "name",
                           title: "Automático",
                           content: "O modo automático permite a migração gradual para uma rede WPA3-Pessoal, mantendo a interoperabilidade com dispositivos WPA2-Pessoal e sem interrupção dos usuários. Recomenda-se deixar a opção para Auto."
                       } ,{                      
                           type: "name",
                           title: "WPA3-SAE",
                           content: "Wi-Fi networks protected by WPA3-SAE receive more robust password-based authentication through Simultaneous Authentication of Equals (SAE), bringing stronger protections for the networks."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Pessoal",
                           content: "Selecione esta opção para habilitar a segurança wireless. Esta é altamente recomendada para proteger a rede wireless de acessos não autorizados. Caso selecionado, configure o seguinte.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança. WPA2-PSK é mais seguro. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Criptografia",
                           content: "Selecione um tipo de criptografia de segurança. AES é mais seguro. Não é recomendado usar a criptografia TKIP se o roteador opera em modo 802.11n. Além disso, usando TKIP irá desativar a função WPS. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Senha",
                           content: "Insira a senha wireless entre 8 e 63 caracteres ASCII, ou entre 8 e 64 caracteres hexadecimal neste campo."
                       }]

} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Empresarial",
                           content: "Selecione esta opção para habilitar o método mais avançado de autenticação utilizando o servidor RADIUS Remote Authentication Dial In User Service). Caso selecionado, a função WPS será desabilitada.",
                           children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança. WPA2 é mais seguro. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Criptografia",
                           content: "Selecione um tipo de criptografia de segurança. AES é mais seguro. Não é recomendado usar a criptografia TKIP se o roteador opera em modo 802.11n. Além disso, usando TKIP irá desativar a função WPS. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "IP Servidor RADIUS",
                           content: "Insira o endereço IP do servidor RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Porta RADIUS",
                           content: "Insira o número de porta do servidor RADIUS."
                       } ,{                      
                           type: "name",
                           title: "Senha RADIUS",
                           content: "Insira a senha de compartilhamento do servidor RADIUS."
                       }]

} ,{                      
                           type: "name",
                           title: "WEP",
			   id: "WEP_5G_TITLE",
          		   content: "Selecione esta opção para habilitar um método básico de autenticação caso algum dos dispositivos clientes possua apenas um acesso utilizando WEP (Wired Equivalent Privacy).",
       children: [{                      
                           type: "name",
                           title: "Tipo",
                           content: "Selecione um tipo de autenticação para a rede wireless. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Formato de Chave WEP",
                           content: "Utilize formato ASCII ou selecione Hexadecimal. O formato ASCII é uma combinação de caracteres alfabéticos e numéricos. O formato Hexadecimal é uma combinação de números (0-9) e letras (A-F, a-f)."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Chave",
                           content: "Selecione um tamanho de chave WEP.",
       children: [{                      
                           type: "name",
                           title: "64-bit",
                           content: "Permite que você insira 10 dígitos hexadecimais (0-9, A-F, a-f) ou 5 caracteres ASCII no campo de Valor WEP. "
                       } ,{                      
                           type: "name",
                           title: "128-bit",
                           content: "Permite você inserir 26 dígitos hexadecimais (0-9, A-F, a-f) ou 13 caracteres ASCIIno campor de Valor WEP."
                       }]
} ,{                      
                           type: "name",
                           title: "Valor de Chave",
                           content: "Insira uma chave WEP no campo respectivo."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "Canal",
                           content: "Selecione um canal operacional para a rede wireless de 5GHz. É recomendável deixar o canal em Auto (Automáico), caso não tenha experiência com problema de conexão wireles intermitente."
                       } ,{                      
                           type: "name",
                           title: "Poder de Transmissão",
                           content: "Selecione Alto, Médio ou Baixo para especificar o poder de transmissão de dados. A configuração padrão e recomendada Alta."
                       } ,{                      
                           type: "name",
                           id: "atf_5g",
                           title: "Airtime Fairness Feature",
                           content: "Selecione esta caixa de seleção para habilitar o recurso Airtime Fairness (ATF) que permite otimizar o rendimento de cada fluxo. O agendador de tráfego ATF usa as metas de tempo de transmissão por destino para equilibrar o uso de tempo de transmissão em destinos de fluxo."
                       } ,{                      
                           type: "name",
                           id: "mu_mimo_5g",
                           title: "Multi-User MIMO Feature",
                           content: "Clique em habilitar para usar o recurso MIMO Multi-usuário."
                       }]
},
       WPS :{ 
               TITLE:"WPS",
               CONTENT: [{
                           type: "paragraph",
                           content: "WPS (Wi-Fi Protected Setup) fornece uma abordagem mais fácil para configurar uma conexão Wi-Fi protegida por segurança."
                       } ,{                      
                           type: "name",
                           title: "Apertar Botão(recomendado)",
       content: [ 
                "Este método permite conectar facilmente qualquer dispositivo habilitado para WPS à rede sem fio.",
                "Clique no botão Iniciar WPS na tela. Em dois minutos, pressione o botão WPS no dispositivo cliente."]
} ,{                      
                           type: "name",
                           title: "PIN do Roteador",
       content: [ 
                "O PIN padrão pode ser encontrado na etiqueta do roteador.",
                "Clique em Gerar para obter um novo PIN ou clique em Padrão para restaurar o PIN atual para o PIN padrão de fábrica.."]
} ,{                      
                           type: "name",
                           title: "PIN do Cliente",
       content: [ 
                "Este método permite adicionar um dispositivo sem fio manualmente.",
                "Digite o PIN do dispositivo no campo e clique em Conectar."]
}]
},
       WIRELESS_STATISTICS :{ 
               TITLE:"Estações Wireless Online",
               CONTENT: [{
                           type: "name",
                           title: "Total de Clientes",
                           content: "Exibe o número de clientes wireless associados."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Exibe o endereço MAC do cliente wireless associado."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Conexão",
                           content: "Exibe a frequência de banda wireless (2,4 GHz ou 5GHz) do cliente wireless associado."
                       } ,{                      
                           type: "name",
                           title: "Segurança",
                           content: "Mostra o tipo de segurança do cliente wireless associado."
                       } ,{                      
                           type: "name",
                           title: "Pacotes Recebidos",
                           content: "Mostra o número de pacotes recebidos pelo cliente wireless associado."
                       } ,{                      
                           type: "name",
                           title: "Enviar Pacotes",
                           content: "Mostra o número de pacotes enviados pelo cliente wireless associado."
                       } ,{                      
                           type: "paragraph",
                           content: "Clique em Atualizar para obter informações atualizadas deste página."
                       }]
},
       WIRELESS_SCHEDULE :{ 
               TITLE:"Agenda Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com a Programação Wireless, você pode desativar o sinal wireless durante um período específico. Por exemplo, você pode desligar o sinal sem fio entre 00:00 e 07:00."
                       } ,{                      
                           type: "name",
                           title: "Horário de Desligamento Sem Fio",
                           content: "Exibe o(s) período(s) durante os quais o sinal sem fio está desligado.",
       children: [{                      
                           type: "step",
                           title: "Para configurar o tempo de desligamento sem fio",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Defina o período de tempo durante o qual você precisa que o sinal sem fio esteja desligado..",
                "3. Selecione dias de repetição. Você pode escolher \"Todos os dias\"ou especificar determinados dias..",
                "4. Clique em Salvar."]
}]
}]
},
       GUEST_NETWORK_SETTINGS :{ 
               TITLE:"Configurações",
               CONTENT: [{
                           type: "paragraph",
                           content: "Esta função permite-lhe fornecer acesso Wi-Fi gratuito para os hóspedes sem revelar a rede principal."
                       } ,{                      
                           type: "name",
                           title: "Permite Convidados Acessarem Uns Aos Outros",
                           content: "Selecione esta opção para permitir que os dispositivos wireless da rede para convidados para se comunicar uns com os outros através de métodos tais como vizinhos de rede, Samba, Ping e FTP."
                       } ,{                      
                           type: "name",
                           id: "access_local",
                           title: "Permite Convidados Acessarem Minha Rede Local",
                           content: "Selecione esta opção para permitir que os dispositivos wireless da rede para convidados comuniquem-se com os dispositivos conectados às portas LAN do roteador ou rede principal através de métodos tais como vizinhos de rede, Samba, Ping e FTP."
                       }]
},
       GUEST_NETWORK_WIRELESS :{ 
               TITLE:"Wireless 2.4GHz/5GHz",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar Rede para Convidados",
                           content: "Selecione esta caixa para habilitar a função de Rede para Convidados."
                       } ,{                      
                           type: "name",
                           title: "Nome de Rede (SSID)",
                           content: "Utilize o SSID para Convidado padrão ou crie um novo nome (de até 32 caracteres)."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Selecione esta opção caso queira ocultar o SSID para Convidados da lista de rede Wi-Fi."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Intervalo de Atualização de Senha",
                           content: "Selecione o intervalo de atualização de sua senha de Rede para Convidados."
                       } ,{                      
                           type: "name",
                           title: "Segurança",
                           content: "Quando você escolhe nunca atualizar a senha, selecione uma das seguintes opções de segurança:",
       children: [{                      
                           type: "name",
                           title: "Sem Segurança",
                           content: "Selecione esta opção para desabilitar a segurança wireless. Esta não é recomendada."
                       } ,{                      
                           type: "name",
                           id: "WPA3_GUEST_TITLE",
                           title: "WPA2/WPA3-Pessoal",
                           content: "Selecione esta opção para habilitar o método de padrão de autenticação através da chave de pré-compartilhamento (PSK) também chamada de frase-chave. Caso selecionada, configure a seguir.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança para a sua rede wireless.",
       children: [{                      
                           type: "name",
                           title: "Automático",
                           content: "O modo automático permite a migração gradual para uma rede WPA3-Pessoal, mantendo a interoperabilidade com dispositivos WPA2-Pessoal e sem interrupção dos usuários. Recomenda-se deixar a opção para Auto."
                       } ,{                      
                           type: "name",
                           title: "WPA3-SAE",
                           content: "Redes Wi-Fi protegidas por WPA3-SAE recebem autenticação mais robusta baseada em senha por meio de Autenticação Simultânea de Igualdade (SAE), trazendo proteções mais fortes para as redes."
                       }]
}]
} ,{                      
                           type: "name",
                           title: "WPA/WPA2-Pessoal",
                           content: "Selecione esta opção para habilitar a segurança wireless. É altamente recomendável que você ative a segurança wireless para proteger sua Rede para Convidados de acessos não-autorizados. Caso selecionado, configure o seguinte.",
       children: [{                      
                           type: "name",
                           title: "Versão",
                           content: "Selecione uma versão de segurança. WPA2-PSK é mais seguro. Caso não tenha certeza, selecione Auto."
                       } ,{                      
                           type: "name",
                           title: "Criptografia",
                           content: "Selecione um tipo de criptografia de segurança. AES é mais seguro. Não é recomendado usar a criptografia TKIP se o roteador opera em modo 802.11n. Além disso, usando TKIP irá desativar a função WPS. Caso não tenha certeza, selecione Auto."
                       }]
} ,{                      
                           type: "name",
                           id: "portal-help-title",
                           title: "Portal",
                           content: "Portal authentication enhances your network security by requesting authentication from clients needing temporary access to your wireless network."
                       } ,{                      
                           type: "step",
                           id: "portal-help-content",
                           title: "To set up portal authentication:",
       content: [ 
                "1. Select Portal for Security.",
                "2. Select Simple Password or No Authentication for Authentication.",
                "A. Simple Password – Specify a password for authentication (8-16 alpha characters, numbers and _).",
                "B. No Authentication – Clients can access the network without any authentication.",
                "3. Select 1 Hour, 2 Hours, 4 Hours, 8 Hours or Always to specify the authentication timeout. When a client’s authentication expires, he has to log in again for access authentication.",
                "4. (Optional) Enable Redirect and enter the redirected URL address as needed. Then a newly authenticated client will be redirected to the URL you have specified.",
                "5. (Optional) You can also customize the authentication login page.",
                "A. Portal Title – Up to 31 characters.",
                "B. Terms of Use – Up to 1023 characters.",
                "C. Logo Image – Upload a JPG or PNG image (less than 100KB) to customize the logo.",
                "D. Background Image – Upload a JPG or PNG image (less than 2MB) to customize the background.",
                "6. Clique em Salvar."]
}]
} ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Senha",
                           content: "Crie uma senha entre 8 e 63 caracteres ASCII ou entre 8 e 64 caracteres hexadecimais (0-9, a-f, A- F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Senha",
                           content: "Utilize a senha gerada aleatoriamente ou crie uma senha entre 8 e 63 caracteres ASCII ou hexadecimais (0-9, a-f, A-F)."
                       }]
},
       NAT :{ 
               TITLE:"ALG",
               CONTENT: [{
                           type: "paragraph",
                           content: "ALG (Gateway de Camada de Aplicação) permite filtros tranversais NAT a serem plugados no gateway a fim de serem compatíveis com tradução de endereço e porta para certos protocolos de camadas de aplicação \"control/data\": FTP, TFTP, H323 etc. Habilitar ALG é recomendável."
                       } ,{                      
                           type: "name",
                           title: "Habilitar FTP ALG",
                           content: "Caso selecionada, a função permite clientes FTP e servidores a transferirem dados via NAT."
                       } ,{                      
                           type: "name",
                           title: "Habilitar TFTP ALG",
                           content: "Caso selecionada, a função permite clientes FTP e servidores a transferirem dados via NAT."
                       } ,{                      
                           type: "name",
                           title: "Habilitar ALG H323",
                           content: "Caso selecionado, a função permite clientes Microsoft NetMeeting a se comunicarem via NAT."
                       } ,{                      
                           type: "name",
                           title: "Habilitar RTSP ALG",
                           content: "Caso selecionada, a função permite clientes media player a se comunicarem com com servidores de mídia streaming via NAT"
                       } ,{                      
                           type: "name",
                           title: "Habilitar SIP ALG",
                           content: "Caso selecionada, a função ajuda a prevenir ataques cibernéticos rastreando mais pacotes por sessão. Valida caso o tráfico através da sessão estiver de acordo com o protocolo."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Passagem PPTP",
                           content: "Caso selecionada, a função permite sessões ponto-a-ponto a serem tuneladas através da rede IP e através do roteador."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Passagem L2TP",
                           content: "Caso selecionada, a função permite sessões Layer 2 ponto-a-ponto a serem tuneladas através da rede IP e através do roteador."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Passagem IPSec",
                           content: "Se selecionada, permite IPSec (Internet Protocol Security) a ser encapsulado através de uma rede IP passando pelo roteador. IPSec usa serviços de segurança criptográficos para garantir comunicações privadas e seguras através de redes IP."
                       }]
},
       VIRTUAL_SERVERS :{ 
               TITLE:"Servidores Virtuais",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Servidores Virtuais são utilizados para configurarem servições públicos na sua rede local. Um servidor virtual é definido como uma porta externa, e todas as requisições da Internet da porta externa serão redirecionadas para um computador designado, que deve ser configurado com um endereço IP estático ou reservado",
                "Quando você cria um servidor na rede local e deseja compartilhá-lo na Internet, os Servidores Virtuais podem realizar o serviço e fornecê-lo aos usuários da Internet."]
} ,{                      
                           type: "paragraph",
                           content: "The table displays the relevant parameters of the virtual server."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Serviço",
        		   content: "Mostra o nome do seu servidor virtual."
                       } ,{                      
                           type: "name",
                           title: "Porta Externa",
                           content: "Mostra o número de portas ou variação de portas utilizadas pelo servidor virtual."
                       } ,{                      
                           type: "name",
                           title: "IP Interno",
                           content: "Exibe o endereço IP no computador operando o serviço de aplicação."
                       } ,{                      
                           type: "name",
                           title: "Porta Interna",
                           content: "Mostra o número de portas do computador operando o serviço de aplicação."
                       } ,{                      
                           type: "name",
                           title: "Protocolo",
                           content: "Mostra o protocolo utilizado para o serviço de aplicação: TCP, UDP, ou Todos (Todos os protocolos suportados pelo roteador)."
                       } ,{                      
                           type: "name",
                           title: "Ativo",
                           content: "Mostra o status (habilitado ou desabilitado) da regra de filtragem específica."
                       } ,{                      
                           type: "name",
                           title: "Modificar",
                           content: "Mostra opções de Modificar ou Apagar a regra correspondente."
                       } ,{                      
                           type: "step",
                           title: "Para configurar uma regra de Servidor Virtual",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Clique em Visualizar Aplicações Existentes para selecionar um serviço da lista para preencher automaticamente a porta padrão nos campos de Porta Externa e Porta Interna. Caso o serviço não esteja listado, insira o número de porta externa (ex.: 21) ou variação de portas (ex.: 21-25). Deixe a Porta Interna em branco caso seja tenho o mesmo valor da Porta Externa ou insira um número específico (ex.: 21) caso a Porta Externa seja uma porta única. Insira o endereço IP do computador que utiliza a aplicação na linha pontilhada decimal no campo IP Interno.",
                "3. Selecione um protocolo para o serviço de aplicação: TCP, UDP ou Todos da lista de protocolos na lista.",
                "4. Selecione Habilitar Esta Entrada.",
                "5. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
       content: [ 
                "1. Se você deseja desativar esta entrada, clique no ícone Bulb.",
								"2. Recomenda-se manter as configurações padrão da Porta interna e do Protocolo se você não tiver certeza sobre qual porta ou protocolo usar.",
								"3. Se o dispositivo host local estiver hospedando mais de um tipo de serviço disponível, você precisará criar uma regra para cada serviço. Observe que a porta externa NÃO deve ser sobreposta."
                ]
}]
},
       PORT_TRIGGERING :{ 
               TITLE:"Porta de Disparo",
               CONTENT: [{
                           type: "paragraph",
                           content: "O Disparo de Porta é utilizado para redirecionar tráfego de determinada porta para um servidor de rede na rede."
                       } ,{                      
                           type: "paragraph",
                           content: "A tabela apresenta os parâmetros relevantes da porta de disparo."
                       } ,{                      
                           type: "name",
                           title: "Aplicação",
                           content: "Exibe o nome da aplicação."
                       } ,{                      
                           type: "name",
                           title: "Porta de Disparo",
                           content: "Exibe a porta de tráfego de saída utilizada para disparar uma regra de filtragem de uma conexão de saída."
                       } ,{                      
                           type: "name",
                           title: "Protocolo de Disparo",
                           content: "Exibe o protocolo utilizado pela Porta de Disparo. TCP, UDP, ou Todos (Todos os protocolos suportados pelo roteador)."
                       } ,{                      
                           type: "name",
                           title: "Porta Externa",
                           content: "Mostra a porta ou alcance de porta utilizado pelo sistema remoto. Uma resposta utilizando uma destas portas será encaminhada ao PC que dispara esta regra. Você pode inserir no máximo 5 grupos de portas (ou seções de portas). cada grupo deve ser separado por \",\" (vírgulas), por exemplo, 2000-2038, 2046, 2050-2051, 2085, 3010-3030."
                       } ,{                      
                           type: "name",
                           title: "Protocolo Externo",
                           content: "Mostra o protocolo utilizado para a Porta de Entrada: TCP, UDP, ou Todos (Todos os protocolos suportados pelo roteador)."
                       } ,{                      
                           type: "name",
                           title: "Ativo",
                           content: "Mostra o status (habilitado ou desabilitado) da regra de filtragem específica."
                       } ,{                      
                           type: "name",
                           title: "Modificar",
                           content: "Mostra opções de Modificar ou Apagar a regra correspondente."
                       } ,{                      
                           type: "step",
                           title: "Para configurar uma regra de Porta de Disparo",
       content: [{                      
                           type: "note",
                           title: "Aviso",
                           content: "Cada regra pode somente ser utilizada por um host por vez."
                       },
                "1. Clique em Adicionar.",
                "2. Click em Visualizar Aplicações Existentes para selecionar uma aplicação da lista para preencher automaticamente os valores padrão nos campos apropriados Caso precise adicionar uma aplicação não listada, insira manualmente a Aplicação, Porta de Disparo, Protocolo de Disparo, Porta Externa e Protocolo Externo.",
                "3. Selecione Habilitar Esta Entrada.",
                "4. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Caso queria desabilitar esta regra, clique no ícone da lâmpada."
                       }]
},
       DMZ :{ 
               TITLE:"DMZ",
               CONTENT: [{
                           type: "paragraph",
                           content: "A função host DMZ (Zona Desmilitarizada) permite um host local a ser exposto à Internet para propósitos específicos como jogos online ou vídeo-conferência. Basicamente, o DMZ permite que um único computador na LAN abra todos as suas portas. Este computador tem de ser configurado com um endereço IP estático e tem a sua função de cliente DHCP desativado."
                       } ,{                      
                           type: "paragraph",
                           content: "Quando DMZ está habilitado, o host DMZ está totalmente exposto à Internet , o que pode trazer algum risco de segurança potencial para o computador . Caso o DMZ não esteja em uso, favor desabilitá-lo em tempo."
                       } ,{                      
                           type: "step",
                           title: "Para atribuir um computador ou servidor para serem servidor DMZ.",
       content: [ 
                "1. Selecione Habilitar DMZ.",
                "2. No campo de endereço IP Host DMZ, insira o endereço IP do computador local para configurar como o Host DMZ.",
                "3. Clique em Salvar."]
}]
},
       UPNP :{ 
               TITLE:"UPnP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Por padrão, a função Plug-and-Play Universal (UPnP) é habilitada para permitir dispositivos, como computadores e outros dispositivos de Internet para se descobrirem e se comunicarem entre si na rede local."
                       } ,{                      
                           type: "paragraph",
                           content: "Você pode precisar habilitar o UPnP se quiser usar aplicativos para jogos multijogador, conexões ponto a ponto, comunicação em tempo real (como VoIP ou conferência teleVoIP) ou assistência remota, etc."
                       } ,{                      
                           type: "name",
                           title: "Lista de Serviços UPnP",
                           content: "A lista de serviços UPnP exibe as informações UPnP do(s) host(s) local(is)."
                       }]
},
       MODEM :{ 
               TITLE:"Ajuda 3G/4G",
               CONTENT: [{
                           type: "name",
                           title: "Modem USB 3G/4G",
                           content: "Mostra o status do modem USB 3G/4G."
                       } ,{                      
                           type: "name",
                           title: "Utilize parâmetros autoidentificados pelo provedor.",
                           content: "Esta função é habilitada por padrão. Se ativado, o roteador pode identificar o provedor para o cartão SIM/UIM e preencher os parâmetros automaticamente. Se a identificação falhar, por favor selecione a região e o Provedor Móvel manualmente."
                       } ,{                      
                           type: "name",
                           title: "Região",
                           content: "Automatically selects and displays the region when the USB modem and SIM card are successfully identified. If not select the region from the drop-down menu."
                       } ,{                      
                           type: "name",
                           title: "ISP Móvel",
                           content: "Mostra o provedor da rede 3G/4G. Caso não seja detectado, selecione o provedor do menu a seguir. O Número de Discagem e APN padrões serão preenchidos automaticamente."
                       } ,{                      
                           type: "name",
                           title: "SIM/UIM PIN",
                           content: "If the SIM/UIM Protection is enabled, enter the PIN code. The SIM/UIM Protection is disabled by default. Please note that if you enter invalid PIN 3 times, the SIM/UIM card will be locked automatically. You can only unlock it by entering the PUK code from the PC/laptop."
                       } ,{                      
                           type: "name",
                           title: "Mensagem",
                           content: "Displays the PIN infomation of the SIM/UIM card if the PIN Protection is enabled."
                       } ,{                      
                           type: "name",
                           title: "Configure o Número de Discagem, APN, Nome de Usuário e Senha manualmente",
                           content: "If the ISP is not listed in the <strong>Mobile ISP</strong> list, select this checkbox and enter the Dial Number, APN (Access Point Name), Username and Password that are provided by the ISP."
                       } ,{                      
                           type: "name",
                           title: "Número de Discagem",
                           content: "Enter the Dial Number provided by the ISP."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Enter the APN (Access Point Name) provided by the ISP."
                       } ,{                      
                           type: "name",
                           title: "Nome de Usuário/Senha",
                           content: "Enter the User Name and Password provided by the ISP. These fields are case-sensitive."
                       } ,{                      
                           type: "name",
                           title: "Conexão Sob Demanda",
                           content: "Neste modo, a conexão Internet será encerrada automaticamente após um atingir um tempo específico de inatividade (Tempo Máximo de Inatividade). A conexão é reestabelecida quando você é solicitado a acessar a Internet novamente."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Algumas vezes, a conexão não pode ser interrompida, mesmo que você especifique o Tempo Ocioso Máximo, porque algumas aplicações continuam acessando a Internet em segundo plano."
                       } ,{                      
                           type: "name",
                           title: "Conectar automaticamente",
                           content: "Neste modo, a conexão se restaura automaticamente em qualquer momento que for desconectada."
                       } ,{                      
                           type: "name",
                           title: "Conectar Manualmente",
                           content: "Neste modo, você pode clicar no botão Conectar ou Desconectar para controlar a conexão manualmente. Este modo também suporta a função de Tempo Máximo de Inatividade. Insira um tempo (em minutos) máximo para que a Internet fique inativa no campo Tempo Máximo de Inatividade. O valor padrão é de 15 minutos. Caso queira que a conexão permaneça ativa o tempo todo, insira 0 (zero)."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Algumas vezes, a conexão não pode ser interrompida, mesmo que você especifique o Tempo Ocioso Máximo, porque algumas aplicações continuam acessando a Internet em segundo plano."
                       } ,{                      
                           type: "paragraph",
                           content: "Click the Save button to save the settings."
                       }]
},
       MODEM_ADVANCED :{ 
               TITLE:"3G/4G Advanced Settings Help",
               CONTENT: [{
                           type: "name",
                           title: "Modem USB 3G/4G",
                           content: "Mostra o status do modem USB 3G/4G."
                       } ,{                      
                           type: "name",
                           title: "Utilize parâmetros autoidentificados pelo provedor.",
                           content: "Esta função é habilitada por padrão. Se ativado, o roteador pode identificar o provedor para o cartão SIM/UIM e preencher os parâmetros automaticamente. Se a identificação falhar, por favor selecione a região e o Provedor Móvel manualmente."
                       } ,{                      
                           type: "name",
                           title: "Região",
                           content: "Automatically selects and displays the region when the USB modem and SIM card are successfully identified. If not, select the region from the drop-down menu."
                       } ,{                      
                           type: "name",
                           title: "ISP Móvel",
                           content: "Mostra o provedor da rede 3G/4G. Caso não seja detectado, selecione o provedor do menu a seguir. O Número de Discagem e APN padrões serão preenchidos automaticamente."
                       } ,{                      
                           type: "name",
                           title: "SIM/UIM PIN",
                           content: "If the SIM/UIM Protection is enabled, enter the PIN code. The SIM/UIM Protection is disabled by default. Please note that if you enter invalid PIN 3 times, the SIM/UIM card will be locked automatically. You can only unlock it by entering the PUK code from the PC/laptop."
                       } ,{                      
                           type: "name",
                           title: "Mensagem",
                           content: "Displays the PIN infomation of the SIM/UIM card  if the PIN Protection is enabled."
                       } ,{                      
                           type: "name",
                           title: "Configure o Número de Discagem, APN, Nome de Usuário e Senha manualmente",
                           content: "If the ISP is not listed in the <strong>Mobile ISP</strong> list, select this checkbox and enter the Dial Number, APN (Access Point Name), Username and Password that are provided by the ISP."
                       } ,{                      
                           type: "name",
                           title: "Número de Discagem",
                           content: "Enter the Dial Number provided by the ISP."
                       } ,{                      
                           type: "name",
                           title: "APN",
                           content: "Enter the APN (Access Point Name) provided by the ISP."
                       } ,{                      
                           type: "name",
                           title: "Nome de Usuário/Senha",
                           content: "Enter the User Name and Password provided by the ISP. These fields are case-sensitive."
                       } ,{                      
                           type: "name",
                           title: "Conexão Sob Demanda",
                           content: "Neste modo, a conexão Internet será encerrada automaticamente após um atingir um tempo específico de inatividade (Tempo Máximo de Inatividade). A conexão é reestabelecida quando você é solicitado a acessar a Internet novamente."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Algumas vezes, a conexão não pode ser interrompida, mesmo que você especifique o Tempo Ocioso Máximo, porque algumas aplicações continuam acessando a Internet em segundo plano."
                       } ,{                      
                           type: "name",
                           title: "Conectar automaticamente",
                           content: "Neste modo, a conexão se restaura automaticamente em qualquer momento que for desconectada."
                       } ,{                      
                           type: "name",
                           title: "Conectar Manualmente",
                           content: "Neste modo, você pode clicar no botão Conectar ou Desconectar para controlar a conexão manualmente. Este modo também suporta a função de Tempo Máximo de Inatividade. Insira um tempo (em minutos) máximo para que a Internet fique inativa no campo Tempo Máximo de Inatividade. O valor padrão é de 15 minutos. Caso queira que a conexão permaneça ativa o tempo todo, insira 0 (zero)."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Algumas vezes, a conexão não pode ser interrompida, mesmo que você especifique o Tempo Ocioso Máximo, porque algumas aplicações continuam acessando a Internet em segundo plano."
                       } ,{                      
                           type: "name",
                           title: "Tipo de Autenticação",
                           content: "Select an authentication type. The default is Auto. Some ISPs require a specific authentication type, please confirm it with the ISP or keep the default settings."
                       } ,{                      
                           type: "name",
                           title: "Automático",
                           content: "If Auto (default), the router automatically determines the authentication type used by the ISP."
                       } ,{                      
                           type: "name",
                           title: "PAP",
                           content: "Caso o protocolo PAP (Password Authentication Protocol), o roteador autentica com outro peer utilizando dois handshakes. Selecione esta opção caso o provedor solicite este tipo de autenticação."
                       } ,{                      
                           type: "name",
                           title: "CHAP",
                           content: "Caso o protocolo CHAP (Challenge Handshake Authentication Protocol), o roteador autentica com três handshakes e valida a identificação do peer periodicamente. Selecione esta opção caso o provedor solicite este tipo de autenticação."
                       } ,{                      
                           type: "name",
                           title: "Tamanho MTU",
                           content: "The default MTU (Maximum Transmission Unit) size is 1480 bytes. Do not change it unless required by the ISP."
                       } ,{                      
                           type: "name",
                           title: "Utilize o servidor DNS seguinte",
                           content: "If the ISP provides DNS server IP addresses, select this checkbox and enter the <strong>Primary DNS</strong> and Secondary DNS (optional) IP addresses below. Otherwise, the DNS servers will be assigned dynamically by the ISP."
                       } ,{                      
                           type: "name",
                           title: "DNS Primário",
                           content: "Enter the DNS IP address in dotted-decimal notation provided by the ISP."
                       } ,{                      
                           type: "name",
                           title: "DNS Secundário",
                           content: "(Optional) Enter another DNS IP address in dotted-decimal notation provided by the ISP."
                       } ,{                      
                           type: "paragraph",
                           content: "Click the <strong>Save</strong> button to save the settings."
                       }]
},
       DISK_SETTING :{ 
               TITLE:"Configurações do Dispositivos",
               CONTENT: [{
                           type: "paragraph",
                           content: "A página de Configurações do Dispositivo mostra as informações de qualquer dispositivo de armazenamento USB conectado através da porta USB. "
                       } ,{                      
                           type: "name",
                           title: "Buscar",
                           content: "Normalmente, o roteador detecta automaticamente qualquer dispositivo conectado. Caso contrário, clique neste botão para procurar por algum dispositivo conectado recentemente e atualize a página com as novas informações."
                       } ,{                      
                           type: "name",
                           title: "Volume",
                           content: "Mostra o nome do volume USB"
                       } ,{                      
                           type: "name",
                           title: "Capacidade",
                           content: "Mostra a capacidade de armazenamento USB total."
                       } ,{                      
                           type: "name",
                           title: "Espaço Livre",
                           content: "Mostra o espaço livre disponível atual para armazenamento."
                       } ,{                      
                           type: "name",
                           title: "Remover com Segurança",
                           content: "Clique neste botão para desconectar um dispositivo USB do roteador antes de fazê-lo fisicamente."
                       } ,{                      
                           type: "paragraph",
                           content: "Remove button only appears when the USB storage device is connected to the router. When the current volume is busy, you are unable to unmount."
                       } ,{                      
                           type: "name",
                           title: "Ativo",
                           content: "Esta tabela aparece somente quando há um dispositivo USB conectado ao roteador. Selecione para habilitar o compartilhamento de arquivos do dispositivo USB."
                       } ,{                      
                           type: "step",
                           title: "Para configurar um servidor de arquivo.",
       content: [ 
                "1. Conecte o dispositivo USB de armazenamento à porta do roteador utilizando um cabo USB.",
                "2. O dispositivo USB recém-conectado deve ser automaticamente detectado pelo roteador e exibir suas informções sob a seção de Configurações do Aparelho. Caso contrário, clique em Procurar.",
                "3. Selecione Ativo para habilitar o comaprtilhamento de arquivo"]
}]
},
       FOLDER_SHARE_ACCOUNT :{ 
               TITLE:"Conta de Compartilhamento",
               CONTENT: [{
                           type: "name",
                           title: "Conta",
                           content: "Você pode tanto selecionar Utilizar a Conta Padrão para fazer login nos arquivos compartilhados e pastas ou Utilizar Nova Conta e inserir o seguinte para criar uma nova conta de usuário."
                       } ,{                      
                           type: "name",
                           title: "Nome de Usuário/Senha",
                           content: "Enter a username between 1 and 15 alphanumeric or under line string of characters and a password between 1 and 15 ASCII characters. These fields are case-sensitive."
                       } ,{                      
                           type: "name",
                           title: "Confirmar Senha",
                           content: "Insira novamente a senha para confirmar se não há algum erro de digitação. Este campo é também suscetível à letras maiúsculas e minúsculas."
                       } ,{                      
                           type: "paragraph",
                           content: "Click Save to save all the settings."
                       }]
},
       FOLDER_SHARE_SETTINGS :{ 
               TITLE:"Configurações de Compartilhamento",
               CONTENT: [{
                           type: "name",
                           title: "Rede/Nome de Servidor de Mídia",
                           content: "Mostra o nome utilizado para acessar o dispositivo de armazenamento USB conectado."
                       } ,{                      
                           type: "name",
                           title: "Habilitar",
                           content: "Selecione para habilitar o método de acesso."
                       } ,{                      
                           type: "name",
                           title: "Método de Acesso",
                           content: "Há três métodos de acesso para permitir ao dispositivo de compartilhamento USB. Você pode escolher um ou mais métodos selecionando a checkbox correspondente.",
       children: [{                      
                           type: "name",
                           title: "Ambiente de Rede",
                           content: "If enabled, users on the network can access the USB storage device using an assigned IP address (e.g. \\\\192.168.0.1)."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "If enabled, the FTP clients on the local network can access the USB storage device using the assigned IP address, followed by the FTP server's port number (e.g. ftp://192.168.0.1:21)."
                       } ,{                      
                           type: "name",
                           title: "FTP (Via Internet)",
                           content: "Caso habilitado, usuários podem acessar via remota o dispositivo USB de compartilhamento através de FTP pela Internet. Esta função suporta tanto downloads como uploads de arquivos. Para alterar o número de porta do servidor FTP, insira um número de porta e clique em Salvar para aplicar as alterações."
                       }]
} ,{                      
                           type: "name",
                           title: "Link",
                           content: "Exibe o endereço utilizado para acessar o dispositivo de compartilhamento USB compartilhado."
                       } ,{                      
                           type: "name",
                           title: "Porta",
                           content: "Exibe o número de porta do servidor FTP."
                       } ,{                      
                           type: "paragraph",
                           content: "Click Save to save all the settings."
                       }]
},
       FOLDER_SHARE_FOLDERS :{ 
               TITLE:"Compartilhamento de Pasta",
               CONTENT: [{
                           type: "name",
                           title: "Compartilhar Todos",
                           content: "Alterne para On para compartilhar todos os arquivos e pastas ou Off mpara compartilhar somente as pastas selecionadas."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Autenticação",
                           content: "É recomendável habilitar autenticação para solicitar aos usuários um nome de usuário e senha válidos para acessarem as pastas de compartilhamento."
                       } ,{                      
                           type: "name",
                           title: "Nome da Pasta",
                           content: "Mostra o nome da Pasta de Compartilhamento"
                       } ,{                      
                           type: "name",
                           title: "Caminho da Pasta",
                           content: "Exibe o caminho para a pasta compartilhada."
                       } ,{                      
                           type: "name",
                           title: "Compartilhamento de Mídia",
                           content: "Indica se a pasta de compartilhamento tem permissão para compartilhamento de mídia ou não."
                       } ,{                      
                           type: "name",
                           title: "Nome do Volume",
                           content: "Mostra o nome da Pasta de Compartilhamento"
                       } ,{                      
                           type: "name",
                           title: "Ativo",
                           content: "Indica o staus da pasta compartilhada através do indicador em formato de lâmpada."
                       } ,{                      
                           type: "name",
                           title: "Modificar",
                           content: "Exibe opções para Modificar ou Apagar a pasta de compartilhamento correspondente."
                       } ,{                      
                           type: "name",
                           title: "Buscar",
                           content: "Clique em procurar por uma pasta de compartilhamento."
                       } ,{                      
                           type: "name",
                           title: "Permitir Acesso Rede para Convidados",
                           content: "Selecione permitir clientes na Rede para Convidados para acessar pastas de compartilhamentos."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Autenticação",
                           content: "Selecione para solicitar usuários a acessarem as pastas compartilhadas com um nome de usuário e senha válidos."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Permissão Editar",
                           content: "Selecione para permitir usuários a fazerem alterações no conteúdo da pasta."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Compartilhamento de Mídia.",
                           content: "Selecione para habilitar compartilhamento de mídia."
                       } ,{                      
                           type: "name",
                           title: "Atualizar",
                           content: "Clique para atualizar a lista da pasta de compartilhamento."
                       }]
},
       PRINT_SERVER :{ 
               TITLE:"Servidor de Impressão",
               CONTENT: [{
                           type: "name",
                           title: "Servidor de Impressão",
                           content: "Toggle On to enable the Printer Server function."
                       } ,{                      
                           type: "name",
                           title: "Nome de Impressora",
                           content: "Displays the name of the printer connected to the router."
                       }]
},
       TIME_MACHINE :{ 
               TITLE:"Time Machine",
               CONTENT: [{
                           type: "paragraph",
                           content: "A função Time Machine faz backup de todos os arquivos em seu computador Mac em um dispositivo USB conectado ao seu modem roteador."
                       } ,{                      
                           type: "name",
                           title: "Habilitar ",
                           content: "Selecione estan caixa de seleção para habilitar a função de Time Machine."
                       } ,{                      
                           type: "name",
                           title: "Disco de Backup",
                           content: "Selecione uma localização para os backups da Time Machine."
                       } ,{                      
                           type: "name",
                           title: "Limite de Tamanho para Backups",
                           content: "Separe quanto espaço de disco pode ser utilizado para backups da Time Machine. 0 significa nenhum limite para espaço."
                       } ,{                      
                           type: "name",
                           title: "Salvar",
                           content: "Clique para salvar suas alterações."
                       }]
},
       OFFLINE_DOWNLOAD :{ 
               TITLE:"Download Offline",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com esta função habilitada, o roteador pode baixar arquivos sem a necessidade do computador permanecer ligado. "
                       } ,{                      
                           type: "name",
                           title: "Ativo",
                           content: "Alterne para On para habilitar a função Download Offline."
                       } ,{                      
                           type: "name",
                           title: "Caminho da Pasta",
                           content: "Selecione um caminho de diretório para armazenar seus downloads.",
       children: [{                      
                           type: "note",
                           title: "Aviso",
                           content: "Não altere o caminho do diretório ou desconecte o dispositivo de armazenamento USB enquanto estiver fazendo upload/download, caso contrário, alguns erros fatais podem ocorrer."
                       }]
} ,{                      
                           type: "name",
                           title: "Agenda",
                           content: "Selecione a função para habilitar a Agenda que permite que você especifique um período de tempo para download/upload de arquivos."
                       } ,{                      
                           type: "name",
                           title: "Manter o Upload Após Completar Tarefas",
                           content: "Selecione a checkbox para manter o upload de dados dos downloads completos para outros."
                       } ,{                      
                           type: "name",
                           title: "Número máximo de Downloads Ativo",
                           content: "Enter a value between 1 and 10 to set the maximum number of active downloads. The default value is 5."
                       }]
},
       OFFLINE_DOWNLOAD_ITEMS :{ 
               TITLE:"Downloads",
               CONTENT: [{
                           type: "note",
                           title: "Arquivo",
                           content: "Mostra o nome e o tipo do arquivo de download."
                       } ,{                      
                           type: "note",
                           title: "Velocidade",
                           content: "Mostra a velocidade de download (ou upload)."
                       } ,{                      
                           type: "note",
                           title: "Completo",
                           content: "Exibe o progresso do download."
                       } ,{                      
                           type: "note",
                           title: "Tempo Restante",
                           content: "Mostra o tempo restante do download."
                       } ,{                      
                           type: "note",
                           title: "Peers Conectados",
                           content: "Exibe o número de peers conectados do download."
                       } ,{                      
                           type: "note",
                           title: "Ativo",
                           content: "Exibe o status do download (baixando, aguardando, seeding, pausado, completo ou com erro.)"
                       } ,{                      
                           type: "name",
                           title: "Para adicionar um novo download",
       children: [{                      
                           type: "step",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Select the source of download, torrent from PC, torrent from USB, or URL.",
                "3. Select the torrent location for BT, or enter the URL for FTP, HTTP and aMule.",
                "4. Clique em Salvar.",
                "5. Para a Mule, especifique o endereço IP e porta de servidor aMule em Avançado > Servidor aMule."]
}]
} ,{                      
                           type: "name",
                           title: "Para apagar downloads",
                           content: "Selecione o checkbox do download que deseja apagar, e então clique em Apagar acima da tabela."
                       } ,{                      
                           type: "name",
                           title: "Para pausar downloads",
                           content: "Selecione o checkbox do download que deseja pausar, e então clique em Apagar acima da tabela."
                       } ,{                      
                           type: "name",
                           title: "Para reiniciar downloads",
                           content: "Clique no checkbox correspondente ao download que deseja reiniciar e clique em Reiniciar acima da tabela."
                       }]
},
       OFFLINE_DOWNLOAD_ADVANCED :{ 
               TITLE:"Avançado",
               CONTENT: [{
                           type: "name",
                           title: "Limites de Velocidade",
                           content: "Especifique a velocidade máxima de download e upload para sua conexão de Internet."
                       } ,{                      
                           type: "name",
                           title: "Velocidade Máxima de Download",
                           content: "Insira um valor entre 1 e 100.000 kB/s para configurar a velocidade máxima de download. O valor padrão é de 1024."
                       } ,{                      
                           type: "name",
                           title: "Velocidade Máxima de Upload",
                           content: "Insira um valor entre 1 e 100.000 kB/s para configurar a velocidade máxima de upload. O valor padrão é de 512."
                       } ,{                      
                           type: "name",
                           title: "Número de Conexões",
                           content: "Especificar o número máximo de conexões."
                       } ,{                      
                           type: "name",
                           title: "Número Máximo Global de Conexões  ",
                           content: "Insira um valor entre 1 e 200 para configurar o número máximo global de conexões. O valor padrão é de 100."
                       } ,{                      
                           type: "name",
                           title: "Número Máximo de Peers Conectados por Torrent",
                           content: "Insira um valor entre 1 e 100 para configurar o número máximo de peers conectados por torrent. O valor padrão é de 50."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Rede DHT",
                           content: "Habilite esta função para melhorar a eficiência de encontrar peers então você poderá aumentar a velocidade de download."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Intercâmbio de Peer",
                           content: "Enable this feature to improve the communication efficiency among the group of peers  so that you can increase the download speed."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Protocolo de Criptografia BitTorrent",
                           content: "Habilite esta função para fortalecer a privacidade e confiabilidade durante o processo de transmissão de dados."
                       } ,{                      
                           type: "name",
                           title: "Servidor aMule",
                           content: "Insira o endereço IP e porta do servidor aMulever. O download aMUle opera somente quando o roteador está conectado ao servidor."
                       }]
},
       PARENTAL_CONTROL :{ 
               TITLE:"Controle dos Pais",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com a função de Controle dos Pais, você pode bloquear websites maliciosos, explícitos ou inapropriados; restringir acesso em determinados períodos do dia (por exemplo, Facebook ou YouTube durante o período de trabalho);"
                       }]
},
       PARENTAL_CONTROL_DEVICES :{ 
               TITLE:"Dispositivos Sob Controle dos Pais",
               CONTENT: [{
                           type: "paragraph",
                           content: "This table displays the information and settings of the devices that are currently restricted by Parental Controls."
                       } ,{                      
                           type: "step",
                           title: "Para restringir um dispositivo de um novo cliente",
       content: [ 
                "1. Toggle On Parental Controls.",
                "2. Click Add.",
                "3. Click Scan to choose a currently connected device from the Access Devices List; or enter the Device Name and MAC Address manually to add a device that is not connected.",
                "4. Click the Effective Time icon to specify a time period during which the restriction applies.",
                "5. Enter a brief description into the Description field. This field is optional.",
                "6. Select Enable This Entry.",
                "7. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "If you want to disable this entry, click the Bulb icon."
                       }]
},
       PARENTAL_CONTROL_RESTRICTION :{ 
               TITLE:"Restrição de Conteúdo",
               CONTENT: [{
                           type: "paragraph",
                           content: "Content Restriction allows you to restrict access to specific websites using keywords and domain names. The client devices being controlled by Parental Controls can or cannot access these websites depending on the restriction policy you select."
                       } ,{                      
                           type: "step",
                           title: "To specify the content to access",
       content: [ 
                "1. Toggle On Content Restriction.",
                "2. Select the Restriction Policy according to the needs:",
                "A. If you want the controlled devices to have access to all websites except certain ones, select Blacklist.",
                "B. If you want the controlled devices to only have access to certain websites, select Whitelist.",
                "3. Click Add a New Keyword to add a web address keyword (for example, wikipedia) or domain name to the Blacklist or to the Whitelist.",
                "4. Clique em Salvar."]
}]
},
       PARENTAL_CONTROL_V2 :{ 
               TITLE:"Controle dos Pais",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com perfis de usuários, filtro de conteúdo e limites de acesso, o Controle dos Pais fornece a cada membro de sua família acesso personalizado e apropriado à Internet."
                       } ,{                      
                           type: "step",
                           title: "Para aplicar Controle dos Pais em um novo dispositivo.",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Insira um nome para este perfil e clique \"+\" para adicionar um dispositivo sob este perfil.",
                "3. Personalize o Conteúdo Bloqueado de acordo com suas necessidades. Todos os sites que contenham as palavras-chave serão bloqueados.",
                "4. Caso queria limitar o período total que este perfil pode ficar online, habilite e especifique o Limite de Período. Você pode também utilizar a Hora de Dormir para definir um horário diário em que dispositivos neste perfil possam utilizar a Internet.",
                "5. Clique em Salvar."]
} ,{                      
                           type: "step",
                           title: "Para visualizar um histórico de internet detalhado",
       content: [ 
                "1. Na coluna Critérios, clique nos botões de Critérios correspondentes.",
                "2. Caso queira visualizar mais registros, clique no botão <span class=\"ptl-ctr-help-icon history\"></span> Histórico.",
                "3. Você pode bloquear ou desbloquear websites clicando nos botões <span class=\"ptl-ctr-help-icon block\"></span> ou <span class=\"ptl-ctr-help-icon unblock\"></span>."]
} ,{                      
                           type: "step",
                           title: "Para desativar ou ativar o acesso à Internet imediatamente",
       content: [ 
                "Na coluna Acesso à Internet, clique em <span class=\"ptl-ctr-help-icon stop\"></span> para impedir que os dispositivos do perfil correspondente acessem a Internet e clique em <span class=\"ptl-ctr-help-icon enable\"></span> para permitir o acesso novamente."]
}]
},
       QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "O QoS (Qualidade de Serviço) ajuda a priorizar o tráfego da Internet baseando-se nas necessidades. Você pode especificar o nível de prioridade para um dispositivo ou uma aplicação na lista de regra QoS."
                       } ,{                      
                           type: "note",
                           id: "qos-boost",
                           title: "Aviso",
                           content: "Se a função NAT Boost for habilitada, o QoS deve ser desabilitada."
                       } ,{                      
                           type: "name",
                           title: "Largura de Banda para Upload",
                           content: "Insira a largura de banda máxima para upload fornecidos pelo seu provedor."
                       } ,{                      
                           type: "name",
                           title: "Largura de Banda para Download",
                           content: "Insira a largura de banda máxima para download fornecidos pelo seu provedor."
                       }]
},
       QOS_ADV :{ 
               TITLE:"Avançado",
               CONTENT: [{
                           type: "name",
                           title: "Alta/Média/Baixa Prioridade",
                           content: "Especifique uma porcentagem para o tráfego de alta/média/baixa prioridade.",
       children: [{                      
                           type: "note",
                           title: "Aviso",
                           content: "A quantidade máxima (porcentagem) de todas as prioridade é de 100%."
                       }]
}]
},
       QOS_RULE :{ 
               TITLE:"Lista de Regras QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Here you can add detailed QoS rules to proritize the Internet traffic."
                       } ,{                      
                           type: "step",
                           title: "To set up a QoS rule",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Select a priority type to add the QoS rule.",
                "By Device - Click Scan to select the desired device, or manually enter a device name and its MAC address.",
                "By Application - Select the desired application or customize an application by configuring the name, protocol and destination port (1-65535).  You can enter a single port or multiple ports or port range, separated by commas (e.g. 21,36-105,111).",
                "By Physical Port - Select your desired port.",
                "3. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "You can drag a rule among different priority lists to change its priority."
                       }]
},
       QOS_DATABASE :{ 
               TITLE:"Atualizar Base de Dados",
               CONTENT: [{
                           type: "paragraph",
                           content: "Vamos lançar a versão mais recente do banco de dados em www.tp-link.com. Você pode baixar e atualizar o banco de dados do roteador para estender suas aplicações suportadas."
                       } ,{                      
                           type: "name",
                           title: "Novo Arquivo de Base de Dados",
                           content: "Clique em Procurar para localizar o arquivo de banco de dados mais recente. Selecione-o e clique em Atualizar para atualizar sua base de dados para uma versão mais nova."
                       }]
},
       QOS_V2 :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
        content: "QoS (Qualidade de Serviço) permite que você priorize o tráfego de internet de dispositivos específicos para garantir uma conexão mais rápida quando você precisar dele."
                       }]
},
       QOS_GLOBAL_SETTINGS :{ 
               TITLE:"Configurações globais",
               CONTENT: [{
                           type: "paragraph",
        content: "Largura de Banda para Upload - Insira a largura de banda máxima para upload fornecidos pelo seu provedor."
                       } ,{                      
                           type: "paragraph",
        content: "Largura de Banda para Download - Insira a largura de banda máxima para download fornecidos pelo seu provedor."
                       }]
},
       QOS_DEVICE_PRIORITY :{ 
               TITLE:"Prioridade de Dispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "Escolha os dispositivos que deseja priorizar e quanto tempo ficarão em prioridade."
                       } ,{                      
                           type: "step",
                           title: "Para priorizar um dispositivo",
       content: [ 
                "1. Localize o dispositivo que deseja priorizar na lista e alterne em Prioridade.",
                "2. Selecione quanto tempo o dispositivo será priorizado para na coluna Duração."]
}]
},
       SECURITY_FIREWALL :{ 
               TITLE:"Firewall",
               CONTENT: [{
                           type: "name",
                           title: "Firewall SPI",
                           content: "SPI (Stateful Packet Inspection ) Firewall impede ataques cibernéticos e valida o tráfego que está passando através do roteador baseado no protocolo. Esta função é habilitada por padrão."
                       }]
},
       SECURITY_DOS :{ 
               TITLE:"Proteção DoS",
               CONTENT: [{
                           type: "name",
                           title: "Proteção DoS",
                           content: "A Proteção DoS (Denial of Service) protege a LAN contra ataques DoS de flooding com solicitações ao servidor. Você pode filtrar os seguintes três tipos de ataque, de acordo com suas necessidades. Há 4 níveis para cada filtragem:",
       children: [{                      
                           type: "name",
                           title: "Desligado",
                           content: "Sem proteção."
                       } ,{                      
                           type: "name",
                           title: "Baixa",
                           content: "Proteção de baixo nível e baixo impacto no desempenho do roteador."
                       } ,{                      
                           type: "name",
                           title: "Média",
                           content: "Nível moderado de proteção e impacto quase notável no desempenho do roteador."
                       } ,{                      
                           type: "name",
                           title: "Alta",
                           content: "Nível alto de proteção e impacto notável no desempenho do roteador."
                       }]
} ,{                      
                           type: "name",
                           title: "Filtragem de Ataque ICMP-FLOOD",
                           content: "Habilite para prevenir ataque ICMP-flood (Internet Control Message Protocol).		 "
                       } ,{                      
                           type: "name",
                           title: "Filtragem de Ataque UDP-FLOOD",
                           content: "Habilite para evitar o ataque flood UDP (Protocolo de Datagrama do Ususário)."
                       } ,{                      
                           type: "name",
                           title: "Filtragem de Ataque TCP-SYN-FLOOD",
                           content: "Habilite para impedir ataque flood TCP- SYN (Transmission Control Protocol-Synchronize)."
                       } ,{                      
                           type: "name",
                           title: "Ignorar Pacotes de Ping da Porta WAN",
                           content: "Habilite para ignorar pacotes de ping da porta WAN."
                       } ,{                      
                           type: "name",
                           title: "Proibir Pacotes de Ping da porta LAN",
                           content: "Habilite para proibir pacotes de ping da porta WAN."
                       }]
},
       SECURITY_LIST :{ 
               TITLE:"Lista de Host DoS Bloqueados",
               CONTENT: [{
                           type: "paragraph",
                           content: "Esta tabela mostra o endereço IP e o endereço MAC do host DoS bloqueado."
                       }]
},
       YANDEX_DNS :{ 
               TITLE:"Yandex.DNS",
               CONTENT: [{
                           type: "paragraph",
                           content: "Nesta página você pode configurar filtro Yandex.DNS que irá assegurar seus dispositivos de websites maliciosos e irá restringir os dispositivos das crianças de website adultos. Você pode configurar um filtro geral para todos os dispositivos ou um filtro separado para cada dispositivo."
                       } ,{                      
                           type: "paragraph",
                           content: "Por favor, visite dns.yandex.ru para saber mais sobre o serviço Yandex.DNS"
                       } ,{                      
                           type: "name",
                           title: "Habilitar Yandex.DNS para todos os dispositivos",
                           content: "Lista os endereços IP e MAC de qualquer fonte de ataque DoS bloqueada."
                       } ,{                      
                           type: "name",
                           title: "Desabilitado",
                           content: "Significa que, NENHUM filtro Yandex.DNS irá operar em todos os dispositivos."
                       } ,{                      
                           type: "name",
                           title: "Básico",
                           content: "Significa que, o filtro BasicYandex.DNS irá operar em todos os dispositivos."
                       } ,{                      
                           type: "name",
                           title: "Seguro",
                           content: "Significa que, nenhum filtro SafeYandex.DNS irá operar em todos os dispositivos."
                       } ,{                      
                           type: "name",
                           title: "Criança",
                           content: "Significa que, o filtro Yandex.DNS irá operar em todos os dispositivos."
                       }]
},
       YANDEX_DNS_GRID :{ 
               TITLE:"Regra de Yandex.DNS para dispositivos especiais",
               CONTENT: [{
                           type: "name",
                           title: "MAC address",
                           content: "Exibe o endereço MAC do dispositivo no qual o filtro Yandex.DNS irá operar."
                       } ,{                      
                           type: "name",
                           title: "Modo de Controle",
                           content: "Exibe o filtro Yandex.DNS escolhido para dispositivo especial."
                       } ,{                      
                           type: "name",
                           title: "Descrição",
                           content: "Exibe a descrição do dispositivo para melhor indentificação do mesmo."
                       } ,{                      
                           type: "paragraph",
                           content: "Para configurar filtros Yandex.DNS específicos para dispositivos especiais, clique em adicionar (\"add\"). Você pode escolher o dispositivo da lista de digitalização ou inserir o endereço MAC manualmente. Selecione o modo de controle especial, (básico, seguro e criança) e dê uma pequena descrição para regra."
                       } ,{                      
                           type: "paragraph",
                           content: "Para adicionar ou apagar a entrada, clique no ícone Lixeira ou Modificar na tabela ."
                       }]
},
       ACCESS_CONTROL :{ 
               TITLE:"Controle de Acesso",
               CONTENT: [{
                           type: "paragraph",
        content: "O Controle de Acesso é utilizado para permitir ou bloquear outros dispositivos de acessarem a sua rede. Quando um dispositico é bloqueado, ele fica incapaz de se comunicar com outros dispositivos ou conectar-se à Internet."
                       } ,{                      
                           type: "step",
                           title: "Para controlar o acesso",
       content: [ 
									"1. Ative para ativar o Controle de acesso.",
									"2. Se você também deseja controlar o acesso dos dispositivos conectados à rede de convidados, ative o controle de dispositivos convidados.",
									"3. Selecione um modo de acesso de acordo com as necessidades e clique em Salvar:",
									"A. Se você deseja bloquear o acesso dos dispositivos na lista abaixo, selecione Lista de Bloqueio.",
									"B. Se você deseja permitir o acesso apenas a partir dos dispositivos na lista abaixo, selecione Lista de Acesso.",
									"4. Na seção Dispositivos na Lista de Bloqueio/Lista de Acesso, clique em Adicionar. Digite o nome do dispositivo e o endereço MAC do dispositivo. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Se você deseja desativar esta entrada, clique no ícone Bulb."
                       }]
},
       ACCESS_DEVICE :{ 
               TITLE:"Dispositivos Online",
               CONTENT: [{
                           type: "paragraph",
                           content: "Essa tabela exibe as informações de todos os dispositivos conectados (incluindo os dispositivos conectados à Rede para Convidados caso o Controle de Dispositivos de Convidados estiver habilitado.)"
                       }]
},
       IPMAC_BIND_SETTING :{ 
               TITLE:"Vínculo IP e MAC",
               CONTENT: [{
                           type: "paragraph",
                           content: "O IP & MAC Binding (também conhecido como ARP Binding) é útil para controlar o acesso de um dispositivo específico na LAN ligando o endereço IP e o endereço MAC do dispositivo. A vinculação IP e MAC também impede que outros dispositivos usem um endereço IP específico."
                       } ,{                      
                           type: "step",
                           title: "Para configurar um dispositivo com IP e MAC Binding",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Insira o endereço MAC do dispositivo.",
                "3. Digite um endereço IP que você deseja vincular ao endereço MAC acima.",
                "4. Selecione Habilitar Esta Entrada.",
                "5. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
       content: [ 
                "1. Você não pode vincular o mesmo endereço IP a mais de um endereço MAC.",
                "2. Se você deseja desativar esta entrada, clique no ícone Bulb."]
}]
},
       IPMAC_BIND_ARP :{ 
               TITLE:"Lista ARP",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra os endereços MAC e IP dos dispositivos conectados atualmente."
                       }]
},
       IPV6 :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "name",
                           title: "IPv6",
                           content: "Pv6 (Internet Protocol versão 6) é a versão mais recente do IP (Internet Protocol) e lida com o problema de exaustão de endereços do padrão IPv4 (Internet Protocol versão 4)."
                       } ,{                      
                           type: "title",
                            title: "Internet Connection Type: IP Dinâmico"
                       } ,{                      
                           type: "name",
                           title: "IP Dinâmico",
                           content: "Selecione este tipo se o provedor utiliza a atribuição dinâmica de endereços IPv6."
                       } ,{                      
                           type: "name",
                           title: "Endereço IPv6/DNS Primário/DNS Secundário",
                           content: "Estes parâmetros são automaticamente atribuídos pelo servidor DHCPv6 do seu provedor."
                       } ,{                      
                           type: "name",
                           title: "Renovar",
                           content: "Clique neste botão para obter novos parâmetros IPv6 do servidor DHCPv6 do provedor."
                       } ,{                      
                           type: "name",
                           title: "Liberar",
                           content: "Clique para liberar todos os endereços IPv6 atribuídos pelo servidor DHCPv6 do provedor."
                       } ,{                      
                           type: "name",
                           title: "Obter Endereço IPv6",
                           content: "Selecione DHCPv6 para obter um endereço IPv6 não temporário ou SLAAC para obter um endereço IPv6 gerado de um pacote de anúncio do roteador, de acordo com o provedor."
                       } ,{                      
                           type: "name",
                           title: "Delegação de Prefixo",
                           content: "Selecione Habilitar para obter uma delegação de prefixo pelo Servidor DHCPv6 do provedor, ou Desabilitar para designar um prefixo de endereço manualmente. Clientas na LAN irão gerar um endereço IPv6 com este prefixo."
                       } ,{                      
                           type: "name",
                           title: "Endereço DNS",
                           content: "Selecione Obter dinamicamente do provedor ou Utilizar o Endereço DNS Seguinte. Caso Utilizar o Endereço DNS seguinte seja selecionado, favor inserir o endereço DNS manualmente oferecido pelo seu provedor."
                       } ,{                      
                           type: "title",
                            title: "Tipo de Conexão de Internet: IP Estático"
                       } ,{                      
                           type: "name",
                           title: "IP Estático",
                           content: "Selecione este tipo caso seu provedor utiliza atribuição de endereço IPv6 Estático."
                       } ,{                      
                           type: "name",
                           title: "Endereço IPv6/Gateway Padrão/DNS Primário/DNS Secundário",
                           content: "Insira estes parâmetros como fornecidos pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Tamanho MTU",
                           content: "O tamanho MTU típico e padrão (Unidade de Transmissão Máxima) é de 1500 Bytes. Não é recomendável alterar o tamanho MTU padrão a menos que seja solicitado pelo provedor."
                       } ,{                      
                           type: "title",
                            title: "Tipo de Conexão de Internet: Túnel 6para4"
                       } ,{                      
                           type: "name",
                           title: "Túnel 6para4",
                           content: "Selecione este tipo caso seu provedor utilize implementação 6para4 para atribuição de endereços."
                       } ,{                      
                           type: "name",
                           title: "Endereço IPv4/Máscara de Sub-rede IPv4/Gateway IPv4 Padrão/Endereço de Túnel",
                           content: "Estes parâmetros serão dinamicamente gerados através da informação IPv4 da porta WAN após você clicar em Conectar."
                       } ,{                      
                           type: "name",
                           title: "Utilize o servidor DNS seguinte",
                           content: "Selecione para inserir manualmente o DNS primário e/ou secundário de DNS fornecidos pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Conectar",
                           content: "Clique neste botão para conectar à Internet."
                       } ,{                      
                           type: "name",
                           title: "Desconectar",
                           content: "Clique neste botão para desconectar da Internet."
                       } ,{                      
                           type: "title",
                            title: "Tipo de Conexão de Internet: PPPoE"
                       } ,{                      
                           type: "name",
                           title: "PPPoE",
                           content: "Selecione este tipo caso seu provedor utilize PPPoEv6, e ofereça um nome de usuário e senha."
                       } ,{                      
                           type: "name",
                           title: "Nome de Usuário/Senha",
                           content: "Insira estes parâmetros como fornecidos pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Endereço IPv6",
                           content: "Este endereço será automaticamente atribuído pelo servidor DHCPv6 do provedor, depois que você inserir o nome de usuário e senha e clicar em Conectar."
                       } ,{                      
                           type: "name",
                           title: "Obter Endereço IPv6",
                           content: "Selecione DHCPv6 para obter um endereço IPv6 não temporário ou SLAAC para obter um endereço IPv6 gerado de um pacote de anúncio do roteador, de acordo com o provedor."
                       } ,{                      
                           type: "name",
                           title: "Delegação de Prefixo",
                           content: "Selecione Habilitar para obter uma delegação de prefixo pelo Servidor DHCPv6 do provedor, ou Desabilitar para designar um prefixo de endereço manualmente. Clientas na LAN irão gerar um endereço IPv6 com este prefixo."
                       } ,{                      
                           type: "name",
                           title: "Endereço DNS",
                           content: "Selecione Obter Dinamicamente do provedor ou Utilizar Endereços DNS Seguintes. Caso Utilizar o Endereço DNS seguinte seja selecionado, favor inserir o endereço DNS manualmente oferecido pelo seu provedor."
                       } ,{                      
                           type: "name",
                           title: "Conectar",
                           content: "Clique neste botão para conectar à Internet."
                       } ,{                      
                           type: "name",
                           title: "Desconectar",
                           content: "Clique neste botão para desconectar da Internet."
                       } ,{                      
                           type: "title",
                            title: "Tipo de Conexão de Internet: Pass-Through (Bridge)"
                       } ,{                      
                           type: "paragraph",
                           content: "Selecione este tipo caso o provedor utiliza implementação de rede Pass-Through (Bridge). Nenhuma configuração é necessária para este tipo de conexão."
                       }]
},
       IPV6_LAN :{ 
               TITLE:"LAN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exceto para o Tipo de Conexão Internet conexão Pass- Through ( Bridge) , os outros tipos de conexão com a Internet requerem a configuração IPv6."
                       } ,{                      
                           type: "name",
                           title: "Tipo Atribuído",
                           content: "Escolha o mais adequado de acordo com o provedor.",
       children: [{                      
                           type: "name",
                           title: "DHCPv6",
                           content: "Para automaticamente atribuir endereços IP aos clientes na LAN.",
       children: [{                      
                           type: "name",
                           title: "Prefixo de Endereço",
                           content: "Digite o prefixo do endereço fornecidos pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Tempo de Liberação",
                           content: "É o tempo de validade do endereço IP atribuído. Ou mantenha o padrão 86400 segundos ou altere-o, se exigido pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Endereço",
                           content: "É o endereço IP atribuído automaticamente pelo servidor DHCPv6 do provedor."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC+DHCP Stateless",
       children: [{                      
                           type: "name",
                           title: "Prefixo de Endereço",
                           content: "Digite o prefixo do endereço fornecidos pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Endereço",
                           content: "É o endereço IP automaticamente atribuído pelo provedor."
                       }]
} ,{                      
                           type: "name",
                           title: "SLAAC+RDNSS",
                           content: " ",
       children: [{                      
                           type: "name",
                           title: "Prefixo de Endereço",
                           content: "Digite o prefixo do endereço fornecidos pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Endereço",
                           content: "É o endereço IP automaticamente atribuído pelo provedor."
                       }]
} ,{                      
                           type: "name",
                           connector: " ",
                           title: "SLAAC+RDNSS",
       children: [{                      
                           type: "name",
                           title: "Prefixo de Endereço",
                           content: "Digite o prefixo do endereço fornecidos pelo provedor."
                       } ,{                      
                           type: "name",
                           title: "Endereço",
                           content: "É o endereço IP automaticamente atribuído pelo provedor."
                       }]
} ,{                      
                           type: "name",
                           id: "ipv6_lan_assigned_type_nd_proxy_name",
                           title: "Proxy ND",
                           content: "A function providing proxies for LAN clients based on Neighbor Discovery Protocol."
                       }]
}]
},
       IPV6_MAC_CLONE :{ 
               TITLE:"Clone de MAC",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selecione o método MAC Clone apropriado conforme sua necessidade."
                       } ,{                      
                           type: "name",
                           title: "NÃO Clonar Endereço MAC",
                           content: "Não altere o endereço MAC padrão do roteador, caso o provedor não vincule o endereço IP atribuído ao endereço MAC."
                       } ,{                      
                           type: "name",
                           title: "Clonar Endereço MAC do Computador Atual",
                           content: "Selecione para copiar o endereço MAC atual do computador que está conectado ao roteador, caso o provedor vincule o endereço IP atribuído ao endereço MAC do computador."
                       } ,{                      
                           type: "name",
                           title: "Utilizar Endereço MAC Personalizado",
                           content: "Insira o endereço MAC manualmente, caso o provedor vincule o endereço IP atribuído ao específico endereço MAC."
                       }]
},
       TIME_SETTING :{ 
               TITLE:"Ajuste de Horário",
               CONTENT: [{
                           type: "paragraph",
                           content: "As configurações de hora permitem configurar a hora do sistema para o roteador. Depois de modificada, a hora do sistema será aplicada às funções e configurações baseadas no tempo, como o Controle dos Pais."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Você pode ativar o recurso de horário de 24 horas antes da configuração, que será aplicado às funções e configurações baseadas no horário do sistema."
                       } ,{                      
                           type: "title",
                            title: "Tempo de Sistema"
                       } ,{                      
                           type: "step",
                           title: "Para obter a hora da Internet",
       content: [ 
                "Selecionado por padrão, Obter da Internet permite que você obtenha a hora do sistema da Internet.",
                "1. Selecione Obter da Internet.",
                "2. Selecione o Fuso Horário local no menu suspenso.",
                "3. No campo NTP Server I, insira o endereço IP ou nome de domínio do servidor NTP desejado.",
                "4. No campo servidor NTP II, insira o endereço IP ou nome de domínio do segundo servidor STP desejado. (Opcional)",
                "5. Clique em Obter.",
                "6. Clique em Salvar."]
} ,{                      
                           type: "step",
                           title: "Para obter a hora do PC",
       content: [ 
                "Este recurso permite que você obtenha a hora do sistema a partir do PC. Confirme a hora do PC antes da configuração.",
                "Selecione Obter do PC e clique em Salvar."]
} ,{                      
                           type: "step",
                           title: "Para definir a hora manualmente",
       content: [ 
                "Se o dispositivo não conseguir obter a hora automaticamente da Internet ou do PC, você pode configurar manualmente a hora do sistema.",
                "1. Selecione Manualmente.",
                "2. Insira a Data e a Hora atuais.",
                "3. Clique em Salvar."]
}]
},
       TIME_SETTING_DAYLIGHT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Período de Horário de Verão",
                           content: "Este recurso pode sincronizar automaticamente a hora do sistema com o horário de verão."
                       } ,{                      
                           type: "step",
                           title: "Para configurar Horário de Verão",
       content: [ 
                "1. Selecione Habilitar Horário de Verão",
                "2. Especifique um período de horário de verão no fuso horário local.",
                "3. Clique em Salvar."]
}]
},
       DIGNOSTIC :{ 
               TITLE:"Diagnósticos",
               CONTENT: [{
                           type: "paragraph",
                           content: "O roteador oferece ferramentas Ping e Traceroute para lhe auxiliar com solução de problemas de conectividade de rede. A ferramenta Ping envia pacotes para um endereço IP ou Nome de Domínio e mostra resultados, como número de pacotes enviados, recebidos e tempo de retorno de resposta. A ferramenta Traceroute envia pacotes para um endereço IP ou Nome de Domínio alvo e mostra o número de saltos e tempo para alcançar o destino."
                       } ,{                      
                           type: "title",
                            title: "Ping e Traceroute"
                       } ,{                      
                           type: "paragraph",
                           content: "A ferramenta Ping envia pacotes para um endereço IP de destino ou nome de domínio e registra os resultados, como o número de pacotes enviados e recebidos e o tempo de ida e volta."
                       } ,{                      
                           type: "paragraph",
                           content: "A ferramenta Traceroute envia pacotes para um endereço IP de destino ou nome de domínio e exibe o número de saltos e o tempo para chegar ao destino."
                       } ,{                      
                           type: "paragraph",
        		   content: "Você pode aplicar ping ou traceroute em um dispositivo local através do endereço IP ou nome de domínio, como por exemplo: tp-link.com, yahoo.com e etc."
                       } ,{                      
                           type: "step",
                           title: "Para diagnósticos utilizando Ping",
			   content: [ 
		                "1.Selecione Ping como a Ferramenta de Diagnóstico..",
		                "2. Insira o endereço IP e Nome de Domínio.",
		                "3. Clique no ícone de flecha para abrir o menu Avançado e especificar a Contagem Ping e Tamanho do Pacote Ping. (Opcional)",
		                "4. Clique em Iniciar."
					]
} ,{                      
                           type: "step",
                           title: "Para diagnósticos utilizando Traceroute.",
			   content: [ 
		                "1. Selecione Traceroute como a Ferramenta de Diagnóstico.",
		                "2. Insira o endereço IP e Nome de Domínio.",
		                "3. Clique no ícone de flecha para abrir o menu Avançado e especificar o número de saltos (a serem alcançados) no campo Traceroute Max TTL. O padrão é 20. (Opcional)",
		                "4. Clique em Iniciar."

				]
}]
},
       PORT_MIRROR :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                            title: "Espelhamento de Porta"
                       } ,{                      
                           type: "paragraph",
                           content: "Port Mirroring refers to the process of forwarding copies of packets from a mirrored port to a mirroring port. Usually, the mirroring port is connected to a data diagnose device, which is used to analyze the mirrored packets for monitoring and troubleshooting the network."
                       } ,{                      
                           type: "step",
                           title: "To forward copies of packets to the designated port",
       content: [ 
                "1. Enable Port Mirroring.",
                "2. Select the desired ports as the mirrored ports.",
                "3. Select a desired port as the mirroring port.",
                "4. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "A port cannot be set as the mirrored port and the mirroring port simultaneously."
                       }]
},
       FIRMWARE :{ 
               TITLE:"Atualização de Firmware",
               CONTENT: [{
                           type: "paragraph",
                           content: "A Atualização de Firmware atualiza o firmware do roteador com novas funções ou correção de erros. É recomendado para atualizar o roteador com o firmware mais recente para ter o melhor desempenho."
                       } ,{                      
                           type: "step",
                           title: "Observando a seguir irá ajudá-lo a evitar a falha de atualização:",
       content: [ 
                "Antes de atualizar",
                "1. Certifique-se de que você tem uma conexão estável entre o roteador e o computador. NÃO é recomendável atualizar o firmware via wireless.",
                "2. Certifique-se de que você tenha removido todos os dispositivos USB conectados ao roteador",
                "3. Lembre-se de fazer backup de arquivo de configuração do roteador.",
                "Durante a atualização",
                "Mantenha o roteador LIGADO até que a atualização se complete."]
}]
},
       FIRMWARE_UPGRADE_ONLINE :{ 
               TITLE:"Para atualizar o firmware online",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Clique em Atualizar e confirme quando solicitado. O roteador irá automaticamente baixar e atualizar para o firmware mais recente. Você também pode clicar em Verificar Atualizações para procurar pela versão mais recente do firmware."]
}]
},
       FIRMWARE_UPGRADE :{ 
               TITLE:"Para atualizar o firmware manualmente",
               CONTENT: [{
                           type: "step",
       content: [ 
                "1. Clique em Suporte na parte inferior da página e baixe o firmware mais recente para o computador. Certifique-se de que o arquivo de firmware que você vai baixar corresponde à versão de hardware do roteador, conforme mostrado na página.",
                "2. Clique em Procurar (Browse) para localizar e selecionar o arquivo de firmware baixado.",
                "3. Clique em Atualizar."]
} ,{                      
                           type: "paragraph",
       content: [ 
                "A atualização de firmware leva alguns minutos para se completar. O roteador irá reiniciar automaticamente quando a atualização do firmware estiver concluída."]
}]
},
       BACKUP :{ 
               TITLE:"Salvar e Restaurar",
               CONTENT: [{
                           type: "paragraph",
                           content: "O recurso Backup e Restaurar permite que você faça backup da configuração atual do roteador para a recuperação, ou simplesmente restaurar o roteador para as configurações padrão."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Favor NÃO desligar o roteador durante o backup ou restaurar o processo."
                       } ,{                      
                           type: "title",
                           title: "Backup",
                           content: "É altamente recomendável fazer backup de suas configurações atuais no caso de uma recuperação a fim de restaurar o sistema para um estado anterior ou a partir dos padrões de fábrica."
                       } ,{                      
                           type: "step",
                           title: "Para fazer backup da configuração atual",
       content: [ 
                "1. Clique em Backup.",
                "2. Aguarde até que o roteador faça backup da configuração atual."]
}]
},
       RESTORE :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Restaurar",
                           content: "Você pode restaurar o roteador para um estado anterior a partir de um arquivo de backup."
                       } ,{                      
                           type: "step",
                           title: "Restaurar a partir de backup",
       content: [ 
                "1. Clique em Procurar.",
                "2. Localize e selecione o arquivo backup.",
                "3. Clique em Restaurar."]
}]
},
       FACTORY :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Restaurar Padrões de Fábrica",
       content: [ 
                "A restauração de fábrica irá remover todas as suas configurações e definições e devolvê-los aos padrões de fábrica . Por exemplo, toda informação wireless, controle dos pais e de rede serão apagadas.",
                "Após uma restauração de fábrica, você precisará definir uma nova senha para acessar a página de gerenciamento do roteador."]
}]
},
       REBOOT :{ 
               TITLE:"Reinício Agendado",
               CONTENT: [{
                           type: "paragraph",
                           content: "O recurso de Reinício Agendado limpa o cache para melhorar o desempenho de funcionamento do roteador. Você pode reiniciar o roteador manualmente ou defini-lo para reiniciar regularmente."
                       } ,{                      
                           type: "step",
                           title: "Para reiniciar manualmente",
       content: [ 
                "Clique em Reiniciar e aguarde alguns minutes pelo reinício do roteador."]
} ,{                      
                           type: "step",
                           title: "Para agendar um horário de reinício",
       content: [ 
                "1. Habilitar Reinício Agendado.",
                "2. Defina quando e quantas vezes o roteador será reinicializado especificando os parâmetros nos campos Reinício Agendado e Repetir.",
                "3. Clique em Salvar."]
}]
},
       ADMIN_ACCOUNT :{ 
               TITLE:"Administração",
               CONTENT: [{
                           type: "paragraph",
                           content: "Administration permite que você gerencie a senha de conta além de permissão de acesso dos clientes conectados ao roteador."
                       } ,{                      
                           type: "name",
                           title: "Gerenciamento de Conta",
                           content: "Este recurso permite que você altere a senha.",
       children: [{                      
                           type: "step",
                           title: "Para mudar a senha",
       content: [ 
                "1. Digite a senha antiga.",
                "2. Digite a nova senha.",
                "3. Confirme a nova senha.",
                "4. Para mudar a senha"]
}]
}]
},
       ADMIN_RECOVERY :{ 
               TITLE:"Recuperação de Senha",
               CONTENT: [{
                           type: "name",
                           title: "Recuperação de Senha Padrão",
                           content: "A Recuperação de Senha permite que você recupere a senha e nome de usuário padrão sem ter que restaurar o roteador aos padrões de fábrica.",
       children: [{                      
                           type: "step",
                           title: "Para mudar a senha",
       content: [ 
                "1. Ative o recurso Recuperação de Senha Padrão.",
                "2. No campo De, insira um endereço de e-mail válido usado para enviar um código de verificação para recuperar informações de login.",
                "3. No campo Para, insira um endereço de e-mail válido usado para receber o código de vertificação.",
                "4. Insira o servidor SMTP do e-mail de saída (De).",
                "5. Se o e-mail no campo De exigir criptografia, você deve marcar a caixa de seleção Ativar autenticação e inserir seu nome de usuário (endereço de e-mail) e senha.",
                "6. Clique em Salvar."]
}]
}]
},
       ADMIN_LOCAL :{ 
               TITLE:"Gerenciamento Local",
               CONTENT: [{
                           type: "paragraph",
                           content: "Este recurso permite que dispositivos locais acessem e gerenciem o roteador."
                       } ,{                      
                           type: "name",
                           id: "local_management_https",
                           title: "Gerenciamento Local via HTTPS",
                           content: "Ative o Gerenciamento Local via HTTPS se desejar acessar o roteador via HTTPS e HTTP, ou mantê-lo desabilitado se você quiser acessar o roteador via HTTP."
                       } ,{                      
                           type: "name",
                           title: "Acesso para Todos Dispositivos LAN Conectados ",
                           content: "Alterne para On para habilitar gerenciamento para todos os dispositivos ou Off para habilitar o gerenciamento para um dispositivo específico."
                       } ,{                      
                           type: "name",
                           title: "Endereço MAC",
                           content: "Mostra o endereço MAC do dispositivo de acesso limitado."
                       } ,{                      
                           type: "name",
                           title: "Descrição",
                           content: "Mostra a descrição do dispositivo com limite de acesso."
                       } ,{                      
                           type: "name",
                           title: "Ativo",
                           content: "Mostra o status atual do dispositivo com limitado (habilitado ou desabilitado)"
                       } ,{                      
                           type: "name",
                           title: "Modificar",
                           content: "Mostra opções para Modificar e Apagar o dispositivo correspondente da lista."
                       } ,{                      
                           type: "step",
                           title: "Para adicionar um dispositivo cliente à lista",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Clique em Visualizar Dispositivos Existentes para escolher um dispositivo ou insira o endereço MAC de um dispositivo no campo de Endereço MAC.",
                "3. Insira uma Descrição para o dispositivo.",
                "4. Selecione Habilitar Esta Entrada.",
                "5. Clique em OK."]
} ,{                      
                           type: "step",
                           title: "Para modificar ou apagar um dispositivo da lista",
                           content: "Na tabela, clique no ícone Editar ou ícone de Lixeira que corresponde ao dispositivo que você deseja modificar ou apagar."
                       } ,{                      
                           type: "step",
                           title: "Para apagar dispositivos múltiplos",
                           content: "Selecione todos os dispositivos que deseja apagar e clique em Apagar."
                       }]
},
       ADMIN_REMOTE_WITHOUT_HTTPS :{ 
               TITLE:"Gerenciamento Remoto",
               CONTENT: [{
                           type: "name",
                           title: "Gerenciamento Remoto",
                           content: "The Remote Management feature allows remote devices to access and manage the router.",
       children: [{                      
                           type: "step",
                           title: "To forbid all remote devices to manage the router",
                           content: "Select Disable Remote Management and click Save."
                       } ,{                      
                           type: "step",
                           title: "To allow all remote devices to manage the router",
       content: [ 
                "1. Select Enable Remote Mangement for ALL Devices.",
                "2. Enter Web Management Port (1024-65535 or 80) through which the remote devices will access the router.",
                "3. Clique em Salvar."]
} ,{                      
                           type: "step",
                           title: "To allow a specific remote device to manage the router",
       content: [ 
                "1. Select Enable Remote Mangement for a Specific Device.",
                "2. Enter Web Management Port (1024-65535 or 80) through which the remote device will access the router.",
                "3. Enter the Remote Management IP Address of the remote device to manage the router.",
                "4. Clique em Salvar."]
}]
}]
},
       ADMIN_REMOTE :{ 
               TITLE:"Gerenciamento Remoto",
               CONTENT: [{
                           type: "paragraph",
                           content: "O Gerenciamento Remoto permite acesso ao roteador e configuração via remota pela Internet."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step_title",
                           content: "Para configurar o Gerenciamento Remoto"
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step1",
                           content: "1. Selecione a caixa de seleção para ativar o recurso de Gerenciamento Remoto."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step2",
                           content: "2. Mantenha a porta HTTPS e a porta HTTP como as configurações padrão."
                       } ,{                      
                           type: "paragraph",
                           id: "admin_remote_step3",
                           content: "3. Selecione para decidir qual dispositivo remoto pode acessar o roteador remotamente:",
       children: [{                      
                           type: "name",
                           title: "Todos os Dispositivos",
                           content: "Todos os dispositivos remotos podem acessar o roteador."
                       } ,{                      
                           type: "name",
                           title: "Dispositivo Especificado",
                           content: "Insira o Endereço IP do dispositivo remoto para acessar o roteador."
                       }]
} ,{                      
                           type: "paragraph",
                           id: "admin_remote_step4",
                           content: "4. Clique em Salvar."
                       } ,{                      
                           type: "paragraph",
                           content: "Agora você pode gerenciar remotamente o roteador através do endereço exibido em Endereço da Web para Gerenciamento."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Se um aviso aparecer quando você visita o endereço acima de forma remota, clique em Confiar (ou em uma opção semelhante) para continuar."
                       }]
},
       LED_CONTROL_SETTINGS :{ 
               TITLE:"Controle de LED",
               CONTENT: [{
                           type: "paragraph",
                           content: "Depois que o Modo Noturno estiver ativado, os LEDs ficarão desligados durante o período especificado todos os dias sem afetar o desempenho do roteador."
                       } ,{                      
                           type: "step",
                           title: "Para ativar o Modo Noturno",
       content: [ 
                "1. Selecione Ativar Modo Noturno.",
                "2. Especifique um período de tempo em que os LEDs ficarão desligados.",
                "3. Clique em Salvar."]
}]
},
       SYSTEM_LOG :{ 
               TITLE:"Log de Sistema",
               CONTENT: [{
                           type: "paragraph",
                           content: "O log do sistema exibe as atividades mais recentes do roteador. A tabela consiste no tipo, nível e conteúdo do log dos registros do sistema que podem ser filtrados para visualização. Você também pode salvar os registros do sistema no computador local ou enviá-los por e-mail."
                       } ,{                      
                           type: "step",
                           title: "Para salvar registros do sistema no computador local",
       content: [ 
                "1. Defina o Tipo e o nível mínimo para filtrar os registros do sistema desejados. A lista de níveis está em ordem decrescente, com o nível mais baixo listado por último.",
                "2. Clique em Salvar Log para salvar o arquivo de registros do sistema no computador local."]
} ,{                      
                           type: "step",
                           title: "Para receber logs do sistema por e-mail",
       content: [ 
                "1. Defina o Tipo e o Nível para filtrar os registros do sistema desejados. A lista de níveis está em ordem decrescente, com o nível mais baixo listado por último.",
                "2. Clique em Configurações de E-mail.",
                "3. No campo De, insira um endereço de e-mail válido para ser usado como e-mail de saída.",
                "4. No campo Para, insira um endereço de e-mail válido a ser usado como e-mail de entrada.",
                "5. Insira o endereço do servidor SMTP do e-mail de saída (De).",
                "Nota: Se o e-mail de saída exigir autenticação, marque a caixa de seleção Ativar Autenticação e digite seu Nome de Usuário (endereço de e-mail) e Senha.",
                "6. Se você deseja receber registros do sistema por e-mail regularmente, marque a caixa de seleção Ativar Correio Automático e defina um horário específico (no formato de 24 horas) ou um intervalo de tempo.",
                "Se você deseja receber imediatamente os logs do sistema atuais, clique em Logar no email agora.",
                "7. Clique em Salvar."]
}]
},
       TRAFFIC_STATISTIC :{ 
               TITLE:"Monitoramento de Tráfego",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe o uso de tráfego de um dispositivo em nos últimos 10 minutos ou de todos os dispositivos nos últimos 10 minnutos/24 horas/7 dias."
                       }]
},
       TRAFFIC_STATISTIC_LIST :{ 
               TITLE:"Lista de Monitoramento de Tráfego",
               CONTENT: [{
                           type: "paragraph",
                           content: "A lista é agrupada pelo tipo de conexão de dispositivos : com ou sem fio."
                       }]
},
       SYSTEM_PARA_WIRELESS :{ 
               TITLE:"Parâmetro de Sistema",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wifi_title",
                           title: "Wireless 2.4GHz/5GHz",
                           content: "Esta seção permite configurar os parâmetros de regras de transmissão de tráfego em redes wireless. É recomendável manter as configurações padrões caso não tenha certeza sobre as configurações corretas no caso."
                       } ,{                      
                           type: "name",
                           title: "Intervalo Beacon",
                           content: "Insira um valor entre 40 e 1000 em milisegundos para determinar a duração entre pacotes beacon que são transmitidos pelo roteador para sincronizar a rede wireless. O padrão é de 100 milisegundos."
                       } ,{                      
                           type: "name",
                           title: "Limite RTS",
                           content: "Insira um valor entre 1 e 2346 para determinar o tamanho do pacote de transmissão de dados através do roteador. Por padrão, o tamanho RTS (Request To Send) Threshold é 2346. Caso o tamanho do pacote for maior que a preconfiguração threshold, o roteador envia frames RTS a um estação de recepção particular e negocia o envio de frames de dados ou então o pacote será enviado imediatamente."
                       } ,{                      
                           type: "name",
                           title: "Intervalo DTIM",
                           content: "Este valor determina o interno de DTIM (Mensagem de Indicação de Tráfego de Entrega). Insira um valor entre 1 e 15. O intervalo padrão é 1, indicando o intervalo DTIM é o mesmo que o Intervalo Beacon."
                       } ,{                      
                           type: "name",
                           title: "Período de Atualização de Chave de Grupo",
                           content: "Insira o número de segundos (mínimo 30) para controlar o intervalo de tempo para renovação automática de chave de criptografia. O padrão é 0, indicando nenhuma renovação de chave."
                       } ,{                      
                           type: "name",
                           title: "Função WMM",
                           content: "A função WMM garante pacotes com mensagens de alta prioridade sendo transmitidas preferencialmente. É habilitado por padrão e altamente recomendado."
                       } ,{                      
                           type: "name",
                           title: "Função Short GI",
                           content: "Esta função está habilitado pelo padrão e recomendada para aumentar a capacidade de pacotes pelo período GI (Intervalo de Guarda)."
                       } ,{                      
                           type: "name",
                           title: "Isolamento AP",
                           content: "Se você quiser limitar e restringir todos os dispositivos wireless conectados à rede de interagir uns com os outros, mas que ainda sejam capazes de acessar a Internet, selecione a opção Ativar Isolamento AP"
                       } ,{                      
                           type: "name",
                           title: "USB 3.0 Interference Reduction",
                           content: "Click enable to reduce USB 3.0 Interference."
                       }]
},
       SYSTEM_PARA_WDS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           id: "help_syspara_wds_title",
                            title: "WDS 2.4GHz/5GHz"
                       } ,{                      
                           type: "step",
                           title: "Para habilitar WDS",
                           content: "O recurso de Bridging WDS (Wireless Distribution System) permite que você estenda a cobertura da rede sem fio fazendo a ponte com um AP (ponto de acesso) em uma WLAN (rede local) sem fio."
                       } ,{                      
                           type: "step",
       content: [ 
                "1. Selecione para ativar o recurso WDS Bridging.",
                "2. Para fazer a ponte de uma rede pelo recurso Varredura: clique em Varredura para fazer a varredura e exibir todas as redes disponíveis e selecione a rede com a qual deseja fazer a ponte. O SSID (nome da rede), endereço MAC e segurança serão preenchidos automaticamente.",
                "Ou para fazer a ponte de uma rede manualmente: insira o SSID (nome da rede), o endereço MAC e o modo WDS da rede a ser ligada. Selecione um tipo de segurança e insira os parâmetros relacionados, que devem ser os mesmos da rede a ser conectada.",
                "3. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Se você não tiver certeza do modo WDS, mantenha a opção padrão Auto."
                       }]
},
       SYSTEM_PARA_WPS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "WPS",
                           content: "WPS (Wi-Fi Protected Setup) fornece uma abordagem mais fácil para configurar uma conexão Wi-Fi protegida por segurança."
                       }]
},
       SYSTEM_PARA_NAT :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "NAT",
                           content: "Esta função é habilitada por padrão. É recomendável manter a configuração de fábrica. Caso desabilite, você pode não ter acesso à Internet."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Quando a função NAT está desabilitado, o Direcionamento NAT não terá efeito, tampouco a função NAT Boost."
                       } ,{                      
                           type: "name",
                           id: "sys_para_nat_boost",
                           title: "NAT Boost",
                           content: "Selecione a opção Ativar NAT Boost e clique em Salvar para garantir que o roteador tenha a melhor taxa de transferência."
                       } ,{                      
                           type: "note",
                           id: "sys_para_nat_boost_note",
                           title: "Aviso",
                           content: "Quando a função NAT Boost está habilitada, a função QoS e Estatísticas de Tráfego serão desabilitadas automaticamente."
                       }]
},
       SYSTEM_PARA_DOS :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Configurações de Proteção DOS",
                           content: "A Proteção DOS protege o roteador ICMP - FLOOD, UDP-FLOOD e ataques TCP-FLOOD."
                       } ,{                      
                           type: "name",
                           title: "Nível de Pacotes ICMP-FLOOD",
                           content: "Insira um valor entre 5 e 7200 para acionar a proteção ICMP - FLOOD imediatamente quando o número de pacotes ICMP exceder o valor limiar predefinido."
                       } ,{                      
                           type: "name",
                           title: "Nível de Pacotes UDP-FLOOD",
                           content: "Insira um valor entre 5 e 7200 pacotes UDP para acionar a proteção UDP- FLOOD imediatamente quando o número de pacotes UDP exceder o valor atual limite."
                       } ,{                      
                           type: "name",
                           title: "Nível de Pacotes TCP-FLOOD",
                           content: "Insira um valor entre 5 e 7200 pacotes TCP- SYN para desencadear a proteção TCP- SYN- FLOOD imediatamente quando o número de pacotes TCP exceder o valor presente limiar."
                       }]
},
       SYSTEM_PARA_DUPLEX :{ 
               TITLE:"",
               CONTENT: [{
                           type: "title",
                           title: "Duplex",
                           content: "Selecione o tipo duplex a partir da lista flutuante e clique em Salvar ."
                       }]
},
       SYSTEM_PARA_LED :{ 
               TITLE:"Controle de LED",
               CONTENT: [{
                           type: "name",
                           title: "Habilitar Modo Noturno",
                           content: "Selecione este modo para desligar os LEDs durante o modo noturno sem afetar o desempenho do roteador."
                       } ,{                      
                           type: "name",
                           title: "Período de Modo Noturno",
                           content: "Especifique um período de tempo cujo o modo noturno se aplique."
                       } ,{                      
                           type: "paragraph",
                           content: "Clique em Save (Salvar) para confirmar as alterações."
                       }]
},
       OPEN_VPN :{ 
               TITLE:"OpenVPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com esta função, você pode utilizar a Internet para acessar sua rede com segurança quando estiver fora de casa. Para utilizar o Serviço VPN, você precisa configurar o Serviço DNS Dinâmico (recomendado) ou atribuir um endereço IP estático para a porta WAN do roteador. E o seu Sistema de Horário deve estar sincronizado com a Internet,"
                       } ,{                      
                           type: "name",
                           title: "Tipo de Serviço",
                           content: "Selecione o protocolo de comunicação para o servidor OpenVPN: UDP ou TCP."
                       } ,{                      
                           type: "name",
                           title: "Porta de Serviço",
                           content: "Insira o número de porta de comunicação entra 1024 e 65535. O padrão e porta de serviço comum é 1194."
                       } ,{                      
                           type: "name",
                           title: "Sub-rede VPN/Sub-Máscara ",
                           content: "Insira a variação de endereços IP que podem ser concedidos aos clientes através do servidor OpenVPN."
                       } ,{                      
                           type: "name",
                           title: "Acesso para Cliente",
                           content: "Select the access type for the OpenVPN client.",
       children: [{                      
                           type: "name",
                           title: "Somente Rede Residencial",
                           content: "Cliente podem somente acessar a rede residencial. O roteador padrão do cliente não será alterado."
                       } ,{                      
                           type: "name",
                           title: "Internet e Rede Residencial",
                           content: "Clientes podem acessar a rede residencial, sites da Internet ou serviços com limitação geográfica quando estiver fora do país. O roteador padrão do cliente será alterado."
                       }]
}]
},
       OPEN_VPN_CERTIFICATE :{ 
               TITLE:"Certificado",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Utilize o certificado para informação e identidade da conexão VPN para clientes remotos.",
                "Cllique para gerar um novo certificado."]
}]
},
       OPEN_VPN_CONF :{ 
               TITLE:"Tipo de Configuração",
               CONTENT: [{
                           type: "paragraph",
       content: [ 
                "Clientes remotos irão utilizar o arquivo de configuração para acessar seu roteador.",
                "Clique para salvar o arquivo de configuração OpenVPN."]
}]
},
       OPEN_VPN_GUIDE :{ 
               TITLE:"Guia de Instalação Cliente VPN",
               CONTENT: [{
                           type: "step",
                           title: "Para conectar seus dispositivos clientes para o servidor OpenVPN:",
       content: [{                      
                           type: "paragraph",
                           content: "Configure os parâmetros do servidor OpenVPN (Tiipo de Serviço, Porta de Serviço e Acesso de Cliente) e clique em Salvar. E garante que sua porta externa das configurações NAT não seja a porta de serviço e a função DMZ esteja desabilitada."
                       },
                "1. Selecione Habilitar Servidor VPN.",
                "2. Configure os parâmetros de servidor OpenVPN (Tipo de Serviço, Porta de Serviço, Acesso de Cliente e VPN Sub-rede/Máscara de Rede) e clique em Salvar.",
                "3. Clique em Exportar para salvar o arquivo de configuração.",
                "4. Nos seus dispositivos clientes, baixe e instale o utilitário cliente Open VPN de <a class=\"link\" href=\"http://openvpn.net/index.php/download/community-downloads.html\">http://openvpn.net/index.php/download/community-downloads.html</a>",
                "As plataformas oficiais suportadas incluem Windows, Mac OSX e Linux.",
                "5. Inicie o utilitário cliente OpenVPN e adicione uma nova conexão VPN utilizando o arquivo de configuração salvo para conectar seu dispositivo cliente ao servidor VPN."]
} ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "Para aprender mais sobre clientes OpenVPN clients, visite <a class=\"link\" href=\"http://openvpn.net/index.php/open-source/documentation/howto.html#quick\">http://openvpn.net/index.php/open-source/documentation/howto.html#quick</a>"
                       }]
},
       PPTP_VPN :{ 
               TITLE:"PPTP VPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com PPTP VPN, você pode utilizar a Internet para acessar sua rede rapidamente para acessar sua rede quando estiver longe de casa. Isto pode ser prevenido por alguns provedor. Para utilizar o Serviço VPN, você precisa configurar o Serviço DNS Dinâmico (recomendado) ou atribuir um endereço IP estático para a porta WAN do roteador. E o seu Sistema de Horário deve estar sincronizado com a Internet,"
                       } ,{                      
                           type: "name",
                           title: "Endereço IP Cliente",
                           content: "Insira a variação de endereços (até 10 clientes) que podem ser concedidos pelo servidor PPTP VPN"
                       } ,{                      
                           type: "name",
                           title: "Nome de Utilizador e Palavra-passe",
                           content: "Introduza o nome do utilizador e palavra-passe para autenticar os clientes no servidor PPTP VPN."
                       }]
},
       PPTP_VPN_GUIDE :{ 
               TITLE:"Guia de Instalação Cliente VPN",
               CONTENT: [{
                           type: "step",
                           title: "Para conectar seus dispositivos clientes ao servidor PPTP VPN:",
       content: [{                      
                           type: "paragraph",
                           content: "Antes de configurar o servidor PPTP VPN, favor configurar o serviço DNS Dinâmico (recomendável) ou atribua um endereço IP estático para a porta WAN. Favor garantir que a porta externa das configurações NAT não seja 1723 e seu Sistema de Horário esteja sincronizado com a Internet."
                       },
                "1. Selecione Habilitar Servidor VPN.",
                "2. Configure o servidor VPN PPTP e clique em Salvar.",
                "3. Nos seus dispositivos de clientes, crie uma conexão PPTP VPN. As plataformas oficiais suportadas incluem Windows, Mac OSX, Linux, iOS e Android.",
                "4. Inicie o programa VPN PPTP, adicione uma nova conexão e insira o nome de domínio do serviço DDNS registrado ou o endereço IP estático atribuído à porta WAN, para conectar seu dispositivo cliente ao servidor VPN PPTP."]
}]
},
       VPN_CONNNECTION :{ 
               TITLE:"Conexões VPN",
               CONTENT: [{
                           type: "paragraph",
                           content: "Esta página mostra os clientes que estão atualmente conectados ao OpenVPN e servidor VPN PPTP hospedados no roteador."
                       }]
},
       BASIC_NETWORK :{ 
               TITLE:"Mapa de Rede",
               CONTENT: [{
                           type: "paragraph",
                           content: "No mapa de rede, você pode ver o status da conexão de rede atual e informações de wireless do roteador e as informações de dispositivos conectados."
                       }]
},
       BASIC_NETWORK_INTEREST :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe informações da Internet."
                       }]
},
       BASIC_NETWORK_ROUTER :{ 
               TITLE:"Roteador",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe informação de rede atual da rede wireles e das portas LAN."
                       }]
},
       BASIC_NETWORK_CLIENTS :{ 
               TITLE:"Clientes Cabeados/Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra o nome de rede (editável), endereço MAC e IP atribuídos dos clientes conectados do roteador."
                       }]
},
       BASIC_NETWORK_PRINTER :{ 
               TITLE:"Impressora",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra o nome da a impressora conectada ao roteador via porta USB."
                       }]
},
       BASIC_NETWORK_USB :{ 
               TITLE:"Disco USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "Displays relevant information of USB disk connected to the router via USB port."
                       }]
},
       BASIC_SPEED_TEST :{ 
               TITLE:"Teste de Velocidade",
               CONTENT: [{
                           type: "paragraph",
                           content: "This feature tests the current upload and download speeds you're getting from your service provider and provides helpful advice about your internet's capabilities."
                       } ,{                      
                           type: "paragraph",
                           content: "Tip: For a more accurate result, try closing down other apps and programs."
                       } ,{                      
                           type: "paragraph",
                           content: "History - A record of previous speed tests."
                       } ,{                      
                           type: "paragraph",
                           content: "Test Again - Click to perform a speed test."
                       }]
},
       BASIC_NETWORK_ONEMESH :{ 
               TITLE:"Mesh Devices",
               CONTENT: [{
                           type: "name",
                           title: "Nome",
                           content: "Displays the name of the mesh device connected to the router."
                       } ,{                      
                           type: "name",
                           title: "Modelo",
                           content: "Displays the product model of the mesh device."
                       } ,{                      
                           type: "name",
                           title: "Ativo",
                           content: "Displays the connection status of the mesh device."
                       } ,{                      
                           type: "name",
                           title: "Localização",
                           content: "Displays the location of the mesh device."
                       } ,{                      
                           type: "paragraph",
                           content: "You can click <span class=\"one-mesh-modify-icon\"></span> to modify the device information."
                       }]
},
       BASIC_INTERNET :{ 
               TITLE:"Internet",
               CONTENT: [{
                           type: "paragraph",
                           content: "Clique em Auto Detectar ou selecione o tipo de conexão de Internet manualmente. Em seguida, insira os parâmetros correspondentes oferecidos pelo provedor."
                       }]
},
       BASIC_WIRELESS_SMART_CONNECT :{ 
               TITLE:"Smart Connect",
               CONTENT: [{
                           type: "paragraph",
                           content: "Selecione esta caixa de seleção para habilitar a função smart connect. Esta função ajuda dispositivos a operarem com maior velocidade ao atribuí-los a melhor banda wireless baseada nas verdadeiras condições a fim de balancear as demandas de rede."
                       }]
},
       BASIC_WIRELESS :{ 
               TITLE:"Configurações Wireless",
               CONTENT: [{
                           type: "paragraph",
                           content: "Você pode ajustar as configurações wireless (SSID, senha e etc.)."
                       } ,{                      
                           type: "name",
                           title: "Nome de Rede (SSID)",
                           content: "É recomendável alterar o nome de rede (SSID). Este campo é também suscetível à letras maiúsculas e minúsculas."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Escolha se você deseja ocultar o nome da rede 2.4GHz/5GHz (SSID) da lista de redes wireless. Uma vez selecionado, o SSID não será transmitido e você precisará acessar a rede manualmente."
                       } ,{                      
                           type: "name",
                           title: "Senha",
                           content: "Insira uma senha wireless entre 8 e 63 caracteres ASCII, ou entre 8 e 64 hexadecimal caracteres. Este campo é suscetível à letras maíusculas e minúsculas."
                       }]
},
       BASIC_DEVICE_SETTINGS :{ 
               TITLE:"Dispositivo de Armazenamento USB",
               CONTENT: [{
                           type: "paragraph",
                           content: "This feature allows you to share USB storage devices among different clients in the local area network or through the Internet."
                       } ,{                      
                           type: "title",
                           title: "Configurações do Dispositivos",
                           content: "The Device Settings section displays the basic information of the USB storage device connected via the USB port. A USB flash disk usually has only one volume."
                       } ,{                      
                           type: "name",
                           title: "Buscar",
                           content: "Usually, the router automatically detects any newly attached device. If not, click this button to scan and refresh the screen with the updated information.",
       children: [{                      
                           type: "note",
                           title: "Aviso",
                           content: "A gray area represents a volume that is disabled. You can click the area to share the specific volume."
                       }]
} ,{                      
                           type: "name",
                           title: "Remover",
                           content: "Click this button to safely unmount the USB storage device before physically unplugging it from the USB port.",
       children: [{                      
                           type: "note",
                           title: "Aviso",
                           content: "Remove button only appears when the USB storage device is connected to the router. When the current volume is busy, you are unable to unmount."
                       }]
} ,{                      
                           type: "step",
                           title: "Para configurar um servidor de arquivo.",
       content: [ 
                "1. Attach the USB storage device to the USB port directly or using a USB cable. If the device requires bundled external power, make sure the external power has been connected.",
                "2. The newly attached USB device should be automatically detected by the router and be displayed under the Device Settings section. If not, click Scan.",
                "Note: The Share icon appears. You can click the icon to disable volumes you don't need to share."]
}]
},
       BASIC_SHARING_SETTINGS :{ 
               TITLE:"Access Address",
               CONTENT: [{
                           type: "name",
                           title: "Rede/Nome de Servidor de Mídia",
                           content: "Displays the name used to access the connected USB storage device through the Network Neighborhood method or Media Sharing feature. It is TP-Share by default."
                       } ,{                      
                           type: "name",
                           title: "Método de Acesso",
                           content: "There are 3 methods to access the shared USB storage device.",
       children: [{                      
                           type: "name",
                           title: "Ambiente de Rede",
                           content: "Select this option to allow users on the network to access the shared contents via the address shown under the Address column."
                       } ,{                      
                           type: "name",
                           title: "FTP",
                           content: "Select this option to enable the FTP server feature that allows FTP clients and users on the network to access the USB storage device via the FTP address shown under the Address column."
                       } ,{                      
                           type: "name",
                           title: "FTP (via Internet)",
                           content: "Select this option to allow FTP clients and users to remotely access, download and upload files to the shared USB storage device through FTP over the Internet. To customize the access address, click Edit and set up the Dynamic DNS for the router. To change the FTP server’s port, enter a new port number and click Save to apply the changes."
                       }]
} ,{                      
                           type: "name",
                           title: "Endereço",
                           content: "Exibe o endereço utilizado para acessar o dispositivo de compartilhamento USB compartilhado."
                       } ,{                      
                           type: "name",
                           title: "Porta",
                           content: "Displays the port number used to access the FTP server."
                       }]
},
       BASIC_FOLDER_SHARING :{ 
               TITLE:"Sharing Contents",
               CONTENT: [{
                           type: "paragraph",
                           content: "Displays the folders you share. All folders are shared by default. You can click the Edit icon to customize the shared folders."
                       } ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "The Share icon appears in the Device Settings section. You can click the Share icon to disable volumes you don't need to share."
                       }]
},
       FOLDER_SHARING :{ 
               TITLE:"Sharing Contents and Security",
               CONTENT: [{
                           type: "name",
                           title: "Sharing Contents",
                           content: "Displays the folders you share. All folders are shared by default. You can click the Edit icon to customize the shared folders.",
       children: [{                      
                           type: "note",
                           title: "Aviso",
                           content: "The Share icon appears in the Device Settings section. You can click the Share icon to disable volumes you don't need to share."
                       }]
} ,{                      
                           type: "name",
                           title: "Access Authentication",
       content: [ 
                "Toggle On to enable authentication which requires the users to enter a valid username and password to access all the shared folders. Accessing as Administrator can read and modify the files while the User can only read the files.",
                "Username should  begin with a letter or an underline and contain 1 to 15 characters using letters, digits and underlines.",
                "Password should contain 1 to 15 characters using letters, digits and underlines."]
} ,{                      
                           type: "name",
                           title: "Habilitar Compartilhamento de Mídia.",
                           content: "With this feature enabled, all DLNA-supported devices in the local network can access media files in all the shared folders. Users won't be required to enter username or password even if Access Authentication is enabled."
                       }]
},
       BASIC_PRINT_SERVER :{ 
               TITLE:"Servidor de Impressão",
               CONTENT: [{
                           type: "name",
                           title: "Servidor de Impressão",
                           content: "Toggle On to enable the Printer Server function."
                       } ,{                      
                           type: "name",
                           title: "Nome de Impressora",
                           content: "Displays the name of the printer connected to the router."
                       }]
},
       BASIC_PARENTAL_CONTROL :{ 
               TITLE:"Controle dos Pais",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com as configurações básicas de Controle dos Pais, você pode restringir o acesso em determinadas horas do dia (por exemplo, sem acesso à Internet a partir para o PC da criança durante a lição de casa)."
                       }]
},
       BASIC_PARENTAL_DEVICE :{ 
               TITLE:"Dispositivos Sob Controle dos Pais",
               CONTENT: [{
                           type: "paragraph",
                           content: "This table displays the information and settings of the devices that are currently restricted by Parental Controls."
                       } ,{                      
                           type: "step",
                           title: "Para restringir um dispositivo de um novo cliente",
       content: [ 
                "1. Toggle On Parental Controls.",
                "2. Click Add.",
                "3. Click Scan to choose a currently connected device from the Access Devices List; or enter the Device Name and MAC Address manually to add a device that is not connected.",
                "4. Click the Effective Time icon to specify a time period during which the restriction applies.",
                "5. Enter a brief description into the Description field. This field is optional.",
                "6. Select Enable This Entry.",
                "7. Clique em Salvar."]
} ,{                      
                           type: "note",
                           title: "Aviso",
                           content: "If you want to disable this entry, click the Bulb icon."
                       }]
},
       BASIC_GUEST_NETWORK :{ 
               TITLE:"Rede para Convidados",
               CONTENT: [{
                           type: "paragraph",
                           content: "Esta função permite-lhe fornecer acesso Wi-Fi gratuito para os hóspedes sem revelar a rede principal."
                       } ,{                      
                           type: "name",
                           title: "Permite Convidados Acessarem Uns Aos Outros",
                           content: "Selecione esta opção para permitir que os dispositivos wireless da rede para convidados para se comunicar uns com os outros através de métodos tais como vizinhos de rede, Samba, Ping e FTP."
                       } ,{                      
                           type: "name",
                           title: "Permite Convidados Acessarem Minha Rede Local",
                           content: "Selecione esta opção para permitir que os dispositivos wireless da rede para convidados comuniquem-se com os dispositivos conectados às portas LAN do roteador ou rede principal através de métodos tais como vizinhos de rede, Samba, Ping e FTP."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Rede para Convidados",
                           content: "Selecione esta caixa para habilitar a função de Rede para Convidados."
                       } ,{                      
                           type: "name",
                           title: "Nome de Rede (SSID)",
                           content: "Utilize o SSID para Convidado padrão ou crie um novo nome (de até 32 caracteres)."
                       } ,{                      
                           type: "name",
                           title: "Ocultar SSID",
                           content: "Selecione esta opção caso queira ocultar o SSID para Convidados da lista de rede Wi-Fi."
                       } ,{                      
                           type: "name",
                           id: "pwd_mode",
                           title: "Intervalo de Atualização de Senha",
                           content: "Selecione o intervalo de atualização de sua senha de Rede para Convidados."
                       } ,{                      
                           type: "name",
                           id: "pwd_no_random",
                           title: "Senha",
                           content: "Crie uma senha entre 8 e 63 caracteres ASCII ou entre 8 e 64 caracteres hexadecimais (0-9, a-f, A- F)."
                       } ,{                      
                           type: "name",
                           id: "pwd_random",
                           title: "Senha",
                           content: "Utilize a senha gerada aleatoriamente ou crie uma senha entre 8 e 63 caracteres ASCII ou hexadecimais (0-9, a-f, A-F)."
                       }]
},
       BASIC_ACCOUNT_LOGIN :{ 
               TITLE:"TP-Link Cloud",
               CONTENT: [{
                           type: "paragraph",
                           content: "O serviço TP-Link Cloud permite monitorar remotamente sua rede em tempo real, acessar e gerenciar seus dispositivos TP-Link a partir da Internet a qualquer hora e em qualquer lugar."
                       }]
},
       ACCOUNT_INFO :{ 
               TITLE:"Informações sobre Conta",
               CONTENT: [{
                           type: "paragraph",
                           content: "Exibe informação sobre sua conta TP-Link Cloud. Você pode editar a informação de conta ao clicar no ícone Editar"
                       }]
},
       DEVICE_INFO :{ 
               TITLE:"Informação do Dispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "Mostra informações de seu dispositivos, incluindo a conta cloud que está gerenciando o dispositivo."
                       }]
},
       BOUND_ACCOUNT :{ 
               TITLE:"Contas Vinculadas",
               CONTENT: [{
                           type: "paragraph",
                           content: "Esta tabela mostra todas as contas cloud que estão vinculadas ao dispositivo atualmente."
                       } ,{                      
                           type: "step",
                           title: "Para vincular uma conta de usuário",
       content: [ 
                "1. Clique em Vincular.",
                "2. Insira o email registrado que deseja vincular.",
                "3. Clique em Salvar."]
}]
},
       NEW_PARENTAL_CONTROL :{ 
               TITLE:"Controle dos Pais",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com filtros de nível de idade, limites de acesso e perfil de usuários, o Controle dos Pais oferece à sua família acesso à Internet apropriado e personalizado."
                       } ,{                      
                           type: "step",
                           title: "Para aplicar Controle dos Pais em um novo dispositivo.",
       content: [ 
                "1. Clique em Adicionar.",
                "2. Insira um nome para este perfil e clique \"+\" para adicionar um dispositivo sob este perfil.",
                "3. Selecione um Nível de Filtro e personalize o conteúdo do filtro de acordo com suas necessidades. Você pode inserir palavras-chave para buscar por websites que deseja filtrar na sua base de dados. Outros sites (URLs) podem ser inseridos manualmente.<br/>Consulte as seguintes explicações para as diferentes categorias de filtros:<p>Conteúdo para Adultos - Sites que contêm conteúdo sexual, prejudicial ou ilícito, incluindo pornografia, uso de substâncias, violência e discriminação</p><p>Jogos de azar - Sites que promovem ou fornecem informações sobre jogos de azar, incluindo sites de jogos online</p><p>Educação Sexual - Sites que discutem sexualidade de forma informativa, incluindo reprodução, sexualidade, doenças transmissíveis e lidar com o trauma sexual</p><p>Comunicação Online - Sites que hospedam formatos de comunicação com outras pessoas através de texto, voz ou vídeo, incluindo e-mail, blogs, fórums on-line, VoIP e serviços de bate-papo por vídeo</p><p>Redes Sociais - Sites que distribuem a expressão pessoal ou a comunicação, ligando as pessoas e sua atividade pessoal com base em interesses semelhantes, carreiras, origens ou conhecimentos da vida real</p><p>Sites Pagos - Sites que compensam os usuários para visualizar determinados sites, Mails ou anúncios, clique em links ou responda a pesquisas </p><p>Mídia - Sites que oferecem conteúdo de áudio e/ou vídeo pagos ou assinados, incluindo serviços de streaming, programação de TV ou downloads de músic</p><p>Downloads - Sites que fornecem ou dão acesso ao compartilhamento e distribuição de arquivos, incluindo compartilhamento peer-to-peer, armazenamento de arquivos on-line e conteúdo de dispositivos móveis (por exemplo, música e aplicativos)</p><p>Jogos sites que dão acesso a jogos hospedados na web ou transferíveis, incluindo jogos online, redes de consoles de jogos e jogos de navegador </ p> ",
                "4. Caso queria limitar o período total que este perfil pode ficar online, habilite e especifique o Limite de Período. Você pode também utilizar a Hora de Dormir para definir um horário diário em que dispositivos neste perfil possam utilizar a Internet.",
                "5. Clique em Salvar."]
} ,{                      
                           type: "step",
                           title: "Para visualizar um histórico de internet detalhado",
       content: [ 
                "1. Na coluna Critérios, clique nos botões de Critérios correspondentes.",
                "2. Caso queira visualizar mais registros, clique no botão <span class=\"ptl-ctr-help-icon history\"></span> Histórico.",
                "3. Você pode bloquear ou desbloquear websites clicando nos botões <span class=\"ptl-ctr-help-icon block\"></span> ou <span class=\"ptl-ctr-help-icon unblock\"></span>."]
} ,{                      
                           type: "step",
                           title: "Para desativar ou ativar o acesso à Internet imediatamente",
       content: [ 
                "Na coluna Acesso à Internet, clique em <span class=\"ptl-ctr-help-icon stop\"></span> para impedir que os dispositivos do perfil correspondente acessem a Internet e clique em <span class=\"ptl-ctr-help-icon enable\"></span> para permitir o acesso novamente."]
}]
},
       BASIC_QOS :{ 
               TITLE:"QoS",
               CONTENT: [{
                           type: "paragraph",
                           content: "O recurso QoS (Qualidade de Serviço) prioriza atividades e dispositivos on-line para garantir uma conexão de rede mais rápida quando você mais precisa."
                       } ,{                      
                           type: "paragraph",
                           content: "Selecione Prioridade de Aplicativo para priorizar a velocidade da rede para atividades online e selecione Prioridade de Dispositivo para priorizar a velocidade da rede para dispositivos."
                       }]
},
       BASIC_APPLICATION_PRIORITY :{ 
               TITLE:"Prioridade de Aplicação",
               CONTENT: [{
                           type: "paragraph",
                           content: "Escolha a atividade on-line que você deseja priorizar ou clique em Personalizado para definir o nível de prioridade de cada atividade online."
                       }]
},
       BASIC_DEVICE_PRIORITY :{ 
               TITLE:"Prioridade de Dispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "Escolha os dispositivos que deseja priorizar e quanto tempo ficarão em prioridade."
                       } ,{                      
                           type: "step",
                           title: "Para priorizar um dispositivo",
       content: [ 
                "1. Localize o dispositivo que deseja priorizar na lista e alterne em Prioridade.",
                "2. Selecione quanto tempo o dispositivo será priorizado para na coluna Duração."]
}]
},
       ANTI_VIRUS :{ 
               TITLE:"Antivírus",
               CONTENT: [{
                           type: "paragraph",
                           content: "Com análises de rede freqüentes, detecção de sites mal-intencionados e isolamento de dispositivos infectados, o recurso Antivírus mantém suas informações pessoais seguras. Você também pode verificar como sua rede está protegida e se houve algum ataque na sua rede."
                       } ,{                      
                           type: "paragraph",
                           content: "Histórico - Registra os dispositivos que foram protegidos por Antivírus além de origem e classificação dos ataques."
                       } ,{                      
                           type: "paragraph",
                           content: "Ativar Tudo - Toque para habilitar todos os tipos de proteção caso um ou mais não estiverem habilitados."
                       } ,{                      
                           type: "paragraph",
                           content: "Tipos de Proteção - Ative os tipos de proteção consultando as explicações. É recomendável habilitar todos os Tipos de Proteções."
                       }]
},
       APPLICATION_PRIORITY :{ 
               TITLE:"Prioridade de Aplicação",
               CONTENT: [{
                           type: "paragraph",
                           content: "O recurso Prioridade de Aplicativo prioriza as atividades online para garantir uma conexão de rede mais rápida quando você mais precisa. Escolha a atividade online que você deseja priorizar ou clique em Personalizado para definir o nível de prioridade de cada atividade online."
                       }]
},
       DEVICE_PRIORITY :{ 
               TITLE:"Prioridade de Dispositivo",
               CONTENT: [{
                           type: "paragraph",
                           content: "O recurso Prioridade de Dispositivo prioriza os dispositivos para garantir uma conexão de rede mais rápida quando você mais precisa. Escolha os dispositivos que deseja priorizar e quanto tempo ficarão em prioridade."
                       } ,{                      
                           type: "step",
                           title: "Para priorizar um dispositivo",
       content: [ 
                "1. Localize o dispositivo que deseja priorizar na lista e alterne em Prioridade.",
                "2. Selecione quanto tempo o dispositivo será priorizado para na coluna Duração."]
}]
},
       FIREWALL :{ 
               TITLE:"Firewall",
               CONTENT: [{
                           type: "paragraph",
                           content: "SPI (Stateful Packet Inspection ) Firewall impede ataques cibernéticos e valida o tráfego que está passando através do roteador baseado no protocolo. Esta função é habilitada por padrão."
                       } ,{                      
                           type: "name",
                           title: "Habilitar Firewall SPI",
                           content: "Não desabilite o Firewall SPI a menos que necessário."
                       } ,{                      
                           type: "name",
                           title: "Permite Pings da porta WAN/Permite Pings da Porta LAN",
                           content: "Habilite para permitir pacotes de ping da porta WAN/LAN. É recomendável manter a configuração padrão."
                       }]
},
CWMP: {
      TITLE: "Definições da CWMP",
      CONTENT: [{
        type: "paragraph",
        content: "CWMP (Protocolo de gestão CPE WAN, também chamado TR-069) permite que o Servidor de Configuração Automática (ACS) execute auto-configuração, aprovisionamento, ligação e diagnósticos deste equipamento. Poderá configurar esta função de acordo com as instruções do seu ISP."
      }, {
        type: "name",
        title: "CWMP",
        content: "Comutar para ON para ativar a função CWMP (Protocolo de gestão CPE WA)."
      }, {
        type: "name",
        title: "Informação",
        content: "Ativar esta função para enviar periódicamente uma mensagem de Informação para o ACS (Servidor de Configuração Automática)."
      }, {
        type: "name",
        title: "Informação Intervalo",
        content: "Introduza o tempo em segundos quando a mensagem Informação deverá ser enviada para o ACS."
      }, {
        type: "name",
        title: "ACS URL",
        content: "Insira o morada web do ACS que lhe foi fornecido pelo seu ISP."
      }, {
        type: "name",
        title: "Utilizador / Palavra-Passe ACS",
        content: "Introduza o utilizador e a palavra-passe para iniciar a sessão no servidor ACS."
      }, /*{
        type: "name",
        title: "Interface utilizada pelo cliente TR-069",
        content: "Selecione a interface a utilizar pelo cliente TR-069."
      }, {
        type: "name",
        title: "Mostrar mensagens SOAP na consola",
        content: "Comutar para ativar ou desativar esta função."
      },*/ {
        type: "name",
        title: "Autenticação do pedido de ligação",
        content: "Selecione esta caixa para ativar a autenticação para o pedido de ligação.",
        children: [{
          type: "name",
          title: "Utilizador / Palavra-Passe",
          content: "Introduza o utilizador e a palavra-passe para o servidor ACS fazer login no router."
        }, {
          type: "name",
          title: "Caminho/Porta/URL",
          content: "Introduzir o caminho, a porta e o URL de ligação ao servidor ACS."
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
