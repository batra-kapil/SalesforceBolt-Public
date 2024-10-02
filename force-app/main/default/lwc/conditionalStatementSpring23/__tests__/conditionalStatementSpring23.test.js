import { createElement } from 'lwc';
import ConditionalStatementSpring23 from 'c/conditionalStatementSpring23';

describe('c-conditional-statement-spring23', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-conditional-statement-spring23', {
            is: ConditionalStatementSpring23
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});