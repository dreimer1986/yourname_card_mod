const style = document.createElement('style');
style.innerHTML = `
  #contentContainer {
    background-color: transparent !important;
  }
`;
document.querySelector("body > home-assistant").shadowRoot.querySelector("home-assistant-main").shadowRoot.querySelector("#drawer").shadowRoot.appendChild(style);
