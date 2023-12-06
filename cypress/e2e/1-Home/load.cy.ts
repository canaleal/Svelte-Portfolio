describe('template spec', () => {
	beforeEach(() => {
		cy.visit('http://localhost:5173/');
	});

	it('loads page', () => {
		cy.contains('PORTFOLIO');
	});
});
