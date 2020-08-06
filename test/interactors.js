import { createInteractor } from "@bigtest/interactor";

export const Input = createInteractor('Input')({
  selector: 'input',
  defaultLocator: (elem) => elem.name,
  actions: {
    type: (elem, val) => {
      let evt = new FocusEvent('focus');
      elem.dispatchEvent(evt);
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(elem, val);
      evt = new Event('input', { bubbles: true });
      elem.dispatchEvent(evt);
    },
    focus: (elem) => elem.focus()
  }
});

export const Button = createInteractor('Button')({
  selector: 'button',
  defaultLocator: (elem) => {
    console.log(elem.innerText);
    return elem.innerText.trim();
  },
  filters: {
    enabled: {
      apply: (element) => !element.disabled,
      default: true
    },
    value: (element) => element.value
  },
  actions: {
    click: (elem) => elem.click(),
    focus: (elem) => elem.focus()
  }
});

export const Heading = createInteractor('Heading')({
  selector: 'h1, h2, h3, h4, h5, h6',
  defaultLocator: (elem) => elem.innerText.trim(),
  actions: {
    click: (elem) => elem.click()
  }
});
