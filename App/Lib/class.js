export function hasClass(obj,cls){
    let result = obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')); 
    return result==null?false:true;
}

export function addClass(obj,cls){
    if (!hasClass(obj, cls)) obj.className += " " + cls; 
}

export function removeClass(obj,cls){
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, '');  
    } 
}