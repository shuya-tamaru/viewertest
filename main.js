const changeIconLeftToRight = function(icon){
    icon.classList.remove("fa-caret-left");
    icon.classList.add("fa-caret-right");
};

const changeIconRightToLeft = function(icon){
    icon.classList.remove("fa-caret-right");
    icon.classList.add("fa-caret-left");
};

const displayToggle = function(areaElement){
    if(areaElement.style.display == 'none'){
        areaElement.style.display = 'block';
        console.log(1);
    }else{
        areaElement.style.display = 'none';
        console.log(2);
    }
};

const dataAreaSlideButton = document.getElementById("dataTableHide");
dataAreaSlideButton.onclick = function() {
    const commentArea = document.getElementById("commentArea");
    const commentAreaElement = window.getComputedStyle(document.getElementById("commentArea"));
    const commentAreaWidth = commentAreaElement.getPropertyValue('--commentAreaWidth');
    const commentIcon = document.getElementById("commentIcon");

    const dataTableArea = document.getElementById("dataTableArea");
    const dataAreaElement = window.getComputedStyle(document.getElementById("dataTableArea"));
    const dataAreaWidth = dataAreaElement.getPropertyValue('--dataTableAreaWidth');
    const dataIcon = document.getElementById("dataIcon");

    let value = "calc(100vw - 24px)";
    if(dataAreaWidth == "0px" && commentAreaWidth == "0px"){
        document.documentElement.style.setProperty('--dataTableAreaWidth',value);
        changeIconRightToLeft(dataIcon);
        displayToggle(dataTableArea);
    }else if(dataAreaWidth == "0px" && commentAreaWidth != "0px"){
        document.documentElement.style.setProperty('--commentAreaWidth','0px');
        document.documentElement.style.setProperty('--dataTableAreaWidth',value);
        changeIconRightToLeft(dataIcon);
        changeIconLeftToRight(commentIcon);
        displayToggle(dataTableArea);
        displayToggle(commentArea);
    }else{
        document.documentElement.style.setProperty('--dataTableAreaWidth','0px');
        changeIconLeftToRight(dataIcon);
        displayToggle(dataTableArea);
    }
};

const commentHideButton = document.getElementById("commentHide");
commentHideButton.onclick = function() {
    const commentAreaElement = window.getComputedStyle(document.getElementById("commentArea"));
    const commentAreaWidth = commentAreaElement.getPropertyValue('--commentAreaWidth');
    const commentIcon = document.getElementById("commentIcon");

    const dataAreaElement = window.getComputedStyle(document.getElementById("dataTableArea"));
    const dataAreaWidth = dataAreaElement.getPropertyValue('--dataTableAreaWidth');
    const dataIcon = document.getElementById("dataIcon");


    if(commentAreaWidth == "0px" && dataAreaWidth == "0px"){
        document.documentElement.style.setProperty('--commentAreaWidth','300px');
        changeIconRightToLeft(commentIcon);
        displayToggle(commentArea);
    }else if(commentAreaWidth == "0px" && dataAreaWidth != "0px"){
        document.documentElement.style.setProperty('--dataTableAreaWidth','0px');
        document.documentElement.style.setProperty('--commentAreaWidth','300px');
        changeIconRightToLeft(commentIcon);
        changeIconLeftToRight(dataIcon);
        displayToggle(dataTableArea);
        displayToggle(commentArea);
    }else{
        document.documentElement.style.setProperty('--commentAreaWidth','0px');
        changeIconLeftToRight(commentIcon);
        displayToggle(commentArea);
    }
};