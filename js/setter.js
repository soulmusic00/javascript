
    const numbers = {


        _a : 1,
        _b : 2,
        sum : 3,
        calculate () {

            console.log('calculate');
            this.sum = this._a + this._b;

        },
        get a() {
            return this._a;
        },
        get b() {
            return this._b;
        },
        set a(value) {

            console.log('a값이 바꼈습니다.');
            this._a = value;
            this.calculate();



        },
        set b(value) {
            
            console.log('b값이 바꼈습니다.');
            this._b = value;
            this.calculate();

        }


    };

    console.log(numbers.sum);
    numbers.a = 20;
    console.log(numbers.sum);
    numbers.b = 30;
    console.log(numbers.sum);