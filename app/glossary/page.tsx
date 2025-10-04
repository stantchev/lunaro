import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlossarySearch } from "@/components/glossary-search"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: "Речник на термините - Lunaro News | Киберсигурност и SEO терминология",
    template: "%s - Lunaro News",
  },
  description:
    "Речник на термините от Lunaro News – киберсигурност и SEO термини, обяснени ясно и разбираемо за професионалисти и начинаещи.",
  keywords:
    "речник на термините, киберсигурност термини, SEO терминология, речник SEO, речник киберсигурност, дигитална сигурност термини, Lunaro News речник",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/glossary",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/glossary",
    siteName: "Lunaro News",
    title: "Речник на термините - Lunaro News",
    description:
      "SEO и киберсигурност речник – основни и напреднали термини, обяснени лесно и разбираемо от Lunaro News.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Речник на термините - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Речник на термините - Lunaro News",
    description:
      "Lunaro News речник – киберсигурност и SEO терминология, представена ясно за експерти и начинаещи.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      term: "Advanced Persistent Threat (APT)",
      definition:
        "Продължителна и целенасочена кибератака, при която неоторизиран потребител получава достъп до мрежа и остава незабелязан за дълъг период от време.",
      category: "Киберсигурност",
      letter: "A",
    },
    {
      term: "API (Application Programming Interface)",
      definition:
        "Интерфейс за програмиране на приложения - набор от правила и протоколи, които позволяват на различни софтуерни приложения да комуникират помежду си.",
      category: "Технически",
      letter: "A",
    },
    {
      term: "Anchor Text",
      definition:
        "Видимият, кликваем текст в хипервръзка. Важен SEO фактор, който помага на търсачките да разберат за какво е свързаната страница.",
      category: "SEO",
      letter: "A",
    },
    {
      term: "Artificial Intelligence (AI)",
      definition:
        "Изкуствен интелект - технология, която позволява на машините да симулират човешки интелект и да извършват задачи като учене, решаване на проблеми и вземане на решения.",
      category: "AI",
      letter: "A",
    },
    {
      term: "Backlink",
      definition:
        "Връзка от един уебсайт към друг. Backlink-овете са важен фактор за SEO, тъй като показват на търсачките, че съдържанието е ценно и заслужава доверие.",
      category: "SEO",
      letter: "B",
    },
    {
      term: "Black Hat SEO",
      definition:
        "Неетични SEO практики, които нарушават насоките на търсачките и могат да доведат до наказания или премахване от индекса.",
      category: "SEO",
      letter: "B",
    },
    {
      term: "Botnet",
      definition:
        "Мрежа от заразени компютри (ботове), които са под контрола на киберпрестъпници и могат да бъдат използвани за различни злонамерени дейности.",
      category: "Киберсигурност",
      letter: "B",
    },
    {
      term: "Brute Force Attack",
      definition:
        "Метод за взламяване, при който се използват автоматизирани инструменти за опитване на множество комбинации от пароли до намиране на правилната.",
      category: "Киберсигурност",
      letter: "B",
    },
    {
      term: "Cache",
      definition:
        "Временно съхранение на данни за по-бърз достъп. В SEO контекста се отнася до кеширането на уеб страници за подобряване на скоростта на зареждане.",
      category: "Технически",
      letter: "C",
    },
    {
      term: "Click-through Rate (CTR)",
      definition:
        "Процентът от хората, които кликват върху определена връзка спрямо общия брой хора, които я виждат. Важна метрика за SEO и дигитален маркетинг.",
      category: "SEO",
      letter: "C",
    },
    {
      term: "Content Management System (CMS)",
      definition:
        "Система за управление на съдържание - софтуер, който позволява създаването, редактирането и публикуването на дигитално съдържание.",
      category: "Технически",
      letter: "C",
    },
    {
      term: "Crawling",
      definition:
        "Процесът, при който търсачките сканират уебсайтове за откриване и индексиране на ново или актуализирано съдържание.",
      category: "SEO",
      letter: "C",
    },
    {
      term: "Cross-Site Scripting (XSS)",
      definition:
        "Тип уязвимост в уеб приложенията, която позволява на атакуващите да инжектират злонамерен скрипт в уеб страници, видими от други потребители.",
      category: "Киберсигурност",
      letter: "C",
    },
    {
      term: "DDoS (Distributed Denial of Service)",
      definition:
        "Тип кибератака, при която множество компютри едновременно изпращат заявки към целевия сървър, за да го претоварят и направят недостъпен.",
      category: "Киберсигурност",
      letter: "D",
    },
    {
      term: "Deep Web",
      definition:
        "Частта от интернет, която не е индексирана от търсачките и не е достъпна чрез стандартни браузъри. Включва бази данни, частни мрежи и защитени страници.",
      category: "Киберсигурност",
      letter: "D",
    },
    {
      term: "Domain Authority (DA)",
      definition:
        "Метрика, разработена от Moz, която предсказва колко добре даден уебсайт ще се класира в резултатите от търсенето. Варира от 1 до 100.",
      category: "SEO",
      letter: "D",
    },
    {
      term: "Duplicate Content",
      definition:
        "Идентично или много подобно съдържание, което се появява на множество URL адреси. Може да навреди на SEO ранкирането.",
      category: "SEO",
      letter: "D",
    },
    {
      term: "E-A-T (Expertise, Authoritativeness, Trustworthiness)",
      definition:
        "Критерии на Google за оценка на качеството на съдържанието: експертност, авторитетност и надеждност.",
      category: "SEO",
      letter: "E",
    },
    {
      term: "Encryption (Криптиране)",
      definition:
        "Процесът на преобразуване на данни в код, за да се предотврати неоторизиран достъп. Основен метод за защита на чувствителна информация.",
      category: "Киберсигурност",
      letter: "E",
    },
    {
      term: "Featured Snippet",
      definition:
        "Специален блок с информация, който се появява в горната част на резултатите от търсенето в Google, отговаряйки директно на въпроса на потребителя.",
      category: "SEO",
      letter: "F",
    },
    {
      term: "Firewall",
      definition:
        "Система за мрежова сигурност, която наблюдава и контролира входящия и изходящия мрежов трафик въз основа на предварително зададени правила за сигурност.",
      category: "Киберсигурност",
      letter: "F",
    },
    {
      term: "Google Algorithm",
      definition:
        "Сложна система, която Google използва за извличане на данни от индекса си и мигновено доставяне на най-добрите възможни резултати за дадена заявка.",
      category: "SEO",
      letter: "G",
    },
    {
      term: "Google Search Console",
      definition:
        "Безплатен инструмент на Google, който помага на уебмастърите да наблюдават и поддържат присъствието на своя сайт в резултатите от търсенето.",
      category: "SEO",
      letter: "G",
    },
    {
      term: "Hashing",
      definition:
        "Процес на преобразуване на данни с произволен размер в данни с фиксиран размер чрез hash функция. Използва се за проверка на интегритета на данните.",
      category: "Киберсигурност",
      letter: "H",
    },
    {
      term: "HTTPS (HyperText Transfer Protocol Secure)",
      definition:
        "Сигурна версия на HTTP протокола, която използва SSL/TLS криптиране за защита на данните, предавани между браузъра и сървъра.",
      category: "Киберсигурност",
      letter: "H",
    },
    {
      term: "Indexing",
      definition:
        "Процесът, при който търсачките съхраняват и организират информацията, намерена по време на crawling, за да могат да я извличат бързо при търсене.",
      category: "SEO",
      letter: "I",
    },
    {
      term: "Intrusion Detection System (IDS)",
      definition:
        "Система за откриване на нахлувания - инструмент за мониторинг на мрежовия трафик за подозрителни дейности и възможни заплахи за сигурността.",
      category: "Киберсигурност",
      letter: "I",
    },
    {
      term: "JavaScript",
      definition:
        "Програмен език, използван за създаване на интерактивни уеб страници. Важен за SEO, тъй като търсачките трябва да могат да го изпълняват.",
      category: "Технически",
      letter: "J",
    },
    {
      term: "Keyword Density",
      definition:
        "Процентът от думите на дадена страница, които представляват определена ключова дума или фраза. Важен фактор за SEO оптимизация.",
      category: "SEO",
      letter: "K",
    },
    {
      term: "Keyword Research",
      definition:
        "Процесът на намиране и анализиране на думи и фрази, които хората въвеждат в търсачките, за да се оптимизира съдържанието.",
      category: "SEO",
      letter: "K",
    },
    {
      term: "Link Building",
      definition:
        "SEO стратегия за получаване на хипервръзки от други уебсайтове към вашия. Важен фактор за подобряване на авторитета на домейна.",
      category: "SEO",
      letter: "L",
    },
    {
      term: "Long-tail Keywords",
      definition:
        "По-дълги и по-специфични ключови фрази, които обикновено имат по-малко търсения, но по-висoka конверсия и по-малка конкуренция.",
      category: "SEO",
      letter: "L",
    },
    {
      term: "Machine Learning",
      definition:
        "Клон на изкуствения интелект, който позволява на компютрите да учат и подобряват производителността си без да бъдат изрично програмирани.",
      category: "AI",
      letter: "M",
    },
    {
      term: "Malware",
      definition:
        "Злонамерен софтуер, създаден за да навреди, експлоатира или получи неоторизиран достъп до компютърни системи. Включва вируси, троянски коне, ransomware и др.",
      category: "Киберсигурност",
      letter: "M",
    },
    {
      term: "Meta Description",
      definition:
        "HTML атрибут, който предоставя кратко описание на съдържанието на уеб страницата. Показва се в резултатите от търсенето под заглавието.",
      category: "SEO",
      letter: "M",
    },
    {
      term: "Mobile-First Indexing",
      definition:
        "Подход на Google, при който мобилната версия на уебсайта се използва като основа за индексиране и ранкиране.",
      category: "SEO",
      letter: "M",
    },
    {
      term: "Natural Language Processing (NLP)",
      definition: "Област на изкуствения интелект, която се занимава с взаимодействието между компютри и човешки език.",
      category: "AI",
      letter: "N",
    },
    {
      term: "NoFollow Link",
      definition:
        "Хипервръзка с атрибут rel='nofollow', която казва на търсачките да не следват връзката и да не предават авторитет към свързаната страница.",
      category: "SEO",
      letter: "N",
    },
    {
      term: "On-Page SEO",
      definition:
        "Оптимизация на елементите на самата уеб страница (съдържание, HTML код, структура) за подобряване на позициите в търсачките.",
      category: "SEO",
      letter: "O",
    },
    {
      term: "Off-Page SEO",
      definition:
        "SEO дейности извън уебсайта, като изграждане на връзки, социални сигнали и други фактори, които влияят на авторитета на сайта.",
      category: "SEO",
      letter: "O",
    },
    {
      term: "Page Speed",
      definition:
        "Времето, необходимо за пълното зареждане на уеб страница. Важен фактор за SEO и потребителското изживяване.",
      category: "SEO",
      letter: "P",
    },
    {
      term: "Penetration Testing",
      definition:
        "Симулирана кибератака срещу компютърна система за оценка на нейната сигурност и откриване на уязвимости.",
      category: "Киберсигурност",
      letter: "P",
    },
    {
      term: "Phishing",
      definition:
        "Тип кибератака, при която престъпниците се представят за доверени организации, за да получат чувствителна информация като пароли или данни за кредитни карти.",
      category: "Киберсигурност",
      letter: "P",
    },
    {
      term: "Quality Score",
      definition:
        "Метрика, използвана от Google Ads за оценка на качеството и релевантността на ключовите думи и реклами.",
      category: "SEO",
      letter: "Q",
    },
    {
      term: "Ransomware",
      definition:
        "Тип злонамерен софтуер, който криптира файловете на жертвата и изисква откуп за тяхното възстановяване.",
      category: "Киберсигурност",
      letter: "R",
    },
    {
      term: "Responsive Design",
      definition:
        "Подход към уеб дизайна, който прави уеб страниците да се показват добре на различни устройства и размери на екрана.",
      category: "Технически",
      letter: "R",
    },
    {
      term: "Rich Snippets",
      definition:
        "Подобрени резултати от търсенето, които включват допълнителна информация като рейтинги, цени или изображения.",
      category: "SEO",
      letter: "R",
    },
    {
      term: "Schema Markup",
      definition:
        "Код (семантични речници), който помага на търсачките да разбират съдържанието на уебсайта и да показват по-богати резултати.",
      category: "SEO",
      letter: "S",
    },
    {
      term: "Search Engine Results Page (SERP)",
      definition:
        "Страницата, която търсачката показва в отговор на заявка на потребителя. Съдържа органични резултати, реклами и други функции.",
      category: "SEO",
      letter: "S",
    },
    {
      term: "Social Engineering",
      definition:
        "Психологическа манипулация на хора с цел извършване на действия или разкриване на поверителна информация.",
      category: "Киберсигурност",
      letter: "S",
    },
    {
      term: "SSL Certificate",
      definition:
        "Цифров сертификат, който удостоверява самоличността на уебсайт и позволява криптирана връзка между сървъра и браузъра.",
      category: "Киберсигурност",
      letter: "S",
    },
    {
      term: "Technical SEO",
      definition:
        "Оптимизация на техническите аспекти на уебсайта за подобряване на неговото crawling и indexing от търсачките.",
      category: "SEO",
      letter: "T",
    },
    {
      term: "Title Tag",
      definition:
        "HTML елемент, който определя заглавието на уеб страницата. Показва се в резултатите от търсенето и в таба на браузъра.",
      category: "SEO",
      letter: "T",
    },
    {
      term: "Two-Factor Authentication (2FA)",
      definition:
        "Метод за сигурност, който изисква два различни фактора за потвърждаване на самоличността на потребителя преди предоставяне на достъп.",
      category: "Киберсигурност",
      letter: "T",
    },
    {
      term: "URL Structure",
      definition:
        "Начинът, по който са организирани URL адресите на уебсайт. Добрата URL структура подобрява SEO и потребителското изживяване.",
      category: "SEO",
      letter: "U",
    },
    {
      term: "User Experience (UX)",
      definition:
        "Общото изживяване на потребителя при взаимодействие с уебсайт или приложение. Важен фактор за SEO и конверсиите.",
      category: "SEO",
      letter: "U",
    },
    {
      term: "Voice Search Optimization",
      definition:
        "Оптимизация на съдържанието за гласови търсения, които стават все по-популярни с развитието на AI асистентите.",
      category: "SEO",
      letter: "V",
    },
    {
      term: "Vulnerability",
      definition:
        "Слабост в система, която може да бъде експлоатирана от заплахи за получаване на неоторизиран достъп или извършване на неоторизирани действия.",
      category: "Киберсигурност",
      letter: "V",
    },
    {
      term: "Web Crawling",
      definition:
        "Автоматизиран процес на систематично преглеждане на уеб страници от софтуерни роботи (crawlers) за индексиране на съдържанието.",
      category: "SEO",
      letter: "W",
    },
    {
      term: "White Hat SEO",
      definition:
        "Етични SEO практики, които следват насоките на търсачките и се фокусират върху предоставянето на стойност за потребителите.",
      category: "SEO",
      letter: "W",
    },
    {
      term: "XML Sitemap",
      definition:
        "Файл, който изброява всички важни страници на уебсайт, за да помогне на търсачките да ги намерят и индексират по-ефективно.",
      category: "SEO",
      letter: "X",
    },
    {
      term: "Zero-Day Exploit",
      definition:
        "Кибератака, която използва неизвестна досега уязвимост в софтуер, преди разработчиците да са създали и разпространили поправка.",
      category: "Киберсигурност",
      letter: "Z",
    },
    {
      term: "Algorithm",
      definition:
        "Набор от правила или инструкции, които се използват за решаване на проблем или извършване на задача. В SEO контекста - как търсачките ранкират страници.",
      category: "SEO",
      letter: "A",
    },
    {
      term: "Analytics",
      definition:
        "Процесът на събиране, анализ и интерпретация на данни за да се разберат моделите и тенденциите. Важен за SEO и дигитален маркетинг.",
      category: "SEO",
      letter: "A",
    },
    {
      term: "Artificial Neural Network",
      definition:
        "Изчислителен модел, вдъхновен от биологичните невронни мрежи, който се използва в машинното обучение за решаване на сложни задачи.",
      category: "AI",
      letter: "A",
    },
    {
      term: "Backdoor",
      definition:
        "Скрит метод за обход на нормалната аутентификация или криптиране в компютърна система, който позволява на атакуващия да получи достъп.",
      category: "Киберсигурност",
      letter: "B",
    },
    {
      term: "Bandwidth",
      definition:
        "Максималното количество данни, които могат да бъдат предадени през мрежова връзка за определен период от време.",
      category: "Технически",
      letter: "B",
    },
    {
      term: "Big Data",
      definition:
        "Големи и сложни набори от данни, които изискват специални инструменти и методи за обработка и анализ.",
      category: "AI",
      letter: "B",
    },
    {
      term: "Cloud Computing",
      definition:
        "Доставяне на изчислителни услуги (сървъри, съхранение, бази данни, мрежа, софтуер) чрез интернет.",
      category: "Технически",
      letter: "C",
    },
    {
      term: "Conversion Rate",
      definition:
        "Процентът от посетителите на уебсайт, които извършват желаното действие (покупка, регистрация, изтегляне и др.).",
      category: "SEO",
      letter: "C",
    },
    {
      term: "Deep Learning",
      definition:
        "Подраздел на машинното обучение, който използва невронни мрежи с множество слоеве за моделиране на сложни модели.",
      category: "AI",
      letter: "D",
    },
    {
      term: "Digital Footprint",
      definition:
        "Цифровият отпечатък на активността на потребителя в интернет, включващ всички данни, които той оставя онлайн.",
      category: "Киберсигурност",
      letter: "D",
    },
    {
      term: "Edge Computing",
      definition:
        "Изчислителен парадигма, който приближава изчисленията и съхранението на данни до източника на данните.",
      category: "Технически",
      letter: "E",
    },
    {
      term: "Firewall",
      definition:
        "Система за мрежова сигурност, която наблюдава и контролира входящия и изходящия мрежов трафик въз основа на предварително зададени правила за сигурност.",
      category: "Киберсигурност",
      letter: "F",
    },
    {
      term: "GDPR (General Data Protection Regulation)",
      definition:
        "Европейски регламент за защита на личните данни, който регулира обработката на лични данни в ЕС.",
      category: "Киберсигурност",
      letter: "G",
    },
    {
      term: "Honeypot",
      definition:
        "Система за сигурност, която привлича и открива кибератаки чрез симулиране на уязвими системи.",
      category: "Киберсигурност",
      letter: "H",
    },
    {
      term: "Internet of Things (IoT)",
      definition:
        "Мрежа от физически устройства, които са свързани с интернет и могат да събират и обменят данни.",
      category: "Технически",
      letter: "I",
    },
    {
      term: "Jailbreaking",
      definition:
        "Процесът на премахване на ограниченията, наложени от производителя на устройство, за да се получи пълен достъп до системата.",
      category: "Киберсигурност",
      letter: "J",
    },
    {
      term: "Keylogger",
      definition:
        "Тип шпионски софтуер, който записва натисканията на клавишите на компютъра, за да открадне пароли и друга чувствителна информация.",
      category: "Киберсигурност",
      letter: "K",
    },
    {
      term: "Load Balancing",
      definition:
        "Техника за разпределяне на мрежовия трафик между множество сървъри за подобряване на производителността и надеждността.",
      category: "Технически",
      letter: "L",
    },
    {
      term: "Microservices",
      definition:
        "Архитектурен подход, при който приложението се разделя на малки, независими услуги, които комуникират помежду си.",
      category: "Технически",
      letter: "M",
    },
    {
      term: "Natural Language Generation (NLG)",
      definition:
        "Подраздел на NLP, който се занимава с автоматичното генериране на текст на човешки език от структурирани данни.",
      category: "AI",
      letter: "N",
    },
    {
      term: "Open Source",
      definition:
        "Софтуер, чийто изходен код е публично достъпен и може да бъде модифициран и разпространен от всеки.",
      category: "Технически",
      letter: "O",
    },
    {
      term: "Penetration Testing",
      definition:
        "Симулирана кибератака срещу компютърна система за оценка на нейната сигурност и откриване на уязвимости.",
      category: "Киберсигурност",
      letter: "P",
    },
    {
      term: "Quantum Computing",
      definition:
        "Тип изчисление, който използва квантови механични явления за обработка на данни по начини, които са недостъпни за класическите компютри.",
      category: "AI",
      letter: "Q",
    },
    {
      term: "Red Team",
      definition:
        "Група от експерти по сигурност, които симулират реални кибератаки за тестване на защитните системи на организация.",
      category: "Киберсигурност",
      letter: "R",
    },
    {
      term: "Sandboxing",
      definition:
        "Техника за сигурност, при която изпълнението на код се изолира в контролирана среда за предотвратяване на щети.",
      category: "Киберсигурност",
      letter: "S",
    },
    {
      term: "Tokenization",
      definition:
        "Процесът на заместване на чувствителни данни с нечувствителни еквиваленти (токени) за защита на информацията.",
      category: "Киберсигурност",
      letter: "T",
    },
    {
      term: "User Agent",
      definition:
        "Стринг, който идентифицира браузъра, операционната система и други детайли за устройството на потребителя.",
      category: "Технически",
      letter: "U",
    },
    {
      term: "Virtual Private Network (VPN)",
      definition:
        "Технология, която създава сигурна и криптирана връзка между устройството и интернет за защита на данните.",
      category: "Киберсигурност",
      letter: "V",
    },
    {
      term: "Web Scraping",
      definition:
        "Автоматизиран процес на извличане на данни от уебсайтове за анализ или съхранение в структуриран формат.",
      category: "Технически",
      letter: "W",
    },
    {
      term: "XSS (Cross-Site Scripting)",
      definition:
        "Тип уязвимост в уеб приложенията, която позволява на атакуващите да инжектират злонамерен скрипт в уеб страници.",
      category: "Киберсигурност",
      letter: "X",
    },
    {
      term: "YARA Rules",
      definition:
        "Отворен стандарт за идентифициране и класифициране на злонамерен софтуер, използван в киберсигурността.",
      category: "Киберсигурност",
      letter: "Y",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Речник на термините
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Речник на киберсигурността и SEO</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Пълен речник с обяснения на български език на най-важните термини в областта на киберсигурността и SEO
                оптимизацията
              </p>

            </div>
          </div>
        </section>

        {/* Interactive Glossary Search */}
        <GlossarySearch terms={glossaryTerms} />

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Не намирате термин?</h2>
              <p className="text-muted-foreground text-lg">
                Предложете нов термин за добавяне в нашия речник или поискайте обяснение
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Свържете се с нас</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
