LuaQ               &o     H@  ��  ��@"@�  H@ "� A  �� b� �  �� �� �   �  HA "� A �� b� � �� �� �  �  HB "� A �� b� � �� �� �  �  HC "� A �� b� ��D ��� � � �C �EHD �� � �C    ��� E�D � "� D    �D FE�D � b� YD    �H� � �D � H� � �E � H� �	 �FIȆ	 �� �	 �F��	 � 
 HG
 �  �G     
 �  ��
 ��  � � �G �G  � �� �� � �   �G �G    � �   �� ��     � � �G �G  �    �     � � �    �� ��    �       � �    � �     �G �G       �        �   � �   ��� ��      �   �  � �  �     ��G �G    � �� ��        �� � �G �G      �    	 � � �� �� � �  �     �G �G !� a�    � � � �	B� a  �	  B� aH B a�  �  BH a�  � �B� E�  ��  �H  � �������H  	 ����Ȉ�D�����  �H  I �������H  	 �������H  I ����Ȉ�D����H ň I  A� I���	�I  A	 I�����I  A� I���	��  A	 I��IV����I  AI I���	�I  A� I������Ȉ���  I  A� I���	�I  A� I���	��  A	 I��IV�������� I  AI I���	�I  A� I���	�I  AI I������  A� I��IV��	��Ȉ�ň  I  AI I���	��  A� I��IV��	��Ȉ���  I  AI I���	�I  A	 I���	�I  AI I������Ȉ��	  � �  � �H	    �       �  	   � �
  
 ��H �	  # � c      module    luci.controller.admin.firmware    package    seeall    require    luci.model.uci 
   luci.http    luci.tools.debug 	   luci.sys    nixio    luci.model.controller    luci.fs    luci.sys.config $   luci.controller.admin.cloud_account    luci.model.log 
   luci.util    luci.model.fmup    luci.model.crypto    cursor 
   luci.json    get_profile    global 
   small_mem    no    reboot_time 	K      upgrade_time 	x      /tmp/firmware.bin    /tmp/cloud_up.bin    /tmp/read-backup-userconf.bin $   /tmp/read-backup-userconf-merge.bin    /tmp/portal_logo.jpg    /tmp/portal_back.jpg    /storage/portal_logo_user.jpg    /storage/portal_back_user.jpg    os    execute 7   nvrammanager -s | grep default-config2 >/dev/null 2>&1 4   nvrammanager -s | grep user-config2 >/dev/null 2>&1    /tmp/firmware_lock.lua 	       fork_reboot    file_flash    update_fwuppercent    update_rebootflag    restore_error    make_common_config    set_common_config    find_default_ip 
   hide_info    config_read    config_check    md5_product_name    md5_product_info    config_backup    config_restore    config_reboot    fork_reboot_withled    config_factory    config_extract    upgrade_read    upgrade_write    set_download_inf    get_upgrade_detail    upgrade_fwup_check    upgrade_firmware 
   utfstrlen    GetShortName    tmp_get_firmware_info    fw_check_loop    fw_upgrade    tmp_upgrade_firmware    tmp_get_upgrade_info    agile_config_filename    config    reboot    cb    tmp_reboot    factory    tmp_factory    tmp_cmd    get_firmware_info    get_upgrade_info    read    check    backup    restore    own_response    config_multipart    upgrade    write    fwup_check 	   firmware    save_upgrade 	   dispatch    _index    index '       .   J     N   H   �@  ��  ��� [� A�@ �@ ���� H�  M� ���A��� "��M �@�G �� �� [  ���� [�M@���M��@��A � G��  �C[ ��"���A� @���� bĀ� 	[�M@�@�M����A� @���� b���	�D BD A� ��b� � ��  ��M �@ ���� ��   �@H� �� W��"A �  # �       /tmp/partition.txt 	       os    execute    nvrammanager -s >     io    open    r     read    *line    string    find    (.-),()    size%s*=%s*(.-)%s*Bytes    gfind    size    _ 	   tonumber    rm                      L   U           H@  "� E@  D�@��   � A��� �@A� H�  �� �@    ���  D� ���A �  �@ �@B Ȁ �@ c  # �       require 	   luci.sys    reboot_time 	K      cursor    get_profile    global 
   fork_call    sync 
   fork_exec    sleep 2;reboot                     W   \     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w )   check_status = {totaltime=%d, ops="%s"}
    write    string    format    close                     ^   c     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w '   check_status = {percent=%d, ops="%s"}
    write    string    format    close                     e   j     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/reboot_flag.lua    w &   check_status = {reboot=%d, ops="%s"}
    write    string    format    close                     l   q     
   �   �@@Ȁ  �  ����  AA�� ��A��  [� � "A  B"A # � 	      io    open    /tmp/firmware_status.lua    w ,   check_status = {error_code="%s", ops="%s"}
    write    string    format    close                     s   ~         �  @@��@�A  @@� �� �� b���  �   � ���A� [��� � � W��A���  ��� � �@ # �       image_boot    0    device_mode    router    io    open     /tmp/save-backup-commonconf.bin    w    pairs    write    =         close                     �   �      3       @@ H�  ��  "��F A �@ b����A �@ �� � B� � A ����� � �� H�  M�B� �M C  ��� M@� �M��� �M��  ��@   ADH� � �� W��"A   ADH ���� W��"A   ADHA "A # �       io    open     /tmp/read-backup-commonconf.bin    r    read    *all    close    string    match    image_boot=(%d)     device_mode=(%a+)     0    1    router    ap 	   repeater    os    execute    nvram set image_boot=     >/dev/null 2>&1    nvram set device_mode=    nvram commit >/dev/null 2>&1                     �   �     
4      A@H�  "A 
   �@H �A "A��  �AHA � "��FABȁ b�� �F�BbA A  @A�� bA H@ �� A @A��  �� � [ �A�b�� ��� B� H� �  A @A����� � [ �A�b�� ��� B� �  # �       os    execute J   nvrammanager -r /tmp/default-config.bin -p default-config >/dev/null 2>&1    dec_file_entry    /tmp/default-config.bin    /tmp/default-config.xml    io    open    r    read    *all    close F   rm -f /tmp/default-config.xml /tmp/default-config.bin >/dev/null 2>&1    <interface name="lan">    </interface>    _    string    find    (.-) 	   <ipaddr> 
   </ipaddr>                     �   �    
5   J   @ � �   �@  b@�A�  @�� @ � �@ b@ J � @�� �@  �� b@�E  �  �@ _@ �� � � � ����  ������ [ B�A ��  ����  ��@� A�  �@ � � �@CȀ A  �@��   ��C�@    �@���  ��@� A�  �@ # �       dec_file_entry    /tmp/tmp-backup-userconf.xml    luci    sys    exec    mkdir -p /tmp/backupcfg 
   xmlToFile    /tmp/backupcfg    accountmgnt    cloud_config    ipairs    rm -f /tmp/backupcfg/config/ P   rm -f /tmp/backup/ori-backup-user-config.bin;rm -f /tmp/tmp-backup-userconf.xml    convertFileToXml    /tmp/backupcfg/config    enc_file_entry 9   rm -rf /tmp/backupcfg;rm -f /tmp/tmp-backup-userconf.xml                     �   �       E@  �   D� �c  # �    
   totaltime                     �   �    +   �   �@@��@��  �@ �   � A�@AȀ �� �   ���� Ȁ �@ A  �   � A�@A� � �� �    ��� � � �@ �@ D������ �B@��  �@CȀ �@ �   ��� � �@ �� � �  c  # �       luci    http    prepare_content 
   text/html    fs    access    /tmp/firmware_status.lua    dofile    check_status    upgrade_type    ops    restore    os    execute /   rm -f /tmp/firmware_status.lua >/dev/null 2>&1    error_code                     �   �      $      H@  "� @�@ ��  b� Y@    �H  �@ ��A��  ����@B[� �@�ƀB�@ �� � ��@�� � �  C ACH� "A   AD[��� $�#  # �       require    luci.sys.config    getsysinfo    product_name        io    open    /tmp/product_name    w    write    close    luci    sys    exec    md5sum /tmp/product_name    rm -f /tmp/product_name    string    match 
   %x%x%x%x+                     �   �      +      H@  "� @�@ ��  b� ��@ �  �� ��@ A � W�� �@�   ��� �� � �A H�  ��� "A��"A A  �C �CH "� AA @��@���A bA A� @��� � d�c  # �       require    luci.sys.config    getsysinfo    product_name    product_ver    special_id        io    open    /tmp/product_info    w    write    close    luci    sys    exec    md5sum /tmp/product_info    rm -f /tmp/product_info    string    match 
   %x%x%x%x+                     �   �  	 �  J    � �c�J �  �  c�A@  @�� @�� �  b@ A@  @�� @�� �@ b@ J  F�� ��  b� Y@    �G � M@� @��@  ��@��@Ȁ � H� �� � ����@ �@ �@� �  ��A� H� �� �@    ��  M D��� ��@�� H� �@��@  ������ �@ �  �@�� H� �@��  � H �@ A [�"��AB  @��@���� � ��bB �  ��A   �@ �@H� "A 
  GHA �� "A�
� �GH� �� "A�A   �@ �@H� "A �  �@�� H�    AHH� �� "��G�M@�  �� �AH�	 � HB	 �A�� ���[ � �AHȁ	 � ���� �A��	 H
 ⁀B���
 "��FBJȂ
 b��� M@� � ��B�H�
 ₀���BJH�
 ₀�
  KHC ���� ��"�  A�
 @��C ƃKH� ��b�  � M@� ����
 ��D F���� b��  ����
 ��D F�K�� b��  �� "D����"D�M@� � ��� "D����"D�D�"D DL"D M@� @ �D�"D DL"D D�"D D   �@ �@H� "� A�
 @��� � b��� �DH	�D 
 �����
 ���	 H� �� ��  ��L	��
 �FN��� "F  �D   ���
 ���	�H� �� ��  ��L	��
 �FN��� "F  �D   �M@�  ���
 ���	 H� �� ��  ��L	��
 �FN��� "F  �D   ���
 ���	�H� �� ��  ��L	��
 �FN��� "F  �D   ���
 ���	�H� �� ��  ��L	��
 �FN��� "F  �D   ��L	[ �D��L	[��D�M@� � ��L	[ �D��L	[��D��DL	�D �  %  �D   ��	�N
�� H "�  EO
H� "� M@� ��AE  @��
@��
�� �� F	 �bE AE  @��
@��
� bE AE  @��
@��
�E bE #  P�
� �P
H� "� AE  @��
@�
�E ȅ bE�AE  @��
@��
� bE AE  @E�
@��
@��
� 
�E  �����bE�M@� ��AE  @��
@��
�� �� F	 �bE AE  @��
@��
� bE AE  @��
@��
�E bE �D�A  b�� �  �@H�@ 
 ����  ƀ�H� �� � �@    ��  �
  �M[� �� "� � [�BFL��
 �B� � bB  A   �AL"A 
 �A�� � "� A    � M@B��J @�� �A b���A� @��� bA AA � b��M@� ����B ����B �� ��C	 ��B  ������� [ � �� �B � �B� � ���M��@ � � ���� �C [ "C ^�  ��AA  @��@���� bA  �� �AA �� bA A� @��� bA AA  @��@���A bA  �AA  @��@���� bA J�@A��� � bA�AA  @��@��� bA J @A�� ȁ bA�E �� � _A �A ������B  ������� [ C�B ��  ���A  ��@��@�A �A � �G�A  �A�����G� � �A��A  ��@��@ȁ �A AA  @��@���� bA J�@��� �A bA�E  �  _A  ����N �� � �� �AOȁ �� �A  ������� �A � ������Pȁ ��  � ��A  �����B E� � �B[Ȃ �� �� ��� � _B  RB��A� ��A 	� � 
  �\H� "�   ��J�@��B ��N��bB @�J�@��� bB I  c AB  @��@��B �  �N[��B ��bB��A  ������ �A �A  �A������� AB  @��@��A��A  ������� �A I � c  # � x   	       luci    sys    exec O   nvrammanager -r /tmp/save-backup-userconf1.bin -p user-config1 >/dev/null 2>&1 O   nvrammanager -r /tmp/save-backup-userconf2.bin -p user-config2 >/dev/null 2>&1    get_profile    backup_restore    extern_partition  "   nvrammanager -r /tmp/save-backup- 	   .bin -p      >/dev/null 2>&1    make_common_config    cloud    cloud_support    no    dec_file_entry    /tmp/save-backup-userconf1.bin    /tmp/tmp-backup-userconf1.xml    mkdir -p /tmp/backupcfg 
   xmlToFile    /tmp/backupcfg    accountmgnt    cloud_config    ipairs    rm -f /tmp/backupcfg/config/ I   rm -f /tmp/save-backup-userconf1.bin;rm -f /tmp/tmp-backup-userconf1.xml    convertFileToXml    /tmp/backupcfg/config    enc_file_entry :   rm -rf /tmp/backupcfg;rm -f /tmp/tmp-backup-userconf1.xml    io    open    r    /tmp/save-backup-userconf2.bin    /tmp/save-backup-    .bin     /tmp/save-backup-commonconf.bin )   /tmp/save-backup-userconf-temp-merge.bin    w    read    *all    string    format    %08x    seek    end    write    close 0   md5sum /tmp/save-backup-userconf-temp-merge.bin    match 
   %x%x%x%x+ $   /tmp/save-backup-userconf-merge.bin    gmatch    %x%x    0x    char 	      require    popen (   cat /tmp/save-backup-userconf-merge.bin    rm -f /tmp/save-backup- p   rm -f /tmp/save-backup-userconf1.bin;rm -f /tmp/save-backup-userconf2.bin;rm -f /tmp/save-backup-commonconf.bin Y   rm -f /tmp/save-backup-userconf-temp-merge.bin;rm -f /tmp/save-backup-userconf-merge.bin    ltn12_popen    http    header    Content-Disposition "   attachment; filename="config.bin"    prepare_content    application/octet-stream    ltn12    pump    all    md5_product_info    /tmp/product_info_md5_file    agile_config    support    split         os    execute "   mkdir /tmp/backup >/dev/null 2>&1     -----------------------backup :    /tmp/backup/ori-backup-    nvrammanager -r      -p     stat    size    router-config 
   ap-config 
   hide_info V   nvrammanager -r /tmp/backup/ori-backup-user-config.bin -p user-config >/dev/null 2>&1 '   /tmp/backup/ori-backup-user-config.bin F   tar -cf /tmp/ori-backup-userconf.bin -C /tmp/backup . >/dev/null 2>&1 #   rm -rf /tmp/backup >/dev/null 2>&1 L   nvrammanager -r /tmp/ori-backup-userconf.bin -p user-config >/dev/null 2>&1    /tmp/ori-backup-userconf.bin    /tmp/tmp-backup-userconf.xml F   rm -f /tmp/ori-backup-userconf.bin;rm -f /tmp/tmp-backup-userconf.xml 9   rm -rf /tmp/backupcfg;rm -f /tmp/tmp-backup-userconf.xml [   cat /tmp/product_info_md5_file /tmp/ori-backup-userconf.bin > /tmp/mid-backup-userconf.bin    /tmp/mid-backup-userconf.bin    /tmp/save-backup-userconf.bin "   cat /tmp/save-backup-userconf.bin �   rm -f /tmp/save-backup-userconf.bin; rm -f /tmp/product_info_md5_file; rm -f /tmp/mid-backup-userconf.bin; rm -f /tmp/ori-backup-userconf.bin (   attachment; filename="backup-%s-%s.bin"    getsysinfo    product_name    date 	   %Y-%m-%d    agile_config_filename    execl    getfirm HOSTNAME_NO_BLANK    printf    [ag]agileconfig_filename:   &   [ag]getfirm HOSTNAME_NO_BLANK failed! !   attachment; filename="%s%sn.bin"                     �  I  	 '�  A   @@� @�� ��  b@ J    � ���J �  �  ��A@ @�� �� �  b���@� � ����@� H� �@��  
 C�A ȁ "� A    � M�C@ ��    ��@ �  �F�� bA A  @��@��A bA A� �� � bA�I� c E  �A ȁ B �A���� C ���� �B�� A @��� b �  �CFD���� �AH���� �� � [ B�   HB �� �B ]B�F�� �C b��� �CGȃ   �G[�" ��  � �C���\�A @B�� b� �� �� ����� ��M�C@�  HC �� �C ]C�F�� �D b��� �DG	Ȅ   �G
[�" ��  � �D�	��	\�A @C�� b� �� �� ����� �   HC �� �C ]C�F�� �D b��� �DG	Ȅ   �G
[�" ��  � �D�	��	\�A @C�� b� �� �� ����� �  D H	 �D D��� �E "��A @E�
�� � ��� 
� b�  ���EF�C�  DH[�"� G�M�C ������	��	Q�	� ��ā���	Q�	@ ����DI	Ȅ	 �D  ����DI	��	 �D ��� �D �  ��D	�E	�D �D �� ��  �D��� � ��� ������� [ ℀ 
M�C� �F�� ��b���
F�� � b����� �E �E ��A�
 F
 ����E ����
 HF
 ⅀ M�C@�AF @����
 �F
 b���AF @��� �F
 b���F ��A�F G
 ���M ���M�C	@�ƆK[ 	�F�ƆK[ 	�F�M A��M��	@�Ɔ�[�	�F�ƆK[�	�F�M�C@�M ���M�C
@�ƆK[ 
�F�ƆK[ 
�F�M A��M��
@�Ɔ�[�
�F�ƆK[�
�F�ƆD�F Ɔ��F M�C@ �ƆD�F Ɔ��F ƆD�F �  ������ �   L[��G "��  �J�@G��� bG ��J�@G��� bG A  @��@�� bG M�C �A  @��@��G bG A  @��@��� bG A� �� � bG�I� c M ��$�M�C	 $�J @���
 � bG�A  @��@��G bG J�@��� �� bG�A  @��@�� bG A  @��@��G bG J @���� �� bG�J�@��� �G bG�A  @��@��� bG E �� � _G �G ������  ������ [	 �� �	�H ��  @����R�G  �G�� ��R� 
 �G��  ��D�E�� �G �G ��A�  �����FH ⇀@� �ƇD�G ���� H� �G��  ������ �G ���G� �G @�ƇD�G �  ������ �G �  ����� �G M�C ��  �����H �G �  ������ �G ���G�H �G �� � H �G��� � �  ������ �G �  ������ �G  �A  @��@��� bG M A �M��	��A  @��@�� bG A  @��@��G bG  �A  @��@�� bG M�C �M ���M�C
 �A  @��@��� � � �bG A  @��@�� � � �bG ��A  @��@��� � � �bG AG bG� A  @��@�� bG M�C �A  @��@��G bG A  @��@��� bG  a�J ��� b@ G  �@ ���� H  A��� "��F��bA  I��A  @��@�� bA A� �� � bA�I� c AA b�� �� ��� � ���� H� �A��A ���� H ⁀   �D EH "B   HB �	 �B ]�F���C b���� �����C �  ��D�E� �C �� ��  �C��� � � �CGȃ   �G[�" ��  � �C���\B�A @B�� b� ����B M@�@ �@ ����BIȂ �B �����BI�� �B �  ��D�E� �B �� ��  �B��� � �  ��D�E�B �B �  ��D�E� �B � �CC H� �� �B    �� M�C����� �B � ��� H ₀���B ���� �B �B ��� �B �B  �@�M����D  �AHD ��Ȅ WĄ� "ĀM�C@�����Z	�D �H� �D�	�� � [	� �D[	��� H� �� �  	� � �@����
�H ��W��
"E    �D
 E
H� ���� WŅ
"E    �D
 E
HE ��ȅ �H� WE�
"E  �
�H� ���  HF ��	W��
"E    �D
 E
H� ���� WŅ
"E ނ  ��� ���� H� �B� �� ���� H� �B��  �����C �B ������ H� �B��  ����� �B �  �����C �B � ���� H� �B������ HC �B��  ����� �B � � H �B C [�"��A  @��@��� � E �	bD �  @�
� RHC �� "C�
  �RH� �� "C�   �D EH� "C 
� �ZH� "� � [
 H� "� [  L A@ ��� ��   �D EH� "C 
� CIH  "C � H� � "C�	� # C  �AH� � "��F�F� b��@���F�DbC J�@��� ȃ bC�A  @��@��C  bC A  @��@���  bC A  @��@��� bC J�@C���  bC  �F�DbC A  @��@��� bC J�@C��  bC A� �� � bC�I� c A   @�� @ � �@! b@ J �@@� ��! b@ A�! b@� I � c  # � �      luci    http    prepare_content 
   text/html 	       io    open $   /tmp/read-backup-userconf-merge.bin    r    seek    end    set    get_profile    backup_restore    extern_partition  	    	      close    sys    exec *   rm -f /tmp/read-backup-userconf-merge.bin    restore_error    err_failed    restore 	   	      read    string    format    %02x    byte    table    concat 	   tonumber    0x 	      printf    length check success    length check failed    /tmp/read-backup-userconf1.bin    w    /tmp/read-backup-userconf2.bin $   /tmp/read-backup-externpartconf.bin     /tmp/read-backup-commonconf.bin )   /tmp/read-backup-userconf-temp-merge.bin    write 0   md5sum /tmp/read-backup-userconf-temp-merge.bin    match 
   %x%x%x%x+    md5 check success    md5 check failed p   rm -f /tmp/read-backup-userconf1.bin;rm -f /tmp/read-backup-userconf2.bin;rm -f /tmp/read-backup-commonconf.bin *   rm -f /tmp/read-backup-externpartconf.bin Y   rm -f /tmp/read-backup-userconf-temp-merge.bin;rm -f /tmp/read-backup-userconf-merge.bin    dec_file_entry    /tmp/read-backup-userconf1.xml )   mkdir -p /tmp/restorecfg /tmp/userconfig    restoreXmlToFile    /tmp/restorecfg J   rm -f /tmp/read-backup-userconf1.bin;rm -f /tmp/read-backup-userconf1.xml G   nvrammanager -r /tmp/ori-userconf1.bin -p user-config1 >/dev/null 2>&1    /tmp/ori-userconf1.bin    /tmp/ori-userconf1.xml 
   xmlToFile    /tmp/userconfig :   rm -f /tmp/ori-userconf1.bin;rm -f /tmp/ori-userconf1.xml    accountmgnt    cloud_config    ipairs    cp -f /tmp/userconfig/config/      /tmp/restorecfg/config/    convertFileToXml    /tmp/restorecfg/config    enc_file_entry .   rm -rf /tmp/restorecfg;rm -rf /tmp/userconfig 	      <?xml     /tmp %   rm -f /tmp/read-backup-userconf1.xml    decrypt userconfig1 success    decrypt userconfig1 failed 0   nvrammanager -e -p user-config1 >/dev/null 2>&1 O   nvrammanager -w /tmp/read-backup-userconf1.bin -p user-config1 >/dev/null 2>&1 0   nvrammanager -e -p user-config2 >/dev/null 2>&1 O   nvrammanager -w /tmp/read-backup-userconf2.bin -p user-config2 >/dev/null 2>&1    nvrammanager -e -p      >/dev/null 2>&1 8   nvrammanager -w /tmp/read-backup-externpartconf.bin -p     set_common_config *   --------------config_restore-------------    /tmp/read-backup-userconf.bin $   rm -f /tmp/read-backup-userconf.bin    md5_product_info    md5_product_name    /tmp/tmp-backup-userconf.bin #   rm -f /tmp/tmp-backup-userconf.bin R   dd if=/tmp/tmp-backup-userconf.bin of=/tmp/read-backup-userconf.bin ibs=1 skip=16 -   --------------extern partitions-------------    split         os    execute #   mkdir /tmp/restore >/dev/null 2>&1 F   tar -xf /tmp/read-backup-userconf.bin -C /tmp/restore >/dev/null 2>&1    /tmp/restore/ori-backup-    .bin    stat    size    gsub    %-    %%- #   --------------restore------------- )   nvrammanager -w /tmp/restore/ori-backup- 	   .bin -p     --------------erase:    , filesize=    , max_size= (   /tmp/restore/ori-backup-user-config.bin    /tmp/ori-backup-userconf.xml #   rm -f /tmp/ori-backup-userconf.xml E   nvrammanager -r /tmp/ori-userconf.bin -p user-config >/dev/null 2>&1    /tmp/ori-userconf.bin    /tmp/ori-userconf.xml 8   rm -f /tmp/ori-userconf.bin;rm -f /tmp/ori-userconf.xml       /tmp/restorecfg/config/    user%-config _   rm -rf /tmp/ori-backup-userconf.xml /tmp/restore /tmp/read-backup-userconf.bin >/dev/null 2>&1    decrypt userconfig failed /   nvrammanager -e -p user-config >/dev/null 2>&1 M   nvrammanager -w /tmp/read-backup-userconf.bin -p user-config >/dev/null 2>&1    decrypt userconfig success    call ,   [ -f /sbin/board_restore ] && board_restore 
   reboot...    fork_reboot                     K  U      J   @ � �@  b@ A�  ��  b� @ � b�� � � �@A��A�� �� �   � �� � A �@��� �@� � � �  # �       printf 
   reboot...    require    luci.model.uci    cursor    fs    access    /etc/config/history_list    commit    history_list    fork_reboot                     X  i    *      H@  "� E@  D�@��   � A��� �@A� H�  �� �@    ���  D� ���A �  �@ � � �@AA H� �� �B@��  �@����� �@  ��  �@���� �@ �@D � �@ c  # �       require 	   luci.sys    reboot_time 	K      cursor    get_profile    global 
   fork_call    sync    lp5523    message    chip-on    luci    sys    exec 1   ubus send leds '{"action" : "3","status" : "1"}'    ledcli STATUS_SAN 
   fork_exec    sleep 2;reboot                     k  )  	 �  J   @ � �@  b@ A�  ��  b� @ � b�� ��  �@ �� � �	� G���A��� � F�� � C H� b��YB    �G����  HC �� ����B    �� ��� H �C �C ₀�B    �� �C @ �� � ��M�C  � �C  D@ �� �   ��    M@D� � �D@�D �D�E
   CEH� ��"C���@�  CF �FH� "C @� [ "� M�D � [�"� �D� �
�  CG"C� �  H�  "�  A"�� [  �� � �C � "���B   �� �� � �C D "���B   �� �� � �C � "��[  [ "� M�D � [�"� �D��Y  @ �	  ��� [ "� �G � M@D@ � �D@�� [ "� M�G  �     �	   F� �C � b� YC    �H�  ������ D	 H�	 ��	 ���C   � � � ��  �
 � D
 �C�����J�C� � @D����@D� ���
 �K�C �C �� � H� �� �C    �� M�C �� �� HD ⃀����  � �M��	���
  K
H� ��	� WŅ
"E ރ   �� �C����D �C � �C����� �C � �C����� �C �����C� ��  �  � ��⃀ [ ��� �� �C����D �C ƃ� H �D ��  �C ƃ� H �D �D ��C Y  @�ƃ� H �D Ȅ ��C ��� H �C����E@�ƃ� H �D �D  �C Y  ��ƃ� H �D Ȅ ��C � ��CO�[��C���� H �C� ����Dƃ� HD	 ��	 ��	 � [ " �C  ��� HD	 �C��� H� � � �C    ���  ���
   @HD "D   DF �PH� ���D WĄ"D   DF �PH� � �D WĄ"D � � �D "� G 	   $��Q�#��� ��	E H� ℀[�	Y  ��M��@ ��E����� H �E �� ℀��	�   ���  ��	�D�	  �� 	�   ���[ 	�E W��
�D���� H �E �E ℀��	�   �Ȅ ���	�D�	  �� 	�   ���[ 	�E W��
�D�Y   ��� ���	�D�	  �� 	�   ���[ 	�E W��
�D��   �� ���	�D�	  �� 	�   ���[ 	�E W��
�D�Y   ��D ���	�D�	  �� 	�   ���[ 	�E W��
�D���@���T℀ �  @���� ��	F �"E� � ���� HE	 ��	 ��	 ℀�	   ��  ��	�D�	  �� 	�   ���[ 	�E W��
�D��D��D �  ��	� �D �����	�D� �  ��	 �D �D �� �  # � Z      printf    reset to factory config    require    luci.model.uci    cursor    luci.model.accountmgnt    get_cloudAccount    get    cloud_config    device_status 
   accountid    bind_status    0    need_unbind     all    true 	    	   	   username 	   password    print    complete_flag:     luci    sys    call 0   cp /etc/config/accountmgnt /tmp/accountmgnt_bak 	   tonumber    cloud_unbind    type    table    get_profile    ifttt    ifttt_support    no    yes    ifttt_trigger    ifttt_config    factory_id    file_flash    factory    resetconfig    os    execute 0   nvrammanager -e -p user-config2 >/dev/null 2>&1    backup_restore    extern_partition    split         ipairs    nvrammanager -e -p      >/dev/null 2>&1 !   /etc/init.d/logd stop ; logreset ,   [ -f /sbin/board_factory ] && board_factory $   [ -f /sbin/mcu_reset ] && mcu_reset    reloadconfig 0   cp /tmp/accountmgnt_bak /etc/config/accountmgnt    set    commit    1    set_cloudAccount 	   tostring    portal    portal_support $   support portal and rm nandflash jpg    exec    rm -r     global    flash_type    nand_double_image    io    open    /data/factory_status    w    bind_status=    write    ;    need_unbind=    cloud_username=    cloud_password=    accountid=    get_localPassword    local_password=    factory_id=    close    erase userconfig    eraseconfig 
   reboot...    fork_reboot_withled                     -  ~   �   H   � �
   A@[� "� A  @�
�  �@H�  "A 	  # 
   A[� "�  AA 
 L�A� �
  ����
�  �@H � W��"A 	  # @B ��
� �B[� �� "A�
  CHA "� J�F����  bA  �� "�� A b�� ����B�� B �A��� ��D�A  ����A ������ [� B�A �  B H� �B ��F�C "���F �FGbC AC @��@���C bC J� @���� bC I  c A� @��C �� ��� � b�  ���CF�AB��  I[�"� FGbB M @ � � �J� @���B	 bB ��J� @����	 bB AB @��@���B bB J� @����	 bB I� c AB @��@���
 bB AB @��@���B bB J�FB�Ȃ
 �
 b� YB    �G�M��@�� �BKȂ �B � �BK�� �B ����B� � �B� �����B�B � �B��  �DH� � "��F�Fȁ b������FGbA J� @��� bA ��FGbA J� @���A bA I  c AA @��@���� bA AA @��@���� bA # � 8      /tmp/config.bin    isfile    printf &   /tmp/config.bin file doesn't exist!!!    stat    size 	   	   '   global config.bin file size illegal!!!    false    dec_file_entry    /tmp/ori-backup-userconf.xml    getsysinfo    country    reset_merge_local    md5_product_info    md5_product_name    /tmp/tmp-backup-userconf.bin    io    open    r    luci    sys    exec    rm -f  	      read     close #   rm -f /tmp/tmp-backup-userconf.bin $   global config.bin extract failed--1    string    format    %02x    byte    table    concat    md5 check success    md5 check failed #   global config.bin md5 check error! R   dd if=/tmp/tmp-backup-userconf.bin of=/tmp/read-backup-userconf.bin ibs=1 skip=16    get_profile    backup_restore    extern_partition    os    execute #   mkdir /tmp/restore >/dev/null 2>&1 F   tar -xf /tmp/read-backup-userconf.bin -C /tmp/restore >/dev/null 2>&1 (   /tmp/restore/ori-backup-user-config.bin    /tmp/read-backup-userconf.bin 	      <?xml     extract global config success    extract global config failed    mkdir /tmp/agile_config/tmp/ Y   mv /tmp/ori-backup-userconf.xml /tmp/agile_config/tmp/user-config.xml >/dev/console 2>&1                     �  �   
R   A   �@  b� �� �   ��� � �� ��   ���� � �����   ��� � A A� @���  ��@� �� �A � b� �� ׀������ � �@�H� �� ��  M �� ��   @ ��@  � � �� �� � �@�H� �� �A  M �� ��   @ ��@  � � �����  �� �� ������ � �@�H� �� ��   ���
� F�� ȁ � HB "A 
� �F�� "A��  # �       require    luci.model.accountmgnt    model    getsysinfo    product_name    hardware_version    HARDVERSION    firmware_version    SOFTVERSION    (    string    sub    special_id 	   	      )    is_default    get    quicksetup    to_show    true 	   upgraded 
   totaltime    upgradetime    set    false    commit                     �  �      J   F � �@  A  H�  ��@ b@ J   F�� �@  b@�I � c  # �       set    quicksetup 	   upgraded    commit                     �  �    8   A   �@  b� @�� b�� ��  �   �� � � ��@� � H� �@ �@� � H �@ �@� � H� �� �@��@� � H �� �@��@�  HA �� �� �@ �@�  HA � �A �@ �@� � H� �� �A �@ �@� � H� � �A �@ �@� � �@�# �       require    luci.model.uci    cursor 	   tonumber 	d      delete    cloud_config    new_firmware    upgrade_info    set    cloud_push    cloud_reply    wportal    upgrade    enable    yes    time    0    info 
   show_flag    tcsp_status    commit                     �  �   i   �   �@  �� ��@  �  F�� B E  b��� �  Ɓ�H� � � B M��@����A � �B bB��C� �I  �� c�J� @�@B��� b� Y   �A� �� bB A  � �I� � c�J� @�@B��B b� Y  @�A� �B bB A @��B� A �� b� @�� �[� � c���@�   ��A� �B �� bB�J @��B bB J @��� bB [� � c�@�J @��� bB  � �J�@B��� bB � �J�@B��� bB I  �� c�# � $      require    ubus    connect    nvram_ubus    call    getFwupPercent    get_profile    lp5523    message 	       percent    update_fwuppercent    flash 	       err_failed    fs    access    /tmp/firmware_status.lua    dofile    check_status    /tmp/reboot_flag.lua    flag    reboot 	   tonumber 	   	d      update_rebootflag    printf    upgrade true 
   reboot...    upgrade false    chip-on 
   fork_exec 1   ubus send leds '{"action" : "3","status" : "8"}'    ledcli STATUS_ON                     �  �       A   � � d  c   # �       get_upgrade_detail                     �     6   J   @ � �@  b@ J � F�� ��   b� @� � ��  ��A�� �@ �  �@B��B�� �@ � �� C�@C�  �� �    �� ���C�  �� M�C@��   �  ��@�  ��  ��A�  �@ � ��  ��A�@ �@ �   � @Ȁ �@ � � �  # �       printf    upgrade firmware...    get_profile    lp5523    message    chip-on 
   fork_exec 1   ubus send leds '{"action" : "3","status" : "0"}'    luci    http    prepare_content 
   text/html    fs    access    upd_fm 	    1   ubus send leds '{"action" : "3","status" : "8"}'    ledcli STATUS_ON    false                           !   V   � � �    H  �A  ȁ  �  H �B A M @@�A� @���  � b��� ���  ����@�@ ���@ ��B@�� ����  # � 	   	    	�   	�   	�   	�   	�      string    byte 	                         Y    k   M @ @ � �   �# � �     E  ���A   @  ���� �  [ ��  ��  CA[���"��HC   ��� ��A@ �H�   � ��� � B@ �HC �� �� ��B@ �H�   � �� �@C@ �H� �� ��� � D@ �HC  � �� ��D  �H � @��@�� �C��[��D���@	� ���C����@��������� ����[ �C��� ��� H�  �C����� @� H�  ��  ���  ���� �C��@  �� ��CQ������ �B �#  # �     	    	   	      string    byte 	   	�   	�   	   	�   	�   	�   	�   	   	�   	�   	   	�   	�   	      sub    table    insert        ...                     [  r   T   A   �@@ b� ��  ��  ��  � � ��   �@�� �@ �   
�  �A"�� A�  � b� ����� �� �A    �� Ā����C� H �B ����A    �� Ā���A� C������A �� �A    �� Ā����C� H �� ����A    �� ��  H ⁀��� ������ � ����ƁCH� �B Ȃ ⁀�A    ��� ���ƁCH� � �B ⁀�A    ��� ����  # �    	   tonumber    needToCheck    require $   luci.controller.admin.cloud_account 	      call    cloud_getFwList    cursor    luci.sys.config    name    getsysinfo    product_name        version    get    cloud_config    upgrade_info    SOFTVERSION    release_log    GetShortName 	      releaseNote    bin 
   b64encode 	   isLatest    new_firmware    fw_new_notify    0    upgradeLevel    type                     t  }       A   �@  b� ��� �   �� �@  ����  � �A �@ Ȁ 	  � ���A	� � �# �       require $   luci.controller.admin.cloud_account    get_download_detail    os    execute    rm -f /tmp/firmware_lock.lua 	       percent                       �    	   �     �� �  [ ��  � � �# �       get_upgrade_detail                     �  �    G   
     @ H@  ��  "��   ��J   @�� �   �   � �b@�J   @�� �   �   �@�b@�J   @�� �   �   ���b@�F�A b� @ �@ �F@B b@ H� � � � � ��� �@ �  	  �� �  [ �@C  �# � �� � � ��� �� � ��� �@  �� � ��� �@  �� �� �
 � @�@ �	  # 	� # # �       open 
   /dev/null    w+    dup    stderr    stdout    stdin    fileno 	      close    0    call    sleep 3  	   tonumber 	d      upd_fm                     �  �          H@  "� @�@ b�� @ �� �I   �  c �@@A �   b� � � ��A��� �A@ ��  �@� � � � � �# � 	      require $   luci.controller.admin.cloud_account     cloud_fw_upgrade    illegel download url    get_download_progress    fork 	       fw_check_loop                     �  �           H@  "� @�@ b�� �� @ ��   �  �  � � �   # �       require $   luci.controller.admin.cloud_account    check_internet     fw_upgrade                     �  �    	$      H@  "� H�  ��  �    A I  "A  ���A  �A� ����H  ��  �A ���� �A  �H  �A  �A� � ��@ �Ā���  ����� �����  # �       require $   luci.controller.admin.cloud_account    idle    0    get_download_detail 	   tonumber    percent 	d      fail    os    execute    rm -f /tmp/firmware_lock.lua    downloading 	   tostring    status    process    upgradeTime    rebootTime                     �  �   ;   
   @HA  "A �   �@H �A "���  �A"� �  �A"A   AB[��� �� "� �  
�  C[��A "��J� @���C�� b���D�� �� ��HB ⁀ ��D� ��@����W� [�W@M�D ��  BE �EE� �� _B� RB��"B c  # �       exec 1   nvrammanager -r /tmp/softversion -p soft-version    io    open    /tmp/softversion    r    read    close    string    gsub    %c        split      	      . 	      : 	      luci    sys    call    echo %s                     *  2      a   
   � � � @�    EA  DA���  �   # �    	   dispatch 
   post_hook        +  0         ��� � �   � ��   �@@� � �@ � � �  # �       cmd 
   fork_exec                                 4  o    )   
    @ �@  Ȁ  "� @    ��  Q A Q@� Q�� Q�� �  �  H C� AA @��@���   �
  
 �
  
 �  
  
 �
  
 �
  
 �  �   bA J�@��A d c  # �       get_profile    firmware_upgrade    upgrade_flash_size 	   	   	   	   	   	       luci    http    setfilehandler    _index 	   dispatch        >  k   `   �   �@  @
��   
� HA  �@�    ���@ ��@��  � ��@�
�� �@  @��  ���� �@ �  � ���� � �@��   �� �� �� �@ ��  � ��@ ���
�H�  �   �  � ��   �   �	�Y    	�� �� � �� �� �
  � ��   � �[� �@���� �� � ��   �@��@ �� ��� J�A�@ �@ ���
�H�  �   �@ � ��� ���� �@ �   �    ��   � ��   �@��@ # �       file_flash    upload    name    image    fs    access    upgrade_type    local 	       io    open    w    write    close    os    execute    rm -f  	      rm -f /tmp/firmware_lock.lua                                 q  s           E  �@  Ȁ  _@ ��  �  �  "�  ���# �       entry    admin 	   firmware    call    _index    leaf                             