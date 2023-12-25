(function($){
$.su = $.su || {};

$.su.url = function(url){
	var url = $.su.url.subs + $.su.url.stok + url;
	return url;
};

$.su.ozkerurl = function(url){
	var url = $.su.url.ozkersubs + $.su.url.stok + url;
	return url;
};

$.su.url.ozkersubs = "/cgi-bin/ozker/;stok=";

$.su.url.subs = "/cgi-bin/luci/;stok=";
/*$.su.url.stok = (function(){
	var stok = "12345",
		href = top.location.href;
	var stokPos = href.indexOf("stok=");
	if (stokPos >= 0){
		stok = href.substring(stokPos+5);
	};
	return stok;
})();*/

$.su.url.stok = "";

$.su.locale = {

	URL_LAN_CHECK: "./data/lan.json",

    DEFAULT_LAN_TYPE: "en_US",

    URL_JS: "./locale/%LAN_TYPE%/lan.js?t=1657161073674",
    URL_CSS: "./locale/%LAN_TYPE%/lan.css?t=1657161073674",
    URL_HELP: "./locale/%LAN_TYPE%/help.js?t=1657161073674",

    locale: "en_US"
};

$.su.locale.get = function(callback_success, callback_failed){
    var me = this;

	var URL_LAN_CHECK = this.URL_LAN_CHECK;

	var URL_JS = this.URL_JS;
	var URL_CSS = this.URL_CSS;
	var URL_HELP = this.URL_HELP;

    var data = {
        "operation": "read"
    };
    
    var index = URL_LAN_CHECK.indexOf("index_lang") < 0 ? false : true;
    if(index){
        data = $.su.encryptor.dataEncrypt($.param(data, true));
    }
    
    $.ajax({
    	type: "POST",
        url: URL_LAN_CHECK,
        async: false,
        dataType: "json",
        data: data,
        success: function(data){
            if(index){
                if(data == "" || (data && data.data == undefined)){
                    return;
                }
                try{
                    data = JSON.parse($.su.encryptor.dataDecrypt(data.data));
                }catch(e){
                    $.encrypt.encryptManager.cleanStorage();
                    location.href = "/";
                }
            }

        	if (data.success && data.data && data.data.locale){
        		$.su.locale.changeType(data.data);
        	}else{
                $.su.locale.setDefault();
                switch(data.errorcode){
                    case "timeout":
                        $.encrypt.encryptManager.cleanStorage();
                        location.href = "/";
                        break;
                    case "user conflict":
                        if ($.su.app && $.su.app.errorOperation && $.su.app.errorOperation.userConflict){
                            $.su.app.errorOperation.userConflict();
                        };
                        break;
                    case "permission denied":
                        if ($.su.app && $.su.app.errorOperation && $.su.app.errorOperation.denied){
                            $.su.app.errorOperation.denied();
                        };
                        break;
                    default:
                        break;
                }
            };
        	
            if (callback_success){
                callback_success.call(me);
            };
        },
        error: function(){
            $.su.locale.setDefault();
            if (callback_failed){
                callback_failed.call(me);
            };
        }
    });
};
$.su.locale.set = function(lanType, callback_success, callback_failed){
    var me = this;
	if (!lanType){
		return;
	}

	var URL_LAN_CHECK = this.URL_LAN_CHECK;

	var URL_JS = this.URL_JS;
	var URL_CSS = this.URL_CSS;
	var URL_HELP = this.URL_HELP;

    var data = {
        "operation": "write",
        "locale": lanType
    };
    
    var index = URL_LAN_CHECK.indexOf("index_lang") < 0 ? false : true;
    if(index){
        data = $.su.encryptor.dataEncrypt($.param(data, true));
    }
    
    $.ajax({
    	type: "POST",
        url: URL_LAN_CHECK,
        async: false,
        dataType: "json",
        cache: false,
        data: data,
        success: function(data){
            if(index){
                if(data == "" || (data && data.data == undefined)){
                    return;
                }
                try{
                    data = JSON.parse($.su.encryptor.dataDecrypt(data.data));
                }catch(e){
                    $.encrypt.encryptManager.cleanStorage();
                    location.href = "/";
                }
            }
            if(data.success){
            	location.reload();
                if (callback_success){
                    callback_success.call(me);
                };
            }else{
                switch(data.errorcode){
                    case "timeout":
                        $.encrypt.encryptManager.cleanStorage();
                        location.href = "/";
                        break;
                    case "user conflict":
                        if ($.su.app && $.su.app.errorOperation && $.su.app.errorOperation.userConflict){
                            $.su.app.errorOperation.userConflict();
                        };
                        break;
                    case "permission denied":
                        if ($.su.app && $.su.app.errorOperation && $.su.app.errorOperation.denied){
                            $.su.app.errorOperation.denied();
                        };
                        break;
                    default:
                        break;
                }
            }
        },
        error: function(){
            $.su.locale.setDefault();
            if (callback_failed){
                callback_failed.call(me);
            };
        }
    });
};
$.su.locale.changeType = function(data){
	var lanType = data.locale || this.DEFAULT_LAN_TYPE,
        force = data.force === true ? true : false,
        model = data.model || "",
        region = data.region || "";

	var URL_JS = this.URL_JS.replace("%LAN_TYPE%", lanType);
	var URL_CSS = this.URL_CSS.replace("%LAN_TYPE%", lanType);
	var URL_HELP = this.URL_HELP.replace("%LAN_TYPE%", lanType);

    this.locale = lanType;
    this.force = force;
    this.model = model;

	$("script#lan-js").remove();
	$("link#lan-css").remove();
	$("script#lan-help").remove();

	$("head").append("<script id=\"lan-js\" type=\"text/javascript\" src=\""+URL_JS+" \"></script>");
	$("head").append("<link id=\"lan-css\" type=\"text/css\" rel=\"stylesheet\" href=\""+URL_CSS+" \"/>");
	$("head").append("<script id=\"lan-help\" type=\"text/javascript\" src=\""+URL_HELP+" \"></script>");
	$("head").append("<script type=\"text/javascript\" src=\"./locale/language.js\" ></script>");
    //console.log("this", this)
};

$.su.locale.setDefault = function(){
	this.changeType({
        "locale": this.DEFAULT_LAN_TYPE,
        "force": false,
        "model": "",
        "region": ""
    });
};

})(jQuery);
