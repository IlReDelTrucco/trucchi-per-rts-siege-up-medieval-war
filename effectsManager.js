/**
 * effectsManager - Manages Basic Visual Effects for UI Elements
 * Author: IlReDelTrucco
 * License: Custom
 */

const effectsManager = {
    /**
     * Fades in a DOM element by changing its opacity.
     * @param {string} selector - CSS selector of the element.
     * @param {number} duration - Duration in milliseconds.
     */
    fadeIn(selector, duration = 500) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error('[effectsManager] Element not found.');
            return;
        }
        element.style.opacity = 0;
        element.style.display = 'block';
        element.style.transition = `opacity ${duration}ms`;

        setTimeout(() => {
            element.style.opacity = 1;
        }, 10);
    },

    /**
     * Fades out a DOM element by changing its opacity.
     * @param {string} selector - CSS selector of the element.
     * @param {number} duration - Duration in milliseconds.
     */
    fadeOut(selector, duration = 500) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error('[effectsManager] Element not found.');
            return;
        }
        element.style.transition = `opacity ${duration}ms`;
        element.style.opacity = 0;

        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }
};

// Example usage:
// effectsManager.fadeIn('#modal', 300);
// effectsManager.fadeOut('#notification', 300);

module.exports = effectsManager;
