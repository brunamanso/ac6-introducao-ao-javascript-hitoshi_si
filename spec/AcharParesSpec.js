describe('Devolve Vetor de Pares', () => {
  
    it('Se o vetor estiver vazio, devolve um vetor vazio', () => expect(acharPares([])).toEqual([]));
    it('Para [1,2,3,4,5] retorna [2,4]', () => expect(acharPares([1,2,3,4,5])).toEqual([2,4]));
    it('Para [1,2,3,4,0] retorna [2,4,0]', () => expect(acharPares([1,2,3,4,0])).toEqual([2,4,0]));
    it('Para [1,2,3,-4,0] retorna [2,-4,0]', () => expect(acharPares([1,2,3,-4,0])).toEqual([2,-4,0]));

});
  