




    class Animal {

        constructor(type, name, sound) {

            this.type = type;
            this.name = name;
            this.sound = sound;



        }

        say() {

            console.log(this.sound);

            //==> 클래스 내부의 함수를 '메서드'라고 부른다.
        }


    }


    const dog = new Animal('개', '멍멍이', '멍멍');
    const cat = new Animal('고양이', '야옹이', '야오야옹');

    dog.say();
    cat.say();