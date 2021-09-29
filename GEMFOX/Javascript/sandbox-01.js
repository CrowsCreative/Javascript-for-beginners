//beginner friendly level:
//============

function removeProperty(obj, prop)
{
    prop = String(prop);
    const keys   = Object.keys(obj);
    const result = keys.find(p => p === prop);
    if(result)
    {
        const foundedProp = obj[prop];
        delete obj[prop];
        return foundedProp;
    }
    
    return undefined;
}

//Intermediate level:
//===================
//Using this function to remove property from any created object:
/* 
To acheive this you need:
- learn differences between arrow function and regular declared function
- learn about the this keyword
- learn about javascript oop ES6 and opp under the hood (old version)
- learn inheritance (oop concept)
*/

Object.prototype.remove = function (prop)
{
    prop = String(prop);
    const keys   = Object.keys(this);
    const result = keys.find(p => p === prop);
    if(result)
    {
        const foundedProp = this[prop];
        delete this[prop];
        return foundedProp;
    }
    
    return undefined;
}



