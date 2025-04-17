// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      uz: {
        translation: {
          home: "Бош саҳифа",
          services: "Хизматларимиз",
          works: "Бизнинг ишлар",
          prices:"Нархлар",

          title:"Сизнинг бизнесингизни ривожлантириш учун мукаммал 'IT' ечимлар!",
          title2:"Лойиҳангизни 10 йилдан ортиқ тажрибага эга мутахассисларга ишониб топширинг ва қисқа вақт ичида юқори муваффақиятларга эришинг.",
          sendContact:"Алоқа",
          frequently:"Энг кўп бериладиган саволлар",
          according:"Нега нархлар арзон?",
          according2:"Ҳақиқатан сифатга нисбатан нархларимиз арзон. Сабаби веб студиямизда ортиқча ишчи кучи бўлмагани сабаб, ортиқча харажатимиз ҳам йўқ. Шунинг учун нархларни бошқаларга нисбатан арзон ушлаш бизга кўтаради.", 
          according3:"Келажакда сайтни ўзим таҳрир қила оламанми?", 
          according4:"Ҳа, албатта, сизга контентни бошқариш тизимига (админкага) кириш ва кўрсатмалар берилади. Админка қулай интерфейсга эга, интуитив даражада тушунарли ва маълум билимларни талаб қилмайди.", 
          according5:"Сайт битганидан кейин қўллаб-қувватлаб турасизларми?", 
          according6:"Сайтигизни битирганимиздан сўнг, ўз ҳолига ташлаб қўймай, бир йил давомида бепул, куну-тун узлуксиз ишлаб туриши ва ҳимоясига жавоб берамиз. Бир йилдан сўнг бу хизматимиз ойига/10$.", 

          Recent:"Бизнинг охирги лойиҳаларимиз",
          workCardTitle:"Ataev Bahodir Build – сифатли қурилиш ва таъмирлаш хизматлари! Бизни танланг, орзуингиздаги уйни яратинг.",
          workCardTitle2:"AutoZoomRental – қулай ва ишончли автотранспорт ижараси! Сайоҳатингизни бизнинг автомобиллар билан янада ёқимли қилинг.",
          workCardTitle3:"IT Time Academy – замонавий IT билимларнинг манзили! Келажак касбларини биз билан эгалланг.",
          workCardTitle4:"HomeKit – замонавий ва қулай смарт уй ечимлари! Биз билан уйингиз хавфсизлиги ва қулайлигини таъминланг.",
          workCardTitle5:"UzLoyal – ишончли ва қулай лояллик тизими! Мижозларингизни рағбатлантиришнинг энг самарали усули.",
          workCardTitle6:"Namangan ITS – замонавий IT билимлар ва кўникмалар маркази! Ҳар қадамда янги имкониятларни қўлга киритинг.",
          workCardTitle7:"ProPartnyor – ишончли ва самарали ҳамкорликнинг манзили! Бизнесингизнинг муваффақияти учун биргаликда ҳаракат қиламиз.",
          workCardTitle8:"ZamonTour – хушбахт сайёҳлик тажрибасини биз билан тажриба қилинг! Биз билан сафарингиз янада ёқимли бўлиши кафолатланади.",

          "benefits": {
            "adaptive": {
              "title": "Мослашувчан",
              "text": "Бизнинг яратадиган веб-сайтлар мослашувчан бўлади. Яъни, улар планшет ва мобил версияларга эга бўлади..."
            },
            "admin": {
              "title": "Админ панель",
              "text": "Сизнинг веб-сайтигиз қулай ва оддий админ панельга эга бўлади..."
            },
            "protection": {
              "title": "Ҳимоя",
              "text": "Бизнинг веб-сайтлар антивирус ва файрволлар орқали ҳужумларга қарши ҳимояланган бўлади."
            },
            "monitoring": {
              "title": "24/7 Назорат",
              "text": "Сизнинг веб-сайтигиз 24 соат, ҳафтанинг 7 куни давомида онлайн назорат қилинади."
            },
            "domain": {
              "title": "Домен ва Хостинг",
              "text": "Биз домен ва хостингни 6 ойгача бепул тақдим этамиз..."
            },
            "unique": {
              "title": "Ноёблик",
              "text": "Биз яратадиган ҳар бир сайт ноёб ва бошқалардан фарқли бўлади."
            }
          },

          "contact": {
            "address": {
              "title": "Манзил",
              "text": "Тошкент шаҳри, Юнусобод тумани"
            },
            "phone": {
              "title": "Телефон рақами"
            },
            "hours": {
              "title": "Иш вақти",
              "text": "9:00–18:00 Дуйшанба–Шанба"
            },
            "social": {
              "title": "Ижтимоий тармоқлар"
            }
          },
          choose:"Нега айнан биз? Нега кўпчилик одамлар бизни танлашади?",
          benefits:"Афзалликларимиз",
          order:"Бизнесингиз учун веб сайтга хозироқ буюртма беринг, Ва биздан кичик бир совға 10% чегирмага эга бўлинг!",
          Satisfying:"",
          Pages:"Ҳар бир мижозни рози қилиш бу бизнинг олий мақсадимиз - LIMSA",
          send:"Юбориш",
          details:"Маълумотингизни қолдиринг",
          inputName:"Исмингиз",
          inputMessage:"Сизнинг хабарингиз",
          contacts:"Контактлар",

        },
      },
      en: {
        translation: {
          home: "Home",
          services: "Our Services",
          works: "Our works",
          prices:"Prices",

          title:"Perfect 'IT' solutions to grow your business!",
          title2:"Entrust your project to experts with more than 10 years of experience and achieve high success in a short time.",
          sendContact:"Contact",
          frequently:"Frequently Asked Questions",
          according:"Why are the prices so cheap?",
          according2:"Our prices are really cheap compared to the quality. The reason is that we don't have excess labor in our web studio, so we don't have excess costs. That's why we keep our prices low compared to others.", 
          according3:"Will I be able to edit the site myself in the future?", 
          according4:"Yes, of course, you will be given access and instructions to the content management system (adminka). Adminka has a convenient interface, is intuitive and does not require specific knowledge.", 
          according5:"Will you continue to support the site after it's finished?", 
          according6:"Once we've finished your site, we'll keep it running for free, 24/7 for one year. After one year, it's $10/month.", 

          Recent:"Our Recent Projects",
          workCardTitle:"Ataev Bahadir Build - quality construction and repair services! Choose us, create the house of your dreams.",
          workCardTitle2:"AutoZoomRental - convenient and reliable car rental! Make your trip more pleasant with our cars.",
          workCardTitle3:"IT Time Academy is the destination of modern IT knowledge! Take the professions of the future with us.",
          workCardTitle4:"HomeKit – modern and convenient smart home solutions! Ensure the safety and comfort of your home with us.",
          workCardTitle5:"UzLoyal is a reliable and convenient loyalty system! The most effective way to motivate your customers.",
          workCardTitle6:"Namangan ITS is a center of modern IT knowledge and skills! Get new opportunities at every step.",
          workCardTitle7:"ProPartnyor is the address of reliable and effective cooperation! We will work together for the success of your business.",
          workCardTitle8:"ZamonTour – experience a happy tourist experience with us! Your trip with us is guaranteed to be more pleasant.",

          "benefits": {
            "adaptive": {
              "title": "Adaptive",
              "text": "The websites we create will be flexible. That is, they will have a tablet and mobile version..."
            },
            "admin": {
              "title": "Admin",
              "text": "Your website will have a convenient and simple admin panel..."
            },
            "protection": {
              "title": "Protection",
              "text": "Our websites are protected by anti-virus and firewalls to resist attacks."
            },
            "monitoring": {
              "title": "Monitoring 24/7",
              "text": "Your website is monitored online 24/7 to keep it running."
            },
            "domain": {
              "title": "Domain and Hosting",
              "text": "We offer domain and hosting free for 6 months..."
            },
            "unique": {
              "title": "Unique",
              "text": "Each site we create will be unique and different from others."
            }
          },

          "contact": {
    "address": {
      "title": "Address",
      "text": "Tashkent city, Yunusabad district"
    },
    "phone": {
      "title": "Phone Number"
    },
    "hours": {
      "title": "Working hours",
      "text": "9:00–18:00 Monday–Saturday"
    },
    "social": {
      "title": "Social networks"
    }
          },
          choose:"Why us? Why most people choose us?",
          benefits:"Our Benefits",
          order:"Order a website for your business now, And get a small gift from us 10% off!",
          Satisfying:"Satisfying every customer is our highest goal - LIMSA",
          Pages:"Pages",
          send:"Send",
          details:"Leave your details",
          inputName:"Your name",
          inputMessage:"Your message",
          contacts:"Contacts",

        },
      },
      ru: {
        translation: {
          home: "Главная",
          services: "Наши услуги",
          works: "Наша работа",
          prices:"Цены",

          title:"ИДЕАЛЬНЫЕ 'IT' РЕШЕНИЯ ДЛЯ РАЗВИТИЯ ВАШЕГО БИЗНЕСА!",
          title2:"Доверьте свой проект специалистам с более чем 10-летним опытом и добейтесь высокого успеха за короткий период времени.",
          sendContact:"Контакт",
          frequently:"Часто задаваемые вопросы",
          according:"Почему цены низкие?",
          according2:"Наши цены действительно низкие по сравнению с качеством. Причина в том, что в нашей веб-студии нет лишней рабочей силы, а значит, у нас нет лишних затрат. Поэтому сохранение цен ниже, чем у других, поднимает нас.", 
          according3:"Смогу ли я в будущем самостоятельно редактировать сайт?", 
          according4:"Да, конечно, вам нужен доступ к системе управления контентом (adminka) и даны инструкции. Adminka имеет удобный интерфейс, на интуитивно понятном уровне понятно и не требует определенных знаний.", 
          according5:"Будете ли вы продолжать поддерживать сайт после его завершения?", 
          according6:"Да, конечно, вам нужен доступ к системе управления контентом (adminka) и даны инструкции. Adminka имеет удобный интерфейс, на интуитивно понятном уровне понятно и не требует определенных знаний.", 

          Recent:"Наши недавние проекты",
          workCardTitle:"Ataev Bahadir Build - качественные строительные и ремонтные услуги! Выбирайте нас, создайте дом своей мечты.",
          workCardTitle2:"AutoZoomRental - удобный и надежный прокат автомобилей! Сделайте свое путешествие приятнее с нашими автомобилями.",
          workCardTitle3:"IT Time Academy — место современных ИТ-знаний! Возьмите с собой профессии будущего.",
          workCardTitle4:"HomeKit – современные и удобные решения для умного дома! Обеспечьте безопасность и комфорт вашего дома вместе с нами.",
          workCardTitle5:"UzLoyal – надежная и удобная система лояльности! Самый эффективный способ мотивации ваших клиентов.",
          workCardTitle6:"Наманганская ИТС — центр современных ИТ-знаний и навыков! Получайте новые возможности на каждом этапе.",
          workCardTitle7:"ПроПартнёр — адрес надёжного и эффективного сотрудничества! Мы будем работать вместе для успеха вашего бизнеса.",
          workCardTitle8:"ZamonTour – наслаждайтесь счастливым туристическим опытом вместе с нами! Ваша поездка с нами гарантированно станет приятнее.",

          "benefits": {
            "adaptive": {
              "title": "Адаптивность",
              "text": "Сайты, которые мы создаём, будут адаптивными. То есть они будут иметь версии для планшетов и мобильных устройств..."
            },
            "admin": {
              "title": "Админ-панель",
              "text": "Ваш сайт будет иметь удобную и простую админ-панель..."
            },
            "protection": {
              "title": "Защита",
              "text": "Наши сайты защищены антивирусами и файерволами для предотвращения атак."
            },
            "monitoring": {
              "title": "Мониторинг 24/7",
              "text": "Ваш сайт находится под круглосуточным мониторингом 24/7, чтобы он всегда работал."
            },
            "domain": {
              "title": "Домен и Хостинг",
              "text": "Мы предоставляем домен и хостинг бесплатно на 6 месяцев..."
            },
            "unique": {
              "title": "Уникальность",
              "text": "Каждый сайт, который мы создаём, будет уникальным и непохожим на другие."
            }
          },

          "contact": {
            "address": {
              "title": "Адрес",
              "text": "Город Ташкент, район Юнусабад"
            },
            "phone": {
              "title": "Номер телефона"
            },
            "hours": {
              "title": "Часы работы",
              "text": "9:00–18:00 Понедельник–Суббота"
            },
            "social": {
              "title": "Социальные сети"
            }
          },
          choose:"Почему мы? Почему большинство людей выбирают нас?",
          benefits:"Наши преимущества",
          order:"Закажите сайт для своего бизнеса сейчас и получите от нас небольшой подарок со скидкой 10%!",
          Satisfying:"Удовлетворение каждого клиента — наша высшая цель — LIMSA",
          Pages:"Страницы",
          send:"Отправить",
          details:"Оставьте свои данные",
          inputName:"ваше имя",
          inputMessage:"Ваше сообщение",
          contacts:"Контакты",

        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
