/*
 *
 *
脚本功能：会员视频、小说、漫画
软件版本：h5&轻量版
下载地址：
脚本作者：@ios151
更新时间：2024+
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# >18+面具公社🚗
^https:\/\/gnjk\.eapep\.com\/(playerinfo|api\/get_advert|api\/home\/popup) url script-response-body mjgsad.js
^https:\/\/gnjk\.eapep\.com\/request_game\/v3\/game\/list url reject-dict
^https?:\/\/(mfjk|gnjk).+\.com\/api\/(comic|video|short_movie_info|novel) url script-request-header mjgshd.js


[mitm]
hostname = gnjk.*.com, mfjk.*.com

*
*
*/







const _0x406f=['a2VhWHg=','UVhab3A=','cGFyc2U=','dlZPT1o=','aUFjWFk=','bG9n','bmlja19uYW1l','dGVzdA==','RnNzSEs=','T3J2RFo=','d2Fybg==','ZXhjZXB0aW9u','RENxQ3M=','b1RVV2k=','bXJ0Z0g=','aW1n','RFpzeU4=','TmxOUXE=','c2hvd3RpbWU=','dkR5bmo=','VnhScFE=','a0lYeUk=','Y2hhckNvZGVBdA==','Tkdyb0Q=','Tm5tb3A=','cUlBdGw=','aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1l1OTE5MS8tL21haW4vYmJ3ci5qcGc=','aW5mbw==','aW5kZXhPZg==','e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk=','SWtBYlE=','T29OZUc=','cERvTWM=','UVZWbFA=','VEJLeGI=','cmV0dXJuIChmdW5jdGlvbigpIA==','ZGVjb2Rl','aXNfdmlw','Rnpya00=','UnlBVlI=','QVFocGU=','akhJdGg=','dGFibGU=','ZWxDUFU=','blVldFE=','QEdpZUdpZTc3Nw==','Mnw2fDR8N3wxfDN8MHw1','Ym9keQ==','bGVuZ3Ro','U05JS08=','V2ZJbGk=','YXNiSW8=','dUFCY2s=','cmV0dXJuIC8iICsgdGhpcyArICIv','Y2hhckF0','Y29uc3RydWN0b3I=','Y29tcGlsZQ==','aW5jbHVkZXM=','XihbXiBdKyggK1teIF0rKSspK1teIF19','aFVoYVE=','ZGF0YQ==','dXRmLTg=','RndGaFA=','ZXJyb3I=','ZGVidWc=','c3BsaXQ=','QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0=','aHR0cHM6Ly9nbmprLmVhcGVwLmNvbS9hcGkvZ2V0X2FkdmVydA==','YWFTQUU=','QUp2d3o=','QkRTU3o=','YXBwbHk=','RGRlTE0=','aHR0cHM6Ly9nbmprLmVhcGVwLmNvbS9wbGF5ZXJpbmZv','SW52YWxpZCBiYXNlNjQgc3RyaW5n','bUtBcE4=','aHR0cHM6Ly9nbmprLmVhcGVwLmNvbS9hcGkvaG9tZS9wb3B1cA==','ZW5jb2Rl','dXJs','eGVTcnY=','dHJhY2U=','SVFma1Y=','Y29uc29sZQ==','J2J0b2EnIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBlbmNvZGVkIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3V0c2lkZSBvZiB0aGUgTGF0aW4xIHJhbmdlLg=='];(function(_0x246dd3,_0x406fd4){const _0x1b41da=function(_0x65367a){while(--_0x65367a){_0x246dd3['push'](_0x246dd3['shift']());}};const _0x5e6f32=function(){const _0x5f0f33={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x28a6fe,_0x58f276,_0x2fa11e,_0x2549d3){_0x2549d3=_0x2549d3||{};let _0x2a1ab6=_0x58f276+'='+_0x2fa11e;let _0x1af27d=0x0;for(let _0x4c8b69=0x0,_0xbc160f=_0x28a6fe['length'];_0x4c8b69<_0xbc160f;_0x4c8b69++){const _0x58b352=_0x28a6fe[_0x4c8b69];_0x2a1ab6+=';\x20'+_0x58b352;const _0x243fbc=_0x28a6fe[_0x58b352];_0x28a6fe['push'](_0x243fbc);_0xbc160f=_0x28a6fe['length'];if(_0x243fbc!==!![]){_0x2a1ab6+='='+_0x243fbc;}}_0x2549d3['cookie']=_0x2a1ab6;},'removeCookie':function(){return'dev';},'getCookie':function(_0x5de87d,_0x14534e){_0x5de87d=_0x5de87d||function(_0x5e4c36){return _0x5e4c36;};const _0x3d5112=_0x5de87d(new RegExp('(?:^|;\x20)'+_0x14534e['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x59239f=function(_0x16b8ec,_0x16b993){_0x16b8ec(++_0x16b993);};_0x59239f(_0x1b41da,_0x406fd4);return _0x3d5112?decodeURIComponent(_0x3d5112[0x1]):undefined;}};const _0x1db638=function(){const _0x3cdd3c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3cdd3c['test'](_0x5f0f33['removeCookie']['toString']());};_0x5f0f33['updateCookie']=_0x1db638;let _0x2fc31c='';const _0x45ab42=_0x5f0f33['updateCookie']();if(!_0x45ab42){_0x5f0f33['setCookie'](['*'],'counter',0x1);}else if(_0x45ab42){_0x2fc31c=_0x5f0f33['getCookie'](null,'counter');}else{_0x5f0f33['removeCookie']();}};_0x5e6f32();}(_0x406f,0xfd));const _0x1b41=function(_0x246dd3,_0x406fd4){_0x246dd3=_0x246dd3-0x0;let _0x1b41da=_0x406f[_0x246dd3];if(_0x1b41['TGRfzG']===undefined){(function(){let _0x65367a;try{const _0x1db638=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x65367a=_0x1db638();}catch(_0x2fc31c){_0x65367a=window;}const _0x5f0f33='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x65367a['atob']||(_0x65367a['atob']=function(_0x45ab42){const _0x28a6fe=String(_0x45ab42)['replace'](/=+$/,'');let _0x58f276='';for(let _0x2fa11e=0x0,_0x2549d3,_0x2a1ab6,_0x1af27d=0x0;_0x2a1ab6=_0x28a6fe['charAt'](_0x1af27d++);~_0x2a1ab6&&(_0x2549d3=_0x2fa11e%0x4?_0x2549d3*0x40+_0x2a1ab6:_0x2a1ab6,_0x2fa11e++%0x4)?_0x58f276+=String['fromCharCode'](0xff&_0x2549d3>>(-0x2*_0x2fa11e&0x6)):0x0){_0x2a1ab6=_0x5f0f33['indexOf'](_0x2a1ab6);}return _0x58f276;});}());_0x1b41['TxGFod']=function(_0x4c8b69){const _0xbc160f=atob(_0x4c8b69);let _0x58b352=[];for(let _0x243fbc=0x0,_0x5de87d=_0xbc160f['length'];_0x243fbc<_0x5de87d;_0x243fbc++){_0x58b352+='%'+('00'+_0xbc160f['charCodeAt'](_0x243fbc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x58b352);};_0x1b41['FfQCzj']={};_0x1b41['TGRfzG']=!![];}const _0x5e6f32=_0x1b41['FfQCzj'][_0x246dd3];if(_0x5e6f32===undefined){const _0x14534e=function(_0x3d5112){this['eUXOGe']=_0x3d5112;this['rotFwR']=[0x1,0x0,0x0];this['cNRXmu']=function(){return'newState';};this['wntAnC']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['ysfbOX']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x14534e['prototype']['gpDqQJ']=function(){const _0x59239f=new RegExp(this['wntAnC']+this['ysfbOX']);const _0x5e4c36=_0x59239f['test'](this['cNRXmu']['toString']())?--this['rotFwR'][0x1]:--this['rotFwR'][0x0];return this['osPsrz'](_0x5e4c36);};_0x14534e['prototype']['osPsrz']=function(_0x16b8ec){if(!Boolean(~_0x16b8ec)){return _0x16b8ec;}return this['btqkmd'](this['eUXOGe']);};_0x14534e['prototype']['btqkmd']=function(_0x16b993){for(let _0x3cdd3c=0x0,_0xff3324=this['rotFwR']['length'];_0x3cdd3c<_0xff3324;_0x3cdd3c++){this['rotFwR']['push'](Math['round'](Math['random']()));_0xff3324=this['rotFwR']['length'];}return _0x16b993(this['rotFwR'][0x0]);};new _0x14534e(_0x1b41)['gpDqQJ']();_0x1b41da=_0x1b41['TxGFod'](_0x1b41da);_0x1b41['FfQCzj'][_0x246dd3]=_0x1b41da;}else{_0x1b41da=_0x5e6f32;}return _0x1b41da;};function base64Decode(_0x6c98d9){const _0x20ee8f={};_0x20ee8f['Jikgk']=_0x1b41('0x41');_0x20ee8f[_0x1b41('0x12')]=function(_0x4ca33d,_0xa3a9ca){return _0x4ca33d(_0xa3a9ca);};_0x20ee8f[_0x1b41('0x3')]=function(_0x15d4f5,_0x5006d5){return _0x15d4f5===_0x5006d5;};_0x20ee8f[_0x1b41('0x21')]=function(_0x16a156,_0x505f21){return _0x16a156%_0x505f21;};_0x20ee8f[_0x1b41('0x28')]=_0x1b41('0x49');_0x20ee8f['pDoMc']=function(_0x21739a,_0x38a892){return _0x21739a+_0x38a892;};_0x20ee8f[_0x1b41('0x16')]=function(_0x304726,_0x1ce6e9){return _0x304726*_0x1ce6e9;};_0x20ee8f['JnBcV']=function(_0x41b551,_0x21d2bf){return _0x41b551%_0x21d2bf;};_0x20ee8f[_0x1b41('0x44')]=function(_0x56f2af,_0x1e005f){return _0x56f2af&_0x1e005f;};const _0x4f9ae7=_0x20ee8f;const _0x226663=_0x4f9ae7['Jikgk'];let _0x47b377=_0x4f9ae7[_0x1b41('0x12')](String,_0x6c98d9)['replace'](/=+$/,'');let _0x308e56='';if(_0x4f9ae7['iAcXY'](_0x4f9ae7[_0x1b41('0x21')](_0x47b377[_0x1b41('0x2f')],0x4),0x1)){throw new Error(_0x4f9ae7[_0x1b41('0x28')]);}for(let _0x40426a=0x0,_0x200cdc,_0x2b93a3,_0x3913ad=0x0;_0x2b93a3=_0x47b377[_0x1b41('0x35')](_0x3913ad++);~_0x2b93a3&&(_0x200cdc=_0x40426a%0x4?_0x4f9ae7[_0x1b41('0x1f')](_0x4f9ae7[_0x1b41('0x16')](_0x200cdc,0x40),_0x2b93a3):_0x2b93a3,_0x4f9ae7['JnBcV'](_0x40426a++,0x4))?_0x308e56+=String['fromCharCode'](_0x4f9ae7[_0x1b41('0x44')](0xff,_0x200cdc>>_0x4f9ae7[_0x1b41('0x44')](-0x2*_0x40426a,0x6))):0x0){_0x2b93a3=_0x226663[_0x1b41('0x1b')](_0x2b93a3);}return _0x308e56;}function base64Encode(_0x41fd5c){const _0x120fbc={};_0x120fbc[_0x1b41('0x14')]=_0x1b41('0x39');_0x120fbc['RyAVR']=function(_0x1ad59,_0x198a7e){return _0x1ad59===_0x198a7e;};_0x120fbc[_0x1b41('0x7')]='rlMqG';_0x120fbc[_0x1b41('0xc')]=function(_0x438a76){return _0x438a76();};_0x120fbc[_0x1b41('0xf')]=function(_0x4ae28f,_0x4213ff){return _0x4ae28f>_0x4213ff;};_0x120fbc[_0x1b41('0x50')]=function(_0x20666d,_0xb9d5c){return _0x20666d<<_0xb9d5c;};_0x120fbc[_0x1b41('0x25')]=_0x1b41('0x3a');_0x120fbc[_0x1b41('0x30')]=function(_0x2174a3,_0x556a1b){return _0x2174a3(_0x556a1b);};_0x120fbc[_0x1b41('0x3d')]=function(_0x4228ee,_0x54beb5){return _0x4228ee+_0x54beb5;};_0x120fbc['OoNeG']=_0x1b41('0x1c');_0x120fbc['QXZop']=function(_0x146705){return _0x146705();};_0x120fbc['IkAbQ']=_0x1b41('0x2d');_0x120fbc[_0x1b41('0xd')]=function(_0x22b7cc,_0x3d97b6,_0xef63a3){return _0x22b7cc(_0x3d97b6,_0xef63a3);};_0x120fbc[_0x1b41('0x43')]=function(_0x230534){return _0x230534();};_0x120fbc[_0x1b41('0x18')]=function(_0x1c72b1,_0x21945e){return _0x1c72b1|_0x21945e;};_0x120fbc[_0x1b41('0x31')]=function(_0x4f48db,_0x204696){return _0x4f48db>>_0x204696;};_0x120fbc[_0x1b41('0x2a')]=function(_0x330d02,_0x370484){return _0x330d02-_0x370484;};_0x120fbc['AQhpe']=function(_0x3f0b31,_0x3ba8e7){return _0x3f0b31*_0x3ba8e7;};_0x120fbc['Nnmop']=function(_0x176c1d,_0x3a18ef){return _0x176c1d%_0x3a18ef;};_0x120fbc[_0x1b41('0x4a')]=function(_0x124aa0,_0x1883c2){return _0x124aa0/_0x1883c2;};_0x120fbc['DCqCs']=function(_0x338967,_0x503198){return _0x338967>_0x503198;};_0x120fbc[_0x1b41('0x33')]=function(_0x268be3,_0x49d538){return _0x268be3===_0x49d538;};_0x120fbc[_0x1b41('0x13')]='IrBVI';const _0x2c5ee3=_0x120fbc;const _0x4d4035=function(){let _0x3a7cde=!![];return function(_0x4feae8,_0x30f057){const _0x39e43e=_0x3a7cde?function(){if(_0x30f057){const _0x1d065e=_0x30f057['apply'](_0x4feae8,arguments);_0x30f057=null;return _0x1d065e;}}:function(){};_0x3a7cde=![];return _0x39e43e;};}();const _0x3146ce=_0x2c5ee3[_0x1b41('0xd')](_0x4d4035,this,function(){const _0x3ca113={};_0x3ca113[_0x1b41('0x8')]=_0x2c5ee3['kIXyI'];_0x3ca113[_0x1b41('0x47')]=_0x1b41('0x34');_0x3ca113['vVOOZ']=function(_0x225d17){return _0x225d17();};const _0x107ffd=_0x3ca113;if(_0x2c5ee3[_0x1b41('0x26')](_0x2c5ee3[_0x1b41('0x7')],_0x2c5ee3[_0x1b41('0x7')])){const _0x421657=function(){const _0x2b945a=_0x421657[_0x1b41('0x36')]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x1b41('0x37')](_0x107ffd['OrvDZ']);return!_0x2b945a[_0x1b41('0x6')](_0x3146ce);};return _0x2c5ee3['oTUWi'](_0x421657);}else{const _0x8f0d5a={};_0x8f0d5a[_0x1b41('0x4e')]=_0x107ffd[_0x1b41('0x47')];_0x8f0d5a[_0x1b41('0x32')]=_0x107ffd[_0x1b41('0x8')];const _0x7c826a=_0x8f0d5a;const _0x41a7c2=function(){const _0x21a59f=_0x41a7c2[_0x1b41('0x36')](_0x7c826a[_0x1b41('0x4e')])()['compile'](_0x7c826a[_0x1b41('0x32')]);return!_0x21a59f[_0x1b41('0x6')](_0x3146ce);};return _0x107ffd[_0x1b41('0x2')](_0x41a7c2);}});_0x2c5ee3[_0x1b41('0x0')](_0x3146ce);const _0x29bd23=function(){const _0x3c2c23={};_0x3c2c23[_0x1b41('0x2b')]=function(_0x427f5c,_0x2074d4){return _0x2c5ee3[_0x1b41('0x26')](_0x427f5c,_0x2074d4);};_0x3c2c23[_0x1b41('0x20')]='FQsbs';const _0x511bdb=_0x3c2c23;let _0x3defce=!![];return function(_0x4a6c9f,_0x4d7bab){if(_0x511bdb[_0x1b41('0x2b')](_0x511bdb[_0x1b41('0x20')],_0x511bdb[_0x1b41('0x20')])){const _0x482ad0=_0x3defce?function(){if(_0x4d7bab){const _0x3ac2cb=_0x4d7bab['apply'](_0x4a6c9f,arguments);_0x4d7bab=null;return _0x3ac2cb;}}:function(){};_0x3defce=![];return _0x482ad0;}else{bytes[i]=binaryString[_0x1b41('0x15')](i);}};}();const _0x26a90c=_0x2c5ee3[_0x1b41('0xd')](_0x29bd23,this,function(){const _0x15db15={};_0x15db15[_0x1b41('0x45')]=function(_0x2bf4ad,_0x23e3df){return _0x2bf4ad/_0x23e3df;};_0x15db15['keaXx']=function(_0x281865,_0x2c3f95){return _0x2c5ee3['DZsyN'](_0x281865,_0x2c3f95);};_0x15db15['NlNQq']=function(_0x4a2b3d,_0x5546f0){return _0x2c5ee3[_0x1b41('0x50')](_0x4a2b3d,_0x5546f0);};const _0x7542f0=_0x15db15;if(_0x2c5ee3[_0x1b41('0x26')](_0x2c5ee3[_0x1b41('0x25')],_0x2c5ee3['FzrkM'])){const _0x3cc987=function(){};let _0x28978a;try{const _0x2221b5=_0x2c5ee3[_0x1b41('0x30')](Function,_0x2c5ee3[_0x1b41('0x3d')](_0x1b41('0x22')+_0x2c5ee3[_0x1b41('0x1e')],');'));_0x28978a=_0x2c5ee3[_0x1b41('0x0')](_0x2221b5);}catch(_0xf63d4){_0x28978a=window;}if(!_0x28978a[_0x1b41('0x51')]){_0x28978a[_0x1b41('0x51')]=function(_0x17ef6c){const _0xc6a576={};_0xc6a576[_0x1b41('0x4')]=_0x17ef6c;_0xc6a576[_0x1b41('0x9')]=_0x17ef6c;_0xc6a576[_0x1b41('0x3f')]=_0x17ef6c;_0xc6a576[_0x1b41('0x1a')]=_0x17ef6c;_0xc6a576[_0x1b41('0x3e')]=_0x17ef6c;_0xc6a576[_0x1b41('0xa')]=_0x17ef6c;_0xc6a576[_0x1b41('0x29')]=_0x17ef6c;_0xc6a576[_0x1b41('0x4f')]=_0x17ef6c;return _0xc6a576;}(_0x3cc987);}else{const _0x1ae011=_0x2c5ee3[_0x1b41('0x1d')][_0x1b41('0x40')]('|');let _0x24e3e0=0x0;while(!![]){switch(_0x1ae011[_0x24e3e0++]){case'0':_0x28978a['console'][_0x1b41('0x29')]=_0x3cc987;continue;case'1':_0x28978a['console']['error']=_0x3cc987;continue;case'2':_0x28978a['console'][_0x1b41('0x4')]=_0x3cc987;continue;case'3':_0x28978a[_0x1b41('0x51')][_0x1b41('0xa')]=_0x3cc987;continue;case'4':_0x28978a[_0x1b41('0x51')][_0x1b41('0x3f')]=_0x3cc987;continue;case'5':_0x28978a['console']['trace']=_0x3cc987;continue;case'6':_0x28978a[_0x1b41('0x51')][_0x1b41('0x9')]=_0x3cc987;continue;case'7':_0x28978a[_0x1b41('0x51')][_0x1b41('0x1a')]=_0x3cc987;continue;}break;}}}else{charCode=_0x43a8e5[_0x1b41('0x15')](idx+=_0x7542f0[_0x1b41('0x45')](0x3,0x4));if(_0x7542f0[_0x1b41('0x53')](charCode,0xff)){throw new Error(_0x1b41('0x52'));}block=_0x7542f0[_0x1b41('0x10')](block,0x8)|charCode;}});_0x2c5ee3[_0x1b41('0x43')](_0x26a90c);const _0x45e208=_0x1b41('0x41');let _0x43a8e5=String(_0x41fd5c);let _0x12251f='';for(let _0x335058,_0x35f7d3,_0x516820=0x0,_0x585ba8=_0x45e208;_0x43a8e5[_0x1b41('0x35')](_0x2c5ee3[_0x1b41('0x18')](_0x516820,0x0))||(_0x585ba8='=',_0x516820%0x1);_0x12251f+=_0x585ba8[_0x1b41('0x35')](0x3f&_0x2c5ee3[_0x1b41('0x31')](_0x335058,_0x2c5ee3[_0x1b41('0x2a')](0x8,_0x2c5ee3[_0x1b41('0x27')](_0x2c5ee3[_0x1b41('0x17')](_0x516820,0x1),0x8))))){_0x35f7d3=_0x43a8e5[_0x1b41('0x15')](_0x516820+=_0x2c5ee3[_0x1b41('0x4a')](0x3,0x4));if(_0x2c5ee3[_0x1b41('0xb')](_0x35f7d3,0xff)){if(_0x2c5ee3[_0x1b41('0x33')](_0x2c5ee3['VxRpQ'],'IrBVI')){throw new Error(_0x1b41('0x52'));}else{if(fn){const _0x287831=fn[_0x1b41('0x46')](context,arguments);fn=null;return _0x287831;}}}_0x335058=_0x335058<<0x8|_0x35f7d3;}return _0x12251f;}let url=$request[_0x1b41('0x4d')];let body=$response[_0x1b41('0x2e')];let binaryString=base64Decode(body);let bytes=new Uint8Array(binaryString[_0x1b41('0x2f')]);for(let i=0x0;i<binaryString[_0x1b41('0x2f')];i++){bytes[i]=binaryString[_0x1b41('0x15')](i);}let decodedData=new TextDecoder(_0x1b41('0x3c'))[_0x1b41('0x23')](bytes);let jsonData=JSON[_0x1b41('0x1')](decodedData);if(url['includes'](_0x1b41('0x48'))){jsonData[_0x1b41('0x3b')][_0x1b41('0x24')]=0x63;jsonData[_0x1b41('0x3b')][_0x1b41('0x5')]=_0x1b41('0x2c');}else if(url['includes'](_0x1b41('0x42'))){jsonData[_0x1b41('0x3b')][0x0][_0x1b41('0x11')]=0x1;jsonData[_0x1b41('0x3b')][0x0][_0x1b41('0xe')]=_0x1b41('0x19');jsonData[_0x1b41('0x3b')][0x0][_0x1b41('0x4d')]='https://t.me/GieGie777';}else if(url[_0x1b41('0x38')](_0x1b41('0x4b'))){jsonData['data']={};}let modifiedDataString=JSON['stringify'](jsonData);let modifiedDataBytes=new TextEncoder()[_0x1b41('0x4c')](modifiedDataString);let modifiedDataBinaryString='';for(let i=0x0;i<modifiedDataBytes['length'];i++){modifiedDataBinaryString+=String['fromCharCode'](modifiedDataBytes[i]);}let encodedModifiedData=base64Encode(modifiedDataBinaryString);const _0x5b4183={};_0x5b4183[_0x1b41('0x2e')]=encodedModifiedData;$done(_0x5b4183);
