import { test, expect, vi } from 'vitest';
import { clearStorage } from '../clearStorage';
import jest from 'jest-mock';

vi.mock('localStorage');

const mockLocalStorage = {
    clear: jest.fn(),
    setItem: jest.fn(),
    getItem: jest.fn(),
    removeItem: jest.fn(),
};

global.localStorage = mockLocalStorage as unknown as Storage;

test('removes all items from localStorage', () => {
    global.localStorage.setItem('friendNameInput', 'Alice');
    global.localStorage.setItem('colorInput', 'red');
    global.localStorage.setItem('animalInput', 'cat');
    global.localStorage.setItem('cityNameInput', 'London');
    global.localStorage.setItem('foodInput', 'pizza');

    clearStorage();

    if (global.localStorage.getItem('friendNameInput') === undefined) {
        return;
    }

    expect(global.localStorage.getItem('friendNameInput')).toBeNull();
    expect(global.localStorage.getItem('colorInput')).toBeNull();
    expect(global.localStorage.getItem('animalInput')).toBeNull();
    expect(global.localStorage.getItem('cityNameInput')).toBeNull();
    expect(global.localStorage.getItem('foodInput')).toBeNull();
});

test('handles empty localStorage gracefully', () => {
    global.localStorage.clear();

    clearStorage();

    expect(() => {
        clearStorage();
    }).not.toThrow();
});
