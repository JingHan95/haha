
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
module.exports = calculatePosition;

