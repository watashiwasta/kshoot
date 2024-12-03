	$(document).ready(function() {

		var st=0, openPenal=false;
		//var nav = $('.topmenu-background');
		var nav = $("#topmenu");
		//nav.hide();
		
		
		$(window).scroll( function () {
			if ((st = $(this).scrollTop()) > 136) {
				
				nav.show();
				if (openPenal) { 
					nav.addClass("w-nav");
				} else {
					nav.addClass("f-nav");
					nav.removeClass("w-nav");
				}
			} else {
				nav.hide();				
				nav.removeClass("f-nav");
			}
			$(".scotch-panel-left").css("top", 0);
		});
			

		$(".toggle-panel").click( function() {

			$("#scotch-panel").show();
			if( $("div").hasClass("scotch-is-showing") ) {
				if (st > 136) {
					nav.addClass("w-nav");
					nav.removeClass("f-nav");	
				} 
				openPenal = true;											
				
				$(".scotch-panel-left").css("top", st);

			} 
			else 
			{
				if (st > 136) {
					nav.addClass("f-nav");
					nav.removeClass("w-nav");							
				} 
				openPenal = false;
				$(".scotch-panel-left").css("top", 0);
			}
		});
		
		
		//var currentPosition = parseInt($(".scotch-panel-left").css("top"));  
		//$(window).scroll(function() {  
		//	var position = $(window).scrollTop(); 
		//	$(".scotch-panel-left").stop().animate({"top":position+currentPosition+"px"},0);  
		//});  

        

        
		
		$(".searchContainer1").hide();
		$("#srchSwitch1").click( function() {
			$(".searchContainer1").toggle(); 
			$("#strSearch").focus().css("background-color", "#f5f5f5");
		});

		
		$("#srchSwitch2").click( function() {
			$(".searchContainer1").hide();
		});


		$(".searchContainer2").hide();
		$("#srchSwitch3").click( function() {
			$(".searchContainer2").toggle(); 

			$("#strSearch2").focus().css("background-color", "#ffffff");
		});

		$("#srchSwitch_logo").click( function() {
			$("#searchContainer_logo").toggle(); 
			var elemMenuRight = document.getElementById('logo_menu_right');
			var elemSearchContainer = document.getElementById('searchContainer_logo');

			elemSearchContainer.style.top = elemMenuRight.getBoundingClientRect().top + 12 + $(document).scrollTop() + 'px';
			elemSearchContainer.style.left = elemMenuRight.getBoundingClientRect().right - elemSearchContainer.getBoundingClientRect().width + 'px';
			
			$("#logo_menu_right").hide();
			$("#strSearch_logo").focus().css("background-color", "#f5f5f5");
			$("#maskLogoSearch").css("display","block");
			popupOpen = true;
		});

		
		$("#srchSwitch_logo_close").click( function() {
			$("#searchContainer_logo").hide();
			$("#logo_menu_right").toggle();
			$("#maskLogoSearch").css("display","none");
			popupOpen = false;
		});

		$("#srchSwitch_top").click( function() {
			$("#searchContainer_top").toggle(); 
			var elemMagGlass = document.getElementById('srchSwitch_top');
			var elemSearchContainer = document.getElementById('searchContainer_top');
			elemSearchContainer.style.top = $(document).scrollTop() + 6;
			elemSearchContainer.style.left = elemMagGlass.getBoundingClientRect().right - elemSearchContainer.getBoundingClientRect().width;
			$("#strSearch_top").focus().css("background-color", "#f5f5f5");
			$("#maskTopSearch").css("display","block");
			popupOpen = true;
		});

		
		$("#srchSwitch_top_close").click( function() {
			$("#searchContainer_top").hide();
			$("#maskTopSearch").css("display","none");
			popupOpen = false;
		});



		// 상단 검색창 슬라이드 시작
		//$( function() {
		//	function runEffect() {
				
				// Most effect types need no options passed by default
		//		var options = {};
				
				// Run the effect
		//		$("#effects").show( "slide", options, 500, callback );
		//		$("#strSearch2").focus().css("background-color", "#E7E7E7");
				
		//		function callback() {
		//			setTimeout(function() {
		//				$( "#effect:visible" ).removeAttr( "style" );
		//			}, 1000 );
		//		};				
		//	};
			
		//	$( "#srchSwitch3" ).on( "click", function() {
		//		$("#srchSwitch3").hide();
		//		runEffect();
		//	});
			
		//	$( "#effects" ).hide();
		//});	

		
		//$("#closeAction").click( function() {
		//	$("#effect").hide();
		//	$("#srchSwitch3").show();
		//});			
		// 상단 검색창 슬라이드 끝
		
		


		// TOP SEARCH LAYER 검색창 
		$("#srchSwitch3").click( function(){ 
			$("#srchlayer").toggle();
			$("#strSearch2").focus();
		});

		$("#closeAction").click( function() {
			$("#srchlayer").toggle();
		});		

		
		
		
		// 슬라이드 검색창 실행
		$("#searchAction").click( function(){ 
			var inputWord = $("#strSearch2").val();
			
			if(inputWord == "") {
				alert("Empty keyword!");
				return false;
			} 
			else {
				$("#slideSrchfrm").submit();					
			}
		});
		
		
		
		
		
		// 커튼 검색창 실행
		$("#srchButton").click( function(){ 
			var inputWord = $("#strSearch").val();
			
			if(inputWord == "") {
				alert("Empty keyword!");
				return false;
			} 
			else {
				$("#downSrchfrm").submit();					
			}
		});		

		$("#srchButton_logo").click( function(){ 
			var inputWord = $("#strSearch_logo").val();
			
			if(inputWord == "") {
				alert("Empty keyword!");
				return false;
			} 
			else {
				$("#downSrchfrm_logo").submit();					
			}
		});	

		$("#srchButton_top").click( function(){ 
			var inputWord = $("#strSearch_top").val();
			
			if(inputWord == "") {
				alert("Empty keyword!");
				return false;
			} 
			else {
				$("#downSrchfrm_logo").submit();					
			}
		});

		$("#srchButtonTop_top").click( function(){ 
			var inputWord = $("#strSearchTop_top").val();
			
			if(inputWord == "") {
				alert("Empty keyword!");
				return false;
			} 
			else {
				console.log(inputWord);
				$("#downSrchfrm_top").submit();					
			}
		});		
		
		
		// BREAKING NEWS
		function tick() {
			$('#weather li:first').slideUp( 
				function () { 
					 $(this).appendTo($('#weather')).slideDown();
					 var rightPos = $('.weatherInfoId').position().left + $('.weatherInfoId').width() + 5;
					 $('#caiId').css("left", rightPos);
					 $('#caiId').css("position", "absolute");
				}
			);
		}
		setInterval(function(){ tick () }, 5000);			
		
		// MOST READ STROPES SET PANE WIDTH
		$('.2mn_02').css('width','600px');	



		function goSearchSlide() {
			kword = document.getElementById("strSearch2").value
			//document.location.href='<%=homeFolderJED%>archive/search_page.asp?kword='+kword;
			var doc = document.slideSrchfrm;
			doc.submit
		}

		function goSearchSlide() {
			kword = document.getElementById("strSearch").value
			//document.location.href='<%=homeFolderJED%>archive/search_page.asp?kword='+kword;
			var doc = document.goSearchDwn;
			doc.submit
		}

		function goSearchSlide_logo() {
			kword = document.getElementById("strSearch_logo").value
			//document.location.href='<%=homeFolderJED%>archive/search_page.asp?kword='+kword;
			var doc = document.goSearchDwn;
			doc.submit
		}

				
		// scroll_top 
		$(window).scroll(function(){
			if ($(this).scrollTop() > 500) {
				$('.scroll_top').fadeIn();
			} else {
				$('.scroll_top').fadeOut();
			}
		});
		
		//Click event to scroll to top
		$('.scroll_top').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
		
        

		
		//$("#st_B1").click( function() {  
			//alert("CLICK");
		//});			
		
		
		
		//$('.st_over1').addClass('st_over4');
		//$('.st_over2').addClass('st_over4');
		//$('.st_over3').addClass('st_over4');
		
		//$("ul.tabs li:first").addClass("active").show();
		
		// Short Takes
		$("#pdiv2").hide();
		$("#pdiv3").hide();
		$("#pdiv1").show();		



		$(".st_B1").click(function() {  
			$("#pdiv1").show();
			$("#pdiv2").hide();
			$("#pdiv3").hide();
		});			
		
		$(".st_B2").click(function(){
			$("#pdiv2").show();
			$("#pdiv1").hide();
			$("#pdiv3").hide();
		});
	
		$(".st_B3").click(function(){
			$("#pdiv3").show();
			$("#pdiv1").hide();
			$("#pdiv2").hide();
		});		
		


        // All Menu 
        $("#popup_open").click(function(){ 
            $("#popup_wrap").css("display", "block"); 
            $("#mask").css("display", "block"); 
        }); 
        $("#popup_close").click(function(){ 
            $("#popup_wrap").css("display", "none"); 
            $("#mask").css("display", "none"); 
        }); 

        $("#popup_open2").click(function(){ 
            $("#popup_wrap2").css("display", "block"); 
            $("#mask2").css("display", "block"); 
        }); 
        $("#popup_close2").click(function(){ 
            $("#popup_wrap2").css("display", "none"); 
            $("#mask2").css("display", "none"); 
        }); 

        $("#popup_open3").click(function(){ 
            $("#popup_wrap2").css("display", "block"); 
            $("#mask2").css("display", "block"); 
        }); 
        $("#popup_close3").click(function(){ 
            $("#popup_wrap2").css("display", "none"); 
            $("#mask2").css("display", "none"); 
        });     
        
	});





	// END OF DOCUMENT.READY 
		





