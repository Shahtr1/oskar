const menuBtn = document.querySelector(".menu-btn");
		const menu = document.querySelector(".menu");
		const menuNav = document.querySelector(".menu-nav");
		const navItems = document.querySelectorAll(".nav-item");
			let showMenu = false;
			document.getElementById("menu-btn").addEventListener("click", function(){
    			if(!showMenu){
    				menuBtn.classList.add("close");
    				menu.classList.add("show");
    				menuNav.classList.add("show");
    				navItems.forEach(item => item.classList.add("show"));

    				showMenu = true;
    			}else{
    				menuBtn.classList.remove("close");
    				menu.classList.remove("show");
  				    menuNav.classList.remove("show");
    				navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
    			}
});