import './App.css';
import React from 'react';
import Marvel from './components/Marvel';
import './components/Marvel.css';

const marvel = [
  {
  name: "Наташа Романоф",
  pseudonym: "Чёрная Вдова",
  what_does: "Супер шпионка",
  more_details: "Русский агент, шпионка, мастер боевых искусств и снайпер, позже стала агентом Щ.И.Т., оснащённая арсеналом высокотехнологичного оружия. Одна из лучших шпионов и профессиональных убийц в мире, двойной агент элитной категории. Во время вторжения читаури присоединилась к Мстителям и помогла защитить Нью-Йорк.",
  picture: "https://i.pinimg.com/736x/8a/ce/41/8ace41468b53ed15c838817c9659e360--scarlett-johansson-black-widow.jpg"
  },
  {
  name:  "Стивен Роджерс",
  pseudonym: "Капитан Америка",
  what_does: "Супер солдат",
  more_details: "Первый в мире супергерой. В результате сверхсекретной программы, Роджерсу была введена Сыворотка Супер-солдата. Затем Стивен подвергся облучению вита-лучами, различных волн, предназначенных для ускорения и стабилизации эффекта сыворотки в его крови. В результате, тело Роджерса было улучшено до пика человеческих возможностей",
  picture: "https://pbs.twimg.com/media/EeJUIdLX0AIRgB6.jpg:small"
  },
  {
  name:  "Кэрол Сьюзан Джейн Денверс",
  pseudonym: "Капитан Марвел",
  what_does:"Возможно, самый могущественный Мститель",
  more_details: "Обладает сверхчеловеческой силой и выносливостью, она умеет летать со скоростью, равной половине скорости звука, а также стрелять из рук энергетическими зарядами",
  picture: "https://pm1.narvii.com/6722/05d30912f2e0cbbfa044ff095c1a586042013752_hq.jpg"
  },
  {
  name: "Клинт Бартон",
   pseudonym:"Соколиный глаз",
  what_does:  "Спецагент Щ.И.Т.а",
  more_details: "Клинт Бартон не обладает сверхъественными способностями. Он -  великолепный стрелок. Он использует разные виды луков, арбалеты, стрелы с различными эффектами и характеристиками. Он способен вести прицельный огонь по мишени сразу несколькими стрелами за считанные секунды, поражая даже малоразмерные цели на дальних расстояниях",
  picture: "https://mfiles.alphacoders.com/786/thumb-1920-786167.jpg"
  },
  {
  name: "Энтони Эдвард «Тони» Старк",
  pseudonym: "Железный человек",
  what_does:  "Эксцентричный гений, миллиардер,плейбой и филантроп. Изобретатель и механик",
  more_details: "Консультант миротворческого разведывательного агентства - Щ.И.Т. Позже Старк присоединяется к Мстителям и помогает победить читаури во время Битвы за Нью-Йорк. Один из основателей команды супергероев Мстителей",
  picture: "https://sun9-37.userapi.com/impg/74xBJ4mZaodFIGIRhrAFi1Ikb--ga1LPOE-Buw/2SO3UfjeGQw.jpg?size=483x604&quality=96&sign=a3f27e340137ad29d2747cfa321ecfa3&type=album.jpg"
  },
  {
  name:  "Тор, Одина сын",
  pseudonym: "Тор",
  what_does: "Бог грома и молний",
  more_details: "Тор присоединился к команде Мстителей на Хеликэрриере. Они попытались понять, каковы намерения Локи. Участник битвы против читаури, помог защитить Нью-Йорк. После этого стал полноправным членом команды Мстителей, иногда покидал землю для наведения порядка в родном мире - Асгарде",
  picture: "https://greepx.com/wp-content/uploads/2021/09/1630836719_232_Thor-For-Mobile-Wallpapers.jpg"
  }
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {
          marvel.map((marvel) => 
          <Marvel name={marvel.name} pseudonym={marvel.pseudonym} what_does={marvel.what_does} more_details={marvel.more_details} picture={marvel.picture} />
          )
        }
      </div>
    );
  }
}

export default App;