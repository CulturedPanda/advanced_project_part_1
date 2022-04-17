/**
 * The utils class.
 * For when you have a method that just doesn't belong anywhere else but something as general as utils.
 */
class Utils{
    /**
     * Scrolls to the bottom of an element
     * @param id The element's id.
     */
    static scrollToBottom = (id)=>{
        const element = document.getElementById(id);
        element.scrollTop = element.scrollHeight;
    }
}

export default Utils;