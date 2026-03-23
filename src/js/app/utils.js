export function processNumericInput(elementId, sectionName, fieldName) {
  let errors = [];

  let element = document.getElementById(elementId);
  let value = element.value;
  let min = parseInt(element.min);
  let max = parseInt(element.max);
  if (!isNaN(value)) {
    value = parseInt(value);
    if (value >= min && value <= max) {
      cmpApi.setFieldValue(sectionName, fieldName, value);
      if (element.classList.contains("is-invalid")) {
        element.classList.remove("is-invalid");
      }
    } else {
      errors.push(elementId);
      if (!element.classList.contains("is-invalid")) {
        element.classList.add("is-invalid");
      }
    }
  } else {
    errors.push(elementId);
    if (!element.classList.contains("is-invalid")) {
      element.classList.add("is-invalid");
    }
  }

  return errors;
}

export function processNumericInputs(elementIds, sectionName, fieldName) {
  let errors = [];

  let values = [];
  for (let i = 0; i < elementIds.length; i++) {
    let elementId = elementIds[i];
    let element = document.getElementById(elementId);
    let value = element.value;
    let min = parseInt(element.min);
    let max = parseInt(element.max);
    if (!isNaN(value)) {
      value = parseInt(value);
      if (value >= min && value <= max) {
        values.push(value);
        if (element.classList.contains("is-invalid")) {
          element.classList.remove("is-invalid");
        }
      } else {
        errors.push(elementId);
        if (!element.classList.contains("is-invalid")) {
          element.classList.add("is-invalid");
        }
      }
    } else {
      errors.push(elementId);
      if (!element.classList.contains("is-invalid")) {
        element.classList.add("is-invalid");
      }
    }
  }

  if (errors.length == 0) {
    cmpApi.setFieldValue(sectionName, fieldName, values);
  }

  return errors;
}

export function processDateInput(elementId, sectionName, fieldName) {
  let errors = [];

  let element = document.getElementById(elementId);
  let value = element.valueAsDate;
  cmpApi.setFieldValue(sectionName, fieldName, value);

  return errors;
}

export function processNumericSelect(elementId, sectionName, fieldName) {
  let errors = [];

  let element = document.getElementById(elementId);
  let value = parseInt(element.value);
  cmpApi.setFieldValue(sectionName, fieldName, value);

  return errors;
}

export function processStringSelect(elementId, sectionName, fieldName) {
  let errors = [];

  let element = document.getElementById(elementId);
  let value = element.value;
  cmpApi.setFieldValue(sectionName, fieldName, value);

  return errors;
}

export function processMultipleNumericIncludedSelect(elementId, sectionName, fieldName) {
  let errors = [];

  let values = Array.from(document.getElementById(elementId).options).map(({ value }) => parseInt(value));
  cmpApi.setFieldValue(sectionName, fieldName, values);

  return errors;
}

export function processBitfieldSelect(elementId, sectionName, fieldName) {
  let errors = [];

  let values = [];

  let element = document.getElementById(elementId);
  for(let i = 0; i < element.length; i++) {
    let option = element[i];
    values.push(option.selected);
  }

  cmpApi.setFieldValue(sectionName, fieldName, values);

  return errors;
}

export function processCheckbox(elementId, sectionName, fieldName) {
  let errors = [];

  let element = document.getElementById(elementId);
  let value = element.checked;
  cmpApi.setFieldValue(sectionName, fieldName, value);

  return errors;
}

export function processNumericRadio(elementIds, sectionName, fieldName) {
  let errors = [];

  let value = 0;
  for(let i=0; i<elementIds.length; i++) {
    let elementId = elementIds[i];
    let element = document.getElementById(elementId);
    if(element.checked) {
      value = parseInt(element.value);
    }
  }
  cmpApi.setFieldValue(sectionName, fieldName, value);

  return errors;
}

window.processNumericInput = processNumericInput;
window.processNumericInputs = processNumericInputs;
window.processDateInput = processDateInput;
window.processNumericSelect = processNumericSelect;
window.processStringSelect = processStringSelect;
window.processMultipleNumericIncludedSelect = processMultipleNumericIncludedSelect;
window.processBitfieldSelect = processBitfieldSelect;
window.processCheckbox = processCheckbox;
window.processNumericRadio = processNumericRadio;
