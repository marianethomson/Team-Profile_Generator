const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    let engineer;

    beforeEach(() => {
        engineer = new Engineernew Engineer('John Smith', '2', 'engineer@gmail.com', 'Engineer', 'githubeng');

    });
    describe('getName()', () => {
        it('should return the name of the engineer', () => {
            expect(engineer.getName()).toBe('John Smith');
        });
    });
    describe('getId()', () => {
        it('should return the id of the engineer', () => {
            expect(engineer.getId()).toBe('2');
        });
    });
    describe('getEmail()', () => {
        it('should return the email of the engineer', () => {
            expect(engineer.getEmail()).toBe('engineer@gmail.com');
        });
    });
    describe('getRole()', () => {
        it('should return the role of the engineer', () => {
            expect(engineer.getRole()).toBe('Engineer');
        });
    });
    describe('getGithub', () => {
        it('should return github username', () => {
            expect(engineer.getGithub()).toBe('githubeng');
        }
    });
}
);

