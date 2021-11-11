// ==UserScript==
// @name         鼠标点击冒泡
// @namespace    https://djzhao.js.org
// @version      0.1
// @description  一个用JS写的鼠标左击特效
// @description  一些Emoji 😀😃😄😁😆😅😂🤣☺😊😚😙😗😘😍😌😉🙃🙂😇😋😜😝😛🤑🤗🤓😎🤡🤠😖😣☹🙁😕😟😔😞😒😏😫😩😤😠😡😶😐😑😯😦😥😢😨😱😳😵😲😮😧🤤😭😪😴🙄🤔😬🤥🤐💩👺👹👿😈🤕🤒😷🤧🤢👻💀☠👽👾🤖🎃😺😸😹🙏👏🙌👐😾😿🙀😽😼😻
// @author       一碗单炒饭
// @include      /[a-zA-z]+://[^\s]*/
// @run-at       document_start
// ==/UserScript==
onload = function() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";
        clearInterval(anim);
        switch ((++click_cnt) % 15) {
            case 1:
                $elem.innerText = "若说一月浅阳是你樱唇边的笑，我愿做一位抒情人，写你暖春丽影。 ";
                break;
            case 3:
                $elem.innerText = "若说三月烟雨是你眸眼中的泪，我愿做一位撑伞人，为你留住晴天。 ";
                break;
            case 5:
                $elem.innerText = "若说五月牡丹是你发髻上的花，我愿做一位浇花人，守你最美年华。 ";
                break;
            case 7:
                $elem.innerText = "若说七月流星是你闭目许的愿，我愿做一位追梦人，替你实现宿愿。 ";
                break;
            case 9:
                $elem.innerText = "若说九月落叶是你素指弹的音，我愿做一位通禅人，听你深浅心意。";
                break;
            case 11:
                $elem.innerText = "LYF是什么意思呢？";
                break;
            case 13:
                $elem.innerText = "Love You Forever";
                break;
            case 80:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 90:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
		// 手动更换下面这行双引号里面的内容 如"😀"
                $elem.innerText = "❤";
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function() {
        	anim = setInterval(function() {
	            if (++increase == 150) {
	                clearInterval(anim);
			$body.removeChild($elem);
	            }
	            $elem.style.top = y - 20 - increase + "px";
	            $elem.style.opacity = (150 - increase) / 120;
	        }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};
