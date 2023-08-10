import { MenuProps } from "./Menu.props"
import styles from "./Menu.module.css"
import { SortCategory } from "@/components"

const initialMenu = [
  {
    link: "equipment",
    title: "Кардиотренажеры",
    item: [
      {
        link: "Cycling",
        text: "Беговые дорожки",
        img: "/menu/Cycling.png",
      },
      {
        link: "Elliptical",
        text: "Эллиптические тренажеры",
        img: "/menu/Elliptical.png",
      },

      {
        link: "Exercise_bikes",
        text: "Велотренажеры",
        img: "/menu/Exercise_bikes.png",
      },
      {
        link: "Steppers",
        text: "Cтепперы",
        img: "/menu/Steppers.png",
      },
      {
        link: "Rowing",
        text: "Гребные тренажеры",
        img: "/menu/Rowing.png",
      },
      {
        link: "Ski",
        text: "Сайклинг",
        img: "/menu/Ski.png",
      },
      {
        link: "Ski",
        text: "Горнолыжные тренажеры",
        img: "/menu/Ski.png",
      },

      {
        link: "Steppers",
        text: "Cтепперы",
        img: "/menu/Steppers.png",
      },
      {
        link: "Rowing",
        text: "Гребные тренажеры",
        img: "/menu/Rowing.png",
      },
      {
        link: "Ski",
        text: "Сайклинг",
        img: "/menu/Ski.png",
      },
      {
        link: "Ski",
        text: "Горнолыжные тренажеры",
        img: "/menu/Ski.png",
      },
    ],
  },
  {
    link: "strengthsimulators",
    title: "Силовые тренажеры",
    item: [
      {
        link: "Cycling",
        text: "Беговые дорожки",
        img: "/menu/Cycling.png",
      },
      {
        link: "Elliptical",
        text: "Эллиптические тренажеры",
        img: "/menu/Elliptical.png",
      },
      {
        link: "Exercise_bikes",
        text: "Велотренажеры",
        img: "/menu/Exercise_bikes.png",
      },
      {
        link: "Steppers",
        text: "Cтепперы",
        img: "/menu/Steppers.png",
      },
    ],
  },
  {
    link: "streetsports",
    title: "Уличные виды спорта",
    item: [
      {
        link: "Cycling",
        text: "Беговые дорожки",
        img: "/menu/Cycling.png",
      },
      {
        link: "Exercise_bikes",
        text: "Велотренажеры",
        img: "/menu/Exercise_bikes.png",
      },
      {
        link: "Rowing",
        text: "Гребные тренажеры",
        img: "/menu/Rowing.png",
      },
    ],
  },
  {
    link: "freeweights",
    title: "Свободные веса",
    item: [
      {
        link: "Cycling",
        text: "Беговые дорожки",
        img: "/menu/Cycling.png",
      },
      {
        link: "Elliptical",
        text: "Эллиптические тренажеры",
        img: "/menu/Elliptical.png",
      },
      {
        link: "Exercise_bikes",
        text: "Велотренажеры",
        img: "/menu/Exercise_bikes.png",
      },
    ],
  },
  {
    link: "gamingtables",
    title: "Игровые столы",
    item: [
      {
        link: "Cycling",
        text: "Беговые дорожки",
        img: "/menu/Cycling.png",
      },
      {
        link: "Exercise_bikes",
        text: "Велотренажеры",
        img: "/menu/Exercise_bikes.png",
      },
      {
        link: "Steppers",
        text: "Cтепперы",
        img: "/menu/Steppers.png",
      },
      {
        link: "Rowing",
        text: "Гребные тренажеры",
        img: "/menu/Rowing.png",
      },
      {
        link: "Ski",
        text: "Сайклинг",
        img: "/menu/Ski.png",
      },
    ],
  },
  {
    link: "massageequipment",
    title: "Массажное оборудование",
    item: [
      {
        link: "Cycling",
        text: "Беговые дорожки",
        img: "/menu/Cycling.png",
      },
      {
        link: "Elliptical",
        text: "Эллиптические тренажеры",
        img: "/menu/Elliptical.png",
      },
      {
        link: "Exercise_bikes",
        text: "Велотренажеры",
        img: "/menu/Exercise_bikes.png",
      },
      {
        link: "Ski",
        text: "Горнолыжные тренажеры",
        img: "/menu/Ski.png",
      },
    ],
  },
  {
    link: "fitnessaccessories",
    title: "Фитнес аксессуары",
    item: [
      {
        link: "Cycling",
        text: "Беговые дорожки",
        img: "/menu/Cycling.png",
      },
      {
        link: "Elliptical",
        text: "Эллиптические тренажеры",
        img: "/menu/Elliptical.png",
      },
      {
        link: "Steppers",
        text: "Cтепперы",
        img: "/menu/Steppers.png",
      },
      {
        link: "Rowing",
        text: "Гребные тренажеры",
        img: "/menu/Rowing.png",
      },
      {
        link: "Ski",
        text: "Сайклинг",
        img: "/menu/Ski.png",
      },
    ],
  },
  {
    link: "functionaltraining",
    title: "Функциональный тренинг",
    item: [],
  },
]

const Menu = ({ className, ...props }: MenuProps): JSX.Element => {
  return (
    <div className={styles.menu} {...props}>
      <div className="container">
        <ul className={styles.tab}>
          <li>Для дома</li>
          <li>Для фитнес клуба</li>
        </ul>
        {initialMenu.map((ctg) => (
          <SortCategory key={ctg.title} {...ctg} />
        ))}
      </div>
    </div>
  )
}

export default Menu
