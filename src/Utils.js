class Utils{
     static onEnter = (e, handler)=>{
        if (e.key === "Enter"){
            handler();
        }
    }
}

export default Utils;