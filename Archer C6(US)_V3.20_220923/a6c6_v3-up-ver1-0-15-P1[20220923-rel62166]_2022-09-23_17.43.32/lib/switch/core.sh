# Copyright (C) 2009-2010 OpenWrt.org

. /lib/switch/config.sh
. /lib/switch/core_phy.sh
. /lib/config/uci.sh

fw_config_get_mac() {
    fw_config_get_section "$1" device { \
        string macaddr "" \
        string name    "" \
    } || return
}


setup_agg()	{
	fw_config_get_section "$1" switch_agg { \
		string enable_agg		''	\
		string lacpports		''	\
		string lacpmode			''	\
	}
	if [ "$switch_agg_enable_agg" == '1' ];then
		config_agg_ports "dynamic" "$switch_agg_lacpports" "$switch_agg_lacpmode" 
	else
		config_agg_clear
	fi
}

setup_vlan() {
#	config_load switch
#	config_foreach setup_one_vlan switch_vlan
#	log "SETUP vlan settings success!"
#	config_foreach setup_agg switch_agg
#	log "SETUP agg settings success!"
#   MT7621 setupdefaultVlan in raeth.ko, no need to do it in initScript
    return
}

unsetup_vlan() {
#	clear_all_vlans
#	log "CLEAN vlan settings success!"
#	config_agg_clear
#	log "CLEAN agg settings success!"
	return
}

config_get_switch_vlan () {
	fw_config_get_section "$1" switch_vlan { \
		    string ports		''	\
			string device		''	\
			string vlan			''	\
	} || return
}

setup_one_vlan() {
	config_get_switch_vlan $1

	setup_switch_vlan $switch_vlan_vlan $switch_vlan_ports
	#[ -z "$(echo $switch_vlan_ports | grep 'u' )" ] && vconfig add eth0 $switch_vlan_vlan  
}

setup_ports() {
	link_up_all_ports
}

unsetup_ports() {
	link_down_all_ports
}

setup_duplex() {
	local port=$(uci get portspeed.wan.port)
	local speed=$(uci get portspeed.wan.current)
	local autoneg
	local duplex

	case $speed in
		"auto")
			autoneg="on"
			speed="1000"
			duplex="full"
			;;
		"10H")
			autoneg="off"
			speed="10"
			duplex="half"
			;;
		"10F")
			autoneg="off"
			speed="10"
			duplex="full"
			;;
		"100H")
			autoneg="off"
			speed="100"
			duplex="half"
			;;
		"100F")
			autoneg="off"
			speed="100"
			duplex="full"
			;;
		"1000H")
			autoneg="off"
			speed="1000"
			duplex="half"
			;;
		"1000F")
			autoneg="off"
			speed="1000"
			duplex="full"
			;;
	esac
	
	portspeed $port $speed $duplex $autoneg
	log "SETUP port ($port) duplex: $speed $half!"
}

unsetup_duplex() {
	log "UNSETUP duplex"
}

lan_is_linked() { # a given port or any lan ports
	phy_lan_is_linked "$1"
}

wan_is_linked() { # a given port or any wan ports
	phy_wan_is_linked "$1"
}

switch_lib_init() {
	local lan_ports="$(uci get switch.lan.ports)"
	local wan_ports="$(uci get switch.wan.ports)"
	local cpu_ports="$(uci get switch.cpu.ports)"

	core_phy_init "$lan_ports" "$wan_ports" "$cpu_ports"
}

switch_lib_init
