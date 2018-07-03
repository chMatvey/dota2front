const initialState = [
    {"id":1,"img":"/img/heroes/abaddon/portrait.jpg","bio":"Род Аверно питает купель — разлом в земной тверди, который испускает загадочную энергию на протяжении поколений. Каждого новорожденного семьи окунают в этот темный туман, даруя тем самым связь с их землей и ее загадочной силой. Дети растут с непреклонной верой в защиту семейных ценностей и традиций земли, но на самом деле они охраняют саму купель, истинные намерения которой неизвестны. Когда новорожденный Abaddon проходил обряд крещения, что-то пошло не так. В глазах малыша сверкнула искра разума, испугавшая всех присутствовавших и заставившая жрецов шептаться. Его растили, дабы он пошел по пути всех отпрысков рода: война и защита родины во главе армии. Но сам Abaddon уделял этому не так много внимания. Пока другие тренировались в обращении с оружием, он медитировал у купели. Он глубоко вдыхал темный туман, учась быть единым с той силой, что протекала глубоко под землей его дома. В конечном счете он стал порождением черного тумана. Род Аверно неодобрительно отнесся к такому решению, обвиняя его в пренебрежении обязанностями. Но все эти обвинения прекратились, когда Abaddon вступил в свою первую битву и показал ту обретенную власть над жизнью и смертью, о которой другие члены рода не могли и мечтать.","video":"//www.youtube.com/embed/T_Tldk4KnNc","power":"23 + 2.6","agility":"17 + 1.50","intelligence":"21 + 2.00","damage":"32 - 42","defence":"-1","speed":"310","ability1":"10&+25 к скорости передвижения&+25% к получаемому опыту","ability2":"15&+8 к броне&+75 лечения/урона от Mist Coil","ability3":"20&+90 урона&-20% перезарядки способностей","ability4":"25&+25 к замедлению от Curse of Avernus&+225 к здоровью Aphotic Shield","stat":{"id":1,"level":"1&15&25","damage":"55 - 65&91 - 101&117 - 127","health":"717&1527&2112","mana":"327&663&903","defence":"1.72&5.08&7.48","timeAttack":"1.45&1.23&1.11","attackInSecond":"1.45&1.23&1.11","vision":"0.69","distanceAttack":"1800 / 800"},"skill":[{"id":1,"name":"Aphotic Shield","img":"/img/heroes/abaddon/ability2.jpg","description":"Окружает союзника щитом из темной энергии, который поглощает некоторое количество урона, прежде чем исчезнуть. При уничтожении щит взрывается и наносит весь поглощенный урон ближайшим врагам. Снимает некоторые негативные эффекты и оглушение при применении."},{"id":2,"name":"Mist Coil","img":"/img/heroes/abaddon/ability1.jpg","description":"Ценой собственного здоровья выпускает смертельный туман, который наносит урон врагу или лечит союзника."},{"id":3,"name":"Curse of Avernus","img":"/img/heroes/abaddon/ability3.jpg","description":"Атаки героя накладывают на жертву замораживающее проклятье. У всех, кто ее атакует, на некоторое время повышается скорость атаки и передвижения."},{"id":4,"name":"Borrowed Time","img":"/img/heroes/abaddon/ability4.jpg","description":"При использовании любой получаемый урон будет лечить вас. Снимает большинство негативных эффектов. Если способность готова, то она сработает, как только ваше здоровье упадет ниже 400.   Улучшается с Aghanim's Scepter. (Увеличивает длительность. Пока способность активна, 50% всего урона, получаемого союзными героями в радиусе 900, будет получать Abaddon)."}],"hero":{"id":1,"name":"Abaddon","role":"Support-Carry-Durable","img":"/img/heroes/abaddon/m_icon.jpg","attack":{"id":1,"name":"melee"},"type":{"id":1,"img":"/img/icon-str.png"}}}
];

export default function characteristic(state = [], action) {
    switch(action.type){
        case 'ADD_CHARACTERISTIC':{
            state = [];
            return[
                ...state,
                action.payload
            ]
        }
        default: break;
    }
    return state
}
