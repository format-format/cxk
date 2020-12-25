var ele = document.getElementById("QQ_music");
			ele.addEventListener('canplay',function(){
				setTimeout(function(){
					ele.play();
				},500);
			})

            document.getElementById("container").onclick = function(){
		ele.pause();
                this.removeChild( ele );
                this.style.display = "none";

                var jntm = document.getElementById("jntm");

                jntm.style.display = "block";
                // 图片以及音乐
                jntm.innerHTML = '<iframe id="jntm_music" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="https://music.163.com/outchain/player?type=2&id=444267215&auto=1&height=66"></iframe>'+
                    '<img src="http://5b0988e595225.cdn.sohucs.com/images/20190411/6771336621a6431685c8863e19eda4c6.gif" width="100%">';
            };