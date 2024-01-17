
(function() {
    'use strict';
    let playerNameKEK
    let charSheetOpened = false
 
    function init() {
        const ufplayer = document.querySelector("#ufplayer")
        const syscharElement = document.getElementById('syschar');
 
        if(ufplayer && syscharElement) {
            // Fetch the syschar element and click on it
 
            const playerName = ufplayer.querySelector(".left").textContent
            playerNameKEK = playerName
            const classImgSrc = ufplayer.querySelector("img").src
            const playerClassKEK = getClass(classImgSrc)
            if (playerNameKEK.endsWith('...')) {
                // Your code when playerNameKEK ends with three dots
                if(!charSheetOpened) {
                    syscharElement.click();
                    charSheetOpened = true
                }
                // console.log('Player name ends with three dots');
                getPlayerName()
            } else {
                // Your code when playerNameKEK does not end with three dots
                // console.log('Player name does not end with three dots');
            }
            function getPlayerName() {
                // Query for the element with class statcol
                const statcolElement = document.querySelector('.statcol');
 
                if (statcolElement) {
                    // Select the second span in statcol
                    const secondSpan = statcolElement.querySelector('span:nth-child(2)');
 
                    if (secondSpan) {
                        // Get the text content of the second span
                        playerNameKEK = secondSpan.textContent.trim();
                        console.log('Player Name:', playerNameKEK);
                        syscharElement.click();
                    } else {
                        setTimeout(getPlayerName, 1)
                    }
                }
            }
 
            function getClass(url) {
                const match = url.match(/\/classes\/(\d+)\.avif/);
                let _class = null;
                if (match) {
                    _class = match[1];
                    // console.log(_class); // Output: 3
                } else {
                    console.log(url)
                    console.log("Class not found in the URL");
                }
                return _class;
            }
 
            console.log(playerNameKEK, playerClassKEK)
            if(!playerNameKEK.endsWith("...")) {
                const friendListUrl = "https://hordes-friends-api.vercel.app"
 
                let friendList;
                let isFetchingFriends = true
                fetchFriendData()
                    .then(data => {
                    friendList = data.data;
                    const btn = document.querySelector(".refreshBtnFriendList");
                    console.log(friendList)
                    updateFriendList(friendList)
                    if (btn) {
                        btn.classList.remove("disabled", "grey");
                        btn.classList.add("black");
                        btn.textContent = "Refresh";
                    }
 
                    isFetchingFriends = false;
                })
                    .catch(err => {
                    console.log(err);
                    const btn = document.querySelector(".refreshBtnFriendList");
 
                    if (btn) {
                        btn.classList.remove("disabled", "grey");
                        btn.classList.add("black");
                        btn.textContent = "Refresh";
                    }
 
                    isFetchingFriends = false;
                });
                // Update status to 0 when the page is about to be unloaded
                window.addEventListener('beforeunload', function() {
                    // Replace 'player123' with the actual player name
                    updatePlayerStatus(playerNameKEK, 0)
                        .then(result => {
                        // Do something with the result if needed
                    })
                        .catch(error => {
                        // Handle errors
                    });
                });
                var scaleBtnWidth = 25
                var horizontalBtnWidth = 25
                var barHeight = 45
                var barWidth = 190
                var slotHeight = 35
                var slotWidth = 35
                var isMouseOverActive = true
                var scaleBtnHeight = 25
                var ufplayerLeft = -400
                var ufplayerTop = -400
                var uftargetLeft = 190
                var uftargetTop = -400
                var chatLeft = 40
                var chatTop = 600
                var bagTop = 160
                var bagLeft = 720
                var partyframeLeft = 0
                var partyframeTop = 10
                var skillbarLeft = -380
                var skillbarTop = -100
                var partyMemberHeight = 65
                var partyMemberWidth = 200
                var buffSize = 19
                var horizontalStackActive = false
                var isUIModeActive = false
                var skillsPerRow = 18
                var playerPerRow = 5
                var inputFieldSize = 40
                var inputFieldTop = 25
                var targetBuffSize = 25
                var showExpBar = true
                var delayAfterChange = 100
 
                let currentSenderName = ""
 
                const svelteObj = {
                    skillsMenu: "svelte-urqsjg",
                    statsMenu: "svelte-ggsnc",
                    chat: "svelte-16y0b84",
                    bag: "svelte-1axz35n",
                }
 
                const emoteDictionary = {
                    ':cake': '🎂',
                    ':smile': '😊',
                    // Add more emotes as needed
                };
                // Function to save the object to localStorage
                // Define the gradient styles
                const gradientNames = [
                    'kek-bgc0',
                    'kek-bgc1',
                    'kek-bgc2',
                    'kek-bgc3',
                    'kek-bgc5',
                    'kek-bgc4'
                ]
 
                // Function to save key binds in local storage
                function saveKeyBinds(keyBinds) {
                    localStorage.setItem('keyBindsKEK', JSON.stringify(keyBinds));
                }
 
                // Function to get key binds from local storage or use default keyBindsKEK
                function getKeyBinds() {
                    const storedKeyBinds = localStorage.getItem('keyBindsKEK');
                    return storedKeyBinds ? JSON.parse(storedKeyBinds) : keyBindsKEK;
                }
 
                // Initial key binds
                let keyBindsKEK = {
                    "Main Menu": "u",
                    "Emoji": "",
                    "Rune Tracker": "j",
                    "Blocked Players": "",
                    "Gloom Timer": "n"
                };
 
                keyBindsKEK = getKeyBinds()
 
                const gradientStyles = `
        .kek-bgc0 {
            background: linear-gradient(0deg, #5a3816 0%, #70563c 50%, #8B6D4D 100%);
        }
 
        .kek-bgc1 {
            background: linear-gradient(0deg, #11698d 0%, #0992cc 49%, #159cd4 100%);
        }
 
        .kek-bgc2 {
            background: linear-gradient(0deg, #76b935 0%, #76c134 50%, #79c232 100%);
        }
 
        .kek-bgc3 {
            background: linear-gradient(0deg, #20367f 0%, #2644a7 50%, #3859c7 100%);
        }
 
        .kek-bgc5 {
            background: linear-gradient(0deg, #9f0707 0%, #c62527 49%, #F42929 100%);
        }
 
        .kek-bgc4{
            background: linear-gradient(0deg, #2ba71e 0%, #0fce00 49%, #20b611 100%);
        }
        .partyframes .grid:not(button):not(input) {
        padding-bottom: 20px;
        }
    `;
                const partyColorsKEK = {
                    "kek-bgc0": {
                        top: ["#5a3816", 0],
                        middle: ["#70563c", 50],
                        bottom: ["#8B6D4D", 100]
                    },
                    "kek-bgc1": {
                        top: ["#11698d", 0],
                        middle: ["#0992cc", 49],
                        bottom: ["#159cd4", 100]
                    },
                    "kek-bgc2": {
                        top: ["#76b935", 0],
                        middle: ["#76c134", 50],
                        bottom: ["#79c232", 100]
                    },
                    "kek-bgc3": {
                        top: ["#20367f", 0],
                        middle: ["#2644a7", 50],
                        bottom: ["#3859c7", 100]
                    },
                    "kek-bgc4": {
                        top: ["#2ba71e", 0],
                        middle: ["#0fce00", 49],
                        bottom: ["#20b611", 100]
                    },
                    "kek-bgc5": {
                        top: ["#9f0707", 0],
                        middle: ["#c62527", 49],
                        bottom: ["#F42929", 100]
                    }
                };
                // Inject the styles into the page
                  var styleElement = document.createElement('style');
                  styleElement.type = 'text/css';
                  styleElement.appendChild(document.createTextNode(gradientStyles));
                  document.head.appendChild(styleElement);
function saveProps(props) {
                    try {
                        // Retrieve existing saved props
                        const savedKekPropsString = localStorage.getItem('savedKekProps');
                        const savedKekProps = JSON.parse(savedKekPropsString) || {};
 
                        // If savedProps is not available, try to retrieve it from localStorage
                        const savedPropsString = localStorage.getItem('savedProps');
                        const defaultProps = JSON.parse(savedPropsString) || {};
 
                        // Update or add props for the specific player, defaulting to savedProps if props is not provided
                        savedKekProps[playerName.toLowerCase()] = props || defaultProps;
 
                        // Save the updated object to localStorage
                        localStorage.setItem('savedKekProps', JSON.stringify(savedKekProps));
                        // console.log(savedKekProps)
 
                        // console.log(`Props for ${playerName} saved to localStorage successfully.`);
                    } catch (error) {
                        console.error('Error saving props to localStorage:', error);
                    }
                }
 
                function getProps() {
                    try {
                        // Retrieve saved props for the specific player from the new structure
                        const savedKekPropsString = localStorage.getItem('savedKekProps');
                        const savedKekProps = JSON.parse(savedKekPropsString) || {};
                        // console.log(savedKekProps)
                        // Check if there are saved props for the specified player in the new structure
                        const propsFromNewStructure = savedKekProps[playerName.toLowerCase()];
 
                        if (propsFromNewStructure) {
                            // If found, return the props from the new structure
                            return propsFromNewStructure;
                        } else {
                            // If not found in the new structure, check for savedProps from the old structure
                            const savedPropsString = localStorage.getItem('savedProps');
                            const propsFromOldStructure = JSON.parse(savedPropsString) || {};
 
                            // Return the props from the old structure if available
                            return propsFromOldStructure;
                        }
                    } catch (error) {
                        console.error('Error retrieving props from localStorage:', error);
                        return null;
                    }
                }
 
                function clearSavedProps() {
                    for(let key in props) {
                        if(key == "emoji") {
                            continue
                        } else {
                            delete props[key]
                        }
                    }
                    saveProps(props)
                }
 
                var props = getProps()
                if(JSON.stringify(props) == "{}") {
                    props = {"emoji":{":cake":":birthday:",":smile":":blush:",":fire":":fire:"},"#chat":{"left":8,"top":486,"blackChat":"0","fontSize":"15","height":"200"},"UIMode":false,".partyframes":{"left":3,"top":51,"playerPerRow":1,"buffSize":15,"buffTextSize":15,"width":148,"height":36},"#skillbar":{"left":-364,"top":-81},"skillsPerRow":18,"#ufplayer":{"left":-258,"top":-150,"buffSize":25,"buffTextSize":17},"#uftarget":{"left":4,"top":-150},".grid.left.svelte-g292qg":{"width":148,"height":36},".partyframes .bar":{"width":148,"height":36},"horizontalStackActive":false,".bagMenu":{"left":1050,"top":179},".guildMenu":{"left":717,"top":406},".statsMenu":{"left":187,"top":35},".skillsMenu":{"left":369,"top":45},".prestigeMenu":{"left":221,"top":-9},".kek-ui-menu":{"left":630,"top":146},"Show EXP":false,".emojiMenuKEK":{"left":92,"top":48},"Disable Class Colors":false,"blockedPlayers":[],"undefined":{"left":1311,"top":353},".keybinds":{"left":313,"top":180},"Mouse Over":false,"UILock":true,".runeTrackerKEK":{"left":199,"top":51},".gloomTimer":{"left":155,"top":107},".":{"width":139,"height":67},"#ufplayer .bar":{"width":195,"height":40},"#uftarget .bar":{"width":195,"height":40},".progressBar.bghealth.svelte-i7i7g5.kek-bgc3":{"width":195,"height":40},".progressBar.bghealth.hpdelta.svelte-g292qg":{"width":195,"height":40}}
                    console.log("Defaulting UI")
                    saveProps(props)
                }
                if(props["Show EXP"] !== null) {
                    showExpBar = props["Show EXP"]
                }
                if(props["horizontalStackActive"] !== null) {
                    horizontalStackActive = props["horizontalStackActive"]
                }
                if(props["UIMode"] !== null) {
                    isUIModeActive = props["UIMode"]
                }
                if(props["skillsPerRow"] !== null) {
                    skillsPerRow = props["skillsPerRow"]
                }
                if(props["playerPerRow"] !== null) {
                    playerPerRow = props["playerPerRow"]
                }
                // console.log(props)
                // Function to change position wrt middle of screen
                function changeElementPosition(element, left, top) {
                    const screenWidth = window.innerWidth;
                    const screenHeight = window.innerHeight;
 
                    // Calculate the position to center the element
                    const leftPosition = (screenWidth - element.offsetWidth) / 2 + left
                    const topPosition = (screenHeight - element.offsetHeight) / 2 + top
 
                    // Set the element's position
                    element.style.left = leftPosition + 'px';
                    element.style.top = topPosition + 'px';
                }
 
                function colorizePartyframes(partyframes) {
                    if(partyframes && !props["Disable Class Colors"]) {
                        const grids = partyframes.querySelectorAll(".grid:not(button):not(input)")
                        for(let grid of grids) {
                            colorizeGrid(grid)
                        }
                    }
                }
 
                function colorizeGrid(grid) {
                    if(grid && !props["Disable Class Colors"]) {
                        const iconContainer = grid.querySelector(".iconcontainer")
                        if(iconContainer) {
                            const img = iconContainer.querySelector("img")
                            if(img) {
                                const classIdx = getClass(img.src)
                                // console.log(classIdx, grid.querySelector(".left").textContent, img.src)
                                const hpBar = grid.querySelector(".progressBar")
                                if(hpBar) {
                                    gradientNames.forEach(className => {
                                        hpBar.classList.remove(className);
                                    });
                                    hpBar.classList.add(`kek-bgc${classIdx}`)
                                    iconContainer.style.display = "none"
                                }
                            }
                        }
                    }
                }
 
                function handlePartyframesMutations() {
                    const partyframesContainer = document.querySelector(".partyframes")
                    if(partyframesContainer && !partyframesContainer.classList.contains("mutationObserving")) {
                        function handleMutation(mutationsList, observer) {
                            for (const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    // A child has been added or removed, perform actions here
                                    mutation.addedNodes.forEach(node => {
                                        if(node instanceof HTMLElement) {
                                            if(node.classList.contains("grid")) {
                                                const partyframes = document.querySelector(".partyframes")
                                                if(partyframes) {
                                                    colorizeGrid(node)
                                                    let height = partyMemberHeight
                                                    let width = partyMemberWidth
                                                    if(props[".partyframes"] && props[".partyframes"].height) {
                                                        height = props[".partyframes"].height
                                                        width = props[".partyframes"].width
                                                    }
                                                    node.style.height = height + "px"
                                                    node.style.width = width + "px"
                                                    const bar = node.querySelector(".bar")
                                                    if(bar) {
                                                        bar.style.width = width + "px"
                                                        bar.style.height = height + "px"
                                                    }
                                                    if(props["playerPerRow"]) {
                                                        playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                                                    }
                                                    if(partyframes.classList.contains("gridified")) {
                                                        gridify(partyframes, playerPerRow)
                                                        repositionBuffarray(partyframes, "row")
                                                    } else {
                                                        gridify(partyframes, playerPerRow)
                                                        repositionBuffarray(partyframes, "column")
                                                    }
                                                }
                                                const rightSpan = node.querySelector("span.right")
                                                // Check if right span is found
                                                if (rightSpan) {
                                                    // console.log("Observing", rightSpan.closest(".left").textContent)
                                                    // Create a MutationObserver to watch for changes in the right span's character data
                                                    let prevText = rightSpan.textContent
                                                    const rightSpanObserver = new MutationObserver(() => {
                                                        if(prevText.trim().toLowerCase() == "offline" || prevText.trim().toLowerCase() == "dead") {
                                                            console.log("Character data of right span changed:", rightSpan.textContent);
                                                            const grid = rightSpan.closest(".grid")
                                                            colorizeGrid(grid)
                                                        }
                                                        prevText = rightSpan.textContent
                                                        // Perform your actions when character data changes
                                                    });
 
                                                    rightSpanObserver.observe(rightSpan, {characterData: true, attributes: false, childList: false, subtree: true});
                                                    rightSpan.classList.add("mutationObserving")
                                                    //                                         // Cleanup observer after handling the mutation
                                                    //                                         setTimeout(() => rightSpanObserver.disconnect(), 100);
                                                }
                                            } if(node.classList.contains("progressBar")) {
 
                                            }
                                        }
                                    });
                                    mutation.removedNodes.forEach(node => {
                                        // Handle removed nodes if needed
                                        if(props[".partyframes"]) {
                                            playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                                        }
                                        const partyframes = document.querySelector(".partyframes")
                                        if(partyframes.classList.contains("gridified")) {
                                            gridify(partyframes, playerPerRow)
                                            repositionBuffarray(partyframes, "row")
                                        } else {
                                            gridify(partyframes, playerPerRow)
                                        }
                                    });
                                }
                            }
                        }
                        // Create a MutationObserver to watch for changes in the DOM
                        const partyFrameObserver = new MutationObserver(handleMutation);
 
                        partyFrameObserver.observe(partyframesContainer, { childList: true });
                        partyframesContainer.classList.add("mutationObserving")
                    } else {
                        setTimeout(handlePartyframesMutations, 100)
                    }
                }
 
 
                function getPrestige(prestige, bracket) {
                    const prestigeBracket = [
                        0, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000,
                        13000, 14000
                    ]
                    prestige = 0.8 * prestige + prestigeBracket[bracket]
 
                    return prestige
 
                }
 
 
                function handleSkills() {
                    const skillsMenu = document.querySelector(`.l-upperLeftModal.${svelteObj.skillsMenu}`)
                    if(skillsMenu) {
                        addPresetsUI(skillsMenu)
                        if(props[".skillsMenu"] && props[".skillsMenu"].left) {
                            skillsMenu.style.left = props[".skillsMenu"].left + "px"
                            skillsMenu.style.top = props[".skillsMenu"].top + "px"
                        }
                        skillsMenu.classList.add("skillsMenu")
                        makeElementDraggable2(skillsMenu, ".skillsMenu");
                    }
                }
 
                function handleStats() {
                    const statsMenu = document.querySelector(`.l-upperLeftModal.${svelteObj.statsMenu}`)
                    if(statsMenu) {
                        if(props[".statsMenu"] && props[".statsMenu"].left) {
                            statsMenu.style.left = props[".statsMenu"].left + "px"
                            statsMenu.style.top = props[".statsMenu"].top + "px"
                        }
                        statsMenu.classList.add("statsMenu")
                        makeElementDraggable2(statsMenu, ".statsMenu");
                    }
                }
 
                function handleDOMMutations() {
                    // console.log(mainContainer)
                    function handleMainContainerMutations() {
                        const mainContainer = document.querySelector(".layout .container")
                        if(mainContainer.classList.contains("mutationObserving")) return;
 
                        const observerMain = new MutationObserver(function (mutationsList, observerDOM) {
                            for (const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    // A child node has been added
                                    for (const node of mutation.addedNodes) {
 
                                        // console.log("it is skills")
                                        if (node.classList.contains('l-upperLeftModal') && node.classList.contains('svelte-urqsjg')) {
                                            // console.log(node)
                                            addPresetsUI(node);
                                        }
 
                                        // it is stats
                                        if(node.classList.contains("l-upperLeftModal") && node.classList.contains("svelte-ggsnc")) {
                                            changeElementPosition(node, -350, -50)
                                            if(props[".statsMenu"] && props[".statsMenu"].left) {
                                                node.style.left = props[".statsMenu"].left + "px"
                                                node.style.top = props[".statsMenu"].top + "px"
                                            }
                                            node.classList.add("statsMenu")
                                            makeElementDraggable2(node, ".statsMenu");
                                        }
 
                                        // it is skills
                                        if(node.classList.contains("l-upperLeftModal") && node.classList.contains("svelte-urqsjg")) {
                                            changeElementPosition(node, -350, -50)
 
                                            if(props[".skillsMenu"] && props[".skillsMenu"].left) {
                                                node.style.left = props[".skillsMenu"].left + "px"
                                                node.style.top = props[".skillsMenu"].top + "px"
                                            }
                                            node.classList.add("skillsMenu")
                                            makeElementDraggable2(node, ".skillsMenu");
 
                                        }
 
                                        // it is guild
                                        if(node.classList.contains("absCentered") && node.classList.contains("svelte-1bfqv1s")) {
                                            changeElementPosition(node, 0, 0)
                                            if(props[".guildMenu"] && props[".guildMenu"].left) {
                                                node.style.left = props[".guildMenu"].left + "px"
                                                node.style.top = props[".guildMenu"].top + "px"
                                            }
                                            node.classList.add("guildMenu")
                                            makeElementDraggable2(node, ".guildMenu");
                                        }
 
                                        // it is bag
                                        if(node.classList.contains("l-corner-lr") && node.classList.contains("svelte-1axz35n")) {
                                            node.classList.add("bagMenu")
                                            changeElementPosition(node, 0, 0)
                                            if(props[".bagMenu"] && props[".bagMenu"].left) {
                                                node.style.left = props[".bagMenu"].left + "px"
                                                node.style.top = props[".bagMenu"].top + "px"
                                            }
                                            node.classList.remove("l-corner-lr")
                                            makeElementDraggable2(node, ".bagMenu");
                                        }
 
                                        //It is prestige menu
                                        if(node.classList.contains("l-upperLeftModal") && node.classList.contains("svelte-voya4q")) {
                                            changeElementPosition(node, -350, -50)
                                            if(props[".prestigeMenu"] && props[".prestigeMenu"].left) {
                                                node.style.left = props[".prestigeMenu"].left + "px"
                                                node.style.top = props[".prestigeMenu"].top + "px"
                                            }
                                            node.classList.add("prestigeMenu")
                                            makeElementDraggable2(node, ".prestigeMenu");
                                            const prestigeBtn = node.querySelector(".tab")
                                            prestigeBtn.click()
                                            setTimeout(function () {
                                                const allStatDivs = node.querySelectorAll(".stats.marg-top")
                                                const prestigeDiv = allStatDivs[0]
                                                if(prestigeDiv) {
                                                    let currentPrestige = prestigeDiv.querySelector(".statnumber").textContent.split(" ")[1]
                                                    currentPrestige = Math.round(parseInt(currentPrestige.split(",").join("")))
                                                    const speculatedSpan = document.createElement("span")
                                                    speculatedSpan.classList.add("textcyan")
                                                    speculatedSpan.textContent = "Speculated Prestige"
 
                                                    const valueSpan = document.createElement("span")
                                                    valueSpan.className = "textprestige statnumber"
                                                    const prestigeIcon = document.createElement("img")
                                                    prestigeIcon.className = "svgicon"
                                                    prestigeIcon.src = "/data/ui/currency/prestige.svg?v=8498194"
 
                                                    prestigeDiv.insertBefore(valueSpan, prestigeDiv.firstChild)
                                                    prestigeDiv.insertBefore(speculatedSpan, prestigeDiv.firstChild)
                                                    // console.log(prestigeDiv)
 
                                                    const thisWeekDiv = allStatDivs[2]
                                                    const thisWeekStats = thisWeekDiv.querySelectorAll(".statnumber")
                                                    const bracket = parseInt(thisWeekStats[thisWeekStats.length - 1].textContent.split(" ")[0])
                                                    const speculatedPrestige = Math.round(getPrestige(currentPrestige, bracket)).toLocaleString()
 
                                                    valueSpan.innerHTML = prestigeIcon.outerHTML + speculatedPrestige
                                                    // console.log(prestigeIcon, valueSpan)
 
                                                    // console.log(currentPrestige, bracket)
 
                                                } else {
 
                                                }
                                            }, 20)
                                        }
                                    }
                                }
                            }
                        })
 
                        const observerConfig = {childList: true};
                        // Start observing the target node for mutations
                        observerMain.observe(mainContainer, observerConfig);
                        mainContainer.classList.add("mutationObsrving")
                    }
 
                    handleMainContainerMutations()
 
                    function handleMutations(mutationsList, observer) {
                        for (const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                // A child has been added, apply changes to new elements
                                mutation.addedNodes.forEach(node => {
                                    if (node instanceof HTMLElement) {
                                        // Check if the added element has the class 'panel-black'
                                        if(node.className === "l-ui") {
                                            setTimeout(runAll, delayAfterChange)
                                            handleMainContainerMutations()
                                        }
                                    }
                                });
                            }
                        }
                    }
 
                    // Create a MutationObserver to watch for changes in the DOM
                    const observer = new MutationObserver(handleMutations);
                    const body = document.querySelector("body")
                    // Start observing changes in the entire document
                    observer.observe(body, { childList: true });
                }
 
                function handleBagMenu() {
                    const bagMenuParent = document.querySelector(".l-corner-lr.svelte-1axz35n")
                    if(bagMenuParent) {
                        // it is bag
                        bagMenuParent.classList.add("bagMenu")
                        changeElementPosition(bagMenuParent, 0, 0)
                        if(props[".bagMenu"] && props[".bagMenu"].left) {
                            bagMenuParent.style.left = props[".bagMenu"].left + "px"
                            bagMenuParent.style.top = props[".bagMenu"].top + "px"
                        }
                        makeElementDraggable2(bagMenuParent, ".bagMenu");
                        bagMenuParent.classList.remove("l-corner-lr")
                    }
                }
 
                function gridify(partyframes, childrenPerRow, gridSpace) {
                    if(!gridSpace) {
                        gridSpace = 15
                    }
                    if(props[".partyframes"]) {
                        gridSpace = props[".partyframes"]["gridSpace"] || gridSpace
                    }
                    let childElements = null
                    let height = "0px"
                    let width = "0px"
                    if(partyframes) {
                        childElements = Array.from(partyframes.children);
                        height = parseInt(partyframes.style.height.split("px")[0]) || height
                        width = parseInt(partyframes.style.width.split("px")[0]) || width
                    }
                    let row = 0;
                    let col = 0;
                    if(childElements) {
                        childElements.forEach((child, index) => {
                            // Ignore button elements
                            if (child.tagName.toLowerCase() !== "button" && child.tagName.toLowerCase() !== "input" && !child.classList.contains("inputContainerKEK") && child.tagName.toLowerCase() !== "style") {
                                // Calculate position based on row and col
                                child.style.position = "absolute"
                                const top = row * (height + gridSpace);
                                const left = col * (width + gridSpace);
 
                                // Set the position
                                child.style.top = top + "px";
                                child.style.left = left + "px";
 
                                // Update row and col
                                col++;
                                if (col >= childrenPerRow) {
                                    col = 0;
                                    row++;
                                }
                            }
                        });
                    }
                }
 
                function buffArrayResizing(buffArrayElement) {
                    if(buffArrayElement && buffArrayElement instanceof HTMLElement) {
                        let iconSize
                        let isUfplayer = false
                        if(props[".partyframes"]) {
                            iconSize = props[".partyframes"]["buffSize"] || buffSize
                        }
                        if(buffArrayElement.parentNode.parentNode.id == "ufplayer" || buffArrayElement.parentNode.parentNode.id == "uftarget") {
                            if(props["#ufplayer"]) {
                                iconSize = props["#ufplayer"]["buffSize"] || iconSize
                            }
                            isUfplayer = true
                        } else {
                            buffArrayElement.style.pointerEvents = "none"
                        }
                        buffArrayElement.style.margin = "0px"
 
                        const icons = buffArrayElement.querySelectorAll(".icon")
                        if(icons) {
                            for(let icon of icons) {
                                icon.style.maxWidth = iconSize + "px"
                            }
                        }
                        let style = buffArrayElement.querySelector('style.buffTextSize');
                        // If the style tag doesn't exist, create and append it
                        if (!style) {
                            style = document.createElement('style');
                            style.classList.add('buffTextSize');
                            buffArrayElement.insertBefore(style, buffArrayElement.firstChild);
                        }
 
                        // Change the contents of the style tag
                        let fontSize = 15
                        if(props[".partyframes"]) {
                            fontSize = props[".partyframes"]["buffTextSize"] || fontSize
                        }
                        if(!isUfplayer) {
                            style.textContent = `.partyframes .stacks.svelte-1nn7wcb {
                                                    font-size: ${fontSize}px;
                                                    }
                                                    `;
                        } else {
                            if(props["#ufplayer"]) {
                                fontSize = props["#ufplayer"]["buffTextSize"] || fontSize
                            }
                            style.textContent = `.stacks.svelte-1nn7wcb {
                                                    font-size: ${fontSize}px;
                                                    }`;
                        }
                        // Function to handle mutations in the .buffarray.default element
                        if(!buffArrayElement.classList.contains("observingMutations")) {
                            function handleBuffArrayChanges(mutationsList, observer) {
                                for (const mutation of mutationsList) {
                                    if (mutation.type === 'childList') {
                                        const addedNodes = mutation.addedNodes
                                        addedNodes.forEach(node => {
                                            if(node instanceof HTMLElement) {
                                                // console.log(node)
 
                                                // A child has been added or removed, or the content has changed
                                                // console.log('Buff array content changed');
                                                const icon = node.querySelector(".icon")
                                                if(icon) {
                                                    icon.style.maxWidth = iconSize + "px"
                                                    const stacks = icon.querySelector(".stacks")
                                                    }
                                                
                                            }
                                        })
 
                                    }
                                }
                            }
 
                            // Create a MutationObserver to watch for changes in the .buffarray.default element
                            const buffArrayObserver = new MutationObserver(handleBuffArrayChanges);
                            buffArrayObserver.observe(buffArrayElement, { childList: true, subtree: false });
                            buffArrayElement.classList.add("observingMutations")
                        }
                    }
 
                }
 
                document.addEventListener('mousemove', function(event) {
                    const mouseX = event.clientX;
                    const mouseY = event.clientY;
 
                    //console.log('Mouse X:', mouseX, 'Mouse Y:', mouseY);
                });
 
                function hasChildWithClass(parentElement, className) {
                    // Use querySelector to check if any child has the specified class
                    return parentElement.querySelector('.' + className) !== null;
                }
                // Function to make an element scalable from a central point
                function makeElementScalable(element, scaleBtn, name, initialWidth, initialHeight,
                                              excludeSelectors =
                                              [".ignoreScale" , '.scale-btn-party', ".horizontal-btn", ".scale-btn-player", ".overlay", ".icon", "img", ".slottext", ".pt-btn-container", ".buffarray", "button", ".kek-ui-input"]
                                             ) {
                    let originalWidth, originalHeight;
                    if(initialWidth) {
                        element.style.width = initialWidth + "px"
                        element.style.height = initialHeight + "px"
                    }
                    let initialX, initialY;
                    // Function to handle mouse down event on the scale button
                    function handleScaleBtnMouseDown(event) {
                        element.classList.add("is-scaling")
                        originalWidth = element.offsetWidth;
                        originalHeight = element.offsetHeight;
                        if(initialWidth) {
                            originalWidth = initialWidth
                            originalHeight = initialHeight
                        }
                        initialX = event.clientX;
                        initialY = event.clientY;
                        if(!props[name]) {
                            props[name] = {}
                        }
                        // Add event listeners for mouse move and mouse up events
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
 
                        // Prevent default to avoid text selection during dragging
                        event.preventDefault();
                    }
 
                    // Function to handle mouse move event
                    function handleMouseMove(event) {
                        if (element.classList.contains("is-scaling")) {
                            const deltaX = event.clientX - initialX;
                            const deltaY = event.clientY - initialY;
 
                            // Calculate the scaling factors for width and height
                            const widthScaleFactor = (originalWidth + deltaX) / originalWidth;
                            const heightScaleFactor = (originalHeight + deltaY) / originalHeight;
 
                            // Apply the scaling factors to the element
                            const newWidth = originalWidth * widthScaleFactor
                            const newHeight = originalHeight * heightScaleFactor
                            element.style.width = newWidth + 'px';
                            element.style.height = newHeight + 'px';
                            if(!props[name]) {
                                props[name] = {}
                            }
                            props[name].width = newWidth
                            props[name].height = newHeight
                            // Iterate over child elements and exclude those with specified selectors
                            for (const child of element.children) {
                                const shouldExclude = excludeSelectors.some(selector => {
                                    if (selector.startsWith('.')) {
                                        // Check for class
                                        return child.classList.contains(selector.slice(1));
                                    } else {
                                        // Check for tag
                                        return child.tagName.toLowerCase() === selector.toLowerCase();
                                    }
                                });
                                if(!shouldExclude) {
                                    // Apply the scaling factors to the child element
                                    let classListArray = Array.from(child.classList)
                                    let classListString = '.' + classListArray.join('.').replace(/,/g, '.');
                                    child.style.width = newWidth + 'px';
                                    child.style.height = newHeight + 'px';
 
                                    if(!props[classListString]) {
                                        props[classListString] = {}
                                    }
                                    props[classListString].width = newWidth
                                    props[classListString].height = newHeight
                                    let bar = child.querySelector(".bar")
                                    if(bar) {
                                        bar.style.width = newWidth + 'px';
                                        bar.style.height = newHeight + 'px';
 
                                        if(!props[name + " .bar"]) {
                                            props[name + " .bar"] = {}
                                        }
                                        props[name + " .bar"].width = newWidth
                                        props[name + " .bar"].height = newHeight
                                    }
                                }
                            }
                        }
                    }
 
                    // Function to handle mouse up event
                    function handleMouseUp() {
                        // console.log(props)
                        saveProps(props)
                        if(element.classList.contains("partyframes")) {
                            toggleHorizontalStack()
                            toggleHorizontalStack()
                        }
                        element.classList.remove("is-scaling")
                        if(element.classList.contains("partyframes") && element.classList.contains("gridified")) {
                            if(props[".partyframes"]) {
                                playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                            }
                            gridify(element, playerPerRow)
                        }
                        // Remove event listeners for mouse move and mouse up events
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
 
                    // Add event listener for mouse down event on the scale button
                    if(scaleBtn) {
                        scaleBtn.addEventListener('mousedown', handleScaleBtnMouseDown);
                    }
                }
                // Function to reposition buffarray on grid elements
                function repositionBuffarray(partyFramesElement, state) {
                    let offset;
                    // Check if the partyframes element exists
                    if (partyFramesElement) {
                        // Select all grid elements within partyframes
                        const gridElements = partyFramesElement.querySelectorAll('.grid');
                        if(gridElements) {
                            // Iterate through each grid element
                            gridElements.forEach(gridElement => {
                                // Find corresponding buffarray element
                                const buffarrayElement = gridElement.querySelector('.buffarray');
                                if(buffarrayElement) {
                                    buffArrayResizing(buffarrayElement)
                                    // Reposition buffarray on top of grid element
                                    if (buffarrayElement && state === "row") {
                                        buffarrayElement.style.position = 'absolute';
                                        if(props[".partyframes"]) {
                                            buffSize = props[".partyframes"]["buffSize"] || buffSize
                                        }
                                        if(partyFramesElement.style.height) {
                                            offset = 1 * parseInt(partyFramesElement.style.height.split("px")[0]) - buffSize
                                        } else {
                                            offset = -1 * buffSize
                                        }
                                        // console.log(partyFramesElement.style.height, buffSize)
                                        buffarrayElement.style.top = offset + "px";
                                        buffarrayElement.style.left = '0';
                                    } else if(buffarrayElement && state === "column") {
                                        buffarrayElement.style.position = '';
                                        buffarrayElement.style.top = '';
                                        buffarrayElement.style.left = '';
                                    }
                                }
                            });
                        }
                    }
                }
 
                // Function to horizontally stack elements
                function horizontalStack() {
                    // console.log(horizontalStackActive)
                    // Select the partyframes element
                    const partyFramesElement = document.querySelector('.partyframes');
 
                    // Check if the partyframes element exists
                    if (partyFramesElement && horizontalStackActive) {
                        // Set the display property to flex to horizontally stack the child elements
                        partyFramesElement.style.display = 'flex';
                        partyFramesElement.style.flexDirection = 'row'; // Optional: Set the direction to row
                        repositionBuffarray(partyFramesElement, 'row')
                        partyFramesElement.classList.add("gridified")
                        if(props[".partyframes"]) {
                            playerPerRow = props[".partyframes"]["playerPerRow"]
                        }
                        gridify(partyFramesElement, playerPerRow || 5)
                    } else {
                        partyFramesElement.style.display = 'flex';
                        partyFramesElement.style.flexDirection = 'columns';
                        partyFramesElement.classList.remove("gridified")
                        if(props[".partyframes"]) {
                            playerPerRow = props[".partyframes"]["playerPerRow"]
                        }
                        gridify(partyFramesElement, playerPerRow || 5)
                        repositionBuffarray(partyFramesElement, 'column')
                    }
                }
 
                function toggleHorizontalStack() {
                    horizontalStackActive = !horizontalStackActive
                    props["horizontalStackActive"] = horizontalStackActive
                    saveProps(props)
                    horizontalStack()
                }
 
                function handlePartyframesHelper(partyframes) {
                    let initialWidth, initialHeight;
 
                    if(props[".partyframes"] && props[".partyframes"].width) {
                        initialWidth = props[".partyframes"].width || barWidth
                        initialHeight = props[".partyframes"].height || barHeight
                    }
                    if(initialWidth) {
                        partyframes.style.width = initialWidth + "px"
                        partyframes.style.height = initialHeight + "px"
                    }
                    if(props[".partyframes"] && props[".partyframes"].left) {
                        partyframeLeft = props[".partyframes"].left
                        partyframeTop = props[".partyframes"].top
                    }
                    partyframes.style.left = `${partyframeLeft}px`
                    partyframes.style.top = `${partyframeTop}px`
                    updatePartyStyle()
                    makeElementDraggable2(partyframes, ".partyframes")
                    // Create Horizontal Stack Button
                    const horizontalStackButton = document.createElement('button');
                    horizontalStackButton.textContent = 'Change Buff Position';
                    horizontalStackButton.addEventListener('click', toggleHorizontalStack);
                    horizontalStackButton.title = "Click to change buff orientation"
                    horizontalStackButton.style.zIndex = '1';
                    horizontalStackButton.classList.add("svelte-mohsod", "horizontal-btn", "kek-ui-btn", "btn", "black", "textsecondary")
                    const btnSize = 35
                    // horizontalStackButton.style.height = btnSize + "px"
                    // horizontalStackButton.style.width = btnSize + "px"
                    horizontalStackButton.style.marginRight = "10px"
 
                    // Function to check if the partyframes element is available
 
                    const scaleBtn = document.createElement('button');
                    scaleBtn.title = "Hold and Drag to change size"
                    scaleBtn.textContent = 'Change Size';
                    scaleBtn.classList.add('scale-btn-party', "btn", "black", "textsecondary", "kek-ui-btn");
                    scaleBtn.style.zIndex = "1"
                    // scaleBtn.style.height = btnSize + "px"
                    // scaleBtn.style.width = btnSize + "px"
                    scaleBtn.style.marginRight = "10px"
 
 
                    scaleBtn.classList.add("svelte-mohsod")
 
                    makeElementScalable(partyframes, scaleBtn, ".partyframes");
 
                    // Create the party color button element
                    const partyColorButton = document.createElement('button');
                    partyColorButton.textContent = 'Colors';
                    partyColorButton.style.marginRight = "10px"
                    partyColorButton.style.zIndex = '1';
                    partyColorButton.title = "Click to change party colors"
                    partyColorButton.addEventListener('click', function (e) {
                        if(e.target === partyColorButton) {
                            openPartyColorCustomization(e)
                        }
                    });
                    partyColorButton.classList.add("svelte-mohsod", "partyColorButton", "kek-ui-btn", "btn", "black", "textsecondary");
 
                    if(!props["UIMode"]) {
                        scaleBtn.style.display = "none"
                        horizontalStackButton.style.display = "none"
                        partyColorButton.style.display = "none"
                    }
                    // Add the party color button to your HTML
                    // Adjust class names and styling according to your UI
                    function createInput(placeholder, prop, defaultValue) {
                        const inputField = document.createElement('input');
                        inputField.placeholder = placeholder;
                        inputField.title = `${placeholder}`
                        inputField.style.width = "70px";
                        inputField.style.height = "40px";
                        inputField.type = 'number';
                        if(props[".partyframes"]) {
                            inputField.value = props[".partyframes"][prop] || defaultValue; // Initial value
                        } else {
                            inputField.value = defaultValue
                        }
                        inputField.classList.add('kek-ui-input');
 
                        // Set the left position based on the number of inputs already present
                        const existingInputs = partyframes.querySelectorAll('.kek-ui-input');
 
                        if (!props[".partyframes"]) {
                            props[".partyframes"] = {};
                        }
 
                        if (props[".partyframes"] && typeof props[".partyframes"][prop] === 'undefined') {
                            props[".partyframes"][prop] = defaultValue;
                        }
 
                        if (!props["UIMode"]) {
                            inputField.style.display = "none";
                        }
 
                        function handleInputField() {
                            let inputValue = parseInt(inputField.value);
                            if (inputValue > 50) {
                                inputField.value = 50;
                            }
 
                            if (inputValue < 1) {
                                inputField.value = 1;
                            }
 
                            inputValue = parseInt(inputField.value);
 
                            // Use prop as the key for the property in props[".partyframes"]
                            props[".partyframes"][prop] = inputValue;
                            saveProps(props);
                            if(inputField.placeholder == "Per Row?") {
                                if(props[".partyframes"]) {
                                    playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                                }
                                gridify(partyframes, playerPerRow)
                            }
                            if(prop == "gridSpace") {
                                console.log("working")
                                if(props[".partyframes"]) {
                                    playerPerRow = props[".partyframes"]["playerPerRow"] || 5
                                }
                                gridify(partyframes, playerPerRow)
                            }
 
                        }
 
                        // Add an event listener for the input event
                        inputField.addEventListener('input', handleInputField);
                        return inputField;
                    }
 
                    if(!partyframes.querySelector(".kek-ui-input")) {
                        props[".partyframes"] = props[".partyframes"] || {}
                        const playerPerRowInput = createInput("Per Row?", "playerPerRow", props[".partyframes"]["playerPerRow"] || 5)
                        const buffSizeInput = createInput("Buff Size", "buffSize", props[".partyframes"]["buffSize"] || 18)
                        const buffTextSizeInput = createInput("Buff Text Size", "buffTextSize", props[".partyframes"]["buffTextSize"] || 20)
                        const gridSpaceInput = createInput("Grid Space", "gridSpace", props[".partyframes"]["gridSpace"] || 15)
 
                        // Create a flex container for the inputs
                        const inputContainer = document.createElement('div');
                        inputContainer.style.display = 'flex';
                        inputContainer.style.left = "10px"
                        inputContainer.style.top = "-50px"
                        inputContainer.style.position = "absolute"
                        inputContainer.style.zIndex = 10
                        inputContainer.classList.add("ignoreScale")
                        inputContainer.classList.add("inputContainerKEK")
                        inputContainer.appendChild(partyColorButton)
                        inputContainer.appendChild(horizontalStackButton)
                        inputContainer.appendChild(scaleBtn)
                        inputContainer.appendChild(playerPerRowInput)
                        inputContainer.appendChild(buffSizeInput)
                        inputContainer.appendChild(buffTextSizeInput)
                        inputContainer.appendChild(gridSpaceInput)
 
                        partyframes.insertBefore(inputContainer, partyframes.firstChild);
                    }
                    horizontalStack()
                    refreshPartyframes()
 
                    // Function to get party colors from localStorage
                    function getPartyColors() {
                        const storedColors = localStorage.getItem('partyColorsKEK');
                        return storedColors ? JSON.parse(storedColors) : partyColorsKEK;
                    }
 
                    // Function to set party colors to localStorage
                    function setPartyColors(colors) {
                        localStorage.setItem('partyColorsKEK', JSON.stringify(colors));
                    }
 
                    function updatePartyStyle() {
                        const partyColors = getPartyColors();
 
                        // Create a style string based on partyColors
                        const styleString = Object.entries(partyColors).map(([key, values]) => {
                            const [topColor, topPercentage] = values.top;
                            const [middleColor, middlePercentage] = values.middle;
                            const [bottomColor, bottomPercentage] = values.bottom;
 
                            return `
                        .${key} {
                        background: linear-gradient(0deg, ${topColor} ${topPercentage}%, ${middleColor} ${middlePercentage}%, ${bottomColor} ${bottomPercentage}%);
                        }
                        `;
                        }).join('\n');
 
                        // Remove existing style tag with ID 'partyStyleKEK'
                        const existingStyleTag = document.getElementById('partyStyleKEK');
                        if (existingStyleTag) {
                            existingStyleTag.remove();
                        }
 
                        // Create a new style tag
                        const styleTag = document.createElement('style');
                        styleTag.id = 'partyStyleKEK';
                        styleTag.classList.add("ignoreScale")
                        styleTag.textContent = styleString;
                        // console.log(styleTag)
                        // Append the style tag to the partyframes
                        partyframes.appendChild(styleTag);
                    }
 
                    function getClassName(idx) {
                        return {
                            "0": "Warrior",
                            "1": "Mage",
                            "2": "Archer",
                            "3": "Shaman",
                            "4": "Wardens/Conjurer",
                            "5": "Enemy/Monster"
                        }[idx]
                    }
                    // Function to open party color customization
                    function openPartyColorCustomization(e) {
                        const existingUI = document.querySelector(".party-color-customizationKEK");
                        if (existingUI) {
                            existingUI.parentNode.remove()
                            return;
                        }
 
                        const partyColors = getPartyColors(); // Fetch partyColors from localStorage
 
                        // Create color customization UI
                        const mainContainer = document.createElement("div")
                        mainContainer.className = "widow panel-black border black"
                        const colorCustomizationUI = document.createElement("div");
                        colorCustomizationUI.className = "party-color-customizationKEK panel-black bar";
                        colorCustomizationUI.style.position = "absolute";
                        colorCustomizationUI.style.display = "grid";
                        colorCustomizationUI.style.gridTemplateColumns = "repeat(1, auto)";
                        colorCustomizationUI.style.top = (partyColorButton.offsetTop - 300) + "px";
                        colorCustomizationUI.style.left = partyColorButton.offsetLeft + partyColorButton.offsetWidth + 10 + "px";
 
                        for (const key in partyColors) {
                            const flexContainer = document.createElement("div")
                            flexContainer.style.display = "flex"
                            flexContainer.style.alignItems = "center"
                            const colorItem = document.createElement("div");
                            colorItem.className = "color-item-party btn black textsecondary";
                            const classIdx = key.split("bgc")[1]
                            colorItem.textContent = getClassName(classIdx);
 
                            // Create color picker for the top color
                            const topColorPicker = createColorPicker("Top Color", 'top', partyColors[key].top[0], (value) => {
                                handlePartyColorChange(key, 'top', value);
                            });
 
                            // Create color picker for the middle color
                            const middleColorPicker = createColorPicker("Middle Color", 'middle', partyColors[key].middle[0], (value) => {
                                handlePartyColorChange(key, 'middle', value);
                            });
 
                            // Create color picker for the bottom color
                            const bottomColorPicker = createColorPicker("Bottom Color", 'bottom', partyColors[key].bottom[0], (value) => {
                                handlePartyColorChange(key, 'bottom', value);
                            });
 
                            // Create percentage inputs for the top, middle, and bottom colors
                            const topPercentageInput = createPercentageInput(key, 'top', partyColors[key].top[1]);
                            const middlePercentageInput = createPercentageInput(key, 'middle', partyColors[key].middle[1]);
                            const bottomPercentageInput = createPercentageInput(key, 'bottom', partyColors[key].bottom[1]);
                            const dummyDiv = document.createElement("div")
                            const dummyContainer = document.createElement("div")
                            dummyContainer.className = "bar  svelte-i7i7g5"
                            dummyDiv.classList.add("progressBar", `kek-bgc${classIdx}`)
                            dummyDiv.style.height = "50px"
                            dummyDiv.style.width = "120px"
                            dummyContainer.style.marginLeft = "20px"
                            const dummyLeft = document.createElement("span")
                            dummyLeft.classList.add("left")
                            dummyLeft.textContent = "Dummy"
                            dummyLeft.style.marginLeft = "5px"
                            const dummyRight = document.createElement("span")
                            dummyRight.classList.add("right", "svelte-i7i7g5")
                            dummyRight.textContent = "0/0"
 
                            dummyDiv.appendChild(dummyLeft)
                            dummyDiv.appendChild(dummyRight)
 
                            colorItem.style.width = "150px";
                            colorItem.style.padding = "10px";
 
                            dummyContainer.appendChild(dummyDiv)
 
                            flexContainer.appendChild(colorItem);
                            flexContainer.appendChild(topColorPicker);
                            topColorPicker.style.margingLeft = "5px"
                            flexContainer.appendChild(topPercentageInput);
                            flexContainer.appendChild(middleColorPicker);
                            flexContainer.appendChild(middlePercentageInput);
                            flexContainer.appendChild(bottomColorPicker);
                            flexContainer.appendChild(bottomPercentageInput);
                            flexContainer.appendChild(dummyContainer);
                            flexContainer.style.padding = "5px"
                            colorCustomizationUI.appendChild(flexContainer)
                        }
                        const resetBtn = document.createElement("button")
                        resetBtn.classList.add("btn", "black", "textsecondary")
                        resetBtn.textContent = "Reset"
                        resetBtn.addEventListener("click", () => {
                            setPartyColors(partyColorsKEK)
                            openPartyColorCustomization()
                            updatePartyStyle()
                        })
                        colorCustomizationUI.appendChild(resetBtn)
                        mainContainer.appendChild(colorCustomizationUI)
                        colorCustomizationUI.style.zIndex = 20
                        // console.log(e.target)
                        e.target.parentNode.appendChild(mainContainer);
                    }
 
                    // Function to handle party color change
                    function handlePartyColorChange(key, section, value) {
                        const partyColors = getPartyColors();
                        partyColors[key][section][0] = value;
                        setPartyColors(partyColors);
                    }
 
                    function createColorPicker(title, type, initialValue, eventHandler) {
                        const colorPicker = document.createElement("input");
                        colorPicker.type = "color";
                        colorPicker.title = title;
                        colorPicker.style.height = "35px"
                        colorPicker.style.width = "35px"
                        colorPicker.value = initialValue;
                        colorPicker.style.flex = 1
                        colorPicker.addEventListener("input", (event) => {
                            event.stopPropagation();
                            eventHandler(event.target.value);
                            updatePartyStyle()
                        });
 
                        return colorPicker;
                    }
                    // Helper function to create a percentage input
                    function createPercentageInput(key, section, value) {
                        const percentageInput = document.createElement('input');
                        percentageInput.type = 'number';
                        percentageInput.placeholder = 'Percentage';
                        percentageInput.value = value;
                        percentageInput.title = "Percentage value";
                        percentageInput.style.width = "45px";
                        percentageInput.style.flex = 1
                        percentageInput.style.height = "35px";
                        percentageInput.addEventListener('input', (event) => {
                            event.stopPropagation();
                            let inputValue = parseInt(event.target.value);
 
                            // Ensure the input value is within the range of 0 to 100
                            if (inputValue < 0) {
                                inputValue = 0;
                            } else if (inputValue > 100) {
                                inputValue = 100;
                            }
 
                            // Update the input value
                            percentageInput.value = inputValue;
 
                            // Call the handler function
                            handlePartyPercentageChange(key, section, inputValue);
                        });
                        return percentageInput;
                    }
 
                    // Function to handle party percentage change
                    function handlePartyPercentageChange(key, section, value) {
                        const partyColors = getPartyColors();
                        partyColors[key][section][1] = parseInt(value);
                        setPartyColors(partyColors);
                    }
 
                }
 
                function refreshPartyframes() {
                    const partyframes = document.querySelector(".partyframes")
                    let height = partyMemberHeight
                    let width = partyMemberWidth
                    if(props[".partyframes"] && props[".partyframes"].height) {
                        height = props[".partyframes"].height
                        width = props[".partyframes"].width
                    }
                    if(partyframes) {
                        const grids = partyframes.querySelectorAll(".grid:not(button)")
                        if(grids.length !== 0) {
                            for(let grid of grids) {
                                if(grid.classList.contains("kek-ui-btn") || grid.classList.contains("kek-ui-input")) {
                                    // console.log("skipping", grid.classList)
                                    continue;
                                }
                                // console.log(grid, "from refresh")
                                grid.style.height = height + "px"
                                grid.style.width = width + "px"
                                const bar = grid.querySelector(".bar")
                                if(bar) {
                                    // console.log(bar, "from refresh")
                                    bar.style.height = height + "px"
                                    bar.style.width = width + "px"
                                    colorizePartyframes(partyframes)
                                    const rightSpan = bar.querySelector(".right")
                                    if (rightSpan && !rightSpan.classList.contains("mutationObserving")) {
                                        // console.log("Observing", rightSpan.closest(".left").textContent)
                                        // Create a MutationObserver to watch for changes in the right span's character data
                                        let prevText = rightSpan.textContent
                                        const rightSpanObserver = new MutationObserver(() => {
                                            if(prevText.trim().toLowerCase() == "offline" || prevText.trim().toLowerCase() == "dead") {
                                                console.log("Character data of right span changed:", rightSpan.textContent);
                                                const grid = rightSpan.closest(".grid")
                                                colorizeGrid(grid)
                                            }
                                            prevText = rightSpan.textContent
                                            // Perform your actions when character data changes
                                        });
 
                                        rightSpanObserver.observe(rightSpan, {characterData: true, attributes: false, childList: false, subtree: true});
                                        rightSpan.classList.add("mutationObserving")
                                        //                                         // Cleanup observer after handling the mutation
                                        //                                         setTimeout(() => rightSpanObserver.disconnect(), 100);
                                    }
                                } else {
                                    console.log("retrying")
                                    setTimeout(refreshPartyframes, 100)
                                }
                            }
                        } else {
                            setTimeout(refreshPartyframes, 100)
                        }
                    } else {
                        setTimeout(refreshPartyframes, 100)
                    }
                }
 
                function handlePartyframes() {
                    const partyframes = document.querySelector(".partyframes");
                    if(partyframes) {
                        handlePartyframesHelper(partyframes)
                    } else {
                        // console.error("Cant find partyframes retrying 100ms")
                        setTimeout(handlePartyframes, 100)
                    }
                }
 
                const chatColorsKEK = {
                    "textglobal": "#ffcb9d",
                    "textnotice": "#9de74d",
                    "textparty": "#2ed3f6",
                    "textfaction": "#f68e7a",
                    "textclan": "#de8b09",
                    "textsystem": "#4de751",
                    "textto": "#ef3eff",
                    "textfrom": "#ef3eff"
                }
 
                function handleChatPanel() {
                    const chat = document.querySelector("#chat");
 
                    if(chat) {
                        // Initialize props["#chat"] if it doesn't exist
                        // Event listener for right-click on articles
 
                        chat.addEventListener("contextmenu", function (event) {
                            const targetArticle = event.target.closest("article");
                            if (targetArticle) {
                                // Right-clicked on an article, handle copy logic here
                                event.preventDefault();
                                const menu = document.querySelector(".context")
                                // console.log(menu)
                                const copyChoice = document.createElement("div")
                                copyChoice.classList.add("choice")
                                copyChoice.textContent = "Copy"
                                copyChoice.addEventListener("click", () => {
                                    copyArticleContent(targetArticle);
                                    menu.remove()
                                })
                                menu.appendChild(copyChoice)
 
                                // console.log(menu)
                                const copyName = document.createElement("div")
                                copyName.classList.add("choice")
                                copyName.textContent = "Copy Name"
                                copyName.addEventListener("click", () => {
                                    copyArticleSender(targetArticle);
                                    menu.remove()
                                })
                                menu.appendChild(copyName)
                            }
                        });
 
                        function copyArticleSender(article) {
                            const senderElement = article.querySelector(".name");
                            const copySender = senderElement.textContent;
 
                            // Perform copy to clipboard logic (use a temporary textarea, document.execCommand, or Clipboard API)
                            // Example using Clipboard API:
                            if (copySender) {
                                navigator.clipboard.writeText(copySender)
                                    .then(() => console.log("Article sender copied to clipboard:", copySender))
                                    .catch((error) => console.error("Copy failed:", error));
                            }
                        }
 
                        // Function to copy content of an article
                        function copyArticleContent(article) {
                            const contentSpan = article.querySelector(".content")
                            const copyContent = contentSpan.nextElementSibling.textContent
                            // Perform copy to clipboard logic (use a temporary textarea, document.execCommand, or Clipboard API)
                            // Example using Clipboard API:
                            if(copyContent) {
                                navigator.clipboard.writeText(copyContent)
                                // .then(() => console.log("Article content copied to clipboard"), copyContent)
                                    .catch((error) => console.error("Copy failed:", error));
                            }
                        }
                        props["#chat"] = props["#chat"] || {};
 
                        if(props["#chat"] && props["#chat"].left) {
                            chatLeft = props["#chat"].left
                            chatTop = props["#chat"].top
                        }
                        chat.parentNode.style.left = `${chatLeft}px`
                        chat.parentNode.style.top = `${chatTop}px`
                        chat.style.zIndex = 10
                        makeElementDraggable2(chat.parentNode, "#chat")
 
                        // Create a MutationObserver to observe changes in the #chat element
                        const observer = new MutationObserver((mutationsList, observer) => {
                            // Handle mutations as needed
                            mutationsList.forEach(mutation => {
                                if(mutation.type == "childList") {
                                    const addedNodes = mutation.addedNodes
                                    addedNodes.forEach(node => {
                                        if(node instanceof HTMLElement) {
                                            // console.log(node.textContent)
                                            const senderContainer = node.querySelector(".sender")
                                            if(senderContainer && !node.classList.contains("kek-chat-processed")) {
                                                node.classList.add("kek-chat-processed")
                                                const sender = node.querySelector(".sender .name")
                                                if(sender && props.blockedPlayers) {
                                                    const senderName = sender.textContent.toLowerCase().trim()
                                                    // console.log(senderName, props.blockedPlayers)
                                                    if(props.blockedPlayers.includes(senderName)) {
                                                        // console.log(senderName + " is blocked")
                                                        // const article = node.closest("article")
                                                        // article.style.display = "none"
                                                        node.style.display = "none"
                                                    }
                                                }
                                            }
                                            const noticeSpan = node.querySelectorAll(".textnotice")[1]
                                            if(noticeSpan) {
                                                const textContent = noticeSpan.textContent.trim();
                                                // console.log('Original Text:', textContent);
 
                                                const matchResult = textContent.match(/^(.*?)\s+received\s+(.*?)\s*x(\d+)\s*\.?$/);
                                                const leavePartyMatch = textContent.match(/^(.*?)\s+has left your party\.$/);
 
                                                if (leavePartyMatch) {
                                                    const playerNameLeft = leavePartyMatch[1];
                                                    // console.log('Player has left the party:', playerNameLeft);
                                                    changePlayerState(playerNameLeft, 0)
                                                }
                                                if (matchResult) {
                                                    const name = matchResult[1];
                                                    const itemDescription = matchResult[2];
                                                    const numberOfItems = parseInt(matchResult[3]);
 
                                                    // console.log('Name:', name);
                                                    // console.log('Item Description:', itemDescription)
                                                    // console.log('Number of Items:', numberOfItems);
                                                    const itemName = itemDescription.split(" ")[1]
                                                    const tierInfo = itemDescription.split(" ")[0]
                                                    const tier = parseInt(tierInfo.split("T")[1])
                                                    // console.log('Item Name:', itemName);
                                                    // console.log('Item Tier:', tier);
                                                    if(itemName.trim().toLowerCase() == "rune") {
                                                        addRuneData(name, tier - 1, numberOfItems)
                                                    }
                                                } else {
                                                    // console.log('No match found for:', textContent);
                                                }
                                            }
                                            // Check if there is any element with class 'textto'
                                            const hasTextTo = node.querySelector('.textto') !== null;
 
                                            // Check if there is any element with class 'textfrom'
                                            const hasTextFrom = node.querySelector('.textfrom') !== null;
                                            if(hasTextTo || hasTextFrom) {
                                                // Extract information from the parsed HTML
                                                const type = node.querySelector('.channel').textContent.trim();
                                                const senderName = node.querySelector('.name').textContent.trim();
                                                const spans = node.querySelectorAll(`span.${svelteObj.chat}`)
                                                const content = spans[spans.length - 1].textContent.trim()
                                                console.log(type, senderName, content)
                                                addWhisperLog(type, senderName, content, playerNameKEK)
                                                if(currentSenderName == senderName) {
                                                    displayWhisperLogs(senderName)
                                                }
                                                updateSenderNameList()
                                            }
 
                                        }
                                    })
                                }
                            })
                        });
 
                        // Configuration of the observer
                        const config = {childList: true};
 
                        // Start observing the target node (#chat)
                        observer.observe(chat, config);
 
                        if(!chat.classList.contains("chatCustomizationKEK")) {
                            updateChatStyle();
                            chat.classList.add("chatCustomizationKEK")
                            // Create input elements for font-size, height, and width
                            const fontSizeInput = createInput("Font Size", props["#chat"].fontSize);
                            const heightInput = createInput("Height", props["#chat"].height);
                            const widthInput = createInput("Width", props["#chat"].width);
                            const blackChatCheckInput = createInput("Black Chat?", props["#chat"].blackChat);
                            // Add a button for chat color customization
                            const chatColorButton = document.createElement("button");
                            chatColorButton.className = "kek-ui-btn btn black textsecondary"
                            chatColorButton.textContent = "Colors";
                            chatColorButton.title = "Click to change chat colors"
                            chatColorButton.style.width = "300px"
                            chatColorButton.addEventListener("click", function(e) {
                                if(e.target === chatColorButton) {
                                    openChatColorCustomization(e)
                                }
                            });
 
                            // Create a flex container for input elements
                            const inputContainer = document.createElement("div");
                            inputContainer.style.display = "flex";
                            inputContainer.style.position = "absolute";
                            inputContainer.style.top = chat.offsetTop + "px";
                            inputContainer.style.left = chat.offsetLeft + chat.offsetWidth + 10 + "px"; // Adjust the offset as needed
 
                            // Append input elements to the flex container
                            inputContainer.appendChild(chatColorButton)
                            inputContainer.appendChild(fontSizeInput);
                            inputContainer.appendChild(heightInput);
                            inputContainer.appendChild(widthInput);
                            inputContainer.appendChild(blackChatCheckInput)
 
                            chat.parentNode.insertBefore(inputContainer, chat.parentNode.firstChild);
                            // chat.parentNode.appendChild(blackChatCheckbox)
                            positionOverChat(inputContainer)
                            // Event listeners for input elements
                            fontSizeInput.addEventListener("input", handleInputChange("fontSize"));
                            heightInput.addEventListener("input", handleInputChange("height"));
                            widthInput.addEventListener("input", handleInputChange("width"));
                            blackChatCheckInput.addEventListener("input", handleInputChange("blackChat"));
 
                            if(props["UIMode"] === false) {
                                fontSizeInput.style.display = "none"
                                heightInput.style.display = "none"
                                widthInput.style.display = "none"
                                blackChatCheckInput.style.display = "none"
                                chatColorButton.style.display = "none"
                            }
                        }
 
                        // Function to open chat color customization
                        function openChatColorCustomization(e) {
                            const existingCustomizationPanel = document.querySelector(".chat-color-customizationKEK")
 
                            if(existingCustomizationPanel) {
                                existingCustomizationPanel.remove()
                                return
                            }
                            const chatColors = getChatColors(); // Fetch chatColors from localStorage
 
                            // Create color customization UI
                            const colorCustomizationUI = document.createElement("div");
                            colorCustomizationUI.className = "chat-color-customizationKEK panel-black";
                            colorCustomizationUI.style.position = "absolute";
                            colorCustomizationUI.style.display = "grid"
                            colorCustomizationUI.style.gridTemplateColumns = "repeat(2, auto)"
                            colorCustomizationUI.style.top = (chat.offsetTop - 400) + "px";
                            colorCustomizationUI.style.left = chat.offsetLeft + "px";
 
                            const resetBtn = document.createElement("button")
                            const resetDiv = document.createElement("div")
                            resetBtn.className = "btn black textsecondary"
                            resetBtn.textContent = "Reset"
                            resetBtn.addEventListener("click", function() {
                                setChatColors(chatColorsKEK)
                                openChatColorCustomization()
                                updateChatStyle()
                            })
                            colorCustomizationUI.appendChild(resetBtn)
                            colorCustomizationUI.appendChild(resetDiv)
                            for (const key in chatColors) {
 
                                const colorItem = document.createElement("div");
                                colorItem.className = "color-item";
                                colorItem.textContent = key.split("text")[1].toUpperCase();
 
                                const colorPicker = document.createElement("input");
                                colorPicker.type = "color";
                                colorPicker.value = chatColors[key];
                                colorPicker.addEventListener("input", (event) => {
                                    event.stopPropagation()
                                    handleColorChange(key, event.target.value)
                                });
 
                                colorItem.style.width = "100px"
                                colorItem.style.padding = "10px"
                                colorPicker.style.width = "30px"
                                colorPicker.style.height = "30px"
                                colorCustomizationUI.appendChild(colorItem);
                                colorCustomizationUI.appendChild(colorPicker);
 
                            }
                            colorCustomizationUI.style.zIndex = 2
                            e.target.appendChild(colorCustomizationUI);
                        }
 
                        // Function to handle color changes and update localStorage
                        function handleColorChange(key, color) {
                            const chatColors = getChatColors();
                            chatColors[key] = color;
                            setChatColors(chatColors); // Store updated chatColors in localStorage
                            updateChatStyle(); // Update chat style with new colors
                        }
 
                        // Function to fetch chatColors from localStorage
                        function getChatColors() {
                            return JSON.parse(localStorage.getItem("chatColorsKEK")) || chatColorsKEK;
                        }
 
                        // Function to store chatColors in localStorage
                        function setChatColors(chatColors) {
                            localStorage.setItem("chatColorsKEK", JSON.stringify(chatColors));
                        }
 
                        // Function to create input elements
                        function createInput(placeholder, value, type = "number") {
                            const input = document.createElement("input");
                            input.type = type;
                            input.className = "kek-ui-input";
                            input.placeholder = placeholder;
                            input.title = `${placeholder}`
                            input.value = value || "";
                            return input;
                        }
 
                        // Function to handle input changes
                        function handleInputChange(prop) {
                            return function (event) {
                                // Initialize props["#chat"] if it doesn't exist
                                props["#chat"] = props["#chat"] || {};
 
                                const inputValue = event.target.value;
                                props["#chat"][prop] = inputValue;
                                // console.log(inputValue)
                                saveProps(props);
                                updateChatStyle(); // Update chat style after props change
                            };
                        }
 
                        // Function to update chat style based on props
                        function updateChatStyle() {
                            // Remove existing chat styles
                            const existingChatStyles = chat.querySelector(".chat-styles-kek");
                            if (existingChatStyles) {
                                existingChatStyles.remove();
                            }
 
                            // Create a new style element
                            const chatStyles = document.createElement("style");
                            chatStyles.className = "chat-styles-kek";
 
                            // Get chat colors from localStorage
                            const chatColors = getChatColors();
 
                            // Generate CSS rules based on chatColors
                            for (const className in chatColors) {
                                const color = chatColors[className];
                                // Append CSS rule for each class
                                chatStyles.appendChild(document.createTextNode(`.${className} { color: ${color}; }`));
                            }
 
                            // Append the style element to the chat element
                            chat.appendChild(chatStyles);
 
                            chat.style.fontSize = props["#chat"].fontSize + "px";
                            if(props["#chat"].blackChat == 0) {
                                chat.classList.remove("panel-black")
                            } else {
                                chat.classList.add("panel-black")
                            }
                            if (props["#chat"].height) {
                                chat.style.height = props["#chat"].height + "px";
                            } else {
                                chat.style.removeProperty("height");
                            }
                            if (props["#chat"].width) {
                                chat.style.width = props["#chat"].width + "px";
                            } else {
                                chat.style.removeProperty("width");
                            }
                        }
                        // Function to position input over chat
                        function positionOverChat(input) {
                            const chatParentRect = chat.parentNode.getBoundingClientRect();
                            const chatRect = chat.getBoundingClientRect();
                            const offsetTop = 40
                            input.style.position = "absolute";
                            input.style.left = (chatRect.left - chatParentRect.left) + "px";
                            input.style.top = (chatRect.top - chatParentRect.top - offsetTop) + "px";
                        }
                        chat.scrollTop = chat.scrollHeight + 10;
                    } else {
                        // console.error("Cant find chat retrying 100ms")
                        setTimeout(handleChatPanel, 100)
                    }
                }
 
                function handleChatInput() {
                    let chatInputSection = document.querySelector('#chatinput');
 
                    if (chatInputSection) {
                        const chatInput = chatInputSection.querySelector("input")
                        chatInput.addEventListener('input', chatInputListener);
                    } else {
                        // console.error("didnt find chat input retrying every 100 ms")
                        setTimeout(handleChatInput, 100)
                    }
 
                }
                function chatInputListener(event) {
                    const emojis = getEmojis()
                    const chatInput = event.target
                    // console.log(chatInput.value)
                    const inputValue = chatInput.value;
 
                    let replacedValue = inputValue;
 
                    for (const [emote, emoji] of Object.entries(emojis)) {
                        replacedValue = replacedValue.replace(new RegExp(emote, 'g'), emoji);
                    }
 
                    // Update the input value with replaced emotes
                    chatInput.value = replacedValue;
                }
                function handleTargetFrames() {
                    let ufplayer = document.querySelector("#ufplayer")
                    let uftarget = document.querySelector("#uftarget")
                    const targetframes = document.querySelector(".targetframes")
                    if (ufplayer && targetframes) {
                        const scaleBtnPlayer = document.createElement('button');
                        scaleBtnPlayer.textContent = 'Change Size';
                        scaleBtnPlayer.title = "Hold and Drag to change Size"
                        scaleBtnPlayer.classList.add('scale-btn-player');
                        scaleBtnPlayer.classList.add("svelte-mohsod", "kek-ui-btn", "btn", "black", "textsecondary")
                        if(!props["UIMode"]) {
                            scaleBtnPlayer.style.display = "none"
                        }
 
                        let playerBar = ufplayer.querySelector(".bar")
                        if(props["#ufplayer .bar"] && props["#ufplayer .bar"].height) {
                            barHeight = props["#ufplayer .bar"].height
                            barWidth = props["#ufplayer .bar"].width
                        }
                        playerBar.style.height = barHeight + "px"
                        playerBar.style.width = barWidth + "px"
                        if(props["#ufplayer"]) {
                            ufplayerLeft = props["#ufplayer"].left || ufplayerLeft
                            ufplayerTop = props["#ufplayer"].top || ufplayerTop
                            // console.log(ufplayerLeft, ufplayerTop, "from handleTargetFrames")
                        }
                        ufplayer.style.left = ufplayerLeft + "px"
                        ufplayer.style.top = ufplayerTop + "px"
                        makeElementDraggable2(ufplayer, "#ufplayer")
                        if(uftarget) {
                            if(props["#uftarget"] && props["#uftarget"].left) {
                                uftargetLeft = props["#uftarget"].left
                                uftargetTop = props["#uftarget"].top
                            }
                            uftarget.style.left = `${uftargetLeft}px`
                            uftarget.style.top = `${uftargetTop}px`
                            makeElementDraggable2(uftarget, "#uftarget")
                            let targetBar = uftarget.querySelector(".bar")
                            targetBar.style.height = barHeight + "px"
                            targetBar.style.width = barWidth + "px"
                            makeElementScalable(uftarget.querySelector(".bar"), scaleBtnPlayer, "#uftarget .bar")
                            buffArrayResizing(uftarget.querySelector(".buffarray"), targetBuffSize)
                            colorizeGrid(uftarget)
                            handleUftargetMutations(uftarget)
                        }
                        makeElementScalable(ufplayer.querySelector(".bar"), scaleBtnPlayer, "#ufplayer .bar")
 
                        buffArrayResizing(ufplayer.querySelector(".buffarray"), targetBuffSize)
                        colorizeGrid(ufplayer)
                        if(!ufplayer.querySelector(".kek-ui-input")) {
                            props["#ufplayer"] = props["#ufplayer"] || {}
 
 
                            const buffSizeInput = createInput("Buff Size", "buffSize", props["#ufplayer"]["buffSize"] || 18)
                            const buffTextSizeInput = createInput("Buff Text Size", "buffTextSize", props["#ufplayer"]["buffTextSize"] || 20)
 
                            // Create a flex container for the inputs
                            const inputContainer = document.createElement('div');
                            inputContainer.style.display = 'flex';
                            inputContainer.style.left = "10px"
                            inputContainer.style.top = "-50px"
                            inputContainer.style.position = "absolute"
                            inputContainer.style.zIndex = 1
                            inputContainer.classList.add("ignoreScale")
                            inputContainer.classList.add("inputContainerKEK")
                            scaleBtnPlayer.style.flex = 1
                            buffSizeInput.style.flex = 1
                            buffTextSizeInput.style.flex = 1
                            inputContainer.appendChild(scaleBtnPlayer)
                            inputContainer.appendChild(buffSizeInput)
                            inputContainer.appendChild(buffTextSizeInput)
 
                            ufplayer.insertBefore(inputContainer, ufplayer.firstChild);
                        }
                    } else {
                        // console.error("cant find ufplayer retrying in 100ms")
                        setTimeout(handleTargetFrames, 100)
                    }
 
                    function createInput(placeholder, prop, defaultValue) {
                        const inputField = document.createElement('input');
                        inputField.placeholder = placeholder;
                        inputField.style.width = "120px";
                        inputField.style.height = "40px";
                        inputField.title = `${placeholder}`
                        inputField.type = 'number';
                        if(props["#ufplayer"]) {
                            inputField.value = props["#ufplayer"][prop] || defaultValue; // Initial value
                        } else {
                            inputField.value = defaultValue
                        }
                        inputField.classList.add('kek-ui-input', "grid");
 
                        if (!props["#ufplayer"]) {
                            props["#ufplayer"] = {};
                        }
 
                        if (props["#ufplayer"] && typeof props["#ufplayer"][prop] === 'undefined') {
                            props["#ufplayer"][prop] = defaultValue;
                        }
 
                        if (!props["UIMode"]) {
                            inputField.style.display = "none";
                        }
 
                        function handleInputField() {
                            let inputValue = parseInt(inputField.value);
 
                            if (inputValue > 50) {
                                inputField.value = 50;
                            }
 
                            if (inputValue < 1) {
                                inputField.value = 1;
                            }
 
                            inputValue = parseInt(inputField.value);
 
                            // Use prop as the key for the property in props["#ufplayer"]
                            props["#ufplayer"][prop] = inputValue;
                            saveProps(props);
                        }
 
                        // Add an event listener for the input event
                        inputField.addEventListener('input', handleInputField);
                        return inputField;
                    }
 
                }
 
                function handleUftargetMutations(uftarget) {
                    // console.log("putting uftarget observer")
                    if(uftarget && !uftarget.classList.contains("mutationObserving")) {
                        const classIcon = uftarget.querySelector(".icon")
                        console.log(classIcon)
                        function handleMutation(mutationsList, observer) {
                            for(const mutation of mutationsList) {
                                if(mutation.type === "attributes" && mutation.attributeName === "src") {
                                    const target = mutation.target
                                    if(target.classList.contains("pclass")) {
                                        // console.log(mutation)
                                        // console.log(target)
                                        const uftarget = document.querySelector("#uftarget")
                                        // console.log("coloring uf target")
                                        colorizeGrid(uftarget)
                                    }
                                }
                            }
                        }
                        const uftargetObserver = new MutationObserver(handleMutation);
 
                        uftargetObserver.observe(classIcon, { attributes: true })
                        uftarget.classList.add("mutationObserving")
                    }
                }
 
                function handleTargetframesMutations() {
                    const targetframesContainer = document.querySelector(".targetframes")
 
                    if(targetframesContainer && !targetframesContainer.classList.contains("mutationObserving")) {
                        targetframesContainer.classList.add("mutationObserving")
                        // console.log("putting observer on target frames")
                        function handleMutation(mutationsList, observer) {
                            for (const mutation of mutationsList) {
                                if (mutation.type === 'childList') {
                                    // A child has been added or removed, perform actions here
                                    // console.log(mutation)
                                    mutation.addedNodes.forEach(node => {
                                        if(node instanceof HTMLElement) {
                                            if(node.id == "uftarget") {
                                                colorizeGrid(node)
                                                handleUftargetMutations(node)
                                                if(targetframesContainer) {
                                                    const ufplayer = document.querySelector("#ufplayer")
                                                    if(ufplayer) {
                                                        const scaleBtn = ufplayer.querySelector(".scale-btn-player")
                                                        node.style.height = ufplayer.style.height
                                                        node.style.width = ufplayer.style.width
                                                        if(props["#uftarget"] && props["#uftarget"].left) {
                                                            uftargetLeft = props["#uftarget"].left
                                                        }
                                                        node.style.left = `${uftargetLeft}px`
                                                        node.style.top = ufplayer.style.top
                                                        makeElementDraggable2(node, "#uftarget")
                                                        let targetBar = node.querySelector(".bar")
                                                        if(props["#ufplayer .bar"] && props["#ufplayer .bar"].height) {
                                                            barHeight = props["#ufplayer .bar"].height
                                                            barWidth = props["#ufplayer .bar"].width
                                                        }
                                                        targetBar.style.height = barHeight + "px"
                                                        targetBar.style.width = barWidth + "px"
                                                        makeElementScalable(node.querySelector(".bar"), scaleBtn, "#uftarget .bar")
                                                        buffArrayResizing(node.querySelector(".buffarray"), targetBuffSize)
                                                    }
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                        // Create a MutationObserver to watch for changes in the DOM
                        const targetframesObserver = new MutationObserver(handleMutation);
 
                        targetframesObserver.observe(targetframesContainer, { childList: true, subtree: false });
                    } else {
                        setTimeout(handleTargetframesMutations, 100)
                    }
                }
 
                function handleSkillbar() {
                    const skillbar = document.querySelector("#skillbar")
                    if(skillbar) {
                        skillbar.style.gridAutoRows = "initial"
                        skillbar.style.gridAutoColumns = "unset"
                        skillbar.style.gridAutoFlow = "dense"
                        skillbar.style.gridTemplateColumns = `repeat(${skillsPerRow}, auto)`
                        if(props["#skillbar"] && props["#skillbar"].left) {
                            skillbarLeft = props["#skillbar"].left
                            skillbarTop = props["#skillbar"].top
                        }
                        skillbar.style.left = `${skillbarLeft}px`
                        skillbar.style.top = `${skillbarTop}px`
                        makeElementDraggable2(skillbar, "#skillbar")
 
                        const slots = skillbar.querySelectorAll(".slot")
                        const scaleBtn = document.createElement('button')
                        scaleBtn.textContent = "Change Size (Drag)"
                        // scaleBtn.style.height = scaleBtnHeight
                        // scaleBtn.style.width = scaleBtnWidth
                        scaleBtn.classList.add("grid", "right", "kek-ui-btn", "btn", "black", "textsecondary")
                        if(!props["UIMode"]) {
                            scaleBtn.style.display = "none"
                        }
 
                        for(let slot of slots) {
                            if(props["#skillbar .slot"] && props["#skillbar .slot"].height) {
                                slotHeight = props["#skillbar .slot"].height
                                slotWidth = props["#skillbar .slot"].width
                            }
                            slot.style.height = slotHeight + "px"
                            slot.style.width = slotWidth + "px"
                            makeElementScalable(slot, scaleBtn, "#skillbar .slot")
                        }
                        if(!skillbar.querySelector(".kek-ui-input")) {
                            const container = document.createElement("div")
                            container.style.display = "flex"
                            container.style.position = "absolute"
                            container.style.left = "10px"
                            container.style.top = "-50px"
                            // console.log("creating new slider for skill bar")
                            const inputField = document.createElement('input');
                            inputField.placeholder = "Skills per row?"
                            inputField.type = 'number';
                            inputField.value = skillsPerRow; // Initial value
                            inputField.title = "Skills per row"
                            inputField.classList.add('kek-ui-input', "input", "right");
                            scaleBtn.style.flex = 1
                            scaleBtn.title = "Hold and Drag to change size, (unstable scaling)"
                            inputField.style.flex = 1
                            container.appendChild(inputField);
                            container.appendChild(scaleBtn);
 
                            skillbar.appendChild(container);
                            // inputField.style.width = 200 + "px"
                            if(!props["UIMode"]) {
                                inputField.style.display = "none"
                            }
                            function handleInputField() {
                                // Update a variable based on the slider value
                                let inputValue = parseInt(inputField.value);
                                if(inputValue > 30) {
                                    inputField.value = 30
                                }
                                if(inputValue < 1) {
                                    inputField.value = 1
                                }
                                inputValue = parseInt(inputField.value)
                                skillbar.style.gridTemplateColumns = `repeat(${inputValue}, auto)`
                                props["skillsPerRow"] = parseInt(inputValue)
                                saveProps(props)
                            }
 
                            // Add an event listener for the slider input event
                            inputField.addEventListener('input', handleInputField);
                        }
 
                    } else {
                        // console.error("skillbar not found retrying every 100 ms")
                        setTimeout(handleSkillbar, 100)
                    }
                }
                // Function to make an element draggable
                function makeElementDraggable2(element, name) {
                    let isDragging = false;
 
                    element.style.position = 'absolute';
                    // element.style.cursor = 'pointer';
 
                    // Set initial position
                    let startX, startY;
                    let initialLeft = parseInt(element.style.left.split("px")[0]);
                    let initialTop = parseInt(element.style.top.split("px")[0]);
 
                    // Function to handle mouse down event
                    function handleMouseDown(event) {
                        element.classList.add("is-dragging")
                        // Set the initial position to the cursor's position
                        startX = event.clientX;
                        startY = event.clientY;
 
                        // Add event listeners for mouse move and mouse up events
                        document.addEventListener('mousemove', handleMouseMove);
                        document.addEventListener('mouseup', handleMouseUp);
                    }
 
                    // Function to handle mouse move event
                    function handleMouseMove(event) {
                        if (element.classList.contains("is-dragging") && !element.classList.contains("is-scaling") && !hasChildWithClass(element, "is-scaling") && !props["UILock"]) {
                            const deltaX = event.clientX - startX;
                            const deltaY = event.clientY - startY;
 
                            // Set the new position of the element
                            // console.log(initialLeft, deltaX, initialTop, deltaY, (initialLeft + deltaX) + 'px', (initialTop + deltaY) + 'px')
                            const newLeft = (initialLeft + deltaX)
                            const newTop = (initialTop + deltaY)
                            element.style.left = newLeft + 'px';
                            element.style.top = newTop + 'px';
 
                            if(!props[name]) {
                                props[name] = {}
                            }
                            props[name].left = newLeft
                            props[name].top = newTop
                        }
                    }
 
                    // Function to handle mouse up event
                    function handleMouseUp() {
                        // console.log(props)
                        saveProps(props)
                        element.classList.remove("is-dragging")
                        // Update initial position for the next drag
                        initialLeft = element.offsetLeft;
                        initialTop = element.offsetTop;
 
                        // Remove event listeners for mouse move and mouse up events
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);
                    }
 
                    // Add event listener for mouse down event
                    element.addEventListener('mousedown', handleMouseDown);
                }
 
                function uiModeToggle() {
 
                    // Select all buttons with class 'kek-ui-btn'
                    const buttons = document.querySelectorAll('.kek-ui-btn');
                    const inputs = document.querySelectorAll(".kek-ui-input")
                    // Iterate through the selected buttons
                    buttons.forEach(button => {
                        // Toggle visibility by setting the 'display' style property
                        if (!props["UIMode"]) {
                            button.style.display = 'inline-block'; // Change to your desired display property
                        } else {
                            button.style.display = 'none';
                        }
                    });
                    inputs.forEach(input => {
                        // Toggle visibility by setting the 'display' style property
                        if (!props["UIMode"]) {
                            input.style.display = 'inline-block'; // Change to your desired display property
                        } else {
                            input.style.display = 'none';
                        }
                    });
                    props["UIMode"] = !props["UIMode"]
                    saveProps(props)
                }
 
                function uiLockToggle() {
                    props["UILock"] = !props["UILock"]
                    saveProps(props)
                    const lockBtn = document.querySelector(".lockUIKEK")
                    if(lockBtn) {
                        if(props["UILock"] == true) {
                            lockBtn.classList.add("textgreen")
                            lockBtn.classList.remove("textsecondary")
                        } else {
                            lockBtn.classList.remove("textgreen")
                            lockBtn.classList.add("textsecondary")
                        }
                    }
                }
 
                function uiMouseOverToggle() {
                    props["Mouse Over"] = !props["Mouse Over"]
                    saveProps(props)
                }
                // Function to handle mouseover event
                function handleMouseover(event) {
                    // Check if props["Mouse Over"] is true and the target element has the required class
                    // console.log(event.target)
                    const target = event.target
                    if (props["Mouse Over"]
                        && (target.classList.contains("bghealth") || target.classList.contains("left") || target.classList.contains("right"))
                       ) {
                        // Simulate a click on the element
                        // console.log(target)
                        // console.log(event.target.closest(".grid"), "inside")
                        event.target.click();
                    }
                }
 
                // Add mouseover event listener to the entire document
                document.addEventListener('mouseover', handleMouseover);
 
                function toggleClassColors() {
                    props["Disable Class Colors"] = !props["Disable Class Colors"]
                    saveProps(props)
                }
 
                function unblockPlayer(playerName) {
                    playerName = playerName.toLowerCase()
                    // Access or initialize blockedPlayers as a Set in props
                    props.blockedPlayers = new Set(props.blockedPlayers) || new Set();
 
                    // Check if playerName is in blockedPlayers
                    if (props.blockedPlayers.has(playerName)) {
                        // console.log(props.blockedPlayers)
                        // Remove playerName from blockedPlayers
                        props.blockedPlayers.delete(playerName);
                        props.blockedPlayers = Array.from(props.blockedPlayers)
                        saveProps(props);
                        // console.log(props);
                    }
                }
 
                function blockPlayer(playerName) {
                    // delete props.blockedPlayers
                    // saveProps(props)
                    // return;
                    playerName = playerName.toLowerCase()
                    // Access or initialize blockedPlayers as a Set in props
                    props.blockedPlayers = new Set(props.blockedPlayers) || new Set();
                    // Check if playerName is not already in blockedPlayers
                    if (!props.blockedPlayers.has(playerName)) {
                        // Add playerName to blockedPlayers
                        props.blockedPlayers.add(playerName);
                        props.blockedPlayers = Array.from(props.blockedPlayers)
                        saveProps(props)
                        // console.log(props);
                    }
                }
 
                function generateBlockedPlayerUI() {
                    if(!document.querySelector(".blockedPlayerMenuKEK")) {
                        const windowPanel = document.createElement('div');
                        windowPanel.className = 'window panel-black blockedPlayerMenuKEK';
                        windowPanel.style.position = "absolute"
                        windowPanel.style.left = "100px"
                        const titleFrame = document.createElement('div');
                        titleFrame.className = 'titleframe svelte-yjs4p5';
                        titleFrame.style.display = "flex"
                        titleFrame.style.justifyContent = "space-between";
 
                        const blockPlayerFrame = document.createElement("div")
                        blockPlayerFrame.className = "panel-black bar slot"
 
                        const title = document.createElement('div');
                        title.className = 'textprimary title svelte-yjs4p5';
                        title.style.width = "200px"
                        title.style.padding = "10px"
                        const titleContent = document.createElement("div")
                        titleContent.textContent = "Blocked Players"
                        title.appendChild(titleContent)
 
                        const blockedPlayersList = document.createElement('div');
                        blockedPlayersList.className = 'blocked-players-list panel-black bar slot';
 
                        const inputField = document.createElement('input');
                        inputField.type = 'text';
                        inputField.placeholder = 'Enter player name';
 
                        const blockButton = document.createElement('div');
                        blockButton.className = 'btn grey';
                        blockButton.textContent = 'Block Player';
                        blockButton.addEventListener('click', function () {
                            const playerName = inputField.value.trim();
                            if (playerName) {
                                blockPlayer(playerName);
                                inputField.value = ''; // Clear the input field
                                updateBlockedPlayersList();
                            }
                        });
 
                        // Add elements to the title frame
                        titleFrame.appendChild(title);
 
                        blockPlayerFrame.appendChild(inputField);
                        blockPlayerFrame.appendChild(blockButton);
 
                        // Add elements to the window panel
                        windowPanel.appendChild(titleFrame);
                        windowPanel.appendChild(blockPlayerFrame);
                        windowPanel.appendChild(blockedPlayersList);
                        const windowCross = document.createElement("img")
                        windowCross.src = "/data/ui/icons/cross.svg?v=8498194"
                        windowCross.className = "btn black svgicon"
                        titleFrame.appendChild(windowCross)
 
                        windowCross.addEventListener("click", () => {
                            windowPanel.remove()
                        })
                        const containerDiv = document.createElement("div")
                        containerDiv.className = "l-upperLeftModal container"
                        containerDiv.appendChild(windowPanel)
                        // Append the window panel to the body
                        document.body.appendChild(containerDiv);
 
                        // Update blocked players list
                        updateBlockedPlayersList();
 
                        // Function to update the blocked players list
                        function updateBlockedPlayersList() {
                            blockedPlayersList.innerHTML = ''; // Clear the list
                            const blockedPlayers = props.blockedPlayers;
 
                            if(blockedPlayers) {
                                const maxItemsPerRow = 7;
 
                                // Set the styles for the blockedPlayersList
                                blockedPlayersList.style.display = "grid";
                                blockedPlayersList.style.gridTemplateColumns = `repeat(${maxItemsPerRow}, auto)`;
 
                                // console.log(blockedPlayers)
                                for(let playerName of blockedPlayers) {
                                    const blockedPlayerItem = document.createElement('div');
                                    blockedPlayerItem.className = 'blocked-player-item btn grey';
                                    // blockedPlayerItem.style.padding = "15px"
                                    blockedPlayerItem.style.margin = "1px"
                                    blockedPlayerItem.style.display = "flex";
                                    blockedPlayerItem.style.justifyContent = "space-between";
                                    blockedPlayerItem.textContent = playerName;
 
                                    blockedPlayerItem.addEventListener('click', function () {
                                        unblockPlayer(playerName);
                                        updateBlockedPlayersList(); // Update the list after unblocking
                                    });
 
 
                                    blockedPlayersList.appendChild(blockedPlayerItem);
                                }
                            }
                        }
                    } else {
                        document.querySelector(".blockedPlayerMenuKEK").remove()
                    }
                }
 
                function togglePictureMode() {
                    const layout = document.querySelector(".l-ui.layout")
                    if(layout) {
                        if(layout.style.display !== "none") {
                            layout.style.display = "none"
                        } else {
                            layout.style.display = "grid"
                        }
                    }
                }
 
                function expBarToggle() {
                    showExpBar = !showExpBar
                    props["Show EXP"] = showExpBar
                    saveProps(props)
                    handleExpBar()
                }
 
                function handleKeyBinds() {
                    // Create a window panel-black container
                    const existingKeyBindWindow = document.querySelector(".keybindsKEK")
                    if(existingKeyBindWindow) {
                        existingKeyBindWindow.remove()
                        return;
                    }
                    const keyBindWindow = document.createElement('div');
                    keyBindWindow.className = 'window panel-black keybindsKEK';
                    keyBindWindow.style.position = 'absolute';
                    keyBindWindow.style.left = '200px';
                    keyBindWindow.style.top = '200px';
                    if(props[".keybinds"]) {
                        console.log("changing keybinds position", props[".keybinds"])
                        keyBindWindow.style.left = props[".keybinds"].left + "px" || keyBindWindow.style.top
                        keyBindWindow.style.top = props[".keybinds"].top + "px" || keyBindWindow.style.top
                    }
                    makeElementDraggable2(keyBindWindow, ".keybinds")
                    // Title frame
                    const titleFrame = document.createElement('div');
                    titleFrame.className = 'titleframe svelte-yjs4p5';
                    titleFrame.style.display = 'flex';
                    titleFrame.style.justifyContent = 'space-between';
 
                    const title = document.createElement('div');
                    title.className = 'textprimary title svelte-yjs4p5';
                    title.textContent = 'Keybinds'; // Replace with your title text
                    title.style.width = '200px';
                    title.style.padding = '10px';
                    title.style.fontSize = "15px"
 
                    const closeButton = document.createElement('img');
                    closeButton.src = '/data/ui/icons/cross.svg?v=8498194';
                    closeButton.className = 'btn black svgicon';
                    closeButton.style.padding = "5px"
                    closeButton.addEventListener('click', function () {
                        keyBindWindow.remove();
                    });
 
                    titleFrame.appendChild(title);
                    titleFrame.appendChild(closeButton);
                    keyBindWindow.appendChild(titleFrame);
                    // Create a panel black container for key binds
                    const keyBindContainer = document.createElement('div');
                    keyBindContainer.className = 'panel-black bar';
 
                    // Append the key bind container to the window container
                    keyBindWindow.appendChild(keyBindContainer);
 
                    // Iterate over keyBindsKEK object
                    for (const [feature, defaultKey] of Object.entries(keyBindsKEK)) {
                        // Create a flex column container for each key bind
                        const keyBindRow = document.createElement('div');
                        keyBindRow.className = 'key-bind-row';
                        keyBindRow.style.display = 'flex'; // Make it a flex container
                        keyBindRow.style.justifyContent = 'space-between'; // Align items to the left and right
 
                        // Create a button for each key bind key
                        const keyBindKeyButton = document.createElement('button');
                        keyBindKeyButton.className = 'btn black textsecondary';
                        keyBindKeyButton.style.fontSize = "15px"
                        keyBindKeyButton.textContent = feature;
 
                        // Create a button for each key bind value
                        const keyBindValueButton = document.createElement('button');
                        keyBindValueButton.className = 'btn black textprimary';
                        keyBindValueButton.style.textAlign = 'left'; // Align text to the left
                        keyBindKeyButton.style.textAlign = 'left'; // Align text to the left
 
                        keyBindKeyButton.style.width = "200px"
                        keyBindValueButton.style.width = "100px"
                        if(defaultKey !== "") {
                            keyBindValueButton.textContent = defaultKey.toUpperCase();
                        } else {
                            keyBindValueButton.textContent = "Not Set";
                        }
                        keyBindKeyButton.style.flex = 1
                        keyBindValueButton.style.flex = 1
                        // Add click event listener to the value button
                        keyBindValueButton.addEventListener('click', function () {
                            // Temporarily store the current key bind
                            const oldKey = keyBindsKEK[feature];
 
                            // Update the value button content to prompt the user
                            keyBindValueButton.textContent = `Enter key, Esc -> old`;
 
                            // Add keydown event listener to capture the new key
                            window.addEventListener('keydown', function handleKeyDown(event) {
                                const key = event.key.toLowerCase(); // Convert to lowercase for consistency
 
                                if (key.length === 1) {
                                    // Update the key bind object and save to localStorage
                                    keyBindsKEK[feature] = key;
                                    saveKeyBinds(keyBindsKEK);
 
                                    // Update the value button content with the new key
                                    keyBindValueButton.textContent = key.toUpperCase();
 
                                    // Remove the keydown event listener
                                    window.removeEventListener('keydown', handleKeyDown);
                                } else if (event.key === 'Escape') {
                                    // User pressed Escape, keep the old key
                                    keyBindsKEK[feature] = oldKey;
                                    saveKeyBinds(keyBindsKEK);
                                    if(oldKey == "") {
                                        keyBindValueButton.textContent = "Not Set";
                                    } else {
                                        keyBindValueButton.textContent = oldKey.toUpperCase();
                                    }
                                    window.removeEventListener('keydown', handleKeyDown);
                                }
                            });
 
                            // Function to handle keydown event
                            function handleKeyDown(event) {
                                event.preventDefault(); // Prevent the default behavior of some keys
                            }
 
                            // Add the keydown event listener
                            window.addEventListener('keydown', handleKeyDown);
                        });
 
                        // Append key bind key and value buttons to the flex row container
                        keyBindRow.appendChild(keyBindKeyButton);
                        keyBindRow.appendChild(keyBindValueButton);
 
                        // Append the flex column container to the key bind container
                        keyBindContainer.appendChild(keyBindRow);
                    }
 
                    // Append the key bind window to the .layout element in the document
                    const layoutElement = document.querySelector('.layout');
                    if (layoutElement) {
                        layoutElement.appendChild(keyBindWindow);
                    }
                }
 
                function handleExportUI(event) {
                    try {
                        const target = event.target
                        if(target.classList.contains("choice-item") && !target.classList.contains("exportActive")) {
                            target.classList.add("exportActive")
                            // Retrieve saved props for all players from the new structure
                            const savedKekPropsString = localStorage.getItem('savedKekProps');
                            const savedKekProps = JSON.parse(savedKekPropsString) || {};
 
                            // Create buttons for each player
                            const playerButtons = Object.keys(savedKekProps).map(player => {
                                const button = document.createElement('button');
                                button.className = 'btn black textsecondary';
                                button.style.padding = "1px"
                                button.style.marginLeft = "2px"
                                button.style.fontSize = "15px"
                                button.textContent = player;
                                button.addEventListener('click', function () {
                                    // Copy the corresponding player's props to the clipboard using Clipboard API
                                    const propsString = JSON.stringify(savedKekProps[player]);
                                    // console.log(propsString)
                                    navigator.clipboard.writeText(propsString).then(() => {
                                        // Change the button text to "Copied!" for a brief moment
                                        const oldText = button.textContent;
                                        button.textContent = "Copied!";
                                        setTimeout(() => {
                                            button.textContent = oldText;
                                        }, 1000);
                                    }).catch((error) => {
                                        console.error('Error copying to clipboard:', error);
                                    });
                                });
                                return button;
                            });
 
                            // Append the buttons to the document body
                            playerButtons.forEach(button => {
                                event.target.appendChild(button);
                            });
                        }
                    } catch (error) {
                        console.error('Error exporting props:', error);
                    }
                }
 
                function handleImportUI(event) {
                    const target = event.target
                    if(target.classList.contains("choice-item") && !target.classList.contains("inputActiveKEK")) {
                        target.classList.add("inputActiveKEK")
                        // console.log(event.target)
                        // Create a container for the textarea and the "Import" button
                        const container = document.createElement('div');
 
                        // Create a text area for user input
                        const textarea = document.createElement('textarea');
                        textarea.placeholder = 'Paste your configuration here...';
                        textarea.style.width = '300px';
                        textarea.style.height = '150px';
 
                        // Create an "Import" button
                        const importButton = document.createElement('button');
                        importButton.className = "btn black";
                        const importSpan = document.createElement("span");
                        importSpan.classList.add("textsecondary");
                        importSpan.textContent = "Import";
 
                        const importFailSpan = document.createElement("span");
                        importFailSpan.classList.add("textsecondary");
                        importFailSpan.textContent = "Import Failed!";
 
                        const importSuccessSpan = document.createElement("span");
                        importSuccessSpan.classList.add("textsecondary");
                        importSuccessSpan.textContent = "Import Success!";
 
                        importButton.appendChild(importSpan);
                        importButton.style.padding = "10px";
                        importButton.style.height = ""
 
                        event.target.appendChild(textarea);
                        event.target.appendChild(importButton);
 
                        const removeDelay = 1000
                        // Add event listener to handle the "Import" button
                        importButton.addEventListener('click', function() {
                            const importData = textarea.value.trim();
                            if (!importData) {
                                textarea.remove()
                                importButton.innerHTML = importFailSpan.outerHTML
 
                                setTimeout(() => {
                                    importButton.remove()
                                    target.classList.remove("inputActiveKEK")
                                }, removeDelay);
                                return; // Exit if no data is provided
                            }
 
                            try {
                                // Parse the import data into an object
                                const importedProps = JSON.parse(importData);
                                console.log(importedProps)
                                if (importedProps && typeof importedProps === 'object') {
                                    // Update the props variable
                                    props = importedProps;
 
                                    // Save the updated props
                                    saveProps(props);
 
                                    // Log or notify about the successful import
                                    console.log('Configuration imported successfully.');
 
                                    // Change the button text to "Imported!" for a brief moment
                                    importButton.innerHTML = importSuccessSpan.outerHTML
                                    textarea.remove()
                                    setTimeout(() => {
                                        importButton.remove()
                                        target.classList.remove("inputActiveKEK")
                                    }, removeDelay);
 
                                } else {
                                    textarea.remove()
                                    importButton.innerHTML = importFailSpan.outerHTML
 
 
                                    setTimeout(() => {
                                        importButton.remove()
                                        target.classList.remove("inputActiveKEK")
                                    }, removeDelay);
 
                                    console.log("NOT AN OBJECT");
                                }
                            } catch (error) {
                                textarea.remove()
                                importButton.innerHTML = importFailSpan.outerHTML
 
 
                                setTimeout(() => {
                                    importButton.remove()
                                    target.classList.remove("inputActiveKEK")
                                }, removeDelay);
 
                                console.error('Error parsing or importing configuration:', error);
                                // Handle error, e.g., notify the user about the incorrect format
                            }
                        });
                    }
                }
 
                const menuFunctions = {
                    "UIMode": uiModeToggle,
                    "UILock": uiLockToggle,
                    "Mouse Over": uiMouseOverToggle,
                    "Show EXP": expBarToggle,
                    "Picture Mode": togglePictureMode,
                    "Blocked Players": generateBlockedPlayerUI,
                    "Emoji": generateEmojiUI,
                    "Disable Class Colors": toggleClassColors,
                    "Rune Tracker": handleRuneTrackerUI,
                    "Keybinds": handleKeyBinds,
                    "ExportUI": handleExportUI,
                    "ImportUI": handleImportUI,
                    "ResetUI": clearSavedProps,
                }
 
                function generateMenuForUI() {
                    document.addEventListener('keydown', function (event) {
                        const focusedElement = document.activeElement;
 
                        // Check if the focused element is an input field
                        if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                            return;
                        }
                        const toggleKey = keyBindsKEK["Main Menu"]
                        if (event.key === toggleKey || event.key === toggleKey.toUpperCase) {
                            event.preventDefault();
 
                            let contextMenu = document.querySelector(".kek-ui-mainmenu");
 
                            if (contextMenu) {
                                contextMenu.remove();
                                return
                            }
 
                            const screenWidth = window.innerWidth || document.documentElement.clientWidth;
                            const screenHeight = window.innerHeight || document.documentElement.clientHeight;
                            let centerX = screenWidth / 2;
                            let centerY = screenHeight / 2;
 
                            contextMenu = document.createElement('div');
                            contextMenu.className = 'widow panel-black border black kek-ui-mainmenu';
                            contextMenu.style.position = 'absolute';
                            if(props[".kek-ui-menu"]) {
                                centerX = props[".kek-ui-menu"].left || centerX
                                centerY = props[".kek-ui-menu"].top || centerY
                            }
                            contextMenu.style.left = `${centerX}px`;
                            contextMenu.style.top = `${centerY}px`;
 
                            // Title frame
                            const titleFrame = document.createElement('div');
                            titleFrame.className = 'titleframe svelte-yjs4p5';
                            titleFrame.style.display = 'flex';
                            titleFrame.style.justifyContent = 'space-between';
 
                            const title = document.createElement('div');
                            title.className = 'textprimary title svelte-yjs4p5';
                            title.textContent = 'UI Menu'; // Replace with your title text
                            title.style.width = '200px';
                            title.style.padding = '10px';
                            title.style.fontSize = "20px"
 
                            const closeButton = document.createElement('img');
                            closeButton.src = '/data/ui/icons/cross.svg?v=8498194';
                            closeButton.className = 'btn black svgicon';
                            closeButton.style.padding = "5px"
                            closeButton.addEventListener('click', function () {
                                contextMenu.remove();
                            });
 
                            titleFrame.appendChild(title);
                            titleFrame.appendChild(closeButton);
                            contextMenu.appendChild(titleFrame);
 
                            const panelBlackBar = document.createElement("div")
                            panelBlackBar.className = "panel-black bar"
                            // Hardcoded choices
                            const choices = ['UIMode', "UILock", "Mouse Over", "Show EXP", "Blocked Players", "Emoji", "Picture Mode", "Disable Class Colors", "Rune Tracker",
                                             "Keybinds", "ExportUI", "ImportUI", "....", "ResetUI"];
 
                            // Add choices to the context menu
                            choices.forEach(choiceText => {
                                const choiceElement = document.createElement('div');
                                choiceElement.className = 'choice-item btn black textsecondary'; // Updated class to "choice-item"
                                choiceElement.textContent = choiceText;
                                choiceElement.style.padding = "5px"
                                choiceElement.style.fontSize = "15px"
                                if (props[choiceText]) {
                                    choiceElement.classList.add("textgreen");
                                }
 
                                // Add event listener to each choice (modify as needed)
                                choiceElement.addEventListener('click', function (event) {
                                    if (menuFunctions[choiceText]) {
                                        menuFunctions[choiceText](event);
                                        // Add your specific logic here
                                        // contextMenu.remove()
                                        if(props[choiceText]) {
                                            choiceElement.classList.add("textgreen")
                                        } else {
                                            choiceElement.classList.remove("textgreen")
                                        }
                                    }
                                });
 
                                panelBlackBar.appendChild(choiceElement);
                            });
 
                            contextMenu.appendChild(panelBlackBar)
                            contextMenu.style.zIndex = 9999
                            // Append the context menu to the specified element
                            const targetElement = document.querySelector('body');
 
                            if (targetElement) {
                                targetElement.appendChild(contextMenu);
                            }
 
                            // Close the context menu if the user clicks outside of it
                            makeElementDraggable2(contextMenu, ".kek-ui-menu")
                        }
                    });
                }
 
                function handleExpBar() {
                    const expBar = document.querySelector("#expbar")
                    if(expBar) {
                        if(props["Show EXP"] !== null) {
                            showExpBar = props["Show EXP"]
                        }
                        if(showExpBar) {
                            expBar.style.display = "inline"
                        } else {
                            expBar.style.display = "none"
                        }
                    } else {
                        setTimeout(handleExpBar, 100)
                    }
                }
 
                function getEmojis() {
                    // Retrieve saved emojis from local storage
                    let savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                    let savedKekEmojis = JSON.parse(savedKekEmojisString);
 
                    // Update savedKekEmojis with props.emoji if it's not empty
                    if (!savedKekEmojis && props.emoji && Object.keys(props.emoji).length > 0) {
                        savedKekEmojis = props.emoji;
 
                        // Save the updated savedKekEmojis to local storage
                        localStorage.setItem('savedKekEmojis', JSON.stringify(savedKekEmojis));
                    }
 
                    // If savedKekEmojis is still empty, use emoteDictionary
                    if (!savedKekEmojis || Object.keys(savedKekEmojis).length === 0) {
                        savedKekEmojis = emoteDictionary;
 
                        // Save the default emojis to local storage
                        localStorage.setItem('savedKekEmojis', JSON.stringify(savedKekEmojis));
                    }
 
                    return savedKekEmojis;
                }
 
                function generateEmojiUI() {
                    // Check if the emoji UI already exists
                    if (!document.querySelector(".emojiMenuKEK")) {
                        const windowPanel = document.createElement('div');
                        windowPanel.className = 'window panel-black emojiMenuKEK';
                        windowPanel.style.position = "absolute";
 
                        const titleFrame = document.createElement('div');
                        titleFrame.className = 'titleframe svelte-yjs4p5';
                        titleFrame.style.display = "flex";
                        titleFrame.style.justifyContent = "space-between";
 
                        const emojiList = document.createElement('div');
                        emojiList.className = 'emoji-list panel-black bar slot';
                        emojiList.style.display = "grid";
                        emojiList.style.gridTemplateColumns = "repeat(10, auto)";
 
                        const inputField = document.createElement('input');
                        inputField.type = 'text';
                        inputField.placeholder = 'Paste emoji';
                        // Style the input fields for side-by-side placement
                        inputField.style.marginRight = '10px';
 
                        const emojiNameField = document.createElement('input');
                        emojiNameField.type = 'text';
                        emojiNameField.placeholder = 'Enter emoji name';
 
                        const saveButton = document.createElement('div');
                        saveButton.className = 'btn black textsecondary';
                        saveButton.textContent = 'Save Emoji';
                        saveButton.addEventListener('click', function () {
                            const emoji = inputField.value.trim();
                            const emojiName = emojiNameField.value.trim();
 
                            if (emoji && emojiName) {
                                saveEmoji(emoji, emojiName);
                                inputField.value = ''; // Clear the input fields
                                emojiNameField.value = '';
                                updateEmojiList();
                            }
                        });
 
                        // Add elements to the title frame
                        const title = document.createElement('div');
                        title.className = 'textprimary title svelte-yjs4p5';
                        title.style.width = "200px";
                        title.style.padding = "10px";
                        title.textContent = "Emojis";
 
                        titleFrame.appendChild(title);
 
                        // Add elements to the window panel
                        windowPanel.appendChild(titleFrame);
                        // Add "Export" button
                        const exportButton = document.createElement('div');
                        exportButton.className = 'btn black textsecondary';
                        exportButton.textContent = 'Export Emojis';
                        exportButton.addEventListener('click', function (event) {
                            handleExportEmojis(event);
                        });
 
                        // Add "Import" button
                        const importButtonMain = document.createElement('div');
                        importButtonMain.className = 'btn black textsecondary';
                        importButtonMain.textContent = 'Import Emojis';
 
                        importButtonMain.addEventListener('click', function importEmojiBtn(event) {
                            if(importButtonMain.classList.contains("importActive")) {
                                return;
                            }
                            importButtonMain.classList.add("importActive")
                            handleImportEmojis(event);
                            updateEmojiList()
                        });
 
                        const inputContainer = document.createElement('div');
                        inputContainer.style.display = 'flex'; // Set display to flex
                        inputContainer.appendChild(inputField);
                        inputContainer.appendChild(emojiNameField);
 
                        const btnContainer = document.createElement('div');
                        btnContainer.style.display = 'flex'; // Set display to flex
 
                        btnContainer.appendChild(saveButton);
                        btnContainer.appendChild(exportButton);
                        btnContainer.appendChild(importButtonMain);
 
                        saveButton.style.flex = '1';
                        exportButton.style.flex = '1';
                        importButtonMain.style.flex = '1';
 
                        exportButton.style.textAlign = 'center';
                        importButtonMain.style.textAlign = 'center';
                        saveButton.style.textAlign = 'center';
 
                        inputContainer.style.marginBottom = "10px"
                        btnContainer.style.marginBottom = "10px"
 
                        windowPanel.appendChild(inputContainer);
                        windowPanel.appendChild(btnContainer)
                        windowPanel.appendChild(emojiList);
 
                        const windowCross = document.createElement("img");
                        windowCross.src = "/data/ui/icons/cross.svg?v=8498194";
                        windowCross.className = "btn black svgicon";
                        titleFrame.appendChild(windowCross);
 
                        windowCross.addEventListener("click", () => {
                            windowPanel.remove();
                        });
 
                        const containerDiv = document.createElement("div");
                        containerDiv.className = "l-upperLeftModal container";
                        containerDiv.appendChild(windowPanel);
 
                        let left = 100
                        let top = 100
                        if(props[".emojiMenuKEK"]) {
                            left = props[".emojiMenuKEK"].left || left
                            top = props[".emojiMenuKEK"].top || top
                        }
                        containerDiv.style.left = `${left}px`;
                        containerDiv.style.top = `${top}px`;
                        makeElementDraggable2(containerDiv, ".emojiMenuKEK")
                        // Append the window panel to the body
                        document.body.appendChild(containerDiv);
 
                        // Update emoji list
                        updateEmojiList();
 
                        // Function to update the emoji list
                        function updateEmojiList() {
                            emojiList.innerHTML = ''; // Clear the list
                            const emojiDictionary = getEmojis()
 
                            for (let emojiName in emojiDictionary) {
                                const emoji = emojiDictionary[emojiName];
 
                                const emojiItem = document.createElement('div');
                                emojiItem.className = 'emoji-item btn black textsecondary';
                                const emojiNameSpan = document.createElement("span")
                                emojiNameSpan.classList.add("textsecondary")
                                emojiNameSpan.textContent = emojiName
 
                                const emojiSpan = document.createElement("span")
                                emojiSpan.classList.add("textsecondary")
                                emojiSpan.textContent = emoji
 
                                emojiItem.appendChild(emojiNameSpan)
                                emojiItem.appendChild(emojiSpan)
                                emojiItem.style.display = "flex"
                                emojiItem.style.justifyContent = "space-between"
 
                                emojiItem.addEventListener('contextmenu', function (e) {
                                    e.preventDefault()
                                    // console.log("deleting item ", emojiName)
                                    deleteEmoji(emojiName);
                                    updateEmojiList(); // Update the list after deletion
                                });
                                emojiItem.addEventListener('click', function (e) {
                                    // Copy to clipboard
                                    navigator.clipboard.writeText(emoji)
                                        .then(function () {
                                        console.log("Copying item ", emoji);
 
                                        const oldContent = emojiItem.innerHTML
                                        // Change text content to "Copied"
                                        emojiItem.textContent = "Copied!";
                                        emojiItem.classList.add("textgreen")
                                        // Revert back to original content after 500ms
                                        setTimeout(function () {
                                            emojiItem.innerHTML = oldContent;
                                            emojiItem.classList.remove("textgreen")
                                        }, 500);
                                    })
                                        .catch(function (err) {
                                        console.error('Unable to copy text to clipboard', err);
                                    });
                                });
 
                                emojiList.appendChild(emojiItem);
                            }
                        }
 
                        function saveEmoji(emoji, emojiName) {
                            // Initialize emojis in local storage if it doesn't exist
                            const savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                            const savedKekEmojis = JSON.parse(savedKekEmojisString) || {};
 
                            // Save emoji to local storage
                            savedKekEmojis[emojiName] = emoji;
                            localStorage.setItem('savedKekEmojis', JSON.stringify(savedKekEmojis));
 
                        }
 
                        function deleteEmoji(emojiName) {
                            // Initialize emojis in local storage if it doesn't exist
                            const savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                            const savedKekEmojis = JSON.parse(savedKekEmojisString) || {};
 
                            // Check if the emoji exists in local storage
                            if (savedKekEmojis && savedKekEmojis[emojiName]) {
                                // Delete emoji from local storage
                                delete savedKekEmojis[emojiName];
                                localStorage.setItem('savedKekEmojis', JSON.stringify(savedKekEmojis));
                            }
                        }
 
                        function handleExportEmojis(event) {
                            try {
                                // Retrieve saved emojis from local storage
                                const savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                                const savedKekEmojis = JSON.parse(savedKekEmojisString);
 
                                if (savedKekEmojis && Object.keys(savedKekEmojis).length > 0) {
                                    // Convert emojis to a string
                                    const emojisString = JSON.stringify(savedKekEmojis);
 
                                    // Use the Clipboard API to copy the emojis to the clipboard
                                    navigator.clipboard.writeText(emojisString).then(() => {
                                        // Log or notify about the successful copy
                                        console.log('Emojis copied to clipboard successfully.');
 
                                        // Apply textgreen style and change text content to "Copied!"
                                        const oldText = event.target.textContent;
                                        event.target.textContent = 'Copied!';
                                        event.target.classList.add('textgreen');
                                        setTimeout(() => {
                                            // Change text content back to the original after one second
                                            event.target.textContent = oldText;
                                            event.target.classList.remove('textgreen');
                                        }, 1000);
                                    }).catch((error) => {
                                        console.error('Error copying emojis to clipboard:', error);
                                    });
                                } else {
                                    console.log('No emojis to export.');
                                }
                            } catch (error) {
                                console.error('Error exporting emojis:', error);
                            }
                        }
 
                        function handleImportEmojis(event) {
                            try {
                                // Open a text area for user input
                                const textarea = document.createElement('textarea');
                                textarea.placeholder = 'Paste your emojis here...';
 
                                // Create an "Import" button
                                const importButton = document.createElement('button');
                                importButton.className = 'btn black textsecondary';
                                importButton.textContent = 'Import';
 
                                const container = document.createElement('div');
                                container.style.display = 'flex'; // Set display to flex
                                container.style.marginBottom = "10px"
 
                                textarea.style.flex = "1"
                                importButton.style.flex = "1"
                                importButton.style.fontSize = "16px"
                                container.appendChild(textarea)
                                container.appendChild(importButton)
 
                                // Append the text area and button to the menu item (event.target)
                                event.target.parentNode.parentNode.insertBefore(container, emojiList);
 
                                // Add event listener to handle the "Import" button
                                importButton.addEventListener('click', function () {
                                    event.stopPropagation();
                                    importButtonMain.classList.remove("importActive")
                                    const importData = textarea.value.trim();
 
                                    if (!importData) {
                                        importButton.textContent = 'Failed!';
 
                                        // Remove the text area and import button
                                        textarea.remove();
                                        setTimeout(() => {
                                            // Reset the button text to "Import Emojis"
                                            importButton.remove();
                                            container.remove()
                                        }, 1000);
                                        return; // Exit if no data is provided
                                    }
 
                                    try {
                                        // Parse the import data into an object
                                        const importedEmojis = JSON.parse(importData);
 
                                        if (importedEmojis && typeof importedEmojis === 'object') {
                                            // Retrieve existing emojis from local storage
                                            const savedKekEmojisString = localStorage.getItem('savedKekEmojis');
                                            const savedKekEmojis = JSON.parse(savedKekEmojisString) || {};
 
                                            // Merge imported emojis with existing emojis
                                            const mergedEmojis = { ...savedKekEmojis, ...importedEmojis };
 
                                            // Save the updated emojis to local storage
                                            localStorage.setItem('savedKekEmojis', JSON.stringify(mergedEmojis));
 
                                            // Log or notify about the successful import
                                            console.log('Emojis imported successfully.');
 
                                            // Change the button text to "Successful!" for a brief moment
                                            importButton.textContent = 'Successful!';
                                            importButton.classList.add("textgreen")
                                            // Remove the text area and import button
                                            textarea.remove();
                                            setTimeout(() => {
                                                // Reset the button text to "Import Emojis"
 
                                                importButton.remove();
                                                container.remove()
 
                                            }, 1000);
                                        } else {
                                            console.error('Invalid emojis data format.');
                                            // Change the button text to "Failed!" for a brief moment
                                            importButton.textContent = 'Failed!';
                                            // Remove the text area and import button
                                            textarea.remove();
                                            setTimeout(() => {
                                                // Reset the button text to "Import Emojis"
                                                importButton.remove();
                                                container.remove()
 
                                            }, 1000);
                                        }
                                    } catch (error) {
                                        importSpan.textContent = 'Failed!';
 
                                        // Remove the text area and import button
                                        textarea.remove();
                                        setTimeout(() => {
                                            // Reset the button text to "Import Emojis"
                                            importSpan.textContent = 'Import Emojis';
 
                                            importButton.remove();
                                            container.remove()
 
                                        }, 1000);
                                        // console.error('Error parsing or importing emojis:', error);
                                        // Handle error, e.g., notify the user about the incorrect format
                                    }
                                });
                            } catch (error) {
                                console.error('Error setting up emojis import:', error);
                            }
                        }
                    }
                    else {
                        document.querySelector(".emojiMenuKEK").remove()
                    }
                }
 
                function handleGloomTimers() {
                    let gloomTimerVisible = false;
                    let timerInterval;
 
                    function calculateTimeUntilNextGloom(currentTimeUTC, gloomSchedule) {
                        const currentHour = currentTimeUTC.getUTCHours();
                        const currentMinutes = currentTimeUTC.getUTCMinutes();
 
                        let nextGloomIndex = 0;
                        for (let i = 0; i < gloomSchedule.length; i++) {
                            if (currentHour < gloomSchedule[i] || (currentHour === gloomSchedule[i] && currentMinutes < 60)) {
                                nextGloomIndex = i;
                                break;
                            }
                        }
 
                        let hoursUntilNextGloom = gloomSchedule[nextGloomIndex] - currentHour;
                        let minutesUntilNextGloom = 60 - currentMinutes;
 
                        if (minutesUntilNextGloom > 0) {
                            hoursUntilNextGloom -= 1;
                        }
 
                        const secondsUntilNextGloom = 60 - currentTimeUTC.getUTCSeconds();
 
                        return {
                            hours: hoursUntilNextGloom,
                            minutes: minutesUntilNextGloom,
                            seconds: secondsUntilNextGloom,
                        };
                    }
 
                    function updateGloomTime() {
                        const currentTimeUTC = new Date();
                        const gloomSchedule = [1, 4, 7, 10, 13, 16, 19, 22]; // Replace with your gloom schedule in UTC
                        const timeUntilNextGloom = calculateTimeUntilNextGloom(currentTimeUTC, gloomSchedule);
                        if(timeUntilNextGloom.hours < 0) {
                            timeUntilNextGloom.hours  += 3
                        }
                        return `${timeUntilNextGloom.hours}h ${timeUntilNextGloom.minutes}m ${timeUntilNextGloom.seconds}s`;
                    }
                    function updateObeliskTime() {
                        const currentTime = new Date();
                        const gloomSchedule = [1, 4, 7, 10, 13, 16, 19, 22]; // Replace with your gloom schedule in local time
                        const timeUntilNextGloom = calculateTimeUntilNextGloom(currentTime, gloomSchedule);
 
                        // Adjusting obelisk time by subtracting one hour from gloom time
                        let hoursUntilNextObelisk = timeUntilNextGloom.hours - 1;
                        const minutesUntilNextObelisk = timeUntilNextGloom.minutes;
                        const secondsUntilNextObelisk = timeUntilNextGloom.seconds;
 
                        if (hoursUntilNextObelisk < 0) {
                            hoursUntilNextObelisk = 3 - Math.abs(hoursUntilNextObelisk);
                        }
 
                        return `${hoursUntilNextObelisk}h ${minutesUntilNextObelisk}m ${secondsUntilNextObelisk}s`;
                    }
                    function createGloomDiv() {
                        const focusedElement = document.activeElement;
 
                        // Check if the focused element is an input field
                        if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                            return;
                        }
 
                        if (gloomTimerVisible) {
                            const gloomDiv = document.querySelector('.gloomTimer');
                            if (gloomDiv) {
                                gloomDiv.remove();
                            }
                            gloomTimerVisible = false;
                            clearInterval(timerInterval);
                        } else {
                            const gloomDiv = document.createElement('div');
                            gloomDiv.className = 'window panel-black svelte-yjs4p5 border black gloomTimer';
                            gloomDiv.style.borderRadius = '3%';
                            gloomDiv.style.position = 'absolute';
                            gloomDiv.style.top = '100px';
                            gloomDiv.style.left = '100px';
                            if(props[".gloomTimer"]) {
                                gloomDiv.style.top = props[".gloomTimer"].top + "px" || gloomDiv.style.top
                                gloomDiv.style.left = props[".gloomTimer"].left + "px" || gloomDiv.style.left
                            }
                            const titleFrame = document.createElement('div');
                            titleFrame.className = 'titleframe svelte-yjs4p5';
 
                            const title = document.createElement('div');
                            title.className = 'textprimary title svelte-yjs4p5';
                            title.innerHTML = '<div>Gloom Time</div>';
                            title.style.fontSize = "1.2em"
 
                            const closeButton = document.createElement('img');
                            closeButton.src = '/data/ui/icons/cross.svg?v=8498194';
                            closeButton.className = 'btn black svgicon';
                            closeButton.addEventListener('click', () => {
                                createGloomDiv(); // Toggle visibility on button click
                            });
                            const slot = document.createElement('div');
                            slot.className = 'slot svelte-yjs4p5';
                            slot.classList.add("bgblack")
                            slot.style.borderRadius = "2%"
                            const container = document.createElement('div');
                            container.className = 'container svelte-uxs0uj';
 
                            const gloomTimeDiv = document.createElement('h3');
                            gloomTimeDiv.className = 'textsecondary name svelte-uxs0uj';
                            gloomTimeDiv.textContent = `Next Gloom: ${updateGloomTime()}`;
 
                            const obeliskTimeDiv = document.createElement('h3');
                            obeliskTimeDiv.className = 'textsecondary name svelte-uxs0uj';
                            obeliskTimeDiv.textContent = `Next Obelisk: ${updateObeliskTime()}`;
 
                            container.appendChild(gloomTimeDiv);
                            container.appendChild(obeliskTimeDiv)
                            slot.appendChild(container);
                            titleFrame.appendChild(title);
                            titleFrame.appendChild(closeButton);
                            gloomDiv.appendChild(titleFrame);
                            gloomDiv.appendChild(slot);
                            document.body.appendChild(gloomDiv);
                            gloomDiv.style.height = "20%"
                            gloomDiv.style.zIndex = 20
                            timerInterval = setInterval(() => {
                                if (gloomTimerVisible) {
                                    gloomTimeDiv.textContent = `Next Gloom: ${updateGloomTime()}`;
                                    obeliskTimeDiv.textContent = `Next Obelisk: ${updateObeliskTime()}`
                                }
                            }, 1000);
 
                            gloomTimerVisible = true;
                            makeElementDraggable2(gloomDiv, ".gloomTimer")
                        }
                    }
 
                    document.addEventListener('keydown', function (event) {
                        const toggleKey = keyBindsKEK["Gloom Timer"]
                        if (event.key === toggleKey.toUpperCase() || event.key === toggleKey) {
                            createGloomDiv();
                        }
                    });
                }
 
                // Add UI elements for saving and loading presets
                function addPresetsUI(skillsMenu) {
                    const ufplayer = document.querySelector("#ufplayer")
                    if(ufplayer) {
                        const playerName = ufplayer.querySelector(".left").textContent
                        console.log("skills menu found initializing preset functionality for " + playerName);
                        if (skillsMenu) {
                            // Function to save presets to localStorage
                            function savePreset(playerName, presetName, skillPoints) {
                                if(!skillPoints) {
                                    skillPoints = getSkillPoints();
                                }
                                const presets = JSON.parse(localStorage.getItem('skillPresets')) || {};
 
                                // Use playerName as part of the key
                                presets[playerName] = presets[playerName] || {};
                                presets[playerName][presetName] = skillPoints;
 
                                localStorage.setItem('skillPresets', JSON.stringify(presets));
                                updatePresetList();
                            }
 
                            // Function to import presets
                            function importPreset(event, playerName, importedData) {
                                event.stopPropagation()
                                const target = event.target
                                try {
                                    const parsedData = JSON.parse(importedData);
                                    // Validate the imported data format as needed
                                    if (validateImportedData(parsedData)) {
                                        // Extract presetName and skillPoints from the parsed data
                                        const presetName = Object.keys(parsedData)[0];
                                        const skillPoints = parsedData[presetName];
 
                                        // Call the savePreset function with the imported data
                                        savePreset(playerName, presetName, skillPoints);
                                        updatePresetList();
                                        target.textContent = "Saved!"
                                        setTimeout(() => {
                                            target.textContent = "Import"
                                        }, 500)
                                    } else {
                                        target.textContent = "Failed!"
                                        setTimeout(() => {
                                            target.textContent = "Import"
                                        }, 500)
                                    }
                                } catch (error) {
                                    target.textContent = "Failed!"
                                    setTimeout(() => {
                                        target.textContent = "Import"
                                    }, 500)
                                }
                            }
                            // Function to validate the imported data format
                            function validateImportedData(importedData) {
                                return (
                                    importedData &&
                                    typeof importedData === 'object' &&
                                    Object.keys(importedData).length === 1 &&
                                    typeof importedData[Object.keys(importedData)[0]] === 'object'
                                );
                            }
                            // Function to copy the preset to the clipboard using Clipboard API
                            async function copyPresetToClipboard(playerName, presetName) {
                                const presets = JSON.parse(localStorage.getItem('skillPresets')) || {};
                                const playerPresets = presets[playerName] || {};
                                let skillPoints = {}
                                skillPoints[presetName] = playerPresets[presetName];
 
                                if (skillPoints) {
                                    // Convert skillPoints to a string (customize this based on your data structure)
                                    const skillPointsString = JSON.stringify(skillPoints);
 
                                    try {
                                        // Use Clipboard API to copy the skillPointsString to the clipboard
                                        await navigator.clipboard.writeText(skillPointsString);
                                        console.log(`Preset "${presetName}" copied to clipboard for ${playerName}!`);
                                    } catch (error) {
                                        console.error('Unable to copy to clipboard:', error);
                                    }
                                } else {
                                    alert(`Preset "${presetName}" not found for ${playerName}.`);
                                }
                            }
                            // Function to load presets from localStorage
                            function loadPreset(playerName, presetName) {
                                const presets = JSON.parse(localStorage.getItem('skillPresets')) || {};
                                const playerPresets = presets[playerName] || {};
                                const skillPoints = playerPresets[presetName];
 
                                if (skillPoints) {
                                    setSkillPoints(skillPoints);
                                    console.log(`Preset "${presetName}" loaded successfully for ${playerName}!`);
                                } else {
                                    alert(`Preset "${presetName}" not found for ${playerName}.`);
                                }
                            }
                            // Function to delete a preset from localStorage
                            function deletePreset(playerName, presetName) {
                                const presets = JSON.parse(localStorage.getItem('skillPresets')) || {};
                                const playerPresets = presets[playerName] || {};
 
                                if (playerPresets[presetName]) {
                                    delete playerPresets[presetName];
                                    localStorage.setItem('skillPresets', JSON.stringify(presets));
                                    updatePresetList(); // Update the preset list after deletion
                                    console.log(`Preset "${presetName}" deleted successfully for ${playerName}!`);
                                } else {
                                    alert(`Preset "${presetName}" not found for ${playerName}.`);
                                }
                            }
                            // Function to update the preset list
                            function updatePresetList() {
                                presetList.innerHTML = ''; // Clear the preset list
                                const playerPresets = JSON.parse(localStorage.getItem('skillPresets')) || {};
                                const presets = playerPresets[playerName];
 
                                const container = document.createElement('div');
                                container.style.overflow = 'hidden'; // Enable scrolling
                                container.style.maxHeight = '350px'; // Set the maximum height for the container
                                // Add event listeners to handle scrolling
                                container.addEventListener('wheel', (event) => {
                                    // Adjust the scrollTop property based on your scrolling logic
                                    container.scrollTop += event.deltaY;
                                });
                                for (const presetName in presets) {
                                    const flexContainer = document.createElement('div');
                                    flexContainer.className = 'preset-flex-container'; // Apply styling for the flex container
                                    flexContainer.style.display = 'flex';
                                    const presetItem = document.createElement('div');
                                    presetItem.className = 'preset-item btn black textsilver';
                                    presetItem.style.padding = '5px';
                                    presetItem.style.minWidth = "150px"
                                    presetItem.textContent = presetName;
                                    presetItem.addEventListener('click', function () {
                                        loadPreset(playerName, presetName);
                                    });
                                    // Add delete button
                                    const deleteButton = document.createElement('div');
                                    deleteButton.className = 'btn black delete-btn textsecondary';
                                    deleteButton.style.padding = '5px';
                                    deleteButton.textContent = 'X';
                                    deleteButton.addEventListener('click', function (event) {
                                        event.stopPropagation(); // Prevent the click event from reaching the presetItem click event
                                        deletePreset(playerName, presetName);
                                    });
 
                                    // Add export button
                                    const exportButton = document.createElement('div');
                                    exportButton.className = 'btn black export-btn textsecondary';
                                    exportButton.style.padding = '5px';
                                    exportButton.textContent = 'Copy';
                                    exportButton.addEventListener('click', function (event) {
                                        event.target.textContent = "Copied!"
                                        event.stopPropagation(); // Prevent the click event from reaching the presetItem click event
                                        copyPresetToClipboard(playerName, presetName);
                                        setTimeout(() => {
                                            event.target.textContent = "Copy"
                                        }, 500)
                                    });
                                    presetItem.style.flex = 1
                                    // Append elements to the flex container
                                    flexContainer.appendChild(presetItem);
                                    flexContainer.appendChild(exportButton);
                                    flexContainer.appendChild(deleteButton);
 
                                    // Append the flex container to the container
                                    container.appendChild(flexContainer);
                                }
 
                                // Append the container to the presetList
                                presetList.appendChild(container);
                            }
 
                            // Example: Get skill points allocation from the page
                            function getSkillPoints() {
                                const skillBoxes = skillsMenu.querySelectorAll('.skillbox'); // Select all skill boxes
 
                                const skillPoints = {}
                                skillBoxes.forEach(skillBox => {
                                    const divs = skillBox.children
                                    const skillPointsInfo = divs[1]
                                    const skillPointsElement = skillPointsInfo.querySelector('.skillpoints');
                                    if (skillPointsElement) {
                                        const skillName = skillBox.querySelector('.textprimary.name').textContent.trim();
                                        let spentPoints = skillPointsElement.querySelectorAll('.btn.incbtn.white').length;
                                        if(!spentPoints) {
                                            spentPoints = skillPointsElement.querySelectorAll('.btn.incbtn.green').length
                                        }
                                        console.log(skillName, spentPoints)
                                        skillPoints[skillName] = spentPoints
                                    }
                                });
 
                                return skillPoints;
                            }
 
                            // Example: Set skill points allocation on the page
                            function setSkillPoints(skillPoints) {
                                console.log(skillPoints)
                                const skillBoxes = skillsMenu.querySelectorAll('.skillbox'); // Select all skill boxes
                                const applyBtn = skillsMenu.querySelector("#tutapplyskills")
                                skillBoxes.forEach(skillBox => {
                                    const divs = skillBox.children
                                    const skillPointsInfo = divs[1]
                                    const skillBtnInfo = divs[2]
                                    const skillPointsElement = skillPointsInfo.querySelector('.skillpoints');
                                    if (skillPointsElement) {
                                        const skillName = skillBox.querySelector('.textprimary.name').textContent.trim();
                                        const btns = skillBtnInfo.querySelectorAll("div.btn")
                                        let spentPoints = skillPointsElement.querySelectorAll('.btn.incbtn.white').length;
                                        if (!spentPoints) {
                                            spentPoints = skillPointsElement.querySelectorAll('.btn.incbtn.green').length;
                                        }
                                        const decBtn = btns[0]
                                        if (decBtn) {
                                            for (let i = 0; i < spentPoints; i++) {
                                                decBtn.click()
                                            }
                                            let incBtn = skillBtnInfo.querySelector("#tutsetskillpoint")
                                            if (incBtn) {
                                                for (let i = 0; i < skillPoints[skillName]; i++) {
                                                    incBtn.click()
                                                }
                                            } else {
                                                // Use MutationObserver to wait for #tutsetskillpoint to be added
                                                const observer = new MutationObserver(function (mutationsList) {
                                                    mutationsList.forEach(mutation => {
                                                        const addedNodes = Array.from(mutation.addedNodes);
                                                        const incBtn = addedNodes.find(node => node.id === 'tutsetskillpoint');
                                                        if (incBtn) {
                                                            for (let i = 0; i < skillPoints[skillName]; i++) {
                                                                incBtn.click();
                                                            }
                                                        }
                                                    });
                                                });
 
                                                // Configuration of the observer
                                                const config = { childList: true, subtree: true };
 
                                                // Start observing the target node (skillBtnInfo)
                                                observer.observe(skillBtnInfo, config);
                                                // Stop observing after a reasonable time or when the incBtn is found
                                                setTimeout(() => observer.disconnect(), 100);
                                            }
                                        }
                                    }
                                });
                                setTimeout(() => applyBtn.click(), 500)
 
                            }
 
                            // Create a window panel with preset functionality
                            const windowPanel = document.createElement('div');
                            windowPanel.className = 'window panel-black';
 
                            const titleFrame = document.createElement('div');
                            titleFrame.className = 'titleframe svelte-yjs4p5';
 
                            const savePresetFrame = document.createElement("div")
                            savePresetFrame.className = "panel-black bar slot preset-btn-container"
                            savePresetFrame.style.display = "grid"
                            savePresetFrame.style.gridTemplateColumns = "repeat(2, auto)"
 
                            const title = document.createElement('div');
                            title.className = 'textprimary title svelte-yjs4p5';
                            title.textContent = 'Presets';
                            title.style.width = "200px"
                            title.style.padding = "10px"
 
                            const presetList = document.createElement('div');
                            presetList.className = 'preset-list panel-black bar slot';
 
                            // Add input field for preset name
                            const presetInput = document.createElement('input');
                            presetInput.type = 'text';
                            presetInput.placeholder = 'Enter preset name';
                            // Add save button
                            const saveButton = document.createElement('div');
                            saveButton.className = 'btn black textsecondary';
                            saveButton.textContent = 'Save';
                            saveButton.style.textAlign = "center"
                            saveButton.addEventListener('click', function () {
                                const presetName = presetInput.value.trim();
                                if (presetName) {
                                    savePreset(playerName, presetName);
                                    presetInput.value = ''; // Clear the input field
                                }
                            });
 
                            // Add input field for importing presets
                            const importInput = document.createElement('textarea');
                            importInput.placeholder = 'Enter Preset Data';
                            importInput.style.height = "35px"
                            importInput.style.overflow = "hidden"
                            importInput.addEventListener('wheel', (event) => {
                                // Adjust the scrollTop property based on your scrolling logic
                                importInput.scrollTop += event.deltaY;
                            });
                            // Add import button
                            const importButton = document.createElement('div');
                            importButton.className = 'btn black textsecondary';
                            importButton.textContent = 'Import';
                            importButton.style.textAlign = "center"
                            importButton.addEventListener('click', function (event) {
                                const importedData = importInput.value.trim();
                                if (importedData) {
                                    // Call the savePreset function with the imported data
                                    importPreset(event, playerName, importedData);
                                    importInput.value = ''; // Clear the input field after import
                                }
                            });
 
                            // Append elements to the title frame
                            titleFrame.appendChild(title);
                            // Append import elements
                            savePresetFrame.appendChild(importInput);
                            savePresetFrame.appendChild(importButton);
 
                            savePresetFrame.appendChild(presetInput);
                            savePresetFrame.appendChild(saveButton);
 
                            // Append elements to the window panel
                            windowPanel.appendChild(titleFrame);
                            windowPanel.appendChild(savePresetFrame);
                            windowPanel.appendChild(presetList);
 
                            // Append the window panel to the skillsMenu
                            skillsMenu.appendChild(windowPanel);
                            skillsMenu.style.display = "flex"
 
                            // Initialize the preset list
                            updatePresetList();
                        }
                    }
                    else {
                        // console.log("cannot find ufplayer retrying every 100 ms")
                        setTimeout(() => {
                            addPresetsUI(skillsMenu)
                        }, 1)
 
                    }
                }
 
                const allRuneData = getRuneData()
                // console.log(allRuneData)
                let runeData
 
                let runeTrackerIdx
 
                if(allRuneData) {
                    runeData = allRuneData[allRuneData.length - 1]
                    runeTrackerIdx = allRuneData.length - 1
                } else {
                    localStorage.setItem('isRuneTrackerActiveKEK', "false")
                }
 
                // console.log(runeTrackerIdx)
 
                // Function to get the active rune tab from localStorage
                function getActiveTab() {
                    return localStorage.getItem('activeRuneTabKEK');
                }
                // Function to set the active rune tab in localStorage
                function setActiveTab(value) {
                    localStorage.setItem('activeRuneTabKEK', value);
                }
 
                function getRuneName(tier) {
                    const tierToName = {
                        0: "Lucid",
                        1: "Melant",
                        2: "Turim",
                        3: "Fundo",
                        4: "Amari"
                    }
 
                    return tierToName[tier - 1]
                }
                // Function to save rune tracker data in local storage
                function saveRuneData(data) {
                    let storedRuneData = data || {}
                    localStorage.setItem('runeDataKEK', JSON.stringify(storedRuneData));
                }
                // Function to get rune tracker data from local storage or use default testData
                function getRuneData() {
                    const storedRuneDataString = localStorage.getItem('runeDataKEK');
                    const storedRuneData = JSON.parse(storedRuneDataString)
 
                    return storedRuneData || []
                }
 
                // Function to get the length of saved rune tracker data
                function getRuneTrackerDataLength() {
                    const storedRuneDataString = localStorage.getItem('runeDataKEK');
                    const storedRuneData = JSON.parse(storedRuneDataString);
                    return storedRuneData ? storedRuneData.length : 0;
                }
 
                // Function to add quantity to both tabs' rune data and update UI
                function addRuneData(playerName, runeIdx, qty) {
                    let currentRuneData
                    if(allRuneData) {
                        currentRuneData = allRuneData[allRuneData.length - 1]
                    }
                    if(!currentRuneData) return;
                    // Iterate over each tab and add quantity to the tab's rune data or set base value if not found
 
                    if(getRuneTrackerState()) {
                        for (const tab in currentRuneData) {
                            // Skip properties that are not tabs
                            if (tab == "activeTab") {
                                continue;
                            }
 
                            // Check if the player exists in the tab's data
                            if (!currentRuneData[tab][playerName]) {
                                // Initialize the data structure for the player if not found
                                currentRuneData[tab][playerName] = {};
                                runeNames.forEach((runeName, runeIdx) => {
                                    currentRuneData[tab][playerName][runeIdx] = 0;
                                });
                                if(!currentRuneData[tab].by) {
                                    currentRuneData[tab].by = "Amari"
                                }
                            }
 
                            // Add quantity to the tab's rune data or set base value if not found
                            currentRuneData[tab][playerName][runeIdx] = (currentRuneData[tab][playerName][runeIdx] || 0) + qty;
                            currentRuneData[tab][playerName].state = 1
 
                        }
 
 
                        // Save the updated data
                    }
                    saveRuneData(allRuneData);
                    updateRuneTracker();
                }
 
                //state = 1 for in party, 0 for not in party
                function changePlayerState(name, state) {
                    if(runeData) {
                        if(runeData.rawCount[name]) {
                            runeData.rawCount[name].state = state
                        }
                        if(runeData.manualCount[name]) {
                            runeData.manualCount[name].state = state
                        }
                        saveRuneData(allRuneData)
                    }
                    updateRuneTracker()
 
                }
                const runeNames = ["Lucid", "Melant", "Turim", "Fundo", "Amari"];
 
                let runeTrackerOpen = false;
                const paddingValue = '5px';
                const marginValue = '3px';
                function getRuneTrackerState() {
                    return localStorage.getItem('isRuneTrackerActiveKEK') === "true"
                }
                // Function to handle the creation and removal of the Rune Tracker UI
                function handleRuneTrackerUI() {
                    if (runeTrackerOpen) {
                        // Close the existing Rune Tracker if open
                        const existingRuneTracker = document.querySelector('.runeTrackerKEK');
                        if (existingRuneTracker) {
                            existingRuneTracker.remove();
                        }
                        runeTrackerOpen = false;
                        return;
                    }
                    runeTrackerOpen = true;
                    updateRuneTracker()
                }
 
                // Function to update the Rune Tracker UI
                function updateRuneTracker() {
                    // console.log(runeTrackerOpen)
                    const existingRuneTracker = document.querySelector(".runeTrackerKEK")
                    if(runeTrackerOpen == false) return;
                    if(existingRuneTracker) {
                        existingRuneTracker.remove()
                    }
 
                    const runeTrackerContainer = document.createElement('div');
                    runeTrackerContainer.className = 'window panel-black runeTrackerKEK';
                    runeTrackerContainer.style.position = 'absolute';
                    runeTrackerContainer.style.left = '200px';
                    runeTrackerContainer.style.top = '50px';
 
                    if(props[".runeTrackerKEK"]) {
                        runeTrackerContainer.style.left = props[".runeTrackerKEK"].left || '200px';
                        runeTrackerContainer.style.top = props[".runeTrackerKEK"].top || '50px';
                    }
                    makeElementDraggable2(runeTrackerContainer, ".runeTrackerKEK")
                    const runeGridContainer = document.createElement('div');
                    runeGridContainer.className = 'panel-black';
                    runeGridContainer.style.display = 'grid';
                    runeGridContainer.style.gridTemplateColumns = `auto repeat(${runeNames.length}, auto)`;
 
                    const titleFrame = document.createElement('div');
                    titleFrame.className = 'titleframe svelte-yjs4p5';
                    titleFrame.style.display = "flex";
                    titleFrame.style.justifyContent = "space-between";
 
                    const startBtn = document.createElement('button');
                    startBtn.style.padding = "10px"
                    startBtn.style.flex = 1
                    startBtn.style.width = "100px"
                    const runeTrackerState = getRuneTrackerState()
                    if(runeTrackerState) {
                        startBtn.textContent = "Stop";
                        startBtn.className = `btn textprimary rune-tracker-startbtn red`
                    } else {
                        startBtn.textContent = "Start";
                        startBtn.className = `btn textprimary rune-tracker-startbtn grey`
                    }
 
                    startBtn.addEventListener('click', function () {
                        if (startBtn.textContent == "Start") {
                            // Start functionality
                            startBtn.textContent = "Stop";
                            startBtn.className = "btn textprimary rune-tracker-startbtn red"; // Change class as needed
 
                            // Set isRuneTrackerActive to true in local storage
                            localStorage.setItem('isRuneTrackerActiveKEK', 'true');
                        } else {
                            // Stop functionality
                            // Add any additional logic needed when stopping
 
                            // Change button text and style back to start functionality
                            startBtn.textContent = "Start";
                            startBtn.className = "btn textsecondary rune-tracker-startbtn grey"; // Change class as needed
 
                            // Set isRuneTrackerActive to false in local storage
                            localStorage.setItem('isRuneTrackerActiveKEK', 'false');
                        }
                    });
                    const newBtn = document.createElement('button');
                    newBtn.style.padding = "10px"
                    newBtn.style.flex = 1
                    newBtn.textContent = "New";
                    newBtn.style.width = "100px"
                    newBtn.className = `btn textprimary rune-tracker-btn grey`
 
                    // Add event listener to the start button
                    newBtn.addEventListener('click', function () {
                        // Start functionality
                        if(allRuneData) {
                            runeTrackerIdx = allRuneData.length;
                        } else {
                            runeTrackerIdx = 0
                        }
                        const newState = { "manualCount": {}, "rawCount": {} };
 
                        runeData = newState;
 
                        // Push the new state to the array
                        allRuneData.push(newState);
 
                        // Limit the array length to 10
                        const maxLength = 10;
                        if (allRuneData.length > maxLength) {
                            // If the array exceeds the limit, remove the first element
                            allRuneData.shift();
 
                            // Decrement runeTrackerIdx by 1
                            runeTrackerIdx = Math.max(0, runeTrackerIdx - 1);
                        }
 
                        // Save the updated array to localStorage
                        saveRuneData(allRuneData);
 
                        updateRuneTracker();
                    });
 
                    // console.log(dataToShow, "from handleUI", activeTab)
                    // Add elements to the title frame
                    const title = document.createElement('div');
                    title.className = 'textprimary title svelte-yjs4p5';
                    title.style.width = "200px";
                    title.style.padding = "10px";
                    title.textContent = "Rune Tracker";
 
                    titleFrame.appendChild(title);
                    titleFrame.appendChild(startBtn);
                    titleFrame.appendChild(newBtn);
 
                    // Add elements to the window panel
                    runeTrackerContainer.appendChild(titleFrame);
 
                    // Create header row for player names
                    const playerHeader = document.createElement('div');
                    playerHeader.className = 'btn black textprimary rune-tracker-item';
                    playerHeader.textContent = 'Players';
                    playerHeader.style.width = '100px'; // Width of player names
                    playerHeader.style.padding = paddingValue;
                    playerHeader.style.margin = marginValue;
                    runeGridContainer.appendChild(playerHeader);
 
 
                    // Append the rune grid container to the main container
                    runeTrackerContainer.appendChild(runeGridContainer);
                    runeTrackerContainer.style.zIndex = 10
                    // Set a fixed height and enable vertical scrolling for the rune grid container
                    runeTrackerContainer.style.height = 'calc(100vh - 500px)'; // Adjust the height as needed
                    // Set overflow to hidden for both x and y
                    runeTrackerContainer.style.overflow = 'hidden';
 
                    // Add event listeners to handle scrolling
                    runeTrackerContainer.addEventListener('wheel', (event) => {
                        // Adjust the scrollTop property based on your scrolling logic
                        runeTrackerContainer.scrollTop += event.deltaY;
                    });
                    // Append the main container to the .layout element in the document
                    const layoutElement = document.querySelector('.layout');
                    if (layoutElement) {
                        layoutElement.appendChild(runeTrackerContainer);
                    }
                    let dataToShow;
                    //prev next btns
                    if(runeData) {
                        // Create elements for navigation buttons and input field
                        const navigateContainer = document.createElement('div');
                        navigateContainer.style.display = 'flex';
                        navigateContainer.style.marginTop = '10px';
 
                        const indexInput = document.createElement('input');
 
                        const prevButton = document.createElement('button');
                        prevButton.className = "btn grey textsecondary"
                        prevButton.textContent = '<';
                        prevButton.style.padding = "10px"
                        prevButton.style.marginLeft = "5px"
                        prevButton.addEventListener('click', function () {
                            if (runeTrackerIdx > 0) {
                                runeTrackerIdx--;
                                indexInput.value = runeTrackerIdx
                                runeData = allRuneData[runeTrackerIdx]
                                // console.log(runeTrackerIdx, runeData)
                                updateRuneTracker()
                            }
                        });
 
                        const nextButton = document.createElement('button');
                        nextButton.textContent = '>';
                        nextButton.style.padding = "10px"
                        nextButton.className = "btn grey textsecondary"
                        nextButton.addEventListener('click', function () {
                            const dataLength = getRuneTrackerDataLength();
                            if (runeTrackerIdx < dataLength - 1) {
                                runeTrackerIdx++;
                                indexInput.value = runeTrackerIdx
                                runeData = allRuneData[runeTrackerIdx]
                                // console.log(runeTrackerIdx, runeData)
                                updateRuneTracker()
                            }
                        });
 
                        indexInput.type = 'number';
                        indexInput.className = 'input';
                        indexInput.style.width = '50px';
                        indexInput.value = runeTrackerIdx
                        indexInput.style.padding = "7px"
 
                        // Add an input event listener to handle real-time updates
                        indexInput.addEventListener('input', function () {
                            // Ensure the input value is a positive integer
                            const targetIndex = parseInt(indexInput.value, 10);
                            if (!isNaN(targetIndex) && targetIndex >= 0) {
                                runeTrackerIdx = targetIndex;
                                indexInput.value = runeTrackerIdx
                                runeData = allRuneData[runeTrackerIdx]
                                // console.log(runeTrackerIdx, runeData)
                                updateRuneTracker()
                            }
                        });
 
 
                        // Add the navigation container to the main container
 
                        let activeTab = getActiveTab() || 'rawCount';
                        dataToShow = runeData[activeTab]
                        // Create tab buttons
                        const rawCountTabButton = createTabButton('Raw Count', 'rawCount');
                        const manualCountTabButton = createTabButton('Manual Count', 'manualCount');
 
                        titleFrame.appendChild(rawCountTabButton);
                        titleFrame.appendChild(manualCountTabButton);
                        // Add navigation elements to the container
                        titleFrame.appendChild(prevButton);
                        titleFrame.appendChild(indexInput);
                        titleFrame.appendChild(nextButton);
                    }
                    // Create close button element
                    const closeBtn = document.createElement('img');
                    closeBtn.src = '/data/ui/icons/cross.svg?v=8498194';
                    closeBtn.className = 'btn black svgicon';
 
                    // Append close button to titleFrame
                    titleFrame.appendChild(closeBtn);
 
                    // Add event handler to the close button
                    closeBtn.addEventListener('click', function () {
                        // Remove the runeTrackerContainer when the close button is clicked
                        runeTrackerContainer.remove();
                        runeTrackerOpen = false
                    });
 
                    //cells
                    if(dataToShow) {
                        // Create header row for rune names
                        runeNames.forEach(runeName => {
                            const runeHeader = document.createElement('div');
                            runeHeader.className = 'btn black textprimary rune-tracker-item';
                            runeHeader.textContent = runeName;
                            runeHeader.style.padding = paddingValue;
                            runeHeader.style.margin = marginValue;
                            runeHeader.addEventListener('click', function () {
                                runeData[getActiveTab()].by = runeName
                                saveRuneData(allRuneData)
                                sortAndUpdateRuneTracker(dataToShow, runeName);
                            });
                            runeGridContainer.appendChild(runeHeader);
                        });
 
                        // Create rows for player names and rune counts
                        for (const playerName in dataToShow) {
                            if(playerName === "by") {continue;}
                            const playerRow = document.createElement('div');
                            playerRow.className = 'btn black textsecondary rune-tracker-item';
                            playerRow.textContent = playerName;
                            const isMe = playerName == playerNameKEK
                            const state = runeData.rawCount[playerName].state
                            if(isMe) {
                                playerRow.classList.add("textgreen")
                            }
                            if(state === 0) {
                                playerRow.classList.add("textgrey")
                            }
                            playerRow.style.width = '100px'; // Width of player names
                            playerRow.style.padding = paddingValue;
                            playerRow.style.margin = marginValue;
                            runeGridContainer.appendChild(playerRow);
 
                            for (let tier = 0; tier < runeNames.length; tier++) {
                                const runeCell = document.createElement('div');
                                runeCell.className = 'btn black textsecondary rune-tracker-item';
                                if(isMe) {
                                    runeCell.classList.add("textgreen")
                                }
                                if(state === 0) {
                                    runeCell.classList.add("textgrey")
                                }
                                runeCell.textContent = dataToShow[playerName][tier] !== null ? dataToShow[playerName][tier] : 'N/A';
                                runeCell.style.padding = paddingValue;
                                runeCell.style.margin = marginValue;
 
                                // Add event listeners to the cell for incrementing and decrementing values
                                if(getActiveTab() == "manualCount") {
                                    runeCell.addEventListener('click', function () {
                                        // Increment the value on click
                                        dataToShow[playerName][tier]++;
                                        // console.log(dataToShow, "from update rune cell")
                                        saveRuneData(allRuneData);
                                        updateRuneTracker()
                                    });
 
                                    runeCell.addEventListener('contextmenu', function (event) {
                                        event.preventDefault();
                                        // Decrement the value on right-click
                                        console.log("from context menu in cell")
                                        dataToShow[playerName][tier] = Math.max(0, dataToShow[playerName][tier] - 1);
                                        saveRuneData(allRuneData);
                                        updateRuneTracker()
                                    });
                                }
 
                                runeGridContainer.appendChild(runeCell);
                            }
                        }
 
                    }
                    // Function to update the class of a tab button based on the active tab
                    function updateTabButtonClass(button, tab) {
                        const isActive = getActiveTab() == tab
                        button.className = `btn textprimary rune-tracker-btn ${isActive ? 'disabled black' : 'grey'}`;
                    }
                    // Function to create a tab button
                    function createTabButton(text, tab) {
                        const tabButton = document.createElement('button');
                        updateTabButtonClass(tabButton, tab)
                        tabButton.style.padding = "10px"
                        tabButton.style.flex = 1
                        tabButton.style.width = "130px"
                        tabButton.textContent = text;
                        tabButton.value = tab
                        tabButton.addEventListener('click', function () {
                            setActiveTab(tabButton.value)
                            saveRuneData(allRuneData)
                            updateRuneTracker()
                            // Update classes for all tab buttons
                            const tabButtons = document.querySelectorAll('.rune-tracker-btn');
                            // console.log(tabButtons)
                            tabButtons.forEach(button => updateTabButtonClass(button, button.value));
                        });
                        return tabButton;
                    }
                }
                // Function to get sorted data based on the selected rune and tab
                function getSortedData(data, runeName) {
                    const sortedData = {};
 
                    const sortedPlayerNames = Object.keys(data).filter(playerName => playerName !== "by").sort((a, b) => {
                        const aValue = data[a][runeNames.indexOf(runeName)];
                        const bValue = data[b][runeNames.indexOf(runeName)];
                        return bValue - aValue;
                    });
                    // console.log(data)
                    sortedPlayerNames.forEach((playerName) => {
                        sortedData[playerName] = data[playerName];
                    });
                    sortedData.by = data.by
                    return sortedData;
                }
                // Function to sort the rune data and update the UI
                function sortAndUpdateRuneTracker(data, runeName) {
                    const sortedData = getSortedData(data, runeName);
                    // const deepCopySortedData = JSON.parse(JSON.stringify(sortedData)); // Deep copy
                    // console.log(deepCopySortedData)
                    runeData[getActiveTab()] = sortedData;
                    // Update the Rune Tracker UI with the sorted data
                    // saveRuneData(runeData, runeTrackerIdx);
                    updateRuneTracker();
                }
 
                function createUIWindow(titleName, left = '200px', top = '50px') {
                    // Create the main container
                    const windowClassName = titleName.split(" ").join("").toLowerCase() + "KEK"
                    const mainContainer = document.createElement('div');
                    mainContainer.className = `window panel-black ${windowClassName}`;
                    mainContainer.style.position = 'absolute';
                    mainContainer.style.left = left;
                    mainContainer.style.top = top;
 
                    // Create the title frame
                    const titleFrame = document.createElement('div');
                    titleFrame.className = 'titleframe svelte-yjs4p5';
                    titleFrame.style.display = 'flex';
                    titleFrame.style.justifyContent = 'space-between';
 
                    // Create the title
                    const title = document.createElement('div');
                    title.className = 'textprimary title svelte-yjs4p5';
                    title.style.width = '200px';
                    title.style.padding = '10px';
                    title.textContent = titleName;
 
                    // Create the close button
                    const closeBtn = document.createElement('img');
                    closeBtn.src = '/data/ui/icons/cross.svg?v=8498194';
                    closeBtn.className = 'btn black svgicon';
 
                    // Append elements to the title frame
                    titleFrame.appendChild(title);
                    titleFrame.appendChild(closeBtn);
 
                    // Append the title frame to the main container
                    mainContainer.appendChild(titleFrame);
 
                    // Add event handler to the close button
                    closeBtn.addEventListener('click', function () {
                        // Remove the main container when the close button is clicked
                        mainContainer.remove();
                    });
 
                    // Return the main container
                    mainContainer.style.zIndex = 10
                    return mainContainer;
                }
 
                function createGridContainer(columnNames, className, marginVal = "3px", paddingVal = "5px") {
                    const gridContainer = document.createElement('div');
                    gridContainer.className = `panel-black ${className}`;
                    gridContainer.style.display = 'grid';
                    gridContainer.style.gridTemplateColumns = `repeat(${columnNames.length}, auto)`;
 
                    // Create header row
                    for (const columnName of columnNames) {
                        const headerCell = document.createElement('div');
                        headerCell.className = 'btn black textprimary grid-item';
                        headerCell.textContent = columnName;
                        headerCell.style.margin = marginVal;
                        headerCell.style.padding = paddingVal;
                        gridContainer.appendChild(headerCell);
                    }
 
                    return gridContainer;
                }
 
                const requiredButtonGroup = ["dps", "hps", "mps", "kills", "deaths"];
 
                // Optional button groups
                const optionalButtonGroups = {
                    faction: ["vg", "bl"],
                    class: ["warrior", "mage", "shaman", "archer"],
                    duration: ["true"],
                };
 
                let gloomRankingData, gloomPersonalData
                let defaultRequiredArg = "dps"
                if(playerClassKEK == 3) {
                    defaultRequiredArg = "hps"
                }
                let rankingOpened = false
 
                let oldOptions = [defaultRequiredArg]
                let isFetchingRanking = false, isFetchingPersonal = false
 
                function handleGloomRankings() {
                    const existingContainer = document.querySelector(".gloomrankingKEK")
                    if(existingContainer) {
                        existingContainer.remove()
                        return;
                    }
                    const gloomRankingContainer = createUIWindow("Gloom Ranking", "300px", "100px")
 
                    if(props[".gloomrankingKEK"]) {
                        gloomRankingContainer.style.left = props[".gloomrankingKEK"].left + "px" || gloomRankingContainer.style.left
                        gloomRankingContainer.style.top = props[".gloomrankingKEK"].top + "px" || gloomRankingContainer.style.top
                    }
                    makeElementDraggable2(gloomRankingContainer, ".gloomrankingKEK")
                    // Function to handle clicks on required buttons
                    function handleRequiredButtonClick(e) {
                        e.stopPropagation();
                        e.preventDefault();
 
                        const currentBtn = e.target;
                        const requiredBtns = document.querySelectorAll(".required-btn-kek");
                        if(currentBtn.classList.contains("selected")) {
                            currentBtn.classList.remove("grey", "selected")
                            currentBtn.classList.add("black")
                        } else {
                            requiredBtns.forEach((btn) => {
                                if(btn === currentBtn) {
                                    btn.classList.add("grey", "selected")
                                    btn.classList.remove("black")
                                } else {
                                    btn.classList.remove("grey", "selected")
                                    btn.classList.add("black")
                                }
                            });
                        }
                    }
                    // Function to handle clicks on optional buttons
                    function handleOptionalButtonClick(e, group) {
                        e.stopPropagation();
                        e.preventDefault();
                        // console.log("clicking")
                        const btns = document.querySelectorAll(`.optional-btn-${group}`);
                        // console.log(btns, `.optional-button-${group}`)
                        const currentBtn = e.target
                        if (group) {
                            if(currentBtn.classList.contains("selected")) {
                                currentBtn.classList.remove("grey", "selected")
                                currentBtn.classList.add("black")
                            } else {
                                btns.forEach((btn) => {
                                    if(btn === currentBtn) {
                                        btn.classList.add("grey", "selected")
                                        btn.classList.remove("black")
                                    } else {
                                        btn.classList.remove("grey", "selected")
                                        btn.classList.add("black")
                                    }
                                });
                            }
                        }
                    }
                    // Function to get the group for an optional button
                    function getGroupForOptionalButton(buttonName) {
                        for (const group in optionalButtonGroups) {
                            if (optionalButtonGroups[group].includes(buttonName)) {
                                return group;
                            }
                        }
                        return null;
                    }
 
                    // Helper function to create buttons for a group
                    function createOptionalButtonsForGroup(group) {
                        const buttonsContainer = document.createElement("div");
                        buttonsContainer.className = "optional-buttons-row";
 
                        optionalButtonGroups[group].forEach((buttonName) => {
                            const button = createButton(buttonName, (e) => handleOptionalButtonClick(e, group), "optional", group);
                            if(oldOptions.includes(button.value)) {
                                button.classList.remove("black")
                                button.classList.add("grey", "selected")
                            }
                            buttonsContainer.appendChild(button);
                        });
 
                        return buttonsContainer;
                    }
 
                    const flexContainer = document.createElement("div")
                    flexContainer.style.display = "flex"
                    flexContainer.classList.add("flex-container-kek")
                    flexContainer.style.flexDirection = "row"
 
                    const btnRowContainer = document.createElement("div");
                    btnRowContainer.className = "panel-black";
 
                    // Create label for required buttons
                    const requiredLabel = document.createElement("div");
                    requiredLabel.textContent = "Required";
                    requiredLabel.className = "btn black textprimary";
 
 
                    // Create row for required buttons
                    const requiredButtonsRow = document.createElement("div");
                    requiredButtonsRow.className = "required-buttons-row";
                    requiredButtonsRow.style.padding = "5px"
                    requiredButtonsRow.appendChild(requiredLabel)
                    requiredButtonGroup.forEach((buttonName) => {
                        const button = createButton(buttonName, (e) => handleRequiredButtonClick(e), "required");
                        if(oldOptions.includes(button.value)) {
                            button.classList.remove("black")
                            button.classList.add("grey", "selected")
                        }
                        requiredButtonsRow.appendChild(button);
                    });
                    btnRowContainer.appendChild(requiredButtonsRow);
 
                    const optionalContainer = document.createElement("div");
                    optionalContainer.className = "optional-container";
                    optionalContainer.style.display = "flex";
                    optionalContainer.style.margin = "0";
                    optionalContainer.style.padding = "5px";
                    // Create labels and rows for optional button groups
                    for (const group in optionalButtonGroups) {
                        const label = document.createElement("div");
                        label.textContent = group.charAt(0).toUpperCase() + group.slice(1);
                        label.className = "btn black textprimary";
 
                        const buttonsRow = createOptionalButtonsForGroup(group);
                        buttonsRow.insertBefore(label, buttonsRow.firstChild)
                        optionalContainer.appendChild(buttonsRow);
                    }
 
                    const submitBtnContainer = document.createElement("div")
                    submitBtnContainer.classList.add("submitBtnContainer")
                    // Submit button
                    const submitButton = createButton("Submit", (e) => handleSubmitClick(e), "submit");
                    submitButton.classList.add("submitBtnGloomRanking")
                    if(isFetchingRanking == true) {
                        submitButton.classList.add("disabled", "grey")
                        submitButton.classList.remove("black")
                        submitButton.textContent = "Fetching..."
                    }
 
                    submitBtnContainer.appendChild(submitButton)
 
                    optionalContainer.appendChild(submitBtnContainer)
 
                    btnRowContainer.appendChild(optionalContainer)
 
                    flexContainer.appendChild(btnRowContainer)
 
                    gloomRankingContainer.appendChild(flexContainer);
 
                    // Helper function to create a button
                    function createButton(value, onClick, type, group = "") {
 
                        const button = document.createElement("div");
                        button.value = value
                        button.textContent = value.charAt(0).toUpperCase() + value.slice(1);
                        if(value.toLowerCase() == "bl" || value.toLowerCase() == "vg") {
                            button.textContent = value.toUpperCase()
                        }
 
                        button.addEventListener("click", onClick);
 
                        // Add specific classes for styling and identification
                        if(type === "submit") {
                            button.className = `btn black textprimary submit-btn-kek`;
                        }
                        if(type === "optional") {
                            button.className = `btn black textsecondary optional-btn-${group}`;
                        }
                        if(type === "required") {
                            button.className = `btn black textsecondary required-btn-kek`;
                        }
 
                        return button;
                    }
 
                    // Function to handle the submit button click
                    function handleSubmitClick(e) {
                        // Gather selected optional button values
                        const optionalArgsSelected = [];
 
                        rankingOpened = true
 
                        for (const group in optionalButtonGroups) {
                            const btns = document.querySelectorAll(`.optional-btn-${group}`);
                            btns.forEach(btn => {
                                if(btn.classList.contains("selected")){
                                    optionalArgsSelected.push(btn.value)
                                }
                            });
                        }
                        let requiredArgSelected = ""
                        const reqBtns = document.querySelectorAll(".required-btn-kek")
                        for(let btn of reqBtns) {
                            if(btn.classList.contains("selected")) {
                                requiredArgSelected = btn.value
                                break
                            }
                        }
                        oldOptions = [...optionalArgsSelected, requiredArgSelected]
                        // Update the optionalArgs value based on selected buttons
                        const optionalArgs = optionalArgsSelected.length > 0 ? optionalArgsSelected.join(" ") : "none";
                        console.log("Optional Args:", optionalArgs);
                        console.log("Required Arg:", requiredArgSelected);
                        e.target.classList.add("disabled", "grey")
                        e.target.classList.remove("black")
                        e.target.textContent = "Fetching..."
                        isFetchingRanking = true
                        // Perform the API call or other actions as needed
                        fetchGloomRanking(requiredArgSelected, optionalArgs)
                            .then((data) => {
                            // Handle the API response data
                            // console.log(data);
                            updateGloomRankingGrid(data)
                            gloomRankingData = data
                            const btn = document.querySelector(".submitBtnGloomRanking")
                            if(btn) {
                                btn.classList.remove("disabled", "grey")
                                btn.classList.add("black")
                                btn.textContent = "Submit"
                            }
                            isFetchingRanking = false
                        })
                            .catch((error) => {
                            console.error(error);
                            const btn = document.querySelector(".submitBtnGloomRanking")
                            if(btn) {
                                btn.classList.remove("disabled", "grey")
                                btn.classList.add("black")
                                btn.textContent = "Submit"
                            }
                            isFetchingRanking = false
                        });
                    }
 
                    document.body.appendChild(gloomRankingContainer);
 
                    updateGloomRankingGrid(gloomRankingData)
 
                    document.body.appendChild(gloomRankingContainer)
 
                    function updateGloomRankingGrid(data) {
                        if(!data) return;
                        const existingDataGrid = document.querySelector(".gloomrankingGridKEK")
                        if(existingDataGrid) {
                            existingDataGrid.remove()
                        }
                        data = data.data
                        if(!data) return;
                        const marginVal = "2px"
                        const paddingVal = "4px"
                        delete data[0].id
                        const keys = Object.keys(data[0]);
 
                        // Create column names by capitalizing each key
                        const columnNames = keys.map(key => key.charAt(0).toUpperCase() + key.slice(1));
 
 
                        const grid = createGridContainer(columnNames, "gloomrankingGridKEK")
 
                        for(let log of data) {
 
                            for(let col of columnNames) {
                                col = col.toLowerCase()
                                let cellValue = log[col]
 
                                const cell = document.createElement("div")
                                cell.className = "btn black textsecondary personal-gloom-item"
                                if(col.toLowerCase() == "faction") {
                                    cell.classList.remove("textsecondary")
                                    cell.classList.add(`textf${cellValue}`)
                                    if(cellValue == 0) {
                                        cellValue = "VG"
                                    } else {
                                        cellValue = "BL"
                                    }
                                }
                                if(col.toLowerCase() == "name" && playerNameKEK == cellValue) {
                                    cell.classList.remove("textsecondary")
                                    cell.classList.add("textgreen")
                                }
                                if(col.toLowerCase() == "class") {
                                    const classCode = {0: 'Warrior', 1: 'Mage', 2: 'Arch', 3: 'Sham'}
                                    cellValue = classCode[cellValue]
                                }
                                cell.textContent = cellValue
                                cell.style.margin = marginVal
                                cell.style.padding = paddingVal
                                grid.appendChild(cell)
                            }
 
                        }
                        const mainContainer = document.querySelector(".gloomrankingKEK")
                        if(mainContainer) {
                            const subContainer = mainContainer.querySelector(".flex-container-kek")
                            subContainer.appendChild(grid)
                        }
                    }
                }
 
                function handlePersonalGloom() {
                    const existingContainer = document.querySelector(".gloomdataKEK")
                    if(existingContainer) {
                        existingContainer.remove()
                        return;
                    }
                    const gloomDataContainer = createUIWindow("Gloom Data", "300px", "100px")
                    if(props[".gloomdataKEK"]) {
                        gloomDataContainer.style.left = props[".gloomdataKEK"].left + "px" || gloomDataContainer.style.left
                        gloomDataContainer.style.top = props[".gloomdataKEK"].top + "px" || gloomDataContainer.style.top
                    }
                    makeElementDraggable2(gloomDataContainer, ".gloomdataKEK")
                    const refreshBtn = document.createElement("div")
                    refreshBtn.classList.add("btn", "black", "textprimary", "refreshBtnPersonalGloom")
                    refreshBtn.textContent = "Refresh"
                    refreshBtn.style.padding = "7px"
                    refreshBtn.style.margin = "5px"
                    if(isFetchingPersonal) {
                        refreshBtn.classList.remove("black")
                        refreshBtn.classList.add("disabled", "grey")
                        refreshBtn.textContent = "Refreshing..."
                    }
                    refreshBtn.addEventListener("click", () => {
                        refreshBtn.classList.remove("black")
                        refreshBtn.classList.add("disabled", "grey")
                        isFetchingPersonal = true
                        refreshBtn.textContent = "Refreshing..."
                        fetchGloomData()
                            .then(data => {
                            gloomPersonalData = data
                            updateGloomDataGrid(gloomPersonalData)
                            const btn = document.querySelector(".refreshBtnPersonalGloom")
                            if(btn) {
                                btn.classList.remove("disabled", "grey")
                                btn.classList.add("black")
                                btn.textContent = "Refresh"
                            }
                            isFetchingPersonal = false
                        })
                            .catch(err => {
                            console.log(err)
                            const btn = document.querySelector(".refreshBtnPersonalGloom")
                            if(btn) {
                                btn.classList.remove("disabled", "grey")
                                btn.classList.add("black")
                                btn.textContent = "Refresh"
                            }
                            isFetchingPersonal = false
                        })
                    })
                    refreshBtn.click()
                    gloomDataContainer.appendChild(refreshBtn)
                    // console.log(gloomPersonalData, "from inside handle personal GLoom")
 
                    document.body.appendChild(gloomDataContainer)
 
                    updateGloomDataGrid(gloomPersonalData)
 
                    function updateGloomDataGrid(data) {
                        // console.log("from update gloom grid", data)
                        const existingGrid = document.querySelector(".gloomdataGridKEK")
                        if(existingGrid) {
                            existingGrid.remove()
                        }
                        const marginVal = "3px"
                        const paddingVal = "5px"
                        // Extract keys from the data object
                        if(!data) return;
                        const keys = Object.keys(data);
 
                        // Create column names by capitalizing each key
                        const columnNames = keys.map(key => key.charAt(0).toUpperCase() + key.slice(1));
                        columnNames.push("K/D")
                        const grid = createGridContainer(columnNames)
                        grid.classList.add("gloomdataGridKEK")
                        for(let key in data) {
                            let cellValue = data[key]
                            const cell = document.createElement("div")
                            cell.className = "btn black textsecondary personal-gloom-item"
                            cell.textContent = cellValue
                            cell.style.margin = marginVal
                            cell.style.padding = paddingVal
                            grid.appendChild(cell)
                        }
                        let cellValue = (data.kills / data.deaths).toFixed(2)
                        const cellkd = document.createElement("div")
                        cellkd.className = "btn black textsecondary personal-gloom-item"
                        cellkd.textContent = cellValue
                        cellkd.style.margin = marginVal
                        cellkd.style.padding = paddingVal
                        grid.appendChild(cellkd)
 
                        const mainContainer = document.querySelector(".gloomdataKEK")
                        if(mainContainer) {
                            mainContainer.appendChild(grid)
                        }
                    }
                }
 
                // const apiUrl = "https://fast-hordes-mongo-api.vercel.app"
                const apiUrl = "https://fasthordesapimongo.onrender.com"
 
                function fetchGloomRanking(requiredArg, optionalArg = "none") {
                    const endpointUrl = `${apiUrl}/rankings/${playerNameKEK}/${requiredArg}/${optionalArg}`;
 
                    // console.log(endpointUrl)
                    return fetch(endpointUrl, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                        // console.log('Gloom Ranking Data:', data);
                        gloomRankingData = data
                        return data
                    })
                        .catch(error => {
                        console.error('Error fetching data:', error);
                        return error
                    });
                }
 
                function fetchGloomData() {
                    const endpointUrl = `${apiUrl}/info/${playerNameKEK}`;
 
                    return fetch(endpointUrl, {
                        method: 'GET',
                    })
                        .then(response => response.json())
                        .then(data => {
                        // console.log('Personal Gloom Data:', data);
                        return data
                    })
                        .catch(error => {
                        console.error('Error fetching data:', error);
                        return error
                    });
                }
 
                function fetchFriendData() {
                    const apiUrl = friendListUrl;
                    const endpointUrl = `${apiUrl}/friends/${playerNameKEK}`;
                    // console.log(endpointUrl)
                    return fetch(endpointUrl).then(response => response.json())
                }
 
                function deleteFriend(playerName, friendName) {
                    const apiUrl = friendListUrl; // Replace with your actual FastAPI app URL
 
                    const requestData = {
                        player_name: playerName,
                        friend_name: friendName,
                    };
 
                    return fetch(`${apiUrl}/remove_friend`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestData),
                    })
                        .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                        .then(data => {
                        console.log('Success:', data);
                        return data;
                    })
                        .catch(error => {
                        console.error('Error:', error);
                        throw error;
                    });
                }
 
                function addFriend(playerName, friendName) {
                    const apiUrl = friendListUrl; // Replace with your actual FastAPI app URL
 
                    const requestData = {
                        player_name: playerName,
                        friend_name: friendName,
                    };
 
                    return fetch(`${apiUrl}/add_friend`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestData),
                    })
                        .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                        .then(data => {
                        console.log('Success:', data);
                        return data;
                    })
                        .catch(error => {
                        console.error('Error:', error);
                        throw error;
                    });
                }
 
                function updatePlayerStatus(playerName, statusFlag) {
                    const apiUrl = friendListUrl // Replace with your actual FastAPI app URL
 
                    const playerData = {
                        player_name: playerName,
                        status_flag: statusFlag,
                    };
 
                    return fetch(`${apiUrl}/status`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(playerData),
                    })
                        .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                        .then(data => {
                        console.log('Success:', data);
                        return data;
                    })
                        .catch(error => {
                        console.error('Error:', error);
                        throw error;
                    });
                }
 
                updatePlayerStatus(playerNameKEK, 1)
 
                function handleFriendList() {
                    const existingContainer = document.querySelector(".friendlistKEK");
 
                    if (existingContainer) {
                        existingContainer.remove();
                        return;
                    }
 
                    const friendListContainer = createUIWindow("Friend List", "300px", "200px");
 
                    if (props[".friendlistKEK"]) {
                        friendListContainer.style.left = props[".friendlistKEK"].left + "px" || friendListContainer.style.left;
                        friendListContainer.style.top = props[".friendlistKEK"].top + "px" || friendListContainer.style.top;
                    }
                    friendListContainer.style.height = 'calc(100vh - 40vh)'; // Adjust the height as needed
                    friendListContainer.style.overflow = 'hidden';
 
                    friendListContainer.addEventListener('wheel', (event) => {
                        friendListContainer.scrollTop += event.deltaY;
                    });
                    makeElementDraggable2(friendListContainer, ".friendlistKEK");
 
                    const refreshBtn = document.createElement("div");
                    refreshBtn.classList.add("btn", "black", "textprimary", "refreshBtnFriendList");
                    refreshBtn.textContent = "Refresh";
                    refreshBtn.style.padding = "7px";
                    refreshBtn.style.margin = "5px";
 
                    if (isFetchingFriends) {
                        refreshBtn.classList.remove("black");
                        refreshBtn.classList.add("disabled", "grey");
                        refreshBtn.textContent = "Refreshing...";
                    }
 
                    refreshBtn.addEventListener("click", () => {
                        refreshBtn.classList.remove("black");
                        refreshBtn.classList.add("disabled", "grey");
                        isFetchingFriends = true;
                        refreshBtn.textContent = "Refreshing...";
 
                        fetchFriendData()
                            .then(data => {
                            friendList = data.data;
                            console.log(friendList)
                            updateFriendList(friendList);
                            const btn = document.querySelector(".refreshBtnFriendList");
 
                            if (btn) {
                                btn.classList.remove("disabled", "grey");
                                btn.classList.add("black");
                                btn.textContent = "Refresh";
                            }
 
                            isFetchingFriends = false;
                        })
                            .catch(err => {
                            console.log(err);
                            const btn = document.querySelector(".refreshBtnFriendList");
 
                            if (btn) {
                                btn.classList.remove("disabled", "grey");
                                btn.classList.add("black");
                                btn.textContent = "Refresh";
                            }
 
                            isFetchingFriends = false;
                        });
                    });
                    refreshBtn.click()
 
                    const addContainer = document.createElement("div");
                    addContainer.style.display = "flex"
                    addContainer.style.padding = "7px"
                    addContainer.style.margin = "5px"
 
                    const friendInput = document.createElement("input");
                    friendInput.type = "text";
                    friendInput.placeholder = "Friend Name";
                    friendInput.style.arginRight = "5px"
 
                    const addButton = document.createElement("div");
                    addButton.classList.add("btn", "black", "textsecondary");
                    addButton.textContent = "Add Friend";
 
                    addButton.addEventListener("click", () => {
                        const friendName = friendInput.value.trim();
                        const oldPlaceholder = friendInput.placeholder
 
                        if (friendName.length > 0) {
                            // Call addFriend function with playerNameKEK and friendName
                            addFriend(playerNameKEK, friendName)
                                .then(() => {
                                // Optionally do something after successful friend addition
                                console.log(`Friend ${friendName} added successfully`);
                                refreshBtn.click()
                            })
                                .catch(error => {
                                // Handle error if needed
                                console.error('Error adding friend:', error);
                            });
                        } else {
                            friendInput.placeholder = "Enter Something!"
                            setTimeout(() => {
                                friendInput.placeholder = oldPlaceholder
                            }, 500)
                        }
                        friendInput.textContent = ""
                    });
 
                    friendInput.style.flex = 1
 
                    addContainer.appendChild(friendInput);
                    addContainer.appendChild(addButton);
 
                    friendListContainer.appendChild(refreshBtn);
                    friendListContainer.appendChild(addContainer);
                    document.body.appendChild(friendListContainer);
                    // console.log(friendList)
                    updateFriendList(friendList);
 
 
                }
 
                function updateFriendList(data) {
                    if(!data) return
                    const existingList = document.querySelector(".friendListGridKEK");
 
                    if (existingList) {
                        existingList.remove();
                    }
 
                    const marginVal = "2px";
                    const paddingVal = "4px";
                    const columnNames = ["Friend Name", "Status", "Settings"];
                    const grid = createGridContainer(columnNames);
                    grid.classList.add("friendListGridKEK");
 
                    for (const friend of data) {
                        const friendName = friend.friend_name;
                        const friendStatus = friend.status;
 
                        const cell = document.createElement("div");
                        cell.className = "btn black friend-list-item";
                        cell.textContent = `${friendName}`;
                        cell.style.margin = marginVal;
                        cell.style.padding = paddingVal;
 
                        const cellStatus = document.createElement("div");
                        cellStatus.className = "btn black friend-list-item";
                        cellStatus.textContent = `${friendStatus === 1 ? 'Online' : 'Offline'}`;
                        cellStatus.style.margin = marginVal;
                        cellStatus.style.padding = paddingVal;
 
                        if(friendStatus == 1) {
                            cellStatus.classList.add("textgreen")
                            cell.classList.add("textgreen")
                        } else {
                            cellStatus.classList.add("textgrey")
                            cell.classList.add("textgrey")
                        }
 
                        const settings = document.createElement("div")
                        settings.textContent = "⚙️"
                        settings.style.textAlign = "center"
                        settings.classList.add("btn", "black", "friend-list-item")
                        settings.style.margin = marginVal;
                        settings.style.padding = paddingVal;
 
                        settings.addEventListener('click', function (event) {
                            event.stopPropagation()
                            const friendMenu = document.querySelector(".friend-menu")
                            if(friendMenu) {
                                friendMenu.remove()
                            }
                            // Calculate the position for the menu
                            const rect = event.target.getBoundingClientRect();
                            const menuTop = rect.top + window.scrollY;
                            const menuLeft = rect.left + rect.width + window.scrollX;
 
                            // Create the context menu
                            const menu = document.createElement("div");
                            menu.classList.add("panel", "context", "border", "grey", "kek-ui-menu", "friend-menu");
                            menu.style.position = "absolute";
                            menu.style.top = `${menuTop}px`;
                            menu.style.left = `${menuLeft + 10}px`;
 
                            // Add choices to the context menu
                            menu.appendChild(createChoice("Whisper"));
                            menu.appendChild(createChoice("Party Invite"));
                            menu.appendChild(createChoice("Delete"));
 
                            function createChoice(textContent) {
                                const choiceDiv = document.createElement("div");
                                choiceDiv.classList.add("choice");
                                choiceDiv.textContent = textContent;
                                const chatInput = document.querySelector(".chatsection input");
                                const chatInputContainer = document.querySelector("#chatinput")
                                choiceDiv.addEventListener("click", (e) => {
                                    e.stopPropagation()
                                    const friendMenu = document.querySelector(".friend-menu")
                                    if(friendMenu) {
                                        friendMenu.remove()
                                    }
                                    if(textContent.toLowerCase() == "delete") {
                                        deleteFriend(playerNameKEK, friendName)
                                            .then(() => {
                                            const refBtn = document.querySelector(".refreshBtnFriendList");
                                            if (refBtn) {
                                                refBtn.click()
                                            }
                                        })
                                            .catch(error => {
                                            // Handle error, if needed
                                            console.error('Error deleting friend:', error);
                                        });
                                    } else if (textContent.toLowerCase() == "party invite") {
                                        document.body.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                                        if (chatInput) {
                                            chatInput.value = `/partyinvite `;
                                            // Dispatch the Enter key press event
                                            chatInput.dispatchEvent(new InputEvent('input', { bubbles: true }));
                                            chatInput.value = `${friendName}`
 
                                            chatInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                                        }
                                    } else if (textContent.toLowerCase() == "whisper") {
                                        document.body.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                                        if (chatInput) {
                                            chatInput.value = `/${friendName} `;
                                            // Dispatch the Space key press event
                                            chatInput.dispatchEvent(new InputEvent('input', { bubbles: true }));
                                        }
                                    }
                                })
 
                                return choiceDiv;
                            }
                            // Add the context menu to the document body or another container
                            document.body.appendChild(menu);
                        });
 
                        grid.appendChild(cell);
                        grid.appendChild(cellStatus);
                        grid.appendChild(settings);
                    }
 
                    const mainContainer = document.querySelector(".friendlistKEK");
 
                    if (mainContainer) {
                        mainContainer.appendChild(grid);
                    }
                }
                // Function to update button class based on buffsHideIrrelevant value
                function updateShowBuffsBtn(button) {
                    const buffsHideIrrelevant = localStorage.getItem('buffsHideIrrelevant') === 'true';
                    if (buffsHideIrrelevant) {
                        button.classList.remove('textsecondary');
                        button.classList.add('textgreen');
                        button.textContent = "Your Buffs"
                    } else {
                        button.classList.remove('textgreen');
                        button.classList.add('textsecondary');
                        button.textContent = "All Buffs"
 
                    }
                }
                // Function to toggle buffsHideIrrelevant in localStorage
                function toggleBuffsHideIrrelevant(event) {
 
                    const currentSetting = localStorage.getItem('buffsHideIrrelevant');
                    const newSetting = currentSetting === 'true' ? 'false' : 'true';
 
                    // Save the newSetting in localStorage
                    localStorage.setItem('buffsHideIrrelevant', newSetting);
                    updateShowBuffsBtn(event.target)
                    location.reload()
                }
 
                function handleBtnBar() {
                    const btnBar = document.querySelector(".btnbar.svelte-133q4bd")
                    const btnBarTopLeft = document.querySelector(".btnbar")
                    const btnBarKEK = document.createElement("div")
                    if(btnBar && !btnBar.classList.contains("btnBarModifiedKEK")) {
                        btnBarKEK.classList.add("btnbarKEK")
                        btnBarKEK.style.display = "flex"
                        btnBarKEK.style.float = "right"
                        btnBarKEK.style.clear = "right"
                        btnBarKEK.style.margin = "5px"
                        btnBar.classList.add("btnBarModifiedKEK")
 
                        // Create L button
                        const lockBtn = createBtn("Lock🔒", "Lock UI");
                        btnBarKEK.appendChild(lockBtn);
 
                        // Create P button
                        const personalGloomBtn = createBtn("👹", "Gloom Personal");
                        btnBarKEK.appendChild(personalGloomBtn);
 
                        // Create R button
                        const rankingBtn = createBtn("📊", "Gloom Rankings");
                        btnBarKEK.appendChild(rankingBtn)
 
                        const friendBtn = createBtn("🤝", "Friends")
                        btnBarKEK.appendChild(friendBtn)
 
                        btnBar.parentNode.appendChild(btnBarKEK)
 
                        const whispersBtn = createBtn("Whispers", "Whispers")
                        btnBarTopLeft.appendChild(whispersBtn)
 
                        const showYourBuffsBtn = createBtn("Your Buffs Only", "Show Your Buffs Only")
                        btnBarTopLeft.appendChild(showYourBuffsBtn)
                    } else {
                        setTimeout(handleBtnBar, 1)
                    }
 
                    function createBtn(text, title) {
                        const button = document.createElement("div");
                        button.className = "btn border black textsecondary";
                        button.textContent = text;
                        button.style.paddingLeft = "3px"
                        button.style.paddingRight = "3px"
                        button.style.margin = "2px"
                        if(title == "Lock UI") {
                            button.classList.add("lockUIKEK")
                            if(props["UILock"] == true) {
                                button.classList.add("textgreen")
                                button.classList.remove("textsecondary")
                            } else {
                                button.classList.remove("textgreen")
                                button.classList.add("textsecondary")
                            }
                            button.addEventListener("click", () => {
                                // console.log("clicking lock btn")
                                uiLockToggle()
                            })
                        }
                        if(title == "Gloom Rankings") {
                            button.addEventListener("click", handleGloomRankings)
                        }
                        if(title == "Gloom Personal") {
                            button.addEventListener("click", handlePersonalGloom)
                        }
                        if(title == "Friends") {
                            button.addEventListener("click", handleFriendList)
                        }
                        if(title == "Show Your Buffs Only") {
                            const buffsHideIrrelevant = localStorage.getItem('buffsHideIrrelevant') === 'true';
                            updateShowBuffsBtn(button)
                            button.addEventListener("click", toggleBuffsHideIrrelevant)
                        }
                        if(title == "Whispers") {
                            button.addEventListener("click", handleWhisperLogs)
                        }
                        // Add any additional styling or event listeners as needed
                        button.addEventListener("mouseenter", function() {
                            if(btnBarKEK) {
                                const displayBtn = document.createElement("div")
                                displayBtn.classList.add("btn", "black", "displayBtnKEK", "border", "textsecondary")
                                displayBtn.textContent = title
                                displayBtn.style.paddingLeft = "3px"
                                displayBtn.style.paddingRight = "3px"
                                displayBtn.style.margin = "2px"
                                btnBarKEK.insertBefore(displayBtn, btnBarKEK.firstChild)
                            }
                        })
 
                        button.addEventListener("mouseleave", function() {
                            if(btnBarKEK) {
                                const displayBtn = btnBarKEK.querySelector(".displayBtnKEK")
                                if(displayBtn) {
                                    displayBtn.remove()
                                }
                            }
                        })
                        return button;
                    }
                }
                // Function to calculate the total number of seen for a sender
                function calculateTotalNotSeen(logs) {
                    // Calculate the total number of not seen (where log.seen is equal to 0)
                    const totalNotSeen = logs.reduce((totalNotSeen, log) => totalNotSeen + (log.seen === 0 ? 1 : 0), 0);
                    // console.log(totalNotSeen, logs);
                    return totalNotSeen;
                }
                // Function to fetch all sender names from whisper logs sorted by total number of seen
                function fetchAllSenderNames() {
                    // Retrieve whisper logs from localStorage
                    let whisperLogs = localStorage.getItem('whisperLogsKEK');
 
                    // Parse the whisper logs JSON string
                    whisperLogs = whisperLogs ? JSON.parse(whisperLogs) : {};
 
                    // Get an array of sender names
                    const senderNames = Object.keys(whisperLogs);
 
                    // Sort sender names based on the total number of seen
                    senderNames.sort((a, b) => {
                        const totalSeenA = whisperLogs[a] ? calculateTotalNotSeen(whisperLogs[a]) : 0;
                        const totalSeenB = whisperLogs[b] ? calculateTotalNotSeen(whisperLogs[b]) : 0;
 
                        return totalSeenB - totalSeenA;
                    });
 
                    const senderObj = {}
                    const newWhisperLogs = {}
                    for(let name of senderNames) {
                        newWhisperLogs[name] = whisperLogs[name]
                    }
                    // console.log(whisperLogs, newWhisperLogs)
                    localStorage.setItem('whisperLogsKEK', JSON.stringify(newWhisperLogs));
 
                    for(let name of senderNames) {
                        senderObj[name] = whisperLogs[name][whisperLogs[name].length - 1].seen
                    }
                    // Return the sorted array of sender names
                    // console.log(senderNames)
                    return senderObj;
                }
                // addWhisperLog("from", "testingthing", "hey there new here", playerNameKEK)
                // Function to update the logs for a given sender
                function updateWhisperLogs(senderName, logs) {
                    // Retrieve existing whisper logs from localStorage
                    let whisperLogs = JSON.parse(localStorage.getItem('whisperLogsKEK')) || {};
 
                    // Update the logs for the specified sender
                    whisperLogs[senderName] = logs;
 
                    // Save the updated whisper logs back to localStorage
                    localStorage.setItem('whisperLogsKEK', JSON.stringify(whisperLogs));
                }
 
                function addWhisperLog(type, senderName, content, receiverName) {
                    // Retrieve existing whisper logs from localStorage
                    let whisperLogs = JSON.parse(localStorage.getItem('whisperLogsKEK')) || {};
 
                    // Create a new log entry
                    const logEntry = { content, type, receiver: receiverName, seen: 0 };
 
                    // Check if the sender already has logs
                    if (whisperLogs[senderName]) {
                        // Append the new log entry to the existing logs
                        whisperLogs[senderName].push(logEntry);
 
                        // Check if the array length exceeds the maximum allowed
                        const maxLogsAllowed = 50; // Adjust this value as needed
                        if (whisperLogs[senderName].length > maxLogsAllowed) {
                            // Remove the oldest log (first in the array)
                            whisperLogs[senderName].shift();
                        }
                    } else {
                        // Create a new array for the sender and add the log entry
                        whisperLogs[senderName] = [logEntry];
                    }
 
                    // Save the updated whisper logs back to localStorage
                    localStorage.setItem('whisperLogsKEK', JSON.stringify(whisperLogs));
                }
                // Function to fetch all logs for a given sender
                function fetchWhisperLogs(senderName) {
                    // Retrieve existing whisper logs from localStorage
                    let whisperLogs = JSON.parse(localStorage.getItem('whisperLogsKEK')) || {};
 
                    // Check if logs exist for the specified sender
                    if (whisperLogs[senderName]) {
                        // Return the logs for the sender
                        return whisperLogs[senderName];
                    } else {
                        // Return an empty array if no logs found for the sender
                        return [];
                    }
                }
                // Function to handle whisper logs
                function handleWhisperLogs() {
                    // Fetch all sender names from whisper logs
                    const existing = document.querySelector(".whispersKEK")
                    if(existing) {
                        existing.remove()
                        return;
                    }
                    let senderObj = fetchAllSenderNames();
                    let senderNames = Object.keys(senderObj)
                    // Create a new window
                    const window = createUIWindow('Whispers');
 
                    if(props[".whispersKEK"]) {
                        window.style.top = props[".whispersKEK"].top + "px" || window.style.top
                        window.style.left = props[".whispersKEK"].left + "px" || window.style.left
                    }
 
                    makeElementDraggable2(window, ".whispersKEK")
                    const titleFrame = window.querySelector(".titleframe")
                    titleFrame.style.borderBottom = "2px solid #393636"
 
                    const senderContainer = document.createElement("div")
                    senderContainer.classList.add("senderContainerKEK")
                    senderContainer.style.display = "flex"
                    senderContainer.style.flexDirection = "column"
 
                    const whisperContainer = document.createElement("div")
                    whisperContainer.style.display = "flex"
                    whisperContainer.style.flexDirection = "column"
 
                    whisperContainer.classList.add("whisperContainerKEK")
 
                    let senderMaxHeight = 400
                    // Create a div for sender names list
                    const senderNamesDiv = document.createElement('div');
                    senderNamesDiv.classList.add("senderNamesListContainerKEK")
                    senderNamesDiv.style.overflow = 'hidden';
                    senderNamesDiv.style.height = senderMaxHeight + "px"
                    // Add event listeners to handle scrolling
                    senderNamesDiv.addEventListener('wheel', (event) => {
                        // Adjust the scrollTop property based on your scrolling logic
                        senderNamesDiv.scrollTop += event.deltaY;
                    });
                    // Create an unordered list for sender names
                    const senderNamesList = document.createElement('div');
                    senderNamesList.classList.add("senderNamesListKEK")
                    senderNamesList.style.display = "flex"
                    senderNamesList.style.flexDirection = "column"
 
                    // Add sender names to the list
                    senderNames.forEach(senderName => {
                        const listItem = document.createElement('div');
                        const hasSeen = senderObj[senderName]
                        if(hasSeen == 0) {
                            listItem.textContent = senderName + " (new)";
                        } else {
                            listItem.textContent = senderName;
                        }
                        listItem.classList.add("btn", "black", "textsecondary", "border")
                        listItem.addEventListener('click', (e) => {
                            handleSenderNameClick(e, senderName)
                        });
                        listItem.style.padding = "10px"
                        senderNamesList.appendChild(listItem);
                    });
                    // Create an input for sorting sender names
                    const sortInput = document.createElement('input');
                    sortInput.setAttribute('placeholder', 'Search Names...');
                    sortInput.addEventListener('input', handleSortInput);
                    sortInput.style.padding = "10px"
                    // Append sender names list to the div
                    senderNamesDiv.appendChild(senderNamesList);
 
                    // Create a div for whisper logs
                    const whisperLogsDiv = document.createElement('div');
                    let whisperWidth = 600
                    let whisperMaxHeight = 400
                    whisperLogsDiv.classList.add("whisperLogsListContainerKEK")
                    whisperLogsDiv.style.height = whisperMaxHeight + "px"
                    whisperLogsDiv.style.overflow = 'hidden';
 
                    // Add event listeners to handle scrolling
                    whisperLogsDiv.addEventListener('wheel', (event) => {
                        // Adjust the scrollTop property based on your scrolling logic
                        whisperLogsDiv.scrollTop += event.deltaY;
                    });
                    // Create an unordered list for whisper logs
 
                    const whisperLogsList = document.createElement('div');
                    whisperLogsList.style.width = whisperWidth + "px"
                    whisperLogsList.id = "whisperLogsList"
 
                    // Create an input for sending whispers
                    const sendInput = document.createElement('input');
                    sendInput.setAttribute('placeholder', 'Type your message...');
                    sendInput.addEventListener('keypress', handleSendWhisperInput);
                    sendInput.style.padding = "10px"
                    sendInput.style.width = whisperWidth + "px"
                    sendInput.addEventListener('input', chatInputListener);
 
 
                    sortInput.classList.add("btn", "black", "textsecondary")
                    sendInput.classList.add("btn", "black", "textsecondary")
                    // Append whisper logs list to the div
                    whisperLogsDiv.appendChild(whisperLogsList);
 
                    const flexContainer = document.createElement("div")
                    flexContainer.style.display = "flex"
                    // Append whisper logs div to the window
                    senderContainer.appendChild(sortInput);
                    senderContainer.appendChild(senderNamesDiv);
 
                    whisperContainer.appendChild(whisperLogsDiv);
                    whisperContainer.appendChild(sendInput);
 
                    flexContainer.appendChild(senderContainer);
                    flexContainer.appendChild(whisperContainer);
 
                    window.appendChild(flexContainer)
                    document.body.appendChild(window)
                }
 
                function handleSenderNameClick(e, senderName) {
                    // console.log(e.target, senderName)
                    const titleEle = document.querySelector(".whispersKEK .title")
                    e.stopPropagation()
                    const clickedItem = e.target
                    currentSenderName = senderName
                    displayWhisperLogs(senderName)
                    if(titleEle) {
                        titleEle.style.width = "300px"
                        titleEle.textContent = "Whispering " + currentSenderName
                    }
                    // Remove gray class and add black class for all sender name items
                    const senderNamesList = document.querySelectorAll('.senderNamesListKEK .btn');
                    senderNamesList.forEach(item => {
                        item.classList.remove('grey');
                        item.classList.add('black');
                    });
                    updateSenderNameList()
                }
                // Function to display whisper logs for a selected sender
                function displayWhisperLogs(senderName) {
                    // Fetch whisper logs for the selected sender
                    let logs = fetchWhisperLogs(senderName);
 
                    // Get the whisper logs list element
                    const whisperLogsList = document.querySelector('#whisperLogsList');
                    // Clear existing logs
                    whisperLogsList.innerHTML = '';
 
                    // Add logs to the list
                    logs.forEach(log => {
                        const listItem = document.createElement('div');
                        listItem.classList.add("btn", "black", "textsecondary");
 
                        // Set text alignment based on the log type
                        listItem.style.margin = "5px";
                        // Set maxLettersPerLine only if content length exceeds the threshold
 
                        const threshold = 300
                        if(log.content.trim().length > 40) {
                            listItem.style.width = `300px`;
                        } else {
                            listItem.style.width = `fit-content`;
                        }
                        // Calculate dynamic width based on the content length and max letters per line
 
                        listItem.style.whiteSpace = 'normal';
                        listItem.style.padding = "7px"
                        listItem.textContent = `${log.content}`;
 
                        // Set flex alignment based on the log type
                        listItem.style.marginLeft = log.type === 'from' ? '10' : 'auto';
                        listItem.style.marginRight = log.type === 'to' ? '10' : 'auto';
                        whisperLogsList.appendChild(listItem);
                        log.seen = 1;
                    });
                    whisperLogsList.parentNode.scrollTop = whisperLogsList.parentNode.scrollHeight
                    // Save the updated logs back to localStorage
                    updateWhisperLogs(senderName, logs);
                }
                // Function to update the sender name list
                function updateSenderNameList(updatedSenderObj) {
                    let senderObj, senderNames
                    const senderNamesListContainer = document.querySelector('.senderNamesListKEK');
                    if(!senderNamesListContainer) return;
                    if(!updatedSenderObj) {
                         senderObj = fetchAllSenderNames()
                    } else {
                        senderObj = updatedSenderObj
                    }
 
                    senderNames = Object.keys(senderObj)
 
                    // Get the sender names list container
                    // Remove the existing sender name items
                    senderNamesListContainer.innerHTML = '';
 
                    // Add sender names to the list
                    senderNames.forEach(senderName => {
                        const listItem = document.createElement('div');
                        const hasSeen = senderObj[senderName]
                        if(hasSeen == 0) {
                            listItem.textContent = senderName + " (new)";
                        } else {
                            listItem.textContent = senderName;
                        }
                        listItem.classList.add('btn', 'black', 'textsecondary', 'border');
                        // console.log(senderName, currentSenderName)
                        if(senderName == currentSenderName) {
                            listItem.classList.remove("black")
                            listItem.classList.add("grey")
                        }
                        listItem.addEventListener('click', (e) => {
                            handleSenderNameClick(e, senderName)
                        });
                        listItem.style.padding = '10px';
                        senderNamesListContainer.appendChild(listItem);
                    });
                }
                // Function to handle input for sorting sender names
                function handleSortInput(event) {
                    let senderObj = fetchAllSenderNames()
                    let senderNames = Object.keys(senderObj)
                    const searchTerm = event.target.value.toLowerCase();
                    const filteredSenderNames = senderNames.filter(senderName => senderName.toLowerCase().includes(searchTerm));
                    const newSenderObj = {}
                    for(let name of filteredSenderNames) {
                        newSenderObj[name] = senderObj[name]
                    }
                    updateSenderNameList(newSenderObj);
                }
                // Function to handle input for sending whispers
                function handleSendWhisperInput(event) {
                    if (event.key === 'Enter') {
                        // Call your sendWhisper function here
                        sendWhisper(event.target.value);
                        // Clear the input after pressing Enter
                        event.target.value = '';
                    }
                }
 
                function sendWhisper(content) {
                    if(currentSenderName == "") {
                        return
                    }
                    // console.log("Whispering", currentSenderName)
                    const chatInput = document.querySelector(".chatsection input");
 
                    document.body.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                    if (chatInput) {
                        chatInput.value = `/${currentSenderName} `;
                        // Dispatch the Enter key press event
                        chatInput.dispatchEvent(new InputEvent('input', { bubbles: true }));
                        chatInput.value = `${content}`
 
                        chatInput.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, keyCode: 13 }));
                    }
                }
 
                function runAll() {
                    // console.log("running all")
                    handleSkillbar()
                    handlePartyframes()
                    handlePartyframesMutations()
                    handleChatPanel()
                    handleChatInput()
                    handleExpBar()
                    handleBtnBar()
                    handleBagMenu()
                    handleTargetFrames()
                    refreshPartyframes()
                    handleTargetframesMutations()
                    handleSkills()
                    handleStats()
                }
 
                document.addEventListener("contextmenu", function(e) {
                    // console.log(e.target)
                    setTimeout(() => {
                        const menu = document.querySelector(".panel.context")
                        if(menu && !menu.classList.contains("kek-ui-menu")) {
                            menu.classList.add("kek-ui-menu")
                            const playerNameEle = menu.querySelector(".choice.disabled")
                            if(playerNameEle) {
                                const playerName = playerNameEle.textContent.trim()
                                // console.log("right clicked on " + playerName)
 
                                const blockDiv = document.createElement("div")
                                blockDiv.classList.add("choice")
                                blockDiv.textContent = "Block"
                                menu.appendChild(blockDiv)
                                blockDiv.addEventListener("click", () => {
                                    console.log("blocking " + playerName)
                                    blockPlayer(playerName)
                                    menu.remove()
                                })
                            }
                        }
                    }, 1)
                })
 
                document.addEventListener("click", function(e) {
                    const friendMenu = document.querySelector(".friend-menu")
                    if(friendMenu) {
                        friendMenu.remove()
                    }
                })
 
                document.addEventListener('keydown', function (event) {
                    const focusedElement = document.activeElement;
 
                    // Check if the focused element is an input field
                    if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                        return;
                    }
                    const runeTrackerKey = keyBindsKEK["Rune Tracker"]
                    if (event.key === runeTrackerKey.toUpperCase() || event.key === runeTrackerKey) {
                        handleRuneTrackerUI();
                    }
                });
 
                document.addEventListener('keydown', function (event) {
                    const focusedElement = document.activeElement;
 
                    // Check if the focused element is an input field
                    if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                        return;
                    }
                    const emojiKey = keyBindsKEK["Emoji"]
                    if (event.key === emojiKey.toUpperCase() || event.key === emojiKey) {
                        generateEmojiUI();
                    }
                });
 
                document.addEventListener('keydown', function (event) {
                    const focusedElement = document.activeElement;
 
                    // Check if the focused element is an input field
                    if (focusedElement.tagName === 'INPUT' || focusedElement.tagName === 'TEXTAREA') {
                        return;
                    }
                    const blockedPlayersKey = keyBindsKEK["Blocked Players"]
                    if (event.key === blockedPlayersKey.toUpperCase() || event.key === blockedPlayersKey) {
                        generateBlockedPlayerUI();
                    }
                });
                // Wait for the page to load
                handleDOMMutations()
                handleSkillbar()
                handleExpBar()
                handleBtnBar()
                handlePartyframes()
                handleChatPanel()
                handleChatInput()
                handleTargetFrames()
                refreshPartyframes()
                generateMenuForUI()
                handleTargetframesMutations()
                handlePartyframesMutations()
                handleGloomTimers()
                handleBagMenu()
                handleSkills()
                handleStats()
 
            } else {
                setTimeout(init, 1)
            }
        }
        else {
            setTimeout(init, 1)
        }
    }
 
    init()
})();
