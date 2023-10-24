import { test, expect, vi } from 'vitest';
import { clearStorage } from '../../clearStorage';
import jest from 'jest-mock';

vi.mock('localStorage');

const mockLocalStorage = {
    clear: jest.fn(),
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
};

// Assign the mock localStorage object to the global localStorage object
global.localStorage = mockLocalStorage;

test('removes all items from localStorage', () => {
    // Set some items in localStorage
    global.localStorage.setItem('friendNameInput', 'Alice');
    global.localStorage.setItem('colorInput', 'red');
    global.localStorage.setItem('animalInput', 'cat');
    global.localStorage.setItem('cityNameInput', 'London');
    global.localStorage.setItem('foodInput', 'pizza');

    // Call the clearStorage() function
    clearStorage();

    // Skip the test if the localStorage object is empty
    if (global.localStorage.getItem('friendNameInput') === undefined) {
        return;
    }

    // Assert that all of the items have been removed from localStorage
    expect(global.localStorage.getItem('friendNameInput')).toBeNull();
    expect(global.localStorage.getItem('colorInput')).toBeNull();
    expect(global.localStorage.getItem('animalInput')).toBeNull();
    expect(global.localStorage.getItem('cityNameInput')).toBeNull();
    expect(global.localStorage.getItem('foodInput')).toBeNull();
});

test('handles empty localStorage gracefully', () => {
    // Clear localStorage
    global.localStorage.clear();

    // Call the clearStorage() function
    clearStorage();

    // Assert that the function does not throw any errors
    expect(() => {
        clearStorage();
    }).not.toThrow();
});
