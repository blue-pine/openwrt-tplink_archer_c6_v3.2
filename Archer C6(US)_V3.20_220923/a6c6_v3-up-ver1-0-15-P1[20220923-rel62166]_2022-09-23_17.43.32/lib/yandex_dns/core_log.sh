# Copyright(c) 2011-2013 Shenzhen TP-LINK Technologies Co.Ltd.
#
# /lib/access-control/core_log.sh
# Written by Huluyao <huluyao@tp-link.com.cn>, June 2014
#
# This script is used to make tp-link log of access-control

# mod id
YANDEX_DNS_MOD_ID=248

# information
LOG_INF_INIT_SUCCESS=501
LOG_INF_FUNCTION_ENABLE=502
LOG_INF_FUNCTION_DISABLE=503
LOG_INF_SERVICE_START=504
LOG_INF_SERVICE_STOP=505
LOG_INF_UCI_INIT_SUCCESS=506
LOG_INF_UBUS_CONNECT_SUCCESS=507
LOG_INF_SERVICE_RESTART=508

# notice
LOG_NTC_SAVE_CONFIG_SUCCESS=601
LOG_NTC_RESET_CONFIG_SUCCESS=602
LOG_NTC_IMPORT_CONFIG_SUCCESS=603
LOG_NTC_EXPORT_CONFIG_SUCCESS=604
LOG_NTC_UPGRADE_SUCCESS=605
LOG_NTC_FLUSH_CT_SUCCESS=606

# warning
LOG_WNG_MAX_RULES=701

# error
LOG_ERR_INIT_FAIL=751
LOG_ERR_RESET_CONFIG_FAIL=752
LOG_ERR_IMPORT_CONFIG_FAIL=753
LOG_ERR_EXPORT_CONFIG_FAIL=754
LOG_ERR_SAVE_CONFIG_FAIL=755
LOG_ERR_UPGRADE_FAIL=756
LOG_ERR_UCI_CREAT_FAIL=757
LOG_ERR_UBUS_CONNECT_FAIL=758



# ddns_syslog log_id log_param
syslog() {
    local log_id=$1
    shift
    logx -p $$ $YANDEX_DNS_MOD_ID $log_id "$@"
}
