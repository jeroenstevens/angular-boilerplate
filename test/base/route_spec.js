describe('Routes', function() {

  beforeEach(module('MyApp'));

  it('redirects to / when none matching', inject(function($route) {
    expect($route.routes[null].redirectTo).toEqual('/')
  }));

});
