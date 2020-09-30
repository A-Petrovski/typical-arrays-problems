exports.min = function min (array = []) {
    if (!!!array || array.length > 1) {
        return array.sort((a, b) => a - b ).shift();
    } else
    {
        return 0;
    }
}

exports.max = function max (array = []) {
    if (!!!array || array.length > 1) {
        return array.sort((a, b) => a - b ).pop();
    } else
    {
        return 0;
    }  
  }

exports.avg = function avg (array) {
if (!!array) 
  if (array.length > 1) {
    return array.reduce((sum, current) => sum + current, 0)/array.length; 
  } else
  {
    return 0;
  }
  return 0;
}
