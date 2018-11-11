/**
 * Get parent element that matches with a target element
 * @function
 * @param {Object} currentEl - current DOM element
 * @param {String} targetEl - DOM element selector
 */

const getParentElement = (currentEl, targetEl) => {
  const { parentNode } = currentEl;

  if (currentEl !== document && parentNode.matches(targetEl)) {
    return parentNode;
  } else if (currentEl !== document) {
    return getParentElement(parentNode, targetEl);
  }
};

/**
 * Create event listeners to delete Card elements from DOM
 * @function
 */

const handleDeleteCard = () => {
  const cardElements = document.querySelectorAll('.badge__action--remove');

  // Create an event listener for each card
  cardElements.forEach(element =>
    element.addEventListener('click', event => {
      const card = getParentElement(event.target, 'li');

      // Animate element
      card.setAttribute('class', 'fadeout-element');

      // Delete element after animation completes
      setTimeout(() => card.remove(), 500);
    })
  );
};

// Call handleDeleteCard() on page load
document.addEventListener('DOMContentLoaded', handleDeleteCard);
