$(document).ready(function(){$(".burger-menu").click(function(t){$(".burger-menu, nav").toggleClass("active")}),$("section, footer, nav").click(function(t){$(".burger-menu, nav").removeClass("active")}),$(".heading-slider").slick({dots:!1,autoplay:!0,autoplaySpeed:1300,arrows:!0})}),$(function(){var s=$("#header"),e=$("#about").innerHeight(),t=$(window).scrollTop();function o(t){e-400<=t?s.addClass("fixed"):s.removeClass("fixed")}o(t),$(window).on("scroll",function(){o(t=$(this).scrollTop())})}),$("[data-scroll]").on("click",function(t){t.preventDefault();var s=$(this),e=s.data("scroll"),o=$(e).offset().top-80;$("#nav a").removeClass("active"),s.addClass("active"),$("html, body").animate({scrollTop:o},1e3)}),$(".clients-slider").slick({dots:!1,autoplay:!1,autoplaySpeed:500,arrows:!0,infinite:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0}},{breakpoint:770,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".team-slider").slick({dots:!0,autoplay:!0,autoplaySpeed:1e3,arrows:!1,asNavFor:".skills-slider"}),$(".skills-slider").slick({dots:!1,arrows:!1,asNavFor:".team-slider"}),$("[data-collapse]").on("click",function(t){t.preventDefault();var s=$(this),e=s.data("collapse");s.toggleClass("active"),$(e).slideToggle()});var video=document.querySelector("video"),playVideo=document.getElementById("play-video"),playNow=document.getElementById("play-now-btn");function togglePlayPause(){video.paused?(playVideo.classList.add("active"),video.play()):(playVideo.classList.remove("active"),video.pause())}playVideo.onclick=function(){togglePlayPause()},playNow.onclick=function(){togglePlayPause()};var navProjects=document.querySelector(".nav-projects"),projects=document.querySelector(".projects"),buttonProjects=navProjects.querySelectorAll("button"),projectsItem=projects.querySelectorAll("img");navProjects.addEventListener("click",function(){if("BUTTON"==event.target.tagName&&!event.target.classList.contains("active")){for(var t=0;t<buttonProjects.length;t++)buttonProjects[t].classList.contains("active")&&buttonProjects[t].classList.remove("active"),event.target.classList.add("active");for(t=0;t<buttonProjects.length;t++)if(buttonProjects[t].classList.contains("active")&&buttonProjects[t].classList.contains("photo"))for(t=0;t<projectsItem.length;t++)projectsItem[t].classList.contains("web-design")||projectsItem[t].classList.contains("branding")||projectsItem[t].classList.contains("mobile-app")?projectsItem[t].classList.add("hidden"):projectsItem[t].classList.remove("hidden");else if(buttonProjects[t].classList.contains("active")&&buttonProjects[t].classList.contains("design"))for(t=0;t<projectsItem.length;t++)projectsItem[t].classList.contains("photography")||projectsItem[t].classList.contains("branding")||projectsItem[t].classList.contains("mobile-app")?projectsItem[t].classList.add("hidden"):projectsItem[t].classList.remove("hidden");else if(buttonProjects[t].classList.contains("active")&&buttonProjects[t].classList.contains("brand"))for(t=0;t<projectsItem.length;t++)projectsItem[t].classList.contains("photography")||projectsItem[t].classList.contains("web-design")||projectsItem[t].classList.contains("mobile-app")?projectsItem[t].classList.add("hidden"):projectsItem[t].classList.remove("hidden");else if(buttonProjects[t].classList.contains("active")&&buttonProjects[t].classList.contains("app"))for(t=0;t<projectsItem.length;t++)projectsItem[t].classList.contains("photography")||projectsItem[t].classList.contains("web-design")||projectsItem[t].classList.contains("branding")?projectsItem[t].classList.add("hidden"):projectsItem[t].classList.remove("hidden");else if(buttonProjects[t].classList.contains("active")&&buttonProjects[t].classList.contains("all"))for(t=0;t<projectsItem.length;t++)(projectsItem[t].classList.contains("photography")||projectsItem[t].classList.contains("web-design")||projectsItem[t].classList.contains("branding")||projectsItem[t].classList.contains("mobile-app"))&&projectsItem[t].classList.remove("hidden")}});