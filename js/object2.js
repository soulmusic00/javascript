
const roopy = {

    name: '루피',
    actor: '신이삭',
    alias: '주인공'



}

const sangDi = {

    name : '상디',
    actor : '원빈',
    alias : '주방장'


}


function print(hero) {

    const text = `${hero.alias}(${hero.name})을 맡은 배우는 ${hero.actor}입니다.`;
    console.log(text);

}

print(roopy);
print(sangDi);