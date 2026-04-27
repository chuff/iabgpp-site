export function includeVendors(elementPrefix) {
  let availableVendorsElement = document.getElementById(elementPrefix + "-available");
  let includedVendorsElement = document.getElementById(elementPrefix + "-included");

  let removes = [];
  let adds = [];
  for(let i=0; i<availableVendorsElement.options.length; i++) {
    if(availableVendorsElement.options[i].selected === true) {
      removes.push(i);
      adds.push({
        label: availableVendorsElement.options[i].innerHTML,
        value: availableVendorsElement.options[i].value
      });
    }
  }

  for(let i=0; i<includedVendorsElement.options.length; i++) {
    adds.push({
      label: includedVendorsElement.options[i].innerHTML,
      value: includedVendorsElement.options[i].value
    });
  }

  adds.sort(function (a, b) {return a.value - b.value;});

  for(let i=0; i<adds.length; i++) {
    includedVendorsElement.options[i] = new Option(adds[i].label, adds[i].value);
  }

  for(let i=removes.length-1; i>=0; i--) {
    availableVendorsElement.remove(removes[i]);
  }
}

export function includeAllVendors(elementPrefix) {
  let availableVendorsElement = document.getElementById(elementPrefix + "-available");
  let includedVendorsElement = document.getElementById(elementPrefix + "-included");

  let removes = [];
  let adds = [];
  for(let i=0; i<availableVendorsElement.options.length; i++) {
    removes.push(i);
    adds.push({
      label: availableVendorsElement.options[i].innerHTML,
      value: availableVendorsElement.options[i].value
    });
  }

  for(let i=0; i<includedVendorsElement.options.length; i++) {
    adds.push({
      label: includedVendorsElement.options[i].innerHTML,
      value: includedVendorsElement.options[i].value
    });
  }

  adds.sort(function (a, b) {return a.value - b.value;});

  for(let i=0; i<adds.length; i++) {
    includedVendorsElement.options[i] = new Option(adds[i].label, adds[i].value);
  }

  for(let i=removes.length-1; i>=0; i--) {
    availableVendorsElement.remove(removes[i]);
  }
}

export function removeVendors(elementPrefix) {
  let availableVendorsElement = document.getElementById(elementPrefix + "-available");
  let includedVendorsElement = document.getElementById(elementPrefix + "-included");

  let removes = [];
  let adds = [];
  for(let i=0; i<includedVendorsElement.options.length; i++) {
    if(includedVendorsElement.options[i].selected === true) {
      removes.push(i);
      adds.push({
        label: includedVendorsElement.options[i].innerHTML,
        value: includedVendorsElement.options[i].value
      });
    }
  }

  for(let i=0; i<availableVendorsElement.options.length; i++) {
    adds.push({
      label: availableVendorsElement.options[i].innerHTML,
      value: availableVendorsElement.options[i].value
    });
  }

  adds.sort(function (a, b) {return a.value - b.value;});

  for(let i=0; i<adds.length; i++) {
    availableVendorsElement.options[i] = new Option(adds[i].label, adds[i].value);
  }

  for(let i=removes.length-1; i>=0; i--) {
    includedVendorsElement.remove(removes[i]);
  }
}

export function removeAllVendors(elementPrefix) {
  let availableVendorsElement = document.getElementById(elementPrefix + "-available");
  let includedVendorsElement = document.getElementById(elementPrefix + "-included");

  let removes = [];
  let adds = [];
  for(let i=0; i<includedVendorsElement.options.length; i++) {
    removes.push(i);
    adds.push({
      label: includedVendorsElement.options[i].innerHTML,
      value: includedVendorsElement.options[i].value
    });
  }

  for(let i=0; i<availableVendorsElement.options.length; i++) {
    adds.push({
      label: availableVendorsElement.options[i].innerHTML,
      value: availableVendorsElement.options[i].value
    });
  }

  adds.sort(function (a, b) {return a.value - b.value;});

  for(let i=0; i<adds.length; i++) {
    availableVendorsElement.options[i] = new Option(adds[i].label, adds[i].value);
  }

  for(let i=removes.length-1; i>=0; i--) {
    includedVendorsElement.remove(removes[i]);
  }
}

window.includeVendors = includeVendors;
window.includeAllVendors = includeAllVendors;
window.removeVendors = removeVendors;
window.removeAllVendors = removeAllVendors;
