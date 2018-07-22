Router.configure({
    layoutTemplate: 'main_layout'
})

Router.map(function(){
    // log in
    this.route('make-invoice', {
        path: '/make-invoice',
        template: 'make_invoice'
    });

    // payment
    this.route('payment', {
        path: '/payment',
        template: 'user_payment'
    });
    
    // // profile
    // this.route('profile', {
    //     path: '/profile',
    //     template: 'profile'
    // });
    
    // // modern slavery score
    // this.route('slavery', {
    //     path: '/slavery',
    //     template: 'modern_slavery'
    // });

    // // modern slavery calculation
    // this.route('slavery-cal', {
    //     path: '/modern-slavery-cal',
    //     template: 'modern_slavery_cal'
    // });

    // // ser value
    // this.route('ser-value', {
    //     path: '/ser-value',
    //     template: 'ser_value'
    // });

    // // ser value calculation
    // this.route('ser-value-cal', {
    //     path: '/ser-value-cal',
    //     template: 'ser_value_cal'
    // });

    // // personal value score
    // this.route('personalvalue', {
    //     path: '/personal-value',
    //     template: 'personal_value'
    // });

    // // personal value calculation
    // this.route('personalvaluecal', {
    //     path: '/personal-value-cal',
    //     template: 'personal_value_cal'
    // });
    
    // // home
    // this.route('home', {
    //     path: '/',
    //     template: 'home'
    // });
})