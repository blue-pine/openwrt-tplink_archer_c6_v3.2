--ɾ��wan_error��ر��

local uci_r = require("luci.model.uci").cursor()

uci_r:set("wportal", "wanerror", "enable", "yes")
uci_r:commit("wportal")