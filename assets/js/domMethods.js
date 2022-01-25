$(document).ready( function() {
    function createEl(htmlString, attrs, ...children) {
      if (typeof htmlString !== "string") {
        throw Error("Argument 'htmlString' is required and must be a string");
      }
    
      const el = document.createElement(htmlString);
    
      if (typeof attrs === "object") {
        for (let key in attrs) {
          if (key.substring(0, 2) === "on") {
            el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
          } else {
            el.setAttribute(key, attrs[key]);
          }
        }
      }
    
      children.forEach(function(child) {
        let node;
    
        if (child.constructor.name.includes("Element")) {
          node = child;
        } else {
          node = document.createTextNode(child);
        }
    
        el.appendChild(node);
      });
    
      return el;
    };

    const pageEl = document.querySelector("#page");

    function createCards(events) {
      const cards = events.map((event) => (
          createEl("div", {class: "card-body clickable", onClick: () => onEventClick(event)}, 
          createEl("h5", {class: "card-title"}, event.title || ""),
          createEl("p", {class: "card-text"}, event.description || createLoremIpsum()),
          createEl("hr")
          )
      ))
      return cards
    }
    
    const containerEl1 = createEl("div", {class: "container mt-5"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 1"),
        ...createCards(events.slice(0,3))
    )
    )

    const containerEl2 = createEl("div", {class: "container"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 2"),
        ...createCards(events.slice(3,6))
    )
    )

    const containerEl3 = createEl("div", {class: "container"}, 
    createEl("div", {class: "card mb-5"}, 
        createEl("h5", {class: "card-header"}, "Day 3"),
        ...createCards(events.slice(6,9))
    )
    )

    pageEl.appendChild(containerEl1);
    pageEl.appendChild(containerEl2);
    pageEl.appendChild(containerEl3);
  }
),


module.exports = createEl;