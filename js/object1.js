
    const roopy = {

        actor : '루피',
        name : '신이삭',
        alias : '주인공'



    }

    const sangDi = {

        actor : '상디',
        name : '원빈',
        alias : '주방장'


    }

    function print ({actor, alias, name}) {


        const text = `${actor} (${alias}) 역할을 맡은 배우는 ${name} 입니다`;
        console.log(text);

    }

    print(roopy);
    print(sangDi);