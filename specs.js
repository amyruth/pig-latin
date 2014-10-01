describe('pigLatin', function(){
	it('adds ay to works that start with a, e, i, o or u', function(){
		pigLatin('and').should.equal(true);
	});

	it('moves starting consonants to the end of the word and adds ay', function(){
		pigLatin('dog').should.equal(true);
	});

	it('moves all letters before and including qu if the word contains the combination qu to the end of the word and adds ay', function(){
		pigLatin('question').should.equal(true);
	});
});
