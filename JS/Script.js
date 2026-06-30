let previousPage = 'home-page';

function createNav(){
    return `<ul class="nav" id="pageNav" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-black); --bs-nav-pills-link-active-bg: var(--bs-white);">
        <li class="nav-item">
            <button class="nav-link rounded-10 nav-button" type="button" data-target="home-page">Home</button>
        </li>
        <li class="nav-item">
            <button class="nav-link rounded-10 nav-button" type="button" data-target="about-page">About</button>
        </li>
        <li class="nav-item">
            <button class="nav-link rounded-10 nav-button" type="button" data-target="showcase-page">Showcase</button>
        </li>
        <li class="nav-item">
            <button class="nav-link rounded-10 nav-button" type="button" data-target="contact-page">Contact</button>
        </li>
    </ul>`
}

document.querySelectorAll(".nav-placeholder").forEach(nav => {
    nav.innerHTML = createNav();

    nav.querySelectorAll(".nav-button").forEach(button => {
        button.addEventListener("click", () => {
            if (button.dataset.target) navigateTo(button.dataset.target)
        })
    })
})

function createProgramNav(){
    return `
        <div class="pages-image">
            <div class="page-image fade show active" id="roblox-studio-page-image">
                <div class="text-frame" style="width: 90%;">Roblox Studio</div><br>
                <img src="Assets/Images/RobloxSaveMemberSystem.png" class="display-image-1" style="height: 200px;">
            </div>
            <div class="page-image fade" id="blender-page-image">
                <div class="text-frame" style="width: 90%;">Blender</div><br>
                <img src="Assets/Images/CharacterAnimationPose.png" class="display-image-1" style="height: 200px;">
            </div>
            <div class="page-image fade" id="unity-page-image">
                <div class="text-frame" style="width: 90%;">Unity</div><br>
                <img src="Assets/Images/UnityShaderScript.png" class="display-image-1" style="height: 200px;">
            </div>
        </div><br>

        <ul class="nav" id="pageNav" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-black); --bs-nav-pills-link-active-bg: var(--bs-white);">
            <li class="nav-item">
                <button class="nav-link rounded-10 program-nav-button" type="button" data-target="roblox-studio-page">Roblox Studio</button>
            </li>
            <li class="nav-item">
                <button class="nav-link rounded-10 program-nav-button" type="button" data-target="blender-page">Blender</button>
            </li>
            <li class="nav-item">
                <button class="nav-link rounded-10 program-nav-button" type="button" data-target="unity-page">Unity</button>
            </li>
        </ul>`
}

document.querySelectorAll(".program-nav-placeholder").forEach(programNav => {
    programNav.innerHTML = createProgramNav();

    programNav.querySelectorAll(".program-nav-button").forEach(button => {
        button.addEventListener("click", () => {
            var currentActive = document.querySelector(".page.active")
            if (currentActive) previousPage = currentActive.id

            if (button.dataset.target){
                var target = button.dataset.target
                navigateTo(target)
            }
        })
        button.addEventListener("mouseenter", () =>{
            programNav.querySelectorAll(".page-image").forEach(page => {
                page.classList.remove("show", "active");
            })

            if (button.dataset.target){
                var target = button.dataset.target
                programNav.querySelector("#" + target + "-image").classList.add("show", "active")
            }
        })
    })

})

function createDepartmentNav(){
    return `
        <div class="pages-image">
            <div class="page-image fade show active" id="programing-page-image">
                <div class="text-frame" style="width: 90%;">Programing</div><br>
                <img src="Assets/Images/CharacterInstanceScript.png" class="display-image-1" style="height: 200px;">
            </div>
            <div class="page-image fade" id="asset-design-page-image">
                <div class="text-frame" style="width: 90%;">3D Asset Design</div><br>
                <img src="Assets/Images/BlenderCharacterModel.png" class="display-image-1" style="height: 200px;">
            </div>
            <div class="page-image fade" id="ui-design-page-image">
                <div class="text-frame" style="width: 90%;">UI Design</div><br>
                <img src="Assets/Images/UpgradeUI.png" class="display-image-1" style="height: 200px;">
            </div>
        </div><br>
    
        <ul class="nav" id="pageNav" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-black); --bs-nav-pills-link-active-bg: var(--bs-white);">
            <li class="nav-item">
                <button class="nav-link rounded-10 department-nav-button" type="button" data-target="programing-page">Programing</button>
            </li>
            <li class="nav-item">
                <button class="nav-link rounded-10 department-nav-button" type="button" data-target="asset-design-page">3D Asset Design</button>
            </li>
            <li class="nav-item">
                <button class="nav-link rounded-10 department-nav-button" type="button" data-target="ui-design-page">UI Design</button>
            </li>
        </ul>`
}

document.querySelectorAll(".department-nav-placeholder").forEach(departmentNav => {
    departmentNav.innerHTML = createDepartmentNav();

    departmentNav.querySelectorAll(".department-nav-button").forEach(button => {
        button.addEventListener("click", () => {
            var currentActive = document.querySelector(".page.active")
            if (currentActive) previousPage = currentActive.id

            if (button.dataset.target){
                var target = button.dataset.target
                navigateTo(target)
            }
        })
        button.addEventListener("mouseenter", () =>{
            departmentNav.querySelectorAll(".page-image").forEach(page => {
                page.classList.remove("show", "active");
            })

            if (button.dataset.target){
                var target = button.dataset.target
                departmentNav.querySelector("#" + target + "-image").classList.add("show", "active")
            }
        })
    })

})

function goBack() {
    navigateTo(previousPage);
}

function deactivatePage(page){
    page.classList.remove("show", "active");
    page.style.height = "0"
    page.style.overflow = "hidden"
}

function activatePage(pageId){
    var page = document.getElementById(pageId)
    page.classList.add("show", "active")
    page.style.height = ""
    page.style.overflow = ""
    setActiveButton(pageId)
}

function navigateTo(pageId){
    document.querySelectorAll(".page").forEach(page => {deactivatePage(page)})
    document.querySelectorAll(".sub-page").forEach(page => {deactivatePage(page)})
    activatePage(pageId)
    window.scrollTo(0,0)
}

function setActiveButton(target){
    document.querySelectorAll(".nav-button, .program-nav-button").forEach(button => {
        button.classList.toggle("active", button.dataset.target === target)
    })
}

navigateTo("home-page")