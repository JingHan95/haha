
function calculatePosition(objElement, strOffset)
{
    var iOffset = 0;

    if (objElement.offsetParent)
    {
        do 
        {
            iOffset += objElement[strOffset];
            objElement = objElement.offsetParent;
        } while (objElement);
    }

    return iOffset;
}


// Get a reference object
var objReference = document.getElementById('refobject');
// Get the object to be aligned
var objAlign = document.getElementById('lineup');

objAlign.style.position = 'absolute';
objAlign.style.left = calculatePosition(objReference, 'offsetLeft') + 'px';
objAlign.style.top = calculatePosition(objReference, 'offsetTop') + objReference.offsetHeight + 'px'; 
