const { isTypedArray } = require('util/types');
const Manager = require('../src/Manager');

describe('Manager', () => {
    let manager;

    beforeEach(() => {
        manager = new Manager('John Google', '57', 'manager@co.com', 'Manager', 'Melbourne');
    });
    describe('constructor', () => {
        it('should create a new Manager object', () => {
            expect(manager).toBeInstanceOf(Manager);
        });
        it('should create a new Manager object with the correct properties', () => {
            expect(manager.name).toBe('John Google');
            expect(manager.id).toBe('57');
            expect(manager.email).toBe('manager@co.com');
            expect(manager.role).toBe('Manager');
            expect(manager.office).toBe('Melbourne');
        });
    });
    describe('getName', () => {
        it('should return the name of the Manager', () => {
            expect(manager.getName()).toBe('John Google');
        });
    });
    describe('getId', () => {
        it('should return the id of the Manager', () => {
            expect(manager.getId()).toBe('57');
        });
    });
    describe('getEmail', () => {
        it('should return the email of the Manager', () => {
            expect(manager.getEmail()).toBe('manager@co.com');
        });
    });
    describe('getRole', () => {
        it('should return the role of the Manager', () => {
            expect(manager.getRole()).toBe('Manager');
        });
    });
    describe('getOffice', () => {
        it('should return the office of the Manager', () => {
            expect(manager.getOffice()).toBe('Melbourne');
        });
    });
}

