function receivesAFunction(callback){
    callback()
}


function returnsANamedFunction(){
    function aNamed(){
    }
    return aNamed
}


function returnsAnAnonymousFunction(){
    return () => ""
}

/**
   describe("returnsAnAnonymousFunction()", () => {
    var fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });
  });
});
 */